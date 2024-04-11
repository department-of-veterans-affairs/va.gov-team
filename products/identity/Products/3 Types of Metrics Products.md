# 3 Types of Metrics Products

In 2024, we are deploying three disparate products in order to track and socialize metrics associated with the Identity Team.  This document aims to explain the differences between these products.

## Support Metrics
Support Metrics (AKA "Identity Monthly Metrics") are how we are measuring our responses to support requests from other VA.gov teams. It is how we measure the success of our Request & Support Process product.

Dashboards that display the following metrics:
  * Counting Metrics
    * Tickets Opened
    * Tickets Closed
    * Tickets by Current Status
    * Tickets Requests by Team
    * Ticket Requests by Product
  * Satisfaction Metrics
    * Survey Score
      * We have an OKR dedicated to keeping this above 70%

(Links to the dashboards TK)

It is anticipated that we will refine these metrics as we move forward.

[Identity Monthly Metrics Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Identity%20Monthly%20Metrics.md)

## Login SLO Metrics
SLO is an acronym for Service Level Objectives, which are related to monitoring how well our various endpoints working: the goals is that Veterans are able to swiftly login and see their information.  The initial SLOs are:

  * Availibility
    * Logging in
    * Seeing information
    * Logging out
  * Response Time
    * How fast are things loading?

[Login SLO Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-df6fa7bc92140323ffecbf4e10b16346?refresh_mode=sliding&from_ts=1710276619913&to_ts=1712868619913&live=true)

We will use the SLO in order to create Login SLA -- Service Level Agreements -- published to both Veterans and other VA.gov product teams, as well as determine our responses to incidences of service level degradation.

[Login SLO Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Login%20SLO.md)

[Login SLA Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Login%20SLA.md)

## Authorization Metrics
Authorization metrics (AKA "External Data Reporting") are the metrics we are sharing with VA leadership surrounding the full authorization process, which is defined as a person doing the followin: 
1. Choosing one of our CSP (Credential Service Providers) on the VA.gov sign-in page.
2. Providing credentials on the CSP's login.
3. Returning back to VA.gov with their identity verified.

Some of the data we might provide on this page:
- Total authentications
- Total authentications by CSP
- New verified users
- New verified users by CSP
- Unique authentications
- Unique authentiations by CSP

This product is still being defined, but we suspect that we will create an easily understandable dashboard with some of these mstrics

