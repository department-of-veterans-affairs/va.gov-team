# Improvements to Backup and Emergency Failsafe Processes

## Background

If there is any error or failure during the population and/or submission of a 526EZ claim,
the system should exhaust all possible methods to resolve those issues and take all paths to
get the submission to its intended destination.

## Problem or Opportunity

The current process can also fail, leading to a Veteran's submission not routing to the appropriate
destination. Furthermore, those submissions can fail without notification.
See [Stop silent evidence upload failures](./Stop%20silent%20evidence%20upload%20failures.md).

## Why

Submission failures are not acceptable. A Veteran must be able to easily submit their form and trust
that the system routes their request to the appropriate location.

## Proposed Solution

1. Improve the monitoring and discoverability of issues: [Improving monitoring-analytics-dashboards for submissions status](./Improving%20monitoring-analytics-dashboards%20for%20submission%20status.md)
2. Ensure all logs use the same format/template and share sessions/request identifiers so we can trace actions through logs
3. Build out automated reporting for issues, including alerts that fail all submission paths
4. Establish Submission Failure Playbook to define steps to triage and resolve a failed submission
   - Get claim established
   - Generate ticket to research why claim failed and resolve issue

## In of Scope

1. Improvements to the secondary paths.
2. Improvements to the notifications of failure to the Veteran.
   See [Stop silent evidence upload failures](./Stop%20silent%20evidence%20upload%20failures.md) and
   possibly [Help Veterans keep track of their claims post-submission](./Help%20Veterans%20keep%20track%20of%20their%20claims%20post-submission.md)

## Out of Scope

1. Improvements on the primary path. These efforts should be captured independently.

## Success

1. Veteran submissions achieve 99.9% success rate when capturing and resolving primary submission failures

## Risks

## Plan

## Guiding Principles
