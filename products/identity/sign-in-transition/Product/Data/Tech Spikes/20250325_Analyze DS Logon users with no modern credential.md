# Spike: Investigate DS Logon users with no modern credential
**Completed:** March 25, 2025  
**Contributor:** Steve Dickson  
**Jira Ticket:** [SIT-96](https://jira.devops.va.gov/browse/SIT-96)

## Situation
We sought to analyze the population of DS Logon (DSL) users who have not transitioned to a modern credential, such as ID.me or Login.gov. There are approximately **1.8 million users with DSL credentials**, but DSL accounts for only **10% of VA authentications per month**. The goal of this analysis was to identify how many DSL users do not have a modern credential, understand authentication trends, and determine how frequently these users access VA services.

The key questions we aimed to answer were:
- How many active DSL users lack a modern credential?
- What is the authentication frequency for DSL users, particularly those without modern credentials?
- What trends exist over time regarding the transition from DSL to modern credentials?

## Findings

### **Authentication Trends** 
We conducted an initial assessment into 3 areas:
1. **DSL Authentication Volume (Monthly & Weekly)**  
   This analysis mirrors the approach we use for MHV, measuring total DSL authentications and overlap with other credentials. We reviewed monthly data since October 2024 and weekly data since November 2024.  
   - Approximately **80,000 unique users** authenticate weekly using DSL.  
   - Around **200,000 unique users** authenticate monthly using DSL.  
   - Of these, approximately **25,000 weekly users** and **60,000 monthly users** do not have a modern credential.

3. **Frequency of Use Among DSL Users**  
   We examined how many users authenticate consistently versus those who are new each month.  
   - A "frequent user" was defined as someone who authenticated in at least **one-third** of reporting periods (6 of 18 weeks, or 2 of 6 months).  
   - About **40% of DSL users** qualify as frequent users under this definition.  
   - Among users requiring modern credentials, **30% are frequent users**.  

4. **Total DSL Users & Modern Credential Needs Over Time**  
   We analyzed the overall number of DSL users and the subset requiring modern credentials, tracking changes over time.  
   - **All-time active DSL users:** 5.2 million, with **1.5 million needing modern credentials (~30%)**.  
   - **1/1/2023: 600,000 of 4 million needed modern credentials (15%).** 
   - **1/1/2024: 500,000 of 3.6 million needed modern credentials (14%).**  
   - **7/1/2024: 400,000 of 3.2 million needed modern credentials (~13%).**
   
   This data indicates a **steady decrease** in the number of users requiring modern credentials, suggesting progress in credential migration.  

## Demographics & Data Limitations  
- The analysis had **limited access to demographic data**. Prior investigations using state location or user agents (i.e. web browser data) confirmed expected population trends, showing a positive correlation between event volume and state population size.
- More granular segmentation, such as identifying **service members, Veterans, or employees**, was not possible without additional data sources.  

## Recommendations & Next Steps  
1. **Generate a new Domo report** for the SSiT Dashboard showing DSL CSP users by Owned Credentials (weekly/monthly) to understand the **"true" number** of DSL users who require a modern credential.  
2. **Update filter for credential segments** to include running windows (e.g., **6 months, 1 year, and 2 years**).  
3. If deemed a priority, **explore other data sources** that could provide further insights into DS Logon users and user segments.  


