# Cerner Federal Domains Information

### Table of Contents

+ [Cerner Domain View](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/cerner-integration/cerner-domain-info.md#cerner-domain-view)
+ [Timeout Settings](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/cerner-integration/cerner-domain-info.md#timeout-settings)

## Cerner Domain View

![image](https://user-images.githubusercontent.com/113546229/228277455-ac2169b6-0384-4c5d-aabc-16037e1927f8.png)


## Timeout Settings
Cerner applications such as Powerchart have timeout settings that are controlled by Citrix settings

**Standard Citrix Timeouts**
- The current standard Citrix timeout is 1 hour idle, 1 hour disconnected.
- This is the default which is applied if users do not fall in the below active groups:
  - 6-hour Citrix idle timeout global policy based on active directory (AD) group extended6hrtimeout
    - This managed group is purely for OR users and other identified users in secure locations
    - If not part of this group users will default to the 1-hour idle timeout.
    - All users still subject to the 1 hour disconnected timeout.
    - Impravata timeout at secure locations is set to 6 hours
    - Note: Workstations are managed by the government
  - Tracking/Grease boards
    - Currently tracking boards (e.g. Emergency Room) utilize special access which is part of the greasboard AD group.  
    - his AD group has a special global policy applied to it, so it does not have an idle or disconnected Citrix timeout.
    - On site global policies disable the screensaver on these devices as they need to be active at all times.
    - The boards are launched from the local workstation with a special script which launches at device startup which is part of standard deployment
