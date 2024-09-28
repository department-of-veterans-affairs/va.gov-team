# IA Design for Form 26-4555
**STATUS: In progress**
- Edit history
     - 3/1/23: Doc created (MN), edits (JM)
     - 3/2/23: Updated site map image so proposed page is in orange
     - 3/8/23: Edits (JM)
     - 3/23/23: updated URL link to match site map image (JM)

**Team:** Digitize Team

**IA Request:** [Link to Sitewide Content and IA intake request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53077)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>


## <a name="map"></a>Page structure<br>
The digital form will live next to the 'How to apply' page on the same level. Currently, the eBenefits form is housed under 'How to apply', but we have removed links to this feature from the proposed site map below. This form will need to be retired and redirected accordingly, so we recommend working with stakeholders to ensure this flow is accounted for.

<img width="601" alt="Screenshot 2023-03-08 at 4 45 07 PM" src="https://user-images.githubusercontent.com/122128479/223868530-52736140-58bd-44ad-a479-cd07f3e75036.png">


## <a name="url"></a>URLs and breadcrumbs

**1) H1 of page - New**
- URL: www.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555
- Breadcrumb: Home > Housing assistance > Housing grants > H1 of page
- Notes: We are proposing "grant" in the link as an identifier for this form. We believe 'housing' may not be specific enough for this form and using acronyms, such as SAH or SHA, may not be easily recognizable by Veterans who are not yet familiar with the different forms. 

In addition, subsequent pages will add on to the above URL using short and simple labels, i.e. .../introduction/

An example of this can be seen in the following link

www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/introduction 


## <a name="nav"></a>Entry points <br>

1. Housing assistance hub - Update link
  - Placement description: Under 'Get Veterans housing assistance grants', the current link titled 'Apply for a Specially Adapted Housing grant' links to the 'How to apply' page. The title for this link will need to be updated so it reflects the page it links to.
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/housing-assistance/disability-housing-grants/how-to-apply/
  - Notes: The 'How to apply' page will serve as informational and the 'Apply for' page will be that actual application
<img width="714" alt="Screenshot 2023-03-01 at 2 44 29 PM" src="https://user-images.githubusercontent.com/122128479/222260801-d24cbd0f-66d2-494c-a906-84a6f4d4effa.png">

2. Housing assistance hub - Add
  - Placement description: Under 'Get Veterans housing assistance grants' as the 3rd option
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555
  - Notes: 
  
![Screenshot 2023-03-01 at 6 40 51 PM](https://user-images.githubusercontent.com/122128479/222300205-91cd8fcc-f0cb-4f5d-b4ea-81476e2da0d8.png)

3. [How to apply for an adapted housing grant](https://www.va.gov/housing-assistance/disability-housing-grants/how-to-apply/) - Modify
  - Placement description: Replace link label text so that it refers to the online application rather than to eBenefits
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555
  - Notes: eBenefits is being sunset in June 2024
 
4. [Disability housing grants for Veterans](https://www.va.gov/housing-assistance/disability-housing-grants/) - Modify
  - Placement description: Replace link label text so that it refers to the online application rather than to eBenefits
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555
  - Notes:

5. Housing assistance left nav - Add
  - Placement description: Under 'Housing grants' as the 2nd option
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555
  - Notes: 
 <img width="446" alt="Screenshot 2023-03-01 at 2 52 40 PM" src="https://user-images.githubusercontent.com/122128479/222262424-d2ed2ba0-4b82-4d62-9e59-c1dc83481e7e.png">

 
6. Housing assistance top nav fly out - Add
  - Placement description: Under 'Get Veterans housing grants' column as the 4th option (bottom)
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555
  - Notes: 
 
![Screenshot 2023-03-01 at 6 37 44 PM](https://user-images.githubusercontent.com/122128479/222299846-57c4bcf0-ab07-4a55-a3a7-69f3a5e5e4a4.png)


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
 |  | 
 




<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info

#### January 11, 2023 - Updates
PW team has completed the temporary redirect request for this form so folks are sent to the How to apply page until the form is republished. As per Jill, we can create a new ticket once the team is ready to remove this temporary redirect.

Tricia shared an update on API during content office hours. Engineering team is still actively working on this and will keep us posted on when the form will be live again on the site.

#### November 20, 2023
Connected with PM Tricia Baker to check on rollout timeline as we weren't seeing the above entry points implemented on the site. Tricia's update on this:

`It was rolled out in Production in April, but we have since turned it off because the business line wrote an API to connect the data to it and they didn't want it to go to Central Mail anymore so it will probably stay off for awhile`

URL is currently active so team is checking on this.

[Slack thread](https://dsva.slack.com/archives/C044AGZFG2W/p1700516181169419)
