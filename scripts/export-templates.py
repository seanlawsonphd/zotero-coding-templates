#!/usr/bin/env python3
"""Rewrite templates/*.yaml from the Better Notes templates stored in the local Zotero profile.

    python3 scripts/export-templates.py            # macOS; reads ~/Library/Application Support/Zotero/Profiles/*/prefs.js
    python3 scripts/export-templates.py /path/to/prefs.js

Run it on the computer where a template was edited in Tools > Template Editor, then commit.
Zotero may hold prefs.js until it quits; quit Zotero first if a recent edit is missing.
"""
import glob
import json
import os
import re
import sys

NAMES = [
    "[Item] Code Report",
    "[Item] Theme Document",
    "[Item] Theme Document BODY (do not use)",
    "[Text] Code Report (Collection)",
    "[Text] Code Report BODY (do not use)",
    "[Text] Theme Document (Collection)",
    "[Text] Theme Document BODY (do not use)",
]
HEADER = (
    "# Better Notes template share code. To install: copy this whole file's contents,\n"
    "# then in Zotero choose Tools -> New Template from Clipboard, and click OK.\n"
    "# Do not paste this into the Note Template Editor directly.\n"
)


def main(argv):
    prefs = argv[1] if len(argv) > 1 else (glob.glob(os.path.expanduser(
        "~/Library/Application Support/Zotero/Profiles/*/prefs.js")) or [None])[0]
    if not prefs or not os.path.exists(prefs):
        print("prefs.js not found; pass its path")
        return 1
    src = open(prefs, encoding="utf-8", errors="replace").read()
    outdir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "templates")
    os.makedirs(outdir, exist_ok=True)
    for name in NAMES:
        m = re.search(r'user_pref\("extensions\.zotero\.Knowledge4Zotero\.template\.'
                      + re.escape(name) + r'", (".*?")\);\n', src, re.S)
        if not m:
            print("missing in prefs:", name)
            continue
        # prefs.js holds a JS string literal; Better Notes stores the template text
        # JSON-encoded inside it, so decode twice
        content = json.loads(m.group(1))
        if isinstance(content, str) and content.startswith('"'):
            content = json.loads(content)
        if "\t" in content:
            print("warning: tab characters in", name, "(YAML block indentation uses spaces)")
        body = "\n".join("  " + line if line.strip() else "" for line in content.split("\n"))
        fname = re.sub(r"[^A-Za-z0-9]+", "-", name).strip("-") + ".yaml"
        with open(os.path.join(outdir, fname), "w", encoding="utf-8") as f:
            f.write(HEADER + f'name: "{name}"\ncontent: |-\n' + body + "\n")
        print("wrote", fname, f"({len(content)} chars)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
