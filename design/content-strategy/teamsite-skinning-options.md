# Overview of Options to Update Front-End of Existing VA.gov Pages / Teamsite Templates
August 2018

As part of the VA Web Brand Consolidation, we researched different options for updating the front-end look and feel of existing VA.gov pages to reflect the U.S. Web Design System (USWDS). The content and tools in the Veteran-Facing Tools tech stach, which will be integrated into VA.gov by November 2018, uses the USWDS, but the existing content and tools on VA.gov do not.

The research is captured in this issue: https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10716#event-1725515205

## Option 1: Only update the header/nav and footer on existing VA.gov pages
> **Recommended approach!**

### Pros:
- The minimum responsibility we have to users is that we provide a consistent navigation and wayfinding experience on VA.gov. User access to the same global haeader and footer on most pages of VA.gov provides this.
- This is not a large technical lift to implement.

### Cons:
- Users will be switching between "new" pages, layouts, and UI patterns using the USWDS and "old" pages, layouts, and UI patterns on VA.gov
- The experience has an inconsistent look and feel

### Example:
![alt tag](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/design/content-strategy/vadotgov-page-skinning-1.png)

## Option 2: 

### Pros:
- The minimum responsibility we have to users is that we provide a consistent navigation and wayfinding experience on VA.gov. User access to the same global haeader and footer on most pages of VA.gov provides this.
- This is not a large technical lift to implement.

### Cons:
- Users will be switching between "new" pages, layouts, and UI patterns using the USWDS and "old" pages, layouts, and UI patterns on VA.gov
- The experience has an inconsistent look and feel

where we replace only the header and footer, and append a global CSS file on top of all the existing VA CSS.

### Example:



## Option 3: 

### Pros:
- The minimum responsibility we have to users is that we provide a consistent navigation and wayfinding experience on VA.gov. User access to the same global haeader and footer on most pages of VA.gov provides this.
- This is not a large technical lift to implement.

### Cons:
- Users will be switching between "new" pages, layouts, and UI patterns using the USWDS and "old" pages, layouts, and UI patterns on VA.gov
- The experience has an inconsistent look and feel

the left-rail nav had to be rewritten to accommodate USWDS, and I had to make some tweaks to the markup to prevent namespace conflicts
USWDS's left rail doesn’t accordion — when you click a link, you’re taken to another page where you get nav that has visually adjusted to reflect where you are
the OPA nav has two problems: it’s totally independent of the page, meaning that it doesn’t actually exist in the left nav, so there’s no link to indicate “you are here”; and they show all their nav all the time, whereas we only show a chunk of it at a time

### Example:
