# 0781 Paper Sync Planning 

**This is a WIP, unrefined document. It is not a source of truth**. It is just my best estimates as to how long the work will take, and how we could break it down.

## TL;DR

This document references pages by number as defined in [this layout](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-79571&node-type=section&t=coFOPPvO8yrT5Pcq-0)

## Resources

- ['Design Tiles' in Figma](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-79571&node-type=section&t=7Ox44uttWClS9Np0-0)
- [URL to Design Tile mappings (and more)](https://docs.google.com/spreadsheets/d/1pdJ5W-dJ56ysxrtkWl8d6Rsurf2nxXDqb8-7C9oGwcg/edit?gid=997035058#gid=997035058)

## Strategy

### Workability Categories 

- **ready**. This is a chunk of work anyone can start on immediately.
- **blocked**. This work has code dependencies blocking the *start* of development.
- **soft blocked**. This work has code dependencies blocking *completion* of development. These can be started.
- **needs refinement**. This work has open questions blocking the *start* of development.
- **soft needs refinement**. This work has open questions blocking the *completion* of development. These can be started.

### Testability Categories

- **foundational**. This is backend or FE to BE integration work that will not involve visible, test-user facing changes.
- **skeleton**. This is test user-facing work that handles the basic structure of pages and conditional routing from each link / button / selection that appears on that page.
- **partial skeleton**. There is only one of these. In order to unblock testing of the very first page of the flow, we need to complete some foundational work on the very last page. This will unblock testing of 'Complete' and 'Opt Out' functionality in the [Form Tile on page 3.1c](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-77233&node-type=section&t=cq2aZY2Q6NtYsS5V-0).
- **content complete**. This is a chunk of work that is unblocked by completion of a **skelleton** ticket. This is the addition of all content, styling, and accessiblity requirements to a page.

### Order of Operations

1. Open conversations for **needs refinement** tickets 
2. Begin development of JSON to PDF converter ASAP. A working PDF converter will define our *form schema*, which is a univeral **soft blocker** on the rest of this work.
3. Begin 'rolling development' on **skeleton** tickets.
4. As **skeleton** tickets are completed, **content** tickets will become unblocked. When there is an unblocked **content** ticket, the next available developer will go back and complete this ticket.

### Non-Developer Testing

There are two kinds of testing we aim to unblock for (developers, but also) product and design.  The first is the **skeleton test**. This is a click through (or automated) test where conditional logic can be tested. It may also be possible to handle some accessibility testing with **skeleton tests** but I defer to the experts on that. This work is unblocked by completion of a **skelleton** ticket.

The other kind is **content complete** testing. This encopmases everything covered in **skelleton testing**, plus the ability to ensure content is accurate and styled to correctly, **and** that accessiblity requirements are met on a page-by-page basis. These tests are unblocked by completion of **content** tickets


## Workable Chunks

[Moved to github tickets](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/7?filterQuery=-label%3A%22DBEX-TREX%22+-status%3ADone++epic-name%3A%22Paper+Sync+Form+0781+-+Build%22)
