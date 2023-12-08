# Product Brief - Digital veteran card 


## Sprint 0

## Problem Statement
There are a variety of situations in which Veterans need to prove their Veteran status in order to receive a particular benefit (having [a way to prove Veteran status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#though-they-may-not-need-their-dd214-in-all-cases-to-apply-for-va-benefits-having-a-copy-of-it-facilitates-the-benefit-application-process-and-helps-veterans-access-non-va-privileges-memberships-and-discounts) helps Veterans access non-VA privileges, memberships, and discounts). Veterans would benefit from an easy-to-access official Veteran ID card to use in these contexts. Because there is currently no simple way to attain an ID like this, a widely accepted Veteran ID within the mobile app could prove a very useful feature for Veterans and greatly increase usage of the app.

From VA.gov: 
>“A Veteran ID Card (VIC) is a digital photo ID you can use to get discounts for Veterans at many stores, businesses, and restaurants. When you have this card, you won’t need to carry around your military discharge papers or share sensitive personal information to get discounts. And you don’t need to request another type of photo ID card to prove you’re a Veteran or to get retail or business discounts.”
*Veterans must have an honorable discharge to get the ID*

### Current Experience
#### In app:
While VIC card is not currently present in the VA Mobile app, Veterans occasionally report using letters in the VA Letters section of the VA mobile app as proof of service. 

#### Outside the app:
Currently,the processes for acquiring a VIC card are cumbersome and long and not well known by Veterans. 

##### Getting a VIC
(From [How To Apply For A Veteran ID Card](https://www.va.gov/records/get-veteran-id-cards/vic/)):
- Step 1: Veteran applies for VIC card (requires doing the following: Fill out form (digital or paper), upload or print a photo to attach to form. Requires SSN, a digital copy of their DD214, DD256, DD257, or NGB22, a copy of a current and valid government-issued ID.
- Step 2: Application is received, reviewed and the photo must be approved (exactly how long does this take?)
- Step 3: Veteran receives an email letting them know status of application. They may be asked for additional info or evidence.
- Step 4: If eligible, Veteran receives digital VIC card (pdf) in an email.
- Step 5: Veteran must print the digital VIC card (pdf) in order to use it (this cost is covered by the Veteran).

##### Using a VIC:
- Step 1: The Veteran is in a physical context where they need to prove their Veteran status in order to receive a Veteran discount or benefit (like paying at a restaurant or checkout in a store). The store does not have their own method for indicating Veteran status and the Veteran does not have any of the [other forms of ID that are currently accepted and used to get discounts](https://www.va.gov/records/get-veteran-id-cards/vic/) to prove their status.
- Step 2: The Veteran shows the store their VIC card to prove their status (* *needs to remember to have VIC card with them*).
- Step 3: The Veteran receives the desired benefit.


### Notes:
* VIC =  Veteran identification card (Veterans love it)
  * Identify themselves as a veteran at businesses
  * Intended to be printed
  * Must include a photo
       * Uploading/approving/printing a photo is the key part of this
       * **This is something to investigate if we can do a photo-less version**
  * Super expensive, single point of failure
  * Can be digital now
       * Emailed to you
  * Possible approaches
       * Ignore the photo requirement and automate it in the app, like letters
       * Perfect for a mobile app
       * Consider as part of apple wallet
* We don’t want to replace the VIC, but want something that can serve the same purpose in the app.
* Process for applying is long and opaque.  Long process and then you get a PDF to be printed.  Previously sent to Office Depot to be printed but that was too expensive
  * Email from VA has 2 PDFs, one of the front of the card and one of the back.
  * The VIC law is prescriptive and doesn’t include funding so Veterans need to pay to print the card which is not worth it.
  * The photo is the hardest part, needs to be approved and holds up the process.  The photo is part of the law.  We may be able to bypass that if we do something that isn’t technically the VIC but serves the same purpose but could be automated.
  * There is an ID # on the card
  * VA and non VA health systems interested in leveraging a veteran status proof in mobile app. sample use cases in non-VA health systems:
  	* veteran shows up at non VA ER in acute suicidal crisis. VA will cover the cost of that care - regardless of whether veteran is enrolled in VA health care. Health system knowing that this person is a veteran allows them to get treated and reimbursed
     	* Veteran gets care at private health system may be eligible for care under PACT act. If system knows they are a veteran, they can make other HIPAA covered clinical calls to help support veteran care.

### Pain Points
* Acquiring a VIC is time consuming
* Veterans need to pay to print the card
* Veterans need to remember to have VIC (or some other form of accepted Veteran ID) with them to receive benefits


## Assumptions and Level of Confidence
* A significant number of Veterans are in situations where they don't *already* have a way to prove their Veteran status (ex:[one of several other forms of accepted ID](https://www.va.gov/records/get-veteran-id-cards/vic/), a store-controlled Veteran registration system).
* A Veteran Status card displayed on a phone/in the VA mobile app will be accepted by 3rd parties as official proof of Veteran status.
* There will be marketing support for the new Veteran status card (to drive new app downloads).

## Risks
1. Creating a ‘competitor’ to the VIC could anger certain stakeholders (?) 
    1. Need to ensure creating an ID card that is not technically the VIC does not interfere with the VIC law
2. Surfacing current VIC may not be technically possible and the owning group may not have interest in working with us
3. If we aren't able to let the 3rd parties who currently accept VIC as a form of proof of Veteran status know that the digital VIC is an official form of Veteran ID, they may not accept it (and Veterans will be angry/disappointed/inconveniences in that moment, but it might also erode trust in VA & the app).
4. We don't currently coordinate with VA comms team when we launch features.
5. There are [several other forms of ID that are currently accepted and used to get discounts](https://www.va.gov/records/get-veteran-id-cards/vic/)(Veteran Health Identification Card (VHIC), Department of Defense (DoD) Identification Card—either a Common Access Card (CAC) or Uniformed Services ID Card, or a state-issued driver’s license or ID with a Veterans designation), and Veterans may find it easier to use those instead.

## Business Goals
- Increase app downloads overall
  - Bring users into the app that do not use VA Health
- Increase overall number of app active users
  - Give non-Health users a reason to return to the app
- Relates to [OCTO-DE goals:](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)
   - Logged-in users have a personalized experience, with relevant and time-saving features
   - Increase Veteran satisfaction with VA (Allowing Veterans to have a digital ID, which is highly requested and desired)



## Roadmap

#### V1
* 
#### V2 and beyond**
* 

## Technical Approach
* Unique identifier?
* Discharge status API
   * [Veteran Verification API](https://developer.va.gov/explore/verification/docs/veteran_verification?version=current) has this data
* Is there a way to access which Veterans have VICs and just surfacing it in the app?
* ID needs to be available offline
* Must have non-dishonarable discharge
   * [Veteran Verification API](https://developer.va.gov/explore/verification/docs/veteran_verification?version=current) has this data
   * so does this API https://developer.va.gov/explore/api/veteran-confirmation

## Measuring success
#### feature engagement:
* Track number of unique users that access the card in app
* Track number events, number of times the card is accessed in app
* if/when applicable, OS Wallet metrics for engagement  
#### Impact of launching VIC:
* An increase in app downloads that correlates with the launch of VIC card
* An increase in the overall number of active app users
    * An increase in usage of the app by users who do not currently use Health tools
    * An increase in overall usage of the app that correlates with the usage of VIC card in the app
* An increase in Veteran's satisfaction with VA that correlates with VIC card usage and/or the presence of VIC card  in the app
* Requests for ability to provide proof of service decreases in [need to understand where these requests are happening now]
   

## Stakeholders
* Melisa Rebstock (VEO)
* Joe Valentine (with Angela Gant-Curtis) - Technical contact for VIC
* Molly Burlage - VIC Lead
* John Lundy - division cheif VEO


## Potential Solutions
1. Surface official VIC within the app
   1. Could work to make request process smoother, including submitting a photo
   2. This would involve working with a VA group that may not have APIs to support what we need.  We may need to help build them ourselves.
      - Confirmed that APIs do not currently exist
   4. Could try adding a version of it to the OS Mobile Wallet
2. Create a separate ID card within the app that serves the same purpose but doesn’t adhere to the VIC regulations
   1. Need to ensure the ID we create would be accepted by external groups
   2. Could add it to the OS Mobile Wallet
   3. Discussion
      1. We wouldn’t do the photo which would be against the law
      2. No need for an application
      3. Risks
         1. Stakeholders - VEO
         2. Very different than web
         3. How do we guarantee that outside orgs will take the ID? - not sure, should talk to them






## Open Questions
**Questions for existing VIC:**
* Is there an API to find which Veterans have a VIC?
  * Answer from VIC team: There isn't, but, "this should be possible" 
* Applying for VIC:  
  * 2 ways to apply, AccessVA or VA.gov but VA.gov isn't working right now
  * apply online, login.gov doesn't work yet but 
  * upload gov ID and photo and maybe DD214
  * Mobile version might not need the photo
    * Have asked Congress to remove requirement for photo
  * once 'approved' they are sent an image
    * Confirming Gov ID, approve photo
  * There is an ID #
* Can we access the VIC PDF and surface it (or ideally the data used in the PDF) in the app?
  * * Answer from VIC team: There isn't, but, "this should be possible". The VIC app runs off a mongoDB, which we should be able to run queries against.  
* Who would we work with in VA for this?
* What does their audience look like now?  How many Veterans have a VIC?
  * Answer: About 500,000 veterans have a VIC card right now.
* Can Veterans print the card on their own, at home? Or does it have to be printed a specific way?
  * Answer: the card can be printed at home, does not have to be printed in any specific way  
* In what specific real-life situations does the VIC card get used today?
    * What are the discounts and other private-sector benefits Veterans would have access to with their VIC?
    * How frequently do Veterans need to use some form of Veteran ID?
    * Do we have contacts at Home Depot, Lowes, etc. to ensure they would accept any ID card we make that is separate from the VIC?
      * They had to do Comms to get stores to accept it.  Many do their own credentialing. 
      * Not TSA standards, VHIC can be
      * VHIC used to be called VIC so there is naming confusion - VA Employees still call VHIC VIC sometimes
      * Just stopped doing physical cards last October

**Questions for creating our own digital VIC:**
* Is there a way to make a digital VIC ‘official’ with the VA, and therefore would be accepted by 3rd parties?
* What sort of outside communications and coordination would be required to ensure that digital VIC is an accepted form of Veteran identification?
* Are there other VA stakeholders we should work with if we create our own?
* Are there any other VA cards we could add to the OS Mobile Wallet?  VHA card, etc.?
    * Vaccine ‘card’?

## Important Links
- Google Wallet: [Google Wallet](https://wallet.google/#identity)
- iOS Wallet: [IDs in Wallet](https://learn.wallet.apple/id)
- [How To Apply For A Veteran ID Card](https://www.va.gov/records/get-veteran-id-cards/vic/)
- [H.R.91 - 114th Congress (2015-2016): Veterans Identification Card Act 2015](https://www.congress.gov/bill/114th-congress/house-bill/91) 
- [Military Info, Profile Research Findings - Office of the CTO - Digital Experience (OCTO-DE), Profile, Authenticated Experience - 03/20203](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#military-info-profile-research-findings)
- [List of current approved forms of Veteran ID card](https://www.va.gov/records/get-veteran-id-cards/)


### Notes from VIC Meeting
- Melissa to send Research they did and metrics from last 3 years
  - existing process and pain points
  - How many applications are rejected
  - Confusion with VIC and VHIC

- Don't call it VIC 
- Average 350 cards a day, Veterans Day has as many applications as month
- They had done their own research on who gives Veteran Discounts and just called them to tell them to take the ID


## MVP May 2023
OCTO objective:
Mobile objective(s):
Authenticated, personalized service
Increase active user base

### Goals
	- Easily discoverable after login
	- User sees info on how it might be useful
	- Personalized with user identification info
	- Can add to Apple Wallet/Android equivalent

* As a veteran,
* With internet connectivity,
* As an authenticated user,
* Using the VA Flagship mobile app,
* Can discover and create/view a card

### Acceptance criteria
* Signs into app
* Verified of Veteran status
* Views a Veteran Status Card
* If a user has an account but cannot be verified as a Veteran, they do not see a card
* A card has the following data:
	* Veteran name
   	* Date of birth
   	* VA logo
   	* Branch of military
	* Dates of service (If there were multiple service periods, choose status quo of current experience in mobile/web/va-profile)
* Upon review of card information, sees info on how to revise data if needed
* VA can add info to this card in the future if a veteran becomes eligible to access x benefit (e.g. health service)

### Future enhancement considerations
* Card has number of years served
* Card has photo of user's choice, optional 
* Can add it to Apple/Google wallet
* Can export to print a card

### Questions:
1. How would the native mobile app contribute to a veteran’s success?
	- Veterans can create and use their VSC in the app wherever they are
2. How might native mobile app add challenges to a veteran’s experience?
	- Connectivity issues could impair card creation
	- Displaying incorrect data on the card is problematic
3. What are important timelines and milestones that mobile should be aware of?
4. Who are the stakeholders involved?
	- OCTO
	- ???
5. What kind of API magic can we harness to verify Veteran Status? I’ve heard MPI thrown around.
        - Answer: Veteran verification API has this data
7. Are there multiple ways to capture Veteran status (e.g. if a Veteran is enrolled in Health care, can we piggyback on that presumed Veteran status?)
8. Should we enable card deletion? 

### Incoming Amazon Box (What we want)
* Understanding of scope
	- What does success look like
* Past Research
* Link to existing tools with test users, or video demo
* Other teams within VA that have implemented this feature or something adjacent
	- How Mobile will be different from other integrations, i.e. accessibility
	- Original Designs of other implementations with comments, context
	- Component maps
	- Roadmaps for upcoming iterations of the feature
	- Are they working on changes now?
	- Metrics and KPIs other teams use
	- Customer feedback data
	- What % of user base use this feature (do they use it on their devices now?)
	- Contact Center coverage - how does it work for current implementations, what feedback are they hearing about current implementations?
* Available Data and how to access it
	- API documentation
	- Data lineage/biography (how is the data gathered? Where does it come from? (Conditional logic)
	- How does test data work?
* Existing Challenges
	- What bumps did other teams encounter?
	- Where can Mobile make a difference?
* Stakeholders
	- Comprehensive list of all stakeholders
	- Core - decision-makers, they have veto power, they need to be onboard with decisions
	- Resources - they have helpful information
	- How to communicate with stakeholders
	- Slack/Teams/email/meetings
* Marketing
	- Who would be coordinate with for communications about the feature

### Outgoing Amazon Box (What we should provide for others)
* Our Roadmap
	- Other priorities we have that could affect delivery of this thing
* Primer for working with Flagship Mobile
	- Expectations for working on mobile projects, what makes Mobile different
	- Our Release Cadence and how that affects timelines
	- Versioning, backwards compatibility
* What do we need changed in order for this feature to be successful on Mobile?
	- Data/API updates
* What Resources we have already found
	- Questions we have from looking at existing resources
* Our QA system/process
	- Video demo
* Proactive access to demo mode
