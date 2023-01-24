# Supplemental Claims Research High Level Summary

Pamela Hastings

Benefits Crew 1, Squad 2

Research study: 9/22-29, 2022
Reporting date: 10/06/2022


## Broad findings
All participants were able to successfully complete the form prototype and gave the form a high confidence rating. We saw opportunities for small iterations to the evidence flow and content, as well as some broader form pattern enhancement opportunities. Our design experiment for the wizard replacement was successful, as well as the list and loop. Users did not struggle with either pattern, but we did see an opportunity to reorder the question pattern for our list and loop instance. Other broad observations include:

1. All participants were familiar with VA.gov and several continued to use ebenefits. _1 participant viewed ebenefits as more accurate and trustworthy._
6. 5 out of 9 participants cited using VA.gov health appointments and medical needs.  \
A few had filed claims on VA.gov but it was implied they were helped by a VSO. \
Most knew to check their claim status on VA.gov.
3. 8 participants rated the form as 8-10 confidence level, and one rated it a 6. \
All but 1 participant saw the online form as an improvement.
4. Many participants did not read or see the autosave messaging near the title of each page, and did not understand that they could return and finish their claim later.
5. Many participants expressed a general distrust and fear around filing a disability appeal—most participants experienced and expected to be denied, and for their claim to be reviewed unfairly or not thoroughly. 
6. Participants expected matching interactions (drop down or auto-suggest/complete) for issues and medical facilities.
7. The combination of the steps presented on each screen paired with the repeating title of the form confused users and negatively impacted wayfinding—several participants struggled to know where they were in the form. It is notable that this prototype featured a mobile viewport. Users who get lost might seek help, give up, or submit incomplete forms and receive unfavorable outcomes.

**Insights:**

_Most users did not read the autosave subtitle of the page and its repetition caused banner blindness. Several users had no idea that their progress was saved and no clear way to return to it._

_Veterans expect their entries to match to a VA database._

_Listing the progress bar as steps paired with a repeating title of the form on each screen confused some users. They lost a sense of where they were in the process, which could lead to abandonment and overall distrust of VA.gov._

**Recommendations:**

_Consider displaying a success (progress saved) alert on page load and remove the subtitle to create progress awareness. Add language that helps a user know where to find their saved progress._

_Employ auto-suggest matching patterns to issue entries and VA medical facilities._

_Consider changing the label from steps to sections, to build a mental model of sections, each having steps to complete. Consider if sections may have too many steps or too few._

_Reconsider page titles and h1s, more on this in the next section._

## 1. Determine if the beginning of the process of filing a Supplemental Claim is clear and actionable. 

1. **Do participants understand this is the right form for them?**
    * All participants understood the one question per page pattern, and the right form decision, but one participant was confused by the term Supplemental Claim and how it relates to disability. 

2. Do participants know how to initiate a Supplemental Claim?
    * All but one participant found the initial steps helpful to begin filing their claim and understood it was specific to disability.
    * All participants were familiar with and understood that they needed to sign in to complete their Supplemental Claim. Due to the limits of the prototype, some thought they were already signed in, but knew that their information would be available if they were.
    * Several participants struggled after signing in and encountering the same header and intro content*. 

3. Do participants understand that the VA has data on file for them and what it is?
   * All participants expected VA to have their data on file. 
   * Several participants expected their VA medical records to be on file and easily found by VA.
   * Some participants expected to get lost in the system, to have records lost entirely or never recorded, and for VA to “lose them”
   * Several participants expected VA to know what they were eligible for. 

**Insight:** 
_Some struggled to find their place on a mobile screen as the form title forced them to scroll to find context. This could result in form abandonment due to confusion._

**Recommendation:** 
_Shorten or do not display the form title as the primary header. Work towards a design that allows the h1 to reflect the context of the action users need to take._


## 2. Determine if the user sees or can successfully add the issues they need to appeal

