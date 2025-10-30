## Summary

Kendra provides fully managed semantic search with built-in ML/NLP, connectors, and document-level access control, but is less customizable and more expensive at large scale. Azure AI Search supports full-text, semantic, and vector search with integration to Azure OpenAI and Cognitive Services, offering more control than Kendra but requiring additional setup and AI costs.

Elastic Cloud provides the most flexibility, supporting hybrid keyword/vector search, semantic models (ELSER), and custom pipelines, with multi-cloud deployment and FedRAMP Moderate compliance. It requires significantly more setup and engineering for relevance tuning and user access, but is the most cost-efficient at scale and offers strong analytics and observability. In short, Kendra is simplest, Azure balances AI integration and control, and Elastic Cloud gives maximum customization and efficiency.

| Feature                 | **AWS Kendra**                                                            | **Azure AI Search (Cognitive Search)**                                                  | **Elastic Cloud (Elasticsearch + Enterprise Search)**                                                                                   |
| ----------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**             | Enterprise intelligent search with built-in NLP/ML                        | Cloud search-as-a-service with AI enrichment and RAG integration                        | Search and analytics platform for structured/unstructured data; supports hybrid text+vector retrieval and semantic AI                   |
| **Core Function**       | Semantic, natural language, FAQ-style search                              | Full-text, semantic, vector, and hybrid search                                          | Full-text search, analytics, hybrid vector+BM25 search, and semantic search via ELSER or embeddings                                     |
| **AI/NLP Integration**  | Built-in ML/NLP for document understanding, FAQ extraction, and Q&A       | Integrates with Azure OpenAI, Cognitive Services skillsets, and custom pipelines        | Built-in ELSER semantic model and Inference API for NLP; can integrate external AI APIs; supports embeddings and hybrid semantic search |
| **RAG/LLM Integration** | Native integration with Amazon Bedrock for generative Q&A                 | Built-in “On Your Data” flow via Azure OpenAI and Cognitive Search                      | Supports RAG workflows through external LLMs or ELSER + OpenAI API integration                                                          |
| **Data Sources**        | 50+ native connectors (S3, RDS, SharePoint, Salesforce, ServiceNow, etc.) | Azure Blob, Cosmos DB, SQL, SharePoint, and custom connectors via Indexers/Data Factory | Native connectors (SharePoint, S3, Google Drive, etc.) via Elastic Connectors Framework and APIs                                        |
| **Search Tuning**       | Relevance tuning, facets, synonyms, and FAQ relevance scoring             | Semantic ranking, hybrid scoring, custom scoring functions                              | Relevance tuning, facets, boosting, synonyms, custom scoring; hybrid BM25+vector scoring                                                |
| **Hosting**             | AWS managed (regional)                                                    | Azure managed with geo-replication options                                              | Fully managed via Elastic Cloud (AWS, Azure, GCP) or Elastic Serverless (preview GA 2024)                                               |
| **Output Types**        | Direct answers, ranked document lists, contextual Q&A                     | Semantic answers, contextual snippets, hybrid vector results                            | Ranked document results, analytics dashboards, semantic answers with ELSER/embeddings and ML scoring                                    |
| **Compliance**          | FedRAMP Moderate authorized                                               | FedRAMP High within Azure boundary                                                      | FedRAMP Moderate authorized (Elastic Cloud on AWS GovCloud)                                                                             |

## Cost Comparison

### Overview

All three solutions have been analyzed for different document volume scenarios, from unauthenticated search (~502K docs) to full authenticated search (117M docs). Costs include base platform fees plus optional AI/LLM features.

### Monthly Cost Estimates by Document Volume

| **Document Volume**                | **AWS Kendra**  | **Azure AI Search**     | **Elastic Cloud** |
| ---------------------------------- | --------------- | ----------------------- | ----------------- |
| **Unauthenticated (~502K docs)**   | ~$2,500/month   | $5,806/month            | $44/month         |
| **1-Year Subset (840K docs)**      | ~$4,536/month   | $5,806/month            | $88/month         |
| **5-Year Subset (4.2M docs)**      | ~$23,000/month  | $5,806/month            | $354/month        |
| **Full Authenticated (117M docs)** | ~$589,680/month | $6,027 - $192,777/month | $3,544/month      |

