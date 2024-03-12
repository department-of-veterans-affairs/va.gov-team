# IA Design for Burial Allowance Deactivation
**STATUS: Completed**

3/12/24 - this form was not deactivated and so updates to the MVP launch will be tracked in another IA spec so as to leave this one as a record for future reference

**Team:** Benefits and claims: Non-Disability Benefits

**IA Request:** [Link to Sitewide Request](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/62448)

**On this page:**
- [User/page flows](#flows)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Search best bets](#search)


## <a name="flows"></a>User/page flows <br>
Up-to-date user flows can be found on mural here: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689262813123/cb880912d3f71ef79be0d63d0e61e306d1e6ae31?wid=0-1691433635538


## <a name="nav"></a>Entry point removal <br>
We are REMOVING entry points for this project.

1. **Left Nav - Burial Allowance Application** - Remove
  - Link label: Apply now
  - Link destination: https://www.va.gov/burials-and-memorials/application/530/introduction/
![Burial Apply Now link in left nav](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/28c4821f-83a6-4910-8d01-83568a566498)


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  



Current URL | Redirect to | Notes
--- | --- | ---
https://www.va.gov/burials-and-memorials/application/530/introduction | https://www.va.gov/burials-memorials/veterans-burial-allowance/ | Redirects will need to be temporary (302), not permanent (301). The 302 code tells search engines that the redirect isn't permanent and the URL will come back at a future date.  Some search engines will still index the old page, but the redirect will land them in the right spot.

## <a name="search"></a>Search result best bets <br>
Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.
![Search result that brings up the burial allowance online form](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/38a9ed81-897e-4678-a7e1-725fff344221)

![best bet keyword results for burials allowance shows 12 keywords to change](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/4d663ea5-4a57-4527-8465-6a5df719b1ba)

For all of the following keywords, add the keyword to https://www.va.gov/burials-memorials/veterans-burial-allowance/, and remove from https://www.va.gov/burials-and-memorials/application/530/introduction

| Keyword           |
|-------------------|
| 21p               |
| 21p-530           |
| 21p-530ez         |
| 530               |
| 530ez             |
| burial benefits   |
| form 21p-530      |
| form 21p-530ez    |
| va 21p-530        |
| va 21p-530ez      |
| va form 21p-530   |
| va form 21p-530ez |

<hr>
<hr>
