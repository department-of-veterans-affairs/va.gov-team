# Spike: Investigate Uptick in MHV Logins in September  
**Completed:** October 1, 2024  
**Contributor:** John Marchi  
**Jira Ticket:** [SIT-90](https://jira.devops.va.gov/browse/SIT-90)

## Situation
In September, there was a noticeable increase in **MHV Success Logins** without a corresponding rise in login attempts. This spike coincided with the **9/18 update** to the MHV registration and sign-in page. The VA SSIT team aims to determine whether this change is responsible for the uptick and if it led to an increase in call center activity.

## Findings
- On **9/18**, a UX/UI update to the MHV sign-in page made **Option 1 (MHV Premium)** more prominent, shifting **Options 2 & 3** further down the page.
- Data shows a significant uptick in **Option 1 logins** starting on **9/19**, immediately following the UX/UI changes.
- The uptick is isolated to **Option 1 users**; no increase in logins for Option 2 is reflected in the Domo dashboard, as these users are not tracked in **MPI/SSOe** data.
- The shift from **Option 2 to Option 1** is likely due to the new page design, though the lack of Option 2 data in Domo prevents it from showing a decrease in those logins.
- **Conclusion:** The **9/18 update** likely caused the observed uptick in **Option 1 logins** as users transitioned from Option 2, which isn't captured in the dashboard.
