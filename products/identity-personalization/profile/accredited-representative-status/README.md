# Representative Status in Profile

## Overview

The `va.gov/profile/accredited-representative` Profile subpage reflects a user's (Veteran or claimant) current representative status. **This feature is scheduled to release in March 2025** and is managed by the feature `flag representative_status_enable_v2_features`.  

## Possible User States

1. Represented by a Veteran Service Organization (VSO)
2. Represented by an accredited attorney
3. Represented by a claims agent
4. No representation
5. General error state

## Use Cases

The visibility of this Profile subpage follows standard Profile security practices. 

1. This page is **available** to users with an LOA3 (i.e. identify-verified) account. ✔️
    1. LOA3 accounts have an ICN and a corresponding record in the Master Person Index (MPI), formerly known as the Master Veteran Index (MVI).
2. This page is **not available** to LOA1 users, these users can only see an "Account security" page with a warning to verify their identity.❌ 
3. This page is **not available** to users classified as "incompetent", these users can only see an "Account security" page with a warning "We can't show your information". ❌
4. This page is **not available** to users with a fiduciary appointed, these users can only see an "Account security" page with a warning "We can't show your information". ❌

### Staging experience to verify these use cases

1. https://staging.va.gov/profile/accredited-representative
2. [Test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-accredited-representation-management-poa.csv)

## Related Resources

1. [Comprehensive Representative Status product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget)
    1. [Contact Center guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/contact-center) (experience screenshots, including user states and error messages)
    2. [Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/launch-materials) (architecture and data flow diagrams, playbook / incident response plan)
2. Datadog dashboards
    1. [Authenticated Experience: Profile - Representative Status](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=paused&from_ts=1744839001906&to_ts=1744842601906&live=false&tile_focus=2305414365356432) 
    2. [ARM: Representative Status](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status-widget?fromUser=false&refresh_mode=sliding&from_ts=1742250564464&to_ts=1744842564464&live=true)
3. [Figma designs for Representative Status - In Profile](https://www.figma.com/design/bzbwObT9hiItve0q3cQX9c/Find-and-Appoint-a-Representative?node-id=2462-162679)
4. Past research for the Representative Status widget
    1. [Navigate to where you expect to find your assigned representative on VA.gov.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-11-ARM-findarep-nav-usertest/research-findings.md#task-5--navigate-to-where-you-expect-to-find-your-assigned-representative-on-vagov)
    2. [Show how you would sign-in to see your representative information.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-01-ARM-appointarep-usertest/research-findings.md#task-2--show-how-you-would-sign-in-to-see-your-representative-information)
5. [Accredited Representation Management (ARM) team page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management) (learn more about the contributing team)

