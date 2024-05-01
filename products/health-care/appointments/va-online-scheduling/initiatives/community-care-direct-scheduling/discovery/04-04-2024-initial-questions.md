# EPS VAOS (or CC Direct Scheduling) Process Questions 

## EPS-VAOS cross-team discovery questions 

Date: April 3, 2024

- Knowing that CC Direct Scheduling will start from an authorized and approved referral: 
     - What system will provide that approved referral data and letter from? And, what data or format of the approved referral will we have access to?
     - What information will be included in the approved referral? And, what information is required vs. optional? E.g., provider(s), care type, number of appointments, etc.
     - Is this information already available in an API or does another team need to build this? If so, who is that other team? 
- Could you walk us through (maybe by way of a demo) the steps that MSAs go through from receiving an approved CC referral to scheduling an appointment in the staff-facing EPS tool?  
- Has the DTC Integration Platform (DIP) already been integrated with EPS?

### Responses

- DIP doesn't have an integration with CCRA (or Health Share Referral Management System), which is where the approved referrals are. CCRA does integrate with a different middleware, DAS, which Optum and TriWest use. (Assuming these are health insurance and/or medical group affiliations of the providers.) 
- An approved referral is for a speciality, and then sometimes services and/or sub services underneath. Additionally, it may include a type of appointment. E.g., a consult, set of physical therapy appointments, etc. (Need more detail on the latter part.)
- VAOS is connected with PPMS today, which is a source of truth for CC providers. However, PPMS and EPS are not integrated yet. 
- EPS uses Azure maps algorithm to determine drive times to providers from a Veteran's home/residential address. However, Console Toolbox also does this. 

## Questions for IVC

 - What information exists in a CC referral? What information is required? What information is optional? And, can you walk us through how a request, consult and referral relate to each other? 
 - What’s the existing process and eligibility checks that VA staff complete today in order to approve a CC referral? Will that process be changing to support CC Direct Scheduling? 

## Save for another time 

- Do we envision removing the Request a CC Appointment tool in VAOS when we launch the CC Direct Scheduling pilot? Or, would those continue to coexist?

## Not needed at this time; we'll make our own local decision-making 

- Does WellHive have any Veteran or consumer-facing provider scheduling directories (i.e., government or private sector) that offer a great user experience that we can reference when designing to fit within VAOS?

