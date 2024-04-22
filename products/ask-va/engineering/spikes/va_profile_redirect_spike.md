# SPIKE - Direct and Redirect Submitter to VA Profile

## Objective

This document provides a detailed guide for integrating VA profile updates within the AVA application, focusing on redirecting users for profile edits, preserving form data, and ensuring a seamless and secure user experience.

## User Flow Summary

### Redirect User to VA Profile for Edits

- **Given**: The user is authenticated.
- **When**: They click the 'Update My Profile' button.
- **Then**: They should be taken to the VA Profile edit page.

### Redirect User Back to AVA on VA.gov

- **Given**: The user has edited their profile data.
- **When**: They commit their changes.
- **Then**: They should be redirected back to the AVA on VA.gov page.

### Preserve Form Data

- **Given**: The user has entered data into the form.
- **When**: They return to the AVA on VA.gov app.
- **Then**: Their form should retain the previously entered data.

## Data Handling and Security

- Implement direct user navigation to edit VA Profile data.
- Serialize and save form data securely.
- Facilitate VA Profile page to redirect back to AVA upon edits.
- Rehydrate and merge form data, ensuring no PII/PHI is stored in the browser cache or storage.

## Integration with VA Profile Using `profileContactInfo`

### Component Usage from Platform

The `profileContactInfo` component from the VA design system should be utilized to enable users to update their contact information seamlessly. This component provides a standardized, accessible interface for users to interact with their profile data.

#### Implementation Steps:

1. **Incorporate `profileContactInfo`**: Integrate this component within the AVA form where user contact information is displayed or needs updating. Ensure we are using the correct formConfig and app reducer.

2. **Customization**: Adapt the `profileContactInfo` component based on the specific needs and context of the AVA form, ensuring that the integration is seamless and user-centric.

3. **Error Handling and Validation**: Implement error handling and data validation mechanisms to maintain data integrity and provide a smooth user experience.

4. **User Flow Integration**: Ensure that the use of `profileContactInfo` aligns with the user flow of redirecting to and from the VA Profile edit pages, as well as data preservation strategies.

### Ensuring Data Integrity and User Experience

- Validate user inputs comprehensively to prevent errors and maintain accurate data.
- Provide clear user feedback for successful updates or errors encountered during the profile editing process.

## Flow Diagram

1. **User in AVA Form**

   - User clicks 'Update My Profile'.

2. **Redirect to VA Profile**

   - User edits profile data.

3. **Commit Changes in VA Profile**

   - User commits changes, triggering confirmation and redirect.

4. **Return to AVA Form**

   - System rehydrates form data.

5. **AVA Form with Preserved Data**
   - User views and interacts with the updated form.

## Conclusion

By following this guide and referencing the [Replace contact info list loop documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2262) , the engineering team can implement the necessary features for profile updating and form data preservation within the AVA project. The use of the `profileContactInfo` component will ensure consistency, accessibility, and a positive user experience throughout the redirect process.
