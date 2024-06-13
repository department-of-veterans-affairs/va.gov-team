# IA Design for CHAMPVA Online Form
**STATUS: Early draft**

**Team:** [IVC forms
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/integrated-health/README.md)
**IA Request:** [70698](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=46249175)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
See most up-to-date user flow in mural [here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702677961676/13148d7aadd948a857eaa8fe5e04f6a9b09c3f9e?sender=ua67f17f1c416a96ea04d2476). 
![champva user flows](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/cbca1cec-9f66-4bb5-9247-792bf308077a)


## <a name="map"></a>Page structure<br>
We intend for the CHAMPVA form to live in the health section of the new family member hub, but that initiative is still being finalized.
![champva page structure](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/e1f9c07d-d777-40ce-9cc4-4a1ff0219f58)


## <a name="url"></a>URLs and breadcrumbs

**1) NEW CHAMPVA online form**
- URL: va.gov/[TBDfamilyhub]/champva/apply-form-10-10d
- Breadcrumb: Home > [TBDfamilyhub] > CHAMPVA benefits > [H1 TBD]
- Notes: The exact url structure of the family member hub is still TBD, so these URLs are as well. But the above is an example to illustrate what it might look like.


## <a name="nav"></a>Entry points <br>
*A list of new internal entry points, as well as changes to any existing entry points. This list focuses on the primary entry points and does not include all possible crosslinking opportunities. Consider whether a Search Best Bet might be useful if this product enhances a Top Task for veterans.*


1. **MODIFY [CHAMPVA benefits static page](https://www.va.gov/health-care/family-caregiver-benefits/champva/)**
  - Placement description: we’ll need to add a link to the new form from this page. TBD whether we will need to add a link in the new family member left nav or not.
  - Link label: TBD by content
  - Link destination: The form URL
    
![champva benefits static page](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/514f4385-df84-4833-8c82-3d44994b302e)


2. **MODIFY [healthcare hub](https://www.va.gov/health-care/) --> GET section**
  - Placement description: TBD whether this belongs here, but probably does
  - Link label: TBD by content, but should match H1 unless additional info needed for screenreaders on health hub page
  - Link destination: TBD → do we want to link to the CHAMPVA form, or the CHAMPVA benefits static page? Or the health section of family member hub? Or the family member hub page?
 ![health hub get section](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/6325ebe4-83e2-41be-8bea-cf1057a90f1c)

3. **MODIFY [CHAMPVA legacy pages](https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/index.asp)**
  - Note: Laura anticipates that this content will have migrated to modernized site, so we may not need to crosslink or update this. But we might, so just putting it here for now.
![champva legacy pages](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/71b6ad55-39e5-4ca1-bad9-fd3dd92a6a4d)




## <a name="redirects"></a>Redirects <br>
There will likely be a redirect of these 2 pages, but the champva form wont need a redirect since it doesn't exist digitally yet
- https://www.va.gov/health-care/family-caregiver-benefits/champva/
- https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-04.pdf#

These are very TBD based on the migration work


## <a name="bestbets"></a>Best Bets<br>

| URL                                                               | Title                                                            | Description                                                                                                                                                                                 | Keywords                                               | Notes                                                                                                                           |
|-------------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| https://www.va.gov/find-forms/about-form-10-10d/                  | Apply for CHAMPVA Benefits (VA Form 10-10d)                      | If you’re the spouse or child of a Veteran with disabilities, or the surviving spouse or child of a Veteran who has died, use VA Form 10-10d to apply for health insurance through CHAMPVA. | 10-10d, form 10-10d, va 10-10d, va form 10-10d         | Should we change this to the new online form, or remove it entirely and just keep the one set up for the CHAMPVA benefits page? |
| https://www.va.gov/find-forms/about-form-10-7959c/                | Reporting Changes for Your 10-10d Application (VA Form 10-7959c) | Use VA Form 10-7959c when you are applying for CHAMPVA and need to declare changes as part of your VA Form 10-10d application.                                                              | 10-7959c, form 10-7959c, va 10-7959c, va form 10-7959c | I’m guessing we don’t need to change this best bet, but perhaps we should make sure to link to this from the CHAMPVA page?      |
| https://www.va.gov/health-care/family-caregiver-benefits/champva/ | CHAMPVA Benefits                                                 | CHAMPVA benefits cover the cost of health care for the spouse, surviving spouse, or child of a Veteran who has disabilities or who is deceased.                                             | champ va                                               | Def keep this one                                                                                                               |

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

Not sure yet, asked the team and will update here.

**[Which static page has the widget, ie the main entry point?]**




<hr>
<hr>
