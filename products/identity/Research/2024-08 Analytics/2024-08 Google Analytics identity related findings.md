# Google Analytics identity related findings

**Office of the CTO Digital Experience (OCTO-DE), Identity Experience Team**

Date: 08/12/2024

Clayton Zook - clayton.zook@oddball.io


**Jump to:**

- [Key Data Points](#key-data-points)
- [Discussion](#discussion)
- [Raw data](#raw-data)


## Background
Uncover insights and identify areas for further qualitative analysis to improve sign-in for Veterans.

## Methodology 
- Review analytics from [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHng40nLS92fZ8sGB5MhIQ)
   - Focused on data from 30 days in July (July 2 to 31, 2024)
- Also pulled data from DataDog, [Terms of Use Dashboard](https://vagov.ddog-gov.com/dashboard/kc5-ie8-dh2/identity-tou---performance?fromUser=true&refresh_mode=paused&view=spans&from_ts=1719892800000&to_ts=1722484740000&live=false)

## Key data points

- Around 31 million sessions were tracked in GA
  - about 20% of session start on VA.gov (home page)
  - about 20% start on MHV (home page)
- Of the sessions that started on VA.gov (home page)
  - about 48% moved next to sign in
    - Over 2% of folks who then sign in, move next to the Terms of Use page (ToU)
- Of the sessions that started on MHV (home page)
  - about 41% moved next to sign in
    - of these sessions that signed in next, about 16% used option 1, the universal sign in page (USiP)
    - This data doesn’t parse the other two options, but with fewer than 20% using the option available on va.gov, there will be a lot of veterans who’ll need to change how they currently sign in.
- So of the about 12.5 million sessions that begin on either VA.gov or MHV home page, about 45%, or about 5.5 million, move next to sign in
- Folks get to sign in by other means as well, but this near 40% of traffic make up the 2 largest groups of sessions.
- Note: DataDog (DD) shows 8.18 million authentications over the same time period
   - GA has captured over 2/3 of authentications just in these two pages as starting point with authentication occuring next (va.gov and MHV home pages)
   - GA has captured around 3/4 of authentications from sessions that started in these two pages (va.gov and MHV home pages) plus /sign-in with authentication occuring next


### Other pages with a substantial number of session starts
  - /sign-in saw just under 10% of all sessions begin on this page
    - These sessions could be initiated from bookmarks by veterans who usually sign in when visiting VA.gov
    -  About 21% of session that started here, moved to authenticate next
    - Over 4% of these session went next to the ToU page
  - The next highest session-start pages each made up less than 2% of total sessions
    - /health - fewer than 1% of session beginning here moved next to sign in
    - /claim-or-appeal-status - over 70% of sessions that begin here move next to sign in. 
      - A lot of sessions that start on this page move to immediately sign in
    - /find-locations - ~.5% of session that begin here move next to sign in
    - /disability/compensation-rates/veteran-rates - just over 4% of sessions that begin here move next to sign in
    - /my-va - sessions that start here mostly move to home page (likely on a redirect, presuming they came here unauthenticated)
      - About 1.5% do go ahead sign in 
      - Note - sign in modal comes up if starting from this page in an unathenticated state, so folks who are starting here, perhaps because of a bookmark, don’t necessarily want to do a task that requires signing in. Or perhaps don’t want to sign in right away.
  - Other than the claim or appeal status page, on other top starting pages veterans don’t seem to sign in immediately

### Terms of Use (data from GA and DD)
  - overall about 2.25% of sessions went to the ToU page in the first 2 to 3 pages of the session (from GA)
     - Most sessions are not landing on Terms of Use (ToU) after authentication. Since the new ToU went live in June 2024, those 98% of sessions would be folks who agreed to the ToU in June or previously in July and then returned in July.
  - 738 users declined ToU - about 0.13% (from DD)
  - 560,877 users accespted ToU (from DD)


## Discussion
- This data shows that the large majority of veterans signing in on MHV, are not using the VA.gov univeral sign in page (option 1). As MHV transitions to VA.gov and as MHV credential reaches deprecation, we'll want to watch for signs of folks having difficulty adapting to a sign in page they may not be used to or have even used before.
- Almost 10% of sessions begin on the sign in page, likely due to it being bookmarked, however the majority (about 80%) of sessions that begin there don't sign in right away.
- In fact a session that starts on the home page of either VA.gov or MHV is twice as likely to sign in right away.
- Just under 3 quarters (over 70%) of sessions that begin on the /claim-or-appeal-status page sign in right away, so this page is a major gateway for folks who are signing in. When any modifications are made to signing in via this page or to the sign in alert widget, it should be done with the understanding that it will impact a majority of veterans who visit this page first in their session.
   - This product page does have a sign in alert widget
   - This page requires a verified account on sign-in, but doesn’t disclose that in the sign-in alert widget
   - It seems that folks starting on the claim or appeal page want to see information that requires them to sign in
   - We’ll want to make sure that veterans can easily sign in from this page.
   - This should be a high priority page to update the verify sign in widget.
- Other sessions that start on deeper pages of VA.gov don't see as many sign-ins right away.
- As we predicted, only a small percentage of folks are choosing to decline the Terms of Use. It would be difficult to find them, but if we could, it could be insightful to talk with them about why they chose to decline.


## Raw data

- 30.845M sessions start on VA portals
   - 5.941M - VA.gov (home), after this page
      - 2.570M to /auth/login/callback
         - 2.454M to /my-va/
         - 108,966 to home page
    - 367,223 to /mhv-portal-web/web/guest/home
       - 139,324 to /health
       - 134,446 to /terms-of-use
       - 128,057 to /my-va
       - 44,232 to /sign-in
       - 19,733 to /session-expired
   - 5.930M - /mhv-portal-web/home, after his page
      - 2.406M to /mhv-portal-web/web/myhealthevet/user-login, after this page
         - 1.721 to /mhv-portal-web/web/home
         - 392,556 to /sign-in
         - 29,133 to /mhv-portal-web/user-login
         - 25,059 to /mhv-portal-web/web/guest/home
      - 56,990 to /secure-messaging-spotlight
      - 52,052 to /sign-in, after this page
         - 26,391 to /mhv-portal-web/home
         - 11,956 to /mhv-portal-web/web/guest/home
         - 1,732 to /auth/login/callback
      - 35,323 to /mhv-portal-web/web/user-registration
         - 10,895 to  /mhv-portal-web/web/user-login
   - 2.852M - /sign-in, after this page,
    - 666,908 to /mhv-portal-web/web/guest/home, after this page
         - 132,073 to /sign-in
         - 55,149 to /mhv-portal-web/web/myhealthevet/home
         - 54,159 to /auth/login/callback
         - 29,159 to /terms-of/use
         - Next 2 pages total 37,616 to /mhv-portal-web sub pages
      - 292,658 to /auth/login/callback, after this page
         - 17,632 to va.gov (home)
         - 2,236 to /my-va
         - 20 to /terms-of-use
         - 8 back to /sign-in
      - 105,134 to /terms-of-use, then to
         - 19,921 to /auth/login/callback, after this page
            - 17,632 to va.gov (home)
            - 2,236 to /my-va
            - 20 back to /terms-of-use
         - 6,701 to /sign-in, after this page
            - 1,072 to /terms-of-use
      - 51,737 to va.gov (home)
      - 35,050 to /mhv-portal-web/home
   - 582,791 - /health, after this page
      - 4,644 to /sign-in, after this
         - 1,794 to /auth/login/callback
         - 1,164 to /mhv-portal-web/web/guest/home
         - 426 to /terms-of/use
         - 124 to va.gov (home)
   - 419,670 - /mhv-portal-web/user-login, after this
      - 247,849 to /web/myhealthevet
      - 67,827 to /sign-in, after this
         - 27,193 to /mhv-portal-web/home
         - 23,733 to /mhv-portal-web/web/guest/home
         - 7,537 to /mhv-portal-web/user-login
         - 2,894 to /terms-of use, after this
            - 2,028 to /mhv-portal-web/home
            - 462 to /auth/login/callback
            - 133 to /mhv-portal-web/eauth
      - Next 65,547 to /mhv-portal-web/ sub pages
   - 395,246 - /claim-or-appeal-status, after this
      - 270,259 to /auth/login/callback
         - 236,442 to /track-claims
         - 30,471 to /claim-or-appeal-status
         - 2,483 to /my-va
      - 11,541 to /terms-of/use, after this
         - 10,169 to /auth/login/callback
   - 378,394 - /mhv-portal-web/web/myhealthevet/user-login, after this
      - 154,442 to /mhv-portal-web/home
      - 50,097 to /mhv-portal-web/web/myhealthevet/home
      - 32,263 to /sign-in
      - 10,852 to  /mhv-portal-web/user-login
   - 356,080 - /find-locations, after this
      - 19,583 to va.gov (home)
      - 12,657 to /find-locations
      - 1,668 to /auth/login/callback
   - 331,770 - /disability/compensation-rates/veteran-rates, after this
      - 7,285 to /auth/login/callback, after this
      - 6,650 /sign-in, after this
         - 1,527 to /auth/login/callback
         - 1,045 to  /mhv-portal-web/web/guest/home
         - 264 to /terms-of-use, after this
            - 102 to /auth/login/callback
            - 38 to /sign-in
  - 269,136 - /web/myhealthevet/home
      - 167,662 to  /mhv-portal-web/user-login
  - 253,948 - /my-va, after this
      - 235,594 to va.gov (home)
      - 2,421 to /auth/login/callback
      - 1,441 to /sign-in
      - 537 to /logout
  - 252,782 - health-care/appointment-check-in/, then
      - 223,318 to /health-care/appointment-check-in/verify
  - 226,338 - health-care/appointment-pre-check-in/
      - 205,868 to /health-care/appointment-pre-check-in/verify
  - 192,829 - /mhv-portal-web/web/guest/home
      - 5,690 /sign-in 
  - All other starting pages were <160k each
 
