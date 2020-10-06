# Accessibility: View Payment History 
`eBenefits | September - 2020`

### Resources for internal a11y audit
1. [A11y Test Case Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-test-cases-checklist.md)
2. [508 Compliance Tracker](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=0)
3. [Accessibility Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)

🙈 = Out of scope, note team(s) responsible, if known

### Credentials Used
User (Jerry): vets.gov.user+14@gmail.com (has payments recieved and returned)  
User (Pauline): vets.gov.user+38@gmail.com (has payments recieved but NO payments returned)  
User (Colder Polar Bear, Jr. (👈👌)): vets.gov.user+228@gmail.com (has NO payments at all)  


## Starting staging url:   
https://staging.va.gov/va-payment-history/payments/

**Subsequent urls (behavior was the same for each):** 
NA 
 

### 1. Scan with axe browser plugin  
- Results: "Heading levels should only increase by one"  
```HTML
<h3 id="paymentsRecievedHeader" class="vads-u-font-size--xl">Payments you received</h3>
```
```HTML
<h3 id="paymentsReturnedHeader" class="vads-u-font-size--xl">Payments returned</h3>
```
The h3 used above the payments tables when payments are present need to be changed to an h2 so that the Heading levels on the page do not skip from h3 to h1 

### 2. Scan with axe-coconut   
- Results: "Heading levels should only increase by one, this can be H2 and made to look like H3.  Even thought its in the right order, it needs to be sequential."   
### 3. Lighthouse Scan (Chrome)  
- Results: 100%
## collapsible markdown?

<details>
 <summary>Screenshot</summary>


</details>

### 4. NVDA Scan (Firefox)  
- Results: Reading sounded fine.
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
