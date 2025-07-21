# Representative Status in Profile

**Last Updated: July 2025**

The `va.gov/profile/accredited-representative` Profile subpage reflects a user's (Veteran or claimant) current representative status. **This feature released in March 2025** and is managed by the feature `flag representative_status_enable_v2_features`.  

## Common Use Cases

### User logs in with LOA3 account

**Status Code: 200**
1. Represented by a Veteran Service Organization (VSO) 
3. Represented by an accredited attorney
4. Represented by a claims agent
5. No representation

**Status Codes: 404, 403, 401, 504, 500**
1. Error state
<img width="383" height="114" alt="image" src="https://github.com/user-attachments/assets/d8847fc4-2438-4b38-be0f-d7ca50f21ff1" />


### User logs in with LOA1 account

Deafulting to [Profile: LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md).  Accredited representative information is not available for LOA1 users. 

## Testing in Staging

1. https://staging.va.gov/profile/accredited-representative
2. [Test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-accredited-representation-management-poa.csv)

## Related Resources

1. [Sitewide Representative Status product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget)
    1. [Contact Center guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/contact-center) (experience screenshots, including user states and error messages)
    2. [Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/launch-materials) (architecture and data flow diagrams, playbook / incident response plan)
2. Datadog dashboards
    1. [Authenticated Experience: Profile - Representative Status](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=paused&from_ts=1744839001906&to_ts=1744842601906&live=false&tile_focus=2305414365356432) 
    2. [ARM: Representative Status](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status-widget?fromUser=false&refresh_mode=sliding&from_ts=1742250564464&to_ts=1744842564464&live=true)
3. [Figma designs for Representative Status - In Profile](https://www.figma.com/design/bzbwObT9hiItve0q3cQX9c/Find-and-Appoint-a-Representative?node-id=2462-162679)
4. [User Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753141051322/aa958c4edc0a9c402e4c6a53709dfff823ce96e3)
5. TestRail artifacts from Staging Review
    1. [Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/6712)
    2. [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/1309)
    3. [Summary of Defects](https://dsvavsp.testrail.io/index.php?/reports/view/1307)
6. Past research for the Representative Status widget
    1. [Navigate to where you expect to find your assigned representative on VA.gov.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-11-ARM-findarep-nav-usertest/research-findings.md#task-5--navigate-to-where-you-expect-to-find-your-assigned-representative-on-vagov)
    2. [Show how you would sign-in to see your representative information.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-01-ARM-appointarep-usertest/research-findings.md#task-2--show-how-you-would-sign-in-to-see-your-representative-information)
7. [Accredited Representation Management (ARM) team page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management) (learn more about the contributing team)

