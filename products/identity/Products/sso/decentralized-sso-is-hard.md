# Decentralized SSO Challenges

This document describes the challenges that VA faces with its current approach to decentralized SSO session management. 

## Overview

VA has many applications that all interact with a central identity provider (SSOe) in order to establish an authenticated session. These applications include but are not limited to, VA.gov, Cerner, and MHV. 

```
                       +----------+
                       |          |
                       |   SSOe   |
                       |          |
                       +----------+
                             |
                             |
         +--------------------------------------+
         |                   |                  |
         v                   v                  v
    +----------+        +-------+         +----------+
    |          |        |       |         |          |
    |  VA.gov  |        |  MHV  |         |  Cerner  |
    |          |        |       |         |          |
    +----------+        +-------+         +----------+
```

When a user authenticates, SSOe establishes a primary session for the user, and then immediately sends the user off to the application that they want to use. The application in turn establishes an application-specific session, using information provided by SSOe and whatever local application state it cares to maintain. 

Now there are several constraints to consider:

* The applications, and SSOe, are separate services operated by separate teams and implemented using distinct tech stacks.
* All these services use are web applications that use browser cookies to maintain the state of the user's session in the browser. Typically the browser session cookie just has an identifier that is used to look up additional session state within the backend of a given system.
* Services cannot inspect one another's session contents. They can't even directly detect the presence or absence of a session since cookie are not visible across sites. 
* If an application wants to instantiate a new session it has two ways of doing so:
  * It can make a SAML request to SSOe to either request the current session or trigger authentication. This involves several browser redirects.
  * It can integrate with SSOe as a standard junction partner, whereby SSOe proxies all traffic to the application and does session management on its behalf. This results in all application URLs becoming paths under `eauth.va.gov`
  
## Challenges

#### I have a session, you don't, or vice versa
Ideally we want everything to be in sync - when a user signs in, both SSOe and the application agree there is a session; when a user signs out, both SSOe and the application agree there is no session. But as soon as state is managed in multiple places (the combination of a session cookie and whatever backend persistent store that cookie is a key for, across SSOe plus the application), there is potential for that state to get out of sync.

* The SSOe session can be terminated and the application isn't aware, because the signout happend while the user was on another site.
* Differences in desired session duration can leave one session or another active while the other is terminated.
* Differences in business logic can mean that an SSOe session is started but a given application elects not to instantiate a session (e.g. because of identifier mismatches).

#### How do I even _know_ whether we're in sync
For SAML partners, even detecting whether there is an SSOe session is a challenge. You can't even directly see whether an SSOe session cookie is present, much less know whether it corresponds to a still-valid session. (For standard junction partners this is easy - if SSOe proxies traffic to you, there's an SSOe session). 

For the VA.gov-SSOe integration, this was solved with a "keepalive" endpoint. The VA.gov frontend can make an Ajax request to an SSOe keepalive endpoint. That Ajax request reaches an SSOe server, so will be made with the SSOe session cookie, if present. If an SSOe session is present, the keepalive request will return a yes/no of whether the session is alive, plus some additional information (the authenication context and credential type used, the session duration, the SSOe transaction id). 

So now VA.gov has a baseline ability to know whether an SSOe session is present and can take action to get the sessions in sync. 

#### Getting back in sync is hard
* The above keepalive request can only be made from frontend JS code running in the browser, because it need to have the SSOe session cookie available.
* If it detects that there is an SSOe session, it doesn't have enough information to actually establish a VA.gov session. For that it needs to make a SAML request to SSOe and get a full SAML authentication response back. This results in several browser redirects that are disruptive to the user, making it difficult to have any kind of seamless auto-login experience.
* If it detects that there is no SSOe session, it can terminate the VA.gov session to match, but again this is disruptive to the user.
* If an attempt to auto-login fails, then VA.gov needs to suppress any additional attempts to auto-login so as not to capture the user in an auto-login loop. This in turn means you need to store additional state in the VA.gov frontend to track these attempts, using something like browser local storage. Now you have more state, more potential for race conditions, etc.
* The auto-login request to SSOe needs to be crafted so that it requests the current cached SSOe session instead of triggering a re-authentication. 

