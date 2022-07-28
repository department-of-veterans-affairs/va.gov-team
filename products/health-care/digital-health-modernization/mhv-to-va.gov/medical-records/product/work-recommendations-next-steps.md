# Work, recommendations, and next steps for medical records

## Work so far on records
**1) We created and tested concepts for a "Medical records" landing page on MHV on VA.gov:**
- [Desktop prototype](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/44472CCE-CE14-4CED-9B07-E87CFED3EFE6)
- [Mobile prototype](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/0F31920D-6FE8-4239-8207-3F129FCEA6E4?hotspots=false)

[Read our research findings related to records.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/background-research.md) (See "Research related to records" section).

**2) We've met with these partners, stakeholders, and subject-matter experts and incorporated learnings from them in Github and Mural:**
- My HealtheVet designers (Arienne Walters, Bobby Bailey) - July 14
- My HealtheVet records section PoCs (Carnetta Scruggs, Bresha Lipscomb) - June 22 [(See notes from this meeting in Mural.)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1654869136822/fd8bebaa98bd723136ea04c71212d888f75f3c83?sender=megpeters0505)
- OCC and OCTO leadership + the OCC senior adviser (Nancy Wilck, Theresa Hancock, Chris Johnston, Lauren Alexanderson, Dr. Neil Evans) - July 18
- "Search my record" (Rich Beaudoin, David/Boomer Rawlins) - July 20

**3) We've gathered screen shots of:**
- the My HealtheVet Records section, and
- Cerner records screens

[See the Mural of My HealtheVet and Cerner records screens.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1658960897509/d517d764e4df567e41585d1c53831cebd17e40af?sender=megpeters0505)

**4) The My HealtheVet UCD Team did analysis and a usability study on "Search my record" in October 2021.**
"Search my record" is a software application that lets you apply filters to your VA medical records. In your results set, each data point (ex: a set of lab results), is a separate item you can click into for details.

After the dark launch of ["Search my record,"](https://www.myhealth.va.gov/mhv-portal-web/search-my-record) the My HealtheVet UCD Team did a research study with Veterans and provided recommendations for usability fixes to the UI. MHV's UCD Team was not involved in the original design and development of "Search my record." In making recommendations, they tried to create a customizable way for Veterans to use records quickly while on the go.

[View the “Search my record” usability findings.](https://xd.adobe.com/view/1ddcbf09-eae3-4d64-89bf-2d9e9d548f38-488f/) 

[Read the doc that outlines the differences between Blue Button Report and "Search my record" by the MHV UCD Team's Arienne Walters and Bobby Bailey.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/Search%20My%20VA%20Health%20Record%20-%20Differences%20from%20Blue%20Button.docx) 


## Recommendations 
Here are some rough initial recommendations based on past user research, some digging into the records UX, and a few conversations with partners.

### 1) Keep the VA Health Summary 
The purpose of this report is to ensure continuity of care between providers. It's a snapshot of a Veteran's health at a point in time, compiled by the VA. A Veteran can use this report to review their VA health care and to share information with community providers, family, or others who help them with their health. The VA Health Summary's purpose is very different from the Blue Button Report, which contains all of a Veteran's health information and is compiled by the Veteran. 

User research shows that Veterans don't understand: 
- the purpose of VA Health Summary versus Blue Button Report, 
- what information is in each report, 
- which report is their complete record, and
- which report to take to a non-VA provider.

Recommendation: 
- Explain the difference between Blue Button Report and VA Health Summary simply in plain language so Veterans know the purpose of each and can decide easily which one they need.
- Tell Veterans which report they should take to a non-VA provider.

### 2) Combine Blue Button and "Search my record" functionality or choose one and improve it 
If we launch "Search my record" alongside Blue Button Report and VA Health Summary, Veterans will be more confused than they are now. Having 2 products that do almost the same thing is a doomed strategy. 

Here are some options:
- Improve the interaction and output for the Blue Button Report
- Improve the interaction and output for "Search my record" and replace Blue Button with it
- Create a new interaction that meets user needs

### 3) Make these things prominent in the records section of MHV on VA.gov: 1) labs and tests, and 2) vaccinations & immunizations
In user research, the My HealtheVet UCD Team has heard Veterans comment on the fact that "labs and tests" is not a main category. Currently this data is buried in reports. And research by the MHV on VA.gov / Health Apartment Team has shown that Veterans like having "labs and tests" called out. In that research, Veterans have asked:
> "Where are vaccinations and immunizations?"

### 4) Make it clear how to share your health data with your care team
On My HealtheVet today, there is not a clear user flow for sharing the health data you entered into the My HealtheVet website with your VA care team. Surprisingly, some ~10K Veterans (not sure of time period for this) have managed to share their health data, which lives in the "vault," where the self-entered data is stored. 
 
### 5) Make it so you can share data from devices 
In the prototypes for [mobile](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/0F31920D-6FE8-4239-8207-3F129FCEA6E4?hotspots=false) and [desktop](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/44472CCE-CE14-4CED-9B07-E87CFED3EFE6), we included a section called "Add and track your health information." Though this section tested well with Veterans in the context of the "Medical records" landing page, the team should make sure that self-entered data belongs in the "Medical records" section.

The DHP Team (Digital Health Platform) is working on enabling Veterans to connect their health tracking devices to VA.gov so they can share their health data. The team should meet with the DHP product owner (Stefany Holguin) and also with Office of Connected Care people working on PGHD (Patient-Generated Health Data). 

### 6) Work with the Sitewide Content & IA Team on a content strategy for health resources 
Xxxxxxxxx...

## Next steps
- Figure out who will work on records and define roles.
- Organize the list of main partners, stakeholders, and subject-matter experts. Figure out who the decision-makers are. (Tracey Mulrooney, Nancy Wilck, and Theresa Hancock can help with this.)
- Have Nancy Wilck and Theresa Hancock introduce you to the main partners, stakeholders, and subject-matter experts (SMEs).
- Devise a meeting and communications strategy around the roles of the main partners, stakeholders, and SMEs. For example, you might meet with the main partners each week and with the stakeholders and SMEs less often, while sending email updates to the full list of main partners, stakeholders, and SMEs.
- Get a full download of the data landscape as soon as possible. (Tracey Mulrooney, Nancy Wilck, and Theresa Hancock can help with points of contact.)
- Look up past research related to medical records. Ask UXers from both VA.gov and My HealtheVet.
- Read through the [records section on VA.gov.](https://www.va.gov/records/)
- Talk to engineers about what data can be displayed. Share your ideas for how to display specific data and get feedback from them.
- Gather analytics on the current records UX on My HealtheVet, as well as the pathway from the [records section on VA.gov.](https://www.va.gov/records/) to My HealtheVet's records section.
- Keep a running list of research questions and work with the user researchers on the MHV on VA.gov / Health Apartment Team to plan research on records.
- Study Cerner screens and identify where Cerner differs from My HealtheVet. [See this Mural for both My HealtheVet and Cerner screens.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1654869136822/fd8bebaa98bd723136ea04c71212d888f75f3c83?sender=megpeters0505) If you have a test account for My HealtheVet, you can navigate to the Cerner patient portal. 
- Look at past findings for the records prototype and evolve the prototype. Then design the screens that will go under the main landing page. Share concepts with Jonathan Nelson and My HealtheVet engineers. See the [mobile prototype](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/0F31920D-6FE8-4239-8207-3F129FCEA6E4?hotspots=false) and the [desktop prototype.](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/44472CCE-CE14-4CED-9B07-E87CFED3EFE6)
- Iterate!
- Prep for the kickoff with the new records team for MHV on VA.gov.
