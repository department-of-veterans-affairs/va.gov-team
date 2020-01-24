## DISCOVERY BRIEF

### Problem Statement / How Might We statements

The login experience on VA.gov today is tailored specifically to the Veteran persona. We're at the point now, where in order to continue expanding the VA.gov experience to meet additional use cases, we need to expand identity to work for more personas who might be using VA.gov to do things on behalf of a Veteran or for themselves: Caregivers, Representatives, Dependents, and people who are multiple persona types at once (like someone who is both a Veteran and Dependent). There are limitations in the way the Identity solution is set up today, that prevents VA.gov teams from delivering functionality that adequately meets needs of these new personas and use cases.

Also there's not really a govt person anymore w/high level eyes on "Identity" just VA.gov Identity.

- How might we leverage existing examples of "delegation" (from MHV) to enhance VA.gov's identity solution to enable users to log in and perform actions on behalf of one or many Veterans?

- How might we update the way we handle user types to enable VA.gov to better customize the experience (i.e. Caregiver, i.e. Dependents, etc)?

- What VA forms might enable users to act on behalf of other users?

- How might Identity delegation introduce additional risk into the ecosystem? (giving access to wrong data, given we haven't done this kind of delegation stuff before, and it complicates the model, and were in a stat where all downstream systems today trust us to ask for the right thing and don't really double check it, so puts us in the seat of having to get it entirely right ourselves)

- Risks related to stability. Are there parts of the experience that introduce performance issues wrt Veteren-facing or Veteran-adjascent experiences (given our monitoring role) that come from Identity, like DS Logon?

- How do we audit log across all systems we interact w/in a cohesive way?

- What's the ideal state of the world? (BEs we talk to and not just ask "what user are you talking about" but using a access token, them doing some auth checking themselves and not just trusting that we're asking for the right thing)

- Could we designsometthing like that (designing defense in depth, multi layers of protection to prevent catastrophic failure) so when/if we have this kind of a user relatted failure, if it's high profile, we have something to fall back on, we have ideas for waht to do, and maybe now we have the momentum to kick off cross-system efforts.

### What Sprint Teams Are Associated with this Discovery? 
- VSP-Identity

## What other teams are simultaneously working on Identity solutions?
- SSO/Login Integration (SSOe?)
- eBenefits
- Caregiver team
- Authenticated Experience team
- VA Online Scheduling team

## What are the priorities of these other teams?

- Delegation
- DS Logon is a barrier to access
- Password requirements are burdensome
- Veterans and caregivers desire a single, better system
- Veterans want secure, trustworthy systems
- Caregivers lack the access they need
- DS Logon is perceived as outdated and dysfunctional
- Login support
- Mobile access
- Veterans have little memory of account set-up

## How might our (Platform) priorities be similar or different?


## Who are the stakeholders?

#### VA Stakeholders
- MHV Delegation team
- IAM?
- MCT?
- DEPO / USDS?

#### Beta users
- Likely authenticated experience team

#### Other teams leading other Identity solutions
- 

#### Systems we're dependent upon
- 

#### Existing research
- There's a wealth of existing research, incl recent VA MCT research engagement around DS Logon.

---

Copy and paste this document into your project's folder and fill it out!


### Discovery Sprint Roles
See also: Discovery Sprint How-to about [makeup of a discovery sprint team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md).

* Product Lead:
* Discovery Sprint Lead:
* Engineer:
* Designer:
* Researcher:
* Other people from the Sprint Team:
* SME:

### Stakeholders
* VA business owner:
* Stakeholders who will be involved or interviewed:

## DISCOVERY PLANNING
_To be filled out by Discovery Sprint Team._

### Project Details

* What do we know?
* What don't we know?
* Are any of the above assumptions that need to be verified?
* How are we going to find out answers? (There are tons of different methods to choose from depending on your project goals, resources, and time constraints. Checkout the methods and templates provided in the [Discovery Toolkit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) and consult the [Research Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/research).)
* What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
* Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
* What secondary research should we do (google, facebook, internal documents)?
* Are there any intentional project constraints (things we're intentionally deeming out of scope)?
* Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?


### Timeline
See also: [sample discovery sprint schedule](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/sample-discovery-sprint-schedule.md).

* Are there any hard and fast deadlines for completing the discovery work?
* When will the following take place?
  * Discovery Prep:
  * Discovery (ideally 1-2 weeks):
  * User Research:
  * Complete & Readout:

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)

