### VET TEC Routing

##### Acceptance criteria

- If 0994 is submitted on same day (before 3 AM EST) as 1990 then both should go to the Buffalo RPO

- If 0994 is submitted on day X and 1990 is submitted on day Y then both should go to the Buffalo RPO

- If only 0994 is submitted then it should go to Buffalo RPO

- If only 1990 is submitted then it should continue to follow current routing rules (no change)

##### Challenges

Education benefit claims do not currently save any queryable user info to the database, which prevents any sort of lookup of already submitted forms.

Education benefit claims also do not validate users prior to creating the claim record which means that all claim records are created without access to any user info.

In order for va.gov to route 1990 forms to the Buffalo RPO, we will need to be able to query submitted forms for any 22-0994 forms submitted by the same user.

##### Solution description

Validate user prior to saving the claim record. This will make the user info available to the claim.

Add a `user_uuid` column to the `EducationBenefitsSubmission` table. The unique ID of all logged in users who submit an education benefit claim will be stored in this new field.

Update claim routing calculation to query the database for any existing 0994 forms and if present, set the region of the 1990 to the Buffalo RPO.

##### Solution limitations

- The routing for each form is current set when the form is submitted.  This solution doesn't change that, so a 1990 submitted earlier on the same day as a 0994 will still be routed to an RPO based on current routing rules.

- The only data source for existing 0994 forms that will be checked is the `vets-api` database.

- The `vets-api` database doesn't store submitted form data indefinitely. This means that if the user has submitted a 0994 prior to submitting a 1990 but the 0994 submission has been deleted, the 1990 will be routed based on current routing rules.
