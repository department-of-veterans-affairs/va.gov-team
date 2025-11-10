# Figma SOP (temporary)
VA is currently working on a Figma SOP that will be handed down. When that happens, we'll switch over and follow that SOP, and this one will become irrelevant. For that reason, this temporary version is only a write-up of the general idea of how Kaitlin Fink (previous UX design lead of the portal) wanted teams to set up their Figma files. This is all in an attempt to keep this SOP pretty light.

## Figma file organization:
All Figma files should include the following pages:
- Changelog
- Cover
- Source of truth 
- Components
- Add'l pages for working designs

### Changelog by Design Version
Changelog is a plugin that allows designers to keep a record of designer-described changes made to design files. This plugin automatically generates a changelog page within a Figma project.

### Cover page
<details>
  <summary>Example cover page</summary>
<img width="960" height="481" alt="image" src="https://github.com/user-attachments/assets/a0c75a4b-e680-4e58-a924-b1697de85e2e" />
</details>

### Source of truth
Componentized documentation of what is currently in prod. More on this below.

### Components
Any specific-to-tool repeatable design elements

### Add'l pages for working designs
These pages are where designers can build out design ideas. When designs move to the implementation phase, then designers can take the finalized designs and move them into the source of truth page (or separate file).


## All MHV tool teams:

### Keep Figma docs up to date to always have a "source of truth" that can be referred to in place of prod
- Depending on how teams want to organize their files, the source of truth can live across multiple different files, but if a stakeholder or another designer needs to view all tool-specific alerts that could come up on a page, that "source of truth" work is ideally prepared for this type of ask
- Both mobile versions and desktop versions should be available
- Some tool teams have created a single page in a Figma file to be that source of truth and have componentized their designs so alerts and other elements can be turned on and off using Figma variables. Other teams have created a source of truth file that contains no designs besides mock-ups of what is in prod

#### Why do this?
- Implementation errors in which the design in prod does not match source of truth are more quickly identified and addressed
- When we're trying to standardize design elements and/or content across the portal, having documented everything that shows up in a tool makes this much quicker and easier
- Staging users with specific attributes that are needed to access certain designs in prod can be non-existant or hard to find. Also, staging could be down at a time when this information is needed

### As much as possible, autolayout should be used 
- It should be as easy and simple as possible to add and remove elements from the design of a screen without interrupting spacing

#### Why do this?
- When designers are OOO, others may need to fill in for them to build out designs that are high priority and need to keep moving forward. Using autolayout will allow other designers to make changes rapidly without needing to pay close attention to maintaining the spacing throughout a design.

### Use the MHV secondary navigation component in mock-ups
- The [component can be found here]([url](https://www.figma.com/design/1vpv191I1zrUZhg5aSuPll/MHV-to-VA.gov-Library?node-id=1-23&t=lLkwiWFsMgotUiKJ-1)) in the MHV to VA.gov Library file

#### Why do this?
- There are multiple versions of the secondary nav in tool teams' Figma files currently. Specifically it's the color blue background that tends to change between files.
- Consistency allows us to more rapidly create Figma prototypes
- Consistency allows designers to make choices about other colors used on their tool teams' designs
