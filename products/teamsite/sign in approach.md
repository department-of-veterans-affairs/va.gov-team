# Sign In Approach for Nov 7 Launch

For the immediate term (i.e. for Nov 7 Launch), we will remove Sign In / Sign Up from the injected header/footer for sub-domain pages only and instead display some CTA to return to the home VA.gov site to sign in. This CTA will be static, so will not change based on whether the user is already logged in or not.

We will pursue a more holistic and scalable solution post-launch, that ideally will involve API work described below.

-----

# Background

## Problem / User Story

We want users to be able to Sign In from Teamsite-based VA.gov pages because that feature is part of the global header/footer being injected across those pages for a consistent user experience. Perhaps more importantly, we want it there bc the ability to Sign In on VA.gov is novel and a huge/important part of the new VA.gov relaunch, so it would be a shame to not include it on these pages.

However, the granularity doesn't exist in the API right now to be able to only serve select data to the VA sub-domain pages consuming it (i.e. cem.va.gov and benefits.va.gov for now) AND we don't control the Content Security Policy (CSP) for those VA sub-domain pages. So, if they were to get hacked, the hacker would have access to any logged in user's full PII, have the ability to take action on their behalf, and we'd have no way to react expediently.

This is not a problem for www.va.gov pages (i.e. non sub-domain pages) because we do control the Content Security Policy there, so if a hacker gains control, the CSP will prevent the person from doing anything w/the data, and we also have the ability to react expediently.

## Recommendation

We need to adjust the API to enable us to provide only the data necessary for the consumer at hand - so for cem. and benefits. that could be as little as a boolean logged in/not logged in, or if we want to display the user's name or email if logged in (as we do throughout the rest of VA.gov) then their first name, last name, and email address. This would minimize the amount of data that could be hacked, and the amount of actions a hacker could take on the user's behalf.

May make sense to migrate APIs to services and utilize the system in place there. Provide consumer keys for cem. and benefits. and allow those to be requests that go through Kong. Alternatively, do it within Rails.

## What do we do in the immediate term?

### Option A:

Go back to www.va.gov domain for sign in, and then teamsite page makes a binary request: are you logged in or not?

Problem: once the user is back on the subdomain that site still has to make a request back to the API to determine whether the user is logged in. Need granularity, but don't have a system for doing that right now.

### Option B:

Set up a proxy for cem. and benefits.

Problem: solves it for those 2 instances ^ but isn't a system/holistic/scalable solution.

### Option C:

Some solution that enables us to know if someone is logged in or not, w/o making an API call. So we could display something different for Sign In if they're signed in at least (w/o having to display name etc).

Problem: different experience across page.... and at first pass can't think of an indicator we could use to make this determination w/o an API call.

### Option D:

Some UX solution getting at the concept of: "go back to VA.gov if you want to log in and do stuff"

LOE: desgining the experience, FE work, and removing Sign In / Sign Up from teamsite

Problem: different experience across page....
