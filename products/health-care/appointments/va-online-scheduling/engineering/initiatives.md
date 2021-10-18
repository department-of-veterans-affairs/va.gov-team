# Technical initiatives

## Front end

### VAOS service conversion test cleanup

Once the VAOS service is launched, we will have a number of tests that use the old apis. We need to convert these to using the new apis.

Some of this work can be done in advance by using versioned mock helpers, so that we can switch the version in the helper and have the test immediately start using the VAOS service apis.

We may also have work to update the Cypress tests, though those could probably be duplicated in advance.

### react-query

Holding server data in Redux is not providing us much value, using react-query, particularly on the appointment list, would likely result in clearer code. We have been holding off on switching to this with the VAOS service and homepage refresh work, but could likely start working on this more as the VAOS service work solidifies.

### Test cleanup

We have two major test initiatives:

1. Cleaning up how our mock data is defined, to make it more concise and easier to understand.
2. Add Given/When/Then comments to our existing tests and making them more focused on testing single actions.

### Local form state

Typically, we hold form state for each page in our appointment flows in Redux. This isn't necessary and sometimes results in bugs where we haven't properly reset page state after data changes. Some pages have already been updated to use a hook that manages the state for the form system, we should continue converting pages to this.

We also need to keep an eye on Formulate, the next version of the form system from VSP, which should be coming soon-ish.

## Back end

### Datadog conversion

Datadog is available for teams to use if we ask, and it seems to replace Prometheus and Grafana to some extent. This needs exploration.

### Data/transformation optimization

Generally, the front end does a lot of data processing that isn't ideal there. Once the VAOS service work is live, we should look for more areas where we can take advantage of the the Rails api and consolidate data present it to users, like we've done with facility and clinic data.
