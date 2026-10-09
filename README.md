# Coding and theming in Zotero: templates for Better Notes

These templates turn Zotero into a simple qualitative-coding tool for class projects. You read
your sources in Zotero, highlight passages, and tag each highlight with a **code**. The templates
then build notes that do the bookkeeping for you:

| Note | What it gives you | When to use it |
|---|---|---|
| **Code Overview** | Every code, with how many extracts and sources it has | After each round of coding |
| **Uncoded Highlights** | Highlights that have no code yet | Before you start analysing |
| **Codebook** | Every code with an example, plus a place to define each one | Once your codes settle |
| **Code Matrix** | How often each pair of codes lands on the same passage | When looking for codes that belong together |
| **Code by Source** | Which codes appear in which publications and sources | When comparing outlets or sources |
| **Code Report** | Every passage for **one code**, with full references | When reading one code closely |
| **Memo Report** | Every memo (comment) you wrote on a highlight | When reviewing your own thinking |
| **Analytic Memo** | A blank memo with headings, for longer reflections | Any time an idea needs more room |
| **Theme Document** | The passages for a group of codes, with space for your analysis | When building themes |
| **Theme Map** | All your themes and codes in one place, with gaps flagged | When reviewing your themes |

All of them except the Analytic Memo can be **refreshed** after you do more coding, so you never
rebuild them by hand.

## What is in this folder

Each note comes in two versions. In the template list, pick the one that fits what you want to scan:

- **`[Text] … (Collection)`** scans the collection highlighted in the left pane. Recommended.
- **`[Item] … (Selected items)`** scans the items you have selected in the middle pane.

The colored **Item** and **Text** labels in the list come from Better Notes and can be ignored.
Go by the name: it ends in **(Collection)** or **(Selected items)**.

Every template also has a helper named **Helper for … (do not use)**. The helpers do the real
work and are called by name, so they must be installed, but you never run them yourself. They sit
together at the bottom of the template list. With nine reports, two versions each, a helper for
each, and the Analytic Memo, the `templates` folder
holds **37 files**. The installer plugin adds them all at once.

## Before you start

You need three things, all free. Everything below works the same on Windows and Mac.

1. **Zotero 7 or later**: https://www.zotero.org/download/
2. **The Better Notes plugin**, which adds note templates to Zotero.
3. Your sources in Zotero, each with a PDF or a snapshot you can open in Zotero's reader.

## Install (once per computer, about five minutes)

You will install two small plugin files. A plugin file ends in **.xpi**.

### 1. Download the two files

- **Better Notes:** go to https://github.com/windingwind/zotero-better-notes/releases and, under
  the newest release, click the file ending in `.xpi`.
- **Coding Templates:** go to the [Releases page of this repository](../../releases/latest) and
  click **coding-templates-…​.xpi**.

Both land in your **Downloads** folder. If your browser asks what to do with the file, choose
**Save**. (Firefox may try to install it into Firefox itself: right-click the link and choose
**Save Link As…** instead.)

### 2. Add them to Zotero

1. Open Zotero.
2. In the menu bar, choose **Tools → Plugins**.
3. Click the **gear icon** at the top right of the Plugins window and choose
   **Install Plugin From File…**.
4. Pick the Better Notes `.xpi` from your Downloads folder.
5. Repeat steps 3 and 4 for the Coding Templates `.xpi`.

A small message at the bottom corner of the screen says **Coding templates installed (37)**.
That is all. You do not need to restart Zotero.

### 3. Check that it worked

Click the **New Note** button above the item list (the note icon with a plus) and choose
**New Standalone Note from Template**. The list should include Code Overview, Codebook, Code Matrix,
Code Report, Theme Document, and the others in the table above.

### Good to know

- **Updates are automatic.** When the templates are improved, Zotero updates the plugin and the new
  templates replace the old ones.
- **Order does not matter.** If you add Coding Templates before Better Notes, the templates are
  installed the next time you start Zotero.
- **To put the templates back** after changing or deleting one, choose
  **Tools → Reinstall Coding Templates**.
- **Templates you made yourself are not touched.**
- Templates are stored on each computer, not in your Zotero account. Install the plugin on every
  computer you use.

<details>
<summary>Installing by hand instead (not needed if you used the plugin)</summary>

For each of the 37 files in the `templates` folder: open the file, select all of its text,
copy it, then in Zotero choose **Tools → New Template from Clipboard** and click **OK**.

</details>

## Step 1: Code your sources

