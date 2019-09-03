This is where we click through all the features in staging, take notes, and prioritize some of the innerworkings of eBenefits.

**Helpful Links**
Test Accounts - sensitive, please ask for this
[List of current links on eBenefits homepage](current-links.md)
[PDF version of layout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research-archive/eBenefits_current_state_20181213.pdf)

**Notes**
- General
  - BGS Benefits Gateway Service (BGS) orchestration layer
  - EVSS reaches through BGS to get its data from the Corporate Database (CorpDB)
  - Any manual entry or submission will take an extremely long time (several months)
- Rated Disabilities
  - A *view* task
  - Might be able to simply reproduce
- Payment History
  - Clicking on date shows a detail view
  - Pagination + Filtering opportunities
- Dependents
  - An award is when your compensation claim is deemed complete, it is considered Awarded
  - A vet can have a dependent listed that is not associated with any Awards
- View Representative
  - Power of Attorney (POA)
  - a *submit* task (which we will do after View tasks)
  - vet360 is supposed to hold common data and contact info and sends that info to CorpDB
  - When adding a new rep, it asks for a insurance number but what happens when the vet doesn't have one?
- User Roles and Relationships
  - This is going to be a large enterprise wide task
- Modify Dependents
  - Should we reconfirm their personal contact info every time?
  - Update marital status
  - Add a dependent child -> this just needs to get pulled out of the recently shipped 526 application
  - Not a lot of supporting documentation needed?
- Hearing Aid Batteries & Prosthetic Socks
  - Currently iFramed with the Denver Acquisition and Logistics Center
    - An API needs to happen from someone
    - Lighthouse team might be able to contact them and get something in place
    - Order status not in play yet?
- Apply for VA Home Loan Certificate of Eligibility
  - iFramed from LGY (Loan Guaranty)
    - Asking for A LOT of data that is already known - REENTRY IS BAD
    - iFrame also cuts off - requiring user to open inspect and resize window :(
    - DD 214 is your proof of service and most important for proving history
- Prioritization
  - Focus on the *view* tasks first, establish some documentation
- Questions
