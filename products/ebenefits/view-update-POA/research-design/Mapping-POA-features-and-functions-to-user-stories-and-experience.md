 # Power of Attorney features & user stories
 **VSA eBenefits Team | March 2020**
 
 `Nick Wygonik, UI/UX Designer`
 
 ---

#### References
[Epic: Migrate "View and Update My Representative"](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3672)

[Github (#5535)](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5535)  

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-POA/README.md) 

#### Goals
Understand the functions and how they map to the user stories and experience seen in the Epic

## Power of Attorney features

### View representative page 
-	Display current ‘Representative’
-	Links to ‘Manage your Representatives’
-	Link ‘Change your Representatives’

 > User stories: 
 > 2. View my representative,
 > 3. No representative displayed

### Application process features
-	Store applicant's saved information from previous section
-	Continuing the application from saved
-	Save the application’s progress
-	Print applications progress
-	Delete current/incomplete application
-	Progress bar with links to each step
-	Back button
-	Interactions with process
     - Radio buttons
     - Input fields
-	Completion percentage displayed per each of the form’s step
-	Privacy Act information

 > User stories:
 > 4. Starting the POA application
 > 5. Privacy Act acknowledgement
 > 11. Print application

### Personal information
-	**VA file number**	
      - Input field  
      - Content describing VA #
      - Helper text for VA# format
      - Checkbox “I do not have a VA File #”
-	**Veteran's biographical information**
  - Auto-populated
  -	Edit button: ‘change personal information’
  -	Contact information: Compensation and Pension Benefits link
  -	Address
     -	Type: 
        -	Domestic
        -	International
        -	Military/overseas
     -	Number & street 
     -	City
     -	State
     -	Zip
        -	Phone: primary/secondary/mobile
        -	Emails: primary/alternative
        -	Payment information
     - Auto populated table
        -	Headers
    -	Benefits:  Compensation & pension
    -	Payment method: Direct Deposit
    -	Finical institution: Bank
    -	Account type: Checking
    -	Routing #: ###
    -	Account #: #####
    -	Effective date- MM/DD/YYYY
    -	CTA: Cancel
    -	CTA: Save
    
> User stories:
> 6. Enter VA file number
> 7. No VA fie number
> 8. VA file error validation statement
> 9. Confirm biographical information
> 10. Edit biographical information

### Representative selection
-	**Authorizing address change**
     - Radio buttons Y and N
-	**Tables** (Auto-populated from database)
     - Headers
       -	Names (POA code digits can be alpha/numeric)
       - Contact info
           - Address
           -	Phone
       - Sort by alpha and numeric
       - CTA- selection
         - Auto fill forms 21-22 & 21-22a with veteran’s information
       - Print tables 
       - Pagination
       - CTA- "change search criteria"
       - Insurance number
          - Input field
-	**Attorney information**
    - Veteran’s organization information
      - Name
      - VA code # (022)
      - Address
    - Attorney information
    - Information text- "Representative cannot accept online representation request."  
 -	**Find local representative**
    - Selected
       - VSO
       - Attorney
       - Claims agent
       - Search 
         - Address
         - City
         - Zip
         - Distance
       - Name 
-	**Limit of consent**
- Provides link to Section 7332 Title 38-U.S.C
- Optional Restrictions checkbox
   - Drug abuse
       - Alcoholism
       - Infection with HIV
       - Sickle cell anemia
       
-	**Military service** 
  - Auto populate
  
> User stories:
> 12. Search for a representative
> 13/15/16/17/18. Complete step’s location inputs
> 14. Select a representative
> 19. See results of Search
> 21. Print representative result table
> 22. Representative result table features: sort by columns
> 23. Select representatives
> 25. Confirm military service
> 26. Enter insurance #
  
### Error check
-	Error checks
-	Warnings

> User story:
> 30 - Confirm warning message

### Final review
-	Final Validation

>User story:
>30/31 - Confirm application

### Manage your Representative for VA claims
-	Links to "Find closer Representative offices"
-	Links to "Find new Representative"
-	Links to form downloads
  - 21-22
  - 21-22a
