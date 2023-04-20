# Research Findings

## Key insights

## More details

### Contact Center Surveys
We submitted 4 qualitative data requests for .CSV exports of feedback from Veterans through the intercept survey and feedback button.

1. [Submit a qualitative data request of Medallia’s surveys](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48161) ✔️
- Keywords: Accessibility, screen reader, screenreader, jaws, nvda, voiceover, assistive technology, accessible, accommodation, 508, disability, magnification, zoom, disabilities, caption, keyboard, braille, siri
- Date Range: For the year
- Source: Medallia surveys

2. [Submit a second request with new keywords](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49313) ✔️
- Keywords: PTSD, Anxiety, ADHD, Triggered, Triggering, TBI, magnify, font, text, bluetooth, elderly, mobile, tablet, connection, internet, bandwidth
- Date Range: For the year
- Source: Medallia surveys

3. [Submit a third request for 411 call center](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49314) ✔️
- Keywords: Accessibility, screen reader, screenreader, jaws, nvda, voiceover, assistive technology, accessible, accommodation, 508, magnification, zoom, disabilities, caption, keyboard, braille, siri, PTSD, Anxiety, ADHD, Triggered, Triggering, TBI, magnify, font, text, bluetooth, elderly, mobile, tablet, connection, internet, bandwidth
- Date Range: October 2022
- Source: 411 call center

4. [Submit a fourth request for DEIA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49522) ✔️
- Keyword: Racism
- Date range: For the year
- Source: Medallia surveys

### Key insights 🧭
- The majority of the data we parsed through was noise, with little key signals that could answer or relate to our research questions
- Out of 4000+ lines of potential keyword matches, we were only able to extract ~10-20 lines of potentially relevant feedback, but they were either too broad, were inspecific, or lacked context to extract any confidence from
- This could be a symptom of the inaccessibility or discoverability of the feedback button and feedback survey for disabled Veterans, and may be a topic for future research

## [Page Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/reports/accessibility-footer-analytics.md)

Eli Mellen conducted research into the page analytics of the “Accessibility” link in the footer.

### Key insights 🧭
- Between January 1 and November 17, 2022, the accessibility link in the footer of modernized va.gov pages was clicked 26,005.
- Of those clicks, 18,123 of them were triggered from a mobile device.
- The 508 page received 56,290 page views, this means that about 46% of all traffic to the 508 accessibility page came through the footer link.

### Unknowns, risks, and limitations 🤔
- This data was analyzed at a very preliminary level; there is an opportunity to do a deeper analysis with a more longitudinal set of data.

### Outstanding tasks and questions ⁉️
- A goal of follow up data analysis could be to develop a user journey map that converges on providing feedback.
- This data analysis revealed that a high percentage of folks who clicked on the accessibility link were using mobile devices, this suggests there is an opportunity to do more focused studies on the va.gov experience from mobile devices.
- We have determined that there is traffic from the footer to the 508 page – a follow up analysis should be done to determine why folks are going to the 508 page and if they are able to find what they are looking for there.   

## [Accessibility Audits](https://docs.google.com/spreadsheets/d/1sQ0qNE9Ne_cU1kjnyw29whXLiqAJI9b9VydHlPqWiWg/edit?usp=sharing)
As an extension of secondary research, we plan on also conducting an accessibility audit depending on the existence and quality of prior accessibility audits for the following tools:

### What our audits covered
- VA.gov Feedback Button 
  - Some major issues with magnification devices.
  - Informed ian.mccullough@oddball.io of these defects.
- VA.gov Intercept Survey 
  - Some major issues with magnification devices. Repetitive and verbose on a screen reader.
  - Informed ian.mccullough@oddball.io of these defects.
- Section 508 Page 
  - 5 major accessibility issues. 15 year old page.
  - Created a new accessibility statement to address this. Replaces old link under “accessibility” in the footer. New a11y statement analytics can be tracked on google analytics.
  - Need to inform Section 508 team of a11y issues on the Section 508 page.
- Virtual Agent (chatbot) 
  - Major issues were left unresolved as they could only be fixed by Microsoft.
  - Need to inform chatbot team of issues. 
- Ask.va.gov 
  - Noted as inaccessible in interview with contact center panel. Poor usability on mobile devices.
  - Connected Section 508 office with ask.va.gov team.
  - The latest update is there's nothing the 508 Office can do until April-ish timeframe. That is the earliest opportunity there may be an AskVA dev team funded to make design changes. Chris Walker is aware.

