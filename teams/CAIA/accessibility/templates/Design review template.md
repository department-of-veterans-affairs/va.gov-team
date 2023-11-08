# [Design Review a11y findings]: Product team 
- [Prototype link](https://www.sketch.com/s/de782a35-e147-4c32-a2a8-ba53071ec8e7/p/B7F2215E-001C-41F3-B803-9DFD96E7B129/canvas) 
- [#benefits-non-disability](https://dsva.slack.com/archives/C057W3N9K2S)  

## Product team
- OCTO-DE product owner:  Emily Theis
- Product manager: Laura Steele 
- Designer: Fiorella Glavez 

## Auditor(s)
- SK (Sarah Koomson)
- Sara Smith 

## Testing Coverage: 
 
 Full review of updates for 530EZ Burial Form 
 
### Manual
 * [x] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
 * [x] Color blindness checks
 * [x] Buttons vs links
 * [x] Cognitive flow
 * [x] Design consistency across screens
 
### Screen Reader
 * [ ] Behavior & navigation advice 

## Findings

- [x] Findings Identified: `Completed`
    - [ ] Major (defects 0-2): `The review has not been completed. `
    - [x] Minor (defect 4): `The review has not been completed. `
- [ ] No Findings Identified

<details><summary>Toggle to Reveal Defect Findings from CAIA A11ys</summary>


### Major (defects 0-2)
`Review xompleted. No major findings`

### Minor (defect 4) Best Practices and Considerations 

In depth review. These findings have not been advised during our sync with Benefits and Claims team

#### Step 2

![B0593EEF-8541-4259-8215-FCFAEE075CF7](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/db80fc07-0bd2-4063-b543-9499add1b564)

￼

Why is this screenshot of the actual form here? 
Visual users may potentially think they can interact with this.


#### Step 2 
￼
![A164DBE0-EF63-4F0D-B208-B09B509579D0](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/9fcb13c3-f3a2-47cb-8a01-90c51a36c586)


Not sure where focus would go after tabbing out of "year" input field. To ensure that the alert component is not skipped by screen reader users after tabbing out of the date input field, we can set focus to the alert using JavaScript. 

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

#### Step 4
![0C161ECF-476B-4071-8251-B0E96821F69B](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/b1fc3f05-015b-41af-a4dc-465f1131dae4)

Long inline error messages can be verbose for screen reader users, potentially making it challenging to quickly understand and address the issue. Does it need to repeat the entire question? Can we do something like “select at least one option?” Open to discuss 





</details>
