# How the Discover Your Benefits product works

**Last updated**: May 23, 2025

*Created first draft of documentation based on MVP*

## Purpose
This documentation serves as the source of truth for the design, content, and functionality in the [Discover Your Benefits](https://www.va.gov/discover-your-benefits/introduction) product on va.gov.

## Overview

### How the product is organized

The product is organized into three main sections:
* **Introduction**: Provides Veterans, recently-separated Veterans (RSVs), and transitioning service members (TSMs) with an overview and describes the purpose of the product.
* **Questionnaire**: Asks Veterans, RSVs, and TSMs a series of questions to determine their eligibility for specific benefits.
* **Results**: Displays benefits that Veterans, RSVs, and TSMs may be eligible for based on their answers in the questionnaire. The Results page also includes an option to view all benefits, regardless of eligibility.

### How we manage content in the product

Content that is **in production** can be found in:
* **⭐️ Source of truth**: [GitHub](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits)
    * Introduction ([/containers/IntroductionPage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/containers/IntroductionPage.jsx))
    * Questionnaire ([/config/form.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/config/form.js), [/pages](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits/pages))
    * Results ([/containers/ConfirmationPage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/containers/ConfirmationPage.jsx), [/constants/benefits.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/constants/benefits.js), [/constants/urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/constants/urls.js), [/components](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits/components))
* **Other sources**: [Figma (production file)](https://www.figma.com/design/e0L8mXXi5lqywARbnBy5Zx/%F0%9F%9A%80-Production---Version-2.5--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6), [Sharepoint](https://dvagov.sharepoint.com/sites/VESPortfolioOpsManagement/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x0120005D19BD4FFB74134285F70EC84B94C756&id=%2Fsites%2FVESPortfolioOpsManagement%2FShared%20Documents%2FProduct%20Lines%2FSeamless%20Experience%20Product%20Line%2FTransition%2FDesign%2C%20Content%2C%20and%20Logic&viewid=f0fefbdc%2D305b%2D4c46%2Dae6a%2D4872045e22d8)

Content that is **in progress** can be found in:
* **⭐️ Source of truth**: [Figma (working file)](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6)
* **Other sources**: [Jira](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=10991&projectKey=PTEMSVT&view=planning&issueLimit=100#), [Sharepoint](https://dvagov.sharepoint.com/sites/VESPortfolioOpsManagement/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x0120005D19BD4FFB74134285F70EC84B94C756&id=%2Fsites%2FVESPortfolioOpsManagement%2FShared%20Documents%2FProduct%20Lines%2FSeamless%20Experience%20Product%20Line%2FTransition%2FDesign%2C%20Content%2C%20and%20Logic&viewid=f0fefbdc%2D305b%2D4c46%2Dae6a%2D4872045e22d8)

## Functionality

### How the results are determined

The **all benefits** page displays all benefits that a Veteran (including RSVs) or TSM may be eligible for.

The **recommended benefits** page displays benefits that Veterans (including RSVs) and TSMs may be eligible for based on their answers in the questionnaire. The [Logic Mapping spreadsheet in Sharepoint](https://dvagov.sharepoint.com/:x:/r/sites/VESPortfolioOpsManagement/_layouts/15/Doc.aspx?sourcedoc=%7BC0881268-34D7-4863-936A-DABCD4B7B15D%7D&file=MASTER%20Logic%20Mapping%20Spreadsheet%20-%2001NOV2024.xlsx&action=default&mobileredirect=true) is the source of truth for how eligibility is determined for each benefit. Below are a few key factors for determining eligibility:

* **Only TSMs who are still serving qualify for the following benefits:**
    * DOD SkillBridge program
    * Transfer your GI Bill benefits
    * Transition Assistance Program (TAP)
* **Only Veterans or TSMs with a disability rating or in progress claim and any character of discharge other than dishonorable qualify for the following benefits:**
    * Foreign Medical Program
    * Veteran Readiness and Employment (Chapter 31)
    * Veterans Affairs Life Insurance (VALife)
* **How character of discharge affects benefit eligibility**
    * **Honorable OR still serving**
        * GI Bill benefits
        * Transfer your GI Bill benefits
    * **Honorable OR Under honorable conditions (General) OR still serving**
        * DOD SkillBridge program
        * Veterans’ Preference in federal hiring
    * **Honorable OR Under honorable conditions (General) OR Under other than honorable conditions OR Bad conduct OR Uncharacterized OR I'm still serving**
        * Educational and career counseling (Chapter 36)
        * Veteran Readiness and Employment (Chapter 31)
    * **Honorable OR Under honorable conditions (General) OR Under other than honorable conditions OR Uncharacterized OR I'm still serving**
        * VetSuccess on Campus (VSOC)
    * **Honorable OR Under Honorable Conditions (General) OR Under other than honorable conditions OR Bad conduct OR Uncharacterized OR I'm still serving OR I'm not sure**
        * Foreign Medical Program
        * Disability compensation
        * Disability housing grant
        * VA-backed home loans
        * VA health care
        * VA mental health services
        * VA national cemetery burial
        * Veterans Affairs Life Insurance (VALife)
        * Veterans Pension
    * **Under Other than Honorable Conditions OR Bad Conduct OR Dishonorable OR I'm still serving OR I'm not sure**
        * Apply for a discharge upgrade
    * **Any character of discharge**
        * State Veterans' Benefits
        * Support for your Veteran-Owned Small Business
        * Transition Assistance Program (TAP)
        * Veterans' Group Life Insurance (VGLI)

## Design

We use the VA Design System (VADS) as much as possible throughout the product. When we can’t use the VADS, we work with the design system team to contribute our work back to the system. Below is an overview of which components, patterns, and templates are currently in use.

### Components

The following components are used in the product:
* [Accordion](https://design.va.gov/components/accordion)
* [Alert](https://design.va.gov/components/alert/)
* [Banner](https://design.va.gov/components/banner/)
* [Button](https://design.va.gov/components/button/)
* [Button group](https://design.va.gov/components/button/button-group)
* [Card](https://design.va.gov/components/card)
* [Link](https://design.va.gov/components/link/)
* [Link - Action](https://design.va.gov/components/link/action)
* [Modal](https://design.va.gov/components/modal/)
* Form
    * [Checkbox](https://design.va.gov/components/form/checkbox)
    * [Need help?](https://design.va.gov/components/form/need-help)
    * [Privacy agreement](https://design.va.gov/components/form/privacy-agreement)
    * [Progress bar - Segmented](https://design.va.gov/components/form/progress-bar-segmented)
    * [Radio button](https://design.va.gov/components/form/radio-button)
    * [Select](https://design.va.gov/components/form/select)

There are a few components that are managed separately in the code:
* **Card**: Referenced in [BenefitCard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/BenefitCard.jsx)
* **Modal**: Referenced in [CopyResultsModal.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/CopyResultsModal.jsx)
* **Need help?**: Referenced in [GetFormHelp.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/GetFormHelp.jsx)
* **Banner**: Referenced in [NoResultsBanner.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/NoResultsBanner.jsx)
* **SubmitHelper**: TBD

### Patterns

The following patterns are used in the product:
* Ask users for…
    * [A mutually exclusive answer](https://design.va.gov/patterns/ask-users-for/a-mutually-exclusive-answer)
    * [A single response](https://design.va.gov/patterns/ask-users-for/a-single-response)
    * [Feedback](https://design.va.gov/patterns/ask-users-for/feedback)
* Help users to…
    * [Check answers](https://design.va.gov/patterns/help-users-to/check-answers)

### Templates

The following templates are used in the product:
* Forms
    * [Introduction](https://design.va.gov/templates/forms/introduction)
    * [Form step](https://design.va.gov/templates/forms/form-step)
    * [Review](https://design.va.gov/templates/forms/review)
* ⚠️ [Search results](https://design.va.gov/templates/search-results): This template is currently considered a candidate for the design system. If and when it is deployed, we will likely need to consider updating our results page.

## Research

The product’s research repository contains the data used for design decision making, including generative and evaluative research. It can be found here:
* [Research repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vet-transition-support/research)
