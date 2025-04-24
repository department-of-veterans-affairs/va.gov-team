# Proposed Design to test Save in Progress

Cindy Merrill (ADE) and Jeana Clark (Forms team), April 2025

## User research goals

1. (primary) Learn about Veterans' expectations for saving information while filling out an online form before the form is submitted.
2. (primary) Get user feedback on a proposed design revision for "save in progress" and "finish this request later".
3. (secondary) Get user feedback on error messages and the progress bar while filling out online forms.

## Outcome of the user research

Findings and recommendations from this research will **inform guidance and documentation for the "save in progress" feature** that is present for authenticated users filling out forms on VA.gov. Matt Dingee asked ADE to help with this because some VFS teams are innovating new designs, whereas "save in progress" should be a standard pattern used by all teams. 

In addition, user feedback collected on "finish this request later", error messages, and the progress bar will be helpful for accessibility specialists advising VFS teams.

## Proposed design for user research (usability testing)

Cindy and Jeana want to **learn whether Veterans are confident that their form data is being saved** with the following two design changes:  

1. **NEW! Remove the green alert that currently displays after every save** (because it flashes on and off, and isn't read by screen readers due to its position below the Back and Continue buttons).

![green-save-alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/green-save-alert.png)

2. **NEW! Change "Finish this request later" to look like a button** titled "Save and finish later" or "Finish later" (instead of the current look as a link) for material honesty. Including the word "Save" will help Veterans understand that their form data is being saved. This new button can be put in place of the Back button (which isn't needed because of breadcrumb at the top, per research conducted with the minimal header design) because this is a good place for the user to decide whether to stop working and resume later *vs.* continue onto the next page. We might also consider adding the word "save" to the "Continue" button, too. We and the Content team prefer the third option below ("**Save and finish later**" and "**Save and continue**"):  

![newCTAoptions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/newCTAoptions.png)

### Other save messaging already in forms that use the forms library
Forms that use the forms library already have 3 messages about saving, which are listed below. No design changes are needed for user research, as long as we use a form that already has them.

1. **Alert on the intro page for authenticated users** 

![auth-alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/auth-alert.png)

2. **Text below the progress stepper for authenticated users**

When the form opens:

![auth-top-of-form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/auth-top-of-form.png)

After the user starts filling out the form, the text includes a form ID number:

![auth-top-of-form-w-ID](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/auth-top-of-form-w-ID.png)

3. **Alert on the form intro page for unauthenticated users**--This is NOT currently in Production and won't be for this research

![unauth-alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/unauth-alert.png)


## How to implement this design for usability testing

Below is a list of what we might need to implement the design for usability testing.

What we need | Rationale | How to do 
------------------|--------------|------
Coded prototype with a working form | So can test with screen reader users (as well as sighted users), and can save the form data entered by participants (vs. telling them that it's saved when it's not) | DONE--Need help from an engineer
(ideally) Simplified login process | So research participants don't get bogged down with logging in and don't share their PII | DONE--Work with Adam Whitlock (Authenticated Experience Design Pattern team) to make a github codespace with user task links that go directly to authenticated pages, bypassing the login process
A form using the minimal header|It's in the VA design system and has space to add a second CTA button|DONE--Use the [Request Personal Records (VA Form 20-10206)](https://staging.va.gov/records/request-personal-records-form-20-10206/introduction) that's already in the minimal header format
Turn off display of green alert on form after every field entry|Want to test this|DONE--Need help from an engineer
Change "Finish this later" button/link to a button to the left of the Continue button|Want to test this|IN PROGRESS--Need help from an engineer
Content feedback on "Save and finish later" button wording|Get approval for the button wording|DONE--5 Content folks during Office Hours preferred the third proposed design: "Save and finish later" and "Save and continue".
Matt Dingee's feedback on adding a second button to every form page|Material honesty--so the "Finish this later" button that looks like a link would look like a button|DONE--Matt prefers that the new button be in a different place, but we can test this way (no additional approval needed from him). Jeana might do more design exploration.
Design assist for new button wording|Make sure that the wording fits on buttons in mobile and desktop|DONE--Jeana mocks them up and helps decide which version to test. We're going to test "Finish later" and "Continue" for the button wording because it fits better and looks better (no repeated "save and").
