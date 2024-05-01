# Communication Audit - Research Findings

Follow-up discovery for issue [#26770](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26770). There are a growing number of ways for Veterans to connect with clinicians for health related needs. It may be confusing for Veterans to find the right one for their needs and/or differentiate between the tools.

New options for contacting the VA are becoming available and need to be added to the VAMC pages. Before we can determine the right experience for Veterans, we need to understand both the individual options and the landscape



## About the research

### Goals

Get clarity on when to use which method (from VA perspective) so that we can determine the best method for researching Veteran expectations about their communication options and begin considering the best way to present the information that Veterans need.


- **Where does this product fit into the Veteran journey?** ([Patient Experience journey map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Patient%20Experience%20Journey%20Map.pdf) || [Veteran journey map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf))
    - Patient experience: before or after a visit; at any point a patient needs to communicate with the VA regarding their health care needs
    - Veteran journey: Starting up or getting out (Veterans looking for health care for the first time) or at any point after a Veteran has already registered for health care

### Questions
- **What is a typical use case for this product?**
    - Scheduling appointments
    - Questions about medications
    - Requesting prescription refills
    - Providing updates on health condition
    - Non-urgent general health care questions
    - Non-urgent general questions about health benefits

### Methodology

UX Audit of Veteran facing contact methods with focus on health care. The following page were reviewed: VA.gov homepage, contact us, helpful VA phone numbers, Apply for VA healthcare, Use secure messaging, MyhealtheVet landing page, VISN 8 facility pages. [See mural](https://app.mural.co/t/vsa8243/m/vsa8243/1630421025033/f184b85a498694d12baced65c028f8be8545760a?sender=leydahughes3111) for screen captures at time of review

#### Related discovery

The following discovery efforts informed this report:
- [VA Health Connect discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/discovery/health-connect-discovery.md) and [VISN 8 phone audit](https://governmentcio.sharepoint.com/:x:/r/sites/VSATeam/Shared%20Documents/Design%20%26%20Research/Facilities%20Team/2021%20-%20Communication%20Methods%20Discovery/Communication%20Audit.xlsx?d=wde893f1280744f7fbc565dec58595748&csf=1&web=1&e=KkvtD9)
- [Health chat discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/discovery/health-chat-discovery.md)
- [Secure Messaging discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/discovery/secure-messaging-discovery.md)


## Key Findings
The findings below were derived from the page audits referenced above and should serve as hypotheses and questions to be answered with further research. The UX assessment was guided by [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) commonly used in user experience design. 
 
1. Many labels sound similar and don't clearly indicate their purpose. 
2. Contact information is fragmented across various pages and sections globally and within health systems. 
3. Contact methods are often embedded within lengthy pages of dense text.
4. Alternatives to phone communication are missing from Contact us pages.
5. When and how a sub-labels get implemented is inconsistent across VAMC pages.

## Key Findings - Detailed

1. **Many labels sound similar and don't clearly indicate their purpose.** The labels of multiple contact methods, co-existing within the VA.gov ecosystem, sound similar and don't clearly indicate their purpose. Some seem duplicative of each other and others are overly branded, which may obfuscate the service that it offers. This violates heueristic principle #2: Match between system and the real world as it requires users to guess or understand what the VA means by "Telephone care" vs terms that are more natural and ubiquitous like "Pharmacy". It also violates principle #4: Consistency and standards, as it requires Veterans to wonder whether different words mean the same thing.

   - Phone labels (not an exhaustive list):
     - Main phone
     - MyVA411  
     - MyVA311 
     - "Call us"
     - 24-hour nurse
     - Telephone care 
     - Telephone Triage
     - Telephone assistance service (how VA benefits hotline is described when calling)
     - VA benefits hotline
     - Health benefits hotline
     - Health care benefits
     - VA Health Connect
     - Clinical Contact Center
     - Primary care call center
     - My HealtheVet help desk
    - VA Secure Messaging
    - VA Health Chat
    - VA Video Connect

2. **Contact information is fragmented across various pages and sections globally and within health systems.** This places all the burden on Veterans to either understand the VA's organizational system or browse multiple pages to locate and then compare communication options. There's no way to easily see all option together to compare them nor does the site offer a way to search or filter among them. This makes poorly labeled contact methods even more problematic as it places undue burden on a person's working memory to do all comparison by memory, violating principle #6: Recognition rather than recall. In addition, this distrubution of information may confuse users as to what is a national vs a location/system specific contact method which was shown to be problematic in past research [hypothesis 2, page 26](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/initiatives/2021-03-services-taxonomy/20190712_VAgovCMS_facilities_usability3_synthesis_full.pdf). The Contact us page within a health system lists multiple links and buttons to other pages before contact methods. For example, a prominent link to "Need help? Contact a patient advocate" appears before the main facility phone or phone directory. More research is needed to understand how this page is experienced by Veterans. Contact information is distributed among the following (not exhaustive):
    - Global: Homepage content, header and footer
    - Global: Contact us
    - Global: Helpful VA phone numbers
    - Health system: Contact us 
    - Health system: Contact us / Patient advocates
    - Health system: Contact us / Pharmacy
    - Health system: Make an appt
    - Health system: Register for care
    - Health system: Operating status / Patient resources
    - MyHealtheVet


3. **Contact methods are often embedded within lengthy pages of dense text.** Contact information is not listed in a concise, scannable form.  Instead, it often requires an extra click, and follows multiple paragraphs and heading levels. For example, to find a pharmacy number within the Pittsburgh health care health system section, a user will not find it on the Contact us page, but instead needs to click to a child page dedicated to pharmacy information and scroll through a wordy page to see that there are separate numbers for refilling and general support. This violates heueristic principle #8: Aesthetic and minimalist design, whereby every extra unit of information in an interface competes with the relevant units of information and diminishes their relative visibility. Veteran's consistently complain during research studies about the volume of information on VA pages and their overwhelming nature. Having to wade through paragraphs to find the correct piece of information, in combination with fragmented distribution of information and unclear labeling (as mentioned above), adds more distance between a question and an answer. 
![communication](https://user-images.githubusercontent.com/4960080/135097570-b3a9a870-a729-4de8-b731-35d33a0a25e1.png)

4. **Alternatives to phone communication are missing from Contact us pages**. Health system contact us pages do not list options like Health chat or Secure Messaging. [Previous research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/discovery/Digital%20Helath%20Modernization%20-%20Research.pdf) found that secure messaging is a trusted and preferred method of communication, preferred over phone calls, and second only to in-person conversation, for established patient Veterans. 

5. **When and how labels and sub-labels gets implemented is inconsistent across VA/VAMCs** This violates heueristic principle #4: Consistency and standards, as it requires Veterans to wonder whether different words mean the same thing.
- Some labels may not be relevant to all locations and will list "Not available" or list the same number main number under multiple labels. 
    - Bay Pines uses 888-820-0230 under the following labels: 24-hour nurse, Primary care call center, Telephone care, Make an appointment, Change your appointment, Pharmacy refill, Automated refill line. 
- The website phone number labeled "VA benefits hotline" calls itself "telephone assistance service" when dialed.
- The website phone number labeled "Telephone care" on one page and "24-hour nurse" on another, calls itself a "Clinical Contact Center" when dialed.
- "toll free" phone numbers:
    - Sometimes both toll free and non-toll free numbers are grouped under a single label, "352-374-6105 or 800-349-9457"  
    - Sometimes options are sub-labeled, "Toll free: #, Local: #"
    - Sometimes options are sub-labeled, "Direct:"
    - Sometimes options are not sub-labeled


## Recommendations:

1. VA stakeholders need to be aligned to help prioritize which methods of communication should be offered for which use cases.
     ##### Question(s) to be explored:
   - What part(s) of a [Veteran's journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) should be prioritize? A Veteran who is engaging in healthcare for the first time may need to be prioritized for work on VA.gov vs a Veteran who is already using MyHealtheVet. Are their needs and behaviors different?
   - What Veteran top tasks should be prioritized? e.g. enroll, help with a claim, talk to a nurse, etc
   - Which contact methods does VA want to prioritize for top tasks? At what point of care? Have priorities changed over time and need updating?
   - If new methods are introduced, which will they replace?

2. Communication method labeling and naming should be simplified; audit and test with Veterans for understandability, interpretability. 
     ##### Question(s) to be explored:
   - How does label naming support the task a Veteran is trying to accomplish? "Make an appointment" more likely matches a Veteran's mental model when trying to complete a task than does "Telephone care".

3. Conduct Veteran research and review analytics of Veteran communication usage.
     ##### Question(s) to be explored:
   - Which contact methods do Veterans use most today? Why?  
     - In previous studies, multiple Veterans mention a preference for the "nurse line". For what purpose(s) do they call this number over other numbers? This number isn't widely surfaced on upgraded VA.gov pages. How do Veterans learn about this number? How does the information provided on VA.gov match a Veteran's experience outside of the website. Do other mediums offer a different set of contact methods? Is there a consistent message when a Veteran walks into their clinic, opens their physical mailbox, or visits their clinic's Facebook page?
   - Are Veteran and VA priorities aligned?
   - How does VA.gov information architecture support top tasks and priorities?

4. Presentation of contact method(s) should help Veterans easily choose rather than subject them to a "tyranny of choice".
     ##### Question(s) to be explored:
   - How might we cull communication options and simplify their display? 
   - How might we design for the Veteran with the most severe cognitive, or other disability, to benefit all users?

5. Plan for Veterans at different parts of the Veteran Journey.
     ##### Question(s) to be explored:
   - How might we cater to first time users while offering shortcuts to existing users? 
     - See [#7: Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/)
