# Pilot Prep & Notes

## **IIR**Welcome Pathway (Mobile)

### **Pilot Prep**

#### _Pilot Information_

- Tickets:

  - Intake: [82257](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82257)

    - **Pilot:** [**95524**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95524)

- **Date/Time**: December 4, 2024 at 1:00 p.m. ET

- [Link to join Zoom](https://adhocteam-us.zoom.us/j/9180204724?pwd=FeGiITn27gtzOd5B1WAkstYQe8EfCD.1)


#### _AT Being Used_

- **Type**: Mobile

- **Device**: iPhone 

- **Assistive Technology**: VoiceOver

- **Pilot**: Maria

- **Co-Pilot:** Riley


#### _Research Goals_

- Identify if we are meeting the VA’s experience standards of comprehension, consistency, credibility, efficiency, findability, health and safety, and usability are met for Veterans using Assistive Technology (AT).

- Determine if Veterans using AT find the proposed alert and update/edit contact information designs simple to navigate and the information easy to update.


#### _Resources_

- **Prototype**: Staging

  - Test scenario 1 login credentials:

    - username: <adam.king0126+2@gmail.com>

    - password: 369SsNrLgPv5

  - Test scenario 2 login credentials:

    - username: <vets.gov.user+1@gmail.com>

    - password: DbAxDhMy5L084

- **GitHub Resources**

  - [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/assistive-tech%20research/AT%20research%20plan.md)

  - [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/assistive-tech%20research/AT%20conversation%20guide.md)

  - [Assistive Technology Pilot Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/assistive-tech-pilot-guide.md#assistive-technology-pilot-guide)


### **Pilot Notes**

#### _Scenario 1_

- Maria: The welcome VA modal went to the close button, would be better if it goes to the header 

- Maria thinks it’s straightforward because there isn’t a lot of noise and it tells you what to do for the main task and where to go for more questions 

- Maria clicked the continue button to close it, thought it was confusing there was both a close button and continue button. Prefers removing the close button and just having the continue button so it’s just 1 swipe to get to the ‘Continue’ button 

- Scale of 1-5 of understanding where she is: 5, on the Verify VA page


#### _Scenario 2_

- When the page loaded it didn’t announce anything, it should jump to ‘Greg A Anderson’ because it seems like that’s the first thing on that screen 

- Upon loading the page, focus should automatically be sent to the H1. This will inform the user of their place on the screen.

- Thinks it’s clear that it’s asking for contact information and likes that there’s just one action to add contact information 

- When Maria clicked the contact info link, the focus initially went to the feedback button at the bottom of the screen which was confusing

- The lines of text informing the user that a mobile phone number and email address are required is not semantically connected. Currently, the user must swipe multiple times to read the entirety of the text. The entirety of the text should be announced in one swipe!

- Maria: Mobile and email is required for the application, it’s not semantically put together so she has to swipe through it multiple times. It should be grouped. “Mobile phone and email address are missing” does the same thing. These should be grouped so they announce together. 

- Back button is located at the bottom of the page, it should be at the top.

- Selected ‘Edit’ button and it said ‘Update’ which was unclear

- Liked that it’s prefilled

- Tried to cancel but was prompted to for email and mobile to be updated, focus was sent back to the bottom of the page 

- Edits mobile phone number 

  - Successfully adds phone number 

- Likes that missing info is announced every time they go to the page 

- Edits email address 

  - Successfully adds email address 

- Focus is again sent to the bottom of the page ‘Contact Veterans crisis hotline’, should go to ‘Your information has been added’ instead  


### **Pilot Takeaways**

#### _Were there any accessibility issues of note?_ 

- iPhone bug discovered

  - When submitting updates to the phone number and email address, the focus is being sent to the bottom of the page either to the ‘Feedback’ button or another link in the footer

  - Riley tested this on Android and the focus was working as expected by going to the success alert upon submitting changes to the phone number and email address 


### **Additional Notes**

Session is completed. [@mutiaadhocteam](https://github.com/mutiaadhocteam) I tagged you in a couple comments in [the notes doc](https://docs.google.com/document/d/1zE737Vj5pk024n0jLbRuHiHZ8EhGNwjd0MrtqlolnUE/edit?usp=sharing) to makes sure I fully captured your experience prior to sending feedback to the team.

Some feedback Riley Orr noted:

- iPhone bug discovered

  - When submitting updates to the phone number and email address, the focus is being sent to the bottom of the page either to the ‘Feedback’ button or another link in the footer
  - Riley tested this on Android and the focus was working as expected by going to the success alert upon submitting changes to the phone number and email address

- Recommendation: Remove the ‘Close’ X button on the welcome modal

  - Having two buttons that close the modal (the 'X' and 'Continue' buttons) is confusing
  - Maria recommends that the focus go to the modal’s header instead so it just takes 1 swipe to navigate to the ‘Continue’ button

- Android bug discovered after session

  - When a mobile phone number is added it does not let me swipe to it
  - I can swipe to ‘Mobile phone number heading 2’ and then ‘Edit mobile phone number’ but I cannot swipe to the number itself. The number is never read out to the screen reader.



- Recommendation: Remove the ‘Close’ X button on the welcome modal because it’s confusing since there’s a ‘Continue’ button that closes the modal anyway. Maria recommends that the focus go to the modal’s header instead so it just takes 1 swipe to navigate to the ‘Continue’ button 

- Android bug discovered after session 

  -  When a mobile phone number is added it does not let me swipe to it. I can swipe to ‘Mobile phone number heading 2’ and then ‘Edit mobile phone number link’ but I cannot swipe to the number itself. The number is never read out to the screen reader. 
