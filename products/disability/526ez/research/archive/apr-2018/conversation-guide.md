# Conversation Guide - Claims for Increase MVP

for Mock Data and Live Data rounds, Summer 2018

[Design prototype](https://adhoc.invisionapp.com/share/9MFXXQTUGDK) (for reference only, will run a build from Mark's computer for the session)

[Review instance](http://e5dc56c3c6e50404e36a2e4744bc5f6b.review.vetsgov-internal/disability-benefits/526/apply-for-increase/) (requires [socks proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md))

## Also see

1. [Value proposition and project goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability) (from problem statement)
2. [Kickoff document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/apr-2018/research-kickoff-document-live-data.md)
3. [Session Report Template]


## Research Goals

1. Find any major issues (usability or bugs) with the Claims for Increase flow before we release it
2. Revisit fixes to [issues from last round](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/jan-2018/prototype-usability-research-readout.pdf)
   1. ~~Users wanted to log in before starting, which would be an unnecessary burden if they are redirected to eBenefits for a not-yet-supported claim action~~ (didn't seem to address this since we're directing people to log in first)
   2. Users weren't sure where to start to update an existing claim
   3. Reactions to Inline help / expectations about what happens next if people indicate yes to any of the personal flash questions
   4. Are people clear on the timeline for how long it takes VA to get records? Are they choosing the path that would be the best for them in terms of timeline versus work of them submitting records themselves?
   5. Are participants able to indicate a future address if they're moving soon?
   6. Are participants submitting only the kinds of supplemental documents that would be helpful? Or are they over-submitting?
   7. Are participants clear on what happens next after they submit?

## GoToMeeting logistics

*In the Attendees section, make sure everyone except the participant is on mute*

*In the Audio section, click the drop-down arrow and make sure "Play Entry/Exit Chimes" is unchecked*

*When the participant is ready, begin the session with the following intro*

## Intro - 5 minutes (until :5 in)

Thanks for joining us today! My name is Mike, and I also have some colleagues on the line observing and taking notes. We work with the team at the Department of Veterans Affairs on a website called Vets.gov, and we're excited to talk with you today to learn how to make one section of our website more useful to you.   

**We'll have two parts to this discussion**. 

1. A conversation to learn about your background filing a disability claim with the VA 
2. We'll take a look at a prototype for a new section of vets.gov involving disability claims and would like to get your feedback on it.

**This entire session should take about 45 minutes.** I want to be respectful of your time, so I may move us along a little faster at various points.

**If for any reason and at any time you want to stop the session, please let me know.**  You will not be penalized in any way if we need to stop, and you will still receive your $25 thank you. 

**In this session, we want to hear your honest opinions.** We aren’t testing your ability. There are no right or wrong answers; we want to hear whether this section of the site makes sense to you. I'm hoping this can be an honest conversation between you and me, and I promise I won’t be offended by any opinions you express.

**Do you have any questions at this stage?**

**Are you comfortable if I record this session?** 

I'd like to record our conversation and what we do on the screen so we can make sure to capture your thoughts accurately. 

Great! I'm going to turn on screen and audio recording now.

[The moderator will begin audio and screen recording.]

## Background Questions - 6 minutes (until :11 in)

**First, let's discuss your experience having filed a disability claim with the VA for just a few minutes before we go into the prototype**

- How long after your separation from the service did you first file a claim?
  - What led up to filing your claim? What prompted your claim/Why now? (life event, financial situation, other benefits need rating to qualify, etc.)
- How did you learn about the process and what you needed to do to submit your claim? What sources of information did you use? (VA.gov, Vets.gov or other VA resources, non-VA resources) 
  - How did you decide these were reliable/truthful? 
  - Are these the places you typically go to for information about VA benefits and services?
- Did you consider filing online? 
  - Why/why not?
- About how long/how much time did it take you to prepare and submit your claim? (months, years?)
- Did you get help with your claim? 
  - (Friends, family, VSO, other POA?) Why/why not?

*(If needed) I'm sorry your prior experience was so burdensome. I'm working with a team at the VA that is trying to streamline the online application process. We're starting with a specific case that we can deliver quickly, which is updating claims for disability compensation increases.*

## Transition to prototype - 2 minutes (until :13 in)

Now we're going to shift gears and review a clickable prototype of a new section of Vets.gov. Have you ever used Vets.gov before? Vets.gov is a site we are working on to unify and simplify Veterans' digital interactions with the VA.

I'll ask you to show me how you would navigate the prototype to accomplish some tasks. This will help us understand how to make it better.

**Please think aloud.** While you are going through the site, please try as much as possible to vocalize your reactions, thoughts, and decisions as you see each page. That helps us to better share your thoughts with other members of our team. 

**Please use the prototype as you normally would if you were trying to accomplish this on your own**

**I'll give you keyboard and mouse control** so that I can see what you would do on the website prototype.

## First Task: Triage - 6 minutes (until :19 in)

### Scenario

Imagine you’ve been feeling like the condition you’re rated for has become more severe, and you think it’s time to update your rating at VA to account for the worsening. Show me what steps you would take on this prototype. 

### Steps

* [Homepage]? or [Apply for increase](http://e5dc56c3c6e50404e36a2e4744bc5f6b.review.vetsgov-internal/disability-benefits/526/apply-for-increase/) ?
  * What would you do first?
  * What info do you think you would need?


### Things to watch for:

- How much attention are participants paying to the subway map / other info on the page before signing in?

## Second Task: Sign In and Review Prior Claim - 8 minutes (until :27 in)

### Steps

- [Sign In] - [test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv)
  - Why do you think you're being propmted to sign in?
  - Do you have any concerns at this stage?
- [Apply page / subway map]
  - [pause] What are your thoughts here?
  - What do you think will happen next?
- [Identifying details]
  - Is this what you expected to see?
- [Special circumstances (flashes)]
  - *Can skip over it*
- [Contact Details]
  - What would you do if you were moving soon?
- [Service History]
  - *can skip over it since we covered this in [VR&E January 2018 research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/vocational-rehab/research/jan-2018)*
- [Payment method]
  - *can skip over it since we found it to be mostly successful [last round](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/jan-2018)*

### Things to watch for:

- What info do participants absorb on the [apply page / subway map]? Do people apply right away or read some of the info?
- Does the participant expect that s/he can only apply for an increase if one of the special circumstances is met?
- Do participants understand how to indicate that they are moving soon?

## Third Task: Your Disabilities - 16 minutes (until :43 in)

### Scenario

Suppose that you had these conditions and in your recent doctor's visit, your doctor noted that your PTSD and your Intervertebral Disc Syndrome have both worsened.

### Steps

- [Your Disabilities] 
  - What would you do next? - **DID WE DO ANYTHING TO TRY TO ADDRESS PEOPLE SELECTING ONLY ONE OUT OF TWO CONDITIONS AND CONTINUING? IF NOT, MAY NOT LEARN ANYTHING NEW HERE**
    - (prompt to select both PTSD and Intervertebral Disc Syndrome if needed)
- [Supporting Evidence - Intro]
  - What is this step telling you?
  - Do you have all the information you need to proceed? 
- [Supporting Evidence - what supporting evidence do you have]
  - Which options would you choose?
- [Treatment Records] (PTSD)
  - (*at some point*) How are you feeling at this stage?
- [Medical Records]
  - Which option would you choose?
  - What would you do if you didn't have all the information?
    - **What would happen if you left this form and came back to it later?**
      - Would you expect the form to save the info you entered so far, or would you have to re-enter it?
      - If it took a few weeks before you were able to complete the application, and then you completed it later, as of what date would you be able to get paid for your benefit increase?
        - *may want to revisit [Apply page / subway map]*
- [Lay Statements]
  - *can skip over it quickly since not much has changed since last round*
- [Treatment Records] (Intervertebral Disc Syndrome)
  - ***additional scenario: suppose you were treated for Intervertebral Disc Syndrome by a non-VA doctor***
    - How would you prefer to provide the records (have the VA contact your doctor or upload)?
- [Fully Developed Claim]
  - What are your thoughts on this?
  - Any concerns about it?
  - How would you answer?
- [Review Application] - add /confirmation to the URL to get past it
  - can skip over it since we found it to be mostly successful [last round](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/jan-2018)
- [Claim Received]
  - What are your thoughts on the process?
    - How did it match up with your expectations? 
    - Any concerns?
  - What would happen next?
    - What would you expect to see if you clicked "learn more about what happens after you apply"?

### Things to watch for:

- Does the participant only select one condition before hitting "continue"?
- Did people absorb the info about intent to file on the [apply page / subway map]?
- [Supporting Evidence - what supporting evidence do you have] - do people know they can choose more than one option?
- [Supporting Evidence - what supporting evidence do you have] - do people use the help content under "which should I choose"? Does it answer their questions?
- [About VA Medical Records] - do participants understand the implications of the options to upload or have VA get records for them?
- Do participants understand that if they leave and come back, their application would be saved? Do they understand their intent to file would be set as the date they started and they would receive pay back to it if approved?
- [Fully developed claim] - How to participants respond to the value proposition?
- [Fully developed claim] - are participants clear on what documents to submit?
- Are participants clear on what happens next after they submit? Are they satisfied with the info?


## Post-Task Interview - 1 minute (until :44 in)

Now that you’ve had a chance to explore the form and site, do you have any other questions or comments about the different pages you’ve seen? 

## Thank-You and Closing - 1 minute (until :45 in)

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans.

As a thank you for your participation, we'd like to offer you a $X gift either as an Amazon Gift Card or through Paypal. Do you have a preference?

Great, and what's the email address I should use to get the gift to you?

Thanks! Lastly, would you like to share about this feedback opportunity with other Veterans or Veteran groups you're a part of? If so I can send you an email with a little blurb so you can easily connect folks to us.

Great, well thank you so much again, and enjoy the rest of your day!

