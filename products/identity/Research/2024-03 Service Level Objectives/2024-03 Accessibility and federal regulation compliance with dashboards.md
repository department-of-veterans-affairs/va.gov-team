# Accessibility and Maintenance Standards for VA.gov Availability Dashboards 
## The role of accessible VA.gov availability dashboards in Veteran CX and Trust

**UX Researcher*: Joshua.Matulonis@va.gov
**March 29, 2024**
**Project SLO**



## Key Findings

### Federal Standards Matter:

- Federal agencies operate within a framework of guidelines, regulations, and policies. These standards are the foundation of building trust.
- Adhering to federal requirements ensures that citizens receive consistent, reliable services. Whether filing tax filings, enrolling in healthcare, or legal inquiries, users rely on federal websites for accurate and timely information.
- The significance of having sconsistent operating times for federal sites requires setting availability metrics in each case responsibly and meaningfully.
  - Some sites have a 90% target associated with this measure
  - This allows for some variance across programs due to unanticipated or external factors

### Transparency and Accountability:

- Availability is not an abstract concept; it directly impacts citizens’ lives. 
- When a website experiences downtime, it disrupts services, frustrates users, and erodes trust.
- Maintaining high availability demonstrates transparency and accountability.
- Positive interactions build confidence. 
- Users return to a website they trust, knowing it won’t fail them during critical moments.
- A consistently available website signals preparedness, efficiency, and commitment.
- Trust in government services hinges on the belief that federal websites will reliably deliver what they promise.

### Learn From the Past 
- Proactive notifications can mitigate frustration and maintain public trust.
- Stress test a prototype before a public rollout with participants to determine whether it is safe to scale up the program.
- Use an incremental rollout approach ensures that issues can be addressed in real-time, following industry best practices.


## Next Steps

### 1:1 Task based interviews of prototype dashboards

**Main Tasks**
Navigate to the "Current Status" section of the dashboard. Can you describe what information is presented there? (Assesses basic navigation and information comprehension)

**Uptime Information:**

Imagine you're planning to file a claim online with the VA. You want to check the website's uptime before you begin. Please find the information related to website uptime for the past week. (Evaluates ability to locate specific data points)
Can you tell me what the average uptime percentage is for the past week? (Tests data comprehension)
If assistive technology is used, inquire: How well does your assistive technology interact with the uptime information? (Evaluates compatibility)

**Accessibility Features:**

Gathers feedback on compatibility with AT
Did you find the dashboard layout and organization easy to follow? (Tests information hierarchy and user experience)
Design, layout, look and feel, content, +


---------------------

## Introduction

This report explores the critical role of user experience (UX) in designing public dashboards for the Department of Veteran Affairs (VA) website. 

The focus is on effectively displaying uptime, downtime, errors, and other availability information in a way that fosters trust, transparency, and a positive customer experience for veterans. Veterans rely on the VA website to access a wide range of essential services, information, and benefits. Ensuring consistent website availability and providing clear communication regarding outages or maintenance windows are crucial aspects of user experience. 

## Customer Experience and Trust

Transparency regarding website availability is crucial for building trust with VA website users, particularly veterans seeking critical information and services. 

Numerous studies have documented the importance of website responsiveness and minimal downtime for user satisfaction, in addition to the strong correlation between website performance and customer experience. 

