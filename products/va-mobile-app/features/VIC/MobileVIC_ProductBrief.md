## Veteran Identification Card (VIC)


### Sprint 0

#### Problem Statement
Veterans would benefit from an easy-to-access official Veteran ID card to use for receiving discounts and other private-sector benefits.  There is currently no simple way to attain an ID like this.  The current processes are cumbersome and long and not well known by Veterans.  A widely accepted Veteran ID within the mobile app could prove a very useful feature for Veterans and greatly increase usage of the app.

#### Current Experience

From VA.gov: 
“A Veteran ID Card (VIC) is a digital photo ID you can use to get discounts for Veterans at many stores, businesses, and restaurants. When you have this card, you won’t need to carry around your military discharge papers or share sensitive personal information to get discounts. And you don’t need to request another type of photo ID card to prove you’re a Veteran or to get retail or business discounts.”



* Must have an honorable discharge to get the ID


Notes:



* VIC
    * Veteran identification card (Veterans love it)
        * Identify themselves as a veteran at businesses
        * Intended to be printed
        * Must include a picture
            * Uploading/approving/printing a photo is the key part of this
            * **This is something to investigate if we can do a photo-less version**
        * Super expensive, single point of failure
        * Can be digital now
            * Emailed to you
        * Possible approaches
            * Ignore the photo requirement and automate it in the app, like letters
            * Perfect for a mobile app
            * Consider as part of apple wallet

Don’t want to replace the VIC, but want something that can serve the same purpose in the app.



1. Process for applying is long and opaque.  Long process and then you get a PDF to be printed.  Previously sent to Office Depot to be printed but that was too expensive
    1. Email from VA has 2 PDFs, one of the front of the card and one of the back.
2. The VIC law is prescriptive and doesn’t include funding so Veterans need to pay to print the card which is not worth it.
3. The photo is the hardest part, needs to be approved and holds up the process.  The photo is part of the law.  We may be able to bypass that if we do something that isn’t technically the VIC but serves the same purpose but could be automated.
    2. There is an ID # on the card

**Pain Points**



* Acquiring a VIC is time consuming
* Veterans need to pay to print the card

<h4>Assumptions and Level of Confidence</h4>




1. 

<h4>Risks</h4>




1. Creating a ‘competitor’ to the VIC could anger certain stakeholders (?) 
    1. Need to ensure creating an ID card that is not technically the VIC does not interfere with the VIC law
2. Surfacing current VIC may not be technically possible and the owning group may not have interest in working with us

<h4>Business Goals</h4>




* 

<h4>Roadmap</h4>


**V1**



* 

**V2 and beyond**



* 

<h4>Technical Approach</h4>




* Unique identifier?
* Discharge status API
* Is there a way to access which Veterans have VICs and just surfacing it in the app?
* ID needs to be available offline
* Must have non-dishonarable discharge

<h4>Measuring success </h4>




* Track number/% of Users that access the ID in the app
* OS Wallet metrics for how often IDs in the Wallets are accessed?  
    * Location of where/when it is accessed in wallet?

	

<h4>Stakeholders</h4>




* Melisa rebstock (VEO)
* Joe Valentine (with Angela Gant-Curtis)
* Chris to do email introduction for Kelly to these stakeholders

<h4>Potential Solutions</h4>




1. Surface official VIC within the app
    1. Could work to make request process smoother, including submitting a photo
    2. This would involve working with a VA group that may not have APIs to support what we need.  We may need to help build them ourselves.
    3. Could try adding a version of it to the OS Mobile Wallet
2. Create a separate ID card within the app that serves the same purpose but doesn’t adhere to the VIC regulations
    4. Need to ensure the ID we create would be accepted by external groups
    5. Could add it to the OS Mobile Wallet
    6. Discussion
        1. We wouldn’t do the photo which would be against the law
        2. No need for an application
        3. Risks
            1. Stakeholders - VEO
            2. Very different than web
            3. How do we guarantee that outside orgs will take the ID? - not sure, should talk to them

<h4>Open Questions</h4>




* Questions for existing VIC
    * Is there an API to find which Veterans have a VIC?  
    * Can we access the VIC PDF and surface it in the app?
    * Who would we work with in VA for this?
* Questions for creating our own:
    * Do we have contacts at Home Depot, Lowes, etc. to ensure they would accept any ID card we make that is separate from the VIC?
    * Is there a way to make it ‘official’ with the VA, and therefore would be accepted by 3rd parties?
    * Are there other VA stakeholders we should work with if we create our own?
* Are there any other VA cards we could add to the OS Mobile Wallet?  VHA card, etc.?
    * Vaccine ‘card’?

<h4>Important Links</h4>


Google Wallet: [Google Wallet](https://wallet.google/#identity)

iOS Wallet: [IDs in Wallet](https://learn.wallet.apple/id)

[How To Apply For A Veteran ID Card](https://www.va.gov/records/get-veteran-id-cards/vic/)

[H.R.91 - 114th Congress (2015-2016): Veterans Identification Card Act 2015](https://www.congress.gov/bill/114th-congress/house-bill/91) 
