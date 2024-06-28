# Calculating and Reporting Customer Experience (CX) Metrics on MHV on VA.gov

## Sources of CX data

Descriptions of the A11 survey and VFS Questionnaire and how to analyze them can be found [here](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-medallia-data-in-domo). Specific Tl;drs for our purposes: 

1. A11 Questionnaire = intercept survey; randomly pops up for 5% of VA.gov users who have had a 20-second or more extended session. Questions from from A11 OMB Circular and adhere to broader federal guidelines on measuring customer satisfaction. Will be replaced in patient portal by a 15-item survey that combines current A11 questions with MHV Classic CSAT questions in August/ Sept. 2024.
2. VFS Questionnaire = questions that pop up when Veteran clicks on blue feedback button. Also refered to as Feedback Survey. Respondents self select and therefore data must be engaged with differently as the sample is not random.

## How to analyze quantitative data

All questions with 5-pt Likert response options should be analyzed in the following way: 
- 4s and 5s = "positive"
- 1s and 2s = "negative"
- 3s = neutral
- Proportion of "positive" responses = CX score.
  - For example, if 100 Veterans responded with a 4 or 5 in response to a CX question, then the CX score for that question is 60/100 = 60%.

## Data fields in Medallia reports

Medallia data field | Survey | Survey question
------------------|-------------- | ------------------
VA.gov Experience | A11 Questionnaire/ intercept survey | Please rate your experience on VA.gov today. 
Why did you select that rating? | A11 Questionnaire/ intercept survey | Why did you select that rating?
VA.gov Understanding | A11 Questionnaire/ intercept survey | Please rate your how understandable this site's information is.
General VA Trust | A11 Questionnaire/ intercept survey | How did this interaction change your trust in Veteran Affairs? 
Trust in VA Commitment to Veterans | A11 Questionnaire/ intercept survey | How much do you trust Veteran Affairs to fulfill our country's commitment to Veterans? 
Were you able to do your task today? | VFS Questionnaire/ Feedback Survey | Were you able to do your task today?
What is your overall satisfaction with this site? | VFS Questionnaire/ Feedback Survey | What is your overall satisfaction with this site?
What task were you trying to do today? | VFS Questionnaire/ Feedback Survey | What task were you trying to do today?

To view the complete surveys, please visit this page on the [Platform documentation site](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data). 

## Combining Medallia data from multiple URLs into central [Excel file](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B8c161ac9-bb42-401d-9b5d-913941f1eca9%7D&action=editnew&wdsle=0) for combined analysis

As more products become accessible to Veterans on VA.gov and as usage increases, it will become more likely that feedback submitted via either intercept survey or feedback button survey in a given URL will relate to other patient portal tools or problems. We need to centralize Medallia feedback into one space to enable multiple product teams to review feedback that relates to their problem space, regardless of which URL feedback is provided on. 

### Steps 

Step 1: Request exports of Medallia feedback on a regular cadence. Follow instructions on the [Qualitative Data Request form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jwoodman5%2C+ianMcCullough-ob&labels=VSP-contact-center%2Ccc-data-request&template=qualitative-data-request.yml&title=Qualitative+Data+Request).

Step 2: Every 1-2 weeks, to to the [MHV on VA.gov Medallia Feedback](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B8c161ac9-bb42-401d-9b5d-913941f1eca9%7D&action=editnew&wdsle=0) Excel file. Copy and paste data into the Excel file. 
- Data will need to be adjusted to adhere to the additional columns. Should be self explanatory but contact Robyn Singleton if you run into trouble. 

Step 3: Use the existing tags or create additional tags in columns G and N to categorize qualitative feedback contributed to either the intercept survey or the feedback button survey. 

The goal is that product teams will be able to review feedback provided across product pages to identify insights relevant to their product spaces. Feel free to export data and organize/ sense make in other spaces (e.g., Mural). Be kind to your fellow product teams and incorporate your Medallia feedback twice monthly (on the 14th or 15th, and at the end of the month). 

## Reporting quantitative CX data

- CX data from A11 intercept survey is most valuable for reporting purposes.
- When reporting, always include the sample size and the name of the survey from which a question came.

