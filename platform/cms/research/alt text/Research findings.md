
---

# Editor-facing Alt Text Creation Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Drupal CMS, VFS-CMS**

Date: 07/18/23

Joann Agnitti(joann@cityfriends.tech)

[Research readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/research/alt%20text/alt-text-creation-readout.pdf)
<br>

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

<br>

## Background
Alternative text (alt text) is a crucial component of web accessibility, as it provides a means of conveying visual content to individuals who are visually impaired or have difficulty seeing certain types of content. However, the creation of accurate alt text can be challenging, particularly for Drupal CMS editors who may lack prior experience with and knowledge of creating plain and accessible language for the web. This circumstance may be exacerbated when editors have low confidence in using the CMS.

To assist editors with this task, we are proposing an enhancement to the existing workflow presented during the image upload process: in addition to the inline guidance that currently exists within the flow, we propose to include descriptive error messaging that will provide editors detailed feedback on the success or failure of their actions.


## Research Goals
* Understand editors’ familiarity with alt text requirements and the importance of good alt text.
* Understand editors’ familiarity and comfort levels with creating alt text
* Determine if editors know where to go to get guidance on writing alt text
* Evaluate the helpfulness of the inline guidance accompanying the image upload process
* Evaluate editors’ satisfaction with proposed error message handling
* Understand editors’ overall experience and satisfaction with the proposed alt text creation process



## Research Questions

* What are editors’ prior knowledge and experience with creating alt text?
   * What are common challenges and barriers editors face when creating alt text?
   * How confident are editors in the accuracy and effectiveness of their alt text descriptions?
* Are the ways in which we handle error messaging within the prototype satisfactory?
   * How do editors prefer to receive feedback; i.e., real-time or delayed?
   * Does the error messaging make sense and provide enough context to the editor to make the appropriate changes?
* What aspects of the inline guidance are most effective at assisting editors in creating alt text?
   * Do editors know where to look for alt text guidance?
   * What improvements can be made to the inline guidance to make it more helpful and informative for editors?
   * How much do editors rely on inline guidance when creating alt text?
* What is editors’ overall satisfaction with the proposed alt text creation process?
   * How easy or difficult do editors find the proposed alt text creation process?


## Methodology 

We conducted 45 to 60-minute moderated research sessions via Zoom. Participants were asked to compare the current alt text creation experience on the Drupal CMS to that of a new alt text creation experience, presented via clickable prototype. 

Within the current Drupal CMS (we used the training environment), participants uploaded an image and added alt text, narrating aloud their thoughts, confusions, and questions related to the process. 

We then moved on to the prototype. The prototype introduced specific, detailed error messages, depending on the best practice violation. For example, participants were discouraged to go over a 150 character limit, use the image file name, and add words like “image of” to their alt text. 

Following this, participants reflected upon which experience (i.e., the current Drupal environment or the prototype) they felt better supported them as they created alt text, and what they might change or add to make it even more helpful. 

## Hypotheses and Conclusions

1. Editors arrive at the CMS with varying levels of familiarity and understanding of alt text best practices.
   * **Definitely true.** 
   * Participants showed a range of understanding of what alt text is and how to write it, with some having undergone specific training for it and others receiving little to no training. 

2. Editors may lack confidence in the accuracy and effectiveness of the alt text they write.
   * **Likely true.** 
   * Some participants reported having high comfort levels with writing alt text while others felt low comfort due to inexperience. 

3. Pairing inline guidance with descriptive error messaging will help editors create more accurate and effective alt text.
   * **Likely true**
   * Participants appreciated the descriptive error messages as they provided direction and guidance to create better alt text. It is yet to be seen if the error messages have this effect in real practice. 

4. Error messaging within the current experience is not satisfactory, and editors do not receive enough information to resolve errors easily.
   * **Likely true**
   * All participants preferred the proposed design over the current experience because of the added direction and guidance via the descriptive error messaging; it gives them a good idea of what needs to be fixed in order to resolve the issue(s). 

