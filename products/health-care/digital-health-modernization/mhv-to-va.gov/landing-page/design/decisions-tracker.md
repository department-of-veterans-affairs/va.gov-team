# Design decisions tracker
Started June 26, 2024

## Past decisions 
Decisions made before June 26, 2024

### Update text size
VADS decided to bump up the base text size from 16px to 17px. In response, we decided to also bump up our text sizes 1px to keep relative hierarchy on the page. This means that links in the 6 cards are now to be bumped up to 20px, but other links (those in three columns towards the bottom of the page) will remain at the base text size (now 17px).  

[Implementation ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85688)

### External links to have default link style
Based on feedback from OCC members, we decided to decrease visual salience of external links on the page (and specifically within 6 cards). Both the link to the National Portal and the link to the BTSSS site should be 17px (base text size), underlined, and default link color. 

[Implementation ticket for BTSSS link](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/82707)

[Implementation ticket for National Portal link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84572)
