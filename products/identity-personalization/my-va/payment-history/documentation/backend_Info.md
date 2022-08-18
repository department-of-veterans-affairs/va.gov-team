## Background

###Updated August 18 2022

Currently, when the MyVA dashboard page loads, a request (Step 1) to get payment history data is always sent to vets-api.

The following diagram illustrates the basic flow of data when a "successful" request is made for a user's payment history data:

![payment_request_success](https://user-images.githubusercontent.com/653787/185247379-74079dd7-3416-4c73-a75e-16ae3e6dabb3.png)

<!--
vets-website->vets-api:1. GET payment-history
vets-api->vets-api:2. Authorize User
note over vets-api: User has ICN, SSN, Participant ID
vets-api->BGS: 3. GET payment-history
vets-api<--BGS: 4. return payment records with status 200 OK
vets-website<--vets-api: 5. return payment records with status 200 OK
-->
 
The vets-api does not store this data, so when it receives this request, it in turn make a call to BGS to get the data.  Before calling BGS, it makes sure that the user is authorized to make the call (Step 2).  For this particular request, the authorization rule is to check for the presence of an ICN, SSN, and Partipant ID.  All of these must be present for the request to be made to BGS.

In the diagram above, the request is successful and returns a status `200 OK`.

The following diagram illustrates the basic flow of data when an "unsuccessful" request is made for a user's payment history data:

![payment_request_failure](https://user-images.githubusercontent.com/653787/185247443-375e6388-4763-4f4e-8d16-3a28d2149391.png)

<!--
vets-website->vets-api:1. GET payment-history
vets-api-#redxvets-api:2. Authorize User
note over vets-api: User does not have ICN, SSN, Participant ID

vets-website<<#red:3--vets-api: 5. return status 403 Forbidden
-->

In the diagram above, the user did not pass the authorization required to make the request to BGS.  When this happens, the vets-api will return a `403 Forbidden` response to the vets-website.

The 403 error is not an issue specific to whether a user has payment history or not.  In this case, the issue is that the user does not have the proper IDs (ICN, SSN, Particpant ID) to make a request to the BGS API.

## Issue
The payment history endpoint should be returning a 403 response when the authorization check fails.

However, the issue here is that the payment history endpoint is called whenever the My VA page loads (for every user).  Because of this, we are seeing a much higher rate of 403 errors in responses and logs than we would expect to see.

## Resolution
The solution is to avoid making payment history requests for users that shouldn't be making them.

To resolve this issue, the vets-api will pass claims data to the vets-website that informs it whether or not a payment history request should be made on behalf of the user.  This claims data will be need to be available when the My VA page loads. 

Once the vets-website has this information, it can determine whether the user should be able to access payment information or not __before making the request__.

This will reduce the number of API calls made to the vets-api servers.  It should also eliminate 403 responses (except in legitimate edge cases).

The following diagram illustrates the workflow when the user claims authorize the user to make the request for payment-history:

![payment_request_has_claims](https://user-images.githubusercontent.com/653787/185247513-3f931933-6df6-432e-b391-367486fd3a21.png)

<!--
vets-website-#00ff00:2>vets-api:**1. GET user-claims**
vets-website<#00ff00:2--vets-api:**2. return user-claim data**
note over vets-website: **user_claims: {\n  payment_history: <color:#00ff00>true</color>\n}**

vets-website->vets-api:3. GET payment-history
vets-api->vets-api:4. Authorize User
note over vets-api: User has ICN, SSN, Participant ID
vets-api->BGS: 5. GET payment-history
vets-api<--BGS: 6. return payment records with status 200 OK
vets-website<--vets-api: 7. return payment records with status 200 OK
-->

If the user claim data does not authorize a user to access payment-history, the user will not be able to view the Payments and Debts section and no request will be made for payment-history data.

The following diagram illustrates this case:

![payment_request_no_claims](https://user-images.githubusercontent.com/653787/185247561-c55a693c-8ead-4055-8c51-0bcccacf8f8b.png)

<!--
vets-website-#00ff00:2>vets-api:**1. GET user-claims**
vets-website<#00ff00:2--vets-api:**2. return user-claim data**
note over vets-website: **user_claims: {\n  payment_history: <color:#red>false</color>\n}**

vets-website->vets-website:3. Hide Payment & Debts
-->

## Next Steps
When the My VA page loads, an initial request is made to `v0/user`.  This endpoint returns information about the logged in user.

Currently, this response does not contain enough information to allow the vets-website to determine whether a user can access payment-history. 

User claims data will be added to this response that informs the client whether or not the payment-history request should be made.

Ticket [#45871](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45871) outlines the BE work for adding the user claims data.