1. Do participants understand the issues presented to them?
    * Most participants understood the issues presented to them
    * 2 participants struggled with the interaction pattern of selecting an issue, then adding another
    * One participant conflated adding issues with adding evidence.
2. Do participants understand how to add issues?
    * All but one participant understood and easily added a new issue, but one lost confidence in the system if their issue was missing.

**Insight:** 
_Multiple primary actions can confuse users as there is not a clear hierarchy of choice. Users may abandon, fail to select, or skip an issue entirely if they assume it is added to their claim simply by appearing on the page._

**Recommendation:** 
_Present the user with one clear action per page for the issues to review. Consider breaking up selecting existing issues and adding one that is missing._

## 3. Veterans understand opting in to AMA and they know how to take action on it.
1. Do participants understand the Appeals Modernization Act language presented to them?
    * Most participants perceived the AMA to be an improvement that would speed up claims processing and did not hesitate to opt in.
2. What do they expect to happen if they opt in or don’t?
    * One Veteran believed opting in would lose his history.
    * One participant related the date to backpay.
    * One participant thought opting out would result in a more thorough review.
3. When they continue?
    * Several participants believed they had to opt in to continue and thought it was mandatory.

**Insight:** 
_Some Veterans worry that their claim and files will get lost.Veterans may abandon here or turn to help for fear that their records or their claim will be lost in the system, turned over to an algorithm or automated process or generally not as thoroughly reviewed._

**Recommendation:** 
_Consider framing the language as an upgrade, and seek to reduce fears that data will get lost in the upgrade._

## 4.Veterans understand 5103 notice of evidence needed?
1. Do participants understand the language of evidence needed?
    * All participants understood the need to certify the notice of evidence needed.
    * Most viewed it as their duty to present evidence.
    * Some struggled with the content  in the header and the language of “we’ll, you’ll”.
2. What do they think will happen if they check I certify?
    * All participants viewed checking I certify as a mandatory step to continue filing their claim.
    * All were comfortable with checking the box.
3. What do they expect to happen when they continue?
    * All participants expected to be able to continue filing if they checked I certify.

**Insight:** 
_Veterans viewed this step as mandatory, but understood it and did not hesitate to certify._

**Recommendation:**
_No changes, but measure % of success completing the task on launch._


## 5. Participants understand where they are in the form, can choose a type of evidence to submit and successfully summarize the decisions they’ve made.
1. Do users understand what new and relevant evidence means?
    * All participants understood that they needed new evidence to support their claim
    * Many participants perceived that their initial evidence was not considered thoroughly, by the right people, or ignored
    * Many participants believed they were erroneously denied
2. Do they understand the relationship between issue, evidence and time in service?
    * Many participants cited ongoing issues that were related to their time in service, but emerged over time, often in clusters. 
    * Entering specific dates for evidence,** especially to the day,** was a pain point.
3. Do they understand that VA will get VA evidence for them?
    * Some participants expected adjudicators to be able to access VA records in a central data repository
    * Almost all participants expected the VA to know them and their medical history with the VA
    * Participants expressed general frustration with having to ask for their records from the VA, for healthcare at the VA
4. Is it clear how the VA can assist in gathering private evidence?
    * Participants were keenly aware of how data entry errors could delay or derail their claim, so they looked for a “match” when entering VA facility names
    * It was generally unclear how medical records work at the VA
    * Several participants communicated distrust, and expected their records to be lost or inaccurate
5. Do they understand they need to authorize private medical release?
    * All participants understood the need to consent to private medical release and several cited HIPAA rules specifically
6. Do they understand what limiting consent means?
    * All participants understood limiting consent
    * Several participants associated risk of denial or error if they limited consent
7. Do they understand how providing additional info might impact their claim?
    * Most participants did not understand adding additional information and interpreted it as adding a personal, first-person account of their situation, their specific doctor’s name, or even their medication.
8. Do they understand how to upload evidence?
    * All participants understood how to upload evidence
    * No participants understood how to resize a PDF
