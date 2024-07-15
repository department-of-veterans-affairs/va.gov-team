# [Design Review a11y findings]: Benefits and Claims | Lifestage Benefits Crew | Non-Disability Experience
- [Prototype link](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/p/B7F2215E-001C-41F3-B803-9DFD96E7B129/canvas) 
- [#benefits-non-disability](https://dsva.slack.com/archives/C057W3N9K2S)  

## Product team
- OCTO-DE product owner:  Emily Theis
- Product manager: Laura Steele 
- Designer: Fiorella Glavez 

## CAIA Auditor(s)
- SK (Sarah Koomson) - auditor
- Sara Smith -ticket prep/deliverable final adjustments
- Jamie Klenetsky Fay - auditor

## Testing Coverage: 
 
-  Full review of updates for 530EZ Burial Form 
-  Ticket Ref.: [[a11y Design Review] Benefits and Claims Non-Disability Experience: Burial Form Updates: Review Sketch Files #69302](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69302)
 
### Manual
 * [x] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
 * [x] Color blindness checks
 * [x] Buttons vs links
 * [x] Cognitive flow
 * [x] Design consistency across screens
 
### Screen Reader
 * [x] Behavior & navigation advice 

## Findings

- [x] Findings Identified: `Completed`
    - [x] Major (defects 0-2) `Review completed. No major findings`
    - [x] Minor (defect 4): `Review completed. Findings below`
- [ ] No Findings Identified

### Detailed Findings (with images)

<details><summary>Toggle to Reveal Defect Findings from CAIA A11ys</summary>


### Major (defects 0-2)
`Review completed. No major findings`

### Minor (defect 4) Best Practices and Considerations 

In depth review. These findings have not been advised during our sync with Benefits and Claims team

#### Step 2 (SK) 

![B0593EEF-8541-4259-8215-FCFAEE075CF7](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/db80fc07-0bd2-4063-b543-9499add1b564)

￼

Why is this screenshot of the actual form here? 
Visual users may potentially think they can interact with this.


#### Step 2 (SK) - Set Focus
￼
![A164DBE0-EF63-4F0D-B208-B09B509579D0](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/9fcb13c3-f3a2-47cb-8a01-90c51a36c586)

If focus isn't set to text in alert, focus would go directly to the link in the alert after tabbing out of "year" input field. To ensure that the alert component is not skipped by screen reader users after tabbing out of the date input field, we can set focus to the alert using JavaScript. 

* Add an `id` to your alert component to make it easier to target with JavaScript, e.g., `<div id="alertComponent" role="alert">Your alert message</div>`.

* Use JavaScript to set focus to the alert component after the user leaves the date input field:

```javascript
const dateInput = document.getElementById('yourDateInput'); // Replace with your actual date input element
const alertComponent = document.getElementById('alertComponent'); // Replace with the actual ID of your alert component

dateInput.addEventListener('blur', function () {
  alertComponent.focus();
});
```

This code listens for the "blur" event on the date input field and then sets focus to the alert component. This ensures that when the user tabs out of the date input, the alert component will be the next element in focus, making it accessible to screen reader users.

Make sure to replace `'yourDateInput'` and `'alertComponent'` with the actual IDs or element references for your specific input field and alert component.

#### Step 4 (SK) - Inline Error Message
![0C161ECF-476B-4071-8251-B0E96821F69B](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/b1fc3f05-015b-41af-a4dc-465f1131dae4)

Long inline error messages can be verbose for screen reader users, potentially making it challenging to quickly understand and address the issue. Does it need to repeat the entire question? Can we do something like “select at least one option?” Open to discuss 


￼
#### Step 1 (Jamie) - Progess Bar

 ![Image 11-13-23 at 12 48 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/6ce1f6ef-acbb-41fe-afe7-ec3e01326ac9)

Progress bar isn’t correct (should only be 1 blue bar)


#### Step 3.3 (Jamie) - Conditional Logic

I think that conditional should be on a new page? it’s a LOT of fields to add. one page for “did the veteran serve under another name?” then if yes, another page for “what other name did they serve under?”

![Image 11-13-23 at 12 49 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/a3709941-e413-4ce9-88b4-22a0f3e00ce3)

￼


#### Step 4.5 (Jamie) - Conditional Logic

Do those conditionals need to be on their own pages too? Or do we just make sure they are very careful about having the SR announce them?

![Image 11-13-23 at 12 49 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/d5ed540c-a189-4f7a-9c9f-9312b01afe74)

#### Step 6 (Jamie) - Clear and Concise Headers 

 Call it “review and submit,” or put those two actions on two pages or maybe it should be “review”, next, “sign and submit” something to make it clear what action you’re actually taking.


![99A4F022-0039-435D-AAC4-185B9040F868](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/118b3d4f-9e2a-4609-8a9e-b0651d2f0725)

</details>
