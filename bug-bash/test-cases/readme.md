Test cases to assign folks at bug bash.


Unicorns Products have all been tested but this is a good opportunity to take another spin and make sure they're all fully functional. Feel free to add to the table below to capture additional elements as this one is pretty straightforward. We're keeping this lean, the idea here is to run through the key functionality again for positive cases just to make sure nothing has been broken during any recent changes.

| Test Objective | PreCondition | Expected Outcome | Status (Pass/Fail) | Notes/Actual Outcome
| --- | --- | --- | --- | --- | 
| 526 MVP: successful form initiation for user with rated disabilities | verified test user with rated disabilities in staging (user 228) |1. require login if claims for increase selected from wizard (disability/how-to-file-claim/) <br/>  2.start form  <br/>  3.create or find active ITF <br/> 4.prefill identity contact and payment info, find rated disabilities <br/> 5. Submit (no evidence upload required, can select 'No evidence')
| 526 MVP: discontinue form if no rated disabilities found | verified test user with no rated disabilities in staging (user 47) |1. require login if claims for increase selected from wizard (disability/how-to-file-claim/) <br/>  2.start form  <br/>  3.create or find active ITF <br/> 4. get error 'no rated disabilities found'<br/>
| Claim Status:  | verified test user with disability claims (user 228) |1. go to claims and appeals status from homepage <br/> 2. require login  <br/>  3. load Appeal
| Appeal Status:  | verified user with Appeals data vets.gov.user+503@id.me; vets.gov.user+504@id.me Password1234!(for both) |1. go to claims and appeals status from homepage <br/> 2. require login  <br/>  3. load Appeal
| VA Letters:  | verified test user with disability claims (user 228) |1. go to 'Download Your Benefit Letters' from homepage <br/> 2. require login (blue button  <br/>  3. Select 'Access Your VA Letters' blue button <br/> 4. Verify address 5. Select View Letters 6. Get list of letters to download
| None. | Contact Us updates in global header menu and global footer list | Updated with new phone number and TTY | Call MyVA311: | 1-844-698-2311 TTY: 711
