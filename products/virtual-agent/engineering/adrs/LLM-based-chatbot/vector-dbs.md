# Architecture Decision Record: Vector Databases for a series of LLM based chatbot proof of concepts

## Status
In Review

## Context
We are building out 3 different Chatbot experimental implemenations of LLM. In order to retrieve information, we are going to use a vector database. The vector database stores documents (mostly the content of specific VA web pages)
and enables similarity search across the document embeddings. We need to select a vector database solution that is easy to use and has the capabilities for our POC requirements.

## Decision
We will use ChromaDB as the vector database for our RAG chatbot proof of concepts.

## Considered Options
1. **[ChromaDB](https://www.trychroma.com/)** - Open-source AI appication database
2. **[Weaviate](https://weaviate.io/)** - "AI native" vector database
3. **[Qdrant](https://qdrant.tech/)** - High performance vector search at scale
4. **[PostgreSQL with pgvector](https://github.com/pgvector/pgvector)** - PostgreSQL extension for vector similarity search

## Decision Criteria
- **Ease of Setup**: Time to initial deployment and configuration complexity
- **Development Speed**: API simplicity and documentation quality
- **POC Suitability**: Features appropriate for proof of concept vs production
- **Learning Curve**: Team familiarity and onboarding time
- **Integration Complexity**: Compatibility with existing tools and frameworks

## Pros and Cons of Options

### ChromaDB
**Pros:**
- Simple and intuitive API
- Minimal configuration required
- Great Python integration
- Built specifically for LLM applications
- In-memory mode for rapid prototyping
- Straightforward local development setup
- Good docs, RAG-specific examples

**Cons:**
- Limited production-scale features
- Fewer advanced query capabilities

### Weaviate
**Pros:**
- Mature, feature-rich
- GraphQL API support (not really needed for our work)
- Built-in vectorization modules
- Docs include docker, cloud, or embedded examples

**Cons:**
- Steeper learning curve
- More complex initial setup
- Requires more infrastructure knowledge, not as easy to self host
- Over-engineered for POC needs

### Qdrant
**Pros:**
- High performance
- Solid filtering capabilities
- Good scalability features
- RESTful API

**Cons:**
- Most docs seemed to point towards their managed service offerings
- More complex configuration
- Requires understanding of advanced vector search concepts
- Higher setup overhead for simple use cases, the qdrant client has a python persistent file setup, but it is only for rapid prototyping
- Requires hosted server seperate from main python app

### PostgreSQL with pgvector
**Pros:**
- Use existing dev's PostgreSQL knowledge
- PostgreSQL is mature
- SQL-based queries have been around forever
- Good for teams already using PostgreSQL

**Cons:**
- Requires PostgreSQL db server setup and maintenance 
- Extension installation and configuration needed
- Less specialized for embedding workflows
- May require more custom code for RAG patterns
- We aren't using PostgreSQL for any app data in our POCs so that is not a benefit

## Rationale
ChromaDB was selected because:

1. **Rapid Prototyping Focus**: ChromaDB's design aligns with our POC development, offering a quick path from idea to working prototype.

2. **Minimal Setup Overhead**: ChromaDB  was the easiest to set up, and uses a sqlite database under the hood, which was very easy to add to our Python api.

3. **Developer Experience**: API specifically designed for LLM applications, making common RAG patterns straightforward to implement and extra logic wasn't really needed for similarity search.

4. **Reduced Complexity**: For a POC, we don't need the advanced features of Weaviate or Qdrant. ChromaDb seems to fit the bill for features available.

5. **Learning Curve**: Python SDK for ChromaDB seemed the most straightforward.

## Consequences

### Positive
- Accelerated POC development timeline
- Lower barrier to entry for team members
- Simplified debugging and testing
- Focus remains on RAG functionality rather than infrastructure
- Easy local development and testing

### Negative
- May need to migrate to a different solution for production
- Limited exposure to production-grade vector database features
- Some advanced query patterns may require more code or workarounds

### Neutral
- Team gets experience with vector databases regardless. Many of the skills used to create any vector DB will translate to other products.
- POC can validate requirements before committing to a production solution or before spending money on hosted cloud solutions

## Future Considerations
- Document specific ChromaDB limitations encountered during POC
- Establish criteria for production vector database selection
- Plan for potential migration path if POC moves to production
- Consider running parallel evaluations of production candidates during later POC phases

---
*Date: June 13, 2025*  
*Author: Adam Whitlock*  
*Reviewers: Add your name here please!*
