From Checklist: Document product testing plan - with field, stakeholders, Document performance testing methodology

# Product Testing Plan

## Performance Testing

### Frontend

* Testing on multiple devices including slow mobile devices to look for performance issues
* Fixing performance issues as we do testing on staging and local environments
* Unit testing
* E2E testing on vets.gov
* Browser and device testing
* Accessibility testing
* Manual testing 

### Backend

Essentially the same as 1990

* Submit multiple applications to the staging environment exercising the different optional and multi-entry fields. Once submitted, generate spool files for each application and compare the values to those entered on the frontend to ensure that all fields are carried through successfully. 
* Codify the behavior with sample documents in tests that are run in our Continuous Integration server to ensure that the functionallity isn't unintentionally changed in the future.