A study by [Forrester Research](https://www.forrester.com/) indicates that a one-second delay in page load time can decrease customer satisfaction by 7%. 

According to the Federal IT Dashboard, only 30% of federal websites have no detectable accessibility issues.

Less than 20% of federal websites use code from the U.S. Web Design System (USWDS), leading to inconsistent user experiences.

The [Uptime Institute](https://uptimeinstitute.com/) reports that unplanned downtime can cost businesses millions of dollars per hour. 

While the VA is not a for-profit business, unplanned outages can have a significant negative impact on veterans' ability to access essential services. Downtime can lead to frustration and impede veterans from applying for benefits, scheduling appointments, or refilling prescriptions online. In these instances, the VA website becomes a critical touchpoint for veterans, and ensuring its consistent availability is essential for maintaining a positive user experience.

In the context of the VA, website outages can have significant consequences for veterans seeking essential resources and benefits.

A well-designed dashboard displaying real-time availability metrics can address these concerns in several ways:

**Manage User Expectations**: By informing users about potential downtime or ongoing maintenance, the VA can set realistic expectations and minimize frustration. For instance, the dashboard could clearly communicate the expected duration of maintenance windows or highlight periods of peak usage that might lead to slower response times. This proactive communication can help veterans plan their online interactions and avoid scheduling important tasks during known downtime.

**Promote Transparency**: Open communication regarding website health builds trust and demonstrates the VA's commitment to user experience. A well-designed dashboard can showcase the VA's investment in website uptime and reliability. By acknowledging potential issues and providing updates, the VA fosters a sense of transparency and accountability.

**Empower Users**: Access to availability information empowers veterans to make informed decisions about their online interactions with the VA. The dashboard can provide veterans with the knowledge to plan their tasks and access services during optimal times. For example, if the dashboard indicates a period of expected heavy traffic, veterans can choose to schedule important tasks for a different time or utilize alternative channels to access VA services.

## Federal Requirements and Policies

Federal agencies must adhere to various policies and guidelines related to website performance, accessibility, and data protection.

### 21st Century Integrated Digital Experience Act (21st Century IDEA):

- Enacted in December 2018, this act sets website standards for federal agencies. It emphasizes improving digital experiences for the public, including accessibility, security, and usability.
- These standards encompass availability, uptime, and responsiveness.
- Agencies must adhere to these requirements to ensure that citizens can access government services seamlessly, regardless of time or location.

### OMB Circular A-130: Managing Information as a Strategic Resource:

- This circular, updated in July 2016, promotes the strategic importance of information management.
- Availability is a core aspect of effective information dissemination, and federal websites play a pivotal role in achieving this goal.

### OMB M-17-06: Policies for Federal Agency Public Websites and Digital Services:

- Issued by the Office of Management and Budget (OMB) in November 2016, this policy outlines requirements for federal agency websites and digital services. It covers aspects like accessibility, security, and performance.
- It emphasizes the need for federal websites to maintain high availability, minimize downtime, and promptly address any disruptions.
- Agencies must implement robust monitoring and incident response mechanisms to ensure continuous service.

### Section 508 of the Rehabilitation Act of 1973:

- This law ensures that federal websites are accessible to people with disabilities. Agencies must create content that is “perceivable, operable, understandable, and robust” for all users.

### E-Government Act of 2002: 

- Promotes the accessibility, usability, security, and privacy of federal government websites. 
- Establishes requirements for planning, developing, operating, and maintaining websites that are accessible to the public. 
- Includes ensuring dashboards are user-friendly and easy to understand for all visitors, regardless of their technical expertise. 

### Open Data Policy-Managing Information as an Asset (M-13-13):

- Released in May 2013, this policy encourages agencies to treat information as a valuable asset. It promotes transparency, data sharing, and open data initiatives.

### Next Steps in the Evidence and Innovation Agenda (M-13-17):

- Issued in July 2013, this memorandum emphasizes evidence-based decision-making and innovation across federal programs.

### Web Content Accessibility Guidelines (WCAG):

- These guidelines provide practical recommendations for creating accessible web content.
- Federal agencies should align with WCAG standards to enhance availability for all users, regardless of their abilities.

### Federal Information Security Management Act (FISMA): 

- Established a framework for protecting government information systems, including websites. 
- Security considerations should be addressed when designing and maintaining dashboards. 
- Includes measures to safeguard sensitive user data, prevent unauthorized access, and ensure the confidentiality, integrity, and availability of website performance data. 

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

The purpose of the program is to construct, upgrade, maintain, and operate research facilities in a wide range of scientific and engineering fields, one of NSF’s core functions. 

Performance Measure

EFFICIENCY: Percent of operational facilities that keep scheduled operating time lost to less than 10%

Explanation
A key indicator of the efficiency of facilities operations is the adherence to scheduled uptime or downtime, and this performance is readily monitored through day-to-day facility operations. If the measure had to do only with total downtime of facilities, it would not adequately address the needs of some facilities to change or modify instruments, etc, nor would it acknowledge the differences across the many types of facilities NSF funds and operates. 

Given the significance of the scheduled operating time for each facility, it is important to set this level in each case responsibly and meaningfully. 

The facilities program has a 90% target associated with this measure, which allows for some variance across NSF programs due to unanticipated or external factors.

### IRS.gov

- The Internal Revenue Service website handles tax-related services.
- During peak tax seasons, IRS.gov experiences heavy traffic, yet it remains available.
- Load balancing, redundancy, and efficient error handling contribute to its reliability.

### Benefits of Direct File

- Direct File simplifies tax filing for eligible users with simple tax returns.
- It provides a secure and easy-to-use platform directly through the IRS website.

The IRS recognizes that citizens rely on its services for critical tasks such as tax filing.
Downtime or errors erode trust and disrupt essential services.
The IRS aims to improve website availability and reliability through learnings from pilot initiatives like Direct File.

#### Stress-Testing and Incremental Rollout:
The IRS plans to invite taxpayers from 13 states to participate in the Direct File pilot during the 2024 filing season.
Participants will stress-test the prototype and help the agency determine whether to scale up the program.
The incremental rollout approach ensures that issues can be addressed in real-time, following industry best practices.


## Case Studies

### FAFSA Website Downtime and Its Effects on Students and Families

The Free Application for Federal Student Aid (FAFSA) is a critical gateway for millions of students and families seeking financial assistance to attend college. However, during the 2024-2025 award year, the FAFSA underwent significant changes, including simplification and streamlining. Unfortunately, the implementation process faced delays, leading to unexpected consequences for applicants.

Downtime and Access Challenges

Soft Launch Issues:
- The new FAFSA form, intended to be simpler and more user-friendly, experienced a delayed soft launch.
- Families could only access the form intermittently while the Education Department monitored the site for problems.
- The form was available for only short periods, causing frustration and uncertainty for applicants.

Submission Numbers:
During the limited availability windows:
December 30: 30 minutes of access.
December 31: 30 minutes of access.
January 1: 2 hours of access.
Approximately 30,000 forms were submitted during these brief periods.

Impact on Financial Aid Eligibility
Pell Grant Eligibility:
The FAFSA determines eligibility for federal grants, including Pell Grants.
Changes in the methodology affected how financial need was calculated.
Most students’ eligibility remained unchanged or increased, but some experienced decreased eligibility.

Specific Scenarios:
Higher Pell Grant Award: Some students qualified for higher Pell Grant awards due to adjustments in income protection allowances.
Loss of Pell Grant Eligibility: Changes in treatment for multiple family members in college led to some students losing Pell Grant eligibility.
Significant Reduction in Student Aid Index: Adjustments to untaxed income impacted students’ aid eligibility.
Concerns and Implications

Late Aid Offers:
Concerns arose that families might not complete forms in time, delaying financial aid offers.
Students applying through early decision could commit to colleges without knowing their aid status.
Early decision colleges allowed flexibility for students with insufficient aid.

Planning for Formula Changes:
Financial aid administrators needed to understand the impact of formula changes.
Balancing equity and simplicity required proactive planning.


## Healthcare.gov Downtime and Its Effects on Public Access to Health Insurance

### Downtime and Access Challenges

Website Unavailability:

Approximately 16.4 million Americans rely on HealthCare.gov for plan selections during open enrollment.
HealthCare.gov was officially launched on October 1, 2013, covering residents of 36 states that did not create their own healthcare exchanges.
- Downtime: Within 2 hours of launch, the website experienced downtime due to high demand—250,000 users, which was 5 times more than expected.
- Incomplete Design: The initial capacity issue was compounded by incomplete website design, leading to user frustrations.

Citizens attempting to enroll in health insurance plans encountered error messages, slow loading times, and system unresponsiveness.

- The downtime persisted for 48 hours, coinciding with the peak enrollment period.

**The website's sign-in screen became a bottleneck as it wasn’t designed to handle as much traffic as the main site. **

**Also, website support technicians couldn’t provide assistance as they used the same sign-in screen to access the site for troubleshooting problems.**

A total of 6 users completed and submitted their applications and selected a health insurance plan on the first day.

Impact:
The downtime prevented timely plan selections, affecting individuals and families seeking health coverage.
New Consumers: Over 5 million new consumers attempted to access the website during this period.

Public Outcry and Trust Erosion
Citizens expressed frustration on social media, highlighting the urgency of health insurance decisions.
Families faced uncertainty about their coverage status due to the downtime.
Trust in the government’s ability to manage essential services wavered.

Legal Challenges:

Advocacy groups and legal experts raised concerns about potential disenfranchisement.
Lawsuits were filed, alleging that the downtime violated citizens’ right to access health insurance.
The courts expedited hearings to address the issue before the enrollment deadline.

Lessons Learned and Recommendations

Regular maintenance schedules should be carefully planned to avoid peak enrollment times.
Transparent communication during downtime is crucial. 
Citizens need timely updates and alternative access options.
Proactive notifications can mitigate frustration and maintain public trust.

-----------------------------


## Choosing Accessible Data Visualization Techniques for Federal Website Dashboards

Effective data visualization is important for presenting uptime, downtime, and availability metrics on federal website dashboards in a way that is clear and understandable for all users. 

## Visualization Technique

| Visualization Technique | Purpose | Use Case | Best Practices for Accessibility |
| --- | ---| ---| ---|
| Bar Charts | Compare data between categories | Uptime percentages for different federal agencies | Clear bar labels (e.g., Agency Name);  Contrasting colors for each bar; Descriptive axis labels (e.g., Uptime Percentage) |
| Line Charts | Show trends and patterns over time | Weekly or monthly website availability trends | Smooth lines for continuous data; Data points for clarity; Descriptive axis labels (e.g., Time, Availability Percentage) |
| Pie Charts (Use with Caution) | Indicate proportions or percentages | Distribution of website downtime by error type (if limited categories)|  Limit slices to a maximum of 5-6 for clarity; Include data point labels or tooltips; Consider alternative visualizations for complex data sets |
 | Tables | Present detailed data | Response times for critical agency services | Clear headers for rows and columns; Descriptive row and column labels; Accessible formatting (avoid merged cells) |
| Scatterplots (Consider for Advanced Users) | Analyze relationships between variables | Correlation between website uptime and user traffic (for advanced users) | Data point labels for identification; Clear and labeled axes; Tooltips for detailed information; Note: May not be suitable for all users due to complexity |

Table 1. Outlines accessible data visualization techniques, use cases, and best practices for accessibility.

## Additional Considerations for Accessibility:

Tooltips and Data Points: Provide informative tooltips or data points associated with charts and graphs. These should be accessible to screen readers and offer clear descriptions of the data points upon hover or focus. Consider using descriptive text that complements the visual representation, and avoid relying solely on color to convey information.

Color Contrast: Use colors with sufficient contrast to ensure readability for users with low vision or color blindness. Federal websites should adhere to WCAG guidelines for color contrast ratios (minimum of 4.5:1 for small text and 3:1 for large text). Color contrast checkers can be used to evaluate color combinations and identify potential issues.

Descriptive Text Alternatives: Include meaningful "alt text" descriptions for all non-text content (charts, graphs, images) to allow screen readers to convey the information to visually impaired users. These descriptions should be concise and informative, accurately reflecting the data presented in the visual format.

