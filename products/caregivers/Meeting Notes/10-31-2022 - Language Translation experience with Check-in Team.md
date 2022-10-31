## 10/31/2022 - Language translations experience
- Lori Pusey: PM on Check-In Team
- Heather Justice: PM on 10-10 Health Apps team
- Matt Long: Frontend Engineer on 10-10 Health Apps team
- Jessica Stump: UX Designer on 10-10 Health Apps team

### Notes:
- Communications
     - Randi H is main contact in between Lori and State Dept translators
     - Lori Did meet with the translators once to get a better understanding of how they work
     - Have a JSON file for each language
          - Key value pairs
     - There were some back & forth, this is round 3
     - Lori keeps track of changes needed and sends a bulk request of updates every few months or so (quarterly)
     - Some keys (Key value pairs) may not be used now (future)
     - Sent Additional content to translate such as time zones and text messages
     - The translators will want access to site to see it for them selves (Check-in was very hard to do)
          - Sent text/content originally, didn't have screenshots
          - Once delivered, Lori sent screenshots
               - Created workflow screenshots
               - Take what they sent, assigned numbers and put those numbers on the screenshots
               - Seeing it in context, that is what helps translators see whether it makes sense
          - Sent both Spanish and English so they can check against each other 
               - Helps with QA
               - May go back and forth during QA for tweaking and questions

- Was this application multilingual to start with or did that come later?
     - It came later, when they were releasing to VISNs
     - Stakeholders were prepping for releasing to FL and PR, and brought up idea to get translations
     - Danielle still working thru the process to see the best way to formalize
     - Tested with bi-lingual Veterans for context as well
     - There is lag time when sending to State Dept translators, and getting it back
          - A Disclaimer was put at the top of Check-in application "Some content may be in English" when pending updates
          - This way, the team can still release updates, and the translations will be added later
     - Veterans stated it is disconcerting to have mixed languages
     - Stakeholders thought it would be more helpful than not having it there. 

- Specific pages vs language toggle?
     - The way this was implemented, they didnt have to do different language pages
          - Using locale settings
          - It decides which JSON file to use, doesnt have to worry about the routing
     - Accessibility for screenreaders, some aria-labels, you have to think about those as being translated as well

- Everything we request to be translated is tracked in an application
     - Have to let them know if something is being used or not

- Language Toggle
     - Links that point to pages that are only in English should have that in parentheses (ex: en ingles) 
     - Can toggle on each page of the application
     - Also checks browser settings and picks up if you are in the other language
     - Focus is on US Territory languages
     - Consider what to do with more than 3 languages
          - a long, horizontal list of languages across the top of the page is not ideal
     - Caregivers mostly use English
     - Very few people are using this toggle right now
          - 1-2 per week
     - Lori created a program to evaluate English and spanish to see what is different and needs updating
    
- Timeline from start to delivery during initial translation?
     - Spanish took about 3 months to get from start to delivery on the first translation
     - Doesn't take long to do updates now
     - Tagalog took a long time
          - Randi did mention that there was only 1 Tagalog translator






