# Testing in production on March 21st

Ask VA VA.gov Team

Last updated by @tygindraux: March 20, 2025

## Background

We will meet with 2 participants who use Ask VA to submit inquiries in a business, education capacity. We will test in production by guiding participants on how to enable the new experience on VA.gov which is currently hidden to 100% of traffic.

### Goals

Our goals for testing are to:
- Uncover any new issues in production
- Validate any known issues in production

### Methodology

We will test the following tasks in production:
- Log into VA.gov and submit an inquiry
- View inquiry in the VA.gov dashboard
- View reply from VA in the VA.gov dashboard
- Reply back to VA from the VA.gov dashboard

### Roles

#### Session 1
- Facilitator: Ariel Martinez
- Acting as agent in CRM: Becky Phung
- Developer support: Eddie Otero

#### Session 2
- Facilitator: Tyler Gindraux
- Acting as agent in CRM: Shelby Carl
- Developer support: Joseph Hall

## Facilitator guide

### Before you start

- [ ] Start a thread in #ask-va-integration and tag teammates who are assigned to your session.
- [ ] Copy the cookie name so you have it handy. It's redacted from this script for security.

### Introduction (5 minutes)

Thanks for joining us today! My name is `Tyler or Ariel`. How are you?

[Ask everyone to introduce themselves.]

Today, we're going to test the new Ask VA experience on VA.gov.

There are a few things I want to mention before we start:

- **We have 1 hour scheduled together.** I’ll make sure we finish on time, so I may occasionally move us along during the session, so we can cover everything.
- **I want to be clear that we’re not testing your ability.** We're doing this so we can find any issues with the tool before we launch.
- **We're going to be testing in production today.** This means, you will use your personal ID.me or Login.gov account to sign in to VA.gov and use the new version of Ask VA. At certain points, your personal information will be on the screen. We will make sure that you're not sharing your screen with us when this is the case.
- **The last thing is about recordings.** Do you mind if we record this session for our notes?
  - `IF NO` Don't record.
  - `IF YES` Start recording.
 
Thanks for that. Do you have any questions for me before we start?

### Set up cookie (10 minutes)

Great. Let's get started. First, I need you to share your screen. Have you done this before?

[If not, guide them through screen share.]

Great. I can see your screen now. Next, we're going to get set up on VA.gov.

1. Please open your browser and navigate to VA.gov.

> Send a link if needed: [https://www.va.gov/](https://www.va.gov/)

2. Next, can you right-click on the page? You should see a menu appear.
3. Select 'Inspect.'
4. Select 'Application.'
5. On the left side, we're going to find where it says, 'Cookies' and click to expand the Cookies.
6. Select [https://www.va.gov/](https://www.va.gov/).
7. Now, I'm going to send you something in the chat. Can you navigate back to `Teams or Zoom`, where you can see me?

> Send cookie: --redacted--

8. Please copy this text from the chat. [Mac: Command C] or [Windows: Control C].
9. Let's navigate back to VA.gov now.
10. Great, now we're going to scroll down to the bottom of this list and we need to enter a new line. Double click the empty space at the bottom and paste the text. [Mac: Command V] or [Windows: Control V].
11. In the next column, type 'true'. Perfect. Now, we should be set up.
12. Let's type this URL in your browser [guide as needed].

> Send a link if needed: [https://www.va.gov/contact-us/ask-va](https://www.va.gov/contact-us/ask-va)

13. Success! We're ready to go.

`Joe or Eddie` you're welcome to stay on the call or drop.

### Log into VA.gov and submit an inquiry (20 minutes)

> Screen: Ask VA unauthenticated homepage.

1. Can you start by clicking Sign in or create an account?

> Screen: Standard sign in modal.

At this point, I'm going to ask you to stop sharing your screen so we don't see your personal information. [Help them stop sharing if needed].

2. Please choose ID.me or Login.gov and sign in how you would normally. I'll give you some time, just let me know when you're done.

> Screen: Ask VA authenticated dashboard.

3. Great. Now you're back at Ask VA. Let's 'Ask a new question.' [Click 'Ask a new question.']

> Screen: Your personal information.

4. What do you see next? [Note: Do they see personal information page or is it skipped?]

5. [If they see personal information] Go ahead and continue.

> Screen: Category.

6. Let's keep going through the form. I can't see your screen so let me know what you're doing.

> Screen: Topic.

> Screen: Subtopic.

> Screen: What is your relationship to the Veteran? [They should choose 'Connected through work.']

> Screen: Your role [Verify which role they choose.]

> Screen: School facility subflow OR state of facility. [Depends on role.]

> Screen: Tell us about yourself. [If their personal information was skipped up front.]

> Screen: Your contact information. [Did this prefill?]

> Screen: Your question. [Can they add an attachment?]

> Screen: Review and submit.

> Screen: Confirmation page.

7. Perfect. Let's stay on this page. Can you please copy your inquiry number and send it to me? [Or, ask them to say it outloud if it's easier.]

### View inquiry in the VA.gov dashboard (10 minutes)

Great. So now I'm going to ask you to share your screen again. At this point, we're not going to be able to see your personal information. [Help them start sharing if needed].

While we do this, `Becky or Shelby`, can you look up the inquiry in CRM and assign yourself? Please don't respond to it yet.

Okay, awesome. I can see your screen.

> Screen: Confirmation page.

1. Let's click 'return to Ask VA' now.

> Screen: Ask VA dashboard.

2. Let's check on the inquiry you just created.

> Screen: Question details.

Great. Now, we're going to have `Becky or Shelby` reply to your inquiry as an Ask VA agent. `Becky or Shelby` please solve the inquiry when you reply. Let us know when you're done.

### View reply from VA in the VA.gov dashboard (5 minutes)

And `Becky or Shelby` can you verify that you have responded and solved the inquiry now?

Awesome. Let's check that this worked now.

> Screen: Question details.

1. Can you refresh this page? [Command R, Control F5, Shift+Command+R or just guide them where to click if it's easier.]

2. Great. So we can see that the status changed to 'Replied.'
  
3. Let's scroll down and check that we have a reply from `Becky and Shelby` in our conversation now.

### Reply back to VA from the VA.gov dashboard (5 minutes)

Okay, great. We're going to do one more thing.

> Screen: Question details.

1. Can you scroll down and let's see whether we can reply back to VA.

2. Please write a reply to VA. You can type anything.

3. Let's send the reply.

> Screen: Reply confirmation.

4. Okay, let's navigate back to Ask VA [dashboard].

> Screen: Ask VA dashboard.

5. Great. Now, let's click on the same inquiry again.

> Screen: Question details.

6. Let's scroll down and check that we can see your new message in the conversation.

And `Becky or Shelby` can you verify whether you can see this new message on your side?

Great. We're all set.

### Cool down (5 minutes)

We have a little time left. You're welcome to stop sharing your screen now.

Do you have any questions for us?

[Any reflection that seems appropriate, if there's time left.]

Thanks again for your time. We really appreciate your help with testing.

Just so you know, this new version of Ask VA is not open to the public yet. You'll continue to use the previous version until we switch over to the new experience.

Have a great weekend.
