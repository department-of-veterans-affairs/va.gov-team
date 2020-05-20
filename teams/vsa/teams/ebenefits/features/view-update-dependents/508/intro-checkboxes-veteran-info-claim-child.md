# Accessibility: Manage Dependents - Introduction, Checkboxes, Veteran Info, and "Claim additional benefits for a child"
`eBenefits | April-May 2020`

## Resources
1. [A11y Test Case Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md)
2. [508 Compliance Tracker](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=0)
3. [Accessibility Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)

🙈 - Out of scope, note team(s) responsible

## Credentials Used
User (Jerry): vets.gov.user+271@gmail.com (has 2 on award, 4 not)

**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/introduction
1. Scan with axe browser plugin  
- Heading levels should only increase by one, this can be H2 and made to look like H4.  Even thought its in the right order, it needs to be sequential.  
```HTML
<h4>Follow the steps below to apply for declare or remove a dependent.</h4>
```
Check "Prepare" and "When you apply,..." as they may be H5/6  

2. Scan with axe-coconut   
- Heading levels should only increase by one, this can be H2 and made to look like H4.  Even thought its in the right order, it needs to be sequential.  
```HTML
<h4>Follow the steps below to apply for declare or remove a dependent.</h4>
```
Check "Prepare" and "When you apply,..." as they may be <H5/6> 
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
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/686-options-selection
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
- 🙈 Heading order invalid in the footer; CMS or Public Websites?  
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/veteran-information
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
- Text inside the element is not included in the accessible name
Element location
``` HTML
a[aria-label="\38 00\.\ 8\ 2\ 7\.\ 1000"]
```
Element source
``` HTML
<a aria-label="800. 8 2 7. 1000" href="tel:800 827 1000">800-827-1000</a>
```
- 🙈 Heading order invalid in the footer; CMS or Public Websites?
Element location
``` HTML
.va-footer-linkgroup:nth-child(1) > h4
```
Element source
``` HTML
<h4 class="va-footer-linkgroup-title">Veteran programs and services</h4>
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/veteran-address
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
None found
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/add-child
1. Scan with axe browser plugin
- None found
2. Scan with axe-coconut
- 🙈 some notes here on contrast and backgrounds but they are in the header or part of the design system
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/add-child/0
1. Scan with axe browser plugin
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
2. Scan with axe-coconut
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/add-child/0/additional-information
1. Scan with axe browser plugin
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
2. Scan with axe-coconut
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/add-child-evidence
1. Scan with axe browser plugin
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
2. Scan with axe-coconut
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** https://staging.va.gov/view-change-dependents/add-remove-form-686c/review-and-submit
1. Scan with axe browser plugin
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
2. Scan with axe-coconut
- 🙈 a few header and footer compalaints; out of scope for us but Public Websites, or Drupal team might be interested
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
- Zoom in was uneventful. Looked like a huge mobile screen.
----
**Staging url:** http
1. Scan with axe browser plugin

2. Scan with axe-coconut

3. Lighthouse Scan (Chrome)

4. NVDA Scan (Firefox)

5. VoiceOver (Safari)

6. Keyboard Navigation

7. Color contrast & blindness

8. Zoom to 400% at 1280px

