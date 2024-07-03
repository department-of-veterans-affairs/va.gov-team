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

### Add MHV help desk info
The national portal included MHV help desk information on every page of the portal. For the landing page on VA.gov, we see that the "contact us" link in the header seems to be the most immediate and obvious way to find a number to call. [That page linked in the header](https://www.va.gov/contact-us/) shows multiple ways to get in touch until, scrolling down the page, one can find information about a phone number directly to the MHV help desk. 

To help users access the relevant help that they need, we wanted to provide more prominent and specific guidance. We learned that the "need help" component exists in the design system and is used primarily in forms. We decided for now to include that component on the landing page in the hopes of eventually changing the page and re-working how this information is shown. 

[Implementation ticket for need help component for MHV help desk](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/79333)

### Design secondary nav to move between home page and health tools on MHV on VA.gov
Based on multiple research studies about the poor UX associated with navigation on MHV on VA.gov (especially on mobile devices), we set out to find a navigatory solution that would allow users to easily find the options of where else to navigate. We had seen that the "in this section" component in the design system had repeatedly not worked well and so we designed a dropdown that addressed some of the known UX challenges and compared it to a persistent-link navigation in a comparative study. [Learn more about the study and findings here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/readout-deck.pdf). Based on the studies findings, we advocated for adding a persistent link nav to the portal and designed a secondary nav with that in mind. 

[Implementation ticket, or one of them, for secondary nav](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/80827)

### Icon update from font awesome to material icons
Most of the icons used on the landing page and within the secondary nav were easily replaced by material icons, with a few exceptions: the medications option within secondary nav and the medical supplies icon associated with the medical supplies card. 

For medications in the secondary nav, the medicine bottle icon that was slated to replace the font awesome medicine bottle included a health care cross in the middle of the icon, making it look very similar to the medical records icon, which was a page with a health care cross on it. To make these two icons easier to differentiate in the secondary navigation, we made the recommendation that the pill icon be used instead of the medicine bottle. 

For the medical supplies card, the material icon that was slated to replace the font awesome version was a deaf/hard of hearing symbol. This would replace another deaf/hard of hearing symbol (the font awesome version) but already, this icon was not a good representation of the card topic, as hearing aids are not the only medical supply one can order from the links within the card. We decided to move forward with the material icon of a briefcase with a healthcare plus. 

The other team we thought should know about our icon choices were the teams under the Auth exp umbrella: My VA and Profile. We reached out to those teams to let them know about the switch and to ask if there were any concerns. We got the thumbs up and made the changes. 

[Implementation ticket for material icons](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/83788)
