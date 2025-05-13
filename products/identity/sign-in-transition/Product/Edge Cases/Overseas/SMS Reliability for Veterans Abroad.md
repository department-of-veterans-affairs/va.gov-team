# SMS Reliability for Veterans Abroad

**Edge Case**: [Veterans Living Abroad](https://jira.devops.va.gov/browse/SITEC-13) \
**Created**: 22 April 2025  
**Last Updated**: 13 May 2025  
**Contributors**: Jillian King, Matthew Declercq

## Situation

Per our initial investigation, [Identity Verification Issues for Veterans in the Philippines and Abroad](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-transition/Product/Edge%20Cases/Overseas/Identity%20Verification%20Issues%20for%20Veterans%20in%20the%20Philippines%20and%20Abroad.md), Veterans living abroad encounter challenges with SMS-based Multi-Factor Authentication (MFA) when accessing VA services, particularly in regions with unreliable telecom infrastructure. The Philippines, a major hub for overseas Veterans, faces significant SMS delivery issues due to rural infrastructure limitations and the absence of SMS-related legal agreements with ID.me. Other countries like the Dominican Republic and Panama also experience inconsistent SMS delivery, impacting Veterans' ability to verify their identity via ID.me. Veterans living overseas or in areas with poor cell services may be unable to receive SMS messages for multi-factor authentication or to get instructions from ID.me. Additionally, Veterans living overseas in countries with strong telecom infrastructure may occasionally encounter challenges due to carrier-level blocking of U.S. short codes. While there are other options for MFA, they may not be aware of them.

### Key Findings

* **Countries with Poor SMS Reliability:** The Philippines has notable SMS delivery challenges, especially in rural areas, exacerbated by legal restrictions. The Dominican Republic and Panama face inconsistent delivery outside urban centers. Germany, South Korea, Japan, and Italy occasionally experience carrier-level blocking of U.S. short codes. Additional countries with potential issues include India, China, Russia, Vietnam, Nigeria, Pakistan, Iran, Turkey, and Egypt.  
* **Veteran Populations**: Approximately 55,000 Veterans are enrolled in the VA’s overseas medical assistance program, with 6,000 active users. About 80% of VA claims originate from Panama, the Dominican Republic, Costa Rica, the Philippines, and Germany. Veterans also access care at bases in South Korea, Japan, Italy, Spain, and Germany.  
* **Impact of SMS Issues**: Despite a 96.2% international pass rate for ID.me identity verification, SMS failures, though relatively low, hinder timely access to VA services.

## 

## Alternative Options if ID.me SMS Reliability Fails

| Option | Description | ID.me Resources |
| :---- | :---- | :---- |
| Passkey Authentication | Authenticate using your face, fingerprint, PIN, pattern, or other method available on your device. This is a highly secure, phishing-resistant method | [Passkey](https://help.id.me/hc/en-us/articles/10295798300951)  |
| Push Notification | Approve sign-in requests pushed to your device via the ID.me Authenticator app | [Push Notification](https://help.id.me/hc/en-us/articles/360018712993) |
| Code Generator | Use your ID.me Authenticator app and enter the rotating six-digit code to complete MFA | [Code Generator](https://help.id.me/hc/en-us/articles/360018113073)  |

## Next Steps and Suggestions to Help Veterans

1. **Enhance Communication Channels:** Create a communication package outlining alternative MFA methods and country-specific solutions for SMS challenges.  
   * Update VA.gov support pages ([Support for common Login.gov and ID.me issues](https://www.va.gov/resources/support-for-common-logingov-and-idme-issues/#idme-issues) and [How can I verify my identity on VA.gov if I live outside the U.S.?](https://www.va.gov/resources/how-can-i-verify-my-identity-on-vagov-if-i-live-outside-the-us/)) to include details that promote passkey adoption for MFA with ID.me.  
2. **Collaborate with Local Telecom Providers**: Partner with ID.me and legal teams to improve SMS delivery in key countries or explore alternative channels like WhatsApp or email.  
3. **Monitor and Report SMS Issues:** If feasible, track SMS failure rates by country.

## Sources

* SSiT Inbox  
* Philippines VA Staff  
* [Disabled veterans living overseas say they pay thousands of dollars for health care to cover delayed VA claim payments](https://www.stripes.com/veterans/2024-07-30/veterans-overseas-health-care-benefits-payments-14667491.html%20Source%20-%20Stars%20and%20Stripes), July 30, 2024, Stars & Stripes  
* [Veterans Living Overseas](https://www.benefits.va.gov/persona/veteran-abroad.asp), VA.gov  
* [VA Information For Veterans Living Overseas](https://veteran.com/va-veterans-living-overseas/), November 8, 2022, Veterans.com  
* [Can I Use My VA Disability Living Overseas?](https://www.woodslawyers.com/va-benefits-disabled-veterans-living-overseas/), January 7, 2025, Woods & Woods  
* ID.me Collaboration \- To learn more about how poor SMS reliability impacts Overseas Veterans verifying their identity with ID.me, we collaborated with Jessica Guglielmini, a Customer Success Manager \- Federal at ID.me.
