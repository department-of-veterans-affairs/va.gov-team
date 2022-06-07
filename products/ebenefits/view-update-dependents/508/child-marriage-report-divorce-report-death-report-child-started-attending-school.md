# Accessibility: Manage Dependents - "Report marriage of a child, report a divorce, report death of a dependent, report child has started attending school (674)"
`eBenefits | April-May 2020`

## Resources
1. [A11y Test Case Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md)
2. [508 Compliance Tracker](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=0)
3. [Accessibility Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)

🙈 - Out of scope, note team(s) responsible

## Credentials Used
User (Jerry): vets.gov.user+271@gmail.com (has 2 on award, 4 not)

**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-a-divorce
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
2. Scan with axe-coconut
- Aria label may need to be addressed? Or is this a contrast issue?
Element location
``` HTML
#root_reportDivorce_dateMonth
```
Element source
``` HTML
<select aria-describedby="root_reportDivorce_date-label" name="root_reportDivorce_dateMonth" id="root_reportDivorce_dateMonth">
```
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/686-report-dependent-death
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
2. Scan with axe-coconut
- Contrast issue as noted before
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/686-report-dependent-death/0/additional-information
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
2. Scan with axe-coconut
- Aria label may need to be addressed? Or is this a contrast issue?
Element location
``` HTML
#root_reportDivorce_dateMonth
```
Element source
``` HTML
<select aria-describedby="root_reportDivorce_date-label" name="root_reportDivorce_dateMonth" id="root_reportDivorce_dateMonth">
```
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/686-report-marriage-of-child
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-674
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header or issues with background colors
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-674-student-address
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-674-student-school-address
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-674-student-school-term-dates
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-674-student-income-information
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/report-674-student-networth-information
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/review-and-submit
1. Scan with axe browser plugin  
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
```
- 🙈 Not sure about this one but the very bottom of the footer has a block that is getting flagged for the following:
Element location
``` HTML
#blockColorblindContent
```
Element source
``` HTML
<div id="blockColorblindContent">
```
2. Scan with axe-coconut
- Usual items in the header
3. Lighthouse Scan (Chrome)
- 100%
4. NVDA Scan (Firefox)
- Links and buttons showed up in the elements list.  Reading sounded fine.
5. VoiceOver (Safari)
- Worked great
6. Keyboard Navigation
- Worked great
7. Color contrast & blindness
- Links were easily viewable. 
- No contrast errors were detected in the page.
8. Zoom to 400% at 1280px
- Zoom in to 400% was uneventful.  Looked like a huge mobile screen.
