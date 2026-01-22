### Administration

- Kendra supports role-based access control (RBAC) through AWS Identity & Access Management (IAM) policies. Administrators can apply the principle of least privilege to manage which users/roles can perform which operations. ([AWS Documentation][1])
- Managed policies such as `AmazonKendraReadOnly` and `AmazonKendraFullAccess` simplify granting appropriate permissions to administrators vs. read-only users. ([AWS Documentation][2])
- It supports integration with identity providers and SSO via the “Experience Builder” workflows, enabling administrators to manage search applications and user access through familiar identity infrastructure. ([Amazon Web Services, Inc.][3])
- For content ingestion and indexing, Kendra provides detailed document-sync status reporting (crawl, sync, index) at a granular (document-level) level, enabling administrators to observe and troubleshoot ingestion pipelines. ([Amazon Web Services, Inc.][4])

### Reporting & Analytics

- Kendra provides a “Search Analytics Dashboard” that gives administrators and content owners visibility into how users are interacting with search: query trends, result relevance, gaps in content, etc. ([Amazon Web Services, Inc.][5])
- The document-level sync reporting gives visibility into which documents succeeded/failed/skipped during ingestion, metadata, ACLs, timestamps — helping admins monitor indexing health and troubleshoot. ([Amazon Web Services, Inc.][4])
- The ability to integrate analytics data via APIs supports custom dashboards and deeper analytics beyond the built-in visuals. ([Amazon Web Services, Inc.][5])

---

## Limitations

- Although the admin/permission model is robust, setting up fine-grained access may still require careful IAM policy configuration. Misconfiguration could lead to overly broad access. ([AWS Documentation][1])
- The “Search Analytics Dashboard” is more focused on search-usage metrics (e.g., queries, click-throughs) rather than full enterprise reporting (financials, user-behaviour over time) — so if you need rich BI-style reports you may have to build them yourself via APIs and external tools.
- While document-level sync reporting is powerful, it may require familiarity with log streams (CloudWatch) and log-insight queries to get full value. Administrators should be prepared for somewhat technical instrumentation. ([Amazon Web Services, Inc.][4])
- As with many search/indexing systems, the quality of the reports / analytics is only as good as the ingestion, metadata tagging and relevance tuning behind the scenes. Without good metadata, tagging and relevance configuration, reporting insights may be limited.

---

## Summary

- On admin side, strong access control, ingestion visibility, and integration with AWS identity/roles.
- On the reporting side, built-in dashboards for search analytics and detailed ingestion/troubleshooting logs.

[1]: https://docs.aws.amazon.com/kendra/latest/dg/security-best-practices.html 'Security best practices - Amazon Kendra'
[2]: https://docs.aws.amazon.com/kendra/latest/dg/security-iam-awsmanpol.html 'AWS managed policies for Amazon Kendra - Amazon Kendra'
[3]: https://aws.amazon.com/about-aws/whats-new/2021/12/amazon-kendra-experience-builder-search-analytics-dashboard-custom-document-enrichment 'Amazon Kendra launches Experience Builder, Search Analytics Dashboard, and Custom Document Enrichment - AWS'

[4]: https://aws.amazon.com/blogs/machine-learning/introducing-document-level-sync-reports-enhanced-data-sync-visibility-in-amazon-kendra'Introducing document-level sync reports: Enhanced data sync visibility in Amazon Kendra | Artificial Intelligence'
[5]: https://aws.amazon.com/kendra/features 'Amazon Kendra Features - Amazon Web Services'
