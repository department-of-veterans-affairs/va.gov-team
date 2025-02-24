# CST: Performance Optimization Initiative  

* **GitHub Label:** cst-performance-optimization
* **Slack Channel:** [#](https://lighthouseva.slack.com/messages/CJD573TMZ)benefits-team-1
* **Product:** CST
* **GitHub Epic:** [HERE](https://github.com/orgs/department-of-veterans-affairs/projects/1549/views/3?pane=issue&itemId=99212476&issue=department-of-veterans-affairs%7Cva.gov-team%7C103722)

---

# Executive Summary  

The VA Office of the Chief Technology Officer (OCTO) has identified API latency and frontend load times as key performance issues impacting the Claim Status Tool (CST). The average CST API response time is **3.729 seconds**, and page load times reach **5.566 seconds**, causing delays for Veterans trying to access claim information. To enhance performance, this initiative will focus on **reducing API latency by 50%** and **optimizing frontend responsiveness**, with a particular emphasis on improving mobile experiences, where latency is **39% higher than desktop**.  

This initiative will follow a structured **short-, medium-, and long-term** performance improvement strategy, leveraging **Google Analytics 4 (GA4), Datadog Real User Monitoring (RUM), and automated performance regression testing** to validate optimizations.  

---

# Problem Statement(s)  

* As a **Veteran checking my claim status**, I experience slow response times that make it frustrating to retrieve important claim updates.  
* As a **Veteran using CST on a mobile device**, I experience **39% slower performance** compared to desktop users, causing additional delays and difficulty in accessing my claim details.  
* As a **developer maintaining CST**, I lack visibility into whether performance bottlenecks stem from frontend inefficiencies, API latency, or broader infrastructure issues.  
* As a **VA decision-maker**, I need reliable data on CST performance improvements to ensure that optimizations provide measurable benefits to Veterans.  

---

# Desired Outcomes  

* **Reduce API response times** by at least **50%**, from **3.729s to ≤1.86s**.  
* **Improve frontend page load times**, reducing the **5.566s average** by at least **1 second** through optimized rendering and data fetching.  
* **Enhance mobile performance**, closing the **39% performance gap** between mobile and desktop experiences.  
* **Ensure ongoing monitoring & reporting**, integrating **GA4 Web Vitals, Datadog RUM/APM, and automated benchmarking tests** into CST’s development lifecycle.  

---

# Audiences Served  

* **Veterans** using CST to track their claims.  
* **VA.gov developers & engineers** responsible for CST maintenance.  
* **Lighthouse API teams** supporting CST’s backend performance.  
* **VA decision-makers** tracking performance trends and Veteran experience improvements.  

---

# Core Bet  

Our core bet is that **if we improve CST’s API efficiency, frontend rendering speed, and mobile responsiveness**, Veterans will experience **faster claim updates, reduced frustration, and improved trust in VA digital services**.  

## How We Will Know If We Are Right (KPIs)  

### API Performance Metrics  

* **API Latency:** Reduce response times from **3.729s to ≤1.86s** (50% improvement).  
* **Number of API calls per CST request:** Reduce unnecessary or redundant calls.  
* **Parallelized API Requests:** Measure the percentage of requests optimized via Lighthouse API enhancements.  

### Frontend Performance Metrics  

* **Largest Contentful Paint (LCP):** Improve rendering speed by **≥1 second**.  
* **Time to First Byte (TTFB):** Decrease backend response times for faster initial load.  
* **Interaction to Next Paint (INP):** Optimize interactivity and responsiveness.  

### Mobile-Specific Performance Metrics  

* **Reduce mobile load time gap:** Close the **39% difference** between mobile and desktop performance.  
* **Mobile network impact analysis:** Identify & mitigate network-related slowdowns.  

### Site Metrics  

* **Bounce rate:** Decrease the percentage of users who leave CST due to slow load times.  
* **Time on page:** Reduce excessive time spent waiting for pages to load.  

### Monitoring & Testing  

* **Automated Performance Regression Testing:** Detect performance degradation before deploying new features.  
* **Real-time monitoring & benchmarking:** Validate impact of optimizations via Datadog RUM/APM.  

---

# Solution Approach  

## Short-Term (0-6 Months): Frontend Optimizations  

**Hypotheses to test:**  
* Veterans will **perceive faster performance** if React data fetching starts earlier in the page lifecycle.  
* Optimizing feature flag handling will **reduce frontend delays**.  
* React Router Data Loader APIs will **decrease CST page load times by at least 1 second**.  

**Proposed in-scope functional requirements:**  
1. **Implement React Router Data Loaders** to begin data fetching earlier.  
2. **Reduce reliance on blocking feature flags** to improve API call timing.  
3. **Optimize API call timing & prioritization** to minimize frontend delays.  

---

## Medium-Term (6-12 Months): API & Backend Improvements  

**Hypotheses to test:**  
* **Parallelizing Lighthouse API requests** will reduce CST claim detail API call times by **1-2 seconds**.  
* **Web Services Description Language (WSDL) caching** will eliminate unnecessary downstream calls, cutting request times by **0.5-1 second**.  
* **Optimizing Benefits Gateway Services (BGS) interactions** will improve Lighthouse API performance.  

**Proposed in-scope functional requirements:**  
1. **Parallelize API requests** within the Lighthouse Benefits Claims API.  
2. **Implement caching for BGS/BEP service calls** to reduce redundant requests.  
3. **Automate benchmarking tests** to compare old vs. optimized API performance.  

---

## Long-Term (1-3 Years): Infrastructure Modernization  

**Hypotheses to test:**  
* **Server-side rendering (SSR)** will enhance CST performance on mobile networks.  
* **Reducing reliance on legacy VA APIs** will improve long-term scalability.  

**Proposed in-scope functional requirements:**  
1. **Explore SSR implementation** to optimize mobile performance.  
2. **Collaborate with VA architecture teams** to align CST with modernization efforts.  

---

# Evaluation and Monitoring  

We will continuously track and validate performance improvements using:  

* **Google Analytics 4 (GA4) Web Vitals**  
* **Datadog Real User Monitoring (RUM) & Application Performance Monitoring (APM)**  
* **Automated performance regression tests** before deployments  
* **Sprint-based reporting** for cross-team collaboration  

---

# MVP  

## Phase 1: Frontend Performance Fixes  

* **Goal:** Reduce perceived load times by **≥1 second** through **React Router Data Loader APIs** and **early data fetching**.  
* **KPIs:** LCP, TTFB, frontend rendering speed.  

## Phase 2: API & Backend Enhancements  

* **Goal:** Reduce API latency by **1-2 seconds** via **parallelized API calls & caching strategies**.  
* **KPIs:** API response time, backend request optimization impact.  

## Phase 3: Infrastructure Modernization  

* **Goal:** Implement **mobile-first optimizations & server-side rendering** to improve CST on slow networks.  
* **KPIs:** Mobile performance metrics, scalability impact.  

---

# Risks & Mitigation  

| **Risk** | **Mitigation Strategy** |
|----------|-------------------------|
| API latency reduction requires Lighthouse API team collaboration | Maintain active engagement and roadmap alignment with Lighthouse team. |
| Frontend optimizations may introduce regressions | Implement automated performance regression testing. |
| VA infrastructure modernization timelines may shift | Ensure CST optimizations are resilient to architectural changes. |

---

# Conclusion  

By implementing a structured, data-driven performance optimization strategy, we will **reduce CST latency, enhance frontend rendering speeds, and improve the Veteran experience**, ensuring **faster and more reliable access** to claims information.  

This initiative aligns with **VA’s Digital Modernization goals**, supporting a **stable, user-friendly, and scalable CST** through **continuous performance improvements**.
