# VA Health Chat Discovery
After some initial UX discovery in June 2024 to help the Cartography Team understand where to implement a link to the VA Health Chat, technical discovery took place in July 2024 in order to figure out how we would enable direct SSOe access to the service via the CirrusMD API. Notes about both UX and technical discovery efforts are included herein.

## On this page
* Resources
* UX Discovery
* Technical Discovery

## Resources

* [VA Health Chat website](https://mobile.va.gov/app/va-health-chat)(Not to be confused with the [Virtual Agent Web Chat](https://www.va.gov/contact-us/virtual-agent/))
* [Health chat training material](https://mobile.va.gov/sites/default/files/documents/hopat1994-va-health-chat-at-a-glance-508_final-1.pdf)
* [VA Health Chat discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718075410575/0f29fdbccc61d21bbf524d4769de17a2173e37cd)
* [CirrusMD API Specifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/health-chat/health_chat_swagger.json)
* [A video on how ChatBot links to Health Chat](https://vimeo.com/manage/videos/957735226/3b9da7b241) -_shows how VA Health Chat is presented to the user_
* Information on the ChatBot API that provides a list of channels available. [Chatbot __ VHC Integration Overview.docx](https://github.com/user-attachments/files/16239627/Chatbot.__.VHC.Integration.Overview.docx)



## UX Discovery
People: 
* Kaitlin Fink (OCTO)

### Features of VA Health Chat: 
* Find your closest VA facility
* Schedule an appointment
* Refill a VA prescription
* Send a non-urgent message to your health care team - VA Health Chat does not connect the user directly to their VA care team, instead it is generic help from a staff member at the broader VISN that the facility bubbles up to.

### Support for VA Health Chat across facilities
VA Health Chat is support based on VISN (not at child facility level). There are 18 VISNs at the VA. As of June 2024, all VISNs support VA Health Chat at some level, but not all have 100% coverage on the 4 support areas. 

### Design explorations
Documented in this [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718075410575/0f29fdbccc61d21bbf524d4769de17a2173e37cd).

## Technical Discovery
People: 
* Carlos Felix (Cartography Team)
* Hugo Padilla (OCC)
* Patrick Bateman (OCTO)

### High-level questions & answers: 
<details><summary>Who is POC for CirrusMD API integration?</summary>
Hugo Padilla (OCC) who is best reached on Teams or via email. Copy Patrick Bateman on comms.
</details>

<details><summary>How to determine a user is eligible for Health Chat?</summary>
* Per Hugo Padilla on an email to Patrick June 14, 2024: The VA Health Chat/CirrusMD API can be used to return a list of VA Chat services/plans that are currently available to a particular patient.
* Kaitlin Fink - Unknown what the true definition of a "plan" is. Kaitlin Fink thinks the "plans" are the types a user has access to: Virtual Clinic Visit (Urgent Care), Clinical Triage, Scheduling and Administration, and Pharmacy. The plans are based on what Veterans Integrated Services Network (VISN) they are associated with. The goal is for all VISNs to support all 4 but they aren't there yet. All VISNs have at least one healthchat plan available. It is specific support per VISN not by facility.
</details>

<details><summary>What is the link we will use in the Landing Page to the chat tool?</summary>
Link to browser based chat: https://veteran.apps.va.gov/users/v2/login?redirect_uri=/cirrusmd from public website.
</details>

<details><summary>How to determine at what times the chat is supported?</summary>
* Potentially use the VA Health Chat/CirrusMD API for this.
* Potentially each service/plan has different hours. Which service/plan are we linking to?
  * Carlos Felix- I am thinking the user needs to choose which one as per how the chat works today.
</details>

<details><summary>What is the authentication for the VA Health Chat/CirrusMD API?</summary>
* Per Hugo Padilla on an email to Patrick June 14, 2024: Believe it is Oauth authentication.
* Per Hugo Padilla on an email to Patrick June 14, 2024: the authentication IDs the veteran and hence no ID needs to be passed in to the API to get data.
* Carlos Felix - Looks like the browser based chat uses the same VA authentication from a quick try on the public website.
* Carlos Felix - Per the Health Chat training doc: To use VA Health Chat, the user must be enrolled in VA health care in a location that supports VA Health Chat and have Login.gov, ID.me, DS Logon Level 2 (Premium), or My HealtheVet Premium account credentials. There is no mention of LOA1 or LOA3.
</details>

<details><summary>Is there an existing vets-api service for Health Chat?</summary>
No, a search of the baseline only shows web chat is available.
</details>

<details><summary>Can we get sample response(s) for the VA Health Chat/CirrusMD API?**</summary>
TBD
</details>

### Sync with CirrusMD API team
Carlos Felix (Cartography) met with the Health Chat/Cirrus MD team on July 12, 2024.
* [View the Zoom recording](https://us06web.zoom.us/rec/share/tnzPLl2roIbv-wrChbKqDsKkFfMsv6Lbw2wPfDXl4tgWYHcYliIH-wfODCT1SL1t.k1-ctxiaxsj8f6DM) - Passcode: a#qs7vgC

**Attendees:**
* Brody Westcot - VP Cirrus MD
* Ean Hibian - PM Cirrus MD
* Ray - Lead PM
* Dale - Sub contract lead chat bot dev
* Patrick Bateman
* Carlos Felix

**Quick summary:**
* There is Health Chat and VA Chatbot. These are two different chats. Currently the chatbot is for pharmacy only, but the long term vision is to have the chatbot is to direct users to the correct Heath Chat channel. Currently in the early stages of development.
Health Chat is available at all VISNs.
* Health Chat uses a filter to look at the appointments in the last 36 months to know if the user is eligible for chat. Health Chat team to share what this filter is. We should be able to look at the user's appointments and use this same filter recipe to determine eligibility.
* Health Chat presents the user a list of channels and their availability. We are likely to not have access to channel operating hours data, but Health Chat team to share any information on how we can get this. Potentially we just initially point the user to the chat and the existing chat system shows what is available to the user.
* Health Chat team to provide us with more documentation, so we can understand more of the chat, how it works, and its API.

### Cartography team discovery tickets
* [Ticket 86753](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86573)
* [Ticket 86756](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86576)
  
