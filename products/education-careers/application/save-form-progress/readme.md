# Save progress

VONAPP will let you return to an in-progress application to pick up where you left off. How can we reclaim this functionality? Even for applicants with no prior knowledge of VONAPP, it is a bad experience to lose data on page refresh.

### Who needs to save progress?
- Interrupted applicant. Gets pulled away to another task and can’t get back before session timeout.
- Blocked applicant. Starts application and runs into hard obstacle like needing to find documentation for military service.

### What is required to save progress?
- A vets.gov account
- Permission to store sensitive information (SSN, claim details, dependent data, etc.)
  - How long do we keep data?

While not strictly necesary, it would be nice to have a place to see your unsubmitted applications that you could pick up again. It might be acceptable to just have a prompt when starting a new application if you have one saved. But there is some "where do I find it" frustration before the visitor gets there.


## Resume application flow
1. Login (site-wide)
2. See open applications
3. Select application
4. Enter form at exit point
5. Continue

### Assumptions
- Entering data in an application when logged out would prompt visitor to log in

## Questions
- What is an average number of forms that Veterans fill out?
- Across how many departments? For example EDU -> EDU seems helpful but EDU -> Healthcare might seem creepy
- What about updates to stored data (Name change, new address, etc.)?
- What if data entered is bad and is corrected later in other VA databases? We would not be storing best data. **We are storing what you gave us, not official data**
- If data is now stored, should Veterans be able to view stored data outside of a particular form? E.g. A more robust Veteran profile with the ability edit stored data?
- Should there be Veteran controlled settings about what type of data can get stored across sessions? Across genre of forms?
- How many forms are completed in more than one session in VONAPP currently?
