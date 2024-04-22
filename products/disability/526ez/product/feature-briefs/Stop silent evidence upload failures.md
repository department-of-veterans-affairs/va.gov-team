# Stop Silent Evidence Upload Failures

## Background

When a Veteran submits at 526EZ claim, they are often required to provide evidence to
support their claim. This comes in the form of documentation from various sources
that needs to be uploaded by the Veteran and attached to their claim.

## Problem or Opportunity

There are certain error conditions that result in the upload not being attached
to their claim. When this happens, neither the Veteran nor the VA is notified and can lead
to the entire claim being rejected or delayed.

## Why

Silent submission failures are not acceptable. A Veteran must be able to easily submit their evidence and trust
that the system routes their request to the appropriate location.

## Proposed Solution

1. Document Upload Polling
   - Alarms based on polling results
2. Resolve common rejections (do we stamp/flag when we modify any upload?)
   - Resize image/pdf
   - Re-encode poorly formatted document
   - Rename files not matching MIME type
   - PDF Encryption Support
3. Post-Submission screen to monitor polling results
   - Could relate to [Help Veterans keep track of their claims post-submission](./Help%20Veterans%20keep%20track%20of%20their%20claims%20post-submission.md)
4. Email to Veterans when upload fails including instructions to provide document by other means
   - Retry Upload
   - Print and mail document
5. Replace failed uploads with Error PDF explaining to reviewers that document failed

## In of Scope

## Out of Scope

## Success

All evidence is upload successfully. Any failures are communicated to both the Veteran
and the VA, and the Veteran is provided with a method to resolve the issue.

## Risks

## Plan

## Guiding Principles
