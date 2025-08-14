# Roadmap to DSLogon Credential Deprecation 

## Problem Summary  
VA is currently maintaining outdated sign-in options—such as **DS Logon**—that are **confusing to users** and **not aligned with federal digital identity standards**. Veterans who previously used these legacy credentials now need to transition to modern sign-in methods: **Login.gov** or **ID.me**.

Continuing to offer multiple, redundant credentials leads to:
- Increased support issues and confusion for users
- Higher maintenance costs and tech debt
- Degraded system performance and UX inconsistency

## Veteran-Facing Benefits
- Veterans will use only **Login.gov** or **ID.me**, the VA’s modern, secure identity providers.
- Reduced friction and confusion during login.
- Fewer support tickets and faster resolution.

## Engineering 
- Architecture overview
- Security overview

---

## 📆 Roadmap Overview
_Note: The roadmap below does NOT reflect anything about the sunsetting of MHV credentials which is set for the same deadline._

| Timeline          | Epic                                | Description                                                                 |
|----------------|-------------------------------------|-----------------------------------------------------------------------------|
| 🔍 5.25    | **[Communications Plan](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/18?visibleFields=%5B%22Title%22%2C%22Parent+issue%22%2C%22Status%22%2C%22Type%22%2C%22Labels%22%2C189270599%5D&filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%2395)**             | Establish cross-team messaging strategy and set a monthly update cadence.  | [Board](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?visibleFields=%5B%22Title%22%2C%22Status%22%2C184832766%2C%22Labels%22%2C189270599%2C%22Parent+issue%22%5D&groupedBy%5BcolumnId%5D=Parent+issue&filterQuery=milestone%3A%223+2025+Q2+DS+Logon+Credential+Deprecation%22+parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%2395+&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=184832766&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Parent+issue)
| 🔍 5.25    | **[Identity and VFS Content Inventory](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/18?visibleFields=%5B%22Title%22%2C%22Parent+issue%22%2C%22Status%22%2C%22Type%22%2C%22Labels%22%2C189270599%5D&filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%23158)** | Audit all VA.gov pages for DS Logon references; align with Identity & VFS teams. |
| 🔍 5.25    | **[Use Case Research](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?visibleFields=%5B%22Title%22%2C%22Status%22%2C184832766%2C%22Labels%22%2C189270599%2C%22Parent+issue%22%5D&groupedBy%5BcolumnId%5D=Parent+issue&filterQuery=158milestone%3A%223+2025+Q2+DS+Logon+Credential+Deprecation%22+parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%23169&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=184832766&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Parent+issue)**             | Establish a list of use cases reliant on DSLogon.  |
| 💡 5.25    | **[Innovative Ideas](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1747074085344/599fed3488dc77e6a083e1c70f19962e2b3f022c)** | What ideas do we have to get users switched over to the modern credential? _Within the scope and timeline of this work._ |
| ⚠️ 6.25  | **[Interstitial](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?visibleFields=%5B%22Title%22%2C%22Status%22%2C184832766%2C%22Labels%22%2C189270599%2C%22Parent+issue%22%5D&groupedBy%5BcolumnId%5D=Parent+issue&filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%2398&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=184832766&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Parent+issue)**                    | Create an interstitial notice informing users of the deprecation and transition path. _In PROD beginning of July._
| 📝 7.25     | **[Content Updates Execution](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?visibleFields=%5B%22Title%22%2C%22Status%22%2C184832766%2C%22Labels%22%2C189270599%2C%22Parent+issue%22%5D&groupedBy%5BcolumnId%5D=Parent+issue&filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%2396&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=184832766&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Parent+issue)**       | Implement edits to VA.gov and Drupal content where DS Logon is referenced.            
| ⚠️ 8.25  | **[Feature Flag Implementation](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%2397)**      | Add logic to toggle DS Logon availability behind a feature flag. _PROD ready beginning of September._          |
| 🚀 10.25      | **[Release Plan + Launch](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%2399)**           | Coordinate with comms, support, and product teams to launch with minimal disruption. _Va.gov on 10.1; IAM on 10.2_ |
| 📊 9.2025  | **[Monitoring](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%23161)**                      | Track error rates and feedback from users post-removal.     |
| 📊 11.25  | **[Cleanup](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/12?filterQuery=parent-issue%3Adepartment-of-veterans-affairs%2Fidentity-documentation%23107)**                         | Remove deprecated code, outdated feature flags, and DS Logon support references. |

---
## When we're done:

**WHAT WILL IT LOOK LIKE?**

- DS Logon sign-in paths are fully deprecated.
- Veterans use only Login.gov or ID.me to access digital services.
- Simpler, more consistent user sign-in experience.

**WHAT WILL WE MEASURE?**

- Authentication Metrics: 0% of authentications use MHV or DS Logon by 10/1/2025.
- System Health: Increased uptime and reduced incident volume.
- Credential Adoption: Login.gov and ID.me usage grows.

**Monitoring Tools:**
Datadog: Authentication stats & interstitial metrics
Domo: Sign-in transition dashboards
