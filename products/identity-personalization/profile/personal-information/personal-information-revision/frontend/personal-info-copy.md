# Personal Information Front-End Documentation
## Note: This copy assumes the "other" text entry fields are visible and editable by default
Last Updated 3/31/2021

- [Personal Information Page - Read Only State](#personal-information-page---read-only-state)
- [Personal Information Page - Blank State](#personal-information-page---blank-state)
- [Personal Information Page - Edit State](#personal-information-page---edit-state)
- [Personal Information Page - Edit State - Required _Other_ Fields (Error State)](#edit-state---required-other-fields-error-state)
- [Personal Information Revision - UXPin prototype](https://preview.uxpin.com/82e734535b0ab60a1567348b1234e43b5318ad3a#/pages/144815586/simulate/no-panels?mode=i)

## Personal Information Page - Read-Only State

### Page URL
- https://www.va.gov/profile/personal-information

### Sketch Mockups
- [Personal Information Page - Desktop Read-only state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/dlVxdm3)
- [Personal Information Page - Mobile Read-only state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/ZODxr23)

### H1
- Personal information

### Left Nav
- Personal information (selected)
- Contact information
- Military information
- Direct deposit information
- Notification settings
- Account security
- Connected apps

### Info Link
"How to update your legal name"
_On click, this info link will display the following_ see [this Sketch file](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/kavvLel) for reference

Why we ask for this information

If you've changed your legal name, you'll need to tell us so we can change your name in our records.
[Learn how to change your legal name on file with VA](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

### Info Link
"How to fix an error in your name or date of birth" <br>
_On click, this info link will display the following see see [this Sketch file](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/OmjMy8G) for reference

If our records have a misspelling or other error in your name or date of birth, you can request a correction.  We'll ask for a current photo ID that shows proof of the correct information.  We'll accept a government-issued photo ID, driver's license, or passport as proof.

Here's how ot request a correction:

**If you’re enrolled in the VA health care program**

Please contact your nearest VA medical center to update your personal information.

[Find your nearest VA medical center](https://staging.va.gov/find-locations/?facilityType=health)

**If you receive VA benefits, but aren’t enrolled in VA health care**

Call us at 800-827-1000 (TTY:+711). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.


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
Share this information if you'd like us to use a first name that's different from your legal name when you come in to VA.
Kim <br> 
{Edit button}

---


**Pronouns** <br>
She/her/hers, They/them/theirs <br> 
{Edit button}


<hr>


## Personal Information Page - Blank State

### Specification
The Blank state is similar to the Read-Only state, except that the Veteran has not yet added a value for a given field.

### Sketch Mockups
- [Personal Information Page - Desktop Blank state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/dlVxdm3)
- [Personal Information Page - Mobile Blank state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/KvxAd9y)

### H1
- Personal information

### Left Nav
- Personal information (selected)
- Contact information
- Military information
- Direct deposit information
- Notification settings
- Account security
- Connected apps

### Info Link
"How to update your legal name"
_On click, this info link will display the following_ see [this Sketch file](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/kavvLel) for reference

Why we ask for this information

If you've changed your legal name, you'll need to tell us so we can change your name in our records.
[Learn how to change your legal name on file with VA](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)

### Info Link
"How to fix an error in your name or date of birth" <br>
_On click, this info link will display the following see see [this Sketch file](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/OmjMy8G) for reference

If our records have a misspelling or other error in your name or date of birth, you can request a correction.  We'll ask for a current photo ID that shows proof of the correct information.  We'll accept a government-issued photo ID, driver's license, or passport as proof.

Here's how ot request a correction:

**If you’re enrolled in the VA health care program**

Please contact your nearest VA medical center to update your personal information.

[Find your nearest VA medical center](https://staging.va.gov/find-locations/?facilityType=health)

**If you receive VA benefits, but aren’t enrolled in VA health care**

Call us at 800-827-1000 (TTY:+711). We're here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.



### Field Labels and Content

Each div within the form field set will contain:
  - Field label
  - Instructions for adding a value for that field
  - Edit button (for editable fields only)

---

**Date of birth** 
July 16, 1957
- _Note - this field is non-editable_
---



**Gender Identity** <br>

Edit your profile to add a preferred name <br> 
{Edit button}
- _Dev Notes_
   - _When retrieving data from MPI to display in this field, if the value is not NULL/blank, then this field shall be flagged as required._
   - _If the initial MPI-derived value is NULL/blank, then the field shall not be flagged as required._
   - _If the user chooses to add a value to a field that initially contained a NULL/blank value, upon saving that new value, the field shall be flagged as required from that point forward._

---


**Gender Identity** <br>

Edit your profile to add a pronoun <br> 
{Edit button}
- _Dev Notes_
   - _When retrieving data from MPI to display in this field, if the value is not NULL/blank, then this field shall be flagged as required._
   - _If the initial MPI-derived value is NULL/blank, then the field shall not be flagged as required._
   - _If the user chooses to add a value to a field that initially contained a NULL/blank value, upon saving that new value, the field shall be flagged as required from that point forward._

---


## Personal Information Page - Edit State
  - _Dev Note - in the Edit state, only _one_ section may be edited at a time._

### Specification
The Edit state is structured the same as the read-only state, except that the field selected for editing will display form controls listed in the table below, followed by {Update} and {Cancel} buttons.  The Pronouns (3), Gender identity (5), and Sexual Orientation (6) fields each provide an "other" option.  When this option is selected for Prounous or Sexual Orientation, the accompanying text field (3a and 6a in the table below) become required if the user attempts to update.  
### Sketch Mockups
- [Personal Information Page - Desktop Edit state](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/52OvGWw)


### Form Field Edit State Labels and Selection Options


<hr>

## Related Slack Threads
- [12/15/2021 Slack thread](https://dsva.slack.com/archives/C909ZG2BB/p1639587317423200) advising that an email exchange from MPI clarifies that Preferred Name is required if a value previously exists, max length of open text fields and the fact that there is no support for an open text entry option for Gender Identity.

- [3/28/2022 Slack thread](https://dsva.slack.com/archives/C7TE0PFTL/p1648488984042889) listing Maria Harmon's understanding of the interface requirements, notably that the preferred name cannot be deleted once entered, can enter open text into Pronoun for "other"
