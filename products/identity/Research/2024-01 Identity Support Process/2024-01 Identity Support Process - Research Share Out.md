# 2024-01 Identity Support Process - Research Share Out
**Office of the CTO - Digital Experience (OCTO-DE), Identity Support Process, Core Identity team**
- Date: Feb 2024
- Researchers
  - Clayton Zook | clayton.zook@oddball.io
  - Charlye Tran | charlye@bluetiger.digital
  - Megan Driscoll | megan@bluetiger.digital


Jump to:
- [High Level Findings](#high-level-findings)
- [Open Questions and things to consider](#open-questions-and-hings-to-consider)
- [Recommendations](#recommendations)
- [Data](#data)


## High Level Findings

- Majority of the team spent 30% or less on unplanned activities which mostly included bug fixes or investigations.
- Most requests came from Slack channels.
- The vast majority of requests come to us from VSP-Identity channel, considering 91 requests came from the past 4 months of data and the remaining 72 spanned multiple channels over 12 months.
 -We are still getting involved in VFS-support channel issues even though we are no longer a platform team.  
- Most bugs were not a direct Identity team issue but time was spent tracking down who should own the issue (or the issue resolved themselves).
- In 13 cases when an issue was forwarded to us, we forwarded 12 of these cases on to another team (usually IAM). In 10 cases, the issue was resolved by another team.
- Requests come into our partner channels e.g. idme-va-gov, va-login-partners from random folks looking for help.
- 57 of 163 requests were for products that could only be classified as "other"


## Open Questions and things to consider

- Does the current way we're spending our time on these unplanned activities how we want to be spending our time?
- How should we move off of VFS-platform and direct folks who need our help to the VSP-identity channel (without inundating our channel with requests that aren't for us?)
- How might we improve the categorization of "bugs" that are flagged for us so we can improve response time and resolution?
- How improve our brand so that other teams know when to come to us with certain issues versus generic "identity" problems?
- Can we work with other teams to better direct/triage issues as they arise so they land on the proper doorstep?
- How might we think about prioritization?  (combination of team making the request e.g. OIG, product or something else?)

## Recommendations

- Define what good Slack hygeine is (e.g. remove ourselves/refrain from spending too many cycles on channels unless we're tagged, remove cross poillination of issues in random channels like idme-va-gov)
- Create a helper for folks in our public facing channels
- Define process for in-take with potential for automated responses as a first line of defense.
- Improve our branding so that teams know what we actually do.


### Potential Process for in-take

Customer In-Take
- Submits slack request (/help, form, etc.)Type of request: (PR review, data pull, bug fix, etc.)
- Product (SiS, mocked auth, etc.)
- Customer (which team is making the request with contact info)
- Urgency/prioritization&nbsp;(how does this affect your team)

Behind the scenes (our team)

- Automated response with documentation or short answers (based on key words and f/u with "did this resolve your issue?" or "do you need more assistance?"
- Create automagically create a GH/ZH ticket for tracking&nbsp;(should have a specific label for easy filtering)
- (Team role or individual) triages tickets based on category/ product/ prioritization

## Data



