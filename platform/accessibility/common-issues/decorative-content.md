# [SCREENREADER]: Decorative content MUST be implemented in a way it can be ignored by assistive technology

## [508-defect-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-3)

## Acceptance Criteria

As a screen reader user, I want to  read the content of the page without extraneous noise from decorative images.

## Environment

* Operating System: all
* Browser: all
* Screenreading device: all
* Server destination: all

## Steps to Recreate

1. Enter [URL] in browser, 
2. Start screen reading device
3. Read content of the page
4. Verify that the images are read by the screen reader

## Possible Fixes (optional)

### Sample

**Current code**
```html
<span class="button-icon"> »</span>
```

**Recommended code**
```html
<span aria-hidden="true" role="presentation" class="button-icon"> »</span>
```


## WCAG or Vendor Guidance (optional)

* [W3C WCAG 1.1.1 - Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them](https://www.w3.org/TR/WCAG20-TECHS/F38.html)

* [W3C Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)

* [HTML5 Accessibility: aria-hidden and role=”presentation”](http://john.foliot.ca/aria-hidden/)
