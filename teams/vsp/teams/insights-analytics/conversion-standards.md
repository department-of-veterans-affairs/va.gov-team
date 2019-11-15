# Tracking Conversions on Vets.gov

Vets.gov considers any transaction between a user and the VA as a conversion. They do not have monetary value, so that tracking is ignored. GA calls things that signify conversions `goals`. They are configured inside GA itself at the view level and are not tracked or managed inside GTM.

## Where are the goals?

The overall view should have only a sparse set of goals reflecting overall site goals. The majority of goals will be defined on individual section views. This is because Google limits the number of Goals per view.

## Submission events

The primary method for tracking conversions are the `Submissions` events setup inside the code. These track calls to the Vets.gov API that in turn interacts with the VA line of business systems on behalf of the user. If there are set of pages preceding the `Submissions` events, then those can be tracked as a funnel. Only page views can be tracked as a funnel. This is a motivation for tracking our React routes as page views instead of events.

## Page views

Less often, the view of a specific page may indicate a conversion. This is particularly the case if that URL is really a React route.

## Other conversions

In exceptional circumstances, other things could be tracked as a goal. However, these exceptions should be rare and an effort made to convert them into either an event or a page view. This both simplifies the mental overhead of determining what is a conversion and to take advantage of the built-in GA capabilities for Goals that mostly center on those.
