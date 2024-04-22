# Description
VA would like all users utilizing VA.gov and it's surrounding sites and services to be presented with a unified version of the Terms and Conditions.  
Further, we want to be able to track acceptance on a user-by-user basis, including when revisions are made to the terms and conditions and updates are 
presented to the user.  

# Acceptance Criteria (on sign-in)
- [ ] On sign-in, check if user has accepted current Terms and Conditions
- [ ] If user has not, present Terms and Conditions for acceptance
- [ ] If user has accepted, do not present current Terms and Conditions
- [ ] If user accepts, forward them to where they were going
- [ ] If user does not accept, prevent log-in

# Acceptance Criteria (on new Terms and Conditions)
- [ ] When Terms and Conditions are updated, all users are presented with the new version via the above workflow

# Acceptance Criteria (record keeping and auditing)
- [ ] 


# Questions and Answers:
- [x] **Question** How/where will audit need to access terms conditions compliance (users have/have not accepted)? (How are they doing this with Cerner?)  
**Answer** Office of General Council (OGC) will give VA a person’s name and the IT staff would enter it in a script and return the T&C data with a copy of the signed version(s). 
- [ ] **Followup Question**: We need further details.  How will this information be accessed?

- [x] **Question** Any retention requirements for prior versions of terms and conditions? If they accept the new ones do we care if they also accepted the old ones? If so, how far back?  
**Answer** Acceptance of all signed versions should be maintained along with a copy of that version since that Veteran had access.

- [x] **Question** Do we need audit reports for compliance?  
**Answer** Reports need to be generated upon request.
- [ ] **Followup Question**: What format do the reports need to be in?

- [x] **Question** Do we block login if someone accepted an old version but not the new one?  
**Answer** Yes after the mandatory date required to accept the new version has past.  There should be an optional period to accept new T&Cs (6 months or so) before they become mandatory.  

- [x] **Question**  Any idea how often they'll audit?  How fast do they need audit results?  
**Answer**  Not sure how often, but there is VA Policy on how fast applications have to respond. Something like 3 business days. 
- [ ] **Followup Question**: More details needed.  How are audit requests sent?  Is there an example of an existing audit?

# Pre-Launch Action Items
- [x] Final Legal Docs from Content Team _(Tom)_
    - [x] [Terms of use final draft](https://docs.google.com/document/d/1S2MTIZ3tklLheHF--xQQau9PnVkVUlNd/edit?usp=sharing&ouid=105984809890077019983&rtpof=true&sd=true)
- [x] Logout URL for people who don't accept TOU _(Alex)_
    - [x] [Declined page](https://www.va.gov/terms-of-use/declined
- [x] Cerner Cookie _(Trevor + Alex)_
- [x] Request from MHV to send their users to our login page & redirect back to MHV _(Alex + Joe)_
    - [x] Asks MHV team to add a query parameter `redirect_url=<their application url>`
- [x] Fix bug where mobile app doesn't redirect users who don't accept TOU _(Alex)_
- [x] Remove TOU from other areas of va.gov and the mobile app
- [ ] Create timeline for TOU Launch & Post-Launch

# Post-Launch Action Items
- [ ] Add some indication that the Accept / Decline buttons are on the bottom?
- [ ] Do we want to create functionality to set either _Accept_ or _Decline_ (probably _Accept_) as the default?
- [ ] Create a "Terms of Use" link in the site footer so users can change their choice?
- [ ] Reporting metrics

- How many people accepted (over x period of time)
- How many people declined (over x period of time)
- How many people took no action (over x period of time)
