# Post-launch monitoring plan: Meds → Secure Messaging renewal flow

## Table of contents
- [Overview of the Meds → SM renewal flow](#overview-of-the-meds--sm-renewal-flow)
- [New flow URLs — placeholders](#new-flow-urls--placeholders-engineering-to-confirm)
- [Resources](#resources)
- [1. Key things we’re monitoring](#1-key-things-were-monitoring-aligned-with-the-actual-flow)
- [2. GA4 monitoring (behavioral)](#2-ga4-monitoring-behavioral)
- [3. Datadog monitoring (technical-reliability)](#3-datadog-monitoring-technical-reliability)
- [4. Medallia / VSignals (qualitativeuser-feedback)](#4-medallia--vsignals-qualitativeuser-feedback)
- [5. Success looks like](#5-success-looks-like)

---

Once the Meds → Secure Messaging renewal flow goes live, it will be released to users in stages—starting with a small percentage of users and gradually increasing (5% → 25% → 50% → 75% → 100%). During this phased rollout, we’ll monitor how the experience is working across both products.

This document outlines what we’ll be watching during and after the rollout.

---

## Overview of Meds → SM renewal flow

The renewal flow guides Veterans through both Medications and Secure Messaging:

1. Veteran views their **medication list** OR **medication details** page  
2. Renewal-eligible medications display a link: **“Send a renewal request message”**  
3. Veteran selects the link → a **modal appears** asking if they want to continue to messaging  
4. Veteran continues → is routed to **care team selection**  
5. Veteran selects a care team  
6. Veteran reaches the **Secure Messaging editor** with a **prefilled renewal message**  
7. Veteran sends the message  
8. Veteran is returned to the **Medications page**

Monitoring focuses on whether each of these steps performs reliably.

---

## URL params that trigger this flow

URL that Meds is using to redirect to Secure Messaging and trigger the renewal flow:
```
/my-health/secure-messages/new-message?prescriptionId=12345&redirectPath=%2Fmy-health%2Fmedications
```
The flow relies specifically on the query parameters:
- `prescriptionId`
- `redirectPath`



*These URLs will be needed for Medallia/VSignals configuration.*

---

## Resources

**Figma file:**  
[Source of truth – Secure Messaging](https://www.figma.com/design/s1lAPraSoTHsevgl84SDoo/Source-of-truth---SM?node-id=4510-97564&p=f&t=FSjDUaFgluAS4poD-0)

[Google Analytics: Meds renewal flow event tracking](https://analytics.google.com/analytics/web/#/analysis/a50123418p418218150/edit/etkIBLZyTDevzFP07tdiQA)


**Product guides:**  
[Medications on VA.gov and VAHB Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/product/product-guides/va-gov-medications-product-guide-q4-2025.docx)

---

## 1. Key things we’re monitoring (aligned with the actual flow)

### A. Link rendering + modal behavior (Meds)
- Renewal link visible only for eligible prescriptions  
- Link loads and routes correctly from both list + details pages  
- Modal loads without errors  
- Veterans understand the modal and proceed successfully into SM  

### B. Routing into Secure Messaging
- Stable handoff from Meds → SM  
- No routing failures

### C. Care team selection (SM)
- Care team list loads reliably  
- No missing/empty care teams  
- Drop-offs before team selection  

### D. Prefilled renewal message
- Prefill content loads consistently  
- Correct medication information appears  
- No blank or partial prefill states  

### E. Message editing & sending (SM)
- Veterans reach the editor  
- Veterans edit or clear the prefill  
- Edited vs unedited submissions  
- Return to Meds before sending  

### F. Message submission reliability
- Message send success  
- Draft creation  
- Backend/API disruptions affecting renewal sends  

### G. Return to Meds
- Expected return after sending  
- Early returns  
- Unexpected navigation loops
- Return to SM to review "sent message" 

---

## 2. GA4 monitoring (behavioral)

*Note: Event names below are placeholders and will be confirmed with engineering.*

**`route_to_secure_message`** — Confirms routing from Meds → SM is working and establishes how many Veterans begin the renewal flow.  
**`prefilled_editor_view`** — Confirms Veterans reach the editor after selecting a care team.  
**`edit_started`** — Shows when Veterans begin modifying the prefilled message; helps assess prefill usefulness.  
**`message_submitted` (edited vs not)** — Indicates completion and trust in the prefilled content.  
**`edit_deleted_prefill`** — Shows when Veterans remove the prefilled text entirely, signaling possible irrelevance.  
**`edit_abandoned`** — Identifies friction when Veterans start editing but leave without sending.  
**`return_to_meds_page`** — Indicates confusion or uncertainty if Veterans navigate back instead of sending.  
**`session_duration_in_editor`** — Highlights confidence vs hesitation; may reveal timeouts if sessions expire before sending.

## 2.A GA4 event tracking spreadsheet (proposed 11/24)

The full GA4 event plan is included below, outlining priorities, custom-tagging needs, and where VSignals or Datadog already provide coverage. This spreadsheet serves as the single source of truth for all proposed analytics instrumentation for the renewal flow.

[GA4 events with tagging info_wip.xlsx](https://github.com/user-attachments/files/23731833/GA4.events.with.tagging.info_wip.xlsx)

---

## 3. Datadog monitoring (technical-reliability)

These logs and backend metrics help monitor technical performance:

- Care team API failures  
- Prefill load issues  
- Draft creation failures  
- Message send errors  
- SM backend/API errors  

---

## 4. Medallia / VSignals (qualitative/user-feedback)

We’ll monitor Medallia and VSignals feedback for anything related to the renewal flow and surface notable patterns or issues to the appropriate tool team (Meds or SM).

---

## 5. Success looks like

- Veterans find and understand the renewal link  
- Modal leads smoothly into SM  
- Care teams load reliably  
- Prefill loads consistently and accurately  
- Messages send without errors  
- Low drop-offs  
- No new concerning user feedback  

---



