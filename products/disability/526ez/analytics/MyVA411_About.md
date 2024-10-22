# MyVA411 data

The following information was gathered during a sync with the Contact Center to learn more about the data stream and how it could be utilized for launch monitoring of 526ez's Toxic Exposure feature. See this document, which strategizes approaches to the data analysis. 

1-800-MyVA411 (1-800-698-2411), a single access point to all VA contact centers.
The number is available 24 hours-a-day, 365 days-a-year to serve Veterans, their families, caregivers and survivors. The number is listed at the bottom of the VA website homepage among other places; Veterans can call anytime to get information about anything VA-related.
The help line is run by Veterans Experience Office [VEO] as a Tier 1 contact center. It acts as a clearing house, resolving simple inquiries and escalating specialized issues to higher tiers or other organizations.

### VA Contact Centers

**Tier 1-** Calls that cannot be addressed by a Tier 1 agent (listed as “owner name” in the Salesforce data) move up to Tier 2 or 3.

-   Agent can provide assistance to the user OR they are directed to another call center, like send to VBA or a higher tier.
    
-   Tier 1 notes are a mix of utility, trying to avoid too much PII.
     

**Tier 2-** Contact Center (Kimberly and team). Calls directed here from Tier 1 are more likely to be related to an issue with VA.gov.

-   If you see a label for the owner's name in the Salesforce data, it means that the call was serviced by a VEO Tier 1 agent– it didn’t come to CC Team. Should say Tier 2
    

**Tier 3**- Development Team, typically resolves technical issues Veterans experience on VA.gov.

### Salesforce data

Case type: Broader topic. What you pick here determines what case categories you can pick

Case category: Narrows it down more- doesn’t go any narrower than that

The higher the tier, the more likely the call was to be a blocker or severe usability issue.

### Data Requests for Toxic Exposure Monitoring

“Pact Act” will not be the best case category to find issues related to the toxic exposure rollout. For example, when a Veteran calls, the phone system might say “If you are looking for PACT ACT press one.” Veterans could press one and then the call could be unrelated to the Pact Act.

Request data for disability benefits and then search toxic exposure as a keyword. “Disability benefits” is more likely to be how TE usability issues or questions are coded. TE problems will more likely be found in Tier 2 data, while Tier 1 will be more general, resolved issues.

If a Veteran calls and says, “I need dates for this screen filing for disability but I don’t know them” within the 526 flow for TE, then the agent will direct the call to HRC or NCC.
