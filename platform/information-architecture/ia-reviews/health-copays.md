# IA Design and Recommendations
**STATUS: IN PROGRESS**

**Product/Featue:** Medical copays

**IA Request:** https://app.zenhub.com/workspaces/platform---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/25663

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*

Page flow illustrates proposed H1s, link labels and URLs:
<Br> *Black lines = existing pages/links*
<Br> *Orange dashed lines = new page*
<Br> *Lt Blue dotted lines = external page/link*



![image](https://user-images.githubusercontent.com/20994159/145093877-52b2e78c-482f-422d-877c-29b25dae5195.png)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used, and breadcrumb requirements.*

**Page hierarchy**
 

![image](https://user-images.githubusercontent.com/20994159/145094267-8833f6be-50d6-4c90-8d90-cbead01f483b.png)
 
 
 
**Page** | **URL** | **Breadcrumb** | **Description**
--- | --- | --- | ---
Pay copay bills static page | https://www.va.gov/health-care/pay-copay-bill/ | Home > Health care > Pay your VA copay bill |  This is an existing page, no changes to URL or breadcrumb.
Auth tool: Copay balance overview |  www.va.gov/health-care/pay-copay-bill/your-current-balances/  |  Home > Health care > Pay your VA copay bill > [H1 of copay balance overview page]  | New tool to view copay bills.
Auth tool: Copay balance detail |  www.va.gov/health-care/pay-copay-bill/your-current-balances/balance-details/  |  Home > Health care > Pay your VA copay bill > [H1 of copay balance overview page] > [H1 of balance detail page]   | Detail level of the copay balance.
Auth tool: Online statement | www.va.gov/health-care/pay-copay-bill/your-current-balances/balance-details/statement/ | Home > Health care > Pay your VA copay bill > [H1 of copay balance overview page] > [H1 of balance detail page] > [H1 of online statement page]
Financial hub static landing page   | www.va.gov/xxxxxx   | Home > [H1 of page]   | ***Details for this page are TBD*** <br>New static landing page provides links to all financial-related tools and forms 

## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Priority** | **Placement** | **Destination** | **Description**
--- | --- | --- | ---
 MUST | Pay medical copays static page <br>https://www.va.gov/health-care/pay-copay-bill/ | Auth tool: Copay balances <br>www.va.gov/health-care/pay-copay-bill/your-current-balances/ | Existing static page will need sign in module, content and link to new tool. 
 TBD |  TBD  | Financial hub static landing page | ***Entry points for this new static page are TBD***

 

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  No redirects needed. 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

