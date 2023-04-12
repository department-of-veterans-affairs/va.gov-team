**Find Zenhub ticket here: [vets.gov-team repo](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Disability%20526EZ)**

----

# 526 Qualitative Survey Feedback White Paper 

- Data collectiond date: 
- Number of total responses for Introduction/Start pages: 

---

## Results 

### Many (68) users mentioned recieveing an error when attempting to start the form that deosn't allow them to continue. This may be related to filing ITF and missing a BIRLS ID, EDIPI ID, or some other credential. Error message is as follows:

  >  We need more information from you before you can file a Benefits Delivery at Discharge claim with VA Form 21-526EZ. Please call Veterans Benefits Assistance at 800-827-1000 (TTY: 711), Monday through Friday, 8:00 a.m. to 9:00 p.m. ET to update your account"
  
- Upon calling the provided number, these users experience long hold times and become frustrated. 

## Recommendations

- Disovery to define the problem: converation with Aurora, Kyle, Robin, vsp-identity.
  - [Link to Slack Thread here]([https://pages.github.com/](https://dsva.slack.com/archives/CSFV4QTKN/p1680720909972049))
  - Link to Zenhub ticket here 
- Discovery to determine whether there are UI/content changes that can be impactful but low lift for dev. For example:
  - Provided number does not route users directly to the department needed; Meet with Contact center to discuss whether to surface a different number, e.g. Help Desk number or DEERS number instead. User quote:
  
  
  > Website stated "more ID information was needed for my account. Please call 800-827-1000. Tell representative that you may be missing your EDIPI number or BRLS ID." I called as directed multiple times and was transferred to DEERS. I was given my EDIPI number by DEERS and told that I must call back VA and provide this number so VA can update my account. I have now spoken to numerous reps at VA through 5 separate phone calls and have nobody has been able to help me to update this information so I can begin a BDD claim.

   - Another possible solution is including content on the form landing page(s) that set expectations around errors 
   - Or linking to the VA page that details how vets can change their profile/account information themselved for smaller errors - address, service, discharge dates etc. info that is prefilled into the form
   - Discovery with profile team/Robin about this issue 
        - See page on profile updates here 

## Other findings 
- Veterans have trouble updating account information (address, service, discharge dates etc.) in general, this account information is pulled into the form and not usually entered into the form manually and can also cause error messages to pop up
- Several users who tried to complete/update/submit form too close to ITF  expiration get a "something went wrong error"
- A few users mentioned wanting to be returned to the exact spot where they were when they return to the form instead of the beginning or pre-submission edit page. 





