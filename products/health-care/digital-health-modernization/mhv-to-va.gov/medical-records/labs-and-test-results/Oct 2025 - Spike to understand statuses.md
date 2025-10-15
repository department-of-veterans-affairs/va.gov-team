# Oct 2025 - Spike to understand statuses
This doc explains how we display and explain statuses for users for the [#122203 ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122203).

@beckyphung used GitHub Copilot to ask questions about lab and test results design/code in the `vets-website` and `vets-api` repos.

**In this doc:**
- [Takeaways](#takeaways)
- [Questions](#questions)

## Takeaways
- **Filtering**: We don't filter out results based on status.
- **Transforming statuses**: We display statuses as-is. We don't transform them in any way to be easier to understand. They're passed through from API to frontend. Code relies on the [FHIR standard](https://build.fhir.org/valueset-diagnostic-report-status.html#expansion) for status values.
- **Displaying statuses**: We hide status at the top-level when user is on "Lab and test results" page. We display status on the details page under the "Results" H2 heading.
- **Different statuses**: Statuses are the same regardless of type of test ('chemistry_hematology', 'microbiology', 'pathology', 'radiology', 'cvix_radiology', 'other'). We hide results when type = 'other'.

## Questions
- **Oracle records**: Do we need to change how we're displaying results for records from Oracle facilities? Seems like we're not filtering results in any way for VistA records.
- **VistA records**: If we make any changes, should they also apply to VistA records across the board?
- **User pain points**: Do users express confusion with lab and test result statuses and/or information when the value is "None Noted" right now?
