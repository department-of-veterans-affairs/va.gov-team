# Initiative outline: Remove "What benefits does VA offer?"

**Last updated: August 29, 2023 - dates in measuring success table, key dates, "after" screenshots**

### Communications

- **GitHub Label**: authenticated-exp; my-va-dashboard
- **Slack channel**: accountexp-authexp
- **Development Epic**: [#60509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60509)

### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Measuring Success](#measuring-success)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

The team has consistently received feedback that the "what benefits does VA offer" menu within the Benefit Application Drafts section on My VA is problematic in that it doesn't really make sense and can be confusing to sighted and screenreader users alike. Rather than create another section on My VA, and based on an evaluation of analytics, the team is going to proceed with an experiment to temporarily hide the sub-header with expandable menu and contents. The team will evaulate how this impacts search metrics for those benefit pages, and ultimately (assuming the team sees no negative impact) remove the the content permanently from the page.

This will be a change to both the LOA1 and LOA3 states on My VA.

## Measuring Success

### Objective: Provide greater consistency and simplification of the Benefit Application Drafts section.

**KPI: We will not see searches for the benefits in the "what benefits does VA offer" menu move into the top 50 search terms.**
- There are already some search terms (eg. careers) that are in the top 50. Given their already high rankings, we probably won't learn much even if they do move up a little bit as a result of this menu going away.
- We will monitor for a month to start. If there isn't a signifant change in metrics, we can permanently remove the menu. If we do see metrics moving in a way that concerns us, we'll monitor for a second month.
 
|KPI/metric|Baseline: <br />1 month pre-launch <br />(07/27/2023 - 08/28/2023)|1 month post-launch <br />(08/29/2023 - 09/28/2023)| 2 months post-launch <br />(09/29/2023 - 10/28/2023)|
|----------|-------------|---------------|-------------------|
|Are searches for "**health care**” (or similar -- whichever comes first) in the top 50 search terms on My VA?|   |   |   |
|Are searches for "**education and training**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**disability compensation**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**careers and employment**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**pension**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**house assistance**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**burials and memorials**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**life insurance**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**service member benefits**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |
|Are searches for "**family member benefits**” (or similar -- whichever comes first) in the top 50 search terms on My VA?| | | |


Historical data (January 2023 - August 2023)
|        Benefit page       | Total Pageviews | Clicks from My VA Bene App Drafts section | % Clicks from My VA Bene App Drafts section | 
|---------------------------|-----------------|-------------------------------------------|---------------------------------------------|
| Health care               | 1,721,732       | 32,029                                    | 1.86%                                       |
| Education and training    | 1,722,482       | 35,512                                    | 2.06%                                       |
| Disability compensation   | 4,463,307       | 62,798                                    | 1.41%                                       |
| Careers & employment      | 744,905         | 6,788                                     | 0.91%                                       |
| Pension                   | 473,257         | 7,901                                     | 1.67%                                       |
| Housing assistance        | 703,717         | 22,775                                    | 3.24%                                       |
| Burials & memorials       | 476,312         | 8,313                                     | 1.75%                                       |
| Life insurance            | 820,656         | 13,132                                    | 1.60%                                       |
| Service member benefits   | 1,136,271       | 18,016                                    | 1.59%                                       |
| Family member benefits    | 2,113,398       | 25,888                                    | 1.22%                                       |


## Key Dates

- July 2023: Analytics discovery
- August 2023: Development
- August 28, 2023: Feature flag enabled (menu no longer visible for all users in production)
   
## Screenshots

### Before
#### LOA1

![Screenshot 2023-08-09 at 12 24 12 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/d0a404f5-0c0e-46cf-b017-fa016209f8aa)

#### LOA3

![Screenshot 2023-08-09 at 12 21 58 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/7387facf-0391-4fca-900a-64a12df62aa4)


### After
#### LOA1
![Screenshot 2023-08-28 at 4 10 33 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/4eed62a4-a88a-4105-bfcd-469cfa03ec9e)


#### LOA3
![Screenshot 2023-08-28 at 4 11 21 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/4c10333c-f368-467b-808b-8b9ca2cec077)
