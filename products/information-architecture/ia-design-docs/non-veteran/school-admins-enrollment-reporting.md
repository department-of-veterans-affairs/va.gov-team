# IA Design for school admins' enrollment reporting (form 22-10215 and 22-10216) 

**STATUS: FINAL**
- 3/3/2025 - Updated with final decision (MN)

**Note on Process: *Once the team has finalized H1s and URLs please let CAIA know.* We'll do a final check to confirmation that they don't create confusion or conflicts with features in the Veteran and Family Member spaces.**

**Team:** [govcio-vebt]

**People:** 

- PO - Darla van Nieukerk OCTO
- Design - Ariana Adili govcio-vbet
- IA - Sam CAIA

**Tickets:**
- [CAIA Intake Ticket: 85/15 Rule form 22-10215**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92591) 
- [IA Review Ticket: 85/15 Rule reporting form 22-10215:** ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92142)
- [CAIA Intake Ticket: 35% exemption request from 85/15 reporting requirement, form 22-10216**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92587) 
- [IA Review Ticket: 35% exepmtion request from 85/15 Rule reporting requirement, form 22-10216:** ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92143)


**On this page:**
- [User/page flows](#user-page-flows)
- [Page structure](#page-structure)
- [H1 and URL](#H1-and-URL)
- [Entry Points](#entry-points)
- [Header and footer](#header-and-footer)
- [Crosslinks](#crosslinks)
- [Redirects](#redirects)


## <a name="flows"></a>User/page flows <br>
Flow into forms. The same pattern applies to both forms.

![image](https://github.com/user-attachments/assets/f2dac21d-3a62-4406-9f87-6b7ca279f0ba)


## <a name="map"></a>Page structure<br>
- The 85/15 reporting form and the 35% exemption form should live under the [Resources for schools](https://www.va.gov/school-administrators/) page. 
- No additional content pages to support these forms will be built within the /school-administrators/ section of the site.  All information to support submission of the forms will need to be contained on the /introduction page of the forms themselves.
- The OCTO content and IA team will be responsible for publishing an About form page for each of the forms after they are live to 100% of site visitors.  
- ~Please create a supporting page for each form, to hold reporting requirements and instructions about the submission process. The current design uses the About page for this purpose. About pages are part of the Find a VA Forms search tool, and their primary purpose is to provide a short description, and links to the PDF and digital versions of the form. They are not intended to hold a lot of detail on requirements or processes. The workflow, sitemap, and suggested urls in this spec provide info for creating a supporting page and for each form. With an additional supporting page of information and instructions for each form, the sitemap would look like this. The level 2 pages are the proposed additional pages.~

![image](https://github.com/user-attachments/assets/04998f24-4b64-46c1-acc8-719652cf41d6)



## <a name="H1 and URL"></a>H1 and URL<br>

- Refer to the design system's guidance for [page titles and section titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles), [URLs](https://design.va.gov/components/url-standards/), and [title tags](https://design.va.gov/content-style-guide/title-tags) when finalizing the form pages' H1s and URLs.
- Suggested URLs are below, the team can modify as needed, so long as they meet VA design system standards. 
  - 85/15 Rule form 
    - Suggested URL: www.va.gov/school-administrators/report-85-15-enrollment-ratio/
    - Breadcrumb:  VA.gov home > Resources for schools > [H1 of form introduction page]
  - 35% Exemption form
    - Suggested URL: www.va.gov/school-administrators/35-percent-exemption/
    - Breadcrumb:  VA.gov home > Resources for schools > [H1 of form introduction page]
   
  
Notes:  
- The URLs provided above are the canonical URLs to be used in all links and for reference of these forms.  Once a visitor hits that URL, it should resolve to the first page in your form flow, which is generally the canonical URL + /introduction appended.
- We have used the term '85/15 Rule' is recommended instead of the term '85% Rule', because it occurs more frequently in web and in the VA's own supporting documentation
- Veterans often know forms they use frequently by the form number, so the Veteran experience utilizes the form number in H1s and URLs. If the form numbers are often referenced by this audience, the form number could be appended to the end of each URL.  For example "va.gov/school-administrators/report-85-15-enrollment-ratios-form-22-10205/".


## <a name="entry-points"></a>Entry Points<br>

1) **Resources for Schools Page**
- Add links on the [Resources for schools page](https://www.va.gov/school-administrators/), to provide navigational access to the forms
- This is the primary entry point and is considered required for launch

2) **About Page** 
- Once forms 22-10215 and 22-10216 are live, please reach out to the content and IA team to publish "About form" pages for each of the forms
- These pages will include a link to the PDF version of the form as well as the online form



## <a name="recirects"></a>Redirects<br>

Redirects are not needed, since pages are only being added (not moved or replaced).
