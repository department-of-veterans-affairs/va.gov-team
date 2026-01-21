# Design System 

The Design System and Forms Library are managed by the [Design & Forms Systems team](https://github.com/department-of-veterans-affairs/teams/design-forms-systems)

"To empower teams across VA to build consistent, accessible, and user-centered digital experiences for Veterans and their families by providing and evolving a scalable design system and forms library that is rooted in quality, collaboration, and innovation."

## Product Portfolio

- [Design system documentation site](http://design.va.gov/) ([http://design.va.gov](http://design.va.gov) )

  - Content in collaboration with Content and IA

  - Technical aspects (build, deploy, dependency upgrades, etc.)

- [CSS-Library](https://github.com/department-of-veterans-affairs/component-library/tree/main/packages/css-library)

- [Component library](https://github.com/department-of-veterans-affairs/component-library/tree/main)

  - [Storybook](https://design.va.gov/storybook/?path=/docs/about-introduction--docs)

- [Figma library](https://www.figma.com/files/team/1278375444205744118/recents-and-sharing/recently-viewed?fuid=1192586511403544015)

  - Note: new users will need to be added to the VA's Figma by Tricia

- [Forms System](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms)

  - Schema-based

- Forms documentation on Platform website

- Experimental design process

---

## Forms Library List of Products ##

### Form Upload
OKRS 1.1, 1.2. 1.3 and 2.2 | Launch Date: 2/28/2025
- [How to add a new form to Form Upload](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/DocumentUpload_FindaForm/readme.md) 
- PDFs submitted by mail can take longer to be received and processed by the end system. By providing an alternative to mail or fax the form upload tool, on VA.gov, reduces the time it takes to be received by the intake center, and provides some validation (meta data) upon form submission for a more efficient and faster processing.
- This tool will also provide form submittors with confirmation of their submission and email notifications upon submission, received by the end system or an action needed email if there was an error
- As part of this effort we initially did an [audit of Quick Submit](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2024-02-QuickSubmit/Quick%20Submit%20Audit.pdf): The team provided an accessibility audit of QuickSubmit (not hosted by VA.gov) and found many issues with the site.  This analysis helped prompt the decision to support some of the functionality that QS supports directly on VA.gov.
- Adding multi-file input to support forms that have supporting evidence
  
### Components & Patterns
OKR's 1.1 & 3.3
- The team successfully integrated the USWDS version 3 components and patterns into the [forms library](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/web-component-patterns). Additionally, we  developed new patterns to further enhance these resources, contributing to both the design system and forms library. As a result of our efforts, other forms teams have been able to efficiently create new forms by leveraging the patterns and components available within the forms library. This streamlined process has improved overall productivity and consistency in form development.
- [Prefill Pattern](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) - IN PROGRESS
- [Service History Pattern](https://design.va.gov/patterns/ask-users-for/service-history)
- [Form Submitter Pattern](https://design.va.gov/patterns/help-users-to/identify-who-is-filling-out-a-form)
- [Name and Date of Birth](https://design.va.gov/patterns/ask-users-for/names) 
- [Identification information](https://design.va.gov/patterns/ask-users-for/social-security-number)
- [Relationship to Veteran](https://design.va.gov/patterns/ask-users-for/relationship)
- [Mailing address](https://design.va.gov/patterns/ask-users-for/addresses)
- [Phone and email address](https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988-9602&mode=design&t=G7cHyOgjfgKxCDPo-11)
- [Example form](https://staging.va.gov/mock-form-minimal-header/introduction) including the above patterns
- Conditionally revealed
- [New confirmation page with subcomponents](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/components/ConfirmationView)
- Minimal header - with [example form](https://staging.va.gov/mock-form-minimal-header/introduction) and sub components Back link
- Routes (dev only) - ability to jump to different pages within a form
- [Housing status](https://design.va.gov/patterns/ask-users-for/housing-status) Note:  This pattern also influenced Form Product owners at the VA to update the questions on 3 PDF's to match the pattern in the online form.
- [Multiple responses list & loop](https://design.va.gov/patterns/ask-users-for/multiple-responses)
- [Single response](https://design.va.gov/patterns/ask-users-for/a-single-response)

### Confirmation page in partnership with Authenticated Experience My VA team
 OKR 1.1, 1.3
 | Launched Date: 10/22/2024
- [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Product%20Outline%20Confirmation.md)
- In the past there have been issues with Veterans seemingly submitting a digital form or application and that form then failing to actually make its way into the VA processing system for review. This has been referred to as "silent failures" - the user receives no indication that an error occurred because the process and time between the user clicking submit on their form and the form actually traveling through the Benefits Intake API and making its way into Central Mail can be lengthy.
- Our team partnered with the Authenticated Experience My VA team to address the challenges Veterans face in not knowing there is an error with their form. It is out of scope for our team to address problems with Central Mail.
- This work in alignment with OKR 1.3 and is also in alignment with the OCTO Benefits Portfolio prioritization framework by supporting category 2: Silent submission failure: A Veteran believes an online transaction (form, evidence, etc.) has been successfully sent to VA, but it silently errored without notifying the form submitter. 
- The new confirmation page can be used out of the box for other teams building forms or add customizable sections or content as needed.  The confirmation page guidance, found in the VADS, includes help users:
-   [Keep records of their digital submission](https://design.va.gov/patterns/help-users-to/keep-a-record-of-submitted-information)
-   [Keep informed of the status of their submission](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)


## Problem Statements

### **Problem Statement 1: Inconsistency Across Experiences**

Veterans interacting with VA digital services often encounter inconsistent user experiences due to a lack of standardized design patterns and components, which can lead to confusion, frustration, and decreased trust.

---

### **Problem Statement 2: Barriers to Accessibility**

Many VA digital experiences fail to fully meet accessibility standards, creating significant barriers for Veterans with disabilities and preventing equitable access to essential services and information.

---

### **Problem Statement 3: Fragmented Development Workflows**

Designers and developers across VA teams frequently recreate UI elements and forms from scratch, leading to wasted effort, inefficiencies, and inconsistent implementation of best practices.

---

### **Problem Statement 4: Slow Time-to-Value**

Without a shared, scalable foundation of design and form tools, digital teams face delays in building and launching new services, reducing the VA's ability to rapidly respond to Veteran needs.

---

### **Objective**

To accelerate the creation of accessible, consistent, and Veteran-centered digital experiences by scaling and evolving a shared design system and forms platform for VA teams.

### Additional problem statements

- Inconsistent design and form experiences confuse users and reduce trust.
- Accessibility gaps create barriers for Veterans with disabilities.
- Duplicate work across teams leads to inefficiency and slower delivery.
- Lack of clear guidance or shared tools hampers quality and innovation.

## **Core Hypotheses**

1. **If** we provide a comprehensive, well-documented design system and forms library,  
    **then** design and engineering teams will adopt it more readily, reducing duplicated work and increasing consistency.

2. **If** the system is built with accessibility as a foundational principle,  
    **then** Veterans of all abilities will have a more equitable experience across VA digital services.

3. **If** we create strong feedback loops with product teams and stakeholders,  
    **then** the system will evolve to better meet real-world needs and foster a culture of continuous improvement.

4. **If** we integrate form best practices and common workflows into reusable patterns,  
    **then** teams will deliver form-based interactions faster and with higher quality.

## **Key Features & Components**

- A library of reusable, WCAG-compliant UI components & patterns
- Configurable form patterns and templates for common VA workflows
- Figma design tokens and web/mobile component library
- Robust, accessible documentation and usage guidelines
- Contribution model and governance process
- Developer tooling for implementation in VA tech stacks
- Usage analytics and feedback tools

## **Success Metrics**

- % increase of VA digital products using the design system & forms library
- Decrease in reported accessibility issues during staging review
- Time saved per team on UI/form development
- Satisfaction scores from internal product teams
- Adoption rate of newly released components/patterns


