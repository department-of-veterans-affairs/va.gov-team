# IA Design for Burial Allowance
**STATUS: In progress**

**Description:**
The burial allowance online applications is out of date and so it is being updated to match the PDF. This is an MVP version.

**Team:** Benefits and Claims | Lifestage Benefits Crew | Non-Disability Experience

**IA Request:** [Link to Sitewide Content and IA intake request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68984)

**On this page:**
- [User/page flows](#flows)
- Page structure
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
*Illustration and/or description of how users will flow through the experience. The user flow helps illustrate how visitors will navigate to and through your product/feature, ensures all types of visitors and scenarios are accounted for, and aids in identifying all content and messaging needs.*

[Team's Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1691512530884/67e3bc6677c8d17cf6fc8848319a6e40ebced1af?wid=0-1694615398728&sender=u79ee90295fdb006d7f463212)

## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


**1) H1 of page - Existing**
- URL: https://www.va.gov/burials-memorials/veterans-burial-allowance/apply-for-allowance-form-21p-530ez
- Breadcrumb: VA.gov home > Burials and memorials > Veterans burial allowance and transportation benefits > H1 of page
- Notes: We are updating the form canonical URL since it doesn't follow the latest VA.gov standards. There's already a [redirect ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88067) to ensure the old URL goes to the new one. Old URL was `https://www.va.gov/burials-and-memorials/application/530`

## <a name="nav"></a>Entry points <br>
*A list of new internal entry points, as well as changes to any existing entry points. This list focuses on the primary entry points and does not include all possible crosslinking opportunities. Consider whether a Search Best Bet might be useful if this product enhances a Top Task for veterans.*


1. **[About VA Form 21P-530EZ](https://www.va.gov/find-forms/about-form-21p-530ez/)** - Add
  - Placement description: Below "Downloadable PDF" on the about VA form as well as in search results, attaching an example below
  - Link label: TBD by Sitewide Content
  - Link destination: https://www.va.gov/burials-memorials/veterans-burial-allowance/apply-for-allowance-form-21p-530ez
  - Notes: Noting that I've updated the link destination with the new URL even though it hasn't been updated in prod yet.

![Screenshot 2024-03-12 at 3 20 28 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/9604427b-8449-474b-89a0-738e4e4e87fd)


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  

Since this page wasn't deactivated, no temporary redirects were implemented so we don't have to remove any.

## <a name="bestbets"></a>Best Bets<br>
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.*

Best bets were created for `https://www.va.gov/burials-memorials/veterans-burial-allowance/` as part of the deactivation plan. Since the form was deactivated, we can update the best bets now so that the online application comes up as the top result rather than the 'how to apply' page.

 Keyword           |
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

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

**[Which static page has the widget, ie the main entry point?]**

MVP is being launched incrementally. Aliyah is working with the team on the widget.


<hr>
<hr>
