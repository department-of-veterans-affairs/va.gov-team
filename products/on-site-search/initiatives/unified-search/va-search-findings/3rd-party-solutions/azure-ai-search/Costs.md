### Key sources

- Azure AI Search **storage / partition / scale** limits and guidance (shows S3 = **1 TB per partition**, up to 12 TB per service, SU = partitions × replicas). https://azure.microsoft.com/en-us/pricing/details/search/
- A commonly-listed per-hour SU rate used for Standard S3 in public references: **$2.688 / SU / hour** (used to produce monthly $ estimates below). (I cite a market reference; exact price will appear in the Azure portal / pricing calculator and may vary by agreement/region.) ([TrustRadius][2])

---

## Assumptions I used (explicit)

1. **Tier** = Standard **S3** (1 TiB per partition). https://azure.microsoft.com/en-us/pricing/details/search/
2. **Hourly price per SU (S3)** = **$2.688 / hour / SU** (market reference). Use Azure pricing calculator / contract to confirm exact figures for our region/account. ([TrustRadius][2])
3. **Billing month** = 720 hours.
4. **Replicas**: default = **3** (recommended for HA + load balancing). I also show a `2`-replica alternative (lower cost, less HA).
5. **Partitions** = `ceil(total index TiB / 1 TiB)` (1 TiB per partition for S3). https://azure.microsoft.com/en-us/pricing/details/search/
6. **Average indexed document size** — _unknown_, so I ran three sample values: **5 KB**, **50 KB**, **200 KB** (these are **indexed** sizes; indexed storage is typically smaller than raw file size — recommended: index a representative sample to measure real index size). https://azure.microsoft.com/en-us/pricing/details/search/

---

## Inputs

- Document counts:

  - Unauthenticated = **502,000**
  - Authenticated 1-year = **840,000**
  - Authenticated 5-year = **4.2M**
  - Full authenticated = **117M**

- Peak QPS estimate ≈ **1.1 QPS** (95% of queries between 07:00–23:59 EST).

  - With QPS this low, throughput is _not_ the dominant driver — storage and availability are.

---

## Results — monthly cost scenarios (Standard S3, 3 replicas)

(Price = SUs × $2.688/hr × 720 hr)

| Case                          | Avg doc size (indexed) |               Total ≈ TiB | Partitions | SUs (2 replicas) | Monthly cost (2 replicas) | SUs (3 replicas) | Monthly cost (3 replicas) |
| ----------------------------- | ---------------------: | ------------------------: | ---------: | ---------------: | ------------------------: | ---------------: | ------------------------: |
| Unauthenticated (502K)        |  5 KB / 50 KB / 200 KB | 0.002 / 0.023 / 0.094 TiB |          1 |                2 |                    $5,806 |                3 |                    $5,807 |
| Authenticated 1-yr (840K)     |        5 / 50 / 200 KB | 0.004 / 0.039 / 0.156 TiB |          1 |                2 |                    $5,806 |                3 |                    $5,807 |
| Authenticated 5-yr (4.2M)     |        5 / 50 / 200 KB | 0.020 / 0.196 / 0.782 TiB |          1 |                2 |                    $5,806 |                3 |                    $5,807 |
| **Full authenticated (117M)** |                   5 KB |                 0.545 TiB |          1 |                2 |                    $6,027 |                3 |                    $7,027 |
| **Full authenticated (117M)** |                  50 KB |                 5.448 TiB |          6 |               12 |                   $35,057 |               18 |                   $36,057 |
| **Full authenticated (117M)** |                 200 KB |                21.793 TiB |         22 |               44 |                  $127,176 |               66 |                  $128,955 |
| **Full authenticated (117M)** |                 300 KB |                32.931 TiB |         33 |               66 |                  $128,925 |               99 |                  $192,777 |

Notes:

- For small totals (<1 TiB), we still pay minimum units: the **replica+partition baseline** creates at least 1 partition and (here) 3 replicas → 3 SUs → ~$5.8k/month even if storage is tiny. (That’s why small data sets still have a non-zero floor.)
- The **full authenticated** scenario is the one that moves the needle: if our average indexed doc size is ~50 KB we'll need ~6 partitions (SUs=18); if ~200 KB, ~22 partitions (SUs=66).
- Excluding OpenAI / semantic token costs reduces total monthly cost by roughly $1,200 per month for the full 117M document scenario — a relatively small difference compared to SU infrastructure costs, which range from $34k to $192k per month depending on document size and replica count.

---

## Replica trade-off (cost vs. availability)

- **3 replicas (recommended HA + LB)** — used in table above.
- **2 replicas** reduces cost but lowers availability and failover capacity. Example for 117M @ 200 KB:

  - Partitions = 22 → SUs = 22 × 2 = 44 → monthly ≈ **$85,156** (vs $127,734 with 3 replicas).

---

### Observations

- If our **indexed average doc size** is small (<= ~50 KB), the full 117M corpus fits in **6 partitions** (~5.4 TiB) → **~18 SUs** → **~$35k/month** (S3, 3 replicas) using the reference SU rate.
- If average indexed size is larger (≈200 KB), we'll need **~22 partitions** → **66 SUs** → **~$128k/month**.
- There is a **baseline floor (~3 SUs ≈ $5.8k/month)** for the minimal 1-partition + 3-replica config even with small content sets.
- The token cost due to OpenAI (semantic) features is relatively modest compared to SU costs — in these examples, ~$1.2k/month
- The SU / infrastructure cost still dominates by far

---

## Next steps

1. **Measure a representative sample**: index a ~10k–100k document sample from each content type (PDFs, HTML, DB records) into an S3 service to measure _actual indexed TiB per 100k docs_ (Azure recommends this). That will collapse uncertainty about average indexed size. https://azure.microsoft.com/en-us/pricing/details/search/
2. Decide HA/replica policy (2 vs 3) based on our SLA; given low QPS (≈1.1) we might be able to run fewer replicas for pure throughput but still want 2+ for availability.
3. For archive/cold data, consider **Storage-Optimized (L2)** for lower $/TB and keep hot index in Standard S3. (Storage-Optimized has larger per-unit TB allowance.) https://azure.microsoft.com/en-us/pricing/details/search/
4. Include semantic / vector / agentic retrieval token costs in our total TCO if we plan to enable those features. https://azure.microsoft.com/en-us/pricing/details/search/
