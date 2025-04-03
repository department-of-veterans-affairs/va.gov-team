# VA Health Chat Documentation
Information about the integration of VA Health Chat via the CirrusMD API onto My HealtheVet on VA.gov. 

The initial request to add this service as a link in the second column of links at the bottom of the My HealtheVet on VA.gov landing page came on June 21, 2024. An MVP was added on __________. 

## Resources
* [VA Health Chat app website](https://mobile.va.gov/app/va-health-chat)
* [VA Health Chat - PDF overview](https://mobile.va.gov/sites/default/files/documents/hopat1994-va-health-chat-at-a-glance-508_final-1.pdf)

## On this page: 
* [Teams & POCs involved](#teams)
* [About](#faq)
* [CirrusMD API specifications](#api-specs)
* [MVP implementation of VA Health Chat on My HealtheVet on VA.gov](#mvp)
* [Post-MVP ideas](#post-mvp)
* [Notes](#notes)

## <a name="teams"></a>Teams involved
* OCC - Hugo Padilla
* OCTO - Kaitlin Fink, Patrick Bateman
* MHV on VA.gov Cartography Team

## <a name="faq"></a>About
**What is VA Health Chat?**
* The VA Health Chat app is a service that connects Veterans with VA health care professionals through text-based chat messaging. Unlike Secure Messages, it **does not** connect them with their provider, but with a professional assigned to their associated Veteran Integrated Service Network (VISN) (these are the parent networks that each healthcare facility rolls up to geographically). The VA has 18 VISNs across the country, including in U.S. territories. All 18 have VA Health Chat implemented, but it is not yet available in some parts of VISN 16. 

**What kinds of topics can VA Health Chat help with?**
* VA Health Chat is intended to respond to patient questions in the following four categories. **Not** all VISNs support all 4 options as of July 2024: 
  * Virtual Clinic Visit (Urgent Care)
  * Clinical Triage
  * Scheduling and Administration
  * Pharmacy

**Is VA Health Chat available 24/7?** 
* No. Each VISN has its own individual operating hours, and individual chat services that are provided based on topics. The CirrusMD API has the availability logic and it is our understanding that onlyl VISNs that are open for chat during hours will display to users within the VA Health Chat web interface. There is a goal for all VA Health Chat services to be 24/7 but the VA is not there yet. 

**How quick is the response time?** 
* We do not know the average wait time, but it's quite quick. It's more of a synchronous channel like what you'd expect of a chat. And there are escalation paths for chats that don't get responded to in X amount of time.

**Is VA Health chat totally independent of EHR?**
* Yes - All VISNs have at least 1 HealthChat plan available, regardless of whether their EHR system is VistA or OH/Cerner. It is specific support per VISN, not per facility. 

**Changes coming to VA Health Chat in 2024: **
* Channel name changes that will go into effect: 
  * Nursing will be known as "Clinical Triage"
  * Pharmacy will be known as "Pharmacy Support"
  * Admin/Scheduling will be known as "Scheduling and Administration"
  * Urgent Care will be known as Virtual Clinic Visit (Urgent Care)"

* Channel name changes that will stay the same: 
  * Community care
  * Whole health
  * Women's health

**NOTE**: Not all channel types are available at all VISN locations. 

## <a name="api-specs"></a>CirrusMD API specifications
This is the service that supports the VA Health Chat. OCC point of contact is Hugo Padilla. 

### What are access requirements? 
Users must have:
* an ID-verified credential
* have 1+ facilities in their profile that belong to a VISN using the VA Health Chat service
* Have had an appointment within the last 36 months
* Be actively enrolled in VA health care via the VES-API

**Q&A about Cirrus MD API with Hugo Padilla, OCC:**
* Q: The API specifications suggests that with proper authorization and parameters, we can get a list of VA Chat services ("plans") returned that are available to the particular patient. Is this accurate? 
  * A: Yes
* Q: The call defined in the spec requires token-based authentication. Any idea if that is a static token or would we need to go through an oauth-style flow of providing a client secret, getting a scoped token/JWT back, and supplying that token with the request?
  * A: Yes, it's an oauth style flow
* Q: Can't tell from the spec how we specify which patient for which we're looking for VA Chat "plans." Or maybe patient identification is part of the authentication flow?
  * A: Yes, we ID the Veteran and therefore know which plans they should have access to and only present them the plans when they are available to the Veteran.     

## <a name="mvp"></a>MVP implementation of VA Health Chat on My HealtheVet on VA.gov

### Connecting to CirrusMD API: 
There is SSOe between VA.gov and the VA Health Chat web interface, which relies on a 3rd party API called the Cirrus MD API. The My HealtheVet on VA.gov landing page has a link to VA Health Chat which should deep-link users to the web interface and keep them signed in.

### Data sources to determine access requirements: 
* up to date VISN data might be available via the lighthouse facilities API, which is reachable via existing vets-api integration. details in docs.
* since this data doesn't change super often, if we think we'll migrate soon-ish to just calling health chat to get eligibility directly, could probably just hardcode a mapping of facilities to VISNs in the FE or BE.
* it's never going to be perfect because inevitably a patient will be registered in multiple VISNs because of moving around, and will want to access health chat in their current VISN, which doesn't have it, but their old VISNs do.

### MVP Design

### What information we get from the API to determine eligibility and hours?

## <a name="post-mvp"></a>Post-MVP ideas
**Improvements to implementation on My HealtheVet on VA.gov landing page:** 
* **Design**
  * Instead of only surfacing a hyperlink at the bottom of this page, build a widget that provides more context and "smarter" personaslized information that shows the user which chat services are available for their VISNs and/or lets users know when it isn’t available.
* **Engineering**
  * Add in facility conditionality - we know exactly what facilities don't offer health chat. We know what facilities the user is registered. Use a hard coded facility disallow list to hide the health chat link for users who won't ever have access.
  * Assuming health chat availability API is not yet ready for us, we do discovery on using our own appointments list integration as a basis for the 36 month eligibility window. (Patrick says - also remember the stakes here: if a patient accidentally gets through to health chat and didn't have an appointment in the last 36 months, is that a real problem?)

**Scale to other places:** 
* Consider links from the Rx Refill & apointments user flows
* Consider integrating with IVC "How to get care" function
* Consider how this fits into the "Contact us" landscape on VA.gov
* Consider integration with VAHB mobile app. 

## <a name="notes"></a>Notes
Notes and conversation details from initial implementation timeline in Summer 2024 for historical context:

**Accessibility notes:**
* on 07/22/2024 -  Martha Wilkes said that Health Chat has not been audited by 508 office yet, and since it's a non-OCTO service, our accessibility specialists can't do much. Kaitlin Fink says it's on the Health Chat teams' radar & once full FedRAMP marketplace designation is achieved they will ask for a full 508 audit.

**Design plans:**
* Initially, OCTO was concerned about surfacing the VA Health Chat link to all users, regardless of whether the service was available to them (based on their associated VISN) or the service's operational hours. A suggested compromise at the time was to build out an interstitial page interstitial page on va.gov (i.e. va.gov/my-health/about-va-health-chat or something) that explains what health chat is and that it might not be available at the moment (if after hours) or at all (if not available in VISN/site).
* We eventually moved away from the interstitial idea, but there is not clear documentation that was saved about why that decision was made.
* Kaitlin Fink shared on 6/21/2024 that other tools will be adding it VA Health Chat in context when it makes sense, starting with appointments. As of April 2025, Cartography is unsure if an integration within appointments happened - we are reaching out to get information about that. 

**Implications to a user's medical records:**
* If a chat conversation gets sent to a clinical provider, that conversation will be added to the patient's medical record as a note. We believe it would be a "progress note" specifically.
* In Health chat, provide the staff a note template and then copy and paste this into CPRS (part of a veterans medical record)
* For Pharmacy, a note gets sent to the care team if a Veteran requests a presription renewal (same as if you call in to chat with a triage team).

**Should we conditionally reveal access to VA Health Chat based on availability of service?**
  * We see downfalls to this approach on UX side - there is a risk of confusing users who sign in looking for the link, but sometimes find that it is randomly missing during certain times of the day. We'd need a more robust design to clarify that the service is down (not just exposing vs. taking a way a hyperlink) 
  * Cartography team was concerned that there is a possibility different services have different hours, and/or that a user loads the page at 3:59pm then clicks the chat link at 4:01pm after the service is closed. Also note the existing chat app has a page to show what is available.
  * On the other hand, exposing the link at all times provides a potential dead-end to users who may go to VA Health Chat and find the service to be unavailable depending on the time they attempt to access it.

**CirrusMD web interface UX questions:**
* The interface surfaces a user's VISNs instead of the actual facilities they go to, and this could be confusing to Veterans. If they have multiple, how will they know what "VISN 23 (Site ID 983)" versus "VISN 2 (Site ID 984)" are?
  * Kaitlin says this is okay, most of the questions can probably get covered either way, and a responder can always redirect the to a different VISN chat.
* Once the service is up and running, could we push them to improve their UX?
  * Perhaps CirrusMD could look at the user's last appointment location, and automatically send them to that site's chat. and if not available, then the next one on the list, etc... 
