## Tasks associated with making url changes

This document will help to guide task lists and decisionmaking if similar changes are needed in the future.

### Problem statement 

In this scenario, the existing leadership list pages were all at _*health-care/leadership_, rather than at _*health-care/about-us/leadership_.

<details> 
<summary> The -health-care/leadership url was hardcoded in the person_profile liquid template as part of this effect in the left nav </summary>
  
![image](https://user-images.githubusercontent.com/55411834/127915675-0967ac22-b813-4f2f-bc07-f0a3e4ebdb81.png)
  
</details>

### Issues for reference
Epic in [#5500](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5500)

### Tasks
 Team	| 	Task | Issue
---	| 	--- | ---
Facilities	| 	Change hardcoded Leadership menu link | [#25606 PR](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25606) (Fix - Change hardcoded Leadership menu link, check cms feature flag content-build#276)
CMS	| 	Add FEATURE_CHANGE_LEADERSHIP_LINK feature flag as enabled on prod | [#5671](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5671): Export the FEATURE_CHANGE_LEADERSHIP_LINK feature flag created in Tugboat to code, and release to CMS prod
Facilities	| 	Re-test Fix - Change hardcoded Leadership menu link, check cms feature flag content-build#276 (comment) in Tugboat then merge
CMS	| 	Update URL alias pattern for Leadership to include /about-us/  | [#5669](https://github.com/department-of-veterans-affairs/content-build/pull/276#issue-674971212) Create PR to update Leadership List URL alias pattern.
VAMC upgrade	| 	Content freeze on creating new Leadership List URLs
Public Websites	| 	Redirect Request [WEEK OF JULY 5]: VAMC Leadership pages | [#26475](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26475): Work with Mikki to prepare a redirect PR(s) for Pittsburgh leadership page, and any leadership pages that get launched before this gets released. **Decision July 1: no redirects needed.**
CMS	| 	Coordinate with IA and Facilities on Leadership page redirects | [#5670](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5670): Update URLs on Prod for all existing leadership pages, to use ~health-care/about-us/leadership instead of ~health-care/about/leadership AND remove feature flag, and then trigger content release
CMS	| 	Trigger devops team to merge redirect PR(s) | **Decision July 1: no redirects needed.**
VAMC upgrade	| 	Resume Leadership List page creation
Facilities	| 	Remove flag for Leadership url change | [#27056](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25606) Facilities remove dependency on FEATURE_CHANGE_LEADERSHIP_LINK feature flag
CMS	| 	Remove FEATURE_CHANGE_LEADERSHIP_LINK | [#5855](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5855)
