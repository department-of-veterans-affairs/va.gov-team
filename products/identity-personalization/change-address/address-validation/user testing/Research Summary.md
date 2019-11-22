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

**WIP and not ready to be shared**

### (Takeaway 1)

Change address content page is confusing
 
— P1, P2

General confusion around what “invalid meant”

— People understood there was something wrong with their address, but they assumed the government/google maps/some service knew they had a different address/had entered an address as a mistake/the address was incomplete. No one really seemed to get that this meant that we likely wouldn’t be able to deliver mail to them.
  — P1, P2, P3, P4

— P3 also pointed out “invalid” was confusing because the addresses are in a valid format, and we should be more direct/straightforward about wha the problem is.

— People were not that frustrated with this, but I think it’s because we were using a prototype. If they had gotten the response “your address is invalid” with their own address, I think they would have been a lot more frustrated/confused and wanted to know more about what that means.

People didn’t know where the suggested addresses came from, but this didn’t concern them

— Google maps
  — P1, P2

— Census
  — P1

— USPS
  — P3

— Local city data
  — P4

There was a lot of confusion around why you could select your original address if we were telling you it was “invalid”

— P1 didn’t understand why you could select the invalid address to the point she didn’t even notice it was a possibility (open radio button).

— P2 also didn’t understand why you could select an invalid address.

— P2 understood you could select the original address, but assumed that since there were suggestions, the original address must be wrong. But ultimately, he said he would choose his original address if he knew it to be correct.

— P3 said she didn’t think you should be able to choose the original address if it wasn’t correct, but then later said she understood that only the person entering the address would know what was correct and maybe that’s why they were allowed to select the original address.

— P3 DID actually seem to understand this later on in testing, saying you could select the original address if it was “close enough”

— P4 said this was concerning but did get that maybe there was enough confidence that the original address could be correct.

However, people understood why you couldn’t select it when that happened — they rationalized this by saying the address must be so wrong that you’re not allowed to select it (this, essentially, is correct)

I think that this went OK in testing because it was a prototype and they weren’t looking at their real addresses. But again, I think we’d see a lot more frustration in real life if someone wasn’t able to save their real address.

Overall, people liked the suggestions and found them helpful

— P1, P2, P3

Again, I think this would be less of an issue in real life when people are dealing with their real address. Participants got too hung up in testing on picking the “right” answer for testing instead of thinking of the process at a higher level.

People rationalized why there were no suggested addresses by thinking they typed in an address so incorrectly that there were no suggestions

— P1, P2

This may not be an issue because it real life, people wouldn’t be seeing all the different responses one after the other like they do in user testing

— P2 missed when there was no suggestions, though, because he pointed out there was clearly a problem but he didn’t know how to fix it (idk there is anything we can do here)

— P3 understood this just means there are no suggestions and did not seem to think this had to do with user error.

— P4 understood this meant there were no suggestions, but because he thought there were no other addresses associated with the one entered. I’m not sure what this means.

Wants the 800 number on the option where you can’t select your original address

— P1, P3

I’m torn – the call center will not be able to override this determination, so I don’t know that we should really be sending people there.

People wanted more specific directions on what mistakes they made with the address, but we currently can’t provide that

— P1, P3, P4

Again, I think this will be much less of an issue when people are working with their actual address and won’t need directions on what is wrong.

## Next Steps

### (Step 1)
