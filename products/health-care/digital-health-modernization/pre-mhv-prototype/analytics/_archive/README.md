# DRAFT Analytics Needed for Digital Health Modernization. 
This document is an initial guess of analytics which will definitely be needed in order to accomplish Digital Health Modernization. The list will expand over time as we ship specific software that needs to be instrumented in specific ways, and as our strategy changes. 

# Principles
1. **The Digital Health Modernization Team should have direct access to any analytics tools used by VA.gov and My HealtheVet** (read-only is fine). This is because ad hoc access to data is a superpower. Product decisions often need to be made more quickly than the days or weeks of cycle time required to request specific reports. 
2. **Data are a tool, not a goal.** We aim to request the minimum amount of information needed to do Modernization rather than a comprehensive inventory of every thing that can be viewed or clicked. The former will help us get going and the latter has little value. 

# Data Needed
Direct access to analytics tools is strongly preferred to reports. 

## My HealtheVet
### Login
- Number of user accounts by type (ex., basic)
- Number of user accounts by role (ex., caregiver) >> Do we have this data?
- Number of user accounts active by role, last 90 days
- Number of user accounts active by type, last 90 days
- Number of auth attempts by method (ex., MHV, ID.me), last 90 days
- Number of failed auth attempts by method, last 90 days
- Number of user accounts by type and available auth methods
- Number of user accounts by role and available auth methods
- Number of active user accounts last 90 days, by type and available auth methods
- Number of auth attempts per user, for all users active in last 90 days (anonymized)
- Number of failed auth attempts per user, for all users active in last 90 days (anonymized)
- Number of authenticated users coming from VA.gov
- Number of authenticated users comng from eBenefits

### Messages
Let's share info with the Secure Messaging Team. Hopefully they have some good numbers, too. 
- Number of secure messages from MHV users per month (Or use last 90 days for all of these?)
- Number of secure messages from desktop per month
- Number of secure messages from mobile per month

### Health Records
- Number of users who self report data, past 90 days (maybe longer time range)
- Top pages where they self report data, past 90 days 

### Prescriptions
- Number of requests for refill per month
- Number of prescriptions that could be tracked per month

### Appointments
- Number of page views for "View My VA Appointments" page per month
- Number of page views for "Schedule or Cancel a VA Appointment Online" page per month
- Number of users who "jump" to VA.gov from MHV to schedule an appointment per month

### Search
- Top search terms, past year (or 6 months)

### Page Views and Sessions
- Unique page views per month
- Repeat page views per month
- Sessions per month

### Traffic Sources
- Entry pages ranked by num sessions, last 90 days
- Exit pages ranked by num sessions, last 90 days
- Referral sources ranked by num sessions, last 90 days
- Referral destinations ranked by num sessions, last 90 days

### Device Usage
- Desktop, tablet, and mobile usage, past year (or 6 months)

### Demographics
- Gender breakdown, past year (or 6 months)
- Age breakdown, past year (or 6 months)
- Age breakdown correlated to pages with top views per month, past year (or 6 months)

## VA.gov
- Number of user accounts by login method (ex., ID.me, login.gov, both, none)

TBD: Refer back to specific content pages which reference the big four affordances. 

## VA contextual
- Number of Veterans potentially eligible for Health Care
- Number of Veterans deemed eligible for Health Care
- Number of Vererans used Health Care, last 12 months
- Number of Veterans with a disability rating
- Number of Veterans receiving disability
- Number of Veterans with a disability rating by health care status (unknown, eligible, used last 12 months)
- Number of Veterans receiving disability by health care status (unknown, eligible, used last 12 months)
