# My VA audit UAT findings summary

## Who we talked to
* Completed veteran session demographics:
	* 73yo white man, mobile device, urban, uses magnification, text-to-speech, reverse video to increase contrast, and program called Merlin 
	* 46yo black woman, desktop, rural, no AT
	* 36yo black woman, desktop, urban, no AT
	* 37yo asian woman, desktop, rural, no AT
	* 57yo black woman, desktop, urban, no AT
	* 67yo white man, mobile device (tablet), rural, no AT
* 6 out of 9 were completed sessions (one participant - which would make the total 7 - was unable to access the screen we wanted to test, likely due to some issues with cookies in her mobile device).

## Research Questions and Outcomes
**1. Does the functionality work as expected?**
 We uncovered a couple issues with functionality: (1) the link, "Check your post-9/11 GI Bill benefits," under the "Education and training" section was sending users to [an intermediary content page](https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/), but was expected to send users directly to [a personalized page](https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/status), and (2) links clicked on My VA were opening a new tab in users' browsers. Everything else seemed to be working correctly at the start of the test.
  
**2. Is Google Analytics tracking all links as expected?**
 Yes, all links are currently being tracked, as reported in [linked Slack thread](https://dsva.slack.com/archives/C909ZG2BB/p1680792466706009).
  
**3. Is the dynamic content on My VA accurate and useful in the sections we've updated for this audit?**
 Yes, 6 out of 6 users said the personal information displayed on My VA was accurate to their situation.
  
**4. Do Veterans with education benefits know how to find info about their remaining education benefits from My VA?**
 Yes, for the most part. 5/6 participants were able to find the link "Check your post-9/11 GI Bill benefits." P1 was the only participant that did not find the link. However, 2/5 commented that they were beneficiaries of other types of education benefits, not necessarily post-9/11 Gi Bill, and that the wording of the link caused confusion for them. 

**5. Do Veterans know how to find and continue a saved application from My VA?**
Participants were not consistently clear on the purpose of the section called "Benefit application drafts." 3/6 participants understood the meaning of the section

Participants 1, 3, and 5 did understand the section purpose:
  * P1, "I've started the process to apply for a benefit, but I have not submitted that application yet, so it would be a draft of the benefit claim that I'm putting together. But for some reason I saved that draft until I could get more information or a better understanding about the benefits I'm applying for."
  * P3, After clicking the "What benefits does VA offer" dropdown: "I guess it's telling me what other benefits I have or that I can apply for and if I were to apply for another VA benefit outside of the GI bill, then any applications that I haven't sent in yet, I'm assuming that they would show up here."
  * P5, "Hey, you started an application a while ago, so we saved it here. Would you like to finish it."

Participants 2, 4, and 9 did *NOT* understand the section purpose: 
  * P2, "When I originally applied for my VA loan, I had to get a letter from the VA saying that I was eligible and so my thought would be that it would be here, 'cause it goes to a local office and gets processed and then eventually it pushed a PDF document to us." And, "When I submitted for healthcare [...] I know I started an application with them and you know, the process said it might take 7-10 business days. It didn't, but my thought again would be if I needed to go and see it, that maybe the benefit application would be here."
  * P4, "For me, I don't know what that means. Like, benefit application draft? Is that like, apply for your benefit? [...] It seems like this is what the benefits that the VA's offering."
  * P9, "Oh, like when I applied for my disability, right? [...] It just indicates there's nothing in any of those categories that I've applied for." And,  "I guess you just filled it out. You've filled out an application and you know, it's in the VA quamire, and you know, the wheels of bureacracy will grind forward."

Some of those that were confused or unclear by the "Benefit application drafts" section seemd to be mislead by the "What benefits does VA offer?" dropdown. 

## Bugs
* No bugs are outstanding at the writing of this findings summary.

## Other findings

### Accessibility feedback
* P1 struggled to read text at the bottom of his screen (mobile device) while looking at My VA: starting with "Contact us," "Veteran programs and services," etc. Right now, the design shows white text on blue buttons but P1 said that the section needed better contrast so that he could more easily read it. 

## Research study setup
* We encountered a some issues with no-shows and one user that was not able to access the screen being tested, though we tried 3 different email addresses in feature flipper.
	* 2/9 were no-shows
	* 1/9 joined the call, but we were unable to flip the feature on for her to view and interact with

## **Recommendations** 
* Address the issue that recipients of education benefits that do not fall under post-9/11 GI Bill are lacking a clear path to checking their remaining education benefits. From the user's perspective, the best solution would allow recipients of any education benefits to have a direct link to this information on My VA. The feasibility of this solution should be researched and, if found feasible, the solution should be implemented by providing one generic link for all users to use to view their personal education benefits information.
* Help users better understand the purpose of the section "Benefit application drafts" by taking two actions: 
   (1) Remove the dropdown "What benefits does VA offer?" as it seemed to be the source of confusion for at least 2/6 participants. If it's important to offer a similar affordance here, we could replace the dropdown with a plus / add interaction that could allow users to start a new application, and would guide them to learning more about benefits offered to them. 
   (2) Reword the text "You have no benefit application drafts to show." to be more descriptive of what users may find there at some point. One option is to use text, "Incomplete applications will be saved here."
* Learn more about the contrast (accessibility) issue surfaced by P1: Lack of contrast in blue buttons with white text at bottom of mobile screen.
