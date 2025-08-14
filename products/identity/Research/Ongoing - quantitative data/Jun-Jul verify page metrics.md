# 2025 Q2 verify focused survey data findings

**Office of the CTO - Digital Experience (OCTO-DE), Identity Experience Team**

- Researcher - Clayton Zook | clayton.zook@oddball.io


## Background
- Review and analyze metrics related to the /verify page to identify potential friction or patterns. This analysis will help us better understand how users are interacting with the page, especially as traffic increases through VEO emails, interstitials, or USiP flows. The insights gathered will let us know whether more frequent data pulls or additional tracking are necessary. 


## Methodology 

- We pulled data from monitors that our team previously set up in [DataDog](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/j9g-8dj-q9p)

 
## Key data points
- Visits to the /verify page increased in mid-June, the same time frame as we saw a spike in authentications after a mass email send to veterans.
    - This increase in page visits was likely a result of the email
- At the end of June the /verify link went live at the top of a resource page about verify
   - Starting around this time we see traffic to /verify steadily increasing through July.
   - This steady and stable increase is likely due to new link being added, and we see a substantial increase in the Google Analytics data showing links from the resource page to the /verify page
   - Note: Google Analytics shows different numbers than DataDog, but the numbers show the same trend and Google Analytics is where we can see the links from, while DataDog is otherwise our source of truth.
- For users who are in an authed state, we see that the % of folks clicking out to verify with a credential service provider and returning in a verified state remained steady
   - From Login.gov - around 25%
   - From ID.me - around 20%, showing a slight decrease - something to watch in the coming weeks.
- About twice as many more users with LoginGov account are finding their way to /verify than IDme users.
   - We would expect to see opposite true, since IDme have about twice as many authentications, so this is something to further consider or to find ways to diver deeper
- For the verify alert (aka widgets) around the site, we do see about twice as many IDme users than LoginGov users seeing the alert and clicking through
   - We also see more folks returning in a verified start, having started at an alert
   - This makes sense, since the alert is likely to show up when a person is ready to take some kind of action. It acts as a roadblock to that action.
