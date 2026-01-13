# Health Apartment Release Technical Strategy

This document discusses the options and concerns related to how to release health apartment features.

The health apartment roll-out will be phased in a couple of ways:
* Individual tools (secure messaging, prescriptions, health records, appointments) will be released as they become ready, rather than waiting for the entire suite of health tools to be ready.
* Each individual tool may be released in phases as units of partial functionality are completed. These partial launch phases may be geared towards controlled user acceptance testing (UAT) or a broader opt-in beta/preview.

Users at large won't be automatically redirected to tools on VA.gov until those tools are deemed to be feature-complete, i.e. all desired activities that are possible on MHV today are available on VA.gov. (We avoid saying feature _parity_ with MHV in case some features are determined not to be needed). 

## Available Approaches - VA.gov Platform

### Separate Subdomain
**What it is:** A subdomain such as `health-beta.va.gov` where early access to features is enabled.

**When it's appropriate:** In the context of the health apartment, probably never.

**Limitations:** This option is described here because it has been raised as a possibility. But, instantiating a subdomain would have a very high compliance and infrastructure burden. Even approving a new public subdomain requires a multi-month approval process, plus implementation by both the VA.gov Platform infrastructure team and the VA Gateway Operations team. A new public SSL certificate has to be purchased and provisioned. Getting a subdomain to work with site authentication is liable to be complicated. And you still might need to employ some of the following techniques to further limit access. 

A subdomain does make it more clear that the functionality is experimental, but that can also be accomplished via a banner on specific early-access pages within www.va.gov. 

### Feature Flag - Specific Users


### Feature Flag - Percentage of Users

### Opt-in Beta

### Released but Unlinked

## Release Functionality on MHV



## Release Phases - Secure Messaging

What is the threshold for the minimum 

## Open Questions
1. How difficult is it to switch the URL path/slug of a VFS application? Is it a one-liner or does it require renaming a bunch of things? (Context for question is whether we need to decide the final URL path location for each tool sooner rather than later)