1. Double-click a source to open it in Zotero's reader (PDF or snapshot).
2. Select a passage and click the **highlight** tool.
3. In the **annotations sidebar** (left side of the reader), find the new highlight and add a
   **tag** to it. **The tag is the code.** A highlight with no tag is just a highlight; the
   templates ignore it.
4. Optional: type a **comment** on the highlight. The templates treat comments as **memos** and
   print them under the quotation.

Tips that save trouble later:

- Spell each code the same way every time, including capitalization. `Fear appeal` and
  `fear appeal` count as two different codes in the Code Overview.
- One highlight can carry several codes; add several tags.
- Image or area annotations have no text to quote. If you code one, also write a comment on it,
  or the report will list it as skipped.
- Put the sources for one project in one **collection**. The Collection templates work on whatever
  collection is highlighted in the left pane.

## Step 2: Build a Code Overview

Use this after each round of coding to see all your codes and how often they occur.

1. In the left pane, click the **collection** that holds your sources.
2. Click the **New Note** button above the item list (the note icon with a plus) and choose
   **New Standalone Note from Template**. (The same entry is in the **File** menu.)
3. Choose **[Text] Code Overview (Collection)**.
4. Type a title for the note (it becomes the note's name in your library) and click **OK**.

The note contains:

- A **warning in red** that everything down to the line at the bottom is regenerated on refresh.
- **Scope.** A count of codes, extracts, and sources, what was scanned, and when the overview was generated.
- **Codebook at a glance.** A table of every code with how many extracts and sources it has.
  Check it for near-duplicates such as `Fear appeal` and `fear appeal`.
- **Sources with no coded extracts.** Sources in the collection you have not coded yet.
  (Collection version only.)

If no collection is highlighted, the template asks you to type a collection name, or `*` to scan
your whole library.

**Selected items instead of a collection:** select the items in the middle pane, then use
**[Item] Code Overview (Selected items)**. When Zotero asks for the data source, choose **Use selected items in
library**. This version shows Scope and the codebook table only.

## Step 3: See which codes co-occur

Use this to find codes that travel together, which often points to a theme, or to two codes that
are really one.

1. Click the collection in the left pane (or select items and use the **(Selected items)** version).
2. **New Note → New Standalone Note from Template → [Text] Code Matrix (Collection)**.
3. Type a title and click **OK**.

The note contains:

- The red refresh warning and **Scope**, which also counts the extracts that carry more than one
  code.
- **Code matrix.** Every code appears along the top and down the side. Each cell is the number of
  extracts (highlights) that carry **both** codes. A dash marks where a code meets itself, and 0
  means the two codes never share an extract.
- **Pairs that co-occur.** The same information as a list, most frequent pair first. Easier to read
  than the table once you have many codes.

Co-occurrence is counted per highlight. Two codes on different highlights in the same source do
not count as co-occurring.

## Step 4: Build a Code Report for one code

Use this to read everything you coded with a single code, side by side.

1. Click the collection in the left pane (or select items and use the **(Selected items)** version).
2. **New Note → New Standalone Note from Template → [Text] Code Report (Collection)**.
3. Type the **code**, spelled exactly as you tagged it. The note is named "Code Report: " followed
   by the code.

The note contains:

- The red refresh warning.
- **Scope.** A count of extracts and sources, what was scanned, and the **Code:** line.
- **Check this code** appears if nothing matched. It lists the codes that actually exist in what
  was scanned, so you can spot a typo.
- **Evidence.** Each passage as a quotation with its **full reference** (APA style), an
  **[Open highlight]** link back to the exact spot in the source, and any memo. Passages that
  carry other codes too are marked *Also coded:*.
- **Analytical Notes.** Instructions, then a line. Everything **after that line is yours** and is
  never touched by a refresh. It starts with an **Insights & Observations** heading.

To switch the report to a different code, edit the **Code:** line and refresh. The note's title
does not change by itself, so retype it if you switch codes.

## Step 5: Build Theme Documents

Once the Code Overview shows you your codes, group related codes into **themes**. Make one Theme
Document per theme.

1. Click the collection in the left pane.
2. **New Note → New Standalone Note from Template → [Text] Theme Document (Collection)**.
3. **Name the theme.** Use a short phrase that states its central organizing concept, not a
   one-word topic label. ("Outsiders as the hidden hand behind unrest", not "Outsiders".)
4. **List the codes** that belong to the theme, separated by commas, spelled exactly as you tagged
   them. The list does not have to be final (see "Regrouping" below).

The note has a generated block followed by space for your writing:

- A **warning in red** that everything down to the line under Analytical Notes is regenerated on
  refresh.
- **Scope.** A count of codes, extracts, and sources, what was scanned, and the **Codes in this theme:** line.
- **Check these codes:** appears if a code you listed matched nothing. It shows the codes that
  actually exist in those sources, so you can spot a typo.
- **Evidence.** One list of passages, each shown once: the quotation, its **full reference** (APA
  style), an **[Open highlight]** link back to the exact spot in the source, any memo, and the
  **codes** on that passage.
- **Analytical Notes.** Instructions, then a line. Everything **after that line is yours** and is
  never touched by a refresh. It starts with two headings to fill in:
  - **Theme Definition.** Two or three sentences on what this theme is about and what holds these
    codes together as a coherent theme.
  - **Insights & Observations.** Anything else that will help when you write your final report.

**Changing the codes.** The evidence follows the order of the codes in the **Codes in this theme:**
line. To reorder it, reorder that line. To add a code to the theme, add it to that line (to drop
one, delete it). Then refresh the note. The template reads that line instead of asking again.

**Combining codes with AND, OR, and NOT.** The codes prompt, and the **Codes in this theme:** line,
accept more than a plain list. Type an expression there (and refresh, if the note already exists):

| Codes in this theme | Shows extracts that |
|---|---|
| `fear appeal, threat` | carry either code (a comma means "or") |
| `fear appeal AND threat` | carry both codes on the same highlight |
| `fear appeal + threat` | the same as AND: a plus sign with a space on each side |
| `fear appeal AND NOT humor` | are tagged fear appeal and are not also tagged humor |
| `(fear appeal OR threat) AND NOT humor` | carry either of the first two and not humor |

- Write **AND**, **OR**, and **NOT** in capital letters. A lowercase "and" is read as part of a code
  name, so a code called `law and order` works as is.
- The expression is checked against the codes on **each extract** (each highlight), not the whole
  source.
- Each extract appears once, with its own codes listed beneath it.
- A pair copied from the **Pairs that co-occur** list in a Code Matrix, such as
  `reject monopoly + rejecting restrictions`, can be pasted straight into the codes prompt.
- The theme **name** is only a title. Put the expression in the codes line, not in the name.
- If part of the line cannot be read, the note says so.
- Put a code in double quotes if its name contains a capitalized operator word or parentheses.

**What "Scanned" shows.** Collection versions name the collection and the number of sources in
it. Selected-items versions list the full reference of each item.

## More reports

Each of these is made the same way as the others: click the collection (or select items), then
**New Note → New Standalone Note from Template**, and pick the template. All use the same layout:
a red refresh warning, **Scope**, the report itself, and, where it helps, **Analytical Notes** with
a line you write below.

### Uncoded Highlights

Lists every highlight that has no code, with its reference and an **[Open highlight]** link. Use
it as a checklist: open each one, add a code or delete the highlight, then refresh until the list
is empty.

### Codebook

A table of every code with its number of extracts and sources and one example passage. Below the
line, under **Code definitions**, each code gets its own heading with three prompts:
**Definition**, **Use it when**, and **Do not use it when**. Fill these in.

The definitions are yours and are never overwritten. When you add or rename codes, refresh the
note. It will tell you which codes have no definition yet, and which definitions no longer match a
code. To add a definition for a new code, type the code's name on its own line under Code
definitions and give that line the **Heading 3** style, spelled exactly like the code.

### Code by Source

Two tables. **Codes by publication** has a column for each publication (RT, TASS, and so on) and
shows how many extracts carry each code there. **Codes by source** has a row for each source. Use
them to see whether a code is concentrated in one outlet or spread across all of them.
Publications come from each item's Publication field, so make sure that field is filled in.

### Memo Report

Gathers every comment you wrote on a highlight, with the passage, its reference, and its codes.
It includes memos on highlights that have no code yet, since early ideas often come before a code
does. To write a memo, open a source, click a highlight in the annotations sidebar, and type in
its comment box.

### Analytic Memo

**[Text] Analytic Memo** makes a blank, dated note with four headings: *What I noticed*, *What it
might mean*, *Evidence*, and *What to check next*. It does not scan anything and is never
regenerated, so write anywhere in it. Use it for ideas that need more room than a comment on a
highlight.

### Theme Map

Reads every Theme Document in the collection and shows, in one place: each theme with its codes
and how many extracts it gathers; each code with the themes it belongs to; and a **Check these**
list of codes in no theme, codes in several themes, codes a theme names that do not exist, and how
many coded extracts no theme covers. Keep your Theme Documents in the same collection as your
sources so the map can find them. For the selected-items version, select the theme notes together
with their sources.

## Refreshing a note after more coding

Open the note, click the **⋯ (More Options)** button in the note editor's toolbar, and choose
**Update content from templates**. The generated block is rebuilt from your current highlights;
the note's title and anything you wrote below the block stay as they are.

## Turning in your work

Open the note, click **⋯ (More Options)**, and choose **Export Current Note…**. Better Notes can
save it as Word, PDF, or Markdown. Links back to Zotero sources only work on the computer that
holds the library, so the quotations and citations in the exported file are what your reader sees.

## If something goes wrong

| What you see | What to do |
|---|---|
| "No tagged highlights were found in these sources" | Your highlights have no tags. In the reader's annotation sidebar, add a tag to each highlight you want counted. Tags on the *item* do not count; tags on the *highlight* do |
| "Check these codes: …" in a Theme Document | A code in your list is spelled differently from the tag. Copy the exact spelling from the "codes actually present" list or from the Code Overview, edit the **Codes in this theme:** line, and refresh |
| "N coded annotation(s) skipped" | Those are image or area annotations with no text and no memo. Add a comment to each one, then refresh |
| "No collection named … was found" | Click the collection in the left pane before running the template, or type its name exactly |
| A template is not listed in the picker | Choose **Tools → Reinstall Coding Templates**. If that menu entry is missing, the Coding Templates plugin is not installed (see "Install") |
| "Better Notes was not found" | Install the Better Notes plugin, then restart Zotero |
| A note made with an older version of the templates will not refresh | The helpers were renamed in version 1.2.0. Make a new note from the template and copy your own writing across |
| A Theme Document made before the templates were updated has no Theme Definition heading | Refreshing updates the generated block only. Type the two headings below the line yourself, or make a new Theme Document |
| The references are not in the style you need | The templates use APA. An instructor can change the style id near the top of the two Theme Document templates in **Tools → Template Editor** |
| "Preview mode does not scan the library" | You are in the Template Editor's preview. Run the template from **New Standalone Note from Template** instead |

Group libraries work the same way; the links inside the notes point into the group.

## For instructors and maintainers

- Better Notes stores templates in the Zotero profile's `prefs.js` under
  `extensions.zotero.Knowledge4Zotero.template.<name>`. They are per computer and never synced.
- **Releasing a template change to students:** edit the template in **Tools → Template Editor**,
  run `python3 scripts/export-templates.py` (rewrites `templates/*.yaml` from the live
  preferences), raise `version` in `plugin/src/manifest.json`, run `python3 plugin/build.py`
  (bundles the templates into the plugin and records the new version in `updates.json`), commit
  and push, then run `gh release create v<version> plugin/build/coding-templates-<version>.xpi`.
  Installed copies update themselves and reinstall the templates.
- The plugin overwrites the bundled templates when its version changes or one is missing.
  It never touches templates with other names. Renamed or retired templates go in the `OBSOLETE`
  list in `plugin/src/coding-templates.js` so they are removed from students' computers.
- Edit a template in **Tools → Template Editor** (select it, edit, **Save**). To share the edited
  version, run `python3 scripts/export-templates.py` on the computer where it was edited; it
  rewrites `templates/*.yaml` from the live preferences. Commit and push the result.
- The Collection templates call their helpers by exact name
  (`Zotero.BetterNotes.api.template.runTextTemplate("[text] Helper for Code Report (do not use)")`).
  Renaming a helper breaks the template that calls it. Helper names start with a lowercase `[text]` or `[item]` on purpose: Better Notes sorts the list by name, and lowercase sorts after the capitalized `[Text]` and `[Item]`, which keeps the helpers at the bottom.
- The `// @use-refresh` pragma is what makes **Update content from templates** work; the Collection
  versions deliberately keep the `# Title` line outside the refreshable block so the note keeps its
  name.
- Better Notes' own template documentation:
  https://github.com/windingwind/zotero-better-notes/blob/master/docs/about-note-template.md

## License

The templates and this guide are by Sean Lawson and are released under the
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)
(CC BY 4.0). You may share and adapt them for any purpose, including commercially, as long as you
give appropriate credit. See [LICENSE](LICENSE) for the full text.
