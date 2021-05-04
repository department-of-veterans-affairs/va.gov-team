# 8. remove user model va_profile

Date: 2021-05-04

Whom:
- John Bramley
- Trevor Bosaw

## Status

Pending

## Context

As part of the larger effort to [refactor the User & Identity on vets-api](https://app.zenhub.com/workspaces/vsp-identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/21012), we have decided to more tightly control access to user attributes through specific & improved getter methods. The `va_profile` methods on the User class revealed too much information about a user's MPI profile and has been rendered uneccessary by the updated getter methods.

## Decision

The decision made is to transfer the User's `va_profile_status` and `va_profile_error` methods to `mpi_status` and `mpi_error` since that is what they are abstractions of, and to remove the `va_profile` method entirely in favor of relying on getter methods for specific attributes.

## Consequences

We expect this to streamline and simplify interaction with a user's attributes; the rest of vets-api will increasingly be able to invoke the getter method for a specific attribute and be confident that the value returned is the one it wants instead of having to directly involve itself in where and how that attribute value was obtained.
