# Final Project Name - Proof of Veteran Status 

Veterans would benefit from an easy-to-access official Veteran ID card to use for receiving discounts and other private-sector benefits. There is currently no simple way to attain an ID like this. The current processes are cumbersome and long and not well known by Veterans. A widely accepted Veteran ID within the mobile app could prove a very useful feature for Veterans and greatly increase usage of the app.

During work, it was identified that this does not necessarily need to be a card thus removed card from the original project name. 

As a Veteran with internet connectivity and as an authenticated uesr, I can discover & view and use in my VA Flagship App a Veteran Status card. 

Epics:
   - MVP Epic [4270](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/4270)
   - [Post MVP Considerations](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6547) 

## Problem Statement
 
When a Veteran calls a call center, the Veteran needs to go through a call tree, identify themselves, and start every conversation from scratch. Is there a way that the mobile app can reduce the burden on Veterans and improve their customer experience by passing some of this information to the call center?

## Final MVP - confirmed and updated 8/16/2023 ## 

- MVP was modified after Sprint demo on 8/16 which include Mobile Team, Mobile Team PO, and VIC
   - Identified that photo needs to be removed
      - Rationale - concerns with photo being abused with unncessary pictures being uploaded
   -  Per VA legal, only Title 38 Veterans are able to see this - thus Mobile must exclude Dishonorably Discharged Veterans (DD Veterans)
   - Other demo notes: 
         - Raises a larger questions on how mobile app should handle app wide or at log in - later resolved ; only applies to this feature
         - Discover work will be added for most-mvp work 
          - There are discussions with the government on removing the photo as a requirement from VIC 
          - Need to enhance UX on when the information is incorrect 
             - We send them to the profile page but identified by UX not ideal
             - UX prefers to have some kind of overlay and content that appears when Veteran taps 
         - Do some discovery on photo handling to see how to see options in handling concerns
   - [Demo video](https://adhocteam-us.zoom.us/rec/component-page?action=viewdetailpage&sharelevel=meeting&useWhichPasswd=meeting&clusterId=us06&componentName=need-password&meetingId=U-QDJrzN-dYB68PClnOLNr2IEY2axY9JBFuOCocUi8C0-fK7i0_7_jGN29HhUKJK.RkXz6x-84bp3kPT_&originRequestUrl=https%3A%2F%2Fadhocteam-us.zoom.us%2Frec%2Fshare%2FJkdhEVE_fbSzsgcKjSNJl3Ro8c1yUvPhmpXGk-h5eb5sMX66aOa70te-66b_KKSn.tKdYUluvXH5p6ve-%3FstartTime%3D1692209220000) is accessible through Mobile team as its password protected thus will not be included here
   - Confirmed MVP via Slack 8/18 
      - no photo, no link
      - <img width="179" alt="MVP 1" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/a1256d00-e08d-4fe3-987d-e7ad47d1f809">
      - <img width="178" alt="mvp 2" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/ae3382dc-2021-421b-88c7-42a791cadf3d">


   


 - **Post 8/14 meeting changes** 
   - Modifying Veteran status name / title to better set expectations - going to pull in content from Misty - to verify when she gets back 
   - Update the chevron to align with Veteran Crisis Line 
   - Add some kind of indicator that the photo can be editted 
   - Verify spacing updates / changes - Brea has added this info to figma 
 - **MVP**
    - [This is the MVP](https://www.figma.com/file/Wjq9DkQ3ulXlHhbMrpNHME/%F0%9F%94%8D-Profile-2.0---Working---VAMobile?type=design&node-id=1806-90255&mode=design&t=XtCXFn3wnc9l9407-4) we agreed to move forward with
    - Hypothesising this information to be the most critical based on discovery and research 
       1) Image - header;  found most places need to match an idea to a name; Reddit other resources talked about concerns of stolen valor if there is no picture 
           - Limitations - only tied to their devices cache - thus only shows on that device and if uninstalled it will be removed 
       2) Name -  header ; name of the Veteran 
       3) Branch - header;  shows branch of military they are in 
       4) Disablity rating / service connected - showing this first given some merchants 
       5) Periods of Service - provides proof of their service dates; which we found some evidence that it could impact discount 
       6) Date of Birth - deprioritized to last as limited research / logic in this being impactful to POS discount 
 -**Measuring success**
    - MVP Metrics
       - number of times Veteran Status button on the name tag on the home page or profile is tapped 
       - Average time a Veteran is on the Veteran Status full panel 
       - Looking at App Store reviews and Reddit with relevant feedback
       - Limitations
           - Only directional data on usage; not if the product was successful in its use cases 
           - No explicit way for us to get feedback on if this worked at point of sales
     - Metric consideration: 
       - Ask the Veteran every so often if the feature worked in a feedback module similiar to [this user flow](https://www.figma.com/file/Wjq9DkQ3ulXlHhbMrpNHME/%F0%9F%94%8D-Profile-2.0---Working---VAMobile?type=design&node-id=1817-46594&mode=design&t=haNBYaOFXXI4Yuc5-4) 
 - **Post MVP Considerations**
    - Displaying years of service - 2 points 
    - Modify the birthday to be less formal - Currently January 01, 2022 and would like January 1, 2022 (matches period of service; dont feel people use 0 if its a single digit date) - estimated small
    - Ability to share / print the card  - currently can screenshot - discovery needed 
    - Integration with mobile wallets - discovery needed 
    - Unauthenticated experience so Veterans can access the info without logging in - discovery needed 
    - Typography / format changes - this are being looked out current with UX team - discovery needed 
    - Feedback module - see [draft here](https://www.figma.com/file/Wjq9DkQ3ulXlHhbMrpNHME/%F0%9F%94%8D-Profile-2.0---Working---VAMobile?type=design&node-id=1817-46594&mode=design&t=haNBYaOFXXI4Yuc5-4)
    - Modifying the black stripe which is tied to the Veteran Crisis Hotline - discovery needed 
    - Are we losing anything given we are not using a card format -  information / discovery needed 
    - Is there additional data needed or do we need to modify the order of the data presented -  information / discovery needed
    - Perform UAT testing to get direct user feedback / possibly to add it to something existing 
- **Next Steps**
   - POs to discuss if MVP metrics are sufficient or if inclusion of a feedback module should be included 
   - POs to verify timing to implement and move this into production
         - Estimating it would be a sprint with pushing current MVP plans (a couple points for engineering refinement; 5-8 for QA testing)
         - If we pull in the implementation plan as is for [Sprint 78](https://github.com/orgs/department-of-veterans-affairs/projects/823/views/3) , we may need to pull something out to make room as implementation has not yet been planned. Something to discuss during Sprint Planning
         - If not next sprint it we can plan for another sprint in Q3
 

 
## Important Links
- [PO Product Brief ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/VIC/MobileVIC_ProductBrief.md) - this has original info from when ask was replacing VIC; changed with the MVP May 2023 addition to Veteran Status 
- See Sprint 0 Doc [VIC Sprint 0.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/12499912/VIC.Sprint.0.pdf)
- [Reddit Thread ](https://www.reddit.com/r/Veterans/comments/14gbu7g/would_people_actually_believe_this_if_i_presented/)- Would ppl actual believe this is I presented it to them for the sake of a discount 
- [Law H.R.91 - Veterans Identification Card Act 2015](https://www.congress.gov/bill/114th-congress/house-bill/91)
- [List of current approved forms of Veteran ID](https://www.va.gov/records/get-veteran-id-cards/)
- [Veteran Status Mobile Plan 2023.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/12499919/Veteran.Status.Plan.2023.pdf)
- [Discovery Work / Review](https://www.figma.com/file/MxqpGSmpZrG5HlxB9wNoRP/%234270---Veteran-Status-Card?type=whiteboard&node-id=0-1&t=iOacE13OfKZ23BOR-0)
- [UX Figma File with Mockups](https://www.figma.com/file/Wjq9DkQ3ulXlHhbMrpNHME/%F0%9F%94%8D-Profile-2.0---Working---VAMobile?type=design&node-id=1707-38955&mode=design&t=mFMFasHqvVWdXp9F-0)

### Desired Outcomes ###
 
- Veteran can access a digital card in the Flagship mobile app to display to applicable 3rd parties 

### Out of Scope
- Items listed out of scope on PO Product Brief but mobile wanted to consider based on discovery and other available data garnered during a couple day discovery period

|Prioirty # |Idea  | Rationale | Owner |Status|
|-------|-------|-------|-------|-------|
|1|Photo of the user's choice| Reddit feedback (stolen valor) and research on accepting ids for military discount indicate photo is needed. If no photo it may not be accepted or Veteran will need to pull out another photo id to verify. Identified during demo 8/16 that photo to be removed; VIC is once again asking for photo to be removed from VIC regulations; additionally some conncers (minor / accepted) about lewd photos being used |Binny |Reviewed and coded |
|2|Number of years served| Original ask, but not something we get via APIs so FE would need to calculate. During discussions with PO identified this may not be critical as we could not find data indicating this is needed for a discount|Binny | Not reviewed |
|3|Export / Print card| Enables ability to access this offline or share the card with a spouse to get the discount when they are not together |Binny / Binny | UX reviewed|
|4|Unauthenticated experience / access| Ability to access this featurew without having to go through the login hurdles (if they can get through) and get to the card |Brea | Not Reviewed|
|5| Digital wallet integration| Ability to store this information with the other digital cards the Veteran has on their device. Also acts like an unauthenticted solution |Binny | Not Reviewed|
|6|New component| Identified that mobile may need a new component to best facilitate this project which could also includ typography. End of project identified the typography needed but that will be picked up in Personalization project and not in this one |Brea|Not Reviewed|
|7|VIC blurb regarding how to use it | Provide the Veteran with an understanding on what this is and how to us it. PO deemed not necessary as of now. Has not come up in the 2 reviews as of 8/2 |Adam | Reviewed|
|8|Integration with VIC | Thought is just to implement an existing digital VIC card vs creating something new. Project was original a digital VIC but was later deemed to facilitate the benefits of VIC but not be VIC. Understanding what integration was not feasible at this time. Ceating a ‘competitor’ to the VIC could anger certain stakeholders. Need to ensure creating an ID card that is not technically the VIC does not interfere with the VIC law. Surfacing current VIC may not be technically possible and the owning group may not have interest in working with us |PO deemed not feasible | Closed|
|9 |Upon review of card information, sees info on how to revise data if needed | PO identified it can be a post mvp consideration |


### In Scope
 - Displaying information that the Flagship VA app already has access too 
 - Veteran name
 - Date of birth
 - VA Logo
 - Brand of Military
 - Dates of service ((If there were multiple service periods, choose status quo of current experience in mobile/web/va-profile))
 - No enrollment; has immmediate success
 - Exclusion of Dishonorably Discharged Veterans (added 8/18 per VA Legal)

### Risks and Assumptions 
 - Ceating a ‘competitor’ to the VIC could anger certain stakeholders (?)
     - Need to ensure creating an ID card that is not technically the VIC does not interfere with the VIC law
- Not all facilities have the same requirements to give discounts
     - Some need disablity rating, some need service connected Y/N, some require id.me integration so no form of id or letter will work, sometimes letters work
     - Do not have data on the marketplace on how many allow veteran discounts to what form of identification is needed
     - Not every shop given Veterans discount - dont know the number 
- Surfacing current VIC may not be technically possible and the owning group may not have interest in working with us
- If we aren't able to let the 3rd parties who currently accept VIC as a form of proof of Veteran status know that the digital VIC is an official form of Veteran ID, they may not accept it (and Veterans will be angry/disappointed/inconveniences in that moment, but it might also erode trust in VA & the app).
- We don't currently coordinate with VA comms team when we launch features.
- There are several other forms of ID that are currently accepted and used to get discounts(Veteran Health Identification Card (VHIC), Department of Defense (DoD) Identification Card—either a Common Access Card (CAC) or Uniformed Services ID Card, or a state-issued driver’s license or ID with a Veterans designation), and Veterans may find it easier to use those instead.
- A significant number of Veterans are in situations where they don't already have a way to prove their Veteran status (ex:one of several other forms of accepted ID, a store-controlled Veteran registration system).
- A Veteran Status card displayed on a phone/in the VA mobile app will be accepted by 3rd parties as official proof of Veteran status.
- There will be marketing support for the new Veteran status card (to drive new app downloads).
- 3rd parties will accept a Veteran ID card without a photo
- Not replacing VIC, but providing the same value
- Stolen valor argument related to Veteran ID card without a picture
- Creating another unique identification card the Veterans will need to use / understand
- Going from design to prototype in 2 weeks limits understanding and knowledge of the problem 


### Team

- PO - Ryan Thurwell 
- Design - Brea Blackwelder
- Content - Misty Million-Grant
- Data - Greta Opzt
- FE - Jon Bindbeutel
- PM - Adam Kasmier
- External - no external team or dependencies 

### Open Questions
 - Do we need to add a [blurb](https://www.google.com/search?q=VIC+card&rlz=1C1RXQR_enUS1029US1029&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjIrc_-oLyAAxVxHTQIHcsFCzwQ_AUoAXoECAMQAw&biw=1920&bih=923&dpr=1#imgrc=boL5w2x70sko8M) like VIC - "This card servces as proof of service....does not reflect entitlement...by the Department of Veteran Affairs"
 


 
## Notes
### [Post MVP Epic Details](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6547) 

 ### Demo notes  
- Handling of dishonorably discharged Veterans
   - Dishonorably Discharged Veterans are not eligible for VIC
   - Dishonorably Discharged Veteran may get a character discharge determination to get VA benefits
   - Mobile App currently doesn't filter or account for differences in service summary and title 38 codes
- Allowing images also allows for inappropriate images to be uploaded
   - VIC teams catches these and prevents them
   - VA is working on getting in front of legislation to discuss removing the image requirement from VIC  (date of birth, SSN, and other forms of identification don't require it so why this) - they are hoping to have this conversation this year
   - We are removing this from MVP at this time
- If Periods of Service info is incorrect it can't be changed immediately
   - Source is a DoD system (DEERS)
   - Difficult to change and won't happen immediately can take months
   - VA is working on how best to handle updates here
   - This was not introduced with Veteran status just a current fact with how systems are working today
- Number of people eligible for VIC is greater than the number of people eligible for VA benefits
   - Reserves and Guardsmen are eligible for VIC but not for VA benefits
- Marketing - Communication VIC
   - VIC launched in 2017 (law in 2015) and did not have a marketing communication out to merchants
   - Veterans had a lot of negative feedback / interactions cause of this
   - When VA spoke with merchants (finding info from merchant websites vs having a POC) they got so use to it being shown they just accepted it
   - They have seen when they communicate / advertise VIC it has led to large upticks in participations but had difficulty in existing services and processes handling volume
   - Example went from averaging 100 emails a day to 500-800 in a 5 hour period after communications
- Other areas seem interested
   - Patronage - Been convo for a few years were Service Connected Veterans can have access to privileges @ military bases commissary and exchanges privileges
   - Veteran Health Identification Card (VHIC) served as proof of this ; but found Veterans  who served under 24 months or not service connected don't have VHIC so looking for another solution
   - Expected to need DOD EDIPI (some kind of person ID DoD uses)  - could even add a barcode on a card but would need to tie into DoD equipment
- Changes agreed upon:
   - Remove images 
   - Future consideration / non mvp
      - UX for if information is incorrect
      - Handling of dishonorable discharge 
      - POS UX for Veteran Feedback 
      - Adding a VIC disclaimer - likely not necessary for mobile as compared to VIC - not a pre-auth for any VA benefits 
      - Collaboration on being used for Patronage - Service Connected Vets being hable to get commissary benefits from military benefits - id that works with DoD system   


