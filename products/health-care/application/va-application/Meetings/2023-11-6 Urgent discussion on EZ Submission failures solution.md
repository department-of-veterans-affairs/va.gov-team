# Nov 6, 2023 | Urgent discussion on EZ Submission failures solution
- Attendees: Jessica Stump  Hieu Vo Heather Justice Emily Brown Matt Long Alex Seelig Health Experience Bateman, Patrick F. Mcconnell, Kristen A.

### Notes

#### Problem
- For Dependents page with Multiple Response pattern
     - Veterans select the FInish Later link, but still have required fields empty
     - When the Veterans return to complete the form, the frontend validation does not have a mechanism in place to catch the empty required fields within the multiple response pattern
     - The form is submitted, but fails due to not having data in the required fields
 
#### Options - Short term solution
- Option: Remove “Finish later” link from dependent pages
     - Veterans will not have the option to Finish Later from the Dependents section
- Option: Disable Dependent section SIP functionality
     - Veterans will lose any information entered in the Dependents section (but not totally completed) if they leave the application
     - The dependents section data will save once all fields are completed and the Veteran moves on to the next step
- Level of effort for BOTH options to be implemented?
     - Matt Long will have PR up this afternoon for today’s deployment
 
#### Action
- Matt Long will have the changes done in time for the daily deployment
- Long term solutions will be discussed in additional meetings
