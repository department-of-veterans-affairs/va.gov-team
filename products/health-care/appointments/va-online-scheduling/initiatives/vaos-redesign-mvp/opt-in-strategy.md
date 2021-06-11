## Goals
* Enable team to scale up / down the number of veterans able to opt-in without requiring a production deploy
* Enable team to roll back usage or even reset opt-ins
* Enable granular control over how many veterans use the new tool
* Veterans should be able to switch between the new & legacy tools as needed & the legacy tool should continue to be easy to find.
* Solution should be easy to implement and easy to rip out once tool is fully rolled out

## How are other teams doing this on VA.gov?
### 526 Disability Claims
Now fully live, so this section is from memory
- Disability compensation claims content page had promo banner pointing people to an opt-in page
- Opt-in page included a CTA with a random number generator that allowed an eng-specified percent of veterans to sign up
- The percent was not configurable but rather had to be hardcoded and updated via daily deploys
- Veterans who were opted into the beta saw a widget on the content page that allowed them to go to the form start page

### Change Direct Deposit
https://www.va.gov/change-direct-deposit/
- Messaging explaining slow rollout and feature not available for everyone
  - Messaging includes link back to existing process on eBen
- CTA either asks veteran to log in or directs veteran to go to his / her profile
- Profile either does, or does not, have a direct deposit section.

## Implementation

### Option 1: Feature flipper + 'Beta Wrapper'
#### `va.gov/health-care/schedule-view-va-appointments` [existing page]
  - Update content & remove duplicate CTAs for MyHealtheVet ([Peggy & Jen working on this](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2525))
  - Add link & content for opting into the new VAOS experience on va.gov
    - How? 'Promo banner', Call to Action component, or something else?
    - All veterans should see this opt-in link  
#### `va.gov/health-care/schedule-view-va-appointments/opt-in` [proposed new page]
  - Add content explaining the new VAOS tool and what opting in gets you
  - Also how you can continue to use the existing / legacy tool
  - Add a CTA that actually opts you into new VAOS using the existing beta wrapper code & beta registration in vets-api
  - If veteran already opted in, CTA should say so and give link to the new tool
  
#### `va.gov/health-care/schedule-view-va-appointments/appointments` [app root]
  - Veterans either see their dashboard or a page that links you back to the opt-in page

#### Gating Mechanism
- All veterans will see the link on `/schedule-view-va-appointments` to the opt-in page
- CTA on `/opt-in` will be gated using feature-flipper UI's 'percent of users'
  - The CTA will show one of several messages
    - Logged in veterans
      - Will see opt-in button if they're randomly selected by feature flipper
      - Will see 'full, try later' messaging if they're not selected by feature flipper
      - Will see 'you've already opted into the new VAOS experience' if they're already enrolled
    - Logged out veterans will be asked to sign in before seeing anything
- Additionally, the CTA will check a veteran's healthcare enrollment status and healthcare system registration status (1+ registered systems) before allowing opt-in, because there isn't really any point in allowing veterans to opt-in when they can't use the tool and letting them get that far would lead to disappointment.

### Option 2: Pure Feature Flipper
tl;dr: use feature flipper's 'percent of logged in users' feature to gate who sees the CTA as well as who can access the app.
#### `va.gov/health-care/schedule-view-va-appointments` [existing content page]
- Some veterans will see an opt-in promo banner (or in-page alert / CTA) with a link to the new experience if they're already signed in
- This new CTA will sit alongside the existing legacy VAOS / MHV CTA
- Clicking on the CTA will navigate to the app root

#### `va.gov/health-care/schedule-view-va-appointments/appointments` [existing app page]
- Veterans who are automatically selected by feature flipper will get to see the app
- Veterans who aren't selected will see messaging that they can't use the tool

## Considerations
- Option 2 seems less complicated and would probably be easier to rip out later
- Option 2 gives deploy-free configurability and fine-grained control over ramp up
- Option 1 is a true 'opt-in' system rather than random selection
- Option 1 doesn't require veterans to be logged in before seeing links to use new VAOS application
- Both options allow easy switching between new & legacy VAOS