5. Editors’ overall experience and satisfaction with the alt text creation process will be influenced by factors such as ease of use, clarity of instructions and messaging, and helpfulness of guidance.
   * **Definitely true.**
   * Participants found the error messaging within the prototype clear, helpful, and easy to follow. The familiarity of the proposed design made it easy to learn, as it does not deviate much from the design of the current alt text creation experience. 



## Key Findings

1. Participants vary in their levels of understanding of alt text. 
2. Busy editors don’t read best practice tips. 
3. Participants clashed with each of our best practice tips. 
4. Links to “Learn more” about alt text are both helpful and disruptive.
5. The alt text field is easy to overlook. 
6. The cut-off preview image in alt text thumbnail is confusing.
7. Participants had issues with how character limitation is handled.
8. Participants found the error messages clear and helpful for identifying and resolving issues. 
9. Participants preferred the proposed design over what is currently in production.
10. Editors prefer more immediate error messages so they can make corrections in the moment.



## Details of Findings 

**1. Participants vary in their levels of understanding of alt text.**

When asked to explain the purpose of alt text, 3/5 participants responded with an accurate, detailed explanation while 2/5 did not know, and in fact said they only do it because it’s required.

* Example of a detailed explanation
   > "It’s a description of an image that can be read out by a machine to someone with no or low vision. It's also helpful for people who can see it and don't have a machine reader because sometimes people put extra info in the alt text." _-P1 (VAMC)_
* Example of an unsure answer
  > “No clue, I’m going to be completely honest; I was given a task, I did the task, I didn’t look too deep into it" _-P6 (Vet Center)_

In discussing their experience with alt text, participants stated the following challenges. These also came up later in the session in greater detail, when participants reviewed our set of best practices for creating alt text. 
* Character limits
   * Some participants had difficulty fitting alt text within a character limit.
     >“I’m of the mindset that more info is fine, so sometimes I'm challenged if I'm given a limited alt text field to type in." _-P1 (VAMC)_
* Depth of descriptiveness
   * Participants weren’t sure how descriptive they should be. For example, should they include race, hair color, shirt color? **Other questions came up around gender neutrality.** 
     >"I don't know if we have to get into race and color, and hair color, but when it says 'be accurate and descriptive, clearly identifying it', then to me you want all those things. But does the end user?" _-P4 (Vet Center)_

     >"But do I really know that that's a woman? Is it ok for me to say woman? Do I get in trouble for saying that?" _-P3 (VAMC)_

* How to balance descriptiveness and brevity
   * Some participants weren’t sure how to be both detailed and succinct.
     >"Everything I came up with didn't make sense or didn't sound right, so I had to keep changing it to shrink it down." _-P5 (Vet Center)_



**2. Busy editors don’t read best practice tips.**

All participants stated that they are busy, and some went further to say they were “overworked.”  One editor gave this as a reason for why they skip over the best practice items; in other words, they demand too much time and attention to read through. 

> **“We're all too busy to sit and read [the bullets]. We're just trying to get the image uploaded and move on. Seriously."** _-P4 (VAMC)_

> _The same participant went on to explain why some alt text they write may not be so descriptive:_ "When we're in a hurry and need to upload it quickly because we have a full plate, then we go for the easiest, quickest description." _-P4 (VAMC)_

**3. Participants clashed with each of our best practice tips.**

Participants disagreed with or had conflicts with our best practice tips on how to create alt text. Here is each tip and the issues participants expressed:

* _Be accurate and descriptive, clearly identifying the main purpose of the image._
   * 2/5 participants were unclear what “identifying the main purpose” meant. In one case, an editor who was inexperienced with alt text became completely stumped when reading that phrase. 

* _Be concise, ideally no more than 150 characters._
   * As mentioned earlier, participants (3/5) disagreed with this character limit and wanted either a larger limit, or no limit at all. 
     >“I’m sorry, that's just not always possible. I think the most important info should be at the top, but I don't think there's any harm in using descriptions as long as they're meaningful." _-P1 (VAMC)_

     >"You need at least 300 chars. You need much more space. 150 is not enough to do justice to even the most simple descriptions." _-P3 (VAMC)_

