Participant 4, Thursday, October 10, 12:00pm ET

## Role
Engineering lead, VSP program

## Products
client relationship, managing engineering teams, VA programs: lighthouse, vaos, vsa

## Determine health of product and team for user product

- is the product available? SRE availability
- are users able to find/navigate it successfully? product metrics that show the users are using it how the team who built it thinks they are using it
- tracking usage over time, keeping an eye out for spikes/dips in usage patterns that are unexpected

## Analtyics data decisions

- availability and latency, how long to load, how long to navigate and subit forms
- error vs success states
- see usage over time
- ideally, no actions need to be taken
- if availaibilty was dropping, investigate technical/engineering causes
- change in user behavior, investigate product
- would notice if things were unhealthy, but wouldnt take action if product was healthy

## Specificity of data, frequency of use

- SRE: site reliability engineer
  - wants to not look at the data, particularly engineering ones and instead have systems that notify proactively, "hey there was a sudden drop ..."
- product
  - personally not going to look at it very often, unless looking at specific time points, like a week after launch, a month after launch
  - talking with the team about future efforts, let's look at the history of this products analytics in current state and use it to inform
  - proactively looking for success stories, in a role as a lead it can help illustrate the benefits the platform has brought to this product

## Prototype

- assumes all products in dropdown are education
- assumes all data underneath dropdown is specific to vet tech
- what is a 30 day total?
- is it a rolling total or aligned to the last month?
- surprised by emphasis on target
- 1 column on data, vs 3 columns on targets
- no idea what the context is for the 30 day total number, more interested in number over time
- surprised by minutes of downtime, would rather see a percentage
- has no idea what customer satisfaction rating
- combined product score: what goes into it?
  - doesn't trust whoever decided what makes up a combined product score
  - i don't trust a combined score in general
  - high priority metrics for a product are going to have very different actions
  - users aren't using as expected vs systems are broken underneath are very different
  - intuition says it's conflating too many things
  - maybe each product has a highlevel metric, ex. user submissions
  - here's a list of 12 products, these three products have something that's not at target
- target over time chart
  - would want to interact with it, click on data points
  - percent above and below feels weird, used to working at analytics graphs about system health where a latency graph looks very different from an availability graph, so the idea of trying to compare is weird.
  - some of these, below is a good thing and some above is good thing
- thinks KPI goals are cool, why is it not the same as the first metrics table, would hope they would be combined
- confused about the text about the form - feels like it's not the right audience for the text
- number of questinos and pages are helpful only fi comparing to other forms or to a goal of ex. are we trying to ask vets less questions?
- clicks/time to complete, wants to know if they are going up or down over time
  - experience of user complexity
  - feels comparable between forms
- suspicious of form data, assumption is that different forms would have different branching, we have a lot of conditionals in the form.
- really liked annotated time points, ex. on this day we launched this feature
  - cool for someone to see who is not close with product
- definitiely would click on info icon and wants explanation on what's being measured and how it's being measured
  - where are these people coming from?
- what percentage of form submission attempts are succesful?
- likes seeing paper next to online submissions
- funnel conversions: would also like to see funnel conversions changing over time
  - previous month and month before that as additional data points
- there's a lot that potentially goes into minutes of downtime per month
- would want to be able to correlate spikes easier between minutes of downtime and percent down time backend systems
  - would hope to see the same spike on one of the backend systems
  - maybe it links out to grafana to dig into more detail
- would click on info button for customer satisfaction score average
  - would be excited to see over time and hopefully improving
- doesn't know what to do with survey prompt info but likes to learn it about the product
- asks what the HRC call center is
- would want to see call centers on the same chart, on the same scale
- only noticed vets > va.gov as annotated data point once amy pointed it out
- would rather see tier 1 call cases on a chart, changing over time
- personally, not helpful to see different call centers
- doesn't kno wwhat "per call center" box is

## What would you do with this information

- why did I come here in the first place? what did I see?
- if i had quesitons would reach out to the PM
  - would have to figure out how the PM is
- if i saw something concerning, would definitely follow up
- likely to identify someone else, but not personally take action
- would bug someone if it was below target or trending away from target
- expect engineering targets to be set largely from our defaults, we want to get to a point where we are opinionated about acceptable level of accessibility
  - if you launch on the platform, this is what you expect your targets to be
- wonder when seeing a given target, is it aspirational? is it actively unhealthy? is it mandatory?
- are the targets set once? or reevaluated each quarter?
