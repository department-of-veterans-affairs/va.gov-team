# IA Design for MHV on VA.gov: Medical Records
**STATUS: In progress**

**Team:** Health apps - medical records

**IA Request:** [Epic for medical records work](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/52997)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Secondary nav](#nav)
- [Meeting notes and open items](#notes)


## <a name="flows"></a>User/page flows <br>
*Illustration and/or description of how users will flow through the experience. The user flow helps illustrate how visitors will navigate to and through your product/feature, ensures all types of visitors and scenarios are accounted for, and aids in identifying all content and messaging needs.*


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*
<br>
- The medical records features will be organized into 3 separate groups within the MHV on VA.gov experience: lab and test resutls, health history, and medical records - represented by the oranged dashed outlines in the below diagram

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/39f2c201-c5e2-48cd-89ad-ddb8d731482a)



## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*

**Note: The breadcrumbs for these pages may need to be suppressed until the "My health" landing page is live to avoide having an inactive segment in the breadcrumb.  If the "My health" landing page is live by the time these features go live, the breadcrumb can exist as noted.**

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Lab and test results listing page | www.va.gov/my-health/labs-tests | Desktop:  VA.gov home > My Health > [H1 of tests listing page] <br> Mobile: < My health |  
Lab and test result detail page | Builds on URL for listing page | Desktop: VA.gov home > My Health > [H1 of tests listing page] > [H1 of tests detail page]  <br> Mobile: < [H1 of test listing page]  |  
Health history landing page | www.va.gov/my-health/health-history | Desktop: VA.gov home > My Health > [H1 of health history landing page] <br> Mobile: < My health | 
Allergies listing page | www.va.gov/my-health/health-history/allergies | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of allergies listing page] <br> Mobile: < [H1 of health history landing page] |
Allergies detail page | Builds on URL for listing page  | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of allergies listing page] > [H1 of allergies detail page] <br> Mobile: < [H1 of allergies listing page] |
Notes listing page  | www.va.gov/my-health/health-history/notes | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of notes listing page] <br> Mobile: < [H1 of health history landing page] |
Notes detail page  | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of notes listing page] > [H1 of notes detail page] <br> Mobile: < [H1 of notes listing page] |
Health conditions listing page  | www.va.gov/my-health/health-history/conditions | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of conditions listing page] <br> Mobile: < [H1 of health history landing page] |
Health conditions detail page | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of conditions listing page] > [H1 of conditions detail page] <br> Mobile: < [H1 of conditions listing page] |
Vaccines listing page  | www.va.gov/my-health/health-history/vaccines | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vaccines listing page] <br> Mobile: < [H1 of health history landing page] |
Vaccines detail page  | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vaccines listing page] > [H1 of vaccines detail page] <br> Mobile: < [H1 of vaccines listing page] |
Vitals listing page  | www.va.gov/my-health/health-history/vitals | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vitals listing page] <br> Mobile: < [H1 of health history landing page] |
Vitals detail page  | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vitals listing page] > [H1 of vitals detail page] <br> Mobile: < [H1 of vitals listing page] |
Medical records landing page  | www.va.gov/my-health/medical-records | Desktop:  VA.gov home > My Health > [H1 of records listing page] <br> Mobile: < My health |
Blue button download page  | www.va.gov/my-health/medical-records/blue-button | Desktop:  VA.gov home > My Health > [H1 of records listing page] > [H1 of blue button detail page] <br> Mobile: < [H1 of records listing page] |
Health summary download page  | www.va.gov/my-health/medical-records/health-summary | Desktop:  VA.gov home > My Health > [H1 of records listing page] > [H1 of health summary detail page] <br> Mobile: < [H1 of records listing page] |


## <a name="nav"></a>Secondary navigation <br>
*Secondary navigation needs within this feature.*

- Secondary/left navigation order
  - Lab and test results
  - Health history
    - Allergies
    - Care notes and summaries
    - Health conditions
    - Vaccines
    - Vitals
  - Share medical records


<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info

Open issues:
- Need to determine if secondary nav is needed in initial phases for health history, or possibly a combo secondary left nav that brings these sections together
  - We will create a combined secondary/left nav that will include Lab and test results, Health history, and Share medical records - no other portal features will be included in the left nav
- identify what phases breadcrumb needs to be suppressed for - until it is linked to from the va.gov landing page
  - Breadcrumb to be suppressed only until new portal landing page is live
- identify phase when entry points should be implemented
- identify where existing medical records and lab and test results link on My VA links to
- identify what changes are needed to health care hub, inlcuding the existing get medical records page and lab an tests results page
  - Do we need to broaden page to include access to lab and tests as well as health history, or do we keep individual pages (health history page does not exist)
  - Pull analytics and SEO data on existing pages and keywords for reference
- redirects
  - timing is based on different phases
  - need to identify who will redirect myhealth.va.gov URLs
- User flow changes 
  - can we bypass the static page for authenticated users
