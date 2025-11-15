# Goal
Fundamentally, we're aiming to have a special presentation of the site for users who don't (or might not) have even a basic level of authorization. This entails:
- Two sets of pages for:
  - (Possibly) no authorization
  - Some authorization
- A catchall UX that:
  - Requires authentication
  - Also shows a global `404` for no authorization

### Possible problem
Would like to find some UX requirement that is possibly contradictory to this whole scheme. So...

We have nested loaders, all gating the "no authorization" case with `404`, using the very same singleton promise. But then an inner loader of some resource should have its own proper inner `404` UX. So if we want this stuff to be coherent, we're relying on parent loader `404` always activating first?

### Possible solution
Abstraction that wraps tree of loaders should enact that child loaders actually aren't throwing, but rather are short circuiting instead, trusting that the parent has taken care of things. But how reasonable and coherent is this idea?

# User types
- `unauthenticated`
- `no_authorization`
- `basic_authorization`
- `full_authorization`

# UI
## Header nav
`Layout`
- `unauthenticated`
  - [x] Signin
  - [x] 21a
- `no_authorization`
  - [x] User
  - [x] 21a
- `basic_authorization`
- `full_authorization`
  - [x] User
  - [x] Representation requests

## Pages
### `/`
`LandingPage`
- `unauthenticated`
  - [x] Signin link
  - [x] 21a link
- `no_authorization`
  - [x] Welcome text
  - [x] 21a link
- `basic_authorization`
- `full_authorization`
  - [x] Welcome text
  - [x] Representation requests link

### `/21a`
`Form21aPage`
- `unauthenticated`
  - [x] Signin link
- `no_authorization`
  - [x] Start link
- `basic_authorization`
- `full_authorization`
  - [ ] Not found
  - [ ] Helper text
  - [ ] 21a link
  - [ ] Landing page link

### `/representation_requests`
`RepresentationRequestSearchPage`
- `unauthenticated`
  - [x] Redirect to signin flow
- `no_authorization`
  - [x] Not found
  - [x] Helper text
  - [x] 21a link
  - [x] Landing page link
- `basic_authorization`
  - [x] Layout
  - [x] Error boundary
- `full_authorization`
  - [x] Layout
  - [x] Content

### `/*`
- `CatchallRoute`

# Concepts
## Client-side authorization
Taken from [`OpenSaaS` documentation](https://docs.opensaas.sh/guides/authorization/#client-side-authorization):
> **Client-side authorization is just for the looks**
>
> Users can manipulate the client code as they wish, meaning that client-side access control (authorization) serves the purpose of ergonomics/user experience, not the purpose of restricting access to sensitive data. This means that authorization in the client code is a nice-to-have: it is here to make sure users don’t get lost in the part of the app they can’t work with because data is missing due to them not having access, not to actually restrict them from doing something. Actually ensuring they don’t have access to the data, that is on the server to ensure, via server-side logic that you will implement for authorization (access control).
