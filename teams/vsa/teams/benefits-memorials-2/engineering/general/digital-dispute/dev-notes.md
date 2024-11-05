# Digital Dispute form 
I think ideally we stick with as much vanilla form system stuff as we can. I do believe there's generic platform components for both Veteran Info and Contact information, so we can even leverage those for this new app instead of lifting from FSR. Besides that it's looking like a radio button and text input field with varying copy depending on radio button selection. 

## Stuff we need 
- [ ] **Initial designs**
- [ ] **URL name** - must have to really start dev work
  - Generally decided with CAIA input
- [x] Form name (in `vets-website`)
  - `digital-dispute` seems the most reasonable
- [ ] Form submission destination (in `vets-api`)
- [ ] Background jobs? (`vets-api`)
- [ ] Data storage? (`vets-api`)

## Helpful links
### Designs
- [Figma mockups](https://www.figma.com/design/D8tfoPhUZlqBUomMTxzkQb/Dispute-Form-(VHA-VBA)?node-id=19-220&node-type=canvas&t=SBl5HnEgdHTYujeY-0)
- [User flow](https://www.figma.com/design/D8tfoPhUZlqBUomMTxzkQb/Dispute-Form-(VHA-VBA)?node-id=1-339&node-type=section&t=goKw5ro0hQI1r0kX-0)  

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
## Questions that need answers
