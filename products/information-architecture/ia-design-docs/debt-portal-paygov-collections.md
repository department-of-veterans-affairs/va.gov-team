# IA Design for Hosted Collections page on Pay.gov
**STATUS: Needs review

**Team:** Financial Management

**IA Request:** [Ticket 125646](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125646)

**Overview:** The team is building a payment flow because pay.va.gov is being deprecated. The new flow involves Resolve page that guides the Veteran towards payment, disputes or requesting help. These three steps were previously on the debt detail page but that page got too long, so they wanted to separate them out to a separate page. 

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)

## <a name="flows"></a>User/page flows <br>
*The new flow will live within the debt portal and can be accessed through the auth debt detail page or summary. *
<img width="3596" height="2066" alt="updated pay hosted" src="https://github.com/user-attachments/assets/f5deba45-0bea-49bd-ab7c-fbc5ff73151f" />


## <a name="map"></a>Page structure<br>
*The new flow start with the Resolve page. The Resolve page will be at the same level as Disputes and FSR.*
<img width="1879" height="1822" alt="Pay gov hosted collections_2025-12-12_20-20-29" src="https://github.com/user-attachments/assets/5cf2ad05-2cc4-45df-a1f8-c811dd8fb588" />


## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*

**1) Resolve overpayment - New**
- URL: https://www.va.gov/manage-va-debt/resolve-overpayment/
- Breadcrumb: VA.gov > [Summary H1] > [H1 resolve overpayment page]
- Notes: The unauth "Manage VA debt" page isn't reflected in the breadcrumb because it no longer becomes useful once the Veteran logs in. This is by design per [Slack convo](https://dsva.slack.com/archives/C04PH04GDBK/p1736780441952809). If a Veteran lands on this page without logging in, logging in should take them to the Overpayment summary page.

**2) Payment confirmation - New**
- URL: https://www.va.gov/manage-va-debt/resolve-overpayment/payment-confirmed
- Breadcrumb: VA.gov > [Summary H1] > [Resolve overpayment H1] > [H1 of payment confirmation page]
- Notes: Veterans will arrive here from the pay.gov hosted page. The unauth "Manage VA debt" page isn't reflected in the breadcrumb because it no longer becomes useful once the Veteran logs in. This is by design per [Slack convo](https://dsva.slack.com/archives/C04PH04GDBK/p1736780441952809)

**3) Payment cancellation - New**
- URL: https://www.va.gov/manage-va-debt/resolve-overpayment/payment-cancelled
- Breadcrumb:  VA.gov > [Summary H1] > [Resolve overpayment H1] > [H1 of payment cancellation page]
- Notes: If Veteran selects the "Back/cancel" link on Pay.gov, their payment is canceled and they'll land at this pageThe unauth "Manage VA debt" page isn't reflected in the breadcrumb because it no longer becomes useful once the Veteran logs in. This is by design per [Slack convo](https://dsva.slack.com/archives/C04PH04GDBK/p1736780441952809)
 

## <a name="nav"></a>Entry points <br>
*A list of new internal entry points, as well as changes to any existing entry points. This list focuses on the primary entry points and does not include all possible crosslinking opportunities.*

1. [Debt summary page](https://www.va.gov/manage-va-debt/summary/debt-balances)] - [Modify]
  - Placement description: Body copy (transaction tile)
  - Link label: TBD by content
  - Link destination:  https://www.va.gov/manage-va-debt/resolve-overpayment/
  - Notes: The summary page can get really long if a Veteran has a long transaction history, so the resolve page will have the payment/dispute/financial help methods. The summary/overview page is where Veterans land when they log in from the Manage VA, Dispute, Requestion Financial Help, or Resolve page.

2. [Debt detail page]- [Modify]
  - Placement description: Body copy (transaction CTA)
  - Link label: TBD by content
  - Link destination:  https://www.va.gov/manage-va-debt/resolve-overpayment/

3. [Manage VA debt unauth page](https://www.va.gov/manage-va-debt/) - [Modify]
   - Placement description: Body copy
   - Link label: TBD by content
   - Link destination: https://www.va.gov/manage-va-debt/resolve-overpayment/

## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  

None

Current URL | Redirect to | Notes
--- | --- | ---
 |  | 
 




<hr>
<hr>

