# Personal Information Front-End Documentation
## Note: This copy assumes the "other" text entry fields are visible by default, even before the user selects "other" option for a given field.
Last Updated 11/29/2021

- [Personal Information Page - Read Only State](#personal-information-page---read-only-state)
- [Personal Information Page - Blank State](#personal-information-page---blank-state)
- [Personal Information Page - Edit State](#personal-information-page---edit-state)
- [Personal Information Page - Edit State - Required _Other_ Fields (Error State)](#edit-state---required-other-fields-error-state)

## Personal Information Page - Read-Only State

### Page URL
- https://www.va.gov/profile/personal-information

### Sketch Mockups
- [Personal Information Page - Desktop Read-only state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/Myd9jnw)
- [Personal Information Page - Mobile Read-only state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/3OadG3G)

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
"Why do we ask for this?"
_On click, this info link will display the following_ see [this Sketch file](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/kavvLel) for reference

Why we ask for this information

Some of the information in this section tells us how you want to be addressed as a person. For example, our staff will know your pronouns and the name you'd like us to use when you call or come in to VA.

If you get health care through VA, information in this section helps your care team better assess your health needs and risks. For example, gender identity and sexual orientation are some of the factors that can affect a person’s health, well-being, and quality of life. We call these factors “social determinants of health.”

We also collect this information to better understand our Veteran community. This helps us make sure that we’re serving the needs of all Veterans.

### Info Link
"How do I update my name. date of birth, or sex assigned at birth?" <br>
_On click, this info link will display the following, as currently seen on va.gov/profile/personal-information_

**If you’re enrolled in the VA health care program**

Please contact your nearest VA medical center to update your personal information.

[Find your nearest VA medical center](https://staging.va.gov/find-locations/?facilityType=health)

**If you receive VA benefits, but aren’t enrolled in VA health care**

Please contact your nearest VA regional office to update your personal information

[Find your nearest VA regional office](https://staging.va.gov/find-locations/?facilityType=benefits)


### Field Set
- Per a11y feedback in design intent review, the fieldset div **should not** contain a gray header with "Personal information" because it causes screen readers to read aloud "Personal information" twice, which may be confusing.

### Field Labels and Content 

Each div within the form field set will contain:
  - Field label
  - Current value of the field retrieved from the MPI database.  Values shown below are samples that correspond with the mockups.
  - Edit button (if editable)

---

**Date of birth** 
July 16, 1957
- _Note - this field is non-editable_

---



**Preferred name** <br>
Kim <br> 
{Edit button}

---


**Pronouns** <br>
She/her/hers, They/them/theirs <br> 
{Edit button}


---


**Sex assigned at birth** <br>
Female <br>
- _Note this is a change to the existing label that currently reads 'Gender'_
- _Note - this field is non-editable_

---

**Gender identity** <br>
Woman <br>
{Edit button}

---

**Sexual orientation** <br>
Straight or heterosexual <br> 
{Edit button}

---

## Personal Information Page - Blank State

### Specification
The Blank state is identical to the Read-Only state, except that the Veteran has not yet added a value for a given field.

### Sketch Mockups
- [Personal Information Page - Desktop Blank state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/EL4yDV2)


### Field Labels and Content

Each div within the form field set will contain:
  - Field label
  - Instructions for adding a value for that field

---

**Date of birth** 
July 16, 1957
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


**Sex assigned at birth** 
Female
- _Note this is a change to the existing label that currently reads 'Gender'_
- _Note - this field is non-editable_

---

**Gender identity** <br>
Edit your profile to add a gender identity<br> 
{Edit button}

---

**Sexual orientation** <br>
Edit your profile to add a sexual orientation <br> 
{Edit button}

---


## Personal Information Page - Edit State
  - Note that in the Edit state, only _one_ field is editable at a time.

### Specification
The Edit state is structured the same as the read-only state, except that the field selected for editing will display form controls listed in the table below.  The Pronouns (3), Gender identity (5), and Sexual orientation (6) fields each provide an "other" option.  When this option is selected, its accompanying text box (3a, 5a, and 6a in the table below) become required.  
### Sketch Mockups
- [Personal Information Page - Desktop Edit state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/52OvGWw)


### Form Field Edit State Labels and Selection Options


| Field     | Label                                                                             | Form Control                | Max Length           | Data Type             | Pre-Populated Options                                                                                                                                                            | Comments                                                                                                                                                                                             |
|-----------|-----------------------------------------------------------------------------------|-----------------------------|----------------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| 1         | Date of Birth                                                                     | N/A - non-editable          | N/A - non-editable   | N/A - non-editable    | N/A - non-editable                                                                                                                                                               | Field already exists; no change   
| 2         | Preferred name                                                                    | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | 25 char limited to be confirmed by MPI
| 3         | Pronouns                                                                          | Checkboxes                  | Pre-filled           | Char                  | "He/him/his" <br> "She/her/hers"<br> "They/them/theirs"<br>"Ze/zir/zirs"<br>"Use my preferred name"<br> "Prefer not to answer"<br>"Pronouns not listed here"                     |                                             |
| 3a        | If not listed, please provide your preferred pronouns (25 characters maximum)     | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | Captures custom value for Pronouns when "Pronouns not listed here" is selected<br /><br />25 char limited to be confirmed by MPI            |
| 4         | Sex assigned at birth                                                             | N/A - non-editable          | N/A - non-editable   | N/A - non-editable    | N/A - non-editable                                                                                                                                                               | Field already exists; only change is updating the label from "Gender" to "Sex assigned at birth"      |                            |
| 5         | Gender identity                                                                   | Radio buttons               | Pre-filled           | Char                  | “Woman"<br> "Man"<br>"Transgender woman"<br> "Transgender man"<br> "Non-binary"<br>"Prefer not to answer"<br> "A gender not listed here"                                         |                                                                      |
| 5a        | If not listed, please provide your gender identity (25 characters maximum)        | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | Captures custom value for Gender Identity when "Please provided a gender identity in the field provided" is selected<br /><br />25 char limited to be confirmed by MPI   |
| 6         | Sexual orientation                                                                | Radio buttons               | Pre-filled           | Char                  | "Lesbian, gay, or homosexual"<br> "Straight or heterosexual" <br>"Bisexual"<br> "Queer"<br> "Don’t know"<br> "Prefer not to answer"<br> "A sexual orientation not listed here"   |                                          |
| 6a        | If not listed, please provide your sexual orientation (25 characters maximum)     | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | Captures custom value for Sexual Orientation when "A sexual orientation not listed here" is selected<br /><br />25 char limited to be confirmed by MPI


## Edit State - Required _Other_ Fields (Error State)

### Specification
The error state displayed on the "other" text fields only occurs if the user selects the "other" option for a given field, then attempts to save without entering a value into the accompanying text field. 

### Sketch Mockups
- [Personal Information Page - Desktop Required Other Fields state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/MyzeRwb)
- [Personal Information Page - Mobile Required Other Fields state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/v8W437Q)

### Form Field Edit State Required _Other_ Fields Labels and Selection Options


| Field     | Label                                                                             | Form Control                | Max Length           | Data Type             | Pre-Populated Options                                                                                                                                                            | Comments                                                                                                                                                                                             |
|-----------|-----------------------------------------------------------------------------------|-----------------------------|----------------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| 1         | Date of Birth                                                                     | N/A - non-editable          | N/A - non-editable   | N/A - non-editable    | N/A - non-editable                                                                                                                                                               | Field already exists; no change   
| 2         | Preferred name                                                                    | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | 25 char limited to be confirmed by MPI
| 3         | Pronouns                                                                          | Checkboxes                  | Pre-filled           | Char                  | "He/him/his" <br> "She/her/hers"<br> "They/them/theirs"<br>"Ze/zir/zirs"<br>"Use my preferred name"<br> "Prefer not to answer"<br>"Pronouns not listed here"                     |                                             |
| 3a        | If not listed, please provide your preferred pronouns (25 characters maximum)     | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | Captures custom value for Pronouns when "Pronouns not listed here" is selected<br /><br />25 char limited to be confirmed by MPI            |
| 4         | Sex assigned at birth                                                             | N/A - non-editable          | N/A - non-editable   | N/A - non-editable    | N/A - non-editable                                                                                                                                                               | Field already exists; only change is updating the label from "Gender" to "Sex assigned at birth"      |                            |
| 5         | Gender identity                                                                   | Radio buttons               | Pre-filled           | Char                  | “Woman"<br> "Man"<br>"Transgender woman"<br> "Transgender man"<br> "Non-binary"<br>"Prefer not to answer"<br> "A gender not listed here"                                         |                                                                      |
| 5a        | If not listed, please provide your gender identity (25 characters maximum)        | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | Captures custom value for Gender Identity when "Please provided a gender identity in the field provided" is selected<br /><br />25 char limited to be confirmed by MPI   |
| 6         | Sexual orientation                                                                | Radio buttons               | Pre-filled           | Char                  | "Lesbian, gay, or homosexual"<br> "Straight or heterosexual" <br>"Bisexual"<br> "Queer"<br> "Don’t know"<br> "Prefer not to answer"<br> "A sexual orientation not listed here"   |                                          |
| 6a        | If not listed, please provide your sexual orientation (25 characters maximum)     | Text input                  | 25                   | Char                  | N/A                                                                                                                                                                              | Captures custom value for Sexual Orientation when "A sexual orientation not listed here" is selected<br /><br />25 char limited to be confirmed by MPI


## Related GitHub Tickets
- [Create mockups](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31103)
- [Design Intent Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31237)
- [Design Intent Feedback - Design](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31542)
- [Content Request for Personal Information Update](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31186)
- [IA Request from Profile team](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32031)


