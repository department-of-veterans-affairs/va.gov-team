# VSA Research Process
Questions? Contact Shawna Hein.

- [Va.gov Base Process](#process)
- [Setup](#setup)
- [Recruiting](#recruiting)
- [Pilot/Test Sessions](#pilot-sessions)
- [Taking Notes](#taking-notes)
- [Recording Sessions](#recording)
- [Running Sessions](#running-sessions)
- [Mobile Testing](#mobile-testing)
- [Synthesis](#synthesis)
- [Other Resources](#resources)

## <a id="process"></a>VA.gov Base Process
There is a required basic process to follow for planning and executing design research on VA.gov applications under the Veteran-facing Services Applications (VSA) contract. The Digital Experience and Product Office (DEPO, formerly DSVA) updated process document can be found  [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md). Please read that process doc first and then read this document for more tips/details.

## <a id="setup"></a>Setup
Create a new folder or folder structure in github under the product and/or application being researched, e.g. “UrgentCare/Research/June-2019-Usability-Test/.” This is where the research plan, conversation guide, notes, and final results should be stored. Read [this naming guide for further details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/repo-guidelines.md)

Create a [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md) and [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md) and save them in that folder as Markdown files.

Note: after finalizing the conversation guide, consider creating and including in this folder a “note-taking template” in Github to help your note-takers.   

## <a id="recruiting"></a>Recruiting
**Note: The language of our contract stipulates that you do not recruit veterans “on the side” to do informal research on your own. You must use DEPO’s services for all research recruiting. Please contact Lauren Alexanderson if you would like to talk to veterans in support of your work on VSA, and be sure to have her (or your DEPO contact) review and approve your plan.**

VA has an agreement with a recruiting organization that will manage all recruiting operations for you, including:  
* creating a screener to get the right participants, including Veterans, caregivers, service members, and dependents  
* scheduling in-person (only location: Fredericksburg, VA) or remote sessions
* sending reminders to research subjects, and dealing with no-shows

Information about using our recruiter, Pergean to recruit participants for your moderated usability and other research studies  [can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md).

When you’re ready to recruit using Perigean, contact Lauren Alexanderson via e-mail or Slack. Inform her that you intend to do research and include a link to the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md) and [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md). The Conversation Guide must be completed and reviewed prior to recruiting. 

CC Andre Zwilling of GCIO on your communication with Lauren so he knows a research session is happening. Once Lauren has approved your plan, please add the line “Reviewed and approved by Lauren Alexanderson on mm/dd/yyyy” on the bottom of the plan in Github.

Because of the nature of working Veterans, it is common that they will not show up for scheduled sessions. Try to schedule between 1.5 and 2 times more sessions than you need so that you can complete sufficient sessions within your desired schedule. Also, consider early morning or evening sessions for fewer no-shows, as Veterans often have full-time jobs.

To talk to stakeholders or VA employees that are working on the other side of the forms, be sure to work through and cc stakeholders. It’s completely acceptable to casually talk to VA employees about your work as long as they aren’t being paid as research subjects.  

## <a id="pilot-sessions"></a> Pilot / Test Session
Run a pilot/test session before your study, including Perigean’s team and another designer, so you rehearse process of logging in, get any conversation guide kinks worked out, understand how to hand off mouse controls, have a participant show their screen. VSP and/or Perigean can help schedule the pilot.

The recommendation is to recruit one of your developers as a pilot participant, to get them involved early in the process. If that doesn't work, feel free to ask VSP or one of your VSA design colleagues to act as a pilot participant.

## <a id="taking-notes"></a> Taking Notes

We have to be careful with -- and if possible avoid using -- recordings because of Federal regulations regarding Personally Identifiable Information (PII). Assign a colleague, such as another designer or member of your team, to take verbatim notes during your research sessions. Perigean can also take verbatim notes for your research sessions, but you must request this at the beginning of the study. [Guidance on notetaking can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/how-to-take-session-notes.md)

* Create a “session-notes” folder within your research study Github folder and storing each session as an .md document. Copy the conversation guide over to your .md file before each session so that you have a structured way to capture your notes
* You must scrub all notes of all PII before uploading them to Github.  PII is all content that could be used to identify the participant. Name, age, date of birth, location or specific VA facility (unless that is critical to the study), diagnoses, etc.
* An [example of verbatim notes can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/research/discovery-aug-2019/notes/p7.md).

## <a id="recording"></a>Recorded Interviews
* Get verbal consent from your participant within the recording itself. First ask if it’s ok, press record, then say “can you confirm on this recording that you are ok with this session being recorded?,” or whatever comes naturally to capturing a recording of what they’ve agreed to. 
* Make sure you press “record” yourself in the meeting software if you want your session recorded; they are not automatically recorded
   * In Zoom during a session, check under the Meetings tab and select Recorded
   * If you can’t find them, message your Perigean contact
* Download any recordings you need, but only keep for as long as necessary to complete synthesis. Then securely dispose of them. Older macs with HDDs had a securely empty trash function. Newer macs, you need to use the command line in the folder level. If you still have questions on how to securely delete things, feel free to drop the question in #vfs-platform-support
* You can make clips of the recordings for sharing/presentations as long as those don’t contain PII. Those clips can be uploaded and included in Github. 
* **Do not upload any original session recordings to the cloud (Github, Dropbox, Google Docs, etc.) or any public or private server. The risk of accidentally disclosing PII outweighs any benefit provided by sharing original session recordings.**   

[Notes about what (not to) do with recordings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/synthesis/what-to-do-with-recordings.md) 

## <a id="running-sessions"></a>Running the Sessions
* You will hear hard stories from veterans. It’s OK to sympathize with the participant. Saying something like “I’m so sorry you had to go through that” is perfectly acceptable after hearing a story before moving on to your task or follow-up. It is almost never necessary or relevant to the goals of any VSA or VA.gov study to dig deeply into folks' trauma, however. The best attitude when in doubt is a middle ground where you show compassion but then move on the next task or question in a graceful way. E.g. "that sounds so hard/frustrating/difficult. [Switch back to script or intention of study] Could you tell me a bit more about your experience applying for that benefit?"
* Remember not to ask questions that are the same wording as what's on your designs. For example if you have a "learn more" dropdown don't ask "how would you learn more about this?"  It's pretty leading if you use the same terminology.  Instead something like "if you're confused, where would you go to get more information?"
* Ask open-ended questions and avoid Yes/No prompts. 
* Follow-up questions like with “Why?” and “Tell me more” if the user has given you a short statement or not provided enough information.
* Avoid using morale/biased language like "good!" or "perfect!" when a user completes a task in the way you'd expect.
* If someone asks you a question about the legal rules of how a program works, make sure to say "I'm not sure. But you can go to VA.gov and call the support line listed there."  Don't guess or say anything even if you might think you know the answer, because we don't want to get in legal difficulties.
* Avoid saying "Thank you for your service" to Veterans. Some Veterans have a negative association with that phrase.
* There is a channel in DSVA Slack called #feedback-backchannel.  Make sure to be in that channel when running your sessions and that your observers know about it.
   * Type “observer instructions” in the channel at the beginning of your day of sessions to give them tips
   * [Observer instructions can also be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/howto-observer-instructions.md)
   * At the end of your session, take a look at the feedback backchannel and see if anyone brought up questions that you can address with your participant

## <a id="mobile-testing"></a>Mobile Testing
Many if not most veterans use mobile devices, so we encourage testing designs on mobile as well as desktop.

* Users can install Zoom on their phones or use the ["laptop hugging method"](https://slack-files.com/T03FECE8V-FQAC0QXJN-2904594b3e)
* Perigean can recruit mobile users for you. Be sure to meet with Perigean folks prior to sessions to make sure everyone understands the process and that Perigean knows how to coach users and help solve technical issues. 
* Be prepared to walk through the technical setup for mobile (or any) testing with a Veteran if they haven't figured out proper setup before the call begins. 

## <a id="synthesis"></a>Synthesis
The maximum given to you according to our contract to synthesize research is “6 business days.”  In general, a topline summuary should be produced as soon as possible when everything is fresh in folks' minds. If you think you need more time, talk to Shawna.  

The following process is recommended by the VSA Design Lead:
1. At the end of each day of research, schedule a “debrief” session where you invite all the observers to share the key takeaways from the sessions. Keep track of these key takeaways.
2. Once all the research is done and all debriefs have been conducted, create a [“topline summary”](https://portigal.com/reading-ahead-topline-summary/) that captures key themes discussed coming out of the sessions and debriefs.
3. Share the [topline summary](https://portigal.com/reading-ahead-topline-summary/) with necessary stakeholders that observed sessions and the team and ask if they feel anything was missing based on their observations. Also ask what topics they would like you to focus on when you conduct your detailed synthesis. 
Note: Caveat the topline summary by saying that detailed synthesis has not yet been done, so things may change in the final report.
4. Synthesize your research. You can do this with a modified [affinity mapping](https://generalassemb.ly/design/user-experience-design/affinity-mapping) activity.  
   *	Create a simple spreadsheet, and pull quotes and behaviors from each participant into the spreadsheet. 
   *	Code or tag each quote or behavior with relevant categories. 
   *	Move through each participant and revise codes as more insights coalesce. 
   *	Here’s an example: [sample of this from my Master’s thesis](https://docs.google.com/spreadsheets/d/1ngx67-7vvVPeIZYgjX8pTP8w0aEED6I1lz_wJY6wR5Q/edit#gid=210944681) 
   *	You can also do more standard affinity-mapping style synthesis on a Miro or Mural board by putting quotes/behaviors on stickies and grouping them. 
   *	Here’s another commonly used method called [“the rainbow spreadsheet.”](https://www.smashingmagazine.com/2013/04/rainbow-spreadsheet-collaborative-ux-research-tool/) 
5. Turn the themes that arise them into a research results document. This should typically be a Github page (markdown file) as well as a presentation in the form of a slide deck. 
   * The slide deck should be created using our [Google Docs VA template](https://docs.google.com/presentation/d/1jRNuGqSX2FarzPwRn2YZiwIevGcDEO7u7El_ou34LwY/edit#slide=id.p1), and then exported as a PPT and attached to the findings page.
   * Preferred format is to have your results and/or presentation list the “Top 10 insights” from the study, then dig into those insights in the next slides/sections. This allows stakeholders to quickly grasp the findings without reading the whole deck/page. 
   * Templates have been created for VSA for both the [github file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/research-findings-template.md) and the [presentation deck](https://docs.google.com/presentation/d/1IuycCke--2jL16sMNxtIYvnFku2JmQUzB_15V-9hdqU/edit#slide=id.p1).
   * Note the Github page with results should be up 6 business days after your last session.  
   * Examples can be found here:
      * [Scroll down to the “resources” section here] (https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/community-care/urgent-care/research/jun-2019).  
      * https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/ds-logon/research/research_brief.md
      * https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/community-care/urgent-care/research/jun-2019/findings.md
      * https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/dashboard-updates/research-summary.md
      * Results in a deck [starting on slide 18 here](https://docs.google.com/presentation/d/1aaKDRSu_pPFCxQKoP0cXeHifkmCgZHlm-ZvtgwW5SsQ/edit)
   * Keep “insights” separate from recommendations. An insight might be “Users didn’t seem to see the “Next” button on the page,” but discuss what to do about that in a separate, “Recommendations” section
6. Share insights with your team, and brainstorm recommendations. Then add a “recommendations” section/s to your Github page and final presentation deck. Note, if you’d like to add recommendations prior to sharing with your team, that’s fine too but make sure to get their input and ideas as a part of the process.
   * E.g. a recommendation for the above insight might be “Move the button higher on the page” or “Make the button more prominent” or “Remove the button and make it a single page.”
7. Let Andre Zwilling of GCIO know when the results are posted. 
8. Add your research study to the [history of past research page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)

## <a id="resources"></a>Other Resources
Resources are also pinned to the #va-vsa-ux channel.
* We have a research calendar where all research sessions w/ Perigean are posted. Message Lauren to get that calendar on yours.
* We have the use of Optimal Workshop through DSVA if we want to do card sorting or IA tree testing or things of that nature. Message Lauren if you want access.
* DSVA research folder https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research
* History of past research https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md
* Research plan template https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research_plan_template.md
