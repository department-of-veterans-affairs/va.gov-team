# Task-level analysis: Medication renewal flow and prescription statuses

## Summary

This report synthesizes findings from the primary task flows in our research, focusing on how Veterans understand prescription statuses (**Active, In Progress, Inactive**) and complete medication renewal requests using a new Secure Messaging–based flow on VA.gov.

**Key takeaway:** Veterans were able to successfully complete renewal requests when they could locate the entry point and when medication information was complete. The prefilled renewal message consistently built confidence and reduced effort. Friction emerged not from misunderstanding status labels themselves, but from discoverability issues, competing pathways (such as refill-first behaviors), and the cognitive load created by long or cluttered medication histories. Overall, uncertainty centered on what actions were available from each status and how statuses were expected to change over time.

**Jump to:** [Accessibility findings summary](#accessibility-findings)

---

## Understanding of page and initial orientation

### Veterans immediately recognized the Medications list page

All 11 of 11 participants who completed this task recognized the page as the VA.gov Medications list, even when not all content was immediately visible.

What participants noticed first varied widely:

- 3 participants (P1, P9, P10) oriented first to refill-related calls to action such as "Refill medications" or "Start refill request"
- 3 participants (P5, P6, P8) focused first on the medication list or medication names
- 4 participants (P4, P5, P12, P14) noticed medication status information early, most often through the expanded filter
- 1 participant (P3) recognized the page but did not initially notice the medication list because it appeared below the fold

**No participants explicitly noticed a renewal link during initial page entry.** Attention was primarily drawn to refill actions, medication names, or status filters, not to renewal options.

> *"It's the medication refill page, or medication list, where I go in and… or other veterans go in to refill their meds."*

> *"I'm very familiar with this page as far as doing refills."*

Note: P11 did not complete this task due to prototype limitations.

---

## Understanding of medication statuses

### "Active" was understood, but assumptions about available actions varied

All 11 of 11 participants who completed this task understood Active to mean a medication that is current and being taken.

However, what "Active" meant for available actions was inconsistent:

- 7 participants (P1, P3, P4, P5, P6, P8, P14) assumed that an active medication could be refilled or reordered and expressed moderate to high confidence
- 4 participants (P2, P9, P10, P12) interpreted Active as meaning the prescription was current or "in the system," without assuming refills were available

Most participants felt confident in their interpretation, though 2 participants (P4, P6) showed hesitation while explaining it. A small number of participants said that seeing refill counts would make the meaning of "Active" clearer, indicating that the label alone doesn't fully communicate actionability.

> *"What I don't see is whether it has refills."*

> *"Something's active, so you have refills."*

> *"It means you're taking it right now."*

> *"If it had # of refills left, that would be the best."*

Note: P11 did not complete this task due to prototype limitations.

---

### "In Progress" was clear, but expectations for what happens next varied

All 11 of 11 participants who completed this task understood In Progress to mean that a medication or refill was actively being processed and had not yet shipped.

Most expected it to be a temporary state:

- 9 participants (P1, P2, P3, P4, P5, P8, P9, P12, P14) expected In Progress to be a short, temporary state and said they would follow up if it lasted longer than expected. These participants generally expressed moderate to high confidence and expected the status to transition to "Shipped"
- 1 participant (P10) understood the meaning but did not have a clear expectation for what would happen next, noting that timing could depend on availability of the medication
- 1 participant (P6) expressed reduced trust in the status based on past experiences where In Progress remained unchanged for too long without explanation

Most participants used time spent in In Progress as a signal for when to take action, such as contacting the pharmacy or their provider, particularly if the status did not change within a few days. This indicates that duration matters as much as the label itself.

> *"Someone is working on it… after it's done it should be shipped."*

> *"The pharmacist has the prescription and they're just waiting to fill it and send it out."*

> *"Depends how available it is."*

> *"I don't trust in-progress… it went on way too long."*

Note: P11 did not complete this task due to prototype limitations.

---

### "Inactive" was clearly associated with expired medications and provider follow-up

All 11 of 11 participants who completed this task interpreted Inactive as a medication that is finished, expired, discontinued, or no longer refillable.

Most connected it directly to needing provider action:

- 9 participants (P2, P3, P4, P5, P6, P8, P9, P12, P14) associated Inactive with needing to contact a provider if they wanted the medication again
- Several participants also described Inactive medications as older or historical items that remain visible in the list, contributing to clutter
- 1 participant (P1) noticed that some inactive medications showed renewal links while others did not, which caused confusion about what action to take next and whether all inactive medications could be renewed

> *"You need to call doctor to get a new script."*

> *"If I need it I need to get back with my provider."*

> *"I got all these medications I used to take… but they're still there."*

> *"I wish I could click on this box on this screen and have it renewed."*

Note: P11 did not complete this task due to prototype limitations.

---

## Understanding refill vs. renewal

### Two-thirds clearly differentiated the concepts; one-third were uncertain or used them interchangeably

Participants varied in how clearly they distinguished refill from renewal, a distinction that's critical for knowing which action to take.

8 of 12 participants (P1, P3, P4, P6, P8, P9, P11, P12) clearly differentiated the two concepts:

- Generally described refill as continuing an existing prescription with refills remaining
- Described renewal as requiring provider review or action once refills had run out or a prescription had expired
- Several framed renewal as involving the entire medication rather than an incremental refill

> *"Refill means you have refill medications and can order anytime."*

> *"Renewal most likely I need a new order for it."*

> *"…they know a renewal is the entire medication. A refill is, like, oh, they ran out of refills."*

> *"Because some, some, medications expire."*

5 participants (P2, P5, P10, P14, and partially P5) showed uncertainty or used the terms interchangeably:

- Some described renewal as simply "getting more medication"
- Were unsure who requests were routed to
- Stated there was no meaningful difference between the two terms
- This confusion sometimes led to participants using the wrong entry point or being unsure which path to take

> *"Refill and what? [renewal]"*

> *"Medication may or may not be active, however, you still may need the medication."*

> *"Could be either one."*

> *"Refill and renewal is basically the same thing."*

---

## Sources of confusion

### Confusion emerged around status behavior and wayfinding, not label definitions

Most participants did not struggle to understand the basic meaning of the status labels themselves. Instead, confusion surfaced around how and when statuses change, what actions are available from each status, and how to find or act on older medications.

7 of 12 participants (P1, P2, P3, P4, P5, P6, P9) expressed moments of uncertainty related to status behavior:

- These moments were typically tied to edge cases such as inactive or very old medications rather than misunderstanding the terms Active, In Progress, or Inactive
- Several participants (P1, P5, P9, P10) felt overwhelmed by long or cluttered medication histories:
  - Were unsure how older or inactive medications were organized
  - Found it difficult to locate specific medications among many historical entries
  - Described the experience as "convoluted" when very old medications appeared alongside current ones
- Others (P2, P3, P6) were unclear about what certain statuses meant in practice:
  - Who receives a renewal request
  - How less familiar labels (like Active Non-VA) should be interpreted
  - What specific routing or workflow happens when they take action
- A few participants (P3, P4, P9) wanted clearer signals about status transitions:
  - When a medication moves between statuses
  - What "In Progress" includes (is it being packed? approved? shipped?)
  - How long to expect each status to last

> *"I don't like to see all those [expired medications] because then it's convoluted."*

> *"Would be nice to see what active, in-active… what all that means."*

> *"I didn't know at what point something goes into the inactive list."*

> *"Only point of confusion is what 'Active-non VA' means."*

By contrast, 5 participants (P8, P10, P12, P14, and partially P2) described the statuses as straightforward or familiar, even if they still had difficulty locating specific medications. For these experienced users, the labels made sense, but navigation and organization were still challenging.

---

## Discovery of renewal entry point

### Discovery was mixed; many defaulted to familiar refill paths first

Discovery of the renewal link was mixed and strongly shaped by participants' existing mental models for requesting medications. Participants who were accustomed to refilling medications often looked for renewal in the same places, which created friction.

7 of 12 participants noticed the renewal link organically once they reached the correct medication card:

- These participants typically scrolled through the medication list and interpreted the link as a natural next step for getting more medication
- For these users, the link was discoverable and made sense in context

> *"That's… I've not seen that before, that's a new thing for me."*

> *"It says Send a renewal request message, I don't think I've seen that!"*

5 of 12 participants did not initially notice the renewal link and instead relied on familiar behaviors:

- Using the Start a refill request CTA
- Navigating directly to Secure messaging
- Looking for a phone number to call
- Scrolling the page without recognizing the renewal link as actionable

> *"I would just send a secure message."*

> *"Send a secure message to your care team."*

**For several participants, the "Start a refill request" CTA acted as a competing entry point.** When the medication did not appear in the refill list (because it needed renewal, not refill), this led to confusion and task detours, including navigating away from Medications entirely to message a provider. Some participants treated refill and renewal entry points as interchangeable, reflecting uncertainty about which action was appropriate for their situation.

---

## Transition to new screen (modal)

### The modal was understood as an informational transition

Most participants who encountered the modal understood it as an informational transition from Medications to a new page or screen and continued without hesitation (P1, P3, P4, P5, P8, P9, P10, P11, P12, P14).

Participants commonly interpreted the modal as indicating they were leaving the current page and being routed to a new screen. Only a few noticed they were being routed to Secure messaging specifically. Most treated it as a generic page transition rather than understanding the specific destination.

> *"It means I'm going to a different screen, but I'm still logged in."*

> *"It's telling me I'm leaving this page."*

> *"Instead of me coming out of the medication and going into the messages, it put me in there."*

A small number of participants briefly questioned whether the modal was a warning or error, but this uncertainty resolved after reading the content. The hesitation was momentary and didn't block progress.

> *"I always wonder if it's just a warning or if I did something wrong."*

> *"I appreciate having a message letting me know I'm going to a different page."*

Several participants clicked through quickly without reading the full content, indicating low perceived risk or friction. They treated it as a routine system message rather than critical information.

> *"The way it reads is click it, and it's on its way to whoever needs to do whatever to get it renewed."*

---

## Prefilled renewal message

### The prefilled message was nearly universally noticed and valued

10 of 12 participants (P1, P2, P4, P6, P8, P9, P10, P11, P12, P14) explicitly noticed that the renewal message was prefilled and reacted positively:

- Described the message as complete, helpful, and time-saving
- Often emphasized relief at not needing to re-enter medication details
- Viewed it as a meaningful improvement over composing a message from scratch

2 participants (P3, P5) didn't specifically call out the prefilled content:

- Both moved through the message as-is and accepted the defaults without hesitation
- The prefill didn't stand out to them but also didn't slow them down or cause confusion
- This suggests the prefill was so seamless it felt natural rather than noteworthy

> *"Oh everything's already there, I love it."*

> *"That saves people a lot of time."*

> *"I don't want to have to copy down stuff."*

> *"It has all the information needed."*

Overall, participants who noticed the prefilled message viewed it as a meaningful improvement over composing a message from scratch, while those who did not comment on it were still able to proceed without friction. This indicates the prefill succeeded both as a confidence-builder and as a usability enhancement.

---

## Most sent the message as-is with little or no editing

All 12 of 12 participants who reached the prefilled message reviewed at least part of the content before sending. Most treated the message as complete and ready to send, with minimal desire to edit.

9 participants (P3, P4, P6, P8, P10, P11, P12, P14, P5) sent the message as-is or with only a brief courtesy note:

- Indicated strong acceptance of the prefilled content
- Often described the message as already containing everything needed
- Did not feel compelled to add details or explanations

> *"I'd just send it and be done with it."*

> *"I wouldn't really edit it."*

> *"Everything is already there."*

> *"Everything is in here."*

3 participants (P1, P2, P5) expressed interest in adding light personalization or context:

- Such as addressing the provider directly, explaining the situation briefly, or adding a phone number
- Even among these participants, edits were framed as optional rather than required, they felt the message was complete but wanted to add a personal touch

> *"I might add, like, hey, I'm out, I haven't used it in a while."*

> *"Doctor I need this…"*

> *"I would add my phone number for faster processing."*

---

## Confirmation and task completion

### Confirmation was generally understood, but visibility and reassurance varied

Most participants understood that their renewal request was successfully sent, but not all noticed the confirmation alert or relied on it to confirm success. Confirmation signals need to be highly visible to reassure all users.

9 of 12 participants (P2, P3, P4, P6, P8, P9, P10, P11, P14) noticed the green confirmation alert on the Medications list page:

- Interpreted it as confirmation that their message was sent
- Several also recognized that they had been routed back to the Medications list and used this context to orient themselves
- For these participants, the green alert provided clear, reassuring feedback

> *"It says Message sent."*

> *"When it says message sent, it went… 99% of the time."*

3 of 12 participants (P1, P5, P12) did not notice the confirmation alert:

- Instead looked for reassurance in other ways
- P1 navigated to Sent messages to independently confirm the request was submitted
- Others scanned the medications list for changes or cues that the action had completed
- This suggests that confirmation needs to be more prominent or persistent for some users

Participants generally figured out what would happen next based on past experience, not from anything shown on the confirmation state itself. Most expected a short delay before seeing a status change and assumed they would either receive a secure message response or see the medication update later. This means the confirmation state could benefit from more explicit next-step guidance.

> *"Once the doc approves it, it should appear as in progress."*

> *"It will take up to three days for the status to change."*

---

## All participants completed the task with high confidence

All participants who reached the renewal flow were able to complete the renewal request during the session. Confidence was generally high after submission, especially when participants noticed a clear confirmation signal such as the green success alert or a sent message.

10 of 12 participants (P1, P2, P3, P4, P5, P6, P8, P9, P10, P14) expressed clear confidence that their renewal request was successfully sent:

- Often described the experience as easy, straightforward, or intuitive
- Felt the flow aligned with their expectations and past experiences

> *"It was easy… simple… I could do it with my eyes closed."*

> *"The thing that you have added, I love it [renewal link]"*

> *"That it's easy enough to do."*

> *"Easy."*

Several participants described what they expected to happen next, such as waiting a few days for a provider to review the request or for the medication status to update. These expectations were based on past experience rather than explicit guidance in the interface.

> *"I would think usually within 2 to 3 days."*

2 of 12 participants (P11, P12) completed the renewal request but showed some uncertainty about success:

- P11 felt confident during the first attempt but hesitated when medication information was missing in a later task, indicating that missing information creates doubt even after prior success
- P12 submitted the request but was unsure whether it had gone through, indicating that confirmation cues did not fully reassure them

---

## Frustration and doubt

### Many participants did not find requesting a renewal frustrating and described the experience as familiar or routine

5 participants (P1, P4, P8, P9, P3) did not express frustration or doubt with the renewal process itself:

- Felt it aligned with how they already manage medications
- Described it as routine or familiar

> *"No, I do it all the time."*

> *"What I do now is the same thing."*

When frustration occurred, it was tied to added effort or complexity rather than the act of requesting a renewal itself. This is an important distinction, the renewal concept was fine, but surrounding factors created friction.

Two participants (P3, P6) described frustration with clutter or navigation within the Medications experience:

- Too many old medications visible
- Difficulty finding the right medication
- "Hop scotching around" between different pages or sections

> *"I don't like having to sift through these old medications."*

> *"A lot of hop scotching around."*

Doubt emerged primarily after submission, when confirmation or information felt incomplete:

- Two participants (P11, P12) hesitated when details were missing or when they were unsure the request had gone through
- This reinforces the need for clear, visible confirmation and complete information throughout the flow

> *"First time was easy and second time made him hesitate."*

> *"Just knowing whether the message went through."*

---

## Impact of missing information

### Missing medication details disrupted the renewal flow and led to hesitation, workarounds, or abandonment

When required medication details were missing from the prefilled renewal message, participants varied in whether they noticed the alert, how they interpreted the situation, and whether they felt able to proceed. **For many, the absence of prefilled information introduced doubt and additional effort that was not present in the primary renewal flow.** This was one of the most significant friction points in the study.

Most participants did not notice the alert:

- Majority of participants (P1, P2, P4, P11, P12) did not notice the yellow alert
- Some inferred that something was wrong based on the empty or incomplete message content rather than the alert itself
- This indicates the alert may not be prominent enough or may be appearing in an unexpected location

> *"There's nothing to be sent."*

> *"You didn't give me any of the information from the past message."*

> *"It sucks."*

Participants who noticed the alert treated it as informational, not an error:

- A smaller subset (P9) immediately noticed and read the alert
- These participants interpreted it as a signal to slow down and provide information, rather than as a system failure
- They understood what was being asked but still faced the burden of gathering information

> *"The yellow tells me I do need to read this."*

Missing information reduced confidence and changed behavior significantly:

- When prefilled medication details were missing, several participants felt blocked or hesitant rather than confident moving forward
- Many were unwilling to guess or recreate core medication information from memory, especially for older prescriptions
- This is a critical finding, users don't feel empowered to proceed without complete information, even if technically they could

> *"You don't know the medication unless you actually have it with you."*

**Workarounds emerged when participants tried to recover missing details.** Participants described a range of coping strategies, showing significant effort and creativity:

- Going back to the medication details page (P2, P11)
- Checking inactive medications (P2)
- Copying and pasting medication information into the message (P6, P11)
- Printing the medication details page to reference while writing the message (P2)
- Writing a note explaining they did not have all the details (P2)

These workarounds indicate users are motivated to complete the task, but the added effort is substantial and could lead to abandonment in real-world scenarios.

> *"You'd need to check the inactive meds page."*

> *"Go to the medication details page."*

> *"Print it out so you can use it."*

A couple participants abandoned the renewal flow entirely:

- When the effort to add missing information felt overwhelming, a few participants exited the renewal flow
- Reverted to familiar behaviors such as starting a new Secure message from scratch (P4) or deciding they would follow up later (P12)
- This represents a critical failure point where the intended flow breaks down completely

> *"I guess I would have to put in the medication, and I might not know # of refills, expiration…."*

---

## Sources of reassurance

### Clear feedback and familiar patterns helped resolve moments of uncertainty

Participants experienced moments of uncertainty at different points in the flow, often around who requests were sent to, how statuses worked, and what would happen next. Reassurance typically came from prefilled content, visible confirmation cues, and familiar patterns from past VA experiences.

Most participants (9 of 12: P1, P2, P3, P4, P5, P6, P9, P10, P12) expressed at least one moment of uncertainty during the session.

Common sources of uncertainty included:

- Distinguishing refill vs. renewal (P1, P2, P4)
- Understanding status transitions like Inactive or In Progress (P3, P6, P9)
- Knowing who would receive a renewal request (P1, P2)
- Brief confusion when expected medications were not visible due to filters being applied or because they were viewing a refill-only list instead of the full Medications list (P1, P2, P5, P10)

> *"I don't know who it directs it to."*

> *"It could get confusing if there is a difference between them [refill vs renewal]."*

Reassurance often came from automation and clear feedback:

- The prefilled renewal message was repeatedly cited as calming and confidence-building (P1, P2, P4, P9, P11), especially when it included the provider's name and medication details
- The inclusion of specific details (provider name, medication name, etc.) made participants feel the system "knew" what they needed and was handling it correctly
- The green "Message sent" confirmation also helped reduce doubt for many participants who noticed it

> *"Everything's already there, I love it."*

> *"That saves people a lot of time."*

> *"Seems very intuitive and very basic."*

> *"When it says message sent, it went… 99% of the time."*

A smaller group of participants (P8, P14) reported little to no confusion at any point:

- Described the experience as familiar and straightforward based on prior use of VA tools
- For these experienced users, the flow matched their mental models and existing practices

---

## Overall impressions and suggestions

### Overall impressions were largely positive, with consistent opportunities to reduce clutter and improve clarity

Participants generally described the medications statuses and renewal flow as easy to use and familiar, especially when compared to past VA experiences. Most felt confident completing the renewal request and did not view the flow itself as difficult.

8 of 12 participants (P1, P2, P4, P5, P6, P9, P10, P14) described the overall experience as easy, simple, or intuitive:

- Often noted that it aligned with how they already manage medications on VA.gov or My HealtheVet
- Felt the renewal flow was an improvement or natural extension of existing functionality

> *"It was awesome… easy… simple… to the point."*

> *"Pretty simple, once you do it a few times."*

> *"Seems very intuitive and very basic."*

At the same time, participants consistently identified opportunities to reduce cognitive load and improve clarity, particularly around information density and wayfinding. These suggestions came even from participants who successfully completed tasks, indicating friction points that could be smoothed.

### Veterans suggested improvements to reduce cognitive load and improve clarity

#### Reduce information density and improve organization

Several participants (P1, P3, P6, P9) found very old, inactive, or duplicate medications overwhelming:

- Suggested clearer separation or archiving of inactive medications
- Wanted a way to hide or collapse medications they no longer need to see
- Described the current list as "convoluted" when mixing current and historical medications

> *"I don't want to see all those… it's convoluted."*

> *"You can have a separate screen for inactive medications."*

#### Clarify status progression and timing

Clarity around status progression and timing was a recurring theme. Participants wanted clearer indicators for what "In Progress" means, whether shipping has started, and when to expect the next update (P1, P4, P5):

- Desired more granular status updates showing progression through the fulfillment process
- Wanted time expectations or estimates for how long each status typically lasts
- Suggested clearer language about what's actually happening ("getting ready to ship" vs. just "in progress")

> *"Instead of just 'In progress,' say getting ready to ship."*

> *"Show me the progress... really that simple."*

#### Strengthen visual emphasis and guidance

Several participants suggested stronger visual emphasis and guidance, especially for actions. Requests included:

- Making CTAs more prominent (P2, P6)
- Clarifying the difference between refill and renewal upfront
- Surfacing renewal actions more clearly within the medications list
- Making key actions more visually distinctive so they don't get lost

> *"Making them a little bit bigger [CTAs] would help."*

> *"Maybe just… the difference between refill and renewal."*

A smaller group of participants (P8, P14) did not suggest changes and described the experience as fully familiar:

- For experienced users, the flow largely met expectations
- Indicated that the design works well for Veterans who are already comfortable with VA.gov

> *"So far, it's already familiar."*

> *"Nothing. No… I love this system. It works very well."*

---

## Recommendations

Based on these findings, consider prioritizing:

- Improve discoverability of renewal actions
  - Make renewal links more prominent within medication cards
  - Reduce competition from the "Start a refill request" CTA for medications that need renewal instead of refill
  - Consider differentiating renewal and refill entry points more clearly
- Clarify status behavior and progression
  - Provide more context about what actions are available from each status
  - Add information about how long statuses typically last and what triggers transitions
  - Make "In Progress" more granular (e.g., "Being prepared for shipment," "Awaiting approval")
- Reduce medication list clutter
  - Separate or archive very old inactive medications to reduce cognitive load
  - Consider collapsible sections or tabs for current vs. historical medications
  - Allow users to hide medications they no longer need to see regularly
- Strengthen missing information handling
  - Make alerts more noticeable when required details are missing
  - Provide clearer paths to recover information (e.g., direct links to medication details)
  - Consider preventing the flow from continuing without required information, or pre-populate with partial data when available
- Maintain and expand the prefilled message approach
  - This was a clear success and should be preserved
  - Ensure medication information is always complete when triggering the renewal flow
  - Consider expanding this pattern to other messaging flows
- Improve confirmation visibility
  - Make the success confirmation more prominent and persistent
  - Consider adding explicit next-step guidance (e.g., "Your provider will respond within 2 to 3 business days")
  - Provide alternative confirmation paths for users who miss the initial alert
 
  - ---
## <a name="accessibility-findings"></a>Accessibility findings summary

### Participants tested

- 1 screen reader user (P11 — JAWS since 2020)
- 2 speech input users (P2 — Dragon at home but not used during session; P3 — Dragon)
- 1 magnification user (P5 — built-in screen magnifier + glasses)
- 1 mobile user (P10 — reported mobile accessibility challenges)

---

## Key findings

#### Alert visibility (screen reader)

- P11 missed the error alert on the missing-information page entirely  
  > *"If there was an alert, I didn't notice it"*
- Alerts need proper ARIA announcements and more prominent placement

#### Link structure (screen reader)

- Renewal instructions include non-linked text followed by a link, which could be missed by AT users
- Suggested linking the full instructional text to reduce missed actions

#### Error message associations (screen reader)

- Input error span does not clearly associate with a specific field
- Error messages must be programmatically associated with form fields

#### Content below the fold (speech input)

- P3 frequently missed content below the fold, particularly the medication list
- Did not think to scroll to find additional content
- Status descriptions in the filter were not read or noticed

#### Mobile navigation (mobile)

- P10:  
  > *"Very very difficult to navigate through mobile device, too small to see"*
- Indicates responsive design needs improvement

---

### Positive findings

#### Prefilled content highly valued

- P11 appreciated prefilled medication details:  
  > *"This is beautiful to me"*
- Expressed strong trust in auto-generated information:  
  > *"If it's auto generated, I'm going to leave it alone"*
- Appreciates detailed medication information despite increased content:  
  > *"I like to be informed"*

---

### Other usability issues

#### Redundant text (speech input)

- P3 noted repeated label text ("Reason for use: Reason for use not available") caused confusion
- Simplifying repeated wording could reduce cognitive load

#### Alert placement (speech input)

- P3 questioned placement of ammonium chloride alert on the page

#### Missing information experience (screen reader)

- P11 described contrast between prefilled and non-prefilled experiences as jarring:  
  > *"It almost makes me not want to bother with it, with the renewal request"*

---

### Technical notes

- P11 could not share JAWS audio due to equipment setup (requires Zoom "Share sound" option)
- P3 had no technical issues selecting elements using voice input
- P11 navigated past a ghost element between label and dropdown without task impact

