# Health APIs

This doc is the technical findings for the Healthcare tech team investigation on Health APIs.

- [Health APIs](#health-apis)
  - [Developers.va.gov](#developersvagov)
    - [Overview](#overview)
    - [Technical notes](#technical-notes)
    - [Security](#security)
    - [Performance](#performance)
    - [Other Considerations](#other-considerations)
  - [Cerner API](#cerner-api)
    - [Technical notes](#technical-notes-1)
    - [Security](#security-1)
    - [Performance](#performance-1)
    - [Other Considerations](#other-considerations-1)
  - [VistA API](#vista-api)
    - [Technical notes](#technical-notes-2)
    - [Security](#security-2)
    - [Performance](#performance-2)
    - [Other Considerations](#other-considerations-2)

## [Developers.va.gov](https://developer.va.gov/explore/health)

- [API Link](https://developer.va.gov/explore/health)
- [Running Sample App](https://tranquil-eyrie-84225.herokuapp.com/)
- [Source Code](https://github.com/mdewey/VetsApiTest)

### Overview

This API is the closest we have an internal API. This current project will eventually be the source of truth for veteran data. The existing va.gov website is using another part of this API, but not the Health API. In order to leverage this API, the current VA API will need a few tweaks.

This data is very rich and plentiful. According to the product manager(?), Dave Mazik, the information is coming from VistA.

From a technical level, this is a basic API behind an OAuth authentication schema. A user in the system has to approve the permissions needed. These permissions would only be once per user and play in to make the app secure. A breakdown of the permissions [is here](https://developer.va.gov/explore/health/docs/authorization#scopes), but in a nutshell, the app needs to request each bit of information we need to get.

To work with Health API, the VA API needs have two things, an Integration Control Number (ICN) assigned by the Master Veteran Index (MVI) for a patient and a valid token.

### Technical notes

Technically, this is a pretty straight forward OAuth integration. The challenge is, how does this integrate with the existing system. Both technically and politically, this could have hurdles. The team would _almost_ consider creating this backend on a different server to keep things in isolation, but that also comes with its challenges, that is not something that the team should consider lightly.

On the front end, its a few API calls using JSON to communicate.

On the backend, tasks are a little more complicated. We would need to integrate, asking for permission when the API communications with Lighthouse. Once that initial handshake is complete, the backend will need to request a token for that user. [Check out this controller for reference](https://github.com/mdewey/VetsApiTest/blob/master/Controllers/CallbackController.cs#L57). This extra request is a POST request with unique params and that request will return a valid token and the ICN of the vet logging in.

We can then use both of those items together to make calls back to any endpoint that we need to. These calls do not need to go back to the API, but we should consider using the API for security and analytical reasons.

### Security

This integration comes with a few security concerns that can be managed.

The first is the token. Since that is the key to a vet's health data, we probably shouldn't keep it on the client-side, "out in the open." There are ways to hide it client-side (service worker), but we should consider putting in a cookie or server-side session. Storing the token server-side will help keep that key a little safer.

Next, even though the client _can_ call the API directly, we should still call the VA API and have the VA API be the interface with Lighthouse. That way, we can make full use of [the existing security considerations ](https://developer.va.gov/explore/health/docs/authorization#security-considerations). Using the API in this way also allows us to have some analytics and track the API calls.

Two items from the [Lighthouse docs](https://developer.va.gov/explore/health/docs/authorization#security-considerations) to mention out are the `state` and the `nonce` parameters in the authentication flow. We can use those params to increase the security and integrity of the API calls.

### Performance

There seems to not be an issue with the performance at this time.

### Other Considerations

This API is an ongoing project and has its current limitations. The most significant barrier is this is a read-only API so far with no write endpoints available.

## Cerner API

### Technical notes

### Security

### Performance

### Other Considerations

## VistA API

### Technical notes

### Security

### Performance

### Other Considerations
