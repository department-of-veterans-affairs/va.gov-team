# Secondary Research Synthesis

## Past Research Studies relative to Header/Footer

- [06-2023 Health Wayfinding](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-06-health-wayfinding-study) and [Next Steps documentation](https://dvagov-my.sharepoint.com/:w:/r/personal/robyn_singleton_va_gov/Documents/Docs/2023%20Wayfinding%20research/230821_Health%20Wayfinding%20Research%20Next%20Steps.docx?d=w28e996fbc58748e0963a6a84d34f5011&csf=1&web=1&e=cYFDlf)
- [04-2023 Landing Page User Research Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research/2023-03-Landing-Page-User-Research/2023-04-landing-page-readout.md)
- [04-2021 Homepage Wayfinding](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/research/202104-baseline-wayfinding) 
- [10-2022 VA.gov Home Page Redesign ROUND 2 Usability Testing](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/184)

### Relative Insights that may impact design:

1. **Finding:** Both the [Health Wayfinding Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-06-health-wayfinding-study) and the [Landing Page User Research Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research/2023-03-Landing-Page-User-Research/2023-04-landing-page-readout.md) observed that participants using mobile devices or mobile prototypes struggled or were unable to locate the My Health_e_Vet tab that linked users to the MHV landing page (same on desktop during Landing Page study). In the current experience, the My Health_e_Vet tab and My VA tab are housed in the Authenticated Menu, thereby obscuring them from view unless this dropdown is enabled by users.

![a screenshot of prototype tested](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/research/images/MHV-study-auth-menu.PNG)


**P Quote:**"Let's click on the menu and see what options it gives us. It should give me overview of everything that's available."

**Possible solution:** Move My VA and MHV to main mobile menu.  MHV would appear for authenticated users only, as it does today.

**Questions for IA:**
 Difference in "Sign In" and "My VA", both direct to same sign but are the pages after sign in different or same?

Should My VA and MHV appear for unauthenticated users and if not signed in, will prompt them to login?

 Desktop menu: My VA and MHV are going away from nav, initial solution was to move into Auth menu but that is no longer advisable based on above.
 - Thoughts on moving MHV link to top of Healthcare megamenu? (not sure I like this)
 - What if the "Sign In" on desktop behaved to mirror mobile menu so it would be "Menu"
 - definitely a "mobile first" design consideration and existing mental models
 - modernizes VA
 - contributes to space needs based on increased font sizing for accessibility

2. During the [04-2021 Homepage Wayfinding](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/research/202104-baseline-wayfinding) study, some users struggled with readability and font sizes at 16px.

The new Federal H/F design is addressing this with a standard 19px

3. In the [10-2022 VA.gov Home Page Redesign ROUND 2 Usability Testing](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/184)a potential accessibility issue was discovered in which  **buttons on the far right side of the home page were missed while using a screen magnifier on a computer**. One participant (using ZoomText on a computer NOT a screen reader) didn't notice the _Veterans Crisis Line_ button at the top right of the home page, as well as the _Feedback_ button on the bottom right of other VA.gov pages. His magnified view showed only the left half of the page, and without any visual indication of more to the right, he assumed there wasn't anything there.

In the new Fed H/F design, placement is in a different location and should be included in usability testing to consider if this is a persistent issue.

### Takeaways to consider for Primary Research:

1. Follow up for Insight #1, do users still struggle finding MHV and MyVA
2. Task Flow Analysis of Nav IA
3. Mega Menu IA may not be impacted (out of scope)
4. Capture current analytics as a baseline measurement for header and footer and especially include VCL as reduction in clicks may result in a stop failure, in design the VCL will be a lower tab order
5. Must test with screen readers, assistive technology
  a. Can they locate VCL, MyVA, MHV, etc
6. Recruiting for screen readers was difficult during [10-2022 VA.gov Home Page Redesign ROUND 2 Usability Testing](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/184) because they were not able to use their assistive tech on the mobile prototype, participants stating they normally use desktops when they absolutely need to use a screen reader.
  a. Possible solution: mobile and desktop prototypes for accessible accommodations as done in the [06-2023 Health Wayfinding](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-06-health-wayfinding-study) study.
7. How do we measure sentiment on USA logo, VA Seal (missing "VA" lockup), USA and VA Seal lockup in footer?
