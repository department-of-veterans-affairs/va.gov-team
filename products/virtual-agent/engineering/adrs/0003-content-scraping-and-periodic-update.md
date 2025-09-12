# Discovery Solutions Document: Automated Content Re-scraping for Sign-in Support URLs

## Overview

This doc outlines the discovery work and solutions found for implementing a system/workflow to re-scrape sign-in support URLs and update content when changes are detected. We want this solution to be able to not only work for sign in content, but to be adaptable for when we are ready to bring in multiple agents or skill subject matter.

## Definition of Done

We have come up with a solution to re-scrape the sign in support urls and update the content when it has changed. The solution is flexible enough to be used with other content urls.

## Key Questions and Answers

### 1. Using robots.txt and Sitemaps for URLs and lastmod info

**Question:** Can we use the robots.txt to scrape the urls? The Sitemaps include xml tags for date updated so those could be assumed as ways to check the content for updates.

**Answer:** Yes, this approach is viable and recommended**

- We can extract sitemap URLs from robots.txt files
- The `lastmod` property in sitemaps provides a reliable date (just not time)
- **Validation:** Content IA team and CMS team have confirmed that the `lastmod` property can be treated as the source of truth. Slack convo: https://dsva.slack.com/archives/CDHBKAL9W/p1757691077331279
- **Implementation References that were found for sitemap generation logic:**
    - Legacy content-build: [create-sitemaps.js](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/plugins/create-sitemaps.js)
    - Next-build: [create-sitemaps.js](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/plugins/create-sitemaps.js)

### 2. Automation Strategy

**Question:** What is the best way to automate this process? Cron job to trigger some sort of server side script or serverless function?

**Solution:** **GitHub Workflows with Scheduled Triggers**

- **Primary Approach:** GitHub workflows with scheduled triggers (cron-based)
- **Integration:** Combine with existing indexing, embedding, and deployment workflows for Azure services
- **Implementation:** Python scripts executed within GitHub workflows to handle scraping and blob storage uploads
- **Current state:** [PR #2572](https://github.com/department-of-veterans-affairs/va-virtual-agent/pull/2572) demonstrates the proposed workflow structure for scraping and uploading to blob storage. Sitemap parsing and new content detection is not present in this PR.

**Benefits:**

- Leverages existing CI/CD and the env vars that are already accessible within github workflows
- Provides audit trails and logging through GitHub Actions
- Cost-effective and simpler when compared to serverless functions

### 3. Update Frequency Recommendations

**Question:** How often should this content be checked? Daily, Hourly, etc?

**Solution:** **Daily to Weekly Cadence**

**Recommended Frequency:** Daily or weekly, depending on content freshness requirements. The sitemap lastmod only includes a date and no time, so hourly checks would not be effective

**Context:**

- **vets-website:** Daily deployments (unless an app is in continuous deployment setup)
- **content-build:** Hourly deployments
- **Cost Considerations:** Each execution involves GitHub workflows, blob storage uploads, and Azure resource updates
- **Current Scope:** Costs are relatively minor for sign-in content specifically
- **Future Planning:** Cost analysis for scaled usage should be conducted once the sign-in skill POC is deployed to dev and staging environments via the new workflow

**Recommendation:** Start with daily checks probably around midnight to minimize any impact on high traffic times of day

### 4. Content Update Process

**Question:** What is the best process for updating content, embeddings, and related metadata in Azure AI Search service?

**Solution:** **Integrated GitHub Workflow Pipeline**

**Process Flow:**

1. **Content Scraping:** Python scripts extract updated content based on sitemap timestamps
2. **Blob Storage Upload:** New content uploaded to Azure Blob Storage
3. **Search Index Setup:** Configure and update Azure AI Search indexes
4. **Content Embedding:** Generate and update embeddings in the search index (Needs to be implemented still)
5. **Metadata Updates:** Update associated metadata in Azure services (Will be part of the workflow that does embedding)

**Implementation:**

- All steps orchestrated through GitHub workflows and actions
- Maintains consistency with existing deployment patterns
- Provides rollback capabilities and change tracking
- Can use the data quality checks as the final step to ensure nothing goes wrong during the whole workflow pipeline

## Assumptions

 **Validated Assumptions:**

1. **Sitemap Reliability:** We can consistently get URL information from sitemaps
2. **Timestamp-based Updates:** Content should only be updated if the sitemap has a newer timestamp for the URL than the content in our database

Both assumptions have been validated through stakeholder consultation and code analysis.

## Potential Next Steps

1. **Review and approve** the preliminary PR #2572
2. **Finalize** the GitHub workflow implementation
3. **Establish** monitoring and cost tracking for the automated process
4. **Plan** deployment to development and staging environments
5. **Conduct** cost analysis once POC is fully deployed via workflow

## Risk Considerations

- **Cost Management:** Monitor Azure resource consumption during scaled operations
- **Content Accuracy:** Ensure lastmod timestamps remain reliable as CMS evolves
- **Workflow Reliability:** Implement proper error handling and retry mechanisms
- **Rate Limiting:** Respect website scraping best practices and any rate limits. This shouldn't be an issue since va.gov is mostly served via static assets in S3 storage, but is worth monitoring or keeping in mind for scraping workflows.
