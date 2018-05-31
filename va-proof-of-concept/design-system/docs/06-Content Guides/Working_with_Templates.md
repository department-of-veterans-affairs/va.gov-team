## Complete list of YAML values

Below are all the current settings that can be used in our YAML to affect the metadata, appearance, or organization of content:

```
---
layout: page-breadcrumbs.html
template:
title:
display_title:
permalink:
source:
lastupdated:
show_git_lastupdate:
concurrence:
plainlanguage:
collection:
children:
order:
majorlinks:
  - heading:
    links:
    - url:
      title:
      description:
relatedlinks:
  - heading:
    links:
    - url:
      title:
      description:
---
```

## Definitions and settings for each value

Jump to:

- [Layout](/templates-and-guides/guides/Working_with_Templates.md#layout)
- [Template](/templates-and-guides/guides/Working_with_Templates.md#template)
- [Title vs. Display title](/templates-and-guides/guides/Working_with_Templates.md#title-vs-display-title)
- [Permalink](/templates-and-guides/guides/Working_with_Templates.md#permalink)
- [Source](/templates-and-guides/guides/Working_with_Templates.md#source)
- [Date last updated](/templates-and-guides/guides/Working_with_Templates.md#date-last-updated)
- [Concurrence](/templates-and-guides/guides/Working_with_Templates.md#concurrence)
- [Plain language certification](/templates-and-guides/guides/Working_with_Templates.md#plain-language-certification)
- [Collections, children, and ordering](/templates-and-guides/guides/Working_with_Templates.md#collections-children-and-ordering)
- [Major vs. Related links](/templates-and-guides/guides/Working_with_Templates.md#major-vs-related-links)

### Layout

This sets a page up to use breadcrumb navigation. This is the **default setting** for static pages within our core public-facing content and should not need to be changed.

`layout: page-breadcrumbs.html`

### Template

There are 3 standard template options for content:

| Template                   | Use                                      |
| -------------------------- | ---------------------------------------- |
| `template: level2-index `  | Used for L2 landing pages like [vets.gov/education](http://vets.gov/education). This template can display content and link lists, but no side navigation |
| `template: topic-landing ` | Used for deeper landing pages like [vets.gov/education/gi-bill](http://vets.gov/education/gi-bill/). This template can display content, link lists, and side navigation |
| `template: detail-page `   | Used for detail pages like [vets.gov/education/gi-bill/higher-learning/](http://vets.gov/education/gi-bill/higher-learning/). Displays the same elements as `topic-landing`, in addition to previous/next page navigation at the bottom of the page to navigate through sequential content. Can also be used for landing pages that would benefit from the previous/next page navigation. |

### Title vs. Display Title

**Title** is the full title displayed at the top of the page. Example:

`title: Institutions of Higher Learning Undergraduate and Graduate Degrees`

**Display title** is an optional shorter version of the title that appears in the side navigation and breadcrumbs. If left blank, these locations will display the content in the `title` field. Example:

`display_title: Undergraduate and Graduate Degrees`

### Permalink

Used on L2 index pages only, e.g. [vets.gov/education](http://vets.gov/education). Example:

`permalink: /education/index.html`

### Source

Indicates the original source of the content, typically a va.gov URL

`source: http://benefits.va.gov/compensation/claims-postservice-exposures-camp_lejeune_water.asp`

### Date last updated

Controls whether a "Last update" date appears at the bottom of a page. There are two options for displaying the date:

1. To show a date that will automatically update whenever there is a change made to the page, use:

`show_git_lastupdate: true`

2. To enter a custom date to be shown, use:

`lastupdated: YYYY-MM-DD`

(YYYY-MM-DD should be replaced with the actual date)

### Concurrence

Metadata to indicate whether concurrence is complete or incomplete. Example:

`concurrence: incomplete`

### Plain language certification

Metadata used to describe the content's plain language compliance. Example:

`plainlanguage: MM-DD-YY certified in compliance with the Plain Writing Act`

(MM-DD-YY should be replaced with the actual date)

### Collections, children, and ordering

Content can be grouped into collections, which are used to populate side navigation and previous/next page navigation.

**Collection** can be used to manually add a page to a collection if its parent folder has not been added to that collection via `/script/build.js`. Example:

`collection: collectionName`

(collectionName would be replaced by the name of the collection that's defined in `/script/build.js`)

**Children** is used when another collection should appear as a child of the current page. For example, the pages that appear under the GI Bill section would appear as children of the GI Bill landing page. A child collection will appear nested below the current page in the side navigation. Example:

`children: collectionName`

(collectionName would be replaced by the name of the child collection that's defined in `/script/build.js`)

See the detailed guide on [adding a collection of related links](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/HowtoCreateCollectionsOrRelatedLinksInMetalsmith.md)

**Order** allows custom control over how the pages within a collection are ordered in the side navigation and previous/next page navigation.

Assign numbers to each page in the collection in ascending order. Example:

`order: 1`

`order: 5`

In the above example, the page with `order: 1` will appear above the page with `order: 5` in the side navigation. Note that order numbers do not need to be sequential; there can be gaps.

### Major vs. Related links

Optional lists of links at the bottom of a page.

`majorlinks:` **Major links** are used to navigate to child content of a section.

`relatedlinks:` **Related links** displayed in a grey box, and are used to navigate to non-child, related content to the subject.

`heading: ` Optional, adds a heading above a list of links to identify it. Can be left empty, but should **not** be removed or the links list will not appear at all.

`links:` this line introduces the list of links — leave this empty.

`url:` the URL for a link

`title:` the title displayed for a link

`description:` optional description for a link. Can be left empty.

**Adding multiple headings:** you can add multiple headings to create multiple lists of major or related links. Add the `heading` and `links` lines wherever an additional heading is desired.

```
  - heading:
    links:
```

Example of a list of **major** links with no heading and two links:

```
majorlinks:
  - heading:
    links:
    - url: /link1
      title: Link 1
      description: A description of link 1
    - url: /link2
      title: Link 2
      description: A description of link 2
```

Example of a list of **related** links with two heading with two links below each of them:

```
relatedlinks:
  - heading: Heading A
    links:
    - url: /link1
      title: Link 1
      description:
    - url: /link2
      title: Link 2
      description:
  - heading: Heading B
    links:
    - url: /link3
      title: Link 3
      description:
    - url: /link4
      title: Link 4
      description:
```
