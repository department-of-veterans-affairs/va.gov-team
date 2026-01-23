# Overview

This research looks at **where Veterans share feedback** **and** **what** **themes** are emerging. Based on what we find, we can evaluate how we may use this sentiment to inform our user satisfaction metrics.

[Link to Github ticket](https://github.com/department-of-veterans-affairs/identity-documentation/issues/769) (with notes from team discussion).

**Hypothesis:** there are viable public online forums where Veterans share insights about their pain points and workarounds, which can be used to gather insights to inform our user satisfaction metrics. This is based on previous research studies where we've heard caregivers and Veterans describe using online forums (like Facebook) to look for and share resources and information.

## What data’s included

- Analysis of Veteran comments and discussions related to signing in on [VA.gov](http://va.gov/) across public online forums
- Timeframe: Q2 - Q3 2025 (April 1 - October 1)
- Tooling available for monitoring and analyzing this data based on:
    - Online research
    - Tools we have past experience with

## How we gathered this data

- Team members searched for public forums where Veterans share advice for feedback
- Forums were evaluated based on how much information they contained related to signing in
- Feeds from different sources were also summarized with Claude to summarize top themes and trends in negative sentiment

## Overview of public discussion board types

There are Veteran-run boards for Veterans helping each other. Some are dedicated specifically to navigating the VA benefits process.

| **Discussion board** | **Potential boards to monitor** | **Scope** | **Notes** | **Insights about sign-in?** |
| --- | --- | --- | --- | --- |
| Reddit ⭐ | [r/VeteransBenefits](https://www.reddit.com/r/VeteransBenefits/) | 214k members |  | ✅ |
|  | [r/VeteransAffairs](https://www.reddit.com/r/VeteransAffairs/) | 23k weekly visitors | Not affiliated with VA. Doesn’t document membership size on Reddit | ✅ |
|  | [r/Veterans](https://www.reddit.com/r/Veterans/) | 136k members |  | ✅ |
| Facebook | [Veterans Affairs Facebook Page](https://www.facebook.com/VeteransAffairs)
Public groups, keywords. hashtags, @mentions | N/A | General Veterans Affairs page is very broad | ⚠️ more investigation needed |
| X | Keywords, hashtags, @mentions | N/A | [APIs available](https://docs.x.com/x-api/introduction) for analysis, but the free plan is limited. Claude wasn’t able to crawl the site due to Javascript blocking it. [jon.knotts@aquia.io](mailto:jon.knotts@aquia.io) is reviewing some of the premium monitoring features. | ⚠️ more investigation needed - but looks like we may not be able to monitor this one without paid tools or subscriptions |
| Trustpilot | Login.gov reviews | 96 reviews | User ratings for all types of platforms. ([ID.me](http://id.me/) only) | ⚠️ more investigation needed |
|  | [ID.me reviews](https://www.trustpilot.com/review/id.me) | 5k reviews |  |  |
| Sitejabber | [ID.me reviews](https://www.sitejabber.com/reviews/id.me#80031) | 31k reviews | User ratings for all types of platforms. ([ID.me](http://id.me/) only) | ✅ 
only for ID.me |
| Google Play Store | [VA Health and Benefits app reviews](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US) | 81k reviews | User ratings for Android applications | ✅ |
| Apple App store | [VA Health and Benefits app reviews](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596?see-all=reviews) | 255k ratings | User ratings for iPhone applications | ✅ |
| [Veterans Benefits Network](https://vetsbenefits.net/va-claims-forums-f170/) | [VA Health and Benefits issues](https://vetsbenefits.net/va-health-care-benefits-issues-f75/) - some discussions about sign in
[VA Disability Claims board](https://vetsbenefits.net/va-disability-claims-general-f63/) - minimal discussion on the digital experience and sign in | N/A | Community with over 39,000 topics and 327,000 posts on VA disability claims. Veteran-authored [Veteran Benefits Knowledge Base](https://www.veteransbenefitskb.com/). | ⚠️ more investigation needed |
| [HadIt.com](http://hadit.com/) | Specific forums | 25k members | Veteran-run site (Veterans helping Veterans) since 1997 with archives dating back to 2005 | ⚠️ more investigation needed |
| [Physical Evaluation Board Forum](https://www.pebforum.com/forums/department-of-veterans-affairs-resource-forums.149/) | [Dedicated section for VA](https://www.pebforum.com/forums/department-of-veterans-affairs-resource-forums.149/) | 94k members | Trends on sign in frustration from initial scan of the forum only indicates pain points with DS Logon (soon to be deprecated). Most feedback relates to general visibility into status of claims and forms, not specific to signing in. | ❌- not a large volume of sign-in related posts |
| [VA news articles](https://news.va.gov/) | See [early themes](https://docs.google.com/document/d/1rir2TwtbS-DNLDQ1ehAxKASlYzXHJEsFglxWWaxHees/edit?tab=t.0#heading=h.n9c15ilnhg84) for specific news articles about sign in | N/A | VA-run blog and email newsletter that has a public comments section | ✅ |

## Tools for monitoring and analyzing public forums

### API & Scraping Tools

- Reddit: PRAW (Python Reddit API Wrapper) or Pushshift API
- Twitter: Twitter API v2 (Academic Research access if available)
- General: BeautifulSoup, Scrapy for public web forums
- Social Listening: Brandwatch, Sprinklr (enterprise options)

### AI tools for summarizing text

- Claude
- ChatGPT
- Google Gemini

### Monitoring & Aggregation Platforms

- Feedly Pro+: Aggregate RSS feeds from Reddit, news outlets, blogs, and VA related discussion boards.
    - Create boards for topics like “[VA.gov](http://va.gov/) sign in”, “[ID.me](http://id.me/) issues”, and “[login.gov](http://login.gov/) feedback”.
    - Use AI feeds or Leo ( Feedly’s AI) to automatically flag posts mentioning login issues or negative sentiment.
    - Use Google Sheets or Notion for organization of the information.

## Search Keywords & Queries

**Note:** We could monitor the same queries we use for Medallia data

### Core terms

- "VA.gov" + ("login" OR "sign in" OR "sign-in" OR "authentication")
- "eBenefits" + "transition"
- "MyHealtheVet" OR "MHV" + "login"
- "ID.me" OR "Login.gov"

### Problem indicators

- "can't login" OR "won't let me" OR "locked out"
- "verification" + "stuck" OR "failed"
- "two-factor" OR "2FA" + "problem"

### Emotional indicators (for sentiment)

- "frustrated" OR "angry" OR "gave up"
- "finally worked" OR "success"
## Cross-platform summary and sentiment analysis

Two example summaries from Claude based on available information from **VA News article comment sections** and **other public forums,** which serve as proxies for social media sentiment.

### **Key Themes**

**1. Identity Verification Failures:**

- Veterans report that Login.gov and ID.me refuse to verify their identity despite being verified by other government agencies like the VA and Social Security Administration [VA](https://www.va.gov/resources/creating-an-account-for-vagov/)
- One veteran stated these platforms have "a 0 rating at trust pilot and thousands of complaints online" [VA](https://www.va.gov/resources/creating-an-account-for-vagov/)

**2. Technology Barriers:**

- Veterans without cellphones face significant obstacles, as ID.me doesn't accept alternative verification methods for certain agencies [VA Mobile](https://mobile.va.gov/login-information)[Stack Overflow](https://stackoverflow.com/questions/56660196/test-login-needed-app-review-in-google-play)
- Veterans without cameras on their devices cannot complete the identity verification process [Stack Overflow](https://stackoverflow.com/questions/56660196/test-login-needed-app-review-in-google-play)

**3. Complexity vs. Convenience:**

- Users complained the new system requires "having to answer my phone or check my email and key in a bunch of other numbers" instead of simple 2-3 click access [Google Play](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US&gl=US)
- One veteran described the new sign-in as a "fracking nightmare" [VA Mobile](https://mobile.va.gov/login-information)

**4. Privacy and Trust Concerns:**

- Some veterans expressed concern about ID.me collaborating with social media companies and data privacy [Stack Overflow](https://stackoverflow.com/questions/56660196/test-login-needed-app-review-in-google-play)
- Veterans questioned whether these are "just money laundering companies" and called for investigations [VA](https://www.va.gov/resources/creating-an-account-for-vagov/)

**5. Accessibility for Older Veterans:**

- Comments indicated "these complications have eliminated many older veterans from being able to use the online access" [VA](https://www.va.gov/resources/creating-an-account-for-vagov/)

### **Sentiment Analysis**

**Overwhelmingly Negative (Estimated 80-90% based on available comments):**

- Representative comments include "HORRIBLE HORRIBLE HORRIBLE. This is not easy or simple. PLEASE leave it the way it is" [Google Play](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US&gl=US)
- One veteran stated: "I'll be doing business with the VA by mail, phone, and fax in future — until the VA closes those doors, as well. At which point — if I'm still alive, that is — I will become the Invisible Veteran. Thank you for your disservice" [Google Play](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US&gl=US)

**Limited Positive Sentiment:**

- One user commented "I've been using login.gov for almost two years now" without complaint [Google Play](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US&gl=US)
- Some veterans appreciated the deadline extension from January 31 to March 4, 2025, calling it "the best news I've read" [Google Play](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US&gl=US)

### **Context**

The strong negative sentiment must be understood within the broader transition context:

- VA removed My HealtheVet sign-in on March 5, 2025 [VA Mobile](https://mobile.va.gov/content/va-app-verification-and-validation)
- DS Logon will be removed after September 30, 2025 [VA Mobile](https://mobile.va.gov/content/va-app-verification-and-validation)
- The change affects approximately 3 million veterans [VA News](https://news.va.gov/105729/no-slowing-down-get-vas-mobile-app-and-keep-moving/)
