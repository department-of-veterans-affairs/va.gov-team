# Sprint 0 - User Endpoint Enchancement

[Epic](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/5815)

## Problem Statement

### Current Experience ###

- Currently our user endpoint is overloaded with data. Some of this data requires calls to services upstream of vets-api or heavy data manipulation. This cause two issues: 
  1. User endpoint response time can be long 
  2. If something fails, upstream call or backend logic, then the user is completely blocked from using the app


### Desired Outcomes ###

- We would like to update the user endpoint to only include data that is an absolute must for the user to start to navigate around in the app. Doing so would lessen the chances of issue #2 happening and should dramatically reduce response times. 

## Assumptions and Level of Confidence

1. Loading data for features that used to be part of the user endpoint could be perceived as having a long delay since the info will no longer be front loaded.  This data could still be front loaded behind the scenes to alleviate this. 
2. Since monitoring is per endpoint we will likely see an increase in alerts when there are issues with the new ones we create with this work 


## Risks

1. Loading data for features that used to be part of the user endpoint could be perceived as having a long delay since the info will no longer be front loaded.  This data could still be front loaded behind the scenes to alleviate this. 
2. Since monitoring is per endpoint we will likely see an increase in alerts when there are issues with the new ones we create with this work 


## Business Goals
- First small step towards offering unauthenticated functionality

## Roadmap

1. Determine what data is necessary for user app interaction
2. Backend separates unnecessary data into new endpoints, where possible
3. Frontend updates to integrate with new endpoints where needed

Potential Fast Follow: If step 1 reveals that we don't really need all of the data, it's possible we could change the existing user behavior to make some parts of the data optional, so if the data requests fail at least we don't error the whole request. This would have benefits for all existing versions of the app, but it's highly dependent on what we find in the code audit. This would only be possible if the front end can gracefully handle the missing data. Determine what data is necessary for user app interaction
Backend separates unnecessary data into new endpoints, where possible
Frontend updates to integrate with new endpoints where needed 

## Technical Approach

All of this work is internal to our team so we should be able to quickly and easily make decisions. All the engineering work will be done within vets-api and the mobile app frontend.

### QA strategy
Should be transparent for users, but it would be nice to be able to mock some failures that would have blocked a user on v1/user and make sure it doesn’t with these changes in place. We would want to do at least full RC testing of the app, plus scrutinizing areas of the app that are most affected by the changes to the data structure. 

### Launch strategy
This change should be transparent to the users, but for us we will roll out the new endpoints while maintaining the original user endpoint. Once we are confident in those new endpoints we will switch the app over from the current user endpoint (v1) to the one created with this work (v2)


## Measuring success 

We can compare user endpoint failures against historic data

## Stakeholders

Ryan Thurlwell, Rachel Han

## Open Questions

- What is the minimum data from the existing user object that is necessary for a user to navigate the app?

## Important Links
[Current user endpoint](https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/v1/user.getProfile)
