#
# **Conversation Guide: UAT for HLR**

### **Project-specific setup**

- Make sure you are allowing sharing!
- Make sure to confirm we have the right email address for the white listin
- For debugging https://api.va.gov/v0/user

- Sign into VA.gov through DS Logon
- We will be having users share their screens (after they have logged on) and submitting a HLR.
- When the participant is ready, pass presenter roles to them and have them share their screen.
- When their screen is shared, send the beta link [https://va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction](https://va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction)
- **Note** : We will **not** be recording these sessions.

## **Intro - 2 minutes**

Thanks for joining us today! My name is ______ and I also have some colleagues on the line observing and taking notes. Today we&#39;re going to talk about Higher-Level Review (HLR). A Veteran that wants to dispute a decision they received on a claim, can file a Higher-Level Review, were a more senior, experienced reviewer take a look at the case and the evidence they already provided.

This meeting has several observers as you may have noticed.  These are members of the technical team (in case of technical issues) and stakeholders (experts in Higher Level Review that work for the Office of Adminstrative Review, which is responsible for appeals and decision reviews.

Before we start, a few things I want to mention:

Before this was just a paper form but we have created a digital version and today we will be testing out that functionality. Our goals for the session are:
- To test out the functionality of our new digital HLR form and catch any bugs or technical issues throughout the process, and
- To have you file a real higher-level review of your disability compensation claim. Again this will be a real Higher-Level Review request with the VA, so we want to emphasize that. If we cannot successfully file your HLR request then we will be sure to give you another way to do so. 
Some other things to note:
- The entire session should last 60 minutes or less (HLR is a relatively short form). Throughout the process if you would like to stop the session or discontinue for any reason, that is totally fine - just let me know. 
- In this session, we want to hear your honest opinions. If you find anything unclear or confusing, we want to hear about it. Your honest feedback will help us improve the veteran experience, and of course we will not be offended by any opinions you express. We’re testing the product - not you.

Does that all sound good?

## **Warm-up/Screener Questions - 3 minutes**

OK, let&#39;s get started.

1. Have you heard of Higher-Level Review (HLR) before today?
2. Great, next, I&#39;d like to confirm: You are ready to apply for a HLR today and have all the necessary information available?

- If no, the participant can not complete the UAT. (Confirm/probe if they seem confused.)

1. Can you confirm for me that you have a DS Logon?
2. Do you know your username and password?

- If not: Are these readily accessible?
- If the user can not remember or retrieve their login credentials, end the session.

1. Can you tell me what type of computer you are using today?

- If needed: I&#39;m asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
- Can you tell me which web browser you are using?

1. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?

- If no: Explain this is necessary for testing. If they are still unwilling, end the session.

(Pass presenter rights).

OK, please share your screen, and then we will get started.

## **UAT testing HLR - 45 minutes**

- Please open a new tab in your browser, and go to:

[https://va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction](https://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/introduction)

- Start answering the questions on this introduction page for HLR.
- Sign in to your VA account
- Start the Higher-Level Review application

  - UAT TASK: They are able to see the wizard and select information for HLR.
  - UAT TASK: Confirm that they can log in.
  - UAT TASK: Confirm when they log in, that they are presented with the first page of the HLR flow.

- Please continue the steps in the HLR application process.
  - UAT TASK: Review / confirm (or input): that your personal data is correct.
  - UAT TASK: Review / confirm (or input): that your contact info is correct.
  - UAT TASK: Choose: the correct form.
  - UAT TASK: Choose: select the issue(s) that you want to contest.
  - UAT TASK: Record: do the participant open the link: &quot;Don&#39;t see the issue you&#39;re looking for&quot;?
  - UAT TASK: Record: do the participant select to have a different office to conduct the review?&quot;
  - UAT TASK: Choose: Informal conference: &quot;Yes, No, or Yes call my representative&quot;.
  - If Yes: UAT TASK: Choose: time for a call to set up informal conference.
  - UAT TASK: Review: Veteran details.
  - UAT TASK: Record: any details edited.
  - UAT TASK: Review: Contested issues.
  - UAT TASK: Record: any issues edited.
  - UAT TASK: Review: Request an informal conference.
  - UAT TASK: Record: any details about informal conference edited.
  - UAT TASK: Check: Read and accept privacy policy.
  - UAT TASK: Record: Submit application
  - UAT TASK: Review and confirm the details on the Submission page.

6 users

## **Post-Task Interview - 2 minutes**

- Do you have any feedback on what we looked at today?
- Do you have any questions for me?

## **Thank-You and Closing - 2 minutes**

We really appreciate your taking the time to talk to us today. This helps us to make sure everything will work when we launch these updates for all Veterans on VA.gov.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!

## **Navigating to the tool - 3 minutes**

I&#39;m going to paste a link in the Zoom chat. This link will be the way we access the tool today. Please open the link in a new tab in your browser.

[https://www.va.gov/manage-va-debt/your-debt/](https://www.va.gov/manage-va-debt/your-debt/)

I&#39;m going to provide the login information so you can access the tool.

[Paste login info in Zoom chat]

Awesome! Now you have access to the tool. Under the alert that reads, &quot;Please sign in to manage your VA debt&quot;, select the button &quot;Sign in or create an account&quot;

- Please sign in with your DS Logon, MyHealtheVet, or ID.me account.

## **If the participant has never had a VA debt - 1 minute**

- UAT Task: The correct empty state is shown.

[[Proceed to post-task interview](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#post-task-interview---1-minutes)]

## **If the participant has a current VA debt - 5 -10 minutes depending on the number of debts**

In order to make sure your information is showing properly, we&#39;re going to compare the information shown on this page with your records. We&#39;ll start with the information under &#39;Your current debts&#39;

- UAT Task: The correct number of debts is shown under the &#39;Your current debts&#39; section.
- UAT Task: The correct debt type is shown in the debt card(s).
- UAT Task: The correct date the debt was received is shown in the debt card(s).
- UAT Task: The correct amount owed is shown in the debt card(s).
- UAT Task: The correct &quot;Why might I have this debt&quot; content is shown in the debt card(s).

[[Run through UAT for downloading letters](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#if-the-participant-has-letters-available---3---12-minutes)]

## **If the participant doesn&#39;t have a current debt, but they have resolved debts - 3 minutes**

- UAT Task: The correct empty state is shown under the &#39;Your current debts&#39; section.

[[Run through UAT for downloading letters](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#if-the-participant-has-letters-available---3---12-minutes)]

## **If the participant has letters available - 3 - 12 minutes**

(Note to moderator: The least common letters we&#39;ll see are the _debt increase letter_ and the _third demand letter_. Please test these downloads as you see them in sessions until reaching the desired participant count)

Great! We&#39;re going to take a look at the table of debt letter(s) on this screen and make sure they match the letter(s) you&#39;re able to download. We&#39;re going to verify that the information in the table is correct, and then take a look at the letters themselves.

- UAT Task: The correct number of letters are shown under the &#39;Your debt letters&#39; section.
- UAT Task: The correct date is matched to the debt letter type for each debt letter
- UAT Task: The table&#39;s dates are shown in reverse-chronological order

### **Run through downloading the first demand letter until ~3 participants have done this task - 3 minutes**

Go ahead and download the first demand letter in the table.

- UAT Task: The letter downloads to the user&#39;s computer

Please open the downloaded letter.

- UAT Task: The opened letter matches the letter information in the table.

### **Run through downloading the second demand letter until ~3 participants have done this task - 3 minutes**

Go ahead and download the second demand letter in the table.

- UAT Task: The letter downloads to the user&#39;s computer

Please open the downloaded letter.

- UAT Task: The opened letter matches the letter information in the table.

### **Run through downloading the third demand letter until ~3 participants have done this task - 3 minutes**

Go ahead and download the third demand letter in the table.

- UAT Task: The letter downloads to the user&#39;s computer.

Please open the downloaded letter.

- UAT Task: The opened letter matches the letter information in the table.

### **Run through downloading the debt increase letter until ~3 participants have done this task - 3 minutes**

Go ahead and download the debt increase letter.

- UAT Task: The letter downloads to the user&#39;s computer.

Please open the downloaded letter.

- UAT Task: The opened letter matches the letter information in the table.

[Proceed to post-task interview]

## **Post-Task Interview - 1 minutes**

Great! We&#39;ve finished comparing the information shown on the screen with your records.

- Do you have any feedback on what we looked at today?
- Do you have any questions for me?

## **Thank-You and Closing - 1 minutes**

We really appreciate you taking the time to test these updates today! This helps us to make sure everything will work as expected when we launch this tool for all veterans on VA.gov.

As a thank you for your participation, we&#39;d like to send you a $50 thank-you check. This will be sent by Shannon, and she&#39;ll work with you to figure out the right place to send it.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!
