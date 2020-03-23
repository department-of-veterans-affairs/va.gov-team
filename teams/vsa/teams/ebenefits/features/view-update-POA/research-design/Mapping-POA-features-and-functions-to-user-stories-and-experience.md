 

`WIP`
# eBenefits:  Map functions to user stories and experience

Epic: [Migrate "View and Update My Representative"](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3672)

User story: [#5535](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/5535)  

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-POA/README.md) 


**VSA eBenefits Team | March 2020**
 [Nick Wygonik](nwygonik@governmentcio.com) UI/UX Designer

Goals- Understand the functions and how they map to the user stories and experience seen in the Epic

## Power of Attorney features

### Landing Page 
 > User story: 
 > 2. View my representative,
 > 3. No representative displayed,  
-	Display current ‘Representative’,
-	Links to ‘Manage your Representatives’,
-	Link ‘Change your Representatives’,

### Application Process features
 > User Story:
 > 4. Starting the POA Application,
 > 5. Privacy Act acknowledgement,
 > 11. Print application,
-	Store Applicants saved information from previous section
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
-	Privacy Act information.

### Personal Information
> User Stories-
> 6. Enter VA File number
> 7. No VA fie number
> 8. VA file error validation statement
> 9. Confirm biographical information
> 10. Edit biographical information

-	#### VA File number	
      - Input field  
      - Content describing VA #
      - Helper text for VA# format
      - Checkbox “I do not have a VA File #”
-	#### Veterans biographical information
  - Auto Populated
  -	Edit button- ‘change personal information’
  -	Contact information- Compensation and Pension Benefits link
  -	Address
     -	Type: 
        -	Domestic
        -	International
        -	Military Overseas
     -	Number & Street 
     -	City
     -	State
     -	Zip
        -	Phone: Primary/Secondary/Mobile
        -	Emails Primary/Alternative
        -	Payment information
     - Auto populated table
        -	Headers
    -	Benefits- Compensation & pension
    -	Payment Method- Direct Deposit
    -	Finical Institution- Bank
    -	Account type- Checking
    -	Routing #- ###
    -	Account #- #####
    -	Effective Date- MM/DD/YYYY
    -	CTA- Cancel
    -	CTA- Save

### Representative Selection
> User Stories:
> 12. Search for a representative,
> 13/15/16/17/18. Complete step’s location inputs,
> 14. Select a Representative, 
> 19. See results of Search, 
> 21. Print Representative result table, 
> 22. Representative result table features- sort by columns, 
> 23. Select Representatives, 
> 25. Confirm Military service, 
> 26. Enter insurance #, 
-	#### Authorizing Address change
     - Radio buttons Y and N
-	#### Tables (Auto populated from database)
     - Headers
       -	Names (POA code digits can be Alpha/Numeric)
       - Contact info
           - Address
           -	Phone
       - Sort by Alpha and Numeric
       - CTA- selection
         - Auto fill forms 21-22 & 21-22a with veteran’s information
       - Print tables 
       - Pagination
       - CTA- ‘change search criteria’
       - Insurance Number
          - Input field
-	#### Attorney information
    - Veteran’s Organization Information
      - Name
      - VA code # (022)
      - Address
    - Attorney Information
    - Information text- ‘Representative cannot accept online representation request.’
    
 -	#### Find local Representative
    - 	Selected
       - VSO
       - Attorney
       - Claims Agent
       - Search 
         -  Address
         - City
         - Zip
         - Distance
       - Name
       
-	#### Limited of Consent
- Provide link to Section 7332 Title 38-U.S.C
- Optional Restrictions checkbox
   - Drug Abuse
       - Alcoholism
       - Infection with the HIV
       - Sickle cell anemia
       
-	#### Military Service 
  - Auto populate
  
### Error Check
> User Stories:
> 30- Confirm warning message
  -	Error checks
  -	Warnings

### Final Review
>User story:
>30/31- confirm application
-	#### Final Validation

### Manage your Representative for VA claims
-	Links- ‘Find closer Representative offices’
-	Link- ‘Find new Representative’
-	Download forms
  - 21-22
  - 21-22a
  


