# How to move a non-Cerner facility to being a Cerner facility

## Purpose

If you just heard about a facility that is migrating to Cerner, then this document will walk you through how to prepare for it.

## Steps

For the following steps, we will use __facility ID **463**__ as an example.

1. Obtain the facility ID of the facility that will soon go live as a Cerner facility.

1. Create a Pull Request on [`vets-api`](https://github.com/department-of-veterans-affairs/vets-api/pulls) that adds the facility ID as a feature toggle. For example, for facility ID 463, you should add:

```yml
cerner_override_463:
  actor_type: user
  description: >
    This will show the Cerner facility 463 as `isCerner`.
```

An example Pull Request for this can be found [here](https://github.com/department-of-veterans-affairs/vets-api/pull/6045/files).

1. Wait until your `vets-api` Pull Request is merged **and deployed**. You will then be able to find your feature toggles at https://api.va.gov/flipper/features. Refer to [the guide on how to work with Flipper feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) for more details on how to enable/disable/etc. your new feature toggles.

**WARNING: YOU MUST MERGE AND DEPLOY THE `vets-api` PULL REQUEST BEFORE MERGING THE `vets-website` PULL REQUEST DESCRIBED BELOW.**

1. After your feature toggles have been merged + deployed, create a Pull Request on [`vets-website`](http://github.com/department-of-veterans-affairs/vets-website/pulls/) that does the following:

  - Add the feature toggle in [featureFlagNames](https://github.com/department-of-veterans-affairs/vets-website/blob/671f982333e34256a22722ca0a816ee98846775e/src/platform/utilities/feature-toggles/featureFlagNames.js). For example, for facility ID 463 you would add `cernerOverride463: 'cerner_override_463',`. An example Pull Request for this can be found [here](https://github.com/department-of-veterans-affairs/vets-website/pull/16295/files).

  - Add the facility ID to `CERNER_FACILITY_IDS` [here](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js#L5). An example Pull Request for this can be found [here](https://github.com/department-of-veterans-affairs/vets-website/pull/16220/files).

1. Merge and deploy the newly created `vets-website` Pull Request. At this point, both the `vets-website` and `vets-api` Pull Requests should be merged and deployed. The last thing to do is to [enable the facility's `cerner_override_463` feature toggle](https://api.va.gov/flipper/features).

## Gotchas (edge cases)

Facilities that are Cerner but do **NOT** have Cerner prescription features, add the facility ID to the [`CERNER_RX_BLOCKLIST`](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js).
Facilities that are Cerner but do **NOT** have Cerner secure messaging features, add the facility ID to the [`CERNER_MESSAGING_BLOCKLIST`](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js).
Facilities that are Cerner but do **NOT** have Cerner appointment features, add the facility ID to the [`CERNER_APPOINTMENTS_BLOCKLIST`](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js).
Facilities that are Cerner but do **NOT** have Cerner medical records features, add the facility ID to the [`CERNER_MEDICAL_RECORDS_BLOCKLIST`](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js).
Facilities that are Cerner but do **NOT** have Cerner test and lab results, add the facility ID to the [`CERNER_TEST_RESULTS_BLOCKLIST`](https://github.com/department-of-veterans-affairs/vets-website/blob/dbd95d9098ccd5acc1787ceb9ee3fc55da3e7852/src/platform/utilities/cerner/index.js).
