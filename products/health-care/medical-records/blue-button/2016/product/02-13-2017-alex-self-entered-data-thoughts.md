### Context:
There have been a lot of questions about "self entered data" on MHV and how it relates to vets.gov recently and so I thought it would be worthwhile to write down what's in my head, as I am not likely to be the one actively leading the day to day on this moving forward. I am not 100% certain the below is accurate, but at a minimum it will give context on things to clarify and ask questions about!

### Current State:
- Currently MHV allows Veterans to self-enter data (also sometimes called Self Entered Information (SEI)). This includes fields such as supplements being taken, allergies, immunizations, family health history, activity and food journal, goals, and demographic inforamtion. At this point, Gina and Elizabeth likely know more about this than I do. 
- This data does _not_ connect with the VA medical records system, however, so no providers/doctors/nurses are ever able to see this data electronically. 
- There is no API for adding more SEI. This means we have no way of adding SEI from vets.gov at this time. 

### MHV Plan
- MHV is moving to a new system called PGD (Patient Generated Data) that is run by a different team in Connected Care at VA. It seems like the team creating the mobile apps is also in charge of PGD, but I'm not entirely sure. 
- Data entered into PGD _will_ be able to be viewed by doctors, which is very exciting!
- I believe (but am not 100% sure) PGD is going to be a separate portal, so users would click a link on MHV and be taken off MHV to go to the PGD site to enter their information. 
- According to their roadmap, MHV is scheduled to start using PGD in June. This should mean no new data will be able to be entered into MHV directly starting then.  The old, previously entered data will not be migrated to PGD, so users will have to copy over their data if they want it in PGD.

### What I think this means
- Rather than have MHV create APIs to allow SEI be entered on vets.gov and stored in the way it currently is on MHV (which doctors can't see), we should instead connect to PGD. 


### Open questions
- What is the UX expected to be for PGD on MHV?  If they are linking to another site, there is no change I guess, but I imagine they will stop allowing Veterans to enter information on MHV, which might impact other parts of the site, such as BB and maybe the wallet card (and I'm sure other things). 
- Should vets.gov connect directly to a PGD API or should MHV connect to PGD and vets.gov connect to PGD through MHV's APIs?  My guess is the former (directly to PGD, as that's simpler), but I'm not sure if there is a benefit I'm not seeing to doing it the other way. 
- Does an API exist for PGD?  Michael (michael@apothesource.com), Kevin (Kevin.Troutner@va.gov), and Lynne (Lynne.Case@va.gov) should be the right people to ask. I am happy to make the connection anytime we're ready to chat more about this (we should likely talk to Carnetta first I think though). 
	- If a PGD API does exist, is there documentation on how to connect to it?  Michael seemed like the most knowledgeable about this, but Kevin and Lynne need to be included on emails as they are VA employees. 
