# My VA Health Care Inbox Link (with dot indicator) Frontend Documentation


### Go to your inbox link

With unread messages:
<img width="955" alt="Screenshot 2023-08-23 at 2 13 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/692bd74b-c9c6-4e8e-9a27-1ab2401a3c2b">
[Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ZOP0Rqa)

[Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1Y42Dz)

Without unread messages:
<img width="948" alt="Screenshot 2023-08-23 at 2 30 03 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/07d7cc07-f26a-418e-81fe-8b5fe0d4d119">
[Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/25LlG1l)

[Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/WK72gqw)

Use font awesome icon `comments` for icon

**Show link**
- For users who have VA health care.

**Show red indicator dot**
- For users who have **any** unread messages in their [secure messaging portal](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging).
- Red dot visual specs:
  - Size: 10x10 px
  - Color: `secondary-dark` in VA pattern library
    - Hex value: #CD2026
  - Margins and positioning: 20 px to the right of the "Go to your inbox" link text for users who have unread messages. Should be positioned in the middle of the link vertically as shown in the screenshot.

**Accessibility specs** 

[Accessibility annotation](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/y9ylJ8y)

- There should be an aria label associated with the inbox link **when there are unread messages**. If there are no unread messages, there does not need to be an additional aria label.
  - When a user has unread messages and therefore the dot shows, the aria label should say "Unread messages." and then read the title of the link after that: "Go to your inbox."
  - [Slack thread for context on this decision](https://dsva.slack.com/archives/C909ZG2BB/p1692732654397699)  

**Positioning**
- The "Go to your inbox" link should always appear first in the stack of health care links. The stack of links appears on the lefthand side on desktop if the user does not upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)
