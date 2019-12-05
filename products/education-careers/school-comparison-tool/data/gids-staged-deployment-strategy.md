# Staged Deployment Strategy

It's the goal of the Digital Service team to get the GIDS (GI Bill comparison tool Data Service) deployed as soon as possible to allow the **EDUCATION TEAM NAME???** to directly maintain data behind the GIBCT (GI Bill Comparison Tool).

There are several VA process risks that the Digital Service team is mitigating using a staged deployment strategy. Those risks include:

- The current vets.gov ATO may not cover GIDS as-is
- The current VA NSOC deployment setup prevent us from allowing only computers on the VA network from accessing GIDS
- Functional testing has been minimal thus far between both the Digital Service and Stakeholders

The staged deployment strategy has the goals of making sure:

- GIDS is covered by the ATO
- Only those that need access to GIDS are able to get in
- GIDS is tested

The Digital Service team is continuing to work with all the necessary parties (CISO Office, VA NSOC, etc.) to alleviate these process risks, but the steps below will help us to move forward despite these risks.

## Step 1: Testing Environment

The GIDS and GIBCT will be deployed to a testing environment. This will allow the Digital Service to work with Patrick and Stakeholders to test the application. This environment will allow for rapid deployment of GIDS (to accommodate fixes as they come in) and frequent database clearing (to reset for targeted tests).

Once testing is complete, this environment will be retired.

## Step 2: Staging Environment

Once the bugs are worked out, the staging environment will be setup with an initial data set reproduced from production. The database will not be routinely cleared, but application code can be deployed when needed. GIDS will be deployed next to an accompanying GIBCT instance for viewing the linked data live.

This environment can be used as an interim production, being used to produce data that will get deployed to production. This is the workflow stakeholders will follow:

1. GIDS: Login
2. GIDS: Upload new CSVs
3. GIDS: Review data in GIDS
4. GIDS: Approve data by loading into GIBCT
5. GIBCT: Review data
6. GIDS: Export data to a CSV
7. Stakeholder sends CSV to Digital Service
8. Digital Service reviews CSV
9. Digital Service uploads CSV to production GIBCT

There are definitely redundant steps, but doing this:

- Removes risk of operating GIDS without an ATO (steps 7-9 are the same process used today)
- Allows Stakeholders to start using GIDS for more frequent data updates (less bottlenecking by Digital Service and Patrick)

This environment will be retired once GIDS is approved via our updated ATO.

## Step 3: Production Environment

This environment will be created immediately after the Digital Service confirms that GIDS is covered by the vets.gov ATO. It will have GIDS running in production, with any data updates going directly into the publicly accessible GIBCT.
