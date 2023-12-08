# Measuring Task Completion Roadmap Recommendation

## Problem statement
Creating MVP dashboards that don't capture the actual task completion and time to complete metrics we want to be **is delaying the discovery, ticketing, and resolution of app event tracking gaps**. 
* Time spent building the less precise measures is time taken away from reviewing app tracking data, identifying what's missing, defining how those gaps should be filled, and getting those tickets into front-end's workload. 
* Every time we identify the need for improved tracking, we have wait *at least 30 days post version release in app stores* before we will having meaningful data to analyze.

This approach is creating a cascading effect of delays for all accurate measures.

## Recommendation
Prioritize event tracking gap identification and filling those gaps so as to:
1. Reduce the overall wait time to meaningful measures and metrics in multiple areas.
2. Increase the timeframe across which we will have data from for these new events.

## Stages & steps
### Stage 1: Define needs and gaps
1. **Rachel/Ryan**: Create a list of all tasks in the app where we want to measure time to task completion and task success rates ***in order of priority to have measured***.
2. **Greta**: Use dashboard definition from Rx experiment to craft questions, metrics, and measures for each of the **top five tasks.**
    * **Greta**: Identify any tracking gaps blocking metrics & measures. So far, this seems to be a guaranteed problem on every feature.These tickets will generally be sized 1 but may be up to 3 in some cases where many events need to be added.
3. **Greta**: Ticket and hand off to front-end engineering.

### Stage 2: Fill the gaps
1. **FE**: Front-end builds and implements tracking.
2. **Wait:** Wait for new events to enter into production in the following release.
3. **Greta**: As early as 1-2 weeks post new events in production, update data documentation to reflect new events and event params.

### Stage 3: Build & demo the boards
1. **Greta**: Build the dashboards in order of priority and availability of data from new events. This build includes the data visualizations/presentations, and:
    * Writing dashboard overviews & glossaries
    * Updating Github dashboard documentation
2. **Together**: Demo each new dashboard, discuss, and ticket & prioritize improvements/additional needs.
