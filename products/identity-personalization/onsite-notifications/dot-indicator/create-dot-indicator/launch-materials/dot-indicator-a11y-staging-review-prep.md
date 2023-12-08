# Dot Indicator on Unread Health Messages - Accessibility Staging Review Prep

For additional reference see [Accessibility staging review prepartion documentation](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review).

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe)| Yes | **1 issue to address** - we have an aria-label on an element that has no role attribute. To correct this, we can add `role="status"` to our `<i>` icon element.*| Allison Lu |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-axescansinend-to-endtests)| Yes | Pass | Allison Lu |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Useofcolorandcolorcontrastuse-of-color)| Yes | Pass for now - we will do usability testing with colorblind folks. Using Colorblindly in chrome, I can tell that for certain kinds of colorblindness, the dot could just look gray so I'm not sure if that will cause any confusion for colorblind users. | Angela Agosto |
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Contentzoomandreflowcontent-zoom)| Yes | Pass for now - It's certainly able to be seen and digested when zoomed in but I'm not sure if the red dot is off to the right with the secondary links if magnification users will be able to find it. We plan to test this in upcoming usability research. | Angela Agosto |
| Keyboard navigation | [read more about navigating with the keyboard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Keyboardnavigationkeyboard-nav)| Yes | Pass (feature is not a link) | Angela Agosto |

* See [MDN docs: ARIA: status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)

## Advanced Accessibility Tests (optional)

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Screenreadersscreen-readers). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._|  |  | Allison Lu |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-WAVEspotcheckswave)| Yes | Pass - there are alerts but we don't own those products | Allison Lu |

