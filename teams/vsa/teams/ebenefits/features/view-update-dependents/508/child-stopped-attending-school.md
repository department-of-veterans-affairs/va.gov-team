----
**Staging url:** ht
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
