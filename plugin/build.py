#!/usr/bin/env python3
"""Build the installer plugin: bundle ../templates/*.yaml into an .xpi.

    python3 plugin/build.py

Writes plugin/src/templates.json, plugin/build/coding-templates-<version>.xpi, and updates
../updates.json with the new version's download link and SHA-256. Needs only the standard library.
"""
import glob
import hashlib
import json
import os
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
REPO = "https://github.com/seanlawsonphd/zotero-coding-templates"
ADDON_ID = "coding-templates@seanlawsonphd"


def read_share_file(path):
    """Parse a template share file: comment lines, name: "...", then a content: |- block."""
    name, lines, in_content = None, [], False
    for line in open(path, encoding="utf-8").read().split("\n"):
        if in_content:
            lines.append(line[2:] if line.startswith("  ") else line)
        elif line.startswith("name: "):
            name = json.loads(line[len("name: "):])
        elif line.startswith("content: |-"):
            in_content = True
    while lines and lines[-1] == "":
        lines.pop()
    return name, "\n".join(lines)


def main():
    templates = dict(read_share_file(p) for p in sorted(glob.glob(os.path.join(ROOT, "templates", "*.yaml"))))
    assert templates and all(templates.values()), "no templates found"
    src = os.path.join(HERE, "src")
    with open(os.path.join(src, "templates.json"), "w", encoding="utf-8") as f:
        json.dump(templates, f, ensure_ascii=False, indent=0)
    manifest = json.load(open(os.path.join(src, "manifest.json"), encoding="utf-8"))
    version = manifest["version"]
    os.makedirs(os.path.join(HERE, "build"), exist_ok=True)
    xpi = os.path.join(HERE, "build", f"coding-templates-{version}.xpi")
    with zipfile.ZipFile(xpi, "w", zipfile.ZIP_DEFLATED) as z:
        for base, _dirs, files in os.walk(src):
            for name in sorted(files):
                if name.startswith("."):
                    continue
                full = os.path.join(base, name)
                info = zipfile.ZipInfo(os.path.relpath(full, src).replace(os.sep, "/"), (2026, 1, 1, 0, 0, 0))
                info.compress_type = zipfile.ZIP_DEFLATED
                z.writestr(info, open(full, "rb").read())
    digest = hashlib.sha256(open(xpi, "rb").read()).hexdigest()
    updates_path = os.path.join(ROOT, "updates.json")
    updates = json.load(open(updates_path)) if os.path.exists(updates_path) else {"addons": {ADDON_ID: {"updates": []}}}
    entries = [u for u in updates["addons"][ADDON_ID]["updates"] if u["version"] != version]
    entries.append({
        "version": version,
        "update_link": f"{REPO}/releases/download/v{version}/coding-templates-{version}.xpi",
        "update_hash": "sha256:" + digest,
        "applications": {"zotero": manifest["applications"]["zotero"] and {
            "strict_min_version": manifest["applications"]["zotero"]["strict_min_version"],
            "strict_max_version": manifest["applications"]["zotero"]["strict_max_version"]}},
    })
    updates["addons"][ADDON_ID]["updates"] = entries
    with open(updates_path, "w", encoding="utf-8") as f:
        f.write(json.dumps(updates, indent="\t") + "\n")
    print(f"{len(templates)} templates bundled")
    print("built", os.path.relpath(xpi, ROOT), "sha256:" + digest)


if __name__ == "__main__":
    main()
