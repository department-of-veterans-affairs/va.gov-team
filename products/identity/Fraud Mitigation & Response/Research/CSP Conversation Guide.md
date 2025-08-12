# Credential Service Provider Fraud Mitigation Discussion Guide

**Meeting Duration:** 30 minutes  
**Participants:** VA Team, [CSP Name] Representatives  
**Objective:** Clarify external fraud mitigation capabilities and identify areas where VA needs internal augmentation

---

## Opening & Context Setting (5 minutes)

### Introduction
"Thank you for joining us today.  My name is [name], and I work on the Identity team at the VA.  I really appreciate you taking the time to chat with us regarding fraud mitigation strategies at [ insert CSP name ] We're looking to better understand your fraud detection capabilities in order to determine how our team could step in to protect Veterans from fraud and assist with fraud mitigation strategies at the VA."

### Key Context to Share  
- [ what context should we share with them? ]

---

## Section 1: Fraud Signal Capture (10 minutes)

### Device & Behavioral Signals
**Questions to Ask:**
1. "How do you detect and flag suspicious behavioral patterns (velocity, location, timing)?"
2. "What device fingerprinting techniques do you employ during authentication?"
3. "What browser and network-level indicators do you capture?"
4. "Do you track cross-session patterns or only per-authentication event?"

### Identity Verification Signals
**Questions to Ask:**
1. "What identity proofing signals are captured during account creation vs. ongoing authentication?"
2. "Do you maintain watchlists or known fraud indicators?"

---

## Section 2: Information Sharing with VA (8 minutes)

### Data Transfer & Format
**Questions to Ask:**
1. "What specific fraud signals and risk scores do you share with VA in real-time?"
2. "What historical fraud data can VA access for analysis?"
3. "Are there different data sharing tiers based on risk levels or fraud types?"

### Integration Capabilities
**Questions to Ask:**
1.  "How quickly are high-risk events communicated to VA?"
2. "What audit logging is available for fraud-related decisions?"

---

## Section 3: Gaps & Limitations (5 minutes)

### Known Limitations
**Questions to Ask:**
1. "What are the current limitations of your fraud detection system?"
2. "Are there specific attack vectors or fraud types that are challenging to detect?"
3. "What false positive/negative rates should VA expect?"
4. "Are there user populations or use cases where detection is less effective?"

### Recommended Augmentation
**Questions to Ask:**
1. "Are there VA-specific risk factors we should monitor beyond your signals?"
2. "What fraud patterns require domain-specific knowledge that only VA would have?"
3. "Do you recommend specific fraud prevention tools or techniques as supplements?"
