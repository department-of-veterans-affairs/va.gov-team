# Improve Testing with External Systems in Staging 

Link to ticket in [Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88973)

### End-to-end testing protocols:
- Manual end-to-end testing should be done in staging with external systems (VES, CARMA, etc) before releasing/enabling any code changes in production that may affect application submissions and/or functionality.
- Add an acceptance criteria or task to tickets so that end-to-end testing isn’t missed as part of QA review. This is also added as a test case in Testrail as part of the regression suite.
- End-to-end testing must always be done in the event of an OOB (Out-of-band) deployment that impacts functionality (as opposed to UI content changes).  Refer to the OOB Process.

### End-to-end testing steps:
1. If there is a flipper toggle, ensure that the flipper toggle is enabled for the environment and/or test users that are going to be used for the end-to-end testing. Testing should also be done with the flipper toggle disabled to make sure there are no unintended results.
2. Communicate with the points-of-contact of the external systems that an end-to-end testing session is needed to be performed in the respective VA channels that are dedicated to each of the external systems.
3. Once communicated, start a thread so that each testing session is self-contained and the results are documented and can later be transferred as needed to Github and/or Testrail.