### What our audits did not cover
- My VA 411 (800-698-2411) 
  - Anecdotally accessible. Phone number with TTY. Unsure if wait times, customer support, and more create invisible barriers to callers with disabilities.
- IVR Survey 
  - Anecdotally accessible, but similar to My VA 411, needs additional research. Users can use button presses on their phone to submit responses. Those responses are then captured and input into VSignals Medallia dashboard(?).
- Facility QR Codes 
  - Some facilities will have QR codes Veterans can scan and provide feedback to. Veterans can submit through these as many times as they like.
- Email 
  - VEO will sample a selected group of Veterans and send them a link to an online survey through email. Unclear if this is similar to the surveys on VA.gov; but we believe they share the same base format. Differences may emerge if they are housed in a modal or exist on their own page.
Known unknowns 
- We know there are other surveys e.g. by paper, in-person, etc. Dan and Evan from VSignals measurement team would know for sure the full scope.

### Key insights 🧭
- All of the methods of providing feedback to VA.gov that we audited have confirmed major accessibility issues which may prevent disabled people from submitting accessibility feedback.
- 2 of the methods we audited have confirmed severe major accessibility issues which likely completely bars access to providing feedback.
- Many of these methods were audited in the past based on outdated standards (Section 508 follows WCAG 2.0 AA which does not critically cover responsive, mobile, and cognitive considerations). Little (if any) maintenance is conducted post-audit by the Section 508 office, even with the introduction of updated standards.

### Unknowns, risks, and limitations 🤔
- Audits were cursory in nature. They will likely not capture all potential accessibility or usability issues for disabled Veterans. We should consider the existence of issues as a sign that further testing and usability testing with disabled Veterans should be strongly considered.
- We still don’t know what the full landscape of collecting feedback from Veterans looks like. Connecting with Dan and Evan from the measurements team should give more insight into this.

### Outstanding tasks and questions ⁉️
- WCAG 2.1+ (not 508) accessibility audits and usability testing with disabled Veterans using a variety of assistive technology should be conducted for methods we still don’t have access to (or are unaware of) including the IVR survey, facility QR codes, email, and more.
- More research is needed to understand the disabled Veteran experience of calling My VA 411 as it is currently the only known usable method for disabled Veterans to provide accessibility feedback beyond the Section 508 email.

## Appended interview questions with Veterans
Although we couldn’t conduct an independent study, we aimed to append questions to existing studies with disabled Veterans. Cindy Merrill and Brea Blackwelder piloted this by asking disabled participants the following questions at the end of their studies (homepage usability study and mobile app screen reader user research):
- If you wanted to share your thoughts on this web page with the VA, how would you do it?
- Have you ever done this before?
- If so, how and when?

### Key insights 🧭
- In Brea's mobile study, out of 6 participants who responded:
  - One participant did not know how to provide feedback, one would look for a "contact us" area, one would attempt to call the VA, and another would self-advocate through the Blinded Veterans Association (BVA)
  - Going to a physical location, like a VAMC, was a common fallback should preferred methods not work for 4 out of the 6 participants 
- Screen magnification users on desktop (2/2 in total) didn’t notice the VA.gov feedback button. This is likely due to screen magnification showing only part of the screen at any given time. As there’s no indication that the feedback exists on the bottom right side of the page, it may be missed by magnification users who scan the page left to right with a limited view. For example, consider the simulated image below.

https://user-images.githubusercontent.com/14154792/233375218-e8291f1e-aabc-4b71-842c-3699ea140c2c.mov


### Unknowns, risks, and limitations 🤔
- Insights are based on a significantly limited convenience sample of data. Given these were appended onto interviews with different facilitators, the manner in which questions were posed were inconsistent. As such, the above insights should be interpreted as a strong call to do more research instead of a factual or permanent representation of all disabled Veterans.
- This research only covered the needs of Veterans with low vision or blindness with zoomtext and screen readers; it does not address the needs of Veterans using other types of assistive technologies

### Outstanding tasks and questions ⁉️
- [x] Inform ian.mccullough@oddball.io of issues to be resolved
- [ ] We recommend conducting generative research to explore the full _service_ experience for blinded Veterans; given the limited scope of this research, there may be larger unanswered priorities beyond the reach of the digital VA.gov experience itself


