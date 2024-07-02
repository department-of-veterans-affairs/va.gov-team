# Accessibility audit plan

This is copied from [CAIA's accessibility maintenance audit plan](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=epic%2C+accessibility%2C+a11y-testing%2C+sitewide+CAIA%2C+sitewide+accessibility&projects=&template=a11y-audit.yaml&title=%5BMaintenance+A11y+Audit%5D%3A+). 

## Testing plan

### Automated
- [ ] Run axe checks on every page or unique state (required).
- [ ] Run WAVE on every page if time allows. WAVE is more visual than axe or axe-coconut, but offers some excellent ways to identify nested headings and HTML5 landmark tags.

### Manual
- [ ] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
- [ ] Color blindness checks
- [ ] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, start reducing them until they become stable, and log the zoom ratio when things started breaking.
- [ ] Keyboard navigation
- [ ] Tab order and focus
- [ ] Heading structure makes sense

### Screen Reader
- [ ] Windows, Chrome, JAWS
- [ ] iPhone, iOS Safari, VoiceOver
