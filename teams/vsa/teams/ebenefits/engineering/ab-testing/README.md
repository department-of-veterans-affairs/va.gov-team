# Applications testing using A/B testing
_Avoid the idea of only stopping at a single test...they can be multidimensional_

1. What app do we want to plan for first?
2. What metrics do we want to improve on?
  - Conversions
  - Reduce failures
  - Time spent
  - Top funnel locations
  - Functionality/recommendations (508)
3. What tests would accomplish this?
4. How would those tests be implemented?

Notes
- Use feature toggles (Flipper)
  - Set to 50% for one set of traffic compared to the others
  - Use GA to track pages and events to get a sense of what te conversions might be (if we are testing for that)

Feature candidates to start with:
- Test sorting on Payment History (given its high traffic numbers: see if sorting is useful)
- Test sorting on Rated Disabilities for individual ratigns (to be descending: is it reducing cognitive overhead?)
- Test engagement with VR&E Orientation
