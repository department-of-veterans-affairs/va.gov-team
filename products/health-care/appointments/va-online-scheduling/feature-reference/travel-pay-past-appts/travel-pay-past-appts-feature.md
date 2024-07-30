# Travel Reiumbursement Claims for Past Appointments

## Overview

This initiative allows Veterans to file a mileage-only beneficiary travel (BT) reimbursement claim for an eligible appointment from their past appointments list on VA.gov.

An elibible appointment means any in-person appointment that was “completed” yesterday or up to the previous 30 days and hasn’t had a BT claim already filed for this day and at this facility (using the BTSSS Get Claim Status API).
“Completed” is in quotations because a BT claim can be submitted to BTSSS even if it’s not in a CHECKED-OUT status in VistA. (BTSSS rules engine picks up the process from this point.)

## User stories

As a Veteran, I would like to easily submit a travel reimbursement claim for a past appointment online so that I don't have to use a paper form or figure out how to use the BTSSS portal.

## Requirements

**Functional**

A link to a new BTSSS online mileage-only travel reimbursement claim form will be provded to Veterans for each of their past appointments on VA.gov that meet the following criteria:
  - Appointment is one of the following appointment types
      - In-person appointment
      - In-person vaccine appointment
      - Video at a VA facility appointment
 - Appointment has not been cancelled
 - Appointment occured before today but is not more than 30 days old
 - Veteran has not already filed a claim for the appointment date

### Technical notes
   

## Specifications

[User flow]() - TBD
[Wireframes]() - TBD

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->


## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- TBD

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- TBD

## Alerts and other states
<!-- Any alerts that could display for this feature and what triggers them. -->


## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** https://staging.va.gov/health-care/schedule-view-va-appointments/appointments

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

