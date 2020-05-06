# VSA accessibility test cases checklist

Here is Markdown that you may add to your Staging Review request template. 

## VSP _requires_ VFS teams conduct their own accessibility testing prior to requesting a VSP CC Staging Review.

The current documentation refers to TestRail or a series of steps to document in Github. However, it is only necessary to certify your team has completed the series of checks. 

To help with conducting this internal audit, I created this _optional_ [VSA accessibility review steps tool](https://docs.google.com/spreadsheets/d/1xHwdyQAwbsAnD5pTHGaMxpS9XfdbBVcVVTvulgWI7dw/edit#gid=0), modeled after what I use when I do an accessibility audit. I find it helps me keep track of what I've done. 

It may help to go into Edit this document, copy the following Markdown, and paste into your Staging Review request template.

- Link to your accessibility test cases:
  - **TestRail** [TestRail VSP accessibility test plan template](https://dsvavsp.testrail.io/index.php?/plans/view/105) **OR**
  - **Markdown** [Github accessibility test cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) **OR** 
  - Certify that the following required accessibility tests are complete by checking each of these boxes (your accessibility specialist is available to help). Recommended items are optional, but highly encouraged.
  
    Required:
    - [ ] Read the [accessibility staging review documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md) 
    - [ ] Conduct axe browser scan, and document or address issues found 
    - [ ] Ensure end-to-end tests - including the axe check, pass 
    - [ ] Check color pairing for proper contrast 
    - [ ] Check for colorblindness issues 
    - [ ] Zoom to 200% at 1280px wide and confirm readability, no info cut off, etc 
    - [ ] Repeat for 300% 
    - [ ] Repeat for 400% 
    - [ ] Navigate all pages and core functionality with keyboard only 
    - [ ] Test all pages and core functionality happy path with MacOs + VoiceOver and/or NVDA+Firefox 
    
    Recommended:
    - [ ] Read the [accessibility post-launch processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md) 
    - [ ] Add keyboard end-to-end tests in CI/CD test runs 
    - [ ] Conduct axe-coconut browser scan, document or address issues found 
    - [ ] Test with [WAVE tool](https://wave.webaim.org/) 


Known issues:

* []()

* []()

* []()
