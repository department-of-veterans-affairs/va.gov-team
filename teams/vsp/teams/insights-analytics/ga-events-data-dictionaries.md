## Data Dictionaries  
 - [Benefit Hubs Content Grouping](#Benefit-Hubs-Content-Grouping)
 - [Products Content Grouping](#Products-Content-Grouping)
 - [Navigation Events](#Navigation-Events)
 - [Medallia Events](#Medallia-Events)
 - [Tracking Common User Interactions](#tracking-common-user-interactions)
 - [Design System Component Tracking](#design-system-component-tracking)
 - [Tracking Form Events](#tracking-form-events)
 - [Search Events](#search-events)
 - [Custom Dimensions](#Custom-Dimensions)
 - [Custom Metrics](#Custom-Metrics)

## Benefit Hubs Content Grouping

| **Pattern {{Page Path}}** | **Output** |
| --- | --- |
| ^/track-claims.\* | Disability |
| ^/disability.\* | Disability |
| ^/burial.\* | Burials &amp; Memorials |
| ^/pension.\* | Pension &amp; Fiduciary |
| ^/education.\* | Education |
| ^/gi-bill.\* | Education |
| ^/gibill.\* | Education |
| ^/records/.\* | Records |
| ^/disability.\* | Disability |
| ^/claim-or-appeal-status.\* | Disability - Check Claim or Appeal Status |
| ^/va-payment-history.\* | View Payment History |
| ^/health-?care.\* | Health Care |
| ^/healthbenefits.\* | Health Care |
| ^/profile.\* | Profile &amp; Records |
| ^/records.\* | Profile &amp; Records |
| ^/.\*-health-care.\* | Health Care |
| ^/housing-assistance.\* | Housing Assistance |
| ^/life-insurance.\* | Life Insurance |
| ^/careers-employment.\* | Careers &amp; Employment |
| ^/service-member-benefits.\* | Service Member Benefits |
| ^/family-member-benefits.\* | Family Member Benefits |

[Back to Table of Contents](#Data-Dictionaries)

## Products Content Grouping

| **Pattern {{Page Path}}** | **Output** |
| --- | --- |
| ^/education/how-to-apply.\* | Education - How to Apply for GI Bill and Benefits |
| ^/records/download-va-letters.\* | Records |
| ^/records/get-veteran-id-cards.\* | Records |
| ^/education/apply-for-education-benefits/application/1990/.\* | Education - Education Benefits Application (1990) |
| ^/education/apply-for-education-benefits/application/1990E/.\* | Education - Transferred Education Benefits (1990e) |
| ^/education/apply-for-education-benefits/application/1990N/.\* | Education - Call to Service Program (1990n) |
| ^/education/change-gi-bill-benefits.\* | Education - Change GI Bill School |
| ^/education/apply-for-education-benefits/application/5490.\* | Education - Eligible dependent benefits (5490) |
| ^/education/submit-school-feedback.\* | Education - GI Bill Feedback Tool |
| ^/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994.\* | Education - Veteran Employment Through Technology Education Courses (22-0994, VET TEC) |
| ^/education/apply-for-education-benefits/application/5495.\* | Education - Change GI Bill school or program for dependents (5495) |
| ^/education/opt-out-information-sharing/opt-out-form-0993.\* | Education - Opt-Out of Information Sharing (0993) |
| ^/education/gi-bill/post-9-11/ch-33-benefit.\* | Education - Post 9-11 GI Bill Statement of Benefits |
| ^/disability/file-disability-claim-form-21-526ez.\* | Claims - Disability Claims (526EZ v2) |
| ^/gi-bill-comparison-tool.\* | Education - GI Bill Comparison Tool |
| ^/gi-bill-comparison-tool/profile.\* | Education - GIBCT Profile Viewed |
| ^/track-claims/your-claims.\* | Claims - Viewed Details |
| ^/disability/eligibility/special-claims/automobile-allowance-adaptive-equipment.\* | Claims - Auto Allowance and Adaptive Equipment Application (21-4502) |
| ^/education/apply-for-education-benefits/application/1995.\* | Education - Request for Change of Program (1995) |
| ^/my-va.\* | Personalized Tools - Saved my Benefits Preferences |
| ^/profile.\* | Authenticated Experience Profile 2.0 |
| ^/health-care/apply/application.\* | Health Care - Health Care Application (10-10EZ) |
| ^/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346/.\* | Health Care - Medical Device Reordering Tool (2346a) |
| ^/health-care/secure-messaging.\* | Health Care - Patient Portal: Messaging |
| ^/health-care/refill-track-prescriptions.\* | Health Care - Patient Portal: Rx Refills |
| ^/health-care/schedule-view-va-appointments.\* | Health Care - Patient Portal: Health Records Appointments &amp; Scheduling |
| ^/health-care/view-test-and-lab-results.\* | Health Care - Patient Portal: Lab and Test Results |
| ^/health-care/apply/application/introduction.\* | Health Care - Patient Portal: Apply for VA Health Care |
| ^/burials-and-memorials/application/530.\* | Burial &amp; Preneed - Burial Benefits Application (Form 530) |
| ^/burials-and-memorials/pre-need/form-10007-apply-for-eligibility.\* | Burial &amp; Preneed - Preneed Eligibility (Form 40-10007) |
| ^/pension/application/527EZ.\* | Pension - Pension Application (Form 527EZ) |
| ^/discharge-upgrade-instructions/guidance.\* | Discharge - Discharge Upgrade Guidance |
| ^/records/download-va-letters/letters/letter-list.\* | Discharge - Download a Letter |
| ^/records/get-veteran-id-cards/apply.\* | Discharge - Veteran ID Card (VIC) |
| ^/find-locations/facility.\* | Unauthenticated Experience - Facility Details Viewed |
| ^/search.\* | Unauthenticated Experience - Search |
| ^/records/get-military-service-records.\* | Records - Request Military Service Records Including DD214 |
| ^/find-forms/about-form.\* | Unauthenticated Experience {{Find form detail pages}} |
| ^/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/.\* | Education - Application for STEM Scholarship (22-10203) |
| ^/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/.\* | Family Member Benefits - Caregiver Application (10-10cg) |
| ^/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996.\* | Benefits &amp; Memorials - Higher Level Review (20-0996) |
| ^health-care/get-medical-records.\* | Records - Get Medical Records Online |
| ^/change-address | Records - Change Address |
| ^/disability/upload-supporting-evidence.\* | Disability - Upload Evidence to Support Claim |
| ^/disability/how-to-file-claim.\* | Disability - File a Disability Claim for Compensation or Increase |
| x | Covid-19 Chatbot |
| x | Direct Deposit |
| x | Content API (Drupal + GraphQL) |
| ^.\*-health-care.\* | VAMC |
| ^/performance-dashboard.\* | Performance Dashboard |
| x | Personal Career Planning and Growth (Ch. 36) |
| ^/privacy-policy.\* | Privacy Policy |
| ^/resources.\* | Resources &amp; Support |
| x | Disability Ratings Calculator page |

[Back to Table of Contents](#Data-Dictionaries)

## Navigation Events

| Pattern {{Event}} | Output | Location Description |
| --- | --- | --- |
| ^nav-main.\* | Navigation - Main Page Buttons | Any of the three large buttons located near the bottom of the page under the benefit hubs (ex. blue rectangle with &quot;Find a VA health facility…&quot;) |
| ^nav-footer.\* | Navigation - Footer - {{Click Text}} | Located under the benefit hubs and CTA buttons/boxes at the bottom of the page |
| ^nav-404.\* | Navigation - 404 Error | When a user finds a page that no longer exists (ex. &quot;va.gov/hec&quot;) |
| ^nav-linkslist.\* | Navigation - Link List - {{CJ - Links List - Null Handler - Event Action Label}} | Hyperlinked list located just above the footer (ex. hyper links of benefit hubs located on the home page under the white boxes and photos of vets) |
| ^nav-sidenav$ | Navigation - Side - {{Click Text}} | Select a sidebar menu (that is not within an expanded menu) on the side of a benefit hub page (ex. See this page: &quot;https://www.va.gov/health-care/about-va-health-benefits/&quot; |
| ^nav-sidenav-child$ | Navigation - Side - Child {{CJ - Sidenav Dropdown Header - Null Handler}} | Select a sidebar menu option from within an expanded menu on the side of a page (ex. See this page: &quot;https://www.va.gov/cheyenne-health-care/health-services&quot; |
| ^nav-header-link$ | Navigation - Header - {{Click Text}} - {{Click URL}} | Links that exit to another page rather than expand into menu options, located under the sub-menu options on the main navigation in the header |
| ^nav-header-top-level$ | Navigation - Header - Open Top Level - {{Click Text}} | Main navigation in the header at the top of the page (ex. &quot;VA Benefits and Health Care&quot; or &quot;About VA&quot;) |
| ^nav-header-second-level$ | Navigation - Header - Open Second Level - {{Click Text}} | Selecting one of the sub menus from the top level navigation&#39;s drop down (ex. &quot;Health care&quot; or &quot;Disability&quot;) |
| ^nav-user$ | Navigation - User - {{Navigation User Section - Lookup Table}} | Located on this page after the user has authenticated: www.va.gov/change-direct-deposit/ |
| ^nav-header-logo | Navigation - Header - Logo | Will be for logo link clicks |
| ^nav-breadcrumb | Navigation - Breadcrumb - {{Navigation Breadcrumb Section - Lookup Table}} | As you go deeper into pages there will be a trail left at the top of the page showing you what folder/topic you&#39;ve gone into, any of those folder hyperlinks is the breadcrumb menu (ex. selecting the &quot;Home&quot; hyperlinked just above the H1 on this page &quot;https://www.va.gov/change-direct-deposit/&quot;) |
| ^nav-crisis-header | Navigation - Crisis Modal Clicked - Header | Red floating banner in the top right of the home page above all other menus |
| ^nav-hub-containers | Navigation - Hub - Containers - {{Click Text}} | Big boxes located on the right of an expanded sub-menu under the main navigation at the top of the page (ex. &quot;COVID-19 vaccines at VA&quot; under VA Benefits and Health Care \&gt; Health care \&gt; far right box) |
| ^nav-searchresults | Navigation - Search Results - {{Navigation Path}} | Select a menu option from the right rail menu on a /search/ page under &quot;More VA search tools&quot; (ex. &quot;Look up Board of Veterans&#39; Appeals…&quot; |
| ^nav-zone-one | Navigation - Zone One - {{Navigation Path}} | Hyperlinked text located in the big white boxes near the top of the home page (ex. &quot;Refill and track your prescriptions&quot;) |
| ^nav-hub-promo | Navigation - Hub - Promo Box - {{Click Text}} | Hyperlinked text in the box to the right of the H1 at the top of a page (ex. On this page it is located under the blue box with a white star: &quot;https://www.va.gov/burials-memorials/&quot;) |
| ^nav-user-profile-cta | Navigation - Go to Profile - Call-to-Action | Green &quot;Go to your VA.gov profile&quot; button ocated on this page after the user has authenticated: www.va.gov/change-direct-deposit/ |
| ^nav-hub-rail | Navigation - Hub - Rail - {{Navigation Path}} - {{Click Text}} | Floating menu on the right side of a page (ex. &quot;https://www.va.gov/burials-memorials&quot;) |
| ^nav-profile-additional-resources$ | Navigation - GIBCT Profile - Additional Resources - {{Click Text}} | Hyperlinks under the menu on the right (ex. Under the video on this page: &quot;https://www.va.gov/gi-bill-comparison-tool./&quot;) |
| ^nav-accordion-expand | Navigation - Accordion - Expand - {{CJ - Accordion Action}} | Expand one of the sidebar navigation menus within a service hub page (ex. &quot;Get benefits&quot; menu located on the page &quot;https://www.va.gov/health-care/covid-19-vaccine/&quot;) |
| ^nav-accordion-collapse | Navigation - Accordion - Collapse - {{CJ - Accordion Action}} | Collapseone of the sidebar navigation menus within a service hub page (ex. &quot;Get benefits&quot; menu located on the page &quot;https://www.va.gov/health-care/covid-19-vaccine/&quot;) |
| ^nav-featured-content-link-click | Navigation - Featured Content - {{CJ - Featured Content - Null Handler - Event Action Label}} | Link to a spotlight story/blog post (ex. &quot;Erie VA employee makes masks... &quot; hyperlinked text near the top of this page: &quot;www.va.gov/erie-health-care/stories/&quot;) |
| ^nav-secondary-button-click | Navigation - Secondary Button - {{Click Text}} | &quot;See all locations&quot; button under the &quot;Locations&quot; h2 on this page: https://www.va.gov/erie-health-care/ |
| ^nav-accordion-embedded-link-click | Navigation - Accordion Embedded Link - {{JV - fullAccordionLabel}} - {{CJ - Global - Click URL Null Replace}} | Link located within an accordion menu (ex. Primary care \&gt; Advice nurse \&gt; &quot;Ashtabula County VA Clinic on this page: &quot;www.va.gov/erie-health-care/health-services/&quot;) |
| ^nav-additionalInfo-expand | Navigation - Additional Info - Expand - {{JS - Global - Additional Info - Header Label}} - {{JS - Global - Additional Info - Component Label}} | Grey box located part way down the copy of the page with a yellow line on the left side and a caution symbol (!) on the top left corner (ex. &quot;How do I get help if I&#39;m homeless… on this page: &quot;https://www.va.gov/careers-employment&quot;) |
| ^nav-additionalInfo-collapse | Navigation - Additional Info - Collapse - {{JS - Global - Additional Info - Header Label}} - {{JS - Global - Additional Info - Component Label}} | Grey box located part way down the copy of the page with a yellow line on the left side and a caution symbol (!) on the top left corner (ex. &quot;How do I get help if I&#39;m homeless… on this page: &quot;https://www.va.gov/careers-employment&quot;) |
| ^nav-jumplink-click | Navigation - Jumplink Click - {{Click Text}} | Located on the far top right corner (ex. &quot;Contact us&quot; or &quot;Sign in&quot;) |
| ^nav-pipe-delimited-list-click | Navigation - Pipe Delimited List - {{DL - pipe-delimited-list-header}} - {{CJ - Global - Click URL Null Replace}} | Hyperlinked text located in the grey banner under the main navigation menu at the top of the home page (ex. &quot;Find VA locations tool&quot;) |
| nav-promo-banner-(link|link-click) | Navigation - Promo Banner - {{Click Text}} | Promo banner on mission act page |
| nav-ebenefits-click | Navigation - Click to eBenefits | Green &quot;Go to eBenefits to apply&quot; button (ex. located on this page: &quot;www.va.gov/careers-employment/vocational-rehabilitation/programs/self-employment/&quot;) |
| ^nav-warning-alert-box-content-link-click (Legacy - replaced w/nav-alert-box-link-click) | Navigation - Warning Alert Box - {{DL - alertBoxHeading}} - {{Click Text}} | Selecting any links within an alert box at the top of the screen (ex. &quot;VA&#39;s public health response&quot; inside of the grey alert box at the top of the page with &quot;VA facility and status updates&quot; as the h3 on the home page) |
| ^nav-paginate-next | Navigation - Paginate - Next | Located at the bottom of the search results on a /search/ page |
| ^nav-paginate-previous | Navigation - Paginate - Previous | Located at the bottom of the search results on a /search/ page |
| ^nav-paginate-number | Navigation - Paginate - Number: {{DL - Paginate Page Number}} | Located at the bottom of the search results on a /search/ page |
| ^nav-info-box-click | Navigation - Info Box Click - {{DL - infoBoxText}} | &quot;Facility notice&quot; blue alert box located under a location result (ex. &quot;Facility notice&quot; under &quot;Abie Abraham VA Clinic&quot; on this page: &quot;https://www.va.gov/butler-health-care/&quot;) |
| ^nav-health-care-facility-status-click | Navigation - Health Care Facility Status - {{Click Text}} | Link to a clinic location under the &quot;Facility operating statuses&quot; h2 (ex. &quot;Beaver County VA Clinic&quot; on this page: &quot;www.va.gov/pittsburgh-health-care/operating-status/&quot;) |
| ^nav-tab-click$ | Navigation - Tab Click - {{DL - tab-text}} | (ex. Located on this page: &quot;www.va.gov/health-care/schedule-view-va-appointments/appointments/&quot;) |
| ^nav-page-tag-click$ | Navigation - Page Content Tag - {{DL - page-tag-category-label}} - {{DL - page-tag-click-label}} | One of the tags located at the bottom of a /resources/ page (ex. &quot;Claims and appeals status&quot; tag on this page: &quot; www.va.gov/resources/claim-status-tool-faqs/&quot;) |
| ^nav-alert-box-link-click$ | Navigation - Alert Box - Link Click - {{JS - Alert Box Link Click Action}} | Selecting any links within an alert box at the top of the screen (ex. &quot;VA&#39;s public health response&quot; inside of the grey alert box at the top of the page with &quot;VA facility and status updates&quot; as the h3 on the home page) |

[Back to Table of Contents](#Data-Dictionaries)

## Medallia Events

| Medallia Event | New Name |
| --- | --- |
| ShowForm\_Called | survey-show-form-call |
| Form\_Displayed | survey-start-form |
| Form\_Next\_Page | survey-next-click |
| Form\_Back\_Page | survey-back-click |
| Form\_Close\_Submitted | survey-submit-close |
| Form\_Close\_No\_Submit | survey-no-submit-close |
| Feedback\_Submit | survey-submit |
| Submit\_Feedback | survey--submission |
| Feedback\_Button\_Clicked | survey-button-click |
| ThankYou\_Displayed | survey--submission-successful |
| Invite\_Displayed | survey-invitation-display |
| Invite\_Accepted | survey-invitation-accept |
| Invite\_Declined | survey-invitation-decline |
| Invite\_Skipped | survey-invitation-skip |

[Back to Table of Contents](#Data-Dictionaries)

## Tracking Common User Interactions
As you begin building your product, you may have questions about what types of interactions are already tracked and what might need to be customized for your product. The VSP Analytics-Insights team looks for ways to ensure very common user interactions are tracked globally. 

This resource outlines common site interactions that should not require further customization by your product team. 

_Audience for this Resource_: Product Owners and Engineers

### How are these organized in Google Analytics?
Google Analytics defines user interactions as **events**, and uses a hierarchy of Event Category, Event Action, and Event Label. To access Event tracking in the Modernized areas of VA.gov, please visit the [Top Events report in Google Analytics.](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.dateOption=last30days/)

These are the broad Event Categories you will find in Google Analytics:

- **Interactions:** The user clicks on some UI element to interact with our site but does not result in a call to a back-end system.
- **Transactions:** These represent a successful self-service action that is considered a "conversion." These should be the "end goal" actions of each VA.gov product. Using a separate category allows us to take a site-wide picture of transaction volume and trends in a simple manner.
- **Sign-on:** The user takes some action related to their profile (logging in, registering, etc.).
- **API Calls:** The front-end submits something (a form's content, etc.) on behalf of a user to the VA.gov API but does not represent a successful conversion.
- **Internal:** For tracking items of interest of the VA.gov team but not directly about external users.

### Common User Interactions
Many basic Interactions are tracked within Google Analytics. Common elements that are already configured include: 

| User's Activity | Google Analytics Event Category | Google Analytics Event Action |
| --- | --- | --- |
| Downloading a PDF, Spreadsheet or Image File | Interactions | Event Action begins with "PDF Downloaded - ", "Spreadsheet Downloaded - ", or "Image Downloaded" | 
| Clicks to Non-VA.gov links, including email addresses, phone numbers, and other external sites | Interactions | Event Action begins with "Outbound Link Clicked - " |
| Signing onto the Modernized tools | Sign-on | Login - vagovprod | 

#### Design System Components
There are several common navigation elements that use the [Design System components](https://design.va.gov/components). We'll continue building this library with the components and matching Google Analytics navigation elements. These elements will require additional dataLayer code within the front-end. 

[Back to Table of Contents](#Data-Dictionaries)

## Design System Component Tracking

### Context
- The design system is the central UX component repository for the VA. It can be found at https://design.va.gov/components/.
- In an effort to standardize our GTM tagging according to the design system, the Analytics and Insights team is specifying a data layer
to track the common user interaction associated with each component. 
- This data layer spec should be used unless an otherwise provided spec is given from the Analytics and Insights team.
- Not every design system component will have tracking, as some are dedicated to styling rather than user interaction with no tracking pieces.

### Goal
- Our bet is that by standardizing the data layer tracking code according to the design system components, this will help cut down
on the amount of time VFS and VSP teams spend in implementing the data layer and fast-track the time to begin collecting data.
- In addition, it will allow our team to spend more time on dashboarding and insights, as opposed to the implementation of tracking.

### Implementation Notes
- This implementation comprises of two main components: 1) the configuration of custom events within each design system copmonent to collect the relevant metadata and 2) the event listener attached to the body of VA.gov to listen for the custom events and in-turn push to the data layer to be picked up by GTM

### Sensitive Components
- The majority of design system components have been configured to push these events automatically when the components are used within the application.
- That said, there are several components that by default do **NOT** collect metadata by default due to the nature of how these components are often used for PII-related inputs, those components are: 
  - `TextInput`
  - `TextArea`
  - `NumberInput`
  - `Select`
  - `Checkbox`
  - `CheckboxGroup`
  - `RadioButton`
  - `MonthYear`
  - `Date`
- While these components have been reviewed by the VSP Identity team, it is still at the responsibility of the VFS team to conduct a security review before data collection of these components can begin.


### Component Embed Schedule
| Component Name | Tentative Sprint | Tentative Dates
| ------------- | ------------------- | -----------
_QA Testing of Buttons_ <br><br>_Begin implementation of [Additional Info,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/additionalinfo/)_ _[Alert Boxes,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/alertbox/)_ _[Modals](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/modal/)_| 44 | 1/20/2021-2/3/2021
 _QA Testing of Additional Info, Alert Boxes, Modals_ <br><br> _Begin implementation of_ _[Promo Banner,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/promobanner/) [Progress Bar,](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/progressbar/) [Loading Indicator](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/loadingindicator/)_| 45 |	2/3/2021-2/17/2021
 _QA Testing of Promo Banner, Progress bar, Loading Indicator_ <br><br> _Begin implementation of [Breadcrumbs](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/breadcrumbs/)_ | 46 | 2/17/2021-3/3/2021
 _QA Testing + Deployment of design system components to-date, and identify event taxonomy + duplication cleanup where necessary_ | 47 | 3/3/2021-3/17/2021
 _Begin implementation of_ _Form Controls( [text box](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/textarea/), [select box](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/select/), [check box](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/checkbox/), [radio buttons](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/radiobuttons/))_, _[Accordions](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/collapsiblepanel/), [Pagination, ](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/pagination/) Side Nav_ <br><br> _QA testing of Form Controls( text box, select box, check box, radio buttons), Accordions, Pagination, Side Nav)_ <br><br> _HARDENING_ | 48 | 3/17/2021-3/31/2021


### Specification

<table>
  <tr>
   <td>Component Name
   </td>
   <td>Components where implemented
   </td>
   <td>Description of Interaction
   </td>
   <td>Data Layer Specification
   </td>
  </tr>
  <tr>
   <td>Buttons
   </td>
   <td>Global event listener for buttons
   </td>
   <td>Click on a button with an appropriate CSS class
   </td>
   <td><code>'event': 'cta-button-click' //consistently populate for ALL types of button clicks</code>
<p>
<code>'button-type' //'primary', 'secondary', 'default'</code>
<p>
<code>'button-click-label': //dynamically populate with text of button</code>
<p>
<code>'button-background-color': //dynamically populate with the background color of the button`</code>
   </td>
  </tr>
  <tr>
   <td>Accordions
   </td>
   <td>CollapsiblePanel.js
   </td>
   <td>Click to expand/collapse accordions
   </td>
   <td><code>'event': 'int-accordion-expand', //OR 'int-accordion-collapse'</code>
<p>
<code>'accordion-parent-label' //accordion parent label (if there is two labels, if only one label on accordion, populate this value and make child-label undefined)</code>
<p>
<code>'accordion-child-label': //dynamically populate with secondary label of the accordion</code>
<p>
<code>'accordion-section-label': //populate with the label of the section where the accordion is present`</code>
   </td>
  </tr>
  <tr>
   <td>Additional Info
   </td>
   <td>AdditionalInfo.js
   </td>
   <td>Click to expand/collapse additional info component
   </td>
   <td><code>'event': 'int-additional-info-expand', //OR 'int-additional-info-collapse',</code>
<p>
<code>'additional-info-click-label': //dynamically populate with the click label of the expandable component`</code>
   </td>
  </tr>
  <tr>
   <td>Alert Boxes
   </td>
   <td>AlertBox.js
   </td>
   <td>Click on a link and/or heading within an alert box or click to close
   </td>
   <td><code>'event': 'nav-alert-box-link-click' //consistent for all links within an alert box</code>
<p>
<code>'alert-box-status': //dynamically populate according to the type of alert box, 'warning', 'error', 'info'</code>
<p>
<code>'alert-box-headline': //dynamically populate according to the top level heading of the alert box</code>
<p>
<code>'alert-box-headline-level': //dynamically populate with the level of the headline</code>
<p>
<code>'alert-box-click-label': //dynamically populate according to the click label of the link</code>
<p>
<code>'alert-box-background-only: //dynamically populate with boolean true\|false if alert box background only prop was used</code>
<p>
<code>'alert-box-closeable': //dynamically populate with true or false if the component is closeable</code>
<p>
<code>----------------------------------------</code>
<p>
<strong><em>Substitute these for close event, use variables above</em></strong>
<p>
<code>'event': 'int-alert-box-close' //consistently populate when an alert box is closed</code>
   </td>
  </tr>
  <tr>
   <td>Breadcrumbs
   </td>
   <td>Breadcrumb.js
   </td>
   <td>Click on a breadcrumb link
   </td>
   <td><code>'event': 'nav-breadcrumb',</code>
<p>
<code>'breadcrumb-clickLabel': //dynamically populate according to the breadcrumb label clicked on</code>
<p>
<code>'breadcrumb-clickLevel': //level number clicked on</code>
<p>
<code>'breadcrumb-totalLevels': //total number of click levels</code>
<p>
<code>'breadcrumb-mobile-first-enabled': //boolean for if the mobile first prop is used`</code>
   </td>
  </tr>
  <tr>
   <td>Featured Content
   </td>
   <td>
   </td>
   <td>Click on a featured content link
   </td>
   <td><code>'event': 'nav-featured-content-link-click' //consistently populate for all featured content link clicks</code>
<p>
<code>'featured-content-heading': //dynamically populate according to the header of the featured content</code>
<p>
<code>'featured-content-click-label': //dynamically populate according to the link label</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Text Box</em>
   </td>
   <td>TextInput.js
<p>
TextArea.js
<p>
NumberInput.js
   </td>
   <td>Input and click away from text box
   </td>
   <td><code>'event': 'int-textbox-input' //consistently populate for text box inputs</code>
<p>
<code>'textinput-label': //dynamically populate according to the label of the text box</code>
<p>
<code>'textinput-field-value': //dynamically populate with the user input text</code>
<p>
<code>'textinput-type': //dynamically populate according to the text prop variable</code>
<p>
<code>'textinput-required': //dynamically populates with boolean true or false, true if text input is required</code>
<p>
<code>------------------------------------------</code>
<p>
<strong><em>Substitute these variables for TextArea.js</em></strong>
<p>
<code>'textarea-label': //dynamically populate according to the label of the text area</code>
<p>
<code>'textarea-field-value': //dynamically populate with the user input text</code>
<p>
<code>'textarea-required': //dynamically populates with boolean true or false, true if text area is required</code>
<p>
<code>'textarea-type': //dynamically populate according to the text prop variable</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Select box</em>
   </td>
   <td>Select.js
   </td>
   <td>Selection and click away from select box
   </td>
   <td><code>'event': 'int-select-box-option-click' //consistently populate for all select box selections</code>
<p>
<code>'select-box-label': //dynamically populate according to the label of the select box presented to the user</code>
<p>
<code>'select-box-value': //dynamically populates with the select box value selected</code>
<p>
<code>'select-box-required': //dynamically populates with boolean true or false, true if checkbox is required</code>
<p>
<code>'select-options': //dynamically populates with the options of the select box</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Checkbox</em>
   </td>
   <td>Checkbox.js
<p>
CheckboxGroup.js
   </td>
   <td>Select and click away from a checkbox option
   </td>
   <td><code>'event': 'int-checkbox-option-click',</code>
<p>
<code>'checkbox-label': //dynamically populates according to check box label selected</code>
<p>
<code>'checkbox-labelAboveCheckbox': //dynamically populates according to label description presented to the user </code>
<p>
<code>'checkbox-required': //dynamically populates with boolean true or false, true if checkbox is required</code>
<p>
<code>------------------------------------------</code>
<p>
<strong><em>Substitute these variables for CheckboxGroup.js</em></strong>
<p>
<code>'checkboxgroup-options-label': //dynamically populates with the label of the selected checkbox</code>
<p>
<code>'checkboxgroup-label: //dynamically populates with the label of the checkbox group presented to the user</code>
<p>
<code>'Checkboxgroup-required': //dynamically populates with boolean true or false, true if checkboxgroup is required</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Radio Button</em>
   </td>
   <td>RadioButton.js
   </td>
   <td>Select and click away from a radio button option
   </td>
   <td><code>'event': 'int-radio-button-option-click', //consistently populate for all radio button toggles</code>
<p>
<code>'radio-button-label': //dynamically populate according to the radio button label for the group presented to the user</code>
<p>
<code>'radio-button-option-click-label': //dynamically populate according to the radio button option selected label</code>
<p>
<code>'radio-button-options-label: //dynamically populates according to the radio button options array</code>
<p>
<code>'radio-button-required: //dynamically populates with boolean true or false, true if radio button is required</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Date</em>
   </td>
   <td>Date.js
   </td>
   <td>Select and click away from a date field selection
   </td>
   <td><code>'event': 'int-date-input', </code>
<p>
<code>'date-label': //dynamically populate according to the date label presented to the user</code>
<p>
<code>'date-date': //dynamically populates with the date selected</code>
<p>
<code>'date-required': //dynamically populates with boolean true or false, true if date is required</code>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>MonthYear</em>
   </td>
   <td>MonthYear.js
   </td>
   <td>Select and click away from a MonthYear field selection
   </td>
   <td><code>'event': 'int-monthyear-input',</code>
<p>
<code>'monthyear-label': //dynamically populates with the entire label </code>
<p>
<code>'monthyear-date': //dynamically populates with the date value </code>
   </td>
  </tr>
  <tr>
   <td>Modal
   </td>
   <td>Modal.js
   </td>
   <td>Click on a modal button
   </td>
   <td><code>'event: 'int-modal-click',</code>
<p>
<code>'modal-status': this.props.status,</code>
<p>
<code>'modal-title': this.props.title,</code>
<p>
<code>'modal-primaryButton-text': this.props.primaryButton.text,</code>
<p>
<code>'modal-secondaryButton-text': this.props.secondaryButton.text</code>
   </td>
  </tr>
  <tr>
   <td>Pagination
   </td>
   <td>Pagination.js
   </td>
   <td>Click to paginate 
   </td>
   <td><code>'event': 'nav-paginate-number' //if number click, 'nav-paginate-previous' if previous click, 'nav-paginate-next' if next click</code>
<p>
<code>'paginate-page-number': //dynamically populate according to the number the user navigated to</code>
<p>
<code>'maximum-page-list-length': //populate according to the maximum number of pages that can be navigated</code>
<p>
<code>'last-page-enabled': //populate if last page enabled prop is used</code>
   </td>
  </tr>
  <tr>
   <td>Progress Bars
   </td>
   <td>
   </td>
   <td>On state change
   </td>
   <td><code>'event': 'nav-progress-bar-change', //consistent event name for progress bar change</code>
<p>
<code>'progress-bar-type': 'segmented', //dynamic with type of progress bar, in this case 'segmented'</code>
<p>
<code>'progress-bar-current': //dynamically populate with an integer with each new change the current</code>
<p>
<code>'progress-bar-total': //consistently populate as an integer with the total number of segments</code>
<p>
<code>'progress-bar-title': //dynamically populate according to the label on the component</code>
<p>
<code>'progress-bar-percentage': 10 //use for standard progress bar, only in increments of 10%`</code>
   </td>
  </tr>
  <tr>
   <td>Promo Banner
   </td>
   <td>PromoBanner.js
   </td>
   <td>Click on a link within the promo banner
   </td>
   <td><code>'event': 'nav-promo-banner-link-click'</code>
<p>
<code>'promo-banner-click-label': //populate according to link click text</code>
<p>
<code>'promo-banner-click-target': //populate according to target in component</code>
<p>
<code>'promo-banner-click-href': //populate according to click href</code>
<p>
<code>'promo-banner-closeable': //populate with true or false based on if promo banner is capable of being closed</code>
<p>
<code>'promo-banner-type': //populate according to banner type (icon) in component`</code>
   </td>
  </tr>
  <tr>
   <td>Sidenav
   </td>
   <td>
   </td>
   <td>
    Click on a sidenav link
   </td>
   <td><code>'event': 'nav-sidenav' //consistently populate for side navs</code>
<p>
<code>'sidenav-click-action': //'expand', 'collapse', 'click-through'</code>
<p>
<code>'sidenav-click-label': //populate according to sidenav clicked on</code>
<p>
<code>'sidenav-click-level': //number representing the indentation level of the navigation level clicked on</code>
<p>
<code>'sidenav-parent-label': //label of next 1-level higher parent, undefined if is parent</code>
<p>
<code>'sidenav-accordion-header': //label of the collapsible accordion header</code>
<p>
<code>'sidenav-section-title': //h4 in design system docs`</code>
   </td>
  </tr>
</table>

[Back to Table of Contents](#Data-Dictionaries)

## Tracking Form Events
For multi-step veteran forms, VFS teams can implement dataLayer events that will be pushed to Google Analytics based on a set of standard event schema. These events match settings that the Analytics-Insights team has established within Google Tag Manager. 

Before you review this document, please review [Measuring Pageviews and Events.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/build-process-measuring-pageviews-and-events.md)

_Audience for this Resource_: Product Owners and Engineers

### Data Dictionary for Form Events
The dataLayer events listed in the table below should populate the `event` value in the `event-goes-here` example. 

`dataLayer.push({'event': 'event-goes-here'});`

In the table where it lists \<product\>, please reference the Product prefix table in the bottom of the [Measuring Pageviews and Events documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/build-process-measuring-pageviews-and-events.md#event-tracking) and insert your product's prefix. If your Product area is not listed, please reach out to the Analytics-Insights team via the [Analytics-Insights GitHub Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban%2C+bsmartin-ep%2C+jonwehausen&labels=analytics-insights%2C+analytics-request%2C+collaboration-cycle&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BProduct%5D) and also within the [#vsp-analytics](https://dsva.slack.com/channels/vsp-analytics) channel for guidance.


| Step in Form Process       | Interaction                                                                                 | dataLayer Event                     |
|----------------------------|---------------------------------------------------------------------------------------------|-------------------------------------|
| Form Starts                | Form Start - Starting application without logging in                                        | `no-login-start-form`                 |
| Form Starts                | Form Start - Call-to-action to **Sign In** to start form                                        | `login-link-clicked-cta-form`         |
| Form Starts                | Form Start - Begin form button after successful sign in                                     | `login-successful-start-form`        |
| Form Saves and Submissions | Form Saves - Event is triggered for auto form saves                                         | `\<product\>-sip-form-saved`          |
| Form Saves and Submissions | Form Prefill Failures - Tracks when form prefill cannot be retrieved                        | `\<product\>-sip-form-prefill-failed` |
| Form Saves and Submissions | Form Submission - Measure the form submission; Success and failures are measured distinctly | `\<product\>--submission`             |
| Form Saves and Submissions | Form Submission Successful - Triggered when the form has been successfully submitted        | `\<product\>--submission-successful`  |
| Form Saves and Submissions | Form Failures - Triggered when the form has failed client or server-side                    | `\<product\>--submission-failed`      |

### Datalayer Specification

Updated 12/31/2020: 
- Removing the event for `howToWizard-hidden` as current codebase is not robust enough to trust this event with great legitimacy

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
User chose to start over the wizard | `'event': 'howToWizard-start-over'` | Pushed along with the user function to start the form over [(manually clears the session data)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/use_cases/business_logic.md)
Form field changes (clicks on radio button answers) | `'event': 'howToWizard-formChange'`,<br>`'form-field-type': '<form_component_type>',`<br>`'form-field-label': <question_text>',`<br>`'form-field-value': '<question_answer_or_form_value>',` | • `'form-field-type'` should populate with the class name, in this case `'form-radio-buttons'` ![image](https://user-images.githubusercontent.com/48527022/93485736-61bf4600-f8d1-11ea-9650-8c2f6f381b95.png) •`'form-field-label'` should populate with the full question label<br>•`'form-field-value'` should populate with the value selected, in most cases here `'Yes'` or `'No'`
Received alert notice following a question answer <br> ![image](https://user-images.githubusercontent.com/48527022/93490255-40ad2400-f8d6-11ea-85bf-f2d7b88e2d3c.png) <br> ![image](https://user-images.githubusercontent.com/48527022/93491401-a3eb8600-f8d7-11ea-9086-00218c7eb200.png) <br> ![image](https://user-images.githubusercontent.com/48527022/96585154-2d162400-12ad-11eb-9856-dc04ba7b5bca.png) | `'event': 'howToWizard-alert-displayed',` <br>`'reason-for-alert': '<description>'` | <br>`'reason-for-notice'` can populate with whatever free text level of specificity you all feel is necessary to understand why the user received the notice, for reasons that are ineligibility related, we can prefix with `ineligibility - `...(**e.g** `'ineligibility - not a service member or veteran'`, `'ineligibility - eligible for chapter 31'`, `'ineligibility - outside time period from active duty discharge`', `'chose not to apply now'`)
Click on link within blue box notice <br> ![image](https://user-images.githubusercontent.com/48527022/93496079-cb911d00-f8dc-11ea-92ec-14109038beda.png) ![image](https://user-images.githubusercontent.com/48527022/96589333-aebc8080-12b2-11eb-9b2a-bb7315e08a29.png) | `'event': 'howToWizard-alert-link-click'`, <br> `'howToWizard-alert-link-click-label'`| Populate with the full link click label
How to wizard primary CTA is surfaced / visible | `'event': 'howToWizard-cta-displayed'` | When the user has reached the end of the series of questions to reach the apply now button 
User clicks button to apply now <br> ![image](https://user-images.githubusercontent.com/48527022/93489961-e44a0480-f8d5-11ea-83ba-d94edee335f9.png) | `'event': 'cta-button-click',`<br>`'button-type: 'primary' //populate with the button type`<br>`'button-click-label': //populate with the button label` | Populate with the full primary button click label
User clicks link to skip how to wizard <br> ![image](https://user-images.githubusercontent.com/48527022/93489251-49512a80-f8d5-11ea-83e5-e2ab93892d28.png) | `'event': 'howToWizard-skip'` | From reading [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/how-to-apply-wizards/use_cases/business_logic.md#for-all-wizards), sounds like there will be customization around the display properties (link vs h2) <br><br> Keeping this event name generic to account for the customizations of some teams having links vs buttons
Video Tracking with a **progress bar** | `'event': 'nav-progress-bar-change',`<br>`'progress-bar-type': 'segmented',`<br>`'progress-bar-current-value': //dynamically populate with an integer with each new change the current,`<br>`'progress-bar-max-value': //consistently populate as an integer with the total number of segments, i.e 5,`<br>`'progress-bar-title': //title of progress bar step`<br>`'progress-bar-subtitle': //subtitle of progress bar step`<br>`'enable-analytics': true`

[Back to Table of Contents](#Data-Dictionaries)

## Search Events

### Context
- The following spec serves as a standardized spec for tracking search consistently across the various search touchpoints of the VA.gov, including but not limited to: 
   - Type ahead search
   - Resources and support search
   - Find Forms
   - Yellow Ribbon Search
 - This spec captures both the search and search result click tracking
 - The `'view_search_results'` event is designed to align with future initiatives which include the introduction of GA4 -- as `'view_search_results'` serves as an [automatically collected events](https://support.google.com/analytics/answer/9234069?hl=en). 
 
 
 ### On Search
<table>
  <tr>
   <td>Description of When To Use
   </td>
   <td>Data Layer Specification
   </td>
   <td>Dev Notes
   </td>
  </tr>
  <tr>
   <td><em>When the user has performed a search AND search results have been returned</em>
<p>
<strong><em>For type ahead search, this is implemented just prior to next page load when the user lands on /search</em></strong>
   </td>
   <td><code> 'event': 'view_search_results'</code>
<p>
<code> 'search-page-path': //without <a href="www.va.gov">www.va.gov</a> hostname, the page path where the search occurred</code>
<code> 'search-query': //full query input from the user</code>
<p>
<code> 'search-typeahead-enabled': //true when the user has typeahead enabled </code>
<p>
<code> 'search-selection': //scope of search, values include: 'All VA.gov','Resources and Support','Yellow Ribbon',  'Find Forms'</code>
<p>
<code> 'search-filters-list': {} //key value pairs of search filter parameters</code>
<p>
<code>'type-ahead-option-keyword-selected': //type ahead option selected by user to perform search</code>
<p>
<code>'type-ahead-options-list': [] //full array list of type ahead options presented to user at time of search</code>
<p>
<code>'type-ahead-option-position': //rank position chosen from type ahead options list </code>
<p>
<code> 'sitewide-search-app-used': //true only when the header search box is used, otherwise false</code>
<p>
<code> 'search-results-total-count': //full count of search results returned</code>
<p>
<code> 'search-results-total-pages': //full count of search result pages returned</code>
   </td>
   <td>Please be sure to push `undefined` for any variable that is not available from the system
<p>
For all non-type ahead search, please push boolean value <code>false </code>for <code>search-typeahead-enabled</code>
<p>
Example of <code>search-filters-list </code>used for Yellow Ribbon Search <code>{ stateOrTerritory: //state, city: //city name, contributionAmount: "unlimited" //or undefined if not used, numberOfStudents: "unlimited" //or undefined if not used}</code>
   </td>
  </tr>
</table>

### Type Ahead Search Specific - Other Search Products to Ignore

<table>
  <tr>
   <td>Description of When To Use
   </td>
   <td>Data Layer 
   </td>
   <td>Dev Notes 
   </td>
  </tr>
  <tr>
   <td><em>When the next page load <strong>for a typeahead search has occurred</strong></em>
<p>
<em>Exclusively used on type ahead search for the purpose of maintaining consistent metadata extraction while coping with the difficulty of the timing between when search is executed, next page load, and search result metadata is returned</em>
   </td>
   <td><code>'event': 'onload_view_search_results',</code>
<p>
<code>'search-query': //full query input from the user</code>
<p>
<code> 'search-typeahead-enabled': //true when the user has typeahead enabled </code>
<p>
<code> 'search-selection': //scope of search, values include: 'All VA.gov','Resources and Support','Yellow Ribbon',  'Find Forms'</code>
<p>
<code>'sitewide-search-app-used': //true only when the header search box is used, otherwise false</code>
<p>
<code> 'search-results-total-count': //full count of search results returned</code>
<p>
<code> 'search-results-total-pages': //full count of search result pages returned</code>
   </td>
   <td><em>See above dev notes for consistencies </em>
   </td>
  </tr>
</table>


### On Search Results Click
Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the user has clicked on a search result from the search results list_ |  `'event': 'onsite-search-results-click',`<br>`'search-result-type': 'title' //dynamically populate with 'pdf', if pd for 'cta' if a cta click`<br>`'search-filters-list': { stateOrTerritory: //state, city: //city name, contributionAmount: "unlimited" //or undefined if not used, numberOfStudents: "unlimited" //or undefined if not used}`<br>`'search-results-top-recommendation': true\|false //populate boolean according to if result clicked was a top recommendation`<br>`'search-selection': 'All VA.gov' //dynamically changed according to search application + scope`<br>`'search-result-chosen-page-url': https://benefits.va.gov/benefits //dynamically populate accoding to the url href`<br>`'search-result-chosen-title': Veterans Benefits Administration Home' //dynamically populate with the top level title` <br>`'search-query': 'health assessment',`<br>`'search-results-total-count': 999,`<br>`'search-results-total-pages': <total_result_pages>,`<br>`'search-result-position': 4`<br>`'search-result-page': 1` | - The position number should reflect the position on the page -- For example, if 10 results are returned and the first result is clicked, `'search-result-position'` should populate with 1 <br> - If introducing a search result type that is not a title, pdf, or cta, please ask analytics team for what this value should populate with 

### On Search Result Change
- As of 1/5/2021, the primary filtering mechanism was introduced as part of [this user story](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17901)

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the orientation of the way search results are presented is changed, either with **filtering** or **sorting**_  | `'event': 'onsite-search-results-change',`<br>`'search-query': '10-10EZ', //dynamically populate with the search query`<br>`'search-page-path': '/find-forms', //dynamically populate with where the search occured`<br>`'search-results-change-action-type': 'sort', //dynamically populate with 'sort' or 'filter'`<br>`'search-results-change-action-label': 'newest', //'oldest' //populate according to the text label of user selection indicating the more specific action`<br>`'search-results-pagination-current-page': 1, //populate with the current pagination number`<br>`'search-results-total-count': 999, //populate with the total number of search results`<br>`'search-results-total-pages': 100, //populate with total number of result pages` | - **Pagination of search results is tracked using a seperate taxonomy**

[Back to Table of Contents](#Data-Dictionaries)

## Custom Dimensions

Number|Name|Definition|Scope|Active
--|--|--|--|--
1|Internal User||User|true
2|Product Area Used - Health Care|Distinguish users who have ever completed at least one transaction in the Health Care product area|User|true
3|Product Area Used - Benefits|Distinguish users who have ever completed at least one transaction in the Benefits product area|User|true
4|Product Area Used - Education|Distinguish users who have ever completed at least one transaction in the Education product area|User|true
5|Product Area Used - Other|Distinguish users who have ever completed at least one transaction in the Other product area|User|true
6|Product Used - Education Forms||User|true
7|Product Used - Health Care Application||User|true
8|Product Used - Claims/Appeals Tracker||User|true
9|Product Used - Secure Messaging||User|true
10|Product Used - Rx Refills||User|true
11|Product Used - VA Letters||User|true
12|Product Used - Post 9/11 GI Bill Status||User|true
13|Product Used - Facility Locator||User|true
14|Product Used - GIBCT||User|true
15|Product Used - Health Records||User|true
16|Product Used - Burial Forms||User|true
17|Product Used - Pension Forms||User|true
18|Product Used - VIC||User|true
19|Product Used - Pre-need Burial Application||User|true
20|Product Used - Discharge Upgrade||User|true
21|Logged In||Session|true
22|LOA Level||Session|true
23|Telephone Contact||User|true
24|Product Used - Dashboard||User|true
25|Product Used - Profile||User|true
26|Product Used - Account||User|true
27|LOA Level - User||User|false
28|LOA Level - Hit||Hit|false
29|completingForm||Session|true
30|Modernized Content||Hit|true
31|Product Used - Recommendations||User|true
32|Product Area Used - Recommendations Health Care||User|true
33|Product Area Used - Recommendations Disability||User|true
34|Product Area Used - Recommendations Appeals||User|true
35|Product Area Used - Recommendations Education||User|true
36|Product Area Used - Recommendations Careers||User|true
37|Product Area Used - Recommendations Pension||User|true
38|Product Area Used - Recommendations Housing||User|true
39|Product Area Used - Recommendations Life Insurance||User|true
40|Product Area Used - Recommendations Burials||User|true
41|Product Area Used - Recommendations Family Benefit||User|true
42|Global - Currently Active Duty||Hit|true
43|Global - Will Be Called to Active Duty||Hit|true
44|Education - Education Completed||Hit|true
45|Global - Salary||Hit|true
46|Education 22-0994 Applied Past Benefits||Hit|true
47|Education 22-0994 Currently Working Industry||Hit|true
48|Education 22-0994 Made Program Selection||Hit|true
49|Education - STEM Scholarship Applicant||Hit|true
50|Profile Section Saved - Direct Deposit||User|true
51|Health Facility Location||Hit|true
52|Health Facility Type||Hit|true
53|Global - Preferred Contact Method||Hit|true
54|Global - Benefits Used Recently||Hit|true
55|Education - Enrolled in Undergrad STEM||Hit|true
56|Education - Pursue Teaching Certification||Hit|true
57|Error Key||Hit|true
58|Profile Section Saved - SMS Optin and Optout||User|true
59|Placeholder - Event Number||Hit|false
60|Product - Disability Ratings Viewed||User|true
61|Video Title||Hit|true
62|Product - Health Care VAOS User||User|true
63|Product Area Used - Disability||User|true
64|Education - Benefit Update||Hit|true
65|Education - Benefit Claim for Self||Hit|true
66|Education - National Call to Service||Hit|true
67|Education - Applicant is Vet Tec||Hit|true
68|Education - Sponsor Transferred Benefits||Hit|true
69|Education - Receiving Sponsor Benefits||Hit|true
70|Education - Sponsor Available||Hit|true
71|Health Care VAOS - Appointment Type||Hit|true
72|Health Care VAOS - Type of Care||Hit|true
73|Health Care VAOS - Flow||Hit|true
74|Education - 22-1995 - Exhausted All Benefits||Hit|true
75|Health Care VAOS - Facility Type||Hit|true
76|Health Care VAOS - Reason for Appointment||Hit|false
77|Frequently Asked Question||Hit|true
78|FAQ Section||Hit|true

[Back to Table of Contents](#Data-Dictionaries)

## Custom Metrics

Index|Name|Scope|Formatting Type|Active|
--- |:--- |:--- |:--- |--- |
1|Event Start|Hit|Time|false|
2|Event Complete|Hit|Time|false|
3|IDme Login Attempt|Hit|Integer|true|
4|IDme Login Success|Hit|Integer|true|
5|MHV Login Attempt|Hit|Integer|true|
6|MHV Login Success|Hit|Integer|true|
7|DSLogon Attempt|Hit|Integer|true|
8|DSLogon Success|Hit|Integer|true|
9|Education - Count of Programs Saved|Hit|Integer|true|
10|File Uploads|Hit|Integer|true|
11|Disability Calculator Rows|Hit|Integer|true|
12|Unused|Hit|Integer|false|
13|Unused|Hit|Integer|false|
14|Unused|Hit|Integer|false|
15|Unused|Hit|Integer|false|
16|Unused|Hit|Integer|false|
17|GIBCT - Profile Benefit Estimate|Hit|Currency (Decimal)|true|
18|Unused|Hit|Integer|false|
19|Address Validation Needed|Hit|Integer|true|
20|Address Suggestion Provided|Hit|Integer|true|
21|Address Suggestion Used|Hit|Integer|true|
22|Home Address Suggestion Failures|Hit|Integer|true|
23|Mailing Address Suggestion Failures|Hit|Integer|true|
24|Address Override|Hit|Integer|true|

[Back to Table of Contents](#Data-Dictionaries)
