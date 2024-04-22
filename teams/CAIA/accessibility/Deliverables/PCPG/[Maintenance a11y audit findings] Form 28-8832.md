# [Maintenance a11y audit findings]: CH31 PCPG From 28-8832
[Staging link](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction) <br>
Slack channel: benefits-ce-non_disability_exp  <br>

## Product team
Product Manager: Laura Steele <br>
Lead Engineer: Thomas Blackwell <br>
Lead Designer: Fiorella Geedi <br>

## Auditor(s): Kate Murphy, Jamie Klenetsky Fay, Sarah Koomson

## Testing Coverage:
#### User profile used: (add staging email used)

### Automated
 * [x] Run axe checks on every page or unique state (required)
 * [x] Run WAVE on every page if time allows. WAVE is more visual than axe or axe-coconut, but offers some excellent ways to identify nested headings and HTML5 landmark tags.

### Manual
 * [x] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
 * [x] Color blindness checks
 * [x] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
 * [x] Keyboard navigation
 
### Screen Reader
 * [x] Windows, JAWS
      * [x] Chrome
      * [ ] Firefox
      * [ ] Microsoft Edge
 * [ ] Mac, VoiceOver
     * [ ] Chrome
     * [ ] Safari
 * [ ] Mobile
     * [ ] Android (provide device & browser details)
     * [ ] iPhone (provide device & browser details)

## Audit worksheet 
_DELETE THIS before finalizing your draft and sharing it with the product team._ <br>
[Findings worksheet](https://docs.google.com/spreadsheets/d/1SCwKFlX57EMQ6DfP_ZkJ1YamNUtsaKbJBF2YhYh3H9E/edit?usp=sharing) -- **once finalized import to table below**

## Findings

| **Findings** | **Severity** | **Platform Standard** | **Page URL** | **Recommenations** | **Steps to recreate** |
|:------------:|:------------:|:---------------------:|:------------:|:------------------:|:---------------------:|
|OMB Control # is expired|    Minor                   |     |[introduction progress map](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction)|      ensure submitting after updates to form are made              |                       |
|Your form has a wizard| | | [introduction wizard](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction) | depreciate the wizard when updating the form |
|In-progress applications do not appear under 'My VA'    |   Critical | Content organization and/or categorization isn't clear or actionable.|[introduction wizard](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction)| Review and ensure in-progress work can be found on the Veteran's dashboard. | • While logged in start entering data for the form. <br>  • Opt to leave and come back <br> • Navigate to 'My VA' and review in-progress forms                   |
|(*if known) is not a design system content pattern|Minor|Design components or patterns don't align with Design System guidelines.|[claiment information](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/claimant-information)|"if known" is not a platform standard. Recommend to provide more hint text on why it's helpful to the Veteran.  Can follow guidance from the [design system page](https://design.va.gov/patterns/ask-users-for/social-security-number).|                       |
|Form number on PDF and Digital vary|              |                       |[introduction progress map](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction)|                    |                       |
|Updates on paper form not aligned with Digital experience|              |                       |              |Review differences and update.<br> VA PDF Form [25-8832] has been updated to include: <br> • Branch of Service <br> • Component <br> • Character of Discharge ,br. • A question to confirm if applicant is attending school/training facility <br> This was found using  https://www.reginfo.gov/public/do/PRASearch and searching for 2900-0265 (OMP control #)|                       |
|Applicant/Veteran confusion|              |                       |              |Recomend when adding in new steps to review the flow of this, and make sure when asking if the applicant is the Veteran or how they are affiliated with the veteran is clear and logical|                   

Please reach out if you have any questions or would like to review this further. As your team develops new pages and adjusts the flow we would be happy to work with your team during design reviews and any other steps along the way of your development. Thank you and great work.
