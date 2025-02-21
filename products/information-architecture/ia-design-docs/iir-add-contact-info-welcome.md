# IA Design for Add contact info --> Welcome experience
**STATUS: In Progress**

**LAUNCH DATE:**  Launched 2/7/25 to 10%

**Team:** 
- Team name: IIR
- OCTO product owner: Jeff Barnes
- Product name: Veteran New Account Flow within Authenticated Experience, Welcome Pathway (Onboarding)
- Product manager: Pete Egan
- Designer: Raquel Eisele
- Slack channel: iir-product-teams-public

- [CC Intake](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82257)
- [Product outline](https://docs.google.com/document/d/1gbBknW1NDSGFqCZLEQrrlrCCwhTHolrTw6Ef3Vfg_R0/edit?usp=sharing)
- [CAIA Intake ticket](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/32?filterQuery=label%3A%22sitewide+content%22+-label%3A%22CAIA+Intake%22%2C%22CAIA-Collab%22%2C%22Epic%22%2C%22OCTO%22+-status%3A%22New+Intakes%22%2C%22CC+Intakes%22%2CEpics%2COCTO+iir&pane=issue&itemId=63310624&issue=department-of-veterans-affairs%7Cva.gov-team%7C83402)
- [Figma](https://www.figma.com/design/CertVj7cu66kFv9TnseR30/Welcome-to-My-VA?node-id=2091-57304&t=2Y3MmsvVTQA6hgOg-1) (Page: Phase 1 - Forms Library)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launchstuff)


## <a name="flows"></a>User/page flows <br>
An auth user will land on MyVA, and if their profile has not been set up completely (either because it is their first time logging in, or they haven't finished filling out their profile in past visits), they will see an info alert asking them to add contact information. Similarly, if a user goes to their profile, they will see the same info alert there asking them to add contact information. After finishing the subtask, the user will be presented with 3 options on the confirmation page: set up notification settings, go to MyVA, or go to Profile. 

## <a name="map"></a>Page structure<br>
![Screenshot 2024-12-12 at 2 59 10 PM](https://github.com/user-attachments/assets/7f2b780c-e4a2-4ccc-a634-b6712c497f89)


## <a name="url"></a>URLs and breadcrumbs

**1) Add Contact Info subtask**
- URL: va.gov/my-va/welcome-va-setup/review-contact-info/
- Breadcrumb: VA.gov home > My VA > Add your contact information
- Notes: In this case, /welcome-va-setup/ is an empty directory. While we don't typically allow empty directories, we allowed it in this case because the team has concrete intentions to build more subtasks under the /welcome-va-setup/ directory. Note that the breadcrumb skips over that empty directory.



### Sub-URLs
- va.gov/my-va/welcome-va-setup/review-contact-info/mobile-phone
- va.gov/my-va/welcome-va-setup/review-contact-info/email-address
- va.gov/my-va/welcome-va-setup/review-contact-info/mailing-address
- va.gov/my-va/welcome-va-setup/review-contact-info/confirmation



## <a name="nav"></a>Entry points <br>

### Navigation pathways and entry point for launch
See more about [navigation pathways and entry points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/entry-points.md). Teams must launch with at least one navigation pathway.

For this MVP, there are two navigation pathways to this subtask.

**1) Info alert from MyVA**

![Screenshot 2024-12-16 at 5 00 39 PM](https://github.com/user-attachments/assets/b97e9b60-24b5-4f2e-87ad-f24ef22d94a1)

**2) Info alert from Profile**

![Screenshot 2024-12-16 at 5 02 19 PM](https://github.com/user-attachments/assets/88a08f94-01bc-4dab-81b6-b38634144b1b)





<hr>
<hr>
