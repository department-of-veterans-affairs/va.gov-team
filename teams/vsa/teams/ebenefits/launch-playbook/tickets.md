# Common Tickets

## Investigate and Define API Endpoints for {feature}
### Story
As an eBenefits Team member, I want to be able to define what endpoints are being used to send to the frontend

### Tasks
- Identify the service or stack that may house the endpoints
- Define those endpoints and discuss with other team members

### Acceptance Criteria
- [ ] Document the endpoints and share with { } 

```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Implement API Endpoints for {feature}
### Story
As a member of the eBenefits Team, I want to be utilize the endpoints so that data is dynamic and relelvenat to the end user

### Tasks
- Test, validate endpoints

### Acceptance Criteria
- [ ] Endpoints are being successfully sent and displayed

```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Testing: E2E & Unit for {feature}
### Story
As a member of the eBenefits Team, I want to test both the components and the full page of the feature we are working on.

### Task
- Define the major testing domains for this feature (e.g., load testing, usability, website responsiveness, integration, etc) and reference any existing documentation and create a test infrastructure.
- Create unit tests for any new component logic.
- Create e2e tests for any new UI functionality. 

### Acceptance Criteria
- [ ] A testing plan has been defined.
- [ ] Test coverage is above 80% threshold.

```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Testing: 508 for {feature}
### Story
As an frontend engineer, I want a 508 test, so I know my application is as accessible as possible, and accounts for various different user scenarios. 

### Task
- Define the 508 testing domains for this feature and reference any existing documentation and create a test infrastructure.
- Create unit tests for any new component logic.
- Create e2e tests for any new UI functionality. 
- Keyboard functionality/accessibility
- Onscreen, color contrast, color blind review

### Acceptance Criteria
- [ ] New feature passes aXe tests in chrome.
- [ ] Schedule a review with 508 Team (Trevor Pierce or Jennifer Strickland) 

```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Create Research Plan for {feature}
### Story
As a design researcher, I want to create a consistent plan that encompasses the guidance of approved methods and all the components for the item I am researching.

### Goal
To validate my hypothesis and ensure that I am applying user centered designs before engineers start to build. 

### Considerations 
Previous Reasearch Plans used:
- [General VSA eBenefits Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research/discovery-research-plan.md)

### Task
- Document a research plan to include:
  - Research method (moderated user interviews)
  - Participants & Recruitment
  - Timeframe
  - Team Availability
  - Roles (include emails)
  - Seek review before implementation
  
### Acceptance Criteria
- [ ] Research Plan has been reviewed by [Lauren Alexanderson in Recruiting](https://dsva.slack.com/team/U772MC9BQ) ([email](mailto:lauren.alexanderson@va.gov))

```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Create Conversation Guide for {feature}
### Story  
As a design researcher, I want to create a consistent conversation guide that encompasses the guidance of approved methods and all the components for the users I will be communicating with.

### Task
- Document a conversation guide to include:
  - Intro
  - Warm up Questions
  - Navigation
  - Priorities
  - Features
  - Post Interview
  - Thank you and Closing
  
### Acceptance Criteria
- [ ] Conversation Guide has been reviewed by [someone](#) ([email](mailto:#))
```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Usability Session Readout for {feature}
### Goal
After conducting an in-depth usability study, we want to synthesize the information gathered and distill some recommendations for moving forward in creating the feature that best benefit the Veteran.

### Considerations
- Here is the [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/686-form-gating-0220/686-usability-research-plan.md) for this study.

### Tasks
- [ ] Review notes, audio
- [ ] Data analysis
- [ ] Report findings of Usability testing of 686 pathfinding, workflow selection and general usability 

### Acceptance Criteria
- [ ] Create a presentation to include recommendations in long form of usability testing and key findings, PowerPoint (with pdf supplement) format is probably preferred

```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
## Request QA Review for {feature}
### Story  
As an engineer, I want to request a review for Security and Load Testing with the QA Team to ensure that my feature meets the requirements for publication so that my pages will safely perform as expected under heavy loads typically found in the VA.gov environment.

### Task
- Provide advance notice `(minimum 1 sprint, preferably 2)`
- Create a QA ticket on GitHub:
- Assign to `tlei123`
- Add the `vsa-qa`, `vsa-ebenefits`, `vsa` label
- Select the Milestone sprint, or otherwise provide due-date for testing results.
- Provide the following info to support testing (via links if documented elsewhere):
  - Staging URL of product/feature
  - UX Design wireframes/comps
  - Copy decks
  - Test-accounts `(usernames for all UX scenarios/flows)`
  
### Acceptance Criteria
- [ ] Review has been reviewed by [Tze-chiu Lei](https://dsva.slack.com/team/UHB9W74TA) ([tze@adhocteam.us](mailto:tze@adhocteam.us)) or [Peter Hill](https://dsva.slack.com/team/UL0FKGBDY) ([peter.hill@oddball.io](mailto:peter.hill@oddball.io))
```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```

## Build the {feature-name} from mockup
### Goal
In order to get this feature into staging, it needs to be built and iterated on based on agreed upon mockups. With the mockups provided and a list of descriptions and background the feature can be viewed first locally then moved to staging.

### Tasks
- Review the mockup for any changes or areas that don't seem to make sense
  - Ask questions in the event that something is not clear

### Background
- Provide walk through screen by screen of the mockup highlighting the areas of copy, components, and other areas of interest ensuring they can be found inside the component library.
- Slide #
- Header (copy)
- Body (component)
  - more details on that

### Acceptance Criteria
- [ ] Built version is shown to team and shared with Designer for further iteration, if needed.
```diff
+ + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
```
