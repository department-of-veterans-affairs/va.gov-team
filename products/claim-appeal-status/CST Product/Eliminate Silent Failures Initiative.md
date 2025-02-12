# CST: Eliminate Evidence Submission Silent Failures Initiative

* GitHub Label: zero-silent-failures
* Slack channel: #benefits-management-tools
* Product: CST
* GitHub Issue: 

# Executive Summary

Evidence submission "silent failures" occur when a veteran submits evidence for their claim, but the data fails to reach its intended destination without notifying the user. This results in claims being processed without the provided evidence, leading to frustration, mistrust, and sometimes congressional inquiries. The primary goal of this initiative is to reduce these silent failures to zero by first notifying veterans when a failure occurs and then improving the submission process.

Visual data diagram representing known failure points and solution framework can be found [here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726243735665/493c9b003d190047347d812773c6439988137a46?sender=u7b04181b0deced23bce71680). 

# Problem Statement(s)

* As a veteran submitting evidence to support my claim through the CST, I expect that my evidence will be received and processed. However, if the submission silently fails, I am unaware of the issue, leading to my claim being processed without critical evidence.
* As a claims processor, I am responsible for making decisions based on the evidence provided. When silent failures occur, the evidence is missing, causing delays, inaccurate decisions, and potential rework.
* As a VA representative handling veteran inquiries, I face escalations due to veterans being unaware of silent failures, causing confusion and distrust in the system.

# Desired Outcomes

* Veterans are notified promptly when evidence submission failures occur, eliminating silent failures.
* The submission process becomes more transparent, reducing veteran frustration and inquiries related to missing evidence.
* Claims processors receive complete evidence submissions without downstream issues, leading to more accurate and timely claim decisions.

# Proposed Solution

**Phase 1: Exhaustion Handler and VA Notify Integration**
- Implement an exhaustion handler that triggers an event when an evidence submission fails after 14 retries in Sidekiq.
- Integrate the handler with VA Notify to send failure notifications to veterans via email when the evidence submission is unsuccessful.
- This solution will treat the 14th failure as an event, sending a webhook from the exhaustion handler to VA Notify, ensuring the veteran is notified of the failure.

**Phase 2: Migration to Lighthouse API with Polling**
- Migrate the evidence submission process from EVSS Documents Service to the Lighthouse Documents API service.
- Leverage Lighthouse's ability to poll submission status, allowing the system to identify downstream failures.
- Reuse the exhaustion handler code to trigger notifications through VA Notify when a failure is detected via polling.

# Audiences Served

* Veterans submitting evidence through the CST for disability claims.
* Claims processors relying on complete and accurate evidence for decision-making.
* VA contact center representatives handling veteran inquiries and complaints.
* VA leadership concerned with improving the veteran experience.

# Key Metrics / KPIs

1. **Silent Failure Notifications Sent**: Track the number of failure notifications sent to veterans via VA Notify.
2. **Veteran Acknowledgment Rate**: Measure how many veterans open and engage with the failure notification email.
3. **Silent Failure Rate**: Monitor the overall rate of silent failures before and after the exhaustion handler implementation.
4. **Claim Accuracy and Timeliness**: Track improvements in claim decision accuracy and timeliness after reducing silent failures.
5. **Veteran Satisfaction**: Measure veteran satisfaction through surveys or reduced complaint volumes.

# Timeline

1. **Phase 1**: 
   - Implement the exhaustion handler and VA Notify integration.
   - Expected completion: October 2024
2. **Phase 2**: 
   - Migrate to Lighthouse API and implement the polling solution.
   - Expected completion: December 2024

# Dependencies

* Coordination with the VA Notify team for webhook integration.
* Access to Lighthouse API endpoints for polling.
* Collaboration with the 526EZ team to repurpose exhaustion handler code.

# Risks

* **Notification Delivery Failure**: If VA Notify fails to deliver notifications, veterans may still experience silent failures.
* **Lighthouse Migration Delays**: Delays in migrating to Lighthouse may prolong reliance on the EVSS submission process.
* **Increased Veteran Inquiries**: Veterans may contact the VA in response to failure notifications, requiring more robust support in the contact centers.

# Conclusion

By addressing silent failures in evidence submission, we aim to enhance the veteran experience, reduce frustration, and ensure that claims are processed with all the required evidence. Phase 1 focuses on notifying veterans of submission failures, while Phase 2 will further improve the process by integrating Lighthouse's polling capabilities.
