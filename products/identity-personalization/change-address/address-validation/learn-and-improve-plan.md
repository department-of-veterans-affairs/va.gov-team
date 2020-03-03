# Learn and improve plan: Address validation

## KPIs

From our [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/product-outline.md#kpis).

### Objectives & Tracking
- **Objective**: Reduce the number of veterans that report to the call center that they can't save their addresses (#[6012](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6012))
  - **Tracking**: Work with the call center team team to see if there is an decrease in call in cases.
- **Objective**: Increase the amount of successful mailing address submissions.
  - **Tracking**: Track whether we see people using suggested addresses.
- **Objective**: Reduce the number of bad addresses being saved in VA profiles
  - **Tracking**: Low override; high rate of using suggestions or editing/saving addresses.
  - **Tracking**: Track the number of successful address form submissions increases.
- **Objective**: Reduce returned mail at the VA (Note: Not sure how to measure this).
  - **Tracking**: Not sure how to determine whether the overall rate of returned mail has decreased at the VA.

## Analytics we're tracking

We already track [successful mailing/home address submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-transaction/). In addion, we are adding the following tracking for address validation ([#5895](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5895)):

- How often the address validation screen shows (note: The address validation functionality itself will run 100% of the time, but the screen where we tell people that they need to confirm their address only shows some of the time based on whether we think there might be a problem with the address).
- Whether people select suggested addreses.
- Whether people edit their address.
- Whether people override our determination that there is a problem with the address.

## Learn and improve plan

### Post-launch

- Do a [phased launch](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/release-plan.md) to make sure everything is working properly.
- After we have launched to 100% of users, go back to the veterans who have contacted the call center saying they can't update their addresses and have them try now that the address validation is live. If this works, we'll have resolved the issue around some veterans not being able to save their addresses.

### 1 – 2 months post-launch

- Check analytics — do we see any meaningful change in successful address form submissions? Any reduction in errors?

### 6 months out

- Figure out how to determine whether there has been a reduction in mail returned to the VA.

## Potential next phase

- Based on whether we see a reduction in mail returned to the VA or not, we may want to consider pursuing the [bad address indicator](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/bad-address-indicator/product-outline.md) that was proposed last fall.
