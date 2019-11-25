# Address validation and override user testing

### [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/user%20testing/Research%20Plan.md)

### [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/user%20testing/Conversation%20Guide_Samara.md)

### [Prototype](https://vsateams.invisionapp.com/share/34UP5BMUAJF#/391945409_1-_Intro_Screen)

## Background

We are incorporating address validation into the VA.gov profile so we can detects if someone has entered an address that the USPS may not be able to deliver mail to. Currently we only perform frontend validation to make sure someone has entered all the required fields for an address, and that those fields are filled out in the correct format (eg. at least five digits for a zip code). However, we are not currently detecting whether addresses are recognized by USPS or not. VA Profile (formerly Vet360) supports this functionality on the backend and needs VA.gov to support it on the frontend so users updating their addresses aren't at risk of saving an address that the VA ultimately can't deliver to.

This round of user testing aimed to test the designs that walk users through what to do if we detect that their address may not be recognized by USPS.

## Methods

### What We Did

We conducted usability testing with an [InVision prototype](https://vsateams.invisionapp.com/share/34UP5BMUAJF#/391945409_1-_Intro_Screen) over GoToMeeting.

### Dates

We conducted interviews between November 13 – November 21, 2019.

### Participants

We talked to **4 veterans**:

- All participants received at least one benefit from the VA.
- 2 women; 2 men.
- 3 participants 55+; 1 participant under 35
- 4 Army; 1 Marine
- 4 white participants; 1 Black or African American participant

### Key screens

**Address is invalid. User can override this determination or pick a suggested address.**

![Address invalid: Override; Suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/user%20testing/images%20for%20user%20testing%20report/Address%20invalid:%20Override%3B%20Suggestions.png)

**Address is invalid. User can override this determination, but there are no suggestions.**

![Address invalid: Override; No suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/user%20testing/images%20for%20user%20testing%20report/Address%20invalid:%20Override%3B%20No%20suggestions.png)

**Address is invalid. User can not override this determination. They can only edit or pick a suggested address.**

![Address invalid: No override; Suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/user%20testing/images%20for%20user%20testing%20report/Address%20invalid:%20No%20override%3B%20Suggestions.png)

**Address is invalid. User can not override this determination. They can only edit their address.**

![Address invalid: No Override; No Suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/user%20testing/images%20for%20user%20testing%20report/Address%20invalid:%20No%20Override%3B%20No%20Suggestions.png)

## Results & Takeaways

#### A note about testing

I think we got some insights into the usability pain points in the address validation flow. However, there are some results that I think would have been different had we been testing with participants' real data and not prototype data.

First, participants got hung up on choosing the "right" address in flows where we suggested addresses to them. It felt like they thought there was a right or wrong answer for which address to pick instead of understanding that the session was about evaluating the tool from a high level. I don't think we would have had this issue if we were using real data because the addresses participants' saw would have meant something to them instead of being made up, causing them to get caught up in arbitrary details.

Second, participants didn't get that frustrated by being told the addresses they entered were invalid. I think this would have caused signficantly more frustration had they been using their real-life addresses instead of addresses that meant nothing to them, especially in flows where the participant could not override the "invalid" determination.

We need to be mindful of how using a prototype may have affected the results, so I've noted places throughout the results where I think this may have played a role in results and reactions.

### Persisting a sign in link on the "Change your address" content page when a user is already signed in is confusing

Though testing navigation to the profile was not the main focus of testing, we did ask participants to show us where they would go to change their address. We started people on the homepage, and a couple participants (P1, P2) navigated to the "Change your address" content page instead of going directly to the personlized menu. 

This gave us a chance to do a small evaluation of the content page. One thing we noticed was this page uses subway map directions to tell you how to change your address. This means we show "Step one: Sign in to VA.gov" even when people are already signed in. This causes some confusion for users.

**Recommendation**: Replace the subway map with a dynamic modal.

### Participants did not know what "invalid" meant

In the prototype, the screen we use to tell people that there may something wrong with their address starts "Your address update isn't valid."

"Valid." No one knew what this meant. While all four participants understood this meant there was something wrong with an address, none of them made the most important connection — that this means the USPS may not be able to deliver mail to that address, therefore putting them at risk for not receiving key VA correspondence.

Additionally, one participant (P3) rightfully pointed out this terminology was confusing because all the addresses we looked at were entered in a valid format even if there was something else wrong with them.

It's worth nothing that participants were not that frustrated by the fuzziness of "valid." However, I think this would have caused a lot more confusion and frustration if they were able to enter their real addresses. If we are telling people the address they know to be their home address isn't "valid," what are they supposed to do with that?

**Recommendation**: Remove the word "valid" from the copy used in address validation. Figure out more human langauge to explain that we may not be able to deliver mail to the address entered, and help the user figure out whether override, edit, or choosing a suggested address is the right solution for them.

### People didn’t know where the suggested addresses came from, but this didn’t concern them

Only one person (P3) correctly guessed that this data had anything to do with USPS (note: address validation doesn't happen through USPS, but it obviosly affects mail delivery). Others thought Google maps (P1, P2) or other local data (P4). However this didn't concern anyone. No one seemed to think this came from the VA or had any other concerns about how these suggestions were generated.

**Recommendation**: No changes. 

### There was a lot of confusion around why people could select their original address if they weren't “valid”

Understandably, participant did not understand why we let them move forward with the original address they entered (override) if the website was telling them this address wasn't valid. A couple of participants didn't understand this at all (P1, P2) while a couple (P3, P4) did mention they think override is allowed because the site assumes the user knows best, but they still stated confusion on why this was actually allowed.

However, people showed less confusion around the opposite scenario — when they were not allowed to choose the address they originally entered. They assumed this was because the original address was so incorrect that website would not let them move forward with it. Without getting into technical specifics, this is essentially correct.

Again, I think this is something that didn't a lot of frustration because we were using a prototype with fake addresses. If this were real life, I think people would have not been as confused with why they could choose their original address, and I think they would have been a lot more frustrated when we restricted override.

**Recommendation**: Be more clear about why people can or can't override our initial determination that there is a problem with the address they entered.

### Overall, people found the suggested address helpful

Most participants (P1, P2, P3) found the suggested addresses really helpful and seemed almost dependent on them to know how to proceed forward. 

Again, I think this would be less of an issue in real life when people are dealing with their real address. Participants got too hung up in testing on picking the “right” answer for testing instead of thinking of the process at a higher level. If participants had entered their real addresses, they would likely be less dependent on suggestions to determine how to fix the "invalid" determination.

**Recommendation**: No changes.

### People mentioned the 800 number would be helpful on screens where you can’t select your original address

We show the 800 number to call the VA in one of two scenarios in which people can not select the original address they entered. Two participants (P1, P3) mentioned they wanted to see the 800 number to call the VA in both of the scenarios where they were not able to select their original address but knew this address to be correct. 

This seems like an obvious update. However, the VA help line will not be able to update an address if the backend determines that address override isn't allowed. So, we'd be sending people to the help line knowing that there is no resolution. It feels like bad UX to knowingly send them to a dead end. Instead, we should provide them as much help as we can in context.

**Recommendation**: Either don't show the 800 number when address override isn't allowed, or show the 800 number but do a better job explaining why override isn't allowed and let people know the VA help line will not be able to change this determination.

### People wanted more specific directions on what mistakes they made with the address, but we currently can’t provide that

Almost all participants (P1, P3, P4) wanted more information on what the exact problem was with the address they entered when they say the message that the address wasn't valid. They said this would help them know what to update or what suggested address to pick in order to be able to save their information.

From a technical perspective, we don't have the ability to let them know more specifically what might be wrong with their address. Remember, the "invalid" address determination doesn't have anything to do with missing or incorrect fields, like a missing zip code. The address "invalid" error has to do with whether we think the address they entered is real, and therefore mail can be delivered there. Besides showing suggested addresses, we don't get information from the backend that would give us enough detail to explain things like "you should have entered 'street' instead of 'road'."

However, I think this is another issue that wouldn't exist if our participants had been entering their actual addresses instead of looking at made up data. If someone is looking at their actual street address, they won't need help from the UI to know what might be wrong. They'll be able to spot mistakes based on what they know about their address and where they live.

**Recommendation**: No changes.
