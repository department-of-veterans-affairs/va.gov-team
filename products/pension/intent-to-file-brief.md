# Intent to File for 527EZ - Product Outline 
## Overview
Enable Veterans to receive a pension benefits effective date by calculating the ITF from the date a pension application was started online. 
Intent to file sets a potential start date (or effective date) for Veteran benefits by notifying the VA that they plan to file a claim. 
This can enable the Veteran to receive retroactive payments (payments from the time between when they submitted an intent to file and when the VA approves the claim).
The Veteran has one year from the time they submit an intent to file their claim to receive the earliest possible effective date.

### How might we statement: How might we ease the burden on Veterans to set  an Intent to File date that requires fewer steps to obtain and reduces the need to fill out multiple forms? 

## Desired Outcomes
Enable Veterans to receive a pension benefits effective date by calculating the ITF from the date a pension application was started online. 
ITF functionality is currently implemented in the disability benefit (526EZ).  
Incorporate learnings from pain points in the current 526 online experience while building the pension solution, in particular recurring downtime for ITF API requests that blocked application progress.

## Business goals
* Ease the burden of Veterans applying for pension benefits to set an intent to file.
* Reduce Veteran confusion around the benefit and purpose of intent to file.
* Provide a consistent experience that enables Veterans to proceed in the Pension application when the ITF API is unavailable.

## Assumptions
* The Veteran must authenticate on VA.gov to set an Intent to File date

## Measuring Success
* The total number of Veterans applying for Penson benefits that fill out a separate 0966 Intent to File form are reduced.
* Errors that block the Veteran from continuing their Pension application when the ITF API is unavailable are significantly reduced as compored to the 526 online application.

## Discovery Research References
* ITF Research Summary - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md


## Solution Approach
MVP
Integrate intent to file functionality with the 527EZ application on VA.com that is only available to authenticated users.  Key data elements include:<br>
* Upon starting the 527EZ online, the web app will check the ITF endpoint for availability. 
* If available, the system will use the ITF date returned by the ITF API and the system will display messaging to the user based on the date and status returned. 
* If the API is unavailable or our call times out, the system will store the in-progress form date to capture the ITF date locally and make an API call to generate a new ITF date.
* The system will display messaging to the user that their application start date has been saved. 
* The system will also kick off an asynchronous job to continue attempting to access the API which will run until successful or until x number of retries have been reached.
* If this job is successful, we will not provide any additional messaging to the Veteran, but we will use the earlier ITF date in their submission.

 ## Related Documentation
* Process and User Flow - https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1714050769683/e4dffd0f80fc8aca04a773dbe53c0d40fd5f2dde?wid=0-1714497805333&sender=ud143866fd5369378295a0267


## Post-MVP
Areas to explore:<br>
* Incorporating improvements in messaging and technical approach made in the 527EZ implementation of intent to file to the 526EZ process
* Usability research to contemplate Post-MVP improvements

  
