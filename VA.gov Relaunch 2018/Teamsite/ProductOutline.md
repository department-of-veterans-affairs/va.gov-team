# Teamsite Product Outline

## Communications
- GitHub Label: team-site
- Slack channel: #rainbows-team
- POC - Ryan Luu 
   - Slack: @ryanluu
   - e: Ryan.luu@adhocteam.us
   - GH: rtluu

## User Problem Statement
It’s hard to navigate all of the VA’s different web properties, being served by different systems.

### User Goals
- Consistent navigation across the new va.gov pages and old teamsite pages

### Business Goals
- Create a cohesive brand across the VA
- Maintain good relations with other VA offices


## Assumptions
- It is technically possible to replicate the functionality of the preview.va.gov header/footer across teamsite properties.
- We can create a consistent experience for users by replacing the header / footer on teamsite properties.

## Scope for Nov 7 Launch
- The header / footer from preview.va.gov should function on the following pages:
   1. Any www.va.gov page that uses teamsite
   2. benefits.va.gov pages 
   3. cem.va.gov pages 
   4. www.choose.va.gov pages

## Solution Approach
- Inject scripts and stylesheets on the teamsite pages to hide the default header / footer and display the preview.va.gov header / footer.

## Value Propositions
- Reduces confusion for user navigation throughout the site
- Improves brand consistency for the VA
- Comradery 'cause we’re all on the same team

## KPIs
- This product does not yet have KPIs.

---

# Implementation Info

## Status
**DIRECT LINKS ON VA.GOV HEADER**
_The following sites use template X - these are all of the pages we'll test when the Teamsite header is injected by the Teamsite admin **(Josh)**_
**Va.gov**
   - https://preview.va.gov/health/ - header visible / injected by proxy
   - https://preview.va.gov/opa/bios/index.asp header code present (not whitelisted)
   - https://preview.va.gov/landing_organizations.htm proxy injection hook present (weird because the header code should be present)
   - https://preview.va.gov/OPA/index.asp header code present (not whitelisted)
   - https://preview.va.gov/oca/index.asp header code present (not whitelisted)
   - https://preview.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp header code present (not whitelisted)
   - https://preview.va.gov/VETDATA/index.asp header code present (not whitelisted)
   - https://preview.va.gov/VETDATA/index.asp header code present (not whitelisted)
   - https://preview.va.gov/recovery/ header code present (not whitelisted)
   - https://preview.va.gov/ABOUT_VA/index.asp header code present (not white listed)
   - https://preview.va.gov/about_va/vahistory.asp header code present (note whitelisted)
   - https://preview.va.gov/performance/ header code present (not whitelisted)
   - https://www.volunteer.va.gov/index.asp proxy injection hook present
Subdomains
   - https://www.benefits.va.gov/benefits/ proxy injection hook present
   - https://www.benefits.va.gov/GIBILL/Feedback.asp proxy injection hook present
   - https://www.benefits.va.gov/vocrehab/transitioning_from_service.asp proxy injection hook presentHousing
   - https://www.benefits.va.gov/insurance/bfcs.asp proxy injection hook present
   - https://www.benefits.va.gov/INSURANCE/updatebene.asp (missing injection hook)
   - https://www.benefits.va.gov/INSURANCE/sglivgli.asp (missing injection hook)
   - https://www.benefits.va.gov/INSURANCE/SOES.asp (missing injection hook)
   - https://www.cem.va.gov/ proxy injection hook present
   - https://www.cem.va.gov/cem/history/index.asp proxy injection hook present
   - https://www.cem.va.gov/cem/legacy/index.asp proxy injection hook present
   - https://www.cem.va.gov/cem/burial_benefits/need.asp (missing injection hook)
   - https://www.cem.va.gov/cems/listcem.asp (missing injection hook)
   - https://www.telehealth.va.gov/ - proxy injection hook present
   - https://preview.va.gov/homeless/nationalcallcenter.asp header code present (not whitelisted)

**NO DIRECT LINK IN HEADER BUT STAKEHOLDER REQUESTED** 
   - https://www.choose.va.gov/ - uses another template (not X) (missing injection hook)

**ADDITIONAL PAGES TO CONSIDER POST WBC**
_These sites use another template - these are sites we need to know if you (Josh) have access to for adding the scripts to these sites headers
   - Subdomains
      - https://www.research.va.gov/ no snippet present (different template)
      - https://www.data.va.gov/ no snippet present (different template)
      - https://www.benefits.va.gov/benefits/appeals.asp no snippet present (different template)
      - https://www.innovation.va.gov/ no snippet present
      - https://m.va.gov/

## Technical Decisions
- Sign in: for the immediate term (i.e. for Nov 7 Launch), we will remove Sign In / Sign Up from the injected header/footer **for sub-domain pages only** and instead display some CTA to return to the home VA.gov site to sign in. This CTA will be static, so will not change based on whether the user is already logged in or not. [More details here] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Products/Global/Teamsite/sign%20in%20approach.md)

## Team

- VA Digital Strategist(s) *: Chris Johnston christopher.johnston2@va.gov
- Product Manager *: 
   - Ryan Luu ryan.luu@adhocteam.us 
   - Ben Barone 
- Design Lead: Andy Lewandowski andrew.lewandowski2@va.gov
- Eng Lead: Rian Fowler rian.fowler@adhocteam.us
- [Teamsite Manager]: Josh Tuscher Joshua.Tuscher@va.gov 
- Engineers:
   - Rian Fowler
   - Claire Hsu
   - Erik Hansen
   - Narin 
   - Ben Shyong
   - Jeff Balboni
   - James Kassemi

### Screenshots

#### Before
<img width="1680" alt="screen shot 2018-10-26 at 4 36 53 pm" src="https://user-images.githubusercontent.com/21130918/47592415-3fb92500-d941-11e8-8953-841a46d6787e.png">

#### After
<img width="1680" alt="screen shot 2018-10-26 at 4 37 26 pm" src="https://user-images.githubusercontent.com/21130918/47592424-45af0600-d941-11e8-830a-180a4780f7e0.png">
