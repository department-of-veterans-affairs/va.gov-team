# Endpoints

## vets-api

### `//[api-env].va.gov/v0/coronavirus_chatbot/tokens`
This HTTPS endpoint returns a Javascript Web Token (JWT) that originates from an instance of the Microsoft Health Bot Service (herein, bot service) and is passed through vets-api. The JWT is encoded with the following structure:

```json
{
  "locale": "",
  "directLineURI": null,
  "connectorToken": "",
  "userId": ""
}
```

Upon receipt of a valid JWT from the bot service, the client's browser utilizes the bot service [frontend framework](https://github.com/Microsoft/botbuilder-js) embedded on a standalone va.gov page to communicate directly with the bot service and instantiate a chat session.

## Bot service

### `//directline.botframework.com/v3/directline/conversations`
This HTTPS endpoint is used by the client's browser to engage in a chatbot conversation between the user and the bot service. The endpoint requires a bearer token, which is extracted from the JWT obtained from the vets-api endpoint detailed immediately above. The endpoint is managed by the Microsoft bot service team and is provided to bot service customers on a "software-as-a-service" basis and in accordance with published [SLAs](https://azure.microsoft.com/en-us/support/legal/sla/bot-service/v1_0/).
