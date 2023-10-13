`VERSION: THE FOLLOWING IS A COPY OF TICKET #67376 AS OF 10/11/2023`

# Audit Findings: Chatbot MHV Prescriptions Skill 

**ACCESS TICKET** [#67376](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67376)

**External consideration:** We realize that some of the issues identified with the chatbot may be specific to Microsoft, beyond the scope and ability of the VA to remediate, and that tickets may need to be drawn up with Microsoft. This audit was completed to bring attention to all issues, regardless of owner, for a comprehensive accessibility review of the chatbot for the end user. 

Should you have any questions regarding this deliverable, please let us know. The CAIA A11ys are happy to help! 

## In this deliverable
**Below you will find the following sections:** 
- Initial Chatbot Findings
- General Chatbot Findings
- Specific Chatbot Findings
- Audit Spreadsheet
- Audit Files Attached/Linked
- Audit Snapshot

## Initial Chatbot Findings
These findings have previously been shared; however, we are aggregating them here for quick reference.
- [CAIA Initial Video Demo Feedback for Chatbot](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65945#issuecomment-1731568653) (9/22/2023)
- [CAIA A11y Review of Chatbot on dev.va.gov](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65945#issuecomment-1736079347) (9/26/2023)
- [CAIA Update: Launch-Blocking Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65945#issuecomment-1739582767) (9/28/2023)

## General Chatbot Findings
The following are links to CAIA a11y ticket comments regarding general findings with the Chatbot that describe the issue, illustrates the issue with images and/or screen recordings, and provides background on the testing details. 

- [Keyboard Trap](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754#issuecomment-1753263632)
- [Ambiguous UX](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754#issuecomment-1757751016)
- [Multi-Modal Input Methods](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754#issuecomment-1757879905)
- [Message Sequence/AT](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754#issuecomment-1757894655)

## Specific Chatbot Findings
The following are specific Chatbot findings, as a result of the audit testing plan put in place. Additional information will be shared via the audit spreadsheet, to supplement these findings. 
- #67209
- #67286
- #67315
- #67386
- #67309 

## Audit Spreadsheet

This spreadsheet combines information from multiple sources such as the Microsoft VPAT, WCAG and COGA, to provide a comprehensive audit of the chatbot. CAIA feedback can be found in the yellow columns, listed below. 

- Tester
- Impact Area(s) RX/Chatbot
- Pass/Fail
- Severity/Priority from Audit
- Issue Location(s)
- GitHub Ticket Link (links can also be found at the top of this ticket)
- Steps to Reproduce (also provided in the GitHub tickets)
- Notes

### Audit Files Attached/Linked

**Please refer to the `Failed Tab` to view items that did not pass.** 

- [**Google Sheet:** 2023 10 11 Deliverable Chatbot Audit - CAIA A11ys](https://docs.google.com/spreadsheets/d/1KY_apLWtdDMxbA42sfuDqC81umA3yF1Yt5NwXZqbEYE/edit?usp=sharing)
- [**Excel:** 2023 10 11 Deliverable Chatbot Audit - CAIA A11ys.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/12874603/2023.10.11.Deliverable.Chatbot.Audit.-.CAIA.A11ys.xlsx)


## Audit Snapshot

### Audited Items

The **CAIA Accessibility Team** successfully audited 65.45% of auditable items on the CAIA a11y Chatbot Audit Spreadsheet using the Dev environment provided for the Chatbot MHV Prescriptions Skill Feature.

Based on the date of staging (10/12/2023) and the findings found thus far, we are going to pause our audit and share these findings with the Governance Team and the Project Team. 

**Audit Status** | **Audit Items (Count)** | **Percent of Total (%)**
-- | -- | --
Failed | 9 | 16.36% 
Further investigation needed | 5 | 9.09%
Passed | 19 | 34.55%
Addressed in another recommendation | 3 | 5.45%
Remaining items be audited | 19 | 34.55%
**Total** | **55** | **100.00%**

### Finding Types
Since the chatbot is a different flow than webpages or a form, we are testing by using WCAG and W3C’s Cognitive and Learning Disabilities Accessibility Task Force (COGA TF) to fill in the gaps directed at cognitive disabilities. 

The items that failed were equally in relation to WCAG and COGA: 

**Type** | **Count of Audited Items**
-- | -- 
COGA Only | 3
Not WCAG or COGA | 2
WCAG and COGA | 1
WCAG only | 3
**Total Findings Failing** | 9

### Impact of Impact Areas


**Impact Areas** | **Impact of Appearance (Count)** | **Percent of Impact Areas (%)**
-- | -- | --
Cognitive | 14 | 48.28%
Visual | 8 | 27.59%
Auditory | 2 | 6.90%
Speech | 2 | 6.90%
Physical | 3 | 10.34%
**Total** | **29** | **100.00%**

_The above totals reflect duplicate tickets if the issue audited appeared in one or more category._ 
