# IA Design for Debt Portal
**STATUS: COMPLETE**

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

### Page flow
- This work brings 2 authenticated tools together under an overarching auth summary page, and a parent unauth static landing page.  
- This section will also include an unauthenticated static page for requesting assistance with debt and bills, and the existing online FSR will also move to this section. 
- In order to continue to link users to specific functions within the auth tool, entry point links in content and navigation components may target deeper pages within the structure - i.e. a link to "Pay your copay bill" will take a user to that specific page within the tool rather than the summary level.  
  - When unauth users are deep linked into the auth tool, they will first be sent to the unauth static page where they can click a CTA to sign-in and continue forward.  After authenticating, they should be forwarded on to their originally intended destination.
  - When auth users are deep linked into the auth tool, they will bypass the unauth static page and be taken directly to their destination

![image](https://user-images.githubusercontent.com/20994159/169404143-8140fadd-774b-47f9-90c3-a17d363b03d7.png)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

### Site map

![image](https://user-images.githubusercontent.com/20994159/194178642-fe8b455d-1b2c-4fe1-a050-4f6ba0fbe7d4.png)


### Pages, URLs and Breadcrumbs 

**1) Debt and bills static landing page - Existing, no change**
- URL: /manage-va-debt/ 
- Breadcrumb: Home > Manage your VA debt
- Notes: Normally the breadcrumb segment would match the H1 of the page, however, a decision was made to keep the breadcrumb short and succint since the tool is several levels deep and would get quite lengthy.  This shortened version also meets the stakeholders vision of keep this focused on the word "debt". 

**2) Your debt and bills summary - NEW**
- URL: /manage-va-debt/summary/ 
- Breadcrumb:  Home > Manage your VA debt > [H1 of current page]

**3) Copay bill balances - Existing, modified**
- URL: 
  - old: /health-care/pay-copay-bill/your-current-balances/ 
  - new: /manage-va-debt/summary/copay-balances/ 
- Breadcrumb:  Home  >  Manage your VA debt  > [H1 of summary page (2)]  >  [H1 of current page]
- Notes: Old URL will need to be redirected to new URL, see redirect list below

**4) Copay bill details - Existing, modified**
- URL:
  - old: /health-care/pay-copay-bill/your-current-balances/balance-details/ 
  - new: /manage-va-debt/summary/copay-balances/detail/ 
- Breadcrumb:  Home  >  Manage your VA debt  > [H1 of summary page (2)]  >  [H1 of copay bill balances page (3)]  > [H1 of current page] 
- Notes: Old URL will need to be redirected to new URL, see redirect list below

**5) Copy bill statement - Existing, modified**
- URL
  - old: /health-care/pay-copay-bill/your-current-balances/balance-details/statement/ 
  - new: /manage-va-debt/summary/copay-balances/detail/statement/ 
- Breadcrumb:  Home  >  Manage your VA debt  > [H1 of summary page (2)]  >  [H1 of copay bill balances page (3)]  > [H1 of copay bill details page (4)]   >  [H1 of current page]
- Notes: Old URL will need to be redirected to new URL, see redirect list below

**6) Benefit debt blalances - Existing, modified**
- URL:
  - old: /manage-va-debt/your-debt/
  - new: /manage-va-debt/summary/debt-balances/
- Breadcrumb: Home  >  Manage your VA debt  > [H1 of summary page (2)] >  [H1 of current page] 
- Notes: Old URL will need to be redirected to new URL, see redirect list below 

**7) Debt details - Existing, modified**
- URL:
  - old: /manage-va-debt/your-debt/debt-detail/
  - new: /manage-va-debt/summary/debt-balances/details/  
- Breadcrumb: Home  >  Manage your VA debt  > [H1 of summary page (2)] >  [H1 of debt balances page (6)] > [H1 of current page] 
- Notes: Old URL will need to be redirected to new URL, see redirect list below 

**8) Debt letters - Existing, modified**
- URL:
  - old: /manage-va-debt/your-debt/debt-letters/
  - new: /manage-va-debt/summary/debt-balances/letters/ 
- Breadcrumb: Home  >  Manage your VA debt  > [H1 of summary page (2)] >  [H1 of debt balances page (6)] > [H1 of current page]  
- Notes: Old URL will need to be redirected to new URL, see redirect list below 

**9) Request help static landing page - NEW**
- URL: /manage-va-debt/request-help/ 
- Breadcrumb:  Home  >  Manage your VA debt   >  [H1 of current page] 
- Notes: New static landing page to help users find the right option will eliminate the need for the wizard on the FSR

**10) Online FSR form flow - Existing, modified**
- URL:
  - old: /manage-va-debt/request-debt-help-form-5655/  
  - new  /manage-va-debt/request-help/request-financial-help-form-5655/ 
