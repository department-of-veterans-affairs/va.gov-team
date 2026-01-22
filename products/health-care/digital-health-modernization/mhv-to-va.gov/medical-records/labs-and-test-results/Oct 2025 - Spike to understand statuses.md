# Oct 2025 - Spike to understand statuses
This doc explains how we display and explain statuses for users for the [#122203 ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122203).

@beckyphung used GitHub Copilot to ask questions about lab and test results design/code in the `vets-website` and `vets-api` repos. @batemapf also provided some info. You can review the [living Slack Canvas doc](https://dsva.slack.com/docs/T03FECE8V/F09LL9BPWJZ) here.

**In this doc:**
- [Takeaways](#takeaways)
- [Questions](#questions)
- [Links](#links)

## Takeaways
- FHIR statuses: All of the statuses we're using for each MR domain (per Patrick).
   - Vaccines: we use the standard Immunization FHIR resource. oracle docs, which reference FHIR docs.
   - Allergies: we use the standard AllergyIntolerance FHIR resource. oracle docs, which reference the FHIR docs
   - Vitals: we use the standard Observation FHIR resource. oracle docs, which reference the FHIR docs.
   - Health Conditions: we use the standard Condition FHIR resource. oracle docs, which reference the FHIR docs.
   - Care Notes: @Mike Wzorek will need to chime in on this one. might be DocumentReference.
   - Health Summaries: same as Care Notes.
   - each one of those resources has some version of status, and linked within that attribute. for example, on AllergyIntolerance there is a clinicalStatus attribute which then has a defined universe (a "valueset") of possible codes. unless the oracle docs explicitly state that a status is not used, i think you should proceed with assuming that any status is possible to be returned by oracle's FHIR APIs.
- **Filtering**: We filter out some results.
   - vets-api
      - For VistA records, the v1 labs_and_tests_controller.rb (which depends on mr_controller.rb) calls the list_labs_and_tests method on the MedicalRecords::Client class. That client fetches all records, but does pass a 'status:not': 'entered-in-error' param to MHV PHR. No other filters are applied.
      - For Oracle records, the v2 labs_and_tests_controller.rb calls the get_labs method UnifiedHealthData service with start date and end date parameters. If the filtering Flipper toggle is enabled, only records with certain test codes are returned; however this Flipper toggle is off in production and staging. No other filters are applied.
      - We hide results when type = 'other'.
   - vets-website
      - No filtering applied to any records.
   - MHV PHR API v2
      - [Refer to this PR](https://github.com/department-of-veterans-affairs/mhv-np-phr-api-v2/pull/204) per Patrick (also [in this Slack canvas](https://dsva.slack.com/docs/T03FECE8V/F09MJ0R0ZAT))
         - 5. Status-Based Filtering
            - Chemistry tests: Status X (Rejected) → filtered out; F/I/C (Final/Pending/Amended) → shown
            - Pathology reports: Must be status "COMPLETED" → shown; others → filtered out
            - Ensures only valid, finalized results are displayed
         - Records are NOT returned to consumers if they:
            - Are from facilities the patient doesn't have access to (security)
            - Were completed less than 36 hours ago (except COVID tests or previously shown)
            - Have status "X" (Rejected) for Chemistry tests
            - Are not marked "COMPLETED" for Pathology reports
            - Are missing required fields (station number or status)
            - Are the wrong lab type for the transformer processing them 
- **Transforming statuses**: We display statuses as-is. We don't transform them in any way to be easier to understand. They're passed through from API to frontend. Code relies on the [FHIR standard](https://build.fhir.org/valueset-diagnostic-report-status.html#expansion) for status values.
- **Displaying statuses**: We hide status at the top-level when user is on "Lab and test results" page. We display status on the details page under the "Results" H2 heading.
- **Different statuses**: Statuses are may be different depending on type of test ('chemistry_hematology', 'microbiology', 'pathology', 'radiology', 'cvix_radiology', 'other'). 
   - :sparkles: Different record types handle or label status differently (e.g., radiology uses study job statuses like NEW / QUEUED / PROCESSING / COMPLETE / ERROR; pathology/micro may show FHIR result status like final/available). There isn’t a single, always-present “Status” field rendered uniformly for every labs and tests record type.

## Questions
### Open
- Previous documentation: Did we document business rules for My VA Health anywhere? 
   - Lauren mentioned decisions might have been made at 2019 Cerner-VA Multi-Month Decision Workshops
   - Carnetta mentioned there were councils involved (ambulatory, patient engagement)
      - Links...
         - [MHV_PHR_API_to_FHIR_mapping.xlsx](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Cerner%20Integration/Medical%20Records/MHV%20Documentation/MHV_PHR_API_to_FHIR_mapping.xlsx?d=we9061144e674489287a33072bd5d5b34&csf=1&web=1&e=bCneHd)
### Answered
- **Oracle records**: Do we need to change how we're displaying results for records from Oracle facilities? Seems like we're not filtering results in any way for VistA records.
   - If we want to filter out everything but final status records, we can do that. But we might want to consider some content explaining why a patient might not see a recent result that hasn’t been formally signed/authenticated by their provider. Particularly in the situation where a provider has called the patient to discuss the result, but has not actually signed/authenticated the result yet. 
- **VistA records**: If we make any changes, should they also apply to VistA records across the board?
   - It’s unclear if we get any VistA records from the soon-to-be legacy MHV medical records backend that have a status other than final. Like the filtering might be happening at a deeper level than vets-api / vets-website. So we apply status filtering logic to VistA records, but it might not net us anything. Would recommend same consideration about why records might not be shown b/c record is not final. 
- **User pain points**: Do users express confusion with lab and test result statuses and/or information when the value is "None Noted" right now?
   - Probably
- MVP: Does Dec MVP need to include other modules or just labs and tests for now?
   - @Becky Phung (she/her) I personally don't think our Dec deliverables will change. What could change is which records are shown in a given domain. (MM)

## Links
- (GitHub) Help users understand different statuses for lab and test results #122203
- (Figma) [Exploration - Non-final record for lab/test results](#https://www.figma.com/design/gGU9oX4QVqbYdxzXfTqTEj/Medical-Records---Milestone-2?node-id=22033-47950)
- (GitHub) [Oct 2025 - PHR Policy Group meeting](#https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/design/Oct%202025%20-%20PHR%20Policy%20Group%20meeting.md)


