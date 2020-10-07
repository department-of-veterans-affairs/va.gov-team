# Accessibility: Personalized Career Planning & Guidance (PCPG - CH36) 
`eBenefits | September - Ocotber 2020`

### Resources for internal a11y audit
1. [A11y Test Case Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-test-cases-checklist.md)
2. [508 Compliance Tracker](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=0)
3. [Accessibility Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)

🙈 = Out of scope, note team(s) responsible, if known

### Credentials Used
User (Jerry): vets.gov.user+271@gmail.com

## Starting staging url:   
https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/introduction

**Subsequent urls (behavior was the same for each):** 
- [/claimant-information](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/claimant-information)
- [/claimant-address](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/claimant-address)
- [/status-selection](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/status-selection)
- [/veteran-information](https://staging.va.gov/careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832//veteran-information) _(you will only see this URL if you choose that you are a child or spouse on /status-selection)_  
 

### 1. Scan with axe browser plugin  
- 🙈 Results: "Heading levels should only increase by one"  
```HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
<details>
  <summary>Screenshot   
  </summary>
  
![CH36](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/images/CH36-axe.JPG)

</details>

### 2. Scan with axe-coconut   
- 🙈 Results: "Heading levels should only increase by one, this can be H2 and made to look like H4.  Even thought its in the right order, it needs to be sequential."   
### 3. Lighthouse Scan (Chrome)  
- Results: 100%
### 4. NVDA Scan (Firefox)  
- Results: Links and buttons showed up in the elements list.  Reading sounded fine.
### 5. VoiceOver (Safari)  
- Results: Worked great
### 6. Keyboard Navigation  
- Results: Worked great 
### 7. Color contrast & blindness  
- Results, example: Links were easily viewable.  
- Results, example: No contrast errors were detected in the page.  
### 8. Zoom to 400% at 1280px   
- Results, example: Zoom in to 400% was uneventful.  Looked like a huge mobile screen.  
----
