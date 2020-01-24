# Website Performance Monitoring Product Outline

#### Communications
- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

#### Team Members
- Brandon Rapp - FE Tools Product Manager
- Jhonny Gonzalez - FE Developer
- Rian Fowler - FE Dev Lead

---

## Problem Statement
The platform needs a proper performance monitoring process for the website to ensure we can have standardized ways to measure, evaluate and govern website monitoring so that we can promote valuable improvements and ensure stability.

 
## User Goals
- VFS Team will be empowered to track and measure the web performance of their own applications
- VFS Teams will be alerted in slack when performance issues arise and will be provided enough insight to both fix the issue and test the performance improvement.
- VFS Teams can get a detailed set of recommendations from the platform for how to improve performance on each of the pages.

## Business Goals
- VSP Platform will have be able to easily gather an agreed upon set of performance metrics so that we can properly set platform performance standards.
- VSP Platform will be able to set performance budgets for va.gov so that we are alerted in slack if an aspect of va.gov (applications) do not meet the standards of platform performance.
- VSP Platform will be able to provide acesss to VFS teams to see just their applications specific pages within the performance monitoring platform so they may be able to self-monitor performance and address issues without needing intervention by a member of the platform.

## Assumptions
- Once performance budgets are set, VFS teams will be required to have their applications meet the performance standards set by the platform.
- Software does not have integration with Github Teams currently, so account creation\removal will need to be an added step within the onboarding\offboarding process.
- We will base our platform standards utilzing the web performance metrics recommended by [USWDS](https://designsystem.digital.gov/performance/glossary/#types-of-metrics)
  - Metrics: Speed Index, First Meaingful Paint, First Contentful Paint, Input Latency, Start Render, Backend Time or TTFB, Number of Requests, Total Size, Blocking CSS, Blocking JS

## Questions
- Software does offer other SSO (SAML, ADFS, Google G Suite) if we want to utilize a different way to handle user management.

## Solution Approach

### Performance Monitoring Types
There are two types of performance montoring: RUM (Realtime User Monitoring) and Synthetic
We decided to focus on Synthetic since we get a lot of RUM monitoring from our Google Analytics integration.
- What is Syntethic monitoring?
  - "Synthetic monitoring tests a site's performance in a simulated and consistent environment" - [USWDS](https://designsystem.digital.gov/performance/glossary/#types-of-metrics)
  - "Synthetic monitoring provides a relatively consistent control for tests, as the environment in which the tests run can be invariable, allowing you to isolate the performance changes. - [USWDS](https://designsystem.digital.gov/performance/glossary/#types-of-metrics)
  - "It’s a better method for comparing your site’s performance against competitors or similar sites, and for monitoring the site’s performance consistently through code/design changes and releases." - [USWDS](https://designsystem.digital.gov/performance/glossary/#types-of-metrics)
  - "It can also be a great tool for testing small performance tweaks." - [USWDS](https://designsystem.digital.gov/performance/glossary/#types-of-metrics)

### Web Performance Monitoring Tool Selection

- **Synthetic Monitoring** - The site receives a check once a minute or so
- **RUM** - Receives the data directly from the site because the script runs on the page.

| Monitoring Tool | RUM | Synthetic | Price | *Score* | Notes |
| :--- | :---: | :---: | :--- | :---: |  :---: | 
| [Akamai - mPulse](https://www.akamai.com/us/en/products/performance/mpulse-real-user-monitoring.jsp) | X |   | ? | 1 | |
| [DotCom-Monitor](https://www.dotcom-monitor.com/website-speed-monitoring/) | X | X | Confusing | 1 | |
| [Uptrends](https://www.uptrends.com/products/web-performance-monitoring) | X | X | Varies, $50 p/m + RUM usage | 2 | |
| [DareBoost](https://www.dareboost.com/en) |   | X | $356 p/m | 3 | |
| [RayGun](https://raygun.com/) | X |   | $649 p/m | 1 | |
| [Rigor](https://rigor.com/) |   | X | ? | 2 | |
| [DataDog](https://www.datadoghq.com) | X | X | ? | 4 | More backend focused than FE|
| [SpeedCurve](https://speedcurve.com/) | X | X | $6,500/yr | 5 | Highly recommended |

* **`Score`** is based on amount of services offered, where **`1`** is the most simple provider and **`5`** is the one that offers the most tools and metrics.

Further details can be found in the discovery ticket [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4187)


### Set Performance Budgets
[More Info on how to create a performance budget](https://support.speedcurve.com/en/articles/1539827-create-performance-budgets-and-set-alerts)

![Screen Shot 2020-01-07 at 10 19 09 AM](https://user-images.githubusercontent.com/55560129/71905985-3cb9e700-3137-11ea-8ff5-03c1ea75d798.png)

Allows you to set a specific metric budget only per chart. there are about 50 different metrics

#### Settings:

![Screen Shot 2020-01-07 at 10 21 40 AM](https://user-images.githubusercontent.com/55560129/71906274-beaa1000-3137-11ea-8ac7-2a9d76429c82.png)

#### Chart:

![Screen Shot 2020-01-07 at 10 22 20 AM](https://user-images.githubusercontent.com/55560129/71906294-c669b480-3137-11ea-8be3-30ace23706db.png)

### Comparison Tests
We can test the performance of Va.gov against other government sites as a method of testing\measuring the evolution of VSP as a best-in-class platform


## Value Propositions
- Drive overall wesbite performance improvements for all veterens.
- Empower VFS teams with recommendations for improving their applications web performance.
- Provide an automated method of tracking web performance when new code is checked  in the effort to reduce the scope of work reviewed in a PR by VSP FE developers.
- Measure the performance of va.gov as an indicator of VSP's success as a best-in-class platform.

## KPIs
- % of Customer compliance across pratice areas
  - FE Engineering: Meet or exceed performance budgets
- Customer NPS


## Current Phase Requirements

#### In Current Scope

#### Out of Current Scope

---

## Solution Narrative

### Current Status
Purchasing Phase - Seeking the finances to purchase 

### Key Decisions

---
   
## Screenshots

### Before

### After
