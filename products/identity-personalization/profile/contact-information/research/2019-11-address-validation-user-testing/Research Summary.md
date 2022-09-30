# Address Validation & Override: User Testing

### [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user%20testing/Research%20Plan.md)

### [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user%20testing/Conversation%20Guide_Samara.md)

### [Prototype](https://vsateams.invisionapp.com/share/34UP5BMUAJF#/391945409_1-_Intro_Screen)

## Background

Currently, the VA.gov profile performs frontend validation to make sure someone has entered all the required fields for an address in the correct format (eg. not missing a street address; at least five digits for a zip code). However, we are not currently detecting whether addresses are recognized by USPS or not. VA Profile (formerly Vet360) supports this functionality — address validation — on the backend, and VA.gov is in the process of incorporating it on the frontend. This round of user testing aimed to test the designs and flows that support address validation.

## Methods

### What We Did

We conducted usability testing with an [InVision prototype](https://vsateams.invisionapp.com/share/34UP5BMUAJF#/391945409_1-_Intro_Screen) via GoToMeeting.

### Dates

Testing sessions took place between November 13 – November 21, 2019.

### Participants

We talked to **4 veterans**:

- All participants received at least one benefit from the VA.
- 2 women; 2 men.
- 3 participants 55+; 1 participant under 35.
- 4 Army; 1 Marine.
- 4 white participants; 1 Black or African American participant.

### Key screens

**Address is invalid. User can override this determination or pick a suggested address.**

![Address invalid: Override; Suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user-testing/images-for-user-testing-report/address-invalid-override-suggestions.png)

**Address is invalid. User can override this determination, but there are no suggestions.**

![Address invalid: Override; No suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user-testing/images-for-user-testing-report/address-invalid-override-no-suggestions.png)

**Address is invalid. User can not override this determination. They can only edit or pick a suggested address.**

![Address invalid: No override; Suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user-testing/images-for-user-testing-report/address-invalid-no-override-suggestions.png)

**Address is invalid. User can not override this determination. They can only edit their address.**

![Address invalid: No Override; No Suggestions.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user-testing/images-for-user-testing-report/address-invalid-no-override-no-suggestions.png)

## Results & Takeaways

#### A note about testing

This was a wortwhile round of testing, and we were able to identify some fixable pain points. However, there is some feedback we received and challenges we observed that I don't think would have occurred had we been testing with participants' real data and not prototype data.

First, participants seemed overly focused on choosing the "right" address in flows where we determined the original address entered was problematic and they had the option to choose a "suggested address." Testing was not about choosing the right or wrong suggestion; it was about testing whether participants would understand what to do with the information given if they encountered this scenario in real life. I don't think we would have seen this preoccupation with choosing the right address if participants were working with their real data instead of made up data. This caused them to get caught up in arbitrary details.

Second, participants didn't get frustrated by being told the addresses they entered were invalid. I think this would have caused signficantly more frustration had they been using their real addresses instead of addresses that meant nothing to them, especially in flows where they could not override the "invalid" determination.

To be mindful of this, I've noted places throughout this report where I think the prototype may have affected results and reactions.

### Showing a sign in link on the "Change your address" content page is confusing when a user is already signed in

Though testing navigation to the profile was not the main focus of this research, we did ask participants to show us where they would go to change their address. We started people on the homepage, and a couple of participants (P1, P2) navigated to the "Change your address" content page instead of going directly to the personlized menu. 

This gave us a chance to do a small evaluation of the content page. One thing we noticed was this page uses subway map directions to tell you how to change your address. This means we show "Step one: Sign in to VA.gov" even when people are already signed in. This caused some confusion for participants who thought they had to sign in again.

**Recommendation**: Replace the subway map with a dynamic widget.

### Participants did not know what "valid" meant

In the prototype, the screen we use to tell people that there may be something wrong with their address starts "Your address update isn't valid."

"Valid." No one knew what this meant. While all four participants understood there was something wrong with the address entered, none of them made the most important connection — that this meant USPS may not recognize this address, and therefore mail may not be delivered to to them. This puts them at risk for missing key VA correspondence.

Additionally, one participant (P3) rightfully pointed out this terminology was confusing because all the addresses we looked at were entered in a valid format even if there was something else wrong with them. But we didn't explain this to participants, and it confused them.

It's worth noting that participants were not that frustrated by the fuzziness of "valid." However, I think this would have caused a lot more confusion and frustration if they had been working with their real addresses instead of prototype data. If we are telling people the address they know to be their mailing address isn't "valid," what are they supposed to do with that?

**Recommendation**: Remove the word "valid" from the copy. Figure out more human langauge to explain that we may not be able to deliver mail to the address entered, and help users figure out whether override, edit, or choosing a suggested address is the right solution for them based on the options available. ([#3741](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3741))

### There was a lot of confusion around why people could select their original address if those addresses weren't “valid”

Furthermore, participant did not understand why we let them move forward with the original address they entered (override) if the website was telling them this address wasn't valid. A couple of participants didn't understand this at all (P1, P2) while a couple (P3, P4) did mention they think override is allowed because the site assumes the user knows best, but they still seemed confused as to why this was allowed.

However, people showed less confusion around the opposite scenario — when they were _not_ allowed to choose the address they originally entered. They assumed this was because the original address was so incorrect that the website would not let them move forward with it. Without getting into technical specifics, this is essentially correct.

Again, I think this is something that didn't cause a lot of frustration because we were using a prototype with fake addresses. If this were real life, I think people would have not been as confused with why they could choose their original address, and I think they would have been a lot more frustrated when we restricted override.

**Recommendation**: Be more clear about why people can or can't override our initial determination that there is a problem with the address they entered. ([#3741](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3741))

### Overall, people found the suggested addresses helpful even though they didn't know (or care) where they came from 

Most participants (P1, P2, P3) found the suggested addresses really helpful and seemed almost dependent on them to know how to proceed forward. I think this dependency was caused by participants misunderstandng that there was no "right" or "wrong" answer to move forward. In real life with real data, I would hypothesize that people would be much less dependent on suggested addresses to determine how they wanted to proceed. 

Additionally, participants trusted these suggestions even though they didn't know where they came from. Only one person (P3) correctly guessed that this data had anything to do with USPS (note: address validation doesn't happen through USPS, though it affects mail delivery). Others thought Google maps (P1, P2) or other local data (P4). However this didn't concern anyone. No one seemed to think this came from the VA or had any other concerns about how these suggestions were generated.

**Recommendation**: No changes. 

### People mentioned the 800 number would be helpful on screens where you can’t select the original address entered

We show the VA's 800 number on one of two scenarios in which people can not override the "invalid" determination and select the original address they entered. Two participants (P1, P3) mentioned they wanted to see the 800 number in both scenarios instead of just the one. 

This seems like an obvious update. However, the VA help line will not be able to update an address if the backend determines that address override isn't allowed. So, we'd be sending people to the help line knowing that there is no resolution. It feels like bad UX to knowingly send them to a dead end. Instead, we should provide them as much help as we can in context.

**Recommendation**: Either don't show the 800 number when address override isn't allowed, or show the 800 number but do a better job explaining why override isn't allowed and let people know the VA help line will not be able to change this determination. ([#3741](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3741))

### People wanted more specific directions on what is causing the "invalid" address determination

Almost all participants (P1, P3, P4) wanted more information on what the exact problems were with the addresses that were determined to be "invalid". They said this would help them better determine next steps — whether to edit their existing address or pick a suggested address.

From a technical perspective, we don't have the ability to tell them what might be wrong with their address. Remember, the "invalid" address determination doesn't have anything to do with missing or incorrect fields, like a missing zip code. The address "invalid" error has to do with whether we think the address they entered is real, and therefore whether mail can be delivered there or not. Besides showing suggested addresses, we don't get information from the backend that would give us enough detail to explain things like "you should have entered 'street' instead of 'road'."

However, I think this is another issue that wouldn't have come up if our participants had been working with their actual addresses during testing instead of looking at made up prototype data. If someone is looking at their actual street address, they won't need help from the UI to know what might be wrong. They'll be able to spot mistakes based on what they know about their address and where they live.

**Recommendation**: No changes.
