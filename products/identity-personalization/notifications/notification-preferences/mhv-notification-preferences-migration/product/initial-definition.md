# Initial MHV notification preferences definition

This document will help us define which notification preferences we will include in our initial intakes to VA Profile and VANotify.

## Overview

Is there anything missing from either list?

#### Existing notifications

- [RX refill shipment notification (from CMOP)](#rx-refill-shipment-notification-from-cmop)
- [VA Appointment reminders](#va-appointment-reminders)
- [Securing messaging alert](#securing-messaging-alert)
- [Medical images and reports available](#medical-images-and-reports-available)
- [Biweekly MHV newsletter](#biweekly-mhv-newsletter)

#### New notifications

- [RX refill shipment notification from a local pharmacy](#rx-refill-shipment-notification-from-a-local-pharmacy)
- [Send health summary to your non-VA care provider or to some other email address](#send-health-summary-to-your-non-va-care-provider-or-to-some-other-email-address)
- [After Visit Summary](#after-visit-summary)


## Existing notifications 

### RX refill shipment notification (from CMOP)

- **Existing notification through MHV?**: Yes
  - **If no, when will this be ready for support by MHV**: N/A
- **Format**: Email
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: Yes -- there are text notifications being piloted at select VAMCs
- **What backend triggers this notification?**: CMOP -- any others?
- **What backend stores this preference?**:
- **Additional notes**: This is triggered by the MHV nightly pull of new CMOP shipment data.


### VA Appointment reminders

- **Existing notification through MHV?**: Yes
  - **If no, when will this be ready for support by MHV**: N/A
- **Format**: Email
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: Yes
- **What backend triggers this notification?**:
- **What backend stores this preference?**:
- **Additional notes**: Reminder sent 7 days prior to a scheduled appointment and 3 days prior to a scheduled appointment.


### Securing messaging alert

- **Existing notification through MHV?**: Yes
  - **If no, when will this be ready for support by MHV**:  N/A
- **Format**: Email
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: No
- **What backend will trigger this notification?**:
- **What backend stores this preference?**:
- **Additional notes**: This is triggered by a new secure message in user’s secure messaging inbox.


### Medical images and reports available

- **Existing notification through MHV?**: Yes
  - **If no, when will this be ready for support by MHV**: N/A
- **Format**: Email
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: No
- **What backend triggers this notification?**:
- **What backend stores this preference?**:
- **Additional notes**: Sent to notify someone that a Medical Image and Report download is complete.


### Biweekly MHV newsletter

- **Existing notification through MHV?**: Yes
  - **If no, when will this be ready for support by MHV**: N/A
- **Format**: Email
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: No
- **What backend triggers this notification?**:
- **What backend stores this preference?**:
- **Additional notes**: Which system supports this now (eg. GovDelivery)? Is it safe to assume that system will continue to support this email (note: this should not affect our ability to support the preference)?


## New notifications

### RX refill shipment notification from a local pharmacy

- **Existing notification through MHV?**: No
  - **If no, when will this be ready for support by MHV**: [Month and year]
- **Format**: [Email/Text]
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: No -- existing notification covers shipments from VA
- **What backend will trigger this notification?**: 
- **What backend stores this preference?**: N/A -- not an existing preference
- **Additional notes**


### Send health summary to your non-VA care provider or to some other email address

- **Existing notification through MHV?**: [Yes/No]
  - **If no, when will this be ready for support by MHV**: [Month and year]
- **Format**: [Email/Text]
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: [Yes/No]
- **What backend will trigger this notification?**:
- **What backend stores this preference?**:
- **Additional notes**:

### After visit summary

- **Existing notification through MHV?**: [Yes/No]
  - **If no, when will this be ready for support by MHV**: [Month and year]
- **Format**: [Email/Text]
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: [Yes/No]
- **What backend will trigger this notification?**:
- **What backend stores this preference?**:
- **Additional notes**:

### [Notification name]

- **Existing notification through MHV?**: [Yes/No]
  - **If no, when will this be ready for support by MHV**: [Month and year]
- **Format**: [Email/Text]
- **Needs VANotify support?**: [Yes/No]
- **Already has a corresponding text notification supported on VA.gov?**: [Yes/No]
- **What backend will trigger this notification?**:
- **What backend stores this preference?**:
- **Additional notes**:
