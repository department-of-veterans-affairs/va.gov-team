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
- This work brings 2 authenticated tools together under an overarching auth summary page, and a parent unauth static landing page.  
- This section will also include an unauthenticated static page for requesting assistance with debt and bills, and the existing online FSR will also move to this section. 
- In order to continue to link users to specific functions within the auth tool, entry point links in content and navigation components may target deeper pages within the structure - i.e. a link to "Pay your copay bill" will take a user to that specific page within the tool rather than the summary level.  
  - When unauth users are deep linked into the auth tool, they will first be sent to the unauth static page where they can click a CTA to sign-in and continue forward.  After authenticating, they should be forwarded on to their originally intended destination.
  - When auth users are deep linked into the auth tool, they will bypass the unauth static page and be taken directly to their destination

![image](https://user-images.githubusercontent.com/20994159/169404143-8140fadd-774b-47f9-90c3-a17d363b03d7.png)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

### Site maps

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/e186169c-87ad-42f4-89f6-3922c04d65fc)


### Pages, URLs and Breadcrumbs 

**1) Debt and bills static landing page (Existing)**
- URL:
  - **old:** /manage-va-debt/ 
  - **new:** /manage-debt-and-bills/ 
- Breadcrumb: Home > Manage your VA debt and bills 
- Notes: This is the existing debt static page

**2) Your debt and bills summary (NEW)**
- URL: /manage-debt-and-bills/summary/ 
- Breadcrumb:  Home > Manage your VA debt and bills > Your debt and bills summary 

**3) Copay bill balances (Existing)**
- URL: 
  - **old:** /health-care/pay-copay-bill/your-current-balances/ 
  - **new:** /manage-debt-and-bills/summary/copay-balances/ 
- Breadcrumb: Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current copay bills  

**4) Copay bill details (Existing)**
- URL:
  - **old:** /health-care/pay-copay-bill/your-current-balances/balance-details/ 
  - **new:** /manage-debt-and-bills/summary/copay-balances/detail/ 
- Breadcrumb: Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current copay bills  > Copay bill for [facility name] 

**5) Copy bill statement (Existing)**
- URL
  - **old:**/health-care/pay-copay-bill/your-current-balances/balance-details/statement/ 
  - **new:** /manage-debt-and-bills/summary/copay-balances/detail/statement/ 
- Breadcrumb: Home  >  Manage your VA debt and bills  > Your current debt and bills  >  Current copay bills  > Copay bill for [facility name]  >  [date] statement

**6) Benefit debt blalances (Existing)**
- URL:
  - **old:** /manage-va-debt/ 
  - **new:** /manage-debt-and-bills/summary/debt-balances/
- Breadcrumb: VA.gov home  >  Manage your VA debt and bills  > Your debt and bills summary  >  Benefit debt balances  

**7) Debt details (Existing)**
- URL:
  - **old:** /manage-va-debt/ 
  - **new**: /manage-debt-and-bills/summary/benefit-debt-balances/details/  
- Breadcrumb: VA.gov home  >  Manage your VA debt and bills  > Your debt and bills summary  >  Benefit debt balances > Debt details 

**8) Debt letters (Existing)**
- URL:
  - **old:** /manage-va-debt/ 
  - **new:** /manage-debt-and-bills/summary/benefit-debt-balances/letters/ 
- Breadcrumb: VA.gov home  >  Manage your VA debt and bills  > Your debt and bills summary  >  Benefit debt balances > Debt letters 

**9) Request help static landing page (NEW)**
- URL: /manage-debt-and-bills/request-help/ 
- Breadcrumb: Home  >  Manage your VA debt and bills  >  Request help for debt and bills 
- Notes: New static landing page to help users find the right option  

**10) Request help/FSR form (Existing)**
- URL:
  - **old:** /manage-va-debt/request-debt-help-form-5655/  
  - **new**  /manage-debt-and-bills/request-help/request-financial-help-form-5655/ 
- Breadcrumb: VA.gov home  >  Manage your VA debt and bills  >  Request help with debt and bills  >  Request financial help (VA Form 5655) 

**11) Pay your copay bill static page (RETIRE)**
- URL:/health-care/pay-copay-bill/ 
- Breadcrumb: n/a 
- Notes: This page is no longer needed and will be retired and redirected

**12) Displute your VA copay charges (RETIRE)**
- URL: /health-care/pay-copay-bill/dispute-charges/ 
- Breadcrumb: n/a 
- Notes: This page will be retired and redirected. Content will be moved to the Request help static page and applicable R&S articles. 

**13) Request VA financial hardship assistance (RETIRE)**
- URL: /health-care/pay-copay-bill/financial-hardship/ 
- Breadcrumb: n/a 
- Notes: This page will be retired and redirected. Content will be moved to the Request help static page and applicable R&S articles. 


## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Page/component** | **Link destination** | **Placement/description of change**
--- | --- | --- | ---
Modify | Health care hub | www.va.gov/manage-debt-and-bills/summary/copay-balances/  | Update existing "Pay your VA copay bill" link to deep link into auth tool.  

Placement: Health care left nav  (Modify)
- Link label: Pay
- Link destination: www.va.gov/manage-debt-and-bills/summary/copay-balances/
- Notes: Update existing "Pay your VA copay bill" link to deep link into auth tool. 
Add | Disability hub | |
Add | Disability left nav | |
Add | Education hub | |
Add | Education left nav | |
Add | Pension hub | |
Add | Pension left nav | |


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

