# WIP - Delegate Access Solution 1 Pager - WIP

The Delegate Access Solution enables authorized delegates to securely act on behalf of Veterans within VA digital services. With the deprecation of My HealtheVet (MHV) credentials, this solution ensures continued access in a scalable and regulatory-compliant manner.

## Background

VA reducing its CSPs from four to two will improve the security, availability, and customer experience of signing into VA web and mobile properties. However, there is one group – people acting on behalf of another person – that are not accommodated by this move. These groups currently use the My HealtheVet user ID and password of the Veterans whom they care for to log in and manage their health online. This is an insecure vector for fraud, yet many people are used to working in this way. 

Both Login.gov and ID.me require that a person signing up for a new account and verifying their identity is who they say they are. Caregivers are not allowed to create an account on behalf of a Veteran. This makes sense from a security and fraud prevention posture, and it is also in line with what both Login.gov and ID.me do: these organizations are in the business of identity management, not access management.  

As such, the Office of the CTO would like to build delegate access so that delegates with a verified Login.gov or ID.me account can have their information securely linked to the ICN of the Veteran whom they care for. This is essential to VA's effort to fully retire the My HealtheVet user ID and password. Without delegate functionality through Login.gov or ID.me, VA cannot fully retire the MHV user ID and password.

## Problem Statement

Court-appointed guardians and internal VA users will lose access to Veteran and test accounts due to MHV credential deprecation. A secure, transparent, and compliant solution is necessary to maintain access for authorized delegates while ensuring security.

## Target Audience

- **Veterans & Beneficiaries:** Ensuring continued support from authorized delegates.  
- **Primary Users:** Court-appointed guardians, legally authorized delegates.  
- **VA Internal Users:** VA employees and contractors who need access to production test accounts.  

## Core Products & Features

### 1. Profile Selector Workflow - Secure delegate login with role-based access control
- Allows authorized delegates to log in and select the Veteran they represent.
- Displays a persistent “View As” indicator to ensure transparency.

### 2. Audit Database - Immutable logs of delegate actions for compliance
- Secure logging of delegate actions for compliance and security.
- Meets VA RCS 10-1 and NIST standards.

### 3. User Actions View - Dashboard view of user interactions
- Delegate users can track their actions for transparency and accountability.
- Enhances user trust and compliance adherence.

## High-Level Roadmap

🔹 MVP launch with VA employee test accounts.  
🔹 Initial rollout to court-appointed guardians.  
🔹 Expansion to broader use cases for production test accounts.  
🔹 Automate permissions, improve UX, integrate with other VA services.  

## Dependencies

⚠️ New MPI person type is added and available for use in the IAM toolkit.  

