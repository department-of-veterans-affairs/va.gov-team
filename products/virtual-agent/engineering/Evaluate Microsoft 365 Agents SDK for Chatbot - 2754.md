# Evaluate Microsoft 365 Agents SDK for Chatbot - 2754

The Bot Framework SDK reaches end-of-support on **December 31, 2025**, making migration to the Microsoft 365 Agents SDK essential for Node.js chatbot applications. While the Agents SDK maintains significant backward compatibility for core patterns like dialogs and state management, several architectural changes require careful attention—particularly the mandatory shift to explicit JWT authentication middleware and updated package dependencies.

## Resources

Migration for NodeJs: https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/bf-migration-nodejs?tabs=before 

## What fundamentally changes in this migration

The Microsoft 365 Agents SDK represents an evolution from the Bot Framework, shifting focus from traditional dialog-based bots to AI-powered agents with support for modern orchestration frameworks. The core architectural changes affect three key areas: **authentication handling moves outside the SDK stack**, **environment variable naming conventions change entirely**, and **several legacy services like LUIS and QnA Maker are no longer supported**.

The good news: dialog systems, state management, and `ActivityHandler` patterns remain largely compatible. The migration primarily involves updating imports, reconfiguring authentication, and removing deprecated service integrations.

## Complete package mapping reference

| Bot Framework Package | Agents SDK Replacement                       | Notes                                       |
| --------------------- | -------------------------------------------- | ------------------------------------------- |
| `botbuilder`          | `@microsoft/agents-hosting`                  | Core hosting, CloudAdapter, ActivityHandler |
| `botbuilder-core`     | `@microsoft/agents-hosting`                  | Merged into agents-hosting                  |
| `botframework-schema` | `@microsoft/agents-activity`                 | Activity types with Zod validation          |
| `botbuilder-dialogs`  | `@microsoft/agents-hosting-dialogs`          | Full dialog system preserved                |
| `botbuilder-azure`    | `@microsoft/agents-hosting-storage-blob`     | Blob storage                                |
| `botbuilder-ai`       | **No replacement**                           | LUIS/QnA retired—use Azure AI Language      |
| `botbuilder-testing`  | **No replacement**                           | Use Agents Playground or standard testing   |
| (new)                 | `@microsoft/agents-hosting-express`          | Simplified server setup                     |
| Teams features        | `@microsoft/agents-hosting-extensions-teams` | Separate Teams package                      |


## Breaking changes requiring immediate attention

### Server framework

- we are using restify
- the prebuilt startServer in the agents sdk is using express
- what breaking changes to request/response handling could show up?

### Authentication architecture completely redesigned

The most significant breaking change is that **JWT validation is no longer handled automatically** by the SDK. In Bot Framework, `ConfigurationBotFrameworkAuthentication` handled incoming request authorization internally. The Agents SDK requires explicit middleware configuration:

```javascript
// Before (Bot Framework) - JWT handled internally
const { CloudAdapter, ConfigurationBotFrameworkAuthentication } = require('botbuilder');
const botFrameworkAuth = new ConfigurationBotFrameworkAuthentication(process.env);
const adapter = new CloudAdapter(botFrameworkAuth);

// After (Agents SDK) - JWT middleware REQUIRED
const { CloudAdapter, loadAuthConfigFromEnv, authorizeJWT } = require('@microsoft/agents-hosting');
const authConfig = loadAuthConfigFromEnv();
const adapter = new CloudAdapter(authConfig);

// Must explicitly add JWT middleware
server.use(authorizeJWT(authConfig));
```

For local development only, JWT validation can be conditionally disabled—but this must never reach production:

```javascript
if (process.env.NODE_ENV !== 'development') {
    server.use(authorizeJWT(authConfig));
}
```

### Environment variables renamed

All Microsoft credential environment variables use new naming:

| Bot Framework          | Agents SDK     |
| ---------------------- | -------------- |
| `MicrosoftAppId`       | `clientId`     |
| `MicrosoftAppPassword` | `clientSecret` |
| `MicrosoftAppTenantId` | `tenantId`     |
| `MicrosoftAppType`     | _Removed_      |

The `loadAuthConfigFromEnv()` function reads the new variable names. For gradual migration, `loadPrevAuthConfigFromEnv()` can read legacy names during the transition period.

### TurnContext static methods moved to Activity instances

Methods previously called as static functions on `TurnContext` are now instance methods on `Activity`:

```javascript
// Before (Bot Framework)
const reference = TurnContext.getConversationReference(context.activity);
TurnContext.applyConversationReference(activity, reference);

// After (Agents SDK)
const reference = context.activity.getConversationReference();
activity.applyConversationReference(reference);
```

Affected methods: `getConversationReference`, `applyConversationReference`, `getReplyConversationReference`, `removeRecipientMention`, `getMentions`, and `removeMentionText`.