- Breadcrumb: Home  >  Manage your VA debt  >  [H1 of request help static page (9)]  >  [H1 of current page]

**11) Pay your copay bill static page - Existing, modified**
- URL: no change (/health-care/pay-copay-bill)
- Breadcrumb: no change
- Notes: This static page will remain for now for findability and SEO purposes.  It will be a primary entry point into the new combined debt portal tool. 

**12) Resources and support pages - NEW**
- New pages will be created as needed to support the debt portal and FSR functions
- URL and entry points determined by Sitewide Content team

### Removed/retired pages

**Displute your VA copay charges - RETIRE/REDIRECT**
- URL: /health-care/pay-copay-bill/dispute-charges/ 
- Notes: This page will be retired and redirected. Content will be moved to the Request help static page and applicable R&S articles. See redirect information below.

**Request VA financial hardship assistance - RETIRE/REDIRECT**
- URL: /health-care/pay-copay-bill/financial-hardship/ 
- Notes: This page will be retired and redirected. Content will be moved to the Request help static page and applicable R&S articles. See redirect information below.


## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*


**Entry point location: [Pay your copay bill static landig page](/health-care/pay-copay-bill)**
- **UPDATE** sign in component to deep link into the copay bill balances page of the debt portal
  - Destination: www.va.gov/manage-va-debt/summary/copay-balances/ 
  - Notes: Update language of the React component and page to clarify where the visitor will be taken after signing in - i.e. reference "debt" and "copay bills and overpayments"

**Entry point location:** [Disability hub](https://www.va.gov/disability/)
- **ADD** link and teaser text to the manage debt static page
  - Destination: www.va.gov/manage-va-debt/
  - Notes: Link label and teaser text TBD by Sitewide content. Place option as last item in section, under "View disability payment history" 

**Entry point location:** Disability left nav
- **ADD** option for "Manage va debt"
  - Destination: www.va.gov/manage-va-debt/
  - Notes: Left nav label to be confirmed by Sitewide content. Add option to left nav under the "Manage benefits" spoke.  Place option as last item in section, under "View disability payment history" 

**Entry point location:** [Education hub](https://www.va.gov/education/)
- **ADD** link and teaser text to the manage debt static page
  - Destination: www.va.gov/manage-va-debt/
  - Notes: Link label and teaser text TBD by Sitewide content. Place option as last item in section, under "Apply to restore your GI Bill benefits" 

**Entry point location:** Education left nav
- **ADD** option for "Manage va debt"
  - Destination: www.va.gov/manage-va-debt/
  - Notes: Left nav label to be confirmed by Sitewide content. Add option to left nav under the "Manage benefits" spoke.  Place option as last item in section, under "Apply to restore your GI Bill benefits" 

**Entry point location:** [Pension hub](https://www.va.gov/pension/)
- **ADD** link and teaser text to the manage debt static page
  - Destination: www.va.gov/manage-va-debt/
  - Notes: Link label and teaser text TBD by Sitewide content. Place option as last item in section, under "Request a decision review or manage a legacy appeal" 

**Entry point location:** Pension left nav
- **ADD** option for "Manage va debt"
  - Destination: www.va.gov/manage-va-debt/
  - Notes: Left nav label to be confirmed by Sitewide content. Add option to left nav under the "Manage benefits" spoke.  Place option as last item in section, under "Request a decision review or manage a legacy appeal" 



## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  Redirects will be needed for almost all pages in the existing copays and debt experiences based on a top level page change, hierarchical changes, and movement of pages from the health care sub-directory to the debt sub-directory. 
-  Two pages on getting assistance for copay debt will be redirected to a new single content page.
-  All redirects should be detailed out in a redirect request issue linked below.

Old URL | Redirect to 
--- | --- 
/health-care/pay-copay-bill/your-current-balances/ |  /manage-va-debt/summary/copay-balances/ 
/health-care/pay-copay-bill/your-current-balances/balance-details/ | /manage-va-debt/summary/copay-balances/ 
/health-care/pay-copay-bill/your-current-balances/balance-details/statement/ | /manage-va-debt/summary/copay-balances/ 
/manage-va-debt/your-debt/ |  /manage-va-debt/summary/
/manage-va-debt/your-debt/debt-detail/ | /manage-va-debt/summary/
/manage-va-debt/your-debt/debt-letters/  | /manage-va-debt/summary/
/manage-va-debt/request-debt-help-form-5655/  | /manage-va-debt/request-help/request-financial-help-form-5655/ 
/health-care/pay-copay-bill/dispute-charges/ | TBD
/health-care/pay-copay-bill/financial-hardship/ | TBD


Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

