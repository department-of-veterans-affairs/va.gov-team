# Using digital communications and evolving interactions to ensure the VA can continue to serve during COVID-19

## What is the opportunity?
We are currently in the midst of an unprecedented global pandemic, which is creating a marked increase in demand for both information and services from veterans and dependents. [DATA DATA — call center wait times, medical center wait times, spikes in internet traffic.] To take some of the load off the medical centers, VA.gov is currently directing veterans to call in before coming in, but that in turn is leading to strain on the call centers. [DATA DATA DATA — about call centers]

We suspect that veterans are seeking information about COVID-19 from the VA in particular because other information sources such as the CDC and WHO aren’t providing answers to veteran-specific questions and concerns. Additionally, as the medical provider for millions of veterans (and the largest integrated health system in the nation), the VA is the first point of contact for veterans with questions about their health and wellbeing.

So far, we’ve created an FAQ page on VA.gov that attempts to answer some of these veteran-specific questions and also direct veterans to where they can receive services. It’s helping, but we’re continuing to see increased load and wait times.   

Our hypothesis is that by creating an interactive digital tool, such as a chatbot, we can more directly provide answers to veteran questions and better direct them to resources. To best respond to this quickly changing situation, it would have to be easy for subject matter experts to update the information this tool would provide. This would then take load off of the call centers and medical facilities by enabling veteran self-service, lessening the time it takes services to be rendered, or by providing services remotely instead of in person.

While most of the new demand that is straining the system is related to COVID-19, it’s important to note that for the most part, capacity is capacity and we could potentially meet the surge in demand by answering non-COVID related questions and serving non-COVID related needs as well. This also means that after COVID-19 is resolved, this system could be extended to more generally improve veteran experience and make better use of our limited resources.

## How will we measure success?
**We’re hoping to:**
- Decrease (measurable) wait time or overload of call centers
Increase usage rate (uses over people visiting a page where it can be accessed) of the tool, both over time and in comparison to current FAQs and information websites
- Maintain a low “bounce rate”, where bounces are defined as users not interacting with the tool in a substantive way. (We’ll have to define this more specifically once we know what the tool is.)
- Increase (after creating a baseline) task completion rate. We’d measure this by specifically asking at the end of an interaction if we met the veteran’s needs and/or answered their questions completely and/or helped them find the information they were looking for and/or effectively routed them to someone or something that could help.
- Increase (after creating a baseline) the rate at which veterans are able to meet their needs via self service. We’d measure by looking at the group of veterans who rated their interaction as successful and then seeing if that interaction was resolved only with the tool.

## Next steps
Given the need for quick action, we would first use SaaS and open source software to quickly stand up some kind of chatbot. It would contain the information from the current FAQ and be able to provide that information in response to natural language questions. This will serve as our “minimum viable product” to test if this idea is helpful to veterans and serves their needs, and we’d hope to get it live in days, not weeks or months, and test it with a smaller percentage of users.

From there, assuming that veterans found it valuable and it helped per our success criteria, we’d roll it out to a larger group, build the capability to easily change the content, and use that capability to include additional and updated information (e.g. call center scripts and updated guidelines based on changes). We’d also seek to include some light personalization based information provided by the user (e.g. asking for their zip code and then giving them information on how to get tested for COVID-19 nearby).

After that, we’d start integrating with other VA services and layering on personalized experiences based on veterans-specific data (that they would have to log in to experience). We’ve not yet researched what would be most valuable, but we are considering integrations that would allow for things like appointment rescheduling or connecting directly with a provider via CirrusMD.

**Notes and outstanding questions**
- What are the primary needs people are trying to get met around COVID-19? What are the primary needs people are trying to get met in general, outside of COVID? (Requested info via Chante).
- How can we reuse software/not reinvent the wheel?
- How can we test our hypothesis without building too much?
- What are some options on technical approach? How do we weigh those options?
- What’s the best interaction pattern? Are chatbots the right answer?
- What are all of the communication channels that veterans use to reach the call centers and medical facilities? If the game is to help capacity by intercepting veterans and meeting their needs earlier and easier, where can we intercept them?
- It’s not just about having the answers, it’s about pointing people to the right resources — veterans don’t know who to call or where to go with their questions. A lot of things say “call your doctor” but vets don’t know what that means. Could we tie into locator and give them a phone number based on their zip code?
- We talk about taking strain away from “call centers’ — but which ones are experiencing strain? VA 311? Medical centers? Both/either?
- What kind of other systems can we integrate with to extend functionality? Can we escalate and put people in a queue via virtual hold/callback? Can we determine user location to give localized responses? Can we escalate to an MD via CirrusMD or allow folks to self-triage via Annie?
