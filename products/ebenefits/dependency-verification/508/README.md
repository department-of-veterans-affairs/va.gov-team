## eBenefits Internal 508 Audit Findings 

### aXe Scans
1. ARIA hidden element must not contain focusable elements - 12 occurrences - seems to be added to pages on a platform level. Doesn't effect focus management within the modal itself. Outside team scope. 
2. Elements must have sufficient color contrast - 4 occurrences - All exist in sitewide header or dropdown nav. Outside team scope.
3. Page should contain a level-one heading - 1 occurrence - Dependency modal contains an `h3` and aXe doesn't seem to parse the rest of the DOM when the modal is active. **Recommendation**: Update the modal h3 to `<h1 className="vads-u-font-size--h3 />` and the subsequent h3s to `<h2 className="vads-u-font-size--h3" />` tags to maintain proper header order. 

### Color contrast
1. Uses design system classes and elements. No issues. 


### Zoom check
1. 400% zoom with a window width < 1200px causes button text bleed and there's some visual interference from the feedback button. **Recommendation**: Investigate potential fixes 
<details><summary>zoomed 400% example</summary>.
  
  <img width="956" alt="Screen Shot 2021-07-07 at 2 22 31 PM" src="https://user-images.githubusercontent.com/15097156/124817592-a1721f80-df2f-11eb-85b3-93378f537cd8.png">

</details>

### Screen reader tests
1. VoiceOver - reads the close button in the top right corner and the two buttons at the bottom but skips all modal content. **Recommendation**: Consider making each member and the modal header focusable or readable using aria tags.  
