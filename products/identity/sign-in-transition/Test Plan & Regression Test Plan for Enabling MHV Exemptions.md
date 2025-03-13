# **Test Plan & Regression Test Plan for Enabling MHV Exemptions**

## **Intermediate page**

### **Test Steps**

1. Navigate to [https://www.va.gov](https://www.va.gov/)/sign-in/mhv.  
2. Confirm page loads without errors  
3. Click the MHV sign-in link on the page.   
   1. Confirm redirect to correct MHV sign-in page without errors.  
4. Test page across different devices and browsers to ensure consistent functionality.

### **Regression Test Plan**

1. Test existing VA.gov sign-in process to confirm it works as expected.  
2. Confirm that adding the new page doesn’t impact other workflos, pages, features on VA.gov.  
3. Ensure system performance on VA.gov remains unaffected.

(The following is not listed for collab cycle but I’ve seen something similar in other collab cycle tickets we’ve done)

### **Reversion Test Plan**

1. Remove new page by deleting its code/route from deployment.  
2. Navigate to https://www.va.gov/sign-in/mhv  
3. Verify all existing workflows and navigation on VA.gov function as expected.  
4. Test VA.gov sign-in workflows to ensure they are unaffected.  
5. Verify system performance remains consistent after removal.

## **Modal Changes**

### **Test Steps**

1. Navigate to [https://www.va.gov](https://www.va.gov/) in production.  
2. Click the Sign in button to trigger the modal  
3. Verify content in modal matches updated design specs.  
4. Click the new link to confirm it redirects to the correct resource page (page pending CAIA build).  
   1. “The My HealtheVet sign-in option is no longer available”  
5. Test modal changes are supported across devices and browsers to ensure consistent functionality.

### **Regression Test Plan**

Steps for `vets-website` that will disable the Sign-in modal and Sign-in page

1. Verify modal appears correctly when triggered on va.gov.  
2. Test functionality of modal to ensure no regressions.  
   1. Links, close, etc  
3. Confirm workflows unrelated to modal remain unaffected by change.  
4. Ensure the new link does not impact system performance or load times.

(The following is not listed for collab cycle but I’ve seen something similar in other collab cycle tickets we’ve done)

### **Reversion Test Plan**

Steps for `vets-website` that will disable the Sign-in modal and Sign-in page

1. Navigate to [VA.gov Flipper Admin portal](https://api.va.gov/flipper) in production  
2. Click on the Sign in to GitHub button  
3. Navigate to the `sign_in_modal_v2` feature and click on the link  
4. Click the Disable for everyone button  
5. Navigate to [https://www.va.gov](https://www.va.gov/) \> Click Sign in \> Confirm the original modal is displaying