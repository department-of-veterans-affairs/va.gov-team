# Overview
We will complete the table-sorting A/B test using Google Optimize. We will create code to allow table sorting on the page and then hide this part of the UI. We will then use Google Optimize to then show the sorting part of the UI to 50% of users and track events on the page.

## Google analytics even details

### Control
- **page load event** - `table-sorting-ab-test--control` - Fired to ensure roughly 50% of traffic is seeing this version

### Variation A
- **page load event** - `table-sorting-ab-test--variation-a` - Fired to ensure roughly 50% of traffic is seeing this version
- **primary event** - `table-sorting-ab-test--sort-used` - Fired when a user changes the sorting drop down (will need to be de-duplicated so that only one event is fired per visitor)
