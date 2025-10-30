# Results of Synthesizing Existing Qualitative Research

By utilizing the va.gov-team [Copilot Reasearch Prompts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/copilot-research-prompts) (specifically [#3](github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/copilot-research-prompts/research-discovery/past-research-discovery-prompt.md)) Identity-related research was analyzed with GitHub Copilot to find relevant results related to the following topics:

- Sign in
- Fraud
- Test accounts
- Delegate access
- Terms of Use
- Set up account
- Verify account

Each topic can be found below accompanied by a formatted version of the AI response.

## Sign In

### Relevant Research Findings, Insights, or Artifacts

- **User Problem Statements**: The sign-in experience is one of the lowest-rated on VA.gov. Key user problems identified include the need for a quick, easy, and secure sign-in process, seamless navigation between VA websites without multiple sign-ins, and efficient identity verification and issue resolution. You can find more details in the [login/README.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/README.md).

- **Accessibility Research**: A research study was conducted to assess the accessibility of the sign-in modal, with a focus on users with disabilities and those who rely on assistive technology. This research was prompted by the upcoming migration of MHV users to VA.gov and the introduction of Login.gov. For more information, see the [Sign-In Accessibility Research Study Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/login.gov/Sign-In%20Accessibility/Sign-In_Accessibility_Research_Study.md).

- **Quarterly Survey Data**: The team analyzes qualitative data from Medallia surveys and MyVA411 call center logs on a quarterly basis. The [2025 Q1 survey data findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q1%20survey%20data%20findings.md) document contains themes, recommendations, and direct quotes from users regarding their sign-in experience.

- **User Frustration Tracking**: An investigation into using Datadog Real User Monitoring (RUM) was conducted to better understand user frustration during the authentication process. This involves tracking metrics like "rage clicks", "dead clicks", and "error clicks" to identify UI issues. The findings are documented in the [Datadog RUM Spike](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Spikes%20%26%20Decisions/2024-10-22_datadog-rum.md).

### Key Outcomes, Challenges, or Gaps from Past Research

- **Complexity and Fragmentation**: The sign-in process can be confusing for users due to multiple credential options (ID.me, Login.gov, DS Logon, MHV) and different sign-in flows across various VA properties.

- **Accessibility Barriers**: The accessibility research plan suggests that there are concerns about whether the sign-in process is fully accessible to all users, particularly those using screen readers or other assistive technologies.

- **Need for Better Support**: User feedback indicates a need for more effective and accessible support when they encounter sign-in problems.

### Relevant Standards, Guidelines, or Practices

- **Qualitative Data Analysis**: The [User Guide for Support Satisfaction Survey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/user-guide_support-satisfaction-survey.md) provides a detailed process for cleaning, organizing, coding, and analyzing qualitative data from user feedback.

- **Data Request Process**: For gathering new data, there are instructions on how to request Medallia survey data and contact center data. You can find this information in the [Instructions for gathering and tagging data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/Instructions%20for%20gathering%20and%20tagging%20data.md).

- **Testing and Development**: The frontend team has a [2022 testing plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/2022-testing-plan.md) that outlines the components and user flows to be tested, which can provide context on the technical implementation of the sign-in experience.

### Areas for Additional Research or User Input

- **Mental Model of Sign-In**: While there is data on user frustrations, a deeper dive into the mental models of different user segments (e.g., Veterans vs. family members, users with different levels of technical skill) could uncover more fundamental usability issues.

- **Post-Sign-In Experience**: Much of the research focuses on the authentication event itself. Research into the user journey immediately following sign-in could reveal opportunities to improve the transition into the authenticated experience.

- **Impact of Sign-in on Task Completion**: Research that connects the sign-in experience to the user's ability to complete their primary task on VA.gov could provide powerful metrics to justify further investment in improving the sign-in process.

- **Non-Veteran User Roles**: The [discovery research on user roles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/user-roles/discovery/README.md) is a good starting point, but more research is needed to understand the specific needs and challenges of non-Veteran users during the sign-in and identity verification process.

## Fraud

### Relevant Research Findings, Insights, or Artifacts

- **[DRAFT] Research Plan**: Understanding Veteran Experiences with Fraud: This document is the most direct and relevant artifact. It outlines a qualitative study to understand the fraud experiences of Veterans.

  - **Primary Research Questions**: The research aims to uncover the types of fraud Veterans experience, how they discover it, the role of the VA and Credential Service Providers (CSPs) in the process, and the overall impact on their lives. You can view the detailed research questions [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%20%5DResearch%20Plan_%20Understanding%20Veteran%20Experiences%20with%20Fraud.md#primary-research-questions).

  - **Hypotheses**: The research is guided by several hypotheses, including that Veterans often discover fraud through third parties, there are gaps in VA support, fraud disproportionately impacts Veterans, resolution is challenging, and these experiences erode trust in digital services. You can review the hypotheses [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%20%5DResearch%20Plan_%20Understanding%20Veteran%20Experiences%20with%20Fraud.md#hypotheses).

  - **Methodology**: The study proposes using semi-structured interviews with a trauma-informed approach, recognizing the sensitive nature of the topic. You can find more details on the methodology [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%20%5DResearch%20Plan_%20Understanding%20Veteran%20Experiences%20with%20Fraud.md#methodology).

- **Fraud detection & prevention**: A review of the payment types & methods used by VA.gov: This document provides a detailed overview of payment systems and known fraud vectors within the VA.

  - **Key Areas of Fraud**: It details various types of fraud, including student aid fraud, educational grant fraud, and payment redirection fraud. You can see the table of contents for an overview [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Fraud%20detection%20and%20prevention/Fraud%20detection%20-%20Payment%20types%20and%20methods%20used%20by%20VA.md).

### Key Outcomes, Challenges, or Gaps from Past Research

- **Gaps in Understanding the Veteran Experience**: The very existence of the "[DRAFT] Research Plan: Understanding Veteran Experiences with Fraud" indicates a significant gap in understanding the end-to-end experience of a Veteran who has been a victim of fraud.

- **Systemic Gaps**: The research plans for "Fraud Landscape Mapping Discovery" ([Track 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%5D%20Research%20Plan%20for%20Track%201.md) and [Track 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%5D%20Research%20Plan%20for%20Track%202.md)) aim to map the entire fraud ecosystem, suggesting that a holistic view of how different systems interact is currently lacking.

- **Data and Infrastructure Challenges**: The "Track 2" research plan explicitly calls out the challenge of dealing with massive amounts of data (~55 TB) from vets-api logs and the need to build infrastructure to filter and analyze this data for fraud detection. You can read about this [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%5D%20Research%20Plan%20for%20Track%202.md#phase-2-exploratory-analysis).

### Relevant Standards, Guidelines, or Practices

- **Trauma-Informed Approach**: The research plan for understanding Veteran experiences with fraud documents a clear commitment to a trauma-informed research approach. This includes careful planning of interview questions, providing "emergency exits" during sessions, and getting consent from participants for observers. This is a key practice that should inform your work. You can review the approach [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/%5BDRAFT%20%5DResearch%20Plan_%20Understanding%20Veteran%20Experiences%20with%20Fraud.md#trauma-informed-approach).

- **Credential Service Provider (CSP) Collaboration**: The "[Credential Service Provider Fraud Mitigation Discussion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Fraud%20Mitigation%20%26%20Response/Research/CSP%20Conversation%20Guide.md)" provides a framework for engaging with CSPs. It includes questions about the limitations of their fraud detection systems and how the VA can augment their signals. This suggests a standard practice of working closely with CSPs to understand and mitigate fraud.

### Areas for Additional Research or User Input

- **Completing the Planned Research**: The most obvious area for additional research is to carry out the studies outlined in the draft research plans. The qualitative study with veterans is critical for gathering direct user input.

- **Underreported Instances of Fraud**: One of the primary research questions is to identify underreported instances of fraud that don't result in financial harm. This is a key area for future investigation.

- **Long-Term Impacts**: The secondary research questions in the Veteran experiences plan touch on the long-term impacts of fraud. This is a complex area that would benefit from further research.

- **Scholarship Fraud**: The document on payment types notes that "Congress recognizes the prevalence of fraud due to misrepresentation in the realm of college education financial assistance services" and flags it as a "Potential research topic". You can find this note [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Fraud%20detection%20and%20prevention/Fraud%20detection%20-%20Payment%20types%20and%20methods%20used%20by%20VA.md#fraud-report-findings).

## Test accounts

### Relevant Research Findings, Insights, and Artifacts

The most relevant research found is the **[Production Test Accounts Product Team Usage Patterns Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Production%20Test%20Accounts/Research/%5B%20Findings%20%5D%20Production%20Test%20Accounts%20Findings.md)** from July 2025. This study involved interviews with four product teams (VEText, MHV to VA.gov transition, telehealth, medical records, and secure messaging).

Another key resource is the **[Mocked Authentication, research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20Authentication%20research%20findings.md)** from September 2023, which, while focused on mocked authentication, provides insights into how developers use test accounts.

### Key Outcomes, Challenges, and Gaps

**Challenges & Pain Points:**

*   **Heavy Reliance on Production Test Accounts:** Teams heavily rely on production test accounts because staging and other lower environments lack critical integrations with VA services like secure messaging and pharmacy. This makes it impossible to test real-world workflows before production releases. ([Production Test Accounts Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Production%20Test%20Accounts/Research/%5B%20Findings%20%5D%20Production%20Test%20Accounts%20Findings.md#validation-of-hypotheses))

*   **Environment Inconsistencies:** Differences between staging and production environments create friction and make it difficult for teams to validate how their features will perform. ([Production Test Accounts Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Production%20Test%20Accounts/Research/%5B%20Findings%20%5D%20Production%20Test%20Accounts%20Findings.md#validation-of-hypotheses))

*   **Engineers Have Specific Test Users in Mind:** When testing, engineers often have a specific test user in mind that has particular attributes needed for their tests. These are often recommended by other team members. ([Mocked Authentication Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20Authentication%20research%20findings.md#details-of-findings))

**Outcomes:**

*   Product teams use production test accounts for a variety of testing, including smoke testing, regression testing, usability validation, and load testing.

*   The reliance on production testing is especially high for projects like the Oracle Health rollout and the MHV to VA.gov transition.

### Relevant Standards, Guidelines, or Practices

The research highlights current practices rather than formal standards or guidelines.

*   **Varied Testing Workflows:** While teams leverage industry-standard practices, their testing workflows in production differ depending on their resources, relationships, and protocols. ([Production Test Accounts Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Production%20Test%20Accounts/Research/%5B%20Findings%20%5D%20Production%20Test%20Accounts%20Findings.md#validation-of-hypotheses))

*   **Informal Access to Testers:** Some teams have access to SMEs and "friends and family" for post-release testing, but this access is varied and based on the teams' own outreach efforts. ([Production Test Accounts Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Production%20Test%20Accounts/Research/%5B%20Findings%20%5D%20Production%20Test%20Accounts%20Findings.md#current-practices))

### Areas for Additional Research

*   **Standardizing Test Account Management:** The research indicates a lack of a standardized process for managing and using production test accounts. Further research could explore the creation of a centralized system or set of guidelines for test account provisioning and usage to improve consistency and reduce friction.

*   **Improving Staging Environments:** A major pain point is the inadequacy of staging environments. Research into what it would take to make staging a more viable testing environment that mirrors production could lead to significant improvements in the development lifecycle.

*   **Needs of Underserved Groups:** The [2024-08 Sign-in Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md#underserved-groups-we-havent-talked-to) mentions underserved groups that have not been talked to. While not directly about test accounts, considering these groups in the context of testing could be a valuable area of exploration.

## Delegate access

### Relevant Research Findings, Insights, and Artifacts

A key document is the [2025-05-Healthcare Representative Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/delegate-access%20/Research/2025-05-Healthcare%20Representative%20Research%20Findings.md). This research from May 2025 provides a recent and in-depth look at the challenges faced by caregivers.

**Key Insights from the 2025 Research:**

*   **Caregiver Burden:** Caregivers are often overwhelmed with the responsibilities of caring for a Veteran, and the process of navigating the VA adds to this burden.

*   **Designation vs. Access:** A formal "caregiver" designation through VA programs does not automatically grant the authorization or digital access needed to act on a Veteran's behalf.

*   **System Workarounds:** To accomplish tasks, caregivers often resort to workarounds, such as using the Veteran's login credentials, which is not an officially sanctioned or secure method.

*   **Fragmented Systems:** The VA's systems are described as fragmented and difficult to navigate, with inconsistencies in how caregivers are recognized and supported across different departments (e.g., VHA vs. VBA).

*   **Inconsistent Experiences:** While some tasks like prescription refills are straightforward, the overall experience for caregivers is inconsistent.

**Previous Research Referenced:**

The 2025 research builds upon previous studies, including:

*   [2024-10 Caregiver study](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726173728303/0cf8beb343b2e2ed0a84d4afc9732e3bf40d3ad0): Focused on form 10-10CG and highlighted confusion around caregiver roles and benefits.

*   [Non-Veteran User Roles Discovery (Nov 2021)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8c46b257b67a9d28fbaa3cda92115671ed48cfcc/products/identity/Research/user-roles/discovery/non-veteran-user-roles-discovery-phase-1.md): Found that caregivers are not a formal support role in eBenefits and that while MPI can store delegate information, it doesn't always sync with other systems like MHV.

*   [Digital Health Modernization Generative Research (2022)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/research-findings.md): Noted that caregivers used MyHealtheVet for tasks and were frustrated by the lack of distinction between their actions and the Veteran's.

### Key Outcomes, Challenges, or Gaps

*   **Primary Challenge:** The fundamental problem is the lack of a unified, official system for caregivers to have digital access to a Veteran's information and the ability to perform tasks on their behalf.

*   **Gaps Identified:**

    *   **Inconsistent Authorization:** Power of Attorney (POA) and consent forms are not consistently recognized across different VA services, requiring caregivers to repeatedly present paperwork.

    *   **Lack of Granular Permissions:** The current system does not support assigning specific, limited permissions to a caregiver.

    *   **Technical and Policy Disconnect:** While there are technical systems that can store delegate information (like MPI and CARMA), this information does not translate into functional, cross-platform permissions.

### Relevant Standards, Guidelines, or Practices

The research touches on legal and compliance issues, primarily centered around **HIPAA** and privacy. A major concern is verifying who is making a change to a Veteran's record and whether they are legally authorized to do so. The document notes a significant challenge: "From a HIPAA perspective, it sounds like health care POA and court-appointed guardian status are tracked in a patient’s medical record, which means we can not show this to the POA or court-appointed guardian in their VA.gov account (because this means we are showing them info in someone else’s medical record)."

This suggests that any solution for delegate access must navigate complex legal and privacy constraints to avoid violating patient privacy laws.

### **4. Areas for Additional Research or User Input**

The "Next Steps / additional research" section of the [2025 research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/delegate-access%20/Research/2025-05-Healthcare%20Representative%20Research%20Findings.md) provides a clear roadmap for future exploration:

1.  **Deeper Dive into Consent/POA:** Further investigate the pain points around Power of Attorney and other consent forms to improve the authorization process.

2.  **Improve Documentation:** Make it easier for caregivers to find resources and understand the benefits they and the Veteran are eligible for.

3.  **Gather Behavioral Data:** Analyze data from Google Analytics, social media, and VSignals surveys to better understand where caregivers struggle most.

4.  **Interview Front-line Staff:** Speak with VA staff who interact directly with Veterans and caregivers to understand their perspectives on the challenges and potential solutions.

5.  **Understand Technical Systems:** Investigate the technical implementation of CARMA, MPI, and Veteran profiles to see if existing infrastructure can be leveraged to create a more robust delegate access solution.

## Terms of Use

### Relevant Artifacts

I found a key document that outlines the functionality of the "Terms of Use" application:

*   **[/Frontend/applications/terms-of-use.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/applications/terms-of-use.md)**: This document describes the purpose, goals, and user flows for a unified Terms of Use page. It appears to be the primary resource for understanding the intended functionality.

### Key Outcomes and Gaps from Past Implementations

The terms-of-use.md document indicates a shift from a fragmented system to a unified one.

**Key Desired Outcomes:**

*   **Unified Experience:** The main goal is to create a single, centralized "Terms of Use" page for all of VA.gov, replacing a previous system where terms and conditions were hosted on My HealtheVet.

*   **Binding Agreement:** The application is intended to create a binding contract between the user and the VA.

*   **Clear User Actions:** Users must be able to view, accept, or deny the terms.
*   **Consequences for Denial:** A user who denies the terms of use will be logged out and shown an error page.

*   **Cross-Platform Consistency:** The experience should be consistent across different VA properties like the VA Mobile app, My HealtheVet, and eBenefits.

**Gaps from Past Implementations:**

The need for a "unified" terms of use application suggests that the previous approach was siloed and inconsistent, which likely posed a challenge for both users and the VA.

### Standards and Guidelines

The primary guidelines for your work are the user flows and requirements outlined in the terms-of-use.md document. Additionally, the document references:

*   **NIST Documentation:** For definitions of "Level of Assurance" (LOA) and "Identity Authentication Level" (IAL), which are important standards in identity and access management.

### 4. Areas for Additional Research

The existing documentation is heavily focused on the technical implementation and desired business outcomes. There is a clear opportunity for more qualitative user research in several areas:

*   **User Comprehension:** Do users understand what they are agreeing to? Research could explore the clarity and readability of the terms of use from a user's perspective.

*   **User Expectations on Denial:** What do users expect to happen when they decline the terms? Is the current flow of logging them out and showing an error page the best possible user experience?

*   **Re-engaging after Denial:** If a user denies the terms, what is the process for them to re-evaluate and accept them later? This is not clearly defined.

*   **My VA Health User Flow:** The "My VA Health" flow includes automatic account provisioning, which adds complexity. User research would be valuable to ensure this flow is intuitive and does not cause confusion or frustration.

**Follow-up Guidance:**

While I found a key document describing the *what* and *how* of the "Terms of Use" feature, I did not find any documents detailing qualitative user research that informed its creation. The areas listed above are ripe for further exploration to ensure the feature is not only functional but also user-centered. I would recommend exploring the Research directories within the repository to see if any broader user research has been conducted that could be relevant.

## Set up account

### Research Findings, Insights, and Artifacts

Several research initiatives have been conducted on the account creation and sign-in process. The findings highlight persistent challenges for users, particularly around technical issues, user experience confusion, and identity verification.

**Key Artifacts:**

*   **[Front end sign in flow - discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md)**: This secondary research from May 2024 provides a comprehensive overview of the front-end sign-in flow, including literature reviews, error message analysis, and stakeholder discussions.

*   **[Account creation user flows for Login.gov and ID.me](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-transition/account-creation-user-flows-for-logingov-and-idme.md)**: This audit documents the user flow for creating new Login.gov and ID.me accounts, identifying gaps and opportunities for improvement.

*   **[2024-08 Sign-in Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md)**: This document outlines key findings from user research on the sign-in transition, focusing on user sentiment and behavior when creating new accounts.

*   **[2025 Q1 survey data findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q1%20survey%20data%20findings.md)**: This report includes qualitative themes from user feedback, such as issues with account setup, verification, and technical problems.

*   **[2022-11 Login.gov Remote Identity Proofing Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2022-11%20Login.gov%20Remote%20Identity%20Proofing/2022-11%20%20Research%20Findings%20-%20Remote%20Identity%20Proofing%20and%20MFA.md)**: This study details the success and failure rates of users creating accounts and verifying their identity, with only 24% succeeding without issues.

### Key Outcomes, Challenges, and Gaps

Past research consistently points to several key challenges in the account setup process:

*   **Technical Issues:** Users frequently encounter technical problems. The [2024-08 Sign-in Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md#key-findings) notes that "most research participants experienced technical issues when creating a new account." These include problems with email addresses already being in use, changed phone numbers, and issues with uploading photo IDs ([2025 Q1 survey data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q1%20survey%20data%20findings.md#themes-from-qualitative-data)).

*   **User Confusion and Frustration:** The account creation process is often not intuitive. Users report being stuck in a "verify loop" where they are repeatedly asked to verify their identity. The [2025 Q1 survey data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q1%20survey%20data%20findings.md#verify-loop) highlights user quotes like, "System tells me I need to verify my identity. There is not option to do so. System keeps going in circles with no option to enter information." The [Front end sign in flow research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md#2-ia-and-technical-issues) also points out that "create account" links do not always take users to the expected page.

*   **Identity Verification Hurdles:** A significant portion of users struggle with identity verification. The [2022-11 Login.gov Remote Identity Proofing research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2022-11%20Login.gov%20Remote%20Identity%20Proofing/2022-11%20%20Research%20Findings%20-%20Remote%20Identity%20Proofing%20and%20MFA.md#some-numbers) found that 19% of participants abandoned the process and 14% were blocked. Users also express discomfort with providing sensitive information and frustration with scanning and uploading documents ([2024-08 Sign-in Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md#sentiment)).

### Relevant Standards, Guidelines, and Practices

*   The **[DS Logon Research Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/ds-logon/research/research_brief.md#recommendations)** recommends updating password requirements to meet NIST standards on Digital Identity Guidelines.

*   The **[2024-08 Sign-in Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md#recommendations)** recommends collaborating with Login.gov and ID.me teams on content improvements and creating service blueprints for users transitioning to modern credential providers.

### Areas for Additional Research or User Input

Based on the existing research, the following areas would benefit from further exploration:

*   **Streamlining the "Create Account" Flow:** The [Front end sign in flow research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md#recommendations-list) suggests further research is needed to determine if a "universal create account page" that presents creation options more prominently would be beneficial.

*   **Improving Support for Verification:** With many users abandoning or getting blocked during identity verification, research into more effective support mechanisms (e.g., clearer instructions, alternative verification methods, better access to human support) is warranted. The [2024-08 Sign-in Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Research%20Findings.md#sentiment) notes that Veterans want easy access to phone or in-person support.

*   **Caregiver Account Creation:** The [DS Logon Research Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/ds-logon/research/research_brief.md#recommendations) recommends allowing caregivers to set up their own linked accounts. The [2025 Q1 survey data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q1%20survey%20data%20findings.md#themes-from-qualitative-data) also identifies caregivers setting up accounts for Veterans as a pain point. This indicates a need for a dedicated and clear process for caregivers.

## Verify account

### Relevant Research Findings, Insights, and Artifacts

My search has identified several key documents that provide insights into the user experience with account verification:

*   **[2025 Q1 Survey Data Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q1%20survey%20data%20findings.md):** This report is a crucial source of qualitative data from Medallia feedback and MyVA411 call logs. A major recurring theme is the **"Verify Loop,"** where users are repeatedly prompted to verify their identity. The report details several user-reported issues, including:
    *   Problems with incorrect or shared email addresses.
    *   Verification failures stemming from new or unverified phone numbers.
    *   Difficulties with the photo ID upload process.
    *   Challenges faced by caregivers attempting to set up accounts for Veterans.
    *   Accessibility issues that hinder the verification process.

*   **[2025 Q2 Verify Focused Survey Data Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Ongoing%20-%20quantitative%20data/2025%20Q2%20verify%20focus.md):** This document reveals a significant gap in data collection: no feedback was gathered directly from the `/verify` page. However, it does provide insights from related resource pages, highlighting issues such as users being required to verify their identity multiple times by Credential Service Providers (CSPs) and specific challenges for users under 18 or located in the Philippines.

*   **[Front End Sign-in Flow - Discovery Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md):** This secondary research provides a broad overview of the sign-in and verification process, identifying multiple pain points. It recommends further investigation into the "create account" workflow and calls for improvements to the user experience when individuals are redirected to the `/verify` page.

*   **[Primary and Secondary Research for MHV Inherited Proofing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Inherited%20Proofing/MHV%20Inherited%20Proofing/User%20Research/Primary%20and%20Secondary%20Research%20for%20MHV%20Inherited%20Proofing.md):** While focused on MHV, this document offers valuable context on data migration and user behavior patterns, which can inform our understanding of the challenges associated with transitioning users through different verification states.

*   **[Identity Research README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/readme.md):** This file serves as a valuable index of research conducted in 2023, 2024, and 2025, providing direct links to detailed findings reports that can be explored for further context.

### Key Outcomes, Challenges, or Gaps

Based on the available research, the following key themes emerge:

*   **The "Verify Loop" is a critical and persistent challenge:** A significant number of users report being trapped in a frustrating cycle of repeated verification attempts, which often prevents them from accessing necessary services.

*   **Technical and data-related issues are prevalent:** Problems with outdated personal information, difficulties with ID uploads, and various technical errors are frequently cited as major barriers to successful verification.

*   **User confusion remains high:** Many users express a lack of understanding regarding the purpose of identity verification, the steps involved, and how to resolve errors. The relationship between VA.gov and third-party CSPs is a common source of confusion.

*   **A significant data gap exists:** The Q2 2025 report highlights the absence of direct user feedback from the `/verify` page. This is a critical gap, as it limits our understanding of the user experience at one of the most crucial points in the verification journey.

### Relevant Standards, Guidelines, or Practices

The **[Front End Sign-in Flow - Discovery Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md)** document outlines several recommendations that can be considered best practices for improving the verification experience. These include standardizing the presentation of sign-in and verification alerts and providing clearer, more consistent messaging to users.

### Areas for Additional Research

Given the findings, the following areas would benefit from further exploration:

*   **Targeted research on the `/verify` page:** It is essential to gather direct feedback from users on this page to understand their experience and identify specific pain points. This could be achieved through usability testing, user interviews, or by implementing a feedback mechanism on the page itself.

*   **Investigate the root causes of the "Verify Loop":** A deeper technical investigation is needed to identify and address the underlying causes of this issue. This may involve collaboration with CSPs and a thorough review of the technical implementation.

*   **Explore the needs of specific user groups:** Further research should focus on the unique challenges faced by caregivers, users with accessibility needs, and those in specific geographic locations (such as the Philippines) to ensure the verification process is inclusive and effective for all.

*   **Test new content and messaging:** Usability testing of new content and messaging aimed at clarifying the verification process and the roles of different parties (VA.gov vs. CSPs) would be highly beneficial in reducing user confusion.