### Botbuild-azure to blob storage

- `botbuilder-azure` will need to be replaced with the azure blob storage. We will need to verify that the connection works in dev and that conversation state makes it into the desired container
- this is instantiated in the main `index.js`

## Dialog system remains fully compatible

The `@microsoft/agents-hosting-dialogs` package ports the entire dialog system with API compatibility:

```javascript
// Import changes only—dialog code remains identical
const { 
    ComponentDialog, 
    WaterfallDialog, 
    TextPrompt, 
    ChoicePrompt, 
    DialogSet 
} = require('@microsoft/agents-hosting-dialogs');

class UserProfileDialog extends ComponentDialog {
    constructor(userState) {
        super('userProfileDialog');
        this.addDialog(new TextPrompt('NAME_PROMPT'));
        this.addDialog(new WaterfallDialog('WATERFALL_DIALOG', [
            this.nameStep.bind(this),
            this.confirmStep.bind(this)
        ]));
        this.initialDialogId = 'WATERFALL_DIALOG';
    }
    
    async nameStep(step) {
        return await step.prompt('NAME_PROMPT', "What's your name?");
    }
}
```

All prompt types (`TextPrompt`, `ChoicePrompt`, `ConfirmPrompt`, `NumberPrompt`, `DateTimePrompt`, `AttachmentPrompt`) function identically. **Adaptive Dialogs and Language Generation (LG) are NOT supported**—applications using these must refactor to standard dialogs or LLM-based approaches.

## State management migration patterns

### ConversationState and UserState preserved

State management classes work identically with only import changes:

```javascript
const { ConversationState, UserState, MemoryStorage } = require('@microsoft/agents-hosting');
const { BlobStorage } = require('@microsoft/agents-hosting-storage-blob');

// MemoryStorage for development
const storage = new MemoryStorage();

// BlobStorage for production
const blobStorage = new BlobStorage(
    process.env.BLOB_STORAGE_CONNECTION_STRING,
    process.env.BLOB_CONTAINER_ID
);

const conversationState = new ConversationState(blobStorage);
const userState = new UserState(blobStorage);
const dialogState = conversationState.createProperty('dialogState');
```

### New AgentApplication pattern for simplified state

The recommended new pattern uses `AgentApplication` with built-in state management:

```javascript
import { AgentApplication, MemoryStorage } from '@microsoft/agents-hosting';

const agent = new AgentApplication({
    storage: new MemoryStorage()
});

agent.onMessage('/count', async (context, state) => {
    const count = state.conversation.count ?? 0;
    state.conversation.count = count + 1;
    await context.sendActivity(`Count: ${state.conversation.count}`);
});

agent.onMessage('/reset', async (context, state) => {
    state.deleteConversationState();
    await context.sendActivity('State cleared!');
});
```

Key differences: `AgentApplication` handlers don't require calling `next()`, and state is automatically persisted.

### Todo: Evaluate instances of next() and verify that we can continue to use it, or return context as needed
- see `skills/va-root-bot/dialogs/mainDialog.js`

## Skills architecture requires complete rethinking

Traditional Bot Framework skills components (`CloudSkillHandler`, `SkillConversationIdFactory`, `SkillHttpClient`) are **not ported** to the Agents SDK. Multi-agent scenarios should use:

- **Copilot Studio integration** via `@microsoft/agents-copilotstudio-client` for skill delegation
- **Model Context Protocol (MCP)** for tool and skill invocation
- **Agent-to-Agent (A2A) protocols** for direct agent communication
- Integration with orchestration frameworks like **Semantic Kernel** or **LangChain**

Skills built with Bot Framework SDK v4.12.0+ can be registered in Copilot Studio, but new skills should be built using the Agents SDK.

### Todo: if the skills components are not ported in the Agents SDK, we will possibly need to use the Agents SDK to register skills, or use LangChain react agents or something else. Need to investigate this and just see what will work.

## Middleware compatibility and turn lifecycle hooks

Custom middleware remains supported when using manual Express setup:

```javascript
const adapter = new CloudAdapter(authConfig);
adapter.use(myCustomMiddleware);  // Still works
```

However, the **`AgentApplication` class does not use traditional middleware pipelines**. Instead, it provides turn event handlers that replace most middleware use cases:

```javascript
const agent = new AgentApplication({ storage: new MemoryStorage() });

// Route-based handlers replace middleware patterns
agent.addRoute(
    async (context) => context.activity.type === 'message',
    async (context, state) => {
        // Handle message
    },
    false,
    RouteRank.First
);
```

For logging/telemetry, the Agents SDK provides observability features through `@microsoft/agents-a365-observability` rather than middleware.

## Testing migration: DialogTestClient removed

