# Appointments Accessibility Testing Checklist

## Use of color and color contrast checks



- [ ] All text of 20px or smaller has a 4.5:1 contrast ratio to its background (or better)

All text of 20px or larger has a 3:1 contrast ratio to its background (or better)
Non-text elements have a 3:1 contrast ratio to their background and to neighboring elements (or better)
Color is not the only way to distinguish links from other text (eg. links are underlined)
Any charts, maps, infographics, and tables convey all information without only relying on color
Content does not refer to color, especially when providing user instructions (eg. "Click the blue button")

axe checks
 Each page has been scanned using axe (results shared below)
 axe is integrated into your end-to-end testing
axe DevTools scan results
See below.

How did axe testing go?
Your appointments
3 issues: id attribute value must be unique
Upcoming axe results

Past appointments
3 issues: id attribute value must be unique
Past axe results

Pending appointments
2 issues: id attribute value must be unique
Pending axe results

Who completed the content zoom and reflow test?
@outerpress

Content zoom and reflow checks
 All page elements are readable and usable at 200% zoom
 All page elements are readable and usable at 300% zoom
 All page elements are readable and usable at 400% zoom
How did content zoom and reflow testing go?
No issues, everything worked great.

Who completed the keyboard navigation test?
@outerpress

Keyboard navigation checks
 Each link, button, form input, checkbox, radio button, select menu, and custom element can receive keyboard focus
 Each link, button, form input, checkbox, radio button, select menu, and custom element responds to expected keys
 All elements under focus have a visible focus indicator
 The order of [Tab] stops made sense and was appropriate for completing tasks