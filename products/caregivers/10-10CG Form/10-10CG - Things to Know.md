# Things to know about the 10-10CG
This document contains tidbits, odds & ends, and information about the 10-10EZ form, development, testing and anything else that isn't captured in other documents.

### Abbreviations
- CG = Caregiver
- ...

### Development
- Originally, va.gov vets-api was directly connected with CARMA, which is the system used to process the CG application.  In March 2022, MuleSoft was introduced as a middleware to reduce CARMA failures due to timeouts.  The decision to use Mulesoft was made in early 2021.  It seems that the solution discussions did not include using vets-api retry capability at the time, instead of introducing another software integration.  In the summer of 2022, it was decided to implement both Mulesoft queuing and vets-api retry capabilities to mitigate outages, failures and timeouts from both sides. Production release scheduled for end of September 2022.
- ...


### Testing
- ...


### Miscellaneous
- ...
