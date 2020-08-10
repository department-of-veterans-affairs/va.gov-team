
```diff
! Draft In-progress
```


Accessibility Beyond Compliance (ABC)
# Accessibility Compliance
Friday, July 24, 2020, at noon ET, Accessibility Beyond Compliance (ABC) Learning Sessions Series

## Table of Contents

Additional formats to access content. Video available in mp4, for those with access to the VSA Team Google Drive.

* [PDF]()
* [PPTX]()
* [Video](https://drive.google.com/file/d/1nd_kw-B17TZ6eogwzP78crB8Ldzh9ynG/view?usp=sharing) - Available for VSA Team in our Google Drive


## Points of Contact
* Trevor Pierce, VSP Accessibility Specialist
* Jennifer Strickland, VSA Accessibility Specialist


## Agenda and intro
* Why are we having this talk
* Obligated versus what to “reach for”
* Avoiding **!** launch blocker surprises
* Contractual obligations
* Resources


## Why are we having this talk

### Compliance confusion

* We have heard folks are confused about how accessibility specialists’ feedback map to required compliance.
* Teams are unsure what issues are “launch blockers” versus what can wait until after a feature is launched, and why.
* We want to make sure everyone understands accessibility language like “508,” “ATO,” “compliance,” “severity levels,” and “WCAG.”
    - Compliance likely means different things to different people.
    - We want to create a common meaning for all VFS teams. 

### There’s some ambiguity… 

* Accessibility is worded differently in every contract.
* There is no boilerplate the VA uses to describe requirements.
* If it’s available to you, it’s worth looking into your contract to see what it says. 
* Each requires meeting Section 508.

### Our work is seen as a “good example”

The VA and the 508 office see our teams as “going above and beyond” and as good examples, which is why we don’t only tell you what you **must** do in reviews. 

We set a standard for others to follow.

### “Accessible”

Accessible doesn’t mean it has to deliver the intended experience and content to assistive technologies. 

It means anyone (with disabilities or not, screen reader or not), should be able to access it. 

This is [Accessibility Beyond Compliance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-beyond-compliance.md).


## Obligated versus what to “reach for”

<blockquote>If everything&rsquo;s !important, 
then nothing is.</blockquote>

### Feedback framework

We have a structure to help understand what is contractually obligated versus what you can “reach for”: the Must/Should/Consider feedback framework.

- **❗️ Must** for if the feedback must be applied 
- **⚠️Should** if the feedback is best practice 
- **✔️ Consider** for suggestions/enhancements 

### Must/Should/Consider started from this feedback framework

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/do-try-consider.png" alt="Do, Try, Consider feedback framework" />

HT to Mickin for introducing it! https://medium.com/@jackiebo/do-try-consider-how-we-give-product-feedback-at-asana-db9bc754cc4a

### Combined with WCAG success criteria language

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/wcag-must-should.png" alt="WCAG success criteria language of Must and Should" />

WCAG 2.0 AA uses:
- Must: Required
- Should: Strongly recommended
- May: Optional or conditionally recommended

### Why Does WCAG use Must and Should?

Key words for use in Request for Comments (RFC) to indicate requirement levels, from Harvard University, provided by Deque: https://tools.ietf.org/html/rfc2119 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/RFC-req-levels.png" alt="Harvard University's explanation of the different requirement levels" />

### Accessibility Feedback Framework

 **Must** — required for compliance
**Should** — best practice, industry recommendations, and should be implemented for compliance
**Consider** — suggestions, enhancements, inclusive design, questions/items to consider

### VA Accessibility Defect Severity Rubric

The framework aligns to the severity rubric. Each issue ticket has a label indicating the severity or impact of the issue that links to the rubric level documentation. 
- Must: 508-defect-0, 1, 2
- Should: 508-defect-3
- Consider: 508-defect-4
Find the [rubric in the va.gov-team repo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md). This appears at the top of each ticket, with the defect rating, linked to its defect description.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/severity-01.png" alt="Feedback framework plus 508 defect severity at the top of a ticket" />

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/severity-02.png" alt="508 defect severity Github page" />

### What does it look like in practice?

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/feedback-in-practice.png" alt="feedback in issue tickets, review comments" />

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/feedback-in-prs.png" alt="feedback in PRs" />

## Avoiding ! launch blocker surprises

<blockquote>What can you can do to make sure there are no high severity compliance issues that you are unaware of until you’re wanting to launch?</blockquote>

### VSP Collaboration Cycle

The VSP Collaboration Cycle is intended to ensure teams building on VA.gov align with established standards, including accessibility.

### Accessibility spot checks early on 

Plan to collaborate with your accessibility specialist and perform accessibility spot checks throughout phases of your work. Issues can be identified and remediated during planning, research, design, as well as development.
- Measure accessibility, set KPIs
- Include people with disabilities in research
- Early design collaboration with your a11y specialist
- Consider a design-dev intent check in with your a11y specialist before starting a build (ping Jennifer for VSA or Trevor for other contracts)
- If you’re interested in using screen readers to test your work, reach out to your accessibility specialist for support with NVDA and VoiceOver

### VSP Collaboration Cycle

Accessibility is included in the following collaboration points:
- **Project Kickoff** — may provide accessibility and inclusive design considerations, or relevant previous work
- **Design Intent Collaboration** — review team’s design intentions for potential accessibility issues or considerations
- **Usability Testing Prep** — review design and/or research plan materials for accessibility issues or considerations
- **Staging Review** — conduct a series of automated and manual accessibility audits to ensure compliance before launch
- **Full Accessibility and 508 Office Audit** — complete a full accessibility audit after launch, identify outstanding accessibility concerns, coordinate with VA 508 Office for feedback and approval

## Contractual obligations

