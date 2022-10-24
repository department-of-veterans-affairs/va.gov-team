# Supplemental Claims MVP Prototype Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Decision Reviews, Benefits Team 1**

Date: 10/2022

Pamela Hastings pamela.hastings@adhocteam.us

<br>

**Jump to:**

[Hypotheses and conclusions](#Hypotheses-and-Conclusions)

[Key findings](#Key-findings)

[Recommendations](#Recommendations)

[Who we talked to](#Who-we-talked-to)

[Further research needed](#Further-research-needed)

# Background
As per the Appeals Modernization Act of 2017, Veteran and non-Veteran claimants seeking to correct perceived discrepancies in their benefit awards must submit new and relevant evidence by initiating the supplemental claim process. To do this, they must submit the Supplemental Claim form (VA Form 20-0995). 

Of the three decision review pathways, supplemental claims are the most widely used. More than 32,000 supplemental claims are filed each month (more than double the number of board appeals and higher-level reviews, combined) which indicates that streamlining and enhancing this pathway has an outsized potential to impact the lives of Veterans and their families.

The passing of the PACT Act is expected to have significant impact, as previously denied Veterans will be encouraged to file a Supplemental Claim.

[Research presentation PDF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/MVP%20Usability%20Research/Design%20and%20Research%20Share%20-%20SupplementalClaimsUsability.pdf)

# Research Goals

1. Determine if the process of filing a Supplemental Claim is clear and actionable.

2. Determine if the user can identify or successfully add the issues they need to appeal.

3. Validate that users can successfully submit new and relevant evidence needed for a favorable decision.

# Research Questions

* Do users understand if this is the right form for them?
* Do users understand how to file claims other than disability?
* Do they understand that they need to sign in to complete the form online?
* Do any users understand that the VA has data on file for them and what it is?
* Do users understand what new and relevant evidence means?
* Do they understand the relationship between issue, evidence and time in service?
* Do users know when they have everything they need to successfully complete the form?

# Methodology 

We conducted hour-long remote moderated research sessions via Zoom on September 22-29, 2022. Participants were asked to file a Supplemental Claim for disability and to submit new and relevant evidence via identifying where VA should request records from a VA or private medical facility, as well as uploading their own documents. 

We opted to test with a [mobile prototype](https://www.figma.com/proto/JveclTFbNNSmx4eiYwbZdZ/Supplemental-Claims?node-id=72%3A6961&scaling=scale-down&page-id=10%3A1697&starting-point-node-id=70%3A5676) to focus on ability to complete the form in a restricted screen space and to gauge the form length. Further usability on desktop screens is recommended.  

# Hypotheses and Conclusions

* We believe that all users will be able to successfully complete a Supplemental Claim.
**Likely True.** 

  _Participants were guided to complete a specific scenario with some fields pre-filled due to the constraints of the prototype. Participants were asked to rate the experience on a confidence scale of 10, with 10 being the most confident, and all participants rated it over a 5, and all but 1 participant rated their confidence above an 8. All partipants saw offering the form online as a positive._

* We believe Veterans will understand the decisions they need to make with the content presented to them.
**Likely true.** 

  _Veterans understood the decisions and the processes presented in the prototype, however, they expected their records to be searchable in a database if they had been treated at VA facilities. They understood the need to authorize the release of private medical records to support their claim, and the process of uploading supporting documents, but they expected the VA to be able to obtain their records based on their contention, and struggled with the need to identify the exact dates where and when they were treated by VA medical facilities._

* We believe Veterans will be able to achieve a more favorable outcome by submitting a Supplemental Claim via this digital experience.
**Maybe True.**

  _8 out of 9 Veterans rated their confidence level as high for submitting this form, and generally believed this would speed things up. It was unclear if they believed this would make their claim outcome more favorable, as most participants communicated a general frustration with claims processing. Most participants had an expectation to wait a long time to hear back from VA and expected to be denied, and for their claim to be reviewed unfairly or not thoroughly. Many Veterans were frustrated with the need to provide evidence they believe the "VA should already have."_

# Key Findings

1. Representing form progress as “steps” confused some users. Users expect the progress bar to be true to the number of steps they have taken. They lose their way when the steps do not reflect the number of decisions they have made.

2. Several users initially struggled to find their place on a mobile screen.

3. Most participants did not know or were unsure of exact dates of treatment and were nervous about entering a specific day.

4. Some participants got lost in the evidence flow and weren’t confident that they entered the correct evidence for their issues.
  
5. Some participants missed that their application autosaves and they can return to finish it later. 

6. Multiple primary actions confused some Veterans.

7. 9 out of 9 users did not know how to resize a PDF, which is one of the reasons an upload is rejected in some decision reviews.

# Details of Findings 

## Finding 1
Representing form progress as “steps” confused some users. Users expect the progress bar to be true to the number of steps they have taken. They lose their way when the steps do not reflect the number of decisions they have made.

  _Some participants lost a sense of where they were in the process, as they had taken many more steps than the progress bar reflected._ 

  ![steps](https://user-images.githubusercontent.com/68615337/196244578-c3ef002d-64e4-4eb5-bce8-2ae6d2c1ee0b.png)
  
  Labels: **BNFT: Disability**, **DSC: Progress bars**

  > _"My first impression there is uh-oh, something happened, the first page was step 1, I'm still on step 1."_

  > _"Looks like I've got 4 step 1s, and now I'm at 2 or 3 step 2s. I know why that's there, but it's a little bit of a fog index. "_

## Finding 2
Several users initially struggled to find their place on a mobile screen.

_The repeating form title forced them to scroll to find context._ 

  ![h1titlepush](https://user-images.githubusercontent.com/68615337/196244099-6028c375-39c7-482e-9781-b58d8230e15a.png)
  
   Labels: **BNFT: Disability**, **DSC: Progress bars**

  > _"Half your screen is taken by the title in the last three screens."_


## Finding 3
Most participants did not know or were unsure of exact dates of treatment and were nervous about entering a specific day. One user struggled with how to enter ongoing treatment. 

  ![dateofrecords](https://user-images.githubusercontent.com/68615337/196244370-07b9af91-8c1b-4bcc-8712-93904abe46c6.png)
  
   Labels: **BNFT: Disability**, **DSP: Form templates: Dates**
   
   > _"If you put something in there and it doesn't match the decision, it will get kicked back."_
  
  > _"That shouldn't be put on a soldier to remember every single time they were treated...Expecting a soldier to remember every time they were treated is unfair."_
  
  >  _"I have a hard time with dates. It has something to do with my PTSD."_

## Finding 4
Some participants got lost in the evidence flow and weren’t confident that they entered the correct evidence for their issues.

_Some participants weren't clear what issue they were identifying evidence for and lost confidence completing the evidence section._

  ![Screen Shot 2022-10-17 at 3 46 50 PM](https://user-images.githubusercontent.com/68615337/196280016-4c0bf041-9559-4e96-85cc-c9019d31c0a9.png)
  
   Labels: **BNFT: Disability**, **DSP: Form templates: List and loop**
   
   > _"I've already done the headaches and sleep apnea, haven't I?"_
  
  > _"I already forgot. Is this for headaches or for sleep apnea?"_
  
  > _"I don't know where to go from here. I can guess, I clicked headache first. OK, where did I go for headaches."_

## Finding 5
 Some participants missed that their application autosaves and they can return to finish it later. 

_Several users had no idea that their progress was saved and no clear way to return to it. Some saw the message and appreciated it._

  ![autosave](https://user-images.githubusercontent.com/68615337/196241931-84a3253d-1abb-4a77-a5e1-db74f135d7f7.png)
  
Labels: **BNFT: Disability**, **DSP: Content presentation: Information callouts**
    
  > _"I would be sitting here and saying "damn, I will need to start all over again"_
  
  > _"I like that it gives you an option to save your work if you need to go find paperwork. That's a good thing. I like that."_

## Finding 6
Multiple primary actions confused some Veterans.
 
 _Some participants struggled with checking a box to identify an issue, then selecting an action to add a new one on the same screen._ 

  ![Screen Shot 2022-10-17 at 9 52 59 AM](https://user-images.githubusercontent.com/68615337/196210155-55792e0a-a59d-4206-9d18-fe10286f8a10.png)
  
  Labels: **BNFT: Disability**, **DSP: Form templates: List and loop**

## Finding 7
9 out of 9 participants did not know how to resize a PDF, which is one of the reasons an upload is rejected in some decision reviews.

_No participants knew how to resize the dimensions of a PDF, but most were familiar with creating one for upload. This is significant as it is the cause of some uploads failing on Notice of Disagreement forms today._ 

Labels: **BNFT: Disability**, **DSP: Form templates: File upload**

# Additional Insights

1. The one question per page experiment to replace the deprecated wizard pattern was successful.
  
    _No users struggled with choosing if this was the right form for them. The easily chose continue and understood the decision they were making._

  ![Screen Shot 2022-10-17 at 12 20 12 PM](https://user-images.githubusercontent.com/68615337/196242129-bd6dd87a-3126-464f-afa2-46bfaf5cf9fb.png)
  
Labels: **BNFT: Disability**, **Wizard**

2. The one thing per page experiment to replace the list and loop was successful, but we need to iterate to closely tie the issue to the evidence. 
  
    _No users struggle with the decisions presented to them, but they struggled with relating the evidence decisons to specific issues._ 

  ![Screen Shot 2022-10-17 at 12 21 02 PM](https://user-images.githubusercontent.com/68615337/196242272-a759beb2-8cdf-4e7a-a1c5-028207ec4fa5.png)
  
Labels: **BNFT: Disability**, **DSP: Form templates: List and loop**

3. Veterans expect their entries to match to a VA database. Several participants mentioned their expectation of the form to match what they typed in for conditions to match to an eligible condition. They also mentioned this expectation when typing in VA medical centers. 

![matching](https://user-images.githubusercontent.com/68615337/197214378-941509a8-c386-4415-9eb2-06e637541e92.png)


# Recommendations

1. Consider changing the label to sections to support a mental model of sections, with each section having steps to complete it. Consider if sections have too many steps or too few.
    * _Representing form progress as “steps” confused some users. Users expect the progress bar to be true to the number of steps they have taken._

2. Shorten or do not display the form title as the primary h1 header. Work towards a design that frames the key question or page context in the h1 spot. This also focuses context for screen readers and presents the users with one clear action per page.
    * _Several users initially struggled to find their place on a mobile screen. The repeating form title forced them to scroll to find context._

3. Employ auto-suggest matching patterns to issue entries and VA medical facilities.
    * _Veterans expect their entries to match to a VA database, and lose confidence with open text entries._ 

4. Add hint text that lets users know they can estimate the dates of their treatment.
    * _Most participants did not know or were unsure of the exact dates of their treatment and were nervous about entering a specific day._ 

5. Iterate the evidence flow to closely tie evidence to each issue. Display issues within the record location entry to clearly associate each record with the issue it is meant to support. 
    * _Some participants got lost in the evidence flow and weren't confident that they identified the correct evidence for their issues, which might lead them to abandon, seek help, or receive a denial._ 

6. Consider displaying a dismissable success (progress saved) alert on page load and remove the subtitle to create progress awareness. Add language that helps a user know where to find their saved progress (MyVA).
    * _Several users had no idea that their progress was saved and no clear way to return to it._

7. Consider one clear action per page for the issues to review.
    * _Multiple primary actions confused some users and one participant missed the need to check the box to select the issue they wanted to appeal._

8. Prioritize a technology solution to resize PDF page dimensions.
    * _No participants knew how to resize the page dimensions of a PDF, but almost all were familiar with how to create a PDF. This is significant as it is the cause of some evidence failures in Notice of Disagreement appeals._       


# Next Steps

Next steps:

1. Work with engineers to build a proof of concept for supplemental claims.
2. Update hint text based on recommendations from this study.
3. Work with engineers to create auto-suggest matching pattern for condition and VA medical center text inputs.
4. Update evidence flow based on recommendations from this study.
5. Communicate global form pattern findings to the design system team.

# Further research needed

* Future usability with assistive technology, especially magnification/zoom, desktop and mobile screen readers, as well as Veterans who experience arthritis or other dexterity issues. We'd like to understand if scrolling on desktop and mobile devices presents any difficulty.

* Future research should included desktop participants.

* Further usability testing in staging.


# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/MVP%20Usability%20Research/researchplan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/MVP%20Usability%20Research/conversationguide.md)

## Tools used for Synthesis

[Mural board](https://app.mural.co/t/coforma8350/m/coforma8350/1663183841927/6d9817e5702c1ecc6d84f8c162d47b54c8a1d632?sender=uf4e8628bdc7dc81e50353314) (restricted, please request access)

## Pages and applications used

[Link to prototype tested](https://www.figma.com/proto/JveclTFbNNSmx4eiYwbZdZ/Supplemental-Claims?node-id=1007%3A15254&scaling=scale-down&page-id=1007%3A13142&starting-point-node-id=1007%3A15254)

[Link to iterated prototype with recommendations 4 and 5](https://www.figma.com/proto/JveclTFbNNSmx4eiYwbZdZ/Supplemental-Claims?node-id=70%3A5676&scaling=scale-down&page-id=10%3A1697&starting-point-node-id=70%3A5676)

## Other supporting documents created
[Sketch files with flows](https://www.sketch.com/s/d2416db4-9a4f-4919-abe4-20ba4bdcfd89)

## Who we talked to 
Intended audience for this research: Veterans. Other claimant types can file a Supplemental Claim, but these use cases have been de-scoped for MVP.

Recruitment strategy: We will test with Veterans only for as that is the scope of our MVP, and specifically focusing on Veterans who have claimed disability in the past. We are testing a prototype, which won't allows testing for assistive technology, but will plan to do that when we have an instance in staging. 

We skewed slighly older for this study, to understand how older Veterans who might become eligible via the PACT act would navigate this experience.

**Recruitment criteria**

We talked to **9 participants.**

Audience segment:
* Veterans: 9 
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 4 
* Female: 5 


LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 4


Devices used during study:
_We tested a mobile prototype, so some participants were on desktop, but navigating in a mobile environment. Some participants struggled with the Zoom interactions, so the moderator interacted with the prototype as proxy for the participant while sharing their screen.

* Desktop: 0 
* Tablet: 0 
* Smart phone: 9 
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 0
* 45-54: 4
* 55-64: 2
* 65+: 3
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 2
* Master's degree: 4
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: x
* Rural: x
* Unknown: 9


Race:
* White: 5
* Black: 3
* Hispanic: 0
* Biracial: 0
* Asian: 0
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 1
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Rural
* Immigrant origina
* Other than honorable
* Biracial
* Asian
* Transgender

[VA Recruitment Checker for Equality.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/9802247/VA.Recruitment.Checker.for.Equality.pdf)
