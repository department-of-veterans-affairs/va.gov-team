# IA Design for Verify Dependents
**STATUS: In Progress**

**Team:** Benefits - Dependent Experience ( #benefits-dependents-management ) , designer = Ajia Wallace, Fiorella Geedi, Ruben Sun

**IA Request:** [84170](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84170)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Crosslinks](#crosslinks)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
Most up-to-date flow in [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1716382766670&sender=ua67f17f1c416a96ea04d2476).

## <a name="map"></a>Page structure<br>
This is part of a longer term strategy to build a more robust dependents ecosystem. Strategic thinking at this [IA mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717521751866/127cbff63df95bedf011a5463797989197bc069d). Proposal on the [team's mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689863079145/5b97ba9ea11077f983f3413167f6324f11aa04a8?wid=0-1736373800549).

![Screenshot 2025-01-17 at 1 38 29 PM](https://github.com/user-attachments/assets/ec1cb253-afa2-454e-b9dc-834f127401e5)



## <a name="url"></a>URLs and breadcrumbs

**1) Verify dependents - NEW**
- URL: va.gov/manage-dependents/your-dependents/verify-form-21-0538/
   - Suburl: va.gov/manage-dependents/your-dependents/verify-form-21-0538/confirmation
- Breadcrumb: VA.gov home > Manage dependents > Your VA dependents > [H1 of 0538]

**2) Manage dependents - CHANGE from /view-change-dependents**
- URL: va.gov/manage-dependents
- Breadcrumb: VA.gov home > Manage dependents 

**3) Your VA dependents - CHANGE from /view**
- URL: va.gov/manage-dependents/your-dependents
- Breadcrumb: VA.gov home > Manage dependents > Your VA dependents

**4) 686c/674 - CHANGE location in the subdirectory**
- URL: va.gov/manage-dependents/your-dependents/add-remove-form-21-686c/
- Breadcrumb: VA.gov home > Manage dependents > Your VA dependents > [H1 of 686c/674]

## <a name="nav"></a>Entry points <br>
In this new ecosystem, users will get to the verify screen through an auth or unauth path. 

Unauth: they might come from an email or other authenticated page, that will take them to the /manage-dependents page to login. From the authenticated MyVA screen, users will walk through the update/verify widget thing at the bottom of the screen, and be directed to the correct form based on their answer.

Users will have to be authenticated to do either form, but the authenticated will happen on the /manage-dependents page. So there doesn't need to be any other sign in widgets in the rest of the dependents experience.

![Screenshot 2025-01-17 at 1 43 29 PM](https://github.com/user-attachments/assets/bb69dcb5-d0b0-494b-a76f-c267c90e9523)

**Other entry points:**
1. **Update [About VA Form 21-0538](https://www.va.gov/find-forms/about-form-21-0538)**
![Screenshot 2025-01-17 at 1 47 48 PM](https://github.com/user-attachments/assets/7d32f7b5-f444-4774-baf6-24b72a29beed)

2. **Update [About VA Form 21-686c](https://www.va.gov/find-forms/about-form-21-686c)**
![Screenshot 2025-01-17 at 1 47 59 PM](https://github.com/user-attachments/assets/ad5481ea-54cd-4472-a102-91e5c18f06d1)

3. **Update [Home page](https://www.va.gov/) link label**
![Screenshot 2025-01-17 at 1 48 09 PM](https://github.com/user-attachments/assets/d624992b-5b53-4312-bc85-a808b9e6274f)

4. **Update [Disability](https://www.va.gov/disability), [Pension](https://www.va.gov/pension), and [Family member survivor comp subhub](https://www.va.gov/family-and-caregiver-benefits/survivor-compensation/) page link labels and descriptions**
![Screenshot 2025-01-17 at 1 48 24 PM](https://github.com/user-attachments/assets/55bc0cdb-2f40-4fd0-ae5e-f76e5ffab3c1)

5. **Update Disability and Pension left nav link labels**
![Screenshot 2025-01-17 at 1 48 33 PM](https://github.com/user-attachments/assets/7077d4ca-5f77-4374-a16d-58df820d6743)


## <a name="redirects"></a>Redirects <br>
| Page Name                      | Current URL                                        | Will redirect to…                                                |
|--------------------------------|----------------------------------------------------|------------------------------------------------------------------|
| Unauth dependents landing page | va.gov/view-change-dependents/                     | va.gov/manage-dependents/                                        |
| Your VA Dependents             | va.gov/view-change-dependents/view                 | va.gov/manage-dependents/your-dependents                         |
| 686c/674                       | va.gov/view-change-dependents/add-remove-form-686c | va.gov/manage-dependents/your-dependents/add-remove-form-21-686c |

## <a name="bestbets"></a>Best Bets<br>

1. Update existing bestbet for /view-change-dependents to point to /manage-dependents
![Screenshot 2025-01-17 at 1 52 54 PM](https://github.com/user-attachments/assets/fbbb7a6c-a312-4efd-9102-e6b13874463e)

2. Revisit whether we want to keep our best bets for the Form pages. If not, delete. If so, perhaps adjust keywords.
![Screenshot 2025-01-17 at 1 53 08 PM](https://github.com/user-attachments/assets/32be4ec9-4675-474e-97f0-17bdde65569c)\

3. Reevaluate keywords for the new /manage-dependents best bet -- may need to add some
![Screenshot 2025-01-17 at 1 53 56 PM](https://github.com/user-attachments/assets/171f042d-1550-4c16-972c-be1ce66c7e2e)



<hr>
<hr>

