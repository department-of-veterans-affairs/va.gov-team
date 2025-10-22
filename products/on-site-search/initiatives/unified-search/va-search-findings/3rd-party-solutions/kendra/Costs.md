## **1. Storage Cost Estimates**

| **Scenario**                          | **Documents Indexed** | **Storage Units Needed** | **Cost per Unit** | **Estimated Cost**                      |
| ------------------------------------- | --------------------- | ------------------------ | ----------------- | --------------------------------------- |
| **Full Indexing (Benefits Claims)**   | 117,000,000           | 1,170                    | $0.70/hr          | $819/hr → $19,656/day → $589,680/month  |
| **1-Year Subset**                     | 840,000               | 9                        | $0.70/hr          | $6.30/hr → $151.20/day → $4,536/month   |
| **5-Year Subset**                     | 4,200,000             | 42                       | $0.70/hr          | ~$29.40/hr → ~$705/day → ~$23,000/month |
| **Unauthenticated Search (Sitewide)** | 500,000               | 5                        | $0.70/hr          | $3.50/hr → $84/day → ~$2,500/month      |
| **Unauthenticated Search (Other)**    | 1,881                 | <1                       | $0.70/hr          | <$0.70/hr → ~$17/day → ~$510/month      |

**Notes:**

- One storage unit holds 100,000 documents.
- Storage cost is by the hour per unit, multiplied out for daily and monthly estimates.
- Storage is the main lever for cost reduction: limiting the number of documents indexed dramatically reduces monthly spend.

---

## **2. Query Capacity Estimates**

| **Category**               | **Average Query Volume**                                          | **Query Units Needed** | **Kendra Default Capacity**            |
| -------------------------- | ----------------------------------------------------------------- | ---------------------- | -------------------------------------- |
| **Unauthenticated Search** | ~2,035,738 queries/month → ~1.1 QPS (95% traffic 07:00–23:59 EST) | ~11 QCUs               | Default Enterprise: 100 QCUs (~10 QPS) |
| **Authenticated Search**   | Not yet defined                                                   | Not yet defined        | Default Enterprise: 100 QCUs (~10 QPS) |

**Notes:**

- Queries are billed by **Query Capacity Units (QCU)**, not per query.
- One QCU handles ~8,000 queries/day.
- Peak traffic is well under Kendra’s default limit (10 QPS per 100 QCUs), meaning scaling query units is likely unnecessary unless traffic spikes dramatically.

---

## **3. Cost Reduction Strategies**

1. **Storage Control**

   - Index only recent or high-value documents (e.g., 1–5 years).
   - Cull aging documents to reduce ongoing storage cost.
   - Example: Reducing from full 117M claims → 1-year subset drops monthly storage from ~$590K → ~$4.5K.

2. **Query Management**

   - Query units smooth peak usage; extra throttling provides minimal cost benefit.
   - Most search patterns are already far below default capacity (1.1 QPS vs 10 QPS).

3. **Hybrid Approach**

   - Combine limited storage indexing with default query units for maximum cost efficiency.

---

## **4. Summary Observations**

- **Primary cost driver:** Storage, not query units.
- **Full indexing of 117M documents** is extremely expensive (~$590K/month).
- **Indexing only recent claims (1–5 years)** reduces cost dramatically to ~$4.5K–$23K/month.
- **Query load is manageable** with default Kendra Enterprise configuration; 11 QCUs suffice for unified search.
- **Cost optimization levers:** Limit documents indexed, implement document lifecycle policies, and avoid unnecessary full indexing.

---
