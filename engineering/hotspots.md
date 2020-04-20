# Hotspots / areas of concern

## Vets-api endpoint open
Any caller can initiate a call to the token endpoint (/v0/coronavirus/tokens) and obtain a valid token to communicate directly with the bot service. Hypothetically, an actor could set up their own chatbot and utilize the vets-api to obtain a token.

## Going to production in "EDE"
The bot service instance resides in a VAEC-owned Azure commercial account that is marked for development only / non-production use (referred to as EDE, or Enterprise Development Environment). The team has confirmed with Azure representatives that the capacity and capabilities of the account are not limited as compared to the VAEC account marked _for_ production use. The primary difference between EDE and the VAEC account approved for production is access controls: EDE does not require users to have obtained a PIV whereas the production account does. The team chose the EDE account so they would not be slowed down by the paperwork needed to obtain access to the production account.
