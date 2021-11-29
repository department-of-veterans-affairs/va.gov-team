

---

# Virtual Agent Claims and Automated Contnet Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Virtual Agent Team**

Date: 11/08/2021

Shane Strassberg [shane.strassberg@va.gov], Luciana Morais [luciana.morais@va.gov]

[Research Report PDF] (link here)

<br>

**Jump to:**

[Hypotheses and conclusions](insert link to section)

[Key findings](#key-findings)

[Recommendations](insert link to section)

[Who we talked to](insert link to section)

[Further research needed](insert link to section)

<br>

# Research Goals
The virtual agent/chatbot will be accessible on Va.gov in an unauthenticated version Feb 2022, and then in Aprill 2022, an authenticated version will be launced. Veterans will be able to access the chatbot from a link on Contact Us page. The virtual agent’s goal is to respond to inquiries using Va.gov content as the source of information. It will also provide personalized answers to queries such as claim and appeals status. This project is part of the larger Omnichannel strategy (led by VEO) to give veterans seamless access to information, self-service tools, and time-saving outcomes.
_[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_

_Then, describe your goals for this research_

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#research-goals)_



# Research Questions

We hope to gather the following qualitative insights:

1. How did you feel about the login experience?

2. How do you feel about the introduction?

3. How do you feel about the warnings and disclaimers you see here?

4. Are there any actions that the bot expects you to take?

5. What information did you wish to see about your claim?

6. Based on the information you have seen about your claim, what action will you take next?

7. How many choices is the bot offering you?

8. When the bot tells you it does not have the answer, how does it make you feel?

9. After reading the response, did you have the information you needed to take the next step to complete your task?

10. How do you feel about the quality of the response you received? Quality refers to your satisfaction with the accuracy of responses. Were you given the correct link? Was your question answered?

11. How do you feel about the voice and tone of the response you received?

12. If the chatbot couldn't answer your question but could connect you to a live agent chat, would you prefer that over speaking by phone with the VA help desk/contact center?

13. Based on your experience today, are you willing to use the chatbot again?

14. What additional feature to the chatbot would improve your experience?

15. Do you have any other feedback you'd like to share?

# Methodology 

We want to conduct a moderated study utilizing a prototype hosted on staging environments. A moderated study will allow us to get the feedback we need while mitigating possible technical frustrations for the Veteran in real-time. 

# Hypotheses and Conclusions

- If the structure of automated content (Drupal) from VA.gov helps or complicates a Veterans ability to answer a question or solve a problem
   i. Likely True: When testing whether Vets would prefer the full Drupal response, a preview with short descriptor, or simple link to webpage for the question, “Am I eligible for health benefits?“, they consistently preferred the preview because it provided just enough context to make them confident that the webpage link would set them down the right path. They appreciated the full response, but overall felt it was too much info in a small space. The info was more digestible after they followed the link.
- If there is critical information missing from the claims/appeals chatbot experience
   i. Likely False: The Claims feature was viewed very impressively. Vets felt that they understood the information provided, really liked that the representative was included, and really appreciated the loading text when the bot was making its API call. A few things that would improve the use of the claims feature would be to change the language around which claim is displayed first because it is actually the most recent claim--not their first claim. Vets also thought including the type of claim in the response, such as “back, PTSD, etc”  would make it faster to know if it was the claim they were looking for an update on. Similarly, rather than just having a “See Next Claim” button, simply presenting each claim as a button with either date, type or claim number would be faster than having to cycle thru multiple claims. We also anticipate some users will ask about a specific claim number, so this capability needs to be added to the existing claims feature.
- If the visual display of buttons, conversation rules (e.g., non-deviation from topic), and other interaction points cause friction for the Veteran
   i. Likely False: Vets weren't necessarily confused when presented witha stack of buttons, but as mentioned above, the descriptor needs to be very specific to avoid confusion.
- How the Veteran feels about chatbot disclaimers such as records retention and crisis management
   i. True: Vets consistently read the disclaimer before clicking the accept button to enter the chat interface.
- How important is it for the Veteran to be able to surface a human agent
   i. Definitely True: Vets consistently explained the desire to be connected to a live agent if they hit enough blockers, but were also content to keep finding their own outcome through the bot first.
_Hypotheses or tasks for this research along with the conclusions you found If you conducted a usability test, list the success or task completion rate._


# Key Findings

_The 5-10 top findings from your study should be listed here. Write your findings so that if someone reads only these bullets they can leave feeling they got useful information and the study was worthwhile. Examples might be "Most participants used the Search field to find the form, and searched for the term 'veteran health'" or "Most participants struggled with the secondary caregiver section on the form"._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#key-findings)_

1. Finding one

2. Finding two

3. Finding three

4. Finding four

5. Finding five

6. Finding six

7. Finding seven


# Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._


_To add images: ![text](link - add image to github folder and link here with .png)_


**Finding 1**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


**Finding 2**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


**Finding 3**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


# Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


# Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


# Next Steps

_Next steps here. Include owners if appropriate._


# Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


# Appendix

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **7 participants.**

Audience segment:
* Veterans: 7 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: 5 
* Female: 2 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: 7 
* Tablet: x 
* Smart phone: x 
* Assistive Technology: x


Age:
* 25-34: x
* 35-44: 1
* 45-54: 2
* 55-64: x
* 65+: 4
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: x
* Master's degree: 4
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: x


Race:
* White: 6
* Black: 1
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 1
* Hearing aids: 1
* Sighted keyboard: x
* Captions: x


## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
