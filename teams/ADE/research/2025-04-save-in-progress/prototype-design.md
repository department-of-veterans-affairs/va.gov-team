# Proposed Design to test Save in Progress

Cindy Merrill (ADE) and Jeana Clark (Forms team), April 2025

## User research goals

1. (primary) Learn about Veterans' expectations for saving information while filling out an online form before the form is submitted.
2. (primary) Get user feedback on a revised design for "save in progress" and "finish this request later".
3. (secondary) Get user feedback on error messages and the progress bar while filling out online forms.

## Outcome of the user research

Findings and recommendations from this research will **inform guidance and documentation for the "save in progress" feature** that is present for authenticated users filling out forms on VA.gov. Matt Dingee asked ADE to help with this because some VFS teams are innovating new designs, whereas "save in progress" should be a standard pattern used by all teams that shouldn't need new designs. 

In addition, user feedback collected on "finish this request later", error messages, and the progress bar will be helpful for accessibility specialists advising VFS teams.

## Proposed design for user research (usability testing)

Cindy and Jeana proposed this design and want to get feedback from Martha and the accessibility specialists CoP. We want to **find out whether Veterans are confident that their form data is being saved** with this design, which has four components:  

1. **New! NO green alert with every save** (because it flashes on and off, and isn't read by screen readers due to its position below the Back and Continue buttons).

![green-save-alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-04-save-in-progress/images/green-save-alert.png)

1. **New! Change "Finish this request later" to look like a button** titled "Save and finish later" or "Finish later" (instead of the current look as a link) for material honesty. Including the word "Save" to the button will likely help Veterans understand that their form data is being saved. Put in place of the Back button (which isn't needed because of breadcrumb at the top, per research conducted with the minimal header design) because this is a good place for the user to decide whether to stop working and resume later vs. continue onto the next page. 

![newCTAs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-04-save-in-progress/images/newCTAs.png)

2. **Alert on the form intro page for unauthenticated users** (currently exists on some forms) 
![unauth-alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-04-save-in-progress/images/unauth-alert.png)

3. **Alert on the form intro page for authenticated users** (currently exists on all forms when signed in)
![auth-alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-04-save-in-progress/images/auth-alert.png)


## How to implement this design for usability testing

Below is a list of what we might need to implement the design for usability testing.

What we need | Rationale | How to do 
------------------|--------------|------
Coded prototype with a working form | So can test with screen reader users (as well as sighted users), and can save the form data entered by participants (vs. telling them that it's saved when it's not) | Need help from an engineer
(ideally) Simplified login process | So research participants don't get bogged down with logging in and don't share their PII | Work with Adam Whitlock (Authenticated Experience Design Pattern team) to make a github codespace with user task links that go directly to authenticated pages
Start from a form using the minimal header|It's in the VA design system and has room for a second CTA button|Use the [Request Personal Records (VA Form 20-10206)](https://staging.va.gov/records/request-personal-records-form-20-10206/introduction) that's already in the minimal header format
Turn off display of green alert on form after every field entry|Want to test this|Need help from an engineer
Change "Finish this later" button/link to a button to the left of the Continue button|Want to test this|Need help from an engineer
Add alert on intro page (if not already there)|Want to test this|Need help from an engineer if it's not already there
Add alert on first page of form (if not already there)|Want to test this|Need help from an engineer if it's not already there
Get content feedback on "Save and finish later" button wording|Get approval for the button wording|Reach out to the Content and IA team via slack