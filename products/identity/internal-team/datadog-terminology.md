# Datadog terminology: VA.gov Identity Monitor Dashboard

## Overview of this dashboard

[Link to dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false) 📌

- This is the main identity team dashboard created for our internal team only
- Keeps an eye on the services that are important to us
- Services at the top give us a quick view of whether everything is working as expected
- Main objective: provide confidence to POs, PMs, and the rest of the team that the changes we’re making and shipping aren’t having negative impacts on the application before it reaches production
- Automatic tests ensure the things you want to happen are still happening
- Team members monitoring #identity-support also monitor staging
- Sometimes synthetic tests will fail if something’s off in the test
- We typically catch ~1 issue per month based on our automated tests
- There’s an excellent summary of the [types of metrics we monitor in this Github issue](https://github.com/department-of-veterans-affairs/identity-documentation/issues/516)

## Naming convention for dashboard widgets

**Identity {environment} {inbound/outbound} {service or application} {Identity broker}**

- **Identity:** our team name
- **Environment:** production, staging, or lower environments
- **Inbound:** external users or systems authenticating into our system
- **Outbound:** users or systems authenticating to external systems
- **Service or application:** see full list of services and applications in the [glossary](https://docs.google.com/document/d/1F91AOQznB4XaDpuVSX7th_sqIL56GKJcd29hHULDoUY/edit?tab=t.0#heading=h.ym6up58j453p)
- **Identity broker:**
    - **SSOe** may be labeled as “SSO” or “SSOe” or “SAML” in reports and dashboards.
    - **VA.gov authentication** is labeled as “SiS” in reports and dashboards.

## Groups of widgets in this dashboard

- The “Main Group” widgets are open by default.
- Clicking a group in Datadog expands (and loads) that group’s widgets.
- [A full list of widgets is documented in this Github issue](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/identity_dd_dashboards.md#browser-monitors-4).

### Main Group

There are 3 main monitors at the very top that give some insight into the overall health of authentication on [VA.gov](http://va.gov/)

### Main monitors

| **Dashboard name** | **What it measures** | **What it tells us** | **Notes** |
| --- | --- | --- | --- |
| [VSP Identity Monitors - Production](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=8319319491665130) | Alerts or warnings for all identity services on production, based on monitors for our lives services. | If anything is returning errors or warnings in production. |  |
| [VSP Identity Monitors - Staging](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=3805169330232589) | Alerts or warnings for all identity services on staging, based on some automated tests we’ve set up. | If anything is returning errors in staging. | Currently we have some alerts due to an ongoing issue with [ID.me](http://id.me/) and DS Logon causing staging monitors to fail, and [ID.me](http://id.me/) is not fixing the issue. Our lower environments don’t link automatically, which causes some automated tests to fail. |
| [USiP Identity Monitors - Summary](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=979135572313240) | Monitors 3 specific instances of USiP: VA Mobile app, VA OCC Mobile, My HealtheVet. | The health of USiP properties with the most traffic. | Any individual instances of the USiP can fail (each is a distinct service). | This USiP monitor doesn’t include the sign-in modal. We rely on overall monitors on VA.gov to indicate if there’s any problem there. |

### Individual widgets

These individual widgets within the Main Group are open by default when the dashboard loads. They provide more granular information that can help us investigate any issues we’re seeing in the main monitors at the top of the dashboard.

| **Dashboard name + link** | **What it measures** | **What it tells us** | **Notes** |
| --- | --- | --- | --- |
| [SSOe Success Return Percentage - Prod](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=169965705415635) | Percentage of users signing in and returning back to VA.gov after a successful authentication, broken down by CSP and a type known as custom. For SSOe the “return” is from the IBM appliance for SAML. | Overall successful authentication percentage for SSOe in production | A service that’s not responding won’t return any error. |  |
| [SiS Success Return Percentage - Prod](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=1254326522330070) | Percentage of users signing in and returning back to VA.gov after a successful authentication. For SiS the “return” is from the Credential Service Provider (CSP). | Overall successful authentication percentage for SiS in production |  |
| [SSOe Successful Auths - Prod](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=3688086742216596) | Successful SSOe authentication with no errors, based on the raw number of success authentications, per CSP. | Volume of successful SSOe authentications |  |
| [SiS Successful Auths - Prod](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=2070451605472528) | Successful SiS authentications with no errors in production, based on the raw number of success authentications, per CSP. | Volume of successful SiS authentications in production |  |
| [SAML VA.gov Auth Attempts](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=2224239710411894) | The number of times someone clicks each sign-in CTA on VA.gov for SSOe | An increase in authentication attempts usually indicates a problem with a downstream service |  |
| [SiS Auth Attempts - Prod VAMobile](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=4179063519719194) | The number of times someone clicks each sign-in CTA on VA mobile | An increase in authentication attempts usually indicates a problem with a downstream service |  |
| [SAML VA.gov Success Percentage](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=2248477914649314) | Measures the number of successful authentications divided by the number of authentication attempts. This dashboard tracks increases or decreases in this metric. | Shows trends, which helps us spot an increase in problematic authentications |  |
| [SiS Success - Prod VAMobile](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=6760335941164860) | Measures the number of successful authentications divided by the number of authentication attempts, per CSP. This dashboard tracks increases or decreases in this metric. | Shows trends, which can help us spot an increase in errors |  |
| [SiS Auth Attempts - Prod VA.gov](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=8133253137763116) | The number of times someone clicks each sign-in CTA on VA.gov for SiS | Volume of product usage on VA.gov for SiS |  |
| [SAML VA.gov Auth Attempts](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=3372473866874762) | The number of times someone clicks each sign-in CTA on VA.gov for SSOe clients | Number of attempts per CSP for SSOe on VA.gov |  |
| [SiS Auth Attempts - Prod VAMobile](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=6040560204605388) | The number of times someone clicks each sign-in CTA on the VA mobile app for SiS | Volume of product usage on VA mobile for SiS |  |
| [SiS Success - Prod VA.gov](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=3610327602815762) | The number of  successful authentications with no errors and did return to va.gov on [VA.gov](http://va.gov/) (client id) production for SiS clients | This shows a trend comparative percentage to the week before. Potentially indicating a problem users may be facing while attempting to login. |  |
| [SiS Auth Attempts - Prod VAMobile](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=6040560204605388) | The number of times someone clicks each sign-in CTA on VA mobile for SiS clients | Number of attempts per CSP on SiS mobile app |  |
| [SiS Auth Attempts Raw - Prod VA.gov](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=8133253137763116) | Measures the number of auth attemptschange in percentage for SiSthis metric | This shows a drop in people being able to click on one of the CSP buttons. | There are two dashboards with the same name |
| [SiS Success - Prod Other](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=3656633605260618) | The number of successful authentications on VA.gov production for SiS clients we aren’t explicitly tracking | Indicates if there’s a security issue with authentications from unknown sources |
| [MPI Service Latency](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=1648377582162373) | It’s measuring how long it takes this service to respond | How long it takes the request to MPI about user data takes to come back to us - how long the user has to wait until they start seeing specific parts of the website that are about them | For all verified accounts we can call MPI. We record the info from the CSP and MPI - we only record if there’s a difference in SSN |
| [SiS Auth Attempts - Prod Other](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=8793928385571184) | Tracks our four known production clients that use Sign-in Service and exudes them | If an unauthorized client is using Sign-in Service - if someone figured out how to access Sign-in Service without accessing one of the known clients | No data
| [SiS Success - Prod](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=4190774892194225) | The number of successes and failures for every endpoint for SiS web and mobile |  | **Note:** this one could probably be deleted, it was most likely created for a specific investigation but it’s not particularly useful and does not appear to provide distinct value from the other widgets. Tracks every endpoint (token, refresh, callback, etc.) we can monitor by counts, by CSP. This includes errors |
| [SSOe True Return Percentage](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=3610012443041332) | Unique users authenticating successfully over a 30 minute period for all SSOe clients. This is based on the number of unique devices we detect logging in over a 30 minute period. | Unique users authenticating successfully over a 30 minute period | This measures unique users instead of overall product usage. |
| [SiS True Return Percentage](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=8440518800739220) | Unique users authenticating successfully over a 30 minute period for all SiS clients. This is based on the number of unique devices we detect logging in over a 30 minute period. | Unique users authenticating successfully over a 30 minute period | This measures unique users instead of overall product usage. |
| [SSOe vs SiS True Return Percentage](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=6061843569962672) | Compares the true return percentage for SSOe and SiS. | How many unique users are using each service over a 30-minute period |  |
| [SSOe & SiS True Return Percentage](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=5336041114093451) | The overall average of the values between SSOe and SiS |  | We’ll want to watch this go up or down as we rollout SiS more widely - we want to see the overall average go up |
| [SAML Requests/Responses](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1746550432022&to_ts=1746564832022&live=false&tile_focus=5238147465406785) | Tracks authentication requests by type (per CSP) and calculator the success percentage | Another way to calculate authentication attempts over successful authentications |

### SAML Graphs

| **Dashboard name** | **What it measures** | **What it tells us** | **Notes** |
| --- | --- | --- | --- |
| Inbound Success Rate | Track auto login success and failure percentages from other SSOe enabled websites in VA | If users have a valid ssoe session when first connecting to [VA.gov](http://va.gov/). Success, failure, and non-return percentages are measured. The widget also shows anomalies outside of the normal traffic to help indicate issues beyond the current expect rates. | Also known as custom |
| SAML Success Rate | Adds successes and failures and divides this by all new saml authentication attempts. This gives us a success percentage graph over time | It informs us about trends and potential issues with the combination of all CSPs. There is also anomaly detection for trends outside of normal success percentage. |  |
| Outbound Auth return rate | Determines the success percentage for all auth types except inbound/custom. Adds successes and failures and divides this by all new SAML authentication attempts. This gives us a success percentage graph over time | It informs us about trends and potential issues with the combination of all CSPs. There is also anomaly detection for trends outside of normal success percentage. |  |

## Additional groups of widgets

[Additional groups of widgets](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/identity_dd_dashboards.md#browser-monitors-4) are collapsed by default, so the dashboard loads more efficiently.

# Glossary

### Datadog terms

- **Dashboard:** A [dashboard](https://docs.datadoghq.com/dashboards/) is Datadog’s tool for visually tracking, analyzing, and displaying key performance metrics, enabling you to monitor the health of your infrastructure.
- **Dashboard details:** provide an [overview of the purpose](https://www.datadoghq.com/blog/dashboard-details/?_gl=1*169c2rd*_gcl_au*MjA5NTQyMzYyOC4xNzUzMTYwMzcx*_ga*MjEwMDQ4MDk2NC4xNzUzMTYwMzcx*_ga_KN80RDFSQK*czE3NTMxNjAzNzEkbzEkZzEkdDE3NTMxNjE0OTEkajE5JGwwJGgxNTg1Mjk0MTQ2*_fplc*OWpmSVgwSW0zYXJwOGJEbWV2RjVKeHRoWFRKOG9yc1JETE53MUtweGttZnB5JTJCQiUyRnAxZXN6UnJVNnZRZ0hDRmJZM0dSa3dxcWZuWnhaRUglMkJacDdnTkxSaUhzeU9yJTJGYXJHaFNmNVh3bFQwJTJGUFAlMkJaY3lYdVBsMERaWnNhSURBJTNEJTNE) of a given dashboard.
- **Group:** The [groups widget](https://docs.datadoghq.com/dashboards/widgets/group/) allows you to keep similar graphs together on your dashboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
- **Widget:** [building blocks for your dashboards](https://docs.datadoghq.com/dashboards/widgets/). They’re individual data visualizations based on metrics and criteria you set in Datadog.
- **Power pack:** templated groups of widgets that scale graphing expertise as reusable dashboard building blocks. [Powerpacks](https://docs.datadoghq.com/dashboards/widgets/powerpack/) are either preset (created by Datadog, available to all customers) or custom (created by a user, and only available within their organization).

### Metrics

- **Success Return Percentage:** Measures the numbers of users who attempt to authenticate on VA.gov or any of our authentication properties. Take the raw number of attempts and then how many “return to VA.gov” without errors after signing in to calculate this percentage. “Returns” to VA.gov or VA Mobile App.
    - Example: as soon as someone lands on the interstitial thats a return
    - The “return” is from the CSP when it’s from SiS and it’s from the IBM appliance for SAML
    - **auth_login_success:** successfully signs in
    - **Return to VA.gov:** distinguishes how many people abandon authentication
        - If there’s an outage there could be **NO errors** because no one’s signing in
        - Detects a **lack of response from a service**, which tells us if there’s a downstream service that’s having a problem
- **Successful Auths:** successful authentication with no errors, raw number of success auths
- **Auth Attempts:** someone clicks a CSP sign-in CTA
    - There could be an increase here if there’s an error with a downstream service
    - Clicked the csp button
- **Success Percentage:** percentage of successful auths successful/auth attempts
- **Service Latency:** the amount of time it takes to complete a request (the loading screen)
    - Note that the OAuth (SiS) latency monitors include all services and the SAML monitors only capture the time for that individual service to load
- **True Return Percentage:** it’s hard to measure unique users before attempts because you don’t know who they are before they sign in. We created a unique fingerprint for each new user over a 30 minute period and saw whether they successfully returned to us. All users who attempted to log in and how many returned to VA.gov. For example, 1 user could click the CSP button 5 different times and we’ll count it once. The unique fingerprint for that browser or device is matched to a successful return within a 30 minute period.
    - As an aside: we are seeing some issues with the numbers on the mobile app (possibly because of how they implemented SiS):
        - Mobile app collects and stores **all** state values when only one is valid, which could be slowing down the system on some devices
        - Seemed to be a problem on Assistive Technology (AT)
- **Requests/Responses:** another way to calculate authentication attempts over authentications
- **Auto-login -** when a user goes to another website they are recognized as an authenticated user without needing to enter in their username and password.
- **Fingerprint:** User agent + IP address that we read from the logs to discern how many unique users are interacting with the service
- **Inbound (also called “custom”)** - starts on an app outside of [va.gov](http://va.gov/) and then goes to [va.gov](http://va.gov/) for an auto login (SSOe).
- **Outbound** - starts on [va.gov](http://va.gov/) and stays there or goes to another SSO-enabled app.
- **Users:** measurements requested for external auth reporting where they just want to know how many people are using the system as opposed to how much they’re using it i.e. population (unique users) vs product usage (users)
- **Unique users:** we measure these a few different ways right now in various widgets, but we’re focusing on ICN when we use this term - the ICN is only counted 1 time within a 30 minute period. Measuring unique users could help us detect outages in physical locations throughout the US.
    - Example: someone trying to log in multiple times experiencing a regional AWS outage
    - Unique user is important for DSL population usage decline goals
- **Custom:** custom type refers to inbound SSOe. When a user logs in from another application outside of va.gov and then goes to va.gov we auto log them in without them needing to type in any credentials. This auth method/type is known as custom.

### Concepts

### Applications and clients

- **VA Mobile App (mobile)**
- **VA.gov (web)**
- **Terms of Use (ToU)**
- **ARP (Accredited Representative Portal)**
- **My HealtheVet**

### Identity brokers

- **IBM identity solution:**
    - **SAML**
    - **SSOe: Single Sign-On External**
    - **SSO**: single sign-on
        - SSO is now shared with us for the VA Mobile App
- **VA.gov authentication (SiS):** sign in service (VA.gov Sign-in ~~authentication~~)
- **Okta:** primarily used by VA lighthouse today, a new integration is being developed to replace the IBM Identity Broker

### VA.gov services and integrations

- **ID.me**
- **MPI**
- **Login.gov**
- **DS Logon**
- **My HealtheVet**

### Environments

- **Prod**
- **Prod VA.gov**
- **Prod Mobile**
- **Staging**
- **Dev**
- **Prod Other** intended to filter out known clients so we can detect if any rogue clients are accessing the service. Initially created to detect unauthorized uses of SiS. We don’t have a monitor for this because there’s a chance of there being an issue with the known client ID being tracked correctly |
