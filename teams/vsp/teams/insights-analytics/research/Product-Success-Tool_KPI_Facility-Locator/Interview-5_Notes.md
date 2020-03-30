# Interview 5

30 March 2020

Note: participant referred to as "P5"

Anything shown in quotation marks is a direct, or near-direct quote from P5

## Notes:

- Consented to recording
- Can you tell me a bit about your role at the VA
    - "I serve as the Product manager for the VA Online Schedule tool"
        - Ensure we meet the user needs, veteran needs, as well as the technology outcomes for the VA itself
- How often do you use KPIs?
    - "I'm newer to VAOS, I took over in February"
    - "We've begun rolling out an MVP in multiple phases"
    - "I have metrics to evaluate each of those [rollout] phases as well as overall health of the tool"
- How are those metrics separate?
    - "For the first rollout we were heavily focused on performance (we had some latency issues we wanted to make sure were addressed)...versus the health of the tool is more of a longevity [based metric]"
    - Short-term vs long-term metrics
- Would you want to see those things together or separate?
    - On the same dashbaord
    - "If there were specific KPIs for a feature rollout, maybe there's a section"
    - Data being pulled into a repository, but segment that data by phases
- How often do you want to look at those metrics?
    - "A couple times a week"
    - Looks to see trends "Just to see how things are performing"
- Where do you look at this data now?
    - "Google Analytics"
    - "I know we have a Grafana and Sentry dashboard for the backend, but I don't have my SOCKS setup so I can't view them"
    - Use case: needs to quickly pull visualizations of some data for presentations. No good way to do that today.
- Ideally, how would you do that? Have a visualization already running?
    - "Yeah"
    - "I'm still getting re-acquainted with what I can to in Google Analytics"
    - Has tried to use Google Data Studio to mockup a dashboard
        - "A lot of data wrangling to make that real-time...I gave up pretty quickly"
    - "I'm not sure if there's a way in Domo to create a visual where you're overlaying different dimensions"
        - "I'd love to be able to say of total usage, here is this broken down into the three [possible] flows"
        - "I don't know how I could do that now without spending a good amount of hours recreating those"
- P5 Opens Domo dashboard for screensharing
- Do you just want to talk me through what you're seeing and whether that would be helpful for you and your team?
    - KPI 1
        - "I'm thinking about how, um, even here I can see how you have the Objective 1 and the KPI, but right beside the KPI based on your, I don't know if there's a single metric for this KPI?"
        - Confusion around the first KPI and what it means
    - KPI 2
        - "I'm having a hard time reading this graph"
        - "Yeah, um...I might choose a different visualization of this data"
        - Understands what the graph is showing, but it took a while
    - KPI 3
        - "I really like this graph. It's giving you where the target is, where you've reached your max, and where the data is today"
            - Likely interpreted the AVG as the target
    - KPI 4
        - Likes having CSAT data
    - "I think that this could work, I think that our visualization would require a bit more...categorization"
        - Describing a combined bar chart to breakdown requests by type
    - "[stakeholders] currently receive an analytics report" weekly and monthly
        - "I'm wondering if those stakeholders would be favorable for viewing a real-time report like this vs the static report shared with them"
- Would the PPT export feature be helpful?
    - "Yes!"
- "I think that this would answer the overall product health questions we have in a single location"
    - Stakeholder can just download slides from each of the reports that they want
    - "Makes their process a bit more automated"
- You're more interested in having a deck that would be downloaded rather than giving access to stakeholders?
    - "I would much rather give access to them"
    - "I'm not sure of their appetite for going and self-serving themselves with this information." Rather than being presented the data along with the story.
- Are there other people you'd share this KPI data with?
    - "Yes, Office of Connected Care"
    - Stakeholder in the VA mobile team
    - DEPO lead
- How often do you think they would be interested in looking at these metrics
    - "At a minimum monthly"
    - "I've been trying to walk through some of these metrics in sprint reviews with our stakeholders. That's bi-weekly"
- Is there anything you'd want to add beyond KPIs?
    - "Um, as in like interesting data that we're tracking?
        - Facilitator: e.g. data, context, anything else
    - "I'm tracking a few events that are very specific to redirect links in the tool to other portals"
        - "More product-specific than it is KPI-specific"
    - "From a product team's perspective do we make requests back to the Analytics team for updates, or are we able to add ad hoc metrics?"
        - Facilitator: Right how you'd work with us due to the data connectors
    - "I think the only other thing that I would be interested in seeing then here [are] the funnels for how users are working through a flow"
        - "Something a bit too granular for stakeholders, but important for product work"
    - "Can you make tabs, or paginate?"
        - Facilitator: right now it's one single page. Can link to other places.
        - Would likely fit their need
        - "Maybe that's a part of this, too. Here's how we're interpreting the funnel, and here's the funnel link"
- Would having notes or limitations or annotations in the dashboard be helpful?
    - "Yes"
    - Already has a doc for tracking some changes and ways to interpret data historically
- Do you have any questions for me?
    - "I assume that [with Domo] you can use all sorts of graph types?"
        - Facilitator: yep
    - "I can lean on y'all to understand the best way to visualize that data?"
        - Facilitator: Yeah, that's definitely something we can help with