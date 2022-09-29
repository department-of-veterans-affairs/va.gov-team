# BAI UAT Findings

We conducted UAT internally using production accounts for 5 members of the Profile team. VA Profile added the Bad address indicator flag to these accounts ahead of testing. 

3 accounts were used to “updating” an address and 2 accounts were used to test “confirming” an address.

**No issues were discovered and all alerts functioned as expected:**

- All accounts displayed the Personal information as expected
- For all accounts, the link in the Personal information alert led to the Mailing address field on the Contact information page as expected
- All accounts displayed the Contact information as expected within the Mailing address field
- 3/3 participants were able to update their address successfully
- For those participants, alerts disappeared as expected once addresses were updated
- 2/2 participants were able to confirm their address successfully
- For those participants, alerts disappeared as expected when addresses were confirmed


[View detailed notes of the UAT sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/uat/UAT-Notes.md)
