# Figma SOP (temporary)
VA is currently working on a Figma SOP that will be handed down. When that happens, we'll switch over and follow that SOP, and this one will become irrelevant. For that reason, this temporary version is only a write-up of the general idea of how Kaitlin Fink (previous UX design lead of the portal) wanted teams to set up their Figma files. This is all in an attempt to keep this SOP pretty light.

## Figma file organization:
All products should have both a source of truth (SOT) file and a work in progress (WIP) file. When designs move from a work in progress to production, that is the time to update the SOT file with the new designs and/or an updated UX flow. 

All Figma SOT files should include the following pages:
- Cover
- Source of truth (can include UX flow as well as designs and can also be split between multiple pages)
- Separate UX flow page (if desired)
- Components (if applicable)

**Please note:** All MHV tool teams should have an updated source of truth both for web and for the mobile app. This can be one file if desired, or split into more than (i.e. two separate SOTs, one for web, one for mobile).

### Cover page
Some teams include the names of designers in the cover page. That can be a team by team decision. At a minimum, the cover page should include:
- Team name, i.e. Messaging
- Name of file, which should be a concise description of what the file covers, i.e. "Web source of truth" or "Triage group flows" or "Filter UI" 

### Source of truth
Componentized documentation of what is currently in prod on both web and mobile app. This should include:
- All pages/screens within the app with sample content. There's of course no need to create designs for every version of a details page, for example, covering all the content that could possibly show up there. However, if different types of users conditionally get different versions of the page, those different versions should all be in a source of truth file with explanation for which user characteristic/data triggers which version.
- User flows for the various interactions within the app. Some teams across VA.gov separate source of truth files into key user interactions and include a user flow of that interaction at the top and screens demonstrating what each step of that interaction look like in prod lower on the same page. Other teams have one page that is all the user flows, and come up with a system to somehow connect user flows to specific design pages in the file (whether that is by link or naming convention, or some other method).
- All tool-specific alerts

#### Organization
Here are some examples of how teams have organized the web SOT page in their file. 
<details>
  <summary>Medications SOT page sections</summary>
<img width="495" height="615" alt="image" src="https://github.com/user-attachments/assets/96ae3ac3-c20b-4673-9ac9-db7c1a83648b" />
</details>

<details>
  <summary>Messaging SOT page sections</summary>
<img width="429" height="820" alt="image" src="https://github.com/user-attachments/assets/cd13c268-7060-45a3-a1b1-377507d698e3" />
</details>

<details>
  <summary>Medical records SOT page sections</summary>
<img width="601" height="978" alt="image" src="https://github.com/user-attachments/assets/065868ee-f923-4464-8be5-a8a6354e2e82" />
</details>

**Some things of note:**
- You may notice that these examples are not inclusive of mobile web designs. Ideally, they would include mobile designs alongside the desktop designs.
- All designs are within labeled sections and there are no additional screens/designs that are floating on the sides or elsewhere on the page. This is crucial. The most important thing about these SOT files (besides that they contain all in prod designs) is that they are clearly organized and tidy.
- The way these teams have organized their SOTs in the past have included all their designs on one page. That is very helpful for stakeholders and others who are not familiar with your team's figma file structure to find what they're looking for (since they're all clearly labeled on one page). If your team decides to split the SOT into multiple pages, please work to make this as intuitive as possible for folks who might be new to or very rarely see your file. 

### Components
Any specific-to-tool repeatable design elements that you are using in designs.

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
- When tool designers are out of office, others may need to fill in for them to build out designs that are high priority and need to keep moving forward. Using autolayout will allow other designers to make changes rapidly without needing to pay close attention to maintaining the spacing throughout a design.

### Use the MHV secondary navigation component in mock-ups
- The [component can be found here](https://www.figma.com/design/eBElqEJdiwsU7szjt6wr8M/MHV-Component-Library?node-id=0-1) in the MHV to VA.gov Library file

#### Why do this?
- There are multiple versions of the secondary nav in tool teams' Figma files currently. Specifically it's the color blue background that tends to change between files.
- Consistency allows us to more rapidly create Figma prototypes
- Consistency allows designers to make choices about other colors used on their tool teams' designs
