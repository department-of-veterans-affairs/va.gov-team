# IA Design for Income Limits Form
**STATUS: In review**
- Edit history:
  - 1/18/23 - MN - Doc created
  - 1/24/23 - KO and JM - edits
  - 1/26/23 - KO and JM - edits
  - 2/3/23 - KO edits based on H1 (Mikki Approved)
  - 6/14/23 - KO updates for team finalizing flow post-research

**Team:** Public Websites

**IA Request:** [Link to Sitewide Content and IA intake request](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/51132)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>

<img width="704" alt="Userflowsimage" src="https://user-images.githubusercontent.com/122128479/214442121-a9460b89-7512-4dee-a791-b3f1691e72b7.png">

This illustrates an additional user flow for Veterans who wouldn't qualify due to their income (above $90k) -- we want to make sure that all income levels are represented, so that there is no 'dead end' for a veteran who doesn't see their income listed. The team did add this use case to their design as of 2/3/23. 


## <a name="map"></a>Page structure<br>
![Screen Shot 2023-02-03 at 2 41 42 PM](https://user-images.githubusercontent.com/122126772/216716150-0d5ae93d-adf8-40e0-ad27-3e58c00bb9ca.png)


The Income Limits tool will be a new page in the 'More info and resources section' of the health hub. It will be after /communitycare and before /about-affordable-care-act. 



## <a name="url"></a>URLs and breadcrumbs


**1) Income Limits Tool - New**
- Root URL:  www.va.gov/health-care/income-limits
- Breadcrumb: Home > Health Care > [H1 of page]
- Notes: Also, all consecutive pages in the flow (like the steps in the flow) will build from this root URL. We've decided on the following:
- Introduction - www.va.gov/health-care/income-limits/introduction
-  Year screen - www.va.gov/health-care/income-limits/year
-  Zip code screen - www.va.gov/health-care/income-limits/zip
-  Number of dependents screen - www.va.gov/health-care/income-limits/dependents
-  Review Info screen - www.va.gov/health-care/income-limits/review
-  Results screen - www.va.gov/health-care/income-limits/results


## <a name="nav"></a>Entry points <br>
  
 1.  Health care hub left nav - Add
  - Placement description: Under 'More resources', under Community care and above Affordable Care Act
  - Link label: Income Limits
  - Link destination: www.va.gov/health-care/income-limits
  ![Screen Shot 2023-02-03 at 2 40 24 PM](https://user-images.githubusercontent.com/122126772/216716506-7bebdbc9-07b1-49b2-a2eb-9c6a5b6b8706.png)

 
2. Your health care costs - Update link
  - Note: Content will take care of this change, but we wanted to reiterate that we think replacing the link on this page with the link to the new tool and updating the content is important. We guess that most users will find the tool either on this page or the Eligibility page --> we recommend verifying this in user testing.
  - Placement description: On 'Your health care costs' page (https://www.va.gov/health-care/about-va-health-benefits/cost-of-care/). 
  - Link label + locaction: TBD by Sitewide Content
<img width="745" alt="costofcarepage" src="https://user-images.githubusercontent.com/122128479/214926368-f5344e19-dd2b-45e9-a308-114de2433030.png">


3. Eligibility for VA health care - Update link
  - Note: Same as above -- content will take care of this change. This is the other main location we think users will find the tool.
 - Placement description: On Eligibility page (https://www.va.gov/health-care/eligibility/). 
 - Link label + locaction: TBD by Sitewide Content
<img width="678" alt="eligibilitypage" src="https://user-images.githubusercontent.com/122128479/214926801-ccb5e45c-a290-47c7-b539-99dcbeeb1858.png">


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
www.va.gov/healthbenefits/annual_income_limits_health_benefits.asp | www.va.gov/health-care/income-limits  | 
 




<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info

