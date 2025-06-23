# Claims Status Front-End Code Audit — Audit 1

*Date: April 21, 2025*  
*Scope: `src/applications/claims-status`*  

## 1. Executive Summary

| Metric | Count |
|--------|------:|
| Files analyzed | **226** |
| Class-based components | **12** |
| Large functions (>100 lines) | **22** |
| Perf red-flags | **132** |
| Expensive compute hits | **183** |

> **Bottom line:** Modernizing the 12 class components and refactoring the 22 mega-functions will knock out ~70% of the technical-debt hotspots and pave the way for perf wins.

---

## 2. Highest-Risk Hotspots

|  Rank | File | Issue | Score* |
|---------|------|-------|------:|
| 1 | `utils/appeals-v2-helpers.jsx:getStatusContents` | 617-line function | 100 |
| 2 | `utils/appeals-v2-helpers.jsx:getNextEvents` | 431-line function | 95 |
| 3 | `components/claim-status-tab/RecentActivity.jsx` | 252-line component | 88 |

\* *Relative score calculated by line-count + perf flags.*

---

## 3. Key Findings

### 3.1 Class Components  
> Twelve legacy components block tree-shaking and React 17+ optimizations. Convert to hooks; most are simple containers.

### 3.2 Large Functions  
* Three helper functions exceed 350 lines (single-responsibility violation).  
* Nine render methods >100 lines—split into sub-components to reduce re-renders.

### 3.3 Performance Red-Flags  
* 36 inline functions inside JSX ➜ promotes unnecessary reconciliation.  
* 14 functions with >4 parameters ➜ hurts readability and memoization.  
* Empty `useEffect([])` blocks found in three containers ➜ possible stale data bugs.

### 3.4 Expensive Compute  
* 183 heavy array-method chains (map/filter/reduce) in hot-path files; consider memoization or pre-computed selectors.  

---

## 4. Recommendations (90-day view)

| Priority | Action | Impact |
|----------|--------|--------|
| 🔥 Now | Convert 12 class components to hooks | Unblocks React 18 concurrent features |
| 🔥 Now | Slice `getStatusContents` / `getNextEvents` into pure helpers | ~30% bundle shrink, easier unit tests |
| ⚡ Next | Extract inline JSX callbacks to `useCallback` or module utils | ~10% render savings on claim pages |
| 📈 Later | Replace array method chains with map-by-id lookups in reducers | Lower CPU/memory footprint on large data sets |

---

## 5. Appendix

* **Script** `scripts/analyze-claims-status.js`   
* **Full console output** [`audit-1-raw-2025-04-21.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/audits/fe%E2%80%91architecture/audit-1-raw-2025-04-21.md)
* Methodology mirrors code-health tool used in other VA projects.

---

*Department of Veterans Affairs - For Internal Use*
