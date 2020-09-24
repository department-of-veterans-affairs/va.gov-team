# Password-protecting URLs for testing and demo purposes

Sept 21, 2020

We recently gave permission to the Caregiver Team to use a legacy Vets.gov/VA.gov feature to password-protect a URL in production. They used this feature as a one-time workaround to share new functionality with a small, controlled group of people. Since then, other teams have asked us to help activate and troubleshoot this feature for other projects. Although we allowed the Caregiver Team to use this feature in an outlier situation, **going forward, other VFS teams must not use password protection on production URLs** as a testing and and demo solution.

## Concerns with password-protecting URLs in production

* We don't have documentation or policy on how to use it.
* It's an unsupported feature.
* It's unreliable. (It recently broke while a VFS Team was in the middle of using it.)

## What to do instead
We know you sometimes need to privately share new features in production for testing and demo purposes, without risking the feature being publicly discoverable. Our sanctioned tooling doesn't let you do quite that. 

What we suggest is as an alternative is:
* Turn off indexing
* Keep the feature out of the VA.gov site navigation until you're ready to go live
* Create an unguessable path for the URL (optional)

Make sure you have your analytics set up before you start sharing the feature. That way, you'll know if visits to the feature are beyond your expected volume and can react accordingly. You could take the feature back out of production, change the URL path, or determine some other solution with your team.

Your team can do this on your without support from any Platform teams and you don't have to worry about instabilaty concerns. This also helps us stay focused on our prioritized work so we can create better experimentation and launch tooling soon. 

We know this isn't an exact substitute for password-protecting. Folks with the link could still share it beyond your small group. In most cases, however, the risk of that happening and causing problems is low. 

## Exceptions to the password-protected URL policy
There could be exceptions when absolute secrecy is of utmost importance. We can treat those on a case-bycase basis until better tooling is available. Contact your DEPO lead if you think your situation is an exception.

## New platform features coming soon
We have plans within a few months to provide VFS Teams with more experimentation and launch functionality. 

