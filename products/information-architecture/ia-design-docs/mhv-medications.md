# IA Design for MHV on VA.gov - Medications
**STATUS: DRAFT**

**Team:** MHV on VA.gov Medications

**IA Request:** [[Link to Sitewide Content and IA intake request]](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/59159)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>
![User Flow of Medications Phase 0](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/b304a819-311c-40d6-a3fb-8ea5287562bb)

The user flow provided depicts the flow for Phase 0 of this product only.  The entry points, links, and overall flow of the product will evolve as the product progresses through the phased roll-out.  Those flows will eventually be fully documented in the (phased roll-out Mural)[https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1667322271773?sender=u2aba00c97ab77c6ec1573123&key=4ffaed99-2032-4f0b-bbce-bbe7ef27595c]. 

For Phase 0:
- Users will only be able to access this product via an email invitation with a direct link.  After clicking on the link, the user will be presented with the VA.gov home page with the sign in modal displayed. Once signed in they will be immediately routed to the medications landing page
- The Medication landing page will include messaging and a link to send feedback about the tool. 
- The Medication landing page will include messaging and a link to allow visitors to return to the MHV classic pharmacy experience, that will take them to the MHV classic pharmacy landing page
- The Medication landing page will include messaging and a link to the MHV classic Allergies page within the Health History section
- The Medication detail page will include messaging and a link to the MHV classic compose a message page


## <a name="map"></a>Page structure<br>

![Screenshot 2023-06-28 at 4 35 42 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/9aa7af6a-78c7-46b1-9b61-577987b7579f)

NOTE: As of 6/30/23, the H1 of the Medication page may change to 'Medication and Supplies'. If we do make that change, we may change URLs.
- also note that the url is a sibling structure, but the breadcrumbs will represent a parent strucuture. 

## <a name="url"></a>URLs and breadcrumbs

**1)Medications Landing - NEW**
- URL: www.va.gov/my-health/about-medications/
- Breadcrumb: 
  - desktop: My HealtheVet > About Medications
  - mobile: < My HealtheVet
- Title tag: About Medications | Veterans Affairs
- Notes: H1 pending final decision as of 6/28

**2) Medications list - NEW**
- URL: www.va.gov/my-health/medications/
- Breadcrumb: 
  - desktop: My HealtheVet > About Medications > Medications
  - mobile: < My HealtheVet
- Title tag: Medications | Veterans Affairs
- Notes: [On 6/30 in slack](https://dsva.slack.com/archives/C04DRS3L9NV/p1688070170040299) we decided that the breadcrumbs will act as if the 'about' landing page page is a parent of medications list, but the page will not be an official parent of medications from a URL standpoint. H1 pending final decision as of 6/28

**3) Meidcation details - NEW**
- URL: www.va.gov/my-health/medications/[medicationID]/
- Breadcrumb: 
  - desktop: My HealtheVet > About Medications > Medications > [H1 of page]
  - mobile: < My HealtheVet
- Title tag: [H1] - Medications | Veterans Affairs
- Notes: 
  - URL will be based on unique ID for the individual's specific medication.  It will not be the name of the medication. 

## <a name="nav"></a>Entry points <br>

Entry points for this tool will be determined based on the phased launch plan and are documented separately.
- there will be no left nav in Phase 0 of this product rollout
 

## <a name="redirects"></a>Redirects <br>
MHV redirects will be determined as part of the phased launch plan and documented separately
 




<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info

