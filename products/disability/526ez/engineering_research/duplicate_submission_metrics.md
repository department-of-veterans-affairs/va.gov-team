# Duplicate Submission Baseline Metrics

This is an output of [Create duplicate submission baseline metric #97845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97845). The goal of this story is to create a baseline metric for duplicate submissions, so that when we deliver a feature that addresses duplication, we will know whether or not the feature is successful.

To determine this, we developed [this submission duplicate query](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/super-duper-duped-user-submissions-reporter.rb) and ran it for the months of September, October and November of 2024. The first 134 lines of this query were developed by the DBEX-CARBS team for use it determining duplicate submissions during the course of [failed submission remediation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/deduplicating_526_submissions.md?plain=1) (gently modified with the help of Sam Stuckey for the purposes of this script).

## Running the query

Because this is a long-running query that is executed within a short-living environment (i.e. an Argo terminal), certain features of the script where built to allow re-running from its last known failure point:
- processing occurs on a _sorted_ list of `user_uuid`s within the specified time range
- after every 100 users processed, a "checkpoint report" is sent to AWS S3 with the duplicate counts found thus far
- a `last_user_uuid_processed` variable can be set so that it will skip processing until the specified uuid is reached

Step-by-step operations 
1. [Copy the script](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/super-duper-duped-user-submissions-reporter.rb) to your favorite text editor
2. Set the `output_directory_path` variable to a custom folder name (i.e. '526_duplicates_report_20241224__0924'), which will be found under the [dsva-vetsgov-prod-reports bucket](https://us-gov-west-1.console.amazonaws-us-gov.com/s3/buckets/dsva-vetsgov-prod-reports?region=us-gov-west-1&prefix=526_duplicates_report_20241224__0924/&showversions=false) in S3
3. Set the `start_date` and `end_date` variables to the desired date range for the run
4. Make sure that the `last_user_uuid_processed` variable is set to an empty string ('')
5. Copy and paste the entire script into Argo. The "processing... [running count]" message will run in the terminal, which generally helps keep the session going longer than normal.
6. Babysit the Argo session for signs of the session dying. This is generally pretty obvious, but in some cases the best indication is that the "checkpoint reports" have stopped being generated in S3
7. When/if (okay, when) the session dies,
   - a. Go to the [in-progress](https://us-gov-west-1.console.amazonaws-us-gov.com/s3/buckets/dsva-vetsgov-prod-reports?region=us-gov-west-1&prefix=526_duplicates_report_20241224__0924/in_progress/&showversions=false) sub-folder of your custom directory in S3
   - b. Order the file list by Last Modified, descending, to find the last "checkpoint report"
   - c. Open the report and save off the `user_uuid` found there (it's also in the filename)
   - d. Save off the lines under `CSV:` in Google Sheets, Excel or a text file
   - e. Update your copy of the script to set `last_user_uuid_processed = '[user_uuid from step c. above]'`
   - f. Go to step 5 above and repeat this flow until the entire run completes, saving off the info from each Argo crash.
9. Run completes with a final report displayed in the Argo terminal, and written to a sub-folder called [final](https://us-gov-west-1.console.amazonaws-us-gov.com/s3/buckets/dsva-vetsgov-prod-reports?region=us-gov-west-1&prefix=526_duplicates_report_20241224__0924/final/&showversions=false) in your custom folder in S3
10. To aggregate the final numbers/percentages, simply add together all the CSVs collected from the "in-progress" runs with the "final" report

## Results

The query does not adjust for submissions duplicated across interval boundaries. For example, if a particular user had a submission on October 31st that was duplicated into November or later, those numbers would NOT be included in October's query- the net effect being that the actual submission counts may be slightly deflated. Another side effect of this is that the number of total users per each month is inflated when compared with over the longer interval- many users submit and re-submit over the course of months.

For all these reasons, the percentages included below are a better metric in and of themselves than the literal submission and user counts (which user counts being especially more "buyer-beware").

### Combined run of Sept, Oct and Nov 2024

|                |% of duplicate submissions |total submissions |duplicate submissions |
|----------------|---------------------------|------------------|----------------------|
|Sept - Nov 2024 |**1.38%**                      |191,677           |2,636                 |

|                |% of duplicate users |total users |duplicate users |
|----------------|---------------------|------------|----------------|
|Sept - Nov 2024 |0.82%                |162,115     |1,333           |

### Individual monthly runs

|                |% of duplicate submissions |total submissions |duplicate submissions |
|----------------|---------------------------|------------------|----------------------|
|September 2024  |**1.27%**                      |65,297            |831                   |
|October 2024    |**1.23%**                      |67,081            |828                   |
|November 2024   |**1.31%**                      |59,299            |779                   |

|                |% of duplicate users |total users |duplicate users |
|----------------|---------------------|------------|----------------|
|September 2024  |0.73%                |57,737      |423             |
|October 2024    |0.73%                |59,514      |434             |
|November 2024   |0.70%                |52,800      |367             |

