
# Benefits Representative Facing Tools ADR for Using Sign-in Service

## Status: Accepted

## Context

One of the main user stories for our MVP is:

> As a VSOfficer: I require a secure login system to verify my accreditation and identity in order to protect Veterans’ Personal Identifiable Information (PII) and Protected Health Information (PHI).

There are two main options for login systems we can use when writing this: SAML authentication and Sign-in Service. The SAML authentication is currently used on VA.gov and has a lot of existing infrastructure. Sign-in Service is newer and, at the time of writing this, is only used for the VA mobile app and has some existing infrastructure. Since we are building an MVP at this time, we need to choose an authentication system that mostly works off-the-shelf and is secure.

It was discussed that one of the main UX and technical features we need for our app is for it to appear completely distinct from VA.gov and that when a VSO logs into our app, we do NOT want them to be automatically logged into VA.gov. SAML authentication may be able to do this; however, at the time of writing this, it is unclear if it can actually accomplish this in its current state. Sign-in Service also allows us to future-proof our app since it is the recommended authentication system by the Identity team moving forward.

On the topic of UX, the SAML authentication and the Sign-in Service operate very differently. The SAML Authentication uses a modal that pops up and has various log-in methods, such as Login.gov and ID.me. The Sign-in Service makes use of a Unified Sign-In Page that is currently hosted on VA.gov and requires a link to this page; then, once the user logs in, they are redirected to a URL set in the configuration.

## Decision

We have decided to move forward with the Sign-in Service for a few main reasons:

#### Either Authentication Option Requires About the Same Amount of Configuration and Work on Our End

Since we will have our app on a subdomain and will need to appear visually distinct from VA.gov, we would need to configure the SAML authentication to work on our subdomain if we were to use it. The Sign-in Service will work in conjunction with our subdomain with a similar amount of configuration; however, the configuration needed can be performed by our team instead of an external team.

#### Sign-in Service is More Future-Proof

Sign-in Service is the system that the Identity team is recommending all teams adopt going forward and it allows us greater flexibility going forward. As more platforms adopt it, we can possibly enable Single Sign-On with some of those apps.

#### The Functionality We Want May Be Impossible Using SAML Authentication

The SAML Authentication was built with Veterans in mind, therefore it is not meant to be used outside of VA.gov. We may be able to configure this, but it would not be a trivial amount of work, and the Identity team themselves stated that we most likely would NOT be able to get around this.

### Consequences

There is a fair amount of configuration we need to do to use the Sign-in Service, and much of this work will need to be either done by our team or closely monitored by our team. The configuration is largely covered by the existing documentation, but there will probably also be some discussion that needs to happen between us and the Identity team.

The UX of the Sign-in Service requires that the user be directed to the Unified Sign-In Page. Since this page is hosted by VA.gov, this may be a strange workflow and may make VSOs think they are logging into VA.gov, something they explicitly said in research they did not want to risk. We have been assured by the Identity team that if we set up the Sign-in Service authentication and VSOs don't like this aspect, the Identity team can help us host the page on our subdomain.
