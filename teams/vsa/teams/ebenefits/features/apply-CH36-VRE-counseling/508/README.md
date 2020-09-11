# Accessibility: PCPG or CH36 - Personalized Career Planning and Guidance
`eBenefits | September - 2020`

## Resources
1. [A11y Test Case Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-test-cases-checklist.md)
2. [508 Compliance Tracker](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=0)
3. [Accessibility Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)

🙈 - Out of scope, note team(s) responsible, if known

## Credentials Used
User (Eddie): vets.gov.user+17@gmail.com

**Staging url:** {url}
1. Scan with axe browser plugin 
2. Scan with axe-coconut

The only issue called out by Axe-coconut was the phone numbers listed on the site as the phone numbers in the aria tags for them do not match the text in the links. Jenn S and Trevor P are aware of this issue and are working with Axe to get their chrome extension updated.o HTML


3. Lighthouse Scan (Chrome)  
- Results: 100% on Accessibility

4. NVDA Scan (Firefox)  
- Reading sounded fine 

5. VoiceOver (Safari)  
- Reading sounded fine

6. Keyboard Navigation  
- Was able to navigate the wizard and the full form to completion using only the keyboard 

7. Color contrast & blindness  
- All colors match our design library

8. Zoom to 400% at 1280px  
- Zoomed to 400% and all form content stays perfectly visible and usable
----
