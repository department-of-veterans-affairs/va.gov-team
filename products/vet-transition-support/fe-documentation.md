# How the Discover Your Benefits product works

**Last updated**: May 29, 2025

## Purpose
This documentation serves as the source of truth for the design, content, and functionality in the [Discover Your Benefits](https://www.va.gov/discover-your-benefits/introduction) product on va.gov.

## Overview

### How the product is organized

The product is organized into three main sections:
* **Introduction**: Provides Veterans, recently-separated Veterans (RSVs), and transitioning service members (TSMs) with an overview and describes the purpose of the product.
* **Questionnaire**: Asks Veterans, RSVs, and TSMs a series of questions to determine their eligibility for specific benefits.
* **Results**: Displays benefits that Veterans, RSVs, and TSMs may be eligible for based on their answers in the questionnaire. The Results page also includes an option to view all benefits, regardless of eligibility.

### How we manage content in the product

#### In production

The **designer** and **engineers** are both responsible for managing content that’s in production. The engineers will maintain the source of truth in [GitHub](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits) and the designer will maintain the [Figma (production file)](https://www.figma.com/design/e0L8mXXi5lqywARbnBy5Zx/%F0%9F%9A%80-Production---Version-2.5--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6). Both files should include the same content at all times. Content that’s in production is live on va.gov.

Content that is **in production** can be found in:
* **⭐️ Source of truth**: [GitHub](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits)
    * Introduction ([/containers/IntroductionPage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/containers/IntroductionPage.jsx))
    * Questionnaire ([/config/form.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/config/form.js), [/pages](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits/pages))
    * Results ([/containers/ConfirmationPage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/containers/ConfirmationPage.jsx), [/constants/benefits.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/constants/benefits.js), [/constants/urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/constants/urls.js), [/components](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discover-your-benefits/components))
* **⭐️ Source of truth**: [Figma (production file)](https://www.figma.com/design/e0L8mXXi5lqywARbnBy5Zx/%F0%9F%9A%80-Production---Version-2.5--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6)

#### Ready for development

The **designer** is responsible for managing content that’s ready for development. It will be clearly labeled as **ready for development** in the [Figma (working file)](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6). This content will be referenced by the internal team, especially engineers.

Content that is **ready for development** can be found in:
* **⭐️ Source of truth**: [Figma (working file)](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6)
* **Other sources**: [Jira](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=10991&projectKey=PTEMSVT&view=planning&issueLimit=100#) (may be used for minor updates)


#### In progress

The **designer** and **researcher** are responsible for managing content that’s in progress. It will be clearly labeled as **in progress** or **in review** in the [Figma (working file)](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6). This content may be referenced by the internal team, external stakeholders, and/or the Content & IA team.

Content that is **in progress** can be found in:
* **⭐️ Source of truth**: [Figma (working file)](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?m=auto&t=ODHjsOOxGnDsLBLf-6)
* **Other sources**: [Jira](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=10991&projectKey=PTEMSVT&view=planning&issueLimit=100#)

## Functionality

### How the results are determined

The **all benefits** page displays all benefits that a Veteran, RSV, or TSM may be eligible for.

The **recommended benefits** page displays benefits that Veterans, RSVs, and TSMs may be eligible for based on their answers in the questionnaire. The [logic diagram in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748526908036/5e68de58e739ae592366aebd09bc662a3038b290?sender=ue02033fbb0fe7e82629e4489) is the source of truth for how eligibility is determined for each benefit.

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
* [Search Filter](https://design.va.gov/components/search-filter)
* Form
    * [Checkbox](https://design.va.gov/components/form/checkbox)
    * [Need help?](https://design.va.gov/components/form/need-help)
    * [Privacy agreement](https://design.va.gov/components/form/privacy-agreement)
    * [Progress bar - Segmented](https://design.va.gov/components/form/progress-bar-segmented)
    * [Radio button](https://design.va.gov/components/form/radio-button)
    * [Select](https://design.va.gov/components/form/select)

There are a few components that are managed separately in the code:
* **Card**: Referenced in [BenefitCard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/BenefitCard.jsx)
* **Need help?**: Referenced in [GetFormHelp.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/GetFormHelp.jsx)
* **Banner**: Referenced in [NoResultsBanner.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/NoResultsBanner.jsx)
* **SubmitHelper**: Referenced in [SubmitHelper.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/components/SubmitHelper.jsx)

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
* [Search results](https://design.va.gov/templates/search-results)

## Research

The product’s research repository contains the data used for design decision making, including generative and evaluative research. It can be found here:
* [Research repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vet-transition-support/research)
