# IA Design for CHAMPVA Claim Form 7959a
**STATUS: Draft**

**Team:** IVC Forms
**IA Request:** None yet, but here is the [collab cycle ticket](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1?filterQuery=ohi&pane=issue&itemId=62895038)

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
![Screenshot 2024-05-30 at 12 17 39 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/27fa43d5-6e75-47cb-8a53-1d8fcf6c38aa)


## <a name="map"></a>Page structure<br>
The CHAMPVA claim form will live under 'healthcare and disability', NOT under CHAMPVA. This is because it's a manage task, rather than a 'get' task, and our V1 of the family member hub will only include get tasks. It will be linked to from content pages (both CHAMPVA general content and the 'Do I need to file a claim' R+S page). 

![Screenshot 2024-05-29 at 1 55 17 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/9df3bfb8-810b-4674-8ea1-c53742734ab2)



## <a name="url"></a>URLs and breadcrumbs

**1) ADD NEW CHAMPVA claim form**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/file-champva-claim-10-7959a/
- Breadcrumb: Va.gov home > Family and caregiver benefits > [Health and disability H1 TBD by content] > [10-7959a form H1]
- Mobile breadcrumb (throughout the form, starting on /introduction): <[Health and disability H1 TBD by content]
- NOTE that the H1 for the health and disability subhub is now being debated (5/30)



## <a name="nav"></a>Entry points <br>
On 5/29 we confirmed with Mikki and Danielle that we WILL NOT be adding this form to the left nav for the launch. This is because the strategy for the family member hub left nav is to only include pages related to getting benefits. The ultimate destination for the claim form is within a cohesive authenticated experience (ex: think about the portal you use for health insurance -- filing an out-of-network claim is in that portal, not the general unauth website for the insurer). However, if we determine from 1) analytics or 2) feedback from users or the call center that users are unable to find the claim form, we can reconsider left nav placement.
    
1.**Add to CHAMPVA static drupal page**
  - Placement description: TBD by content
  - Link label: [TBD based on H1]
  - Link destination: va.gov/family-and-caregiver-benefits/health-and-disability/file-champva-claim-10-7959a/

2.**Add to 'Do I need to file a claim' R+S page**
  - Placement description: TBD by content
  - Link label: [TBD based on H1]
  - Link destination: va.gov/family-and-caregiver-benefits/health-and-disability/champva/file-claim-10-7959a/

3. **MODIFY Find-a-Form page**
  - Placement description: we’ll need to add a link to the new online form from this page.
  - Link label: TBD by content
  - Link destination: va.gov/family-and-caregiver-benefits/health-and-disability/file-champva-claim-10-7959a/

![Screenshot 2024-05-20 at 11 16 53 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/dd64f177-31d5-4466-ad21-7b3bdc5e2021)




## <a name="redirects"></a>Redirects <br>
No redirects because this online form does not exist yet


## <a name="bestbets"></a>Best Bets<br>

| URL                                                               | Title                                                            | Description                                                                                                                                                                                 | Keywords                                               | Notes                                                                                                                           |
|-------------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| https://www.va.gov/find-forms/about-form-10-7959a/                |  |                                                               | 10-7959a, form 10-7959a, va 10-7959a, va form 10-7959a | Add best bet      |

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

Yes, team is planning staged rollout.

**[Which static page has the widget, ie the main entry point?]**




<hr>
<hr>
