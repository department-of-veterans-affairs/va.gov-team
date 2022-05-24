# Platform Identity Team Support Contacts
This document is a collection of contacts which can be used when trying to gain more information or troubleshoot issues related to external Identity dependencies.

## Identity team

## Eauth Sign In
VA.gov utilizes the "eauth" service from the IAM (Identity and Access Management) team to support authentication (and single sign on). The sign in flow starts on va.gov, goes through the eauth service, then onto the credential servce provider. The credential service providers are Login.gov, ID.me, DSlogon, and MyhealtheVet. If you are unsure which service is having an issue, you can typically tell by the last URL on the page. The eauth service is maintained by the IAM team and is hosted at `*.eauth.va.gov/*`. If you experience an error within any of the eauth.va.gov URLs you can start by posting your question in the [#vsp-identity-team](https://dsva.slack.com/archives/CSFV4QTKN) slack channel inside the DSVA workspace. Your messages should be directed towards Damien however if you require something more than a quick question to be answered you should email the following contacts and/or submit a [support ticket](#support-tickets).

### Main contacts:
- Damien DeAntonio:
  - @Damien DeAntonio (Slack)
  - damien.deantonio@va.gov 
- Perry Vessels
  - @Perry Vessels (Slack)
  - Perry.Vessels@va.gov

### Support Tickets
- Lower environments: https://dvagov.sharepoint.com/sites/OITEPMOIAM/Lists/IAM%20Environment%20Tasks/active.aspx
  - Instructions: https://dvagov.sharepoint.com/sites/OITEPMOIAM/playbooks/Pages/LETT.aspx   
- Prod environments: https://yourit.va.gov/
  - Instructions: In the comments field ask to route the ticket to IAM, mention Damien DeAntonio, then ping Damien directly in slack with the ticket informtation.

Keywords for this section: IAM, eauth, SSOe, IBM ISAM, accessva

## MHV Sign in
MHV (MyHealtheVet) has a credential provider which is initiated through their domain, mhvidp-prod.myhealth.va.gov. When a user selects the MHV sign in button on va.gov the authentication flows through eauth, onto ID.me, and then stops at mhvidp-prod.myhealth.va.gov to allow the user to enter their credentials. If you experience an error within any of the mhvidp-prod.myhealth.va.gov URLs you can start by posting your question in the [#vsp-identity-team](https://dsva.slack.com/archives/CSFV4QTKN) slack channel inside the DSVA workspace. If you require something more than a quick question to be answered you should email the following contacts and/or submit a [support ticket](#support-tickets).

### Main contacts:
- Cheruvu, Haritha <Haritha.Cheruvu@va.gov>
- Tzvetanov, Dimitar A. <Dimitar.Tzvetanov@va.gov>,
- Boire, Jason D. <Jason.Boire@va.gov>
### Support Tickets
- All environments: https://yourit.va.gov/
  - Instructions: In the comments field ask to route the ticket to MHV then email one of the above contacts to notify them of the ticket.

Keywords for this section: MHV, myhealthevet

## DSLogon Sign in
DSlogon has a credential provider which is initiated through their domain, myaccess.dmdc.osd.mil. When a user selects the MHV sign in button on va.gov the authentication flows through eauth, onto ID.me, and then stops at myaccess.dmdc.osd.mil to allow the user to enter their credentials. If you experience an error within any of the myaccess.dmdc.osd.mil URLs you can start by posting your question in the [#vsp-identity-team](https://dsva.slack.com/archives/CSFV4QTKN) slack channel inside the DSVA workspace.

### Main contacts:
- We do not have any contacts at this time which can be reached out to directly. Please work with the Identity team for further assistance.
### Support Tickets
- We do not have any support ticket solutions at this time which can be used directly. Please work with the Identity team for further assistance.

Keywords for this section: DSLogon, DoD, ebenefits

## Login.gov Sign in
Login.gov has a credential provider which is initiated through their domain, secure.login.gov. When a user selects the login.gov sign in button on va.gov the authentication flows through eauth, and then stops at secure.login.gov to allow the user to enter their credentials. If you experience an error within any of the secure.login.gov URLs you can start by posting your question in the [#vsp-identity-team](https://dsva.slack.com/archives/CSFV4QTKN) slack channel inside the DSVA workspace.

### Main contacts:
- TBD
### Support Tickets
- TBD

## ID.me Sign in
