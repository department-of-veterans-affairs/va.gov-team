# Provide a Copy: PDF

## Purpose
This document describes options for providing Veterans with a downloadable PDF copy of their Form 526EZ disability claim submission on the confirmation page, aligning development teams and stakeholders on the recommended approach, implementation plan, and expected outcomes.

## Background
Veterans currently have no immediate way to access or save a copy of their disability claim submission. Veterans who need to reference their submission details, seek help from VSOs, or maintain records of their claims must wait until their submission appears in other VA systems. Providing immediate access to these documents could help Veterans track and manage their claims more effectively.

## Problem or Opportunity
When Veterans submit disability claims through VA.gov, they need a way to maintain records of their submissions. Currently, Veterans cannot access a copy of their submission until it appears in VA systems. Being able to download submission documentation would give Veterans immediate confirmation of what they submitted and provide them with records of their claims. This enhancement to the submission experience aligns with our mission to make the claims process more transparent and accessible for Veterans.

## Proposed Solution
We have evaluated three approaches for providing PDF access:
### Option 1 (Recommended): Runtime PDF Generation
This solution leverages our existing Lighthouse generatePDF API endpoint to generate PDFs at the moment of claim submission. When a Veteran submits their claim, our system creates a PDF document containing all submitted form data. The generated document becomes immediately available through a download button on the confirmation page, providing Veterans instant access to their submission records. The generated PDFs would contain identical information to what is ultimately stored in VBMS, as the generation process uses the same underlying service. This approach works consistently for all submission paths and requires minimal technical changes, primarily focusing on frontend integration. The solution offers the fastest path to providing Veterans with needed documentation while requiring minimal new infrastructure.

### Option 2: S3 Storage Retrieval
This approach would retrieve PDFs from our existing S3 storage where they reside before their transfer to VBMS. The solution requires implementing new infrastructure to locate documents and manage secure access for S3. Once a document becomes available in storage, the system would generate a secure download link when documents become available in S3. This approach works for primary path submissions, with backup path documents following a different processing flow. Implementation would require monitoring systems to manage document access and track processing status.

### Option 3: eFolder Access
This solution would retrieve PDFs directly from the Veteran's eFolder, providing Veterans access to their official claim documents. The implementation requires new integration points with VBMS document services and establishing proper security controls for accessing the eFolder. Documents may take varying amounts of time to appear in the eFolder, creating timing challenges. This approach only works for primary path submissions and requires security reviews. The solution necessitates new monitoring systems to track document availability and manage complex error scenarios.

## In Scope
- PDF generation/retrieval functionality on the confirmation page
- Download capability for generated documents
- Error handling and recovery processes
- User feedback collection during rollout
- Integration with existing submission tracking

## Out of Scope
- Changes to MyVA or Claim Status Tool interfaces
- PDF formatting improvements
- Mobile app integration
- Batch download capabilities
- Historical claim document access

## Success
- Veterans can download their submission PDFs from the confirmation page
- Solution functions for all submission paths
- PDFs accurately reflect submitted data

## Risks & Challenges
- PDF formatting limitations may affect document readability
- High concurrent usage during peak submission periods
- Security and privacy requirements for document handling
- No known working solution to provide accessible PDFs
- Policy considerations for document generatiion and handling
- Coordination needed with Employee Experience PDF Outputs initiative
- Contact center preparation for new functionality

## Plan
- Initial 5% rollout using runtime generation solution
- Two-week monitoring period to validate performance
- Staged expansion 100% of users

## Guiding Principles
- Ensure solution works for all submission paths
- Maintain system reliability and performance
- Protect Veteran privacy and data security
- Build trust in online submission process