### Todo: this is a highly breaking change and i dont like it

The `botbuilder-testing` package has no direct replacement. 

This could potentially be a pain point for migration. We use the DialogTestClient in several places:
- `skills/va-root-bot/scripts/invoke-responses/service.js` (not actually a test, but our script for invoking responses, so important for deepeval integration)
- `skills/va-root-bot/tests/utils.js` (this util is used in 8 other test files)
	- `skills/va-root-bot/tests/e2e/conversational/conversational.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/endOfConversationDialog.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/moderationDialog.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/ragAgentDialog.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/routerDialog.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/signInDialog.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/surveyDialog.test.js`
	- `skills/va-root-bot/tests/unit/dialogs/welcomeDialog.test.js`
- `skills/va-root-bot/tests/unit/dialogs/cannedResponseDialog.test.js` 
- `skills/va-root-bot/tests/unit/dialogs/welcomeDialog.test.js`
- `skills/va_claims_bot/tests/mainDialog.test.js`
- `skills/va_signin_support_bot/tests/mainDialog.test.js`
- `skills/va_boilerplate_bot/tests/modular.test.js` (boilerplate test)
- `skills/va_boilerplate_bot/tests/simple.test.js` (boilerplate test)

Testing options include:
- **Agents Playground**: Local testing tool that simulates Microsoft 365 environment without requiring a tenant. This isn't ideal. We were using the DialogTestClient in several places, and the Agents Playground is a gui.
- **Standard testing frameworks**: Jest with direct handler invocation
- **Integration testing**: Deploy to test environments and validate through actual channels... sooooo manual testing. Bleh

### Cosmos DB storage

```javascript
const { CosmosDbPartitionedStorage } = require('@microsoft/agents-hosting-storage-cosmos');

const cosmosStorage = new CosmosDbPartitionedStorage({
    cosmosDbEndpoint: process.env.COSMOS_DB_ENDPOINT,
    authKey: process.env.COSMOS_DB_AUTH_KEY,
    databaseId: 'botstate',
    containerId: 'conversations'
});
```

## Server setup simplification option

For new projects or simpler bots, the SDK offers a one-line server setup:

```javascript
const { startServer } = require('@microsoft/agents-hosting-express');
const { EchoBot } = require('./bot');

startServer(new EchoBot());  // Handles Express, middleware, and routing
```

Use manual Express setup when you need custom middleware, specific routing, or full configuration control.

## Migration strategy recommendations

**Phase 1**: Update dependencies and imports

- Replace all `botbuilder-*` packages with `@microsoft/agents-*` equivalents
- Update import statements using find-and-replace
- Update environment variable names
- Replace `ConfigurationBotFrameworkAuthentication` with `loadAuthConfigFromEnv()`
- Add `authorizeJWT()` middleware to Express pipeline
- Figure out what is going with skill, and how we create them
- Deal with all test that are broken ie all the things
- Test authentication in development and staging

**Phase 2**: Feature migration

- Update TurnContext static method calls to Activity instance methods
- Refactor skills architecture if applicable
- Replace DialogTestClient usage with Agents Playground (???)
- Consider migrating ActivityHandler to AgentApplication pattern for new features
- Validate all conversation flows end-to-end

## Conclusion

The migration from Bot Framework SDK to Microsoft 365 Agents SDK claims to maintain backward compatibility for core patterns, but this isn't really the case. 

- The largest breaking change is the removal of DialogTestClient. ALL of our main conversational tests, along with our deepeval integration rely on this, and it being removed will cause significant pain.

- `botbuilder-azure` will need to be replaced with the azure blob storage. We will need to verify that the connection works in dev and that conversation state makes it into the desired container

- The main server implemenation with the new Agents SDK uses Express, and we are using Restify. We should move to Express and evaluate whether this causes any issues.

- Skill creation is an unknown at this time, but signs point to us needing to possibly rewrite skills to use something like langchain or agent frameworks.

- The most critical deployment related changes include explicit JWT middleware for server authentication and environment variable renaming. This would require immediate attention for deployments to continue to function if we move to the Agents SDK.

## A note on Microsoft Agents Framework

This framework essentially fills the same functional goal as CrewAI, LangChain or any other open source AI orchestration library. It has prebuilt connectors for Azure OpenAI and Azure Search Service but a lot of the other options do too as these are mostly just API calls under the hood. This framework is only .NET and Python. This is NOT a direct replacement for our current botbuilder backend as it doesn't connect to directline or deal with JWT authentication. It could be hosted on any platform and is not required to be hosted on Azure similar to how botbuilder or agents SDK are. This framework is essentially a combination of [AutoGen](https://github.com/microsoft/autogen) and [Semantic Kernel](https://github.com/microsoft/semantic-kernel) which are both Microsoft projects and this brings them together under one product.
