# VAOS front end architecture

The VAOS front end application is a client-side React/Redux application built on the Veteran Services Platform (VSP).

## Data flow

![fedataflow](https://user-images.githubusercontent.com/634932/127175054-89996321-b8d7-4e85-88a8-27c4cde8ff9c.png)

The front end can be broken into two layers, roughly:

- The UI layer. This layer is responsible for how to present data to users and maintaining the current state of the UI
- The domain layer. This layer is responsible for managing the data that the UI layer uses.

This distinction can be somewhat fuzzy. The domain layer should be able to answer any domain specific questions and also complete domain related tasks. By domain specific questions we mean questions where the answer is something about the data that you're using, rather than questions about how to present something. "Where is this appointment located?" is a domain specific question, but "How should I format this location's address?" is a presentation question. And by domain related tasks, we mean things that retrieve or change information about the domain. Since the front end does not own any of the domain or data, those tasks are always calls to external services.

Generally, the domain layer should be as simple as possible. We prefer that business logic lives server-side, not in the client. There will always be some kind of domain specific logic in the front end, but we should be wary of being the source of any business rules.
