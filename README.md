# Coding and theming in Zotero: templates for Better Notes

These templates turn Zotero into a simple qualitative-coding tool for class projects. You read
your sources in Zotero, highlight passages, and tag each highlight with a **code**. The templates
then build four kinds of notes for you:

- A **Code Overview** counts every code you have used: how many extracts and sources each has.
- A **Code Co-occurrence** table shows how often each pair of codes lands on the same passage.
- A **Code Report** gathers every passage for **one code**, with a quotation, a full reference, a
  link back to the exact spot in the source, and any memo you wrote.
- A **Theme Document** gathers the passages for a chosen group of codes (a theme) and gives you a
  place to write your analysis of that theme.

All four can be **refreshed** after you do more coding, so you never rebuild them by hand.

## What is in this folder

Each kind of note comes in two versions. Run the one that fits what you want to scan:

| To scan | Code Overview | Code Co-occurrence | Code Report | Theme Document |
|---|---|---|---|---|
| **One collection** (recommended) | `[Text] Code Overview (Collection)` | `[Text] Code Co-occurrence (Collection)` | `[Text] Code Report (Collection)` | `[Text] Theme Document (Collection)` |
| **Items you have selected** | `[Item] Code Overview` | `[Item] Code Co-occurrence` | `[Item] Code Report` | `[Item] Theme Document` |

Each of those eight has a helper whose name ends in **BODY (do not use)**. The helpers do the real
work and are called by name, so they must be installed, but you never run them yourself. That
makes **sixteen files** in the `templates` folder, and all sixteen must be installed.

## Before you start

1. **Zotero 7 or later**: https://www.zotero.org/download/
2. **The Better Notes plugin**, which adds note templates to Zotero. Download the latest `.xpi`
   from https://github.com/windingwind/zotero-better-notes/releases, then in Zotero open
   **Tools → Plugins**, click the gear icon, choose **Install Plugin From File…**, and pick the file.
3. Your sources in Zotero, each with a PDF or a snapshot you can open in Zotero's reader.

## Install the templates (once per computer, about five minutes)

Templates live inside your own copy of Zotero; they are not shared through Zotero sync, so every
student does this once.

For **each of the sixteen files** in the `templates` folder:

1. Open the file on GitHub and click **Raw** (top right of the file view), or open it in any text
   editor.
2. Select **all** of the text (Ctrl+A / Cmd+A) and copy it (Ctrl+C / Cmd+C). The lines starting with
   `#` at the top are part of the file; copying them is fine.
3. In Zotero, choose **Tools → New Template from Clipboard** and click **OK**.

To check: **Tools → Template Editor** lists every template you have installed. You should see all
sixteen names from the table above.

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
- **Scope.** A count of codes, extracts, and sources, what was scanned with the full reference of
  every source, and when the overview was generated.
- **Codebook at a glance.** A table of every code with how many extracts and sources it has.
  Check it for near-duplicates such as `Fear appeal` and `fear appeal`.
- **Sources with no coded extracts.** Sources in the collection you have not coded yet.
  (Collection version only.)

If no collection is highlighted, the template asks you to type a collection name, or `*` to scan
your whole library.

**Selected items instead of a collection:** select the items in the middle pane, then use
**[Item] Code Overview**. When Zotero asks for the data source, choose **Use selected items in
library**. This version shows Scope and the codebook table only.

## Step 3: See which codes co-occur

Use this to find codes that travel together, which often points to a theme, or to two codes that
are really one.

1. Click the collection in the left pane (or select items and use the **[Item]** version).
2. **New Note → New Standalone Note from Template → [Text] Code Co-occurrence (Collection)**.
3. Type a title and click **OK**.

The note contains:

- The red refresh warning and **Scope**, which also counts the extracts that carry more than one
  code.
- **Co-occurrence table.** Every code appears along the top and down the side. Each cell is the
  number of extracts (highlights) that carry **both** codes. The bold numbers on the diagonal are
  the total extracts for that code. A dot means the two codes never share an extract.
- **Pairs that co-occur.** The same information as a list, most frequent pair first. Easier to read
  than the table once you have many codes.

Co-occurrence is counted per highlight. Two codes on different highlights in the same source do
not count as co-occurring.

## Step 4: Build a Code Report for one code

Use this to read everything you coded with a single code, side by side.

1. Click the collection in the left pane (or select items and use the **[Item]** version).
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
- **Scope.** A count of codes, extracts, and sources, what was scanned, with the full reference of every source, and the **Codes in this theme:** line.
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
| `fear appeal AND NOT humor` | are tagged fear appeal and are not also tagged humor |
| `(fear appeal OR threat) AND NOT humor` | carry either of the first two and not humor |

- Write **AND**, **OR**, and **NOT** in capital letters. A lowercase "and" is read as part of a code
  name, so a code called `law and order` works as is.
- The expression is checked against the codes on **each extract** (each highlight), not the whole
  source.
- Each extract appears once, with its own codes listed beneath it.
- The theme **name** is only a title. Put the expression in the codes line, not in the name.
- If part of the line cannot be read, the note says so.
- Put a code in double quotes if its name contains a capitalized operator word or parentheses.

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
| The template is not listed in the picker | Install all sixteen files (see "Install the templates"). The Collection templates fail silently if their BODY helper is missing |
| A note made before the templates were updated will not refresh properly | The templates were restructured. Make a new note from the template |
| A Theme Document made before the templates were updated has no Theme Definition heading | Refreshing updates the generated block only. Type the two headings below the line yourself, or make a new Theme Document |
| The references are not in the style you need | The templates use APA. An instructor can change the style id near the top of the two Theme Document templates in **Tools → Template Editor** |
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

## License

The templates and this guide are by Sean Lawson and are released under the
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)
(CC BY 4.0). You may share and adapt them for any purpose, including commercially, as long as you
give appropriate credit. See [LICENSE](LICENSE) for the full text.
