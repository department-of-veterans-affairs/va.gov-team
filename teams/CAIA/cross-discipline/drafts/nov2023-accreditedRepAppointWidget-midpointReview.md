# [Midpoint Review CAIA findings]: Accredited Representation Management
- [Prototype link](https://www.sketch.com/s/a75e9329-dae9-4984-867e-451d6e2fa836) 
- [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)

## Product team
- OCTO-DE product owner: Zach Goldfine
- Product manager: Lindsay Li-Smith
- Designer: Michael Tri

## Reviewers
- Jamie Klenetsky Fay
- A Procik
- Katherine Fung
- (who else?)

## Findings
Our recommendations are outlined by screen.

### Desktop prototype
There are recommendations for the desktop prototype.

#### The prototype itself
- `accessibility` `consideration` We recommend that you use accessibility annotations for things that aren't visible in the prototype: heading levels, associating form fields with their labels, any aria-labels. You can use this [annotation kit](https://www.sketch.com/s/aaa5c25f-6991-4aac-a6ed-d378bdff7727/symbols). This will help your developers avoid issues down the line.

#### The widget itself
- `accessibility` `must do` In the widget's error state, there's bolded text -  **What you can do** - that needs to be a semantic heading. You can use font-utility classes to style it in exactly the same way, while treating it as a heading:<br>
  `<h3 class=“vads-u-font-family—sans vads-u-font-size--md”>What you can do</h3>`
- `accessibility` `consideration` It looks like you're using a [Card component](https://design.va.gov/components/card) to show the Vet's current representative. But according to the VADS, "A Card should be actionable," and in the widget's non-empty state, there's nothing actionable about it. It's possible that Platform would want you to use the [Featured content component](https://design.va.gov/components/featured-content) instead? I don't recommend changing anything just yet, but something to keep in mind.

#### Landing page
- `content` `must do` Update to match the content drafted in this Google document (link forthcoming).

#### Introduction page
- `content` `must do` Update to match the content drafted in this Google document (link forthcoming).

#### Step 1: Representative information

#### Step 2: Claimant information

#### Step 3: Your information
##### User's existing name, Social Security number, etc.
- `accessibility` `must do` Add context to this page for screen reader users.
    - Assistive tech users who are “tabbers” or use a screen reader with forms/focus mode (JAWS and NVDA) will likely miss any non-focusable content. On this page, those users wouldn’t be able to read their contact information - the only focusable elements are the phone number, the Finish your application link, and the back/continue buttons.
    - A way to give those users context - i.e., give them the opportunity to correct the information the VA has on file - is to use the “ARIA Described” version of the [VA telephone component](https://design.va.gov/storybook/?path=/docs/components-va-telephone--aria-described-by#aria-described-by), and split up the copy a bit.
    - You can change the paragraph starting with **Note:** to the following. Feel free to tweak the copy, of course:<br>
```
<div>
  <span id="numberDescription">
    If you need to update your Social Security number or other personal information, call
  </span>
  <va-telephone
    aria-describedby="numberDescription"
    contact="8008271000"
  />
</div>

<p>We’re here Monday - Friday…</p>
```

We're aware this doesn't work perfectly as of Nov '23, but a ticket has been filed [with the DST](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2254), so it'll work properly once it's been fixed.

##### User's existing contact information
- `accessibility` stuff

#### Step 4: Representative permissions

#### Step 5: Review information
