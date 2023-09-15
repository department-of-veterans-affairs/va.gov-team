# CIE Security best practices
This document contains developer best practices for security. These should be followed when spinning up a new application, database, or endpoint for the check-in project.

## React
Keep data passed to the frontend of our application as  limited as we can. We should attempt to only pass data that we intend to display.

Avoid storing any patient identifying information in the browser. For example, we only store the UUID for the LoRota entry and some of the user progress in session storage and then make an API request to restore a session from that data. Note: station ID and a timestamp gets stored in local storage for each travel submission. 

Utilize components provided by the VA design system. These components are more widely used and tested, they are more likely to have any security issues raised by the organization as a whole. It is also our responsibility to report any potential risks we may find to the design system team.

Keep API requests to vets-api only. Vets-api should be where all integrations with other services or systems happen. As a result we should only need to make requests from the application to vets-api.

Make sure 3rd party libraries and dependencies are kept reasonably up to date.

Sanitize input as much as possible to mitigate XSS attacks, libraries and inputs should accept and validate limited data sets.

We don't currently accept user submitted files, but if we do in the future like in the case of travel receipts, we should restrict the file types accepted to a strict set.

## APIs

**Least Privilege**: An entity should only have the required set of permissions to perform the actions for which they are authorized, and no more. Permissions can be added as needed and should be revoked when no longer in use.
Fail-Safe Defaults: A user’s default access level to any resource in the system should be “denied” unless they’ve been granted a “permit” explicitly.

**The economy of Mechanism**: The design should be as simple as possible. All the component interfaces and the interactions between them should be simple enough to understand.

**Complete Mediation**: A system should validate access rights to all its resources to ensure that they’re allowed and should not rely on the cached permission matrix. If the access level to a given resource is being revoked, but that isn’t reflected in the permission matrix, it would violate the security.

**Open Design**: This principle highlights the importance of building a system in an open manner—with no secret, confidential algorithms.

**Separation of Privilege**: Granting permissions to an entity should not be purely based on a single condition, a combination of conditions based on the type of resource is a better idea.

**Least Common Mechanism**: It concerns the risk of sharing state among different components. If one can corrupt the shared state, it can then corrupt all the other components that depend on it.

**Psychological Acceptability**: It states that security mechanisms should not make the resource more difficult to access than if the security mechanisms were not present. In short, security should not make worse the user experience.

We should do our best to secure any API we create so that it is scoped to its specific task. 

Usernames, passwords, session tokens, and API keys should not appear in the URL, as this can be captured in web server logs, which makes them easily exploitable.

Validate request parameters on the very first step, before it reaches application logic. Put strong validation checks and reject the request immediately if validation fails.

Sanitize data or use ORMs, to prevent SQL injection and alteration.

The text in this section is from the following article: https://restfulapi.net/security-essentials/

## AWS
Keep sensitive variables, keys, and tokens stored within AWS secrets and environment variables as much as possible.

See AWS security best practices: https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html

## Ruby