#### We might both have sessions, but not the same one
Simply detecting "there's an SSOe session, and an application session" is not good enough. Those sessions also need to be checked to ensure they are for the same user. Otherwise, various patterns of signin/signout/navigating between sites can result in an application session and SSOe session existing but belonging to different users. If a site is not checking the contexts of those sessions, it will incorrectly believe they match.

This was solved for the keepalive approach by adding the SSOe transaction ID to the keepalive response. Now a site like VA.gov can match up the transaction ID that was presented when it established its application session to the one in the keepalive response, and make sure they match. 

But, every SAML partner needs to implement this logic correctly. And the keepalive mechanism, while fairly straightforward, is not a standard mechanism, so involves custom development. It's also only available to frontend code where most applications are doing their own session state management on the backend.

### What about Single Logout?
The SAML spec provides a Single Logout (SLO) profile where logout requests can be passed between applications and IDPs. SSOe does not implement this mechanism. Instead it uses a "PKMS logout" approach where an application can request termination of the SSOe session and then SSOe will redirect back to an endpoint of the application's choosing.

SAML SLO would not really solve matters widely in VA's environment because the logout request will only flow upstream to SSOe (and could in turn flow upstram to credential providers), it won't fan out to other applications that might have had a session established due to navigation among VA sites. There's no provision for cross-application logout, because SAML is always mediated through the user's browser. For example, neither VA.gov nor SSOe can easily know whether there's a latent Cerner session out there that needs terminating, and even if they did it would require a flurry of browser redirects across all possible application partners to log out everywhere. 

### Why not just make everything a standard junction?
The standard junction pattern, where SSOe proxies all traffic for applications, _does_ simplify session management. SSOe manages its session  and cookie, and either proxies traffic to the application or not based on whether there's a session.

The huge downside is that it breaks web navigation by rewriting all URLs to be under the eauth.va.gov domain. It becomes difficult to link among sites without having to conditionally link to different URLs based on logged-in state, and difficult to present content that is flexible about logged in state (e.g. a content page with a call-to-action for the user to log in if they want to submit a form). 

Additionally, as browsers become more stringent about things like same-origin policies, SameSite cookies, CORS, CSP, etc, this coarse-grained rewriting of all URLs for an application becomes less likely to work correctly. 

## So what would be better?
If we take it for granted that VA will have a multi-system, multi-application environment, and applications will continue to need some measure of local session management, then what can we do to improve things?

### Backend-accessible session management APIs
If applications had a mechanism where they could interrogate, extend, and terminate the primary SSOe session via backend API requests, this would alleviate several problems:

- Session detection could happen on the application backend where most local session logic already lives.
- Auto-login could happen without disruptive browser redirects.

The main challenge here is that SSOe needs its session cookie presented to resolve a session. Making that cookie value (or a suitable equivalent) available to all applications in a reliable way, requires thought. One possibility is a domain-scoped cookie that all applications (at least all applications hosted under *.va.gov domains) can read to fetch the session key or an equivalent token). This cookie would need to be established (by SSOe), and possibly updated/destroyed (by multiple parties?). We should look at what IDaaS providers do in this space.

### Sidecar proxies
Can the standard junction approach be maintained but decentralized, such that the problems of URL rewriting are eliminated? Instead of routing all traffic through the eauth domain, a proxy could be deployed directly in front of each service, in its deployment environment, using its primary DNS name. This proxy could then have a privileged channel to the SSOe service such that it could perform session management operations. If a primary session was present it could pass traffic through to the application server and inject auth headers along the way. If a primary session was absent it could render a sign-in UI. 

Such a proxy would likely need to be implemented by the SSOe team, and cooperatively deployed and operated by the SSOe and application teams. Since this proxy would be hosted under a variety of domains it would need the same domain-scoped cookie and backend authN APIs as described above. But it would remove the burden of using those API from applications that are already expecting header injection.








