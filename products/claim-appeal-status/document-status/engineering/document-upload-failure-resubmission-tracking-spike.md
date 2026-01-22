# 📊 Spike Findings: Document Resubmission Tracking via Google Analytics (GA4)

## 🎯 Objective

Explore options for tracking how often Veterans attempt to resubmit documents after a failure, and determine whether Google Analytics (GA) alone can support this measurement or if backend metadata is required.

## 🔍 Current State

**The Claims Status Tool already has basic GA event tracking** in place using the platform's `recordEvent()` utility:

```javascript
recordEvent({
  event: 'claims-upload-failure',
});
```

**Existing events tracked:**
- `claims-upload-start` (line 370-372)
- `claims-upload-success` (line 410-412)
- `claims-upload-failure` (line 479-481)
- `claims-upload-cancel` (line 629-631)

**Available data at failure time:**
- Document type via `error.docType` (when `showDocumentUploadStatus` is enabled, line 536-544)
- Error details via `error.errors?.[0]?.detail` (e.g., 'DOC_UPLOAD_DUPLICATE', line 106-107)
- File name via `error.fileName` (line 528)
- HTTP status code (line 520)

## 🧩 1. Feasibility of Measuring Resubmission Attempts Using GA

✅ **Feasible via enhancing existing GA4 events** with additional parameters for funnel analysis.

We can **extend the existing tracking** by enriching the `claims-upload-failure` event with retry-specific metadata and adding a new `document_resubmitted` event.

### Proposed Enhanced Events

| Event                                  | When Fired                      | Key Parameters                                                           | Status      |
| -------------------------------------- | ------------------------------- | ------------------------------------------------------------------------ | ----------- |
| `claims-upload-start`                  | When upload begins              | *(existing, no changes needed)*                                          | ✅ Exists    |
| `claims-upload-failure` **(enhanced)** | When an upload attempt fails    | `doc_type`, `error_code`, `doc_instance_id`, `retry_count` (0)           | 🔧 Enhance   |
| `document_resubmitted` **(new)**       | When user retries same doc type | `doc_type`, `error_code`, `doc_instance_id`, `retry_count` (incremented) | ➕ Add new   |
| `claims-upload-success`                | When upload succeeds            | *(existing, optionally add retry metadata)*                              | ✅ Exists    |
| `claims-upload-cancel`                 | When user cancels upload        | *(existing, no changes needed)*                                          | ✅ Exists    |

### Example Implementation (Building on Existing Code)

**Enhance the existing failure event (around line 479-481):**

```javascript
recordEvent({
  event: 'claims-upload-failure',
  doc_type: errorFiles[0]?.docType || 'Unknown',
  error_code: errorFiles[0]?.errors?.[0]?.detail || 'UNKNOWN_ERROR',
  doc_instance_id: crypto.randomUUID(),
  retry_count: 0,
});
```

**Add new resubmission event** (when user retries after a failure):

```javascript
recordEvent({
  event: 'document_resubmitted',
  doc_type: docType,
  error_code: previousErrorCode,
  doc_instance_id: previousDocInstanceId,
  retry_count: retryCount + 1,
});
```

### GA Configuration

- Add custom dimensions for `doc_type`, `error_code`, and `retry_count`.
- Define a GA4 funnel:
  `claims-upload-failure → document_resubmitted → claims-upload-success`
- Segment results by document type and error code to identify retry trends.

## 🧠 2. Backend or File Metadata Requirements

**Frontend-only tracking is sufficient for the MVP.**

No backend dependency is required to measure retries within a single session.

### When Backend May Add Value

| Use Case                                     | Why Backend Helps                | Priority    |
| -------------------------------------------- | -------------------------------- | ----------- |
| Cross-session retries (different day/device) | Link uploads over time           | Later phase |
| Verify successful final submission           | Confirm fixed errors             | Later phase |
| Complex deduplication or offline resubmits   | Match file metadata or claim IDs | Optional    |

For initial analytics, **enhancing the existing frontend events** meets the spike goal.

## 📏 Metric Recommendation

| Approach                          | Description                                       | Pros                                                    | Cons                                                                          |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Average per Veteran per Error** | Avg. number of retries per Veteran per error type | - User-centered insight<br>- Highlights confusing flows | - Requires user-level identifiers (hashed ID)<br>- Slightly heavier GA config |
| **Total per Doc Type**            | Total resubmits per document type                 | - Simpler<br>- No user data needed                      | - Sensitive to submission volume<br>- Less insight into per-user friction     |

**Recommendation:**
Start with **total per document type**, then expand to per Veteran per error later if trends suggest deeper behavior analysis is needed.

## 3. Handling Page Reloads

A page reload can clear local state such as `retry_count` or `doc_instance_id`.

We can persist minimal retry data client-side with `sessionStorage` so the retry context survives reloads for the same session, without storing PII.

### Example Implementation

**On failure (enhance existing code around line 479-481):**

