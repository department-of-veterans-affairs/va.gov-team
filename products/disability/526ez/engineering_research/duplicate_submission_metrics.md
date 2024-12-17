# Duplicate Submission Baseline Metrics

This is an output of [Create duplicate submission baseline metric #97845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97845). The goal of this story is to create a baseline metric for duplicate submissions, so that when we deliver a feature that addresses duplication, we will know whether or not the feature is successful.

To determine this, we developed [this submission duplicate query](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/7e2d6790ae2ecb0d0f35ee3ac536e40e14489e55/teams/benefits/scripts/526/super-duper-duped-user-submissions-reporter.rb) and ran it for the months of September, October and November of 2024. The first 644 lines of this query were developed by the DBEX-CARBS team for use it determining duplicate submissions during the course of failed submission remediation.

Some important caveats to keep in mind: 
- the query does not adjust for submissions duplicated across interval boundaries. For example, if a particular user had a submission on October 31st that was duplicated into November or later, the those numbers would be included in October's query- the net effect being that the actual submission counts may be slightly inflated. For that reason, the percentages included below are a better metric in and of themselves than the literal submission counts
- the "total submissions" count below was calculated by adding together the non-duplicate users submission counts with the duplicate users submission counts. In other words, the duplicate users may have had non-duplicated submissions that were not a part of the total

|                |% of duplicate submissions |total submissions |duplicate submissions |
|----------------|---------------------------|------------------|----------------------|
|September 2024  |                           |                  |                      |
|October 2024    |                           |                  |                      |
|November 2024   |                           |                  |                      |

|                |% of duplicate users |total users |duplicate users |
|----------------|---------------------|------------|----------------|
|September 2024  |                     |            |                |
|October 2024    |                     |            |                |
|November 2024   |                     |            |                |