* _Avoid phrases like “image of”, “photo of”, “graphic of”, etc._
   * Some participants (3/5) did not understand the rationale behind this bullet, and said they are inclined to use phrases like “image of” to describe their file. 
     >"I think it's really important to know if it's a photograph of a person, painting, chart... I don't understand this one at all. I think it's very important to know that." _-P1 (VAMC)_

     >"Why wouldn't they want us to have it like that?" _-P6 (Vet Center)_

* _Leave the file name of the image out of the alt text._
   * 2 participants argued that sometimes their file names are descriptive, and so they naturally include part of the file name as the alt text. 
     > _One participant gives an example of their file naming conventions:_ "Photo of mobile vc for outreach" _-P6 (Vet Center)_

**4. Links to “Learn more” about alt text are both helpful and disruptive**

The "Learn more" section can be helpful, most notably because **it supplied examples of alt text**. One participant, who had “no clue” what alt text is or how to begin to write it, found this section very helpful, in particular the examples provided. It gave them a better idea of what was expected of them.

> “This is super helpful, I wished I clicked on this earlier.” _-P6 (Vet Center)_

One editor noted that there seemed to be “a lot” of links in the “Tips for alternative text” section.
> "Is this all the same information?" _- P1 (VAMC)_

Two editors resented having to click into the “Learn more about alt text guidelines” page for more information. One of those editors noted that clicking into this page and then going back to the editing screen in the CMS erases any work they’d done in the alt text section (including uploading the image and writing alt text).
> "There is space on the page to explain accessibility more without having people click off to what that is. I want less clicking of links and just having important information right there so I don't have to click away." _- P1 (VAMC)_

>_On going between the Learn More page and CMS editor interface:_ "Then you're just going back and forth and it's frustrating." _-P6 (Vet Center)_

**5. The alt text field is easy to overlook.**

Some participants (3/5) missed the alt text field entirely; it wasn’t where they expected it to be, even after they uploaded an image file. Since all other input fields on the page are left aligned, they assumed the alt text input field would be as well. 
> "So, there's no alt text? Ohh there's the alt text." _-P4 (VAMC)_ 

Participants (2/5) want to see the entire text field rather than having to scroll to either end to read it all. The alt text input field allows around 75 characters to be visible at one time; if the alt text is longer than this, editors have to manually move their cursors within the box to read and edit the text.
> **"I hate having a field where I can't see the whole thing"** [Meaning all the words.] "I want to see everything that I'm writing. I want a dragger where I can expand the field if I need to." _-P1 (VAMC)_

> "It doesn't all fit in the screen and I need to see it all at once. Otherwise, it's not helpful." _-P5 (Vet Center)_

**6. The cut-off preview image in alt text thumbnail is confusing**
All participants were bothered by the thumbnail image being cut off and would prefer it to fit the frame entirely. They think it would help them craft more descriptive alt text. One participant said the thumbnail was the reason they didn’t see the alt text input field.
> "I missed it because I was focused on the image being cut off." _-P4 (VAMC)_

> "It really irritates me." _- P5 (Vet Center)_

Another participant pointed out that not showing them the entire image defied logic. 
> **"If I'm supposed to be describing something, shouldn't I be able to see the whole thing?"** _-P1 (VAMC)_


Two editors tried resizing the image within the thumbnail using the resizing options below the alt text section, not realizing those options were to adjust how the image appears on the website, not the alt text thumbnail. Though not within the scope of this research study, this revealed a deeper confusion from an editor who wasn’t sure how what they saw within the CMS differed from what a website user saw on the front end.


> "That's a frustration for me. I kept going back through and resizing and resizing and resizing and I didn't have to." _-P5 (Vet Center)_

> "My struggle with Drupal is getting an image that will actually display properly." _-P4 (VAMC)_

**7. Participants had issues with how character limitation is handled.**

