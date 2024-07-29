# External Auth Data Reporting Product Refinement

On Friday, May 3, the Identity Team held a Product Refinement for External Auth Data Reporting. This is the result.

## What's important to VA
- We want users to trust us, show we care.
- Efficient cost effective solutions to allow for the possibility of more solutions within the same budget.
- Perhaps the questions we need to ask are "what's important to VA" or "What's important to VA.gov"
- Reliability of information provided to Vets & their beneficiaries.
- Numbers of users influences budget to the point of prioritizing updates.
- Providing a great experience.

## MVP of External Auth Data
1. Monthly/Daily Active Users
   - Satisfaction/trust rating (experience)
   - What does "good" look like?
   - What does "bad" look like
2. User Intervention Required Errors
   - Report on errors where a users sign in error cannot be resolved with a self service solution
     - An example of these types of errors are ones where a user has multiple active corp ids from the MPI response. MPI is the user information source of truth. They give us all the user attributes we need to determine if a user should be able to access something on va.gov. If MPI responds back to us with multiple active corp ids, we cannot allow the user to login to va.gov. The reason for this is that we have forms on va.gov that expect only one corp id to be present. If we allow the user object to contain two values then the form submission may get messed up downstream.
     - These types of errors have been called “catastrophic errors” in other circles. These types of errors require that a person call the help desk or fill out ticket in order to have something manually edited by a human to allow them to login to va.gov
3. Latency / Time to Login
4. Credential Preference
   - Which CSP are people using to login per month?
5. Device Type Preference
   - mobile vs. desktop
6. Which pages see the most auths
   - Initiated login from.
