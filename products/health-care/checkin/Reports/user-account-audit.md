# CIE Accounts
Accounts related to the VA check-in experience.
For full list of team memebers see [team readme](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin#team-members).
## vets-website github (not within ATO boundry)
The frontend for the patient check-in application and pre-check-in application is located at src/applications/check-in.

### Location: 
https://github.com/department-of-veterans-affairs/vets-website

### Manged by: 
Platform Team

### Access:
 - Full team defined by [github team](https://github.com/orgs/department-of-veterans-affairs/teams/patient-check-in)
#### Changes:
No changes were deemed necessary during the scope of this audit.

## vets-api github (not within ATO boundry)
### Location: 
https://github.com/department-of-veterans-affairs/vets-api

### Manged by: 
Platform Team

### Access:
 - Full team defined by [github team](https://github.com/orgs/department-of-veterans-affairs/teams/patient-check-in)
#### Changes:
No changes were deemed necessary during the scope of this audit.

## chip github (code is within ATO boundry)
The code from this repo is manged here and deployed to AWS via [SAM](https://aws.amazon.com/serverless/sam/)

### Location: 
https://github.com/department-of-veterans-affairs/chip

### Manged by: 
Platform Team

### Access:
 - Full team defined by [github team](https://github.com/orgs/department-of-veterans-affairs/teams/patient-check-in)
#### Changes:
No changes were deemed necessary during the scope of this audit.

## cie-staging-scheduler github (not within ATO boundry)
Repo to manage the code for the frontend of the appointment scheduling test tool. A reference to the current AWS lambda code is also managed here but not deployed from this repo. This tool is used to create appointments and manage patient attributes in dev and stage vistas.
### Location: 
https://github.com/department-of-veterans-affairs/cie-staging-scheduler

### Manged by: 
CIE team

### Access:
Admin access:
 - [Adrian Rollett](https://github.com/acrollet)
 - [Brian Seek](https://github.com/brianseek)
 - [Lee Delarm](https://github.com/lee-delarm6)
 - [Lori Pusey](https://github.com/loripusey)
 - [Shane Elliott](https://github.com/shanemelliott)
 - [Stephen Barrs](https://github.com/stephenBarrs)
 - [John Woolschlager](https://github.com/wullaski)

Write access:
 - [Mike Olasin](https://github.com/olamik)

 Read access:
 - [Emily Wilson](https://github.com/ewilson-adhoc)
 - [Andrea Singh](https://github.com/madebydna)
 - [Micah Chiang](https://github.com/micahchiang)
 - [Sarah-Jaine Szekeresh](https://github.com/SarahJaine)
 - patient-check-in [github team](https://github.com/orgs/department-of-veterans-affairs/teams/patient-check-in)
 - ves-envent-bus [github team](https://github.com/orgs/department-of-veterans-affairs/teams/ves-event-bus)
 - vnce-avalanche [github team](https://github.com/orgs/department-of-veterans-affairs/teams/vnce-avalanche)

#### Changes:
No changes were deemed necessary during the scope of this audit.

## VAEC Amazon Web Services (AWS) (CHIP Lambdas and LoROTA Dynamo DB within ATO boundry)
Lambdas for CHIP, and the scheduling tool reside here as well as DynamoDB instances (Lorota)

### Manged by: 
VAEC/ECSO Operations

### Access
Access is provided via elevated access with a Non-mail Enabled Account (NMEA) and e-Token.

- Brian Seek
- Gaurav Gupta
- Kanchana Suriyamoorthy
- Lee Delarm (pending)
- John Woolschlager
- 
#### Changes:
No changes were deemed necessary during the scope of this audit.

## Veterans-affairs PagerDuty (not within ATO boundry)
https://veterans-affairs.pagerduty.com/

### Managed by:
 OCTO PO via DOTS request

### Access
 - Brian Seek
 - Gaurav Gupta
 - John Woolschlager
 - Kanchana Suriyamoorthy
 - Lee Delarm
 - Lori Pusey
 - Patrick Bateman
 - Stephen Barrs

#### Changes:
No changes were deemed necessary during the scope of this audit.

## DVSA PagerDuty (not within ATO boundry)
https://dsva.pagerduty.com/

### Managed by:
va.gov platform (VSP)

### Access
 - Adrian Rollett
 - Andrew Fattorusso
 - Brian Seek
 - Gaurav Gupta
 - Jeremy Britt
 - John Woolschlager
 - Kanchana Suriyamoorthy
 - Lori Pusey
 - Stephen Barrs
 - 
#### Changes:
No changes were deemed necessary during the scope of this audit.

## Google Analytics (not within ATO boundry)

### Managed by:
Platform analytics team

### Access
 - Brian Seek
 - Ben Brasso
 - Lori Pusey
 - John Woolschlager

#### Changes:
No changes were deemed necessary during the scope of this audit.

## SMS batch processing tool (not within ATO boundry)
https://r01fd.r01.med.va.gov/smsbatch

### Managed by:
Andy McCarty (william.mccarty@va.gov)

### Access
 - Brian Seek
 - John Woolschlager

#### Changes:
No changes were deemed necessary during the scope of this audit.

 ## Sketch (not within ATO boundry)

 ### Managed by:
 VA - #design channel in Slack - Kevin Hoffman

 ### Access:
 - Full team

#### Changes:
No changes were deemed necessary during the scope of this audit.

## Feature toggle access (not within ATO boundry)
https://api.va.gov/flipper/features
https://staging-api.va.gov/flipper/features

### Managed by:
VA account combined with email in [list in vets-api](https://github.com/department-of-veterans-affairs/vets-api/blob/78a3b4243102f478bbcc4f8bbbdee2e580ce2283/config/settings.yml).

Moving to gitHub team enabled access https://dsva.slack.com/archives/C03R5SBELQM/p1691616340610669
[Flipper Team](https://github.com/orgs/department-of-veterans-affairs/teams/va-gov-flipper-prod/)

### Access:
- Brian Seek (brian.seek@civicactions.com)
- Gaurav Gupta (ggupta@kindsys.us)
- Kanchana Suriyamoorthy (ksuriyamoorthy@kindsys.us)
- John Woolschlager (john.woolschlager@va.gov)

#### Changes:
These three emails were removed form this list as part of this audit:
- dan.goodwin@civicactions.com
- corey.parker@gcio.com
- julie.adair@agile6.com

 ## Mural (not within ATO boundry)
 Mural room:  Unified Appointments Experience (UAE)
 
 ### Managed by:
 OCTO PO via DOTS request

 ### Access:
 - Ben Brasso
 - Christina Gednalske
 - Kay Lawyer
 - Kristen McConnell
 - Lauren Alexanderson
 - Lori Pusey
 - Mark Dewey
 - Patrick Bateman
 - Kelly Smith
 - Peter Russo
 - Stephen Barrs
 - Zach Park

 #### Changes:
 No changes were deemed necessary during the scope of this audit.
