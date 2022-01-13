Placeholder


### Design Questions and Answers
1. Within the flow, are we anticipating the end user client will hold the refresh token?
  a. TLDR: It depends. Having the user hold the refresh token is the simplest, but least secure. So its still an option if we cant find a more secure option..such as give them a session identifier which is encrypted by both parties. Then we read the identifier and make the call on our end to cognito with the refresh token to refresh the session. Cognito really is just holding these tokens for us and managing it all.
