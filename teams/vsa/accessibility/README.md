# VSA Accessibility 

In this folder, you'll find information specific to how 508 Accessibility works on VA.gov.

<hr/>

**[Rate this documentation](https://forms.gle/D3urPe2VbLqVd5pcA)**

We'd like to know if the documentation is meeting your needs, and welcome your feedback!

<hr/>

## Table of Contents

* [Communication channels](#communication-channels)

* [How does accessibility fit into our product lifecycle?](#how-does-accessibility-fit-into-our-product-lifecycle)

* [Accessibility resources](#accessibility-resources)

* [VSA Accessibility Dashboard](#vsa-accessibility-dashboard)


### Communication channels
- Slack channels: [#vetsgov-accessibility](https://dsva.slack.com/channels/vetsgov-accessibility)
- Github labels: `508/Accessibility`

#### VSA Accessibility Specialist Contacts
- Jennifer Strickland, @Jennifer_S in Slack, @jenstrickland in Github, jennifer.strickland@adhocteam.us
- Josh Kim, @Josh in Slack, @joshkimux in Github, josh.kim@adhocteam.us

### How does accessibility fit into our product lifecycle?

#### Product
* Define accessibility as a business requirement from the start
* Train the team
* Plan for inclusive research
* Meaningfully measure, monitor, and evaluate success goals, including accessibility and Section 508 compliance

#### Research
* Define inclusive research strategies ([review inclusive research guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/inclusive-research-recommendations.md))
* Define goals and strategies for including people with disabilities (consider specific KPIs)

#### Design
* Define how to cultivate cognitive empathy with marginalized populations across the project (economically- and technology-challenged individuals, people with disabilities)
* Interaction behavior is documented and accessible
* Define criteria to evaluate the accessibility of designs, such as mobile-first, defining states, heading order, focus management

#### Development
* Establish e2e tests that include the axe checks
* Ensure engineering knows how to customize tests to ensure hidden and dynamic content is also evaluated
* Define workflow processes to evaluate 508 compliance and accessibility during development

#### QA
* UX QA techniques to evaluate accessibility and usability: manual processes, Web Vitals, CrUX dashboard
* Accessibility and 508 compliance processes before and after deployment

### Accessibility resources
The following list is a set of resources to help you do your work and answer questions you might have. Some of the links may take you to other sites and resources outside this repo. If you need a hand with anything, don't hesitate to ping the [dsva.slack.com](https://dsva.slack.com/#vetsgov-accessibility) channel or your VSA accessibility POC directly.

* Learn about [accessibility best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) for research, design, product, and engineering

* To request a VSP Collaboration Cycle Staging Review, this [accessibility test cases checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-test-cases-checklist.md) may make the request process easier for your team.

* [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)

* [VSA Accessibility Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-review-process.md)

* [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)

* [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/WCAG-Checklist.md#wcag-checklist) - Section 508 (WCAG 2.0) plus 2.1, 2.2, etc.

* [Dev Accessibility Audit Review Step-by-Step](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-dev-review-step-by-step.md)

* [VSA A11yChamps Training Program](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/a11y-champs#vsa-a11ychamps-program)

* [Accessibility Beyond Compliance Learning Sessions](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/learning-sessions#learning-sessions)

* [Disability Considerations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/disability-considerations.md)

* [Inclusive Design Guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/inclusive-design-guidelines.md)

* [Examples of Assistive Tech](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/examples-of-assistive-tech.md_)

* [Additional VSA Accessibility Resources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility)

* [Additional VSP Accessibility Resources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility)

### Additional accessibility resources

* [Apple Human Interface Guidelines, Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/best-practices/)

* [Android - accessibility guidelines](https://developer.android.com/guide/topics/ui/accessibility/apps)

* [W3C Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)

* [WUHCAG WCAG Checklist - a plain language interpretation of the W3C guidelines](https://www.wuhcag.com/wcag-checklist/)


## VSA Accessibility Dashboard

The VSA accessibility specialist is measuring and monitoring a number of metrics to evaluate if processes and resources are improving the quality of accessibility in our work. The [VSA Accessibility Dashboard](https://sites.google.com/d/1TaKZ5-By8oAv9M-HBhyylpw14-3UXDdp/p/1doeOzfSq_zSeBl7_iBzezsaNJWqUgsDy/edit) is available for anyone who has access to GCIO's Google Drive. Please contact Jennifer if you don't have access and would like to review.

<!-- 
Starting with sprint 14, I am tracking the 508 issues on VA.gov, and specific to VSA teams, to evaluate and measure accessibility efforts and impact on design/dev quality.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/2020-sprint19-issues.png" alt="bar graph of the data in the following table" />

Please note: for sighted users, I'm working on table styling in Github, apologies.

<figure>
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Cognition</th>
        <th>Accessible Documents</th>
        <th>Focus Management</th>
        <th>Headings</th>
        <th>Mobile Design</th>
        <th>Semantic Markup</th>
        <th>Top issues Total</th>
        <th>&nbsp;</th>
        <th>All 508/Accessibility issues</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
<tbody>
  <tr>
    <td>VSA Sprint 14 Open Issues</td>
    <td>27</td>
    <td>7</td>
    <td>22</td>
    <td>3</td>
    <td>8</td>
    <td>22</td>
    <td>89</td>
    <td>&nbsp;</td>
    <td>137 Open, including accessibility review requests</td>
    <td><a href='https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md'>The oldest issues have been open since June 18, 2019, and there are 12 of them.</a></td>
  </tr>
  <tr>
    <td>VSA Sprint 14 Closed Issues</td>
    <td>12</td>
    <td>0</td>
    <td>7</td>
    <td>0</td>
    <td>3</td>
    <td>3</td>
    <td>25</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 15 Open Issues</td>
  <td>38</td>
  <td>7</td>
  <td>27</td>
  <td>4</td>
  <td>9</td>
  <td>28</td>
  <td>113</td>
  <td>&nbsp;</td>
  <td>165 Open, including review requests</td>
  <td><a href='https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md'>The oldest issues have been open since June 18, 2019, and there are 12 of them.</a></td>
  </tr>
  <tr>
    <td>VSA Sprint 15 Closed Issues</td>
    <td>17</td>
    <td>0</td>
    <td>10</td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
    <td>34</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 16 Open Issues</td>
  <td>45</td>
  <td>7</td>
  <td>27</td>
  <td>8</td>
  <td>10</td>
  <td>28</td>
  <td>125</td>
  <td>&nbsp;</td>
  <td>185 Open | 238 Closed</td>
  <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 16 Closed Issues</td><td>21</td><td>0</td>
  <td>13</td>
  <td>1</td>
  <td>4</td>
  <td>6</td>
  <td>45</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 17 Open Issues</td>
  <td>43</td>
  <td>7</td>
  <td>27</td>
  <td>5</td>
  <td>10</td>
  <td>28</td>
  <td>120</td>
  <td>&nbsp;</td>
  <td>191 Open | 258 Closed</td>
  <td>&nbsp;</td>
  </tr>
  <tr>
    <td>VSA Sprint 17 Closed Issues</td>
    <td>25</td>
    <td>0</td>
    <td>16</td>
    <td>4</td>
    <td>5</td>
    <td>7</td>
    <td>57</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td><td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 18 Open Issues</td>
    <td>45</td>
    <td>7</td>
    <td>33</td>
    <td>10</td>
    <td>11</td>
    <td>41</td>
    <td>147</td>
    <td>&nbsp;</td>
    <td>239 Open (98 VSA) | 284 Closed (55 VSA)</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 18 Closed Issues</td>
  <td>30</td>
  <td>0</td>
  <td>17</td>
  <td>4</td>
  <td>5</td>
  <td>9</td>
  <td>65</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 19 Open Issues</td>
    <td>49</td>
    <td>9</td>
    <td>33</td>
    <td>10</td>
    <td>12</td><td>41</td>
    <td>154</td>
    <td>&nbsp;</td>
    <td>246 Open (101 VSA) | 297 Closed (56 VSA)</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
  <td>VSA Sprint 19 Closed Issues</td>
  <td>33</td>
  <td>0</td>
  <td>18</td>
  <td>5</td>
  <td>5</td>
  <td>9</td>
  <td>70</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  </tr>
</tbody>
</table>
</figure>
-->
