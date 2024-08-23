# `useDetectFieldChanges` Hook

## What is this?
This document explains the `useDetectFieldChanges` [hook](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/hooks/useDetectFieldChanges.jsx), which monitors changes in form data that impact eligibility for a streamlined waiver during the review process in the Financial Status Report (FSR).

## Table of Contents
- [What you came here for](#what-you-came-here-for)
- [Background](#background)
- [Resources](#resources)

## What you came here for

### The business process
The `useDetectFieldChanges` hook ensures users are presented with the correct form flow when they edit their information on the Review and Submit page, potentially affecting their eligibility for a streamlined waiver.

- **Eligibility Monitoring**: Tracks changes to income, assets, and expenses. If these changes impact streamlined waiver eligibility, the hook adjusts the user's path accordingly.
- **Spouse Details**: Monitors specific spouse-related fields and prevents submission if necessary information is incomplete.
- **Form Flow Adjustment**: Updates the form flow based on the user’s latest eligibility status.

### The code update
This hook is implemented in `useDetectFieldChanges.js`. The key logic includes:

1. **Tracking Changes**: Compares current and previous form data to detect changes affecting streamlined eligibility.
2. **Conditional Flow**: Adjusts the review process based on the detected changes, either allowing or preventing the user from proceeding.

### Monitoring
Monitor the hook’s behavior using logging tools or manual testing to ensure it correctly handles changes in eligibility.

## Background
This hook was created to manage dynamic eligibility for streamlined waivers, ensuring the FSR submission process adapts to any changes users make during the review stage.

## Resources
- **Code**:
  - `useDetectFieldChanges.js`
  - `streamlinedDepends.js`
- **Relevant Tickets**:
  - [Discovery: Review and Adjust Form Submission Logic for Streamlined Waiver Eligibility Changes #71257](#)



