# DRAFT Digital Health Modernization Product Roadmap
This is a rough draft of a Digital Health Modernization roadmap. It has no buy-in from teams who would be affected. It exists as a conversation-starter. Assumes [Product Strategy A](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/README.md). It assumes My HealtheVet will continue to operate in parallel during the bulk of this work.

# Context

## Vision
- Paraphrase: A single, high-quality UX for each Veteran-facing tool. 

## Mission
- Create a viable, comprehensive patient portal on VA.gov before Cerner de facto usurps running VA's patient portal. 

## Roadmap
### Now
Items in Now are not strongly order-dependent. This describes how we might agile-ly add core clinical affordances to VA.gov. 

#### Optimize a single VA.gov health page (ex., secure message) for call to action over content.

- A/B test against current state. 
- Measure conversion funnel to good actions, and bounce rate between A and B. 
- Tests hypothesis that modernization = action over understanding. 
- Impacts public website, authenticated experience crews and secure message crews. 

#### Migrate MHV accounts into an appropriate single sign-on solution. 

- In a way that minimizes disruption to Veterans.
- Very likely ID.ME and / or Login.gov.
- Measure conversion funnel to good actions and compare to baseline. 
- Tests hypothesis that login is a barrier. 
- Impacts identity crew and MHV team.

#### Optimize a VA.gov health page for action over content (ex., secure message). 

- Measure conversion funnel to good actions, and bounce rate between va.gov and My HealtheVet equivalent. 
- Tests hypothesis that people will be willing to use tools directly on va.gov.
- Surfaces potential usability risk of increasing fragmentation before we reduce it. 
- Affects Secure Message and potentially MHV teams. 

#### Integrate a VA.gov health affordance with Cerner (ex., secure inbox includes messages from Cerner and VistA facilities).

- Addresses feasibilty risk of one patient UX, two infrastructures.
- Affects Cerner team, potentially Flagship Mobile App team, Secure Message team, potentially MHV team (if we use their APIs). 

#### Add Health call to actions to prominent place on unauthenticated VA.gov home. 

- Measure total number of Veterans using any online account for health transactions. 
- Tests hypothesis that some VA.gov users may not know or feel eligible for care (there are more VA.gov than MHV users). 
- Affects public website crew. 


### Next
Items in next **are** order-dependent. This describes how we might transition users from My HealtheVet to VA.gov. 

- Create a health "home" on VA.gov so the tools we've created function cohesively
- Market an opt-in alpha of health.VA.gov, (perhaps banner) on MHV. Show to small number of people. Get feedback. 
- Do another vertical slice (ex., appointments) that adds net new value to va.gov. Addresses feasibility risk of using APIs that were developed a couple years ago for vets.gov.
- Do another vertical slice until the big four (appointments, meds, records, messages) are done. 
- Market an opt-in beta of health.va.gov, on MHV. Show to lots of people, maybe everyone. Get feedback. 
- Potentially begin to add net new value here by designing around user journeys, modes or jobs to be done for common needs (ex., an entire primary care visit) — 
including incorporating claims, billing, reimbursements as necessary. 

### Later

- Create an opt-out beta of VA.gov. Slowlly transition users into this.
- Begin to migrate or deprecate long tail of functionality from MHV. 
- Sunset MHV. 

## Notes

- This strategy barely changes if we instead iterate on MHV in place before lifting and shifting it over to feel more integrated into VA.gov's IA. There would be more IA work on MHV. Whether to do this or the above needs serious technical analysis to be decided. 

## Risks
See https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product.
