# Coding and theming in Zotero: the Code Report and Theme Document templates

These templates turn Zotero into a simple qualitative-coding tool for COMM 5610 (IT & Global
Conflict, University of Utah). You read your sources in Zotero, highlight passages, and tag each
highlight with a **code**. The templates then build two kinds of notes for you:

- A **Code Report** gathers every coded passage from your sources, grouped by code, with a
  quotation, a citation that links back to the exact spot in the source, and any memo you wrote.
- A **Theme Document** gathers the passages for a chosen group of codes (a theme) and gives you a
  place to write your analysis of that theme.

Both notes can be **refreshed** after you do more coding, so you never rebuild them by hand.

## What is in this folder

| Template (as it appears in Zotero) | Use it for |
|---|---|
| `[Text] Code Report (Collection)` | A code report for **everything in one collection** (recommended) |
| `[Item] Code Report` | A code report for **items you have selected** in the middle pane |
| `[Text] Theme Document (Collection)` | A theme document built from **one collection** (recommended) |
| `[Item] Theme Document` | A theme document built from **selected items** |
| `[Text] Code Report BODY (do not use)` | Helper used by the Collection version. Install it, never run it |
| `[Text] Theme Document BODY (do not use)` | Helper used by the Collection version. Install it, never run it |

The `templates` folder holds one file per template. All six must be installed; the two "BODY"
helpers do the real work for the Collection versions and are called by name.

## Before you start

1. **Zotero 7 or later**: https://www.zotero.org/download/
2. **The Better Notes plugin**, which adds note templates to Zotero. Download the latest `.xpi`
   from https://github.com/windingwind/zotero-better-notes/releases, then in Zotero open
   **Tools → Plugins**, click the gear icon, choose **Install Plugin From File…**, and pick the file.
3. Your sources in Zotero, each with a PDF or a snapshot you can open in Zotero's reader.

## Install the templates (once per computer, about five minutes)

Templates live inside your own copy of Zotero; they are not shared through Zotero sync, so every
student does this once.

For **each of the six files** in the `templates` folder:

1. Open the file on GitHub and click **Raw** (top right of the file view), or open it in any text
   editor.
2. Select **all** of the text (Ctrl+A / Cmd+A) and copy it (Ctrl+C / Cmd+C). The lines starting with
   `#` at the top are part of the file; copying them is fine.
3. In Zotero, choose **Tools → New Template from Clipboard** and click **OK**.

To check: **Tools → Template Editor** lists every template you have installed. You should see all
six names from the table above.

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
  `fear appeal` count as two different codes in the Code Report.
- One highlight can carry several codes; add several tags.
- Image or area annotations have no text to quote. If you code one, also write a comment on it,
  or the report will list it as skipped.
- Put the sources for one project in one **collection**. The Collection templates work on whatever
  collection is highlighted in the left pane.

## Step 2: Build a Code Report

Use this after each round of coding to see all your codes, how often they occur, and every passage
behind them.

1. In the left pane, click the **collection** that holds your sources.
2. Click the **New Note** button above the item list (the note icon with a plus) and choose
   **New Standalone Note from Template**. (The same entry is in the **File** menu.)
3. Choose **[Text] Code Report (Collection)**.
4. Type a title for the note (it becomes the note's name in your library) and click **OK**.

The note opens with:

- **Sources processed**, **sources with coded extracts**, and the number of **distinct codes**.
- **Codebook at a glance**: a table of every code with how many extracts and sources it has.
- **Extracts by code**: each code as a heading, then each passage as a quotation with a citation
  such as *Smith (2024), The Guardian, p. 3*. The citation is a link; clicking it opens the source
  at that highlight. Memos appear as **Memo:** lines, and passages that carry other codes too are
  marked *Also coded:*.
- **Sources with no coded extracts**: items in the collection you have not coded yet.

If no collection is highlighted, the template asks you to type a collection name, or `*` to scan
your whole library.

**Selected items instead of a collection:** select the items in the middle pane, then use
**[Item] Code Report**. When Zotero asks for the data source, choose **Use selected items in
library**.

## Step 3: Build Theme Documents

Once the Code Report shows you your codes, group related codes into **themes**. Make one Theme
Document per theme.

1. Click the collection in the left pane.
2. **New Note → New Standalone Note from Template → [Text] Theme Document (Collection)**.
3. **Name the theme.** Use a short phrase that states its central organizing concept, not a
   one-word topic label. ("Outsiders as the hidden hand behind unrest", not "Outsiders".)
4. **List the codes** that belong to the theme, separated by commas, spelled exactly as you tagged
   them. The list does not have to be final (see "Regrouping" below).

The note contains a generated block followed by space for your writing:

- A warning that **everything in the block is regenerated when you refresh**, so your own writing
  must go **below** the block.
- **Codes in this theme:** the list you typed, and a count of codes, extracts, and sources.
- **Check these codes:** appears if a code you listed matched nothing. It shows the codes that
  actually exist in those sources, so you can spot a typo.
- **Codes gathered under this theme** and **Evidence**: every passage for each code, with
  citations and memos, like the Code Report.
- **Now write your analysis, below this block**, with two prompts:
  - **Central organizing concept.** Two or three sentences: what the theme is about, what holds
    these codes together, and what it tells you about the material you collected. If you can only
    describe it by walking through the codes one at a time, you have a topic summary, not a theme.
  - **Analytic notes.** How the codes relate; whether one does most of the work; which extracts sit
    awkwardly and belong elsewhere; which sources carry the theme and which do not.

**Regrouping.** To change which codes make up the theme, edit the **Codes in this theme:** line in
the note (or the **Theme:** heading) and refresh the note. The template reads those lines instead
of asking again.

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
| "Check these codes: …" in a Theme Document | A code in your list is spelled differently from the tag. Copy the exact spelling from the "codes actually present" list or from the Code Report, edit the **Codes in this theme:** line, and refresh |
| "N coded annotation(s) skipped" | Those are image or area annotations with no text and no memo. Add a comment to each one, then refresh |
| "No collection named … was found" | Click the collection in the left pane before running the template, or type its name exactly |
| The template is not listed in the picker | Install all six files (see "Install the templates"). The Collection templates fail silently if their BODY helper is missing |
| The note's title went blank after a refresh | Use the Collection versions; their title line is kept outside the refreshed block. The Item versions put everything inside it |
| "Preview mode does not scan the library" | You are in the Template Editor's preview. Run the template from **New Standalone Note from Template** instead |

Group libraries work the same way; the links inside the notes point into the group.

## For instructors and maintainers

- Better Notes stores templates in the Zotero profile's `prefs.js` under
  `extensions.zotero.Knowledge4Zotero.template.<name>`. They are per computer and never synced.
- Edit a template in **Tools → Template Editor** (select it, edit, **Save**). To share the edited
  version, run `python3 scripts/export-templates.py` on the computer where it was edited; it
  rewrites `templates/*.yaml` from the live preferences. Commit and push the result.
- The Collection templates call their helpers by exact name
  (`Zotero.BetterNotes.api.template.runTextTemplate("[Text] Code Report BODY (do not use)")`).
  Renaming a BODY template breaks the matching Collection template.
- The `// @use-refresh` pragma is what makes **Update content from templates** work; the Collection
  versions deliberately keep the `# Title` line outside the refreshable block so the note keeps its
  name.
- Better Notes' own template documentation:
  https://github.com/windingwind/zotero-better-notes/blob/master/docs/about-note-template.md
