# Ask VA PRA information 
Last updated by @beckyphung: August 29, 2024 

🆕 8/29 Update: We met with Phillip Cauthers again on 8/23. We learned that: 
- The current IRIS System of Records Notice (SORN) hasn't been rescinded yet.
- We need to update the IRIS SORN. The IRIS SORN should cover Ask VA instead of the PATS-R SORN. 
- Natalie is reaching out to Amy Rose to get help with updating the SORN and get clarification around keeping our current application live while we complete the update.

This doc explains how Ask VA currently has Paperwork Reduction Act (PRA) clearance. 

Jump to:
- [Summary](#summary)
- [Background](#background)
- [Future plans](#future-plans)
- [References](#references)

## Summary 
Ask VA doesn’t need additional Paperwork Reduction Act clearance because:  

- Ask VA is an app within the same CRM instance as Patient Advocate Tracking System Replacement (PATS-R).  
- PATS-R has a system of records notice (SORN). 
- PATS-R's SORN applies to Ask VA. 

We confirmed this with Phillip Cauthers, a VA privacy officer on a 8/2/24 call. View complete meeting notes [in this Word doc](https://dvagov.sharepoint.com/:w:/s/AskVA/EWdNNE1TxM1FsQOhjkrFlbwBE2vpvcuVsZcXcsHUJ23-2Q?e=g0B7pO). 

## Background 
Ask VA replaced the Inquiry Routing & Information System (IRIS) [Learn more about Ask VA’s background](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/products) in this GitHub doc. 
IRIS previously had a [SORN](https://vaww.va.gov/IRISINFO/docs/SORN-2015-11493.pdf) and [VASI record](https://vaww.vear.ea.oit.va.gov/#system_and_application_domain_defs_system_24649.htm). 
> AVA replaces the functionality formerly provided by the Inquiry Routing and Information System (IRIS) application (VASI #1347) which has been decommissioned. 

When VA replaced the IRIS system with Ask VA, Ask VA was developed in the same existing Microsoft Dynamics 365 CRM instance as PATS-R.  

## Future plans 
We’re currently planning to remove the Ask VA application from the same CRM instance as PATS-R after the January launch of Ask VA on VA.gov. 

As a separate system, Ask VA will obtain an ATO and SORN information will be updated.

Reach out to Natalie Morales (Natalie.Morales@va.gov) for more information on this effort.

## References 
### Learn more about Ask VA and PATS-R 
- View PATS-R - #2402 [page in the VA System Inventory (VASI)](https://vaww.vear.ea.oit.va.gov/#system_and_application_domain_defs_system_24649.htm) on the **VA network only** 
> The Ask VA (AVA) system is built within PATS-R application 
- View PATS-R's SORN [in this pdf of the Federal Register](https://www.govinfo.gov/content/pkg/FR-2021-01-25/pdf/2021-01501.pdf)
  
### Learn more about the Paperwork Reduction Act (PRA) 
- View [documentation from the VA Platform](https://depo-platform-documentation.scrollhelp.site/research-design/paperwork-reduction-act-pra) 
- [Learn about PRA](https://pra.digital.gov/) 
- View [all Privacy Act SORNS](https://department.va.gov/privacy/system-of-records-notices/) on the **VA network only** 
> A system of records is a group of any records under the control of any agency from which information is retrieved using the individual’s name or some form of unique identifying number, symbol, or other identifier assigned to the individual.

> The Privacy Act requires federal agencies that maintain a system of records to publish a notice, commonly referred to as Systems of Records Notices or SORNs, in the Federal Register 