In the prototype, we have proposed the idea of highlighting the alt text field green, yellow, or red to indicate to the editor how close to the character limit they are. In practice, no one vocalized noticing the green or yellow indicators. Only a few editors noticed the red indicator. It is possible that the outline appears fainter than it actually is, though, due to testing over Zoom and different internet connections; that is, it is possible that screen resolution played a role in reducing the visibility of this color indicator.

Every editor noticed the “characters remaining” countdown as an indicator of how close to or over the limit they might be. Some did take longer than others.
> "The red could be brighter." _- P1 (VAMC)_

As mentioned earlier, most participants (4/5) didn't appreciate having a character limitation. They also pointed out the redundancy of the bullet if enforcing a limit within the field. In two cases, editors pointed out that **our best practice bullet point to “be descriptive” seems counter to the practice to “be concise” in 150 characters.**
> “It’s super limiting [...] You need at least 300 characters. You need much more space. 150 is not enough to do justice to even the most simple descriptions." _- P3 (VAMC)_

>_Sarcastically:_ "Explain it but do it in 150 chars and make it a full sentence." _- P5 (Vet Center)_

>“Big complaint! You can't type a lot when it says you have [150] characters. That's something I run into quite a bit when I try to upload the activities and groups that we do." _- P6 (Vet Center)_

>"If we're saying be brief, give me 150 chars. but if we're saying be descriptive, I need more [chars]" _-P5 (Vet Center)_


Still, other participants felt that, if they had a limit, it’s good to have a counter to let them know once they reach it. Some participants (2/5) prefer a hard stop with character counters; that is, they don’t want to be allowed to write past the character limit.

**8. Participants found the error messages clear and helpful for identifying and resolving issues.**

One editor noted that it was like a checklist of what to fix, and this made her appreciate the message even more. 

The initial error on the top of page is redundant; most participants thought one mention of “alternative text” would suffice. 
> "I'm sure I'm not the only [editor] who lives life in the fast lane that is not going to open all three of [the links]. I will open one for help if I'm stuck. I'm going to think the other two are the exact same thing." _-P5 (Vet Center)_


**There is an opportunity to delight participants by catching all errors.** Participants assume that the system can’t flag obvious errors, even though they find it helpful when it does. One editor stated that this feature alone could increase the quality of alt text, and improve the overall digital experience for veterans. 
> "**It's forcing people to do their jobs!** It's a level of accountability that the VA is sorely lacking. My people won't do this, I've trained them. And if they are doing this, I would be having words with them." _- P3 (VAMC)_

**9. Participants preferred the proposed design over what is currently in production.**

All participants preferred the proposed design over what is currently in production. The reasons they gave:

* The proposed design provides more guidance, so people can learn how to create effective alt text. 
* The added guidance and direction could prevent frustration by helping editors learn best practices and avoid making errors they later have to fix. 
* It’s a “gamechanger” that could supplement alt text training and lead to higher quality alt text.

> "This is a phenomenal catch…. I think **something like this is a gamechanger**.” _-P3 (VAMC)_

**10. Editors prefer more immediate error messages so they can make corrections in the moment.**

The timing of error messages was the main concern with the proposed design. Three out of five participants said they would prefer receiving the error messages before hitting save, that way they could fix the problem in the moment. As one participant explained, by the time she’s finished a section, she doesn’t want to have to go back in and see what the problem is. 
> "I would be annoyed [at getting it after save]. When you think you’ve finished something and you hit save, you don't want to go back [...] **I'm emotionally done with this now.**" _-P1 (VAMC)_

>"It's nice that it says that, but I've already invested all my time in typing the whole thing out." _-P4 (VAMC)_

>_One editor compared it to writing an essay in a word document, where you’re notified of your spelling and grammar mistakes immediately and can correct it as you go:_ "You're going to miss something if you wait until the end.” _-P5 (Vet Center)_


## Additional Insights

