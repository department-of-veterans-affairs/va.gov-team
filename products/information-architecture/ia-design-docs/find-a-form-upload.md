# IA Design for Form Uploader
**STATUS: FINAL 1/22/2025**

**Team:** Veteran facing forms

OCTO product owner: Matthew Dingee
Product name: Document Upload
Product manager: Tricia Baker
**Slack channel:**veteran-facing-forms

**IA Request:** [81623](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=60919068)

**[IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723739688312/66816378c17c92835f7a65108057fc255226cb10?sender=ua67f17f1c416a96ea04d2476)** 

**On this page:**
- [Navigation flow](#flows) _Updated 1/22/2025 by MN_
- [Page structure](#map) _Updated 1/22/2025 by MN_
- [URLs and breadcrumbs](#url) _Updated 1/22/2025 by MN_
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>

_Updated 1/22/2025 by MN_

![Image of navigation flow](https://github.com/user-attachments/assets/ce976dd3-b692-4d3f-9743-dfc07db65a32)



## <a name="map"></a>Page structure<br>

_Updated 1/22/2025 by MN_

- This form upload tool will consiste of 2 pages:
    1) Upload a VA form landing page - A static content page built in Drupal. 
    2) Upload form [XXX] flow - A dynamically generated series of pages that allow users to walk through the upload process.


![Image of site map](https://github.com/user-attachments/assets/5daaadec-3b03-4984-a446-1d57f717b235)




## <a name="url"></a>Page URLs, breadcrumbs, and other requirements

_Updated 1/22/2025 by MN_

**1) Upload VA form landing page - New**

- URL: /find-forms/upload/
  - Example:  www.va.gov/find-forms/upload/
- Breadcrumb:  VA.gov home > Find a VA form > [Upload forms H1] 
  - Example: VA.gov home > Find a VA form > Upload VA forms
  - Each segment must exactly match the H1 of the corresponding page
- Notes:
  - **Optional: This page can be tagged as "noindex" to keep it from appearing in search result.**
  - Each form will follow this same pattern above.
    

**2) Upload form flow pages - New**

- URL: /find-forms/upload/[full form number]/
  - Example:  www.va.gov/find-forms/upload/21-0779/
- Breadcrumb:  VA.gov home > Find a VA form > [Upload forms H1] > [Upload form ##-#### H1]
  - Example: VA.gov home > Find a VA form > Upload VA forms > Upload form 21-0779
  - Each segment must exactly match the H1 of the corresponding page
- Notes:
  - Each form will follow this same pattern above.
  - This is the canonical URL for the form flow.  All links should point to this URL.  The form code will immediately redirect the user to the URL for the first page in the flow.  This page is typically the /introduction page.

 
**3) Sub-pages in the form flow - New**

- Breadcrumb: VA.gov home > Find a VA form > [Upload forms H1] > [Upload form ##-#### H1]
  - Example: VA.gov home > Find a VA form > Upload VA forms > Upload form 21-0779
  - Each segment must exactly match the H1 of the corresponding page
  - In form flows, the breadcrumb does not display the pages/path through the flow.  The breadcrumb stops at the initial page of the flow and remains displayed that way throughout the flow.  
- URLs:
  - /find-forms/upload/[full form number]/introduction/
  - /find-forms/upload/[full form number]/veteran-information/
  - /find-forms/upload/[full form number]/veteran-identification/
  - /find-forms/upload/[full form number]/file-upload/
  - /find-forms/upload/[full form number]/review-and-submit/
  - /find-forms/upload/[full form number]/confirmation/
  - Example page URL: www.va.gov/find-forms/upload/21-0779/introduction/



## <a name="nav"></a>Entry points <br>

### Required entry point

1. **About a form page** - Modify
  - Example of this page: https://www.va.gov/find-forms/about-form-21-0779/
  - Placement description: After the 'Download form' section 
  - Link label: TBD by content
  - Link destination: /find-forms/upload/[full form number]/
  - Notes:
    - When linking to the form upload flow, always link to the canonical URL, not the initial page of the flow (i.e. /introduction)

![Screenshot of an about a form page showing entry point placement](https://github.com/user-attachments/assets/7e6cb4de-2e1f-42d2-b551-34cdcef95cb6)

### Additional entry points
Throughout the site, forms may have submission instructions that the content team will need to update. As the form upload tool is added to new forms, please work with CAIA to ensure crosslinks and messaging are updated as appropriate.  Please work with CAIA content to implement any of these additional entry points.  Examples:

1. Static pages in the benefit hubs: Benefit information and "How to apply" pages contain submission instructions. Consider adding content to indicate that the form can be uploaded online and provide a link directly to the upload form flow specific to that form.
  - Ex: https://www.va.gov/pension/aid-attendance-housebound/
3. [Additional forms page in Disability hub](https://www.va.gov/disability/how-to-file-claim/additional-forms/):  Consider adding content to indicate that the form can be uploaded online and provide a link directly to the upload form flow specific to that form.
4. [Supporting forms for VA claims page](https://www.va.gov/supporting-forms-for-claims/): Consider adding content to indicate that the form can be uploaded online and provide a link directly to the upload form flow specific to that form.

 

## <a name="redirects"></a>Redirects <br>
No redirects needed for this work.
 

## <a name="bestbets"></a>Best Bets<br>
No best bets recommended.
- Form flow pages will organically appear in search
- Best bets for these flows would compete with key pages about the form in the benefit space
- Search logs can be reviewed for any search trends related to these pages, and adjustments can be made as appropriate.

## <a name="stagedrollout"></a>Staged Rollout<br>
The team is rolling this out to 100% of users for the two forms they're starting with, so we should not need the staged rollout widget.


<hr>
<hr>
