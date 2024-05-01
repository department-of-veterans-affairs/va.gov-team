# **A Review of Federal Site Comm Usage - Best practices and consequences around communicating about possible fraud incidents**

### Description of UX Tasks (Ticket #77394)
We want to make sure we understand best practices and consequences around communicating about possible fraud incidents, to prepare for drafting language and process flows around new fraud notifications

## **UX Researcher** - Joshua.matulonis@va.gov
## **Date** - March 4, 2024
## **Team** - Identity MFA

### For more information:

[multi-channel-comm-research](https://dsva.slack.com/files/U05V3KZB53M/F06LN38NA2Z/va_multi-channel_communication_research_plan_v4__3_.pdf)

[Comparative Analysis Messaging](https://dsva.slack.com/files/U05AK20G555/F06LT4U3XRS/synthesis-messaging-comparative-analysis.pptx)

--------------

## **Jump to**

- [Site-Wide Communication Tools for Federal Sites](#site-wide-communication-tools-for-federal-sites)
- [Notification Type Selection for Federal Site Communication](#notification-type-selection-for-federal-site-communication)
- [Digital Communications to Veterans](#digital-communications-to-veterans)
- [VA Notification Systems](#va-notification-systems)
   - VANotify
   - VA Emergency Alerting and Accountability System (VA EAAS)
   - VA Notification System (VANS)
   - VEText
- [IRS Notifications](#irs-notifications)
 - [Quick Alerts](#quick-alerts)
- [Department of Labor](#department-of-labor)
- [Veteran Discussion Forums - Data Sources](#veteran-discussion-forums---data-sources)
- [Works Cited](#works-cited)


## Site-Wide Communication Tools for Federal Sites

Federal sites employ site-wide communication tools in various ways to reach their diverse user base and deliver crucial information effectively. 

1. Alerts and Notifications:

Emergency Alerts: Federal agencies prioritize timely and accurate emergency communication through pop-up alerts, banners, and targeted notifications about natural disasters, public health threats, or security incidents.

Service Updates: Updates on system outages, maintenance schedules, or changes in regulations are often communicated through site-wide banners or dedicated notification systems.

News and Announcements: Important agency news, policy updates, or grant opportunities might be announced through site-wide banners, dedicated news sections, or email subscriptions.

2. Interactive Features:

Chatbots and Virtual Assistants: Some agencies deploy chatbots or virtual assistants to answer frequently asked questions, guide users to relevant resources, or offer basic support.

Feedback Mechanisms: Feedback forms, surveys, and suggestion boxes provide valuable insights into user experience and allow for targeted communication based on user needs.

Social Media Integration: Integrating social media feeds or widgets on the site can keep users informed about agency activities and encourage engagement.

3. Content Management:

Targeted Content: Based on user location, demographics, or browsing behavior,agencies may display relevant content, resources, or announcements on the site.

Multilingual Support: To reach a wider audience, some federal sites offer content in multiple languages, ensuring equal access to information.

Accessibility Features: Ensuring all users can access and understand information is crucial, so federal sites often incorporate features like alt text for images, text-to-speech options, and keyboard navigation.

4. Additional Considerations:

Transparency and Accountability: Federal sites prioritize transparency by publishing official documents, meeting transcripts, and budget information easily accessible.

Privacy and Security: User data protection is paramount, so federal sites implement robust security measures and adhere to data privacy regulations.

Mobile Optimization: With increasing mobile usage, federal sites strive for mobile-friendly layouts and responsive design to ensure accessibility across devices.

### Alert Lift Requirements

**Low Engineering Lift**

- Alerts and Notifications: Implementing basic pop-up alerts, banners, and targeted notifications often utilizes existing content management systems (CMS) features or third-party notification tools, requiring minimal custom development.
- Social Media Integration: Integrating existing social media feeds or widgets usually involves embedding code provided by the platforms, requiring minimal engineering effort.
- Content Management: Utilizing targeted content based on user data might require some development for filtering and personalization, but it can often leverage existing CMS functionalities.

**Moderate Engineering Lift**

- Interactive Features: Implementing chatbots or virtual assistants requires significant development effort, including natural language processing (NLP) capabilities and integration with backend systems.
- Feedback Mechanisms: Creating robust feedback forms, surveys, and data analysis dashboards involve moderate development effort, depending on desired functionalities and data integration needs.
- Multilingual Support: Offering multiple languages requires translating content and potentially building language selection features, which can be time-consuming but manageable with existing translation tools.

**High Engineering Lift**

- Mobile Optimization: Ensuring a fully responsive and user-friendly mobile experience often requires significant front-end and back-end development, particularly for complex websites with multiple features.
- Accessibility Features: Implementing comprehensive accessibility features like keyboard navigation, screen reader compatibility, and captioning requires in-depth knowledge of accessibility standards and additional development work.

**Additional Factors**

- Existing infrastructure: Existing CMS capabilities, third-party integrations, and development team expertise can significantly impact the engineering effort required for each tool.
- Customization needs: The level of customization desired for each tool will influence the development effort.

## Veterans Affairs Notification Systems

### **VANotify**

Purpose: VANotify is a paperless platform that offers veterans, their families, and caregivers a way to receive digital notifications related to their VA health care, benefits, and services.

VANotify prioritizes privacy by using secure communication channels and ensuring veterans’ information remains up-to-date. 

Its open-source foundation allows for continuous improvement and adaptation to veterans’ needs. 

Notifications: Offers email and text notifications for various services, including appointment reminders, prescription updates, debt letters, claim status updates, and burial benefits.

Benefits: Helps veterans stay informed, track requests, and take timely action. 
It is a step toward enhancing communication and accessibility for veterans. 
Provides faster, more convenient, and secure communication for personalized notifications compared to postal mail. 
It replaces traditional mail for certain notices, making communication faster and more convenient.

How to sign up: Veterans can opt in to receive digital notifications by providing their email address and/or mobile phone number when they apply for a benefit, schedule an appointment, or update their profile on VA.gov. 
They can also opt out at any time if they prefer.

Opt-in: Veterans can choose to receive digital notifications when applying for benefits, scheduling appointments, or updating their profiles on VA.gov. 
Veterans don’t need to sign up separately for VANotify.
The system automatically sends notifications to all registered members if their contact details and address information are up-to-date.

Opt-out: Veterans can unsubscribe at any time.

Open-Source roots: VANotify’s codebase is rooted in an original platform called Notify, developed by the United Kingdom’s Government Digital Service.

- The UK’s Notify platform was designed for personalized government agency-centered notifications.
- An open-source approach allows re-use of foundational code, benefiting both the UK and Canada.
- The VA adapted this codebase to create VANotify, tailored to its specific needs.

Future Enhancements: 

- Currently focused on one-way notifications.
- Has the potential to facilitate two-way communication between veterans and VA services (such as chatbots) in the future.
- Major use cases include updates on prescription shipments and application submission confirmations.

Adoption Rate:

- The exact adoption rate is not explicitly mentioned in the literature.
- The adoption rate may vary by user segments.


### **VA Emergency Alerting and Accountability System (VA EAAS)**

Purpose: Used for alerting and accountability during emergencies.

Notifications: Rapid, reliable, and widespread alerts for VA employees, contractors, and affiliates.

Safety Status: Collects safety status information during emergencies.

Enterprise-wide: Implemented across the VA.

### **VA Notification System (VANS)**

Purpose: An emergency notification system (ENS) for all VA organizations.

Notifications: Used for emergency alert notification requirements.

### **VEText**

Purpose: An automated, interactive text message system used by the Department of Veterans Affairs (VA) to remind veterans of upcoming VA healthcare appointments. 

VEText enhances communication by delivering appointment reminders and updates directly to veterans’ mobile devices, allowing them to confirm or cancel appointments conveniently. 

Notifications: 

Appointment Reminders:
- Each reminder includes:
  - Date and time of appointment.
  - Codes to use to confirm or cancel an appointment.
  - To confirm or cancel, users can reply using the special codes provided.
  - If the user doesn't reply, their appointment will remain scheduled.
  - If their VA health facility unexpectedly closes, VEText may send the user a text to cancel their appointment.

*Note: VEText is free to use, but a user’s phone company may charge fees for text messages.*

Getting Locations in Reminders:

Basic VEText reminders don’t include the location of an appointment. 

A user may add location by:
Opt-in: To start receiving locations, a vet must reply to a VEText reminder with the 5-digit zip code of their home address. Alternatively, they may text their zip code to 53079.
VEText will then include the name of the VA health facility in each reminder.

Opt-out: To stop receiving locations, reply BASIC to a VEText reminder or text BASIC to 53079.

Changing to an Earlier Appointment:

If an earlier appointment becomes available, VEText may text the vet to ask if they want to reschedule.
Vets will receive codes to change to the earlier appointment or keep the original one.
If the vet doesn't reply, their original appointment remains scheduled.

Completing Pre-Check-In:

If a veteran’s facility offers pre-check-in, VEText will send them instructions to start the process with their appointment reminders.
They’ll need a smartphone to complete pre-check-in.
Some VA health facilities also use VEText to help with physical distancing.
If a facility offers this service, VEText will provide instructions for texting when a veteran arrives at the facility, including where to wait and when to come inside.

Managing Community Care Appointments:

If a veteran receives care from a non-VA provider in the community care network, VEText may ask for their appointment information via text.
They can reply to provide the date and time of their appointment.
After their community care appointment, VEText will send a text to confirm whether they attended. It includes codes for confirmation or to indicate that the veteran didn’t go.


Question: **Can veterans receive notifications from other government agencies through VANotify?**

*While veterans already receive appointment notifications through VEText, VANotify expands the scope by allowing veterans to receive even more VA notifications via email and text. 
However, VANotify is primarily focused on one-way notifications. 
There are future possibilities for facilitating two-way communication between veterans and VA services, potentially including features like chatbots.* 

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/a1f7a0d3-b715-4b2e-8475-e2409415c384)

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/7f2bae4c-2857-4623-a19d-d4fdcc2fc50c)

--------------

--------------

## **IRS Notifications**

The IRS is strategically working towards providing taxpayers with the same online functionality as banks and other financial institutions. 

Key developments include:

Online Response to Notices: Taxpayers can now respond to all IRS notices and letters online that do not require a filing or payment action. This feature was gradually expanded throughout 2023, with over 45,000 responses received via the online tool by December.

Processing Status for Tax Forms: A public-facing dashboard has been launched to display the current processing status for key forms and general correspondence. The status reflects processing times for electronically filed forms and the month of receipt currently being processed for paper forms.

Voice Bots: Natural language voice bots have been launched for queries about refunds and amended returns, allowing taxpayers to ask questions in a conversational manner.

Expanded Online Platform Functionality: Updates to the Individual Online Account now allow multiple bank accounts to be saved and validated, payments to be scheduled and canceled, and payment plans to be expanded and revised. The second phase of the Business Tax Account has been launched, expanding its capabilities and eligible entity types. The Tax Pro Account has also been enhanced to allow management of active client authorizations and viewing of individual and business clients’ tax information.

Modernizing Technology: The IRS is updating its technology to improve customer service and protect taxpayer data. This includes significant progress in scanning and e-filing paper returns, with more than 1.5 million forms scanned during 2023.

IRS.gov uses various communication methods to notify users about tax-related matters. 

Email Notifications:

 - Purpose: IRS sends email notifications to inform users about account updates, tax changes, and other relevant information.

Online Account Alerts:
 - Purpose: Users receive alerts within their online accounts when there are changes or requests related to their tax records.

IRS Notices and Letters:
 - Purpose: The IRS sends notices and letters for various reasons, including balance due, refund adjustments, identity verification, and more.

Unemployment Compensation Notifications:
 - Purpose: Users receive notifications regarding unemployment compensation, tax implications, and reporting requirements.


--------------

### **QuickAlerts**

QuickAlerts sends messages, within seconds, to keep Tax Professionals informed of events affecting Authorized IRS e-file Providers & Issuers/Payers, Transmitters & Software Developers that will electronically file Affordable Care Act Information Returns.

This is a "one-time subscription" to receive this information, continuously, until the user unsubscribes.

QuickAlerts categories on the Subscription Screen:

1. Alerts – Processing delays, Programming issues, Changes to any filing season procedure, Error Code and Business Rule information

2. Technical – Schema information, Software testing (ATS) 

3. General Notifications – Seminars, Conferences, e-file publication changes.

4. General IRS e-file Service Center Messages – IRS e-file program updates, General information, Service Center maintenance schedules, IRS e-file Help Desk phone numbers and more

5. Affordable Care Act Information Return (AIR) – Electronic specifications and system information needed for Issuers/Payers, Transmitters and Software Developers that electronically file Forms 1094-B, 1095-B, 1094-C, and 1095-C to IRS.

6. Information Returns Intake System (IRIS) – Electronic specifications and system information needed for Issuers/Payers, Transmitters and Software Developers that electronically file non-Affordable Care Act (ACA) forms to the IRS.

**QuickAlerts Library**

- The library stores previously posted messages. 

- If a user missed any previous messages, they can click on the following link to see older and previously posted QuickAlerts: QuickAlerts Library. 

- The library is updated once per month and contains the last 12 months of QuickAlerts Messages.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/20d6e6c1-c27b-4f51-9669-44bcb4be86d2)

**IRS Comms - Tone**

Note the friendly tone used by the IRS to inform account holders of QuickAlerts:

    	“*Choose the categories that suit your needs, then sit back, relax, and let the news come to you through the convenience of email. Never miss another important notice or event. Be informed of what you need to know, when you need to know it.*”


--------------

--------------

## **Department of Labor**

The Department of Labor (DOL) uses several communication methods to keep users informed about their accounts.

Email Subscription Service:
 - Purpose: A free electronic subscription service that allows citizens to receive notifications via email. Subscribers automatically get updates on their areas of interest without needing to revisit the website.
 - Types of Notifications: Email alerts for newly available information.
 - Settings: Users can subscribe, unsubscribe, add, delete subscriptions, or modify their password.

Notification Center:
 - Purpose: Notifies users of the Foreign Labor Application Gateway (FLAG) about milestones or document additions related to their cases.
 - Types of Notifications: Milestone completion alerts, document addition notifications.
 - Settings: Users can receive and respond to notifications quickly using this center.

User Guides: 
 - Purpose: To assist users in navigating the FLAG website.
    - Logging into FLAG
    - Navigating the account
    - Managing profiles
    - Using the Notification Center

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/146007477/cca28db9-8c90-4b0b-a813-7d21f3d8203e)

## Veteran Discussion Forums - Data Sources

Veterans use various online forums and platforms to discuss a range of topics, including digital notifications about their accounts, especially those related to veterans' benefits and services. These may be used to gather information on sentiment toward specific communication methods.

1. Veterans Affairs Official Forums: The U.S. Department of Veterans Affairs (VA) might host official forums or discussion boards for veterans to discuss their accounts and notifications.

2. VetFriends: A community aimed at reconnecting service members. They have forums where discussions about veteran affairs can take place.

3. HadIt.com: A veteran to veteran support website that includes forums where vets discuss a wide range of issues, including VA notifications and account management.

4. Reddit: Subreddits like r/Veterans or r/VeteransBenefits allow for open discussion among veterans on various topics, including the digital aspects of account management.

5. Veterans Benefits Network Forums: An online community where veterans discuss their benefits and experiences with the VA system, including digital notifications.

6. Facebook Groups: There are numerous private and public groups on Facebook for veterans where members might discuss notifications and online account management.

7. VFW (Veterans of Foreign Wars): The VFW may have online forums or digital communities associated with their website where veterans share information and discuss issues.

8. Online Blogs and Comment Sections: Veteran-themed blogs regularly post about veterans' issues, and the comment sections can serve as de facto forums.





## Works Cited

Defense Media Network. “Defense and Military News.” Defense Media Network: Defense & Military News and History, 2024, http://defensemedianetwork.com/. Accessed 2 April 2024.
Digital Veterans Affairs. “Digital VA News.” DigitalVA, 14 February 2024, http://digital.va.gov/. Accessed 2 April 2024.
DOL.gov. “Email Subscription Service.” U.S. Department of Labor, 2024, https://www.dol.gov/general/email. Accessed 1 March 2024.
Federal Register. “Federal Register.” Federal Register :: Home - Tuesday, April 2nd, 2024, http://federalregister.gov/. Accessed 2 April 2024.
Federal Trade Commission. “FTC News.” Consumer Advice, 2024, http://consumer.ftc.gov/. Accessed 2 April 2024.
IRS. “Unemployment Compensation | Internal Revenue Service.” IRS, 2024, https://www.irs.gov/individuals/employees/unemployment-compensation. Accessed 1 March 2024.
Microsoft. “How User Account Control works - Windows Security.” Microsoft Learn, 31 May 2023, https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works. Accessed 5 March 2024.
Military.com. “Military.com Connections.” Military and Veteran Benefits, News, Veteran Jobs | Military.com, 2024, http://military.com/. Accessed 2 April 2024.
Nevada Dept of Veterans Services. “Nevada Veterans News.” Nevada Department of Veterans Services - Serving Nevada's Heroes, 2024, http://veterans.nv.gov/. Accessed 2 April 2024.
New England Healthcare System. “New England Healthcare System News.” VA New England Healthcare System, 2024, http://newengland.va.gov/. Accessed 2 April 2024.
NextGov.com. “NextGov News.” Nextgov/FCW - Federal Technology News and Analysis for IT Managers & Acquisition Teams, 2024, http://nextgov.com/. Accessed 2 April 2024.
VA News. “VA News and Info.” VA News and Information, 2024, http://news.va.gov/. Accessed 2 April 2024.

