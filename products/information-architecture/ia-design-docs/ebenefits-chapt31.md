# IA Design and  Recommendations
**STATUS: COMPLETE 09/15/2020**

**Team:** eBenefits

**Product/Featue:** Chapt 31/Veteran Readiness and Employment (formerly Voc Rehab)

**Background/Context:** Migrating the ability to apply for chapter 31 benefits from eBenefits to va.gov

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/9086

**IA Completed Date:** 

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**User Flow(s)**
- Users will be able to access the new form through the existing content page or directly - they do not need to pass through the content page to access the form.
- The introduction page of the new form will include a "wizard" that checks the user's eligibility for the program.  Users will be able to skip the wizard or still complete the application despite the results of the wizard. 
- In the case the wizard finds the user may not be eligible, they will receive a message and/or a link to a related content page.
- In some cases, the wizard may also promote the PCPG/chapter 36 program but the user will not be automatically sent there. If the user chooses to go to the Ch 36 application, they will need to complete the corresponding wizard on that form. 

Wizard flow:

![image](https://user-images.githubusercontent.com/20994159/93143426-8c30b980-f6ad-11ea-895a-58bfa3ddd6c5.png)


**Approach:**

- This work effort includes the addition of an online application.  Static content for this benefit already exists, the new online application will replace the existing link to eBenefits. 
- Parallel to this work, a separate content effort is also happening to update the program name to "Veteran Readiness and Employment".  The existing URLs, which are not intended to be a branded program name, will continue to utilize "/vocational-rehabilitation". This is the same approach taken with the rebranding of the career counseling program (now PCPG). 

![image](https://user-images.githubusercontent.com/20994159/90073835-8f581480-dcbf-11ea-9efc-a7937057f375.png)




Page | URL | Breadcrumb
--- | --- | ---
Application | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/  | Home > Careers and employment > Veteran Readiness and Employment > Apply for VR&E form 28-1900



<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Link to | Description
--- | --- | --- | ---
MUST | Top nav - Careers and employment | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ | Add link to apply as last option in Get benefits column - DISCUSS PLACEMENT & ORDER WITH PW
MUST | Hub page - Careers and employment <br> https://www.va.gov/careers-employment/ | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Add link and teaser text to "Get career and employment assistance" section to go directly to application/form.  Link should be placed after "How to apply". 
MUST | Left nav - Careers and employment | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Add link to application/form to left nav immediately after "How to apply".  
MUST | Content page - Veteran readiness and employment <br> https://www.va.gov/careers-employment/vocational-rehabilitation/ | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Add link to application/form and teaser text to page immediately after "How to apply" link and teaser.  
MUST | Content page - VRE Eligibility page <br> https://www.va.gov/careers-employment/vocational-rehabilitation/eligibility/ | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ | Update "Got to eBenefits to apply" button to reference new form and label. 
MUST | Content page - VRE how to apply <br> https://www.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/ | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Update "Got to eBenefits to apply" button to reference new form and label. 
SHOULD | Content page - VRE support and services <br> https://www.va.gov/careers-employment/vocational-rehabilitation/programs/ | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Add a link/button to apply online to the page.
MUST | Content page - Remployment page <br> https://www.va.gov/careers-employment/vocational-rehabilitation/programs/reemployment | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ | Update "Got to eBenefits to apply" button to reference new form and label. 
MUST | Content page - Rapid acces to employment page <br> https://www.va.gov/careers-employment/vocational-rehabilitation/programs/rapid-access-to-employment | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Update "Got to eBenefits to apply" button to reference new form and label. 
MUST | Content page - Self-employment page <br> https://www.va.gov/careers-employment/vocational-rehabilitation/programs/self-employment | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ |  Update "Got to eBenefits to apply" button to reference new form and label. 
MUST | Content page - Long-term services page <br> https://www.va.gov/careers-employment/vocational-rehabilitation/programs/long-term-services | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ | Update "Got to eBenefits to apply" button to reference new form and label. 
MUST | Content page - Independent living page <br> https://www.va.gov/careers-employment/vocational-rehabilitation/programs/independent-living | https://www.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ | Update "Got to eBenefits to apply" button to reference new form and label. 
SHOULD | Content page - PCPG/Chapt 36 <br> https://www.va.gov/careers-employment/education-and-career-counseling/ | https://www.va.gov/careers-employment/vocational-rehabilitation/ | Add content and link to tthis page to notify user of other program - look at how its represented in the wizard. 




***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The eBenefits team will coordinate the redirect of the eBenefits version of the application with that technical team.  VSP will not be handling any redirects from eBenefits. 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**7/20/2020 - Design Intent**

- enter form auth or unauth, can continue through form unauth
- form wizard - routes to chapt 36 or 31
- discussed the different scenarios of the wizard resultingin links versus buttons
- using similar wizard on ch 36 form, will usability test the call-outs vs buttons to ensure users know what is expected of them next
- have feedback on the purpose of the wizard here - validating eligibility versus routing to correct form
- IA feedback documented here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/11441


**5/8/2020 - Kick-off**

