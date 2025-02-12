# 0781 Paper Sync Engineer Approach 

## Resources

- ['Design Tiles' in Figma](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-79571&node-type=section&t=7Ox44uttWClS9Np0-0). Where tickets reference a page number, this is where to look for that information.
- [URL to Design Tile mappings (and more)](https://docs.google.com/spreadsheets/d/1pdJ5W-dJ56ysxrtkWl8d6Rsurf2nxXDqb8-7C9oGwcg/edit?gid=997035058#gid=997035058). This will be most usefull for
    - ensuring everything ends up with the correct routing
    - mapping the form to JSON.

## Strategy

### Workability Categories 

- **ready**. This is a chunk of work anyone can start on immediately.
- **blocked**. This work has code dependencies blocking the *start* of development.
- **soft blocked**. This work has code dependencies blocking *completion* of development. These can be started.
- **needs refinement**. This work has open questions blocking the *start* of development.

### Testability Categories

- **foundational**. This is backend or FE to BE integration work that will not involve visible, test-user facing changes.
- **skeleton**. This is test user-facing work that handles the basic structure of pages and conditional routing from each link / button / selection that appears on that page.
- **content complete**. This is a chunk of work that is unblocked by completion of a **skeleton** ticket. This is the addition of all content, styling, and accessibility requirements to a page.

### Order of Operations

1. Open conversations for **needs refinement** tickets 
2. Begin development of JSON to PDF converter ASAP. A working PDF converter will define our *form schema*, which is a universal **soft blocker** on the rest of this work.
3. Begin 'rolling development' on **skeleton** tickets.
4. As **skeleton** tickets are completed, **content** tickets will become unblocked. When there is an unblocked **content** ticket, the next available developer will go back and complete this ticket.

### Non-Developer Testing

There are two kinds of testing we aim to unblock for (developers, but also) product and design.  The first is the **skeleton test**. This is a click through (or automated) test where conditional logic can be tested. It may also be possible to handle some accessibility testing with **skeleton tests** but I defer to the experts on that. This work is unblocked by completion of a **skeleton** ticket.

The other kind is **content complete** testing. This encompasses everything covered in **skeleton testing**, plus the ability to ensure content is accurate and styled to correctly, **and** that accessibility requirements are met on a page-by-page basis. These tests are unblocked by completion of **content** tickets

## Workable Chunks

### Note on ticket size

These chunks start very small and modular, then get larger as we go. There are two reasons for this...

1. We will be learning as we go how to stand these up and write tests for them.
2. There is significant coupling between the first and last pages of this new 0781 flow. I've chunked the work in a way that will avoid overlap, if we stay in order and on time.

### Note on ticket order

Tickets are numbered, e.g. `[0781 PS] (1) ...` and `[0781 PS] (2) ...`. This is to preserve my suggested working order in case they get moved around. They sometimes indicate a blocker / blocked relationship, but not always. For that information look inside the ticket where blockers will be called out. There are multiple of most numbers; these tickets can be thought of as a 'layer' of work that can be done in parallel.

They are also arranged in a manner that will unblock click through testing as quickly as possible. I strongly suggest we work them in the order they are in when possible, including finishing batches of 'skeleton' tickets before rolling back to do 'content' tickets.

### Note on 'Skeleton' vs 'Content' tickets

Generally speaking, the idea is to 'roll' through the skeleton, circling back to add content as we can. This is more important in the early work where everything is tightly coupled, however if a developer finds it easy to simply drop in the content as they go, go for it. Just make sure the appropriate tickets are moved / assigned as this happens.

### Tickets

[Moved to Github tickets](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/7?filterQuery=-label%3A%22DBEX-TREX%22+-status%3ADone++epic-name%3A%22Paper+Sync+Form+0781+-+Build%22)

### Guidelines For Adding New Pages

This work should all slot together nicely if we follow the conventions laid out in our [Boiler Plate work](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97063). Follow these instructions for adding a new page

#### Follow the File Structure / Naming Conventions

- New pages have an 'entry point' which will be imported into [src/applications/disability-benefits/all-claims/config/form0781/index.js](TODO). This file is where we define the order of our pages by adding them (in the desired order) into the `form0781Pages` object.
- These 'entry point' objects should be defined in a file of the same name under the [src/applications/disability-benefits/all-claims/pages/form0781/](TODO) directory. This page should ideally do nothing but define a `schema` object and a `uiSchema` object. These schema-type objects are used to define the page structure
  - `schema` defines the structure of the data as it should be read from the backend JSON.
  - `uiSchema` defines the structure of the data as it should be written from the backend JSON.
  - schema keys that represent display only / functional logic (not something for final submission) should be prefixed with the key `view:<key name>`. These will still be saved into the `InProgressForm`, but will be easier to filter out for final form submission later based on this convention. This could be bits of control flow logic, e.g. "the user suggested X on page 3, so on page 5 we need to display Y"
- Shared Utility functions should be added to the `src/applications/disability-benefits/all-claims/utils/form0781.js` file. 
- Page specific Content should be added to the `src/applications/disability-benefits/all-claims/content/form0781/` directory in a file named for the page it populates.


#### Use the Flipper for Every Page

Even though we are using one flipper to turn on / off the entire flow, we still need to be sure to pass the flipper to each specific page. It is passed to the 'entry point' object as the `depends` argument. If you have more specific conditions for flipping a page, define the page specific flipper as a Utility that leverages the top level flipper, and pass that to your page. 

The reason we need to pass this flipper to every page, rather than just a top level wrapper, is related to the way this form configuration is loaded. Christine can give a better explanation, I just know we need to do it, otherwise it won't work.


#### Build the Skeleton First, Add Content in a subsequent PR per the Ticket order.

It says this in the tickets, but the idea here is to get everything functional on the page and then deploy with placeholder text, or no text at all. This does three important things.

- decouples deployment of critical functionality from the Content Review cycle. We don't want to end up in a situation where our code breaks while we are waiting on Design and OCTO to iron out the details of how something non-functional is worded.
- It allows us to iterate quickly, unblocking dependancies.
- It unblocks dependency testing.


#### Match Form Data to the JSON Schema

The VA Forms Library gives us the flexibility to add anything we want to the JSON that is stored on the `InProgressForm` table. This is great for quick iteration, however when it comes time to submit the form, we will need to do a transformation on this data. For this reason, we should do two things.

- Make the JSON added by the forms library match [the schema defined here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/engineering_research/0781v2_schema.md) as closely as possible. This will reduce the overhead of translating it later at submit time.
- We will need to save some data that is for control flow, but not necessarily going to be part of the final submission. For this type of data, use a form key prepended with `view:<key name>`. This will make stripping this data out later much easier.
  - An example of this sort of data would be something like "Because the user selected X on page 4, we need to show Y on page 5, but the data collected on page 5 is the only thing we need for the final submission."
 
