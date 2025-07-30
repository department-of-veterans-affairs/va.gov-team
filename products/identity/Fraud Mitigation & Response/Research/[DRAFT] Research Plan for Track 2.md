# DRAFT Research Plan Track 2: Fraud Landscape Mapping Discovery
People are smart, creative, and intuitive. Machines are dumb, repetitive, and fast. We hope that by combining their strengths, the task of mitigating fraud in VA systems can be much improved. This hope is not in vain - across all disciplines, the application of automated statistical learning has yielded substantial improvements to an astonishing variety of processes.

In the following we describe our objectives, methods, and hypotheses. There is a large number of implicit hypotheses which are built in to using machine learning; we indicate these hypotheses below. The process of building a machine learning system is the process of validating (or rejecting) these tacit ideas.


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

### Phase 1: Rules Based Pipeline
* Understand current BDPR methods and heuristics for identifying fraud
  - **Hypothesis**: Current heuristics can be encoded and formalized by a machine learning system determined through analyzing historical `vets-api` activity data
  - **Hypothesis**: Stastical modeling of known normal and fraudulent activity generalizes to unseen cases
  - **Hypothesis**: BDPR's methodology can be enhanced and accelerated by automated scoring for fraudulent activity
  - **Hypothesis**: `vets-api` logs capture sufficient information to distinguish fraudulent from normal activity
    
* Identify strengths and limitations of BDPR methods
  - **Hypothesis**: BDPR heuristics for identifying fraud reflect statistical properties of `vets-api` activity data
  - **Hypothesis**: Machine learning can model these statistical properties and replicate strengths of BDPR fraud identification
  - **Hypothesis**: Limitations of BDPR methods can be ameliorated by using statistical models of `vets-api` activity
  - **Hypothesis**: Statistical modeling can uncover blind spots in BDPR analysis

* Identify concrete metrics to measure effectiveness of fraud detection
  - Performance of BDPR methods on these metrics are a *sine qua non* baseline for evaluating performance of fraud detection based on statistical modeling
  - **Hypothesis**: Statistical learning systems can match BDPR's performance on fraud detection metrics
  - **Hypothesis**: Statistical learning systems can exceed BDPR's performance on fraud detection metrics
  - **Hypothesis**: Statistical learning systems can detect likely fraud much earlier than BDPR
  - **Hypothesis**: Machine learning can detect likely fraud much faster than BDPR
  - **Hypothesis**: Machine learning can identify patterns in fraudulent activity which are not already part of BDPR's heuristics
  - **Hypothesis**: Statistical scores for potential fraudulent activity can be incorporated into BDPR's workflow and substantially increase their effectiveness at detecting and resolving fraud


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
  - Useful insight can be gained just from considering statistical measurements, *without* building a model (this is often called 'descriptive analytics')
  - **Hypothesis**: Results from exploratory data analysis can help BDPR improve fraud identification
  - Exploratory analysis informs further filtering, aggregation, and transformation in a feedback loop
  - **Hypothesis**: Understanding patterns in data can help provide statistical models with the most useful representation of that data in order to make predictions


### Phase 3: ML Prototype
* Construct a simple binary classifier
  - Statistical model which outputs a probability of a set of `vets-api` events being fraud or not, based on filtered, aggregated, and transformed input data
  - Example output: "This set of `vets-api` events indicates a 67% likelihood of being fraudulent activity"
  - The output of this model is the statistical fraud score from Phase 1
  - This single step is typically very very fast (milliseconds to minutes)


### Phase 4: Evaluation Loop -> Phase 3
* Measure model performance
  - Use metrics determined in Phase 1 to evaluate how effective simple model is at detecting known cases of fraud, and rejecting known cases of normal activity

* Measure how model generalizes to unseen data
  - Statistical models can simply memorize data used to fit their parameters
  - Perfect match on training data can coincide with awful performance on held-out test data

* Understand *why* model gives particular outputs
  - Use explainability methods (regression coefficients, Shapley values) to understand how inputs (i.e. filtered-aggregated-transformed events) contribute to output score
  - Check that these explanations make intuitive sense
  - Statistical modeling can often be misleading and respond to spurious structure in data
  - This is a debugging / QA procedure

* Adjust modeling approach and loop to Phase 3
  - Model may be too simple to capture subtleties in data
  - More complexity (flexibility) can lead to more nuanced identification of fraud
  - Model may be too complex, and just fit noise in data
  - **Hypothesis**: There is an infinite number of possible statistical models - some subset of them will have good performance and generalize well

* Validate model outputs with expert domain knowledge
  - BDPR is and will always be the ultimate arbiter of fraud
  - BDPR understands fraud better than anyone or anything else
  - Statistical models are ***NOT THE TRUTH*** - they are a guide informed by compressing known data
  - **Hypothesis**: BDPR's feedback will improve the model, which will in turn help BDPR


### Phase 5: Strategic Scaling
* Use results of previous steps to expand 
  - Scale vertically to a production fraud detection system integrated into BDPR's workflow
  - Create infrastructure to support integrated fraud detection system

* Use results of previous steps to expand scope of fraud mitigation
  - Scale horizontally to methods to identify different classes and arenas of fraud in VA systems


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
* Dictionary of filtered, aggregated, and transformed `vets-api` event data for use as inputs to fraud detection system

### Phase 3:
* Statistical model which provides fraud likelihood score based on inputs constructed in Phase 2

### Phase 4:
* Performant, explainable, and validated fraud likelihood model

### Phase 5:
* Production fraud detection system
* Plan for expanding scope of fraud mitigation
