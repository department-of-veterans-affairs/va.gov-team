# DRAFT Research Plan Track 2: Fraud Landscape Mapping Discovery
In the following we describe our objectives, methods, and hypotheses.


## Research Objectives

**Primary Objective:** 
Validate hypothesis that fraud is detectable through `vets-api` system of record

**Secondary Objectives:**
* Determine extent to which fundamental system of record (`vets-api` activity logs) can be enriched by other data sources
* Develop methods for clearly separating typical activity from both fraudulent and legitimate but unusual activity
* Identify ways to extend fraud detection throughout VA ecosystem 
* Discover potential techniques for fraud prevention
* Discover potential techniques for fraud response


## Research Hypotheses and Methods

### Phase 1: Alignment
* Understand current BDPR methods and heuristics for identifying fraud
  - Coordinate knowledge share with BDPR about fraud identification workflows
  - **Hypothesis**: Current heuristics can be understood through analyzing historical `vets-api` activity data
  - **Hypothesis**: `vets-api` logs capture sufficient information to distinguish fraudulent from normal activity

* Identify strengths and limitations of BDPR methods
  - Establish metrics for detecting fraud
  - Performance of BDPR methods on these metrics are a *sine qua non* baseline for evaluating performance of fraud detection based on statistical modeling
  - **Hypothesis**: BDPR heuristics for identifying fraud reflect statistical properties of `vets-api` activity data


### Phase 2: Exploratory Analysis
* Filter out irrelevant data
  - The most recent 15 months of `vets-api` logs comprise ~55 **TB** of data
  - **Hypothesis**: Most of this data is irrelevant for fraud detection
  - This amount of data is much too large for a single machine to process
  - Need to construct a mechanism to retrieve only the subset of `vets-api` events which are useful
  - VA currently has no scalable infrastructure to do this
  - Filtering infrastructure is under active construction
  
* Condense relevant data
  - **Hypothesis**: Aggregates of raw `vets-api` events are useful for identifying patterns of normal and fraudulent activity (e.g. total sessions, pages visited per session, etc.)
  - Even after basic filtering, raw event data is still huge
  - Infrastructure for filtering big data can also aggregate it
  - Aggregation infrastructure is under active construction

* Transform relevant data
  - **Hypothesis**: Transformations of raw and aggregated `vets-api` events are useful for identifying patterns (e.g. time since first login, pages visited prior to direct deposit page, etc.)
  - Even after aggregation, event data is still huge
  - Infrastructure for filtering and aggregation can also transform it
  - Transformation infrastructure is under active construction

* Analyze filtered, aggregated, and transformed data
  - Patterns are often obvious from simple scatter plots and histograms
  - Statistical measurements help indicate which data is useful and which is not (e.g. Pearson correlation, variance inflation factor, mutual information, etc.)
  - Useful insight can be gained from considering statistical measurements
  - **Hypothesis**: Results from exploratory data analysis can help BDPR improve fraud identification
  - Exploratory analysis informs further filtering, aggregation, and transformation in a feedback loop


## Data Sources/Needs
1. Records of user activity from `vets-api`
2. Confirmed cases of fraud from BDPR
3. Upstream user data from systems external to `vets-api` (where available)


## Deliverables

### Phase 1:
* Playbook of BDPR fraud detection methods
* Dictionary of BDPR's data sources

### Phase 2:
* Report of structure and patterns in `vets-api` event data
* Dictionary of filtered, aggregated, and transformed `vets-api` event data

