# Drive Time Calculation

_May 6, 2024_

## Short-term

- WellHive to provide API for drive-time to each provider. I.e., WellHive will handle the logic for which providers to show.
- EPS is using Azure, which is a Microsoft product, while PPMS uses Bing Maps API, which is also a Microsoft product. After WellHive did their initial evaluation, drive times from Azure method compared to Bing Maps API were comparable. 

## Long-term

Robert needs to talk with Rick and Jami about what system will be used to source eligible providers for CC referrals based on 5-min drive time bands. In the future, CTB will call GSSC in real-time to get providers that are within the band and then present those providers in HSRM. But, that’s a different process than what EPS is planning for direct scheduling without an MSA. So, Robert will need to figure out what the plan is for Q1 2025. E.g., EPS will need to make a change, and Appointments will inherit that change via EPS API. 

The change that goes in to effect in February 2025 is that drive times in consult toolbox for community care providers will be for 5 minute, not 10 minute bands.

[Meeting recording](https://dvagov-my.sharepoint.com/:v:/g/personal/benjamin_brasso_va_gov/EUMLlS7gQ8tJuO6HKLi6pxMBxJ2-llKiEpv8YF_gXeZipA?referrer=Teams.TEAMS-ELECTRON&referrerScenario=MeetingChicletGetLink.view.view) 

[Access Standards and VCCP Eligibility_ System Changes (1).pptx](https://github.com/department-of-veterans-affairs/va.gov-team/files/15226556/Access.Standards.and.VCCP.Eligibility_.System.Changes.1.pptx)
