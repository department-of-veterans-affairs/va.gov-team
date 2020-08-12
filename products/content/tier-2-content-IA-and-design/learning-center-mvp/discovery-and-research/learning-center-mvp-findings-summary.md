# Learning Center MVP Research Findings 
----- DRAFT Updated 8/12/20 -------

**Digital Services Veterans Affairs (DSVA), VSA, Public Websites**

Liz Lantz, liz.lantz@adhocteam.us, 08/12/2020

View the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/usability-study-research-plan.md).

## Research Goals 

This study aimed to get feedback from Veterans on the Learning Center MVP concept in order to understand if the design supports the following goals:

1. Help Veterans find Tier 2 content in a way that doesn't dilute, distract, and clutter Veterans' benefit top task content and UX.

2. Increase self-service for Veterans, and those who support them, when they have questions about benefits or need to troubleshoot VA account problems.

3. Reduce calls to the call center and the need for in-person visits to VA locations to answer questions about benefits or to troubleshoot VA account problems.

## Research Methodology 

We conducted 45-60 minute sessions remotely using Zoom. Each session included a moderator and one participant, and started with a brief warm-up interview.  Participants then used InVision to review a [clickable prototype](https://vsateams.invisionapp.com/share/YJXZTKC6CN4) that contained the Learning Center homepage, a few articles, a few search results pages, and a benefit hub page.

Participants were asked to review the content under 2 scenarios:

1. Imagine you had recently moved and had to make sure the VA had your new address. How would you do that?
2. Imagine you need to find out how to get compensation for a Veteran who has been exposed to Agent Orange. How would you do that from here (an unrelated Learning Center article page)?

### Who we talked to

We spoke to 8 Veterans

-   3 women, 5 men

-   2 participants age 35-44, 3 participants age 55-64, and 2 participants age 65-74. 1 participant did not disclose their age.

-   5 Caucasian, 2 African-American, and 1 participant self-identified as Other

-   4 participants identified as having cognitive and/or functional disabilities

-   All had at least one benefit and an account with a va.gov website (eBenefits, MHV, and/or VA.gov)


### Research Questions

- Is the information easy to find using this search-focused, tag-based navigation?
- How easily are people able to navigate between learning center articles, and topics?
- Are the template labels (ex: FAQs, Checklist, About, Step-by-step, etc.) useful?
- What do people see as the difference between the learning center search and overall site search?
- Do people get confused if they click on a content link or CTA button in the learning center and it takes them to a benefit hub page? And vice versa?
- Do people understand that information they don't find in the learning center might be in the benefit hub?
- Where would the most useful place be to provide links to the Learning Center?

## Key Findings

The 5-10 top findings from your study should be listed here. Write your findings so that if someone reads only these bullets they can leave feeling they got useful information and the study was worthwhile. Examples might be "Most participants used the Search field to find the form, and searched for the term 'veteran health'" or "Most participants struggled with the secondary caregiver section on the form". See an example of this section [on the Caregiver findings document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/usability-testing-jan2020/research-findings.md).

1. Finding one
2. Finding two
3. Finding three
4. Finding four
5. Finding five
6. Finding six
7. Finding seven


## Details of Findings

### **The design of the learning center pages makes it easy to navigate and find information for most people.**

Generally, the design of the pages reviewed (homepage, topic results, and articles) made it easy for people scan pages,  find information, and understand any next steps. They used headings to scan pages, and then moved on to supporting text (e.g. article links under a topic section, or description under a search result) to get a deeper understanding of what they were looking at.  

No one experienced any confusion when landing on a new page in an article; some people even stated the page exceeded their expectations. 

> "It's not quite what I expected - It's cleaner. I"m used to seeing a jumble of links that's hard to understand."

The h1 and intro text was helpful for most participants in understanding the purpose of learning center when they initially landed not the homepage, but then was quickly skipped over as the sessions went on.  One person commented that the header and intro made it seem like they didn't go to the right place when landing on [Topics Tagged: Vietnam War Veterans](https://vsateams.invisionapp.com/share/2SYENAW6VKT):

> First off, this thing at the top (*mouses over header and intro text*), you don't even need that. It doesn't even seem like it went where I need to be when I clicked.

**Implications**

- The layout and typography patterns in the current designs will help Veterans easily search and find information.
- We should consider an alternative approach to the h1 and intro text being static on every page, for two reasons:
  - People skipping over the h1 and intro text on every page after the homepage suggests this information is redundant to them. 
  - On smaller screens, that content will fill the viewport. Depending on scroll position and the React behavior, it has the potential to make people feel like nothing happened after they click on something.

### The categorization of information throughout the learning center pages reviewed made sense to most people.

People felt the way the information was categorized on the homepage made it easy to understand what they could find in the learning center. When scanning the page, most people read links under the Audience section, and then lingered in the Topics area the rest of the time on the page. 

> I really like the way it’s laid out. If I was someone who didn't use a computer very much...I would be able to go in and get the information that I needed.

At various points in the session, we asked *"Show me how you would find...xyz"*. Most people went to the topic area of the homepage and selected the correct benefit category.  We know from previous research studies that Veterans come to VA.gov to complete benefit related tasks; it makes sense that they would also approach the Learning Center with a benefit-focused mental model, instead looking for information by audience. 

2 participants skipped over the `Find Articles by Audience` heading and went straight to the `You're a Veteran..` heading.  This set the expectation for them that clicking the `Show More` button would reveal personalized options for them to check their claim status, update address, etc.  

When reviewing a tag results page, participants understood that the content was scoped to that particular tag, and felt it was a helpful way to navigate the site.

> I think it's a very powerful, clean, and helpful presentation of the information.

As they reviewed search results pages, 6 of the 8 people didn't mention the topic and audience tags as something helpful in determining which article to click on.  The template labels on the search results did help set an expectation of the article format, although there was uncertainty about what a few of them meant (detailed below).

**Implications**

- The topic and audience labels in the learning center make sense our Veteran audience, and organizing information in this way will be helpful to those who browse links instead of perform a search.
- The participant's focus on Topics over Audience suggests that topics should be prioritized over audience on the homepage; however, this could be because the information we asked people to find was very much topic-oriented rather than audience-oriented. We should revisit this in future studies when we have a live environment that will encourage more natural behaviors.

### Having a centralized place to find benefit-adjacent information will reduce frustration for Veterans.

In the warm-up interview, people talked about giving up on trying to find answers online and calling someone to get the help they needed. Many people expressed frustration at having to navigate multiple VA websites to get answers to their questions.  

> I just gave up at that point, and called the 1-800 number. I didn't want to keep bouncing [between sites].

At the end of our sessions, we asked what people thought was or wasn't valuable about the learning center concept. Everyone stated they felt this was a valuable resource for Veterans, and many felt it was an improvement over what is available today.



### People had the perception that all benefit information would be available in the Learning Center.

At multiple times during the session, participants were asked where they would find content that is classified as `Tier 1` by DSVA. All participants said they would look in the learning center for this information, either by returning to the home page and browsing links by topic, or by searching the learning center.

When asked `How would you apply for a benefit you don't already have?` while on an LC article page, 4 of 8 participants went back to the topics section of the learning center homepage, and 2 of the 8 participants would use search within the learning center. 

> I'd go back [to learning center home] or I could search the learning center again, and put in "disability benefits" and hit search. 

Other participants stated they would do something similar, with

1. **Only half of the people thought the audience and topic tags were clickable; some expected them to apply a second layer of filtering on top of what they were already looking at.**

   Once people realized the tags were clickable, they stated the format of the results were what they expected. Some participants expected the tags to behave has a layer on top of whatever content they were already looking it (and didn't realize the Vietnam War Veterans page was about more than Agent Orange)

   > It doesn't look like it's clickable. It just looks like this is the audience.

2. **Template labels were helpful for most people when reviewing a list of articles, but there was ambiguity about what some labels meant.**

   7 of 8 participants noticed the template labels right away when reviewing the search result pages. The labels helped them understand there was a difference between similar sounding articles, and set an expectation for what they might find once they clicked. 

   > Video, that's good for people that may not be able to sit and just read.

   - `Step by Step` was clear to all participants.
   - 3 participants were unsure about the difference between `Question and answer` vs `FAQs` 

3. **Generally people understood the search functionality, but the various search options caused confusion for some. **

   The majority of people understood learning center search would focus the query in the learning center itself, and that overall site search was a broader, VA-wide search function. However, multiple people stated they thought the learning center content was related to benefits and benefit information, whereas overall site search would be more high-level `about the VA` content.

   

   Everyone understood that the search functionality was keyword based and were clear that the Learning Center radio option would search within the learning center.  

   - About half of the participants were unsure about what the `search VA.gov` radio button would do.
   - People understood the difference between the Learning Center search and the search in the navigation.  There was some uncertainty between the difference between the radio button options, and expectations varied regarding the results `search VA.gov` would return.

4. **People did not differentiate between the learning center and benefit hub.**

   - No one got confused going between content in the learning center and benefit hub.
   - **Recommendation:** Because the tasks were so specific, this should be re-evaluated when we have a live product on staging, or with a significantly more robust prototype that can more closely mirror a person's natural behavior when looking for information.
   - People didn't differentiate between the learning center or benefit hub.  
   - When asked about where they would find hub information while in the learning center (e.g. applying for a benefit they don't have), most people said they would search, and expected to stay in the learning center.
   - Question from Mickin: Are veterans separating benefits from learning center or is that totally a construct of ours that isn't resonating with Veterans?
   - Mostly true. 
   - Nobody acknowledged a difference going between the benefit hub or learning center, and nobody got confused.
   - People said they would search to find what they were looking for, but the tasks in the study didn't allow us to conclusively evaluate how people will look for something if they can't find what they are looking for.  Because we had a limited amount of screens that didn't include keyword searching, people would talk through where they thought they'd found something, but we didn't take it a step further to evaluate what they would do when they realized they were wrong.

5. **Most people stated they called someone after not being able answer their benefit or account related question online.**

   

6. **People browsed links over using search**

   1 participant primarily would use search and felt overwhelmed by the links on the page.

   When asked how they'd apply for a benefit they don't already have while in the learning center **X participants** returned to the learning center home page and browsed the links in the Articles by Topic section.

   

7. **Most people stated they would expect to find a link to the learning center prominently featured on the homepage, or somewhere in the site header**.

   - The majority of the people said they'd expect to see something about the learning center prominently displayed on the homepage, or somewhere in the site header.
   - 1 person expected it to be promoted offline in order to learn of its existence.

   > 



## Additional Insights

**Multiple participants who identified as having cognitive or functional disabilities were confused about why there would be two articles with similar sounding titles.**

We included articles with similar or identical titles on the search results pages to see whether or not template labels would help people determine which articles was most relevant. While the labels did help people understand that they were different, multiple people questioned why there were 2 articles in the first place. 

**Multiple participants who identified as having cognitive or functional disabilities did not think the titles on the [Agent Orange hub page](https://vsateams.invisionapp.com/share/FCYB790TDRM) were clickable**

The blue text didn't signify to them that the headings were interactive.

**X of 8 participants thought the name "Learning Center" felt right for this concept.**

- Before seeing the prototype:

  - 2 people expected something called "Learning Center" to contain information related specifically to education, or that it would contain educational content such as ` how to use the VA website` or `using Microsoft word`
  - 1 person described the Learning Center to be something that was totally dedicated to them, where they could learn about their claim status, prescriptions, etc.

- Veteran Assistance, Information Center, and Vet Scope were alternative name suggestions. 

  We'll need to ensure we are clearly communicating the kind of information available in the learning center, either through the name of the center itself, or the contextual language driving people to it.  A participant with TBI and PTSD stated:

  > The thing will be getting veterans that deal with short term [memory loss] like I do. You need something that drives us *toward* the learning center, because I wouldn't automatically go there to find these answers. "Learning Center", we're thinking what kind of baloney is this? How's this going to answer my question?

**Multiple people were unsure how the article results pages were sorted.**

People weren't sure if they were alphabetic

**Content-specific Feedback**

- People didn't immediately find the address information we asked them to find from the learning center homepage; about half of the participants went to their benefit topic area to update their address for that benefit.

- Language like "you **may** be eligible" is frustrating to some Veterans. 

  > "This is always a frustration for Vets [reads]: Depending on your type of benefit, you *may* be able to do this or that."

- Multiple Veterans were unsure about what calling 311 does; recommend adding more context around this on the website.

- Multiple Veterans expected to see information about the burn pit registry on the Exposure to chemicals and hazardous materials page.

- Multiple participants wanted to see information for a specific Veteran group.  Specific groups, many related to Veterans in distress, that were individually mentioned in the sessions (but not by multiple people) are listed below.  If a particular Veteran group doesn't seem themselves listed in a long list of audiences, they may feel frustrated, angry, or confused as to why they're left out.

  - Suicide information for Veterans at risk, and family members who thought a Veteran in their family may be at risk

    > "If you are experiencing depression or something, that should be a top link."

  - Resources for homeless Veterans

  - Help for Veterans who are overseas

  - PTSD assistance

  - Veterans who use service animals

**Multiple people expressed frustration with using site search on VA.gov.**

- Returns articles that send you away from the site to complete your task.

**2 of 8 Veterans understood the "You're a Veteran..." box to contain personal information specific to them**

- Expected the "show more" link to reveal actions they could take as a Veteran, such as check the status of a claim, viewing profile information, etc.

#### 

## Recommendations

#### Future Research Studies

- Evaluating search and navigability was limited in this study since we were evaluating a prototype and had to pose specific scenarios that people may not go through naturally, on their own.  Once we have the learning center available in a live environment, we should:
  - Re-evaluate the ease of navigating between the learning center and benefit hub, and 
  - Include tasks that encourage users to use the Learning Center search functionality so we can confirm that it is easy to use, and more accurately evaluate how they understand the difference between LC search and site search.
- We weren't able to recruit participants under 34 for this study. To get a better understanding the needs of younger Veterans, future studies should include the full spectrum of ages in our participant pool.
- To ensure we are meeting the needs of Veterans using non-laptop or desktop devices, we should test mobile versions of our designs. Once we have a product on staging (since prototyping tools are typically not great for testing with assistive tech), we should ensure to include users using assistive technology in research studies.

#### 

## Next Steps

Next steps here

## Appendix

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/product-outline.md) 

- [Convo Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/conversation-guide.md)

- [Prototype we tested](https://vsateams.invisionapp.com/share/YJXZTKC6CN4)

- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/participant-notes)

- [Synthesis spreadsheet](https://docs.google.com/spreadsheets/d/1lZIUPcOgn9YiEqXzkpaXLGSw06rv-RA36Kz56K3x9UM/edit?usp=sharing)

  

