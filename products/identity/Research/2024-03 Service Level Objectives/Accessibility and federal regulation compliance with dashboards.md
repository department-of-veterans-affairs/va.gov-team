# Accessibility and Federal Standards for Service Availability Dashboards
## The role of accessible VA.gov service availability in improving Veteran CX and Trust

**UX Researcher**: Joshua.Matulonis@va.gov

**March 29, 2024**
**Epic: SLOs and SLAs**

Jump to:

- [Key Findings](#key-findings)
- [Introduction](#introduction)
- [Federal Requirements and Policies](#federal-requirements-and-policies)
- [Examples of Federal Websites Prioritizing Availability](#examples-of-federal-websites-prioritizing-availability)
- [Case Studies](#case-studies)
- [Maintaining Uptime](#maintaining-uptime)
- [Accessible Data Visualization in Dashboards](#accessible-data-visualization-in-dashboards)
- [Next Steps](#next-steps)
- [Terms](#terms)
- [Works Cited](#works-cited)
----------------------------

## Key Findings

### Federal Standards Matter

- Whether filing taxes, enrolling in healthcare, or legal inquiries, users rely on federal websites for accurate and timely information.
- Availability is not an abstract concept; it directly impacts citizens’ lives. 
- Federal guidelines state the importance of maintaining public access to secure digital services where transparency and accountability are ensured.
- Users return to a website they trust, knowing it won’t fail them during critical moments.
- A consistently available website signals preparedness, efficiency, and commitment.
   - Positive interactions build confidence.
- Guidelines for data visualization and accessibility, within Section 508 and WCAG 2.2, are important for presenting uptime, downtime, and other availability metrics on federal website dashboards in a way that is clear, usable, and understandable for all users. 


### Learnings From Federal Website Availability Issues
- Proactive notifications of downtime, and adherence to downtime schedules, can reduce frustration and maintain public trust.
- To determine whether it is safe to scale up a program, stress test a prototype before a public rollout with participants.
- Use an incremental rollout approach to ensure that issues can be addressed in real-time, following industry best practices.
- A website's sign-in screen may become a bottleneck if it isn’t designed to handle as much traffic as the main site.
- Provide website support technicians a different sign-in screen to access the site when troubleshooting problems (In case the sign-in screen is unavailable).
- Having consistent operating times for federal sites requires setting availability metrics in each case responsibly and meaningfully.
  - Some sites have a 90% target associated with this measure.
  - This allows for some variance across several products due to unanticipated or external factors.
- Section 508 standards apply to ICT products and services that are developed, maintained, or used by the Federal government. 

---------------------
---------------------

## Introduction

Performance.gov selected two services of the Department of Veteran's Affairs as part of 38 of the nation’s High Impact Service Providers (HISPs) to raise the standard of government service delivery.

HISPs are selected due to the scale and critical nature of their public-facing services. Annually, HISP teams conduct comprehensive assessments of their high-impact services, measure their customer experience maturity, and identify actions to improve service delivery.

| Department of Veterans Affairs | Veterans Health Administration |
|:--- | :--- |
| Accessing VBA education benefits | Utilizing in-person primary care |
| Using the VBA decision review process | Utilizing inpatient medical/acute care |
| Accessing VBA Disability Compensation benefits | |

It is essential to display uptime, downtime, errors, and other availability information in an effective way that fosters trust, transparency, and a positive customer experience for veterans. 


### Customer Experience and Trust

Transparency regarding website availability is crucial for building trust with VA website users, particularly veterans seeking critical information and services. 

Numerous studies have documented the importance of website responsiveness and minimal downtime for user satisfaction, in addition to the strong correlation between website performance and customer experience. 

- A study by [Forrester Research](https://www.forrester.com/) indicates that a one-second delay in page load time can decrease customer satisfaction by 7%. 

- According to the Federal IT Dashboard, only 30% of federal websites have no detectable accessibility issues.

- Less than 20% of federal websites use code from the U.S. Web Design System (USWDS), leading to inconsistent user experiences.

- Research by OMB revealed 45% of federal websites are not mobile friendly.

- The [Uptime Institute](https://uptimeinstitute.com/) reports that unplanned downtime can cost businesses millions of dollars per hour. 

While the VA is not a for-profit business, unplanned outages can have a significant negative impact on veterans' ability to access essential services. 
Downtime can lead to significant consequences, frustration, and impede veterans from applying for benefits, scheduling appointments, or refilling prescriptions online. 
Ensuring a consistent availability of services is essential for maintaining a positive user experience.

**A well-designed dashboard displaying real-time availability metrics can address these concerns in several ways**

**Manage User Expectations**
- By informing users about potential downtime or ongoing maintenance, the VA can set realistic expectations and minimize frustration. 
- For instance, the dashboard could clearly communicate the expected duration of maintenance windows or highlight periods of peak usage that might lead to slower response times. 
   - This proactive communication can help veterans plan their online interactions and avoid scheduling important tasks during known downtime.

**Promote Transparency**
- Open communication regarding website health builds trust and demonstrates the VA's commitment to user experience.
- A well-designed dashboard can showcase the VA's investment in website uptime and reliability.
- By acknowledging potential issues and providing updates, the VA fosters a sense of transparency and accountability.

**Empower Users**
- Access to service availability information empowers veterans to make informed decisions about their online interactions with the VA.
- The dashboard can provide veterans with the knowledge to plan their tasks to access services during optimal uptimes.
   - For example, if the dashboard indicates a period of expected heavy traffic, veterans can choose to schedule important tasks for a different time or utilize alternative channels to access VA services.

---------------------------

## Federal Requirements and Policies 

Federal agencies must adhere to various policies and guidelines related to website performance, accessibility, and data protection.

### [21st Century Integrated Digital Experience Act (21st Century IDEA)](https://www.gsa.gov/technology/government-it-initiatives/digital-strategy/2020-annual-report)  (December 2018)

- To modernize and improve user experience of government-produced digital products, IDEA sets standards encompassing service availability, responsiveness, accessibility, security, and usability like websites, applications, and online forms.
- Agencies must adhere to its requirements to ensure citizens can access government services seamlessly, regardless of time or location.
- GSA uses site-scanning tools to automatically determine whether sites have search capabilities on par with IDEA.

### [Delivering a Digital-First Public Experience](https://www.whitehouse.gov/wp-content/uploads/2023/09/M-23-22-Delivering-a-Digital-First-Public-Experience.pdf)

- Created to accomplish the standards listed in IDEA.
- As oversight, OMB has created “digital experience indicators” to keep track of where agencies are making progress in implementing key elements. 
- Once the indicators are widely used, OMB will move towards optimization.

### [OMB Circular A-130: Managing Information as a Strategic Resource](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf)

- Promotes the strategic importance of information management (updated in 2016).
- Availability is a core aspect of effective information dissemination, and federal websites play a pivotal role in achieving this goal.

### [Open Data Policy-Managing Information as an Asset (M-13-13)](https://digital.gov/resources/open-data-policy-m-13-13/)

- Released in May 2013, this policy encourages agencies to treat information as a valuable asset.
- It promotes transparency, data sharing, and open data initiatives.
- Established a "presumption of openness" principle where government information should be made public by default, with exceptions only for reasons of privacy, security, or other restrictions.
- Required agencies to develop and publish inventories of their data holdings and make them discoverable through Data.gov, a central government open data portal.
  
### [Section 508 of the Rehabilitation Act of 1973](https://www.section508.gov/)

- These standards ensures that federal websites are accessible to people with disabilities. Agencies must create content that is “perceivable, operable, understandable, and robust” for all users.
- Section 508 standards apply to ICT products and services that are developed, maintained, or used by the Federal government.  

### [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)

- These guidelines provide practical recommendations for creating accessible web content.
- Federal agencies should align with WCAG standards to enhance availability for all users, regardless of their abilities.

### [Federal Information Security Management Act (FISMA)](https://www.cisa.gov/topics/cyber-threats-and-advisories/federal-information-security-modernization-act)

- Established a framework for protecting government information systems, including websites, with an emphasis on accountability and transparency.
   - Transparency: Public SLAs communicate service availability expectations to users.
- Security considerations should be addressed when designing and maintaining dashboards. [NIST Special Publication 800-30](https://www.nist.gov/privacy-framework/nist-sp-800-30)
- Includes measures to safeguard sensitive user data, prevent unauthorized access, and ensure the confidentiality, integrity, and availability of website performance data.
   - Performance Monitoring: Dashboards can be used to monitor and track service availability metrics, which is then used to demonstrate ongoing efforts to improve security and mitigate risks. [NIST Special Publication 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
   - Note: Also known as E-Government Act of 2002.

----------------------------

## Examples of Federal Websites Prioritizing Availability

### HealthCare.gov

- The official health insurance marketplace for the United States.
- Despite initial challenges during its launch, HealthCare.gov now maintains high availability.
- Regular updates, robust infrastructure, and proactive monitoring contribute to its success.

### USA.gov

- The U.S. government’s official web portal.
- USA.gov provides a unified entry point to federal services.
- Its uptime and consistent performance demonstrate commitment to citizens.
  
### National Science Foundation (NSF)

- Some of the NSF’s core functions are to offer digital services and programs to construct, upgrade, maintain, and operate research facilities in a wide range of scientific and engineering fields. 
- Efficiency, the adherence to scheduled uptime or downtime, is one of their key indicators monitored daily.
- The facilities program has a 90% target associated with this measure, which allows for some variance across NSF programs due to unanticipated or external factors, in addition to addressing the needs of some facilities to change or modify instruments, update systems, and operate their many systems. 
- These differences hilight the importance of setting SL's for each case responsibly and meaningfully. 

### IRS.gov

- The Internal Revenue Service website handles tax-related services.
- During peak tax seasons, IRS.gov experiences heavy traffic, yet it remains available.
- Load balancing, redundancy, and efficient error handling contribute to its reliability.

#### IRS Direct File

- Direct File is part of a pilot initiative that simplifies tax filing for eligible users with simple tax returns.
- It provides a secure and easy-to-use platform directly through the IRS website.
- The IRS aims to improve website availability and reliability through learnings from this pilot study.

#### Direct File Stress-Testing and Incremental Rollout:
- The IRS plans to invite taxpayers from 13 states to participate in the Direct File pilot during the 2024 filing season.
- Participants will stress-test the prototype and help the agency determine whether to scale up the program.
- The incremental rollout approach ensures that issues can be addressed in real-time, following industry best practices.

-----------------------------------

## Case Studies

### FAFSA Website Downtime and Its Effects on Students and Families

The Free Application for Federal Student Aid (FAFSA) is an essential gateway for millions of students and families seeking financial assistance to attend college. During the 2024-2025 award year, the FAFSA underwent significant changes to aid in its simplification and streamlining. Unfortunately, the implementation process faced delays, leading to unexpected consequences for applicants.

Downtime and Access Challenges

- The new FAFSA form, intended to be simpler and more user-friendly, experienced a delayed soft launch.
- Families could only access the form intermittently while the Education Department monitored the site for problems.
- The form was available for only short periods, causing frustration and uncertainty for applicants.
  - Due to the limited availability windows of ~3 hours for Dec. 30 - Jan. 1, about 30,000 forms were submitted.

Impact on Financial Aid Eligibility

- Changes in the system affected how financial need was calculated.
- Some students experienced decreased eligibility for Pell Grants.

Outcomes

- Concerns arose that families might not complete forms in time, delaying financial aid offers.
- Students applying through early decision could commit to colleges without knowing their aid status.
- Early decision colleges allowed flexibility for students with insufficient aid.
- Financial aid administrators needed to understand the impact of formula changes.
- Balancing equity and simplicity required proactive planning.


## Healthcare.gov Downtime and Its Effects on Public Access to Health Insurance

### Downtime and Access Challenges

Approximately 16.4 million Americans rely on HealthCare.gov for plan selections during open enrollment.
HealthCare.gov was officially launched on October 1, 2013, covering residents of 36 states that did not create their own healthcare exchanges.

- Downtime: Within 2 hours of launch, the website experienced downtime due to high demand—250,000 users, which was 5 times more than expected.
- New Consumers: Over 5 million new consumers attempted to access the website during this period.
- Citizens attempting to enroll in health insurance plans encountered error messages, slow loading times, and system unresponsiveness.
- The downtime persisted for 48 hours, coinciding with the peak enrollment period.
- Incomplete Design: The initial capacity issue was compounded by incomplete website design, leading to user frustrations.
- The website's sign-in screen became a bottleneck as it wasn’t designed to handle as much traffic as the main site.
- Website support technicians couldn’t provide assistance as they used the same sign-in screen to access the site for troubleshooting problems.

Impact:

- The downtime prevented timely plan selections, affecting individuals and families seeking health coverage.
- A total of 6 users completed and submitted their applications and selected a health insurance plan on the first day.
- Citizens expressed frustration on social media, highlighting the urgency of health insurance decisions.
- Families faced uncertainty about their coverage status due to the downtime.
- Trust in the government’s ability to manage essential services declined.

Legal Challenges:

- Advocacy groups and legal experts raised concerns about potential disenfranchisement.
- Lawsuits were filed, alleging that the downtime violated citizens’ right to access health insurance.
- The courts expedited hearings to address the issue before the enrollment deadline.

Lessons Learned and Recommendations:

- Regular maintenance schedules should be carefully planned to avoid peak enrollment times.
- Transparent communication during downtime is crucial. 
- Citizens need timely updates and alternative access options.
- Proactive notifications can mitigate frustration and maintain public trust.

------------------

## Maintaining Uptime

- Maintaining high uptime involves a combination of proactive testing, monitoring, and continuous improvement. 
- Regularly review and update your testing strategies to adapt to changes in your infrastructure and user behavior.

Manual Testing

- Regularly perform manual tests by accessing the main site’s sign-in screen.
- Verify that the sign-in process works as expected.
- Check for any error messages or unexpected behavior.
- Ensure that the site responds promptly and displays the sign-in form.

Automated Testing

- Set up automated tests using tools like Selenium or Puppeteer.
- Create test scripts that simulate user interactions (e.g., entering credentials, clicking sign-in).
- Schedule these tests to run periodically (e.g., daily or hourly).
- Monitor for any failures or deviations from expected behavior.

Uptime Monitoring

- Use external monitoring services to track the uptime of the main site.
- Configure these services to ping the main site at regular intervals (e.g., every 5 minutes).
- Receive alerts if the site becomes unavailable or responds with errors.
- Monitor key metrics such as response time, downtime duration, and HTTP status codes (e.g., 200 OK, 404 Not Found).

Load Testing

- Simulate heavy traffic to assess the site’s performance under stress.
- Use tools like Apache JMeter or Locust to create load tests.
- Gradually increase the number of concurrent users and monitor how the site handles the load.
- Identify bottlenecks, slow responses, or resource exhaustion.
- Adjust server configurations or optimize code as needed.

Failover Testing

- Test failover scenarios
   - Temporarily take down the main site (e.g., during maintenance or updates).
   - Verify that the backup authentication system (if any) seamlessly takes over.
   - Ensure users can still sign in without disruption.
- Document the failover process and ensure it’s well-documented for the operations team.

Geographical Testing

- Use tools that simulate requests from different geographical locations.
- Verify that the main site remains accessible globally.

Logging and Monitoring

- Implement robust logging
- Log sign-in attempts, errors, and response times.
- Monitor logs for anomalies or patterns.
- Set up alerts based on log data:
   - Detect unusual spikes in traffic or sudden errors.
- Investigate promptly if any issues arise.

Backup and Redundancy

- Ensure redundancy for critical components.
- Use multiple servers or cloud instances.
- Employ load balancers.
- Set up redundant databases.
- Regularly test failover mechanisms to confirm they work as expected.


-----------------------------

## Accessible Data Visualization in Dashboards

Effective data visualization is important for presenting uptime, downtime, and availability metrics on federal website dashboards in a way that is clear and understandable for all users. 

Creating an accessible user dashboard involves thoughtful design choices that cater to users with visual impairments, cognitive limitations, and motor skill variations.

| Visualization Technique | Purpose | Use Case | Best Practices for Accessibility |
| --- | ---| ---| ---|
| Bar Charts | Compare data between categories | Uptime percentages for different federal agencies | Clear bar labels (e.g., Agency Name);  Contrasting colors for each bar; Descriptive axis labels (e.g., Uptime Percentage) |
| Line Charts | Show trends and patterns over time | Weekly or monthly website availability trends | Smooth lines for continuous data; Data points for clarity; Descriptive axis labels (e.g., Time, Availability Percentage) |
| Pie Charts (Use with Caution) | Indicate proportions or percentages | Distribution of website downtime by error type (if limited categories)|  Limit slices to a maximum of 5-6 for clarity; Include data point labels or tooltips; Consider alternative visualizations for complex data sets |
 | Tables | Present detailed data | Response times for critical agency services | Clear headers for rows and columns; Descriptive row and column labels; Accessible formatting (avoid merged cells) |
| Scatterplots (Consider for Advanced Users) | Analyze relationships between variables | Correlation between website uptime and user traffic (for advanced users) | Data point labels for identification; Clear and labeled axes; Tooltips for detailed information; Note: May not be suitable for all users due to complexity |

**Table 1**. Outlines accessible data visualization techniques, use cases, and best practices for accessibility.

## Accessibility

Tooltips and Data Points
- Provide informative tooltips or data points associated with charts and graphs.
   - These should be accessible to screen readers and offer clear descriptions of the data points upon hover or focus.
- Consider using descriptive text that complements the visual representation, and avoid relying solely on color to convey information.

Color Contrast
- Select colors with a contrast ratio of at least 4.5:1 for small text and 3:1 for large text, as mandated by the WCAG (Web Content Accessibility Guidelines). [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- Use color contrast checkers like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=E9F1FC) or [APCA's Contrast Checker](https://www.achecks.org/apca-wcag-3-accessible-colour-contrast-checker/) to assess and improve visual clarity.
- High contrast benefits users with low vision, color blindness, and those viewing the dashboard in bright sunlight.

   - *Ineffective Contrast*: A red progress bar on a light pink background can be difficult to read for users with red-green color blindness.
   - **Effective Contrast**: Change the progress bar color to dark blue for improved readability.

Font Selection
- Avoid decorative or overly stylized fonts that can be difficult to read, especially for users with dyslexia or visual processing difficulties.
- Opt for clear, easy-to-read sans-serif fonts like Verdana, Tahoma, Calibri, or Arial.
   - These fonts are common across operating systems and tend to be more legible on screens.
- Consider font size and spacing for comfortable reading. A minimum font size of 16px is recommended for body text.
- Ensure adequate line spacing to prevent crowding.
- Use system fonts whenever possible, as they are typically optimized for screen readers used by visually impaired users.
- If using custom fonts, ensure they can be substituted by user-defined fonts in assistive technologies.

   - *Ineffective Font*: Script fonts can be difficult to read, especially at small sizes. 
   - **Effective Font**: Use a clear sans-serif font like Arial at a minimum of 16px with adequate line spacing.

Simplicity Matters
- Remove unnecessary visual distractions such as animations, blinking elements, and excessive use of graphics.
   - These can be disorienting for users with epilepsy, ADHD, or cognitive disabilities.
- Keep the dashboard clean, uncluttered, and focused on essential information.
   - Users should be able to locate the information they need quickly and easily.

   - *Ineffective Design*: A dashboard with animated icons, flashing text, and a busy background image can be overwhelming. 
   - **Effective Design**: Use static icons, clear text labels, and a solid background color with minimal graphics.

Responsive Design
- Ensure the dashboard adapts to different screen sizes and devices (desktops, tablets, smartphones) using responsive design techniques.
- Responsive layouts allow users with various devices to access the information seamlessly.
- Consider element arrangement to maintain readability in both portrait and landscape orientations.

   - *Ineffective Design*: A dashboard designed only for large desktop screens becomes unusable on smaller devices. Text and buttons become too small to interact with.
   - **Effective Design**: The dashboard resizes and reorganizes elements automatically based on the screen size, ensuring optimal readability and functionality across devices.

Color Coding 
- Avoid relying solely on color to differentiate data points.
- Implement additional visual cues like shapes or patterns to accommodate users with color blindness.

Text Alternatives
- Provide meaningful descriptions (alt text) for all non-text content, including images, charts, and graphs to allow screen readers to convey information to visually impaired users.
- These descriptions should be concise and informative, accurately reflecting the visually presented data.

Keyboard Accessibility
- Ensure all dashboard functionalities are accessible using just the keyboard for users with motor skill limitations or those who prefer keyboard navigation.

----------------------------
--------------------

## Next Steps

**Test Dashboard Prototypes**

- 1:1 Task based interviews of participants using prototype service availability dashboards

**Tasks**
Scenario: **Imagine you're planning to file a claim online with the VA. You want to check the website's uptime before you begin.**

1. **Please find the information related to website uptime for the past week.**
  - (Evaluates ability to locate specific data points)
  
2. **Navigate to the "Current Status" section of the dashboard. Can you describe what information is presented there?**
  - (Assesses basic navigation and information comprehension)

3. **Can you tell me what the average uptime percentage is for the past week?**
  - (Tests data comprehension)

**Feature Rating**

1. Rate your satisfaction with the dashboard's: design; layout; look and feel; content; features; copy; organization; other)
  - (Tests information hierarchy and user experience)
 
----------------------------------

## Terms 

[ISO/IEC 20000-1:2018](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:20000:-1:ed-3:v1:en)

Information technology — Service management — Part 1: Service management system requirements

3.2.16
**service availability**

- ability of a service (3.2.15) or service component (3.2.18) to perform its required function at an agreed time or over an agreed period of time
   - Note 1: Service availability can be expressed as a ratio or percentage of the time that the service or service component is actually available for use compared to the agreed time.

3.2.19
**service continuity**

- capability to deliver a service (3.2.15) without interruption, or with consistent availability as agreed
   - Note 1: Service continuity management can be a subset of business continuity management. ISO 22301 is a management system standard for business continuity management.

3.2.20
**service level agreement (SLA)**

- documented agreement between the organization (3.1.14) and the customer (3.2.3) that identifies services (3.2.15) and their agreed performance
   - Note 1: A service level agreement can also be established between the organization and an external supplier (3.2.4), an internal supplier (3.2.8) or a customer acting as a supplier.
   - Note 2: A service level agreement can be included in a contract or another type of documented agreement.

3.2.21
**service level target**

- specific measurable characteristic of a service (3.2.15) that an organization (3.1.14) commits to.


----------------------------
## Works Cited

Accenture. “Improving the Government Healthcare Website.” Accenture, 2024, https://www.accenture.com/us-en/case-studies/us-federal-government/enhanching-healthcare-gov. Accessed 4 April 2024.

Blontz, Blaine. “How Trusts Impact Financial Aid Eligibility: A Comprehensive Guide — Financial Aid Coach.” Financial Aid Coach, 22 May 2023, https://www.financialaidcoach.com/blog/how-trusts-impact-financial-aid-eligibility-a-comprehensive-guide. Accessed 4 April 2024.

CMS. “Fact Sheets Marketplace 2024 Open Enrollment Period Report: Final National Snapshot.” CMS, 24 January 2024, https://www.cms.gov/newsroom/fact-sheets/marketplace-2024-open-enrollment-period-report-final-national-snapshot. Accessed 4 April 2024.

Dirmann, Jerry. “,Review of Downtime Focused Literature.” Sagepub, 14 June 2021, https://journals.sagepub.com/doi/full/10.1177/1460458220918539. Accessed 4 April 2024.

Downdetector.com. “FAFSA down? Current problems and outages.” Downdetector, 2024, https://downdetector.com/status/fafsa/. Accessed 4 April 2024.

Edgerton, Kennedy. “FAFSA Applicants Frustrated By Problems During Soft Launch.” Forbes, 5 January 2024, https://www.forbes.com/advisor/student-loans/new-fafsa-applicants-encounter-delays-during-launch/. Accessed 4 April 2024.

“Effect of FAFSA Simplification on Student Aid.” Wikipedia, 2024, https://www.nasfaa.org/nasfaa_case_studies_examine_impact_of_fafsa_simplification_on_student_aid_eligibility. Accessed 4 April 2024.

Egan, Eric. “Most Federal Websites Are Still Bad, But That Can Change.” Information Technology and Innovation Foundation, 17 October 2023, https://itif.org/publications/2023/10/17/most-federal-websites-are-still-bad-but-that-can-change/. Accessed 4 April 2024.

Federal IT. “Federal Website Metrics | IT Dashboard.” Federal IT Dashboard, 2024, https://www.itdashboard.gov/federal-website-metrics. Accessed 4 April 2024.

Harvard University. “The Failed Launch Of www.HealthCare.gov - Technology and Operations Management.” Digital Data Design Institute at Harvard, 18 November 2016, https://d3.harvard.edu/platform-rctom/submission/the-failed-launch-of-www-healthcare-gov/. Accessed 4 April 2024.

Health and Human Services. “202302091300_2022 Retrospective & 2023 Look Ahead_TLPCLEAR.” HHS.gov, 9 February 2023, https://www.hhs.gov/sites/default/files/2022-retrospective-and-2023-look-ahead.pdf?lv=true. Accessed 4 April 2024.

IRS.gov. “Direct File.” Welcome to Direct File | Direct File | Internal Revenue Service, 2024, https://directfile.irs.gov/. Accessed 4 April 2024.

Kantrowitz, Mark. “How Do Trust Funds Affect Financial Aid for College?” Saving for College, 24 December 2018, https://www.savingforcollege.com/article/how-do-trust-funds-affect-financial-aid-for-college. Accessed 4 April 2024.

Ornstein, Charles. “Here's Why Healthcare.gov Broke Down — ProPublica.” ProPublica, 16 October 2013, https://www.propublica.org/article/heres-why-healthcaregov-broke-down. Accessed 4 April 2024.

Ovide, Shira, and Elena Lacey. “We tested the new IRS Direct File. Here’s what you need to know.” Washington Post, 29 March 2024, https://www.washingtonpost.com/technology/2024/03/29/irs-direct-file-free-tax-filing-review/. Accessed 4 April 2024.

Pa11y. “pa11y/pa11y: Pa11y is your automated accessibility testing pal.” GitHub, 2023, https://github.com/pa11y/pa11y. Accessed 4 April 2024.

Stratford, Michael, and Bianca Quilantan. “FAFSA problems delays financial aid information for millions of students.” Politico, 20 February 2024, https://www.politico.com/news/2024/02/20/biden-administration-fasfa-delays-00142138. Accessed 4 April 2024.

Sweeny, Evan. “Healthcare.gov Shutdown.” www.fiercehealthcare.com, 2017, https://www.fiercehealthcare.com/aca/healthcare-gov-shutdown-oig-hhs-cms-seema-verma-senators-frank-baitman. Accessed 4 April 2024.

Turner, Cory. “A new FAFSA setback means many college financial aid offers won't come until April.” NPR, 31 January 2024, https://www.npr.org/2024/01/31/1228082594/fafsa-student-financial-aid-delay. Accessed 4 April 2024.

W3C. “WCAG 2 Overview | Web Accessibility Initiative (WAI).” W3C, 2024, https://www.w3.org/WAI/standards-guidelines/wcag/. Accessed 4 April 2024.

WebAim. “Contrast Checker.” WebAim.org, 2024, https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=E9F1FC. Accessed 4 April 2024.


