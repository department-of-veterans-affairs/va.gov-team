# Status and decisions - Tier 3 FOM office templates MVP 1.0

## 06/09/2021 

Meeting - initial dive into Salesforce FOM data

__Attendees:__ 

Janet Schiller

Jen Lee

Dan Navarro


## 06/08/2021

RE: All organizations index search - functionality

Mike Chelen and I looked under the hood at the Gov.uk's org search https://www.gov.uk/government/organisations . We tried conducting the search off the internet and the search still functioned, indicating that they are using a client-side approach like the json cached [resources and support search](https://www.va.gov/resources). 

For VA organizations index search, this approach should also work fine. Their search logic also appears to be searching on just one field - the org name - which also makes sense for org search. 

Since we'll also want to provide a way to filter by VA/CO + administrations, we may need to provide a little addiitional logic on top of org name field text search. 

__Decision:__

- Recommend client-side approach for the all org index search. 
- Recommend text searching on org name field. 
- Design: enable filtering by VA and central offices / VHA / VBA / NCA tags.  

## 06/07/2021

Kick-off meeting with OEI stakeholders and SMEs re proposal to collaborate to use the FOM as foundation for tier 3 office content. 

### [Kick-off deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tier-3-fom/FOM-and-tier-3-proposal-OCTO-OEI-060421.pdf)

Agenda: Proposal - use the FOM data in Salesforce and the FOM mandated content as the source for modernizing baseline office content templates and have a fair system of 'migrating' offices. 

Conclusion: OEI is supportive of this effort and will work with OCTO with SME assistance vis-a-vis FOM - Janet Schiller and Dan Navarro. Janet is the content author/manager of the FOM; Dan is OIT and involved with the Salesforce side of the FOM.

Next steps: Set up first working session call with Janet. 

__Attendees:__

Jennifer Jessup, OEI Chief of Staff

John Medve, OEI SES Policy and Directives

Janet Schiller, OEI SME, content author/manager of FOM

Megan Albright Paulter, OEI - formerly involved in establishing FOM taxonomy in VIEWS; now w/ data governance team. (Attended to provide background history if needed.) 

__Invited, not present:__

Matt Bristol, OEI, Strategic Communications (reports to Jen Jessup)

Ken Wagner, OEI, Policy, reports to John Medve




