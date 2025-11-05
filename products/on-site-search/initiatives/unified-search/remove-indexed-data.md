

Although all of the searchable data ends up in one Kendra index (and users experience it as one unified search corpus), deleting data depends on how it got into that index because Kendra treats each ingestion path differently under the hood.

The index is like a single “search brain.” But Kendra tracks metadata for each document, including which data source (web crawler, API ingestion, S3 connector, etc.) it came from. So removal methods vary by ingestion type.

| Ingestion Source | Connector Type | How to Remove Data |
| :------- | :------: | -------: |
| Resources & Support  | Web Crawler connector / Custom upload via `BatchPutDocument` | Remove/redact pages. Re-sync crawler or manually `BatchDeleteDocument` by DocumentId |
| Sitewide Search  | Web Crawler connector  | Remove/redact pages. Re-sync crawler or manually `BatchDeleteDocument` by DocumentId  |
| Find a Form Search | Custom upload via `BatchPutDocument` | `BatchDeleteDocument` by DocumentId | 

##

# Steps to Remove Indexed Data by Ingestion Type

## **Removal Procedure for data indexed with a Web Crawler**

1. Identify and Isolate the Affected Content

    - Locate the source URL(s) that contain the information to be removed.
    - Confirm that the URLs belong to a specific web-crawler data source (each crawler has a unique `dataSourceId` in Kendra).
    - Pause the crawler job to prevent it from re-ingesting content during cleanup.

2.  Remove or Redact Content at the Source

    - Ensure that `robots.txt` and inclusion/exclusion patterns will not re-expose those pages.

3. Delete or Re-Sync in Kendra

    - There are two safe options, depending on whether you can identify the document IDs.
    - Option 1 – Restart a full sync on the data source once the content is gone
      - Kendra compares the current crawl results with its stored fingerprint.
      - Pages that no longer exist are automatically purged from the index.

    - Option 2 – Manual Deletion (Targeted Removal)
      - Get the document IDs associated with the URLs (if you can identify the document IDs).
      - Delete them directly.

4.  Validate and Verify

    - Perform searches for unique terms from the removed pages.
    - Review CloudTrail logs confirming `BatchDeleteDocument` or sync completion events.
    - Keep an audit record of URLs.
    - Use `BatchGetDocumentStatus` to confirm that removed document IDs return a NOT_FOUND status.

##

## **Removal Procedure for data indexed with `BatchPutDocument`**

1.   Identify Documents to Delete
      - Every item uploaded via `BatchPutDocument` must include a unique `DocumentId` (e.g., the form number or UUID).
      - Identify which document IDs correspond to the data that should be purged (e.g., a deprecated form or form containing PII).

2.  Execute Targeted Deletion

    - Use the same API family (`DeleteDocument` / `BatchDeleteDocument`).

3.  Prevent Re-Ingestion

    - Because our ingestion job re-runs on a schedule:
      - Remove or update those records in the source feed so they aren’t re-indexed on the next run.
      - Optionally, maintain a “deletion registry” list that the ingestion pipeline consults before calling `BatchPutDocument`.

4.  Validate and Audit

    - Search for form names/numbers in the index to ensure zero results.
    - Log deletion events and Kendra responses in CloudWatch or a compliance log.
    - Use `BatchGetDocumentStatus` to confirm that removed document IDs return a NOT_FOUND status.

##

### Risk Assessment


Risk | Description | Mitigation
-- | -- | --
Incomplete Deletion | Some documents may persist if document IDs or URLs aren’t correctly identified. | Always verify with `BatchGetDocumentStatus` and search validation before closing the deletion task.
Re-Ingestion of Deleted Data | Crawlers or ingestion jobs may re-index removed content if sources aren’t updated. | Disable crawler syncs during cleanup and remove entries from source feeds before the next `BatchPutDocument` job.
Accidental Over-Deletion | Bulk deletion could remove valid content if IDs are misidentified. | Maintain a metadata snapshot or export before deletion and review by a second approver.
Residual Metadata | Query suggestions or analytics could expose prior search traces. | Keep “Query Suggestions” and “Query Analytics” features disabled to ensure no PII is stored.



