# IA Design for FSR benefit debt management options
**STATUS: In review**

**Team:** 
- #debt-resolution
- OCTO-DE product owner: @denisecoveyduc
- Product manager: @Tom-Davis
- Designer: @josephrlee, @mgleo, @charlottecesana

**CAIA Intake:** [71331](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=46704947)

**IA history of this initiative**: Initially, the goal was to replace the outdated wizard pattern with the one-thing-per-page subtask. We created an IA design for that, which is documented in mural under [Version 2](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1682537441750/a9937e9953d80c221c5165131f611026e0419c7b?wid=0-1705458099254). As part of this work, we decided it made the most sense to move the wizard outside of the 5655 form, because we realized that the wizard was on a form, but pointing to 9 different endpoints, only one of which is this form. It seemed like in that case, it might make more sense to place the wizard before the form with the form being a possible endpoint. Additionally, the original wizard design allows users to very easily bypass the wizard and fill out the form, which may not be correct for their circumstance. The [original IA design for the debt portal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/debt-portal.md) solved for this by adding a static page that explained options for debt relief and directed to the wizard. 

But then, OCTO decided that we could try a content-only approach, creating a static content page (instead of a wizard) to explain the different debt options. But we ran into trouble: our content placement criteria required the new request-debt-help content to be in Resources and Support. But we couldn't send users into R+S with the intention to bringing them back into the debt portal, said OCTO. So OCTO decided to scrap the content-only approach and return to the subtask.

Our latest iteration, described below, does the following:
1. Replaces the outdated wizard component with the subtask
2. Removes the subtask from within the 5655 form
3. Allows for 2 use cases: users who want to get to and through 5655 as quickly as possible, and users who want to understand the debt help options.


**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launchstuff)


## <a name="flows"></a>User/page flows <br>
Users will learn about options to resolve debt in the 'get help with debt' section of the /manage-va-debt/ unauthenticated page. This section will provide these options:

1. Links to R+S content about debt help options: copays (2 pages), benefit overpayments (1 page)
2. A link to the new debt-options subtask
3. A link directly to the 5655 form

![Screenshot 2024-12-12 at 3 51 02 PM](https://github.com/user-attachments/assets/ceba828d-fd2a-4477-aba3-08e5ed3b3818)

![Screenshot 2024-12-12 at 3 52 49 PM](https://github.com/user-attachments/assets/0037dad0-afea-4e61-b282-ec961556dc91)


## <a name="map"></a>Page structure<br>
The new subtask will live under /manage-va-debt/ at the same level as the 5655 form.

![Screenshot 2024-12-12 at 3 53 26 PM](https://github.com/user-attachments/assets/bfc75f03-08e9-47c9-bfba-ef9bd1387700)


## <a name="url"></a>URLs and breadcrumbs

**1) NEW Debt Options Subtask**
- URL: https://www.va.gov/manage-va-debt/debt-help-options/
- Breadcrumb: VA.gov home > Manage your VA debt for benefit overpayments and copay bills > [TBD H1 of debt subtask]
- Notes: The first page of the subtask will include Question 1, to reduce clicks for the user.

**2) MOVE Dispute Copays R+S**
- URL: TBD based on H1
- Notes: This content is currently at https://www.va.gov/health-care/pay-copay-bill/dispute-charges/

**3) MOVE Request assistance Copays R+S**
- URL: TBD based on H1
- Notes: This content is currently at https://www.va.gov/health-care/pay-copay-bill/financial-hardship/


### Subtask Sub-URLs

- https://www.va.gov/manage-va-debt/debt-help-options/introduction/
- https://www.va.gov/manage-va-debt/debt-help-options/overpayment/
- https://www.va.gov/manage-va-debt/debt-help-options/overpayment/repayment-time/
- https://www.va.gov/manage-va-debt/debt-help-options/overpayment/error-or-disagreement/
- https://www.va.gov/manage-va-debt/debt-help-options/overpayment/review-decision/
- https://www.va.gov/manage-va-debt/debt-help-options/health-copays/
- https://www.va.gov/manage-va-debt/debt-help-options/results/


## <a name="nav"></a>Entry points <br>

### Navigation pathways and entry point for launch

There are 2 primary nav pathways to the subtask for launch. The first is a link directly from the /manage-va-debt/ page. The second is from the first step on the /introduction/ page of the 5655 form.
![Screenshot 2024-12-12 at 3 59 49 PM](https://github.com/user-attachments/assets/06e30fae-b248-4a0f-a0ec-b1e49b0d0827)


### Secondary entry points

**1. Remove 2 Copays links from health left nav** 
Since we're moving the 2 pages about copay help into R+S, we can remove the links from the left nav.
- Who will update (IA, content, product team): IA
- When will this entry point go live (at launch? After staged rollout? after some designated time?): After R+S pages are redirected

![Screenshot 2024-12-12 at 4 01 26 PM](https://github.com/user-attachments/assets/09f1d445-2642-4a1e-8d0a-5aed103eaa10)


### Crosslinks
Need to create ticket for content to find and update crosslinks in Drupal.

## <a name="launchstuff"></a>Launch coordination activities <br>

### Redirects

| Page Name                | Current URL                                                       | Will redirect to…               |
|--------------------------|-------------------------------------------------------------------|---------------------------------|
| Dispute copays           | https://www.va.gov/health-care/pay-copay-bill/dispute-charges/    | TBD based on H1 at R+S location |
| Request help with copays | https://www.va.gov/health-care/pay-copay-bill/financial-hardship/ | TBD based on H1 at R+S location |

### Best bets
No edits to best bets needed. 

![Screenshot 2024-12-12 at 4 04 44 PM](https://github.com/user-attachments/assets/2d5d8734-aaf9-4b7d-b29f-cdeb83735d95)




<hr>
<hr>





