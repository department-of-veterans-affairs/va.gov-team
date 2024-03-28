# Using the Support Process Survey

[Purpose](#purpose)

[Accessing Data](#accessing-data)

[Analyzing Data](#analyzing-data)

[Presenting Data](#presenting-data)

--------------

## Purpose

This initiative covers the FY2024 objective to empower VA.gov product teams, specifically the key results of developing a 
request and support process for VA.gov product teams, establishing and publishing monthly metrics around response times 
for said teams, and establishing and maintaining a support satisfaction rating of 70% or higher for VA.gov product team 
support.

The Support Satisfaction Survey is the tool used for assessing the quality of support provided by our team. 

Understanding customer satisfaction is crucial for continuous improvement. 

[Link to survey](https://ows.io/qs/ti97awtz)


## Accessing Data

1. Go to [OptimalWorkshop.com](https://app.optimalworkshop.com)

2. Use the Platform Research credentials to sign in

3. Go to Identity MFA Folder

4. Find the survey "Identity Support Survey V1"

5. Select Results tab

     - You'll see the Overview page

![Optimal Results Overview](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/933abeb7-da16-4c38-a892-90dd91ec6583)

    - To see participant responses, select "Questionnaire" 
![Optimal Results Questionnaire](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/2f7ceae0-638a-4557-932c-b2007df7257b)

8. Go to Downloads

     - "All included participants" should be selected by default

      - For Participants data, select "Uncut"
  
      - You'll be prompted to accept an Excel file download 

----------------

## Analyzing Data

![Excel Survey Data](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/4ccf5199-c821-4f31-9d68-2f82103fd6a0)

### Q1. *Rate your satisfaction with the support provided by our team.*

This question serves as the foundation for measuring client satisfaction. It provides an overall view of how well our team is meeting user expectations. The goal is to maintain a CSAT score above 70.

Analysis:

- Calculate the CSAT (Customer Satisfaction) Score:

  -  Assign numerical values to the satisfaction response options
       -  Very Satisfied = 5
       -  Satisfied = 4
       -  Neither Satisfied Nor Dissatisfied = 3
       -  Dissatisfied = 2
       -  Very Dissatisfied = 1
    
    - Add the number of satisfied customers (those who rated us a 4 or 5)
    - Divide by the total number of answers
    - For example, if 62 of 100 responses have a rating of 4 or 5, your score would be 62.
  
    - In Excel:
         - Input Total Responses: Enter the total number of survey responses in cell A1.
         - Enter Satisfied Responses: Input the number of positive (satisfied) responses in cell A2.
         - Apply CSAT Formula: Use the formula =`(A2/A1)*100` in cell A3 to calculate the CSAT score as a percentage.

Graphing:

- Create a bar chart or pie chart showing the distribution of responses.
- Highlight the percentage of Very Satisfied and Satisfied responses.


### Q2. *Add a comment about the quality of service you received.*

This open-ended question allows users to provide specific feedback. It captures qualitative insights beyond numerical ratings.

Analysis:

- Categorize comments into themes (e.g., responsiveness, knowledge, friendliness).
- Identify recurring issues or positive aspects.
- Use sentiment analysis methods to gauge overall sentiment (positive, negative, neutral).

Graphing Ideas:

- Word cloud: Visualize frequently mentioned words.
- Sentiment analysis chart: Show the balance of positive and negative sentiments.

### Q3. *If you answered anything other than Very Satisfied, what could our team do to make your experience one that warrants a Very Satisfied response?*

This question helps uncover areas for improvement. It encourages users to suggest actionable changes.

Analysis:

- Group responses into categories (e.g., process improvement, faster resolution times, better communication).
- Prioritize based on frequency and impact.

Graphing:

- Use a Pareto chart (80:20 rule) to highlight the most common improvement areas.

### Q4. *Is there any additional feedback you would like to share?* 

 - Possible Topics:
     - Your overall experience
     - The product you used with our team
     - Our troubleshooting guide
     - The Identity Slackbot

This open-ended question allows users to express additional thoughts or concerns.

Analysis:

- Similar to Question 2, categorize feedback and identify patterns.
- Look for insights that may not fit neatly into other questions.

Graphing:

- No specific graphs but consider including verbatim quotes in the report.
- Your overall experience: Assess the holistic experience beyond support interactions.
- The product you used with our team: Understand how product functionality impacts satisfaction.
- Our troubleshooting guide: Evaluate the effectiveness of self-help resources.
- The Identity Slackbot: Gather feedback on specific tools or channels.

### Q5. *If we may contact you to learn more about your experience, please enter your email here. (Optional)*

This question allows users to volunteer for follow-up discussions.

- Collect email addresses for further investigation.
- Use this information to reach out to users with specific issues.

- No specific graphs, but track the number of users willing to be contacted.

------------------------------

## Presenting Data

![Satisfaction Ratings Pie Chart in Excel](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/9135cec6-5f0b-4d6f-b9d7-153a4931193c)

![Qualitative Fields Word Cloud](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/385798ed-3054-4870-9de7-150ccc013db5)

![Satisfaction Survey Dashboard Mockup](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/20992d66-3b14-471d-a7b7-a747a4d0236c)

![Satisfaction Survey Dashbpard Mockup 2](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/e6cdc903-5561-42cd-abf7-fc4f24a49f79)

![Metrics Dashboard Mockup](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/2c1b4095-2a1d-4797-987e-4d5994100759)
