
## LGY Engineering Notes

### LGY Call 4/29/21
- Initial api call from VA.gov to LGY requires ICN and EDIPI, and returns a status of `eligible`, `ineligible`, or `unable to determine`.
- If eligible, VA.gov team will generate a COE and present it to the user. 
- If unable to determine, user will fill out a form equivalent to 26-1880.
- Does COE get automatically generated on LGY side - Yes.

---

### Research Spike into using LGY for prefill 5/27/21
#### Summary
LGY prefers to use their own data for a veteran as the source of truth when pre-filling a 26-1880 form. The reason for this is to mitigate any potential discrepencies in data between what LGY already has on file and what may be housed in other VA business systems. 

#### Findings
LGY doesn't currently exist as a source of prefill for VA.gov, and the process required to add a new system as a source of prefill is laborious and complex. It involves:
  - opening up ports on our end, managing our own IP ranges
  - procurring information on LGY IP ranges, their ports, etc
  - provisioning all necessary environments for prefill (local, dev, staging, production)

Fortunately, LGY is already integrating with Lighthouse to provide a selection of APIs to loan providers, so some of the networking hurdles may already be completed. Currently there is no endpoint available via Lighthouse for retreiving the relevant user data needed for prefilling the 26-1880 (loan history and potentially service history). [More info on lighthouse work here](https://developer.va.gov/explore/benefits/docs/loan_guaranty?version=current)

Regardless of whether or not we choose to go through Lighthouse or LGY directly, we will potentially need to have a chat with #vsp-ato, depending on the type of new data we're storing. 

#### Next steps
1. Talk with Lighthouse about the feasibility of having them set up an endpoint we can query that returns loan history and service history data for a veteran applying for a COE
2. Pending step 1, create a new Form Profile model that can query for the history data. [Similar to this](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form_profiles/va_5655.rb#L10)

#### Sources
- [slack conversation around new integrations, lighthouse, and prefill](https://dsva.slack.com/archives/CBU0KDSB1/p1622047365044400)
- [Lighthouse API docs](https://developer.va.gov/explore/benefits/docs/loan_guaranty?version=current)
- [Example of creating a new Form Profile with specific prefill needs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form_profiles/va_5655.rb#L10)
