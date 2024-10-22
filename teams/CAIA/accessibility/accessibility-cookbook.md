# Accessibility cookbook

![Julia Child with a wooden hammer held aloft, happily grinning as she is about to smash something she is cooking in a TV kitchen.](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/CAIA/accessibility/bin/julia-with-hammer.jpg)

## What is this

This document serves as a place to record **solutions** for all sorts of accessibility issues we run into in our day-to-day work. 

While folks working in [content](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/CAIA/content) are able to lean on the [content style guide](https://design.va.gov/content-style-guide/), there isn't such a singular source of truth for accessibility; we look to WCAG, the [VA Design System](https://design.va.gov/), and our own best judgement, but sometimes we need something more.

## Who is this for

This cookbook aims to fill that gap, for the time being. While primarily intended for use by CAIA accessibility specialists, we invite the entire community of practice within OCTO to contribute recipes. Our hope is that this collection of recipes can help us create greater alignment between all accessibility specialists as we provide support and guidance to folks implementing and updating Veteran-facing products.

## Suggested format

While there isn't a strict template to follow when adding a recipe to the cookbook we suggest that it include a few key pieces of information as makes sense: 

- Description of the accessibility problem being solved
- Description of the ideal end-state
- Implementation/remediation details, if possible, including code samples and/or annotated screenshots
- Date recipe was added/last updated

*** 

## Headings and accessibility best practices

Headings are one of the most used HTML elements on pages, and they play a vital role for a page's understandability, scannability and navigation for screen readers.

### Accessibility problem being solved

How might we create a heading structure on pages and forms that help everyone, particularly people who use screen readers, get oriented to the page and navigate around it.

### Ideal state

- Pages should have one - and only one - `<h1>` heading that covers the topic of the content.
  - On Drupal pages, the "Page title" field is converted to `<h1>`.
  - On non-Drupal pages, `<h1>` needs to be coded manually.
- Heading levels shouldn't skip levels, only increasing by one level (h1 to h2, for example).
- HTML elements and/or CSS styling for bold, italics and font sizing aren't used in place of headings.
- Headings are used for their semantic meaning, not their styling (using an `<h4>` because of its small font size, for example).
  - Use [utility classes](https://design.va.gov/foundation/utilities/) to change a heading's style.
- Headings are informative and don't repeat information available in other headings.
- Headings aren't stacked, meaning one heading level followed by another. For example, a `<h1>` followed immediately by a `<h2>`.

### Implementation notes

- Headings should be hierarchical, meaning arranged in order from most important to least important.
- Review VA's [Page titles and section titles page](https://design.va.gov/content-style-guide/page-titles-and-section-titles) for content guidance.

### Resources
-  [HeadingsMap Chrome extension](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?pli=1)
-  [HeadingsMap Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

### Further reading

- [Headings presentation (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/CAIA/accessibility/presentations/Headings.pptx)
- [W3C page structure tutorial](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)

### Last updated

5/14/24

***

## Choose the right element: Buttons vs. links

Many people struggle to select the right element when choosing between a button or link. Making the right choice can help make an interface easier to use, especially for people who use assistive technology. Buttons and links are the primary ways users interact with information on a web page. Links are for navigation; buttons are for action.

### Accessibility problem being solved

In general, make links look like links and buttons look like buttons. Designing buttons as buttons and links as links improves usability and accessibility by:
- setting honest expectations of interaction behavior
- providing clear signifiers of affordances
- creating experiences that are consistent with web standards

Assistive technology users rely on proper semantics to access web content. They may choose to navigate by button, or link, depending on what they’re looking for. It’s vital that our content meets users’ expectations - link items, coded as buttons, could make those links hard to find, for example.

### Ideal state

- Buttons are:
  - Used for actions, including:
    - Submitting a form
    - Opening a modal
    - Changing the state of something (such as “Back / Continue” buttons on a form)
    - Expanding something (like an accordion)
  - Created using the [Button component](https://design.va.gov/components/button/) or [Button group component](https://design.va.gov/components/button/button-group), or with [standard semantic HTML button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  - Styled to look like buttons and shouldn’t include link signifiers, such as underlines
- Links are:
  - Used for navigation:
    - Navigation bars
	- Skip links / jump links (such as the On this page component)
	- Links to internal web pages
	- Links to external websites (read the [Content style guide](https://design.va.gov/content-style-guide/links#linking-to-external-sites) for additional information)
    - Links to PDFs, whether static or generated on the fly
  - Created using the [Link component](https://design.va.gov/components/link/), the [Action link component](https://design.va.gov/components/link/action) if you need extra visual emphasis, or with [standard semantic HTML link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
  - Styled to look like links and shouldn’t include button signifiers, such as borders

### Implementation notes

![Button or link flow chart](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/CAIA/accessibility/bin/button-or-link.png)

#### Should this be a button or link?

  - **Is the purpose of the control to navigate elsewhere?**
    - Yes
      - Examples: Going to a page; Going to a static file, like a PDF
      - **Is data submitted before navigation?**
        - Yes
          - Examples: Sending data to a server or saving client side before moving to a new page, like a form
          - _Make it a Button_
        - No
          - **Does it need to stand out from surrounding design elements?**
            - No
              - Examples: Link in body text; Link in the footer of a form; Links in a menu
              - _Make it a Link_
            - Yes
              - Examples: A link to a page which will begin a new form; A link on a page with an existing button as the primary action that’s needs more visual weight than other links
                - **Is this on web or mobile?**
                  - Mobile
                    - _Ask your friendly neighborhood accessibility expert_
                  - Web
                    - _Make it an Action Link_
    - No
      - **Is the purpose of this control to generate data for a file?**
        - Examples: Creating a PDF from a web page; Creating a PDF from data on the server
        - Yes
          - _Make it a Link_
        - No
          - _Make it a Button_

### Further reading
- [Links (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/CAIA/accessibility/presentations/Links.pptx)
- [Buttons and links and action links (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/CAIA/accessibility/presentations/Buttons%20and%20Links%20and%20Action%20Links.pptx)

### Last updated

5/14/24

***

## When to use ARIA

What's ARIA? The W3C defines it like this:

> "WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make web content and web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with HTML, JavaScript, and related technologies."

- The WAI group

### Accessibility problem being solved

ARIA enables us to create rich experiences on the web for people with disabilities. Using it responsibly can be the difference between a usable or unusable website or application. The overuse or misuse of ARIA comes up as one of the most common issues in accessibility code audits. But how do you know when to use ARIA and when to not use it?

**Note**: If you're developing a native mobile application on iOS or Android, Accessibility Labels are the equivalent to ARIA on the web.

### Ideal state

Refer to this article on [using ARIA](https://www.w3.org/TR/using-aria/) as a starting point if you have questions about ARIA use. Before you dive into the rules, you'll want to understand what semantic HTML means.

The [A11y Project defines semantic HTML as](https://www.a11yproject.com/posts/what-is-semantic-html/):

> The word "semantic" has a few meanings. In computer science, semantics provides the rules for interpreting expressions of code. In this case, semantics lays out the rules for how HTML (the code) gets interpreted. Those rules govern structure and meaning.

The article from W3C on using ARIA has five rules for ARIA that can guide your decision making:

**"First Rule of ARIA Use: If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so."**

Always lean on HTML first. Applying ARIA generally means more complexity for decision making and outcomes for assistive technologies.

**"Second Rule of ARIA Use: Do not change native semantics, unless you really have to."**

Changing the native semantics of an element, means it won't work as expected, and the team that's changed it needs to take responsibility for ensuring it works properly. This creates the need for extra testing, user research and engineering time. There can be good reasons to do this, but tread carefully.

**"Third Rule of ARIA Use: All interactive ARIA controls must be usable with the keyboard."**

Basic keyboard functionality provides essential compatibility between any interactive component on the web and assistive technology. Without it, the interactive component won't work.

**"Fourth Rule of ARIA Use: Do not use role="presentation" or aria-hidden="true" on a focusable element."**

Similar to keyboard functionality, removing the ability to move focus to an interactive element makes it useless to assistive technology. That's what `role="presentation"` or `aria-hidden="true"` do.

**"Fifth Rule of ARIA Use: All interactive elements must have an accessible name."**

An Accessible Name for an interactive control helps assistive technology users understand what the control is and does. Without it, users have to make guesses about what controls do.

### Implementation notes

Another way to think about this through the lens of our work on VA.gov and associated mobile applications:

1. Use design system components first. If you need to make a custom component, seek guidance from accessibility specialists.
2. Use the existing properties provided by components. If you need to add custom markup or attributes in a component, file an issue on GitHub with the design system, or ask about it in the team's Slack channel.
3. The most difficult ARIA challenges happen when two or more common components get combined into a new component, and create a complex experience that's harder to translate without the use of sight or other senses.
4. Pay attention to accessibility guidance in both the VA Design System and US Web Design System. It will often add boundaries around what's possible and more difficult to accomplish with a certain component.
5. Use [accessibility annotations](https://design.va.gov/about/accessibility/accessibility-annotations) during the design process to think through any ARIA customizations.
6. Using ARIA or Accessibility Labels on mobile platforms helps with Veterans know what's happening on a page, what something means and how they can interact. If you're not using ARIA for this, consider altering your design.

### Resources

- [Accessibility in the VA Design System](https://design.va.gov/about/accessibility/)
- [Accessibility annotations for VA.gov applications](https://design.va.gov/about/accessibility/accessibility-annotations)
- [Live regions (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/CAIA/accessibility/presentations/Live%20Regions.pptx)

### Further reading

- [Using ARIA](https://www.w3.org/TR/using-aria/)
- [ARIA and HTML](https://web.dev/learn/accessibility/aria-html)

### Last updated

May 20, 2024

***

## Visually hidden link / button text best practices

When we think about assistive technology, we usually think of - and test for - screen readers first. But there are other widely used types of assistive tech that we need to account for.

Users with motor difficulties may use **voice command applications** to control their devices. This includes navigating websites and filling out online forms. Applications include Dragon (Windows, third-party), Voice Control (Mac and iOS, built-in), and Speech Recognition (Windows 10, built-in).

For example, to activate a link with the visible label “My Profile” on a web page, a user of a voice command app can say “Click ‘My Profile.’” to activate the link.

### Accessibility problem being solved

We often use `aria-label` or `aria-labelledby` to create text for assistive technology that better explains the purpose of a button or link. For example, [form review pages](https://design.va.gov/templates/forms/review) have an "Edit" button for each section of the form. These are differentiated by pulling in the section heading - the "Edit" button under "Personal information" has an `aria-label` of "Edit personal information." This works very well for screen readers.

The problem: Voice command applications display different behavior when the visual label ("Edit") doesn't match the computed accessible name, or accName (the `aria-label` or `aria-labelledby`). Some solely use the visual label, some soley use the accName, and some use a mix of both!

### Ideal state

Our goal is for as many users as possible, using whatever technology they need in order to access VA.gov, to easily select links and buttons.

**Ideally,** teams should use distinct visual labels for each link / button on a screen. This avoids the issue of needing `aria-label` or `aria-labelledby` entirely.

When this isn't always possible, due to visual design constraints (for example, link / button text on too many lines on mobile devices), you'll need to use `aria` in some capacity. This is fine, but the visual label and the `aria` text must start with the **same word**.
- **Do this:** `<button aria-label="Edit personal information">Edit</button>` - most voice command applications will work if you say "Click 'Edit'"
- **Not this:** `<button aria-label="Please submit the form">Submit</button>` - some voice command applications will _not_ work if you say "Click 'Submit'"

### aria-label or aria-labelledby?

`aria-labelledby` is preferred because it uses visual text to create an accName. That text is able to be translated by machine translation apps like Google Translate. If you're able, use `aria-labelledby`! 

Example:
```
<h2 id="theHeading">Personal information</h2>
<button id="theButton" aria-labelledby="theButton theHeading">Edit</button>
The accName here is "Edit Personal information.
```

`aria-label` does _not_ translate, since the label is in an HTML attribute. But **if you're using VADS components**, you **must** use `aria-label` - components use the ShadowDOM, and can't access anything outside of themselves (like a heading further up the page). Use the component's props to add an `aria-label`.

Example:
```
<va-button
  label="Edit personal information"
  onClick={function noRefCheck(){}}
  text="Edit"
/>
```


### Implementation notes
**Note:** MacOS and iOS Voice Control generally uses the computed accName only to identify links and buttons; only distinct visual labels will be 100% usable by this group. However, these users have other ways to access links and buttons, via numbered flags or a numbered grid, so these aren’t wholly inaccessible to them.

### How we tested
First, we created a [testing script](https://coforma-jamie.github.io/VoiceCommandTest/) to test interactive elements - links, buttons, radio buttons, checkboxes, text inputs - with unique instances of `aria-label` and `aria-labelledby` for a variety of "vanilla" semantic HTML interactive elements and VADS components.

Then we tried activating each element using the visual label and its `aria` accName (if applicable), and recorded our findings in a [spreadsheet](https://docs.google.com/spreadsheets/d/154S4eYogg-k-Lx-GFLZuriIs8Nr3q2LO7gRY3jxamvU/edit?gid=0#gid=0).

To test, we used these apps:
- Voice Control (MacOS and iOS)
- Dragon
- Windows Speech Recognition (Win 10)
- Windows Voice Access (Win 11)
- Talon
- Android Voice Access

### Further reading
- [What is an accessible name?, TPGi](https://www.tpgi.com/what-is-an-accessible-name/)
- [GH ticket #92432 - Voice command and interactive elements](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92432)

### Last updated
October 15, 2024
