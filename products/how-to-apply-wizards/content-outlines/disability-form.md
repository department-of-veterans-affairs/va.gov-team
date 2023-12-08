
## Disability and BDD wizard outline and alerts

 

# File for disability compensation
Equal to VA Form 21-526EZ (Application for Disability Compensation and Related Compensation Benefits)

## Is this the form I need?
Use this form to file for disability benefits for an illness or injury that was caused by—or got worse because of—your active military service. If you’re still on active duty, you can file for disability benefits under the Benefits Delivery at Discharge program. This program allows you to file for benefits 180 to 90 days before you leave the military.

Not sure you’re eligible for VA disability benefits? [Find out if you’re eligible for disability compensation](https://www.va.gov/disability/eligibility/)

Answer a few questions to get started.


### User flow 1

Are you on active duty right now? 

- No

Are you filing a new claim or are you disagreeing with a VA decision on an earlier claim? 
 
- I’m filing a claim for a new condition or for a condition that’s gotten worse.


{Alert}
Based on your responses, you’ll file for disability benefits using **VA Form 21-526EZ.** 

{CTA button} File a disability claim online(goes to 526EZ form intro page)

[Learn about other ways you can file a disability claim](https://www.va.gov/disability/how-to-file-claim/)

{end alert}


{H1 for 526EZ form introduction page}

H1: File for disability compensation with VA Form 21-526EZ


---------

### User flow 2

Are you on active duty right now? 

- Yes

What’s the date or anticipated date of your release from active duty?

- Month, day, year


{if less than 90 days out}

{alert} 
Based on your separation date, you’ll file for disability benefits using **VA Form 21-526EZ.** 

{CTA button} File a disability claim online(goes to 526EZ form intro page) 

[Learn about other ways you can file a disability claim](https://www.va.gov/education/how-to-apply/)

{end alert}


{H1 for 526EZ form introduction page}

H1: File for disability compensation with VA Form 21-526EZ


------

### User flow 3

Are you on active duty right now? 

 - Yes 
 
What’s the date or anticipated date of your release from active duty?

 - Month, day, year


{if between 180-90 days release date}

{alert} 
Based on your separation date, you can file a disability claim under the Benefits Delivery at Discharge (BDD) program. 

[Learn more about the BDD program](https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/)

{CTA button} File a BDD disability claim online(goes to BDD intro page)

{end alert}

{H1 for BDD intro page}
H1: File a Benefits Delivery at Discharge claim with VA Form 21-526EZ


-------



### User flow 4

Are you on active duty right now? 

  - Yes 
  
What’s your date or anticipated date of your release from active duty?

	- Month, day, year

{if more than 180 days out for release}

{alert} 
Based on your separation date, you’re not eligible to file for disability benefits right now. You’ll be eligible to file a disability claim under the Benefits Delivery at Discharge (BDD) program in **[X]** days. This program allows you to apply for disability benefits before you leave the military.  

[Learn more about the BDD program]( https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/)

{end alert}



--------



### User flow 5

Are you on active duty right now? 

  - No

Are you filing a new claim or are you disagreeing with a VA decision on an earlier claim? 

- I’m disagreeing with a VA decision on my claim.

{**REMOVE** this question} What’s the date of VA’s decision 

{ADD alert} 
If you disagree with a VA decision on your claim, you’ll need to request a decision review. [Learn about the decision review process](https://www.va.gov/decision-reviews/)

{end alert}
	

--------


Go back link on form subway map page:

If you don’t think this is the right form for you, [go back and answer questions again](return user to wizard they came from). 





