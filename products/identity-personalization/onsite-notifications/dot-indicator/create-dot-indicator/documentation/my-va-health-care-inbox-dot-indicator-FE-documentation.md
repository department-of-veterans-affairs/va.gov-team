# My VA Health Care Inbox Link (with dot indicator) Frontend Documentation

**Last updated:** May 6, 2024 - added VA-icon name

This document outlines specs for the link to access the health care secure messaging inbox within the Health Care section on My VA. For full documentation on the Health Care section of My VA, see [My VA: Health Care Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases). 

## Go to your inbox link

With unread messages:

<img width="717" alt="Screenshot 2024-05-06 at 5 24 04 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/ec3901a7-b65a-4f1b-b223-ffefea43d1cd">

[Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ZOP0Rqa)

[Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1Y42Dz)

Without unread messages:

<img width="722" alt="Screenshot 2024-05-06 at 5 24 09 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/4749a669-d75d-442b-8ac1-aecdb80cdfa7">

[Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/25LlG1l)

[Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/WK72gqw)

Use VA-icon `forum` for icon

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

- There should be an aria label associated with the inbox link **when there are unread messages**. If there are no unread messages, there does not need to be any aria label.
  - When a user has unread messages and therefore the dot shows, the aria label should say "Unread messages. Go to your inbox."
    - Note: An aria label replaces the link text so the link text must be included in the aria label that's applied when there are unread messages. [This feedback from CAIA during staging review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68258#issuecomment-1779982201) outlines this guidance and provides the recommended code.
  - [Slack thread for context on this decision](https://dsva.slack.com/archives/C909ZG2BB/p1692732654397699)  

**Positioning**
- The "Go to your inbox" link should always appear first in the stack of health care links. The stack of links appears on the lefthand side on desktop if the user does not upcoming appointments. Otherwise, it appears on the righthand side on desktop.

#### Content

[Go to your inbox](https://eauth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging)
