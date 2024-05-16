# Loan Guaranty Application (Certificate of Eligibility)

[Staging link](https://staging.va.gov/housing-assistance/home-loans/request-coe-form-26-1880/introduction)

## All Login Information
| Email                         | Password | ICN | EDIPI | Notes |
| ----------------------------- | ---------- | ---------- | ---------- | ---------- |
| vets.gov.user+228@gmail.com   | 200SsNrLgPv5 | | | Password doesn't work
| vets.gov.user+24@gmail.com   | 168SsNrLgPv5 | | | Automatic COE, 50% SC disability rating
| vets.gov.user+34@gmail.com   | 303SsNrLgPv5 | 1012829890V001762 | 1005320840 | Automatic COE, 80% SC disability rating
| vets.gov.user+125@gmail.com   | 116SsNrLgPv5 | 1012830031V654442 | 1005151291 | Needs to file manually
| vets.gov.user+41@gmail.com   | 109SsNrLgPv5 | 1012643310V921518 | 1019061961 | Needs to file manually, disability rating blank
| vets.gov.user+54@gmail.com   | 242SsNrLgPv5 | 1012666073V986297 | 1293307390 | Needs to file manually, 60% SC disability rating, US Army
| vets.gov.user+111@gmail.com   | 211SsNrLgPv5 | 1012845647V175093 | 1322564410 | Needs to file manually
| vets.gov.user+141@gmail.com   | 393SsNrLgPv5 | 1013112726V768481 | 1015781374 | Needs to file manually
| vets.gov.user+192@gmail.com   | 157SsNrLgPv5 | 1012845059V795233 | 1014019258 | Needs to file manually
| vets.gov.user+212@gmail.com   | 145SsNrLgPv5 | 1012845700V116007 | 1100647822 | Needs to file manually
| vets.gov.user+258@gmail.com   | 152SsNrLgPv5 | 1012851504V621829 | 1023820672 | Needs to file manually

## Request a COE
Users can request a Certificate of Eligibility by signing into VA.gov and completing the form online. 

### Steps to Reproduce
1. Select "Request a Certificate of Eligibility"
     1. VA Form 26-1880 opens at Step 1 of 6: Your personal information
     2. If available, form has first/middle (maybe--not required)/last name and DoB filled out
2. Select continue
     1. VA Form 26-1880 opens at Step 2 of 6: Your contact information
     2. Form has contact information filled in
4. Select continue
     1. VA Form 26-1880 opens at Step 2 of 6: Your contact information/Additional contact info
5. Add contact information details
6. Select continue
     1. VA Form 26-1880 opens at Step 3 of 6: Your service history
7. Select a radio button
8. Select continue
     1. VA Form 26-1880 opens at Step 3 of 6: Your service history
     2. Form has blank fields for entering service period. It also has CTA for adding more service
9. Select continue
     1. VA Form 26-1880 opens at Step 4 of 6: Your VA loan history
10. Selects No, I've never had a VA-backed loan	
11. Selects Continue	
     1. VA Form 26-1880 opens at Step 5 of 6: Your supporting documents
12. Selects Upload documents	
	1. System opens local file viewer
13. Identifies a document (any doc on your computer that's not PII) and selects OK (CTA on System)	
	1. System begins uploading. 
	2. System displays progress bar.
	3. System displays an area to add Your uploaded documents
14. Selects an item from the list	
15. Selects Continue	
	1. VA Form 26-1880 opens at Step 6 of 6: Review your request
16. Reviews information	
17. Expands and contracts accordions	
	1. Accordions expand and contract onSelect
18. Selects policy checkbox	
19. Selects Submit request	
	1. System announces that it saved the request.
	2. Date/time stamp and request ID numbers appear.

### Intended Outcomes (if applicable)
1. User is informed when their application is submitted. 
2. User is informed when their applicaiton fails to submit.
3. User is able to check the status of the application in the status tracker.

## Find out if you already have a COE and download it
Users can sign into VA.gov to find out if they already have a Certificate of Eligibility and download it.

### Steps to Reproduce
1. Signs in (either from the top menu or from the button Sign in to start your request)
2. Accesses information link on COE that details how to download a government PDF ("Get instructions for downloading a VA.gov PDF")
3. Downloads COE

### Intended Outcomes (if applicable)
1. User can download their Certificate of Eligibility
2. User can check the status of their existing application
3.  User can submit the application

## Check the status of your request
Users can check the status of an existing application if submitted through VA.gov.

### Steps to Reproduce
1. Opens the page for [status](https://staging.va.gov/housing-assistance/home-loans/check-coe-status/your-coe?postLogin=true)	
	1. System prompts for a log in
2. Logs in	
	1. Your VA home loan COE page appears
3. Views page 	
	1. CTAs for downloading COE, making changes to COE online by filling out VA Form 26-1880, and downloading letters exist
4. Selects Download your COE PDF 0.20MB	
	1. PDF sample appears 
5. Select browser back icon
	1. System returns to Your VA Home Loan COE page
6. Selects to make a change to COE online by selecting the link Make changes to your COE online by filling out VA Form 26-1880	
	1. System displays Request a VA home loan Certificate of Eligibility (COE) page
	2. CTA to go to COE page to review details exists. (Request a Certificate of Eligibility)
	3. Ability to continue an in-progress COE form is available if germane
7. Selects Request a Certificate of Eligibility	
	1. System displays the COE at the last point the user left it
`	2. User can select the Back button and review existing data
	3. User can edit data
	4. User can continue to completion 
8. Selects agreement checkbox (at the end of the form, on step 6)	
9. Selects Submit request (at the end of the form, on step 6)	
	1. Confirmation appears

### Intended Outcomes (if applicable)
1. User sees their status as pending, eligible, or denied. 

## Get an automatic COE
If VA.gov has all the user information needed when they sign in, they may get a Certificate of Eligibility automatically.

### Steps to Reproduce
1. Opens the page for [status](https://staging.va.gov/housing-assistance/home-loans/check-coe-status/your-coe?postLogin=true)	
	1. System prompts for a log in
2. Logs in	
	1. Your VA home loan COE page appears
3. Views page 	
	1. CTAs for downloading COE, making changes to COE online by filling out VA Form 26-1880, and downloading letters exist
4. Selects Download your COE PDF 0.20MB	
	1. PDF sample appears

### Intended Outcomes (if applicable)
1. User can download their Certificate of Eligibility
2. User can submit the application 
