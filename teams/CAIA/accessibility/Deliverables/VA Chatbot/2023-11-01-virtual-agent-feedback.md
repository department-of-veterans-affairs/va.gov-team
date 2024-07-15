# 2023-11-01 Chatbot Office Hours Feedback 
- **Date of Office Hours:** 10/31/2023 ([Notes from Office Hours](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67376#issuecomment-1788187746))
- **CAIA A11y Sync and Feedback:** 11/1/2023 ([Shared via Slack](https://dsva.slack.com/archives/C01KTS3F493/p1698868772911999))
- **Next Meeting:** `TBD`

<details><summary>Toggle to view related a11y tickets</summary>
    
- [[CAIA Intake] [a11y Support] Ongoing screen reader testing with Chatbot MHV Prescription Skill team #68026](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68026)
- [[a11y deliverable] Audit: Chatbot MHV Prescriptions Skill - Findings #67376](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67376)
- [[a11y support] Segment Audit: Chatbot MHV Prescription Skill Feature #66754](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754#issuecomment-1753263632)
- [[a11y audit] Finding: Chatbot MHV Prescription Skill 4.2.16: Set expectations #67315](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67315)
</details>
  
## CAIA Reviewers
- Eli 
- Sara
- Jamie
- SK
### Additional Reviewers
- Martha W.
- Brian D.

## CAIA Review

**Thanks for coming to office hours on Tuesday!** 

The entire CAIA team reviewed the notes from that meeting. We didn’t conduct a full audit, but did review the product and align briefly with Martha Wilkes (OCTO, VA PO) and Brian DeConinck from Platform Governance, too.

Here are our follow up notes, below, after our review.

**Please tag us and reach with _any_ questions,** and let us know if we can do anything to support your next steps.
- [va-virtual-agent-public](https://dsva.slack.com/archives/C01KTS3F493) 
- [sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH)

  
## Keyboard Navigation

### Microsoft's Suggested Solution 

The chatbot navigation, Microsoft is following - which is the ARIA Authoring Practices guide (APG) from W3C and treating the chatbot as a grid widget. From [Microsoft accessibility documentation](https://github.com/microsoft/BotFramework-WebChat/blob/main/docs/ACCESSIBILITY.md#ux-navigating-activities-in-the-chat-history) implementation.

### CAIA Feedback

The layout grid pattern is [not currently considered ready for production](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/layout-grids/) use, according to W3C.

> **From the W3C page:** There may be support gaps in some browser and assistive technology combinations, especially for mobile/touch devices. Testing code based on this example with assistive technologies is essential before considering use in production systems.

- **Chatbot Rationale**: If you do decide to move forward following the layout grid pattern, we are curious to know more about why this necessitates unique keyboard controls, different than the defaults in the browser.
    - We aren't saying that you shouldn't do this, but we would like to understand why this choice has been made, since it significantly deviates from user expectations.
- **Related Issue:** This relates to [the keyboard trap that we flagged](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754#issuecomment-1753263632), wherein the user is technically able to navigate away from it, but *only* if they understand that the chatbot uses keyboard controls that aren't the browser default. 

#### OCTO Feedback

> **Martha Wilkes, VA PO adds:** We're worried about gaps on mobile. CAIA isn't currently able to test on mobile.

##### High Impact for Primary Devices
- Martha feels that the prescription skill of the chatbot has a high enough impact that we need to understand how it works on mobile before launch.
- Per the Blinded Veterans Association, many Veterans are given iPhones and/or iPads to use as their primary devices.

## Skipping messages

**We will divide this feedback into multiple parts:** 

- Messages not being read back by VoiceOver
- Delayed message update

### Messages not being read back by VoiceOver

Cursory testing shows that this issue is potentially limited to VoiceOver. That being said, we feel it should still be addressed since VoiceOver users make up a substantial population of assistive tech users who will interact with this feature and product.

We also haven't been able to test this on mobile, but it is worth asking what Android TalkBack does here, too.

### Delayed message update

An adjustment was made to delay incoming messages to ensure that the full contents of each message were available and read back to assistive tech users. 

#### New Issues

**This update has introduced a few items we'd like to flag:**
- it assumes a set reading speed, screenreader users are able to set the reading speed of their screenreader, so, some have it read slowly while some have it read very very quickly
- it doesn't provide feedback that something is happening behind the scenes, or that another message may appear

##### User Expectations
**Related Issue:** This is similar to [another issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67315), where no clear expectation was being set for the user. This is different, but we think related because the long delay with no clear indication of what is happening leaves people wondering what to do and what is happening.


## Next steps

CAIA is happy to continue to support ya'll as you see fit. OCTO c/o Martha and CAIA is recommending that one or more CAIA accessibility specialists embed with your team for a short time to provide more direct assistance with tasks like testing and design feedback.

### Update 11/2/2023
- Eli will be the primary embedded CAIA team member.
- SK, Sara and Jamie will be rotating support. 
