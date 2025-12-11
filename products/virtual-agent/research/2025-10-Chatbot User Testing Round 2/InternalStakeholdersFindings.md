# Internal Stakeholder Findings

In a continued effort to improve the chatbot, the chatbot team met with internal stakeholders and different internal VA groups to get feedback about the chatbot.  
- Session 1 was with Danielle Thierry and the Content IA team.
- Session 2 was with April Forman of the VCL team.
- Session 3 was with Brian Mahlum of the CCS & UC teams.
- Session 4 was with the identity team.
- Session 5 was with Kimberly McManus of the AI / CAIO team.
- Session 6 was with Technical Director Fernando Gonzalez. 

---

## Session 1

### Key Findings

- The sign-in chatbot is successfully answering user questions and providing relevant information, particularly for sign-in related topics.
- Edge cases and nuanced user scenarios can present challenges for the chatbot, including those involving caregivers or guardians and the complexity of managing veteran accounts.
- Participants discussed how the chatbot communicates, specifically the tone/voice, such as the use of “I’m sorry” as well as whether it appears to be speaking as a VA agent or as a third-party.
- Accessibility and conversational flow issues, such as chatbot context loss and scrolling difficulties, were identified.
- The chatbot is generally perceived as a helpful tool, but there is wariness about specific language and scenario handling (e.g., implying permission for account sharing, emotional language from chatbot).
- Internal dogfooding and wider rollout are planned, with a focus on continuous refinement of both content and conversational experience.

### Details of Findings

- The chatbot draws information from source content, occasionally rephrasing but generally accurate.
- For scenarios involving caregivers or court-appointed guardians, the chatbot may inadvertently guide users to actions (like account sharing) that are “not untrue” but may place VA in a gray legal/ethical area.
- Context retention needs improvement; the bot can lose context, especially regarding ongoing identity or verification issues.
- Participants discussed the appropriateness and impact of chatbot empathy (“I’m sorry”) and whether responses should use “I”/“we” (agent) language. There is general discomfort with bots expressing emotion.
- Accessibility concerns include screen scrolling and response delivery for users with assistive needs.
- The participants stress the need for clear guardrails, especially around information that could be misconstrued or is highly regulated.

### Additional Insights

- There is recognition that chatbot support for sign-in is valuable because sign-in flows are complex but the answers are typically straightforward.
- The desire for a “hand-holding”/supportive experience is balanced with the need not to encourage inappropriate practices (e.g., account sharing).
- Language such as “may” is valued for introducing needed caveats and protecting against blanket guidance.
- A strong link between chatbot content and authoritative VA information is necessary.

### Recommendations