7. Feedback from users
8. DOMO Links
   - [CSAT Score Dashboard](https://va-gov.domo.com/page/1545882322)
   - [VA.gov Search KPIs](https://va-gov.domo.com/page/1964748112)
   - [Monthly - OMB Dashboard](https://va-gov.domo.com/page/1587068891)

### Sample User Survey
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/8985801e-8a4f-4488-bdb0-93407d46efa2)

## Potential Future Scope
   - SAML vs Oauth success metrics
   - Downtime per CSP
   - MAP STS token requests
     - By Application
     - Success rate
   - Terms of Use Accept/Decline
     - How many users accept ToU
     - How many users decline ToU
     - Error Rates
   - Percentage of Users Successfully Signing In Using Assistive Technologies
     - Demonstrates the team's commitment to inclusive design for veterans with disabilities.
   - Decrease in Password Reset Requests
     - Indicates a more secure and reliable authentication process, reducing user frustration.
   - Conduct regular security assessments and testing
     - Agencies should regularly assess the risk to websites and provide commensurate security testing of those sites based on that assessment. The assessment should consider the potential impact of a security incident on vital transactions or core services provided to the public, access to timely information, government and vital external operations, and public trust. 
     - Agencies should perform manual penetration testing, where appropriate, based on threat analysis and the criticality of the underlying system.


## Discussed & Resolved
- Number of Languages supported for Login: showcases the reach of VA services to a wider Veteran population
  - This is VEO office
- Successful authentications
  - These would be total authentications for va.gov and mobile. 
  - Total auths means a user was able to successfully login to our services and complete the objective they intended to on va.gov.
  - The reason this might be better than better than unique users is because unique visitors may not show that a user wasnt able to access our site as an authenticated user. We have no way of knowing what does good or bad look like for va.gov for unique visitors. Is it bad if we have more visitors or less? Do we have a goal to add more users? If so, why?
- from Snap investor brief: Unless otherwise stated, statistical information regarding our users and their activities is determined by calculating the daily average of the selected activity for the most recently completed quarter included in this presentation. While these metrics are determined based on what we believe to be reasonable estimates of our user base for the applicable period of measurement, there are inherent challenges in measuring how our products are used across large populations globally. For example, there may be individuals who have unauthorized or multiple Snapchat accounts, even though we forbid that in our Terms of Service and implement measures to detect and suppress that behavior. We have not determined the number of such multiple accounts. Changes in our products, infrastructure, mobile operating systems, or metric tracking system, or the introduction of new products, may impact our ability to accurately determine active users or other metrics and we may not determine such inaccuracies promptly. We also believe that we don’t capture all data regarding each of our active users. Technical issues may result in data not being recorded from every user’s application. For example, because some Snapchat features can be used without internet connectivity, we may not count a DAU because we don’t receive timely notice that a user has opened the Snapchat application. This undercounting may increase as we grow in Rest of World markets where users may have poor connectivity. We do not adjust our reported metrics to reflect this underreporting. We believe that we have adequate controls to collect user metrics, however, there is no uniform industry standard. We continually seek to identify these technical issues and improve both our accuracy and precision, including ensuring that our investors and others can understand the factors impacting our business, but these technical issues and new issues may continue in the future, including if there continues to be no uniform industry standard. Some of our demographic data may be incomplete or inaccurate. For example, because users self-report their dates of birth, our age-demographic data may differ from our users’ actual ages. And because users who signed up for Snapchat before June 2013 were not asked to supply their date of birth, we may exclude those users from our age demographics or estimate their ages based on a sample of the self-reported ages that we do have. If our active users provide us with incorrect or incomplete information regarding their age or other attributes, then our estimates may prove inaccurate and fail to meet investor expectations. See https://businesshelp.snapchat.com/ for details. In the past we have relied on third-party analytics providers to calculate our metrics, but today we rely primarily on our analytics platform that we developed and operate. We count a DAU only when a user opens the application and only once per user per day. We believe this methodology more accurately measures our user engagement. We have multiple pipelines of user data that we use to determine whether a user has opened the application during a particular day, and becoming a DAU. This provides redundancy in the event one pipeline of data were to become unavailable for technical reasons, and also gives us redundant data to help measure how users interact with our application. If we fail to maintain an effective analytics platform, our metrics calculations may be inaccurate. We regularly review, have adjusted in the past, and are likely in the future to adjust our processes for calculating our internal metrics to improve their accuracy. As a result of such adjustments, our DAUs or other metrics may not be comparable to those in prior periods. Our measures of DAUs may differ from estimates published by third parties or from similarly titled metrics of our competitors due to differences in methodology or data used.

## UX Considerations
Not necessarily germane to this particular product, but perhaps good to think about for VA.gov as user experience.



**Use on-site search functionality**

Agencies’ public-facing websites must contain a search function that allows users to easily search content intended for public use.


**Allow users to safely report security issues**

As required by Binding Operational Directive (BOD) 20-01, issued by the Cybersecurity and Infrastructure Security Agency (CISA), each agency must have a vulnerability disclosure policy that applies to all its internet-accessible websites and digital services, even those that are not intentionally made available to the public. This policy must allow the public to report potential security vulnerabilities and provide that the agency will not pursue legal action based on activities that represent a good faith attempt to comply with the policy. While agencies may list their registered domains as a reference, they must not limit the scope of the policy to specific websites or use an allow list to restrict the range of users who may submit reports.

Could help with the anaytics on user reporting

**Customization**

Agencies should prioritize customization that helps users complete more relevant tasks, and do so more quickly. 


**Pre-populate with user data**

Agencies should leverage data previously provided by users, where appropriate, to reduce the burden of future interactions. For example, when providing an authenticated experience, agencies should consider using existing information about the person to populate or pre-fill known form data about the person, as appropriate. Pre-population can help improve the user experience and save time. Agencies should consider privacy risks when assessing whether to pre-populate user data, particularly if users provided that data for a different purpose, and ensure that its deployment incorporates appropriate privacy safeguards.

Could help with improving analytics on time to load


**Web Scraping**

The Federal Government’s public web presence is an open book that may be crawled, archived, or “scraped” by anyone in the general public, at any time. Enabling short- and longterm preservation of government content is critical to public understanding of the government and its history, when appropriate. Web scraping plays an important role in making government information and data available and useful for a variety of public uses, including potentially for the training of large language models that enable artificial intelligence chatbots and services to accurately represent information about the government. 



**Engage users throughout design and development**

Agencies should evaluate the user experience created by their websites and digital services from beginning to end to proactively reduce burden on the public. Agencies should seek actionable feedback from diverse user groups throughout the development process, including while researching an initial design concept, iterating on content and user interface design, conducting usability testing, and monitoring the performance of the website or digital service. Agencies should establish processes to get qualitative feedback from actual users and not rely solely on web analytics data or the perspectives of frontline agency staff. User research should be conducted directly with members of the real-life user base.



**Utilize web analytics**

Agencies should use web analytics to better understand user behavior for the purpose of improving public-facing websites and digital services. The use of web measurement technologies (such as cookies, tracking pixels, tags, and other tracking technologies) is subject to limitations. Agencies are required to participate in GSA’s government-wide Digital Analytics Program (DAP).43 Participation in DAP does not preclude agencies from using other web analytics services.



**Mobile-First Design That Scales Across Varying Device Sizes** 

Federal websites and digital services targeted at the public should be available, accessible, and usable on a wide range of devices and platforms. A majority of the public accesses Federal information and services online, increasingly from mobile devices.


**Promote resources to developers**

Agencies should maintain a developer page (e.g., [agency].gov/developer or developer.[agency].gov) to centralize information about relevant technical materials for external developers. This should include information on how to access and use public web APIs, public source code or code repositories, and any other appropriate developer tools or technical documentation that could help developers build integrated digital experiences.

Could help with improving analytics on page view

**Design search-engine optimized content**

Agencies should ensure that publicly available content (i.e., content that does not require user authentication or sign in) is designed and structured so it can be effectively crawled and indexed by search engines. Agencies must not limit which search engines or crawlers can access or archive their public content. Agencies should employ best practices to improve crawling or indexing of web content, including using sitemaps, robots.txt files, and descriptive metadata in commonly parsed fields (e.g., meta element tags).


**Test with a representative cross-section of users**

Agencies should conduct ongoing usability testing to validate websites and digital services, including iterations on existing designs or new features and functionality, for ease of use and overall user satisfaction. As new pain points and challenges are identified, agencies should make incremental, iterative changes to respond to real-time user needs and improve usability or functionality. Agencies should proactively engage users from underserved communities to ensure their perspectives are incorporated. Usability testing should incorporate persona groups that have been developed to capture the spectrum of user types for the website or digital service.


**Optimize for performance**

Agencies should routinely analyze websites and digital services for load speed and continually strive to optimize for performance (e.g., high page speeds, low page load times, small load page size). Agencies are encouraged to use techniques such as mini-fication and image optimization, and eliminate any unnecessary plugins. Agencies should give special consideration to low-bandwidth users whose mobile devices and cellular connectivity are often their only means to interact with the government online.

**Maintain a clear, up-to-date Privacy Policy**

Agencies must post Privacy Policies on all public-facing websites and digital services (including their principal, sub-agency, component, and program websites and digital services). For each website, agencies must post a link to that website’s Privacy Policy on any known, major entry points to the website as well as any webpage that collects PII.

A Privacy Policy must: 
- Be written in plain language and organized in a way that is easy to understand and navigate; o Provide useful information that the public would need to make an informed decision about whether and how to interact with the agency
- Be updated whenever the agency makes a substantive change to the practices it describes; o Include a time-and-date stamp to inform users of the last time the agency made a substantive change to the practices the Privacy Policy describes; o Adhere to all other applicable OMB requirements; and o Include a link to the agency’s Privacy Program Page.

Could help with anaytics on page views

**Promote interoperability by leveraging standard interfaces**

Agencies should build and share standardized interfaces (e.g., web APIs with industry-standard exchange formats), to the greatest extent possible, where appropriate. Standard interfaces enable easy data exchange functionality without additional work to integrate and promote interoperability between different systems and components. 

**Public Awareness Campaigns** 

To better inform the public of government information and services, agencies may need to use websites and digital services to promote awareness of government services, benefits, and programs.  


**Provide appropriate notice for online collections of information**
A Privacy Act statement is required whenever an agency asks individuals to supply information that will become part of a system of records under the Privacy Act.57 Agencies must provide a privacy notice, whenever feasible, where a Privacy Act statement is not required but members of the public nonetheless could provide PII to the agency using a website or digital service. The privacy notice should include a brief description of the agency’s practices with respect to the PII that the agency is collecting, maintaining, using, or disseminating. 

**At a minimum, agencies must include the following on the Privacy Program Page**

- System of records notices (SORNs), matching notices and agreements, exemptions to the Privacy Act, Privacy Act implementation rules, and instructions for submitting a Privacy Act request.59 

- Privacy impact assessments (PIAs). Agencies must list and provide links to PIAs. However, agencies may determine not to include a link to a PIA if doing so would raise security concerns or reveal classified or sensitive information (sensitive information may include information that is potentially damaging to a national interest, law enforcement effort, or competitive business interest). Agencies must have a specific, compelling justification in order to decline to post a link to a PIA. If deciding not to post a link to a PIA, agencies should produce a summary or a modified version of the PIA that is suitable for posting. 

- Publicly available agency policies on privacy. Agencies must list and provide links to all publicly available agency policies on privacy, including any directives, instructions, handbooks, manuals, or other guidance. 

- Publicly available agency reports on privacy. Agencies must list and provide links to all publicly available agency reports on privacy (e.g., annual matching reports submitted pursuant to the Privacy Act, Section 803 reports submitted pursuant to the Implementing Recommendations of the 9/11 Commission Act of 2007). These reports need not include agencies’ Federal Information Security Modernization Act of 2014 (FISMA) reports or reports provided to OMB and Congress pursuant to 5 U.S.C. § 552a(r). 

- Contact information for submitting a privacy question or complaint. Agencies must provide appropriate agency contact information for individuals who wish to submit a privacy-related question or complaint.

 - Contact information for the SAOP. Agencies must identify their SAOP and provide contact information for the SAOP’s office. Agencies may also identify and provide contact information for any component-level privacy officials.
