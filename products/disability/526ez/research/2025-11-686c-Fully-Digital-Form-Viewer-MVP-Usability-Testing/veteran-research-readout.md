# Research Report for 686c Fully Digital Form Viewer MVP Usability Testing with Veterans

Office of the CTO - Digital Experience (OCTO-DE), 686c MVP Form Viewer, Disability Benefits - Employee Experience Team

Date: 12/11/2025

**Contacts:** Riley Orr, Jessica Sutantio, Kevin Shih

## Background

As a part of the Fully Digital Forms project MVP, we need a Form Viewer that can render structured form data and replace the current form PDF -- both for VSRs working the claim and for Veterans saving as a copy of their submission.  

The proposed solutions aim to create a single form viewer that allows Veterans to view and save a copy of their form submission and VSRs to view the form in a manner that maintains data integrity and either integrates within or enhances their claim processing workflow. With a focus on scalability to other forms, we aim to determine if a single form viewer that is shared between Veterans and VSRs can address both their needs while not being detrimental to the other.   

In this study, we showed Veterans 3 different versions of our proposed Form Viewer solution to capture what works best for them when they are saving a copy of their form submissions. 

## Research Goals and Questions

Goal 1: Understand current user processes/ workflows with regards to accessing and using the form viewer

* Context: When and how would Veterans use or encounter this form viewer?
* What do Veterans do with the information from the form viewer? What happens next in their workflow?

Goal 2: Gauge users' expectations, reactions, and preferences for how the form sections, questions, and answers are laid out

* Is the general layout and content hierarchy understood by Veterans?
* Baseline concept: Can Veterans easily distinguish sections and repeating subsections (such as multiple children) from another?

Goal 3: Evaluate whether users are able to navigate through the form viewer and identify their preferred methods

* How do Veterans normally navigate form viewers? Scrolling, keyboard tabbing, etc.?
* Are Veterans typically looking for specific information or looking at the form viewer in its entirety?
* What would Veterans expect to happen when they click on the navigational components, and would they use it?

Goal 4: Understand what information is most important and preferences for how it would be displayed

* Is there information that's missing that Veterans would like to see?
  * Is there information that Veterans would like to be emphasized?
* Is there too much information? What would Veterans like to remove or de-emphasize?

Goal 5: Understand how the proposed concepts compare to the current solution and what would be ideal -- including how the proposed concepts impact downstream tasks

* How do these concepts compare to how Veterans would normally view the form viewer?
  * Are there any features or qualities that are missing?
* Is there anything Veterans would wish to have?

## Hypotheses and Conclusions

The [Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-Fully-Digital-Form-Viewer-MVP-Usability-Testing/topline_summary_veterans_only.md) contains initial takeaways based on the research hypotheses and confirms whether the hypotheses were validated or invalidated. 

## Key Findings

1. Although only half of our participants would print/download their copy of submissions right after submitting, all of them understood its value for record-keeping and contingency purposes.
2. All participants agreed that both baseline concepts achieve the goal of providing a copy of the submitted form -- with the majority preferring the VADS Minimal design due to its greater legibility.
3. Many participants noted that the content displayed was very "busy" and required a lot of vertical scrolling; however, they also understood that the intended artifact is a comprehensive output of all their form responses.
4. On the form viewer, Veterans only want to see sections and questions that they interacted with in their application.
5. Overall, participants had positive reactions to the design that included interactive elements. However, there were nuances as to which features participants found helpful.
6. Participants were generally driven by the need to confirm that their application was successfully submitted as well as knowing where their application is within the "lifecycle" of a claim.  

## Details of Findings and Recommendations

### Finding 1 - Although only half of our participants would print/download their copy of submissions right after submitting, all of them understood its value for record-keeping and contingency purposes.

Before engaging with our form viewer prototypes (on the Confirmation Page), 4 out of 8 participants organically articulated that they would download a copy of their form submission if they were in our test user's scenario. All 4 participants said they would review their copy of submission again right after their submission.

