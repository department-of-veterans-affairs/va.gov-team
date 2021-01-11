# 4. Require Authentication Conditionally

Date: 2020-12-10

## Status

Accepted

## Context

Certain business lines require authentication, which means we must be able to mandate auth based on the topic selected by the user. 

We did a few spikes on topic-based auth and found it was possible to store the topics selected in url parameters and use them to mandate authentication.

 - Reference: https://github.com/department-of-veterans-affairs/orchid/issues/220
 
## Decision

Continue using the form system to implement the form and accept that we may lose data if we require users to sign in during the form flow.

## Consequences

- We can continue to leverage the form system
- It is difficult to determine if the user is signed in from within the form and possible risk introducing more bugs


