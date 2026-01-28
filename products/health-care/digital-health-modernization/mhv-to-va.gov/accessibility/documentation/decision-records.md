# Decision Records

Inventory of design-related decisions impacting accessibility, along with the rationale for the decision and a list of standards or other factors impacted by the decision.

Last updated: 26 Jan 2026

## Wayfinding

### Generic Page Titles

Use a generic title (```<title>```) for pages that could have Personally Identifiable Information (PII) or Protected Health Information (PHI) in the main page (```<H1>```) heading.

-  **Rationale:** “Title tags can’t include Personally Identifiable Information (PII) or Protected Health Information (PHI). Pages with PII/PHI in H1s must genericize the title tag. This ensures the information isn’t tracked back in analytics or other logs through the page title. This does create an a11y infraction where there isn’t a unique title tag for each page, but there isn’t other meaningful data that can be exposed in the title tag to differentiate it. The VA 508 office approved this approach in these use cases.” Excerpted from from VADS [Privacy Guidance for Title tags](https://design.va.gov/content-style-guide/title-tags#privacy-guidance) 
- 	**Relevant standards:** WCAG: [SC 2.4.2 Page Titled (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled): Web pages have titles that describe topic or purpose.
- 	**Last reviewed:** 27 Oct 2025

### Truncated Mobile Breadcrumbs

Only link to the parent page in mobile responsive layouts.

- 	**Rationale:** “Consider alternatives to wrapping. In general, rely on truncating the title of the current page over wrapping breadcrumb text. But usability comes first. Consider alternative approaches if the title of the current page is completely truncated. For example, a mobile-friendly breadcrumb may show only a page’s direct parent. Sites with very long breadcrumb trails might ultimately need to wrap breadcrumbs, or consider flattening the information architecture of the site.” Excerpted from from USWDS [Usability guidance for breadcrumbs](https://designsystem.digital.gov/components/breadcrumb/#usability-guidance)) 
- 	**Relevant standards:** WCAG: [SC 3.2.3 Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html): Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.
- 	**Last reviewed:** 12 Sep 2025

### Back Link for Details

Replace Breadcrumbs with Back link on detail pages.

- **Rationale:** “When to use a Back link: As a replacement for breadcrumb on: Non-Form Pages where the current page was accessed from a related page and does not have additional navigation. For example, an appointment details page.” Excerpted from from VADS [When to use a Back link for Link component](https://design.va.gov/components/link/#when-to-use-a-back-link)
- **Relevant standards:** WCAG: [SC 3.2.3 Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html): Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.
- **Last reviewed:** 12 Sep 2025

### Call to Action Links

Do not provide alternative text for icons in Action Links. Instead, put the action at the start of action link text.

-  **Rationale:**
    -  “Use the secondary variation for additional important links. Use the Link - Action - Secondary (blue) variation when there are multiple Action Links on a page or if the actions are of equal hierarchy.” Excerpted from VADS [When to use an Action Link](https://design.va.gov/components/link/action))
    -  “‘Front-load‘ your link text. Put the most relevant, specific and unique content at the beginning of the link. Example: “Buy yellow shoes” not “Footwear available here including colourful shoes” Excerpted from [Readability Guidelines Links guidance](https://readabilityguidelines.co.uk/content-design/links/#3-front-load-your-link-text))
- **Relevant standards:** WCAG: [SC 1.1.1 Non-text Content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html): All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for … Decoration, Formatting, Invisible — If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.
- **Last reviewed:** 19 Sep 2025

## Navigation

### Links to Supporting Resources

When providing linked resources to support users in completing a task or process, open the linked resource in a new tab. Otherwise, open links in the same window.

-  **Rationale:** “Open links in the same window, with exceptions. Links on VA.gov should open in a new tab only if clicking the link will cause the user to lose progress or data. This should be avoided when possible. In all other cases, links should open in the same window.” Excerpted from VADS [behavior guidance on the Link component](https://design.va.gov/components/link/#behavior)
- **Relevant standards:** WCAG: [SC 3.2.2 On Input (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input): Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
- **Last reviewed:** 28 Jan 2026

### Focus Management on Page Load

Set focus to the level 1 heading (```<H1>```) on page load.

-  **Rationale:** “Recommend matching the focus management in place on Appointments, Messages, and Medications. When following the nav links to My HealtheVet and Records, focus should be set to the ```<H1>``` using ```tabindex="-1"```.” Excerpted from [Staging Review finding: Keyboard focus goes to different places when following each link #84240](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84240)
- **Relevant standards:** WCAG: [SC 2.4.3 Focus Order (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html): If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
- **Last reviewed:** 24 Oct 2025

## Typography

### Monospace Fonts

Use a monospaced typeface to address alignment issues for plain text content that includes fixed-width space-separated data tables.

-  **Rationale:** “Use monospace fonts sparingly. Monospace fonts can be difficult to read, especially at small sizes or with poor color contrast. Use monospace fonts for numerical data in tables, code examples, or when precise horizontal alignment is needed. For body text, choose a sans serif typeface.” Excerpted from VADS Typography guidance on [Monospace fonts](https://design.va.gov/foundation/typography#monospace-fonts)
- **Relevant standards:** Section 508: [402.4 Characters on Display Screens](https://www.access-board.gov/ict/#402.4): At least one mode of characters displayed on the screen shall be in a sans serif font.
- **Last reviewed:** 4 Dec 2025
- **Updated:** 8 Jan 2026

## Interaction

### Truncated Labels

When using truncated link and control labels (e.g., "Appts" for "Appointments"), set the programmatic name to the full label when the truncated label is unintelligible when read by screen reader software. Otherwise, use the same label for the visible label and programmatic name.

-  **Rationale:** “Appointments shortens to Appts, which is both hard to pronounce and not something people commonly say. Screen reader users might recognize Appts as meaning Appointments, but it's more for them to try to parse out. When a sighted voice command user sees Appts, my guess is they're more likely to correctly parse the word and say 'Appointments' than they are to successfully say 'Appts' in a way that their software will recognize. Voice command software typically has other ways of selecting a link as a fallback if a user doesn't discover that Appointments works.” Excerpted from [Staging Review finding: Abbreviated link text difficult to understand for screen reader users #84242](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84242)
- **Relevant standards:** WCAG: [SC 2.5.3 Label in Name (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name): For user interface components with labels that include text or images of text, the name contains the text that is presented visually.
- **Last reviewed:** 15 Jan 2026

### Auto-Submission

Allow auto-submission (button-less) interaction for ```<select>``` elements when using the [Sort VADS component](https://design.va.gov/components/sort/). Otherwise, provide an explicit submit button for any interaction that triggers a change of context.

-  **Rationale:** “Results automatically update when you select a sort option. This is known as implicit submission.
Why implicit submission? 
Using a button to confirm a sort choice (explicit submission) was found to be easily missed. A 2024 VA.gov Medications Round 3 study mentions:
“6 of 11 participants missed the Sort button after selecting the sort option. Vision did not seem to play a role in who missed the button as 4 of the 6 were sighted. One screen reader dependent user did mention missing things because of his speed.”
The Design Systems Council met with multiple product teams and accessibility specialists to align on implicit submission (supplemented with important accessibility considerations) as the expected behavior.” Excerpted from VADS [behavior guidance on the Sort component](https://design.va.gov/components/sort/#web)
- **Relevant standards:** WCAG [SC 3.2.2 On Input (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input): Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
- **Last reviewed:** 26 Jan 2026

