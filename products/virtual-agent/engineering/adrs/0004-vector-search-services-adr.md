# Architecture Decision Record: Vector Search Service for Production Ready LLM based chatbot product

## Status
Completed

## Context
After building out three different proof of concept applications for evaluating LLM based chatbots, the team is moving forward with a RAG agent based LLM feature which is added as an additional component of the existing Chatbot architecture. To build a production RAG pipeline we need a scalable search service that can house content indexed from VA.gov along with potentially other content that is deemed pertinent to our application. 

## Decision
We will use Microsoft Azure's AI Search product as the vector database and search indexing backend.

## Considered Options
During the original POC engineering effort, we built a [similar ADR around vector databases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/engineering/adrs/LLM-based-chatbot/vector-dbs.md) that resulted in the decision to use of ChromaDB for it's simplicity, but we also explored other self hosted options like Weaviate, Qdrant, and PostgreSQL w/pgvector.

Hosted options need to be FedRAMP High authorization to operate.
1. Azure AI Search
2. Amazon OpenSearch Service (AWS GovCloud)
3. Amazon Kendra (AWS GovCloud)
4. Google Vertex AI Search
5. Elasticsearch (AWS GovCloud)

**Every specialized vector database fails the FedRAMP requirement.** Pinecone, Chroma, Weaviate, Milvus, and Qdrant, while technically impressive, have no FedRAMP authorization. The only vector-capable database with compliance is MongoDB Atlas for Government (FedRAMP Moderate), but it's not a pure search solution and would require specific search features to be built on top of it, so those options aren't included in this document.

## Azure AI Search

Azure AI Search is Microsoft's fully managed cloud search service with built-in AI capabilities and some pretty deep Azure integrations. It's their "native" choice for Azure-based infrastructure.

Azure AI Search does really with with hybrid search, combining traditional keyword search with vector similarity search and semantic ranking in a single query. The platform includes 30+ built-in AI enrichment skills (OCR, entity extraction, language detection, sentiment analysis) that process documents during indexing without additional development. Integration with Azure OpenAI Service and Azure Machine Learning is pretty seamless, making RAG implementation straightforward. The service can handle documents in 20+ file formats including PDFs, Office documents, and images automatically, which is impressive. From an operational perspective, Azure AI Search is fully managed. You don't have to deal with the individual infrastructure or clustering. It auto-scales based on load and provides 99.9% SLA for production tiers.

The main limitations are vendor lock-in to the Azure ecosystem and less flexibility compared to alternatives like Elasticsearch. You can't customize the underlying search algorithms or indexing beyond what Microsoft provides. The service costs more than self-hosted options. The production deployments typically start around $250/month for Basic tier and $750/month for Standard S1. Other features like semantic search and AI enrichment add additional costs. While it's powerful, you're dependent on Microsoft for adding new features or improvements.

For VA.gov's use case, Azure AI Search has several advantages. It's already FedRAMP High authorized with proven federal adoption across agencies like DoD, IRS, and CDC. Since VA already uses Azure services, there's no multi-cloud complexity. Everything can stay within the existing Azure Government cloud.

### Resources for Azure AI Search

https://azure.microsoft.com/en-us/services/search

https://docs.microsoft.com/en-us/azure/search

https://azure.microsoft.com/en-us/pricing/details/search

https://docs.microsoft.com/en-us/azure/search/search-what-is-azure-search

## Amazon OpenSearch Service

Amazon OpenSearch offers a technically capable alternative. Since VA.gov already runs on AWS GovCloud, this would make this option architecturally simpler than other alternatives. OpenSearch does excel at scale and flexibility and they claim that it handles billions of vectors with sub-50ms query latency and supports multiple vector search algorithms (HNSW, IVF, FAISS, NMSLIB) compared to Azure's single service approach. Amazon uses OpenSearch internally and also claims to have over 68 billion vectors in use for production. The platform provides native integration with Amazon Bedrock for RAG applications, so it is the recommended solution for AWS centered applications.

OpenSearch does appear to require more configuration expertise than Azure AI Search's managed approach. You have to deal with shard management, replica tuning, and capacity planning. The learning curve is steeper, and the platform offers less pre-built AI enrichment compared to Azure's offerings.

Pricing starts low with their free tier, which offers 750 hours monthly, and production deployments begin around $1,600/month for medium scale usage. Their serverless option starts at $350/month with automatic scaling.

### Resources for OpenSearch

https://coralogix.com/guides/opensearch/opensearch-pricing

https://slashdot.org/software/comparison/Amazon-OpenSearch-Service-vs-Azure-AI-Search

https://www.amazonaws.cn/en/blog-selection/amazon-opensearch-services-vector-database-capabilities-explained

https://aws.amazon.com/opensearch-service/features/security

https://aws.amazon.com/blogs/big-data/amazon-opensearch-serverless-cost-effective-search-capabilities-at-any-scale

## Amazon Kendra

Kendra is a bit different in that it's designed specifically for conversational search and document Q&A rather than more generalized vector search services like Azure's AI Search.

