# IA Design for Education tests and prep courses reimbursements Form 22-10272, Form 22-0810, Form 22-0810

**STATUS: [In progress]**

**Team:** OCTO request

**People:** 
- Content - Beth Potts, OCTO
- IA - Sam Walker, CAIA
- Edit and Drupal updates - Megan Zehnder, CAIA

**IA Tracker:** [9922047](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92047)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>

See most up-to-date flow in Mural [here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726160586128/343d813fc6515d2e8b2e88aff56aa6fad4fae52d?wid=132-1726168589170)

A note about these flows and forms:

**Licenses and Certifications (L&C)**
- VA will reimburse costs for tests to obtain / maintain licenses and certifications, form 22-0803
- VA will reimburse costs for prep courses for taking license and certification tests, form 22-10272

**National Tests**

- VA will reimburse costs for national higher-ed tests like SAT and GRE, form 22-0810
- VA will reimburse costs for test prep courses for national higher-ed tests like SAT and GRE. There is *no form* for this - org that runs the course submits enrollment verification directly to VA.
- None of the 3 forms are digitized yet.

<img width="1003" alt="reimbursement L C flow" src="https://github.com/user-attachments/assets/848649f9-83b7-48ac-9dbe-99a15a4bbcff">

<img width="637" alt="reimbursement national tests flow" src="https://github.com/user-attachments/assets/257d7ebe-8edf-434e-a4b8-c76508ce0c7f">


## <a name="map"></a>Page structure<br>

![reimbursement sitemap 3](https://github.com/user-attachments/assets/fe81838e-a4a3-49d8-a19f-60bd08515f12)


## <a name="url"></a>URLs and breadcrumbs


**1) [Licensng and Certification tests and prep courses] - [Existing]**
- Old URL: va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/
- New URL: va.gov/education/about-gi-bill-benefits/how-to-use-benefits/**[TBD by content]**

- Old Breadcrumb: VA.gov home > Education and training > About GI Bill benefits > 
How to use your GI Bill benefits > Get paid back for test fees
- New Breadcrumb: Va.gov home > Education and training > About GI Bill benefits > 
How to use your GI Bill benefits > **[Licensing and Certification tests and prep 
courses - or Drupal auto-shortening TBD]**

- Notes: This page is currently in the Education Hub. It's staying there.

**2) [National Tests] - [Existing - expanding content and moving to hub]**
- Old URL: va.gov/resources/can-i-use-my-va-education-benefits-to-pay-for-preparatory-courses/
- New URL: va.gov/education/about-gi-bill-benefits/how-to-use-benefits/**[TBD by content]**
  
- Old Breadcrumb: VA.gov home > Resources and Support > Can I Use My VA 
Education Benefits To Pay For Preparatory Courses?
- New Breadcrumb: Va.gov home > Education and training > About GI Bill benefits >
  
How to use your GI Bill benefits > **[National tests and prep courses - or Drupal auto-shortening TBD]**
- Notes: This page is currently in Resources and Support. It's moving to the Education Hub.

## <a name="nav"></a>Entry points <br>

### Entry points

** Licensing and Certification**

1. **[Left nav: Educaion and training]** - [Modify]
  - Placement description: Keep L&C page in the current location in the Education and training left nav, update the text to match H1 updates. 
  - Link label: **Licensing and Certification tests and prep courses** or TBD by Content
  - Link destination: va.gov/education/about-gi-bill-benefits/how-to-use-benefits/
**[Licensing and Certification tests and prep courses - or Drupal auto-
shortening TBD]**/
  - Notes: The only change for L&C is a naming update

** National Tests**

1. **[Left nav: Educaion and training]** - [Modify]
  - Placement description: Move the National Tests page to the Education and training left nav, directly under L&C.
  - Link label: **National tests and prep courses** or TBD by Content
  - Link destination: va.gov/education/about-gi-bill-benefits/how-to-use-benefits/[National tests 
and prep courses - or Drupal auto-shortening TBD/
  - Notes: This page is moving over from Resources and Support

<img width="981" alt="reimbursement secondary pts 2" src="https://github.com/user-attachments/assets/4021eac1-2a82-4b59-b9ec-999a52069a9a">


### Crosslinks

** Licensing and Certification**

1. **Link on [Education and career counseling](https://www.va.gov/careers-employment/education-and-career-counseling/) page** - [Add]
  - Placement description: Add crosslink to L&C page from the 'Other helpful information' footer section 'Educational and career counseling (VA Chapter 36)'
  - Link label: Licensing and certification tests and prep courses
  - Link destination: va.gov/education/about-gi-bill-benefits/how-to-use-benefits/
[Licensing and Certification tests and prep courses - or Drupal auto-
shortening TBD]/
<img width="686" alt="reimbursements l c crosslinks" src="https://github.com/user-attachments/assets/579c8c80-4e10-40ec-a342-4c4a59e4ace4">


** National Tests**
*No cross-links*

**'About VA Form [form number]' pages**
  - H1s of 'About' pages should be updated:
  -   Form 22-10272 H1 should be updated to: Licensing and certification tests and prep courses
  -   Form 22-0803 H1 should be updated to: Licensing and certification tests and prep courses
  -   Form 22-0810 H1 should be updated to: National tests and prep courses
  -   Note: both 22-10272 and 22-0803 should direct to the same page, as the L&C page includes two reimbursement forms.


## <a name="redirects"></a>Redirects <br>

| Current URL | Redirect to | Notes |
| --- | --- | --- |
| https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/ | https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/[licensing-and-certification-tests-and-prep-courses - or Drupal auto-shortened version TBD] | L&C redirect |
| https://www.va.gov/resources/can-i-use-my-va-education-benefits-to-pay-for-preparatory-courses/ | https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/[national-test-and-prep-courses - or Drupal auto-shortened version TBD] | National tests redirect |
 <img width="1050" alt="reimbursements redirects" src="https://github.com/user-attachments/assets/f9932c6e-0d3b-4098-83cf-afe59170443f">


## <a name="bestbets"></a>Best Bets<br>
- **Update** best bet for Licenses and Certifications page
- **Add** best bet for National Exams page.
<img width="1062" alt="reimbursement best bets" src="https://github.com/user-attachments/assets/e49fdec1-6bb0-4f84-878e-c957f0382081">

## <a name="stagedrollout"></a>Staged Rollout<br>
Not noted in IA ticket

**[Which static page has the widget, ie the main entry point?]**




<hr>
<hr>
