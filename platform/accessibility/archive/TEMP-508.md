## Manual 508 Accessibility Testing - TEMP - DO NOT USE - DECIDING IF USEFUL
Manual accessibility testing often comes down to subjective reasoning. If something doesn’t feel right, it probably isn’t, and should be logged as an error. Your answers will help determine the accessibility heat index score for the application or site being tested.

#### Screen readers - five or more errors

Screen reader errors can fall under any of the following categories. Additionally, if an interface, page update, timing, etc. doesn’t feel right during testing, consider it an error.

##### Errors might include:

* Buttons or links that do not provide clear understanding of their function. This could sound like “Edit”, without telling a non-sighted user “Edit...what?”
* Dynamic content being added or removed from the page without announcing a change. \* Alert boxes, forms with hidden questions, continue links, are good items to consider.
* Overly long explanations
* Content that is too far removed from an explanation, or with no explanation at all
* Heading mistakes:
  * H1 at top of page, then next heading is an H4
  * Headings that are nested improperly (H3 inside an H4, for instance)
  * Content that looks like a heading, but is marked up as a div or paragraph
* Missing landmark HTML. This includes banner, navigation, main, aside, footer elements, or divs with role attributes. These help screen reader users navigate through pages.

##### Screen reader pairings:

* [Test using JAWS + IE11 on Win7/10](https://webaim.org/articles/jaws/)
* [Test using NVDA + Firefox on Win7/10 - VIDEO](https://www.youtube.com/watch?v=Vx1vSd5uYS8)
* [Test using VoiceOver + Safari on OSX](https://webaim.org/articles/voiceover/)

#### Keyboard navigation - five or more errors

Errors can fall under any of the following categories. Additionally, if during your testing or user testing, something doesn’t feel quite right, consider it an error.

* [Ensure all pages can be navigated with keyboard](https://webaim.org/techniques/keyboard/)
* Ensure no links, buttons, or form elements are unreachable using Tab, Shift + Tab
* Ensure custom rich components can be navigated using keyboard, arrow keys
* Skip navigation link should be on all pages with navigation, large numbers of links
* Ensure users are not having to Tab multiple times through menus, large lists, or other navigational elements to get to main content blocks.

#### Active focus management (single-page apps only) - two or more errors

Developer-driven focus management is programmatically setting keyboard focus after users take an action. This usually becomes an error when we load a new “page” in a React, Angular, Vue application. The URL bar might change, but most likely a small fragment of the page is the only thing being changed. If we do not actively tell the browser to put focus at the top of that fragment, keyboard and screen reader users are at a significant disadvantage.

* [Developer-driven focus management](https://adhocteam.us/2018/02/20/developer-driven-focus-management-for-single-page-applications/)

#### Color blindness - five or more errors

* Check for colorblindness issues in live sites using the Chrome [Colorblinding plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)
* Make sure images, actionable buttons, links, alerts, etc. have enough context when color is removed. For instance:
  * If links look like regular text when color is removed
  * Calls to action in hero banners or images should be legible across the spectrum

#### Zoom your screen to 400% - three or more errors

* Set your browser to 1280px width, and scale up to 400%
* Mobile menus that take over the whole page should receive focus when opened, so users don’t have to tab multiple times
* Content should not overlap, or force users to scroll horizontally
* All content should still be available. Do not hide things from mobile users.
