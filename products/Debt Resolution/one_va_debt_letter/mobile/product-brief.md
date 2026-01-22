# One VA Debt Letter (mobile) Product Brief

## Overview

Veterans can experience debt from the VA. The two types of debt that the Financial Management Team has focused on include: 

* Overpayments   
* Copayments (also referred to as copays)

Veterans are notified separately of their Overpayment debts and Copayment bills since separate entities manage these. Overpayments are managed by Veterans Benefits Administration (VBA), and they notify Veterans of an overpayment debt by sending out what are known as Debt Letters. Debt Letters are sent in the mail, and as of today, these are physical letters and are not accessible digitally due to PII/PHI concerns. Copayments are managed by the Veterans Health Administration (VHA), and these bills can be accessed digitally. 

Veterans who experience both Overpayment and Copayment debt did not have one location where they can view their itemized debts. The One VA Debt Letter is a page on [VA.gov](http://VA.gov) debt portal for Veterans with both Overpayment debt and Copayment bills, that provides Veterans with all relevant information in one location. Veterans can also download a PDF of this information. This was mandated by the [Veterans Benefit Transition Act of 2008 (year 7\)](https://www.congress.gov/115/plaws/publ407/PLAW-115publ407.pdf) (Section 504\) to provide Veterans with a standardized format that unifies their debt information on a single document.

The One VA Debt Letter has been accessible on [VA.gov](http://VA.gov) since April 30, 2025\. Veterans can access the page from the authenticated experience on [VA.gov](http://VA.gov), accessing the debt portal, and then clicking on the “Review combined statement” link, which can be found under the “Debt and bill overview”. This click will take a user to the Combined statement page, where they can quickly download the combined statement with their outstanding copayments and overpayments in a PDF format, or view all outstanding debts on the Combined statement page. Users can also view their payments, late fees, and the date the debt was generated. The One VA Debt Letter is only accessible through [VA.gov](http://VA.gov) and is not mailed out to Veterans. 

## Problem Statement

Veterans who have overpayment debts and copayment bills do not have a single place to view all outstanding debts and receive multiple forms of communication about these financial obligations from the VA on the VAHB mobile app. How might we validate that Veterans want a standard format or structure that unifies their debt information on the mobile app, and provides them with a positive user experience? 

## Bets to be Informed by Research

* Veterans will not want a Combined statement page on the mobile app since the combined information can be extremely long and does not make for a preferred user experience.   
* Veterans will not want a Combined statement page since the information would be duplicative and cause confusion as to what the difference is between the Combined statement page vs. the individual sections of the Overpayment and Copayment sections.   
* Veterans will want the PDF of the One VA Debt Letter, so that they can view an itemized list of overpayment debts since they cannot access this digitally.   
* Veterans will want to be able to download and save the One VA Debt Letter, as they like to have a physical copy of a document to reference.

## Measuring Success

### Key Performance Indicators (KPIs)

* To be determined after discovery research

### Supporting OCTO OKRs:

O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.


## Important Notes/Decisions/Background

* The [Veterans Benefit Transition Act of 2018 (year 7\)](https://www.congress.gov/115/plaws/publ407/PLAW-115publ407.pdf) mandate does not apply to the mobile app.  
* Test user \+81 will provide the happy path of having both overpayment and copayment debts.   
* The One VA Debt Letter is only available online. This is not sent in the mail.   
* This feature was implemented on [VA.gov](http://VA.gov) on April 30, 2025 and includes the following information:   
  * Outstanding/Current Account Balance  
  * Payment  
  * Late fees  
  * Date debt was generated   
* Additional debt types beyond copayments and overpayments are out of scope for this effort.   
* The web product brief for One VA Debt Letter is accessible [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/126426cbec8d393c8e35b9c128e901a0a78c6a9d/products/Debt%20Resolution/one_va_debt_letter/product%20outline.md).   
* No previous research was conducted by the Financial Management on whether Veterans preferred having a combined statement. The congressional mandate drove the implementation of this feature on [VA.gov](http://VA.gov). 

## Research Outcomes and Recommendations 

The research outcomes were posted in [OCTO Slack](https://dsva.slack.com/archives/C07SD9P7XB9/p1765915922736319) on December 16th, 2025 and are linked below: 

- [Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-findings.md#recommendations): This provides details of the research goals, background, methodology, key findings, and recommendations
- [Slides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/One-VA-Debt-Letter-mobile-app_research_readout_presentation.pdf): This is a presentation of the research report.

The recommendations were: 
1. Hold off on building a centralized combined debt view on mobile until strong user need is established in future research.
    - *Supporting evidence: Most participants found little added value in a combined statement, especially on mobile. No one reported challenges due to the lack of a centralized view.*
2. Hold off on adding a combined debt PDF to the mobile experience until future research identifies a strong user need for this feature.
    - *Supporting evidence: Although almost everyone found value in the combined statement PDF, their needs were met with individual statements, especially for print and large-screen use.*
3. Conduct user research on the existing combined statement on the website (both the HTML and PDF versions) to assess whether Veterans find it valuable in ways that differ from individual statements. Use the results to further inform whether a combined statement should be built in the mobile app.
    - Track how frequently individual users return to download the combined PDF multiple times, not only how often it's downloaded.
    - Gather qualitative feedback on the unique benefits of combined statements compared to individual statements.
    - *Supporting evidence: Participants appreciated the combined PDF’s familiar format and summary view, but most needs were met by individual statements. Sending the combined PDF to someone for financial assistance was a unique use case, but it remains unclear whether Veterans would routinely download and use it in practice. Further research will clarify how Veterans actually interact with these statements and inform mobile app decisions.*

## Next Steps

Based on these recommendations, the MFS team will not take any action to include the One VA Debt Letter feature in the mobile app. This recommendation can be revisited in the future. 

## Reference Materials

### Communications

<details> 

- Team Name: Mobile Feature Support  
- Slack channel: \#mobile-feature-support-public   
- Product POCs:   
  - Michelle Middaugh, VA Product Owner, Mobile Feature Support  
  - Ryan Thurlwell, VA Lead, VA Mobile App  
  - Denise Coveyduc, VA Product Owner, Financial Management
    
</details>

## Stakeholders 

#### Team Members

<details>  
   
 - DEPO Lead: Michelle Maddaugh  
 - PM: Natalie Gibbons  
 - Engineering: Alex Teal  
 - Research: Emily DeWan  
 - Design: Natasha Huckleberry  
 

 

