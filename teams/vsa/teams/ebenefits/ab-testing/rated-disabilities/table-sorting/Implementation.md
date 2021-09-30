# Overview
We will complete the table-sorting A/B test using a feature toggle on VA.gov to direct traffic and then use Google Analytics events on the control and variant A with differing labels so that we can track the events specific to each test variant.


## Feature toggle details
- **label** - `rated-disabilities--table-sorting-ab-test` (to make sure it is easily recongnizable as separate from the other feature toggles and is easily searchable)
- **split** - 50 percent of logged in users


## Google analytics details

### Control
- **page load event** - `table-sorting-ab-test--control` - Fired to ensure roughly 50% of traffic is seeing this version

### Variation A
- **page load event** - `table-sorting-ab-test--variation-a` - Fired to ensure roughly 50% of traffic is seeing this version
- **primary event** - `table-sorting-ab-test--sort-used` - Fired when a user changes the sorting drop down (will need to be de-duplicated so that only one event is fired per visitor)