9. General evidence struggles:
    * Several participants worried about entering their evidence dates correctly
    * Some participants wanted to know how to submit a backup copy of their evidence - via fax, mail etc.
    * Some participants got stuck on the ability to revoke their medical record authorization - the route to undo authorization was unclear. 
    * Many participants would check all 3 types of evidence
    * Most participants had the mental model of a centralized VA medical records database and it was simple to search for their records.
    * All participants struggled with dates.

**Insights:**  
_**Wayfinding:** Users expect the progress bar to be true to the number of steps they have taken and clickable. They lose their way when the steps do not reflect the number of decisions they have made._  

_**Evidence flow:** Some participants got lost in the evidence flow and weren’t confident that they entered the correct evidence for their issues, which might lead them to abandon, seek help or receive a denial._

_**Dates:** Most participants did not know or were unsure of exact dates of treatment and were nervous about entering a specific day. One user struggled with how to enter ongoing treatment. This might cause them to seek help through a VSO, abandon, or enter erroneous information._

**Recommendations:**  
_**Wayfinding:** Experiment with sections rather than steps and consider a clickable progress bar. Also consider if the heavy evidence section needs to be broken into smaller sections._  

_**Evidence flow:** Rework the evidence flow design to lead the user through gathering their evidence for one issue at a time, leading with the issue._

_**Dates:** Add hint text that lets them know they can estimate the date._

## 6. Validate that users have what they need to review and submit the claim
1. Do participants understand the accordion behavior to review each section?
    * All participants understood how to expand and review sections.
2. Do participants understand how to change their entries?
    * All participants understood how to edit/change an item.
    * 2 participants were confused by the placement of 5103 as separate, since it was not called out as a specific section. 
3. Can participants successfully review each entry?
    * All participants were able to complete this task.
4. Can participants confidently agree to the privacy policy?
    * All participants felt comfortable agreeing to the privacy policy.
5. Do participants feel confident submitting their claim?

<table>
  <tr>
   <td>
    Confidence rating -  
10 = most confident
   </td>
   <td>
    # of participants
   </td>
  </tr>
  <tr>
   <td>
    10
   </td>
   <td>
    4
   </td>
  </tr>
  <tr>
   <td>
    9
   </td>
   <td>
    1
   </td>
  </tr>
  <tr>
   <td>
    8
   </td>
   <td>
    3
   <tr>
   <td>
    6
   </td>
   <td>
    1
   </td>
  </tr>
</table>

6. What do participants expect to happen next?
    * Most participants expect a confirmation message and an email.
    * One participant mentioned specifically wanting a case manager and ID to follow their claim.
    * Some participants missed the autosave messaging, and one wanted to see a “pause” button to come back and double check everything.
    * No participants understood where to find a claim they had not finished.
    * All participants understood that they needed to wait for communication from the VA.
    * Some participants knew to follow up on VA.gov.

**Insight:** 
_The 5103 review was broken out as a new section, which many participants viewed as a new decision, not a review. This could cause them to submit the form inaccurately and receive a denial._

**Recommendation:** 
_Move 5103 review to within the evidence section._


## General observations - room for improvement:
**Insight**: 
_Users have no indication of a way to return to an in-progress application._ \

**Recommendation:** 
_Add language that teaches them to access in progress forms via MyVA, which reinforces the dashboard mental model, which could encourage returning users._


**Insight:** 
_Participants understood review and edit patterns, and that some editing could be done inline, but it wasn’t clear (and limited in the prototype) how to rework entire sections of the form. Users expect to be able to jump back to a section, edit, then jump back to review, and for their chapter progress to reflect that._ 

**Recommendation:** 
_Further test review and submit patterns. Consider exploring review patterns that allow users to review and edit each line item. Also consider patterns that allow users to complete sections at a time, where they may complete a form in multiple sessions._


***Note that this was a mobile prototype study, so diplay comments reflects a mobile viewport.
