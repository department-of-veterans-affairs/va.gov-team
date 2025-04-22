# Overview of forms that include questions about marital status

URL of form is included and descriptions about what is asked about marital status for each form.

## 686c-674 (also called 21-686c)
- /view-change-dependents/add-remove-form-21-686c-v2
- report-add-a-spouse
	- current-marriage-information
		- 5 parts / files for current marriage details
	- current-spouse-marriage-history-details
	- does-live-with-spouse
	- spouse-information
	- if spouse has been married in the past must add at least 1 of the previous marriages up to 20
	- array builder pattern
- veteran-marriage-history
	- former spouse name
	- date of marriage, date of marriage ending
	- location, outside US, City, State, Country
	- How did the marriage end? - Their former spouse died, They divorced, They got an annulment, Some other way
	- Briefly describe how the marriage ended - text field when 'other' is selected
	- Various other items are shown if marriage ended outside of us, ended due to death or ended due to annulment
- report-add-child
	- Has this child ever been married? (required)
	- How and when marriage ended
		- When did this marriage end? - date
		- How did the marriage end? - Their former spouse died, They divorced, They got an annulment, Some other way
		- Briefly describe how the marriage ended - text field when 'other' is selected

## 686c-674 (for purposes of counting forms, we are considering this the same as the above form)
- /view-change-dependents/add-remove-form-21-686c
- v1 of the above form. Both appear to be in production by looking at content-build, but would need to verify if v2 is only one used at this point

## 22-1995 Education benefits form 
- url: /education/apply-for-education-benefits/application/1995
- for veterans that had service before 1977
	- Are you currently married? yesNo radio field

## 10-10EZR Update health benefits info form 
- /my-health/update-benefits-information-form-10-10ezr
- Marital status as dropdown select field
	"Married",
	"Never Married",
	"Separated",
	"Widowed",
	"Divorced"

## Financial Status Report 
- /manage-va-debt/request-debt-help-form-5655
- Are you married?
	- Additional info component includes "If you’re married, we also need to understand your spouse’s financial situation. This allows us to make a more informed decision on your request."
- Spouse name

## 1010ez Health Care Application Form 
- url: /health-care/apply-for-health-care-form-10-10ez
- Marital status with dropdown just like EZR
- Spouse information section asks for date of marriage

## 21-527EZ pension benefits form
- /pension/apply-for-veteran-pension-form-21p-527ez
- Marital status with dropdown
	"Married",
	"Never Married",
	"Separated",
	"Widowed",
	"Divorced"
- How many times have you been married?
- Marriage history
	- Spouse full name
	- Place of marriage 'City and state or foreign country'
	- Place marriage ended  'City and state or foreign country'
	- How did you get married?
		- 'In a civil or religious ceremony with an officiant who signed my marriage license'
		- 'Some other way'
	- How did the marriage end? Spouse's death, Divorce, Other
	- Tell us how the marriage ended (when other is selected)
- Current spouse marital history
	- Has your spouse been married, Yes, No, Not sure
	- Same fields as above Marriage history

## 40-10007 pre need burial planning form
- /burials-and-memorials/pre-need/form-10007-apply-for-eligibility
- What’s your marital status? Radio button group
	- 'Single'
	- 'Separated'
	- 'Married'
	- 'Divorced'
	- 'Widowed'
- What’s the sponsor’s marital status? Same options as above
	- "We require some basic details about the applicant’s sponsor as part of the application. Please know we need to gather the data for statistical purposes."

## 40-10007 pre need burial planning form (a second form that lives in the pre-need-integration folder of vets website; for purposes of counting forms, we are considering this the same as the above form)
- /burials-memorials/pre-need/form-10007-apply-for-eligibility
- slightly different url at /burials-memorials... vs /burials-and-memorials
- fields look identical to the above form
