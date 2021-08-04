# Find a Form PDF Downloading Usability Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE) and VSA, Find a Form, Decision Tools**

Date: 08/06/2021

Cindy Merrill [cindy.merrill@adhocteam.us)]

[Research Report PDF] (link here)

<br>

**Jump to:**

[Hypotheses and conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/share/research-findings-template.md#hypotheses-and-conclusions)

[Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/share/research-findings-template.md#key-findings)

[Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/share/research-findings-template.md#recommendations)

[Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/share/research-findings-template.md#further-research-needed)

[Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/share/research-findings-template.md#who-we-talked-to)

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
- Instructions at the top of the list of forms 
- Instructions repeated above every form download link in a light blue box
- Instructions repeated directly above every form download link in gray help text

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

1. **Most participants (9 of 11) completely ignored the instructions--no matter which of the 3 designs they saw.** Therefore, assessing the designs by which resulted in more success doesn't make sense.

1. **Most participants (9 of 11) were unable to fill out and digitally sign *any* of 4 specific forms without a lot of help** from the moderator and notetakers, and many participants were unable to succeed even with all the help provided. Issues encountered depended on the participants' specific device, operating system, web browser, whether they had Adobe Acrobat installed, and what application opens PDFs by default on their device.

1. **For almost all participants (10 of 11), the *Download VA form* link opened forms in a web browser instead of Adobe Acrobat**. When displayed in the web browser, the forms couldn't be filled out, saved, and/or digitally signed.

1. The 3 participants who were using iOS **mobile devices were unable to fill out the PDF forms because they require a version of Adobe Acrobat only available on Windows or MacOS**. Subsequent testing showed that Android phones are unable to fill out the PDF forms for the same reason.

1. Many participants (8 of 11) clicked on the form name to open the form detail page, and from there clicked the download link. This means that they **didn't see the instructions provided only on the search results page**. 

1. Three of the Mac and iOS users were **surprised and annoyed when they heard that you have to use Adobe Acrobat**, which is generally not used on those platforms.

## Accessibility-Related Issues

1. One of the screen reader users couldn't access the digital signature field because JAWS didn't read it. The problem was that there's **no label on the signature field** to indicate what it is.

3. There were other **issues with the form fields that made them difficult to fill out** using a screen reader because of missing field labels, incorrect tab order, and multiple input fields under one label (i.e., last name, first name, and middle name).

5. **Find a Form search results were hard to scan** because there was no heading for each one, and so participants had to tab down 4-5 lines through each search results before seeing the next one.


# Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords to your findings** selected from the [master taxonomy]. Tagging your findings will help others find research relevant to their work._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/research-findings.md#themes-and-detailed-findings)_

_To add images: ![text](link - add image to github folder and link here with .png)_

**Finding 1**

9 of 11 participants ignored or skipped over the instructions and didn't click on the link to learn more. Two participants (both screen reader users) mentioned  the instructions, but only one of them clicked on the link to learn more. The one who clicked saw the version with the repeated instructions in light blue boxes, and the one who didn't click saw the version with the repeated instructions in gray help text. The two other screen reader users in the study didn't let the screen reader read the full line and just moved ahead to the next line. None of the sighted participants said anything about the instructions and so appeared to ignore them.

<br>

**Finding 2**

Several participants were technically savvy, and they had issues just like less experienced people. Only 2 participants were able to download and fill out any of the forms without help, and neither was successful with all 4 forms; 1 was a self-professed technology "geek", and the other was not.

Unique technical issues were encountered in every session, which will be discussed below in terms of the process step where the participant got stuck. See steps in the diagram below: 
![steps-diagram](link TBD)

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

**Finding 2**

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
* White: 8
* Black: 2
* Hispanic: 0
* Biracial: 1 (Native and White)
* Asian: 0
* Native: x

Disability and Assistive Technology:
* Cognitive disability: 3
* AT intermediate: 3
* AT advanced user: 1
* Desktop screen reader: 3 (2 JAWS on Windows, 1 VoiceOver on Mac)
* Mobile screen reader): 1 (VoiceOver on iPad)
* Voice AT like Siri/Dragon Naturally Speaking: x


## Underserved group we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/share/images/VA-recruitement-checker-example.png)
