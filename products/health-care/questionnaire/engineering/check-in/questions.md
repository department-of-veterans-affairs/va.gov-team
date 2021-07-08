# questions

- va.gov vs native - what experiences are going where?
  - We will start with functionality in va.gov to iterate on user experience. Native app will have similar or same functionality implemented later.
- Are we tracking the vet's location?
  - I dont think so
- Does the website have push notifications?
  - I dont think so but maybe?  Not sure how feasibile this is.
- What is the notification mobile workflow? How do we touch the mobile app?
  - Not sure what this one means. native app can receive push notifications.
- How does/can a mobile app handle authentication pass off to va.gov
  - Prelimary look into this looks like it is highly complex and may not happen.  LoROTA _might_ change that but not sure.
- Which contact information should the clinician see?
  - How can we get that to the clinician?
  - Not sure which source for contact info yet. Data will be presented to staff users in VSE GUI and VSE for Clinical Staff.  
- How is a patient different from the va profile user?
  - Not sure
- Next of kin? Where is there?
  - We are told its in VA profile, but we are skeptical?
  - I am not sure. We will also have access to VistA data through VSIP APIs.
- Review contact information is on va.gov. Can we update vista? Can we leverage existing stuff?
- What is the source of truth contact info? VistA? LH? MPI?
  - How do we update this?
  - All good questions... The current system updates VistA directly which we can continue to do through VSIP APIs, or VSIP APIs might connect to Profile. We should plan to connect to VSIP APIs and the underlying source may change but the API should remain the same.
- New insurance?
  - What is the format and system we are pushing this too?
  - Is that system build by Vetext?
  - Insurance is a tricky thing.  There exists an application staff use to enter new or updated insurance information for a Veteran, including scanning of the insurance card.  We are not trying to replace that.  We will need to:
    - If the user checks a box that they have updated insurance info, tell the staff apps that an insurance info change is needed (via VSIP APIS)
    - Know if the user has not updated their insurance info in x timeframe then ask them if there is any change in their insurance status. Insurance updated date data should be available in VSIP APIs.  
- What is under light weight auth vs true auth?
  - LoROTA is Low Risk One Time Auth.  Lets have a separate convo on this.
- What does light weight auth look like?
  - See above, I think it will be awesome.
- How can we send dynamic links to Vetext?
  - LoROTA may help us do this
- myVa is task list
- How does VOAS bring in the join button for tele-health?
- Where are storing the status of the user's journey?
  - read all the time vs aggregated

## vetext

- Is vetext connected to Vista/MPI
  - VetText is connected to VistAs
- What is that is different?
  - VistAs are the actual data store / EHR for each facility. MPI is a national Datastore of patient information
- Temporary phone number with Tele-health?, how should we handle that?

## Session 2

- Do we need have LOA3 to do check in
- Do we need a LoROTA pre-check in process
- What % of users have LOA3?
- If a vet has an appointment does that imply that they have LOA3 access?
- How can we answer "Is this user a VA patient?"
- How did the in person Kiosk deal with permission and LOA3
- Can LOA3 be achieved with LoROTA?