1. A few participants naturally brought up **the use of AI** to generate alt text. They were not against it, but there is a trust factor we would need to understand.
     > "I am not above [the suggestion of] 'Can I generate a description for you?' I'm like, 'sometimes!' I'll see what AI wants to say but most of the time it's not enough to be of worth." _-P3 (VAMC)_

2. New is familiar: The proposed design is **immediately recognizable** to participants; they were able to use it right away without having to learn anything new.
3. By the time we got to the third and final prototype scenario, **_all_ participants had learned** to recognize the best practice violations and anticipated the error messages they would receive. This includes the participants who expressed low comfort and experience with alt text at the beginning of their sessions. 
4. Some participants create alt text as part of their work in other tools. Those mentioned: Sharepoint, Adobe, and social media. 
5. One participant had a self-described TBI and injury to their wrist that necessitated the use of a speech-to-text tool called Dragon. They use this to complete their work within the CMS. 
6. Participants expressed **empathy and understanding** for those who need alt text. Additionally, many voiced their support of accessibility training and compliance.
   > "If you haven't lived with a disability that made you invisible or impacted your access to information, you just can't understand." _-P3 (VAMC)_
   
   > "I'm always trying to encourage people to be 508 compliant." _-P1 (VAMC)_



## Recommendations

**Educational opportunities**
1. **Provide example** alt text directly on the editing page to reduce the amount of clicks and time editors need to take to get guidance. 
2. Consider **removing “clearly identifying the main purpose”** from the first bullet point, to reduce confusion (and reading time)
3. Consider **increasing the character limit** and removing this bullet point from the list since it is implied and enforced by the character counter. 
4. **Provide rationale** for why editors should avoid phrases like “image of”, "photo of", etc.
5. **Provide additional resources** to help answer editors’ questions around the depth of descriptiveness (i.e., what details to include, gender neutrality considerations, etc)

**UI enhancements**

1. Consider **opening “Learn more” in a new tab** so as not to disturb the editor’s progress, **or ensuring that their work persists** when navigating away from the page and back. 
2. **Make the alt text field big enough to display all characters**, or at least provide draggable corners so editors can view and edit all alt text at once. 
3. **Align the alt text field with the other text fields** on the page so editors can find it easier (e.g., left align and/or move it beneath the image thumbnail). 
4.  **Allow the full image to show within the alt text image preview** (thumbnail) so that editors have a clear view of what they are describing. 
5.  **Make the distinction between alt text image thumbnail and image resizing options clearer** so that participants don’t confuse the two.
6.  **Increase the visibility of color indicators for character limitations**; consider removing the yellow indicator as it showed no effect on situational understanding. 
7.  For the condition where more than one error is found, consider **consolidating the initial (top) error message** so that it contains only one link to “Alternative text” instead of one for every error. 
8.  **Explore the possibility of showing error messages in real time**, so editors can receive immediate feedback. 



## Next Steps

Share findings with the VFS-CMS team. 



## Further research needed

None at this time.


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/research/alt%20text/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/research/alt%20text/conversation-guide.md)

## Tools used for Synthesis

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1685557174259/4fca78e99685a7f4b635cb12eed87191d9bc1f7c?sender=u776cd3bb892bdf4ec6793703) 


## Pages and applications used

[Prototype](https://www.figma.com/file/OXueAhBrPif6wh8vynPxGs/Alt-Text-Errors?type=design&node-id=62-1345&mode=design&t=pW0GyDkSoh1HVEXx-0)



## Who we talked to 

**Recruitment criteria**



We talked to **5 participants.**

Participants were recruited via the Drupal CMS participant panel, which is made up of editors who have opted in to take part in CMS research studies.

* 5 CMS editors who work across different facilities.
   * 3 VAMC
     * 1: very confident using Drupal; feels positively towards the CMS
     * 1: very confident using Drupal; feels somewhat positively towards the CMS
     * 1: somewhat confident using Drupal; feels neutral towards the CMS
   * 2 Vet Center
     * 1: somewhat confident using Drupal; feels positive towards the CMS
     * 1: somewhat confident using Drupal; feels neutral towards the CMS
