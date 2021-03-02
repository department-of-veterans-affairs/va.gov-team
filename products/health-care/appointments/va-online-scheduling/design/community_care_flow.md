# Request a Community Care appointment flow

## 1. Type of Care Page
User can select from pre-defined types of care, which are defined in VATS but also hardcoded on the front end

![type_of_care](community-care-flow/type_of_care.png)

If user has no residential address, has or a PO Box in vet 360 profile, the alert appears to prompt them to update their info

![type_of_care_alert](community-care-flow/type_of_care_alert.png)

## 1a. Type of Eye Care Page
Extra sub-type of care selection if user selects eye care

![type_of_eye_care](community-care-flow/type_of_eye_care.png)

## Type of Facility Page
Shown if user and type of care are Community Care eligible.  If the type of care they select is CC only (such as Podiatry) this page would be skipped and they'd be navigated directly to Calendar page

![type_of_facility](community-care-flow/type_of_facility.png)


## Calendar Page
User can select up to 3 Date and AM/PM combintations where they'd prefer to be seen

![calendar](community-care-flow/calendar.png)

### Calendar Validation 
Calendar page, too many preferred times chosen

![calendar_too_many_times](community-care-flow/calendar_too_many_times.png)

Calendar page, no time selected

![calendar_required](community-care-flow/calendar_required.png)

## Preferences page

User can select closest city and state, language preference, and optionally enter in provider info

![preferences](community-care-flow/preferences.png)

If user chooses "Yes" for provider question, fields appear where they can enter info

![preferences_expanded](community-care-flow/preferences_expanded.png)




## Provider Selection Page (unreleased)

Once released, users will be able to search for a provider based on their residential address or current location

![calendar_required](community-care-flow/provider_selection.png)

## Language Selection Page (unreleased)

![calendar_required](community-care-flow/language_preference.png)


## Reason for Appointment Page

![reason](community-care-flow/reason.png)

## Contact Info Page
Phone and email are pre-populated from VA Profile

![contact_info](community-care-flow/contact_info.png)

## Review page
![review](community-care-flow/review_page.png)

### Submit failed
Review page with server error after submit

![submit_failed](community-care-flow/submit_failed.png)

## Community Care Confirmation page

![submit_success](community-care-flow/submit_success.png)

Confirmation page with show more expanded

![submit_success_expanded](community-care-flow/submit_success_expanded.png)

## Email notifications
### If scheduled on requested date:
* Subject: Response to your VHA appointment Request.
* Body: Your Community appointment was scheduled based upon your request.

### If scheduled on different date:
* Subject: Response to your VHA appointment Request.
* Body: Your Community appointment has been scheduled at a time that differs from what you originally requested.
