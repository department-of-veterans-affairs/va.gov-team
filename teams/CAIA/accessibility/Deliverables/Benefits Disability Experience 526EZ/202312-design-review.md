# [Design Review a11y findings]: Benefits Disability Experience 526EZ
- [Design screens link](https://www.figma.com/file/dBKlB23Hs2oa53euXcXmmK/526-toxic-exposure?type=design&node-id=0-5123&mode=design) 
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
 * [x] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
 * [x] Color blindness checks
 * [x] Buttons vs links
 * [x] Cognitive flow
 * [x] Design consistency across screens
 
### Screen Reader
 * [x] Behavior & navigation advice 

## Findings

<details>
 <summary>Must fix</summary>

 #### Color contrast: "Required" label
- **Defect level, if launched:** `a11y-defect-1`
- **Experience standard:** `06` `02`
- **Issue:** Wherever a form field is labeled as REQUIRED, the "Required" label is using a color that doesn't meet WCAG AA color constrast standards. Visually impaired users may have trouble reading the text. The current color is `#FF0000`.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/959841cd-795e-43ec-ab0b-db800dac1753)
- **Recommendation:** Use `vads-color-secondary-dark` (hex: `#b50909`) (from the [VADS color palette](https://design.va.gov/foundation/color-palette)) as your color token.
- **Result:** This will pass color contrast checks and is consistent with the rest of the design system (see [this example](https://design.va.gov/components/form/checkbox#required-1) of a "Required" label using the correct color).

#### Form inputs without semantic labels: Month/year fields
- **Defect level, if launched:** `a11y-defect-1`
- **Experience standard:** `04` `06`
- **Issue:** Every form input needs a semantic label - this is how assistive technology users are able to figure out what a form field is for. Currently, the month/year fields don't have labels of their own, only the group does - the fields instead rely on placeholder text, which [aren't accessible as a standalone solution](https://www.a11yproject.com/posts/placeholder-input-elements/):<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/c66d2282-98b5-457f-a680-313b4c15ed66)
- **Recommendation:** Use the existing VADS [month/year component](https://design.va.gov/storybook/?path=/docs/components-va-date--month-year) instead.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/85eb433f-b54d-4ec6-8bda-5db8163c884f)
- **Result:** Using the component will give you a proper fieldset, legend, and label for the form fields, and error handling too! Users of assistive technology will be able to figure out what each form field is for.


#### Preserving focus order: "What if I have more than one date range?" placement
- **Defect level, if launched:** `a11y-defect-2`
- **Experience standard:** `11` `08`
- **Issue:** The placement of the "What if I have more than one date range?" Additional info component could make things tricky. In its current state, it's hard to know what the `label` is and what's regular paragraph text. The use might expect to be able to click on "When did you serve in [X]?" and be able to access the fields - but the Additional info component stands between them:<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/4a511fcb-62be-40d0-b484-25a836971101)
- **Recommendation:** You can structure the page using (as mentioned previously) the VADS [month/year component](https://design.va.gov/storybook/?path=/docs/components-va-date--month-year). Make sure that the `legend` for each makes sense out of context - some users will only tab through a page, not reading the non-interactive elements:
```
[paragraph]Tell us when you served in Afghanistan. Answer as best as you can. You don’t need to have exact dates.

[additional info component]What if I have….

[month / year component]
 [legend] When you first served in Afghanistan
 [fieldset] 
    [month] [year]

[month / year comnponent]
 [legend] When you last served in Afghanistan
 [fieldset] 
    [month] [year]
```
- **Result:** This will be much easier for assistive technology users to navigate through. The field `labels` will be adjacent to their inputs.
- **Questions:**
   - Does the user need to know what to do with multiple date ranges BEFORE they enter in their dates, or AFTER? In theory, it's good to have the key action of the page - in this case, entering dates - receiving focus first. But if it's important that they know what to do with multiple date ranges before they start enter in those dates, then keep it as is.
   - If entering the dates is optional, as noted in [Sprint Review DEMO](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f/v/wJaQbw/p/31E761E3-613F-403E-9DC8-5614EE5EE3F3/canvas#Comment), maybe the copy should make that very apparent - "Entering dates is optional." Or is it possible to skip this screen entirely, if it's not required?
  

 #### Conditional logic: "Not sure" checkbox
- **Defect level, if launched:** `a11y-defect-1`
- **Experience standard:** `11` `22`
- **Issue:** The proposed pattern - unchecking "Not sure" results in the "From" and "To" fields going back to null - will be very hard to make accessible to users of assistive technology. The field changes will need to be announced. And the more conditional logic on a page, the harder it is to announce properly, and the more confusing it will be for AT users to keep track of.<br>
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/409d33fb-a8d7-4337-acc3-3e82154475cf)

- **Recommendation:** We have some ideas:
   - You can remove the "Not sure" box entirely, and let the user keep the month / year blank if they aren't sure of the dates. You'll need to add copy - "If you're not sure when you served, leave the dates blank."
   - OR, you can use the [one thing per page](https://design.va.gov/patterns/help-users-to/complete-a-sub-task#design-principles) approach. First, ask the user if they know when they served, yes or no/not sure. If they know, THEN bring them to a page where they can enter the dates; if they don't know, skip the dates screen.
- **Results:** Either of these solutions would avoid issues of field changes not being announced to assistive technology users, and help them avoid confusion over those on-page changes.

</details> 

<details>
 <summary>Best practices and considerations</summary>

 #### Use accessibility annotations before handoff to dev - label headings
- **Issue:** "Hidden" information, like heading levels and aria text, can't be easily derived from a visual mockup alone. Developers could inadvertently code an inaccessible product because those aren't defined in the prototype.
- **Recommendation:** Use the [VA's annotation library](https://www.sketch.com/s/aaa5c25f-6991-4aac-a6ed-d378bdff7727/symbols?g=Accessibility%2520tags) in your mockup.
- **Result:** A more accessible final product, and less work for your developers.

#### Toxic exposure summary: Don't use the table pattern
- **Defect level, if launched:** `a11y-defect-4`
- **Experience standard:** `04` `07`
- **Issue:** There are two versions of the "Summary of TE Copy" screen - a [heading/list view](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f/v/wJaQbw/a/uuid/9296F74D-6473-4C1F-8407-EAF63AF051E1), and a [table view](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f/v/wJaQbw/a/uuid/5A997037-3409-4151-A92A-0E445EF0974D). The VADS's [table component page](https://design.va.gov/components/table#when-to-consider-something-else) recommends that you "use tables sparingly" and that lists are "generally more accessible on mobile screens." Tables are trickly for assistive technology users to navigate, even if they're coded properly.
- **Recommendation:** Use your [heading/list view](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f/v/wJaQbw/a/uuid/9296F74D-6473-4C1F-8407-EAF63AF051E1).
- **Result:** Assistive tech users should have an easier time understanding the summary page, and you'll follow VADS guidelines.

#### Use the VADS color palette: buttons, progress bar, checkboxes
- **Defect level, if launched:** `a11y-defect-4`
- **Experience standard:** `04` `07`
- **Issue:** Buttons, the progress bar, and checkboxes across the Sketch file as using `#0071BC` as the BLUE color. This doesn't align with the design system.
- **Recommendation:** Use `vads-color-primary` (hex: `#005ea2`) (from the [VADS color palette](https://design.va.gov/foundation/color-palette)) as your color token in these components.
- **Result:** Components will align with the VADS, and will be easier to update down the line.

#### Use the VADS "textarea" component for better usability
- **Defect level, if launched:** `a11y-defect-4`
- **Experience standard:** `04` `07`
- **Issue:** There's a textarea with a big `<label>` with a maximum character count, and no indication of error handling. This _might_ be accessible as is, but it might not be:<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/9431619f-c0be-4e1c-bb55-a0191caba3b0)
- **Recommendation:** Use the [VADS textarea component](https://design.va.gov/components/form/textarea). <br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/87f0a6c2-230e-4c38-b65b-23f2eaa4a005)<br>
It'll handle the error handling, character count, and accessibility considerations for each. You'll need to include both the `placeholder` and `message-aria-describedby` attributes so that users of assistive tech are aware that there's a character limit. Here's code you can use, once you're at that stage:
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
Ω


#### Repeated headings: [condition name]
- **Defect level, if launched:** `a11y-defect-1`
- **Experience standard:** `03` `02`
- **Issue:** The [condition name] (for example, "Toxic exposure"), is repeated as a header (presumably an `H3`?) across the entire flow. That heading isn't indicative of what's actually contained in that section of the page. Many assistive tech users use headings to navigate, and this wouldn't indicate the content of the page to them.
- **Recommendations:**
  - OPTION 1: Change the heading to be more specific to the content of the page.
      - "Where did you serve with toxic exposure?"
      - "Toxic exposure: When did you serve?"
  - OPTION 2: Add another heading
```
<h3>Toxic exposure</h3>
<h4>When you served</h4>
```
- **Result:** This will make the content of the page clearer for users of assistive tech.
</details>

<details>
 <summary>Open questions</summary>

 #### Confusing flow: "List other relevant locations" text input
- **Defect level, if launched:** `a11y-defect-4`
- **Experience standard:** `02` `07`
- **Questions:** We have questions about this:<br>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/cdfb82a3-d460-499e-aba4-7f2b68f38f26)
  - Is "not sure" required here?
  - If the user selects "none of these locations," are they required to enter into the "list other relevant locations" field?
  - If the user enters "other relevant locations," how does the following screen populate (the bold text)? ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/0b148217-3eb8-46b0-a007-2b5596e872a5) **This applies across the form - anywhere a user can enter in something specific, and the form programatically takes that response to populate the copy on another screen**
  - What does the user do next, if they select "None of these locations?" Is there a separate user path?
 
</details>
