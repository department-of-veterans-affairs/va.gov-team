# MCP's MVP UAT Conversation Guide
November 2021

## Project-specific setup

Sign in to Zoom.

We will be having users share their screens and testing the new VHA copay tool. When the participant is ready, have them share their screen.

When their screen is shared, send the link https://va.gov/health-care/pay-copay-bill/ or have them go to www.va.gov.

**Note:** We will not be recording these sessions.

## Intro - 2 minutes

Thanks for joining us today! My name is \_\_\_ and I also have some colleagues on the line observing and taking notes. Today we're going to talk about a tool that allows Veterans to access their VA health care copay statements online. We've just built this tool and want to make sure that it is all working properly in your account and that all of your information is showing up correctly.

Before we start, I want to mention a few things:

This entire session should take less than 30 minutes. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.

In this session, we want to hear your honest opinions. If anything we show you is confusing, we want to hear about it. Your honest insights help us figure out how we can improve the Veteran experience, and we will not be offended by any opinions you express.

If for any reason and at any time you want to stop the session, please let me know.

## Warm-up/Screener Questions - 3 minutes

Alright, let's get started!

**1. Are you currently enrolled in VA health care?**

   1. If yes: 

      1. Do you pay a copay for health care visits?

      1. Do you pay for prescriptions?

      1. Do you know what priority group you're in?

**1. Have you received a letter in the mail from VA containing health care or prescription charges after October 1st, 2021?**

**1. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account?**

**1. Do you know your username and password?**

   1. If no: Are these readily accessible? Could you get them?

   _If the participantcannot remember or retrieve their login credentials, let them know that this is necessary for the test and proceed to the [closing statements]._

**1. Can you tell me what type of computer you are using today?**

   1. If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.

**1. Can you tell me which web browser you use?**

**1. Today we are going to observe you interacting with the new tool on your computer. Would you feel comfortable sharing your screen with me?**

   1. If yes: Thank you! Please share your screen, and we can get started.

   1. If no: _Explain this is necessary for testing. If they are still unwilling, proceed to the [closing statements] and end the session._

## Navigating to the tool - 2 minutes

Go ahead and navigate to va.gov and sign in with your DS Logon, My HeatheVet, or ID.me account. 

I'm going to paste a link in the Zoom chat. This link will be the way we access the tool today. Please open the link in a new tab in your browser.

https://va.gov/health-care/pay-copay-bill/your-current-balances/

Under the alert that reads, "Sign in to view your VA copay balances", select the button "Sign in or create an account"

### If the participant isn't enrolled in VA health care -- 1 minute

- [ ] UAT Task: The correct 'You're not enrolled in VA health care' empty state is shown 

_Proceed to [post-task interview]_

----

### If the participant is enrolled in VA health care - 1-15 minutes

In order to make sure your information is showing properly, we're going to compare the information shown on this page with your records. We'll start with the information under 'Your current copay balances'.

#### If the participant hasn't received statement(s) since Oct 1st - 1 minute

- [ ] UAT Task: The 'You haven't received a copay bill in the past 24 months' empty state is shown

_Proceed to [post-task interview]_

----

#### If the participant has received statement(s) since Oct 1st- 10-15 minutes

##### Copay overview page -3 minutes

- [ ] UAT Task: The correct number of facilities is showing under 'What you owe to your \[x\] facilities' 

- [ ] UAT Task: The correct amount is shown in the facility card(s)

- [ ] UAT Task: The correct date is shown in the facility card(s)

- [ ] UAT Task: The facility(s) contact information is shown under 'Contact information for your VA health care facilities' 

- [ ] UAT Task: $0 facility balance(s) that haven't received a statement within the past 6 months aren't interactive 

- [ ] UAT Task: $0 facility balance(s) that have received a statement within the past 6 months include the 'Check details' link 

We're now going to make sure your copay billing statements match your health care facility(s) and make sure you're able to download them.

_Direct the participant to the first facility's detail page._

----

#### Copay details page - 7-10 minutes

First, we're going to compare the information shown on this page with your records, similar to what we did on the previous page. 

##### If the facility has an active balance -- 3 minutes

- [ ] UAT Task: The 'Updated on \[date\]' matches the date of the most recent statement

- [ ] UAT Task: The blue status card contains the correct balance amount

- [ ] UAT Task: The blue status card contains the correct date to pay balance or request financial help 

- [ ] UAT Task: The correct number of statements on the Veteran's record loads 

- [ ] UAT Task: The correct date displays for each statement

- [ ] UAT Task: The correct account number displays under all 4 'How do I pay my VA copay bill?' accordions

- [ ] UAT Task: The correct contact information for the facility is shown 

_Proceed to [downloading a statement]_

----

##### If the facility has a $0 balance -- 3 minutes

- [ ] UAT Task: The 'Updated on \[date\]' matches the date of the most recent statement

- [ ] UAT Task: The $0 balance status card is shown 

- [ ] UAT Task: The correct number of statements on the Veteran's record loads 

- [ ] UAT Task: The correct date displays for each statement

- [ ] UAT Task: The correct account number displays under all 4 'How do I pay my VA copay bill?' accordions

- [ ] UAT Task: The correct contact information for the facility is shown

_Proceed to [downloading a statement]_

----

##### Downloading a statement -- 4 minutes

We want to make sure that you're able to download a billing statement. Go ahead and download the first statement in the list.

- [ ] UAT Task: The statement downloads to the participant's computer

Please open the downloaded statement so we can make sure it matches the information we're seeing on this page

- [ ] UAT Task: The statement's facility matches the facility on the copay detail page 

- [ ] UAT Task: The statement date matches the 'Updated on \[date\]'

- [ ] UAT Task: The statement's balance matches the balance in the blue status card

- [ ] UAT Task: The statement's 'balance due by' matches the blue status card's date to pay or request financial help

- [ ] UAT Task: The statement's account number matches the account number under 'How do I pay my VA copay bill?' accordions

_If the participant has more than one facility with statements, repeat the copay details tasks for the next facility in the list._

_Proceed to [post-task interview]_

## Post-Task Interview - 1 minute

We've finished comparing the information shown on the screen with your records.

Do you have any feedback on what we looked at today?

Do you have any questions for me?

## Thank-You and Closing - 1 minute

We really appreciate you taking the time to test these updates today! This helps us to make sure everything will work as expected when we launch this tool for all Veterans on VA.gov.

Any questions before we sign off?

Thank you so much again, and enjoy the rest of your day!

[downloading a statement]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/uat-nov-2021/conversation-guide.md#downloading-a-statement----4-minutes
[post-task interview]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/uat-nov-2021/conversation-guide.md#post-task-interview---1-minute
[closing statements]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/uat-nov-2021/conversation-guide.md#thank-you-and-closing---1-minute

