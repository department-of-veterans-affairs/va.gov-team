# VA.gov Mobile Accessibility Testing Plan 

The VA.gov mobile app development team considers accessibility to be a priority requirement in the design and implementation of the app. The purpose of this document is to outline:
1.	The requirements that will guide the the VA.gov Mobile App build
2.	The accessibility tools and materials that will be used during testing
3.	The testing protocol and steps that will be taken when reviewing the accessibility capabilities in the app

## Section 1: Accessibility Requirements & Approach 

The following items are based on WCAG 2.0 and Section 508 accessibility standards, organized by product function. Each item description reflects both the requirement and the referenced standard, along with the corresponding implementation approach. 
- Items that have “Design”/ “Designs” bolded reflect standards that must be facilitated by the design workstream 
- Items that have “Programmatically” bolded reflect standards that focus on technical implementation 
- Applicable WCAG 2.1 requirements are also included to reference best practice and may be followed in cases where added implementation scope is minimal.
- Accessibility standards that relate to non-existent functionality in the app are marked N/A. In the event that the app’s design changes to include relevant functionality, these standards will be candidates to prioritize as requirements. 



## Section 2: Test Environment 

### Device Matrix 
The MVP will support both iOS and Android devices. Since there is a variance between accessibility capabilities across operating systems, one device will be manually tested from each platform.

These devices will be selected from the Device Matrix based on availability during the development cycle. Specific devices from the device matrix may be used depending on the test case. For instance, when testing text/ content resizing capabilities, devices with a smaller screen size should be prioritized. 

While additional configurations may exist on other devices (i.e. non-Samsung Android devices), these settings are likely to be driven by personal user preferences and to go beyond fundamental platform accessibility capabilities.

### Test Tools 
Multiple testing tools will be used to ensure adequate testing coverage. Where possible, platform specific assistive technology will be used to inspect accessibility properties that manifest differently across platforms. 
- Voiceover (iOS), and Talkback (Android) will be used to test Screen Reader capabilities 
- Bluetooth keyboards* will be used to test keyboard operability.
  * The type of bluetooth keyboard will be confirmed once devices are procured. 
- Deque mobile app testing for iOS and Android may be used to audit the app as a comprehensive set of functionality is developed. 
- If needed, the results of the full app scan will be shared with the 508 Office nearing the end of the development cycle. 


## Section 3: Testing Protocol 

This testing protocol will be used to guide the testing process. This testing plan may be adjusted in cases where a requirement has been de-prioritized or is determined to be unfeasible for MVP. 
- In the criteria section, [P] and [F] denote passing and failing criteria, respectively. 