_Note: Azure AI Search costs reflect Standard S3 tier ($2.688/SU/hour) with 2-3 replicas. Small datasets (<1 TiB) use minimum 2-3 SUs ($5,806/month), while large datasets scale dramatically based on document size and partitions needed (up to $192,777/month for 300KB average document size). AWS Kendra ranges reflect LLM inference pricing based on Enterprise Edition. Elastic Cloud costs include storage, ingest VCUs, search VCUs, and ML VCUs for NLP/semantic search capabilities._

### Key Cost Insights

#### **AWS Kendra**

- **Primary cost driver**: Index units ($0.70/hr per 100K documents per unit)
- **Query capacity**: Default 100 QCUs sufficient for current traffic (~1.1 QPS)
- **Cost optimization**: Dramatic savings by limiting document indexing (full index vs 1-year subset: $590K → $4.5K/month)
- **Best for**: Organizations prioritizing simplicity, compliance, and built-in AI features

#### **Azure AI Search**

- **Pricing model**: Search Units (SUs) at $2.688/hr (~$1,936/month per SU) based on partitions and replicas
- **Capacity model**: Standard S3 partition = 1 TiB indexed data (semantic/vector fields reduce capacity)
- **Cost efficiency**: Small datasets (<1 TiB) use minimum 2-3 SUs ($5,806/month baseline); large datasets scale with vector fields and replicas
- **Cost drivers**: Document size and embedding count critically impact partition requirements; replica count provides cost vs. availability trade-off
- **Best for**: Azure-centric organizations with moderate data volumes and strong AI integration needs

#### **Elastic Cloud**

- **Pricing model**: Managed clusters or Serverless; charges for storage ($0.0316/GB-hour) + VCUs for ingest, search, and ML workloads
- **Primary cost drivers**: ML VCUs for NLP/semantic search inference, storage for embeddings, and search VCUs for query load
- **Cost advantage**: Dramatically more cost-effective than others, especially for large-scale semantic workloads
- **NLP/Semantic Search**: ELSER model (sparse encoder) provides vector-free semantic search; vector embeddings optional for hybrid retrieval
- **Best for**: Organizations prioritizing cost control, flexibility, and deep NLP customization

### Cost Optimization Strategies

1. **Document Lifecycle Management**: Index only recent or high-value documents
2. **AI Feature Usage**: Limit LLM inference; cache generative responses
3. **Traffic Patterns**: Current load (1.1 QPS) well within baseline capacities
4. **Hybrid Approaches**: Combine partial indexing with static query capacity
5. **Elastic-Specific**:

   - Use tiered hot/warm/cold storage for archival balance
   - Apply semantic/vector indexing only to high-value content
   - Use Serverless mode for auto-scaling without overprovisioning

### Recommendations by Scale

- **Small (<1M docs)**: Elastic Cloud is most cost-efficient ($44–$354/month vs $2.5K–$5.8K)
- **Medium (1–10M docs)**: Elastic retains large advantage vs Azure/Kendra
- **Large (>10M docs)**: Elastic remains most scalable ($3,544/month vs $6K–$192K vs $590K)

## Authentication and Access Control Comparison

| **Solution**        | **Authentication Method**                             | **Access Control**                                    | **User Context Filtering**                          |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| **AWS Kendra**      | Native SSO integration, principal objects             | Document-level ACLs, automatic user context filtering | Built-in filtering via SSO and principal mappings   |
| **Azure AI Search** | Microsoft Entra ID, resource keys, managed identities | RBAC and index-scoped roles                           | Custom user filtering via application layer         |
| **Elastic Cloud**   | LDAP/SAML/Okta integration, API keys, role mapping    | Document-level (DLS), field-level (FLS) security      | Custom middleware or role mappings for user context |

### Implementation Complexity

- **Kendra**: Simplest—automatic ACL ingestion and user context
- **Azure AI Search**: Moderate—requires user context in app layer
- **Elastic Cloud**: Complex—requires middleware and mapping logic

## Technical Capabilities Deep Dive

