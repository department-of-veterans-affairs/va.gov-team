# BAI UAT Findings

## Research Goals	
The primary goal of our UAT is to confirm that the BAI functionality works as expected and users can update or confirm their mailing address to remove the bad address flag.  
- We would like to validate that all alerts appear on the Personal information and Contact information pages as intended.
- We would like to validate that included links function as intended.
- We would like to validate that the bad address flag is removed from the user's account as expected when an address is updated AND confirmed.
- We would like to validate that the alerts disappear as expected when an address is updated or confirmed.

[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/uat/research-plan.md)

[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/uat/conversation-guide.md)


## Who we talked to

- We conducted UAT internally using production accounts for 5 members of the Profile team. 
- VA Profile added the Bad address indicator flag to these accounts ahead of testing. 
- 3 accounts were used to test “updating” an address
- 2 accounts were used to test “confirming” an address.

## Findings

**No issues were discovered and all alerts functioned as expected:**

- All accounts displayed the Personal information as expected.
- For all accounts, the link in the Personal information alert led to the Mailing address field on the Contact information page as expected.
- All accounts displayed the Contact information as expected within the Mailing address field.
- 3/3 participants were able to update their address successfully.
- For those participants, alerts disappeared as expected once addresses were updated.
- 2/2 participants were able to confirm their address successfully.
- For those participants, alerts disappeared as expected when addresses were confirmed.

## Secondary Findings

After an address was updated or confirmed, our mobile tester was not brought back to the field they had just been editing. This is something that happens throughout Profile but is only noticeable when a user is editing something with a larger edit state (i.e. Mailing address or Home address). We discussed looking into this to more accurately place focus after an update/confirmation has been made.


[View detailed notes of the UAT sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/uat/UAT-Notes.md)
