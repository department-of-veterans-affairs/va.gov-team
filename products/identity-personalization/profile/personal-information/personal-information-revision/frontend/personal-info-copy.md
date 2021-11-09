# Personal Information Front-End Documentation


## Personal Information Page - Read-Only State

### Page URL
- http://www.va.gov/profile/contact-information/

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

### Info Link
"How do I update my date of birth or gender?" <br>
_On click, this info link will display the following, as currently seen on va.gov/profile/personal-information_

**If you’re enrolled in the VA health care program**

Please contact your nearest VA medical center to update your personal information.

[Find your nearest VA medical center](https://staging.va.gov/find-locations/?facilityType=health)

**If you receive VA benefits, but aren’t enrolled in VA health care**

Please contact your nearest VA regional office to update your personal information

[Find your nearest VA regional office](https://staging.va.gov/find-locations/?facilityType=benefits)


### Field Set
- Per a11y feedback in design intent review, the fieldset div **should not** contain a gray header with "Personal information" because it causes screen readers to "Personal information" twice, which may be confusing.

### Field Labels and Content

Each div within the form field set will contain:
  - Field label
  - Current value(s) or edit information (if editable)
  - Edit button (if editable)

---

**Date of birth** 
- _Note - this field is non-editable_

---



**Preferred name** <br>
Edit your profile to add a preferred name <br> 
{Edit button}

---


**Pronouns** <br>
Edit your profile to add a pronoun <br> 
{Edit button}


---


**Birth sex**
- _Note this is a change to the existing label that currently reads 'Gender'_
- _Note - this field is non-editable_

---

**Gender identity** <br>
Edit your profile to add a pronoun <br> 
{Edit button}

---

**Sexual orientation** <br>
Edit your profile to add a sexual orientation <br> 
{Edit button}

---


### Example of default state: 
- https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/EL4yDV2

## Personal Information Page - Edit State
  - Note that in the Edit state, only _one_ field may be edited at a time.

## Related GitHub Tickets
- [Create mockups](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31103)
- [Design Intent Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31237)
- [Design Intent Feedback - Design](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31542)
- [Content Request for Personal Information Update](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31186)
- [IA Request from Profile team](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32031)


### Form Field Labels and Selection Options
Last Updated 10/25/2021



| Field | Label              | Form Control                                            | Max Length | Data Type | Pre-Populated Options    | Comments                                                             |
|-----------|--------------------|-----------------------------------------------------|------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| 1         | Date of Birth      | N/A - non-editable                                  |  N/A - non-editable      |  N/A - non-editable      |  N/A - non-editable         | Field already exists; no change   
| 2         | Preferred name     | Text input                                          | 25         | Char      | N/A                                                           
| 3         | Pronouns           | Checkboxes + text input (4a) when "Other" selected  | Pre-filled | Char      | "He/him/his" <br> "She/her/hers"<br> "They/them/theirs"<br>"Ze/zir/zirs"<br>"Use my preferred name"<br> "Prefer not to answer"<br>"Pronouns not listed here: [open text field]"  |  |
| 3a        | N/A                | Text input                                          |25       | Char      | N/A                                                                                                                                                          | Captures custom value for Pronouns when "Pronouns not listed here" is selected            |
| 4         | Birth sex          | N/A - non-editable                                  |  N/A - non-editable      |  N/A - non-editable      |  N/A - non-editable         | Field already exists; only change is updating the label from "Gender" to "Birth Sex"      |                            |
| 5         | Gender identity    | Radio buttons + text input (5a) when "Prefer to self-describe" selected  | Pre-filled | Char      | “Woman"<br> "Man"<br>"Transgender woman"<br> "Transgender man"<br> "Non-binary"<br>"Prefer not to answer"<br> "A gender not listed here: [open text field]"                       |                                                                      |
| 5a        | N/A                | Text input                                          | 25        | Char      | N/A                                                                                                                                                          | Captures custom value for Gender Identity when "A Gender not listed here" is selected     |
| 6         | Sexual orientation | Radio buttons + text input (6a) when "Other" selected  | Pre-filled | Char      | "Lesbian, gay, or homosexual"<br> "Straight or heterosexual" <br>"Bisexual"<br> "Queer"<br> "Don’t know"<br> "Prefer not to answer"<br> "A sexual orientation not listed here: [open text field]"|   |
| 6a        | N/A                | Text input                                          |25        | Char      | N/A                                                                                                                                                          | Captures custom value for Sexual Orientation when "A sexual orientation not listed here: is selected  

  

