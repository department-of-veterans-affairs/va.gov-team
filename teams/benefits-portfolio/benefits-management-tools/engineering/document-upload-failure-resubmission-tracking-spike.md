## 📊 Spike Findings: Document Resubmission Tracking via Google Analytics (GA4)
## 🎯 Objective

Explore options for tracking how often Veterans attempt to resubmit documents after a failure, and determine whether Google Analytics (GA) alone can support this measurement or if backend metadata is required.

### 🧩 1. Feasibility of Measuring Resubmission Attempts Using GA

✅ Feasible via GA4 custom events and funnel analysis.

A minimal implementation can be done entirely on the frontend using the VA platform’s recordEvent() utility, which pushes events into the data layer and GA4.

| Event                                  | When Fired                      | Key Parameters                                                           |
| -------------------------------------- | ------------------------------- | ------------------------------------------------------------------------ |
| `document_upload_failed`               | When an upload attempt fails    | `doc_type`, `error_code`, `doc_instance_id`, `retry_count` (0)           |
| `document_resubmitted`                 | When user retries same doc type | `doc_type`, `error_code`, `doc_instance_id`, `retry_count` (incremented) |
| *(optional)* `document_upload_success` | When retry succeeds             | `doc_type`, `doc_instance_id`, `retry_count`                             |

Example Instrumentation
```
recordEvent({
  event: 'document_upload_failed',
  doc_type: docType,
  error_code: errorCode,
  doc_instance_id: crypto.randomUUID(),
  retry_count: 0,
});
```
```
recordEvent({
  event: 'document_resubmitted',
  doc_type: docType,
  error_code: errorCode,
  doc_instance_id,
  retry_count: retryCount + 1,
});
```

GA Configuration

- Add custom dimensions for doc_type, error_code, and retry_count.
- Define a GA4 funnel:
`document_upload_failed → document_resubmitted → document_upload_success`
- Segment results by document type and error code to identify retry trends.

### 🧠 2. Backend or File Metadata Requirements

Frontend-only tracking is sufficient for the MVP.
No backend dependency is required to measure retries within a single session.

When Backend May Add Value
| Use Case                                     | Why Backend Helps                | Priority    |
| -------------------------------------------- | -------------------------------- | ----------- |
| Cross-session retries (different day/device) | Link uploads over time           | Later phase |
| Verify successful final submission           | Confirm fixed errors             | Later phase |
| Complex deduplication or offline resubmits   | Match file metadata or claim IDs | Optional    |

For initial analytics, a frontend-only approach meets the spike goal.

| Approach                          | Description                                       | Pros                                                    | Cons                                                                          |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Average per Veteran per Error** | Avg. number of retries per Veteran per error type | - User-centered insight<br>- Highlights confusing flows | - Requires user-level identifiers (hashed ID)<br>- Slightly heavier GA config |
| **Total per Doc Type**            | Total resubmits per document type                 | - Simpler<br>- No user data needed                      | - Sensitive to submission volume<br>- Less insight into per-user friction     |

Recommendation:
Start with total per document type, then expand to per Veteran per error later if trends suggest deeper behavior analysis is needed.

### 🚀 4. Recommended Next Steps

1. **Frontend Instrumentation**
- Implement the above recordEvent calls in the CST upload component.
- Store a lightweight doc_instance_id only for failed uploads.
2. **Analytics Setup**
- Register new GA4 custom dimensions.
- Build a funnel in GA Explorations or request VFS Analytics support if needed.
3. **Evaluate Results**
- Measure retry rates and average attempts per doc type.
- Identify which error codes cause the most retries.
4. **Plan Phase 2 (if warranted)**
- Add backend correlation for cross-session or offline cases.
- Explore “average per Veteran per error” aggregation in BigQuery export.

### ⚠️ 5. Risks & Considerations
| Risk                         | Description                                                                      | Mitigation                                                             |
| ---------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **High event volume**        | Large numbers of retry/failure events could exceed GA thresholds or inflate cost | Limit redundant events and monitor frequency before production rollout |
| **Data privacy (PII)**       | File names and user IDs must not be sent to GA                                   | Use `doc_type` and generated `doc_instance_id` only (no filenames)     |
| **Interpretation ambiguity** | Multiple retries could be new attempts, not true resubmissions                   | Track unique `doc_instance_id` to correlate retries                    |
| **Cross-session behavior**   | GA session limits make it hard to connect retries after refresh or later logins  | Optional backend join or BigQuery export for deeper analysis           |
| **Schema drift**             | Inconsistent parameter names across apps can reduce report accuracy              | Confirm schema with VFS Analytics before implementation                |

### 6. Summary Table
| Requirement       | Finding / Recommendation                                        |
| ----------------- | --------------------------------------------------------------- |
| **Feasibility**   | ✅ Achievable with GA4 + `recordEvent()` (frontend only)         |
| **Backend Need**  | ❌ Not required for MVP; optional for cross-session validation   |
| **Metric Choice** | Start with total per doc type; expand later if needed           |
| **Next Steps**    | Implement FE events, define GA funnel, validate data in staging |
