# Decision Letter Download: Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), VA Benefits Team 1

Date: 09/29/2022

Skyler Schain · skyler@coforma.io

[Research Readout (PDF)](https://github.com/user-attachments/files/17261551/DLD.Research.Share.pdf)



# Research Goals
Multiple research study findings suggest that the ability to download decision letters is a feature many veterans would like. Currently, veterans need to wait for their decision letters to arrive via physical mail and, if they lose them, need to request one by reaching out to a call center representative or through other online channels with transaction costs that diminish their experience. Veterans often need to provide copies of their decision letters to a representative to pursue disagreement pathways related to the decision. In addition, some benefits provided by third-parties require a decision letter as proof of the veterans’ disability status.

For this research, we tested the effectiveness of the MVF (Minimum Viable Feature) design solution for Decision Letter Download. The purpose was to ensure that the feature as designed is usable by Veterans across a range of demographics and form factors.


# Research Questions

* Understand more about the decision letter user journey
* Assess whether the design proposal is effective for solving the user problem (i.e. needing access to the digital decision letter)
* Understand Veterans' mental model for letters generally, including both benefit letters and "claim letters" (inbound communication from the VA pertaining to a Veterans' claims and appeals).

# Methodology 

We conducted 10 remote moderated usability sessions via Zoom. Participants were tasked with finding and accessing their decision letter via VA.gov and the Claim Status Tool. 

5/10 participants were accessed the prototype via mobile device. 5/10 participants accessed the prototype via desktop. 

Some participants started with Task 1, which prompted them to find out about an unknown claim decision from the VA.gov homepage. Some started with Task 2, which prompted them to find the decision letter for a known claim decision from the VA.gov homepage. With these tasks, we tested the navigation flows designed to allow access to decision letters and claim decisions.


# Hypotheses and Conclusions

1. When prompted to look for an update to their claim decision, participants will navigate to the Claim Status Tool, and from there they will find the decision letter and download it. 
- **TRUE.** 10/10 participants successfully navigated to the decision letter via the Claim Status Tool when prompted to find the decision letter related to their disability compensation claim. 

2. When prompted to find a copy of a disability claim they'd already received (Task 2), participants will navigate to Records from the VA.gov homepage to access the decision letter from there. 
- **FALSE.** None of the participants (3/10) who were prompted with this task navigated to Records from the home page. They all navigated to the Claim Status Tool and got to the decision letter that way. 

3. Participants will be able to identify the decision letter in the list of letters in the Claim Letters page based on the date. 
- **TRUE.** 10/10 participants mentioned the date or the fact that it was "the most recent one" in explaining how they knew to click on the correct link to access the decision letter. (The date matched the "claim closed on" date listed in the Claim Status Tool). 

4. Participants will understand the difference between Claim Letters and Benefit Letters based on the way we explain them in the UI. 
- **MAYBE TRUE.** From the Download VA Letters page, 4/10 participants tried to access the claim letters via the "View Benefit Letters" button, although this took them to the Benefit Letters page. This might have been due to the lack of discoverability of the Claim Letters entrypoint, which in most cases was hidden below the fold. 


# Key Findings

1. Core task of accessing Decision Letters via the Claim Status Tool was very successful.

2. The date and recency sorting in the Claim letters list was crucial for participants to understand which letter was their claim decision letter.

3. On the Download VA Letters page, the Claim Letters entrypoint was not discoverable enough.

4. Navigation from the Download VA letters page back to the claim letter page was tricky for some participants.

5. Participants mostly understood the use cases for benefit letters and claim letters, although some found it hard to articulate the difference between them.


# Details of Findings 


**1. Core task of accessing Decision Letters via the Claim Status Tool was very successful.**

Users were able to navigate to the list of decision letters and download their decision letter with minimal usability issues.

> _"Oh that's definitely a 5 (out of 5)...everything is self-explanatory." (P17)_

> _"I actually thought it moved along pretty quickly." (P19)_

> Average score of 4.8 (out of 5) from participants.

**2. The date and recency sorting in the Claim letters list was crucial for participants to understand which letter was their claim decision letter.**

