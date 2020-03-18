# IA Review and Recommendations
**STATUS: COMPLETE**

**Team:** VSA - Caregivers

**Product/Featue:** 10-10cg Modernization

**Background/Context:** Digitizing of the 10-10cg that provides users a way to apply for caregiver benefits. 

**Date Complete:** 3/182020

**IA Request Issue:**  https://github.com/department-of-veterans-affairs/va.gov-team/issues/6939

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- Upon review of the user research and their responses/actions to being asked where they would look for information on the caregiver program or stipend, 50% of the participants went to the "Family member benefits" hub via the link on the home page and 30% used search to ultimately find the existing PCAFC content page.  One individual used the top nav and went to the Family member benefits option under health care. 

- Based on this information, my recommendation is to place the application under the Family member hub page.  In addition, the existing PCAFC content page should also be moved under the Family member hub page. Although this content area was not intended to include child pages, the content and benefits included in the PCAFC and its application are more broad than a single benefit and fit better with the family member content. 

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/a3d3d317-2d8b-49a7-a378-082747d08da9)

Page | New URL | New Breadcrumb | Notes
--- | --- | --- | ---
[Program of Comprehensive Assistance for Family Caregivers](https://www.va.gov/health-care/family-caregiver-benefits/comprehensive-assistance/) | https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregiver/ | Home > Family member benefits > Program of Comprehensive Assistance for Family Caregivers | - This is an existing static content page currently living in health care and will be moved to the family member hub.<br> - The URL and breadcrumb change.<br> - A redirect will need to be created for the URL change. See redirect info below.<br> - The left nav will need to be removed from this page. 
New form for applying for the caregiver program | https://www.va.gov/family-member-benefits/apply-for-caregiver-program-form-10-10cg/ | Home > Family member benefits > Apply for the Program of Comprehensive Assistance for Family Caregivers | 

*Please connect with your writer/editor on the proper verbiage and capitalization of the last element of the breadcrumb*


<hr>

### Navigation, Entry Points and Crosslinking <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Description
--- | --- | ---
Must| Health Care Left Nav | **REMOVE link** to the "Comprehensive assistance for caregivers" from the left nav in the Health care hub
Should | On page [Health care for spouses, dependents and family caregivers](https://www.va.gov/health-care/family-caregiver-benefits/) | Keep the existing text and link, update to the new location of the PCAFC page
Should | On page [Family member hub](https://www.va.gov/family-member-benefits/) | Keep the existing text and link, make sure the link is updated to the new location of the PCAFC page

️***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirect Needs <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

Current page URL | Redirect to | Notes
--- | --- | ---
www.va.gov/health-care/family-caregiver-benefits/comprehensive-assistance/ | www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregiver/ | 

For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).

<hr>

### Additional Notes/Recommendations
- Although this recommends shifting some content to live under the family member hub, other dependent/spouse/family/caregiver content is generally specific to a benefit (i.e. disability, health care, etc.) and therefore is not reocmmended to shift to the family member hub. This content is geared towards Caregivers, which is an audience that we do not currently have content for as well as covers multiple benefits and will be best served being separate from a specific benefits hub. 


