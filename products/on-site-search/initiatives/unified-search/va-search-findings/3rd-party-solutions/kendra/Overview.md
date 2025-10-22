# VA Search Findings Summary and Kendra Overview

## Amazon Kendra Overview

Amazon Kendra is a machine learning-powered search service that provides intelligent search capabilities across various document types and formats. Unlike traditional keyword-based search engines, Kendra uses natural language processing and machine learning to understand user intent and deliver more relevant results. The service supports full-text indexing across multiple formats including HTML, Word, PDF, and other document types, making it particularly well-suited for enterprise search applications.

Kendra's key capabilities include semantic search that understands context and meaning beyond exact keyword matches, predictive search with typeahead functionality, faceted filtering by document attributes, and built-in support for user context filtering through access control lists (ACLs). The service also provides rich snippets and metadata display, making search results more informative and actionable for users.

## Current VA Search Landscape Analysis

### Find a Form Search

The current Find a Form search tool faces significant usability challenges with a 66% search abandonment rate and 19% of searches returning no results. The system is limited to basic wildcard search with "OR" logic between keywords, searching only title and name fields. This creates substantial friction for users who need to find specific forms, particularly when they don't know the exact form number or title.

The tool serves multiple user segments including Veterans seeking disability and healthcare forms, caregivers looking for dependent forms, service members needing enrollment documents, and VA employees or VSO representatives requiring administrative forms. However, the current implementation's limitations in search logic and metadata significantly impact relevance and user success rates.

### Resources and Support Search

The Resources and Support search tool offers a dual-mode interface allowing users to search within "Resources and Support" articles or across "All VA.gov." The current implementation uses client-side filtering with basic relevance scoring based on exact matches, title matches, and content matches. However, the system is limited to title-only search, which restricts the discoverability of relevant content.

The tool currently contains 137 articles with expectations that approximately 50% of Benefit Hub content will migrate to this platform. Content is managed through Drupal CMS using seven different content types, but tagging is optional and inconsistent, creating organizational challenges that limit filtering effectiveness.

### Facility Locator

The Facility Locator serves as VA's single source of truth for finding facilities across VHA, VBA, and NCA, but faces significant usability and performance challenges. The current system forces Veterans to choose facility types upfront, which assumes they understand VA's organizational structure and that services are only available at specific facility types. This creates friction as Veterans prefer searching by service rather than facility type.

Key performance issues include significant latency (average page load time of 4.01 seconds), particularly for community care searches, and data accuracy problems with community care providers. The system suffers from incorrect facility information, outdated contact numbers, and facilities listed as accepting VA benefits when they don't. Search functionality limitations result in users receiving "extremely unrelated results" and requiring multiple searches to find relevant facilities.

User research shows that Veterans search by specific service and distance when choosing locations, with rural Veterans expecting 2-3 results and urban Veterans expecting around 5 locations. The current facility-centric search model doesn't align with Veterans' service-based mental models, and the system lacks effective pagination and map-list interaction features that users expect.

## Kendra Implementation Advantages

### Enhanced Search Capabilities

Kendra addresses the primary limitations of current VA search tools by providing full-text search across document content rather than just titles. This capability would significantly improve the Find a Form search experience, allowing users to find forms based on descriptions, instructions, or related keywords rather than requiring exact form numbers or titles.

The semantic search functionality would enable natural language queries, allowing users to search for concepts like "disability compensation" and receive relevant results even when those exact terms don't appear in form titles. This addresses the current high abandonment rates by making search more intuitive and forgiving of user terminology variations.

### Improved User Experience

Kendra's predictive search and typeahead functionality would reduce search abandonment by providing real-time suggestions as users type. This addresses a current gap in both Find a Form and Resources and Support search tools, where no autocomplete functionality exists.

The service's ability to provide rich snippets and contextual information would enhance result presentation, giving users more information to make informed decisions about which forms or resources to access. This is particularly valuable for the Resources and Support content, where users need to understand the relevance and scope of articles before clicking through.

