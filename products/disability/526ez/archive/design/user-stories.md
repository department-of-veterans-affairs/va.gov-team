# User Stories for Claims for Increase Product

`!` = out of scope for MVP

---

## As a Veteran I need to...

#### ... have information to decide what I action I want to take regarding my disability compensation (file increase/add secondary/file new claim/file appeal/etc).
- Acceptance criteria:
  - [ ] all prior rated claims (even 0% or denied) are displayed
  - [ ] all unrated claims (VA is still processing, don't have a decision yet) are displayed
  - [ ] avenues are available to take whatever the desired action is
  - [ ] appropriate message w/what to do if your info doesn't look right
  - [ ] appropriate error state w/resolution information if services are down

#### ... indicate whether I'm homeless or at risk of being homeless, in financial crisis, or blind/sight-impaired so that I can be guided down the correct urgent path if so.
- Acceptance criteria:
  - [ ] if yes, information is provided on pdf
  - [ ] if no, continue on to next part of process
  - [ ] appropriate error message w/resolution information if selection didn't go through
  
#### ... indicate whether I'm having thoughts of suicide, so that I can be guided down the correct urgent path if so.
  - [ ] if yes, information is referred to Veteran Crisis Line
  - [ ] if no, continue on to next part of process
  - [ ] appropriate error message w/resolution information if selection didn't go through

#### ... indicate whether I have or may have PTSD, so that I can be guided down the correct urgent path if so.
- Acceptance criteria:
  - [ ] if yes, user is directed to appropriate path
  - [ ] if no, continue on to next part of process
  - [ ] appropriate error message w/resolution information if selection didn't go through

#### ...submit an Intent to File date when I start a claim for increase, so I can be back-paid to that date once my claim is processed.
- Acceptance criteria:
  - [ ] ITF date is sent to corporate database upon some user action
  - [ ] ITF date in corporate database has Vets.gov source tag
  - [ ] concept of date being stored 'now' is clear
  - [ ] concept that user has a year to finish their app is clear
  - [ ] concept that user will be back-paid to this date is clear
  - [ ] appropriate error messaging and resolution information if the service is down
  - [ ] appropriate error messaging and resolution information if my update didn't go through successfully

#### ...be guided to the right claim type to submit, so I can get the best possible result from VA.
- Acceptance criteria:
  - [ ] difference between claim types is clear
  - [ ] user is guided to appropriate claim type based on their situation (and/or previous selections)
  - [ ] appropriate error messaging and resolution information if the service determining guidance is down
  - [ ] if functionality isn't yet available in Vets.gov, transition to eBenefits or other system is smooth
  - [ ] story is aligned through all avenues of discovery (static content, other products, other sites if possible)

#### ... need to view and be able to edit the basic information that's pre-populated into my claim for increase for me, so I can verify it's correct or update it if necessary before I submit my application.
- Acceptance criteria:
  - [ ] as much data as possible is pre-filled from VA databases (Corp, eMIS, BIRLS?)
  - [ ] pre-populated data is clearly indicated
  - [ ] data that's editable is clearly indicated
  - [ ] appropriate error messaging and resolution information if the display service is down

#### ... edit the basic information that's pre-populated into my claim for increase for me, so I can correct it if it's wrong.
- Acceptance criteria:
  - [ ] avenues are available to update all editable pieces of information
  - [ ] if user updates information, it writes back to the database it came from (Corp, eMIS, BIRLS?)
  - [ ] if user updates military history or other data that requires VA validation, an asynchronous save process occurs
  - [ ] if user updates data that's saved asynchronously, and they've opted into notifications, they get notified when it has/hasn't been saved back to the DB
  - [ ] even if not opted into notifications, they see an update about this when they log into their account
  - [ ] appropriate error state w/resolution information if services are down
  - [ ] appropriate error message w/resolution information if there was an error submitting my updates
  - [ ] appropriate error message w/resolution information if the information wasn't accepted by the DB

#### ... be able to start a claim for increase for a previously rated claim, so I can attempt to get a higher evaluation for the selected condition.
- Acceptance criteria:
  - [ ] business logic displays filters all user's claims so only claims eligible for increase are displayed
  - [ ] avenue available to take 'file an increase' action which keeps user within Vets.gov tool
  - [ ] appropriate error messaging and resolution information if the selection is unsuccessful
  - [ ] appropriate error state w/resolution information if services are down

#### ... understand what documents I should attach to my claim for increase as evidence to get the best possible result from VA.
- Acceptance criteria:
  - [ ] user is guided to upload appropriate/helpful evidence based on their situation (and/or previous selections)
  - [ ] expectations of next steps w/the various options are clear
  - [ ] appropriate error messaging and resolution information if the service determining guidance is down

#### ... have the option to upload documents that support my claim for increase, so VA can see them when they assess my claim.
- Acceptance criteria:
  - [ ] when claim is submitted, any attached documents are sent to VBMS, are connected to the claim, and have the appropriate attributes
  - [ ] user can select a document from their computer to upload (in supported formats) and can upload it
  - [ ] user gets indication that their upload was successful, and confirmation of what doc they uploaded
  - [ ] appropriate error messaging and resolution information if the upload is unsuccessful
  - [ ] appropriate error state w/resolution information if services are down

#### ... specify what the document is that I'm uploading, so VA can find and process it more quickly.
- Acceptance criteria:
  - [ ] access for user to customize the metadata that will be sent to VA for the uploaded document
  - [ ] user is guided to use correct attributes based on the type of doc their uploading
  - [ ] appropriate error messaging and resolution information if my selections aren't processed successfully
  - [ ] appropriate error state w/resolution information if services are down

#### `!`... understand whether I need a medical exam for my claim for increase, so I can take the path that's most direct or easiest for me to finish my claim.
- Acceptance criteria:
  - [ ] user is guided to appropriate next step (no exam needed/request exam/upload DBQ) based on their situation (and/or previous selections)
  - [ ] appropriate error messaging and resolution information if the service determining guidance is down

#### `!`... have the option to request that VA schedule a medical exam for me, so a doctor can determine whether my condition has increased in severity and can submit the appropriate documentation for VA to rate my claim.
- Acceptance criteria
  - [ ] creates 21-4142 PDF form uploaded to the overall 526 submit service when I submit my claim
  - [ ] appropriate error messaging and resolution information if my selection isn't processed successfully
  - [ ] appropriate error state w/resolution information if services are down

#### `!` ... have the option to coordinate what date/time might be good for an exam, so it gets scheduled on a day that works for me.
- Acceptance criteria
  - [ ] Avenue to input information about my schedule and when will and/or won't work for me
  - [ ] Data is submitted to ? or stored ? when claim for increase is submitted
  - [ ] appropriate error messaging and resolution information if my inputs don't go through successfully
  - [ ] appropriate error state w/resolution information if services are down

#### ... have the option to upload one or more DBQs from my personal doctor if I've already had my medical exam done outside of VA, so VA will have the appropriate documentation to rate my claim.
- Acceptance criteria
  - [ ] user is guided to the appropriate document to upload for this section (DBQ, not other types of evidence)
  - [ ] when claim is submitted, any attached DBQs are sent to CAPRI? , are connected to the claim ? , have the appropriate document attributes?
  - [ ] user can select a document from their computer to upload (in supported formats) and can upload it
  - [ ] user gets indication that their upload was successful, and confirmation of what doc they uploaded
  - [ ] appropriate error state w/resolution information if services are down
  - [ ] appropriate error messaging and resolution information if my uploads are successful

#### `!` ... understand if there are other actions I could take that might be beneficial to me before I submit, so I can get the most out of the benefits I've earned.
- Acceptance criteria:
  - [ ] user is guided to other forms/applications based on their situation (and/or previous selections)
  - [ ] avenues for those forms/applications are available, and won't lose the users' claim for increase work if selected
  - [ ] appropriate error messaging and resolution information if the service determining guidance is down

#### ... review my application before I submit to make sure it's correct and complete.
- Acceptance criteria:
  - [ ] displays all pieces of info that will be submitted for VA's review
  - [ ] option to edit the items that are editable
  - [ ] appropriate error state w/resolution information if services are down
  - [ ] appropriate error messaging and resolution information if the display services aren't available

#### `!` ... specifically review and adjust the documents I've attached before I submit, to make sure I'm making the best case for myself before VA has access to review my documents.
- Acceptance criteria:
  - [ ] See uploaded docs and any metadata associated with them (title, tags, etc)
  - [ ] Option to remove, add more, re-title, re-tag  
  - [ ] appropriate error state w/resolution information if display service is down
  - [ ] appropriate error message w/resolution information if my updates are unsuccessful
  - [ ] attachments can be saved and stored for a year, starting from the application start date, than get submitted as part of the whole claim once the application is complete and submitted
  - [ ] attachments CANNOT go to VA before the user’s claim is submitted

#### ... have my claim for increase auto-saved as I enter new information, so that if I close my browser I won't lose what I've done.
- Acceptance criteria:
  - [ ] Data and attached docs are stored and saved for 1 year without being submitted to VA databases
  - [ ] User is notified if their saved application is about to expire
  - [ ] Data and attached docs are deleted after the expiration date
  - [ ] appropriate error message w/resolution information if auto-save service is down

#### ... to be able to find saved claims for increase that haven't yet been submitted, so I can finish them and submit without having to start over.
- Acceptance criteria:
  - [ ] saved claims that I haven't submitted yet are easy for veteran to find in the way they'd naturally look for them
  - [ ] claims app info can be saved and stored for a year, starting from the application start date.
  
#### `!` ...be able to start my claim for increase in one system and finish it in another so I don't have to start over if I find myself in a different system.
- Acceptance criteria:
  - [ ] applications started in Vets.gov are also available in SEP and eBenefits
  - [ ] ITF date remains intact if user completes their application in another system (even paper)

#### ... submit my claim for increase once it's done, so that VA can process and rate it.
- Acceptance criteria:
  - [ ] EP-020? is sent to VBMS with appropriate attributes
  - [ ] Any attached docs are sent to VBMS with appropriate attributes
  - [ ] If exam was requested, 21-4142 is sent to Central Mail Portal for C&P exam vendor to pick up 
  - [ ] appropriate error message w/resolution information if the application didn't submit
  - [ ] appropriate error message w/resolution information if the service is down
  - [ ] Anything else?

#### `!`... have confidence that my claim has made it to VA and is being looked at, so that I don't worry needlessly or submit duplicate applications or file unnecessary appeals.
- Acceptance criteria:
  - [ ] success messaging that accurately sets expectations
  - [ ] appropriate error message w/resolution information if the application didn't submit
  - [ ] smooth transition to Claims Status where user can follow the progression of their claim
  - [ ] options for how to stay more proactively involved?

#### `!`... receive a notification when a rating decision has been made, so I don't have to wait for the mail to arrive.
- Acceptance criteria:
  - [ ] if user has opted into notification, they get a notification that a decision has been made
  - [ ] guidance for where/how to get the details and what other stuff they might want to do next

#### `!` ... be able to opt in and out of notifications, so I don't receive unwanted communications.
- Acceptance criteria:
  - [ ] if notifications are selected, user will get notifications
  - [ ] if notifications are not selected, user will not get notifications

### `!` ... be able to see prior documents I had uploaded with my original claim, so I can make the best possible case.
- Acceptance criteria...
