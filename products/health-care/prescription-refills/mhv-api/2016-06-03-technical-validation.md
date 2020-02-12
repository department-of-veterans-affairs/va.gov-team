### 6/3/2016 Technical Validation Document

#### Background
In a 5/17/2016 internal prescriptions team meeting, we committed to having answers on "Technical Validation" by June 3.  This included:

- Which API to use?
- Is the chosen API stable and performant?
- Is secure messaging technically feasible? 
- Is additional data needed? API vs. prototype

#### Findings
Between 5/17/2016 and 6/3/2016 @ayaleloehr and @cfeeney-va met with John Brekke and Ken Graham three times ([meeting](../meeting-notes/2016-05-23-Call-with-John-and-Ken.md) [notes](../meeting-notes/2016-05-31-Call-With-John-And-Ken.md)), as well as spent time using the Rx API. The below is written by @ayaleloehr and represents my opinions at this time:

- Which API: Vets.gov will use the Rx API. This is the original API, not the Liferay version that was created for the redesign. The Rx API is also called the “Enterprise Services API,” was originally built to support the prescriptions mobile product, and is designed for "general use". Per Ken Graham, who is the technical lead on both APIs, the Liferay API exposes a bunch of the inner workings of the system and isn't intended to be used by 3rd parties. When we asked Ken which of these two APIs we should be using to support prescriptions on vets.gov, it was an immediate, confident answer of the Rx API. 
- Stability: The API has never been used in production, but the team (Bylight, namely Ken Graham) seemed confident in it _if_ the client calling the API does so in a reasonable way. If we work with Ken to ensure we build our calls in a way that won't overload the API, I have moderate confidence the API will be stable and performant under expected vets.gov load. We will need to load test the production instance before going live. 
- Secure messaging: Secure messaging has its own API that is decoupled from prescription refills and talks to VISTA directly (as does the Rx API).  The same login/identity concerns that exist for the Rx API (see below) exist for the secure messaging API, but yes, it is feasible. 
- The differences between what's in the prototype and API are documented [here](initial_review.md) and [here](https://github.com/department-of-veterans-affairs/kudos-team/issues/10).  @gnakm reviewed what's in the prototype vs api and performed usability research; the conclusion is the following additional information should be added to the API:

	- medication instructions
	- side effects
	- warnings
	- drug interactions
	- trade name
	- dose/frequency
	- pharmacy phone
	- provider
	- doctor/ specialist who prescribed each medication

	We will need to work with Carnetta or Theresa to get this codified into business requirements (assuming it needs to be more formalized), then find out from the API team how difficult it will be to add these in. My unconfirmed belief is that if the business side prioritizes this, most of the data should be able to be added.  Either way, these differences are not deal-breakers to building prescriptions functionality on vets.gov. 


#### Identity
 
- The Rx API uses a mhvCorrelationId to identify which user to associate each session with.  VA IAM's Master Veteran Index (MVI) then maps this mhvCorrelationId to an Integration Control Number (ICN) which is the unique identifier in VISTA that is used to get the actual data. 
- It is still unclear how we will decouple the Rx API from this mhvCorrelationId. 
	- One idea is to change the API to instead accept an ICN directly (we would need the ICN in a vets.gov profile then).
	- Another idea is to add a vets.gov identifier to the MVI and change the Rx API to accept this vets.gov identifier instead.  
- Alex, Christine, Stacey, and Albert have a call on 6/7 with some of the VA IAM team who understand My Healthevet login process to dig deeper into this.
- Regardless, My Healthevet has millions of registered users and we will have to find some way of migrating those users to vets.gov accounts or tying back to MHV accounts. This not working is not an option if vets.gov is to be successful, so it will be figured out. The timeline is unknown, however, and is entirely dependent on having a vets.gov profile. 
- Much of the Prescriptions functionality can be built without this, but the unknowns here are a large risk to timing any launch date. 

#### Known Risks:

1. We don't yet fully understand how to decouple authorization/identity from My Healthevet
1. We need to figure out how to add data to the API
1. The Rx API has never been used in production at scale

#### Conclusion
All things considered, I believe the Rx API team and product are as solid as we could expect in this environment and we are a go for building prescriptions on top of it. It might not be a smooth road the entire time, but I have confidence the Rx API is the right dependency for refilling prescriptions at the VA and that we will be able to make it work. 
