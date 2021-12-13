

---

# Virtual Agent Claims and Automated Contnet Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Virtual Agent Team**

Date: 11/08/2021

Shane Strassberg [shane.strassberg@va.gov], Luciana Morais [luciana.morais@va.gov]

[Research Report PDF] (link here)

<br>

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

# Research Goals
The virtual agent/chatbot will be accessible on Va.gov in an unauthenticated version Feb 2022, and then in Aprill 2022, an authenticated version will be launced. Veterans will be able to access the chatbot from a link on Contact Us page. The virtual agent’s goal is to respond to inquiries using Va.gov content as the source of information. It will also provide personalized answers to queries such as claim and appeals status. This project is part of the larger Omnichannel strategy (led by VEO) to give veterans seamless access to information, self-service tools, and time-saving outcomes.

The purpose of this research was for:

1. Veteran preference for drupal content responses
2. Claims feature feedback
3. Learn other topics Vets would be interested to engage with the chatbot


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

Satisfaction for, and subsequently, adoption of the virtual agent remains very high after the latest round of user testing. Vets appreciated that the chatbot allowed them to work at their own pace, was very quick to provide a response, really liked the claims feature, and that they will be able to connect to a live agent in the future.

# Key Findings

1.  Vets consistently preferred the preview response for Drupal content because it provided just enough context to make them confident that the webpage link would set them down the right path. They appreciated the full response, but overall felt it was too much info in a small space. The info was more digestible after they followed the link.

2. When Vets were allowed to ask any general topic question, the results for a correct response were mixed. 

3. The Claims feature was viewed very impressively. Vets felt that they understood the information provided, really liked that the representative was included, and really appreciated the loading text when the bot was making its API call. 

4. There was some confusion for the “Speak to Agent” button. Some thought it would provide contact info or connect them to their claim representative, others thought it would make a phone call to the VA, while only a couple thought it would connect them to a live agent chat in the same chatbox.


# Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._


_To add images: ![text](link - add image to github folder and link here with .png)_


**Finding 1**

Labels: PRDT: Virtual Agent, SFTW: Chatbot, VETJNY: Taking care of themselves, RESRCH: Usability

When testing whether Vets would prefer the full Drupal response, a preview with short descriptor, or simple link to webpage for the question, “Am I eligible for health benefits?“, they consistently preferred the preview because it provided just enough context to make them confident that the webpage link would set them down the right path. They appreciated the full response, but overall felt it was too much info in a small space. The info was more digestible after they followed the link.

> _Supporting data: Helpful? Yes. Short and sweet. Here's the article link. likes the layout of the page more than the full response in chat window. "font is kind of smaller in chatbox." full page layout seems more organized, less cramped



**Finding 2**

Labels: PRDT: Virtual Agent, SFTW: Chatbot, VETJNY: Taking care of themselves, RESRCH: Usability

When Vets were allowed to ask any general topic question, the results for a correct response were mixed. If they asked about a high-traffic topic like “prescriptions,” the bot provided an accurate response to send them to the right webpage, or a facility location would also provide an accurate response to the locator tool. However, the bot could get confused when asked, “Can my spouse get VA benefits?“, and provided a response with a link to the Education and Training Benefits webpage, or when asked more obscure topics like if VA conducting studies on CLL (Chronic Lymphomatic leukemia). These mixed responses, however, did not deter Vets from continuing to try to use the bot to get to the right info.

> _Supporting data: "Is VA covering CLL studies?" (No answer from bot) CLL = chronic lymphomatic leukemia

• Not dissatisfied with answer. next step might be "Can i speak to an agent?"
• might retype CLL to expand acronym.
• (does that) Same response, "...doesn't have the answer right now"
• speak with agent; ask bot to give him agent's contact info.
• ”can i speak with an agent?" ... "ah. good!" / appropriate response
• Would like to have the bot understand departments for his condition, rather than here's a number to start your search.


> _Supporting data: "Can my spouse get VA benefits?" to encompass a myriad of benefits (education, health, burial etc.)

"No, it's off track." Response is not specific enough to spouse -- response provides link to general Education & Training Benefits page. Also not comprehensive of the diversity of benefits a spouse could receive
	
Upon visit to linked page, noticed a reference to benefits for 'qualifying family members' and noted that is still not specific enough to answer question about spouse



**Finding 3**

Labels: PRDT: Virtual Agent, SFTW: Chatbot, VETJNY: Taking care of themselves, RESRCH: Usability

The Claims feature was viewed very impressively. Vets felt that they understood the information provided, really liked that the representative was included, and really appreciated the loading text when the bot was making its API call. A few things that would improve the use of the claims feature would be to change the language around which claim is displayed first because it is actually the most recent claim--not their first claim. Vets also thought including the type of claim in the response, such as “back, PTSD, etc”  would make it faster to know if it was the claim they were looking for an update on. Similarly, rather than just having a “See Next Claim” button, simply presenting each claim as a button with either date, type or claim number would be faster than having to cycle thru multiple claims. We also anticipate some users will ask about a specific claim number, so this capability needs to be added to the existing claims feature.

> _Supporting data: Response was good because it was simple, concise, and had links for more info.
	
- They like this feature overall a lot because it removes being put on hold and passed around on the phone.
	
- They would most likely try to speak to a live agent if they wanted more information.
	
- The user said that they would like an other way to verify once connected with a live agent for security.


> _Supporting data: "I think it's impressive." 

- Feels that he would understand the information there, likes the link for more information and likes the agent access. 
- Knows that he has to go through a series of Next Claims, would have liked buttons for each one of his claims so he can directly to the one he is acquiring about. 

**Finding 4**

Labels: PRDT: Virtual Agent, SFTW: Chatbot, VETJNY: Taking care of themselves, RESRCH: Usability

There was some confusion for the “Speak to Agent” button. Some thought it would provide contact info or connect them to their claim representative, others thought it would make a phone call to the VA, while only a couple thought it would connect them to a live agent chat in the same chatbox. If we change the button text to, “Connect to Live Agent” or “Chat with Live Agent,” that should minimize the confusion.

# Additional Insights

All participating Vets concluded that they would definitely use this product when it is launched.

> "Yes! In future, may trust it enough to get information I need. This shows potential for getting information I need quickly, simply and reliably. I would definitely use chatbot as first resource in info-finding after chatbot goes through a few more rounds of development."
>  "I would 100% use the chatbot again because it allows him to work at his own pace and not be pressured for questions." 


# Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Deploy preview drupal responses to minimize cognitive load and potential 508 issues with links in chatbox
   
* Deploy LUIS to replace QNAmaker as the foundation for natural language processing

* Include type of claim in response for easier recognition of each claim

* Display multiple claims as buttons to allow Vets to choose the claim they are looking for, rather than hitting "See Next Claim" button

* Change button descriptor for "Speak with Agent" to "Chat with Live Agent" or "Connect to Live Agent" to minimize any confusion of what this button will do
   


# Next Steps

Getting ready for unauthenticated launch in Feb 2022, followed by the authenticated launch in Apr 2022.


# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/claims-and-automated-content-study/research%20plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/claims-and-automated-content-study/conversation%20guide.md)

[Interview transcripts](link here)


## Tools used for Synthesis

[Excel](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/claims-and-automated-content-study/Virtual%20Agent%20Automated%20Content%20and%20Claims%20Research%20Table.xlsx)  


## Pages and applications used

[Virtual Agent Study](https://staging.va.gov/virtual-agent-study/)


## Who we talked to 

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
