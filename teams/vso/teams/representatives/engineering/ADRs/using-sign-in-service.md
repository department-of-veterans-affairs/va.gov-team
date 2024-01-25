** Benefits Representative Facing Tools ADR for using Sign-in Service

*** Status: accepted

*** Context

One of the main user stories for our MVP is

> As a VSOfficer: I require a secure login system to verify my accreditation and identity in order to protect Veterans’ Personal Identifiable Information (PII) and Protected Health Information (PHI).

There are two different main options for login systems we can use at the time of writing this, SAML authentication and Sign-in Service. The SAML authentication is
what is currently used on VA.gov and has a lot of existing infrastructure. Sign-in service is newer and at the time of writing this is only used for the VA mobile app
and also has some existing infrastructure. Since we are building an MVP at this time we need to choose an authentication system that mostly works off-the-shelf as well
as beign secure.

It was discussed that one of the main UX and technical features we need for our app is for it to appear completely distinct from VA.gov and that when a VSO logs into
our app we do NOT want them to be automatically logged into VA.gov. SAML authentication may be able to do this however at the time of writing this it is unclear if
it CAN actually accomplish this in its current state. Sign-in service also allows us to future-proof our app since it is the reccomendend authentication system
by the Identity team moving forward.

On the topic of UX the SAML authentication and the sign-in service operate very differently. The SAML Authentication uses a modal that pops up and has various log-in
methods such as Login.gov and ID.me. The Sign-in service makes use of a Unified Sign In Page that is currently hosted on VA.gov and requres a link to this page, then once
the user logs in they are redirected to a URL set in the coinfiguration.

*** Decision

We have descided to move forward with the sign-in service for a few main reasons - 

**** Either authentication option requres about the same amount of configuration and work on our end

Since we will have our app on a subdomain and will need to appear visually distict from VA.gov we would need to configure the SAML authentication to work on our
subdomain if we were to use it. The sign-in service will work in conjunction with our subdomain with a similar amount of configuration however the configuration needed
can be performed by our team instead of an external team.

**** Sign-in service is more future-proof

Sign-in service is the system that the Identity team is reccomending all team adopt going forward and allows us greater flexibility going forward as more platforms
adopt it we can possibly enable Single Sign On with some of those apps.

**** The functionality we want may be impossible using SAML authentication

The SAML Authentication was built with Veterans in mind, therefore it is not meant to be used outside of VA.gov. We may be able to configure this but it would not be
a trivial amount of work and the Identity team themselves stated that we most likely would NOT be able to get around this.


*** Consequences

There is a fair amount of configuration we need to do to use the sign-in service and much of this work will need to be either done by our team or closely monitored by
our team. The configuration is larely covered by the existing documentation but there will probably also be some discussion that needs to happen between us and 
the Identity team. 

The UX of the sign-in service requires that the user be directed to the Unified Sign In Page. Since this page is hosted by VA.gov this may be a strange workflow and may
make VSOs think they are logging into VA.gov, something they explicitly said in research they did not want to risk. We have been assured by the Identity team that if we
set up the sign-in service authentication and VSOs don't like this aspect that the Identity team can help us host the page on our subdomain.





   
