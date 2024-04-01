# Secondary Research Report for VA Website Availability Dashboards


## Introduction

This report explores the critical role of user experience (UX) in designing public dashboards for the Department of Veteran Affairs (VA) website. 

The focus is on effectively displaying uptime, downtime, errors, and other availability information in a way that fosters trust, transparency, and a positive customer experience for veterans. Veterans rely on the VA website to access a wide range of essential services, information, and benefits. Ensuring consistent website availability and providing clear communication regarding outages or maintenance windows are crucial aspects of user experience. This report discusses the correlation between website performance and customer experience, emphasizing the importance of user-centered design principles when developing VA website availability dashboards.

## Customer Experience and Trust

Transparency regarding website availability is crucial for building trust with VA website users, particularly veterans seeking critical information and services. Numerous studies have documented the strong correlation between website performance and customer experience. For instance, a study by [Forrester Research](https://www.forrester.com/) indicates that a one-second delay in page load time can decrease customer satisfaction by 7%. This highlights the importance of website responsiveness and minimal downtime for user satisfaction.

Furthermore, the [Uptime Institute](https://uptimeinstitute.com/) reports that unplanned downtime can cost businesses millions of dollars per hour. While the VA is not a for-profit business, unplanned outages can have a significant negative impact on veterans' ability to access essential services. Downtime can lead to frustration and impede veterans from applying for benefits, scheduling appointments, or refilling prescriptions online. In these instances, the VA website becomes a critical touchpoint for veterans, and ensuring its consistent availability is essential for maintaining a positive user experience.

In the context of the VA, website outages can have significant consequences for veterans seeking essential resources and benefits. A well-designed dashboard displaying real-time availability metrics can address these concerns in several ways:

**Manage User Expectations**: By informing users about potential downtime or ongoing maintenance, the VA can set realistic expectations and minimize frustration. For instance, the dashboard could clearly communicate the expected duration of maintenance windows or highlight periods of peak usage that might lead to slower response times. This proactive communication can help veterans plan their online interactions and avoid scheduling important tasks during known downtime.

**Promote Transparency**: Open communication regarding website health builds trust and demonstrates the VA's commitment to user experience. A well-designed dashboard can showcase the VA's investment in website uptime and reliability. By acknowledging potential issues and providing updates, the VA fosters a sense of transparency and accountability.

**Empower Users**: Access to availability information empowers veterans to make informed decisions about their online interactions with the VA. The dashboard can provide veterans with the knowledge to plan their tasks and access services during optimal times. For example, if the dashboard indicates a period of expected heavy traffic, veterans can choose to schedule important tasks for a different time or utilize alternative channels to access VA services.

## Legal Considerations

Federal websites, including those of the VA, must adhere to specific legal guidelines regarding website accessibility, data privacy, and security. 

**Section 508 of the Rehabilitation Act**: This law mandates that federal electronic and information technology be accessible to individuals with disabilities. In the context of website dashboards, this means ensuring compatibility with assistive technologies like screen readers. Users with visual impairments or other disabilities should be able to access and understand the information presented in the dashboard. This can be achieved through techniques such as providing clear and concise text labels, using appropriate color contrast ratios, and incorporating keyboard navigation features. For more information on Section 508 compliance, refer to the resources provided by the U.S. Access Board: https://www.section508.gov/.

**E-Government Act of 2002**: This act promotes the accessibility, usability, security, and privacy of federal government websites. The act establishes requirements for planning, developing, operating, and maintaining websites that are accessible to the public. This includes ensuring that dashboards are user-friendly and easy to understand for all visitors, regardless of their technical expertise. The VA should conduct user testing and gather feedback to ensure the dashboard meets the needs of its target audience. Additional information on the E-Government Act can be found on http://www.gpo.gov/.

**Federal Information Security Management Act (FISMA)**: This act establishes a framework for protecting government information systems, including websites. Security considerations should be addressed when designing and maintaining dashboards. This includes measures to safeguard sensitive user data, prevent unauthorized access, and ensure the confidentiality, integrity, and availability of website performance data. For more information on FISMA compliance, refer to the resources provided by the National Institute of Standards and Technology (NIST): https://www.archives.gov/isoo.

## Building Accessible VA Website Availability Dashboards: Legal and Design Considerations

Building an informative and accessible dashboard for VA website availability requires careful consideration of both legal guidelines and user experience best practices. This section delves deeper into specific accessibility standards and design tools to ensure the dashboard caters to all users.

1. Accessibility Compliance: Section 508 & WCAG 2.2
Federal websites, including those of the VA, must adhere to accessibility standards outlined in Section 508 of the Rehabilitation Act and the Web Content Accessibility Guidelines (WCAG) 2.2.

Section 508 Requirements:
1194.21 Software Applications and Operating Systems: This section mandates that software applications used by federal agencies must be accessible to individuals with disabilities. Since dashboards are interactive elements, they fall under this category.
1194.22 Web-Based Applications: This section emphasizes that web-based interfaces comply with specific accessibility criteria. This includes ensuring compatibility with screen readers and assistive technologies.

WCAG 2.2 Guidelines: These internationally recognized guidelines outline specific criteria for web accessibility.

- Perceivable: Information and user interface components should be presented in a way users can perceive, regardless of their disabilities. This includes providing alternative text descriptions for non-text content (images, charts), using appropriate color contrast ratios for text and background elements, and ensuring keyboard accessibility for all functionalities.
- Operable: User interface components and navigation should be operable by users, including those with motor skill limitations. This means ensuring the dashboard can be accessed using a keyboard alone, without relying solely on a mouse.
- Understandable: Information and the operation of the user interface should be understandable. This includes using clear and concise language in labels and instructions, avoiding overly complex layouts, and providing adequate context for data visualizations.
- Robust: Content should be robust enough to be compatible with a wide range of assistive technologies, including screen readers, screen magnifiers, and voice recognition software.
  
2. Utilizing VADS in Figma for Accessible Dashboard Design
The VA Design System (VADS) offers a collection of pre-built components and resources for web development within the VA. Figma is a popular design software with VADS plugin integration. This integration allows designers to utilize VADS components while designing user interfaces, promoting consistency and adherence to VA design standards.

- Pre-built Accessible Components: VADS components are designed with accessibility in mind, adhering to WCAG color contrast guidelines and providing semantic code for proper screen reader interaction.
- Accessibility Plugin Integration: Plugins like "Stark" within Figma can analyze color contrast ratios and identify potential accessibility issues during the design process.
- Prototyping for User Testing: Figma allows the creation of interactive prototypes that simulate user interactions with the dashboard. Accessibility testing tools can be used in conjunction with prototypes to identify usability issues for users with disabilities.

By leveraging VADS components and Figma's accessibility features, designers can create website availability dashboards that are not only informative but also accessible to a broad audience.

Additional Resources:
Section 508 Standards: https://www.section508.gov/
WCAG 2.2 Guidelines: https://www.w3.org/TR/WCAG21/
VA Design System (VADS): https://design.va.gov/
Figma Accessibility Resources: https://www.figma.com/community/collections/plugins-accessibility



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

