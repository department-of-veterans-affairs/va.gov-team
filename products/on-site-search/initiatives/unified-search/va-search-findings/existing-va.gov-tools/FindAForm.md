## ✅ Evaluation Summary – Find a Form Search

---

### 🔹 Entry Points

- Primary entry point is /find-forms with URL parameter support (?q=query) for direct linking to search results

#### Links to tool

- Site-wide search (Listed as one of the "More VA search tools" in the site-wide search results)
- Claims status application (link for users who need to find forms related to their claims)
- Form upload tool breadcrumb navigation
- 404 error page (helpful links)
- Footer navigation on VA.gov pages
- Many form applications (linking to specific form detail pages)

---

### 🔸 Behavior (Autocomplete, Filters, Ranking)

- No autocomplete/typeahead (explicitly disabled)
- Basic wildcard search with "OR" logic between keywords
- Limited to title and name fields only
- Sort options: Closest match (default), A–Z, Z–A, Newest, Oldest
- No filtering, no semantic search, no personalization

---

### ⚠️ Common Issues or Limitations

- 66% search abandonment rate (2024)
- 19% of searches return no results
- 75% of users fail to complete intended tasks
- High frequency of CORS/network errors in PDF validation
- No search result caching → latency on every query
- Relevance suffers due to limited search logic & metadata

---

### 👥 User Segments & Search Patterns

- **Veterans**: Disability, health care, appeals (e.g. 21-526EZ)
- **Caregivers**: Dependent forms, support authorizations
- **Service Members**: Enrollment, transition forms
- **Employees / VSO Reps**: Internal admin or client-facing support forms
- Searches include form numbers, keyword terms, or benefit categories

---

### 🤕 Known User Pain Points

- Mobile users face PDF compatibility issues
- Instructions for download often ignored
- PDF validation is fragile and unreliable
- Search results not useful without exact matches
- Accessibility gaps: screen reader bugs, poor focus management

---

### 🧩 CMS & System Integration

- Forms data flows: **Forms DB → Drupal CMS → Lighthouse API → vets-api → VA.gov frontend**
- Metadata is maintained externally (Drupal), not fully granular
- No live sync between CMS and search index

---

### 📚 Past Research & Findings

- Analytics: High search traffic but low goal conversion
- Sentry logs show frequent validation and latency issues
- PDF usability studies show widespread confusion with downloads

---

### 📈 Success Metrics & Evaluation Criteria

- Time to first relevant result (<3s target)
- Downloads per search
- Conversion to online applications
- Abandonment rate
- WCAG 2.1 AA accessibility compliance
- Refinement rate (31%), click-through (22%)

---

## Advantages

### Areas That Kendra Can Directly Serve or Improve

1. **Full-Text Search & Document Indexing**  
   Current Limitation: Title-only search; no full-content indexing  
   Kendra Capability: Supports deep, full-text indexing across multiple formats (HTML, Word, PDF, etc.)

2. **Semantic Search and Natural Language**  
   Current Limitation: Relies on close string matches for form names  
   Kendra Capability: Supports semantic search (understands “Join VA Health Program” = 10-10EZ)

3. **Predictive Search / Typeahead**  
   Current Limitation: No auto-complete or spelling correction  
   Kendra Capability: Provides predictive suggestions from indexed content, titles, and authors. Reduces search abandonment.

4. **Search Contextualization**  
   Current Limitation: Basic file names with limited context  
   Kendra Capability: Displays rich snippets and metadata

5. **Personalized / Authenticated Search**  
   Current Limitation: All users see the same results regardless of role  
   Kendra Capability: Built-in user context filtering using ACLs and identity systems (e.g., AWS SSO)

6. **Scalability**  
   Kendra Capability: Scales with growing content volume and supports legacy migrations

---

## Concerns

1. **Metadata and Tagging Quality**  
   Concern: Forms metadata may be inconsistent, which could limit filtering effectiveness

   - Will tagging/taxonomy improvements be prioritized?
   - Is there an editorial workflow to ensure metadata consistency?

2. **Cost considerations at scale**  
   Concern: High search volume combined with a high abandonment rate could drive up Kendra costs.

   - Query performance
   - Accuracy improvement
   - Monthly cost at pilot scale

3. **PII Handling and Compliance**  
   Concern: Compliance with HIPAA, VA, and federal data security standards is mandatory
   - How to ensure query logs are sanitized and secure?
   - AWS Comprehend offers PII redaction solution https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html
