# IA Design for Pension Deactivation
**STATUS: In Progress**

**Team:** Benefits and claims: Non-Disability Benefits

**IA Request:** [[Link to Sitewide Content and IA intake request](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/62445)]

**On this page:**
- [User/page flows](#flows)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Search best bets](#search)


## <a name="flows"></a>User/page flows <br>
Up-to-date user flows can be found on mural here: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689262813123/cb880912d3f71ef79be0d63d0e61e306d1e6ae31?wid=0-1691181001222


## <a name="nav"></a>Entry point removal <br>
We are REMOVING entry points for this project.

1. **Main Nav - Pension** - Remove
  - Link label: Apply now for Veterans Pension
  - Link destination: https://www.va.gov/pension/application/527EZ/introduction
   ![Pension main nav](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/e07c669d-da37-4634-838b-db3722d89cc1)


2. **Left Nav - Pension** - Remove
  - Link label: Apply now
  - Link destination: https://www.va.gov/pension/application/527EZ/introduction
   ![Pension Left Nav](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/bf0ce511-2f64-4bf8-829d-2081aca61acc)


3. **Pension Hub Page** - Remove
  - Link label: Apply for Veterans Pension online (VA Form 21P-527EZ)
  - Link destination: https://www.va.gov/pension/application/527EZ/introduction
   ![Pension hub page](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/0a2797e1-1e3d-4859-b76c-c811f94a491c)

Note: The content team will also remove links to the online form from the 'How to Apply' pension page and the 'About Form 527EZ' page
   ![How to apply](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/92181033-4894-4a69-b4c8-e190766dff21)

   ![About form 527ez](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/d402909e-4acc-4058-aab8-d3fd1b776989)



## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  



Current URL | Redirect to | Notes
--- | --- | ---
http://va.gov/disability/file-disability-claim-form-21-526ez/introduction | https://www.va.gov/pension/how-to-apply/ | Redirects will need to be temporary (302), not permanent (301). The 302 code tells search engines that the redirect isn't permanent and the URL will come back at a future date.  Some search engines will still index the old page, but the redirect will land them in the right spot.


## <a name="search"></a>Search result best bets <br>
Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.

![Search result showing online form link as top result for keywords in table below](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/6c2a371a-a744-4806-a7e0-efb00dcdc7c1)

![search.gov result for online form line](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/09e32bf9-eeb8-4346-add3-6547db25fac0)

| Keyword        | Action needed                                                                                                                                              |   |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| 21p527ez       | Add this keyword to https://www.va.gov/find-forms/about-form-21p-527ez/ instead, and remove from https://www.va.gov/pension/application/527EZ/introduction |   |
| Form 21p 527ez | Add this keyword to https://www.va.gov/find-forms/about-form-21p-527ez/ instead, and remove from https://www.va.gov/pension/application/527EZ/introduction |   |

<hr>
<hr>
