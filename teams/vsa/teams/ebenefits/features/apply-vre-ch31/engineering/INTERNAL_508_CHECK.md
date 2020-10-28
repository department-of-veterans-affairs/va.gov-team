## Internal 508 Accessibility Audit for VRE Chapter 31 form application
- All pages analyzed with axe, axe-coconut, and wave

## Known Issues Outside Domain
- Footer: Heading level should increase by one. 
- `<FormFooter />`: Uses an `H2` which causes the above heading level issue to be thrown. 
- Header and Nav: Elements must have sufficient color contrast
- Hidden elements: Incompatible browser warning and hidding nav
- Telephone component: element must have their visible text as part of their accessible name

### Introduction Page & Wizard
- Wizard: 0 app specific issues found
- Form Introduction Page: 1 non-app specific issue found:
    - Header level progression: 
        - Platform components skip from `H1` to `H3`. 
        - Components with issues: `<FormTitle />`, `<SaveInProgressIntro />`
        - Verdict: Outside team domain
### Veteran Read-only Information Page
- 1 issue found with wave: Redundant link warning
    - The veteran information read-only component includes a note to contact veteran benefits assistance at the provided number. The form footer provides this exact same link. 
    - Recommendation: Leave as is since the first link is in context of the personal information provided. 
    
### Veteran Information 
- 0 app specific issues found

### Veteran Contact Information
- 0 app specific issues found

### Additional Information
- 0 app specific issues found

### Communication Preferences
- 1 issue found with wave: Fieldset missing legend
    - Offending element: time selection checkbox field
    - Recommendation: set `showFieldLabel: false` to fix this issue. 
    
### Review Page
- 0 app specific issues found
