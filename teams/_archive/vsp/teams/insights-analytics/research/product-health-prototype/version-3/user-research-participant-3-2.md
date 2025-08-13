Participant 3, Wednesday October 9, 9:00am ET

## Role
- Designer at DSVA
- Work on education, healthcare, and platform products
- Managing benefits, checking status of benefits
  - Comparison tool, search and lookup function for types of benefits
  - Facility Locator as it relates to urgent care
  - Platform, design operations and design system up to date

- Analytics help prioritize work, what products/features people are using, able to tell stakeholders how they are being used
  - At what point are applications abandoned
  - What is the relative usage of applications within the scope of VA.gov
  - Outside of VA.gov, the relative usage of applications against phonecalls
  - Overall percentage of usage of applications vs paper needs
  - The comparison tool: a lot of levels of complexity re: analytics, he believes it's over-tooled and the job it's intended to do is unclear
    - It can tell what kind of information in the tool actually motivates people to apply

- He got the metrics using GA
- He looks at them relative to the conversation he needs to have
  - Roadmap 2020 conversation, pulled analytics to look at trends over time
- He looks at least once a month, maybe twice a month

## How would you determine a product is healthy?
  - Relative to it's intended business goal
  - number of veterans eligible for education benefit that intend to use that benefit is about 1 million vets.
    - if I see numbers in education benefits analtyics approaching that number than he would say they are healthy
    - he also thinks an unhealthy application will have performance issues, slow database calls etc
    - hierarchy of needs for applications: usable, clearly tied to a business/user outcome, clear definition of outcomes so that we can measure how close they are to hitting full usage
    - business goals come from the business line itself, it's usually a hybrid of a business line and a digital product owner

## Product Health MVP Walkthrough
- Business line about education
- A list of products that you can interact with
- Doesn't know what's going on with the labels on the right of the percentage difference overtime and whether the lines are good or bad

### Meter
  - thumbs up/down is confusing, are all of the items quantified in a similar way?
  - More calls is a bad thing
  - More forms could be good or bad
  - Extra cognitive step to understand
  - Combined score from target: how would that be actionable?

### Metrics section
- He's assuming vet-tech form, but the url is wrong
- He thinks they are attributes, not metrics
  - THey seem less important than things that are actually changing
  - KPI goals, not sure what they would be
- Processing metrics section: are these the things i would want to know?
  - Form views and page views ont he same chart, but he can't compare them in separate charts
  - Downtime per month - thinks from an engineering perspective downtime is a different theme from the other metrics, other metrics are about user, downtime/backend systems is about application
  - Customer satisfactions score: who is the customer? What are we asking they are satisfied with? Is it with the form or with benefits in general?
  - Doesn't know what HRC is
  - HRC contact center calls: looks like random sampling of dates, not like a dot every month or week
  - Number of calls, emojis are confusing 143 is bad, but does the thumbs down mean it's trending down? the fact that it's pointing down but it's higher than average. It implies directionality and good/bad.

### Combined Score from Target
- wonderful and confusing
  - wonderful: visualization of normalized measure of all the things we care about overall
  - confusing: implications of above target/below target 
    - ex. if this was just for form submissions, I would know how to act on it
    - combined score for aggregate: how do i act on it? how do i pull it apart?
    - the meaning on the left side (percent difference from target) is way higher value
    - instead of meter, he would like more columns in the left side
      - he doesn't know what the target number is so he doesn't know ex. that online form submissions is 5% more than what?
      - he doesn't know what -93% means in the meter
    - he doesn't know if it's all online forms, explained that it's all the form submission for the products you have checked

## What would you do with this data?
- use in regular meetings with business partners and product team
- would want them all to have access to this
- Shows vets.gov appplication completion rates over time chart
- he thinks it was more about variables of products over time rather than across products
- He would expect it to be in real time, esp GA pieces
  - he would look at at it once or twice a month and around specific usage times
  - he doesn't know if he would look at it more than GA
- Where to invest staff and energy, as compared to those decisions being tied to other things that aren't related to product health
- Would use it in presentations to show impact of design change, to show how overall product health is increasing
- in conversations with designers cross-teams, if you eliminate per capita it would be interesting to see relative health of ex. disability vs education bc disability is used much more
- annual benefit usage = per capita number
