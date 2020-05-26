# IA Review and Recommendations

**STATUS:** COMPLETE
- 4/21/2020 - Modified to accomodate stakeholder request for entry points to DR content in every benefit hub as well as moving the legacy appeal board appeal page into the DR hub. 
- 5/26/2020 - Modified for new proposed entry points 

**Team:** Public Websites

**Product/Featue:** IA improvements for Decision Reviews content

**Background/Context:**  The AMA is in full effect as of Feb 19, 2020.  The team wants to improve the findability of Decision Reviews content, as well as the UX for navigating the current content.  The legacy appeals process will also need to be incorporated. 

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/6920

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach**
- This goals of this solution are to
  - Bring both the legacy appeal and the new Decision Review process content together in one content area
  - Ensure entry points to this content are provided where applicable in the benefit section of VA.gov
  - Improve the navigation of the Decision Reviews area
- The approach to meet these goals, is to follow the hub and spoke approach used in our benefit hubs.  This requires the content of the primary Decision Reviews page be converted into the standard benefit hub template, content is arranged into Get/Manage type spokes and left hand navigation is added into the content area for easier navigation. 


**Visual site map**  

![image](https://user-images.githubusercontent.com/20994159/77668530-83a6c400-6f51-11ea-9d1a-61a716010c70.png)



**URLs & Breadcrumbs** <br>
*Please connect with your writer/editor on the proper verbiage and capitalization of the last element of the breadcrumb*

Page | New URL | New Breadcrumb | Notes
--- | --- | --- | ---
[Manage a legacy appeal](https://www.va.gov/disability/file-an-appeal/) | www.va.gov/decision-reviews/legacy-appeals | Home > VA decision reviews and appeals > Manage a legacy VA appeal   | - This existing page will be moved from disability to Decision Reviews content area <br> - The URL and breadcrumb will change as noted <br> - A redirect will need to be created for the URL change. See redirect info below. <br> The left nav on this page will need to reflect the new Decision Review hub left nav. 
[Legacy request a priority review](https://www.va.gov/disability/file-an-appeal/request-priority-review/) |  www.va.gov/decision-reviews/legacy-appeals/priority-review | Home > VA decision reviews and appeals > Manage a legacy VA appeal > Request a priority review  | - This existing page will be moved from disability to Decision Reviews content area <br> - The URL and breadcrumb will change as noted <br> - A redirect will need to be created for the URL change. See redirect info below. <br> The left nav on this page will need to reflect the new Decision Review hub left nav. 
[Legacy Board of Veterans Appeals hearings](https://www.va.gov/disability/file-an-appeal/board-of-veterans-appeals/) | | | - This is an existing static page that will either be moved or retired...**TBD**
[Supplemental claim static page](https://www.va.gov/decision-reviews/supplemental-claim/) | No changes to URL | Home > VA decision reviews and appeals > Supplemental claims | - This is an existing static page and is only a change to the H1 and Breadcrumb to remove the action word "Request".  This will make it consistent with the other review type pages, clarify that this page is not where the action is executed, and reserves the action word for the future when the actual form comes online.
[Board appeals static page](https://www.va.gov/decision-reviews/board-appeal/) | No changes to URL | Home > VA decision reviews and appeals > Board appeals | - This is an existing static page and is only a change to the H1 and Breadcrumb to remove the action word "Request".  This will make it consistent with the other review type pages, clarify that this page is not where the action is executed, and reserves the action word for the future when the actual form comes online.


<hr>

### Navigation Changes and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

*Please connect with your writer/editor on the proper labels and capitalization of these elements, copy below is provided for IA direction only*

**Navigational Elements**<br>

- The hub page hub should contain the following 3 spokes and links:
  - Request a decision review
    - Supplemental claims
    - Higher-level reviews
    - Board appeals
    - After you request a review
    - Contested claims
    - Insurance claims
    - Fiduciary claims
  - Manage your decision reviews and appeals
    - Check  your status
    - Manage your legacy disability appeal
  - More information and resources
    - Frequently asked questions
    - Get help with your review request
- A left hand navigation element will need to be added to all level 2 content pages under www.va.gov/decision-reviews/
- The left hand nav structure and order should be:
  - Request
    - Supplemental claims
    - Higher-level reviews
      - Request a higher-level review
    - Board appeals
      - Veterans law judge hearings
      - After a board appeal decision
    - After you request a review
    - Contested claims
    - Insurance claims
    - Fiduciary claims
  - Manage
    - Check  your status
    - Manage your legacy disability appeal
      - Request a priority review
  - More 
    - Frequently asked questions
    - Get help with your review request

**Entry Points** <br>
*Priority: Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

Priority | Location | Link to | Description
--- | --- | --- | ---
Must | Health care left nav | https://www.va.gov/decision-reviews/ | - Within "Manage" spoke, place below "Check appeal status" <br> - Suggested label:  Request decision review
Must | [Health care > After you apply page](https://www.va.gov/health-care/after-you-apply/) | Decision reviews and claim status tool | - Within the "Other questions..." section, there are **two** accordions - what to do if application isn't approved and what if I will be removed - this content should be updated to reflect the new Decision review labeling and language and provide a link to the Decision review pages as well as the claim status tool. 
Must | Disability top nav flyout | https://www.va.gov/decision-reviews/ | - Replace bottom "File an appeal" option in the "manage" column <br> - Suggested label: Decision reviews and appeals  (This does not follow standard labeling for this section, but allows a softer transition from appeals terminology to decision reviews for now)
Must | [Disability hub page](https://www.va.gov/disability/) | https://www.va.gov/decision-reviews/ | - Replace the existing "Manage a legacy VA appeal" link and teaser text <br> - Link to main decision review page in place of legacy <br> - Suggested link label: Request a decision review or manage your legacy appeal <br> - Teaser text to be provided by PW team
Must | Disability left nav  | https://www.va.gov/decision-reviews/ | - Replace the existing "Manage a legacy VA appeal" link, should appear after "File for increased disability" <br> - Suggested link label: Request Decision review 
Consider | [Disability > DIC page] Decision review page and Claim status tool | - For consistency across hubs, consider adding an "After you apply" content section that includes links to claim status and decision reviews
Must | [Education hub page](https://www.va.gov/education/) | https://www.va.gov/decision-reviews/ | - Within the "Manage" spoke, place as 7th item (after the check appeal status option) <br> - Suggested link label: Request a decision review or manage your legacy appeal <br> - Teaser text to be provided by PW team
Must | Education left nav | https://www.va.gov/decision-reviews/ | - Within the "Manage" spoke, place as 7th item (after the check appeal status option) <br> - Suggested link label: Request decision review 
Must | [Education > After you apply page](https://www.va.gov/education/after-you-apply/) | https://www.va.gov/decision-reviews/ | - Add link and text under "What happens after I apply" section.
Must | [Careers hub page](https://www.va.gov/careers-employment/) | https://www.va.gov/decision-reviews/ | - Revise "Manage" section heading to "Manage your career and benefits" and place a link and teaser text as the 7th item (after Linked In options) <br> - Suggested link label: Request a decision review or manage your legacy appeal <br> - Teaser text to be provided by PW team
Consider | [Careers hub page](https://www.va.gov/careers-employment/) | https://www.va.gov/claim-or-appeal-status/ | - Add a link to the claim/appeal status tool as last option in the "Manage" spoke below decision review <br> - Suggested link label: Check your claim or apeal status <br> - Teaser text to be provided by PW team
Must | Careers left nav | https://www.va.gov/decision-reviews/ | - Within the "Manage" spoke, place as 7th item (after the Linked In option) <br> - Suggested link label: Request decision review 
Consider | Careers left nav | https://www.va.gov/claim-or-appeal-status/ | - Within the "Manage" spoke, place as last item below decision review <br> - Suggested link label: Check claim or appeal status 
Must | [Careers > How to apply page](https://www.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/) | https://www.va.gov/decision-reviews/ | - Add text and a link to decision reviews under the "What happens after I apply" section. 
Consider | [Careers > How to apply page](https://www.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/) | https://www.va.gov/claim-or-appeal-status/| - Add text and a link to claim and appeal status tool under the "What happens after I apply" section to be consistent with other similar content. 
Consider | Pension top nav| https://www.va.gov/decision-reviews/ | - If Pension and Disability are most common appeals, consider adding link to top nav consistent with disbility, as last option in "manage" column <br> - Suggested link label:  Decision reviews and appeals
Must | [Pension hub page](https://www.va.gov/pension/) | https://www.va.gov/decision-reviews/ | - Add link to "Manage" spoke as 2nd option after claim status <br> - Suggested link label: Request a decision review or manage your legacy appeal <br> - Teaser text to be provided by PW team
Must | Pension left nav | https://www.va.gov/decision-reviews/ | - Add link to "Manage" spoke as 2nd item after claim status option <br> - Suggested link label: Request decision review
Must | [Pension > How to apply page](https://www.va.gov/pension/how-to-apply) | Decision reviews and claim status tool |  - To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool.
Consider | [Pension > Aid & Attendance page](https://www.va.gov/pension/aid-attendance-housebound) | Decision reviews and claim status tool | - To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool. 
Consider | [Pension > Survivors pension page](https://www.va.gov/pension/survivors-pension) | Decision reviews and claim status tool | - To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool.
Must | [Housing hub page](https://www.va.gov/housing-assistance/) | https://www.va.gov/decision-reviews/ | - This hub page is divided between 2 related benefits, a link to the decision review content should be added to both "spokes" <br> - In the Home Loans spoke, add a link to decision reviews immediately after "Check your appeal status"  <br> - In the Housing Assistance spoke, add a link to decision reviews immedately after "Check your grant claim status" <br> - Sugggested label for both links:  Request a decision review or manage your legacy appeal <br> - Teaser text to be provided by PW team
Must | Housing left nav | https://www.va.gov/decision-reviews/ | - Add a link to decision reviews in both the Home Loans spoke and the Housing Grants spoke <br> - In the Home Loans spoke, add a link to decision reviews immediately after "Check appeal status"  <br> - In the Housing Assistance spoke, add a link to decision reviews immedately after "Check appeal status" <br> - Sugggested label for both links:  Request decision review 
Consider | [Housing > Home loans > How to apply page](https://www.va.gov/housing-assistance/home-loans/how-to-apply/) | Decision reviews and claim status tool| To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool.
Consider | [Housing > Housing grants > How to apply page](https://www.va.gov/housing-assistance/disability-housing-grants/how-to-apply/) | Decision reviews and claim status tool| To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool.
Must | [Burials > Pre-need > After you apply page](https://www.va.gov/burials-memorials/pre-need-eligibility/after-you-apply/) | https://www.va.gov/claim-or-appeal-status/ | To be consistent with other benefits, add link to the claim status too to the "If you don't qualify" section
Should | [Burials > Burial allowance page](https://www.va.gov/burials-memorials/veterans-burial-allowance/) | https://www.va.gov/decision-reviews/ | To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool.
Must | [Life insurance hub page](https://www.va.gov/life-insurance/) | https://www.va.gov/decision-reviews/ | - Add link to "Manage" spoke as 5TH option after claim status <br> - Suggested link label: Request a decision review or manage your legacy appeal <br> - Teaser text to be provided by PW team
Must | Life insurance left nav | https://www.va.gov/decision-reviews/ | https://www.va.gov/decision-reviews/ | - Add link to "Manage" spoke as 5TH option after claim status <br> - Suggested link label: Request decision review <br> - Teaser text to be provided by PW team
Consider | Life insurance options detail pages (several) | Decision review content and claim status tool | To be consistent with other benefits, create an "after I apply" section that includes links to the decision review content and the claim status tool.

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- Redirects will be needed for the legacy appeals pages that are either moving from Disability to the Decision Reviews hub or being retired.
  - https://www.va.gov/disability/file-an-appeal/
  - https://www.va.gov/disability/file-an-appeal/request-priority-review/
  - https://www.va.gov/disability/file-an-appeal/board-of-veterans-appeals/


Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. <br>
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*

<hr>

### Additional Notes/Recommendations

**4/20/2020 - Stakeholder requests**
- Stakeholders requested entry points to DR content in each of the benefit hubs - https://github.com/department-of-veterans-affairs/va.gov-team/issues/8094
- Stakeholders indicated that the legacy board appeal page should be maintained

**4/9/2020 - Staging Review**
- Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/7521
- left nav not appearing on several pages, my access to staging on CAG not working...will review when left nav is corrected


