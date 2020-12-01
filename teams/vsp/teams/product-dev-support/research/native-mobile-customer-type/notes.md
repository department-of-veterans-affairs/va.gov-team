# Native Mobile Customer Type Research

Today (Sept 2020) the core customer type that the DEPO Platform is optimized to serve is: VFS teams building on VA.gov. This means we prioritize efforts to improve out support processes, documentation, and tooling to work well for folks launching features on VA.gov, but for VFS teams building things outside of the VA.gov experience, there may be friction and gaps in their experience that we are not prioritizing iteration for right now. We are not positioned yet to intentionally support these new customer types today.

As a part of our future strategy, we want the DEPO Platform to support any VFS team - those building on other web properties like MHV, those building native mobile apps, those publishing campaigns, etc. So! Given that we have a VFS team kicking off right now to build a VA Mobile App, it's an opportunity to start identifying areas in our process and tooling where we don't meet their needs, to inform future prioritization efforts.

So, we have two commitments in our interaction with the VA Mobile team:

1) Consult on the quality of a small subset of critical things: design patterns, security, and privacy
2) Identify areas where our tooling, documentation, and process do, and do not suit the needs of a native mobile customer type

---

## Observations

- Design System react components don't work for react native
- GTM is n/a
- Accessibility testing will take roughly twice as long.
  - Two code bases, with their own human-interface guidelines (HIG), and familiar UI elements
  - Specialists will need to become familiar with VoiceOver, Talkback screen readers and gesture navigation
- Unknown quality of accessibility helpers in React Native
  - This is heavily weighted to the development team, but there's a potential cost. I've never used React Native, so I'm not familiar with its accessibility API. AirBnB moved away from React Native in 2018, and one of the reasons was an incomplete accessibility API. This may not be the case any more, don't have newer data.
  - With or without React Native, team could end up writing native Java / Swift to patch accessibility. This is speculative, but possible.
- To do a webview of VA.gov pages in the mobile app, seems like custom work is needed to hide the header and footer. [See this Slack thread for details](https://dsva.slack.com/archives/C5HP4GN3F/p1601322739034000).
