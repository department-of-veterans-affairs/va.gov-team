# Formatting and organization

- [Dates and times](#dates-and-times)
- [Figures and other images](#figures-and-other-images)
- [File names, file types, repos](#file-names-and-file-types)
- [Page titles and headings](#page-titles-and-headings)
- [Lists](#lists)
- [Notes, cautions, and warnings](#notes-cautions-and-warnings)
- [Numbers](#numbers)
- [Procedures](#procedures)
- [Slack channels](#slack-channels)
- [Tables](#tables)
- [Text formatting](#text-formatting)

## Dates and times

**Key point:** Express months as words and use the format _day-of-week_, _month_ _day_, _year_ (example: Wednesday, January 31, 2020). Express time with a 12-hour clock, lowercase a.m. and p.m., and always include the timezone for real times.

**Exceptions:**

- Use 9/11 when it’s part of a program name such as the Post-9/11 GI Bill.
- Abbreviate days and months when space is very limited, such as in callout boxes, alerts, or promo components, etc. For example, in application form fields, we often use the construction: mm/dd/yyyy 
- Spell out noon and midnight. Don’t use 12:00 p.m. or 12:00 a.m.

## Figures and other images

**Key points:** Provide alt text if appropriate; use your site's standard image styling; provide high-resolution images when practical; don't repeat images on the same page unless necessary.

Use images only when they provide useful visual explanations of information that is otherwise difficult to express with words, or for screenshots of UIs that are important to the discussion.

### Creating and saving images

- To create a diagram, use any drawing tool.
- Don't use images of text, code samples, or terminal output. Use actual text.
- Prefer SVG files because SVGs stay sharp when you zoom in on the image. If you don't have an SVG file, then save your image as a PNG file unless you have a good reason to use a different format.
- Make your screenshots of windows look like real windows. For example, include the window's title bar in the screenshot. And if a given window has a drop shadow, then include the drop shadow in the screenshot as well.
- Don't include personally identifying information (PII) in screenshots. If a source screenshot includes PII, hide it with a solid-color overlay with 100% opacity. Don't rely on blurs, mosaic effects, or similar image-processing effects to obscure PII; such effects can be reversed to reveal the original information.
- If you're exporting an image to a format that can include information on separate layers (for example, PDF or TIFF), flatten the image on export.

## File names and file types

Observe the following guidelines when naming files and referencing file types.

### Naming guidelines

**Key point:** Use all-lowercase, and separate words with hyphens.

Make file and directory names lowercase. In general, separate words with hyphens, not underscores. Use only standard ASCII alphanumeric characters in file and directory names.

### Exceptions for consistency

If you're adding to a directory where everything else already uses underscores, and it's not feasible to change everything to hyphens, it's okay to use underscores to stay consistent.

For example, if the directory already has `lesson_1.jd`, `lesson_2.jd`, and `lesson_3.jd`, it's okay to add your new file as `lesson_4.jd` instead of `lesson-4.jd`. However, in all other situations, use hyphens.

| Recommended    | Sometimes OK      | Not recommended   |
| :------------- | :---------------- | :---------------- |
|  `avoiding-cliches.jd` | `avoiding_cliches.jd` | `avoidingcliches.jd`, `avoidingCliches.jd`, `avoiding-clichés.jd` |

### Referring to file types

**Key point:** Use the formal file type name, not the filename extension.
When you're discussing a file type, use the formal name of the type. (The file type name is often in all caps, because many file type names are acronyms or initialisms.) Do not use the filename extension to refer generically to the file type.

| Recommended     | Not recommended   |
| :-------------  | :---------------- |
|  a PNG file     | a .png file        |
|  a Bash file    | an .sh file       |

### Refering to repos
When you're referencing a particular repo within the Department of Veteran Affairs GitHub organization, format the repo name as code font.

| Recommended     | Not recommended   |
| :-------------  | :---------------- |
|  `va.gov-team`    | va.gov-team       |

## Page titles and headings

**Key point:** Page titles should clearly communicate the purpose of the document. Headings should make the content easy to scan.

### Page titles

Page titles have a few important functions:
- To clearly and quickly tell people the main purpose of the page — what they can do or what information they can get on that page.
- To [optimize the page for search](https://design.va.gov/content-style-guide/seo), so the information is findable through Google and other search engines.

Try to keep page titles to 52 characters maximum, with spaces. Use the primary SEO keyword in the page title. 

### Headings and subheadings

Headings and subheadings within a document should give a scannable overview of the page content. They should provide clear guideposts and bring people deeper into the content. If you can remove all the content from your page except for the title and headings and the purpose and intent of the document is still clear, that’s a good sign that your content is organized well.

- Use headings and subheadings (`<h2>`,`<h2>`, etc.) to provide a natural hierarchy for your content and help SEO.
- Use words in headings that communicate the main point of the content it describes.
- Keep headings to 70 characters maximum, with spaces. Sections become hard to scan when they’re too long. Eliminate unnecessary details or nuance in headings and address them with more depth in the paragraph copy.

For more information about structuring sections using H2s and H3s, see [How to use headings on your site](https://yoast.com/how-to-use-headings-on-your-site/) on Yoast.com.

### Formatting page titles and headings

- Use sentence case for titles and headings.
- Tag headings using heading elements.
- When using an abbreviation in a heading or title, spell out the abbreviation in the first paragraph that follows the heading or title.
- Don't use code font even for elements that use code font in paragraph text.
- Don't use empty headings or headings with no associated content.
- Use a heading hierarchy with the page title or main content heading as an `<h1>`. Don't skip levels of the heading hierarchy. For example, put an `<h2>` only under an `<h2>`.

| Recommended    | Not recommended   |
| :------------- | :---------------- |
| ## Migrating form data<br><br>Migration is not just a single step. The following sections describe the recommended steps.<br><br>### Designing the migration | ## Migrating form data<br><br>### Designing the migration |
| # Transferring data sets<br><br>This article provides a high-level overview of ways to transfer your data to GCP.<br><br>## Estimating costs | # Transferring data sets<br><br>This article provides a high-level overview of ways to transfer your data to GCP.<br><br>### Estimating costs |

## Lists

**Key point:** Use numbered lists for sequences, bulleted lists in most other contexts, and description lists for pairs of related pieces of data.

Lists are a great way to present complex text in a way that's easy to scan.

Lists work best when they have two to seven items. Each item should be fairly short—the reader should be able to see at least two, and preferably three, list items at a glance. It’s OK to have a couple of short paragraphs in a list item, but don’t exceed that length too often.
Make items in a list parallel. For example, each item should be a noun or a phrase that starts with a verb.

Don't use a list to show only one item; a single item isn't really a list. If you want to set a single item off from surrounding text, then use some other formatting.

### Bulleted lists

Use a bulleted list for things that have something in common but don’t need to appear in a particular order.

**Example:**

The database owner can complete the following tasks:
- Create and delete a database
- Add, delete, or modify a document
- Add, delete, or modify any information in the database

### Numbered lists

Use a numbered list for sequential items (like a procedure) or prioritized items (like a top 10 list).

**Example:**

To sign on to a database, do the following:
1. On the **File** menu, select **Open database**.
2. In **Username**, enter your name.
3. In **Password**, enter your password, and then select **OK**.

### Capitalization

Begin each item in a list with a capital letter unless there's a reason not to (for example, it’s a command that's always lowercase). If necessary, rewrite the list item so that all items begin with capital letters or all items begin with lowercase words.

### Punctuation

In bulleted and numbered lists, end each list item with a period if any item by itself is a complete sentence.

### Introductory text

Make sure the purpose of the list is clear. Introduce the list with a heading, a complete sentence, or a fragment that ends with a colon.

In most cases, you should precede a list with an introductory sentence. The sentence can end with a colon or a period; usually a colon if it immediately precedes the list, usually a period if there's more material (such as a note paragraph) between the introduction and the list. Always introduce a list with a complete sentence, not a partial one that's completed by the list items.

If you introduce a list with a heading, don’t use explanatory text after the heading. Also, don’t use a colon or period after the heading.

| Recommended    | Not recommended   |
| :------------- | :---------------- |
| Use the **Submit** button for any of the following purposes:<br>- To submit the form<br>- To indicate that you're done<br>- To allow the next person to enter their data | Use the **Submit** button to:<br>- Submit the form.<br>- Indicate that you're done.<br>- Allow the next person to enter their data. |

**Exception:** Don’t use periods if all items have three or fewer words or if the items are UI labels, headings, subheadings, or strings.

Don’t use semicolons, commas, or conjunctions (like and or or) at the end of list items.

| Recommended    | Also recommended   |
| :------------- | :---------------- |
| The form supports the following UI elements:<br>- Text box<br>- Bulleted list<br>- Button | You can do any of the following by using the API:<br>- Create an item.<br>- Replace one item with another.<br>- Update an item.<br>- Delete an item. |

## Notes, cautions, and warnings

To give the reader important or useful information that isn't part of the flow of the text, use one of the following notice types:

**Note:** An ordinary note or tip.

**Caution:** Suggests proceeding with caution.

**Warning:** Stronger than a Caution; it means "Don't do this."

Where possible, avoid grouping two or more notices together. If you find it necessary to do so (for example, a note with a caution inside it, or several warnings one after another), consider re-organizing the content.

## Numbers
**Key points:** Use numerals or figures for all numbers, including 1 to 10.

We differ from AP Style on numbers in order to meet the needs of users on the web and on mobile.

### Use numerals

We use numerals or figures for all numbers, including 1 to 10. It’s easier on the web and on mobile for scanning, and helpful to low-literacy readers and people whose first language isn’t English.

### Exceptions

- Spell out “one” when it’s used by itself in a sentence, or in expressions like one-to-one, one-on-one, and one-time.
- Spell out ordinals up to tenth (first, second, third, etc.). Then use the style: 11th, 12th, etc.
- When used as part of a series or a range, always default to numerals.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| You must meet at least one of these eligibility requirements. | You must meet at least 1 of these eligibility requirements. |
| Get help completing your application, including one-on-one consultation. | Get help completing your application, including 1-on-1 consultation. |
| Choose from 1 of 5 VA-backed loan options. | Choose from one of 5 VA-backed loan options. |

### Percentages

Use numerals and % symbol, with no space between the number and %. This style follows the practice for scientific and technical writing, and differs from 18F. 

We use this approach because it’s easier to scan, and we have a lot of content discussing disability ratings. Disability ratings fall into the scientific and technical category of writing.

## Procedures

**Key point:** A procedure is a sequence of numbered steps for accomplishing a task.

### Introductory sentences

In most cases, introduce a procedure with an introductory sentence. This introductory sentence should provide additional context to the reader. If no context is needed, you can skip the introductory sentence.

The sentence can end with a colon or a period. Use a colon if it immediately precedes the procedure. Use a period if there's more material (such as a note paragraph) between the introduction and the procedure.

Don't introduce a procedure with a partial sentence that's completed by the numbered steps.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| To customize the buttons, follow these steps: | To customize the buttons: |

### Single-step procedures

When a procedure consists of just one step, fold the step into the introductory sentence.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| To clear (flush) the entire log, select **Clear logcat**. | To clear (flush) the entire log, follow this step:<br>1. Select **Clear logcat**. |

### Sub-steps in numbered procedures

In a numbered procedure, sub-steps are labeled with lowercase Roman numerals, and sub-sub-steps get lowercase letters.

When a step has sub-steps, put a colon or a period at the end of the step, as appropriate.

**Example:**

1. First, do foo, as follows:
    1. Do the first part of foo.
    1. Do the second part of foo. There is no third part.
        1. Do the first sub-part of foo part two.
        1. Do the second sub-part of foo part two.
1. Next, do bar.

### Multi-action procedures

In general, use one step per action. However, you can combine small actions into one step, using arrow notation (>) for sequential menu selections.

**Example:**

1. Select **Next > Finish**.

1. Select **File > New > Document**.

Don't make the steps too long. If they feel too long, consider splitting them into multiple steps.

### Multiple procedures for the same task

In general, if there is more than one way to complete a task, pick one procedure to document. If all of the procedures need to be documented, use separate headings or pages or tabs to separate the procedures to make it clear to the reader that this is an alternative way to complete the same task.

The following guidelines can help you choose which procedure to document:
- Choose a procedure that lets readers do all the steps using only a keyboard.
- Choose the shortest procedure.
- Choose a procedure that uses a programming language that the majority of your audience is familiar with.

### Repetitive procedures

Use concise procedures to avoid repetitiveness and overwhelming the user with too much bolding of UI elements.

| Recommended    | Not recommended |
| :------------- | :------------- |
| 1. Select **Enter**.<br>2. In the **New File** dialog that appears, select **Next**. | 1. Select **Enter**. The **New File** dialog appears.<br>2. In the **New File** dialog, select **Next**. |

Avoid repeating procedures. Instead, reference those procedures and link to them.

| Recommended     |
| :------------- |
| Create a user as you did in the previous step. |
| [Create a user as you did in the previous step.](#procedures/#repetitive-procedures) |

### More guidelines for writing procedures

- If the user must press **Enter** after a step, then include that instruction as part of the step. 

| Recommended    | Not recommended |
| :------------- | :------------- |
| Select the search box in the top-right corner, then type custom function and press **Enter**. | 1. Select the search box in the top-right corner and type custom function.<br>2. Press **Enter**. |

- State the purpose of the action before stating the action.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| To start a new document, select **File > New > Document**. | Select **File > New > Document** to start a new document. |

- State the location of the action before stating the action. If there are multiple headings associated with a set of procedures, restate the location of the action in the first step of each procedure, even if the location is the same as in the previous procedure.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| In Google Docs, select **File > New > Document**. | 1. Select **File > New > Document** in Google Docs.<br>2. To open a document, please select **File > Open**. |

- Don't use "please."

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| To open a document, select **File > Open**. | To open a document, please select **File > Open**. |

- For an optional step, type "Optional:" as the first word of the step.

| Recommended     |
| :------------- |
| Optional: Type an arbitrary string, to be delivered to the target address with each notification delivered over this channel. |

- Use complete sentences.
- Use parallel structure.
- When there's more than one way to do something, give only the best way. Giving alternate ways can confuse users.
- Don't use directional language to orient the reader, such as above, below, or right-hand side. This type of language doesn't work well for accessibility or for localization. If a UI element is hard to find, provide a screenshot.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| Select **Menu** menu. | In the left-side panel, select the button with three lines. |

## Slack channels

**Key points:** Reference Slack channels with #slack-channel-name and link to the channel. There is no need to emphasize the channel name using italics, bold, or code font. Do not reference specific individuals to contact.

| Recommended     | Not recommended    |
| :------------- | :---------------- |
| Contact the [#vfs-platform-support](http://dsva.slack.com/channels/vfs-platform-support) channel for additional help. | Contact @Bob in the _#vfs-platform-support_ channel for additional help. |
| | Contact Bob in the **#vfs-platform-support** channel for additional help. |
| | Contact the `#vfs-platform-support` channel for additional help. |

## Tables

**Key point:** In many contexts, tables are the best way to represent sets of related pieces of data. However, in some contexts, other approaches are better choices.

### List or table?

Tables and lists are both ways to present a set of similarly structured items; sometimes it's not obvious when to choose one presentation over the other. To decide which presentation to use, consult the following table:

| Item type | Example | How to present |
| :------------- | :---------------- | :---------------- |
| Each item is a single unit. | A list of programming language names, or a list of steps to follow. | Use a numbered list, lettered list, or bulleted list. |
| Each item is a pair of pieces of related data. | A list of term/definition pairs. | Use a description list. (Or, in some contexts, a table.) |
| Each item is three or more pieces of related data. | A set of parameters, where each parameter has a name, a data type, and a description. | Use a table. |

### Places not to use tables

- Don't use tables to lay out a page.
- Usually if you have only one row of material, a table isn't the best choice for how to present it. But in some contexts (especially for consistency of layout in reference docs), it may be.
- If you have only one column in your table, turn the table into a list.
- Don't use tables to lay out code snippets.
- Don't use tables to lay out long one-dimensional lists in multiple columns. For example, if you have a long list of function names, don't try to save space by splitting the list in half and presenting the two halves as a two-column table. Use tables only to present two-dimensional data—that is, material that semantically makes sense to display in rows and columns.
- Avoid tables in the middle of a numbered procedure.


## Text formatting
Use boldface and italics when appropriate to call attention to things that are important.

### Bold

**Key points:** Use boldface content sparingly. It can call attention to something important, but if overused, it can have the opposite effect, making a screen look chaotic, cluttered, and intimidating.

Here are some things you might want to present in bold:
- User actions. Buttons or steps mentioned in instruction content
- Navigation choices. Navigation labels referred to in instructions
- Names of user interface elements, if they’re necessary to mention
- Terms in a definition list
- Terms that need emphasis, such as notes, cautions, or warnings

Don’t use bold copy as a substitute for appropriately coded second- and third-level headings (like h2 and h3).

Use only one type of highlighting at a time (color, bold, indentation). For example, if the copy is already indented or a distinct color, don’t make it bold too.

### Italics

**Key point:** Minimize the use of italics. Italics can be difficult to read in digital experiences.

You can use italics for simple emphasis. For example, "Do *not* turn off the computer before shutting it down." 