| **Feature**                  | **AWS Kendra**                    | **Azure AI Search**                      | **Elastic Cloud**                                        |
| ---------------------------- | --------------------------------- | ---------------------------------------- | -------------------------------------------------------- |
| **Semantic Search**          | Built-in ML/NLP understanding     | Via Azure OpenAI semantic search         | ELSER-based semantic search or vector embeddings         |
| **Natural Language Queries** | Native support                    | Requires RAG or Azure OpenAI integration | Via ML VCUs, ELSER, or hybrid retrieval pipelines        |
| **Answer Extraction**        | Built-in "exact answer" responses | Via Azure OpenAI “On Your Data”          | Via retriever-reader pipelines using embeddings or ELSER |
| **Query Suggestions**        | NLP-driven, content-aware         | Suggesters and semantic completions      | Keyword-based + NLP-driven via Inference API             |
| **Relevance Tuning**         | Built-in with feedback loops      | Semantic ranking, hybrid scoring         | Full scoring control, boosting, and hybrid ranking       |

### Content Processing and Indexing

| **Feature**             | **AWS Kendra**                         | **Azure AI Search**                                                      | **Elastic Cloud**                               |
| ----------------------- | -------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------- |
| **File Format Support** | Automatic optimization for all formats | Lucene-based with built-in skillsets                                     | Apache Tika via Ingest Attachment Processor     |
| **Content Extraction**  | Automatic, per-file optimization       | Built-in OCR, language detection, entity extraction via Cognitive Skills | Custom analyzers + NLP via ML VCUs              |
| **Metadata Handling**   | Automatic metadata extraction          | Configurable field mappings                                              | Full control + semantic embedding enrichment    |
| **Content Updates**     | Automatic incremental indexing         | Change detection or incremental reindex                                  | Real-time updates with semantic/vector indexing |

## Implementation Trade-offs and Considerations

### Development and Maintenance Overhead

| **Solution**        | **Pros**                                          | **Cons**                                        | **Best For**                                        |
| ------------------- | ------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------- |
| **AWS Kendra**      | Minimal setup, built-in AI, compliance-ready      | High cost at scale, less customization          | Teams prioritizing simplicity and integrated AI     |
| **Azure AI Search** | Balanced feature set, strong OpenAI tie-in        | Manual scaling/configuration, separate AI costs | Azure-centric orgs with moderate data and RAG goals |
| **Elastic Cloud**   | Maximum control, flexible NLP pipelines, low cost | Requires expertise, highest config complexity   | Technically mature orgs seeking full control        |

#### Elastic Cloud engineering requirements:

Index design and schema – We need to define fields, analyzers, tokenizers, and mappings for structured, unstructured, and semantic/vector content. Kendra and Azure handle most of this automatically or with prebuilt skillsets.

Ingestion pipelines – We must configure connectors, ETL pipelines, or custom scripts to pull data from various sources. Kendra has built-in connectors; Azure has indexers and skillsets.

Semantic/LLM integration – If we want RAG or embedding-based search, we must implement embedding generation, retriever/reader pipelines, or integrate with external models. Kendra and Azure provide native ML/AI support.

Relevance tuning – We have to define scoring, boosting, and hybrid ranking rules. Kendra provides ML-based ranking automatically; Azure gives semantic scoring with some prebuilt defaults.

Authentication/user filtering – Elastic requires middleware for user context and mapping DLS/FLS; Kendra automatically maps SSO/ACLs, Azure requires lighter custom work.

Scaling & operations – We need to manage node sizing, shard allocation, and tiered storage (hot/warm/cold) for large indices, while Kendra and Azure handle scaling automatically.

In practice, a small team could deploy Kendra or Azure in days or weeks for a functional enterprise search, whereas Elastic Cloud typically requires weeks to months for full-featured setup, especially for semantic/RAG workflows and enterprise-grade security and analytics.

### Security and Compliance

- **Kendra**: Built-in PII detection, audit logging, FedRAMP Moderate
- **Azure**: FedRAMP High, full Azure Security Center integration
- **Elastic Cloud**: FedRAMP Moderate (AWS GovCloud), full control via DLS/FLS

NOTE: Out of the box, these services do not persist or log user search terms. Retention occurs only if analytics or suggestions are explicitly enabled.

### Performance and Scalability

- **Kendra**: Auto-scaling, <300 ms latency for enterprise queries
- **Azure**: Configurable scaling; <50 ms for cached queries
- **Elastic Cloud**: Sub-100 ms hot-tier latency; customizable scaling and hybrid scoring optimization
