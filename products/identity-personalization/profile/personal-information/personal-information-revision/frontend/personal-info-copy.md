# Personal Information Front-End Documentation


## Personal Information Page - Read-Only State

### Page URL
- TBD

### Sketch Mockup
- [Personal Information Page - Desktop Read-only state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/Myd9jnw)
- Personal Information Page - Mobile Read-only state

### H1
- Personal information


### Left Nav
- Personal information
- Contact information
- Military information
- Direct deposit information
- Account security
- Connected apps

### Field Set
- Per a11y feedback in design intent review, the fieldset div **should not** contain a gray header with "Personal information" because it causes screen readers to "Personal information" twice, which may be confusing.

### Field Labels and Content

Each div within the form field set will contain:
  - Field label
  - Current value(s) or edit information (if editable)
  - Edit button (if editable)

---

**Preferred name** <br>
Edit your profile to add a preferred name <br> 
{Edit button}

---

**Pronouns** <br>
Edit your profile to add a pronoun <br> 
{Edit button}

---

**Gender identity** <br>
Edit your profile to add a pronoun <br> 
{Edit button}

---

**Sexual orientation** <br>
Edit your profile to add a sexual orientation <br> 
{Edit button}

---


**Date of birth** 
- _Note - this field is non-editable_

---


**Birth Sex**
- _Note this is a change to the existing label that currently reads 'Gender'_
- _Note - this field is non-editable_

---


### Example of default state: 
![image](https://user-images.githubusercontent.com/73354907/138773566-cca96166-b4a9-451d-ab46-91ffd2c5d7ff.png)

## Personal Information Page - Edit State
  - Note that in the Edit state, only _one_ field may be edited at a time.

### Page URL
- TBD
## Related GitHub Tickets
- [Create mockups](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31103)
- [Design Intent Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31237)
- [Design Intent Feedback - Design](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31542)
- [Content Request for Personal Information Update](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31186)


### Sketch Mock-Ups

- [Personal Information Page - Desktop Edit state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/52OvGWw)
- Personal Information Page - Mobile Edit state

### H1
- Personal information

### Left Nav
- Personal information
- Contact information
- Military information
- Direct deposit information
- Account security
- Connected apps

### Field Set
- Per a11y feedback in design intent review, the fieldset div **should not** contain a gray header with "Personal information" because it causes screen readers to "Personal information" twice, which may be confusing.

### Form Field Labels and Selection Options
Last Updated 10/25/2021



| Field | Label              | Form Control                                        | Max Length | Data Type | Pre-Populated Options    | Comments                                                             |
|-----------|--------------------|-----------------------------------------------------|------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| 1         | Preferred name     | Text input                                          | 25         | Char      | N/A                                                                                                                                                          |                            |
| 2         | Pronouns           | Checkboxes + text input (2a) when "Other" selected  | Pre-filled | Char      | "He/him/his" <br> "She/her/hers"<br> "They/them/theirs"<br>"Ze/zir/zirs"<br>"Use my preferred name"<br> "Pronouns not listed here: [open text field]"  |  |
| 2a        | N/A             | Text input                                          |25       | Char      | N/A                                                                                                                                                          | Captures custom value for Pronouns when "Pronouns not listed here" is selected            |
| 3         | Gender identity    | Radio buttons + text input (3a) when "Prefer to self-describe" selected  | Pre-filled | Char      | “Woman"<br> "Man"<br>"Transgender woman"<br> "Transgender man"<br> "Non-binary"<br>"Prefer not to answer"<br> "A gender not listed here: [open text field]"                       |                                                                      |
| 3a        | N/A              | Text input                                          | 25        | Char      | N/A                                                                                                                                                          | Captures custom value for Gender Identity when "A Gender not listed here" is selected     |
| 4         | Sexual orientation | Radio buttons + text input (4a) when "Other" selected  | Pre-filled | Char      | "Lesbian, gay, or homosexual"<br> "Straight or heterosexual" <br>"Bisexual"<br> "Queer"<br> "Don’t know"<br> "Prefer not to answer"<br> "A sexual orientation not listed here: [open text field]"|   |
| 4a        | N/A            | Text input                                          |25        | Char      | N/A                                                                                                                                                          | Captures custom value for Sexual Orientation when "A sexual orientation not listed here: is selected  
| 5 | Date of Birth              | N/A - non-editable                                       |  N/A - non-editable      |  N/A - non-editable      |  N/A - non-editable         | Field already exists; no change       
| 6 | Birth Sex              | N/A - non-editable                                       |  N/A - non-editable      |  N/A - non-editable      |  N/A - non-editable         | Field already exists; only change is updating the label from "Gender" to "Birth Sex"        

