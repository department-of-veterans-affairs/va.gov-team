## Vets.gov Rx API Requirements

1. Given: A vets.gov identifier already exists in MVI, correlated to an ICN. 

	**Requirement**: Ability to use a vets.gov identifier to authenticate to the Rx API (instead of a mhvCorrelationId).


1. Given: A user has a vets.gov account with LOA3 and either does or does not have a MHV account. 

	**Requirement**: This user is able to refill a prescription successfully, regardless of if they have a MHV account. 
	
	Questions: 
	
	- Where do terms and conditions get signed?  Should this happen on vets.gov account creation or via Rx API somehow, or elsewhere?  
	- What other blockers are there to doing this?


1. **Requirement**: Highly prioritized responses for interactions with Rx API team to debug issues and ensure successful testing and launch. 

1. **Requirement**: v1 of the Rx API in all environments vets.gov is using (currently systest and, hopefully soon, production) will not change without prior planning with the vets.gov team.  Any other versions can be added, but the API endpoints should not be altered or removed without prior awareness and planning. 

1. **Requirement**: Access to a production user for the Rx API, including ability to test real prescription refills. 

1. **Requirement**: The following data fields added for each returned active and historic prescriptions: 
	
	- NDC Number
	- Pill image
	- Ordering provider for the prescription
	- Medication Instructions, side effects, warnings, and drug interactions
	- Medication Dose/Frequency 
	- Pharmacy phone number 
	
	Data elements to be accessible via new API call:

	- The address on file that prescriptions will be shipped to (for example, knowing the address before actually refilling the prescription, rather than once there is a tracking number for it)
	
	Question: Which of these are doable soonest?  We want to understand which of these are easier and which are difficult to prioritize the order they should be added in (assuming all cannot be added at once). 
	

1. **Requirement**: Tracking endpoint functions to return all of a user’s tracking history.  This request will look something like `/mhv-api/patient/v1/prescription/gettrackingrx`. 

	Comment: This should be in addition to the tracking endpoint that exists today, which is tracking by individual prescription (such as `/mhv-api/patient/v1/prescription/rxtracking/12345678`

