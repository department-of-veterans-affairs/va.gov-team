# Find a Form PDF Downloading Usability Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE) and VSA, Find a Form, Decision Tools**

Date: 08/06/2021

Cindy Merrill [cindy.merrill@adhocteam.us)]

[Research Report PDF] (link here)

<br>

**Jump to:**

[Hypotheses and conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)

[Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#key-findings)

[Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#recommendations)

[Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#further-research-needed)

[Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)

<br>

# Research Goals
Veterans may need to fill out forms from the VA throughout their lives to apply for and update benefits. These forms exist in a variety of formats, including paper, PDF, and HTML. This research was focused on fillable PDF forms, some of which cause issues for Veterans depending on the technology they use to access them.

The purpose of this research was to 
1. Better understand how Veterans download VA forms that are fillable PDFs and what challenges they encounter.
1. Get feedback on designs for advising users to download a PDF form and then open it with Acrobat, instead of viewing it in a web browser. We wanted to assess the performance of three different design options for providing these instructions.


# Research Questions

- How intuitive is the download process with the new instructions? What issues arise (with the interace and/or specific forms)?
  - Do users click on the new instructions link?
  - Do users have difficulty navigating back to the Find a Form page from the instructions?
  - Do users download the form?
  - Do some users not notice the download notification/file at the bottom of the browser window?
  - Are there any difficulties in finding the file to open it? 
  - Does the file always open in Acrobat?
  - What are users' reactions to auto-download? 
- Are participants able to save and/or digitally sign the forms? 
- Do different download behaviors from different forms (e.g., auto-downloading ones vs. not) cause issues for users?
- What is the success rate of participants downloading forms from each of the two design options? Is one more effective than the other? 

# Methodology 

We conducted hour-long remote moderated research sessions via Zoom on **July 27-30, 2021**. Participants were asked to search for the following four PDF forms using the Find a Form page on Staging (https://staging.va.gov/find-forms/):
1. 10-2850c (most downloaded, has digital signature)
1. 10-0003k (has digital signature)
1. 20-0968 (not hosted on VA.gov)
1. 20-0995 (one of most downloaded, can fill out in browser, hosted inside VA.gov)

Each participant saw one of three versions of the Find a Form page:

## Instructions at the top of the list of forms

![UI-alert-at-top](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/images/UI-alert-at-top.png)

## Instructions repeated above every form download link in a light blue box

![UI-alert-repeated-blue-box](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/images/UI-alert-repeated-blue-box.png)

## Instructions repeated above every form download link in gray help text

![UI-help-text-repeated](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/images/UI-help-text-repeated.png)

## Resources and Support (R&S) article from "Get instructions" or "Read More" link

![R&S-How2download](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/images/R%26S-How2download.png)


# Hypotheses and Conclusions

1. The new instructions will enable people of diverse technical abilities, ages, and disabilities to download and open PDF forms in Acrobat. 
    1. FALSE: Most participants (10 of 11) didn't read at the instructions provided. Maybe if the instructions had been on the form detail pages, more people might have noticed them. But even so, the forms turned out to be impossible to open in Acrobat on a mobile device, so nothing could help there.
1. The new instructions will enable people of diverse technical abilities, ages, and disabilities to save and digitally sign PDF forms.
    1. FALSE: Same reason as above. In addition, the digital signature is not be accessible to screen readers.
1. The new instructions will alleviate issues with forms that have different download behaviors.
    1. FALSE: Same reason as above.
1. Instructions at the top of the list of forms will be missed when they scroll off the screen.
    1. MAYBE TRUE: Instructions at the top were ignored by all participants who saw them.
1. Instructions repeated above every form download link will get ignored or be annoying, especially to users of screen readers. 
    1. MAYBE TRUE: Instructions repeated were ignored by all except two participants. No one mentioned being annoyed by the repeated text. 


# Key Findings

## Universal Issues (unrelated to accessibility technology)

1. **Most participants (9 of 11) completely ignored the instructions--no matter which of the 3 designs they saw** on the Find a Form search results page. Therefore, assessing the designs by which resulted in more success doesn't make sense.

    1. **Many participants (8 of 11) clicked on the form name to open the form detail page**, and from there clicked the *Download VA form* link. This means that they may not have seen the instructions provided on the search results page. 

1. **For most participants (9 of 11), the *Download VA form* link opened forms in a web browser instead of Adobe Acrobat**. When displayed in the web browser, the forms couldn't be filled out, saved, and/or digitally signed.

1. **Most participants (9 of 11) were unable to fill out and digitally sign *any* of 4 specific forms without a lot of help** from the moderator and notetakers, and many participants were unable to succeed even with all the help provided. Issues encountered depended on the participants' specific device, operating system, web browser, whether they had Adobe Acrobat installed, and what application opens PDFs by default on their device.

    1. The 3 participants who were using iOS **mobile devices were unable to fill out the PDF forms because they require a version of Adobe Acrobat only available on Windows or MacOS**. Subsequent testing showed that Android phones are unable to fill out the PDF forms for the same reason.

    1. Three of the Mac and iOS users were **surprised and annoyed when they heard that you have to use Adobe Acrobat**, which is generally not used on those platforms.

## Accessibility-Related Issues

1. One of the screen reader users couldn't access the digital signature field because JAWS didn't read it. The problem was that there's **no label on the signature field** to indicate what it is.

3. There were other **issues with the form fields that made them difficult to fill out** using a screen reader because of missing field labels, incorrect tab order, and multiple input fields under one label (i.e., last name, first name, and middle name).

5. **Find a Form search results were hard to scan** because there was no heading for each one, and so participants had to tab down 4-5 lines through each search results before seeing the next one.


# Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords to your findings** selected from the [master taxonomy]. Tagging your findings will help others find research relevant to their work._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/research-findings.md#themes-and-detailed-findings)_

_To add images: ![text](link - add image to github folder and link here with .png)_

## 1. Most participants ignored the instructions provided

9 of 11 participants ignored or skipped over the instructions and didn't click on the link to learn more. Two participants (both screen reader users) mentioned  the instructions, but only one of them clicked on the link to learn more. The one who clicked saw the version with the repeated instructions in light blue boxes, and the one who didn't click saw the version with the repeated instructions in gray help text. The two other screen reader users in the study didn't let the screen reader read the full line and just moved ahead to the next line. None of the sighted participants said anything about the instructions and so appeared to ignore or skip over them.

A few participants were asked by the moderator to look at the instructions. One skimmed them and decided nothing was applicable. Another participant was puzzled about needing to use Adobe Acrobat, which they knew they didn't have installed on their (Mac) computer. This participant didn't click on the "Get Acrobat Reader for free from Adobe" link but instead said he would do some research on how to download the latest version of Acrobat. 

Accessibility: keyword 1, keyword 2 

Components & Patterns: keyword 1, keyword 2 

> _Supporting data: Quote here_

> _Supporting data: Quote here_
<br>

## 2. *Download VA form* link opened forms in web browser

The *Download VA form* link should download the PDF form so it's easy to open it in Adobe Acrobat to fill out, digitally sign, and save. However, that happened for only 2 of 11 participants--one participant for all 4 forms (Edge browser on Windows), and the other participant for only the first 2 forms (Chrome on Windows). Neither was surprised that the file was auto-downloaded. The participant who had just auto-downloaded the first 2 forms was **surprised when the next 2 forms didn't download and there was no error message--just nothing happened**. She then decided to try Firefox, which showed the "Please wait" error in the browser. 

The other **9 of 11 participants saw the form open in a web browser or it failed to open at all**, and so they had several extra steps to get the form into Acrobat (see the top row of steps in the diagram below). These steps were difficult for many participants due to a variety of technical issues, which are documented per step in the next detailed finding.

Accessibility: keyword 1, keyword 2 

Components & Patterns: keyword 1, keyword 2 

> "Can I fill it out here or do I need to open it separately?" (p11)
> 
> "I don't like when it opens in the browser because it feels limited" (p9)

![Steps-PDF-form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/images/Steps-PDF-form.png)


## 3. Most participants were unable to fill out and digitally sign *any* of the forms without help

9 of 11 were unable to fill out and digitally sign *any* of 4 specific forms without a lot of help from the moderator and notetakers, and many participants were unable to succeed even with all the help provided. Issues encountered depended on the participants' specific device, operating system, web browser, whether they had Adobe Acrobat installed, and what application opens PDFs by default on their device.

### Issues with downloading the file from the web browser to user's device
**Only 4 of 11 participants knew that they would need to download the PDF file and open it in Adobe Acrobat Reader. The other participants didn't understand this and got stuck** (most hadn't read the instructions provided), and so the moderator explained that they needed to do this. 

Most participants (8 of 11) had difficulty downloading the file from the web browser to their device. How the file was downloaded and whether any fields had been filled out before it was downloaded affected whether the file was fillable in Acrobat. 

- One participant using Firefox tried "Save Page As" and then opened the file in Acrobat, but the form was no longer fillable. With prompting from the moderator, the participant found the download button in the top right of the browser window.
- In Safari on iOS, you have to use the *Share* button and share it to Adobe, which wasn't intuitive. Participants using Safari on a Mac tried saving the file but not downloading it, which opens a non-editable version in the Preview application. Another participant did Export as PDF. The forms weren't editable until they installed Adobe Acrobat.
- In Chrome on Windows, one participant started filling out the form. Then they clicked the download button and selected "with your changes". On one form (10-2850c), this didn't save the information they had already entered. On a different form (20-0995), the downloaded version wasn't fillable in Acrobat. Then they tried right-clicking on the *Download VA form* link and selecting "save link", but this didn't work either. The only way to download the form so it remained fillable was to **use the download button in the browser without after not filling out anything in the form**. Another participant clicked on the *Download VA form* link and then Keep > Open with system viewer, and this version could be opened in Acrobat and filled out. Other participants using Chrome didn't know how to save the file. 
- In Edge on Windows, one participant used the Save button in the browser, but the saved version isn't fillable in Acrobat. Then they tried Print > Save as PDF, and this file, too, wasn't fillable in Acrobat. Next they tried Download > Show in folder > right-click to open with Acrobat, and still not fillable. They tried right-click to open with Edge, which resulted in a fillable PDF but without the digital signature. They also tried right-clicking on the *Download VA form* link, and that wasn't fillable. Finally what worked was **right-clicking on the *Download VA form* link and choosing *Save link as***; this was fillable, but it was missing the visual indicators (shading) for the fillable fields.
- Two of the forms (10-0003k and 20-0968) displayed for some participants an error message in the browser instead of the form itself: "Please wait...If this message is not automatically replaced by the proper contents of the document, your PDF viewer may not be able to display this type of document." Different participants had different reactions to this error message, which was confusing:
   - Thought the form was downloading (but it was not)
   - Thought their computer needed upgrading (vs. only Acrobat, which they weren't familiar with)
   - Liked that the message told them to open the file in Adobe
   - Thought they could download the file instead but didn't know how to do that
   - Downloaded the file in spite of the error (from Edge)
   - Didn't notice the message because their screen reader didn't say anything to announce it

> "Frustrating to have some forms open and some not" (p12) 
> "Would be nice if you could download the form directly into Adobe...it would be faster" (p7)


### Issues with downloading Adobe Acrobat Reader to user's device
- Three Mac/iOS users were surprised and annoyed that you have to use Adobe Acrobat to open VA forms. 

### Issues with finding the downloaded file on user's device
-

### Issues with opening the file in Acrobat



Accessibility: keyword 1, keyword 2 

Components & Patterns: keyword 1, keyword 2 

> _Supporting data: Quote here_

> _Supporting data: Quote here_

<br>

**Finding 3**

Several participants were technically savvy, and they had issues just like less experienced people. Only 2 participants were able to download and fill out any of the forms without help, and neither was successful with all 4 forms; 1 was a self-professed technology "geek", and the other was not.

Unique technical issues were encountered in every session, which will be discussed below in terms of the process step where the participant got stuck. See steps in the diagram below: 

Some of the issues were specifically accessibility-related and affected only screen reader users, while other issues affected participants equally regardless of accessibility technology.

- 8 of 11 people had difficulty downloading the form from the web browser.
- After forms were downloaded, they often displayed in Preview (on Macs) or Edge (on Windows computers) because those are the default applications for opening PDFs. And because it wasn't in Adobe Acrobat, the forms couldn't be filled out and signed.
- Even with assistance, 5 of 11 people were unable to digitally sign the two PDF forms that required it.
- The 3 participants who were using mobile devices (iPhones and iPads) were unable to fill out the PDF forms because they require a version of Adobe Acrobat only available on Windows or MacOS. Subsequent testing showed that Android phones are similarly unable to fill out the PDF forms for the same reason.

Brief description

Accessibility: keyword 1, keyword 2 

Components & Patterns: keyword 1, keyword 2 

> _Supporting data: Quote here_

> _Supporting data: Quote here_

<br>


**Finding 3**

Brief description

Accessibility: keyword 1, keyword 2 

Components & Patterns: keyword 1, keyword 2 

> _Supporting data: Quote here_

> _Supporting data: Quote here_


(For finding re Adobe and Mac users:)
> "I’ve never come across a document that is highly recommended to use Acrobat Reader for. It makes it seem like I HAVE to download it and use that. I used to use it when I was sighted, but I’ve never used it when visually impaired." (p5, who has been using a screen reader for the last 6 years)



# Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


# Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._



1. Encourage form owners to replace fillable PDF VA forms with a more accessible format. Best would be HTML/web forms because they are accessible across devices, platforms, and screen readers. Second best would be a web-based form tool (e.g., DocuSign) that is accessible across devices, platforms, and screen readers.
    * Fillable PDF forms that require a desktop version of Adobe Acrobat are problematic for many people, as evidenced by the findings above.
    
1. Since fillable PDF forms will continue to exist at least in the near term, add instructions above each download link--even though most people won't read them because a few might. 
    1. Add the instructions to the form detail pages, in addition to the form search results page where it was tested.
    1. Consider adding detailed platform-specific instructions (e.g., mobile vs. desktop and Windows vs. Mac) to the R&S article.

    1. In the R&S article, copy the "Get Acrobat Reader for free from Adobe" link to just below the numbered steps (so it isn't overlooked after reading the steps).


# Next Steps

_Next steps here. Include owners if appropriate._


# Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/conversation-guide.md)

[Interview transcripts](link here)


## Tools used for Synthesis

- [Synthesis spreadsheet]()
- [Technology setup and issues by user]()
- [Mural board for user steps](https://app.mural.co/t/vsa8243/m/vsa8243/1628022580962/ff307182df2400489fee75782bd37f5879cca3a1?sender=ua2ff9f6c0031cb4999ae6676)  


## Pages and applications used

[Find a Form on Staging](https://staging.va.gov/find-forms/)


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


## Who we talked to 
We talked to **11 participants.**

Audience segment:
* Veterans: 10 
* Family member of a Veteran: 1  

Gender:
* Male: 3 
* Female: 8 

Devices used during study: 
* Desktop: 9 (7 Windows, 2 Mac)
* Tablet: 2 (iPad)
* Phone: 1 (iPhone; also used a computer during the session, so counted above, too)
* Assistive Technology: 4 (screen reader)

Web browsers used during study:
* Chrome: 5
* Safari: 5
* Edge: 3 (1 also used Chrome on computer and Safari on iOS, so counted above twice)
* Firefox: 1 (also tried in Chrome, so counted above, too)

Age:
* 25-34: 1
* 35-44: 2
* 45-54: 1
* 55-64: 6
* 65-74: 1

Education:
* High school degree or equivalent: 1
* Some college (no degree): 1
* Associate's degree, trade certificate, or vocational training: 1
* Bachelor's degree: 4
* Master's degree: 3
* Unknown: 1

Geographic location:
* Urban: 9
* Rural: 2

Race:
* White: 9
* Black: 2
* Hispanic: 0
* Biracial: 1 (Native and White)
* Asian: 0
* Native: 1

Disability and Assistive Technology:
* Cognitive disability: 3
* AT intermediate: 3
* AT advanced user: 1
* Desktop screen reader: 3 (2 JAWS on Windows, 1 VoiceOver on Mac)
* Mobile screen reader): 1 (VoiceOver on iPad)


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Hispanic
* Asian
* Other than honorable discharge
* Immigrant origin
* Expat (living abroad)
* LGBTQ+
* AT other than screen readers

![recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/images/recruitment-checker.png)