## Cost Considerations

### Storage and Query Costs

The authenticated cost analysis reveals significant financial implications for implementing Kendra at scale. For benefits claims alone, indexing all 117 million documents would cost approximately $589,680 per month. However, a more practical approach of indexing only recent claims (one year of data, approximately 840,000 claims) would cost $4,536 per month, while five years of data would cost approximately $23,000 per month.

The unauthenticated experience is more cost-friendly, at around $8500/month.

These costs should be weighed against the potential benefits of improved search functionality and reduced user frustration. The high abandonment rates and poor task completion rates in current search tools suggest that improved search capabilities could significantly enhance user satisfaction and reduce support burden.

### Query Volume Impact

The cost structure is based on both storage and query volume, meaning that high search traffic combined with current abandonment rates could drive costs higher. However, improved search relevance and user experience could potentially reduce the number of searches needed per user task, potentially offsetting some cost increases.

## Recommendations for Non-Authenticated Search Implementation

### Phased Rollout Strategy

For non-authenticated search scenarios, our team might consider a pilot implementation focusing on the more problematic search areas. For example, we might begin with Find a Form search, which has high abandonment rates and most significant user pain points. This targeted approach allows for cost control while demonstrating value.

Success metrics should focus on reducing abandonment rates, improving task completion rates, and increasing user satisfaction scores.

### Content Prioritization

Given cost constraints, prioritize indexing the most frequently accessed and most problematic content first. For forms, focus on the top 20% of most-searched forms and ensure comprehensive metadata tagging. For Resources and Support, prioritize content that currently has poor search performance.

Define a content lifecycle management strategy that automatically removes or archives older, less-relevant content to maintain cost efficiency while preserving search quality.

### Integration and Migration Planning

Develop a comprehensive integration plan that maintains current functionality while gradually introducing Kendra capabilities. This includes maintaining existing URL structures and search parameters to ensure seamless user experience during transition.

Plan for gradual migration of search functionality, starting with enhanced search capabilities while maintaining current result presentation until user acceptance is validated.

## Recommendations for Authenticated Search Implementation

### User Context and Access Control

The authenticated search proof of concept demonstrates Kendra's capability to filter results based on user identity using Principal objects and user context filtering. This enables personalized search experiences where users only see content relevant to their specific circumstances.

For VA implementation, use the user's ICN (Individual Control Number) or a derived identifier as the username parameter in Kendra queries. This ensures that users see only their own benefits claims, personal documents, and relevant content while maintaining privacy and security.

### Security and Compliance Considerations

Implement comprehensive access control using Kendra's Principal objects to define document visibility rules. Each private document should be associated with specific user identifiers, ensuring that sensitive information remains protected while enabling personalized search experiences.

Develop audit logging and monitoring capabilities to track search queries and ensure compliance with VA security requirements. Implement PII redaction capabilities using AWS Comprehend to sanitize query logs and prevent sensitive information exposure.

### Benefits Claims Integration

The authenticated search capability is particularly valuable for benefits claims, where users need to search through their personal claim history. Implement search functionality that allows users to find specific claims, track claim status, and access related documentation through natural language queries.

This addresses a significant gap in current VA systems where users often struggle to locate specific claims or understand their status. The semantic search capabilities would allow users to search for concepts like "disability claim from 2023" or "appeal status" and receive relevant results.

### Cost-Benefit Analysis for Authenticated Search

While authenticated search adds complexity and potentially higher costs due to the need for user-specific indexing, the benefits include reduced support burden, improved user satisfaction, and better self-service capabilities. The ability for users to quickly find their own information reduces the need for customer service interactions.

Consider implementing a hybrid approach where frequently accessed personal content is indexed with full search capabilities, while less frequently accessed content uses simpler retrieval methods. This balances functionality with cost efficiency.
