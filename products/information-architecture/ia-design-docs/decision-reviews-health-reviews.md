# IA Design for Health care decision reviews and appeals
**STATUS: In review**

**Team:** Sitewide Content, Accessibility, and IA

**IA Request:** [Link to Sitewide Content and IA intake request]

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>
*Illustration and/or description of how users will flow through the experience. The user flow helps illustrate how visitors will navigate to and through your product/feature, ensures all types of visitors and scenarios are accounted for, and aids in identifying all content and messaging needs.*


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

<img width="1200" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/20994159/cacc0099-2195-4bc2-b6ad-e46e3f29871a">




## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*


**1) Medical decision review - NEW**
- URL: /clinical-appeals/
- Breadcrumb: Home > Decision reviews and appeals > [H1]
- Notes: 

**2) Caregiver claims - NEW**
- URL: /family-caregiver-program-reviews/
- Breadcrumb: Home > Decision reviews and appeals > [H1]
- Notes: 

**3) [After you request a decision review](https://www.va.gov/decision-reviews/after-you-request-review/) - MODIFY**
- URL: No change 
- Breadcrumb: Update to match updated H1
- Notes:
  - Update H1 to include "benefit" - "After you request a benefit decision review"
  - This page will be moved from the "Request" spoke to the "More resources" spoke.  This change only impacts placement of some entry points to the page (outlined below), and does not impact the URL of the page.  

## <a name="nav"></a>Entry points <br>
*A list of new internal entry points, as well as changes to any existing entry points. This list focuses on the primary entry points and does not include all possible crosslinking opportunities. Consider whether a Search Best Bet might be useful if this product enhances a Top Task for veterans.*


### 1. **[Decision reviews hub page](https://www.va.gov/decision-reviews/)** 
  - Add link to Medical decision reviews page
    - Placement description: Place after Board Appeal, it will be the 4th item in the list
    - Link destination: www.va.gov/decision-reviews/clinical-appeals/
    - Notes: Match label to H1: Clinical Appeals of medical treatment decisions
  - Add link to Caregiver claims page
    - Placement description: Place after the clinical appeals option, it will be the 5th item in the list
    - Link destination: www.va.gov/decision-reviews/family-caregiver-program-reviews/
    - Notes: Match label to H1: Family caregiver program decision reviews and appeals
  - Move link to "After you request a review page" 
    - Placement description: Remove link from the "Request review" section, and add it to the "More resources" section after "Get help requesting...", it will be the 4th item in the list
    - Link destination: www.va.gov/decision-reviews/after-you-request-review
    - Notes:  Match label to H1: After you request a benefit decision review

**Hub page link order**- labels below not exact, for reference only
- Request a decision review
  - Supplemental claim 
  - Higher-level review 
  - Board appeal 
  - Clinical appeal 
  - Family caregiver claims
  - Contested claims
  - Insurance claims
  - Fiduciary claims   
- Manage your decision reviews and appeals
  - Check your decision review status
  - Manage your legacy VA appeal
- More information and resources
  - Choosing a decision review option
  - FAQa
  - Get help
  - After you request...
  - Manage your VA debt
  - The AMA

### 2. **Decision reviews left nav** 
  - Add link to Medical decision reviews page
    - Placement description: Place after Board Appeal, it will be the 4th item in the list
    - Link destination: www.va.gov/decision-reviews/clinical-appeals/
    - Notes: Match label to H1
  - Add link to Caregiver claims page
    - Placement description: Place after the clinical appeals option, it will be the 5th item in the list
    - Link destination: www.va.gov/decision-reviews/family-caregiver-program-reviews/
    - Notes: Match label to H1
  - Move link to "After you request a review page" 
    - Placement description: Remove link from the "Request review" section, and add it to the "More resources" section as the 4th option in the section
    - Link destination: 
    - Notes:  Match label to H1

**Left nav link order**- labels below not exact, for reference only
- Request a decision review
  - Supplemental claim 
  - Higher-level review 
  - Board appeal 
  - Clinical appeal 
  - Family caregiver claims
  - Contested claims
  - Insurance claims
  - Fiduciary claims   
- Manage your decision reviews and appeals
  - Check your decision review status
  - Manage your legacy VA appeal
- More information and resources
  - Choosing a decision review option
  - FAQa
  - Get help
  - After you request...



## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
 |  | 
 




<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info

6/12/23 - discussion w/Danielle
- Initial request from VHA was to create an entire hub of health care and medical decision reviews; We have communicated that we cannot create a second decision reviews hub that repeats all of the information and need to bring them together.  The original DR hub was very much focused on VBA and did not include feedback from VHA. 
- For this initial phase our goal is to incorporate the health information into the existing decision reviews hub with minimal structural changes to the existing DR hub
- Decisions
  - Create a new medical decision review option page that will be equivalent to the supplemental claim/high-level review/board appeal pages - it's a 4th type of DR
  - Add a page about Caregiver decision reviews similar to the life insurance, contested claims, insurance pages - it is another special case that utilizes the 4 options
    - If time allows, the existing LI, contested, and fiduciary pages will be simplified by removing the content that is duplicative to the main 3 DR options, and instead just link to them
  - Update the "Choosing a decision reivew option" R&S page to focus on 1) is it a benefit or a health care claim  2) if benefit, these are your options  3) if health care link, is it health benefits or medical
