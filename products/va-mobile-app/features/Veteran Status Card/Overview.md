# Veteran Status Card 
Veterans would benefit from an easy-to-access official Veteran ID card to use for receiving discounts and other private-sector benefits. There is currently no simple way to attain an ID like this. The current processes are cumbersome and long and not well known by Veterans. A widely accepted Veteran ID within the mobile app could prove a very useful feature for Veterans and greatly increase usage of the app.

As a Veteran with internet connectivity and as an authenticated uesr, I can discover & view and use in my VA Flagship App a Veteran Status card. 
## Problem Statement
 
When a Veteran calls a call center, the Veteran needs to go through a call tree, identify themselves, and start every conversation from scratch. Is there a way that the mobile app can reduce the burden on Veterans and improve their customer experience by passing some of this information to the call center?
 
## Important Links
- [PO Product Brief ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/VIC/MobileVIC_ProductBrief.md) - this has original info from when ask was replacing VIC; changed with the MVP May 2023 addition to Veteran Status 
- See[ Sprint 0 doc](https://docs.google.com/document/d/1Rg8dUiw7MtGlpnS5ZwdJUgmBF8Moi2JFC-aEaH-NvrQ/edit)
- [Reddit Thread ](https://www.reddit.com/r/Veterans/comments/14gbu7g/would_people_actually_believe_this_if_i_presented/)- Would ppl actual believe this is I presented it to them for the sake of a discount 
- [Law H.R.91 - Veterans Identification Card Act 2015](https://www.congress.gov/bill/114th-congress/house-bill/91)
- [List of current approved forms of Veteran ID](https://www.va.gov/records/get-veteran-id-cards/)
- [Product Canvas / Sprint Timeline](https://docs.google.com/presentation/d/1TlzLu1eYixyKLVZ5FeMbB3iJ_HSw0tsYr5gJWGzdstQ/edit)

### Desired Outcomes ###
 
- Veteran can access a digital card in the Flagship mobile app to display to applicable 3rd parties 

### Out of Scope
- Items listed out of scope on PO Product Brief but mobile wanted to consider based on discovery and other available data garnered during a couple day discovery period

|Prioirty # |Idea  | Rationale | Owner |Status|
|-------|-------|-------|-------|-------|
|1|Photo of the user's choice| Reddit feedback (stolen valor) and research on accepting ids for military discount indicate photo is needed. If no photo it may not be accepted or Veteran will need to pull out another photo id to verify |Binny |Reviewed and coded |
|2|Number of years served| Original ask, but not something we get via APIs so FE would need to calculate. During discussions with PO identified this may not be critical as we could not find data indicating this is needed for a discount|Binny | Not reviewed |
|3|Export / Print card| Enables ability to access this offline or share the card with a spouse to get the discount when they are not together |Binny / Binny | UX reviewed|
|4|Unauthenticated experience / access| Ability to access this featurew without having to go through the login hurdles (if they can get through) and get to the card |Brea | Not Reviewed|
|5| Digital wallet integration| Ability to store this information with the other digital cards the Veteran has on their device. Also acts like an unauthenticted solution |Binny | Not Reviewed|
|6|New component| Identified that mobile may need a new component to best facilitate this project which could also includ typography. End of project identified the typography needed but that will be picked up in Personalization project and not in this one |Brea|Not Reviewed|
|7|VIC blurb regarding how to use it | Provide the Veteran with an understanding on what this is and how to us it. PO deemed not necessary as of now. Has not come up in the 2 reviews as of 8/2 |Adam | Reviewed|
|8|Integration with VIC | Thought is just to implement an existing digital VIC card vs creating something new. Project was original a digital VIC but was later deemed to facilitate the benefits of VIC but not be VIC. Understanding what integration was not feasible at this time. Ceating a ‘competitor’ to the VIC could anger certain stakeholders. Need to ensure creating an ID card that is not technically the VIC does not interfere with the VIC law. Surfacing current VIC may not be technically possible and the owning group may not have interest in working with us |PO deemed not feasible | Closed|


### In Scope
 - Displaying information that the Flagship VA app already has access too 
 - Veteran name
 - Date of birth
 - VA Logo
 - Brand of Military
 - Dates of service ((If there were multiple service periods, choose status quo of current experience in mobile/web/va-profile))
 - Upon review of card information, sees info on how to revise data if needed
- VA can add info to this card in the future if a veteran becomes eligible to access x benefit (e.g. health service)
- No enrollment; has immmediate success 

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
Standup 



