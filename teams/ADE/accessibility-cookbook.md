# Accessibility cookbook

![Julia Child with a wooden hammer held aloft, happily grinning as she is about to smash something she is cooking in a TV kitchen.](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/ADE/bin/julia-with-hammer.jpg)

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

- [Headings presentation (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/ADE/presentations/Headings.pptx)
- [W3C page structure tutorial](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)

### Last updated

5/14/24

Written by: @davidakennedy 

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
        -  **Rationale:** The final product is a file, and the Veteran may not know that the PDF is generated on the fly.
        -  **Exception:** If the trigger to generate the PDF is "Generate PDF," "Create PDF," or other phrases that explicitly call out the "action" nature of the generation, use a button.
  - Created using the [Link component](https://design.va.gov/components/link/), the [Action link component](https://design.va.gov/components/link/action) if you need extra visual emphasis, or with [standard semantic HTML link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
  - Styled to look like links and shouldn’t include button signifiers, such as borders

### Implementation notes

![Button or link flow chart](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/ADE/bin/button-or-link.png)

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
- [Links (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/ADE/presentations/Links.pptx)
- [Buttons and links and action links (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/ADE/presentations/Buttons%20and%20Links%20and%20Action%20Links.pptx)

### Last updated

5/14/24

Written by: @davidakennedy
Buttons vs. links flow chart by @jrfbz and @davidakennedy

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
- [Live regions (pptx)](https://github.com/department-of-veterans-affairs/va.gov-team/raw/master/teams/ADE/presentations/Live%20Regions.pptx)

### Further reading

- [Using ARIA](https://www.w3.org/TR/using-aria/)
- [ARIA and HTML](https://web.dev/learn/accessibility/aria-html)

### Last updated

May 20, 2024

Written by @davidakennedy

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

Written by @coforma-jamie

***

## Fieldsets, Legends, Labels


### Best practices

#### Quick HTML Tutorial

`<input>` is how a user enters information (radio buttons, text boxes, etc.)

`<label>` tells a user what the `<input>` is for

`<fieldset>` puts more than one `<input>` into a group, and `<legend>` describes the group. 

### Accessibility problem being solved

By placing the checkboxes or radio buttons in a fieldset, and the appropriate label or question for the options in the legend, the label or question is programmatically connected to the presented options.  Without this programmatic association, screen reader users would only hear the labels on the radio button or checkboxes announced and wouldn't know why they should choose a particular option.

You can also use fieldsets and legends to multiple questions about the same topic.  For example, an address is composed of many fields for street, city, state. You may place the words "Mailing address" in the legend, and all of the address fields in the fieldset. This helps users understand that you are collecting a mailing address vs. some other type of address.


#### When to use a fieldset and legend

You should use fieldsets and legends when:
* You ask a question that has multiple choices (using radio buttons or checkboxes)
* You have several items you need to group relating to the same topic (like with text inputs, selects, etc)


#### When not to use a fieldset and legend

You should not use a fieldset and legend when:

* You have a single form field where the label is descriptive enough to capture the information needed.


### Ideal State

Note, that without annotations, it’s not clear what the intended fieldset/legend should be.


#### Example 1 - Text input

<img width="622" alt="text input with headings and hint text" src="https://github.com/user-attachments/assets/e5d8a361-3357-4a8c-b409-1e529e7ac4bd" />


<details><summary>Expand to see annotated screenshot</summary>
  
<img width="1173" alt="text input with annotaitons" src="https://github.com/user-attachments/assets/63695056-a927-4f3d-bff8-99036e84e376" />

Annotations make this more clear to an engineer or anyone else reviewing the designs.

</details>

##### Coded example

```JavaScript
<fieldset>
  <legend>
    <h1 class="some-heading-class">Heading [will be announced when tabbing into the first input in the fieldset]</h1>
    <span class="some-helper-text-class">Helper text, inside the legend but styled to look like regular text [will be announced when tabbing into the first input in the fieldset]</span>
  </legend>
  <p>Helper text, outside the legend [will NOT be announced when tabbing into the first input in the fieldset]</p>
  <va-text-input label="Input label [will be announced]" hint="Hint text [will be announced etc]" ... />
</fieldset>
```

- [Codepen link](https://codepen.io/Jeana-Clark/pen/jENBmBW)
- [Codepen test example](https://cdpn.io/pen/debug/jENBmBW)

##### Video examples from the major screen readers

<details><summary>NVDA</summary>
  
  https://github.com/user-attachments/assets/4f204650-bc73-4b07-ab88-fe6cc5d5bf31

</details>


<details><Summary>JAWS</Summary>
  https://github.com/user-attachments/assets/ad694dc6-3c09-45e3-b7f6-a1fb8532bf4a
</details>

<details><summary>Mac VoiceOver</summary>
  
  https://github.com/user-attachments/assets/7ed327a2-ddf4-4887-9eb0-2eaea5286153

</details>


#### Example 2 - Checkbox group

<img width="519" alt="preview of checkbox group" src="https://github.com/user-attachments/assets/4ddeca5b-df73-4e6f-b5a9-e068139b162c" />


<details><summary>Expand to see annotated screenshot</summary>
  
<img width="1033" alt="checkbox group with annotations" src="https://github.com/user-attachments/assets/68d75f62-0ef6-4c72-8b02-9d0d8060f792" />


Annotations make this more clear to an engineer or anyone else reviewing the designs.

</details>

##### Code example

* [Codepen link](https://codepen.io/Jeana-Clark/pen/NPKVPKy)
* [Codepen test example](https://cdpn.io/pen/debug/NPKVPKy)


##### Video examples from the major screen readers

<details><summary>NVDA</summary>
  
  https://github.com/user-attachments/assets/c162036e-9b6a-4c78-9cb1-c923c02e60ce

</details>

<details><summary>JAWS</summary>
  
  https://github.com/user-attachments/assets/1ce9b002-6a41-4b6f-96b0-69d1321c620d

</details>

<details><summary>Mac Voiceover</summary>

  https://github.com/user-attachments/assets/89dfb783-e186-4954-93a3-1eefb5952fd7

</details>


### Other considerations

#### Headings as `<label>` or `<legend>`

There's a semantic difference when you want to make a `<label>` a heading or a `<legend>` a heading.

For example, if you have only a text input or text area label, and you want to make that a heading, the heading tag has to be wrapped *around* the label.

**Note:** This is only partially supported in the VA Design System. More to come.

However, if you want to have a heading over a group of fields, or a checkbox/radio group, you will place the heading inside the legend


#### Content considerations

Besides a heading, strings of text can also be placed within the legend. However, they cannot have any other semantic meaning. List items cannot be placed in a legend. Links, or multiple paragraphs also cannot be placed in a legend. 

Designers should consider only adding text that is necessary for screen readers to understand the context of the question or task. Adding a lot of text can lead to verbosity that's hard for some users to comprehend.


#### Focus management

Sending focus to the legend may cause the heading to be read multiple times depending on the screen reader.


### Further Reading

* [Foundations: grouping forms with `<fieldset>` and `<legend>`](https://tetralogical.com/blog/2025/01/31/foundations-fieldset-and-legend/)
* [Use legend and fieldset (Adrian Roselli)](https://adrianroselli.com/2022/07/use-legend-and-fieldset.html)
* [Styling options for labels and fieldsets (Gov.UK)](https://design-system.service.gov.uk/get-started/labels-legends-headings/#styling-options-for-labels-and-legends)
* [Fieldsets, Legends and Screen Readers again (TPGi)](https://www.tpgi.com/fieldsets-legends-and-screen-readers-again/)
* [Grouping form controls with headings (Accessibility Developer Guide)](https://www.accessibility-developer-guide.com/examples/forms/grouping-with-headings/)
* [How to guides: Making labels and legends headings (Gov.UK)](https://design-system.service.gov.uk/get-started/labels-legends-headings/)

### Last updated
February 3, 2025

Written by: @Jeana-adhoc 

With thanks to: @davidakennedy, @briandeconinck, @coforma-jamie 

***

## When a screen reader needs to announce content

Knowing when to announce content in a screen reader can mean the difference between a quick and helpful experience or a long and verbose experience for people who use screen readers.


### Accessibility problem being solved

Teams and practitioners often don’t know what content needs to be announced by screen readers. That can lead to overindexing on the amount of content announced, meaning increased verbosity (amount of words announced on a page) and cognitive load for people who use screen readers. Aim for balance when announcing content to screen readers.


### How screen readers work

To get to an ideal state with this, you need to understand how screen readers work. The tools convert digital text into synthesized speech, reading in a linear fashion through a page or piece of content. People who use screen readers can jump around the page in different ways like:

- headings
- paragraphs
- HTML elements (inputs, tables, links, buttons, etc.)
- HTML landmarks (header, main, footer, etc.)
- skip navigation links

Screen readers announce parts of the page and its state as people navigate them. For example ([from WebAIM](https://webaim.org/techniques/screenreader/)):

- Screen readers announce the page title (the \<title> element in the HTML markup) when first loading a web page.
- Screen readers will read the alternative text of images, if alt text is present. JAWS precedes the alternative text with the word “graphic.” If the image is a link, JAWS precedes the alternative text with “graphic link."
- Screen readers announce headings and identify the heading level. NVDA and JAWS, for example, precede `<h1>` headings with “heading level 1.”
- Users can navigate in any direction from cell to cell in table navigation mode. If the table is marked up correctly, the screen reader will read the column and/or row heading as the user enters each new cell.
- Screen readers inform users when they have entered into a form. Users have the option to enter form navigation mode.
- Screen readers may or may not read out punctuation, depending on the user’s verbosity setting. Ensure that your intended meaning will be conveyed in either case.
- Screen readers do not read out bold or italic styling. Don’t rely on styling alone to emphasize a word or phrase. The content should convey importance without it.

### End-state requirements

Several situations can occur throughout experiences where screen readers must announce content. All static content in HTML can get announced via screen readers through browsing it. The examples provided point to situations where the announcements need to be made more urgently. Without the announcements, you run the risk of violating Web Content Accessibility Guidelines (WCAG). These include, but aren't limited to:


#### Errors

Any time a blocking error occurs. A blocking error means that the person can't move forward in a process without addressing the error.

**Example**: A Veteran activates the Continue button in a form without correctly completing a form field. The error should be announced in the screen reader. Sometimes, this can change, depending on how the product or application is built (server side vs. client side). Other errors that occur after a full page refresh can generally be left for the user to discover as they navigate through the page.

**Why**: Without knowing an error exists, a Veteran can't correct it, leading to a frustrating experience.

#### Changes on a page

If changes occur elsewhere on a page away from the current interaction, as a result of an action by the user, that requires sight to notice the change. Usually, these changes happen dynamically via JavaScript.

**Example**: A Veteran applies filters to a search query, and the search query updates dynamically without the need to activate a button. New results are displayed on the page.

**Why**: Changes that occur elsewhere on a page away from the current interaction, as a result of an action by the user, can result in a change in context. That context change can mean the user needs to understand what happened, and if they can't see the change, they need to be notified some other way.


#### State

If the state on a component or page is important to understand to operate the interface.

**Example**: A page has an accordion component that expands and collapses to show more or less content. The accordion has an aria-expanded="true|false" attribute that communicates whether the accordion is showing or not showing content.

**Why**: State changes let the person using the interface understand more about what's happening or has happened. That allows the user to better understand the interface and what action they need to take.

#### Focus management

When focus shifts dynamically as part of the experience.

**Example**: A Veteran activates a cancel button and a modal appears on the page. Focus shifts to the first focusable interactive element. That element gets announced, thanks to its text or label.

**Why**: A change in focus shifts context for the Veteran. Without announcing that, they may be confused by the new location they landed on.

#### Images/Icons

When an image is on the page. Images must be described, or marked as decorative to intentionally hide them from screen readers.

**Example**: A page contains content that shows the steps in a claim process. Next to the "completed" steps is a green checkmark icon. The text doesn't mention "completed" anywhere so the checkmark communicates a kind of state. It should be announced. 

**Why**: Icons and images often communicate important information about the content and need to be announced so that context is fully understood.

#### Contextual information

When contextual information gets surfaced during a process that's needed to complete that process with full understanding.

**Example**: As a Veteran progresses through a form, full of text inputs and radio buttons, and some questions have a paragraph of text that comes before interactive form fields. Without reading that information, the Veteran may make a mistake on the form.

**Why**: Contextual information helps people understand a process or page fully before moving forward. Without that extra information, people could get confused or blocked in the process.

#### Language changes

When the language changes on a page. This change can be one word, a paragraph or more.

Note: It's important to point out that the language change is achieved by the HTML lang attribute (example: \`lang="es"\`). The change won't be announced, but the language will get pronounced properly via the screen reader.

**Example**: A page contains information in English, but has a list of links in the footer that link to help content in different languages. Each link would contain the correct lang attribute in the right language.

**Why**: Without changing the lang attribute, the words would not announce properly in screen readers, leading to confusion for people.

### Implementation notes

- Use native HTML first before resorting to more advanced techniques for announcing content in screen readers.
- If native HTML won't accomplish the task, look toward ARIA attributes and properties to announce content.
- When announcing content to screen readers, keep it as concise as the experience will allow. A more verbose experience may be harder to understand for some people.

### Further reading

- [Designing for screen reader compatibility](https://webaim.org/techniques/screenreader/) (explains more about how screen readers work)
- [Understanding screen reader interaction modes](https://tink.uk/understanding-screen-reader-interaction-modes/) (explains the different modes that screen readers can be set in, which affects how content gets announced)
- [How to document the screen reader user experience](https://bbc.github.io/accessibility-news-and-you/guides/screen-reader-ux.html) (one way to think about designing for screen readers)

## Last updated

March 25, 2025.
