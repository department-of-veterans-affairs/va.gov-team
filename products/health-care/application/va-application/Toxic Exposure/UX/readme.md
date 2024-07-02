# 10-10EZ Toxic Exposure UX 

## Summary
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research/2024-04-ToxicExposure-UsabilityStudy)
  
## April 2024 Research - Key findings:

1. Most Veterans have been or believe they have been exposed to toxic materials in the military, but they don't know if it qualifies as "toxic exposure."

2. Veterans would like more information about what time periods during their service are eligible to note any toxic exposure.

3. Veterans would like to see more branching logic in the toxic exposure questions based on what VA already knows about them or what they answered previously.

4. There is some confusion with how to identify exposure dates and why VA is asking for them.

5. We uncovered some usability issues that were missed since the TERA project timeline didn't allow for a full research study until post-launch.

## Recommendations

- We should revisit content updates commented in Figma since the release when executing on version 2 of TERA
- We should revisit the flow starting with the service dates and branching off using conditional logic
  - We can show how document upload can vary based on responses placing them into Cohort 1, 2, or 3

## Questions for stakeholders

### HEC
- Will HEC update the PDF version of the form to reflect the the updated Priority group 6 based on VHA request (week of 3/25)?
- The [priority group list](https://www.va.gov/health-care/eligibility/priority-groups/) includes "atmospheric testing" and "the occupation of Hiroshima and Nagasaki or Enewetak Atoll." - Should those be added to the cleanup and response efforts question?
- Can we further clarify what types of potential toxic exposure on the "Other toxic exposures" page would impact a Veteran's priority group and are truly worth a Veteran's time to report?
- Since we heard a lot of feedback about training, what kind of toxic exposures that may have occurred during training are worth a Veteran's time to report?
- What are your requirements for the digital form in terms of branching logic? Since we ask for service dates before the TERA questions, we could only asked applicable questions based on those dates. Could there be any edge cases or negative consequences to branching logic based on service dates?
- What efforts do you know of to target specific groups of Veterans who may be eligible, such as Veterans who were deployed during the Vietnam War?
- Can we narrow down the dates of the Gulf War to match other forms' approach to that question like the 526 for example? For two reasons: To potentially help with branching logic and to clear up confusion about exactly what that question refers to that came up in testing.

**Documents**

- Can HEC access Veteran documents in eFolder if they've already uploaded them to VA.gov on other forms, like the 526 disability form?
- Can we have specific document upload pages based on the Veteran's cohort, which can be determined by TERA responses?

## Decisions made

| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 5/22/2024 | Angela Agosto, HEC stakeholders | We'll make some content adjustments to highlight that exposures during training should be reported and to encourage Veterans to report anything they think they may have been exposed to even if they aren't completely certain. | In usability testing we heard Veterans say they weren't sure what counted as toxic exposure and they expressed hesitation to report anything they weren't 100% sure of. We outlined this feedback in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715350377443/afc582d42d838e27ae58b0557dc164238adab27a?sender=ud5c82d652d231345efaf6060) and asked our stakeholders more about the TERA process. We and our HEC stakeholders agreed to make content updates to highlight training eligibility and that it's better to report possible exposure than not to. |
| 5/22/2024 | Angela Agosto, HEC stakeholders | We'll incorporate branching logic for the TERA questions so Veterans only see what's relevant to them based on their service dates. | In usability testing we heard Veterans say the TERA questions were generic and that they thought some could be eliminated based on previous answers or what VA already knows about them. We outlined how this would work in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715350377443/afc582d42d838e27ae58b0557dc164238adab27a?sender=ud5c82d652d231345efaf6060) and our stakeholders were eager to make these user flow updates. |
| 6/20/2024 | Angela Agosto, Danielle Thierry, Aliyah Blackmore | We'll use the list of locations and dates that HEC gave us for now even though it's different than what's listed on VA.gov for disability. | Danielle Thierry told us the legislation wasn't written the same for disability vs healthcare. The criteria for disability comp is higher than for healthcare. But she will verify this with OGC and find out if VA is wanting to align TERA criteria in the future. |
| 6/27/2024 | EZ/CG internal team | We'll deploy the updates to the EZ TERA questions in two major deployments: one for most of the content updates and one for the branching logic and any content updates that ust be incorporating with the branching logic. | The team wants to explore how to make smaller deployments to avoid a lot of errors and show impact faster. In our team retro [Mural](https://app.mural.co/t/emilysworkspace0583/m/emilysworkspace0583/1701109383836/74304ab51e18f488e47f8ad0de64bfdd376c932c?sender=u6fff32ce5369ba9338a16331), we decided to split the EZ TERA updates into two deployments. |
