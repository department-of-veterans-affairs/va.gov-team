VA Form 21P-8416

https://staging.va.gov/supporting-forms-for-claims/submit-medical-expense-report-form-21p-8416

## All Login Information
| Email                         | Password | 
| ----------------------------- | ---------- |
| vets.gov.user+282@gmail.com  | 470SsNrLgPv5 | 
| vets.gov.user+283@gmail.com  | 392SsNrLgPv5 | 
| vets.gov.user+360@gmail.com  | 136SsNrLgPv5 | 

## Staging User 282
- vets.gov.user+282@gmail.com
- 470SsNrLgPv5

### Test Case A
Veteran claiming expenses for self with domestic address and saved in-progress claim


### Steps to Reproduce
1. User logs into VA.gov using ID.me
2. User navigates to the saved in-progress 21P-8416 form via “https://staging.va.gov/supporting-forms-for-claims/submit-medical-expense-report-form-21p-8416” and selects “Continue your application”
3. User observes the “Add mileage expenses” information page
4. User selects the “Back” button to navigate to the “Review your medical expenses” page
5. User observes that their previously-entered medical expense is still present
6. User selects the “Back” button to navigate to the “Review your care expenses” page
7. User observes that their previously-entered medical expense is still present
8. User proceeds forward to the Mileage Expense section and adds at least 1 mileage expense
9. User reviews submitted data and selects “Submit”
10. User observes the confirmation page and can download a copy of their submitted data

### Intended Outcomes (if applicable)
1. User can resume form with their saved data
2. User encounters expected validations
3. User can successfully submit the form

## Staging User 283
- vets.gov.user+283@gmail.com
- 392SsNrLgPv5

### Test Case B
B: Veteran claiming expenses for self with military address and saved in-progress claim

### Steps to Reproduce
1. User logs into VA.gov using ID.me
2. User navigates to the saved in-progress 21P-8416 form via “https://staging.va.gov/supporting-forms-for-claims/submit-medical-expense-report-form-21p-8416” and selects “Continue your application”
3. User observes the “Add medical expenses” information page
4. User selects the “Back” button to navigate to the “Review your medical expenses” page
5. User observes that their previously-entered care expense is still present
6. User selects the “Back” button to navigate to the “Review your care expenses” page
7. User observes that their previously-entered care expense is still present
8. User proceeds forward to the Care Expenses section and adds at least 1 care expense
9. User proceeds forward to the Mileage Expenses section and adds at least 1 mileage expense
9. User reviews submitted data and selects “Submit”
10. User observes the confirmation page and can download a copy of their submitted data

### Intended Outcomes (if applicable)
1. User can resume form with their saved data
2. User encounters expected validations
3. User can successfully submit the form

## Staging User 360
- vets.gov.user+360@gmail.com
- 136SsNrLgPv5

### Test Case C
Spouse claiming expenses for child of Veteran with domestic address and saved in-progress claim

### Steps to Reproduce
1. User logs into VA.gov using ID.me
2. User navigates to the saved in-progress 21P-8416 form and selects “Continue your application”
3. User reviews and edits any necessary fields.
4. User signs form with full name and checkbox to certify that the information above is correct
5. User selects “Submit application”
6. User observes the confirmation page and downloads a copy of their submitted form

### Intended Outcomes (if applicable)
1. User can tab through each page as needed
2. User encounters expected validations
3. User can successfully submit the form

