# Stakeholder interview with Andy Lewandowski

### Tell me about your role and what you did in your work for va.gov.

I joined the team in 2018 to work on the “merger project” to figure out how to integrate vets.gov -> va.gov. My UX superpower is IA, so most of 2018 was focused on figuring out where to put things, the unauth and auth content, and how. We would scale it and govern it.

In 2019, most of my work was building out the Drupal CMS and the new VAMC site and roadmap for that project.

I was designer in 2018 and product owner in 2019.

### Can you tell me about that process as it pertains to the logged in homepage/myVA experience?

I never implemented anything, but our biggest challenge with going from unauth to auth is (missed this). Our primary user is the veteran, families, and caregivers. There are thousands of pages in the unauth. (missed this part — might want to re-listen to interview)

When you move into auth, this is laser focused on veterans’ health care and benefits. As an unauth team, our biggest big picture idea is the unauth experience is all the marketing content, and all the stuff behind auth is that you already have the benefit. The auth experience shouldn’t be learning about benefits, you shouldn’t be reading through thousands of pages.

(Made bank analogy)

### Do you think it's an issue that we don't have Caregiver/family accounts?

Yes. This is an issue for privacy/legal reasons, but there is a solution — delegated accounts. When people sign up, they should be asked their role. The biggest issue for government is PII. Doing things properly would be doing actual delegated accounts. We’d have to figure out a technology “handshake” where the veteran is granting people access to their info (eg. family, POA).

### What problems have you noticed about the current logged in homepage and myVA experiences?

I do think it’s a problem. Most consumer logged in experience s change. There are affordances that people are signed it. Usually it’s a totally different design. I would love VA.gov to move towards a more mature experience where the signed in experience is completely different. Maybe a tool bar to indicate that you’re logged in.

The problem is that there is (a ton of content) that’s not “clean.” We have the working assumption that some customers are relying on the benefit hubs to navigate around when they are logged in. That’s something that your team should validate — are they using the main menus? I think the answer is no — it’s probably an invalid assumption. 

### What do you mean by “not clean”?

How benefit processes are organized at VA. Let’s talk about the GI Bill. In the private sector, there would be one product (eg. One application). In gov’t, there are 5 versions. At VA, there are single pages to learn/apply, but then there are also the “child” pages with additional requirements and eligibilities (for different circumstances). Our challenge was to simplify them as much as they could. That’s hard for the authenticated experience because you can’t provide a single link to the GI bill because we have to legally provide all the information.

People in gov’t say things like “our users don’t need to know about the intricacies of gov’t benefits or understand the edge cases.” I challenge that because the gov’t is so complicated that we are all forced to learn all the terminology. Veterans have all these groups and they know VA.

### How did you navigate the stakeholders and decision making process for the Top Tasks on the homepage? I imagine there were a lot of competing priorities and opinions to balance.

Because UX research is inherently qualitative, it’s hard to say the research trumps all of your opinions. You have to have a vision for what the solution is supposed to be, the solution needs to be tied to a problem statement, and it has to be tied to data. 

The North Star is to increase access to self-service tools. Reiterate that north star over and over again. We pulled data from all the top VA sites and used basic web analytics data and found the top 20 (tasks). These tasks account for 80% of why all veterans come to the website. So it’s not easy. (Talked about 80/20 rule).

And then there is also the digital service authority piece. That’s our job to have those convos to the stakeholders. That was nine months of storytelling to get OPIA to be OK with not having “above the fold” space for news stories. Have your story, your problem solution, and validate the hell out of it. Just let the veteran guide solution and use direct veteran quotes. 

Having said that because of the success of the (current homepage), I know when veterans are signed in, they go to the homepage to navigate their experience. (So we can make this personalized).

### I’ve heard there were talks when you were still on the team around "what if we make the logged out homepage a big thing that says 'you need to log in to manage your tools'", and have also wondered about the background behind why we don’t have a register or big call to action to encourage folks to create an account or log in. Can you elaborate on that at all?

Yeah — it’s around maturity. We did not feel like the account experience was mature enough to drive people to create accounts. So much of the work that was originally done was about cleaning up the backend/content experience.

Also, the other part was that consolidating is still happening (eg. MHV and eBenefits consolidating). (Essentially getting all the features into the site/one place). Part of this is also login related — getting DS Logon and MHV users to sign up for ID.me account.

### What is OPIA?

OPIA = Office of Public and Intergovernmental Affairs. They owned VA.gov before us. They still currently own the homepage.

If you were still on the team, what goals would you have for a new logged in homepage experience?

We’ve talked about it being a notifications-driven experience, but I do think whether it’s a notification or other type of logic, I think doing the work for users would be great. So, surfacing CTAs. So instead of having them dig through case status card for disability claim, maybe we just put a CTA on the homepage that says “upload evidence”. Rather than forcing them to click into a prescription tool to see where the Rx is, we should just tell them it’s one day away in Albequerque. We had a strategy that all tools would have API to power the homepage. So MHV controls Rxs, but we would need an API to get those additional details.

A homepage is only going to work when tools are built in as similar of a way as possible. If there are APIs for some, but not others, that would suck.

### Anything else?

Benefit exploration. When VA.gov becomes more mature, unauth and auth start to blend. So rather than do a big bang benefits navigator/explorer, we did one for each benefits hub. So we would start to do private sector things, we could make them create an account to see results. Or give us family info so we can send them family benefits.

There is also the native mobile app, but my question is always “why?” If everything is responsive, why go native? The top benefit of a mobile app is notifications. You’re already authenticated, so notifications just show up on your home screen.

I think there is enough research around the mobile app to show that veterans don’t care about exploring when they are on their phone. They are there for their transactions.

Education, disability, health care. That’s everything. And for the account experience, it’s your profile. Those are the flagship benefits. Everything else happens once. You apply for a home loan once. You apply for benefits and memorials once, or someone does it after you die. And if we want to push that, that’s a business experience. But we don’t need to build a whole experience around that. That would be weird.

### What concerns do you have about this project? 

I think the VA digital team is really big and there are a lot of talented people, but there are way too many people. There has to be a decision maker. My best idea would be around gaining consensus. I appreciate fresh thinking from new folks, but this institution requires a lot of knowledge about benefits and bureaucracy, so have informed people making the decision. When people make requests like “I want it to work like my Airbnb app”, you can’t and here’s why. So, reaching consensus of what this should be is the most important team. Each team need to all be working off of a common foundation, and I don’t think they are.

### Other experiences?

For healthcare, we have our healthcare websites, it’s a hospital system. For facility work, it’s google maps. That leaves education and disability and life insurance. So the closest thing will be banking and insurance experience. So Geico and State Farm. For banking, Bank of America, USAA, Chase.
