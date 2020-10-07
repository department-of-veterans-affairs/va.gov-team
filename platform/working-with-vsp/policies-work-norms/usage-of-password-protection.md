# Please do not use feature password protection

Oct 2, 2020

## Background

VFS teams have lately been leveraging a legacy Vets.gov/VA.gov function that lets you password protect a URL in production so you can share the new feature with a small controlled group of people without risking it getting out there in the wild.

We originally pointed the Caregiver Team to this password protection route as a one-time workaround when they were struggling to create a rollout plan that would suit their stakeholder's needs. The reason this route isn't ideal however is this: though we have plans in a few months to provide VFS Teams with more experimentation and launch functionality, right now the DEPO Platform doesn't officially support that password protection functionality. We haven't shored it up, we don't have documentation or policy on how to use it, and it's generally kind of fragile and thus unreliable. As a result, the DEPO Platform has been getting troubleshooting questions and requests to help activate it, which VFS Teams have to wait on us for, and at least once it has even broken while a VFS Team was in the midst of using it.

## DEPO Platform Policy:

So! While the Caregiver Team did have our go ahead to use password protection in their outlier situation, **we're asking that VFS teams please stop using that feature, and forego password protecting your URLs from here on out.**

## Alternative options

We know you sometimes need to share new features in production for testing and demo purposes, without risking the feature being publicly discoverable. What we suggest is this: you can turn off indexing and keep the feature out of the VA.gov site navigation until you're ready to go live - that will already prevent it from being easily discovered and used.

If you want another layer to prevent discoverability, you could also create an unguessable path for the URL, for example `https://www.va.gov/education/eligibility/joXEyY0BAGpBI3d`, and that's something your team can do completely on your own without any help from the Platform teams.  [Here's a site where you can generate a random string for your URL](https://www.random.org/strings/?num=10&len=15&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new).

This way, you won't have to wait on the Platform, and you won't have to worry that the rickety password protection feature will break. It should thus be a quicker, and more stable route to pursue. It's better for the DEPO Platform this way too because we can focus our time and energy on creating better experimentation and launch tooling, instead of on supporting a sub-par tool.

We know this isn't an exact substitute for pw protection, because folks with the link could still technically share it more widely. But in most cases, the risk of that happening (first of all) and the risk of its occurrence creating problems (second of all) is pretty low. Your analytics should show you if visits to the feature are beyond your expected volume, so you can react accordingly.

Thanks for your understanding!

`-` The DEPO Platform
