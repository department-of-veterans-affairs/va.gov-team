----

# We've moved our docs! 

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform support team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).

----

# What we mean when we talk about buttons coded as links

This question was posed to us by a self-identified screen reader “power user”. The user asked during a research session if a link was styled as a button. That led to the research we are presenting here. We will seek to answer two key questions:

  1. Is it better to use a link `<a>` tag or a button `<button>` tag in particular situations?
  2. Can `<a>` tags be styled with CSS to look like buttons?

## Table of Contents

* [Common screen reader usage and behaviors](#heading1)
* [Research findings](#heading2)
* [Three rules for link and button success](#heading3)
* [Common link and button scenario](#heading4)

## Common screen reader usage and behaviors

* Users are navigating sites in three ways:
  1. Headings (h1, h2, h3…), listening for the descriptive text and heading level announcement
  1. Links, listening for the descriptive text and “Link” announcement
  1. Buttons, listening for the descriptive text and “Button” announcement
* Users rely on text read aloud to describe sections (heading) and calls to action (links, buttons)
* Users expect buttons to respond to Spacebar, and Enter key
* Users expect links to respond to Enter key
* All users favored the **Enter** key for initiating action. When asked why, they told us inconsistent use of buttons or links. Some sites use one exclusively, some use them interchangeably. So users defaulted to **Enter**, because links and buttons respond to that keyboard event.

### Unique screen reader characteristics/features

* VoiceOver [includes a rotor](https://support.apple.com/en-us/HT204783) for users to navigate by headings, links, form elements, and landmarks
* NVDA and JAWS have built-in menus and keyboard shortcuts to navigate by heading, unvisited links, visited links, buttons, and landmarks

### Mobile Navigation

* One user navigated the site using an iPhone and demonstrated mobile accessibility. The user employed the VoiceOver rotor as they had previously done on the desktop, allowing them to navigate by headings, links and buttons. When using the rotor, the user swiped right to advanced to the next identified element. When the rotor was turned off, it appeared swiping would read the next segment of the page, much as the **Ctrl + Option + Right Arrow** command would do on the desktop.
* iOS VoiceOver has the same verbal settings and feel as Desktop VoiceOver, lending it a familiarity to Apple desktop users. Recommend future testing include mobile VoiceOver testing when possible.

### Unique observations from our testers

* One user was looking for a link to jump to a form farther down the page. Could be an anchor ID to a containing div, if the form is farther down the page from a descriptive block of text.
* If the call to action, form, etc. is on the current page, use a link with descriptive “further down this page” language
* If the call to action, form, etc, is on another page, use a link with descriptive “another page” language

## Research findings

It was the consensus of our test users that call to action links can be styled as buttons. The underlying HTML is an `<a>` tag that must meet the success criteria outlined below, and visually it will look like a button. Sighted users rely on this visual information, so having the call to action presented in a strong, clear manner is important. Screen reader users rely more on semantic meaning. Calls to action need to offer clear language about what we are asking users to do. If calls to action have short text blocks, say 2-4 words, consider adding a more descriptive aria-label for assistive devices.

### Example link with aria-label for semantic meaning

```html
  <a
    href=“#”
    aria-label=“Start your application for health coverage on the next page”
  >
    Start your application
  </a>
```

### Benefits for assistive devices

* Sighted users will interpret “Start your application” and have the heading, sub-heading, and content around the CTA to determine intent
* Screen reader users will hear “Start your application for health coverage on the next page” read out, and also have context because of the aria-label

## Three rules for link and button success

1. **Links go to to another page OR jump to an anchor ID in the current page.** Links have the following success criteria:
    - Link text is underlined
    - Respond to **Enter** keypress
    - The browser URL changes
    - HTML5 history object changes. (Not applicable if using React Router.)
    - Avoid hash route URLs if possible. These interfere with in-page anchor links, and were common with early SPA libraries like Backbone. (Not applicable if using React Router.)
    - Append anchor links to URL when a link points to an in-page anchor ID (skip nav, tabs)
    - Do not add role=“button” to links. Screen readers will announce the link as a “button”. Users will expect the element to respond to `ENTER` and `SPACEBAR` key presses.
    - Recommended to underline links when in paragraphs or blocks of text
1. **Call to action links go to another page to start a process.** Call to action links have the following success criteria:
    - Load another page URL (see rule #1 success criteria)
    - Announce themselves as “links” to screen readers and assistive devices
    - Use call to action links sparingly, maybe one per page
    - Going forward, call to action links should not look like buttons. They should use the Design System Council's action link style.
      - [Action link component](https://design.va.gov/storybook/?path=/docs/components-action-link--page)
      - [Action link documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/src/_components/action-links.md)
1. **Buttons perform a user-interface action.**  Buttons have the following success criteria:
    - Do not underline button text. Better to have a halo, background color, or border with plenty of hit space.
    - Respond to **Enter** and **Spacebar** keypresses
    - Perform actions that do not change the URL or load a new page. This might include:
      - Opening and closing modal windows
      - Expanding and collapsing accordion panes

## Common link and button scenarios

* **Good scenarios for a link:**
  * Copy and pasting a URL into a new browser window 
  * You expect the page to load scrolled down somewhere
  * You have a call to action that navigates to another page
  * You are loading a second or third tab, pre-selected
* **Good scenarios for a button:**
  * You have a conditional message that the user should accept or dismiss
  * You are adding or removing something like a receipt, prescription, appeal
  * Show and hide accordions
  * Submit a form asynchronously
  * Submit an asynchronous request, then redirect users based on the server response. This is a middle ground, but feels like a good case for using a button, considering the original function was asynchronous and might keep users on the same page depending on the response.
  * Open and close a modal dialog
  * Alert boxes or confirmations
