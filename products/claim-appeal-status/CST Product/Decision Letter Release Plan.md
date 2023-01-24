# Download Decision Letter Release Plan 
## Phase I: UAT 
### Planning: 
Desired date range or test duration: 11/2/22-11/10/22  
Desired number of users: 7  
How you'll recruit the right production test users: We’ll be using personal and professional networks to recruit production test users.  
How you'll conduct the testing: Live, virtual sessions, giving users assigned tasks to test use cases.  
How you'll give the test users access to the product in production w/o making it live on VA.gov: feature toggle  
### Results:  
- Number of users: 7  
- Number of bugs identified / fixed: 5/5  
- Types of errors logged: general usability issues

 
Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no If yes, what:
- changed the end point attribute used to generate "subject" of the document
- removed "ratings decision" document type from the listview
- fixed listview to show items in reverse chronological order
- changed the end point attribute used to generate the date the document was created

## Phase II: Staged Rollout (also known as unmoderated production testing) 
### Planning 12/06/22 - 1/14/22  
How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
<ul>
  <li>Zero errors logged in Sentry</li>   
  <li>Number of decision letters downloaded / # of pageviews</li>  
  <li>No calls to call center due to people not being able to download decision letter</li>
</ul>
  
Links to dashboard(s) showing "success criteria" metrics: <a href = "https://docs.google.com/spreadsheets/d/14g_nD178fwJbvXMn_24uMHJUkm85xIGEa3eeXjcylig/edit?usp=sharing">CST OKRs and KPIs - 2022</a>  

### Stage A: Canary 
#### Planning  
Length of time: one week
Percentage of Users (and roughly how many users do you expect this to be): 1%
#### Results:  
- Number of unique pageviews: 439
- Number of letters downloaded: 972
- Call Center Complaints: 0 
- Types of errors logged: 1 Sentry error due to a VBMS service disruption not caused by our calls to service.

What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?  
- nothing as of yet

### Stage B: moderate  
#### Planning  
Length of time: two weeks  
Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results:  
- Number of unique users: x  
- Metrics at this stage (per your "success criteria"): 
What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? 
### Stage C: High 
#### Planning  
Length of time: one week  
Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- Number of unique users: x  
- Metrics at this stage (per your "success criteria"): 
What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
## Go Live! 
### Planning:
Desired date: 1/11/2023
### KPIs  
- Number of decision letters downloaded (daily, weekly, monthly)  
- Number of visits to decision letter listing page  
- Number of errors recorded in Sentry  
- number of Call Center calls related to decision letters (daily, weekly, monthly)  
- Average time between decision and disagreement pathway chosen

### 1-week results:  
- Number of unique users: x  
- Post-launch KPI 1 actual: xx lorem ipsum   
- Post-launch KPI 2 actual: xx lorem ipsum   
- Post-launch KPI 3 actual: xx lorem ipsum  


Any issues with VA handling/processing?: yes/no, lorem ipsum   
Types of errors logged: lorem ipsum  
Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no If yes, what: lorem ipsum 
### 1-month results:  
- Number of unique users: x  
- Post-launch KPI 1 actual: xx lorem ipsum   
- Post-launch KPI 2 actual: xx lorem ipsum  
- Post-launch KPI 3 actual: xx lorem ipsum   
- Any issues with VA handling/processing?: yes/no, lorem ipsum   
- Types of errors logged: lorem ipsum 

 
Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no If yes, what: lorem ipsum 
## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?  
2. What qualitative feedback have you gathered from users or other stakeholders, if any?  
3. Which of the assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results? 
