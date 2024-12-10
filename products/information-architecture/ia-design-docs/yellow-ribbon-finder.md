# IA Design for merging the 'Find a Yellow Ribbon school' into the 'GI Bill school comparison'
**STATUS: [In progress]**

**Team:** EDM team

**People:**
- EDM PM: Cassidy Beach and Theresa Simeone
- EDM UX: Sneha Kulkarni
- CAIA IA: Sam Walker

**CAIA Intake ticket: [92367](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92367)**

**IA Tracker: [95206](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95206)** 

**On this page:**
- [Page structure](#map)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Staged Rollout](#stagedrollout)

## <a name="map"></a>Page structure<br>
*Illustration and/or description of changes to the overall IA of VA.gov (i.e. a site map).* 
See the [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726160591523/80254437f9b1756df32f7e73ba96ad8fd6bfbdc4?sender=u40d6eca98d1446001ef20655) for this work, for the details shown in this spec.

On moving all data from the 'Yellow Ribbon school finder' tool into the 'GI Bill school comparsion' tool, the Yellow Ribbon tool should be deleted from the left nav of the Education hub.
<img width="939" alt="YR 1" src="https://github.com/user-attachments/assets/a9be2a6e-91a5-45e1-9a82-77e995f8e739">


## <a name="nav"></a>Entry points <br>

### Primary entry point

**1) GI Bill Comparison Tool** - Modify
- Placement description: In the 'GI BIll school comparison' tool, select the 'Offers Yellow Ribbon program' checkbox to view Yellow Ribbon data in search results (final components and labels TBD by team).
- Link label: TBD by team (depending whether the final design keeps the current checkbox and label, or makes updates)
- Link destination: program-level search results, url will vary by search inputs.
- Entry Point Notes: This is not an entry point to *only* Yellow Ribbon data, it is the new entry point to *access the data formerly contained in* the 'Find a Yellow Ribbon school' tool. Since the page for the Yellow Ribbon tool is going away. 
- Comparison Tool Note: The starting step of the Comparison Tool search flow should include content indicating that the Yellow Ribbon info is available there, now.
![YR 6](https://github.com/user-attachments/assets/56d590ce-097d-43c9-8b56-b7622950be65)

### Entry points to REMOVE

**1. Education hub page** - Remove
- Placement description: Education hub page 'More information and resources' section
- Link label: Find a Yellow Ribbon school
- Notes: Remove both the header link and the explanation text for the Yellow Ribbon tool from the section. Consider updating the description of the Comparison Tool to include a mention that the Yellow Ribbon data is now available here, since this is a change to a somewhat popular program.
- Implementation Notes: CAIA Content to remove
![YR 9](https://github.com/user-attachments/assets/b1e0d530-0052-496e-829b-a0cbb75d1e3e)

**2. Education left nav** - Remove
- Placement description: Education left nav 'More resources' section
- Link label: Find a Yellow Ribbon school
- Notes: Remove tool from the left nav.
- Implementation Notes: CAIA IA to remove
<img width="523" alt="yr 1" src="https://github.com/user-attachments/assets/38b9530d-b38d-4917-9ac4-7b99e6f1463c">


### Crosslinks
*CAIA content will identify all places that link to the Yellow Ribbon tool and will modify the link to direct visitors to the new location of the information or remove the link if its no longer applicable in that context.*

 
### <a name="bestbets"></a>Best Bets<br>
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. Best bets are not implemented for every page, and not intended to be permanent.  They can aid in helping visitors find content and features that are not easily found or not ranking well in search. Existing best bets must be removed or updated when links/URLs change.*
- Imelementation Notes: CAIA IA will remove the Yellow Ribbon tool's Best Bet, and add keywords/discoverability for the Yellow Ribbon data to the Comparison Tool best bet.


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=sjcwalker%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
https://www.va.gov/education/yellow-ribbon-participating-schools/ | https://www.va.gov/education/gi-bill-comparison-tool | 
 


## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout?*

No
