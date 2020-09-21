# Usage of Feature Password Protection

Sept 21, 2020

VFS teams have lately been leveraging a legacy Vets.gov/VA.gov function that lets you password protect a URL in production so you can share the new feature with a small controlled group of people without risking it getting out there in the wild.

We originally pointed the Caregiver Team to this password protection route as a one-time workaround when they were struggling to create a rollout plan that would suit their stakeholder's needs. The reason this route isn't ideal however is this: though we have plans in a few months to provide VFS Teams with more experimentation and launch functionality, right now the DEPO Platform doesn't officially support that password protection functionality. We haven't shored it up, we don't have documentation or policy on how to use it, and it's generally kind of fragile and thus unreliable. As a result, the DEPO Platform has been getting troubleshooting questions and requests to help activate it, which VFS Teams have to wait on us for, and at least once it has even broken while a VFS Team was in the midst of using it.

## DEPO Platform Policy:
So! While the Caregiver Team did have our go ahead to use password protection in their outlier situation, **we're asking that VFS teams please stop using that feature, and forego password protecting your production URLs from here on out.**

### Alternative options
We know you sometimes need to privately share new features in production for testing and demo purposes, without risking the feature being publicly discoverable, and we know our sanctioned tooling doesn't let you do quiiiite that. What we suggest is this: you can turn off indexing and keep the feature out of the VA.gov site navigation until you're ready to go live, and that will already prevent it from being easily discovered and used. If you want another layer to prevent discoverability, you can also create an unguessable path for the URL - and that's something your team can do completely on their own w/o needing to loop in any of the Platform teams.

This way, you don't have to wait on the Operations team to help you, and you don't have to be nervous that it'll stop working or that there'll be a regression introduced. It should thus be a quicker, and more stable route to pursue. This is better for the DEPO Platform as well, because it helps us stay focused on our prioritized work so we can move on to creating better experimentation and launch tooling soon.

No, this isn't an exact substitute for pw protecting, because folks w/the link could still technically share it beyond your small group. But in most cases, the risk of that happening (first of all) and the risk of its occurrence creating problems (second of all) is pretty low. There could possibly be exceptions - times when absolute secrecy is of utmost importance - and we can treat those on a case by case basis. At least until better tooling is available.
Lastly, make sure you have your analytics set up before you start sharing the feature. That way, you'll know if visits to the feature are beyond your expected volume, and can react accordingly. You could take the feature back out of production, or could change the URL path, whatever seems necessary.