Date and recency sorting helped users understand which letter to click to get their decision letter. This is not a fully reliable signifier, since dates can be variable, but it's a good starting point. Going forward, any addiitonal metadata about the letter we can surface to the user will further improve usability. 

> _"We're talking about 8 September, and the ones below are different dates." (P8)_

> _(Why did you click on that letter?) "Because it's the most recent." (P10)_

**3. On the Download VA Letters page, the Claim Letters entrypoint was not discoverable enough**

Participants who scrolled below the fold and discovered the Claim letters page understood that it took them to the list of letters, and were able to find their way back to the page when prompted. 

Those who did not scroll far enough to see the Claim letters entrypoint were confused about how to return to that page, and some thought Benefit letters would take them back to the Claim letters list.

**4. Some participants got confused about the difference between Benefit Letters and Claim Letters when navigating**

> When prompted to navigate to the list of decision letters from this page, 4/10 participants clicked on “View benefit letters”

> A few participants went looking for the claim letters page in the left nav but couldn’t find it

# Additional Insights

**Participants expected that the "Claim Letters" page would have development letters, decision letters, and other communications related to their claims.**

> _“Different letters in reference to my claim.” - P2_

> _“They would be earlier claims. Other letters in the past have been related to education benefits and that kind of thing – not sure if these are all related to compensation and pension.” - P8_

> _“Any other letters that are in reference to my VA claim.” - P10_

**Veterans used a variety of terms to describe the differences between benefit letters and claim letters.**

We asked Veterans to describe the difference in their own words.

> _“(Claim letters) is for getting access to an archived copy of a claim letter that I’ve actually received in the mail.” - P8_

> _“With (benefit letters) you have proof that you’re a Veteran and what benefits you have access to.” - P17_

> _“(Claim letters) was a letter from the VA to me, whereas (benefit letters) is a letter the website is generating that supports me.” - P19_

**A few Veterans expressed that it would be nice not to have to navigate to the Claim Letters page to get the decision letter**

We would like to remedy this in future versions, but are limited by technical constraints

> _"Nothing was missing, it was just too many steps to go through to get to (the decision letter)." (P12)_


# Recommendations

* For this MVF, house the Claim Letters URL within CST, since most users associated the page contents with claims and appeals information and most participants navigated to CST to find their decision letters. (There are also product and technical reasons for going this route).
    
* Beyond MVF, continue exploring how to pair decision letters with their specific claims, to further simplify the user journey.
    * One participant (P12) in particular was dissatisfied with the experience due to the number of clicks it took to get to the decision. From observing the other participants, it was clear that reducing the total steps would have made for an even clearer and better experience. 

* Beyond MVF, consider how this user journey connects to the appeals journeys and try to construct an intuitive pathway for users to appeal claims once they see their decision letter.

* Consider how this feature would work on the mobile app.

# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/conversation-guide.md)


## Tools used for Synthesis

Mural board, Google Spreadsheet


## Who we talked to 

**Recruitment criteria**

- 5 mobile-first users of VA.gov.
- 5 Veterans aged 55-64+
- 5 Black Veterans

We talked to **10 participants.**

Audience segment:
* Veterans: 10 


Gender:
* Male: 6 
* Female: 4 


Devices used during study: 
* Desktop: 5 
* Smart phone: 5


Age:
* 45-54: 2
* 55-64: 2
* 65+: 6


Education:
* High school degree or equivalent: 1
* Associate's degree, trade certificate or vocational training: 3
* Bachelor's degree: 1
* Master's degree: 5


Race:
* White: 5
* Black: 4
* Prefer not to answer: 1


## Underserved groups we haven’t talked to 

[Recruitment Checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=744554771)

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Cognitive Disability
* Rural
* Other than honorable
* Immigrant origina
* Expat (living abroad)
* Hispanic
* Biracial
* Asian
* Native
* LGBTQ+
* Assistive tech users

<img width="915" alt="Screen Shot 2022-09-30 at 2 58 23 PM" src="https://user-images.githubusercontent.com/95102058/193338559-4f7581c6-bf28-4567-8d9d-6bf3c00f8717.png">


