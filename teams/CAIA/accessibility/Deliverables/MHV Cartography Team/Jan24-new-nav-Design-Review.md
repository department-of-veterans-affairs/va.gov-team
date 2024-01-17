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
- [ ] Windows, Chrome, JAWS
- [x] MacOS, Safari, VoiceOver

### Results and recommendations

#### Keyboard navigation
There are focus issues while tabbing using a keyboard:

- **Appointment page, desktop:** you can't tab to the "Appointments" navigation link.
- **Appointment page, mobile:** you can't tab to the "Medical records" navigation link.
- **Medical records page, desktop:** you can't tab to the "Appointments" navigation link.
- **Medical records page, desktop:** you can't tab to the "Medical records" navigation link.
- **All pages, desktop and mobile:** "Messages" or "Medications" links are coded as empty `<a>`. Keyboard users can't tab to them. And mouse/touchscreen users can activate them - they appear to be links, after all, and have focus indication on the mobile menu - but clicking on them won't do anything. This is confusing for those users - if something acts like a link, its expected to _behave_ like one. If "Messages" and "Medications" aren't actually links, they shouldn't be clickable.

#### Navigation landmark labels
All navigation landmarks - either `<nav>` or `role="navigation"` - need to have a unique identifier. There are a few of these on the page. You can use either `aria-label` or `aria-labelledby` to label each nav. 

The VA.gov home page only has **one nav** - the main nav bar. But this prototype has a few - the main nav, seconary nav, and the "footer" ("My VA health benefits," "More resources and support," "In the Spotlight").

Suggestions:
- Main nav: `aria-label="Main"`
- Secondary nav: `aria-label="My HealthEVet"`
- Each "footer" section: you have two options here:
   1. You can make them regular unordered lists (out of `<nav>`), like the existing page footer. OR
   2. You can give the `<h2>` an ID, then use `aria-labelledby` to label the nav, like this:
   `<h2 id="spotlight"><nav aria-labelledby="spotlight">...</nav>` 


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
