[IN PROGRESS]

## Secure Messaging Discovery

Discovery for issue [#27687](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27687). New options for contacting the VA are becoming available and need to be added to the VAMC pages. Before we can determine the right experience for Veterans, we need to understand both the individual options and the landscape.

### Goals

Get clarity on when to use this method (from VA perspective) so that we can determine the best method for researching Veteran expectations about their communication options and begin considering the best way to present the information that Veterans need.

[VA Secure Messaging](https://www.va.gov/health-care/secure-messaging/)

[Secure Messaging FAQ](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging-general-faqs)

[My HealtheVet Secure Messaging](https://www.myhealth.va.gov/mhv-portal-web/secure-messaging-spotlight)

### Methodology

Informational interview with secure messaging SME(s).

### Key Findings

- **Where does this product fit into the Veteran journey?** ([Patient Experience journey map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Patient%20Experience%20Journey%20Map.pdf) || [Veteran journey map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf))
    - Patient experience: before or after a visit; at any point a patient needs to communicate with their health care team, when not in-person
    - Veteran journey: from the point a Veteran is registered for VA health care, secure messaging could apply anytime a Veteran needs to communicate with their health care team
- **What is a typical use case for this product?**
    - Sheduling appointments
    - Requesting prescription refills
    - Providing updates on health condition
    - Non-urgent general health care questions
    - Non-urgent general questions about health benefits
- **Why would a Veteran use this, as opposed to something like [Health Chat](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27686)?**
    - Benficial to have a record of previous communications (see [Digital Modernization research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/discovery/Digital%20Helath%20Modernization%20-%20Research.pdf))
    - Works on Veteran's own schedules; relieves pressure of real-time communicaiton via chat or phone
- **What does a Veteran need to know about this?**
    - Secure messaging cannot be used for emergency or urgent communication
    - Health care teams are different, and Veterans and their team must agree on if, and how, they want to use secure messaging
    - Veterans can only communicate with health care teams they are authorized to communicate with
    - Veterans can use scure messaging as a basic user, or as a premium member
    - Must be premium members to exchange PHI via secure messaging.

## SME Interview(s)

### Additional questions

- Does messaging connect directly to a specifc health care team, or at the system level first?
- How do Veterans currently learn about secure messaging? (ie. Are health care teams supposed to inform them?)
- Can Veterans ask general non health care questions? (ie. Questions about their education benefits?)

**SME:** Jen Echer, UX Designer, Ad Hoc (research and design for secure messaging mobile app)

- Secure messaging is a trusted and preferred method of communication, preferred over phone calls, and second only to in-person conversation.
- Depending on the health care team, secure messaging can be used for a variety of purposes including: filling prescriptions, appointments, and even scheduling rides. Messages are triaged by a Veteran's health care team, and it depends on what the team is open to using messaging for.
- Developing a relationship with the health care team was important for Veterans, in establishing communication norms. Degree of responsiveness varied depending on the team, but officially it's supposed to be within 3 business days.
- On the health care team side, there is training and onboarding they must go through before using secure messaging.
- Secure messaging isn't for introductory purposes: a Veteran must already be registered and in contact with their health care team, and they can only communicate with health care providers they are authorized for - no contacting different people in different health systems [like for more information or second opinions].
- Health care providers may be somewhat distrustful of more apps to use, including secure messaging, if they already have established methods.

**SME:** 

Patricia Henry (Patricia.Henry@va.gov), secure messaging PO

Tracey Martin (Tracey.Martin@va.gov), My HealtheVet coordinator

- [Patricia]
    - It used to be that you had to opt into secure messaging, but now **when you have access to My HealtheVet, you automatically have access to secure messaging**, under one set of terms and conditions
- [Tracey]
    - There is no general mailbox that then distributes messages to other teams. **The patient gets associate to teams based on their relationship - it's based on their primary care enrollment, clinics they've been seen in or will be seen in, it's based on specialty lists that have been created in Vista, in the patient care part of the application, and there's manual association. A patient cannot message any team that they have not already had an established relationship with.** At some facilities the patient may have 15 - 20 teams, and then there are some facilities where they might only have 3 - 4. It depends on how the facility themselves have set up general groups. 
    - We might have an "ask the director" team at one facility, so then all patients are associated with that "ask the director" [messaging group]. You could have an "ask a pharmacist", "ask a My HealtheVet coordinator", etc. In our VISN we call them "bonus teams" - any patient can see these teams. In some facilities it's more specific, they have very few admin teams, so Vets are only going to the find the teams they are getting care from. 
    - Veterans learn [about secure messaging] sometimes by default - it depends on how they become a premium account holder. **If they go through the online upgrade path, they likely are not educated on secure messaging. If they are upgraded in person on on video, if time allows, whoever is doing the education and authentication of the Veteran can take them on a quick tour of the features, including secure messaging. If time allows, My HealtheVet coordinators [in person/video] have Vets send a test message, and check whether a Vet's teams are [all present in the system].** If teams are missing, coordinators can manually add a Vet to those teams. There is a welcome message the welcomes them to secure messaging when they become a premium account holder.
- [Patricia]
    - In the past we had three levels of users: basic, advanced, and premium. **Anybody can be a basic user - you have a home page and contacts, but no access to PHI (protected health information).** Then they would be matched to MPI (master patient index) and then automatially go to advanced status, and then would go through an in person authentication, or remote authentication, and then they would become premium. **Premium allows for use of all the features of My HealtheVet [including PHI].**
    - We recently started a campaign to do away with the "advanced" imbetween status, so we're going to have basic users, or premium users. The authentication requires proof of identity - in person via identity verification and answering some questions, or they can do it online. My HealtheVet coordinators upgrade them after authentication.
    - [Via email after interview] About 67% of My HealtheVet users are premium users.
- [Tracey]
    - Active users sending secure messages, or have sent secure messages in the past two years, are about 21.97% My HealtheVet users.
- [Tracey]
    - **If we had some sort of general mailbox that would be great, but we would need to get buy-in at the facilities. Right now the My HealtheVet coordinators tend to be that catch all, if somebody doesn't know where to send a message they'll send it to the My HealtheVet coordinators, who then reassign the message over.** Who is going to the man the general mailbox - there would definitely need to be some cultural changes for that to happen. Some might say the best place for that might be a call center, but what we find is that the call centers tend to be very hands off with secure messaging.
    - I can't give specific stats as to what is the most common, but ideally they're primary care teams. That's where we started secure messaging, and that's where we stand right now. Those teams rise to the top of the pick list when they compose a message [via subject categorization]. 
- [Patricia]
    - When we first started we had a few categories [subject categorization], and based on those categories it would tell you **the most common things are medication questions, appointment scheduling, records requests, and general "this is how I'm feeling" messages**. The things you would expect to see.
- [Tracey]
    - In order to get to secure messaging, Vets have to login [to VA.gov]. When they go to compose a message, the use cases could be anything [subject categorization]. **We don't stop them from sending certain kinds of messages, except we discourage them from sending emergency messages.** There are six subject types, and then they can the email subject line to clarify a little bit more. **Most patients are going to the "general", "appointment", or "medication" [categories].** We don't have any reports that determine what patients are using - they could use "appointment" then write about the color of the sky, for example - there's nothing we use to figure out whether the message contents matches its category. It's very subjective.
    - **It can be used for VA care, non-VA care, general VA benefits which we then pass on to  benefits teams, but we clarify that we are not the VBA we're the VHA.** We do need to direct some of the messages, but typically Veteran's can't message if they're not premium account holders and don't already get care at the facility. **Encouranging the to register might be a bonus incentive: "if you want to use the secure messaging feature, we encourage you upgrade"** etc. 
    - **For non health care questions, we usually deflect and have them go back out to VA.gov, and to use their other information**. I had a patient want to check on his claim that he filed a year ago, and he sent it to the "ask a My HealtheVet coordinator" category, and I said there's a distinction between the two agencies, and I have him the "check the status of my claim" and the 800 number if he wanted to speak to somebody. Otherwise, there's not a direct connection between MyHealtheVet and outside of VHA.
    - **The disclaimer tells Vets it can take up to 3 business days for a response, for education purposes.**
- [Patricia]
    - We don't want the to use it for urgent matters, it's for non-urgent non-emergency communication. Typically it doesn't take 3 days for a response, but we want them to understand it's not for urgent communication. **Wherever you decide to put this link to secure messaging, you want to put the disclaimer there as well.**
- [Tracey]
    - It's very person specific, as much as the person on the other end has an understanding of all the pieces [as far as how the coordinator or team member directs a question that's not health care related]. Some people just say "I can't help you" when they receive questions outside of secure messaging scope.
- [Patricia]
    - Escalation is very important, most network directors down to the facility directors have a performance measurment having to do with escalation. We track the escalation very closely, and the majority of our sites are very good at responding to questions within 3 days. **My HealtheVet coordinators have notices when it gets close to 3 days, and when it passes 3 days, and we follow up with those health care teams to make sure messages get responded to.**
- [Tracey]
    - We don't want something just sitting there to be ignored, and that's why if we had a general mailbox, we would really need to ensure that the right team members are on that. The My HealtheVet coordinators should be one of those people, but there needs to be accountability beyond the coordinator.
- [Patricia]
    - The other thing we have the functionality to allow a message to be reassigned outside of the facility [like to another facility or team]. 
    - In terms of how you might measure success, access [to this feature] feedback may be how you measure it, as opposed to percentage of users because as you can see those are very high. The whole notion of have one place to go, VA.gov, as a digital front door, that's important to folks.
- [Tracey]
    - **I think the biggest stumbling block would be, I don't know where to start, I see the facility I want to get care from, I click on this button, and oh, I'm not eligible to do that. You know, you're not a current user so therefore this component is blocked - that would be frustrating I think. To me as a user, if you offer it, then it better work. If they need a premium access to get there, that would be a stumbling block.**
- [Patricia]
    - **You're going to have to be clear about if you have to be premium, you have to be associated with the facility. Be clear about the criteria. Any new registrant to My HealtheVet automatically has access to secure messaging, and once they log in we start educating right away.** You could do "what is secure messaging?" or something like that - we try to talk a lot about managing your own care, with communicating, with staying on top of your messages - it's really about co-managing your health with the VA.
