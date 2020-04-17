# Logged-in Homepage Stakeholder Interviews Research Summary 

------DRAFT, 04/17/2020------

**Digital Services Veterans Affairs (DSVA), VSA, Authenticated Experience**<br>

Liz Lantz (liz@adhocteam.us), 04/17/2020

## Research Goals 

As part of a larger discovery effort for the new logged-in homepage, we wanted to talk to DEPO stakeholders in order to:

- Better understand problems and pinpoints stakeholders perceive with the current logged-in homepage and myVA
- Gain insight to their goals and ideas around success for a new logged in homepage experience
- Understand the impact of this work to other teams
- Better understand risks
- Expand our thinking and gain insights into what we don't know yet

## Research Methodology 

We conducted remote 1:1 interviews  via Zoom between March 30 - April 17, 2020. A moderator began with introduction questions and prompted stakeholders with questions (from the conversation guide). Remote observers and note takers were also in attendance for some sessions.

### Who we talked to

**Round 1**

- Chris Johnston
- Lauren Alexanderson
- Samara Strauss
- Clarice Chan
- Steve Kovacs
- Andrea Schneider
- Matt Self
- Ryan Thurlwell
- Mel Woodard
- Kevin Hoffman
- Mikki Northius
- Dave Conlon
- Andy Lewandowski

**Round 2**

- Charles Worthington
- Jen Lee
- John Hashimoto

### Research Questions

- What problems have stakeholders noticed about the current logged-in homepage and myVA experience?
- How would an update to these parts of va.gov impact their work?
- What goals do stakeholders have for a new logged-in homepage experience?
- How do stakeholders define success? What metrics are they interested in seeing?
- What risks do stakeholders anticipate for this work? What concerns do they have?

## Key Findings

### Problems with the current UX 

1. The logged in homepage and navigation largely stay the same when people log in, which gives little sense of personalization and doesn't effectively present what we know about Veterans.
2. We're not effectively guiding Veterans to tasks and tools from the logged-in homepage or via the navigation.
3. We're not effectively providing updates or notifications to Veterans through VA.gov.

### Goals

1. A Veteran's logged-in homepage should be a data driven experience that reflects what we know about them.
2. The logged-in homepage should guide Veterans in a meaningful way that helps them complete tasks.
3. We should provide a logged-in experience that scales visually and across use cases.

### Impacts to work

1. Teams can leverage the homepage to elevate tools.
2. A new logged-in experience may influence how and what people build for Veterans outside the homepage.

### Project Risks

1. Having many stakeholders could prevent us from delivering incremental improvements in a timely way.
2. The logged-in homepage could become a dumping ground.
3. We could create/increase Veteran mistrust through poor data integrity and login experiences.
4. COVID-19 disruptions could impact ability to effectively interact with stakeholders.

## Details of Findings

### Perceived problems with the current UX 

1. **The logged in homepage and navigation largely stay the same when people log in, which gives little sense of personalization and doesn't effectively present what we know about Veterans.**

   Since the logged-in homepage and the majority of navigation don't change from the logged-out experience, we are falling short in providing a more targeted experience that reflects Veterans' circumstances and needs, guides them to tasks and tools, and makes them feel welcome. Without a more tailored authenticated experience, Veterans don't have enough incentive to log in.

2. **We're not effectively guiding Veterans to tasks and tools from the logged-in homepage or via the navigation.**

   This is another symptom of the logged-in homepage and navigation largely staying the same - stakeholders feel Veterans rely on the Top Tasks on the VA.gov homepage to get to the tasks and tools they're looking for, rather than going to myVA or using the main navigation.  One stakeholder described it as a "greek diner" approach to the navigation menu - it contains ALL the items, even when logged in, which requires significant cognitive load to sort through and find the task they actually came to complete. 

   While myVA *does* guide Veterans to tasks and tools, it's not used much (we learned this in [our Personalization 2.0 research study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/personalization%202.0/discovery-research#observations-the-my-va-dashboard)), and the visual experience hasn't scaled in such a way that it helps Veterans find what they're looking for quickly. We can do better than presenting a stacked list that requires significant mental processing and scrolling to understand all that is available.

3. **We're not effectively providing updates or notifications to Veterans through VA.gov**.

   When we have new information or updates for Veterans to act upon, they have to seek it out rather than us surfacing it for them upon logging in.  By not having a centralized place for Veterans to find these notifications, we're missing the opportunity to help Veterans complete their tasks more quickly, make them aware of actions they need to take, and quickly provide status updates.

### Stakeholder goals

1. **A Veteran's logged-in homepage should be a data driven experience that reflects what we know about them.**

   By leveraging the data we have for each Veteran profile, we'll be able to surface the most relevant information related to benefits, claims, and preferred VA facilities to each individual. Providing information and updates that reflect their specific situation, and empowering them to complete tasks quickly and efficiently, will likely also help us build Veteran trust in the VA.  

2. **The logged-in homepage should guide Veterans in a meaningful way that helps them complete tasks.**

   Stakeholders want to see a task-based UX for the logged-in homepage, to help Veterans achieve their goals quickly and efficiently, while providing continued access to the things that are most important.  By providing Veterans with this type of experience, they'll be able to better understand their status, and any next steps they need to take.  This will hopefully contribute to people relying less on call centers, submitting manual forms, or having to go in-person to complete tasks.

   Additionally, providing this focused, distinct logged-in experience as a contrast our broader logged-out experience will give Veterans an experience more closely aligned with the private sector, which we hypothesize matches their expectations.

