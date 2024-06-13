# Find a Form PDF Downloading Usability Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE) and VSA, Find a Form, Decision Tools**

Date: 08/10/2021

Cindy Merrill [cindy.merrill@adhocteam.us]

[Research Report PDF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-readout-full.pdf)

<br>

**Jump to:**

[Hypotheses and conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)

[Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#key-findings)

[Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#recommendations)

[Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#further-research-needed)

[Appendix with screenshots](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#appendix)

[Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)

<br>

# Research Goals
Veterans may need to fill out forms from the VA throughout their lives to apply for and update benefits. These forms exist in a variety of formats, including paper, PDF, and HTML. This research was focused on fillable PDF forms, some of which cause issues for Veterans depending on the technology they use to access them.

The purpose of this research was to 
1. Better understand how Veterans download VA forms that are fillable PDFs and what challenges they encounter.
1. Get feedback on designs for advising users to download a PDF form and then open it with Adobe Acrobat Reader, rather than trying to fill it out in a web browser. We wanted to assess the performance of three different design options for providing these instructions.


# Research Questions

- How intuitive is the download process with the new instructions? What issues arise (with the interace and/or specific forms)?
  - Do users click on the new instructions link?
  - Do users have difficulty navigating back to the Find a Form page from the instructions?
  - Do users download the form?
  - Do some users not notice the download notification/file at the bottom of the browser window?
  - Are there any difficulties in finding the file to open it? 
  - Does the file always open in Acrobat?
  - What are users' reactions to auto-download? 
  - Do participants figure out how to save and/or digitally sign the forms? 
- Do different download behaviors from different forms (e.g., auto-downloading ones vs. not) cause issues for users?
- What is the success rate of participants downloading forms from each of the three design options? Is one more effective than the others? 

# Methodology 

We conducted hour-long remote moderated research sessions via Zoom on **July 27-30, 2021**. Participants were asked to search for the following four PDF forms using the Find a Form page on Staging (https://staging.va.gov/find-forms/):
1. [Application for Associated Health Occupations](https://www.va.gov/find-forms/about-form-10-2850c/) (10-2850c) 
    1. one of most downloaded
    1. has digital signature
    1. hosted on VA.gov
1. [Employee Incentive Scholarship Program (EISP) Agreement](https://www.va.gov/find-forms/about-form-10-0003k/) (10-0003k)
    1. has digital signature
    1. hosted on VA.gov
1. [Claim for Reimbursement of Travel Expenses](https://www.va.gov/find-forms/about-form-20-0968/) (20-0968)
    1. hosted on vba.va.gov
1. [Decision Review Request: Supplemental Claim](https://www.va.gov/find-forms/about-form-20-0995/) (20-0995)
    1. one of most downloaded
    1. can fill out in browser
    1. hosted on vba.va.gov


Each participant saw 1 of 3 versions of the Find a Form search results page with instructions added:

1. Instructions at the top of the list of forms

1. Instructions repeated above every form download link in a light blue box

1. Instructions repeated above every form download link in gray help text

In the above 3 designs, the "Get instructions for opening the form in Acrobat Reader" and "Read More" links open a Resources and Support (R&S) article that details the steps you need to do. You can see screenshots of all of these designs in the [Pages and applications used section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#Pages-and-applications-used) in the Appendix.


# Hypotheses and Conclusions

1. The new instructions will enable people of diverse technical abilities, ages, and disabilities to download and open PDF forms in Acrobat. 
    1. FALSE: Most participants ignored the instructions and were unable to fill out any of the forms without a lot of help from the moderator, and many were unable to succeed even with all the help provided (especially users on mobile devices).
1. The new instructions will enable people of diverse technical abilities, ages, and disabilities to save and digitally sign PDF forms.
    1. FALSE: Same reasons as above. In addition, the digital signature is not accessible to users of screen readers.
1. The new instructions will alleviate issues with forms that have different download behaviors.
    1. FALSE: Same reasons as above.
1. Instructions at the top of the list of forms will be missed when they scroll off the screen.
    1. MAYBE TRUE: Instructions at the top were ignored by all participants who saw them.
1. Instructions repeated above every form download link will get ignored or be annoying, especially to users of screen readers. 
    1. MAYBE TRUE: Instructions repeated were ignored by all except two participants. No one mentioned being annoyed by the repeated text. 


# Key Findings

## Universal Issues (unrelated to accessibility technology)

1. **Most participants (9 of 11) completely ignored the instructions--no matter which of the 3 designs they saw** on the Find a Form search results page. Therefore, assessing the designs by which resulted in more success doesn't make sense.

    1. **Many participants (8 of 11) clicked on the form name to open the form detail page**, and from there clicked the *Download VA form* link. This means that they may not have paid attention to the instructions on the search results page if they weren't downloading the form from there. 

1. **For most participants (9 of 11), the *Download VA form* link opened forms in a web browser instead of Adobe Acrobat**. When displayed in the web browser, the forms couldn't be filled out, saved, and/or digitally signed.

1. **Most participants (9 of 11) were unable to fill out and digitally sign *any* of 4 specific forms without a lot of help** from the moderator and notetakers, and many participants were unable to succeed even with all the help provided. Issues encountered depended on the participants' specific device, operating system, web browser, whether they had Adobe Acrobat installed, and what application opens PDFs by default on their device.

    1. The 3 participants who were using iOS **mobile devices were unable to fill out the PDF forms because they require a version of Adobe Acrobat only available on Windows or MacOS**. Subsequent testing showed that Android phones are similarly unable to fill out the PDF forms.

    1. Three of the 5 Apple users were **surprised and annoyed when they heard that you have to use Adobe Acrobat**, which is generally not used on Apple platforms.

## Accessibility-Related Issues

1. One of the screen reader users couldn't access the digital signature field because JAWS didn't read it. There seemed to be **no label on the signature field** to indicate what it is and how to interact with it.

1. There were other **issues with the form fields that made them difficult to fill out** using a screen reader because of missing field labels, incorrect tab order, and multiple input fields under one label (i.e., last name, first name, and middle name).

1. **Find a Form search results were hard to scan** because there was no heading for each one, and so screen reader users had to tab down about 6 lines through each search result before they could see the next one.


# Details of Findings 

## Universal Issues (unrelated to accessibility technology)

### 1. Most participants ignored the instructions provided

**9 of 11 participants ignored or skipped over the instructions and didn't click on the link to learn more.** Two participants (both screen reader users) mentioned  the instructions, but only one of them clicked on the link to learn more. The one who clicked saw the version with the repeated instructions in light blue boxes, and the one who didn't click saw the version with the repeated instructions in gray help text. The two other screen reader users in the study didn't let the screen reader read the full line and just moved ahead to the next line. None of the sighted participants said anything about the instructions and so appeared to ignore or skip them.

A few participants were asked by the moderator to look at the instructions on the R&S page. One skimmed them and decided nothing was applicable. Another participant was puzzled about needing to use Adobe Acrobat, which they knew they didn't have installed on their (Mac) computer. This participant didn't click on the "Get Acrobat Reader for free from Adobe" link but instead said they would do some research on how to download the latest version of Acrobat. 

**8 of 11 participants clicked on the form name to open the form detail page, and from there clicked the *Download VA form* link.** This means that they may not have paid attention to the instructions on the search results page since they weren't downloading the form from there. Once they reached the form detail page and confirmed that the form was the one they wanted, then they used the *Download VA form*, but we didn't provide any download instructions on that page. 

Keywords: alert boxes, hint text, instructions


### 2. *Download VA form* link opened forms in web browser

The *Download VA form* link should download the PDF form so it's easy to open in Adobe Acrobat to fill out, digitally sign, and save. However, that happened for only 2 of 11 participants--one participant for all 4 forms (Edge browser on Windows), and the other participant for only the first 2 forms (Chrome on Windows). Neither was surprised that the file auto-downloaded. The participant who auto-downloaded the first 2 forms was **surprised when the next 2 forms didn't download and there was no error message--just nothing happened**. They then decided to try Firefox, which showed the "Please wait" error in the browser. 

The other **9 of 11 participants saw the form open in a web browser or it failed to open at all**, and they they had extra steps to get the form into Acrobat (see the top row of steps in the diagram below). These steps were difficult for many participants due to a variety of technical issues, which are documented per step in the next detailed finding.

Keywords: forms, download

> "Can I fill it out here, or do I need to open it separately?" (p11).

> "I don't like when it opens in the browser because it feels limited" (p9).

> "Having to go to a different browser or use a different format gets so confusing and bothersome. I would need to have somebody help me through that. My frustration level gets so high so quickly that I’d give up" (p8). 

![Steps-PDF-form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/Steps-PDF-form.png)


### 3. Most participants were unable to fill out and digitally sign *any* of the forms without help

**9 of 11 were unable to fill out and digitally sign *any* of 4 specific forms without a lot of help from the moderator and notetakers, and many participants were unable to succeed even with all the help provided.** Several participants were technically savvy, and they had issues just as participants who were less experienced with technology. Only 2 participants were able to download and fill out *any* of the forms without help, and neither was successful with all 4 forms; 1 was a self-professed technology "geek", and the other was not. Issues encountered depended on the participants' specific device, operating system, web browser, whether they had Adobe Acrobat installed, and what application opened PDFs by default on their device.

Unique technical issues were encountered in every session, which will be discussed below in terms of the process step where the participant got stuck (see diagram above). Some of the issues were specifically accessibility-related and affected only screen reader users, while other issues affected participants equally regardless of accessibility technology. For technical details from each session, see [Technology setup and issues by user](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/analysis/PDF_research-study_results.xlsx). This diagram shows the number of unique issues per step and the number of participants affected, both of which were highest for downloading the file to the user's device:

![number-of-issues-per-step](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/number-of-issues-per-step.png)

Here are the steps listed with the greatest number of research participants (of 11) affected at the top:

Process Step | # of Participants w/Issues | # of Issues
------------ | ------------| ------------------------------------
Download file to device | 10 | 15
Digitally sign form in Acrobat | 9 | 4
Fill out form in Acrobat | 8 | 8
Open file in Acrobat | 6 | 5
Download Acrobat to device | 6 | 4
Find file on device | 2 | 1

### Issues with downloading the file from the web browser to user's device

**Only 4 of 11 participants knew that they would need to download the PDF file and open it in Adobe Acrobat Reader. The other participants didn't understand this and got stuck** (most hadn't read the instructions provided), and so the moderator explained that they needed to do this. 

**Most participants (8 of 11) had difficulty downloading the file from the web browser to their device**. How the file was downloaded and whether any fields had been filled out before it was downloaded affected whether the file was fillable in Acrobat. 

- One participant using Firefox tried *Save Page As* and then opened the file in Acrobat, but the form was no longer fillable. With prompting from the moderator, the participant found the download button in the top right of the browser window.
- In Safari on iOS, you have to use the *Share* button and share it to Adobe, which wasn't intuitive. Participants using Safari on a Mac tried saving the file but not downloading it, which opens a non-editable version in the Preview application. Another participant did *Export as PDF*. The forms weren't editable until they installed Adobe Acrobat.
- In Chrome on Windows, one participant started filling out the form. Then they clicked the download button and selected *with your changes*. On one form (10-2850c), this didn't save the information they had already entered. On a different form (20-0995), the downloaded version wasn't fillable in Acrobat. Then they tried right-clicking on the *Download VA form* link and selecting *save link*, but this didn't work either. The only way to download the form so it remained fillable was to **use the download button in the browser *before filling out* anything in the form**. Another participant clicked on the *Download VA form* link and then *Keep* > *Open with system viewer*, and this version could be opened in Acrobat and filled out. Other participants using Chrome didn't know how to save the file. 
- In Edge on Windows, one participant used the *Save* button in the browser, but the saved version wasn't fillable in Acrobat. Then they tried *Print* > *Save as PDF*, and this file, too, wasn't fillable in Acrobat. Next they tried *Download* > *Show in folder* > right-click to open with Acrobat, and still not fillable. They tried right-click to open with Edge, which resulted in a fillable PDF but without the digital signature. They also tried right-clicking on the *Download VA form* link, and that wasn't fillable. Finally what worked was **right-clicking on the *Download VA form* link and choosing *Save link as***; this was fillable, but it was missing the visual indicators (shading) for the fillable fields, which made it more difficult to figure out where to type.
- **Two of the forms (10-0003k and 20-0968) displayed for some participants an error message in the browser instead of the form itself**: "Please wait...If this message is not automatically replaced by the proper contents of the document, your PDF viewer may not be able to display this type of document." Different participants had different reactions to this error message, which was confusing:
   - Thought the form was downloading (but it was not)
   - Thought their computer needed upgrading (*vs.* only Acrobat, which they weren't familiar with)
   - Liked that the message told them to open the file in Adobe
   - Thought they could download the file instead but didn't know how to do that
   - Downloaded the file in spite of the error (from Edge)
   - Didn't notice the message because their screen reader didn't read it aloud
 - A number of participants said that if they couldn't get the form, they would try something else (e.g., use their work computer, ask a friend or family member to help or print the form for them, go to the library or local VA to get the form) before giving up.

> "Frustrating to have some forms open and some not" (p12). 

> "Would be nice if you could download the form directly into Adobe...it would be faster" (p7).

### Issues with downloading Adobe Acrobat Reader to user's device

- The 3 participants using iOS mobile devices found out that the **Adobe software required to fill out VA forms (Adobe Acrobat Reader DC for Mac or Windows) isn't available for mobile devices**. When they searched for Adobe Acrobat, they found only "Adobe Acrobat Reader PDF Maker", which wasn't the app required. 
- Two participants had a really hard time installing Adobe Acrobat on their computer. 
  - One was on Windows, where the download and installation took a long time (about 6 minutes), which perhaps is partially because McAfee Security Scan Plus and McAfee Safe Connect are also installed by default (unless you un-check the option at the beginning of the install). 
  - One was on a Mac running Big Sur. The installation's progress bar stopped moving and looked stuck, and so the participant force quit the install and then started it again. The install again looked stuck but finally finished after 15 minutes.
- Two participants asked if the VA will be requiring Adobe Acrobat to open forms.
- **Three Apple users were surprised and annoyed that they had to use Adobe Acrobat** to open VA forms.

> "I’ve never come across a document that is highly recommended to use Acrobat Reader for. It makes it seem like I HAVE to download it and use that. I used to use it when I was sighted, but I’ve never used it when visually impaired" (p5, who has been using a screen reader for the last 6 years).

> "It is a pain that you have to use Adobe for some of the forms...I am getting a third master’s degree and I have not needed Adobe up until this point. I have been able to fill out all forms in Safari until today" (p12).

> "As soon as I see Adobe Acrobat, I know enough from using Apple products that that's going to be a problem. It may or may not work. I understand that there are more PCs in the world than there are Macs, and so you get the largest audience by programming for the PC, but there is a substantial number of people on Macs who use their cell phones and iPads that, to me, it's rather unbelievable that somebody wouldn't be consciously programming for the Mac" (p2).


### Issues with *finding* the downloaded file on user's device
- Two iOS users didn't know how to find files they downloaded.

### Issues with opening the file in Acrobat
- When the 3 iOS users tried to open a downloaded form in the Adobe Acrobat version they were able to install on their devices, they saw the error message **"This form requires Adobe Acrobat Reader DC for Mac or Windows", indicating that it only works with a *desktop* version of Adobe Acrobat.** The regular Adobe Reader mobile app opens files in read-only mode if it is able to open them at all, but doesn't make the forms fillable. One participant tapped on the pencil icon to fill out the form, and they got an error about it being a Protected document. Subsequent testing showed that fillable PDFs don't work on Android phones either.
- Two participants downloaded forms from Chrome, and the files opened in Edge, presumably because Edge is the default application to open PDF files.  
- When two participants clicked the downloaded files shown at the bottom of their browser, the files opened in the browser. In order to get them into Acrobat, they had to launch Acrobat and opened the files from there.
- When two participants opened files from inside Acrobat, they were prompted to set Acrobat Reader as their default for PDF files. They both appeared to not read the details in the prompt shown and simply declined. 
- Two participants opened File Manager, right-clicked on the file to open, and selected Adobe Acrobat Reader. (SUCCESS!)
- One participant needed help downloading Adobe Acrobat and using it to open the form. For the next form, they needed help again in opening it in Acrobat. For the third form, they remembered the process themselves.


### Issues with filling out the form
- One participant using a Mac was able to fill out the forms in Safari and Preview, but the fillable fields weren't shaded until they moused over them, so it was difficult to know what to fill out. This problem was resolved when the forms were opened in Adobe Acrobat.

- Another participant called out how different the forms were from each other:
> "The lack of standardization in the forms. That is such a big thing for us in the military...Standardizing these forms would mean that every form has the same outline and things are done in the same way. There should be common instructions that you can give for all forms. Any specific instructions for the particular form would be on the page where the form is" (p12).

There were many accessibility issues with the PDF forms encountered by the 4 screen reader users, which will be detailed in the Accessibility-Related Issues section below. 

### Issues with digitally signing the form
**Even with assistance, 5 of 11 people were unable to digitally sign the two PDF forms that required it.** 
- 3 participants signed in a non-digital way in Edge by using the *Draw* tool to sign their name.
- 1 participant couldn't sign form 10-2850c in Preview because there was a big "X" in the signature box. They said that they would print the form and sign below the "X". (This won't digitally sign the form.)
- When one participant saw the digital signature field prompt open up in Acrobat, they dismissed it and then clicked the *Fill & Sign* button at the top to add her drawn signature. She repeated these steps in each signature field. (This doesn't digitally sign the form.)

One participant was surprised to see the digital signature, which they recognized from having set it up previously for a school form and readily used it.
> "The first time I had to create a digital ID in Acrobat, I had to trust what was going on. I didn't think would ever need it again so I was surprised to see it. So more than one-time use--not use once and throw away" (p8).

Keywords: forms, download, digital signature

<br>

## Accessibility-Related Issues that affected screen reader users

### 1. Digital signature field invisible 

Participants using a screen reader were unable to digitally sign because screen readers (e.g., JAWS) didn't announce any place to sign. The signature field wasn't an editable field or a button, and there wasn't a label on the field. 

Keywords: forms, digital signature, accessibility


### 2. Form fields difficult to fill out 

**Some screen reader users weren't happy about having to fill out the forms in Adobe Acrobat because of perceived lack of accessibility based on their past experiences with PDF fillable forms.**
- One participant remarked that they always have trouble filling out forms in PDFs because they're not accessible. 
- Another participant expected the form to not be accessible because their screen reader didn't say anything upfront to describe it. They tabbed through the form to look at it.

**Screen reader users found it challenging to fill out these forms because of missing field labels, incorrect tab order, and multiple input fields under one label.**
- In form 10-2850c, one field was announced as "name last first middle" all run together, which participants had difficulty filling out correctly. It would be easier to understand if this field were split into 3 separate fields (last name, first name, and middle name), each with its own label.
- In form 10-0003k, there was an unlabled Edit box next to the VANEEP field, which a participant didn't understand.
- In forms 20-0995 and 10-2850c, the tab order of fields didn't follow the visual layout and logical organization of the forms. This was noticed by 2 sighted participants.

One participant had never used Adobe Acrobat before and didn't know how to navigate a PDF form and fill it out (i.e., select check boxes, type content into fields). The accessibility specialist observing the session gave this participant a bit of training, and then the participant was able to get started. Later, JAWS stopped reading one of the forms, and the accessibility specialist advised her to quit Adobe Acrobat and then come back in. Later when asked where to sign, this participant expected to find that near a *Submit* button (as on web forms, which were familiar to them). 

Keywords: forms, accessibility

### 3. Find a Form search results hard to scan 

There was no heading for each Find a Form search result, and so participants had to tab down 6 lines through each search result in order to see the next one.

Keywords: search results, headings, accessibility
<br>


# Additional Insights: Feedback on the Find a Form page

### Likes
- Easy to search and find forms
- Nice page layout 
- Wealth of forms available
- See date when form was last updated

### Dislikes
- Find a Form search could work better (e.g., search queries "job" and "career" didn't return the healthcare job application but "health jobs" did).
- Form 10-2850c was last updated in 2016 (10-2850c).
> "Seems a little old" (p9).
- Missing "When to use this form" section (on form detail page) for form 20-0968.

# Recommendations

1. **Encourage VA form owners to replace every fillable PDF VA form with a more accessible format.** Best would be HTML/web forms because they can be accessible across devices, browsers, platforms, and screen readers. Second best would be a web-based form tool that supports text entry and electronic signing of static forms (e.g., DocuSign) that is accessible across devices, platforms, and screen readers.
    
1. Since fillable PDF forms will continue to exist at least in the near term, **add instructions above each download link**--even though most people won't read them because a few might. If we want more users to see the instructions, consider making them more visible visually, though users may still skip them if they're focused on finding a download link.
    1. **Add the instructions to the form detail pages** (as currently planned), in addition to the form search results page where we tested. Consider also adding that **you must be on a computer to fill out the form**.
    1. Consider adding **detailed platform-specific instructions (e.g., mobile/desktop, Windows/Mac, Chrome/Edge/Safari/Firefox) to the R&S article** that cover ALL of the specific steps that may be required (as detailed in the diagram above). Here is an [example of platform-specific instructions](https://portal.ct.gov/DEEP/About/Tips-for-Viewing-and-Using-Fillable-PDFs).
        1. We need to be clear that mobile devices CANNOT be used to fill out the forms online and provide alternate instructions (i.e., use a computer with Adobe Acrobat Reader to fill out the form, or print the form and fill it out on paper). Note that **mobile users comprise a sizable proportion of visits to Find a Form--15% to the Find a Form page and form detail pages** and 13% of form downloads (according to analytics data from 1/1/2021 - 8/11/2021). This proportion may grow with better access to the Find a Form page, as **46% of VA.gov visits are from mobile devices**. 
        2. When crafting instructions, be aware some users (especially Mac users) may be unfamiliar with Adobe Acrobat or reluctant to use it. Note that **12% of visits to Find a Form are from Macs** (according to analytics data from 1/1/2021 - 8/11/2021).

    1. In the R&S article, copy the "Get Acrobat Reader for free from Adobe" link to just below the numbered steps (so it's easy to see after reading the steps).
1. On the Find a Form search results page, **add an H3 heading above each search result** to enable easy scanning down the list of search results while using a screen reader. *UPDATE: This was fixed as of 8/12/2021.*
1. **Encourage VA form owners to fix the accessibility problems encountered in these forms**.
    1. All digital signature fields need a label (e.g., "signature button") or some indication of how to find it and what to do.
    2. Every fillable field needs its own label
        1. In form 10-0003k, there was an unlabeled Edit box next to the VANEEP field.  
        1. In form 10-2850c, the "name last first middle" field should be split into 3 separate fields (last name, first name, and middle name), each with its own label.
    1. In forms 20-0995 and 10-2850c, the tab order of fields should follow the visual layout and logical organization of the forms. 


# Next Steps

Share findings and recommendations with the Decision Tools team. 


# Further research needed

None at this time

# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/conversation-guide.md)

[Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/notes)


## Tools used for Synthesis

- [Synthesis spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/analysis/Find%20a%20Form%20PDF%20Downloading%20notes%20%26%20data%20analysis%20(7).xlsx)
- [Technology setup and issues by user](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/analysis/PDF_research-study_results.xlsx)
- [Mural board for user steps](https://app.mural.co/t/vsa8243/m/vsa8243/1628022580962/ff307182df2400489fee75782bd37f5879cca3a1?sender=ua2ff9f6c0031cb4999ae6676) 
- [Quantitative analysis including analytics data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/analysis/Quantitative%20Analyses.xlsx)

## Pages and applications used

### Find a Form page on Staging

![find-a-form-staging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/find-a-form-staging.png)

### Design #1: Instructions at the top of the list of forms

![UI-alert-at-top](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/UI-alert-at-top.png)

### Design #2: Instructions repeated above every form download link in a light blue box

![UI-alert-repeated-blue-box](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/UI-alert-repeated-blue-box.png)

### Design #3: Instructions repeated above every form download link in gray help text

![UI-help-text-repeated](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/UI-help-text-repeated.png)

### Resources and Support article linked to from "Get instructions for opening the form in Acrobat Reader" and "Read More" links in above designs

![R&S-How2download](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/R%26S-How2download.png)



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
* Mobile screen reader: 1 (VoiceOver on iPad)


## Underserved groups we haven’t talked to 

This research may not include the perspectives of the following underserved Veteran groups:
* Identify as Hispanic, Asian, or LGBTQ+
* Other than honorable discharge
* Immigrant origin
* Expat (living abroad)
* Users of Assistive Technology other than screen readers

<br>

![recruitment-checkers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/images/recruitment-checker2.png)
