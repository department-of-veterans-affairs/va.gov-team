**Problem:** 

Currently when a User logs in to VA.gov they should be able to be auto logged-in to Cerner, this behavior is not actually happening.  Determine why that is.

**Discovery/Research:**

Upon examination, it was found that in this [pr](https://github.com/department-of-veterans-affairs/vets-website/pull/23054/files) a member of the OCTO team caused this breaking change by removing an Identity maintained variable in the `LogoRow` component `(src/platform/site-wide/header/components/LogoRow/index.js)`.

The `isUnifiedSigninPage` variable was used to determine whether or not to conditionally render the `Header` component `(user-nav/containers/main.jsx)` throughout the app. When rendered, the `Header` component does a variety of tasks, to include rendering a sign-in button, determining if a user has a session, and how long said session lasts. At the time this conditional rendering was necessary, as it ensured that the sign-in button did not render twice on the `Unified Sign In Page.` **However, to get AutoSSO to work, we need to ensure that the header renders regardless.** To do so, we will need change what’s rendering conditionally.

**Potential Solution:** 

Feasibly said this bug could be resolved by removing the code around the `showNavLogin` variable within the `LogoRow` component, and instead using CSS to conditionally show or hide the login button within the `UserNav`. 

**Action Items:** 
1. Remove lines 258 - 263 on the site-wide/user-nav/conatiners/Main.jsx
2. Change the CSS only on the Unified Sign in Page to not show the header Sign in modal button nor the rest of the container, clean up heights
3. Investigate & document removing the isAuthenticated in the useEffect to determine what actually happens	
    1. Determine what actually occurs with Cerner first & other applications
    2. And see if we need to manually navigate them to their preferred application


**Related Issues:** 

[Update CSS around conditional rendering of the Header component. #57701](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57701)

[Remove Conditional Rendering of Header in User Nav Component #57697](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57697)