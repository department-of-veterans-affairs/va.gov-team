# Storage Layer for Root Bot Architectural Decision [WIP]

This ADR captures significant architectural decision made during the development of a va-chatbot-rootbot version.

# Purpose and Context

By transitioning to root bot, we’re decoupling our chatbot from PVA and relying solely on Bot Framework and Bot Builder Skills to handle user questions. As a result, the direct connection between PVA and Dataverse is no longer available. To ensure continuity of data analysis and reporting, we need to explore alternative solutions for loading conversation transcripts into Dataverse or other storage options. This will enable Power BI reporting and DS teams to continue accessing the raw/conversation data, driving insights and informed decision-making.

## Persistent Data Storage for Production Bots

The Bot Framework SDK provides in-memory storage for user inputs, but this temporary solution is cleared every time the bot restarts. While suitable for testing, it's not ideal for production environments. To preserve conversations origination from outside our bot's flow we can consider the following options. 

* Dataverse: Although suitable for our application, it has significant drawbacks. Data loading takes 2-3 hours, making it unsuitable for real-time applications
* Azure Blob Storage: Not designed for state management, Blob Storage poses challenges in managing conversation state, dialog flows and context. It requires manual persistence mechanisms like check-check-get-pattern to save the state.
* Cosmos DB: Ideal for state management, dialog flows, and context storage. Cosmos DB ensures seamless conversation experiences. However, it gets expensive for the storage of large conversational transcripts.
* Table Storage: Storing conversational transcripts in table storage would be a cost-effective solution.

## Cosmos DB as conversation state storage layer
1.	Set up a Cosmos DB resource. 
> * Create your database account.
> * Add a database.
> * No need to create a container, bot can create it for you when creating its internal Cosmos DB client. 
2.	Integrate Cosmos DB to your Bot:
> Go to Keys tab from Cosmos DB account and copy the following.
> * Database ID
> * URI 
> * Primary Key
3.	You can choose your own name for container name.
4.	Now you can write the code to integrate your bot to the Cosmos DB.

## Resources

https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-howto-v4-storage?view=azure-bot-service-4.0&tabs=javascript 

https://github.com/department-of-veterans-affairs/va-virtual-agent/wiki/Bot-Framework-State-Management#4-state-should-be-bound-to-persistent-storage-not-in-memory-state

# Decision 

# Rationale
## Trade-offs, alternatives and other non-functional requirements

