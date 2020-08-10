
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

### What is 508 Compliance? 

Section 508, an amendment to the United States Workforce Rehabilitation Act of 1973, is a federal law mandating that all electronic and information technology developed, procured, maintained, or used by the federal government be accessible to people with disabilities. Since June 2001 the law has required all content created using federal money to be 508 compliant. 

This law requires that all website content be accessible to people with disabilities, including government hosted or contractor hosted websites and intranet sites, both public- and government-facing. 

This applies to Web applications, Web pages, and all attached files on the Intranet and the Internet,  including website content, emails, computer software, gaming systems, and PDF versions of traditionally printed assets. PDFs may require 508 remediation as they are not accessible by screen readers. 

### Section 508 uses WCAG standards

Pronounced “Wuh cag,” WCAG is a rule called the Web Content Accessibility Guidelines (WCAG) created by a group at the W3C. This ruleset explains how to make the web work better for people with disabilities. 

In January 2017, Section 508 underwent a refresh that was many years in the making. A significant change is that the WCAG 2.0 Level A and AA guidelines are now incorporated by reference and required by Section 508. Prior to the refresh, Section 508 included its own list of requirements, which were a modified subset of WCAG 1.0 (not the current version of WCAG).

To be Section 508 compliant, WCAG 2.0, Level A and AA, is the standard. 

We use a series of automated and manual success criteria for ensuring electronic content and web apps are accessible for the largest group of users.

### WCAG 2.0, possibly soon to be 2.1?

Remember that previously mentioned “ambiguity”?
- Section 508 is based on WCAG 2.0 success criteria.
- WCAG 2.1 was released on June 5, 2018.
- Section 508 is rumoured to adopt WCAG 2.1 “soon,” although the Access Board indicated they may choose to wait for WCAG 3.0 (Silver / Ag).
- We aim to future-proof in our work.
- Section 508 is based on WCAG 2.0, and was not created with mobile in mind, so the criteria is insufficient to address mobile design use cases.
- WCAG 2.1 prioritizes mobile success criteria, and improves the quality of mobile UX.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc04-accessibility-compliance/compliant-accessible-beyond.png" alt="" aria-hidden="true" role="presentation" />

1. **Section 508** = WCAG 2.0 — success criteria for: blindness, deafness, and keyboard usage
1. **WCAG 2.1** - adds mobile & cognition success criteria; More people can use on mobile; improves comprehension through plain language & other success criteria
1. **Inclusive Design** – accessible for all, not just people w/ disabilities; Enhances UX through improved data access and web performance: More users!
1. **Usability** - overall ease of use - Product is highly usable and accessible: business + user goals attained

#### Accessibility Guidelines Release Dates

1. WCAG 2.0 was released in 2008.
1. Section 508 adopted WCAG 2.0 in 2017.
1. WCAG 2.1 was released in 2018, it adds considerations for mobile design and cognitive considerations.
1. WCAG 3.0 is being drafted now, and the final is expected in 2022.
Work began late 2016, Candidate Recommendation (approved first draft) expected late 2021, final guidelines expected to launch in late 2022.
1. The Access Board (who oversees Section 508) has indicated they will wait to update Section 508 when WCAG 3.0 (a.k.a. Silver) is released.

<blockquote>What do you think makes sense for us to support on VA.gov?</blockquote>

### Authority to Operate (ATO)

The DSVA ATO requires:
- All code which is committed and deployed passes a required set of integrated tests before the code is launched. The ATO lists Deque’s axe integrated test as the preference, as it includes the 508 required rule set.
- The ATO acknowledges some issues are unable to be identified by automated tests alone; manual reviews using accessibility software are important to fully confirm the software is accessible. 
- Digital Service will perform a series of manual checks that have been supplied by the 508 office using accessibility software.

### Severity of issues

- If you have a 508-defect-0, 508-defect-1, 508-defect-2, or 508-defect-3 issues your product is not fully compliant.
- If you have 508-defect-4 issues, you have opportunities for improving the user experience and accessibility beyond compliance.
Find the rubric in the [va.gov-team repo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md). 

## Resources

- [WCAG Checklist available on the VA Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md), to understand success criteria
- A customizable [How to Meet WCAG, Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/) from the W3C is useful to understand how to meet the success criteria
- Resources in the [VA Accessibility repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility), and your individual team’s accessibility repo
- #vetsgov-accessibility Slack channel
- Elissa Olinsky’s [Accessibility Beyond Compliance blogpost](https://adhoc.team/2020/02/07/accessibility-beyond-compliance/), also available in the [VSA accessibility repo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-beyond-compliance.md)
- Accessibility review tool for design and development [Google Sheet](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=2089055656)
