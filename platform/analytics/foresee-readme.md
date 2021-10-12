----

# We're moving our docs! 
### Find [more information about this topic](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Platform-data-sources.1797881953.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# ForeSee

*Overview:* Background and other information on ForeSee.

## Summary

ForeSee is a digital CX tool that captures VA.gov user survey data.

For more information, please reach out to @joanne on [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) on the DSVA Slack.

## Account Access
VA Account Owner: Josh Tuscher <Joshua.Tuscher@va.gov>

DSVA Lead: Jeff Barnes <jeffrey.barnes4@va.gov>

ForeSee account access: Chis Johnston, Joanne Esteban, Lisa Koenigsberg

## Available Surveys

**Intercept Survey on VA.gov main** https://cxsuite.foresee.com/client/measures/8847572/analytics/summary 

*First survey data from VA.gov dates back to 11/22/2016.*
- Excludes the va.gov homepage to prevent the survey from appearing on this page
- Excludes urls from myhealth.va.gov, ebenefits.va.gov, benefits.va.gov, and all VAMC subdomains
- Current sampling parameters: The current rules for invitation are a loyalty factor of 3 pages and 5% sampling. So once a visitor reaches 3 pages there is a 5% chance of being invited on each page visited
- Current survey conditions: 
    - Surveys are distributed at a sampled rate via sessions, not users. Foresee doesn't recognize if a user has been on their phone vs the computer. 
    - Users have to navigate through at least 3 pages. Users are randomly and anonymously chosen. If the user declines the survey, Foresee cookies the user for 90 days until they receive the modal again.
- Current survey content: Surveys are 20 questions long.
- Customer Satisfaction measurement: ForeSee does not use NPS. ForeSee uses a proprietary Customer Satisfaction rating, or CSAT.

VA.gov modernization dashboard: https://cxsuite.foresee.com/client/dashboards/275564
- you may need to request permission to view this dashboard

**Feedback Comment Card** - https://cxsuite.foresee.com/client/projects/76647/analytics/summary

*First survey data dates back to 5/21/2019.*
- Collects a 5 star rating on targeted pages
- Current pages can be viewed under Edit Survey --> 2. collection methods --> Site badge --> URL targeting

## FAQ
### All Questions
- [How can I request the Feedback Comment Card to be added to my product's page?](#how-can-i-request-the-feedback-comment-card-to-be-added-to-my-products-page)
- [How can I request data from ForeSee?](#how-can-i-request-data-from-foresee)
- [I have access to ForeSee. Now how do I use it?](#i-have-access-to-foresee-now-how-do-i-use-it)
- [There doesn't seem to be much product specific info. What's that about?](#there-doesnt-seem-to-be-much-product-specific-info-whats-that-about)
- [Is ForeSee on mobile?](#is-foresee-on-mobile)
- [I see something wrong with the ForeSee script. How can we fix this?](#i-see-something-wront-with-the-foresee-script-how-can-we-fix-this)
- [The nature of my VA.gov page is sensitive to use, and the Intercept survey shouldn't trigger on it. How do I remove it?](#the-nature-of-my-vagov-page-is-sensitive-to-use-and-the-intercept-survey-shouldnt-trigger-on-it-how-do-i-remove-it)
- [I keep hearing about Medallia. What is Medallia?](#i-keep-hearing-about-medallia-what-is-medallia)


#### How can I request the Feedback Comment Card to be added to my product's page?
You can find the request process [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/foresee-request-survey.md)! All you'll need to fill out a request are the URLs for the pages you want to track.

We ask that as you go through the [VSP Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle-visual.pdf), ForeSee is requested so that we can start tracking survey baselines specific to products.

#### How can I request data from ForeSee?
To request access to ForeSee, please reach out to @joanne on the DSVA Slack channel, [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)

To request a one-off report, please fill out the [Analytics support template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/analytics-request-guide.md#requesting-metrics-reporting) with your criteria.

We highly suggest considering [requesting the Product Success Tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/product-success-tool-request.md) with your KPIs outlined, particularly if you are looking to track direct user feedback as a part of the success for your product.

#### I have access to ForeSee. Now how do I use it?

Please see the [ForeSee guide](https://docs.google.com/document/d/1X3l0KQYB9Y43Ap282lXhcMVgIm9z3gXmeRLLrljHsV8/edit) to extract Feedback Comment Card and open-ended questions data.

#### There doesn't seem to be much product specific info. What's that about?
We can currently retrieve the following product specific information:
- The Feedback survey using a 5 star rating
- Key word searches on the following Intercept survey open-ended questions:
    - Please tell us why you feel the new design is worse than the previous site.
    - Please tell us what would make your task easier to complete.
    - What was the other VA website you accessed today?
    - What other kind of information or service were you looking for today?
    - What other kind of Health Care information or service were you looking for today?
    - What other kind of Disability and Compensation information or service were you looking for today?
    - What other kind of Education and Training information or service were you looking for today?
    - What other kind of Housing Assistance information or service were you looking for today?
    - What other kind of Burials and Memorials information or service were you looking for today?
    - What other kind of Records and Document service were you looking for today?
    - What were you unable to find during your visit today?
    
We are waiting for PRA approval for additional questions that will glean better product-specific insight. Once these questions are approved, you will be able to request them as a Feedback survey.

#### Is ForeSee on mobile?

The Intercept Survey does not trigger on mobile. 

The Feedback Comment Card is triggered on mobile, and can be found on pages such as: https://www.va.gov/disability/

#### I see something wrong with the ForeSee script. How can we fix this?

VSP is in charge of the ForeSee content through the admin portal. Additional modifications will need to be triaged to ForeSee. If you see something that will need to be modified, please create an issue on Github, with the problem and potential solutions outlined, and add the label, `analytics-insights` and assign @joanneesteban. We can then support the ForeSee communication to fix the issue.

#### The nature of my VA.gov page is sensitive to use, and the Intercept survey shouldn't trigger on it. How do I remove it?

Please provide tag @joanne on [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) on Slack, and provide the URLs with pages that should not be triggered.

#### I keep hearing about Medallia. What is Medallia?

Medallia is a digital CX tool that is a part of the VSignals, the Veterna Experience Office's (VEO) listening platform. Medallia will eventually replace ForeSee. 

[Click here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/analytics-tools/vsignals.md) for more background information about Medallia and [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/medallia-implementation-rollout.md) for VSP Analytics & Insights's Medallia rollout plan.



