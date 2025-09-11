## Purpose
This document outlines best practices for conducting User Acceptance Testing (UAT) with Veterans.  

Because feature flags in the **VA Health and Benefits (VAHB) app** cannot be selectively enabled or disabled for individual users, we must provide Veterans with special builds of the app to test gated features in production.

---

## Veteran Testing

### Why This Matters
To perform real production UAT, Veterans need access to features hidden behind feature flags. Since we cannot toggle flags per user, we must create special builds of the app that expose these features.

---

### Creating Test Builds
There are two main approaches:

#### 1. Guiding a Veteran to Enable a Feature
This involves providing a build where the **Developer Menu** is accessible, allowing the Veteran to toggle the feature flag manually.

**Steps:**
1. Create a new branch from `develop` (if all changes are already merged) or from the feature branch (e.g., `feature/travel-pay-new-feature`).
2. Modify the branch to remove gating for the **Developer Menu**.
3. Build and distribute this version to the Veteran.

---

#### 2. Creating a Non-Gated Build (Preferred)
This method removes feature flag gating entirely, so the Veteran doesn’t need technical guidance to enable the feature.

**Steps:**
1. Create a new branch from `develop` or from the relevant feature branch.  
2. Remove all feature flag gating code so the feature is always enabled.  
3. Build and distribute this version to the Veteran.  

---

## On-Device Testing

Once you have a branch with the gating removed, you’ll need to deliver the app to Veterans for UAT. There are two main distribution methods:

---

### Option A: Developer Physical Device
Quick and simple for in-person feedback.

**Steps:**
1. Check out the modified branch on a developer’s local machine.  
2. Run `yarn env:production` to set environment variables to production.  
3. Use Android Studio and Xcode to install the build onto test devices.  
4. Verify that the build points to **Production** by attempting to log in with a staging user (this should fail).  
5. Hand the device directly to the Veteran for testing.  

---

### Option B: TestFlight / Google Play Testing
> No special permisions are required to trigger the On Demand Build other than being added as a contributor to the mobile github repo 
Best for remote distribution to Veterans.

**Pre Requisites** 
- The veteran must be invited to TestFlight or Google Play test via a link or their email to access the test builds

**Steps:**
1. Use the [On Demand Build GitHub Action](https://github.com/department-of-veterans-affairs/va-mobile-app/actions/workflows/on_demand_build.yml) to generate a build from your modified branch.
2. Track build status in the `#va-mobile-build-alerts` [DSVA Slack channel](https://dsva.slack.com/archives/C022SV53ASZ).  
3. Once successful, the action will automatically push the build to **Google Play Store (Internal Testing)** and **Apple TestFlight**, and post a Slack thread with the build version and numbers.  
4. Record the version/build numbers.  
5. Provide Veterans with clear instructions on how to download and install the specific build from TestFlight or Google Play.  

---

✅ **Recommendation:** Use **Non-Gated Builds** on developer physical devices whenever possible, as they reduce Veteran confusion and minimize setup effort.  
