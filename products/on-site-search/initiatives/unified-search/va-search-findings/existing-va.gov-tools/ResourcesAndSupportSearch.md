## Resources and Support Search Landscape

The Resources and Support search tool offers a dual-mode search interface, allowing users to search either within "Resources and Support" articles or across "All VA.gov". Users enter keywords, phrases, or questions (minimum one character required). On page load, the tool reads query parameters from the URL—redirecting to /resources/ if no query is found or executing a search if a query is present.

## User Requirements

“Resources and Support was designed to provide a home for Tier 2 content which directly supports a Veteran, service member, or family member in discovering, applying for, tracking, managing, or using a VA benefit or service.”

The tool supports two search paths: an in-app (local) search and a redirect (global) search. It uses client-side filtering (useArticleData and custom logic in useGetSearchResults.js) and keeps the URL in sync to support bookmarking and sharing of results. Search results are ranked based on relevance using scoring.

As of September 2024, Resources and Support includes 137 articles. Approximately 50% of Benefit Hub content is expected to migrate here. Ongoing content migration will continue to grow this library.

## Search Behavior & Features

### Search Algorithm & Ranking

Order: exact match → title → intro/content → alphabetical  
Filters stop words (e.g., a, the, and)  
Handles pluralization (e.g., removing s, ies)

### Content Types & Filtering

Supported types: Q&A, Checklist, Images, Videos, About, Step-by-step, Multi-FAQ  
Intro text truncated to 190 characters max  
Title keyword match supports prefix matching only  
Drupal CMS Integration: Various content types for a targeted, self-serve experience.

## Search Modes & Navigation

Toggle between local ("Resources and Support") and global ("All VA.gov") search  
Global search redirects; local remains in-app  
Input must be ≥1 character; duplicate searches blocked  
Search.gov Integration: Supports both legacy and GSA APIs via feature flags.

## Key Questions or Gaps

**Search:** Current implementation limits search to titles only. A broader evaluation is needed for site-wide improvement.  
**Tagging:** Tagging is inconsistent, not filterable or interactive. Tags (benefit, topic, audience) are optional in the CMS.  
**Accessibility & UX:** May 2024 audit found issues. Browsing is difficult due to incomplete, manually organized topic lists.  
**Editorial & Content Management:** Tagging lacks enforced structure. Scaling issues expected with incoming Benefit Hub content.  
**Future Expansion:** Content growth (e.g., health, non-beneficiary info) not well supported by current structure or tooling.

## User Research & Testing

Usability testing (prototype phase) will focus on validating filters and taxonomy with Veterans.

## Feedback Collection

Simplified Good/Bad rating success message  
Post-rating Medallia survey aimed at capturing actionable qualitative feedback

## CMS Integration

### Content Types Used

Content is stored in Drupal CMS using 7 types, most commonly: FAQs, detailed resource pages, Q&A content, step-by-step guides, checklists, and media (images, videos).

### Organizational Challenges

Tagging is optional and inconsistent. The available tag set is incomplete, and content organization is largely manual.

## User Segments & Needs

**Veterans:** Discover/apply for benefits, claim status, healthcare, education  
**Service Members:** Transition planning, benefit navigation pre-discharge  
**Family Members:** Survivor benefits, healthcare, education  
**Caregivers:** Respite care, financial support  
**Non-Beneficiaries:** Informational support, education, other agency resources

## Research & Metrics

**Planned Research:** Filter/taxonomy testing in prototypes  
**Baseline Metrics:** CSAT, traffic, pageviews  
**Monthly Ratings:** Found in unauthenticated metrics folder  
**Qualitative Surveys:** Ongoing review by CAIA

---

## Advantages

### Areas That Kendra Can Directly Serve or Improve

1. **Full-Text Search & Document Indexing**  
   Current Limitation: Title-only search; no full-content indexing  
   Kendra Capability: Supports deep, full-text indexing across multiple formats (HTML, Word, PDF, etc.)

2. **Faceted Filtering**  
   Current Limitation: Inconsistent or incomplete filtering by tags; CMS tags are optional  
   Kendra Capability: Supports faceted filtering by document attributes, including custom metadata (content type, author, date), with hierarchical facets

3. **Predictive Search / Typeahead**  
   Current Limitation: Autocomplete/typeahead is not implemented; analytics flag indicates it’s disabled  
   Kendra Capability: Provides predictive suggestions from indexed content, titles, and authors

4. **Search Contextualization**  
   Current Limitation: Basic keyword ranking; lacks rich snippet preview  
   Kendra Capability: Returns contextually relevant passages/snippets with highlights

5. **Personalized / Authenticated Search**  
   Current Limitation: No personalization or access control mentioned  
   Kendra Capability: Built-in user context filtering using ACLs and identity systems (e.g., AWS SSO)

6. **Scalability**  
   Kendra Capability: Scales with growing content volume and supports legacy migrations

---

## Concerns

1. **Metadata and Tagging Quality**  
   Concern: Inconsistent/incomplete metadata may limit filtering and require significant taxonomy improvements  
   Key Questions:

   - Will tagging/taxonomy improvements be prioritized?
   - Is there an editorial workflow to ensure metadata consistency?

2. **Security and Access Control**  
   Concern: Kendra must enforce strict, granular access control for sensitive VA data  
   Key Questions:

   - How will Kendra integrate with VA’s auth systems?

3. **PII Handling and Compliance**  
   Concern: Compliance with HIPAA, VA, and federal data security standards is mandatory  
   Key Questions:

   - Are query logs sanitized and secure?
   - What are the retention and data lifecycle policies?
   - Custom redaction/filtering to prevent PII exposure?
   - Query-time access control, logging, auditability
   - Policies for data retention, purging, and anonymization

4. **PDF Handling and Validation**  
   Concern: Kendra lacks PDF validation/rendering capabilities; must integrate with VA’s workflows  
   Key Questions:

   - How will PDF delivery and validation integrate?
   - Could this introduce latency?

5. **Data Freshness and Sync Latency**  
   Concern: Kendra doesn’t support real-time indexing; batch syncs (~3.5 hours) can create stale data. Incremental syncs and ETL pipelines may add complexity.  
   Key Questions:
   - How will dynamic content stay current?
   - Who is responsible for sync maintenance?
