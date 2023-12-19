# WIP [Design Review a11y findings]: Benefits Disability Experience 526EZ
- [Prototype link](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f/p/8E84DF49-0B6F-47DE-BF51-45BBBAD94FAB/canvas) 
- [#benefits-disability-design](https://dsva.slack.com/archives/C053UDWMH7U/p1698182576413519)  

## Product team
- OCTO-DE product owner:  `No info provided`
- Product manager: Rakshinda Aslam 
- Designer: Kate Allbee

## Auditor(s)
- Jamie Klenetsky Fay
- Evan Burnett

## Testing Coverage: 
 
 Full review of Toxic Exposure updates to 526EZ form
 
### Manual
 * [ ] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
 * [ ] Color blindness checks
 * [ ] Buttons vs links
 * [ ] Cognitive flow
 * [ ] Design consistency across screens
 
### Screen Reader
 * [ ] Behavior & navigation advice 

## Findings

### Must fix
#### Color contrast: "Required" label
- **Defect level, if launched:** `a11y-defect-1`
- **Experience standard:** `06` `02`
- **Issue:** Wherever a form field is labeled as REQUIRED, the "Required" label is using a color that doesn't meet WCAG AA color constrast standards. Visually impaired users may have trouble reading the text. The current color is `#FF0000`.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/959841cd-795e-43ec-ab0b-db800dac1753)
- **Recommendation:** Use `vads-color-secondary-dark` (hex: `#b50909`) (from the [VADS color palette](https://design.va.gov/foundation/color-palette)) as your color token.
- **Result:** This will pass color contrast checks and is consistent with the rest of the design system (see [this example](https://design.va.gov/components/form/checkbox#required-1) of a "Required" label using the correct color).

#### Form inputs without semantic labels
- **Defect level, if launched:** `a11y-defect-1`
- **Experience standard:** `04` `06`
- **Issue:** Every form input needs a semantic label - this is how assistive technology users are able to figure out what a form field is for. Currently, the month/year fields don't have labels of their own, only the group does - the fields instead rely on placeholder text, which [aren't accessible as a standalone solution](https://www.a11yproject.com/posts/placeholder-input-elements/):
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/c66d2282-98b5-457f-a680-313b4c15ed66)
- **Recommendation:** Use the existing VADS [month/year component](https://design.va.gov/storybook/?path=/docs/components-va-date--month-year) instead.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/85eb433f-b54d-4ec6-8bda-5db8163c884f)
- **Result:** Using the component will give you a proper fieldset, legend, and label for the form fields, and error handling too! Users of assistive technology will be able to figure out what each form field is for.

### Best Practices and Considerations 

#### Use the VADS color palette: buttons, progress bar, checkboxes
- **Defect level, if launched:** `a11y-defect-4`
- **Experience standard:** `04` `07`
- **Issue:** Buttons, the progress bar, and checkboxes across the Sketch file as using `#0071BC` as the BLUE color. This doesn't align with the design system.
- **Recommendation:** Use `vads-color-primary` (hex: `#005ea2`) (from the [VADS color palette](https://design.va.gov/foundation/color-palette)) as your color token in these components.
- **Result:** Components will align with the VADS, and will be easier to update down the line.

#### Use the VADS "textarea" component for better usability
- **Defect level, if launched:**
- **Experience standard:**
- **Issue:** There's a textarea with a big `<label>` with a maximum character count, and no indication of error handling. This _might_ be accessible as is, but it might not:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/9431619f-c0be-4e1c-bb55-a0191caba3b0)
- **Recommendation:** Use the [VADS textarea component](https://design.va.gov/components/form/textarea). It'll handle the error handling, character count, and accessibility considerations for each. Here's code you can use, once you're at that stage:
```
<va-textarea
  hint="For example: I operated loud machinery while in the service and this caused me to lose my hearing."
  label="Briefly describe the injury or illness that caused your condition."
  max-length="400"
             message-aria-describedby="No more than 400 characters"
  name="my-input"
  onBlur={function noRefCheck(){}}
  onInput={function noRefCheck(){}}
  placeholder="No more than 400 characters"
/>
```
- **Result:** The textarea will be much easier to manage on your end, and easier for users to fill out on the front end.
