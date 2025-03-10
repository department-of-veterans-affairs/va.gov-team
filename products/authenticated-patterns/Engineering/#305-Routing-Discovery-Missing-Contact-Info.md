# **Resolving Contact Info Navigation Issues**

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



