__Please note: some links in this file point to the vets.gov-team repo.__

# eBenefits Dependents
More content to be added.

### Review of Current 21-686c Implementation (Rainbows Team)
Organizing discovery, reseach and review of current state of Form 686 implementation on VA.gov staging.
#### Current Status
Discovery began in early 2018. The form was built iteratively on Vets.gov, and transitioned to VA.gov. The current version is an MVP with only one flow (adding everyone as though from scratch), but consideration was given to using modular elements in future iterations so that users could add, remove or modify just one person at a time.

As of April 18, 2019, the (686c) form is live in staging. The frontend was built, the backend submission process through EVSS was also built, but the two were not connected. The backend is connected to BGS via an EVSS endpoint.
The work was de-prioritized in favor of focusing on the VA.gov relaunch in Nov 2018.

- Form flow UI is complete (for adding dependents)
- Form is login-gated
- Usability tested (Results?)
- Need to migrate to VA.gov (??)
- Need to integrate FE & BE
- Need to confirm and test connection to EVSS endpoint
- Need UAT & launch prep

#### Rainbows Team Members
- DSVA POC: Andrea Schneider Andrea.Schneider@va.gov
- Product Manager: Ryan Luu ryan.luu@adhocteam.us
- Design Lead: Emily Waggoner emily@adhocteam.us
- Content Writer: Peggy Gannon peggy@thesocompany.com
- Front-end Engineer: Erik Hansen erik@adhocteam.us
- Back-end Engineers: Lihan Li lihan@adhocteam.us & Johnny Holton johnny@oddball.io
#### Resources for Current Rainbows Team Implementation
- [Rainbows Team Documentation Repository](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686)
- [Current Implementation on VA.gov Staging (Requires Login)](https://staging.va.gov/disability-benefits/apply/dependents/introduction) 
  - Username 1: vets.gov.user+1@gmail.com
  - Username 2: vets.gov.user+228@gmail.com
  - Password for both: Zm9ydHkgdHdv
- [BGS Services](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686/Discovery/bgs-sample-requests)
- [BGS Sample Requests](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686/Discovery/bgs-sample-requests)
- [API Calls](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Disability/Declare%20Dependent%20686/api%20calls.md)
- [Current (Legacy) eBenefits Implementation of Form 686 (Screen Caps)](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686/Discovery/eben-screens)
#### Existing Research
- [April 2018](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686/Design/Usability%20Research%20April%202018)
- [June 2018](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686/Design/Usability%20Research%20June%202018)
- [Various Technical, Process and Business Documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686/Discovery)
### VA Form 21-686c
- [PDF (Paper) Form](https://www.vba.va.gov/pubs/forms/VBA-21-686c-ARE.pdf)
- [Form 21-686c Organizational Breakdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/design/dependents/686c_Breakdown_W1.pdf)
- [Current (Legacy) eBenefits (Login Required to Access Dashboard/Profile)](https://www.ebenefits.va.gov/ebenefits/homepage)
