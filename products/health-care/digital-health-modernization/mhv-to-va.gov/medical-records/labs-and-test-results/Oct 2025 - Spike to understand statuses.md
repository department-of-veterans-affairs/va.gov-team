# Oct 2025 - Spike to understand statuses
This doc explains how we display and explain statuses for users for the [#122203 ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122203).

@beckyphung used GitHub Copilot to ask questions about lab and test results design/code in the `vets-website` and `vets-api` repos.

**In this doc:**
- [Takeaways](#takeaways)
- [Questions](#questions)

## Takeaways
- **Filtering**: We filter out some results.
   - vets-api
      - For VistA records, the v1 labs_and_tests_controller.rb (which depends on mr_controller.rb) calls the list_labs_and_tests method on the MedicalRecords::Client class. That client fetches all records, but does pass a 'status:not': 'entered-in-error' param to MHV PHR. No other filters are applied.
      - For Oracle records, the v2 labs_and_tests_controller.rb calls the get_labs method UnifiedHealthData service with start date and end date parameters. If the filtering Flipper toggle is enabled, only records with certain test codes are returned; however this Flipper toggle is off in production and staging. No other filters are applied.
   - vets-website
      - No filtering applied to any records.
- **Transforming statuses**: We display statuses as-is. We don't transform them in any way to be easier to understand. They're passed through from API to frontend. Code relies on the [FHIR standard](https://build.fhir.org/valueset-diagnostic-report-status.html#expansion) for status values.
- **Displaying statuses**: We hide status at the top-level when user is on "Lab and test results" page. We display status on the details page under the "Results" H2 heading.
   - :sparkles: Different record types handle or label status differently (e.g., radiology uses study job statuses like NEW / QUEUED / PROCESSING / COMPLETE / ERROR; pathology/micro may show FHIR result status like final/available). There isn’t a single, always-present “Status” field rendered uniformly for every labs and tests record type.

## Questions
- **Oracle records**: Do we need to change how we're displaying results for records from Oracle facilities? Seems like we're not filtering results in any way for VistA records.
   - If we want to filter out everything but final status records, we can do that. But we might want to consider some content explaining why a patient might not see a recent result that hasn’t been formally signed/authenticated by their provider. Particularly in the situation where a provider has called the patient to discuss the result, but has not actually signed/authenticated the result yet. 
- **VistA records**: If we make any changes, should they also apply to VistA records across the board?
   - It’s unclear if we get any VistA records from the soon-to-be legacy MHV medical records backend that have a status other than final. Like the filtering might be happening at a deeper level than vets-api / vets-website. So we apply status filtering logic to VistA records, but it might not net us anything. Would recommend same consideration about why records might not be shown b/c record is not final. 
- **User pain points**: Do users express confusion with lab and test result statuses and/or information when the value is "None Noted" right now?
   - Probably 
