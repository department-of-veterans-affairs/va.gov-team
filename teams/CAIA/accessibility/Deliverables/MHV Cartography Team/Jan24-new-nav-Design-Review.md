# WIP [Design Review a11y findings]: MHV Cartography Team - Secondary Navigation
- [Prototype A](https://codepen.io/figaro/project/live/AMVvEP)
- [Prototype B](https://codepen.io/figaro/project/live/AqoeoW)
- [#mhv-on-vagov-cartography-team](https://dsva.slack.com/archives/C0581MN69TJ)  

## Product team
- OCTO-DE product owner:  ?
- Product manager: Lynne Johnson
- Designer: Sara Sterkenburg 

## Auditor(s)
- Jamie Klenetsky Fay 

## Testing Coverage: 
 
Review of two versions of a new secondary nav, coded in CodePen, that will be used for user testing
 

## Prototype A
- [x] Run axe checks on every page or unique state (required)
- [x] Color contrast checks
- [x] Color blindness checks
- [x] Tab order
- [x] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
- [x] Keyboard navigation
- [x] Windows, Chrome, JAWS
- [x] MacOS, Safari, VoiceOver

### Results and recommendations

#### Keyboard navigation
There are focus issues while tabbing using a keyboard:
- **All pages, desktop and mobile:** "Messages" or "Medications" links are coded as empty `<a>`.
   - Keyboard users can't tab to them. 
   - Mouse/touchscreen users can activate them - they appear to be links, after all, and have focus indication on the mobile menu - but clicking on them won't do anything.
   - JAWS users will hear "List, 5 items," but can only tab to 3 of those items.
   - This is confusing for those users - if something acts like a link, its expected to _behave_ like one.
   - **Recommendations:** Either remove "Messages" and "Medications," or create dummy pages for those two to link to.
- **Appointments page, desktop:**
   - You can't tab to the "Appointments" navigation link.
   - When I click on "Medical Records," it initially takes me to the "X-Ray Results" page. If I click on "Medical Records" a SECOND time, it then brings up the correct "Medical Records" page. I'm not sure what's going on here - please check that this is pointing to the right place.
- **Appointments page, mobile:** you can't tab to the "Medical records" navigation link.
- **Medical records page, desktop:** you can't tab to the "Appointments" navigation link.
- **Medical records page, desktop:** you can't tab to the "Medical records" navigation link.


#### Navigation landmark labels
All navigation landmarks - either `<nav>` or `role="navigation"` - need to have a unique identifier. There are a few of these on the page. You can use either `aria-label` or `aria-labelledby` to label each nav. 

The VA.gov home page only has **one nav** - the main nav bar. But this prototype has a few - the main nav, seconary nav, and the "footer" ("My VA health benefits," "More resources and support," "In the Spotlight").

Suggestions:
- Main nav: `aria-label="Main"`
- Secondary nav: `aria-label="My HealthEVet"`


#### Focus indication
**Desktop:** 
Keyboard users receive focus when tabbing to non-empty navigation links (that's great!):
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/a20f25a4-d46d-474f-bc42-74f6ee67c6dd)

But there's no indication of focus when hovering over links using a mouse:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/dec9b162-d656-4abf-9ac7-445ed0afab0b)

The main navigation has focus indications for both keyboard and mouse users. You should emulate this on the secondary nav - all users need an indication to know what exactly they're clicking on. :)


#### Screen reader issues
The navigation links are rendering in a way that indicates that they have submenus and can be expanded:

`<a href="/appointments.html" aria-expanded="false" aria-controls="vetnav-about-va" aria-haspopup="true" class="vetnav-level1" data-e2e-id="about-va-1">Appointments</a>`

A screen reader user will hear `Menu pop up collapsed, link, [link text]` when they get to this link, and expect that there are submenu items.

Remove `aria-expanded` and `aria-haspopup`, and then this should come up as a regular link, without an indication of submenus: `Link, [link text]`.

## Prototype B
- [ ] Run axe checks on every page or unique state (required)
- [x] Color contrast checks
- [x] Color blindness checks
- [ ] Tab order
- [ ] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
- [ ] Keyboard navigation
- [ ] Windows, Chrome, JAWS
- [ ] iPhone, iOS Safari, VoiceOver

### Results and recommendations

(text goes here)

## Other findings
These findings are specific to the secondary navigation, but will negatively impact assistive technology users who may navigate to these pages in the prototype:

### Home page
**The "footer":** As mentioned earlier, all navigation landmarks - either `<nav>` or `role="navigation"` - need to have a unique identifier. Each of the footer nav sections are within an unlabelled `<nav>` tag.

You have two options here:
   1. You can make them regular unordered lists (out of `<nav>`), like the existing page footer. OR
   2. You can give the `<h2>` an ID, then use `aria-labelledby` to label the nav, like this:
   `<h2 id="spotlight"><nav aria-labelledby="spotlight">...</nav>` 

### Appointments page

**Heading levels:** The headings jump from H1 to H4:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/53a33d2b-c205-480d-80ee-23fe178f67cb)

Skipping heading ranks can be confusing and should be avoided where possible. In this case, we recommend the following:
- keep the `<h1>` as is
- Use utility classes to increase the font size of the "Start scheduling"; this shouldn't be a heading
- "January 2024," "February 2024," etc. should be H2 (use utility classes to re-style if needed)
- "1," "31," etc. should be `<h3>` (use utility classes to re-style if needed)

**Details links:** Each "Details" link needs a unique accessible name. You can use `aria-label` or `aria-describedby` to achieve this.
