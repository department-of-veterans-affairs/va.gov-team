# IA Design for Request Medallion form 40-1330M
**STATUS: In review**

**Team:** Memorials self service
OCTO product owner: Matt Self
Product name: Apply for a medallion in a private cemetery
Product manager: Catherine Hughes
Slack channel: #sitewide-content-accessibility-ia
designer: Charlie Barron

**IA Request:** [85541](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85541)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
Most up to date user flow can be found on [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723072266513/f00e34470a84987bd4063522e22b89b29b33b0fc?sender=ua67f17f1c416a96ea04d2476).
![Screenshot 2024-08-19 at 5 30 09 PM](https://github.com/user-attachments/assets/8b9258ff-3ae9-4835-9d39-74951a2ddc5d)


## <a name="map"></a>Page structure<br>
The new form will be a child page of [headstones, markers, and medallions](https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/). 
![Screenshot 2024-08-19 at 5 30 22 PM](https://github.com/user-attachments/assets/130dbda0-761a-4a91-abc7-0702924b3aac)


## <a name="url"></a>URLs and breadcrumbs

**1) Request medallion form - New**
- URL: va.gov/burials-memorials/memorial-items/headstones-markers-medallions/request-medallion-form-40-1330m
- Breadcrumb: Va.gov home > Burials and memorials > Memorial items> Veterans headstones, markers, medallions > [Form H1 TBD]
- Notes: final URL is pending the H1 decision by the content team

**1) Cemetery official signature - request medallion form - New**
- URL: va.gov/burials-memorials/memorial-items/headstones-markers-medallions/**cemetery-confirmation**-medallion-form-40-1330m/
- Breadcrumb: NO BREADCRUMBS on this part of the form.
- Developer notes: Make sure to noindex this page, so that it doesn't show up in any search results. We want to make sure veterans/family don't accidentally land on this page. ALSO, if you use parameters to display a specific application, make sure the parameters do not include PII (don't use social security number or anything like that in the parameter)


## <a name="nav"></a>Entry points <br>

### Primary entry point

1. **[Headstones, markers, medallions](https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/)** - Modify
  - Placement description: TBD by content
  - Link label: TBD by content
  - Link destination: va.gov/burials-memorials/memorial-items/headstones-markers-medallions/request-medallion-form-40-1330m

![Screenshot 2024-08-19 at 5 32 49 PM](https://github.com/user-attachments/assets/8442bd9f-89a2-441e-a584-0f9dceaecfd4)

### Secondary entry point
1. **VaNotify email to cemetery official**
  - Placement description: Under the 'how do I apply' section, update the application instructions, adding a sign-in widget for the new form.
  - Link label: TBD by content
  - Link destination: va.gov/burials-memorials/memorial-items/headstones-markers-medallions/**cemetery-confirmation**-medallion-form-40-1330m/
![Screenshot 2024-09-26 at 2 32 59 PM](https://github.com/user-attachments/assets/c3c3f608-13c9-4f2e-8a9b-a6f35491b4fb)


### Crosslinks

1. **[About a form page](https://www.va.gov/find-forms/about-form-40-1330m/)** - Modify
  - Placement description: Add an 'apply online' section to this page
  - Link label: TBD by content
  - Link destination: va.gov/burials-memorials/memorial-items/headstones-markers-medallions/request-medallion-form-40-1330m

![Screenshot 2024-08-19 at 5 35 19 PM](https://github.com/user-attachments/assets/86ef5a2c-7a3e-42a7-bef8-34f3b82a9594)


2. **[Burial in a private cemetery page](https://www.va.gov/burials-memorials/eligibility/burial-in-private-cemetery/)** - Potentially modify
  - Notes: this page currently points to the 'about a form' page above, so it's possible it doesn't need to change, but content team should review the language here to confirm.

![Screenshot 2024-08-19 at 5 35 26 PM](https://github.com/user-attachments/assets/c778b9d8-b03a-4059-80f1-6f57bf4aeae7)

 
 

## <a name="redirects"></a>Redirects <br>
NO redirects required

## <a name="bestbets"></a>Best Bets<br>
No best bets required

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

**[Which static page has the widget, ie the main entry point?]**




<hr>
<hr>
