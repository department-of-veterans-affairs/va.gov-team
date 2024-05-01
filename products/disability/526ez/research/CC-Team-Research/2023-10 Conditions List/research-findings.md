# Conditions List Veteran Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, Contention Classification**

Date: 11/15/2023

[Eva Heintzelman] [<eva.heintzelman@va.gov>, [evaheintzelman\@navapbc.com]

[Sudeepti Bhatnagar] [<sudeepti.bhatnagar@va.gov>, <sudeepti@navapbc.com>]


**Jump to:**

- [Research Goals](#research-goals)

- [Research Questions](#research-questions)

- [Methodology](#methodology)

- [Hypotheses and Conclusions](#hypotheses-and-conclusions)

- [Key findings](#key-findings)

- [Detail of findings](#detail-of-findings)

- [Recommendations](#recommendations)

- [Additional insights](#additional-insights)

- [Next Steps](#next-steps)

- [Further research needed](#further-research-needed)

- [Appendix ](#appendix)


## Research Goals

On the 526EZ form for submitting a disability claim online, there is a screen where Veterans are asked to enter the conditions they want to claim. This screen is used for new claims only (and not for claims for increase). 

On this screen, a text input field with type-ahead (called the autosuggest component) leverages a suggested conditions list to present options to the user as they type. Through this research study, we wanted to test this existing autosuggest component with a revised version of the suggested conditions list. The revised list aims to provide VSRs with clear information about a Veteran’s claim and to write terms so they are understandable to Veterans. See [Conditions List Guiding Principles.](https://github.com/department-of-veterans-affairs/vagov-claim-classification/blob/main/collab-cycle/202310%20Redesign%20Suggested%20Conditions%20List/Conditions%20List%20Guiding%20Principles.md) 

- Goal 1: Learn how Veterans think and talk about what conditions to claim.

- Goal 2: Assess whether a type-ahead field with autosuggestions is a usable/desirable way for Veterans to name conditions they want to claim. (and evaluate the component overall for usability)

- Goal 3: Evaluate the revised conditions list. 

The most relevant touchpoints in the [Veterans journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) are Getting out (for Veterans submitting Benefits Delivery at Discharge or BDD claims prior to transitioning), Starting up, and Taking care of myself.


## Research Questions

Goal 1: Learn how Veterans think and talk about what medical conditions to claim.

- How do Veterans decide to file a claim, and for what medical conditions? How do they describe their medical condition?

- How familiar are Veterans with commonly rated disabilities or with resources like the rating schedule?

- How do they prepare to file a claim, and what resources do they use as they prepare? What people or organizations do they seek assistance from? 

Goal 2: Assess whether a type-ahead field with autosuggestions is a usable/desirable way for Veterans to name conditions they want to claim. (and evaluate the component overall for usability)

- What are Veterans thinking about when they come to the condition field where they are instructed to “Please tell us the new conditions you want to claim”? What does it mean to them?

- What do the autosuggestions represent to the Veteran? What are they a list of?

- Do Veterans understand that they have the option to type in their condition? Did they read and understand the introductory copy?

Goal 3: Evaluate the revised conditions list.

- Are Veterans able to find their conditions from the autosuggestions? How do they go about evaluating the autosuggestions and choosing from multiple options?

- (if a Veteran selects from the autosuggestions), do they edit the content or just leave it as it is? Do they feel like they should provide additional information within the field?

- (If a Veteran understands that free text is an option), how do they decide when to choose from the autosuggestions and when to type in their condition?

- If a Veteran can’t find their condition, how does this make them feel?

- Does selecting from the list give Veterans confidence in what they submitted? Do they think the VA has what it needs to understand what they are claiming?


## Methodology

We conducted hour-long remote moderated research sessions via Zoom from October 18-24, 2023 to get feedback on a [codepen prototype](https://codepen.io/ccteam/live/poqxVpB) and to conduct a semi-structured interview focused on past experiences with disability claims and future plans to submit additional claims. The codepen prototype replicates the existing autosuggest component functionality but uses the revised conditions list as the source for autosuggestions. 

Participants were instructed to use the prototype to enter conditions they had claimed for previously or conditions they intended to claim for in the future. After using the prototype based on their actual conditions, we provided participants with 3 mock scenarios and asked them to enter conditions based on the mock scenarios. 

Screenshots of the codepen prototype are in the Appendix. 

**Limitations**

- This report's findings are based on our observations and conversations with 8 Veterans. Due to the small sample size, we cannot conclude this is representative of all Veterans.

- Participants provided responses based on their past experiences or speculated about a future claim. It's important to note that our study did not involve observing Veterans in the real-time process of filling out actual claims, so their responses in a real-world scenario might differ.

- This research did not have representation from some [underserved communities](https://docs.google.com/document/d/1f-9T1a-HhlNzEmy9P08BqzT0cDupKrLq0Z2X2s2C3GU/edit#heading=h.p1juwkww2s0z). 


## Hypotheses and Conclusions

Hypothesis statement: ("Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”)

- The way we write terms for the suggested conditions list can have an impact on findability for Veterans and actionability for claims processors. 

  - LIKELY TRUE:  If the condition existed in the list, participants could find their condition in most cases. In cases where a Veteran could not find a relevant term, the issue appeared to be less about how the term was written and more related to weaknesses in the algorithm driving autosuggestions. We could not evaluate actionability for claims processors through this study.

* Veterans with the most common conditions will be able to find their condition.

  - DEFINITELY TRUE: The list included the most common conditions such as tinnitus, hearing loss, PTSD and migraines, and Veterans were able to find these conditions. 

* We think that Veterans will expect that auto-suggested conditions meet the needs of the VA.

  - MOSTLY TRUE:  Participants had confidence in their selections most of the time. There were a few instances where participants would have preferred an autosuggestion more specific to their condition (or the ability to enter free-text to describe their condition, which not all participants realized was a possibility).

* We think the amount of prep and type of support Veterans receive in filing a claim will have implications for how usable the concept is for them.

  - LIKELY TRUE:  Participants who knew the name of their condition found the concept usable (when their condition was in the received conditions list). Some participants preparing for future claims did not have a condition name in mind (e.g., they typed in something general like “breathing”) and the concept was not usable in those situations.


## Key Findings

1. [Most participants found the component easy to use for entering and saving conditions.](#most-participants-found-the-component-easy-to-use-for-entering-and-saving-conditions)

2. [Participants selected conditions from the autosuggestions most of the time.](#participants-selected-conditions-from-the-autosuggestions-most-of-the-time)

3. [Some participants faced difficulties finding their conditions in the suggested condition list.](#some-participants-faced-difficulties-finding-their-conditions-in-the-suggested-conditions-list)

4. [Besides the search, other page and component elements caused confusion and interaction difficulties.](#besides-the-search-other-page-and-component-elements-caused-confusion-and-interaction-difficulties)

5. [Some participants did not realize they could submit free text within the same component that offers autosuggestions.](#some-participants-did-not-realize-they-could-submit-free-text-within-the-same-component-that-offers-autosuggestions)

6. [Most of the time, Veterans know what conditions they have based on what they are experiencing, past medical exams and diagnoses, even if they sometimes forget the exact term. For many Veterans, the bigger challenge is understanding what conditions can be service-connected.](#most-of-the-time-veterans-know-what-conditions-they-have-based-on-what-they-are-experiencing-past-medical-exams-and-diagnoses-even-if-they-sometimes-forget-the-exact-term-for-many-veterans-the-bigger-challenge-is-understanding-what-conditions-can-be-service-connected)

7. [Veterans are concerned about the accuracy of their claim, but the nature and degree of concern varies.](#veterans-are-concerned-about-the-accuracy-of-their-claim-but-the-nature-and-degree-of-concern-varies)

Additional Insights

8. [Veterans submit disability claims for new conditions at various times in their journey as a Veteran and for various reasons. Relevant support and resources to prepare and submit their claim will depend on these circumstances.](#veterans-submit-disability-claims-for-new-conditions-at-various-times-in-their-journey-as-a-Veteran-and-for-various-reasons-relevant-support-and-resources-to-prepare-and-submit-their-claim-will-depend-on-these-circumstances)

9. [It is not technology that holds Veterans back from submitting disability claims digitally. Veterans who plan to use VSOs in the future (in lieu of submitting online) seek a trusted resource to support them.](#it-is-not-technology-that-holds-Veterans-back-from-submitting-disability-claims-digitally-veterans-who-plan-to-use-vsos-in-the-future-in-lieu-of-submitting-online-seek-a-trusted-resource-to-support-them)

10. [Using a VSO for disability claim submission can mean relinquishing control.](#using-a-vso-for-disability-claim-submission-can-mean-relinquishing-control)


## Details of Findings

### Most participants found the component easy to use for entering and saving conditions.

"Yeah, as far as this, I mean, it was fairly straightforward and fairly simple. I didn't see any problems as far as getting the symptoms that I wanted." - P2

- Participants generally entered and saved their conditions quickly and with ease.

  - Many participants noted how easy the component was to use, describing the experience as “easy peasy”,“uneventful, not very challenging,” and “pretty straightforward.” 

  - One participant commented the component was similar to a web search, in that you type and a list of suggestions appears. 

  - Participants typically moved very quickly through the exercise, entering and saving multiple conditions without prompting or assistance. 

  - Participants were able to complete the exercise on both desktop and mobile. 

- Every participant successfully entered at least one condition.

  - Across all participants, 87% of all tasks were successful. (See actual situation results in [summary of usability findings](https://docs.google.com/document/d/1f-9T1a-HhlNzEmy9P08BqzT0cDupKrLq0Z2X2s2C3GU/edit#heading=h.1kinmttnmz6t)). 

- All participants comprehended that autosuggestions were medical conditions.

- Combining plain language with medical terms in a single condition name, like "lateral epicondylitis (tennis elbow)," proved helpful for participants in finding their desired term. Participants did not seem bothered by the additional name and, simply, chose the option that included what they were looking for.


### Participants selected conditions from the autosuggestions most of the time.

“I like this one, I like the prewords that are already set up so I don’t have to come up with some new terminology, it’s already here. I like that part” - P3

- Participants used autosuggestions 83% of the time, exceeding the historical autosuggestion rate of 60%. 

  - While this is a small sample set, it gives us confidence that the revised list is reasonably comprehensive, since participants were able to find most of their conditions.

  - However, 50% of the participants believed they had to use the autosuggestions and were unaware there was a free text option. This may have pushed up the autosuggestion rate. Read more about that [here](https://docs.google.com/document/d/1f-9T1a-HhlNzEmy9P08BqzT0cDupKrLq0Z2X2s2C3GU/edit#heading=h.1rd1gffqfzb2). 

  - Examples of what people typed and selected: 

    - TINN and selected “tinnitus”

    - KIDNEY and selected “chronic kidney disease” 

    - GOUT and selected “gout in foot, bilateral” 

    - LOWER BACK and selected “lower back sprain (lumbosacral sprain)” 

- Some participants preferred selecting from autosuggestions, believing it would help more efficiently process their claim. 

- Participants appreciated the autosuggestions because they saved time, ensured accurate spelling, and allowed them to see plain language variations.

- Some participants discovered conditions while browsing the list, even if they were not initially searching for them, and either selected them immediately or added them later.

  - Similarly, one participant originally typed “right” but changed it to “bilateral” when they saw that option in the list. 

- In only one instance did a participant use the free-text entry for a term represented in the autosuggestions. The participant typed in “hearing” and quickly saved instead of reading and selecting the first autosuggestion (“hearing loss, other than tinnitus”). 

  - The remaining five free-text entries occurred because participants couldn't find their desired terms in the list. This happened either because they used general terms, their specific condition wasn't in the list, or the search didn't retrieve their condition based on their input.


### Some participants faced difficulties finding their conditions in the suggested conditions list. 

“If I just type in ‘a’, I’m seeing lots of different words with ‘a’ in it. That is not much help. Especially since they are not all words that begin with ‘a’. It’s got an ‘a’ at the end of the word. Why are you looking for pneumonia if you are typing in an ‘a’.” - P2

“ ‘Right hip’ does not pull up something, that is how I would enter it and nothing pulls up. This tells me the algorithm is not capturing everything. When I type in just “hip” things show up.” - P5

- Some participants had conditions that were in the list but were unable to find them.

  - One participant searched for "torn ACL" and upon not finding it in the suggested conditions list selected "knee instability" as the best option.

    - In the list, it appears as “ACL (anterior cruciate ligament) tear, left/right/bilateral” 

  - Another participant searched for “Renal cell carcinoma” and, upon not finding it, submitted it as free text. 

    - There is a term for kidney (renal) cancer,” but it only appears when one types “renal” and not if they type “renal cell” 

- Notable absences in the suggested conditions list included “frostbite”, “hip strain” and “ankle sprain.” 

* There is “knee strain or sprain”, “shoulder strain”, “neck strain” etc. but not “hip strain”

* One participant searched repetitively for "ankle sprain" by typing "ankle," "sprain," and "ankle sprain” 

- Participants observed that some autosuggestions appeared unrelated to the search term, causing confusion.

  - When typing “hearing” for “hearing loss”, the top autosuggestions are “hearing loss, other than tinnitus”, “bulimia”, “anorexia”, “heart murmur and congestive heart failure (CHF). See image 1 below. 

  - People who type quickly and review the autosuggestions after typing the full term might miss seeing the most relevant autosuggestion. 

    - Typing “vision impairment” did not bring up a relevant autosuggestion, but typing “vision” brings up “visual impairment, including blurry vision, blindness, and double vision” as the first option.

  - Typing right/left/bilateral before the condition name will fail to bring up relevant results vs. typing the condition name first.

    - One participant observed this behavior and after typing “right hip” searched again for just “hip” to pull up relevant hip conditions.

- Some participants used broader terms like "PAC" for PACT Act-related conditions or "Derma" for dermatological conditions, perhaps expecting related conditions to appear or to be able to select the general term. However, the component displays suggestions that most closely match the participant's input string, which might not align with their expectation. 

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image6.png)                  
###### Image 1: Autosuggestions for  “hearing”

### Besides the search, other page and component elements caused confusion and interaction difficulties. 

“I did have to think for a second. Like how do I save it? I think you saw me scroll down? I was expecting it to be like, just save, but then when I scrolled passed it and saw save. I thought that has to be how I save it.” - P8

- The sequence of actions on the page confused some participants, with two individuals unsure whether they should tap "Save" or "Add Another Condition" first.

- For participants entering free-text, the method for saving the entry was not intuitive (see quote above). Participants have to either scroll past the autosuggestions and click save; or click out of the text box (which removes the autosuggestion box from view) and then click save. 

- Participants often needed to scroll and scan autosuggestions extensively, leading to difficulties in locating specific items. 

  - One participant misclicked but quickly corrected their selection when they realized the mistake.

- For the most part, participants navigated the left/right/bilateral options for specific conditions without significant issues. However, the suggested list does not organize the terms by body part (i.e., bursitis in knee, bilateral; bursitis in knee, left; bursitis in knee, right), so participants had to scroll and read carefully in order to select the right option. 

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image5.png)


###### Image 2: Autosuggestions for  “bursitis” 

### Some participants did not realize they could submit free text within the same component that offers autosuggestions.

“Neurological is what I’m looking for, but I don’t see that populate there, which is why I’m having an accredited Veteran service organization to help me. I would be at a standstill here. I wouldn’t know what to enter since nothing else populated” - P1 

- Four of eight participants were unaware of and did not utilize the free-text functionality.

  - This sometimes led participants to choose the closest related autosuggestion option even if it wasn’t what they were looking for.

- While the instructions did indicate that users could enter their conditions, only two participants read the full instructions. 

  - Upon asking participants to read or re-read instructions after completing the testing, all participants understood there was a free-text option.


### Most of the time, Veterans know what conditions they have based on what they are experiencing, past medical exams and diagnoses, even if they sometimes forget the exact term. For many Veterans, the bigger challenge is understanding what conditions can be service-connected.

“I wouldn't have known that that was a condition that the VA would have considered. For example, let's say the renal cell carcinoma. I didn’t get that until 2009 and I left the service in 77. So that was something they \[the VSO] suggested that I put in there that I would not have considered.” - P2

_Limitation: During usability testing, we asked participants to go back in time and imagine they are filling out the form for a disability claim that they previously filed, or to imagine they are ready to file for a new claim they have plans to submit in the near future. We did not observe Veterans as they are filling out real claims. It could be that in some cases Veterans know the names of the conditions based on how they were eventually rated, and this is not reflective of their knowledge at the time they submitted the claim._

- All 8 participants referenced having knowledge of conditions because of prior health experiences, medical exams, or diagnoses.

  - One participant typed “respiratory,” and nothing came up that he recognized as his condition. On follow-up, he explained that he would go back and check his medical records to “find the right word.” It appeared that he had knowledge of his condition and simply could not recall the medical term. 

- Two examples of exceptions, where a participant was not knowledgeable about a condition and did not appear to have a medical diagnosis, came up during this research study.

  - One participant talked about a VSO recommending that they apply for tinnitus since this affects so many Veterans, and statistically speaking it is likely he has it.

  - One participant had plans to file a new claim for PACT Act related conditions but did not have specific conditions in mind yet. He appeared to be working from the assumption that he could get compensation for something, since he was “in that environment.” 

- Participants used outside resources to understand and determine service connection. For some, this entailed independent research, such as by looking at lists of compensated disabilities available on \[va.gov]\(http\://va.gov) and other resources on the internet (”there is a plethora of information out there”). For others, this entailed getting assistance from VSOs to determine what conditions they should apply for.


### Veterans are concerned about the accuracy of their claim, but the nature and degree of concern varies.

“I would be worried that they would just throw it out immediately because I’m selling \[describing] it as an ankle sprain when this is a claim for post-traumatic arthritis.” - P8

- 3 of 8 participants explicitly expressed concerns that their claim might get thrown out or denied if they do not describe their condition accurately, either with an autosuggestion or free-text entry. An additional 2 participants expressed concerns that accuracy could impact efficiency in claim processing. They wanted an accurate description to “streamline things'' or not “waste doctor’s time.”

- Some participants expressed a desire to describe their condition more fully or accurately than the relevant autosuggestion:

  - “But pes cavus does not totally describe it \[his foot condition]. It is just a partial description. If my purpose in filing the claim is to get acknowledged and rated for it and then I get denied, then I would have not done myself justice by not giving it a more complete description of the issues.” P1

  - “I felt like it \[the term ‘rhinitis’] was not accurate. So then I would have concern as to if I would possibly be denied because it’s the wrong classification. I definitely would have preferred if it had said allergic rhinitis.”

- Some participants expressed greater trust in the process than others by suggesting that even if a medical condition is not described optimally, they could still get an exam, and the process could move forward from there.


## Recommendations 

Keep

- Text input with type-ahead functionality.

  - This is appropriate for this use case since Veterans usually know their condition. While we can improve the implementation, we do not need to pivot away from this concept altogether.

- Current approach for writing terms for the suggested conditions list. Having plain language and medical variations together in a term is helpful. 

  - Over time, add new terms to the list, working down the list of most frequently awarded disabilities.

- Right/left/bilateral in condition name. Exploring alternative methods for collecting this information could be considered in future updates; however, it is not a current priority.

Change

- Improve the component interaction design and instructions.

  - Make it more evident there is a free-text option while still encouraging Veterans to use an auto-suggested term where accurate. 

  - Improve the clarity of the interaction between saving and adding a new condition.

  - Reduce need for extensive scrolling, for instance, by changing the requirement to display 20 autosuggestions every time, only providing suggestions after a minimum number of letters are entered, and/or gradually reducing the list as a user types in more. 

  - Consider including an additional (optional) text field where Veterans can add additional detail about their condition.

- Make instructions shorter and to the point. Place longer text in accordions so that users can view them as needed.

- Update the conditions list to ensure the most common conditions, especially musculoskeletal, are represented. 

Explore

- Technical solutions to improve the relevance of autosuggestions. The current component employs [“Levenshtein distance”](https://en.wikipedia.org/wiki/Levenshtein_distance)  to propose terms that most closely match the user input string. We can improve on simple string matching. 

  - Prioritization criteria might consider: 

    - Frequency of condition

      - Example: Terms are weighted by frequency of award.

    - Semantic relationship with user input 

      - Example: If the user types in dermatology, suggested terms will include the most common dermatological conditions. 

  - Other potential improvements

    - Give a lower weight to words like “right,” “left” and “bilateral.” It is more important that a user first find the relevant condition, before selecting among variations of a condition.

    - Split apart every term into words so that the string match can be on any word in the term.

    - Group variations of the same condition together.

      - Example: “ankle sprain, right,” “ankle sprain, left,” and ankle sprain, bilateral” are grouped together on the list. 

    - Require a minimum “match score,” while using the current matching algorithm or an upgrade, so that only terms that meet this minimum threshold render as autosuggestions.

- Ideas for Veterans who would benefit from more support to identify potential conditions, understand what conditions are, and to determine service connections. Here are some ideas (many of which have been discussed previously):

  - Interactive tool to help Veterans identify conditions to apply for based on their service dates and any other available personal information. See \[PACT Act wizard]\(https\://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pact-act-wizard) concept that is being explored by another team. 

  - Pathway for users to start from a broader category and narrow to a specific condition from there, rather than having to start by typing a specific condition. 

  - Browsable medical dictionary of the more commonly rated disabilities.

  - Prompts or in-text guidance to help them remember and submit any related or secondary conditions. 

Monitoring and testing

- Compare autosuggestion usage after the release of the revised list with historical usage. Track usage over time, as we add more terms to the conditions list.

- Periodically analyze free-text entries to identify patterns where free-text is used instead of an equivalent term on the suggested conditions list. This might suggest that a term should be updated or the solution for autosuggestions could be improved. 

- Assess Veteran confidence in the accuracy of their entries when testing future design ideas. 


## [Additional Insights](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#additional-insights)

### Veterans submit disability claims for new conditions at various times in their journey as a Veteran and for various reasons. Relevant support and resources to prepare and submit their claim will depend on these circumstances.

Our research identified these reasons for filing, broken out by time period in the Veteran’s journey. 


#### Reasons for filing: On transitioning out of the military (either prior or soon after)

“I was able to make that priority when I got out of the military. Even before starting a job search and all that. Take care of yourself first because your body’s been broken, beaten up for the past 30 years. Also if you don’t file it when you first get out, it may not be admissible later on.” - P7

- Experienced health problems that were clearly related to time in service.

- Received guidance from colleagues and through formal programs like TAP (Transition Assistance Program) to apply for disability compensation. 

- Were motivated to apply prior to discharge, because claims filed through the Benefits Delivery at Discharge (BDD) program are given priority.


#### Reasons for filing: Post-service period

“I didn’t even realize that I could file a claim for years, you know, I just suffered through it.” - P6

“When they pulled my pension. That was the beginning of the year. I knew it was coming ‘cause they told me. My income was almost cut in half. And I saw all these other people are getting service-connected disabilities. And I thought let’s find out how many of mine are service-connected and went from there.” - P2

- Missed claiming some conditions on their original claim. It can be challenging to capture everything on the original claim, since there can be a lot of conditions.

- Developed a new condition

  - secondary condition (condition that is linked to an existing service-connected disability)

  - new condition that can be service-connected

- Newly eligible due to a legislative change, such as PACT Act

- Experienced a life event that let them to apply

  - On retirement, lost VA pension and viewed disability compensation as a means to replace lost income.

  - Through help from professionals, they learned they could get compensation for conditions.


#### Recommendation

- (Nice-to-have) Analyze historical data to get a better understanding of how people submitting new claims on va.gov today break down into these various categories.

- Use learnings to help the team understand the primary use cases we are designing for and to guide future research with Veterans. 


### It is not technology that holds Veterans back from submitting disability claims digitally. Veterans who plan to use VSOs in the future (in lieu of submitting online) seek a trusted resource to support them.  

“It’s a little intimidating filling out these forms. I don’t think I’ll be doing it myself. I will work with someone to go over it and make sure I’m doing it the right way.” P3

- Most participants were comfortable with using the digital form (or at least the part we presented) for submitting disability claims. The caveat here is that we screened participants for those who have used va.gov in some capacity, so we were not capturing Veterans who never use va.gov. 

- Of the 6 participants who had plans to submit a future claim or appeal, 3 planned to submit on va.gov, 2 planned to submit using a VSO, and 1 was unsure what approach to take. Reasons for seeking help from a VSO included:

  - wanting someone to check everything for them,

  - wanting someone to help them if they got stuck on the form, or

  - wanting someone to help them with medical terminology.

- 2 participants talked about VSOs helping them determine what conditions are admissible and what not, and even helping them identify conditions that they would not have thought to submit for without the support of a VSO. 


#### Recommendation

- Find ways to incorporate what works about VSOs into the online disability claim experience.

- Consider a hybrid self-service (online) with assistance model for those Veterans who are comfortable working through a digital form, but would like support from a trusted resource. 


### Using a VSO for disability claim submission can mean relinquishing control. 

- One participant was especially frustrated with his VSO experience: “\[The VSO] submitted it so I don’t know how they submitted it. Again lack of contact, lack of response, lack of information was just appalling.” P2

- We asked other participants who submitted with VSOs how their information was submitted, and with one exception, all were not aware how their claim was submitted (e.g., online or paper).

- One participant talked about his experience submitting with a VSO on transitioning out of the military. He described filling out information digitally and having to let his VFW representative know when it was completed so that VFW could go in and finish submitting the claim. While it is not clear whether this was a va.gov submission or another method, it appeared to be a positive experience and one that provided for transparency and control, coupled with support.


#### Recommendation

- Digital submission methods make collaboration among multiple parties easier. This could be a selling point as VA works to develop digital tools with VSOs. 


## [Next Steps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#next-steps)

- Share findings and recommendations with the Contention Classification team and, more broadly, with the all Benefits portfolio teams. 

- Revise conditions list prior to release to production. 

- Iterate on the autosuggest component based on recommendations above. 


## [Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#further-research-needed)

- None at this time. 

- A nice-to-have for the future is observational research of Veterans completing disability claims, especially new filers. Our goal would be to get a truer picture of Veterans’ preparedness and understanding of their medical condition at the point of submission, and how they complete the screen for adding conditions. 


## [Appendix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#appendix)

### Summary of usability findings

#### Testing scenarios and definition of success

- Actual situation

  - Each participant entered conditions (multiple tasks) based on their actual experience.

  - Definition of success: The participant saved a condition using the autosuggestions or free-text and was confident in their entry.

- Mock scenario 1

  - Each participant entered a condition (one task) based on this scenario: “You hear a ringing or hissing sound in your ears. You believe that this is due to operating loud machinery during your active service." 

  - Definition of success: The participant selected "tinnitus (ringing in the ears)" or wrote free-text indicating tinnitus. 

- Mock scenario 2

  - Each participant entered a condition (one task) based on this scenario: “Your right knee bothers you on a daily basis. You tore a tendon in the knee during active service and since then the knee has never recovered fully. It is painful when you walk downhill or try to kneel or squat. "

  - Definition of success: The participant saved a condition using the autosuggestions or free-text and was confident in their entry.

- Mock scenario 3

  - Each participant entered a condition (one task) based on this scenario: "You have developed bursitis in your right knee. "

  - Success: The participant selected "bursitis in knee, right" or wrote free-text indicating this. 

|                              | Actual Situation |                             Mock Scenario 1 |                                                                                    Mock Scenario 2 |                             Mock Scenario 3 |
| ---------------------------- | ---------------: | ------------------------------------------: | -------------------------------------------------------------------------------------------------: | ------------------------------------------: |
| # Participants               |                8 |                                           8 |                                                                                                  8 |                                           6 |
|                              |                  |                                             |                                                                                                    |                                             |
| **# Successes**              |               40 |                                           7 |                                                                                                  8 |                                           6 |
| **# Failures**               |                6 |                                           1 |                                                                                                  0 |                                           0 |
| **Total tasks**              |               46 |                                           8 |                                                                                                  8 |                                           6 |
|                              |                  |                                             |                                                                                                    |                                             |
| **# Autosuggestion entries** |               33 |                                           7 |                                                                                                  6 |                                           6 |
| **# Free-text entries**      |                7 |                                           0 |                                                                                                  2 |                                           0 |
| **Total successful entries** |               40 |                                           7 |                                                                                                  8 |                                           6 |
|                              |                  |                                             |                                                                                                    |                                             |
| **Success rate**             |             87%  |                                        88%  |                                                                                              100%  |                                       100%  |
| **% Autosuggestion entries** |              83% |                                       100%  |                                                                                               75%  |                                       100%  |
|                              |                  |                                             |                                                                                                    |                                             |
| **Notes**                    |                  | Participants selected a term very quickly.  | 5 of 8 participants took time considering options, before deciding on one of the autosuggestions.  | Participants selected a term very quickly.  |


### Research materials

\[Research plan]\(https\://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/research-plan.md)

\[Conversation guide]\(https\://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/conversation-guide.md)

\[Interview transcripts]\(https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/Session%20Notes)


### Tools used for Synthesis

\[Enjoy HQ]\(<https://app.enjoyhq.com/sh/pj/7bdc10d7-a57b-4857-b65b-771da3aaa4b3>)

\[Mural]\(https\://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1698344523002/9bc106f3b4fb78a53bb30e1173483ecb7cf9020c?sender=u3cbfbd276d5e2d09954c4362)


### Pages and applications used

\[Codepen prototype] (<https://codepen.io/ccteam/live/poqxVpB>)

1\. Introductory page

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image2.png)

2\. Screen for entering conditions to claim

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image3.png)

3\. Example of type ahead functionality 

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image4.png)


### [Other supporting documents created](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#other-supporting-documents-created)

\[Revised conditions list]\(https\://github.com/department-of-veterans-affairs/vagov-claim-classification/blob/main/collab-cycle/202310%20Redesign%20Suggested%20Conditions%20List/Conditions%20List%20for%20Review)


### [Secondary research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#secondary-research)

Nothing of note. 


### [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#who-we-talked-to)

We talked to 8 participants. We wanted to get at least 4 Veterans who had never submitted a disability claim online before, so that we could have a fresh perspective on the digital experience. 

Audience segment:

- Veterans: 8

- Caregivers: 0

- Family members of a Veteran: 0

Has used the va.gov website in some capacity

- Yes: 8

- No: 0

Experience filing disability claims on va.gov:

- Has filed on va.gov: 2

- Has never filed on va.gov, but intends to in the future: 3

- Has never filed on va.gov, but may in the future: 1

- Has never filed on va.gov and does not intend to in the future: 2

_Note that all participants had filed for disability previously (either online or paper)_

Service year

- 1990 or before: 3

- After 1990: 3

- Both: 2

Gender:

- Male: 6

- Female: 2

LGBTQ+:

- Transgender: unknown

- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown

- Gay, lesbian, or bisexual: unknown

Devices used during study:

- Desktop: 6

- Tablet: 1

- Smart phone: 1

- Assistive Technology: 0

Age:

- 25-34: 0

- 35-44: 1

- 45-54: 2

- 55-64: 2

- 65+: 3

- Unknown: 0

Education:

- High school degree or equivalent: 0

- Some college (no degree): 0

- Associate's degree, trade certificate or vocational training: 1

- Bachelor's degree: 3

- Master's degree: 4

- Doctorate degree: 0

- Unknown: 0

Geographic location:

- Urban: 6

- Rural: 2

- Unknown: 0

Race:

- White: 4

- Black: 2

- Hispanic: 1

- Biracial: 1

- Asian: 0

- Native: 0

Disability and Assistive Technology (AT):

- Cognitive: 4

- AT beginner: 0

- AT advanced user: 0

- Desktop screen reader: 0

- Mobile screen reader: 0

- Magnification/Zoom: 0

- [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0

- Hearing aids: unknown

- Sighted keyboard: unknown

- Captions: 0


## Underserved groups we haven’t talked to

[_VA recruitment checker_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image1.png)

This research does not include the perspectives of the following marginalized Veteran groups: 

- No degree after high school

- Other than honorable discharge

- Immigrant

- Expat (living abroad)

- Identify as Asian or Native

- Identify as LGBTQ+

- User of assistive technology 

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/images/image1.png)

_\[insert screenshot of completed recruitment checker]_ !\[VA-recruitment-checker]\(link - add image to github folder and link here with .png)
