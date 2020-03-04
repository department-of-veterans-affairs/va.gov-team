## Participant 4 Thursday, June 20, 2019 12:00pm EST

### Role:
Design lead for education portfolio. Looks at tools and architecture of the experience. 

### Important metrics:
- Dependent on the lifecycle
- Successful applications (apply and receive) 
- Reduce failed applications (people who aren’t eligible) 
- Path to conversion with the tool (where they come from before) 
- Usage (low and cyclical, what the season for usage is, what the seasonal conversion rate is) 
- Relationship between contact center and usage

### Notifications:
- Would want to be notified of failures or spike in usage causing slow down. 
- Threshold for increase in application. 
- Realtime for increased usage and monthly cycle. (Ex. Day checks go out so uptick in usage) 

### Report out:
- Use email to notify a collection of people, like business partners, spark conversation of what’s working or not working. 
- Slack channel for DSVA/DEPO, look at threshold changes over last 24 hours from bot. Reactive and pro-active state (DM and see where things above or below thresholds are called out)
- Slack channel for related metrics. 

### [prototype]:
- The meaning of event is going to be different in different contexts. “Total events” and “unique events” there’s a level of abstraction that we need communicate the meaning of those two numbers in relation to each other. Comparison of total and unique, need to know the form to know if it tells you about the people or the form. Depends on how long the form is. Need to define what the success rate is. 

- comparison tool not on the chart, the metrics we set up for that are going to be different.
- Average latency question. I would assume we would see that by product. If there are latency issues, they are exposed. 
- Current status and weekly health different, didn’t get that the longitudinal measure of each spreadsheet is different. 
- The thing I would look for from you, there’s nothing that helps me troubleshoot. If there’s a weekly and monthly of 0, I would start asking questions of my business partners. I’d like the ability to go directly from here to GI, and research what’s going on with the form. 

If the form was down:
- Don’t know that I’d go to the platform or dev channel, and say “I noticed this was down”. Assuming that it would go to the appropriate dev or platform person first. 
- Warning no, disabled no. (finds tooltip state) 
- acknowledged incidents means tickets. not clear if those tickets are from the ticketing system, or GA. assume tickets, not GA. (shrug emoji) 

*** Define where current status is being pulled from ***

- Looks to see if incident is defined in the glossary (it’s not)
- Finds legend for icons
- “Doing well” is really ambiguous. Is that above target? That’s what I’d assume. 
- I’d expect product owner to define thresholds. And we’d talk about it as part of defining the roadmap. 

### Top 5: 
- All important, except for the ambiguity around events
- Repeat events = when someone his submit over and over. Single user same session
- Average latency is of interest. 
- Not sure how call volume is going to be linked to the form. Percentage of total. 
- Average time to complete, as well as the standard deviation. (About same, or wildly vary)
- Offline to online time. Fantastic metric. Going to be quantified differently. In some cases, there’s not a user trigger. 
- More complexity in the offline v online submissions, PDF complicates things with data entry. 4-5 different submission paths. 
- CSAT (unclear of acronym). Depends on the peak recency. Real time survey data opens up a can of worms, working through that can of worms with business never results in better usage. Frame it appropriately if we use it. Do we care about CSAT with form experience. Less important over life of product. 
- Deploys, I’m not sure that I care. 

Drill down
- Repeat events, funnel conversion. Submission breakdown offline vs online with product roadmap. Drill into point of entry to see where spike is coming from. 
- Curious if bounce rate by funnel step is something we’d want to know about and drill into. When the bounced and why. Not going to be relevant most of the time. 

### Missing:
- People who live in this space can show me things I never knew. Mid level of understanding, this hits most of the checkboxes. 

### Versions:
Color:
- My gut says this does a better job of communicating information without adding cognitive load. The colors are relatively rational. 
- This is doing a much better job of giving me meaning and drawing my eye. I like this a lot more. 

Emoji:
- I’m too old, I love this for a dev audience, I get it, and it’s fun, but from a design perspective is for me spending the least amount of time on the right things. 
- Most fun, least usable. Most emotional. I see it creating a lot of decimal point issues. 

Would right align numbers so I can make row-row comparisons. 