```javascript
const key = `cst:${claimId}:${docType}:failedInstance`;
const failedInstance = {
  doc_instance_id: crypto.randomUUID(),
  retry_count: 0,
  error_code: errorFiles[0]?.errors?.[0]?.detail || 'UNKNOWN_ERROR',
  failed_at: Date.now(),
};
sessionStorage.setItem(key, JSON.stringify(failedInstance));

recordEvent({
  event: 'claims-upload-failure',
  doc_type: docType,
  error_code: failedInstance.error_code,
  doc_instance_id: failedInstance.doc_instance_id,
  retry_count: failedInstance.retry_count,
});
```

**On page reload:**

```javascript
function loadFailedInstance(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const inst = JSON.parse(raw);
    // optional expiry
    const TTL = 2 * 60 * 60 * 1000; // 2 hours
    if (Date.now() - (inst.failed_at || 0) > TTL) {
      sessionStorage.removeItem(key);
      return null;
    }
    return inst;
  } catch {
    sessionStorage.removeItem(key);
    return null;
  }
}
```

**On retry (new event):**

```javascript
const inst = loadFailedInstance(key);
if (inst) {
  inst.retry_count += 1;
  sessionStorage.setItem(key, JSON.stringify(inst));
  recordEvent({
    event: 'document_resubmitted',
    doc_type: docType,
    error_code: inst.error_code,
    doc_instance_id: inst.doc_instance_id,
    retry_count: inst.retry_count,
    time_since_error: inst.failed_at
      ? Math.round((Date.now() - inst.failed_at) / 1000)
      : undefined,
  });
}
```

**On success (optionally enhance existing event around line 410-412):**

```javascript
const inst = loadFailedInstance(key);
recordEvent({
  event: 'claims-upload-success',
  doc_instance_id: inst?.doc_instance_id,
  retry_count: inst?.retry_count || 0,
});
if (inst) {
  sessionStorage.removeItem(key);
}
```

### Summary

- Use `sessionStorage` to retain failure context across reloads.
- Store only generated IDs and counts (no file names or user data).
- Optional: Expire after a set time (e.g., 2 hours).
- Clear data when the user successfully resubmits or uploads a new document.

## 🚀 4. Recommended Next Steps

1. **Frontend Instrumentation**
   - Enhance the existing `claims-upload-failure` event (line 479-481) with retry metadata
   - Add the new `document_resubmitted` event when users retry after failure
   - Optionally enhance `claims-upload-success` (line 410-412) with retry count
   - Implement `sessionStorage` persistence for cross-reload tracking

2. **Analytics Setup**
   - Register new GA4 custom dimensions (`doc_type`, `error_code`, `retry_count`)
   - Build a funnel in GA Explorations or request VFS Analytics support if needed

3. **Evaluate Results**
   - Measure retry rates and average attempts per doc type
   - Identify which error codes cause the most retries

4. **Plan Phase 2 (if warranted)**
   - Add backend correlation for cross-session or offline cases
   - Explore "average per Veteran per error" aggregation in BigQuery export

## ⚠️ 5. Risks & Considerations

| Risk                         | Description                                                                      | Mitigation                                                             |
| ---------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **High event volume**        | Large numbers of retry/failure events could exceed GA thresholds or inflate cost | Limit redundant events and monitor frequency before production rollout |
| **Data privacy (PII)**       | File names and user IDs must not be sent to GA                                   | Use `doc_type` and generated `doc_instance_id` only (no filenames)     |
| **Interpretation ambiguity** | Multiple retries could be new attempts, not true resubmissions                   | Track unique `doc_instance_id` to correlate retries                    |
| **Cross-session behavior**   | GA session limits make it hard to connect retries after refresh or later logins  | Optional backend join or BigQuery export for deeper analysis           |
| **Schema drift**             | Inconsistent parameter names across apps can reduce report accuracy              | Confirm schema with VFS Analytics before implementation                |

## 6. Summary Table

| Requirement       | Finding / Recommendation                                                    |
| ----------------- | --------------------------------------------------------------------------- |
| **Current State** | ✅ Basic GA tracking exists; `recordEvent()` already imported and in use     |
| **Feasibility**   | ✅ Achievable by enhancing existing events with retry metadata               |
| **Backend Need**  | ❌ Not required for MVP; optional for cross-session validation               |
| **Metric Choice** | Start with total per doc type; expand later if needed                       |
| **Next Steps**    | Enhance existing `claims-upload-failure` event, add `document_resubmitted`  |

## 🔗 Code References

**Existing GA tracking implementation:**
- `recordEvent` import: [line 4](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L4)
- Upload start event: [lines 370-372](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L370-L372)
- Upload success event: [lines 410-412](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L410-L412)
- Upload failure event: [**lines 479-481**](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L479-L481) ← *Enhancement target*
- Upload cancel event: [lines 629-631](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L629-L631)
- Error data collection: [lines 520-550](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L520-L550)
