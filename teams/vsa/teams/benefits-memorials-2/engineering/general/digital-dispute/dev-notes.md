# Digital Dispute form 
I think ideally we stick with as much vanilla form system stuff as we can. I do believe there's generic platform components for both Veteran Info and Contact information, so we can even leverage those for this new app instead of lifting from FSR. Besides that it's looking like a radio button and text input field with varying copy depending on radio button selection. 

## Remaining work
What's currently in the vets-website branch is a pretty high level skeleton, all the pages and basic functionaility are laid out, and remaining FE work is ticketed in the epic (**Digital Dispute (VBA) - FE/BE Development [#96176](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96176)**). We followed the setup progress in [VA.gov application generator](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-gov-application-generator), but noticed a few steps that we may still need to do in the more detailed **[Creating a new application](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application)** documentation.

**Note:** You will need the content-build changes locally if you want to test the application

### What's left outside of fleshing out the pages? 
Steps missed from [Manual Setup](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application#Creatinganewapplication-Manualsetup) that need to be completed: 
- [ ] 3. Add an entry to `src/applications/registry.json` in the `content-build`
  - See `content-build` PR listed below. All of the test were passing but it was still preventing merge for some reason. Might have been waiting for the vets-website deploy first. 
- [ ] 4. Add your new application to the [vets-api source app middleware configuration](https://github.com/department-of-veterans-affairs/vets-api/blob/c80b278e3c8cc3014035d6ec3670dfaa18ff4368/lib/source_app_middleware.rb#L23)
  - See "Middleware config PR" in PR list below. Lots of good info listed in that PR including a link to a platform support convo on the adding/removing of some apps from that list. It's the more correct way of doing it. 
- [ ] 6. [Update revproxy config](https://depo-platform-documentation.scrollhelp.site/developer-docs/routing#Routing-ReverseProxyConfig) to reflect the addition of your application so that internal links created via react-routerwill work properly.
  - See "Revproxy PR" in list below. FSR isn't currently in that list, but including it may help with some various redirect stuffs. 

### PRs for reference
- [x] `vets-website`
  department-of-veterans-affairs/vets-website/pull/33332
- [x] `vets-api` for prefill
department-of-veterans-affairs/vets-api/pull/19545
- [x] `vets-json-schema`
department-of-veterans-affairs/vets-json-schema/pull/961
- [ ] `content-build`
department-of-veterans-affairs/content-build/pull/2393
- [ ] Middleware config PR
department-of-veterans-affairs/vets-api/pull/20292
- [ ] Revproxy PR
department-of-veterans-affairs/vsp-platform-revproxy/pull/816

### Tickets with a bunch of helpful stuff
- Follow on ticket to complete the missinng steps above that didn't quite get finished
department-of-veterans-affairs/va.gov-team/issues/99407
- FE ticket most of the initial dev work was completed under
department-of-veterans-affairs/va.gov-team#97002


## Helpful links
### Designs
- [Figma mockups](https://www.figma.com/design/D8tfoPhUZlqBUomMTxzkQb/Dispute-Form-(VHA-VBA)?node-id=19-220&node-type=canvas&t=SBl5HnEgdHTYujeY-0)

- **[CAIA Mural with url definitions and other helpful stuffs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1731461600152/93a4a19b003f01b86534471cb686f81bf073e4a2)**
  - **[Platform URL Guidance](https://design.va.gov/components/url-standards/)**
- **[Slack thread on minimal header](https://dsva.slack.com/archives/C044AGZFG2W/p1727979260362549)**
- [High level User flow](https://www.figma.com/design/D8tfoPhUZlqBUomMTxzkQb/Dispute-Form-(VHA-VBA)?node-id=1-339&node-type=section&t=goKw5ro0hQI1r0kX-0)
  
### Collab cycle touchpoints 
- [Collaboration Cycle Overview](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/overview)
  - [Architecture Intent](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/architecture-intent) - first meeting devs are proper involved in
    - We need to fill out [Architecture Intent meeting template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#architecture-intent-meeting-template) and wow there's a lot we need to fill in here. Both FE and BE support needed to complete.
   
### Tickets
- Super epic [Digital Debt Dispute (VBA) #82003](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/gh/department-of-veterans-affairs/va.gov-team/82003)
  - FE Epic [Digital Dispute (VBA) - FE/BE Development#96176](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/gh/department-of-veterans-affairs/va.gov-team/96176)
  - Design Epic [Digital Dispute (VBA) - Research & Design#82950
](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/gh/department-of-veterans-affairs/va.gov-team/82950)

### Platform docs
- [VA Forms Library Overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)
  - Steps for making a new form all in one spot
- [VA Forms Library - Getting Started with the Forms Library: Create a new form application with Yeoman generator](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-getting-started-with-the-forms-li)
  - What's the respondent burden of this form in minutes?
  - What's the benefit description for this form?
  - See **Stuff we need** above

---

## Completed stuff


### (old) TODO
<details>
	<summary>List of tickets and todos</summary>
	
#### Tickets made after/during initial implementation
Was a todo list now a crummy reference, leaving for posterity
- [x] Convert to minimal header - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97877): 
- [x] Refine: Style & Complete (one ticket each)
	- [x] Introduction page - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97887): 
	- [x] `/personal-information` - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97890)
 	- [x] `/contact-information` - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97903)
  	  - [ ] Need clarification on which phone number to list
      - [ ] Update to new design pattern (following 1010ezr)
	- [x] `/debt-selection` - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97899)
	- [x] `/existence-or-amount` - no ticket for now, should be gucci
	- [x] `/dispute-reason` - no ticket for now, should be gucci
	- [x] Review & Submit - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97900)
	- [x] Confirmation page - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97901) 
- [x] One ticket for transform & submit stuffs - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97907)
  - [x] `transform` for submission
  - [x] `submission` definition (see 5655)
  - [x] Include Sentry logging and alert message
- [x] LOA messaging - including alert? - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97919)
- [x] `vets-json-schema` repo update (finalize need for ssn) *needed for launch*
- [x] `downtime` section (see 5655?) - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97910)
- [x] `getHelp` aka Need Help? - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97913)
- [x] One ticket for messaging/custom text - [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97915)
  - [x] `savedFormMessages` 
  - [x] `saveInProgress` (messages)
  - [x] `customText`? (see 5655 for examples)
</details>

### Need from design
- [x] Error messaging 
	- [x] `/existence-or-amount` (neither option is selected selected)
	- [x] `/dispute-reason` (no text entered)
	- [x] Failure to submit (`/review-and-submit`)
	- [x] Error fetching debts `/debt-selection` (currently using FSR for debts only)

### Stuff we need to start
- [x] **Initial designs**
- [x] **URL name** - must have to really start dev work
  - Generally decided with CAIA input
- [x] Form name (in `vets-website`)
  - ~~`digital-dispute` seems the most reasonable~~
  - `dispute-debt` so it's a little more specific?
- [x] Form submission destination (in `vets-api`)
- [x] Background jobs? (`vets-api`)
- [x] Data storage? (`vets-api`)
