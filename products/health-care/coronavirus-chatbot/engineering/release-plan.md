# Release plan

The chatbot will be made available to veterans upon launch via three pathways:

- a link placed on the coronavirus [FAQ page](https://www.va.gov/coronavirus-veteran-frequently-asked-questions/)
- a link placed on the [facility locator page](https://www.va.gov/find-locations)
- links distributed via social media and other communications channels

The links will be shielded from production traffic via [Flipper feature toggles](https://github.com/department-of-veterans-affairs/vets-api/pull/4165). Upon launch, traffic will be incrementally increased to each of the two pages where the link exists. The path to [standalone chatbot page](https://www.va.gov/coronavirus-chatbot/) will not be hidden or flagged, so any user that has access to the page route will have access to the chatbot.

During launch, the following data sources will be monitored for unexpected behavior:

- Google Analytics for event triggers and page behavior that suggests users are failing to load the chatbot widget and/or connect to the chatbot service. For additional details see [analytics request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8104).
- Sentry for any errors or warnings at the `vets-api` layer.
- Azure Application Insights, the APM tool that will be receiving telemetry from the bot service, for unexpected behavior within chatbot conversations.

We will evaluate on an hourly basis for the first day of launch as to whether traffic should be incrementally increased based on the outcomes we are seeing. Due to lack of 24/7/365 coverage, the team is considering de-incrementing traffic over night to zero initially to ensure any issues are surface during working hours and can be resolved quickly.
