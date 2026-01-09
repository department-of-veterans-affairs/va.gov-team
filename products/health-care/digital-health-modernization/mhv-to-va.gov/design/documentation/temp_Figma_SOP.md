# Figma Standard Operating Procedure (SOP)
VA is currently working on a Figma SOP that will be handed down. When that happens, we'll switch over and follow that SOP, and this one will become irrelevant. For that reason, this temporary version is only a write-up of the general idea of how Kaitlin Fink (previous UX design lead of the portal) wanted teams to set up their Figma files with some changes to include mobile app designs.

## Figma file organization:
All products should have both a source of truth (SOT) file and a work in progress (WIP) file. When designs move from a work in progress to production, that is the time to update the SOT file with the new designs and/or an updated UX flow. 

All Figma SOT files should include the following pages:
- Cover
- Source of truth (can include UX flow as well as designs and can also be split between multiple pages)
- Separate UX flow page (if desired)
- Components (if the team has local components that they use)

**Please note:** All MHV tool teams should have an updated source of truth both for web and for the mobile app. This can be one file if desired, or split into more than (i.e. two separate SOTs, one for web, one for mobile app).

### Cover page
Some teams include the names of designers in the cover page. That can be a team by team decision. At a minimum, the cover page should include:
- Team name, i.e. Messaging
- Name of file, which should be a concise description of what the file covers, i.e. "Web source of truth" or "Triage group flows" or "Filter UI" 

### Source of truth
Componentized documentation of what is currently in prod on both web and mobile app. This should include:
- All pages/screens within the app with sample content. There's of course no need to create designs for every version of a details page, for example, covering all the content that could possibly show up there. However, if different types of users conditionally get different versions of the page, those different versions should all be in a source of truth file with explanation for which user characteristic/data triggers which version.
- User flows for the various interactions within the app. Some teams across VA.gov separate source of truth files into pages that each include a key user interaction or flow. On each of those pages, they include a user flow and the screens involved in that flow. Other teams have one page in their file that includes all user flows, and come up with a system to somehow connect user flows to specific design pages in the file (whether that is by link or naming convention, or some other method). Both of these methods are fine.
- All tool-specific alerts. If these alerts are on a specific page only, then they should show on that page in the SOT (with some information about when the alerts display) but if the alerts are tool-wide, then the alerts as components alone can be displayed with some information about where they show and in what circumstances.

#### Why keep a source of truth (copy of what is in prod) in a Figma file?
- Implementation errors in which the design in prod does not match source of truth are more quickly identified and addressed
- When we're trying to standardize design elements and/or content across the portal, having documented everything that shows up in a tool makes this much quicker and easier
- Staging users with specific attributes that are needed to access certain designs in prod can be non-existant or hard to find. Also, staging could be down at a time when this information is needed. Lastly, staging is not always a reliable way to see what is in prod because sometimes staging and prod show different experiences.

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
- Ideally, SOT would include mobile designs alongside all desktop designs and vice versa (so when there is a web design, there is both a version for mobile phones and for desktop computers)
- All designs are within labeled sections and there are no additional screens/designs that are floating on the sides or elsewhere on the page. This is crucial. The most important thing about these SOT files (besides that they contain all in prod designs) is that they are clearly organized and tidy.
- The way these teams have organized their SOTs in the past have included all their designs on one page. That is very helpful for stakeholders and others who are not familiar with your team's figma file structure to find what they're looking for (since they're all clearly labeled on one page). If your team decides to split the SOT into multiple pages, please work to make this as intuitive as possible for folks who might be new to or very rarely see your file. 

### Components
Any specific-to-tool repeatable design elements that you are using in designs.

## All MHV tool teams:

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
