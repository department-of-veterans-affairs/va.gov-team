# IA Review and Recommendations

**STATUS: COMPLETE**

**Team:** Benefits & Memorials 2

**Product/Featue:** Medical device ordering - Hearing aid batteries and accessories

**Background/Context:**  Provide Veterans eligible for hearing aid battery and/or accessory resupply a user experience that allow them to order available items through an end-to-end online ordering process.

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/6378

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:** 
- The team's research did show user struggles in finding where this capability would be - this seemed to be primarily due to the top tasks on the home page drawing attention and lack of visibility of the top nav.  Both of these issues will continue to be reviewed outside of this work effort.  In the mean time, placement for this capability will still remain within the health care benefits hub along with all other health care tools.  
- Future state of this functionality could include a more robust and consolidated approach for ordering any type of medical supplies or device, but given too many unknowns around bringing on other products, we will treat this as a stand-alone experience for this initial launch.  
- Although there is a current strategy to decouple tools from the benefit hubs, that approach is not fully defined, specifically how it applies to health care tools.  Given that and that this order capability is only available for users who have VA health care benefits, this content and tool will remain coupled with the Health care benefit hub at this time.

**Structure:** <br>
![image](https://user-images.githubusercontent.com/20994159/81016380-eb401100-8e25-11ea-8170-60bf5269d0c9.png)

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Order prosthetic socks static content page  |  www.va.gov/health-care/order-prosthetic-socks/  | Home > Health care > Order prosthetic socks | - Static content page that includes link to eBenefits to order 
Order hearing aid accessories static content page | www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/ |  Home > Health care > Order hearing aid batteries and accessories | - Static content page that includes link to online form for ordering
Order form for hearing aid accessories | www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346  |  Home > Health care > Order hearing aid batteries and accessories > Order form 2346 | - This is the online order form

**Notes**
- Please connect with your writer/editor on the proper verbiage and capitalization of the breadcrumb

<hr>


### Navigation Changes and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Entry points**
Priority | Location | Link to | Description
--- | --- | --- | ---
Must | Health care top nav fly-out | www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/ | - Replace existing link to "Order hearing aids and prosthetic socks" with a link to just the hearing aid accesories static page
Must | [Health care hub page](https://www.va.gov/health-care/) | REMOVE LINK | - Remove the existing link and teaser text to the "Order hearing aids and prosthetic socks" page
Must | [Health care hub page](https://www.va.gov/health-care/)  | www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/ | - Add link and teaser text to "Manage health and benefits section <br> - Option should be 5th item, placed after the "View lab and test results" option
Must | Health care left navigation | REMOVE OPTION | Remove the existing link to "Order hearing aids and prosthetic socks"
Must | Health care left navigation | www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/ | - Add link to "Manage health and benefits section <br> - Option should be 5th item, placed after the "View lab and test results" option
Must | Health care left navigation | www.va.gov/health-care/order-prosthetic-socks/  | - Add link "Manage health and benefits" section <br> - Option should be 6th item, placed after the "Order hearing aids" options 
Must | Search best bets | www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/ | - Update existing best bets that are related to hearing aid search terms to point to the new static page
Must | Search best bets | www.va.gov/health-care/order-prosthetic-socks/ | - Update existing best bets that are related to prosthetic socks search terms to point to the new static page

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

**Notes**
- The hub pages are meant to include up to 10 prioritized links per spoke.  The health care hub page currently exceeds that number under the "Manage" spoke due to the number of health tools. For this reason, the hearing aids ordering option is prioritized and will replace the existing combined option, but the prosthetic socks content will not be linked to from the hub page. 
- The top nav, like the hub page, is also a prioritized list, limited to 5 options. Again, the current combined option will be replaced by a link to the hearing aid accessory content page only.  The prosthetic socks content will not be linked to from the top nav. 
- Regarding crosslinking within Disability
  - Research synthesis indicates that some participants felt this order form should also be linked to from the Disability benefit hub.
  - Cross-linking from Disability content pages could be provided within body copy of applicable pages, but keep in mind that the Veteran must have health care benefits to utilize the order forms. This can be discussed with the content experts to identify where cross-linking for this might make sense. 
  - Links within the hub pages and left nav are for content that lives within that hub, therefore there isn't a standard place to provide cross-linking in those key navigational areas.

<hr>


### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The existing combined page for [hearing aid batteries and prosthetic socks](https://www.va.gov/health-care/order-hearing-aid-batteries-prosthetic-socks/) will need to be redirected to one of the new content pages to ensure users do not get a 404. 
- There are a few legacy pages that are duplicative to our current/future pages, these should be discussed with your stakeholders to determine if this content should be retired and URLs redirected to new content pages. It would be recommended to link to our new content pages from their main DLC page to ensure we have a single source of truth.
  - https://www.va.gov/opal/nac/dlc/batteries.asp
  - https://www.va.gov/opal/nac/dlc/accessories.asp
  - https://www.va.gov/opal/nac/dlc/socks.asp
- Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 

*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

- none


<hr>
<hr>


### Meeting Notes

**4/1/2020 - Pre-usability Collab**
- Will the order history capability be part of this phase of work?
  - Not part of initial phase
  - Need to discuss how to approach IA with this still in mind or whether it is deferred for the longer term
  
 - Pre-usability feedback issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/6499
   - There is no IA feedback at this point, so an IA specific feedback issue was not created. 
   
**Early collab discussion**
- Provided draft content structure to team to aid in refining design and prototype. Will complete final IA review once research and designs are complete. https://app.moqups.com/Rnc4BDEKrA/view/page/a523fd3f0 

