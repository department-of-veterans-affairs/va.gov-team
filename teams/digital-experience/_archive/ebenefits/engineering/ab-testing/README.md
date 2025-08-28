# A/B testing for eBenefits
_Avoid the idea of only stopping at a single test...they can be multidimensional_

1. What app do we want to plan for first?
2. What metrics do we want to improve on? Have a KPI ready.
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
- Payment History: test various functins (like sorting) to see if they are used.
- Rated Disabilities: test various functionalities (like sorting)
- VR&E Orientation: what impact does changing this make to conversions?
