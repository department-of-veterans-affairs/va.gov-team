# High Level Product Decisions: Dependency Verification
`VSA eBenefits Team | January 2021 - Present`  

This is to help guide and memorialize decisions made about different functionalities and behaviors for the feature we are working with.  

-------------

## Thoughts on the Feature    
These are some consideration around expected behaviors for this feature and possibly a list of recommendations

Almost 100% of all modals are annoying - how do we make it not?
  
### Objectives for this feature
1. Modal that asks to verify dependents
2. Sub questions that pose the questoin on a per dependent basis and move the Veteran towards the approriate action item

## Strategies
1. Intercept as many Veterans as possible, put on as many pasges as possible
- Show, immediately, on login
- Could be in the header/footer all the time?

### Questions about how this feature should behave
1. When does the modal show?
- If it get  skipped when does it come back? next session
- If answered, when does it come back? 1 year

2. ~~If the Veteran is shown a list (in the modal) of dependents of 6 dependents, nd only 3 are addressed, does the list get reduced to 3?~~
1 dary Entry for 1 Veteran...no partials

3. Why does it need to start here on the View Dependents page?

5. Other modals might interfere

7. Could be in the header/footer all the time

8. Phase 2/3 will be for for capturing Veterans that need to have a dependent added

9. Hard to verify that its the true response

## Alternative or Supporting Methods
1. Tracking a certain number of "skips" could proc an email to the Veteran that indicates the request with more context.  Remember, once the Diary entry is updated, the modal will not appear again.

### Issues
1. The modal feels heavy handed 
1. The modal might have 508 issues
1. Safest way to scale for best coverage?

### Potential Solutions
1. Banner
(could introduce banner fatigue, depending on how it gets implemented


------------