## Key informant interviews
We conducted several key informant interviews with folks who may have expert knowledge or lived experience with this topic. This was not meant to act as a substitute for actual research with disabled Veterans but as a starting point for finding signals of interest to dig deeper into.

### Contact Center Panel Interview ✔️

**Ask.va.gov** receives a11y tickets from folks communicating on behalf of someone else. It’s likely inaccessible as it doesn’t follow the VA design system and Aubrey’s team’s recommendations were unresolved due to platform limitations with the dynamic 365 portal. It was likely not tested for Section 508 compliance.

**Medallia feedback button and intercept survey** [were tested last year](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/medallia/research/CY21-Q1), but screen reader users did not participate despite Ian making a request to Perigean. This may be easier this year with new partnerships with blinded Veteran organizations.

**The primary call center is My VA 411 (800-698-2411).** There’s also a White House national hotline. When a Veteran calls the number and reaches an operator, they’ve reached tier 1 support. If their issue cannot be resolved, it is escalated to tier 2 which is the contact center team. If it cannot be resolved there, it becomes tier 3 which is often for technical issues like editing the markup of the website.
- We’re not sure how the TTY number is handled nor how accessibility issues are triaged.
- Tier 1 agents can log calls in salesforce, but the interface is difficult to search.
Many issues found within salesforce at a glance appear to be home related accessibility issues (as opposed to digital website issues). 
- jkwon@thesocompany.com noted there’s a possibility a11y feedback may stop at a tier 1 agent as the surface level problem may be addressed over call (reading out a data table) while still leaving the source of the issue unresolved (the data table itself is still inaccessible). Jae also asked…
  - How far (if at all) do disabled Veterans go to solve accessibility issues more permanently?
  - What is VA.gov doing to make it easy for users to submit issues?
  - Do agents try to investigate the reason for the user’s issues or do calls end at the point assistance is rendered complete?
  - Ian thought about what kind of training or processes could help call center agents.

**[Medallia feedback has not yet been tested with disabled Veterans using assistive technology](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/medallia/research).** Previous usability testing focused on (1) the initial feedback button and (2) an updated version of that feedback button which demonstrated significant usability improvements for able-bodied Veterans. Conducting research in the future with assistive tech users may unveil key usability insights related to more complex cases and lead to data-driven inclusive enhancements.

#### Action items
- [ ] Josh to follow back with the contact center team about insights (if any) from the Medallia survey data
- [ ] ian.mccullough@oddball.io to reach out to Kimberly to see how she handles and works with tier 3 escalation. Specifically if she’s encountered any a11y issues which have come through.
- [ ] starlow@thesocompany.com to dig into accessibility requests in microsoft dynamics (the back end for EVA); VA health queues may re-route cases for medical aids and related devices (including hearing aids). 

#### Completed ✅ 
- [ ] ian.mccullough@oddball.io to follow up to see if anyone has conducted accessibility testing for ask.va.gov
- [ ] ian.mccullough@oddball.io to share any usability studies conducted with ask.va.gov
- [ ] Josh KIM to request shared support a11y team to do a cursory audit of ask.va.gov, the medallia feedback button, and the medallia intercept survey to determine if they meet or don’t meet Section 508 compliance
- [ ] Ian to send Josh code and instructions for intercept survey testing
- [ ] ian.mccullough@oddball.io to dig into salesforce data to examine for digital accessibility complaints or feedback regarding VA.gov.

#### Blocked ❌
- [ ] Josh KIM to reach out to Laura to connect with Marlee (who trains call center agents) to ask about a11y, training docs, and if call center agents know how to reply to a11y requests.
- [ ] Waiting for response from Laura to set up a call with Marlee

### Mike Manalo Interview
**No interviews were conducted with disabled Veterans using assistive technology.** This was due to Perigean wanting more specific guidance on what “assistive technology” meant. In this case, they got older Veterans using iPads (as opposed to technologies explicitly used for a disability like a screen reader or keyboard). 

**The more complex the issue, the more likely Veterans will call.** There were forming patterns of older Veterans being associated with doctor appointments and facilities which could generally be resolved via tier 1 support, but any issue requiring more complex topics like verifying a GI Bill payment often went to tier 2 support. There’s an open question of what is effective communication: SMS? Phone? Etc?

**Unsure if there are any particular groups using or not using 411.** Salesforce may help answer that. The vast majority of issues are related to authentication. The contact center team is creating a service map of how tier 1 issues are escalated to tier 2, how long those issues sit, and how they are resolved.


