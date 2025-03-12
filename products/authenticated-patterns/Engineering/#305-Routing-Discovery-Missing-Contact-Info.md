# **Resolving Contact Info Navigation Issues**
Related [ticket](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/305)

Experimental branch and draft PR with suggested fixes

https://github.com/department-of-veterans-affairs/vets-website/pull/35153/files#diff-100158d68c1813a8d70d46e75670cb3cdf6d92bb4b2e8c76016695b7b1d4b7ad


## **⚠️ Overarching Issue**
The current implementation of handling missing contact info **goes against** the established **platform form navigation logic**. As a result, we need to **develop a new routing approach** to resolve these navigation issues.

### **Concern**
- The extent to which this affects different forms in different applications is unknown.
- Some fixes **require modifying platform files** (e.g., `RoutedSavableApp.jsx`).

---

## **🚨 Problems We Need to Solve**

### **1️⃣ Back Button in form on Contact Info Review Page**
- **Actual:** When you click “back”, it goes back to the personal information section. .
- **Expected:** It should go **back to the last page the user was on** (which could be the last edited info page).

### **2️⃣ Cancel Button on Edit Pages**
- **Actual:** Clicking “Cancel” **does nothing**.
- **Expected:** Clicking “Cancel” should:
  - Navigate **back to the previous page**.
  - **OR** display an error **if required fields are empty**.
  - When clicking “Edit” from a contact info card in the review page, the **Cancel button seems to work correctly**.

### **3️⃣ Browser Back Button on Edit Pages**
- **Actual:** When you click the Back browser button, you have to click TWICE. After you click twice, it completely takes you out of the form and takes you back to wherever you were BEFORE getting into the form. 
- **Expected:** Clicking **Back should return to the last page the user was at**. 
  - Might be multiple history entries being added during navigation.
 
### **4️⃣ Update/Cancel buttons orientation on Edit pages**
- **Actual:** Update (left) Cancel (right)
- **Expected:** Button order should likely follow "Back" and "Continue", which is standard for other VA.gov form flows.

---

## **🔴 Issue #1: Back Button in form on Contact Info Review Page**

### **Observations in the Code**
- The form navigation **relies on** the forms system’s **pageList** configuration.
- `goBack()` calls `getPreviousPagePath(pageList, formData, location.pathname)`, but:
  - Our form’s **pageList is not properly set up**.
  - The function defaults **to the last form section** instead.

### **Steps to Resolve**
1. **Manually Track Navigation History**
   - In `ContactInfoLoader.jsx`, create a **sessionStorage item** called `historyStack`.
   - Store the **current path before navigating**.

2. **Modify `goBack()` in `ContactInfo.jsx`**
   - The **Back button should first try to use** the **stored history**.
   - If no history is found, fall back to the **form’s default navigation system**.

---

## **🔴 Issue #2: Cancel Button on Edit Pages**

### **Observations in the Code**
- `useRouteMetadata(router)` **orders pages incorrectly**:  /veteran-information → /edit-email-address
- Because `ContactInfoLoader.jsx` **uses `router.push()`**, it does **not save the actual previous page**.
- Instead, it **auto-redirects** to: /veteran-information → /veteran-information/edit-email-address
- Potential Issue in `RoutedSavableApp.jsx`**
  - The entire form app is wrapped in **`RoutedSavableApp.jsx`**, which might be **overriding navigation events**.
  - The component **listens to route changes** (`componentDidUpdate`) and redirects based on:
  - **Saved progress (`fetchInProgressForm`)**
  - **`prefillStatus`**, which might **interfere with `window.history.back()` or `router.goBack()`**.

### **Steps to Resolve**
1. **Manually Track the Last Visited Page**
 - In `RoutedSavableApp.jsx`, inside `componentDidUpdate()`, create a **historyStack** in `sessionStorage` storing **the last 5(?) pages visited**.
 - **Modify `ContactInfoLoader.jsx`** --> Before redirecting, store the current page in **`historyStack`**.
 - **Fix the Cancel Button in `EditContactInfo.jsx`** --> Retrieve the **previous page from `historyStack`** when the user clicks "Cancel".