3. **We should provide a logged-in experience that scales visually and across use cases.**

   As va.gov continues to grow, we'll need to establish a logged-in experience that can grow with it.  The logged-in homepage needs to be a place users can easily and efficiently find what they're looking for, whether that's 2 or 20 tasks, and if they are new Veteran, or if they've have been using the VA for decades.

### Impacts to work and DEPO teams

1. **Teams can leverage the homepage to elevate tools.**

   Stakeholders view the logged-in homepage as place to elevate the tools their teams build, and as a centralized place to elevate notifications and updates to users.  

2. **A new logged-in experience may influence how and what people build for Veterans outside the homepage.**

   Having a centralized place that makes it easy to see relevant tools will also inform our DEPO teams and other business lines about what's out there, and may influence what they're working on.  Teams outside of DEPO may be able to leverage the new logged-in experience with our support.  APIs may also be impacted, since we may want to get data we don’t have now for homepage, and we'll need to ingest that data in a consistent way.

### Perceived project risks

1. **Having many stakeholders could prevent us from delivering incremental improvements in a timely way.**

   Almost every stakeholder mentioned concerns around navigating the opinions of many stakeholders, scope getting out of hand, and competing priorities.  These are valid concerns. Having a clear solution vision for this work, staying focused on our North Star objectives, and keeping communication with teams open will be critical to mitigating this risk.

2. **The logged-in homepage could become a dumping ground.**

   The logged-in homepage is valuable real estate for reaching Veterans, and stakeholders commented throughout interviews that every team/business line will want their tools featured there.  Concerns were raised about conflicting information, and the struggle to find balance between Veteran and business priorities.  Using data and personalization to inform what Veterans see on their logged-in homepage will help us keep this space decluttered and useful to Veterans.

3. **We could create/increase Veteran mistrust through poor data integrity and login experiences.**

   As we increase personalization and bubble up tasks to enhance the logged in experience, data integrity will become even more critical to maintaining and building trust.  Our Veteran data comes from different sources, which can sometimes result in poor data integrity.  We'll need to carefully consider the data we have available to us as we build our roadmap, perhaps holding off on some features longer than others, until we are confident we can present Veterans with an experience they can trust.

4. **COVID-19 disruptions could impact ability to effectively interact with stakeholders.**

   This didn't come up in interviews, but is something our team identified as a risk during synthesis.  At the time of writing, all team members are working remotely, and some with limited availability due to COVID-19 impacts.  This means having conversations, running ideation sessions, and  championing this work all has to take place remotely, which inherently has more limitations than being in-person.   The timeline has already been extended due to limited work schedules.  We're not sure how long this will go on, and will need to continue to be persistent and creative to try to match the productivity we could have with this work if we were not in the midst of a global pandemic.



## Additional Insights

### **Metrics**

It will be important to look at metrics before and after the launch of a new logged-in homepage to understand the impact we're having on Veterans (an in-depth look at current analytics to understand where we are today is planned as part of this discovery effort). Two common themes emerged when stakeholders were asked what metrics they'd be interested in seeing for this effort.

1. **Measuring interactions can help us understand if we are guiding Veterans in a meaningful way that  helps them complete tasks.**  Metrics to look at could be:
   - Navigation path from logged-in homepage, especially as it relates to online tools 
   - Interactions on logged-in homepage (what are users clicking on?)
   - Use of self-service tools
   - Volume of calls to call center related tasks available through the logged-in homepage
   - Volume of manual and in-person submissions related tasks available through the logged-in homepage

2. **Measuring authenticated sessions will give insights into how Veterans perceive the value we're providing through a personalized, data-driven experience.**  Metrics to look at could be:
   - User satisfaction
   - Number of people who verify their identity (LOA3)
   - Time to log in
   - Number of authenticated sessions
   - Number of users who log in

### **Comparative experiences**

Conversations with stakeholders validated that banking and financial sites serve as valuable models for VA.gov. When done well, financial and banking sites provide a level of personalization that create a strong differentiation from the logged-out experience. They allow users to complete a number of transactions, including submitting applications, viewing account statuses and updates, and receiving notifications. They also keep marketing content separate from the logged-in experience.

Companies mentioned that we'll aim to look at (account availability may create a blocker):

- Bank of America
- USAA
- Chase
- Fidelity Bank

Multiple stakeholders also named companies who offer personalized experiences that impact users both online and offline, or across multiple products such as Google, Delta, and Apple.  Insurance companies, such as State Farm or Geico also came up as something to consider, as they also provide users the ability to apply, file a claim, check status, and manage their benefits.

## Considerations and action items

### Things to think about

- We'll want to work closely with VSP to build-up/scale the visual design system to accommodate the authenticated tools. This redesign is a good playground for that
- We should think more broadly about how to guide veterans in the logged-in experience — how does a logged-in navigation factor into this project?
- Once we have completed this discovery phase and are more sure of the direction we'll go, coming up with a concrete vision and roadmap will help us manage stakeholder expectations.

### Action items

- Authenticated experience PO (Samara Strauss) should regroup with DEPO stakeholders on how to involve VA stakeholders in this project
- We'll include Bank of America, USAA, Chase, Fidelity, Google, Apple, Delta, State Farm and Geico in our comparative analysis.
- We'll continue with remaining research activities planned for this discovery effort: 
  - Past research review ([Issue #7265](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7265))
  - Analytics review ([Issue #7772](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7772))
  - User interviews ([Epic #7268](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7268))
  - Comparative analysis ([Issue #7266](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7266))


## Appendix

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/stakeholder-interviews/conversation-guide-stakeholders.md)
- [Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/stakeholder-interviews)

- [Mural board used for synthesis](https://app.mural.co/t/vsa8243/m/vsa8243/1585670923656/bff24beab7f02c50650b7d6f358a09399c2d6799)