- Refine chatbot responses to avoid implying inappropriate actions (e.g., sharing logins, pretending to be the veteran).
- Adjust pseudo-empathy in language to acknowledge process frustration without feigning emotion (“We know this is difficult…” versus “I'm sorry.”).
- Ensure the chatbot stays in context in multi-turn situations (e.g., identity verification).
- Address accessibility concerns (screen scrolling, clear instructions).
- Consider whether the chatbot should speak as an agent or as a third-party referencing VA guidance. Make the agent status explicit and consistent.

### Next Steps

- Incorporate suggested refinements on pre-release “cards” or Github tickets.
- Continue dogfooding with wider stakeholders including voice bot team.
- Prepare findings summary for VA review and plan next iteration based on feedback.
- Test further with veterans and track accessibility, language, and scenario coverage.

### Further Research Needed

- Investigate alternative conversational designs for scenarios involving account management by caregivers/guardians.
- Study chatbot emotional language impact on veterans and users.
- Collect data on accessibility barriers in chatbot UIs.
- Evaluate chatbot’s handling of context and escalation for distinct support issues.

### Memorable Quotes

> “It's a little wonky to say to manage it as a caregiver. The veteran must sign in, so it would almost be like ... you're kind of implying that the veteran should sign in and then give the caregiver the account.”

> “I feel weird about a bot having emotions personally.”

> “The bot is not sorry to hear that 'cause it's not a human being, yeah.”

> “We know we have this somewhere in content like we know this process can be difficult, like acknowledging the frustration without reacting in the moment either with an I'm sorry or we're sorry.”


### Suggestions and Feedback Items

1. Avoid implying users should share credentials or “pretend to be” someone else.
2. Prefer acknowledgment of process frustration over pseudo-empathy (“I’m sorry”).
3. Use caveating words like “may” to avoid blanket statements.
4. Improve accessibility features (scrolling, instructions).
5. Refine bot to maintain conversational context across exchanges.
6. Consider adopting “we” language but clarify agent status of the chatbot.
7. Test for how persistent empathy or escalation impacts user frustration.
8. Continue iterative improvement based on stakeholder vetting and user testing.

---

## Session 2

### Key Findings

- The team is advancing chatbot moderation using external endpoints for content safety and crisis detection.
- There is significant nuance in crisis language detection, particularly distinguishing between “swear words,” negative sentiment, and true hate or crisis speech.
- There are ongoing debates about moderation approaches, handling false positives, and the risk of over-escalation to crisis responders.
- The crisis escalation workflow and chatbot’s role require careful balancing to avoid overwhelming crisis resources and to respect user autonomy.
- There’s attention to escalation triggers (e.g., quick-connect buttons, use of crisis lines) and the interaction between automated and live support.

### Details of Findings

- Moderation endpoints are being used to detect incoming language around crisis, but keyword-based approaches are flagged for missing nuance (e.g., not all “bad” language is a true crisis).
- The reality of clinical crisis situations is complex—high emotionality, frustration, and dysregulation are common; not all users in crisis use explicit keywords or even want escalation.
- Examples are provided showing how veterans in distress may express themselves (swearing, complaints, negative sentiment) without targeting hate speech or group.
- There’s caution on automatic escalation and the fallout when users are sent to crisis lines when not appropriate (“we'll send the police to their door and what they really want is their pharmacist to fill their Xanax prescription”).
- Team members discussed the real-world impact on crisis responders and resource management.
- Recommendation for clear up-front messaging about what service the chatbot provides and what to do in emergent situations.

### Additional Insights

- Escalation processes should prioritize confirmed need over broad thresholds (“casting a wider net” can overload crisis resources).
- Defining and detecting “crisis” or “hate speech” language requires sophistication (context, dysregulation, emotionality, not just explicit words).
- Automated escalation tooling should always account for human follow-up and resource limitations.
- Crisis buttons and scripts need to be tightly governed, with approval from relevant offices (Office of Suicide Prevention).

### Recommendations

- Move beyond keyword-based moderation to sentiment/context-aware approaches.
- Provide clear onboarding to chatbot users about limitations and escalation pathways (“customer service” vs. healthcare interactions).
- Limit direct escalation to crisis lines unless strong evidence; route most cases to live customer service agents for triage.
- Require OSP (Office of Suicide Prevention) approval for any direct crisis escalation features/buttons.
- Continue training on moderator perspectives, defining “crisis” beyond literal hate speech or negative language.

### Next Steps

- Implement improved content safety endpoint logic, reducing reliance on keywords.
- Adjust escalation script/buttons pending OSP approval and stakeholder consent.
- Set up additional trainings for moderators (linguistic nuance, empathy without fragility).
- Conduct scenario-driven testing for escalation workflows and “dysregulated” customer experiences.

### Further Research Needed

- Develop robust NLP models for sentiment and crisis detection with minimal false positives.
- Track crisis escalation volumes and actual needs for continual optimization.
- Gather feedback from crisis line responders on referral quality from chatbot.
- Assess user reaction to up-front messaging re: scope/limit of bot-based problem-solving.

### Memorable Quotes

> “If you're swearing at a chatbot, you're not doing well.”

> “But in this particular case I've got only so many responders. So if you engineer things at scale ... you're going to be sending a bunch of volume to my responders.”

> “You want to send people to the 411 line or to a person as opposed to an automated agent.”

> “So offer that right at the beginning and I think that that should be on the page ... Like this is a customer service situation, this is not healthcare.”

> “We don't want to treat people as if they're incompetent and can't consent, so offer that right at the beginning.”

### Suggestions and Feedback Items

1. Transition moderation from keyword-only to context-sensitive models.
2. Avoid escalating to live crisis resources unless warranted; triage through live customer service agents for most dysregulation cases.
3. Secure explicit approvals for direct crisis-related features.
4. Provide upfront, clear instructions on bot scope and escalation.
5. Train moderators on subtleties of negative sentiment, frustration, and emotional crisis detection.
6. Continue research on NLP tools for accurate crisis and hate speech identification.
7. Track escalation volumes to avoid resource overload and false positives.

---

## Session 3

### Key Findings
- The bot generally produces accurate sign-in responses, but non-expert users find it hard to verify factuality.
- Window size and layout constraints undermine readability and experience.
- Too much "related" info, disclaimers, and references create cognitive noise.
- Slow bot response leads to perceptions of non-functionality.

### Details of Findings
- Positive perception of the bot’s clarifying questions, but size of prompt/reply areas inhibits UX.
- Overabundance/redundancy of references, related info, and disclaimers; user suggests minimizing their visual prominence.
- Disclaimers are necessary, but should be static or less intrusive.
- Confusion when leaving sign-in scope or context-switching mid-session.
- Accessibility concerns noted (window resizing).

### Additional Insights
- User tested with child/dependent scenarios; bot answered accurately without misleading (e.g., child login).
- Session included high-level reflection on future bot scaling and planned improvements.

### Recommendations
- Increase main window size and allow resizable layouts.
- Minimize and/or move disclaimers to static page bottom.
- Reduce visual noise of references/related info.
- Improve progress indicators and speed.

### Next Steps
- Plan design iteration with feedback.
- Usability testing with further participants.
- Review scenarios where bot exits sign-in context abruptly.

### Further Research Needed
- Compare responses with expert fact-checking.
- Broader accessibility/user-experience testing.
- Test disclaimers and related info display options for optimal clarity and trust.

### Memorable Quotes
- "I like those [clarifying questions]... but they're really big."
- "Too much noise."
- "Maybe this answer may be AI generated and may contain inaccuracies."
- "The related information I think has too much noise."

### Suggestions/Feedback Items
- Make main window resizable
- Allow user to minimize or collapse references/disclaimers
- Address slow response perception
- Clarify when chat leaves sign-in agent/context
- Reduce over-sharing of related info/references

---

## Session 4

### Key Findings
- Detailed user experience feedback, especially on links/buttons and visual layout.
- Preference for concise, actionable information over "laundry lists."
- Bot handles main sign-in scenarios but user expects more streamlined user journey.
- Request for immediate escalation pathways (live agent/chat/call), context-retaining between bot and human.

### Details of Findings
- Click-to-dial and link interactivity is well-received.
- Suggestions to keep bot response focused; avoid overwhelming with options.
- User asks about context retention — bot should pass conversational info when escalating to a human.
- Saving chat history, authenticating users, and context hand-off are all highlighted.

### Additional Insights
- Both veterans and non-veterans see value in simplified pathways.
- User expects bot to not just answer but facilitate clear next steps.

### Recommendations
- Implement context-aware hand-off to live agents, including chat log and authentication.
- Refine bot output for conciseness.
- Develop interface for immediate escalation to a human, with context preserved.

### Next Steps
- Continue design iteration with feedback.
- Develop and test live agent hand-off.
- Usability testing on escalation workflows.

### Further Research Needed
- End-to-end journey simulation from bot interaction to live agent.
- User authentication/privacy implications in escalation.

### Memorable Quotes
- "Keeping it shorter and concise would be better."
- "I'd love to fix this like immediately."
- "It answered my question... but I have a follow-up."
- "This is just from a design perspective... Be awesome if I could grab a corner and make this bigger."

### Suggestions/Feedback Items
- Context retention for bot-to-human escalation
- Simplify bot responses; minimize info overload
- Immediate hand-off to live agent/chat
- Resizable chat window

---

## Session 5

### Key Findings
- Responses to sign-in and basic account-access questions are generally robust and relevant.
- Window size and layout issues impact usability (chat window too small, hard to view long text).
- Bot asks clarifying questions well, but sometimes replies are visually overwhelming ("too much noise").
- Related info/references, disclaimers, and redundant details compete for space and attention.

### Details of Findings
- Chatbot accurately handles scenarios for dependents/caregivers.
- Recall confusion when moving out of sign-in agent domain, and lack of clarity that context switched.
- Static disclaimers should be less visually intrusive.
- Slow chat response creates sense of brokenness or delays.

### Additional Insights
- Real scenario testing—child login, followup question—shows robustness but also ambiguity in bot messaging.
- Accessibility feedback includes need for resizeable chat area and attention to screen reader compatibility.

### Recommendations
- Make chat window resizable; improve scroll/UX for longer content.
- Minimize related info and anchor disclaimers at bottom or away from main dialogue.
- Improve context retention and messaging when scope changes.
- Add progress or "thinking" indicators for slow response.

### Next Steps
- Implement accessibility and layout fixes.
- Further edge-case and out-of-domain scenario testing.
- Design moderation for emotional/complex cases for better hand-off or referral.

### Further Research Needed
- Test with real veterans and non-veterans for factual accuracy and tone.
- Accessibility testing; A/B test display of disclaimers/noise.

### Memorable Quotes
- "I like those [clarifying questions]... but they're really big."
- "Too much noise."
- "Maybe 'this answer may be AI generated and may contain inaccuracies'."

### Suggestions/Feedback Items
- Resizable window; fix chat scroll
- Minimize/anchor disclaimers
- Mark and clarify context agent/scope switches
- Increase speed or process/typing indicators
- Minimize visual noise from references

---

## Session 6

### Key Findings
- User prefers concise and actionable information over dump of details.
- Chat window/interactivity (click-to-dial, links) is a valued feature.
- Responsive bot, but escalation/hand-off needs to retain chat context for human support.

### Details of Findings
- Concise responses and escalation options expected by users.
- Live agent/escalation should carry context and authentication/transcript.
- Larger/resizable chat window desired.

### Additional Insights
- Veteran/non-veteran distinction not a blocker for usefulness, but more tailored content preferred.

### Recommendations
- Limit responses to concise, minimally complex instructions ("laundry list" is overwhelming).
- Build hand-off that transmits context, chat log, user ID.
- Support window resize/interactivity.

### Next Steps
- Design and test escalation flow.
- Refine response templates for conciseness.

### Further Research Needed
- Privacy/technical review for context transfer.
- Usability tests of escalation (from bot to human).

### Memorable Quotes
- "Keeping it shorter and concise would be better."
- "Be awesome if I could grab a corner and make this bigger."
- "Would you like me to help you log into one of those three?"

### Suggestions/Feedback Items
- Context retention in escalation
- Concise responses
- Larger/movable chat window

---

# Synthesis: All Sessions — Consolidated Key Findings & Recommendations

## Shared Findings Across Sessions

- **Accuracy:** Bot provides mostly correct answers for sign-in, but edge cases (dependent/caregiver, guardianship, emotional/crisis situations) are challenging.
- **Tone:** Emotional language from bot ("I'm sorry") is perceived as artificial or inappropriate; users prefer respectful, neutral acknowledgment.
- **Context Retention:** Users want bot to retain conversation context, especially during escalation to humans and across complex, multi-step flows.
- **Accessibility & UI:** Small/non-resizable chat window and large, cluttered prompts/replies undermine usability, especially for accessibility needs.
- **Information Overload:** Overabundance of related info, references, or disclaimers wastes cognitive bandwidth; essential info should surface without noise.
- **Escalation:** Need clear escalation pathways to live agents, with context transfer (chat log, authentication) preserved.
- **Moderation:** Crisis and malicious scenarios need more sophisticated NLP, better detection, and clinical oversight.

## Synthesized Recommendations

1. **Refine Bot Tone and Language**
   - Replace emotional, anthropomorphic language ("I'm sorry") with neutral, respectful acknowledgements.
   - Ensure bot response aligns with VA authority, not decision-making.

2. **Streamline Information Display**
   - Minimize excessive references, disclaimers, and related info.
   - Make disclaimers less visually dominant (static, smaller, move to page bottom).

3. **Improve Accessibility and UI**
   - Enable resizable chat windows and fix scrolling/prompt sizing.
   - Guarantee screen reader and keyboard navigation compatibility.

4. **Strengthen Context Retention and Escalation**
   - Ensure bot retains and passes conversation context for smooth hand-off to human agents.
   - Incorporate authentication and chat log transfer during escalation.

5. **Optimize Moderation and Crisis Handling**
   - Upgrade NLP moderation for crisis detection (context, language richness, clinical input).
   - Clarify escalation to crisis line, with policy/clinical review.

6. **Clarify Bot Scope and Agent Role**
   - Clearly distinguish when bot is providing VA-authoritative info versus neutral assistance.

7. **Enhance Progress and Status Indicators**
   - Give users clear signals when bot is processing or changing context (loading, sending, switching agents).

## Next Steps

- Design iterations with direct user feedback.
- Systematic accessibility and crisis scenario testing.
- Formalize escalation workflows and clinical moderation policies.
- Monitor bot usage and iterate with analytics/data.

## Further Research Needed

- Controlled usability studies with veterans, caregivers, and those with accessibility needs.
- NLP benchmarking and crisis simulation with expert review.
- End-to-end workflow testing for escalation procedures.

---

## Memorable Quotes — All Sessions Collection

- "It almost makes it sound like I'm bad or something."
- "I feel weird about a bot having emotions personally."
- "Too much noise."
- "Keeping it shorter and concise would be better."
- "The office of Suicide Prevention needs to approve that button."
- "Be awesome if I could grab a corner and make this bigger."
- "Context retention for bot-to-human escalation."

---

## Consolidated Suggestions/Feedback Items

- Make chat window resizable; fix scrolling/size issues.
- Minimize references, disclaimers, and cognitive noise in responses.
- Replace emotional (human-like) language with neutral, respectful acknowledgements.
- Clarify escalation triggers and ensure context/metadata transfer to live agents.
- Enhance crisis/NLP detection beyond keywords; get clinical moderation approval for crisis line components.
- Support clear progress/status feedback during all bot operations.
- Systematically test legal/edge cases, emotional scenarios, and accessibility workflows.
- Ensure bot appropriately represents VA (not as a decision-maker or overly empathetic agent).
- Continue broad usability, accessibility, and escalation pathway testing.

```
