# VA login.gov Post Comment Findings 

**Office of the CTO Digital Experience (OCTO-DE), Identity**

Date: 02/21/2023

Clayton Zook - clayton.zook@oddball.io


**Jump to:**

[Key Analysis Points](#key-analysis-points)

[Take-aways](#raw-data)


## Background
Uncover insights and identify areas for further qualitative analysis to improve sign-in for Veterans.

## Methodology 
- Review analytics from [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHng40nLS92fZ8sGB5MhIQ)
   - Focused on data from 30 days in July (July 2 to 31, 2024)

## Key Analysis Points

- Around 31 million sessions were tracked in GA
  - about 20% of session start on VA.gov (home page)
  - about 20% start on MHV (home page)
- Of the sessions that started on VA.gov (home page)
  - about 48% moved next to sign in
    - Over 2% of folks who then sign in, move next to the Terms of Use page (ToU)
       - This is likely the number of folks who are signing in for the first time since the new Terms of Use went live (in June 2024)
- Of the sessions that started on MHV (home page)
  - about 18% moved next to sign in
    - of these about 16% used option 1, the universal sign in page (USiP)
    - This data doesn’t parse the other two options, but with fewer than 20% using the option available on va.gov, there will be a lot of veterans who’ll need to change how they currently sign in.
- So of the about 12.5 million sessions that begin on either VA.gov or MHV home page, about 45%, or about 5.5 million, move next to sign in
- Folks get to sign in by other means as well, but this near 40% of traffic make up the 2 largest blocks of sessions.

- Other pages with a substantial number of session starts
  - /sign-in saw just under 10% of all sessions began on this page
    - These sessions could be initiated from bookmarks by veterans who usually sign in when visiting VA.gov
    - Over 4% of these session went next to the ToU page
  - The next highest session-start pages each made up less than 2% of total sessions
    - /health - fewer than 1% of session beginning here moved next to sign in
    - /claim-or-appeal-status - over 70% of sessions that begin here move next to sign in. 
      - It seems like folks starting on the claim or appeal page want to see information that requires them to sign in
      - This product page does have a sign in alert widget
      - This page requires a verified account, but doesn’t disclose that in the sign in alert
      - We’ll want to make sure that veterans can easily sign in from this page.
      - This should be a high priority page to add the new verify info to
    - /find-locations - ~.5% of session that begin here move next to sign in
    - /disability/compensation-rates/veteran-rates - just over 4% of sessions that begin here move next to sign in
    - /my-va - sessions that start here mostly move to home page (likely on a redirect, presuming they came here unauthenticated)
      - About 1.5% do go ahead sign in 
      - Note - sign in modal comes up if starting from this page in an unathenticated state, so folks who are starting here, perhaps because of a bookmark, don’t necessarily want to do a task that requires signing in. Or perhaps don’t want to sign in right away.
  - Other than the claim or appeal status page, on other top starting pages veterans don’t seem to sign in immediately

- Terms of Use
  - overall about 2.25% of sessions went to the ToU page in the first 2 to 3 pages of the session




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
 
