# DRAFT Research Plan: Fraud Landscape Mapping Discovery

## Research Objectives

**Primary Objective:** 
Map the VA's fraud ecosystem to establish clear concepts, correlates, and patterns of fraud.

**Secondary Objectives:**
* Identify places where automated fraud detection can augment human judgement
* Determine appropriate boundaries between automated and manual fraud mitigation
* Surface unexpected indicators of fraud

## Research Questions

### Phase 1: Ecosystem Mapping
1. Process & Workflow Understanding
   * What are the end-to-end fraud workflows from detection to resolution?
   * What evidence is used to confirm fraud?
   * What would cause an immediate recognition of suspected fraud?
   * What would cause an immediate dismissal of suspected fraud?
   * What information do teams share during handoffs?

2. Data & Technology Landscape
   * What fraud-related data does each team collect / access?
   * What tools and systems are currently in use?
   * What integrations are there between current tools or systems?
   * What additional data resides in the same sources as currently collected data?

### Phase 2: Gap Analysis
  4. Pain Points and Inefficiencies
     * What are common aspects of fraud cases which fall through the cracks?
     * Are these common aspects reflected in available data sources?

  5. Resource & Capability Assessment
     * What fraud prevention / response capabilities exist vs what's needed?
     * How much of this capability can benefit from augmentation / automation?

### Phase 3: Validation & Alignment
  6. Solution Validation
     * Are identified gaps / opportunities accurate and prioritized correctly?

### Phase 4: Exploration
  7. Data Filtration
     * What subset of activity data is relevant to fraud detection?

  8. Data Aggregation
     * How can raw activity data be distilled to useful information?
     * How can `vets-api` data be enriched with data from other sources?

  9. Data Exploration
     * What structures and patterns are there related to ordinary and fraudulent activity?

### Phase 5: Solution Prototyping
  10. Feature Engineering
      * What transformations of filtered and aggregated data are useful model inputs?

  11. Model Development
      * What are the appropriate measures of model performance?
      * Which model architecture yields highest performance?
      * Do fraud models generalize robustly to unseen cases?

## Research Methods

### Phase 1: Ecosystem Mapping
1. Workflow Mapping Workshops
   * Format: 2 - 3 cross-functional workshops with 4 - 6 participants
       * Key participants: BDPR team members, Identity team AI / ML engineers
   * Activities:
       * Journey mapping of fraud cases from detection to resolution
       * Identification of handoff points and decision criteria
       * Data flow mapping across systems and teams

2. Documentation Review
   * Existing fraud policies, procedures, and playbooks
   * System documentation and data dictionaries
   * Previous fraud case studies or incident reports
   * Aggregate reporting of fraud cases

### Phase 2: Gap Analysis
  <same as track 1>

### Phase 3: Validation & Alignment
  <same as track 1>

### Phase 4: Exploration
  7. Data Filtration
     * Exclude irrelevant `vets-api` application log data (filter ~55 TB of archived data)
     * Restrict analysis to types of activity indicated by earlier steps (e.g. direct deposit changes)

  8. Data Aggregation
     * Create summary metrics of user activity
     * Enrich `vets-api` data with data from other sources

  9. Data Exploration
     * Discover structure and patterns in ordinary and fraudulent activity

### Phase 5: Solution Prototyping
  10. Feature Engineering
      * Use filtered and summarized user activity and other data to construct model inputs

  11. Model Development
      * Determine appropriate model performance metrics (accuracy, cost matrix, etc.)
      * Fit variety of models to engineered features
      * Select best performing model according to model metrics

## Data Sources/Needs
1. Records of user activity on VA systems
2. Confirmed cases of fraud
3. Upstream user data from systems external to `vets-api` (where available)

## Deliverables
1. Descriptive Analytics
   * Summary statistics and distributions of normal and fraudulent activity
2. Predictive Analytics
   * Fraud scoring models for identiifed classes of fraud
3. Prescriptive Analytics
   * Plan for integration of fraud scoring models with existing workflows
