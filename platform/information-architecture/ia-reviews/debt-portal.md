# IA Design for Debt Portal
**STATUS: IN PROGRESS**

**Team:** Debt Resolution team

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/39294

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*
- This work brings 2 authenticated tools together under an overarching summary page, and a parent unauth static landing page.  
- Unauth users will always be taken to the unauth static landing page. From there the user can click/tap the sign-in CTA and complete the sign in flow.  Once authenticated, they should be taken directly to the summary level of the auth tool, or the intended deeper page within the authenticated too.
- In order to continue to link users to specific functions within the auth tool, entry point links in content and navigation components may target deeper pages within the structure - i.e. a link to "Pay your copay bill" will take a user to that specific page within the tool rather than the summary level.  
  - All unauth users will first be taken
  - When unauth users are deep linked into the auth tool, they will first be sent to the unauth static page where they can click a CTA to sign-in and continue forward.  After authenticating, they should be forwarded on to their originally intended destination.
  - When auth users are deep linked into the auth tool, they will bypass the unauth static page and be taken directly to their destination
- Based on the approach to bypass the unauth static landing page for authenticated users, the corresponding segment for that page in the breadcrumb should be hidden once you are in the 
![image](https://user-images.githubusercontent.com/20994159/164260715-36f62613-9c2e-40ee-ae8c-dcbc806db4ff.png)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/e186169c-87ad-42f4-89f6-3922c04d65fc)


**Page** | **New/Existing/Retire** | **Old URL** | **New URL** | **Notes**
--- | --- | --- | --- | ---

1. Debt and bills static landing page - Existing
  - Old URL: /manage-va-debt/
  - New URL: /manage-debt-and-bills/ 
  - Breadcrumb: 
  - Notes: 
    - This is the existing debt static page that will be modified to now encompass copay bills 
    - URL will change and old URL will need to be redirected 

Your debt and bills summary | NEW | /manage-debt-and-bills/summary/  | Home  >  Manage your VA debt and bills  > Your current debt and bills  | - This is the new summary level page of the manage debt and bills tool

Copay bill balances | Existing | old: /health-care/pay-copay-bill/your-current-balances/ <br> new: /manage-debt-and-bills/summary/copay-bill-balances/ | Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current copay bills  | - This is the existing page <br> - The H1 will be modified slightly <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Copay bill details | Existing | old: /health-care/pay-copay-bill/your-current-balances/balance-details/ <br> new: /manage-debt-and-bills/summary/copay-bill-balances/detail/ | Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current copay bills  > Copay bill for [facility name] | - This is the existing page <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Copy bill statement | Existing | old:/health-care/pay-copay-bill/your-current-balances/balance-details/statement/ <br> new: /manage-debt-and-bills/summary/copay-bill-balances/detail/statement/ | Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current copay bills  > Copay bill for [facility name]  >   [date] statement | - This is the existing page <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Benefit debt blalances  | Existing | old: /manage-va-debt/ <br> new: /manage-debt-and-bills/summary/benefit-debt-balances/ | Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current benefit debt | - This is the existing page <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Debt details | Existing | old: /manage-va-debt/ <br> new: /manage-debt-and-bills/summary/benefit-debt-balances/details/  | Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current benefit debt  > Debt details | - This is the existing page <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Debt letters | Existing | old: /manage-va-debt/ <br> new: /manage-debt-and-bills/summary/benefit-debt-balances/letters/ | Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current benefit debt  > Debt letters | - This is the existing page <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Request help static landing page | NEW | TBD | Home  >  Manage your VA debt and bills  >  Request help for debt and bills | - This is a new static landing page that will incorporate content from the existing debt landing page, the FSR wizard, the copay financial hardship page, and the copay dispute charges page  | - This is the existing page <br> - The URL will change to reflect the new hierarchy and the old URL will need to be redirected
Request help/FSR form | Existing | TBD | Home > Manage your VA debt and bills > Request help with VA debt (VA Form 5655)  | - This is the existing online FSR <br> - The URL will change to reflect the new hierarchy and the insertion of a static parent page, the old URL will need to be redirected
Pay your copay bill static page | RETIRE | /pay-copay-bill/ | This page will be retired and redirected.


## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Page/component** | **Link destination** | **Placement/description of change**
--- | --- | --- | ---
   |   |   |  | 



## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  Redirects will be needed for almost all pages in the existing copays and debt experiences based on a top level page change, hierarchical changes, and movement of pages from the health care sub-directory to the debt sub-directory. 
-  Two pages on getting assistance for copay debt will be redirected to a new single content page.
-  All redirects will be detailed out in a rediret request once URLs are finalized.

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

