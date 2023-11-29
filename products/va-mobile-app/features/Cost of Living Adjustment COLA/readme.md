## Overview: 
- VA determines when to process the annual cost-of-living (COLA) adjustment for Veterans’ benefits
- Mobile's purpose is to cupport COLA impacted system downtime, understand what systems are impacted and which will be functional, and what Veteran facing communications do we have 
- As of 2023 BGS and VBMS are the systems that will be down during this time 


## 2023
- In at least 2023 The COLA will be applied during that time to Veterans Benefits Administration (VBA) Compensation Services and Pension & Fiduciary Services benefits, affecting more than 5.8 million records for Veterans and their beneficiaries. Which have been tested for the last few months
- Per VA The following applications will be unavailable:
   - All applications that access the VBA Corporate database (includes BGS)
   - All applications that access the Benefits Delivery Network (BDN)
   - All Veterans Benefits Management System (VBMS) applications
   - All applications that use Common Security System (CSS) for login validation, such as Education
   - All access to the VBA Corporate database through Benefits Enterprise Portal (BEP) via web or Thick-Client application via Tuxedo
- [Mural](https://app.mural.co/inactive-guest?reason=inactivity&workspaceId=departmentofveteransaffairs9999) where VA is gathering service/form/tool specific info and other open questions for 2023
- VA created #cola-downtime-planning-2023 slack channel
- Charles Worthington's opinion on how to handle found [here](https://dsva.slack.com/archives/C064JKBD0N8/p1699376973292399)
   - High level - Let use maintenance window tools to set things correctly and message clearly, beyond that not much we can do  


## Mobile's Involvement 2023:
 - Mobile made aware 11/6 when outage is 11/18 - 11/19 (VA saying they have been testing this for month)s
 - Mobile's ticket [7219](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7219)
 - Mobile features that will not be available during COLA outage
    - Claims - does have a maintenance window set up
    - Appeals - does have a maintenance window set up
    - Direct Deposit Benefits - does have a maintenance window set up
    - Disability Rates - does have a maintenance window set up
    - Letters and Benefits - does have a maintenance window set up
    - Payment History - does have a maintenance window set up
    - Vaccines Records (due to lighthouse dependency) - does NOT have a maintenance window set up
 - Mobile features that will still be functional
    - RX
    - Appointments
    - At least some of profile
 - Mobile had discussions on what app related communication avenues we could use to communicate this
    - Some discussion information can be found in Ad Hoc Slack thread [here](https://adhoc.slack.com/archives/CU2Q76NPR/p1699370525675169)  
    - Whats New In App - deemed not feasible as it only appears for currently release and stays the entire time of that release - leaves out those not updated 
    - Availability Framework - not yet ready to use - should be used for future COLA 
    - App Store - relies on Veterans going to the App store to get updates - typically only uses go to the App Store when they download - promotional text was considered but mobile never used 
    - Maintenance Windows - recommended to be used by VA 

## 2023 Results
 - Engineering identified that some API calls went around the maintenance windows for both web and mobile. Tim Wright to sync with Jayson and Jon to investigate
 - 2 ticket spun off
    - [7336  CU - Disable unnecessary API calls (Disability Rating/Payment History) while in downtime](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7336)
    - [7337 CU - Spike - Review Maint Window Code for efficiency/reporting improvements](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7337)
