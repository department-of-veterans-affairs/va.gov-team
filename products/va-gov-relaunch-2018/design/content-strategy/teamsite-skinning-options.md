# Overview of Options to Update Front-End of Existing VA.gov Pages / Teamsite Templates
August 2018

As part of VA Web Brand Consolidation, we researched different options for updating the front-end look and feel of existing VA.gov pages to reflect the U.S. Web Design System (USWDS). The content and tools in the Veteran-Facing Tools tech stack, which will be integrated into VA.gov by November 2018, uses the USWDS, but the existing content and tools on VA.gov do not.

The research is captured in this issue: https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10716#event-1725515205

## Option 1: Only update the header/nav and footer on existing VA.gov pages
> **Recommended approach!**

### Pros:
- The minimum responsibility we have to users is that we provide a consistent navigation and wayfinding experience on VA.gov. User access to the same global haeader and footer on most pages of VA.gov provides this.
- This is not a large technical lift to implement
- Because the existing pages will look different from new pages, this can provide a visual cue to users between what's new and old. 

### Cons:
- Users will be switching between "new" pages, layouts, and UI patterns using the USWDS and "old" pages, layouts, and UI patterns on VA.gov
- The experience has an inconsistent look and feel

### Example:
![alt tag](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/VA.gov%20Relaunch%202018/design/content-strategy/vadotgov-page-skinning-1.png)

## Option 2: Update the header/nav, footer, and basic HTML/CSS styles (by appending a global CSS file on top of all the existing VA.gov CSS)

### Pros:
- This provides a little more consistency with look and feel by updating tyepfaces, colors, and basic HTML elements to use the USWDS
- This is not a large technical lift to implement

### Cons:
- It doesn't add that much value to users, since page layouts and side navigation won't change
- Updating some basic front-end styles may break current desktop formatting, making pages look "broken"

### Example:
![alt tag](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/VA.gov%20Relaunch%202018/design/content-strategy/vadotgov-page-skinning-2.png)


## Option 3: Apply the USWDS to the body of VA.gov pages, without updating the existing page's content, layout, or side navigation

### Pros:
- All (or most) of VA.gov will have the USWDS applied, creating a consistent look and feel

### Cons:
- Applying the USWDS will make existing VA.gov pages look "broken"
- The existing VA.gov side navigation pattern is different in both user interaction design and how it is built/coded, so applying the USWDS side navigation pattern defaults all menus to open (because the USWDS navigation component doesn't accordion like VA.gov's navigation component)
- We would be forcing existing VA.gov page layouts into the USWDS, without doing research and design on creating new/better layouts for VA.gov pages
- It will take considerable time and design & development resources to implement across VA.gov

### Example:
![alt tag](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/VA.gov%20Relaunch%202018/design/content-strategy/vadotgov-page-skinning-3.png)
