# Hotspots / areas of concern

## Vets-api endpoint open
Any caller can initiate a call to the token endpoint (`/v0/coronavirus/tokens`) and obtain a valid token to communicate directly with the bot service. Hypothetically, an actor could set up their own chatbot and utilize the vets-api to obtain a token.


## Lack of 24/7/365 operations coverage
The chatbot team does not have the capacity to run a 24/7/365 on call rotation for triaging and resolving problems at the bot service level. That is, if there is a failure of the bot service due to a configuration or other issue that could be remedy by the chatbot team, there may not be someone available to do it. For coverage outside the chatbot layer (e.g. `vets-api` or FE), the chatbot team will be relying on the VSP team's existing on call rotation.
