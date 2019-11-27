
## Screenreader Behavior With Fieldset, Legend, Labels

* **Testing conducted:** the Date Picker, currently in production: [Apply for Healthcare - Vets.gov](https://staging.va.gov/health-care/apply/application/introduction)
* **Method of traversal:** Navigating date of birth fieldset, when traversing by TAB keypress only
* **ARIA attributes added:** `aria-describedby` was added to `<select>` and `<input>` elements, referencing the `<legend>` ID attribute
* **Tester:** Trevor Pierce, 06 September 2018

## Code Snippet Under Test
```html
<div>
<legend class="schemaform-label" id="root_veteranDateOfBirth-label">
<!-- react-text: 267 -->Date of birth<!-- /react-text -->
  <span class="schemaform-required-span">(*Required)</span>
</legend>
<div class="schemaform-widget-wrapper">
  <div class="usa-date-of-birth row">
    <div class="form-datefield-month">
      <label class="input-date-label" for="root_veteranDateOfBirthMonth">Month</label>
      <select
        <!-- Added the aria-describedby here -->
        aria-describedby="root_veteranDateOfBirth-label"
        id="root_veteranDateOfBirthMonth"
        name="root_veteranDateOfBirthMonth">
          <option value="">
          </option>
          <option value="1">
            Jan
          </option>
          ...
          <option value="12">
            Dec
          </option>
      </select>
    </div>
    <div class="form-datefield-day">
      <label class="input-date-label" for="root_veteranDateOfBirthDay">Day</label>
      <select
        <!-- Added the aria-describedby here -->
        aria-describedby="root_veteranDateOfBirth-label"
        name="root_veteranDateOfBirthDay">
        <option value="">
        </option>
      </select>
    </div>
    <div class="usa-datefield usa-form-group usa-form-group-year">
      <label class="input-date-label" for="root_veteranDateOfBirthYear">Year</label>
      <input
        <!-- Added the aria-describedby here -->
        aria-describedby="root_veteranDateOfBirth-label"
        autocomplete="false"
        id="root_veteranDateOfBirthYear"
        max="3000" min="1900"
        name="root_veteranDateOfBirthYear"
        pattern="[0-9]{4}"
        type="number"
        value="">
    </div>
  </div>
</div>
```

## Findings
| OS | BROWSER   | SCREENREADER  | WITHOUT ARIA  | WITH ARIA  |
| - | --------- | ------------- | ------------- |----------- |
| Windows 10 | IE11 | JAWS | Date of birth left paren, star required, right paren, month combobox. Date of birth left paren, star required, right paren, day combobox. Date of birth left paren, star required, right paren, year edit, type of text. | Date of birth left paren, star required, right paren, month combobox. <PAUSE> Date of birth, star required. Date of birth left paren, star required, right paren, day combobox. <PAUSE> Date of birth, star required. Date of birth left paren, star required, right paren, year edit, type of text. <PAUSE> Date of birth, star required. |
| Windows 10 | Chrome | JAWS | Month combo box. To change the selection, use the arrow keys. Day combo box. To change the selection, use the arrow keys. Year edit, spin box. To set the value use the arrow keys or type the value. | Month combo box. <PAUSE> Date of birth, star required. To change the selection, use the arrow keys. Day combo box. <PAUSE> Date of birth, star required. To change the selection, use the arrow keys. Year edit, spin box. <PAUSE> Date of birth, star required. To set the value use the arrow keys or type the value. |
| Windows 10 | Edge | NVDA | Month combo box, collapsed, alt plus down arrow. Focus mode. Day combo box, collapsed, alt plus down arrow. Year spin button, editable, blank. | Month combo box, collapsed, alt plus down arrow. <PAUSE> Date of birth, star required. Focus mode. Day combo box, collapsed, alt plus down arrow. <PAUSE> Date of birth, star required. Year spin button, editable, blank. <PAUSE> Date of birth, star required. |
| Windows 10 | Chrome | NVDA | Month combo box, collapsed. Focus mode. Day combo box, collapsed. Year spin button, editable, blank. | Month combo box, collapsed. <PAUSE> Date of birth, star required. Focus mode. Day combo box, collapsed. <PAUSE> Date of birth, star required. Year spin button, editable, blank. <PAUSE> Date of birth, star required. |
| Windows 10 | Firefox | NVDA | Month combo box. To change the selection, use the arrow keys. Day combo box. To change the selection, use the arrow keys. Year edit, spin box. To set the value use the arrow keys or type the value. | Month combo box. <PAUSE> Date of birth, star required. To change the selection, use the arrow keys. Day combo box. <PAUSE> Date of birth, star required. To change the selection, use the arrow keys. Year edit, spin box. <PAUSE> Date of birth, star required. To set the value use the arrow keys or type the value. |
| MacOS High Sierra | Safari | VoiceOver | Month, popup button. Day, popup button. Year, incrementable edit text. | Month, popup button. <PAUSE> Date of birth, star required. Day, popup button. <PAUSE> Date of birth, star required. Year, incrementable edit text. <PAUSE> Date of birth, star required. |
| MacOS High Sierra | Chrome | VoiceOver | Month, popup button. <PAUSE> Date of birth, star required. Day, popup button. <PAUSE> Date of birth, star required. Year, incrementable edit text. <PAUSE> Date of birth, star required. | Month, collapsed, popup button. <PAUSE> Date of birth, star required. Day, collapsed popup button.  <PAUSE> Date of birth, star required. Year, stepper.  <PAUSE> Date of birth, star required. |
