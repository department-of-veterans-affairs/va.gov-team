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