Kendra aims to understand natural language questions at it's core with their own ML models and extracts answers from documents without needing to pass as much to the LLM in a traditional RAG approach. Kendra includes specialized FAQ matching, reading comprehension for factoid questions, and native Amazon Lex integration for chatbots. This would make sense if using the Lex framework for the chatbot infrastructure, but doesn't fit in as well when using other chatbot frameworks. AWS did release a "GenAI Index for RAG" in 2024 that they tied into the Bedrock services and created connectors for 43 different data sources "enabling customers to easily ingest content from a variety of sources". They did get FedRAMP High authorization in November 2022 and it does work in AWS GovCloud.

Kendra costs significantly more than most of the alternatives. The GenAI Index starts at $230/month for 20,000 documents, while Enterprise Edition begins at $1,008/month. Production deployments easily exceed $2,000/month. You're charged from index creation until deletion, even if it is unused. For high usage, Kendra gets expensive quickly.

### Resources for Kendra

https://docs.aws.amazon.com/kendra/latest/dg/what-is-kendra.html

https://aws.amazon.com/kendra/features

https://aws.amazon.com/kendra/pricing

https://aws.amazon.com/about-aws/whats-new/2024/12/genai-index-amazon-kendra

https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-kendra-fedramp-high-compliant


## Google Vertex AI Search

Google Vertex AI Search says that they have leveraged all their search knowledge from running Google search and YouTube to make this offering competitive. It received FedRAMP High authorization in March 2025.

Vertex provides turnkey RAG with fully managed document ingestion, chunking, embedding, and hosting. This makes it similar to Azure AI Search in that you don't have to stand up all the connected services individually and can just add data and use it within a few hours. Vertex provides similar integrations to other services like quickly connecting to Gemini models and they have a "Vertex AI Agent Builder" that helps engineers quickly spin up agent flows with the service. Their grounding capabilities are interesting as they claim to be able to reduce AI hallucinations by anchoring responses to the data sources with built in citations.

The enterprise edition of Vertex costs $4 per 1,000 queries with another feature called "Advanced Generative Answers" adding $4 more. One quoted cost for a typical chatbot with 300,000 monthly queries costs roughly $2,250/month, so pretty comparable to Azure, but really depends on usage over time. One interesting case study that I found was the U.S. Department of State where they deployed Vertex AI Search for travel.state.gov, which handled passport information queries and visa services.

### Resources for Vertex AI

https://cloud.google.com/blog/topics/public-sector/vertex-ai-search-and-generative-ai-with-gemini-achieve-fedramp-high

https://medium.com/google-cloud/vertex-ai-search-leverage-the-power-of-google-search-and-gemini-for-your-information-needs-05bb7914c28d

https://cloud.google.com/enterprise-search

https://cloud.google.com/blog/topics/public-sector/vertex-ai-search-and-generative-ai-with-gemini-achieve-fedramp-high


## Elasticsearch

Elasticsearch (self-hosted or Elastic Cloud) would give the most flexibility with good vector and semantic search abilities. It has FedRAMP Moderate authorization.

Elasticsearch is open source at it's core, and has more control over indexing, searching, and data ingestion than the other options. Basically you have all the knobs to turn to tune Elasticsearch into a really performant option, but you do need to invest the time to keep it running at top performance. Self-hosted Elasticsearch needs quite a bit DevOps expertise. Things like cluster sizing, node management, security, backup, and tuning all have to be considered. 

Elastic Cloud is managed hosting so it requires much less maintenance.  You can deploy Eleasticsearch directly from the Azure Marketplace. Since the cloud offering is fully integrated into Azure you can do things like log forwarding straight into Azure Monitor, which is convenient.

From a cost standpoint the Azure based pricing is listed at $0.10 per 1000 units but it is somewhat difficult what that would actually end up being without running it and evaluating cost as things run.

### Resources for Elasticsearch

https://www.elastic.co/industries/public-sector/fedramp

https://marketplace.microsoft.com/en-us/product/saas/elastic.ec-azure-pp?tab=PlansAndPrice


## Comparison summary

| Service                     | FedRAMP                    | Azure Integration     | Strengths                                              | Best For                                    |
| --------------------------- | -------------------------- | --------------------- | ------------------------------------------------------ | ------------------------------------------- |
| **Azure AI Search**         | High                       | Native                | Complete feature set, hybrid search, AI enrichment     | Azure-based infrastructure                  |
| **Amazon OpenSearch**       | High                       | Complex (multi-cloud) | Flexibility, scale, proven at billions of vectors      | AWS-based infrastructure, custom RAG        |
| **Amazon Kendra**           | High                       | Complex (multi-cloud) | Purpose-built chatbot, turnkey Q&A, pre-trained models | Simple chatbot, fast deployment             |
| **Google Vertex AI Search** | High                       | Complex (multi-cloud) | Search quality, latest AI, healthcare features         | Best-in-class AI capabilities               |
| **Elasticsearch Cloud**     | Moderate (High in process) | Partial (Native ISV)  | Open-source, customization, federal adoption           | Maximum flexibility, existing Elastic users |
|                             |                            |                       |                                                        |                                             |

## Conclusion - Use Azure AI Search

Azure AI Search provides the path of least resistance with native integration, unified management, and existing FedRAMP High authorization. Unless specific features from alternatives justify the complexity, using Azure AI Search makes the most sense.
