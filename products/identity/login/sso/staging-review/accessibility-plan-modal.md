# SSO Accessibility Test Cases - Modal

* See the [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/README.md) for specifics about this new feeature.
* [Test Credentials](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/accessibility-test-credentials.md)
* Enter your unique product/feature data into the copied documents before requesting a [staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review) with VSP.
* [Sign-in Page](https://staging.va.gov/sign-in/?application=myvahealth)
* Manual tests including color comparisons, color blindness, zoom testing, keyboard, and screen reader testing for the stand-along sign-in page and the SSO comms modal can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/SSO-Login_Screen_Accessibility_Tests.pdf) 

## Automated testing (required)

This will be the automated tests teams must run before requesting a staging accessibility review. These tests are critical for providing an accessible foundation for your product.

### Scan with axe browser plugin (required)

0 Violations - 21 Needs Review - 0 Rejected - 4 Best Practices

![Result](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/AXE_report_modal.png)

---

**Expected result:**

1. The axe scan should have 0 violations. Any `Best practices` items can be reviewed with the accessibility specialist.

---

### Create end-to-end tests for client-side applications (required)

N/A


### Scan with axe-coconut (recommended)
0 Violations - 21 Needs Review - 0 Rejected - 4 Best Practices

![Result](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/AXE_coconut_modal.png)

---

**Expected result:**

1. The axe-coconut scan should have 0 violations. Any `Best practices` items can be reviewed with the accessibility specialist.

---

### Visually scan with WAVE (recommended)

1 Error - Request for waiver.

![WAVE plugin summary pane](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/modal_wave.png)

![WAVE Error Detail](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/WAVE_error_explanation.png)

![WAVE Error Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/WAVE_error_image.png)

---


**Expected result:**

1. The WAVE scanner should show 0 violations.

---

### Create keyboard end-to-end tests (experimental)

TBD

**Steps to test:**

1. Reach out to the VSP accessibility specialist if you would like to include your project in this pilot program.

**Expected result:**

1. Keyboard end-to-end tests should show 0 violations. Axe checks that result in 1 or more violations will break branch builds and prevent merging into the `main` branch until they are resolved.



## Manual testing (required)

Manual test results can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/assets/SSO-Login_Screen_Accessibility_Tests.pdf)

### Color comparisons (required)


**Expected result:**

1. Text meets contrast ratio requirements to its background.
2. All links, buttons, icons, and other elements retain their meaning when color blindness filters are enabled.

---

### Zoom layouts (required)

**Expected result:**

1. All layouts should support readability and usability when zoomed in to 200, 300, or 400% at 1280px browser width. Most layouts should not scroll sideways or have content to the edges. Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.

---

### Keyboard navigation (required)

**Expected result:**

1. There should be no issues navigating pages and user flows.

---

### Screen reader (required)

**Expected result:**

1. There should be no issues navigating pages and user flows. Please consult with your accessibility specialist early and often. Screen reader testing is as much art as it is science.



## Certification

All required tests must be completed and a representative of the product team should confirm these tests have been run for the VSP staging accessibility to proceed.

**Required tests**

* [ ] Scan with axe browser plugin
* [ ] Create end-to-end tests for React apps _(ignore if not applicable)_
* [ ] Color comparisons
* [ ] Zoom layouts
* [ ] Keyboard navigation
* [ ] Screen reader

---

**Recommended tests**

* [ ] Scan with axe-coconut
* [ ] Visually scan with WAVE

---

**Experimental tests**

* [ ] Create keyboard end-to-end tests

---

**Certifying person**

First name only:
