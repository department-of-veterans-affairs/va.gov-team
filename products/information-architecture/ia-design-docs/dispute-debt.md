# IA Design for Dispute debt
**STATUS: In Progress**

**Team:** Debt resolution
Designer POC: Megan Gayle

**CAIA Intake ticket:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/96804

**IA Tracker:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/96934

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
The team is pursuing a multi-select option, where a user can select multiple debts to dispute in a single submission. A user can find the dispute option from /manage-va-debt/--> R+S page about requesting help. OR, they can access the dispute from each debt detail page. Only benefit debt is included in V1. Copay debt will be included in V2, and will have the same IA structure.

![Screenshot 2024-11-18 at 2 50 41 PM](https://github.com/user-attachments/assets/2263b1d4-2972-4a5d-a230-df868a699cbe)


## <a name="map"></a>Page structure<br>
Dispute debt form will live under /manage-va-debt/ on the same level as the 5655 form (for requesting financial help). 

![Screenshot 2024-11-18 at 2 53 19 PM](https://github.com/user-attachments/assets/cac6326f-fda8-4d92-9f61-65fd90fa6207)


## <a name="url"></a>URLs and breadcrumbs

**1) NEW Debt dispute form**
- URL: va.gov/manage-va-debt/dispute-debt/
- Breadcrumb: VA.gov Home > Manage your VA debt > Dispute your VA debt
- Notes: final breadcrumb pending h1 decision by content. The URL does not include a form number, because VBA is not pursuing making this an official form with OMB. See conversation in slack here: https://dsva.slack.com/archives/C044AGZFG2W/p1731518380772699

### Sub-URLs

- /introduction
- /personal-information
- /contact-information
- /select-debt
- /existence-or-amount
- /dispute-reason
- /review-and-submit
- /confirmation

Follow guidance for list-and-loop URLs here: https://design.va.gov/components/url-standards/

## <a name="nav"></a>Entry points <br>

### Entry points

**1) MODIFY [Request help R+S page](https://www.va.gov/resources/request-help-with-VA-debt-from-benefit-overpayments)**
- Placement description: In the 'if you think your debt is an error" section, add content and action link that takes user to new dispute form
- Link label: TBD by content
- Link destination: va.gov/manage-va-debt/dispute-debt/

![screenshot of 'if you think your debt is an error' section](https://github.com/user-attachments/assets/d5d475b3-f1c1-404b-b0b0-c464e43d4099)

**2) MODIFY [Debt detail page](https://staging.va.gov/manage-va-debt/summary/debt-balances/details/742210)**
- Placement description: In the "how to dispute a debt" section at the bottom of the pag, add content and action link that takes user to new dispute form
- Link label: TBD by content
- Link destination: va.gov/manage-va-debt/dispute-debt/
- Note: The team is currently working on structural change to the debt detail page that will move this section to a separate page. We should make sure this new section is included in the designs for those changes.

![screenshot of 'how to dispute a debt' section](https://github.com/user-attachments/assets/510d179f-372f-4da5-89ca-ccf52a45ee63)
 
### <a name="bestbets"></a>Best Bets<br>
No best bets needed for this specific form, but there will be a best bet for the new FSR R+S page. 

## <a name="redirects"></a>Redirects <br>
No redirects needed, as this is a net-new form.


## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Roll-outs hidden behind a flipper flag need a static page to place a sign in widget or CTA on. Pages/sections where a sign in widget can't be implemented - find a form pages, within accordions, hub pages*

YES the team is planning a staged rollout. 

Which static page has the widget, ie the main entry point? va.gov/manage-va-debt/dispute-debt/introduction/




<hr>
<hr>