* _"I printed it out just to make sure that I had all the information and then I submitted it electronically." (P4, mobile)_
* _"I'm going to double check and make sure that whoever I was trying to add is here, like make sure that my stuff is input correctly." (P2, desktop)_  

Although P4 and P9 have experience using their copies of submissions as references to fill out other forms, all 4 participants strongly agreed that they would mostly be saving their copies of submissions as a receipt for record-keeping and contingency purposes. 

* _"After dealing with the VA so long, it's always good to have a copy of everything you've sent them." (P3, desktop)_
* _"I think \[with\] my time in the military, you always want to have some type of receipt or confirmation... so then if anything happens or like for example, my, my father-in-law, he was in the Marines, and his record was involved in the fire and so he had no records at all of military compensation." (P4, mobile)_
* _"There can be discrepancies sometimes when an organization says they actually received something versus what I show on my end where I can prove when I actually submitted it." (P2, desktop)_  

Among the 4 participants who would not save a copy of their submission, P1 and P10 didn't feel like the act was necessary because they believed that all of their forms are retrievable on [VA.gov](http://va.gov/).

* _"Me personally, I don't save or print stuff because I know that if I just go back to the [VA.gov](http://va.gov/) website, it's all there and I can pull it back up." (P1, desktop)_
* _"I don't feel like it's necessary because I know the VA has it." (P10, mobile)_  

