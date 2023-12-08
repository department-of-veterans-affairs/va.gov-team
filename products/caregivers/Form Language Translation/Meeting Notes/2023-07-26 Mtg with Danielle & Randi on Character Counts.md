## 10-10CG Spanish Translation - Meeting with Danielle Thierry & Randi Hecht
### Jul 26, 2023 
- **Update** on Spanish Translation of the CG form
     - Should be getting the landing page and form by the end of this week!
---

- **Topic**: How to handle character counts and characters with accents in the Spanish language


     - Josh Kim raised an [accessibility issue](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/60351) with character count limits and characters with accent marks being counted as 2 characters by the downstream system
     - Can be rejected due to exceeding the limits even tho it “appears” on the frontend UI that the character count is within the limit.
     - Also be mindful of “Text swell” - more characters used in Spanish to say the same thing in English

     - Not sure what the solution is
          - Could we add the characters as single acceptable characters?
          - Could we add a character count on the frontend that is accurate (accounting for this double count?)
          - Could we increase the character count on the backend? (accounting for this double count?)
          - Change characters on the backend
               - We don't want to remove accents from characters - could change meaning

     - Next steps
          - Talk with Josh Kim on his research
          - Talk with Josh Faulkner on how they enter Spanish language data today in Enrollment system
          - Talk with Marla & team on how they enter Spanish language data today in CARMA
          - Discovery on solutions 
               - How is this handled in the world today?
