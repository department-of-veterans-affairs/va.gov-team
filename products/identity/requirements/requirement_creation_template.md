# **Simple Requirement Writing Templates**

Quick, practical templates to turn "we need to..." into clear requirements.

---

## **How This Works**

1. **Someone says**: "We need to do X"  
2. **Pick the template** that fits best  
3. **Fill in the blanks** with 3-5 simple questions  
4. **Done** \- you have a complete requirement

---

## **Template A: User-Facing Features**

**Use when:** The request involves what users see or do

### **Quick Questions:**

1. **Who** is the user? (MHV users, all users, admins, etc.)  
2. **When** does this happen? (after login, when they click something, etc.)  
3. **What** should they see/experience?  
4. **What** should NOT happen?

### **Template:**

```
# REQ-XXXX: [Simple title]

## Description
[1 sentence: what this accomplishes for users]

## Requirement Details
The system MUST [main behavior] when [trigger condition].

Specifically:
- [What users see/experience]
- [Any exceptions or "don't do this" rules]

## Acceptance Criteria
- [ ] [How you'll test it worked]
- [ ] [Another way to verify success]

## Metadata
- **Product**: [product-name]
- **Type**: Functional
- **Status**: Draft
- **Priority**: [High/Medium/Low]
- **Created**: [date]
- **Assignee**: [who's responsible]
```

---

## **Template B: Security/Data Protection**

**Use when:** The request is about protecting something or preventing bad things

### **Quick Questions:**

1. **What** are we protecting? (user data, system access, etc.)  
2. **What** bad thing could happen without this?  
3. **How** should the system prevent it?

### **Template:**

```
# REQ-XXXX: [Security control title]

## Description
[1 sentence: what this protects against]

## Requirement Details
The system MUST [protection mechanism] to prevent [specific threat].

## Acceptance Criteria
- [ ] [How you'll verify it's secure]
- [ ] [How you'll test the protection works]

## Metadata
- **Product**: [product-name]
- **Type**: Security
- **Status**: Draft
- **Priority**: [Critical/High/Medium]
- **Created**: [date]
- **Assignee**: [who's responsible]
```

---

## **Template C: System/Technical Stuff**

**Use when:** The request is about how the system works internally

### **Quick Questions:**

1. **What** technical capability do we need?  
2. **Why** do we need it? (what problem does it solve?)  
3. **How** will we know it's working?

### **Template:**

```
# REQ-XXXX: [Technical capability title]

## Description
[1 sentence: what technical problem this solves]

## Requirement Details
The system MUST provide [capability] to enable [outcome].

## Acceptance Criteria
- [ ] [How you'll test the capability works]
- [ ] [How you'll monitor it in production]

## Metadata
- **Product**: [product-name]
- **Type**: Technical/Operational
- **Status**: Draft
- **Priority**: [High/Medium/Low]
- **Created**: [date]
- **Assignee**: [who's responsible]
```

---

## **Template D: Tracking/Analytics**

**Use when:** The request is about measuring or tracking something

### **Quick Questions:**

1. **What** do we need to track?  
2. **Why** do we need this data?  
3. **Where** should the data go?

### **Template:**

```
# REQ-XXXX: [What you're tracking]

## Description
[1 sentence: why this data is needed]

## Requirement Details
The system MUST collect [specific data] to support [business need].

## Acceptance Criteria
- [ ] [How you'll verify data is being collected]
- [ ] [Where the data appears/how it's accessed]

## Metadata
- **Product**: [product-name]
- **Type**: Monitoring/Data
- **Status**: Draft
- **Priority**: [Medium/Low]
- **Created**: [date]
- **Assignee**: [who's responsible]
```

---

## **Real Example: From Request to Requirement**

### **Initial Request:**

*"We need to show some kind of message to MHV users after they log in to encourage them to upgrade to Login.gov"*

### **Step 1: Pick Template**

This is user-facing → **Template A**

### **Step 2: Answer Questions**

1. **Who?** MHV-only users (not dual-credential users)  
2. **When?** Right after login, before they go to their intended page  
3. **What should they see?** Interstitial page with upgrade message and Login.gov signup link  
4. **What should NOT happen?** Don't show to users who already have Login.gov

### **Step 3: Fill Template**

```
# REQ-0001: Show interstitial after login for MHV-only users

## Description
Display an upgrade message to MHV users encouraging them to create Login.gov accounts.

## Requirement Details
The system MUST display an interstitial page when MHV-only users log in successfully.

Specifically:
- Show interstitial immediately after authentication, before redirect to intended page
- Include message about upgrading to Login.gov with signup link
- Do NOT show to users who already have Login.gov or ID.me credentials

## Acceptance Criteria
- [ ] Interstitial appears for MHV-only test users after login
- [ ] Interstitial does NOT appear for dual-credential test users
- [ ] Signup link directs to Login.gov registration flow

## Metadata
- **Product**: mhv-deprecation-interstitial
- **Type**: Functional
- **Status**: Draft
- **Priority**: High
- **Created**: 2025-04-28
- **Assignee**: Frontend Team
```

---

## **Another Example: Security Request**

### **Initial Request:**

*"We need to make sure the JWT tokens we send to MHV have the right user ID so we don't create accounts for the wrong person"*

### **Step 1: Pick Template**

This is about protecting data → **Template B**

### **Step 2: Answer Questions**

1. **What are we protecting?** User identity data and account creation process  
2. **What bad thing?** Creating MHV account for wrong user due to ID mismatch  
3. **How prevent it?** Validate JWT ICN matches authenticated user's ICN

### **Step 3: Fill Template**

```
# REQ-0008: JWT Must Contain Accurate ICN

## Description
Ensure JWT tokens contain the correct user ICN to prevent account creation errors.

## Requirement Details
The system MUST validate that the ICN in generated JWTs matches the authenticated user's ICN from MPI to prevent unauthorized account creation.

## Acceptance Criteria
- [ ] JWT generation validates ICN against MPI before signing
- [ ] System logs and rejects JWTs with mismatched ICNs
- [ ] Test cases verify ICN matching for different user scenarios

## Metadata
- **Product**: security-general
- **Type**: Security
- **Status**: Draft
- **Priority**: Critical
- **Created**: 2025-04-28
- **Assignee**: Backend Team
```

---

## **Quick Tips**

### **Good Requirements:**

* Start with "The system MUST..."  
* Include what should NOT happen  
* Have testable acceptance criteria  
* Use simple, clear language

### **Avoid:**

* Vague words like "user-friendly" or "robust"  
* Multiple requirements in one document  
* Technical jargon (unless it's a technical requirement)  
* Requirements you can't test

### **When You're Stuck:**

* **Can't pick a template?** → Use Template A (most requests are user-facing)  
* **Don't know all the details?** → Write what you know, mark unknowns as "TBD"  
* **Seems too big?** → Break it into 2-3 smaller requirements  
* **Not sure about priority?** → Default to Medium, adjust later

---

*These templates work with your GitHub Actions automation \- just save the filled template as a markdown file and the system handles the rest\!*
