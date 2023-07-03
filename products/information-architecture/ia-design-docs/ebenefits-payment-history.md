# IA Review and Recommendations
**STATUS: COMPLETE**

**Team:** eBenefits 

**Product/Featue:** View Payment History

**Background/Context:**  Part of the eBenefits migration work.  

**IA Request:** https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/9050

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

#### Approach:
- The standard approach for authenticated tools is to have a static page available to unauthenticated users that allows stakeholders to manage content and messaging and provides an SEO landing page. This page will prompt users to sign in or create an account and then be directed to the tool. 
- Unauthenticated users who are linked directly to the tool, will be sent to the static content page first and prompted to sign in. 
- Authenticated users who are linked directly to the tool, will bypass the static page and go directly to the tool.
- Authenticated users who are linked to the static content page, will bypass the static page and go directly to the tool.
- Given this tool is not specific to a single benefit, it will live independent of the benefit hubs within the IA.

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/164e56c0-787d-4bb9-a220-deb4f8f5cc75)


Page | URL | Breadcrumb | Details
--- | --- | --- | ---
VA payment history static content page | https://www.va.gov/va-payment-history/ | Home > View VA payment history | This is an existing static content page.  No changes are needed to the URL or breadcrumb of this page. 
Payment history tool | https://www.va.gov/va-payment-history/payments  | Home  > View VA payment history | The breadcrumb for the tool does not include a link to the static page since authenticated users bypass the static page. 

<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Link to | Description
--- | --- | --- | ---
Must | [VA Payment History page](https://www.va.gov/va-payment-history/) | https://www.va.gov/va-payment-history/payments | Replace existing eBenefits content/button with sign in component and link to new tool. 
Consider | [My VA](https://www.va.gov/my-va/) | https://www.va.gov/va-payment-history/ | Add a link to "View VA Payment History" along with teaser text under the "Manage your health and benefits" section of the page.  

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- It is assumed that the technical team for eBenefits will handle the redirect of the legacy tool URLs when the tool is sunset. The VA.gov team is unable to implement redirects for ebenefits.va.gov URLs.


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**Kick-off 3/19/2020**
- login and see payments issued to me, click on line item and see detail
- data table that is returned, leaning towards table data
- no transactional functionality, all just viewing data, may need some interactions i.e. sorting, pagination, filtering, etc
- usability testing needed
- VSP recommended looking at BAM2 order history work, as its tabular data,  as well Yellow Ribbon tool and Find forms
- amount of data returned is and could be very large
- 
