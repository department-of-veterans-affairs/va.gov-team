# Payment History Suppressions

### Overview
Near the beginning of my (Ian)'s BMT2 tenure, we addressed [this issue on the payment history page](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95240). There were many conversations in Slack and other channels to figure out exactly what we wanted to do, but we settled on:

1. Only showing information about payments on the page that were sent to the person looking at them (i.e. first-party disbursements), and
2. Recategorizing `Hardship` payments to instead be `CH33 - Hardship` payments.

The bigger change is #1, which removed a swathe of payments from the page. For example, a veteran would no longer see a payment that was sent directly to a university. The rationale behind this change was that some people looking at the page would not fully understand where the payments were sent, and then subsequently think they were missing or had not received money.

### Pull Requests
1. [This PR, the first one](https://github.com/department-of-veterans-affairs/vets-api/pull/21082), removed third-party disbursements and recategorized `Hardship`.
2. [The second PR](https://github.com/department-of-veterans-affairs/vets-api/pull/21906) iterated to tackle specifically Attorney Fee payments. These payments were not caught in the first PR because their `beneficiary` and `recipient` IDs match, but their payee type was `Third Party / Vendor`. Neat wrinkle!
3. [The third PR](https://github.com/department-of-veterans-affairs/vets-website/pull/36247), deployed after the first two were confirmed to fix the issue, removed a warning about inaccurate information from the frontend.
4. Lastly, [the fourth PR](https://github.com/department-of-veterans-affairs/vets-api/pull/22161) tackled an edge case where the Payment information returned from BGS would not be an array if there were only one element. So instead of an array with one element, it would just return the element. This broke the subsequent `.each`, so we use `Array.wrap` on the information returned from BGS.
   
All of the above functionality was covered by a feature flipper at one time but it has since been removed. There is nothing here remaining to clean up.
