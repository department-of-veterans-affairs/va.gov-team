# Pre-Midpoint: CAIA Accessibility A11Y Findings: Accredited Representation Management: Appoint & Widget
- [Prototype link](https://www.sketch.com/s/a75e9329-dae9-4984-867e-451d6e2fa836) 
- [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)
- **Related Ticket:** [a11y Support] Accredited Representation Management: Appoint and Widget - Midpoint Review [#70363](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70363)

## Product team
- OCTO-DE product owner: Zach Goldfine
- Product manager: Lindsay Li-Smith
- Designer: Michael Tri

## Auditor
- Jamie Klenetsky Fay

## Findings
Our recommendations are outlined by screen.
### Date of Findings
`11/21/2023`

### Desktop prototype
There are recommendations for the desktop prototype.

#### The prototype itself
- `consideration` We recommend that you use accessibility annotations for things that aren't visible in the prototype: heading levels, headings that are styled differently than their defaults (e.g., an `<H2>` styled as an `<H3>`), `<legend>` field labels for fieldsets (i.e., groups of related radio buttons or checkboxes), any aria-labels. You can use this [annotation kit](https://www.sketch.com/s/aaa5c25f-6991-4aac-a6ed-d378bdff7727/symbols). This will help your developers avoid issues down the line.

#### The widget itself
- `must do` In the widget's error state, there's bolded text -  **What you can do** - that needs to be a semantic heading. You can use font-utility classes to style it in exactly the same way, while treating it as a heading:<br>
  `<h3 class=“vads-u-font-family—sans vads-u-font-size--md”>What you can do</h3>`
- `consideration` It looks like you're using a [Card component](https://design.va.gov/components/card) to show the Vet's current representative. But according to the VADS, "A Card should be actionable," and in the widget's non-empty state, there's nothing actionable about it. It's possible that Platform would want you to use the [Featured content component](https://design.va.gov/components/featured-content) instead? I don't recommend changing anything just yet, but something to keep in mind.

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
There's an [existing implementation](https://staging.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/introduction) of the pattern (must be logged in to view) that you can reference. We also took a video to see it in action:


https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/03d2beb2-7cfe-487e-9434-8da8fe9e876a

Follow this pattern, and note:
-  `must do` The "Edit" links need to be accessible to assistive technology users - they need accessible, descriptive names. You can use `aria-label` for this.
-  `must do` You’ll need to manage the focus on the “Successfully updated” message, so it reads out loud to a screen reader user. (They do this in the existing implementation, so follow their lead!)
   

#### Step 4: Representative permissions
##### Authorization for Record Access
- `must do` When the user says “No” and that alert comes up, you’ll need to make sure it has focus so that screen reader users actually hear the text in the alert. Make sure that the focus changes AFTER the user leaves the field, not before — a screen reader might cut off the field text otherwise.) You can follow these instructions when implementing. (Special thanks for Sarah Koosman, who came up with this solution in [another review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/templates/Design%20review%20template.md#step-2-sk---set-focus)!)
    - Add an id to your alert component to make it easier to target with JavaScript, e.g., `<div id="alertComponent" role="alert">Your alert message</div>`
    - Use JavaScript to set focus to the alert component after the user leaves the date input field:
      ```
      const dateInput = document.getElementById('yourDateInput'); // Replace with your actual date input element
      const alertComponent = document.getElementById('alertComponent'); // Replace with the actual ID of your alert component

      dateInput.addEventListener('blur', function () {
      alertComponent.focus();
      });
      ```
This code listens for the "blur" event on the date input field and then sets focus to the alert component. This ensures that when the user tabs out of the date input, the alert component will be the next element in focus, making it accessible to screen reader users.

Make sure to replace `'yourDateInput'` and `'alertComponent'` with the actual IDs or element references for your specific input field and alert component.


#### Step 5: Review information
- `must do` "View full accredited representative policy" should be "Review" or "Read."
- `must do` The "Edit" buttons must have accessible names - "Edit representative information," for example. You can use `aria-label` for this:<br>
  `<button type='button"'aria-label='Edit representative information'>Edit</button>`