2. **Store `missingInfo` in Redux**
 - `missingInfo` is determined in **`shared/components/ContactInfo.jsx`**.
 - **Create a Redux Action & Reducer**
 - Define **`setMissingInfo`** and **`removeMissingField`**.
 - **Dispatch `setMissingInfo` in `ContactInfo.jsx`**
 - Ensure `missingInfo` updates in Redux when contact fields are missing.
 - **Retrieve `missingInfo` in `EditContactInfo.jsx`** --> Access **Redux state** to check missing fields.
 - Update the Cancel button logic to determine if fields are missing, then when a user clicks cancel, it should go back to the previous page they were on.
 - Update the Update button logic to remove the filled-in missing fields from the missingInfo state. Dispatch(removeMissingField)

### Considerations
- Is there a simpler fix? Is it ideal to add Redux? This looked to be less involved in regards to transferring props from ContactInfo to EditContactInfo.
  
---

## **🔴 Issue #3: Browser Back Button on Edit Pages**

### **Steps to Resolve**
- Add a popstate event listener in ContactInfoLoader.jsx that updates the history stack when the browser's back button is clicked. Popstate is triggered when a user navigates through their browser history and help track and manage navigation behavior properly. 

---

## **🔴 Issue #4: Update/Cancel buttons orientation on Edit pages**

### **Observations in the Code**
- Since this button orientation is defined in the platform `ProfileInformationEditView.jsx` file, it suggests that this is an established way of displaying the buttons and is most likely being used in other forms this way.

### **Steps to Resolve**
- In `src/platform/user/profile/vap-svc/components/ProfileInformationEditView.jsx`, need to reposition the Update and Cancel buttons under `ProfileInformationActionButtons`

### Considerations
- Do we want to override/change how the orientation is currently defined in the platform form system?

---

## **🔷 Alternative solution** 
Revert to the original process for handling missing contact information. When the user reaches the contact info review page, display an alert indicating any missing information. Prevent them from navigating away from the page until all required fields are completed.

## **🟩 Decision**
Considerations from reviewing the branch / draft PR:

- new Redux reducers are introduced.
  - To do this we will first need to decouple the reducer from our mock form app and make a 'single use' reducer that can be imported on a form by form basis from platform.
  - Less than ideal because it requires an additional step for each app when adding the feature and introducing a point of failure if not followed. This breaks from the existing solution which is a singular function call with no additional wiring up via reducers.
  - It also introduces some additional global state that could be considered overhead and not used anywhere else but for this flow.

  
- the `RoutedSavableApp` component is modified to add additional 'componentDidUpdate' lifecycle calls. This means that whenever the RoutedSavableApp props update (which is unfortunately pretty much every change of a form / every keystroke into a field) then the functions will be called to get session storage and check against it. Performance wise this isn't good, and is compounded since we are also doing JSON parsing in this lifecycle hook. I don't know of a better way around this, but because this would affect every form, whether it uses the new ContactInfo component or not, I think it would be better not to touch this component if at all possible.
- The addition of session storage to persist url history, does have some security concerns. If a url history entry is captured that has a refresh token or access token in the url query params (which is what is done when doing SSO auth redirects) then there could be the potential that these tokens could be accessed by a malicious chrome extension or script running on the page. This is a pretty small attack surface, but is still something to consider.
- Duplicating browser history state in session storage would not be considered best practice and goes against web standards. If a user decides not to allow session storage on their browser, this feature would not work.
- Having this additional reliance on session storage, a new Redux reducer, and changes to the RoutedSavableApp results in this not being able to be put behind a feature toggle due to complexity and the inability to check toggle values before initiating the Redux state store.
- This will solve the routing and navigation issues, but focus and a11y still need to be worked out


**Notes on using the existing implementation:**

- maintains best practice for the focus state on each field after editing success or failure
- code maintenance is done in a single place without touching global form system components and redux state
- design changes are low LOE to update to match our existing pattern designs
- wont require any additional work by other teams already using the ContactInfo component to implement


From an engineering perspective, my suggestion would be to not continue down a rework of the navigation flow integration. LOE is high, the potential for breaking changes is real, and the time involved in getting this rework tested and implemented could potentially push back engineering work, especially if we are going to undertake the task of building a new review page pattern. 
