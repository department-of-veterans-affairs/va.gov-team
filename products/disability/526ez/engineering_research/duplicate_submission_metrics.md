# Duplicate Submission Baseline Metrics

This is an output of [Create duplicate submission baseline metric #97845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97845). The goal of this story is to create a baseline metric for duplicate submissions, so that when we deliver a feature that addresses duplication, we will know whether or not the feature is successful.

To determine this, we developed [this submission duplicate query](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/super-duper-duped-user-submissions-reporter.rb) and ran it for the months of September, October and November of 2024. The first 134 lines of this query were developed by the DBEX-CARBS team for use it determining duplicate submissions during the course of [failed submission remediation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/deduplicating_526_submissions.md?plain=1) (gently modified with the help of Sam Stuckey for the purposes of this script).

## Running the query



## Results

The query does not adjust for submissions duplicated across interval boundaries. For example, if a particular user had a submission on October 31st that was duplicated into November or later, those numbers would NOT be included in October's query- the net effect being that the actual submission counts may be slightly deflated. For that reason, the percentages included below are a better metric in and of themselves than the literal submission counts

### Combined run of Sept, Oct and Nov 2024

|                |% of duplicate submissions |total submissions |duplicate submissions |
|----------------|---------------------------|------------------|----------------------|
|Sept - Nov 2024 |1.38%                      |191,677           |2,636                 |

|                |% of duplicate users |total users |duplicate users |
|----------------|---------------------|------------|----------------|
|Sept - Nov 2024 |0.82%                |162,115     |1,333           |

### Individual monthly runs

|                |% of duplicate submissions |total submissions |duplicate submissions |
|----------------|---------------------------|------------------|----------------------|
|September 2024  |                           |64,671            |                      |
|October 2024    |                           |64,653            |                      |
|November 2024   |                           |57,602            |                      |

|                |% of duplicate users |total users |duplicate users |
|----------------|---------------------|------------|----------------|
|September 2024  |                     |57,192      |                |
|October 2024    |                     |57,435      |                |
|November 2024   |                     |51,374      |                |

