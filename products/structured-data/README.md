# Structured Data for Burial Benefits (530)

## Communications

#### Lines of Communication
- **Team Name:** Structured Data for Burial Benefits (530 Form)
- **GitHub Labels:** structured-data, form 530
- **Slack channel:** #vfs-pension-automation

#### Team Members
- **Product Manager:** Sophie Myers (Sophia.Myers@adhocteam.us)
- **Engineer Lead:** Jonathan Julian (Jonathan@adhocteam.us)
- **Engineer:** Keith Adkins (Keith.Adkins@adhocteam.us)
- **Engineer:** Ben Shyong (Ben.Shyong@adhocteam.us)

## Background
Today, when Veterans or their loved ones submit a claim for burial benefits on VA.gov using the 530 form, the form is printed or faxed to central mail. Claims take up to 100 days to process and this gives claimants the false impression that their claim will be acted on sooner because it was submitted electronically.

### Users and Pain Points
- **Claims Assistants (CAs):** CAs view PDFs of claims on VA.gov in the "Mail Portal" and manually re-key claim information into the systems used to eventually process claims
- **Family members of deceased Veterans:** Must wait up to 100 days before they know whether they will receive benefits for the Veteran's burial

## Strategy Charter

### Mission
*The problem we’re trying to solve; why we’re doing this work. Describes an intent and sets a direction. How might we...?*
Manually establishing claims for burial benefits delays processing because it requires CAs to do redunant work. It also introduces issues with data accuracy because the original data that a claimant entered is re-entered manually rather than presevered. There is an opportunity to expedite the processing of burial benefits and get accurate answers back to Veteran's family members more quickly.

How might we expedite the establishment of burial benefit claims?

### Vision
*What we hope to achieve, or enable, through our work. A vision should be ambitious and serve as a rallying point for the team.*
To reduce this redundancy, we will connect VA.gov directly to the claims-processing systems and automate the establishment of burial claims. These connections will be reusable and available to expediate even more online form submissions.

### North Star Metric


### Desired Outcome
#### Hypothesis
Automating claims will reduce the time it takes to establish claims and improve data quality.

#### Objectives

1. Create claim from data entered by clamaint on VA.gov
2. Upload files related to the form to the e-Folder VBMS
3. Reduce the number of online claims that go through Central Mail

#### KPIs
- % of Burial claims that get diverted away from Central Mail
- % of Veterans that exist in some system (MVI lookup hit)
- % of Claimants (of various type) that exist in some system (BGS lookup hit)
- Burial claim submission failure count (establishing claim with structured data)
