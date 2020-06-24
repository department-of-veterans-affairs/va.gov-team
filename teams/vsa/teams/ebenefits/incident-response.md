# eBenefits Incident Response Plan 🔥
In the event of an incident, this document should serve as a useful guide for what to do and when. 
```diff
- It should be noted that members of #vsp-platform-support should be contact and consulted in the event of an issue, even if the issue is application specific, for awareness.
```
## Roles and Responsibilities
| [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)  | [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)  |
|---|---|
| Steve Kovacs, DEPO Lead
Jason Wolf, Product Manager
Kathleen Crawford, Backend Engineer
Derek Dyer, Backend Engineer  |   |

## Services by Feature
### BGS
- **View, add or remove dependents**
  - Static landing page: https://www.va.gov/view-change-dependents
  - View dependents: https://www.va.gov/view-change-dependents/view
  - Add or remove dependents: https://www.va.gov/view-change-dependents/add-remove-form-686c/
- **View my representative**
  - Static landing page: TBD
  - View representative: TBD
- **View my payment history**
  - Static landing page: TBD

### EVSS
- **View my rated disbailities**
  - Static landing page: https://www.va.gov/disability/view-disability-rating/
  - View disbaility rating: https://www.va.gov/disability/view-disability-rating/rating

### None
- **Personalized career planning and guidance (PCPG, CH36)**
  - Static landing page: TBD

## Resources
### Sentry
- [Sentry Configuration Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-configuration.md)
- For VA File number check: 
  - First check is for auth, can they even get into BGS (icn, ssn, participant id)
  - if not, BGS is not invoked
  - if yes, call BGS up
  - if no VA file number, Sentry sends a notification


### Grafana
- ??  
### CloudWatch
- ??  

