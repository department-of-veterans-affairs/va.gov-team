# IA Design for school admins' enrollment reporting (form 22-10215 and 22-10216) 

**STATUS: [In progress]**

**Team:** [govcio-vebt]

**People:** 

- PO - Darla van Nieukerk OCTO
- Design - Ariana Adili govcio-vbet
- IA - Sam CAIA

[**CAIA Intake Ticket: 85/15 Rule form 22-10215**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92591) 

[**IA Review Ticket: 85/15 Rule reporting form 22-10215:** ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92142)

[**CAIA Intake Ticket: 35% exemption request from 85/15 reporting requirement, form 22-10216**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92587) 

[**IA Review Ticket: 35% exepmtion request from 85/15 Rule reporting requirement, form 22-10216:** ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92143)

*Note: CAIA can only offer detailed support (e.g. URLs, breadcrumbs, content recommendations, etc.) for pages that are veteran-facing, due to capacity constraints. So the recommendations here are brief, and the URL options are more in the spirit of suggestions.*


**On this page:**
- [Location of forms](#location-of-forms)
- [User/page flows](#user-page-flows)
- [Page structure](#page-structure)
- [H1 and URL](#H1-and-URL)
- [Entry Points](#entry-points)
- [Header and footer](#header-and-footer)
- [Crosslinks](#crosslinks)
- [Redirects](#redirects)


## <a name="location-of-forms"></a>Location of forms<br>

- The 85/15 reporting form and the 35% exemption form should live under the [Resources for schools](https://www.va.gov/school-administrators/) page. 
- Please create a supporting page for each form, to hold reporting requirements and instructions about the submission process. The current design uses the About page for this purpose. About pages are part of the Find a VA Forms search tool, and their primary purpose is to provide a short description, and links to the PDF and digital versions of the form. They are not intended to hold a lot of detail on requirements or processes. The workflow, sitemap, and suggested urls in this spec provide info for creating a supporting page and for each form.
  

## <a name="flows"></a>User/page flows <br>
Flow into forms, including a new supporting page. The same pattern applies to both forms.
<img width="1225" alt="school admins 10" src="https://github.com/user-attachments/assets/bed01ec1-06a3-468f-af2c-0430827c9770">


## <a name="map"></a>Page structure<br>
With an additional supporting page of information and instructions for each form, the sitemap would look like this. The level 2 pages are the proposed additional pages.
<img width="679" alt="school admins 11" src="https://github.com/user-attachments/assets/2ac2ee18-625c-44c6-a115-31342a499936">



## <a name="H1 and URL"></a>H1 and URL<br>

Refer to the design system's guidance for [page titles and section titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles), [URLs](https://design.va.gov/components/url-standards/), and [title tags](https://design.va.gov/content-style-guide/title-tags) when finalizing the form pages' H1s and URLs.

**Some suggestions:**

**85/15 Rule, supporting page** - New
- **H1:** 85/15 Rule enrollment ratios
- **URL:** va.gov/school-administrators/85-15-rule-enrollment-ratios/

**85/15 Rule, form intro page** - New
- **H1:** Report 85/15 Rule enrollment ratios
- **URL:** va.gov/school-administrators/85-15-rule-enrollment-ratio/report-ratios/


  
**35% Exemption, supporting page** - New
- **H1:** 35% exemption from 85/15 reporting
- **URL:** va.gov/school-administrators/35-percent-exemption/

**35% Exemption, form intro page** - New
- **H1:** Request 35% exemption from 85/15 reporting
- **URL:** va.gov/school-administrators/35-percent-exemption/request-exemption/
  
*Note on Terminology: I'm leaning toward the term '85/15 Rule' rather than '85% Rule' as the plain language description of this form, for two reasons. '85/15 Rule' is more frequently used, both around the web and in the VA's own supporting documentation. So this is the better option for SEO. And in web searches of VA topics, the string '85%' sometimes describe an individual veteran's disability determinations. It would be good to avoid confusion between education admin terminology and descriptions of individual veterans' disability status, where possible.*

*Note on Form Numbers: Veterans often know forms they use frequently by form number. So we often include the form number in H1s and URLs. If the form numbers are often referenced by this audience, the form number could be appended to the end of each URL.  For example "/submit-85-15-rule-reports-form-22-10205/".*

*Note on Process: **Once the team has finalized H1s and URLs please let CAIA know.** We'll do a final check to confirmation that they don't create confusion or conflicts with features in the Veteran and Family Member spaces.*



## <a name="Entry Points"></a>Entry Points<br>

### Primary entry point
_Most of the time this is the CTA on a tool static landing page - this may be an action link that goes directly to the new feature, or it may be part of a sign in widget._

**1) Form Intro Pages** - Add
- Placement description: Link from form intro page into fillable steps of the form
- Link label: A 'Start' or 'Submit' CTA
- Link destination: Next form step
![school admins 12](https://github.com/user-attachments/assets/1310026b-d831-496e-b401-3c7856e23e35)


### Secondary entry points
_Any additional locations that the page should be navigable from such as the "About a form" page, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc.   These are secondary, and while they are still very important, are not required for launch._

**1) Find a VA form, About page** - Add Page and Navigation Link
- Placement description: Link on 'About VA Form ##-####' page, to intro page of form
- Link label: Go to the online tool
- Link destination: Form intro page

## <a name="header and footer"></a>Header and footer<br>

We generally recommend using the [minimal header](https://design.va.gov/components/header/header-minimal) and [minimal footer](https://design.va.gov/components/footer/footer-minimal) patterns, for child pages of the [Resources for schools](https://www.va.gov/school-administrators/) page.


## <a name="crosslinks"></a>Crosslinks<br>

Crosslinks from veteran-facing pages are not needed, since the  audience for this info is school administrators rather than veterans.


## <a name="recirects"></a>Redirects<br>

Redirects are not needed, since pages are only being added (not moved or replaced).
