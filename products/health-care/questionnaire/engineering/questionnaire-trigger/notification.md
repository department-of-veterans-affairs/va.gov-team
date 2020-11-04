# Notification

## Use Case

As a veteran,
I should be notified according to my notification preferences that I have a questionnaire to complete, 
So that I can complete the questionnaire for the my med staff. 

## Solution 1

We want to leverage VeText for the first solution. To keep things simple, we want to add a link to the text message that VeText is already sending out. This link will send the users to a page that lists all the upcoming questionnaires.

Ideally, this will be expanded to be more dynamic in nature.

### Rationale

This is a simple solution and allows the heavy lifting of the determining if a user has a questionnaire to be done by the team to start.

### Questions

- What does the current text message look like for an appointment coming up in roughly 10 days? 
- Can we control which appointment types get the extra notification. For example, only send this to Primary Care appointments at Facility XYZ? Who manages that?
- What is the character limit for a text message? 
- What page do we want to send the users to? Drupal or Questionnaire Manager.
- Does va.gov have a url shortener service?