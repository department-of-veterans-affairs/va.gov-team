# IA Design for updates to the 5490, 1990, and 1990e URLs
**STATUS: In Progress**

**Team:** There are two teams coordinating this work:

1. DGIB (Accenture Federal Services)
- Clayton Holcomb: DGIB PM
- Eddie Ricks: VA stakeholder
- **Own new 1990, 1990e, new 5490**
- #my-education-benefits
  
2. GovCIO
 - Jarred Simon: GovCIO tech lead
 - Stefanie Logan?:  VA stakeholder 
- **Own 1990 unauth, old 5490**
- #govcio-vfep-team OR #govcio-vebt-team, not sure the difference


**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launchstuff)


## <a name="map"></a>Page structure<br>

5490 and 1990e will go into the new family member hub:
![Screenshot 2024-12-12 at 12 06 01 PM](https://github.com/user-attachments/assets/6da290b6-1e91-42d4-ae15-51bfce98cabf)

The new 1900 will go in the veteran education hub:

![Screenshot 2024-12-12 at 12 12 54 PM](https://github.com/user-attachments/assets/5fe01b43-e829-4e14-aa89-bc6eca7a8dbd)


## <a name="url"></a>URLs and breadcrumbs


**1) New 5490 DEA/Fry Application**
- URL: www.va.gov/family-and-caregiver-benefits/education-and-careers/apply-for-dea-fry-form-22-5490/
- Breadcrumb: VA.gov home > Family and caregiver benefits > Education and career benefits for family members > Apply for education benefits as an eligible dependent
- Notes: There are currently 2 versions of this form that exist. One at https://www.va.gov/family-and-caregiver-benefits/education-and-careers/apply-dea-fry-form-22-5490/ (owned by GovGIO) and the other one at va.gov/education/survivor-dependent-education-benefit-22-5490 that accenture just published. Both will be redirected as part of this initiative.

**2) 1990e Use Transferred GI Benefits Form**
- URL: www.va.gov/family-and-caregiver-benefits/education-and-careers/transferred-gi-bill-benefits/apply-form-22-1990e/
- Breadcrumb: VA.gov home > Family and caregiver benefits > Education and career benefits for family members > Transferred Education Benefits For Family Members > Apply to use transferred education benefits
- Notes: There is currently a duplicate of this form at https://www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/ that we will be redirecting as part of this initiative.

**3) 1990 GI Bill Application**
- URL: www.va.gov/education/apply-for-gi-bill-form-22-1990/
- Breadcrumb: VA.gov home > VA education and training benefits > Apply for GI Bill education benefits
- Notes: There are current two versions of this form: [unauth](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction/) and [auth](https://www.va.gov/education/apply-for-benefits-form-22-1990/), that we will be redirecting as part of this initiative.


## <a name="nav"></a>Entry points <br>

### Navigation pathways and entry point for launch
See more about [navigation pathways and entry points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/entry-points.md). Teams must launch with at least one navigation pathway.

**1) New 5490 DEA/Fry Application nav pathway**
- The primary navigation pathway will remain the same as it is today, through the family member hub left nav, and through the 2 separate static pages for [DEA](https://www.va.gov/family-and-caregiver-benefits/education-and-careers/dependents-education-assistance/) and [Fry](https://www.va.gov/family-and-caregiver-benefits/education-and-careers/fry-scholarship/).
![Screenshot 2024-12-12 at 12 19 43 PM](https://github.com/user-attachments/assets/09194ce4-395a-4c58-a920-67f62a161073)
![Screenshot 2024-12-12 at 12 20 01 PM](https://github.com/user-attachments/assets/4a8d8a05-d10f-44f3-bf52-1559279a67a0)


**2) 1990e Use Transferred GI Benefits Form nav pathway**
- The primary navigation pathway will remain the same as it is today, through the [transferred education benefits](https://www.va.gov/family-and-caregiver-benefits/education-and-careers/transferred-gi-bill-benefits/) family member hub static page.
![Screenshot 2024-12-12 at 12 21 40 PM](https://github.com/user-attachments/assets/f65673df-6ecb-4358-9ea6-9afa80576522)


**3) 1990 GI Bill Application nav pathway**
- The primary navigation pathway will remain the same as it is today -- through the wizard on the [How to apply](https://www.va.gov/education/how-to-apply/) page in the veteran education hub:
 ![Screenshot 2024-12-12 at 12 14 54 PM](https://github.com/user-attachments/assets/1b5591a1-e24a-409f-bfbc-32802ec0c546)
 


## <a name="launchstuff"></a>Launch coordination activities <br>

### Redirects

Process update 12/17/24: We are focusing on the new 5490 redirect into the FMB hub before the new year. In the beginning of January, Mikki is going to reach out to these 2 teams about the other remaining redirects. FYI Jarred Simon is no longer the tech lead on GovCIO so we will be communicating with a new person -- Mikki has their name. DGIB may be doing all of these redirects -- remains to be seen.

| Page Name                             | Current URL                                                                                                            | Will redirect to…                                                                                                |  Who is doing the redirect?      |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| Old unauth (GovCIO) DEA/Fry Application 5490 | https://www.va.gov/family-and-caregiver-benefits/education-and-careers/apply-dea-fry-form-22-5490/ AND ALL CHILD PAGES | www.va.gov/family-and-caregiver-benefits/education-and-careers/apply-for-dea-fry-form-22-5490/                   | |
| New auth-only(Accenture/DGIB) DEA/Fry Application 5490 | https://www.va.gov/education/survivor-dependent-education-benefit-22-5490/ and all child pages                         | www.va.gov/family-and-caregiver-benefits/education-and-careers/apply-for-dea-fry-form-22-5490/                   | Accenture/DGIB [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99129) DONE AND IN PROD|
| Old Use transferred benefits 1990e (Accenture/DGIB)    | https://www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/  AND ALL CHILD PAGES               | www.va.gov/family-and-caregiver-benefits/education-and-careers/transferred-gi-bill-benefits/apply-form-22-1990e/ |Accenture/DGIB [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101193#event-15946145857)|
| Apply for GI bill 1990 (Accenture/DGIB), auth only     | https://www.va.gov/education/apply-for-benefits-form-22-1990/    AND ALL CHILD PAGES                                                      | www.va.gov/education/apply-for-gi-bill-form-22-1990/                                                                | |
| Apply for GI bill 1990 (GovCIO), unauth        | https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction/     AND ALL CHILD PAGES                          | www.va.gov/education/apply-for-gi-bill-form-22-1990/                                                                | Accenture/DGIB [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101193#event-15946145857) We identified a problem where this old program [VEAP](https://www.va.gov/education/other-va-education-benefits/veap/) directs users to the unauth 1990, but there isn't an option for user to select VEAP program. We're trying to figure out what these VEAP ppl need re: 1990 to determine whether we can successfully redirect the old auth form to the new URL, which only mentions GI bill. The EDU team said there are only about 100 veterans who are eligible for VEAP. Next step is for Beth to confirm with EDU what the status of VEAP is and what users should do (whether it's digital 1990, which doesn't currently seem possible, paper 1990, or something else). Then we will confirm the redirect |


### Best bets
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. Best bets are not implemented for every page, and not intended to be permanent.  They can aid in helping visitors find content and features that are not easily found or not ranking well in search. Existing best bets must be removed or updated when links/URLs change.*

**1. Update [1990 best bet](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction/) with new URL** - 

### Crosslinks
Open a ticket for the content team to update crosslinks throughout the site.

<hr>
<hr>
