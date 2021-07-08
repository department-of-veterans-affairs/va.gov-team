# Conversation Guide for Platform Ops Centralized Logging

Service Design

May 2021


## Moderator logistics

_Use [#vsp-research](https://dsva.slack.com/archives/C013Y167YTB) in Slack for real-time feedback from observers._

_Before the session, send out the observer instructions to your observers_

_In the Attendees section, make sure everyone except the participant is on mute_

_In the Audio section, click the drop-down arrow and make sure "Play Entry/Exit Chimes" is unchecked_

_Check your screensharing setup_

_When the participant is ready, begin the session with the following intro_


### Project-specific setup

- [ ] Ensure participants can access [VFS Grafana instance](http://grafana.vfs.va.gov/login) (SOCKS or VA VPS required) prior to session

- [ ] Open [Centralized Logging with Loki User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/logging/centralized-logging-user-guide.md) in tab 

- [ ] Open conversation guide in another tab


## Intro - 3 minutes

Thanks for joining us today! My name is Jonathan and I also have some colleagues on the line observing and taking notes. Today we're going to talk about log files and Loki. 

Before we start, a few things I want to mention:



*   **This entire session should take about 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
*   **In this session, we want to hear your honest opinions.** We are not testing your ability. We just want to improve these tools to better meet VFS team’s needs. I will not be offended by any opinions you express, and I welcome your feedback.
*   **If for any reason and at any time you want to stop the session, please let me know.**
*   **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately. None of your comments will be attributed to you directly. 
    *   If yes: **Once I start recording, I am going to confirm that you are ok with me recording this session once more.**

_Start recording._



*   **I have started recording. I'd like to confirm: Are you comfortable if I record my screen the audio as we talk today?** 


## Warm-up Questions - 5 minutes

Before we look at Loki, let’s start with a few background questions.



*   What team are you on?
*   What is your role on the team?
*   How long have you been working on this project?
*   Can you tell me a little bit about your experience with viewing and analyzing log files?
*   Are you familiar with (use) Grafana and/or Loki? 

Great. Thank you for sharing those thoughts with us. It’s really important as we continue to improve our services and support. 


## First Task: [Review user guide] - 5 minutes

We put together a user guide that we would love to get your feedback on _[chat participant link to [user guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/logging/centralized-logging-user-guide.md)]  ask participants to share screen_



*   Let's say (take from warm-up questions) and  you want to view log files. 
*   You landed on this page. 
*   (Especially if a first time user) What are your overall impressions of the guide? 

### Things to watch for:

*   Does the participant understand what Loki is? 
*   Is the information understandable? 
*   Anything particularly confusing for them?
*   Is there info missing from the User Guide that is critical to helping VFS engineers use Loki logs in Grafana? 


## Second Task: [View Loki logs in Grafana] - 10 minutes

Great. Thank you. Can you show me how you would access logs in Loki/Grafana and find your application's error logs? 

*   Did you find the information you needed? 
    *   What would you do next? (_Applies to either response, but especially when user says they did not find the info they needed so we can see if they return to the user guide or ask Platform for support.)_
*   Would you be able to resolve your issue using the Loki log data?
*   Is the information in the logs useful to you? Why or why not?
    *   What is missing from the logs or Grafana that would be useful in troubleshooting application issues?


### Things to watch for:



*   Can VFS engineers find the critical information they need?
*   Can VFS engineers resolve application issues solely using Loki log data? 
*   Is there info missing from the logs that is critical to helping VFS engineers identify and/or resolve application errors on their own? 
*   Any other hiccups?


### Followup questions:



*   Were there any areas you felt were unclear? This question applies to any area - the Loki logs, the Grafana UI and/or the Loki User Guide.
*   What worked well?

    


## Post-Task Interview - 5 minutes



*   Any questions for me? 


## Thank-You and Closing - 2 minutes

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on our tools and make sure it really works for VFS teams.

Lastly, is there anyone else you think we should talk to about this? 

If Yes: Thank you! I will reach out to them.

Have a great rest of your day!
