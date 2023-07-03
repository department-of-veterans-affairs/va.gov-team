# Findings from VA mobile device login analytics
Office of the CTO - Digital Experience (OCTO-DE), Identity team

Date: 03/06/2023  

Clayton Zook - clayton.zook@oddball.io

Analytics support: 
Joe Niquette - joe.niquette@oddball.io,
Alex Garcia - alexander.garcia@oddball.io


**Jump to:**
[Key findings](#key-findings)


## Background
VA is in the process of requiring all user accounts to have a high identity verification level. The VA seeks to use the standard established by The National Institute of Standards and Technologies (NIST). These standards are verified by credential service providers (CSP). VA offers two CSPs for account login that have an option for high identity verification. One, ID.me currently uses an older NIST standard called Level of Assurance (LOA). LOA level 3 is considered a verified account beyond a reasonable doubt. The other CSP, login.gov, uses a newer NIST standard called Identity Assurance Level (IAL). IAL level 2 means there is evidence that proves a real person’s identity is correctly represented by an online account. While LOA3 and IAL2 are similar, they use different rules for classifying accounts.

> NOTE: This report discusses both ID.me and login.gov verified accounts and will use the terms “verified account” to refer to both LOA3 and IAL2 accounts.

Login.gov [account ID verification](https://www.login.gov/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/) includes an option for taking an image of your ID with a mobile device. To complete this step, the mobile device must have a camera sensor that takes at least 8MP pictures.


## Analysis Goals
- Understand the capabilities of the mobile devices veterans use to access va.gov.
- Determine what account verification level users are logging in with and which devices they are using. 
- Discover if device capabilities correlate with account verification


## Methodology and data description

### DataDog
Our team captured analytics from Datadog during a one month period from January 30th to February 28th, 2023. The data is from traffic moving through a flow designated in VA’s Datadog as “idme_signup_verified*” or “logingov_signup_verified” which tracks users through a specific login flow. This flow is completed by users who are either not logged in or not logged in with a verified account who then log in with a verified account. This includes users who create a new verified account or who verify an existing account during the process.

Datadog records this with user agents, which we parsed with a user agent lookup app from whatismyip.net. The parsed user agent contains the user's OS and browser. For Android phones, it also has the device model, but Apple phones are lumped together. We took the top 100 user agents, and then only considered the 40 from mobile devices. Unfortunately Apple phones are lumped together, so we cannot say how many types of devices are represented. However since each OS only supports phones that are so old, we at least have a range of possible device models. This data also includes Apple iPad devices, again all models are lumped together. Finally, we found eight models of Android devices. In all cases these devices meet the login.gov camera requirements, see table below.

Overall this data represents 102,130 flow completions on mobile devices. Apple devices represent 88,283 flow completions. Android devices represent 13,847 flow completions.

**Login flow analytics from Datadog**

| OS | Device | Camera req | User Flows |
| --- | ----- | ---------- | ---------- | 
| Mac iOS 15 | iphone 6S and up | met | 8,925 |
| Mac iOS 16 | iphone 8 and up | met | 78,896 |
| Mac iOS 16 | iPad mini 5/6, ‌iPad‌ (5th gen up), iPad Air (3rd gen up) | met | 462 |
| Android OS | Motorola Moto G Stylus | met | 467 |
| Android OS | Samsung SM-A136U Galaxy A13 5G | met | 1,088 |
| Android OS | Samsung SM-G991U Galaxy S21 5G | met | 1,730 |
| Android OS | Samsung SM-G996U Galaxy S21+ 5G | met | 608 |
| Android OS | Samsung SM-G998U Galaxy S21 Ultra 5G | met | 2,252 |
| Android OS | Samsung SM-S901U Galaxy S22 | met | 2,176 |
| Android OS | Samsung SM-S906U Galaxy S22+ | met | 1,118 |
| Android OS | Samsung SM-S908U1 Galaxy S22 Ultra | met | 3,870 |

### Google Analytics
Our team captured analytics from Google Analytics during the one month period from January 25th to February 24th, 2023. This data is for logins from unique mobile devices, and allows us to compare by account verification status. This dataset includes 1,827 models of devices, and 721,907 unique devices. We looked up many of the individual device’s camera specifications, using gsmarena.com or the manufacturer's website. We did this for the top 100 devices, and for devices that had at least 100 logins but less than 80% of logins used a verified account. Finally camera data was pulled for a random sampling of other devices. We logged camera specifications for 255 devices.

We found that 92% of all mobile device logins used a verified account. Most Apple phones are lumped together here, like with Datadog. Almost 95% of Apple devices logged in using a verified account.

Looking specifically at tablets, we found that 30,994 devices logged in over the stated time period. Tablets accounted for 21 of the 25 devices that have cameras under the 8 MP requirement. Tablets represent 3,740 of the 4,117 logins made by devices that don’t meet the 8 MP requirement. Even though these devices aren’t able to verify an account, almost 89% of these devices were used to log in with a verified account. Still this is a statistically significant reduction from the average, meaning that tablet users are slightly less likely to log in with a verified account.


## Key Findings

### Summery
1. The top logged in mobile devices have cameras that meet login.gov’s requirements. This is true for both the Datadog and Google Analytics datasets.
2. Google Analytics data shows that VA.gov’s mobile users are most likely to be Apple devices. A slight majority of unverified account logins are also made from Apple devices.
3. The Google Analytics dataset shows the majority of mobile devices that don’t meet login.gov’s camera requirements are logging in with a verified account.
4. Devices with cameras that don’t meet, or just meet, login.gov’s requirement are statistically less likely to log in with a verified account.


### Details

**1. The top logged in mobile devices have cameras that meet login.gov’s requirements. This is true for both the Datadog and Google Analytics datasets.**

With the Datadog dataset, we looked at the top 40 OS and browser pairs together comprising almost 500,000 verified account login sequences. This includes 8 Android phones and some mix of the most recent 28 versions of iPhones. All of these have capable cameras that exceed the minimum 8MP requirement.

From the Google Analytics data, we considered all mobile devices and found that, of the over 700,000 unique device logins over the 1-month period, over 99% were with devices that have cameras meeting or exceeding the minimum standard.

Based on this, it seems that the 8MP requirement from login.gov is not overly unreasonable, but it could still affect some VA.gov users.


**2. Google Analytics data shows that VA.gov’s mobile users are most likely to be Apple devices. A slight majority of unverified account logins are also made from Apple devices.**

Apple devices all meet login.gov’s camera requirements, and a majority of logged in users are using one of these devices. That’s a majority of verified logins and also a slight majority of unverified logins.

On average Apple devices are logging in with a verified account at slightly higher rate as non-apple devices - 93% compared with 91%. While the difference is small, this is a statistically significant result at a 99% confidence with such a large pool. Still we’re unable to say with this data why Apple device users would more often log in with a verified account. Some ideas to consider is that it could be because Apple devices are easier to use to verify an account or that Apple devices attract a certain type of user who is more likely to verify their account. Again no cause is implied from the data, just correlation.

**3. The Google Analytics dataset shows the majority of mobile devices that don’t meet login.gov’s camera requirements are logging in with a verified account.**

The vast majority of devices logging into va.gov do meet login.gov’s standards. However, we found 25 mobile devices that don’t. Of those, 21 are tablets and 4 are phones. These 25 devices make up 4,117 logins or just over 0.5% of all device logins.

Almost 85% of these logged in devices, which can’t be used to verify an account on login.gov, are actually logging in with a verified account. This likely means that folks are verifying their ID in a way other than taking a picture with that device for login.gov. For example, the tablet users may also have a phone with a better camera. They might seek a family member with a better phone to help them. Or they might use an alternate method to upload to their computer.

**4. Devices with cameras that don’t meet, or just meet, login.gov’s requirement are statistically less likely to log in with a verified account.**

4,117 devices don’t meet the 8MP camera requirement. 3,477 of those, or almost 85%, logged in with a verified account. While this is still a majority, it is a statistically significant amount lower than the total mobile loggins using a verified account at 92%. We can say with 99% confidence, having a device that doesn’t meet the camera requirements correlates to a reduction in logging in with a verified account. Note, this doesn’t mean one causes the other.

Interestingly, this also holds true with devices that just meet the minimum 8MP requirement. We found a total of 3,760 device logins were made with devices that have a 8MP camera. Of those, 3,239 logged in with a verified account. That’s 86% and is also a statistically significant reduction from the average with a 99% confidence. This still doesn't imply a cause, but it’s interesting that devices that just meet the minimum requirements are also less likely to log in with a verified account.


## Further research possibilities
- It could be beneficial to understand the difference between types of device users
   - Apple device vs other device brand users
   - Tablet device vs phone device users
- What process do users of devices with less than a 8MP go through to be able to verify their account?
   - Is there a significantly different burden for that process?

## Appendix
- [Users by verification level and mobile device | GA](https://docs.google.com/spreadsheets/d/1s9q1TB1_igNiZuHLsx8jqFb70jNSe_EfKwPXa0UqKMs/edit?usp=sharing)
- [DataDog verified user flow - Device Analytics](https://docs.google.com/spreadsheets/d/1vCZd0kWf7_-HcjVWxtlmxDziqX0FCCghpZZJ_KVZP7I/edit?usp=sharing)
