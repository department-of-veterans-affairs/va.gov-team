# Amazon Lex vs MS Bot Service

## **Cost Structure**

**Amazon Lex:**

- Text requests: $0.004 per request
- Voice requests: $0.0075 per request
- Simple, usage-based pricing with no base fees
- Free tier: 10,000 text + 5,000 speech requests/month (first year)
- Additional costs: cloud logging, storage, and conversation db of some sort (RDS)
- AI services also would be an additional cost

**Azure Bot Service:**

- Standard channels: Free unlimited messages
- "Premium" channels (DirectLine/Web Chat): $0.50 per 1,000 messages (first 10K free monthly) This is where our usage is right now since I don't think the standard channels apply with our Web Chat usage.
- Additional costs: Azure App Service hosting, Application Insights telemetry, LUIS (Language Understanding), and QnA Maker services, AI search, Cosmos DB, Blob Storage
- More complex pricing with multiple services that end up stacking up and the fact that the platform isn't serverless so costs also have a fixed base cost + usage for things like AI or Search Service usage

## **FedRAMP Compliance**

**Amazon Lex:**

- FedRAMP Moderate authorized in US East/West regions
- Only considered FedRAMP High in AWS GovCloud. This is most likely where we would set up our services for chatbot.
- Can be combined with [Amazon Connect](https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html) (also FedRAMP High) for contact center integration
	- Amazon connect is interesting because they claim "users can reach out to your contact center because they are having trouble with some issue they can't resolve for themselves, or resolve easily. They want the ability to contact your contact center using any method they choose."

**Azure Bot Service:**

- Already approved and in use with the current production environment
- FedRAMP High
- Part of broader Microsoft Azure Government compliance framework

## **Dev Experience**

**Amazon Lex:**

- Includes a web console GUI for designing conversational interfaces. This is good and bad in that it is a low code solution, but could be difficult to customize with our current bot flows.
- Tightly integrated with AWS ecosystem. Most documentation pushed towards using AWS RDS (relational database service) or other AWS bassed services when it come to integrating logging and storage services.
- Simpler architecture overall (serverless by default). While simpler, I have encountered difficulties troubleshooting and debugging serverless issues because there isn't a centralized backend and running serverless locally is challenging vs just running a backend server.
- Requires Lambda functions for custom slot validation and business logic. Again using serverless lambdas can be challenging to debug.

**Azure Bot Service:**

- Bot Framework provides development tools, SDKs, and frameworks. This is a pro and a con because while they have various SDKs, we have been bit by having been tied to the Bot Framework SDK and needing to migrate to the MS 365 Agents SDK. 
- More comprehensive tooling (Bot Framework Composer, Bot Framework SDK).
- Also pretty tightly integrated to services and MS Azure ecosystem. We are using various blob storage, Cosmos DB, and Azure Search services
- Overall better SDK support across multiple languages (JavaScript, Python, .NET, Ruby, etc), but see the first point about
- More complex deployment. We already have deployment covered, but it is generally more complex to deploy than AWS lambdas

## **Scaling & Performance**

**Amazon Lex:**

- Fully serverless, auto-scales automatically
- No infrastructure management needed
- Pay by usage

**Azure Bot Service:**

- Scaling depends on App Service Plan configuration
- Requires manual configuration of scaling rules
- Can result in over-provisioning during development if using production-tier App Service plans. We see this now in that we have various services that are provisioned and add cost regardless of load.

## **Integration Capabilities**

**Amazon Lex:**

- Native integration with Amazon services (S3, DynamoDB, Lambda). Very similar to how we are using Bot Service, but just within the comparable AWS services.
- Deep integration with Amazon Alexa devices. We aren't really concerned with this at this point, but it's an interesting point.

**Azure Bot Service:**

- Seamless integration with Azure services and Microsoft 365 ecosystem
- LUIS for natural language understanding. We aren't using this service at this time
- Better suited for multi-channel deployment. They do allow things like MS Teams integrations, although we aren't using these integrations at this time.
- Not Bot Service specific, but we have integrated into our Databricks instance for analytics and data analysis pretty deeply.

## **Language & Multi-lingual Support**

**Amazon Lex:**

- Mostly English-focused with limited beta support for 6 other languages. We aren't doing multi-lingual but worth mentioning

**Azure Bot Service:**

- Support for "30+ languages"
- They also mention GPT-4o integrations for 100+ languages

## Conclusion

Lex feels very similar to the MS Bot Framework Service. It integrates tightly into all the AWS services easily, and is a solution that provides a lot of the similar capabilities. It's main differing factor is in it being serverless so that billing is usage based. Serverless is a more "modern" solution and would introduce some challenges in debugging both locally and in production environments. We would again be at the mercy of the service provider to rely on their SDK and deal with any breaking changes or deprecation of SDKs if/when that happens.
