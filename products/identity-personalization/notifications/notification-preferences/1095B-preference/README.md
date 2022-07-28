# 1095B preference: Requirements

## Overview

The health apartment team is working on an effort to allow veterans and other health care recipients to download their 1095B (proof of health care) tax form from VA.gov. Part of this effort requires that veterans be able to opt-out of the mailed copy of their 1095B in favor of the digital download. The 1095B team would like to work in partnership with VA.gov, VA Profile, and VANotify to make this happen.

## Functionality needs

The 1095B team has a long list of functionality that needs to support this effort. This is the functionality that is required from our team:

- Support a notification preference in the profile that allows veterans to opt into and out of a mailed copy of their 1095B. It should be clear that they can change this option at any time.
  - This would connect to VA Profile.
- Make sure anyone who updates this permission has an email on file, given that there are a number of legally required emails associated with this work.
- Any time someone updates their 1095B preference, send a confirmation email.

### Major caveats

While this sounds simple, the request from the 1095B team doesn't fit into how VA Profile's system actually works. Right now, VA Profile supports **permissions**, ie. whether or not to send a message, but not **preferences** ie. how a message is sent, like via mail or digitally. Despite this, VA Profile is trying to be as accommodating as possible given that turning off mailed copies of the 1095B would save the VA a lot of $$$ on mail. So, VA Profile is basically trying to fit this request into the current system.

There are some pros and cons to this:

**Pros**

- We should be able to leverage the current Group -- Item -- Channel structure we currently have with VA Profile. This should, in theory, allow us to complete development more quickly.
- We already send confirmation emails when people update their address and direct deposit information, so we should be able to do the same for this notification preference.

**Cons**

- VA Profile is retrofitting their system to make this work. They are treating a preference -- send me a copy via mail, or let me download digitally -- as a permission.
- The channel we'll get back from VA Profile, as I understand it, is **email**, because there are emails associated with this work outside of the confirmation email we need to send. But, instead of relying on our copy structure we have now -- "Send me an email" or "Don't send me an email" -- we're going to have to customize this copy to something like "Mail me a copy of my 1095B" or "Don't mail me a copy of my 1095B. I'll download it digitally (note: you will receive XYZ emails if you choose to download your 1095B digitally)". As far as I understand, this would be a departure from [how things are currently coded](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/frontend/display-notes.md).
- There may be other things we are required to explain from the UI for legal reasons, but I don't have insight into that yet. This could impact the design.
- I'm not sure if sending a confirmation email is as easy as I think it is - maybe?

## Other important info for timeline estimate

- 1095B "legal" folks will need to review design and copy to make sure it makes sense. This may result in back and forth, and timeline can only be as quick as these folks can get back to us.

## Questions

### For our team

1. How complicated will it be to add a new channel?
2. How complicated will it be to add a new channel **and** give it custom copy to accommodate what we need to describe to the user?
3. How complicated will it be to send an email confirmation for updating this specific permission given that permissions doesn't currently utilize an edit-read only pattern?
4. Do we think we'll want to put this through the collab cycle, or is that too hard to tell as of now?
5. How much design/development do we think will be associated with this work? How long do we think this will take us?

### For VA Profile

- How is data coming back to us?
- Is email the channel we'll get back from VA Profile?
- VA Profile has slated 4 weeks of development time. Are there other changes we should be aware of that may affect our implementation?

### For 1095B team

- What are we legally required to communicate in the preferences UI?
- How long do we think it will take legal to get back to us with feedback?
  - **Answer**: [Best estimate is currently a week or two](https://dsva.slack.com/archives/C02TUH5U3HS/p1658959194157649?thread_ts=1658931650.076399&cid=C02TUH5U3HS).
- Do we need to draft email copy for the confirmation email?
- Are people opted into mail by default?
- Do we need to make sure that people have a mailing address on file as well as an email address?

### Design/implementation question

- Does this item need a new group? Or does it fit in health care?
