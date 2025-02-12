Live Audit Notes

1. Secondary Action Links

   • Issue: Links that serve as secondary actions should clearly convey their purpose to all users. For instance, “Remind me later” may not provide sufficient context for users who rely on clarity to make decisions.\
   • Suggestion: Use a more descriptive label such as:\
   “Remind me later and return to the previous page.”

2. Text and Link Clarity

   • Issue: Call-to-action phrases should be unambiguous to ensure users understand the intended action.\
   • Example:\
   • Instead of: “Add your contact information,”\
   • Use: “Update your VA profile with contact information.”

3. Confirmation Feedback for Updates

   • Current Message: “Your contact information has been updated.”\
   • Suggestions for Improvement:\
   • Provide visual confirmation for all users.\
   • Add an accessible announcement using aria-live="polite" to dynamically notify screen reader users.\
   • Example announcement:\
   “Your contact information has been successfully updated.”

4. Informational Context for Appointment Reminders

   • Issue: The listed information under “If you’re enrolled in VA health care…” is clear but lacks context about how users will receive these updates. This can create confusion, especially for users relying on assistive technology.\
   • Suggestion: Add clarifying details about communication methods. For example:\
   • “We will send these updates via email or mail, depending on your preferences.”

# Pilot Notes

## Success Page

- Consider adding an `aria-live="polite"` to the success alert to ensure screen reader users are presented with this information upon page load.
- Pilot was unable to navigate the success page with the arrow keys while using a screen reader. Not sure if this is markup issue or something buggy that happened with the screen reader itself. Ensure markup is consistent with previous pages, and if so, could be a one-off issue.


## Error messages

- Interesting functionality with the error messages

  - When there is no content in the required field, the error will say “you must provide a response”
  - Once content is added in, another message shows dynamically saying the number must have 10 digits
  - These errors are somewhat distracting as they’re alerted in the middle of the user typing content and the message could be missed
  - Pilot and co-pilot had issues with NVDA and JAWS screen readers with getting the error messages read correctly as they change dynamically.
  - NOTE: This is a component issue - nothing to do with the actual form


## Contact Information

For the contact information on the main page, we recommend making the content more specific to the kind of information being updated, as mentioned in the live audit notes as well. This should be done using visible text rather than any screen reader specific text (aria-label) as there are visual users who would appreciate this distinction as well.
