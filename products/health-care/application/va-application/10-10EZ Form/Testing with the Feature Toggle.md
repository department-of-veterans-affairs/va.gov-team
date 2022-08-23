# Testing with the Feature Toggle

As a result of an issue found during the deployment of the Medicare Claim number field on an existing page, we have created this document to capture some testing points to employ as part of our routine testing process.

### Points of Note
- The JSON schema doesn’t care if a field is not rendered on the UI side, it still expects the data to be present when it is deemed a "Required" field.
- It was discovered in research of other VA.gov applications that an alternative pattern exists for asserting the required attribute on the form fields. This pattern allows for the required attribute to be declared in the uiSchema config for a field, instead of in the JSON schema config. This allows for the use of form data to control the conditional value of the attribute.
- This pattern was implemented on all fields on this particular page to provide consistency between all fields and avoid any future confusion as to which pattern should be used.


- When testing changes that are made to an existing page, especially for 'required' fields/answers
     - We must test the feature toggle functionality to confirm the effectiveness of revealing and hiding the code, without impacting the applicant.
- To achieve proper testing while in the lower environments
     - Features will be enabled for 100% of registered users and disabled for “guest” users. 
          - This will allow for a dual testing approach to ensure no change is made to the existing functionality while doing a phased-in introduction of future features.
