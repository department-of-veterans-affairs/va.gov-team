# 2023-11-01 Feedback 

## Keyboard navigation

Microsoft suggested solution: 

The chatbot navigation, Microsoft is following - which is the ARIA Authoring Practices guide (APG) from W3C and treating the chatbot as a grid widget. From [Microsoft accessibility documentation](https://github.com/microsoft/BotFramework-WebChat/blob/main/docs/ACCESSIBILITY.md#ux-navigating-activities-in-the-chat-history) implementation.

CAIA has a few pieces of feedback: 

The layout grid pattern is [not currently considered ready for production](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/layout-grids/) use, according to W3C.

From the W3C page: 

> There may be support gaps in some browser and assistive technology combinations, especially for mobile/touch devices. Testing code based on this example with assistive technologies is essential before considering use in production systems.

If you do decide to move forward following the layout grid pattern we are curious to know more about why this necessitates unique keyboard controls, different than the defaults in the browser. We aren't saying that you shouldn't do this, but we would like to understand why this choice has been made since it pretty significantly deviates from user expectations. This relates to [the keyboard trap that we flagged](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66754)), wherein the user is technically able to navigate away from it, but *only* if they understand that the chatbot uses keyboard controls that aren't the browser default. 

Martha Wilkes, VA PO adds: 

We're worried about gaps on mobile. CAIA isn't currently able to test on mobile, but Martha feels that the prescription skill of the chatbot has a high enough impact that we need to understand how it works on mobile before launch.

Per the Blinded Veterans Association, many Veterans are given iPhones and/or iPads to use as their primary devices.

## Skipping messages

We will divide this feedback into multiple parts: 

- Messages not being read back by VoiceOver
- Delayed message update

### Messages not being read back by VoiceOver

Cursory testing shows that this issue is potentially limited to VoiceOver. That being said, we feel it should still be addressed since VoiceOver users make up a substantial population of assistive tech users who will interact with this feature and product.

We also haven't been able to test this on mobile, but it is worth asking what Android TalkBack does here, too.

### Delayed message update

An adjustment was made to delay incoming messages to ensure that the full contents of each message were available and read back to assistive tech users. 

This update has introduced a few items we'd like to flag: 

- it assumes a set reading speed, screenreader users are able to set the reading speed of their screenreader, so, some have it read slowly while some have it read very very quickly
- it doesn't provide feedback that something is happening behind the scenes, or that another message may appear

This is similar to [another issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67315), where no clear expectation was being set for the user. This is different, but we think related because the long delay with no clear indication of what is happening leaves people wondering what to do and what is happening.


## Next steps

CAIA is happy to continue to support ya'll as you see fit. We recommend that 1 or more CAIA accessibility specialists embed with your team for a short time to provide more direct assistance with tasks like testing and design feedback.