Given most of their experience with submitting forms on [VA.gov](http://va.gov/) consisted of printing forms out, filling them out, and uploading them and/or working with a representative who gave them an electronic copy of their submission, saving a copy of their form answers right after submission didn't come naturally to P6 and P8\. However, they recognized the value of having a copy of what they submitted, with P8 even working with a representative from Disabled American Veterans to correct an error that the VA on their disability benefits claim using a saved copy of their application.  

In sum, although only half of our participants would save a copy of their submissions right after submitting their applications, all of our participants understood the value of having a copy of their submissions. All of them would like a receipt to their applications that they could refer to when the VA comes back to them with questions/issues with their applications.  

#### Recommendations

* Don't optimize the form viewer for Veteran's post-submission scenario, optimize for their error remediation scenario.
  * Facilitate communication between Veterans and the VA to ensure the Veteran has a copy of submission that is syntactically identical to what the VSRs and VA representatives see.
  * Optimize designs so Veterans can efficiently recollect what was submitted (especially at a future date of retrieval).
* Ensure that the form viewer is retrievable in another location that is more permanent and beyond the Confirmation Page.
* For the time being, explicitly indicate that the form viewer is not retrievable once they leave the Confirmation Page.

### Finding 2 - All participants agreed that both baseline concepts achieve the goal of providing a copy of the submitted form -- with the majority preferring the VADS Minimal design due to its greater legibility.

The two baseline concepts (VADS Minimal and BAM Maximal) both contained content hierarchy and layout features that were intuitive and understood by participants:  

**Chronological order** - The form viewer mimicked the chronological order of the application; which enables users to quickly locate specific information. During testing, the time to locate filenames and certification signatures was relatively quick and similar between the two baseline concepts. Most participants expected these items to be located at the bottom of the page, which mimics the order of the form's questions and tasks.

_"Normally it would be the very last thing that you would do to upload your evidence... So I would automatically look at the very end of the document... that's where it would be located." (P4, mobile)_  

**Text hierarchy** - The participants recognized the header styling (size, weight, color) hierarchy and commented that it helped differentiate sections and subsections. Using headers to denote repeating subsections (list and loop content) helped users distinguish them apart, especially when paired with sufficient padding between long subsections (e.g., Child 1 and 2).  

_Some participants commented that the grey header text did not stand out, which "makes the info seem unimportant, especially compared to the questions that are bolded." (P6, mobile)_  

**Divider line** - The horizontal gray line between each section helps break up the content and clearly distinguishes the start and end of sections, especially when a single section can extend beyond the screen.  

_"Every time it goes to another section \[it\] has that line right there. It's not just one big application. It kind of breaks it up a bit so you can kind of know where you are, and you're not discombobulated by this one big, long application." (P10, mobile)_

<img width="707" height="449" alt="divider example" src="https://github.com/user-attachments/assets/61b751ac-59ff-4737-be0a-607a98487f3c" />

_Caption: Horizontal grey lines break up sections such as ‘Add one or more children’, ‘Additional information’, and ‘Certification and signature’._

**Bolded Q or A text** - Bolding either questions or answers help distinguish the questions and answers apart; thus increasing the ability to skim and review the page. Many preferred when the answers were bolded because it made the text that they input or "change" stand out more, which helps them quickly review their answers at a glance.  

_"I like the fact that some of the information is bold, which stands out." (P1, desktop)_  

<img width="463" height="301" alt="VADS with bolded answers and numbers" src="https://github.com/user-attachments/assets/6bca87bf-50e8-43e0-b17c-a15e64a90e30" />

_One of the prototypes tested that includes numbered questions with bold answers._ 

**Numbering** - Numbering questions and (sub)sections also help differentiate one question or (sub)section from another, facilitating quick review and spot-checking. If the Veteran has to later communicate with a VA representative regarding their submission, the participants noted that the numbered questions help pinpoint areas that need addressing, especially when different sections ask similar questions.  

* _"It's not all cluttered... neatly with each number being on their own line." (P2, desktop)_
* _"If I was to review this and I have it numbered, I can make sure that I didn't miss anything and that I covered everything." (P10, mobile)_  

The main difference between the two baseline concepts was the increased text size and spacing of the headers:  

When tasked to distinguish repeating subsections (list and loops), all but one participant were able to distinguish subsections. The subsections within the VADS Minimal concept were easier to distinguish than in BAM Maximal due to the legibility of the headers.  

Despite the success rate (for a task to locate specific subsection information) being similar between the two baseline concepts, participants were observed to complete the task slower with the BAM Maximal concept. Presumably due to the smaller text size and color of the subsection header, it is easier to miss the start of a subsequent subsection.  

Regardless of device type, most prefer the VADS Minimal concept because the text is larger.

* _"The font seems bigger... more spacing between... easier to read, less squinting." (P8, mobile)_
* _"The letters are so little. It would be better when they were big." (P10, mobile)_  

Although less preferred, Veterans are tolerant of the text styling of the BAM design system. The formatting for both concepts is considered legible and usable and achieves the Veteran goals when they choose to  save a copy of their submission.

<img width="1024" height="635" alt="Side by side comparison" src="https://github.com/user-attachments/assets/7f381322-573b-49fe-998b-97f2ddcce060" />

_A side-by-side comparison of the BAM text styling (left) and the VADS text styling (right)._

#### Recommendation: 

* Ensure that the questions, answers, and actions are displayed in the form viewer in the order at which they are requested during their online application.
* Specifically for Veterans using [VA.gov](http://va.gov/), maintain the use of the existing VADS text styling and heading levels for both desktop and mobile.
  * Follow a logical heading structure that sequentially increments levels rather than jumping levels, for example: using H1 to H2 to H3, rather than jumping from H1 to H3 without using H2 in between.
  * Consider additional styles that go beyond H4 and colors, to accommodate forms that have even greater hierarchy structure than form 686c.
* Ensure that there is sufficient contrast (whether by text size, color, or weight) between the header and the rest of the body text so that users can easily identify (sub)sections. 
  * Be wary of using colors and weights that are too light, which can cause text to be overlooked. 
* Use the VADS horizontal dividers between sections.
* Bold the answer text.
* Create a print style that allows users to print or digitally save the form viewer in a format that looks legitimate (contains certification, removes excess online-only components, optimized for letter-sized document).

### Finding 3 - Many participants noted that the content displayed was very "busy" and required a lot of vertical scrolling; however, they also understood that the intended artifact is a comprehensive output of all their form responses.

Participants provided various reasons why the content appeared "busy" including too much scrolling due to dense information and numbers minorly cluttering the page. However, folks also mentioned that the page is understandably long because it's showing all the information they filled out on the form. One participant pointed out that there is a lot of information but it's important to have all the information provided. 

* _"It's pretty busy...it could be presented in a\[n\] easier to read format" (P3, desktop)_
* _"There is a lot of scrolling to see very much information here."; "it's just a lot of scrolling to get there." (P9, desktop)_ 
* _"Obviously you need all the information... I don't think there's anything that I would take out." (P9, desktop)_ 

There were many suggestions on how to improve the layout so it's less cluttered, including: 

* Potentially displaying the form data in a table format (P9, desktop)
* Nesting sections inside of an accordion with the existing section headers becoming the accordion headers (P6, mobile)
* Consolidating similarly related data fields into one line. For example, a name could be consolidated into one line of the full name rather than split into 3 separate lines of first name, middle name, and last name (P1, desktop)
* 2 participants mentioned removing redundant information and explicitly called out the child section where the child's full name is in the heading and is immediately listed below again as three lines (P1, desktop; P6, mobile)

<img width="697" height="282" alt="Add a child example" src="https://github.com/user-attachments/assets/c705d484-ee24-461b-9849-6c903d690bf0" />

_One of the “Add one or more children” sections participants were shown. This is an example of redundant information that participants pointed out._

#### Recommendation: 

* Consider a design iteration exploration exercise that incorporates some of the layout improvement suggestions to determine what might be technically feasible and appropriate for improving legibility.
* Consider if utilizing some of the interactive features (ex. "On this page" component, summary card) in addition to the suggestions above influences the data's legibility. 

### Finding 4 - On the form viewer, Veterans only want to see sections and questions that they interacted with in their application.

When shown the BAM Maximal design, participants preferred not to see the sections and questions that were skipped or unseen by our demo user. Not only did some participants find it confusing, but many voiced that it was a burden to review when sections that were irrelevant to their changes in the application were included in the form viewer.  

* _"If I purposely did not fill this out and I submitted it and to see it again, it would make me kind of second guess... Did I forget to do this? Or is this something that I should have done? And then I'd have to jog my memory as to why \[I\] didn't fill it out." (P4, mobile)_
* _"\[This BAM Maximal concept\] is very complete, but why couldn't it just focus on what I just changed? That would make it a lot easier, quicker to review." (P3, desktop)_
* _"I feel like if it doesn't apply \[to me\], it shouldn't even be there." (P10, mobile)_
* _"I'd only expect to see the sections that I actually interacted with the form." (P9, desktop)_

If they need to see skipped and unseen questions/sections in the form viewer, P2, P4, and P8 would like to just see the section headings, with explicit indication that the sections were not applicable to the action they are making with their application.

#### Recommendation: 

* Prioritize showing only the sections and questions that are relevant to the applicants in the form viewer so it is less of a burden for Veterans who want to review the information they submitted.
  * Consider only showing the content that is shown in the VADS Minimal design.
  * If it is crucial to show all the sections and questions of the application in the form viewer, consider showing the skipped sections with a clear indication that the section was unseen or skipped by the Veteran.

### Finding 5 - Overall, participants had positive reactions to the design that included interactive elements. However, there were nuances as to which features participants found helpful. 

After navigating through the BAM Maximal and VADS Minimal designs, participants were directed to a VADS Minimal design that included additional features such as a summary box, navigational support, and print button. Participants collectively liked this design; however, there was individual preference for the features included. 

#### Feature 1: OMB Timestamp 

<img width="695" height="184" alt="OMB timestamp in header" src="https://github.com/user-attachments/assets/48a736e2-5ca0-4298-8fe6-639e5e78e285" />

_The OMB and timestamp as shown below the page’s header._

<img width="752" height="302" alt="timestamp in cert section" src="https://github.com/user-attachments/assets/58011a7e-66d2-42eb-8322-5c6e29bedbb7" />

_The timestamp as shown on the bottom of the page as part of the Certification and Signature section._

4 participants mentioned that they found it helpful seeing the time of submission.

* 1 participant (P10, mobile) noted that they didn't think the details needed to be positioned on both the top and bottom of the page and that they're more used to seeing this information towards the bottom. 
* 1 participant (P1, desktop) missed the timestamp at the top of the page but mentioned they wanted to see a submission date/time.   

_"I like the fact that it's, it's giving me information about when it was signed and submitted." (P9, desktop)_ 

##### Recommendation: 

* Keep the OMB and time submission information. 
* Keep the time submission information both at the top and bottom of the page to account for folks that might have different expectations for where they might expect the information to be located. 

#### Feature 2: Print button 

<img width="707" height="352" alt="Print button" src="https://github.com/user-attachments/assets/5f7c66ec-fd11-4eb9-b00c-9b552dd624ba" />

_The print button was placed in between the OMB/timestamp and “On this page” sections towards the top of the page._

4 participants desired having an explicit print button, although 3 of those same participants did note that they would be able to print using the browser's print feature. Participants understood the print button's functionality, with 5 explicitly stating that they'd expect the print dialogue modal to come up if they clicked it. 2 participants mentioned that they'd be able to print a physical copy or save it to their computer.   

* _\[With no print button\] "it would be kind of like more tedious for me to print it." (P2, desktop)_
* _"That would be what I'd be looking for. Something like that would make it easier than fumbling around and figuring out 'I got right click or something.' (P3, desktop)_

##### Recommendation: 

* Include the print button in the final design and keep the location towards the top of the page. 
* Provide this data to the VA Design System team to link from [the research findings section](https://design.va.gov/patterns/help-users-to/keep-a-record-of-submitted-information) of the Keep a record of submitted information pattern page.     

#### Feature 3: Summary box 

<img width="688" height="318" alt="Summary box" src="https://github.com/user-attachments/assets/5942cb61-f533-48fd-b90b-7e24280a855b" />

_The application details summary box utilized the blue card design from the VA Design System and displayed: the claim ID, time of submission, and list of supporting documents uploaded._

It's inconclusive if the summary box is needed, as some participants mentioned finding it helpful for specific reasons while others mentioned not needing to view it right after submitting their form. 

* 3 participants found it helpful for reasons such as: communicating with VA, having confirmation of submission, and encompassing the most important items about their submission. 
* 1 participant didn't find the summary box helpful   

2 participants mentioned that they'd expect to see explicit indication of what was being added or removed as part of the submission (ex. adding a child, removing a spouse). Participants overall approved of the summary box's position on the page; however, 1 participant mentioned they'd like to see it above the print button.   

* _"This information might help me to say, well, I did it on here's my claim number and I submitted it on this date." (P3, desktop)_
* _"I don't think it's useful because if I call the VA and I have a question, I'll confirm my last 4 of my social or whatever they ask me. They can go into my file and see that I have to open claims." (P10, mobile)_  

##### Recommendation: 

* The team should evaluate the feasibility of incorporating an application summary card as part of MVP from a technical and scalability standpoint.
* This pattern should be tested within the context of another form as the team scales to building the form viewer for additional forms. 

#### Feature 4: "On this page" + "Back to top" component combination 

<img width="343" height="264" alt="On this page component" src="https://github.com/user-attachments/assets/d158f1d8-fa45-4834-b596-47bda269c266" />

_The “On this page” section contains hyperlinks to the section headers throughout the form viewer page._

<img width="703" height="344" alt="Back to top component" src="https://github.com/user-attachments/assets/5274bf59-00a4-4163-a3f8-6b8554167681" />

_The “Back to top” component as displayed to the right of Child 2’s information would take participants back to the top of the page._

6 participants explicitly stated how they expected the component to work and it aligned with the component's interaction design. 5 participants liked the component, with 4 mentioning they would use it to navigate to specific information they're looking for rather than scrolling.   

3 participants mentioned they either weren't sure how beneficial the component would be since they're reviewing information or that they didn't want to see the component at all. However, 1 of these same participants did also note that if they needed to refer to this information at a later date they would use this feature rather than manually search the page.   

5 participants thought the "Back to top" component was convenient and a quick way to return to the top of the page.  

* _"I would expect it's going to take me right to that section." (P9, desktop)_
* _"Convenient and fast" (P4, mobile)_ 
* _"Helps pinpoint specific sections "without memorizing the order of everything." (P2, desktop)_
* _"If I've already submitted the application, I may not use \[the on this page component\] at all unless, unless someone responded to me in some way saying, 'hey, we're missing some piece of information.' Then I might come back to this page and go to that section on this page instead of searching for it." (P3, desktop)_
* _\[Back to top component\] "It's faster... you want things that are faster instead of this long, like form that you're just scrolling, scrolling, scrolling." (P10, mobile)_ 

##### Recommendation: 

* Include both the "On this page" and "Back to top" components as part of the MVP design. 
* Provide this data to the VA Design System team to link from a research findings section of [the "On this page"](https://design.va.gov/components/on-this-page) component page.

#### Feature 5: Potential search bar 

When asked if participants would like a search bar feature, it was unanimous that a search bar was unnecessary especially if the "On this page" component was implemented. 

Multiple participants couldn't envision ever needing search functionality given that they're reviewing accuracy of information and the low likelihood of needing to search for something specific in the future. Participants still preferred the "On this page" component when considering the scenario of needing to search for something at a later date. 

* _\[When asked about a search bar\] "I never know the right keyword" (P3, desktop)_
* _"Probably the only time I would search for anything is if I got some kind of response saying something was missing" (P3, desktop)_ 
* _"I know how the United States government is, I love them, but I double and triple check everything before I submit it to make sure that everything is correct. I didn't make any typos, I uploaded everything that needed to be uploaded. So me personally, no \[I would not search for specific pieces of information on this copy of submission\]" (P1, desktop)_ 

#### Recommendation: 

* Do not include a search functionality. 
* Do include the "On this page" component as part of the MVP design. 

### Finding 6 - Participants were generally driven by the need to confirm that their application was successfully submitted as well as knowing where their application is within the "lifecycle" of a claim.

When on the confirmation page, participants were initially interested in confirming their application was submitted and understanding their next steps. They understood that the claim was in VA's hands at that point and they'd receive an update later. 

* 3 participants initially checked their submission's status. 
* 3 participants were also more interested in knowing the claim's next steps rather than necessarily saving a copy of the application's information.   

Participants also downplayed the need to download or save their form submission because they trusted that VA and [VA.gov](http://va.gov/) saves the information and they'll be able to retrieve it later if needed. 4 participants thought they'd be able to retrieve their completed form later on [VA.gov](http://va.gov/). 4 participants also mentioned that they didn't need to save the submitted form because they had just reviewed the information prior to submitting it so they know it's accurate.   

* _"All I do when I submit a form like this, all I may do is go back to the beginning of the va.gov website to see if I have an answer. And if there's no answer, I never go back to the form because I double triple check. So I would never come back to this form" (P1, desktop)_
* _"I don't feel like it's necessary \[to save/download\] because I know the VA has it." (P10, mobile)_ 
* _"I can just go back to the home screen and see it there." (P1, desktop)_ 
* _"When I submit that additional information, I'm expecting that I would get back to this same form with the additional information" (P9 desktop)_ 

#### Recommendation: 

* Make it explicitly clear that once Veterans navigate away from the form's confirmation page, they are no longer able to retrieve their submitted form.
* Build a feature that allows Veterans to access their submitted form information after they navigate away from the confirmation page.   

### Secondary Findings

Most participants engage with VA forms via their laptops, even those who participated in our study on their mobile device. 

* 7 participants stated that they typically access [VA.gov](http://va.gov/) and fill out forms on their laptops 
* 1 participant usually fills out forms with their iPad 
* At least 2 participants have filled out VA forms by downloading and filling out the paper or PDF version and then scanning/uploading the signed copy to [VA.gov](http://va.gov/). 
* This may either be sampling bias given the remote nature of testing or may indicate a pattern pointing to optimizing for desktop screens rather than mobile for online VA forms. 

---

## Next Steps

Our team is collaborating with the VBMS Design Team to conduct a VSR-facing version of this research. We will present similar design variations within the context of the VSR's work queue to get an understanding of how best to organize form data for their needs. Our goal is to understand if the same design can be used for both Veterans and VSRs or if variations need to be created to accommodate both users' varying needs.

We will then synthesize the data from that research similarly to this one and compile a research readout. Afterwards, we will discuss the similarities and differences in needs and prioritize features for each user group. A design iteration for both the Veteran-facing and VSR-facing form viewers will follow shortly afterwards.

### Further research needed (things that were out of scope)

Firstly, we will identify gaps in this study that require additional investigation - such as demographics that were not included in this study.

Given that one of our findings was that Veterans expect to be able to find the form viewer after navigating away from the confirmation page, we should consider building that functionality. As part of that, we should do discovery research to understand where Veterans expect to find their completed forms after navigating away from the confirmation page.

## Appendix

### Methodology

Moderated usability testing with interactive Figma prototypes. All participants tested 3 different concepts of our proposed Form Viewer solution:  

1. \[Orange\] Baseline: Benefits, Appeals, and Memorials (BAM) Maximal
  * Utilizes BAM's BID component library, which is the design system for Veterans Benefits Management System (VBMS)
  * Includes all questions (regardless of a provided answer) that are available online
2. \[Lemon\] Baseline: VA Design System (VADS) Minimal
  * Utilizes the [VA.gov](http://va.gov/) design system (VADS)
  * Includes only questions and answers that were answered online
3. \[Apple\] VADS Minimal + interactive features
  * Utilizes the same content and design system as VADS Minimal, but includes additional, interactive components (print button, on this page, back to top, summary box)

To avoid order-bias, we had 1/2 the participants start with BID Maximal and the other 1/2 start with VADS Minimal; proceed to either VADS Minimal/BID Maximal (whichever one they haven't seen); and then all participants end with testing the VADS Minimal + "a la carte" features.

#### Tools used for Synthesis

We went through two rounds of affinity mapping in \[this Mural\](https://app.mural.co/t/aquia8700/m/aquia8700/1764782240163/f9bcf737ef38bfd3f72a36727d52d807fd5a56eb?sender=u79da08b2a34c1edcd6af8652) around:

1. The research questions 
2. General finding groupings 

#### Pages and applications used

* \[Desktop\](https://www.figma.com/proto/EoYnokGp9aSgy5JrDVqp5L/686c---Form-data-viewer---Fully-Digital-Forms?node-id=3770-29642&t=wjPq2fgrbIiKrNQS-1)
* \[Mobile\](https://www.figma.com/proto/EoYnokGp9aSgy5JrDVqp5L/686c---Form-data-viewer---Fully-Digital-Forms?node-id=3770-29959&t=wjPq2fgrbIiKrNQS-1)

#### Other supporting documents created

\[Fully Digital Forms Mural\](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1756308448819/8854c4e6aad8036acc29f3a97234e1a622d1a057?sender=u46f43f1f9fe014c3d3e11934) with user flows and other notes

\[Veteran and VSR Discovery Research\](https://dsva.slack.com/docs/T03FECE8V/F09EYUWP49E)

### Research participants

Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic.

[Example Research participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md#research-participants)

#### Recruitment criteria

If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants.

#### Demographics

We talked to 8 participants.

Audience segment:

* Veterans: 8
* Caregivers: 0
* Family members of a Veteran: 0

Gender:

* Male: x
* Female: 4

LGBTQ+: Unable to access this data at this time

* Transgender: N/A
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: N/A
* Gay, lesbian, or bisexual: N/A

Devices used during study:

* Desktop: 4
* Tablet: 0
* Smart phone: 4
* Assistive Technology: 0

Age:

* 25-34: 0
* 35-44: 2
* 45-54: 2
* 55-64: 1
* 65+: 3
* Unknown: 0

Education:

* High school degree or equivalent: 0
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 2
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0
* Professional degree: 1

Geographic location:

* Urban: 5
* Rural: 3
* Unknown: 0

Race:

* White: 4
* Black: 2
* Hispanic: x
* Biracial: 1
* Asian: 0
* Native: 0
* Prefer not to answer: 1

Disability and Assistive Technology (AT):

* Cognitive: 4
* AT beginner: N/A
* AT advanced user: N/A
* Desktop screen reader: N/A
* Mobile screen reader: N/A
* Magnification/Zoom: N/A
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: N/A
* Hearing aids: N/A
* Sighted keyboard: N/A
* Captions: N/A

#### Underserved groups we haven't talked to

This research does not include the perspectives of the following marginalized Veteran groups (to our knowledge): 

* Other than honorable
* Immigrant origin 
* Expat (living abroad)
* Hispanic, Latino, or Spanish origin
* Asian
* Native Hawaiian or other Pacific Islander
* First Nations (Canada)
* Native, American Indian or Alaska Native 
* Gay, lesbian, or bisexual 
* Transgender
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman
* Any AT users

Note: It's possible some of the groups above are represented. However, we didn't explicitly track some data including "Other than honorable", "Immigrant origin", or LGBTQ+ in this study. It's possible our participants identify as being part of those groups. Additionally, one of our participants chose to not disclose their ethnicity. 

<img width="845" height="736" alt="demographic table" src="https://github.com/user-attachments/assets/1d621121-1edd-425e-bad5-75fa15057005" />

#### A more accessible version of the table in the above image  

| Category | Target % | Target # | # in Study | Target Achieved? | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| All participants | Total | n/a | n/a | 8 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Assistive Tech (AT) users | Total | n/a | n/a | 0 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| No-show participants | Total | n/a | n/a | 4 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Age 55-64+ | General | 50% | 4 | 4 | yes | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |
| Cognitive Disability | General | 50% | 4 | 4 | yes | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Mobile user | General | 50% | 4 | 4 | yes |  |  |  | 1 |  | 1 | 0 | 1 | 0 | 1 |
| Rural | General | 25% | 2 | 4 | yes | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| No degree | General | 25% | 2 | 2 | yes | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| Other than honorable | General | 21% | 2 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | General | 17% | 2 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | General | 10% | 1 | 3 | yes | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Expat (living abroad) | General | .4% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Black or African American | Race | 15% | 2 | 2 | yes | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hispanic, Latino, or Spanish origin | Race | 12% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Biracial | Race | 3.9% | 1 | 1 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Asian | Race | 2.7% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native Hawaiian or other Pacific Islander | Race | .3% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | Race | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | Race | 1.6% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Gay, lesbian, or bisexual | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Beginner AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Experienced AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Desktop Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Magnification/Zoom | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Speech Input Tech (Siri, Dragon) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hearing Aids | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Sighted Keyboard | AT | 10% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Captions | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Switch Device | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Braille Reader | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### Research documents

* \[Product Outline\](link here)
* \[Research plan\](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-Fully-Digital-Form-Viewer-MVP-Usability-Testing/research-plan.md)
* \[Conversation guide A\](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-Fully-Digital-Form-Viewer-MVP-Usability-Testing/conversation-guide-a.md)
* \[Conversation guide B\](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-Fully-Digital-Form-Viewer-MVP-Usability-Testing/conversation-guide-b.md)
* \[Interview notes\](https://docs.google.com/spreadsheets/d/16GIPnDxM\_Ox3RVaY7xklznlHZx3WuQkR7AJ69DxwIIo/edit?usp=sharing)
* \[Topline summary\](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-Fully-Digital-Form-Viewer-MVP-Usability-Testing/topline\_summary\_veterans\_only.md)
