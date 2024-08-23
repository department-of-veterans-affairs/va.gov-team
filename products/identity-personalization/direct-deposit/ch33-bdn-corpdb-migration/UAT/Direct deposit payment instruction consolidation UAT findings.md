# Direct deposit payment instruction consolidation UAT Findings, July 2024

## Who we talked to
We successfully tested 5 participants (out of 7), including 3 internal Veterans (the pilot participant as well as two others). We also had 2 participants who did not finish their sessions due in one case to technical difficulties, and in the other a lack of comfort with the tasks of the session. The original plan was to fully test 6 participants, but due to difficulty recruiting participants as well as time constraints, the research was deemed to be complete after only 5 (this is why internal participants were the majority of people tested).

### Demographics:

Man | 39 years old | Hispanic, Latino, or Spanish origin

Man | 77 years old | White

Man | 40 years old | Hispanic, Latino, or Spanish origin

Man | 34 years old | White

Man | 43 years old | White

## Research Goals	
The primary goal of our UAT is to confirm that the Direct Deposit section of the Profile functions as intended for users who sign in with `ID.me` or `Login.gov` and who have direct deposit set up with their bank information. 

Specifically, this research will be looking to validate the following use cases:
- Participants view and edit the correct direct deposit information in their account for all three user scenarios, and receive email confirmations:
	- Veterans with education benefits and compensation & pension
	- Veterans with just education benefits
	- Veterans with just compensation & pension
- We are able to confirm that the information being returned from the API matches what is being populated for users on the screen.
- We are able to confirm that the following safeguards in place are working correctly:
	- invalid routing/account numbers cannot be saved
	- numbers over/under the character limit are unable to be saved

## Methodology 
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected.

### Location
Remote via Zoom

### Research materials

[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/research-plan.md)

[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/conversation-guide.md)

## Tasks and Outcomes

All 5 participants successfully completed all 10 tasks they were given. With the two other participants, one never began testing at all and the other could not proceed after completing the initial task of logging into their account. 

[Session conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/conversation-guide.md) (task list)

### Tasks 1-9 Findings

For the first 9 tasks, completion of the task given was all that was being tested. All participants completed every task, with no additional findings to report. 

### Task 10 Findings

For the final task, users were asked about their perceptions of the Account Security page in Profile:

> "For the last task today, I’d like to direct your attention to the sidebar menu to your left. What do you expect you’d find on that page if you clicked on Account Security?

> "Alright, let’s click on it and take a look. (Participant shares expectations and impressions.)

#### Pilot participant:

- Mentioned account security might not be clear to everyone, stated it's more about signing in: stated they believed the language used might be better if it references sign in, "'Sign in security', "dont really know what use their is for me " (and then mentioned that was because they were already signed in, and already has MFA enabled).

#### P3

- No takeaways

#### P7

- Initially did not interpret that account security did not have modifiable options on the page itself

#### P9

- "This is confusing", "this is taxing", Content isn't dynamic (as in: it doesn't change based on sign-in method) - link is, but not the other content.
- "The thing at the bottom makes me feel good."
- Mentioned because there are multiple login methods, burden is on the user to know which.

#### P14

- Said that they would assume 'account security'is for something local instead of id.me.
- Likes that it showed identity is verified, MFA enabled.

### Recommendations

Considering we had limited participants and structure with the final task, more time should be spent on investigating perception of the Account Security page. The findings from this UAT study are not enough to advise any specific recommendations. 
