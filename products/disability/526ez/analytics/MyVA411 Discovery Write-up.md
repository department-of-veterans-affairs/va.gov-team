# Approaches to MyVA411 Data Analysis

Disability Benefits Team 1, October 2024

Evelyn Hilbrich Davis (evelyn@cityfriends.tech)

Jump to: 
1. [Background](#background) 
2. [Benefits/Limitations of MyVA411 Data](#Benefits/Limitations-of-MyVA411-Data)
3. [Approaches](#approaches)
4. [Recommended Approach for TE Monitoring](#Recommended-Approach-for-TE-Monitoring)
5. [Relevant Links](#relevant-links)

## Background

This document will outline three approaches that UX can take to efficiently and effectively analyze MyVA411, Veteran support data originating from VEO 411 Contact Centers. We are interested to see ways we can make the most out of MyVA411 data to see how it can support TE monitoring and future form health checks in the future. 

Historically, UX has relied on Medallia survey data for 526ez health checks and is currently using it to look for usability issues and other pain points with the new feature during the Toxic Exposure release. While Medallia can provide invaluable insight into how Veterans are completing the form in real time, feedback is limited and is not easily accessible to AT users. One of the surveys, the Intercept, is not optimized, as OCTO is currently working to improve it across products. Therefore, we look to MyVA411 data to support our goals of understanding the TE user experience pre-usability testing. 


**All approaches outlined are:**

-   Designed for single-sprint data analysis/review by one researcher. Assume that Medallia data will also be reviewed during the same sprint for health checks and release monitoring.
    
-   Untested. While we have experimented some in this discovery, we will fully validate approaches as we use them.
    
-   Dependent on establishing clear scope before getting started!
      

**Not included in time-boxed discovery:**

-   Looked briefly at Domo, didn’t understand how the dashboard worked.
    
-   Possibility of creating label for Toxic Exposure usability upstream as a case category
    
-   Meeting with Contact Center and Megan Hicks to discuss Streamlit
    

## Benefits/Limitations of MyVA411 Data
See an overview of MyVA411 data[ in this document.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/MyVA411_About.md)

### Benefits of MyVA411 Data

-   Calling is more accessible means of giving feedback than completing the Medallia survey [(documented here](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/352)).
    
-   Much higher call volume than Medallia survey, could result in greater variety of insight (up to a point)
    
-   Captures wide swath of pain points where Veterans have to call to be unblocked
    

### Limitations of MyVA411 Data

-   Data isn’t sorted by online/paper form, and we know only 25% of Veterans are filing online
    

-   We will find out on our next data request how this impacts the value of the MyVA411 data.
    

-   Agent coding isn’t consistent; sometimes Pact Act has no reference to Pact Act.
    
-   PII means the data needs to stay on Citrix or Azure for processing in order to be secure
    
-   Will skew negative– many Veterans see calling Contact Center as a last resort
    
## Approaches

### Approach 1- Manual Coding

Take a small slice of the data so # of entries becomes manageable to be manually coded over the course of the sprint. Treat this portion as a random cross-section and representative of the larger data set.

This could be randomly selecting a percentage of the overall data set, or could include all entries that contain certain key terms. Consider ignoring Salesforce categorization; labels seem inconsistent and could be cumbersome to vet manually.

**Benefits:** Least rigid approach, allows for more nuanced pattern identification, draws on existing competencies of the UX team.  
**Limitations:** Manual, most time-intensive approach; can’t review as much data as with more automated processes.

### Approach 2- Simple Scripts for Partial Automation.

Work with Engineers to create a more automated process for finding patterns and cleaning basic PII. Come to engineers with vision and intent for the objective of the data analysis, highlighting possible keywords. Engineers could use simple scripts to brute force it without using AI.

1.  This matches the approach the Conditions team took in order to analyze free text from the contentions page. The team used Python on GFE and kept all data inside of Sharepoint. The data scientist used Polar, which is allowed on GFE, can get downloaded by the Help Desk. No NLP modeling, pretty straightforward metrics. Jupyter notebooks stored on Sharepoint. The team has offered to share their Jupyter notebook so 526 engineers can borrow the structure.
    
2.  Steven has experience working with natural language processing, but does not have GFE, making it hard for him to contribute this skillset to the analysis. He has discussed NLP models like Amazon Comprehend; Jared thinks that if the data stays within our AWS account, the data would be safe.
    

1.  We would need to learn more about what really is safe to do with Veteran data and see if we have the government tooling to make this workstream possible.
    
2.  Regardless, lean into Steven’s expertise in analyzing large data sets for the 1.0 100% data pull.
    

  

**Benefits:** Faster than a fully manual approach, allows us to look at the data from more angles (especially if using NLP)

**Limitations:** Requires more capacity to get started, might not be prioritized work for engineering when the support is needed.

### Approach 3- New Tooling

Explore data analytics and AI tooling that is being made available to OCTO.

1.  Megan Hicks is piloting Streamlit, an open-source Python framework that simplifies data analysis and offers many customizable options through a single page application
    - Introduces a tool to the brute forcing, adds a third party. Web-based with scripts? We need more information.
    - Scheduling time to meet with Megan, Aurora, Jared, and Steven to discuss the tool. Any additional conversation would need to be ticketed again.
    
2.  Heather Real mentioned two AI pilot programs going on right now; awaiting information.
    

**Benefits:** Save us engineering time; seems accessible for UX to work with tools independently.

**Trade-offs:** Tooling would require more research capacity to operationalize. As tooling becomes more common and problems are ironed out, we could explore with less risk down the road. Concerns about how safe it is to include PII.

# Recommended Approach for TE Monitoring
We know that MyVA411 offers a high volume of data, but the value of the data for monitoring a digital launch still remains unseen. 


Our focus will be to keep our monitoring lightweight and targeted. In our data request, we will request case categories dealing with "disability compensation rather than "Pact Act," specifically. [See justification in this About MyVA411 document.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/MyVA411_About.md) 

With the data analysis, we will take a hybrid approach of 1 & 2, leaning into Steven's background with NLP. This will keep engineers focused on their work but allow time for a conversation with Megan Hicks about Streamlit. If Approach 2 serves difficult due to PII and machine access, we will fall back to Approach 1. 

# Relevant Links
[Processing and Utilizing Veteran Support Data](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/accessing-and-utilizing-contact-center-data)
[How to use MyVA411 data in Domo](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-contact-center-data-in-domo)
[Discovery Notes document](https://docs.google.com/document/d/1vOy9Yyemm2AeMSC9NQBukWoaz67RNWt5pWkqSZ2OWpI/edit)

  

[Research-ops channel conversation about approaches taken by other teams.](https://dsva.slack.com/archives/C0216PL32HJ/p1728312464840329)

[Contact Center outreach](https://dsva.slack.com/archives/CNCEXNXK4/p1727103863129169)

[Thread with call center questions from another researcher](https://dsva.slack.com/archives/CNCEXNXK4/p1712594869499179)
