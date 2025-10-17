### Analytics metrics for new Meds flow via Secure messaging (MVP)

To understand how Veterans move through the new medication renewal flow and where things might be working well (or not), we’ll use **Google Analytics** and **DataDog** to capture both user interactions and technical reliability. These metrics focus on how Veterans engage with the prefilled message, whether they complete or abandon it, and how reliably the flow performs behind the scenes.

---

**Proposed core metrics (Google Analytics)**

- **edit_started**: When a Veteran first changes the prefilled message text.  
  *Why it matters:* Shows how often people feel the need to personalize or adjust the message. Frequent edits may suggest the prefill doesn’t meet user needs, while few edits may indicate it’s doing its job well.

- **message_submitted (edited vs. not)**: When the Veteran sends the message, noting whether it was edited first.  
  *Why it matters:* Helps assess trust in the prefilled message and measures successful task completion.

- **edit_deleted_prefill**: When all prefilled text is cleared before submitting.  
  *Why it matters:* Suggests the prefill wasn’t helpful or relevant. Useful for refining API-populated content.

- **edit_abandoned**: When someone starts editing but exits without sending.  
  *Why it matters:* Highlights potential friction or uncertainty during message creation. Helps pinpoint drop-off moments.

---

**Additional tracking (Google Analytics + DataDog)**

- **prefill_loaded_success (DataDog)**: Logs when prefilled content is successfully returned by the API.  
  *Why it matters:* Confirms that the data fetch from the medications endpoint is functioning as expected. Helps differentiate UX issues from API or latency problems.

- **prefill_load_error (DataDog)**: Logs when prefilled content fails to load, times out, or returns incomplete data.  
  *Why it matters:* Captures backend/API failures. Useful for identifying system-level causes of blank or missing prefill text.

- **route_to_secure_message (Google Analytics)**: Fires when the Veteran moves from the Meds page into Secure Messaging.  
  *Why it matters:* Verifies that routing is working as intended and provides a baseline for how many users begin versus complete the flow.

- **message_send_error (DataDog)**: Logs failed message submissions due to API or server errors.  
  *Why it matters:* Tracks when Veterans attempt to send but encounter a backend issue, allowing engineering to correlate failures with latency or service disruptions.

-  **session_duration_in_editor (Google Analytics)**: Measures how long Veterans stay in the message editor before submitting or leaving.  
  *Why it matters:* Offers insight into user effort and engagement. Short durations can point to quick, confident task completion; longer durations might signal hesitation or confusion. Because VA sessions automatically time out after a set period of inactivity, *could* this metric also help identify when users may be unintentionally logged out before finishing their renewal request?

- **return_to_meds_page (Google Analytics)**: When a Veteran navigates back to the Meds section instead of submitting.  
  *Why it matters:* May indicate Veterans lacked confidence or clarity to finish their renewal request.

---


