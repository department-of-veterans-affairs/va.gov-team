# (WIP) Authenticated Experience Figma best practices
Updated September 10, 2024 - file created

## Definition of terms

* Project
   * This is the top level for Figma, as seen in the left navigation bar and represented by a folder icon. The VA.gov teams name them mostly by team names.
* File
   * This is the second level for Figma. It's what you see when you open a Project, and is usually represented by a thumbnail that shows the cover page, the name of the file, and when it was last updated.
* Page
   * Within each Figma file are pages. They can be titled and organized by anyone, and are often used to separate out content by how "done" it is, or by experiment, or however the user needs.
* Product
* Subdomain

## File structure rules

* Each Product for Authenticated Experience (My VA and Profile) has the following structure:
    * A file that shows the representation of the primary page of that Product’s domain (My VA)
    * Each subdomain (as determined by the designers of the respective Product) will have its own file, typically a discreet application/product of its own.
    * In the case of an effort in which the team creates and stores designs for functionality on other pages outside of My VA and Profile, it will be determined on a case-by-case basis how to proceed.
* All of Authenticated Experience’s custom components, starting now, will be created and stored in the Authenticated Experience Pattern Library file.
    * If an existing component in VADS is used (without breaking it) with original content for designs, and it's deemed to be a timesaver to make that into a symbol, it will live in the Auth. Exp. Pattern Library (ADD LINK WHEN AVAILABLE)
    * The naming for symbols shall follow these rules: (ADD NESTED BULLETS WHEN AVAILABLE)
    * There will no longer be any custom standalone symbols in individual files, they must all live in the Auth. Exp. Pattern Library

### File naming rules:

* Each file will be start with the name of either My VA or Profile and then the title of the content
    * Ex. Profile - Military Information

### Page structure rules:

* Each file consists of at least 5 sections:
    * Intro
        * Cover page
        * Changelog (only necessary for significant updates - definition of that TBD)
    * Production
        * All pages representing content live on the website
        * The topmost page must represent the current state overall, individual initiatives must be below this
    * Ready for dev
        * Any content that’s been finalized but NOT in Production yet
    * Work in progress
        * Anything being worked on, or done in the relatively recent past that may inform development in the future
    * Archive
        * Any pages that make sense as historical records
            * This could include individual pages representing past tickets, it could include past exploratory work, whatever is deemed to be all done at this point
* There are two other sections that may be appear regularly:
    * Exploration
        * This could include anything not part of specific development tickets that includes conceptual designs, notes, etc.
    * IA
        * This could include flow charts, service design documents, etc.


## Page rules

* Cover page
    * Name: as-is
    * Content: follow the VADS guidelines, use the cover component
* Changelog
    * Name: As-is
    * Content: structure TBD 
* Pages related to individual epics/tickets:
    * Name: Epic title (shortened if possible) -  epic number or issue number
        * Ex.: Form Statuses - #81849 (Epic)
    * Use cases: A single page per section is always the goal for work for an epic.
       * Any individual story numbers that relate to that page's content should be included in a frame so they can be easily referenced.
   
* Section-specific rules:
    * Pages part of the WIP section
        * Name: Always begins with “(WIP)”, follow page format otherwise
    * Pages part of the Archive section
        * Name: Always begins with “(Archive)”, follow page format otherwise

## Symbol rules

* We should aim to follow the VADS naming structure, with our own categories.
* Ex. Nametag / X
* Using variants with components as much as possible should be the standard, versus making multiple individual components that simply represent different versions of the same content
* For any component that is fully unique to Authenticated Experience, the team should advocate for its inclusion in VADS as an experimental component. In doing so, this can also help us sunset our own unique instances in Figma and instead pull from the VADS Figma library. 
