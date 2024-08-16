# IA Design for Form Uploader
**STATUS: In review**

**Team:** Veteran facing forms

OCTO product owner: Matthew Dingee
Product name: Document Upload
Product manager: Tricia Baker
**Slack channel:**veteran-facing-forms

**IA Request:** [81623](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=60919068)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
This user flow is intended for forms that are not yet digitized, to replace QuickSubmit (due to it's accessibility problems).
![Screenshot 2024-08-16 at 9 17 59 AM](https://github.com/user-attachments/assets/c408db93-dd2e-4633-8cbc-7f1c2cf472a7)


## <a name="map"></a>Page structure<br>
This uploader tool will live within each about-a-form page for which it is available.
![Screenshot 2024-08-16 at 9 18 39 AM](https://github.com/user-attachments/assets/3978923e-93cc-4b92-8ae5-260d9f96d8ac)



## <a name="url"></a>URLs and breadcrumbs

**1) Form uploader tool - New**
- URL: www.va.gov/find-forms/about-form-[#]/upload-form/introduction/
- Breadcrumb:  VA.gov home > Find a form > About form [#] > Upload form [#]
- Notes: Each form will follow this same pattern above. 

### Sub-URLs

www.va.gov/find-forms/about-form-[#]/upload-form/**veteran-information/**
www.va.gov/find-forms/about-form-[#]/upload-form/**veteran-identification/**
www.va.gov/find-forms/about-form-[#]/upload-form/**file-upload/**
www.va.gov/find-forms/about-form-[#]/upload-form/**review-and-submit/**
www.va.gov/find-forms/about-form-[#]/upload-form/**confirmation/**


## <a name="nav"></a>Entry points <br>

### Primary entry point

1. **About a form page** - Modify
  - Placement description: Below the 'download form' section and above 'related forms and instructions'
  - Link label: TBD by content
  - Link destination: www.va.gov/find-forms/about-form-[#]/upload-form/introduction/
  - Notes:
![Screenshot 2024-08-16 at 9 22 15 AM](https://github.com/user-attachments/assets/7e6cb4de-2e1f-42d2-b551-34cdcef95cb6)

### Crosslinks
Throughout the site, forms may have submission instructions that the content team will need to update. As we add the uploader tool to new forms, we should pay careful attention to the following pages:

1. Static drupal pages: Submission instructions may indicate that users can only submit PDFs by mail. Make sure these sections are updated to reflect this new option.
  - Ex: https://www.va.gov/pension/aid-attendance-housebound/
3. Disability -- [additional forms](https://www.va.gov/disability/how-to-file-claim/additional-forms/) page:  The link to the find-a-form current says "Get form # to download". Consider changing to reflect that they can upload there too.
4. [Supporting forms](https://www.va.gov/supporting-forms-for-claims/) for VA claims: The link to the find-a-form current says "Get form # to download". Consider changing to reflect that they can upload there too.

![Screenshot 2024-08-16 at 9 39 14 AM](https://github.com/user-attachments/assets/65f08004-3576-40b8-859f-aabde487915c)
 

## <a name="redirects"></a>Redirects <br>
No redirects needed for this work.
 

## <a name="bestbets"></a>Best Bets<br>
No best bets needed -- we do not set up best bets for about-a-form pages.

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

**[Which static page has the widget, ie the main entry point?]**

www.va.gov/find-forms/about-form-[#]/upload-form/introduction/


<hr>
<hr>
