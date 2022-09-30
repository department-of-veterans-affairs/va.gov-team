# Chatbot Location & Accessibility

**Context**: The chatbot team wants to ensure that accessibility gets taken into consideration when deciding on the location of the chatbot on the page when it moves to almost all pages across VA.gov. 

[Currently, this is what it looks like on staging](https://staging.va.gov/contact-us/virtual-agent/). The team also  had a [past staging review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34106).

How do we ensure maximum accessibility with the location of the chatbot?

## What to keep in mind

**Source order**: Be mindful of where the chatbot button gets placed in the HTML. You want the source order to match the visual order in most cases or get as close as possible.

**Tab stops / keyboard accessibility**: Where the chatbot button gets placed impacts how many tab stops a keyboard user would need to do to access the chatbot button. If the chatbot is a feature that's important, and accessed frequently, it should take fewer tab stops to get to it.

**Cover other content**: If the chatbot button uses CSS "fixed" positioning, the interface will potentially cover portions of the pages. There's no way around that so if the positives outweigh the negatives there, think about other ways those negatives could be toned down.

**Managing focus**: Since the chatbot button opens a modal-like interface, it's important to move keyboard focus from the chatbot button to the first interactive element inside the chatbot container. Also, focus should be managed when a chat is ended.

**What happens when device orientation or screen size changes?** The screen can get smaller or larger, potentially having the chatbot button or window cover more or less of the screen.

**Zooming**: It's impossible to avoid a fixed chatbot button covering a large portion of the screen when a user zooms. A few possible ways to negate the challenges for people who zom:

- Allow the chatbot button to be minimized or dismissed.
- Make it not be fixed at smaller screen sizes.
- Try to make the initial chatbot button take up as little space as possible while still maintaining good design and UX principles.

## Tips

Here are a few possible implementation tips to keep in mind.

### Use landmarks and headings

Consider putting the chatbot button below a heading so that Veterans who rely on screen readers can jump to the chatbot button to initiate it more quickly.
It could also be helpful to place the whatever initiates the chatbot inside of a landmark region. This Is another way that screen readers can navigate around a page more quickly. Like: `<div role="region" aria-label="Chat with the VA">`

### Consider a skip link

Depending on the location of the chatbot button, and how it's positioned, it could be beneficial to add a skip link to the chatbot content. Especially, if it's placed in the footer and requires many tab stops to get to for keyboard users.

## Position options

Here are a few options for location, and the advantages and disadvantages of each from an accessibility standpoint.

### Static, in header

A link or button placed in the header alone.

**Advantages**:

- Not fixed in positioning, so no issues with zooming.
- In header, near the top of the page, so easy to get to for keyboard users.

**Disadvantages**:

- May not be as noticeable to sighted users if in header alone and not fixed.

### Static, in header and footer

**Advantages**:

- Not fixed in positioning, so no issues with zooming.
- In header, near the top of the page, so easy to get to for keyboard users.

**Disadvantages**:

- May not be as noticeable to sighted users if in header and footer alone and not fixed.

### Fixed, in header

**Advantages**:

- In header, near the top of the page, so easy to get to for keyboard users.
- If using position: fixed, the keyboard order would still be reasonable.
- Would be more noticeable for sighted users.

**Disadvantages**:

- Would potentially cause issues when zooming by covering up parts of the page.

### Fixed in footer

**Advantages**:

- Would be more noticeable for sighted users.

**Disadvantages**:

- Would potentially cause issues when zooming by covering up parts of the page.
- In footer, near the bottom of the page, so would take a long time to get to for keyboard users.
If using position: fixed, the keyboard order would still be reasonable.

## Further reading

- [Sticky elements: functionality and accessibility testing](https://technology.blog.gov.uk/2018/05/21/sticky-elements-functionality-and-accessibility-testing/)
- [Sticky and fixed elements may cause huge accessibility problems](https://cerovac.com/a11y/2021/09/sticky-and-fixed-elements-may-cause-huge-accessibility-problems/)
- [Chatbot Accessibility Playbook](https://mitre.github.io/chatbot-accessibility-playbook/)
