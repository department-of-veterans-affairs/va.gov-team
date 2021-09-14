# [Archive] VA Mobile App MVP: Team Working Agreement

## Team Members
- Martha Wilkes (Product Designer, VA)
- Ryan Thurwell (Design Lead, VA)
- Steve Kovac (Product Owner, VA)
- Sophie Myers (Product Lead, Ad Hoc)
- Jonathan Julian (Engineering Lead, Ad Hoc)
- Alastair Dawson (API Engineer, Ad Hoc)
- Bridget Hapner (UX Lead, Ad Hoc)
- Cat Greim (Program Manager, Ad Hoc)
- Erik Breedlove (Program Manager, Digital Foundry)
- Bess Green (Digital Project Strategist, Digital Foundry)
- Ken Li (Mobile Engineer, Digital Foundry)
- Ken Harrison (Mobile Engineer, Digital Foundry)
- John Marchi (Mobile Engineering Lead, Digital Foundry)
- Brandon Levinger (Engineering Support, Digital Foundry)
- Brenda Rocha (Product Support, Digital Foundry)

## VFS Teams

Since the mobile app MVP is replicating functionality that exists on VA.gov today, it makes sense to stay connected to the teams that are currently working on this functionality to ensure we are aware of any changes to their data models. These teams include:
- [VAOS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/265974319dfa35a26f88779f100c7ade50508b56/products/health-care/appointments/va-online-scheduling): Overlap with mobile **Appointment** feature, including appointments page and push notifications for appointment reminders
- [Profile / Logged-in Homepage](https://github.com/department-of-veterans-affairs/va.gov-team/tree/ffbfc47a250788a795cc73a2112c317023a39733/products/identity-personalization/logged-in-homepage/2.0-redesign): Overlap with mobile **Profile**
- [Claims Status Tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/ca2514e624dcf5b245cf662f17839c6c5cee69f0/products/claim-appeal-status/README.md): Overlap with mobile **Claims** features, including the ability to view claims in detail and push notification updates for changes to claim status
## VSP
- **Engineering:** Consulted on engineering decisions 
- **Accessibility:** Consulted on accessibility standards
- **Testing:** Consulted on testing standards 
- **Security:** Consulted on security standards

## Apple + Google
- Consulted as needed

## Workflow
### Timeline
- MVP 1.0 = November, 2020
- MVP 2.0 = February, 2020

### VA Stakeholder Meetings
- **Design:** 2x a week w/ Martha, Ryan and Steve if available 
- **Engineering:** 1x a week w/ Steve (possibly another VA engineering lead?)
- **Product:** 1x a week w/ Steve


### Agile ceremonies - Starting Sept 1
- **Daily standup:** M, T, W, Th, at 1:30 EST and Slack Up on Friday; M/W we review the board, T/Th we provide updates
- **Sprint planning:** Every other W at 1:30 EST
- **Grooming:** Every other Tues
- **Demo:** Every other Tues
- **Retro:** Every other Tues

#### Example of Sprint Cadence:
<img width="638" alt="Screen Shot 2020-09-02 at 11 24 18 AM" src="https://user-images.githubusercontent.com/58053619/92010222-2b999800-ed0f-11ea-8c36-2d0002b61242.png">


### Cadence with VFS teams
- **VAOS:** TBD
- **Profile/Logged-in Homepage team:** biweekly and async through [va-mobile-app](https://dsva.slack.com/archives/C018V2JCWRJ) and [vsa-authd-exp](https://dsva.slack.com/archives/C909ZG2BB) channels
- **Claims Status Tool:** TBD

### Cadence with VSP 
- As needed


## Tools
### Repos
- Content is in va.gov-team
- API code is in vets-api
- Mobile code is in TBD

### Zenhub  
- **Board:** VFS 
- **Workspace:** VA Mobile App
- **Label:** va-mobile-app

**Tickets in a sprint include these pipelines:**
- In progress
- Current sprint

**Tickets outside a sprint include these pipelines:**
- Backlog
- Icebox 

**Story Point System**

1 - the amount of time it takes to drink a cup of coffee  :coffee:

2 - a morning :sunrise:

3 - an afternoon :hamburger:

5 - a full workday :bridge_at_night:

8 - 1.5 days :beer:

If a story is bigger than an 8, we try to break it down to smaller stories or sub-task it so it’s easier to track progress.

### Design tools
- Sketch

### CI/Deployment
- CircleCI

### Monitoring and Analytics
- Firebase

### Remote Testing
- SauceLabs

## Upcoming Key Decisions
### Design
- **Anticipated decisions:** Final information architecture, Final service blueprint, Final UX of app navigation ([see doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/ux-decisions.md#1-we-think-we-should-use-a-bottom-toolbar-and-we-have-designed-a-navigation-ui))
- **Decision maker:** Martha

### Technical
- **Anticipated decisions:** Confirmation of React Native for MVP, Confirmation of SSOe for OAuth
- **Decision maker:** Steve

### Product
- **Anticipated decisions:** Release cadence, When to release, What should be included in the first release
- **Decision maker:** Steve


## Logistics
- [#va-mobile-app](https://dsva.slack.com/archives/C018V2JCWRJ) is where most of our conversations should live (try not to DM as much as possible!)
- Github label is va-mobile-app 
- Copy relevant slack convos into Zenhub tickets

## Project Plan for MVP 1.0 (through November 2020)


<img width="1200" alt="Screen Shot 2020-09-02 at 11 19 56 AM" src="https://user-images.githubusercontent.com/58053619/92009595-5cc59880-ed0e-11ea-9397-90401a213f6d.png">

* Digital Foundry starting on 9/21 (highlighted in blue)

