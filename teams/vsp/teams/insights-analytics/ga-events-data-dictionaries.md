# Data Dictionaries  
 - [Benefit Hubs Content Grouping](#Benefit-Hubs-Content-Grouping)
 - [Products Content Grouping](#Products-Content-Grouping)
 - [Navigation Events](#Navigation-Events)
 - [Medallia Events](#Medallia-Events)
 - [Interaction Actions](#Interaction-Actions)
 - [Tracking Common User Interactions](#tracking-common-user-interactions)
 - [Design System Component Tracking](#design-system-component-tracking)
 - [Tracking Form Events](#tracking-form-events)
 - [Search Events](#search-events)
 - [Custom Dimensions](#Custom-Dimensions)
 - [Custom Metrics](#Custom-Metrics)
 - [Campaign Tracking UTM Parameters](#Campaign-Tracking-UTM-Parameters)

## Benefit Hubs Content Grouping

| **Page Path (RegEx)** | **Benefit Hub** |
| --- | --- |
| ^/burial.* | Burials &amp; Memorials |
| ^/pension.* | Pension &amp; Fiduciary |
| ^/education.* | Education |
| ^/gi-bill.* | Education |
| ^/gibill.* | Education |
| ^/decision-reviews.* | X |
| ^/records.* | Records |
| ^health-care/get-medical-records.* | Records |
| ^/housing-assistance.* | Housing Assistance |
| ^/life-insurance.* | Life Insurance |
| ^/careers-employment.* | Careers &amp; Employment |
| ^/service-member-benefits.* | Service Member Benefits |
| ^/family-member-benefits.* | Family Member Benefits |
| ^/health-?care.* | Health Care |
| ^/healthbenefits.* | Health Care |
| ^/.\*-health-care.* | Health Care |
| ^/track-claims/your-stem-claims | Education
| ^/track-claims.\* | Disability |
| ^/disability.* | Disability |
| ^/claim-or-appeal-status.* | Disability |

[Back to Table of Contents](#Data-Dictionaries)

## Products Content Grouping

| **Page Path (RegEx)** | **Product Name** |
| --- | --- |
| ^/profile.\* | Authenticated Experience Profile 2.0 |
| ^/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996.\* | Benefits &amp; Memorials - Higher Level Review (20-0996) |
| ^/burials-and-memorials/application/530.\* | Burial &amp; Preneed - Burial Benefits Application (Form 530) |
| ^/burials-and-memorials/pre-need/form-10007-apply-for-eligibility.\* | Burial &amp; Preneed - Preneed Eligibility (Form 40-10007) |
| ^/disability/eligibility/special-claims/automobile-allowance-adaptive-equipment.\* | Claims - Auto Allowance and Adaptive Equipment Application (21-4502) |
| ^/disability/file-disability-claim-form-21-526ez.\* | Claims - Disability Claims (526EZ v2) |
| ^/track-claims/your-claims.\* | Claims - Viewed Details |
| x | Content API (Drupal + GraphQL) |
| ^/coronavirus-chatbot.\* | Covid-19 Chatbot |
| ^coronavirus-veteran-frequently-asked-questions.\* | COVID-19 FAQs |
| ^covid19screen.\* | COVID-19 Screening Tool |
| ^/health-care/covid-19-vaccine/stay-informed/.\* | COVID-19 Vaccination |
| ^manage-va-debt/request-debt-help-5655.\* | Debt Management - Financial Status Report (5655) |
| ^/manage-va-debt/your-debt.\* | Debt Management - Manage Your VA Debt |
| ^/change-direct-deposit.\* | Direct Deposit |
| ^/disability/how-to-file-claim.\* | Disability - File a Disability Claim for Compensation or Increase |
| ^/disability/upload-supporting-evidence.\* | Disability - Upload Evidence to Support Claim |
| ^disability/view-disability-rating.\* | Disability - Ratings Calculator |
| ^/discharge-upgrade-instructions/guidance.\* | Discharge - Discharge Upgrade Guidance |
| ^/records/download-va-letters/letters/letter-list.\* | Discharge - Download a Letter |
| ^/records/get-veteran-id-cards/apply.\* | Discharge - Veteran ID Card (VIC) |
| ^/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/.\* | Education - Application for STEM Scholarship (22-10203) |
| ^/education/apply-for-education-benefits/application/1990N/.\* | Education - Call to Service Program (1990n) |
| ^/education/change-gi-bill-benefits.\* | Education - Change GI Bill School |
| ^/education/apply-for-education-benefits/application/5495.\* | Education - Change GI Bill school or program for dependents (5495) |
| ^/education/apply-for-education-benefits/application/1990/.\* | Education - Education Benefits Application (1990) |
| ^/education/apply-for-education-benefits/application/5490.\* | Education - Eligible dependent benefits (5490) |
| ^/gi-bill-comparison-tool.\* | Education - GI Bill Comparison Tool |
| ^/education/submit-school-feedback.\* | Education - GI Bill Feedback Tool |
| ^/gi-bill-comparison-tool/profile.\* | Education - GIBCT Profile Viewed |
| ^/education/how-to-apply.\* | Education - How to Apply for GI Bill and Benefits |
| ^/education/opt-out-information-sharing/opt-out-form-0993.\* | Education - Opt-Out of Information Sharing (0993) |
| ^/education/gi-bill/post-9-11/ch-33-benefit.\* | Education - Post 9-11 GI Bill Statement of Benefits |
| ^/education/apply-for-education-benefits/application/1995.\* | Education - Request for Change of Program (1995) |
| ^/education/apply-for-education-benefits/application/1990E/.\* | Education - Transferred Education Benefits (1990e) |
| ^/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994.\* | Education - Veteran Employment Through Technology Education Courses (22-0994, VET TEC) |
| ^/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/.\* | Family Member Benefits - Caregiver Application (10-10cg) |
| ^/health-care/apply/application.\* | Health Care - Health Care Application (10-10EZ) |
| ^/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346/.\* | Health Care - Medical Device Reordering Tool (2346a) |
| ^/health-care/apply/application/introduction.\* | Health Care - Patient Portal: Apply for VA Health Care |
| ^/health-care/schedule-view-va-appointments.\* | Health Care - Patient Portal: Health Records Appointments &amp; Scheduling |
| ^/health-care/view-test-and-lab-results.\* | Health Care - Patient Portal: Lab and Test Results |
| ^/health-care/secure-messaging.\* | Health Care - Patient Portal: Messaging |
| ^/health-care/refill-track-prescriptions.\* | Health Care - Patient Portal: Rx Refills |
| ^/pension/application/527EZ.\* | Pension - Pension Application (Form 527EZ) |
| ^/performance-dashboard.\* | Performance Dashboard |
| ^careers-employment/education-and-career-counseling/apply-career-guidance-form-28-8832/.\* | Personal Career Planning and Growth (Ch. 36) |
| ^/my-va.\* | Personalized Tools - My VA |
| ^/privacy-policy.\* | Privacy Policy |
| ^/change-address.\* | Records - Change Address |
| ^/records/download-va-letters.\* | Records - Download VA Letters |
| ^health-care/get-medical-records.\* | Records - Get Medical Records Online |
| ^/records/get-military-service-records.\* | Records - Request Military Service Records Including DD214 |
| ^/records/get-veteran-id-cards.\* | Records - VA ID Cards |
| ^/resources.\* | Resources &amp; Support |
| ^/find-locations/facility.\* | Unauthenticated Experience - Facility Details Viewed |
| ^/search.\* | Unauthenticated Experience - Search |
| ^/find-forms/about-form.\* | Unauthenticated Experience - {{Find form detail pages}} |
| ^.\*-health-care.\* | VAMC |
| ^va-payment-history/.\* | Veteran Payment History |
| ^/careers-employment/vocational-rehabilitation/apply/.\* | Veteran Readiness and Employment Form CH31 (28-1900) |
| ^/track-claims/your-stem-claims.* | Education - Automated Denial STEM Claims

[Back to Table of Contents](#Data-Dictionaries)

## Navigation Events

| Event Name (RegEx) | Event Action Configuration | Location & Interaction Description |
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
| ^nav-promo-banner-link-click | Navigation - Promo Banner - {{DL - promo-banner-type}} - {{DL - promo-banner-target}} - {{DL - promo-banner-target}} - {{DL - promo-banner-text}} | Promo banner DS standardized 
| ^nav-promo-banner-link$ | Navigation - Promo Banner - {{Click Text}} | Promo banner event (legacy)
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

| Medallia Event | New Name | Event Description 
| --- | --- | --- | 
| ShowForm\_Called | survey-show-form-call |
| Form\_Displayed | survey-start-form | When the feedback form is presented to the user
| Form\_Next\_Page | survey-next-click | When the user navigates to the next page of the survey
| Form\_Back\_Page | survey-back-click |  When the user navigates to the prior page of the survey
| Form\_Close\_Submitted | survey-submit-close | When the user closes the form following submission 
| Form\_Close\_No\_Submit | survey-no-submit-close | When the form is closed without submission 
| Feedback\_Submit | survey-submit | 
| Submit\_Feedback | survey--submission | Fires on all submis attempts
| Feedback\_Button\_Clicked | survey-button-click | Click on the side Feedback button 
| ThankYou\_Displayed | survey--submission-successful | When the feedback form has been successfully submitted
| Invite\_Displayed | survey-invitation-display | When the survey modals pops up and is displayed 
| Invite\_Accepted | survey-invitation-accept | When the user elects to start the form following invitation
| Invite\_Declined | survey-invitation-decline | When the user elects to not start (close) the form following invitation
| Invite\_Skipped | survey-invitation-skip | When the user elects to skip start the form following invitation

[Back to Table of Contents](#Data-Dictionaries)

## Interaction Actions

| Event Collected | Interaction/Action |
| --- | --- |
| ^int-radio-button-option-click$ | Radio Button - {{DL - radio-button-label}} - {{DL - radio-button-option-click-label}} |
| ^int-(additionalInfo\|additional-info)-expand$ | Additional Info - Expand - {{DL - additional-info-triggerText}} |
| ^int-(additionalInfo\|additional-info)-collapse$ | Additional Info - Collapse - {{DL - additional-info-triggerText}} |
| ^int-accordion-expand$ | Accordion - Expand - {{CJ - Accordion Action}} |
| ^int-accordion-collapse$ | Accordion - Collapse - {{CJ - Accordion Action}} |
| ^int-checkbox-option-click$ | Checkbox - {{DL - checkbox-label}} - {{DL - checkbox-option-click-label}} |
| ^int-modal-(click\|show)$ | Modal - Click - {{DL - modal-status}} - {{DL - modal-title}} - {{DL - modal-primaryButtonText}} - {{DL - modal-secondaryButtonText}} - {{Click Text}} |

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
  - `Select`
  - `Checkbox`
  - `CheckboxGroup`
  - `RadioButton`
  - `MonthYear`
- While these components have been reviewed by the VSP Identity team, it is still at the responsibility of the VFS team to conduct a security review before data collection of these components can begin.

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
   <td>
<pre lang="js">
'event': 'cta-button-click' //consistently populate for ALL types of button clicks
'button-type' //'primary', 'secondary', 'default'
'button-click-label': //dynamically populate with text of button
'button-background-color': //dynamically populate with the background color of the button`
</pre>
   </td>
  </tr>
  <tr>
   <td>Accordions
   </td>
    <td><pre lang="js">&lt;va-accordion&gt;</pre> web component only (NOT CollapsiblePanel.js)
   </td>
   <td>Click to expand/collapse accordions
   </td>
   <td><pre lang="js">'event': 'int-accordion-expand', //OR 'int-accordion-collapse'
'accordion-parent-label' //accordion parent label (if there is two labels, if only one label on accordion, populate this value and make child-label undefined)
'accordion-child-label': //dynamically populate with secondary label of the accordion
'accordion-section-label': //populate with the label of the section where the accordion is present`</pre>
   </td>
  </tr>
  <tr>
   <td>Additional Info
   </td>
   <td>AdditionalInfo.js
   </td>
   <td>Click to expand/collapse additional info component
   </td>
   <td><pre lang="js">'event': 'int-additional-info-expand', //OR 'int-additional-info-collapse',
'additional-info-click-label': //dynamically populate with the click label of the expandable component`</pre>
   </td>
  </tr>
  <tr>
   <td>Alert Boxes
   </td>
   <td>AlertBox.js
   </td>
   <td>Click on a link and/or heading within an alert box or click to close
   </td>
   <td><pre lang="js">'event': 'nav-alert-box-link-click' //consistent for all links within an alert box
'alert-box-status': //dynamically populate according to the type of alert box, 'warning', 'error', 'info'
'alert-box-headline': //dynamically populate according to the top level heading of the alert box
'alert-box-headline-level': //dynamically populate with the level of the headline
'alert-box-click-label': //dynamically populate according to the click label of the link
'alert-box-background-only: //dynamically populate with boolean true\|false if alert box background only prop was used
'alert-box-closeable': //dynamically populate with true or false if the component is closeable</pre>
<p>
<strong><em>Substitute these for close event, use variables above</em></strong>
<p>
<pre lang="js">'event': 'int-alert-box-close' //consistently populate when an alert box is closed</pre>
   </td>
  </tr>
  <tr>
   <td>Breadcrumbs
   </td>
   <td>Breadcrumb.js
   </td>
   <td>Click on a breadcrumb link
   </td>
   <td><pre lang="js">'event': 'nav-breadcrumb',
'breadcrumb-clickLabel': //dynamically populate according to the breadcrumb label clicked on
'breadcrumb-clickLevel': //level number clicked on
'breadcrumb-totalLevels': //total number of click levels
'breadcrumb-mobile-first-enabled': //boolean for if the mobile first prop is used`</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Text Box</em>
   </td>
   <td>TextInput.js
<p>
TextArea.js
   </td>
   <td>Input and click away from text box
   </td>
   <td><pre lang="js">'event': 'int-text-input-blur' //consistently populate for text box inputs
'text-input-label': //dynamically populate according to the label of the text box
'text-input-value': //dynamically populate with the user input text</pre>
<p>
<strong><em>Substitute these variables for TextArea.js</em></strong>
<p>
<pre lang="js">'event': 'int-text-area-blur' //consistently populate for text box inputs
'text-area-label': //dynamically populate according to the label of the text area
'text-area-value': //dynamically populate with the user input text</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Select box</em>
   </td>
   <td>Select.js
   </td>
   <td>Selection and click away from select box
   </td>
   <td><pre lang="js">'event': 'int-select-box-option-click' //consistently populate for all select box selections
'select-box-label': //dynamically populate according to the label of the select box presented to the user
'select-box-value': //dynamically populates with the select box value selected
'select-box-required': //dynamically populates with boolean true or false, true if checkbox is required
'select-options': //dynamically populates with the options of the select box</pre>
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
   <td><pre lang="js">'event': 'int-checkbox-option-click',
'checkbox-label': //dynamically populates according to check box label selected
'checkbox-labelAboveCheckbox': //dynamically populates according to label description presented to the user 
'checkbox-required': //dynamically populates with boolean true or false, true if checkbox is required</pre>
<p>
<strong><em>Substitute these variables for CheckboxGroup.js</em></strong>
<p>
<pre lang="js">'event': 'int-checkbox-group-option-click'
'checkbox-group-optionLabel': //dynamically populates with the label of the selected checkbox
'checkbox-group-label: //dynamically populates with the label of the checkbox group presented to the user
'checkbox-group-required': //dynamically populates with boolean true or false, true if checkboxgroup is required</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Radio Button</em>
   </td>
   <td>RadioButton.js
   </td>
   <td>Select and click away from a radio button option
   </td>
   <td><pre lang="js">'event': 'int-radio-button-option-click', //consistently populate for all radio button toggles
'radio-button-label': //dynamically populate according to the radio button label for the group presented to the user
'radio-button-optionLabel': //dynamically populate according to the radio button option selected label
'radio-button-required: //dynamically populates with boolean true or false, true if radio button is required</pre>
   </td>
  </tr>
  <tr>
   <td>Form Controls - <em>Date</em>
   </td>
   <td>Date.js
   </td>
   <td>Select and click away from a date field selection
   </td>
   <td><pre lang="js">'event': 'int-date-input', 
'date-label': //dynamically populate according to the date label presented to the user
'date-date': //dynamically populates with the date selected
'date-required': //dynamically populates with boolean true or false, true if date is required</pre>
   </td>
  </tr>
  <tr>
   <td>Modal
   </td>
   <td>Modal.js
   </td>
   <td>Click on a modal button
   </td>
   <td><pre lang="js">'event: 'int-modal-click',
'modal-status': this.props.status,
'modal-title': this.props.title,
'modal-primaryButton-text': this.props.primaryButton.text,
'modal-secondaryButton-text': this.props.secondaryButton.text</pre>
   </td>
  </tr>
  <tr>
   <td>Pagination
   </td>
   <td>Pagination.js
   </td>
   <td>Click to paginate 
   </td>
   <td><pre lang="js">'event': 'nav-paginate-number' //if number click, 'nav-paginate-previous' if previous click, 'nav-paginate-next' if next click
'paginate-page-number': //dynamically populate according to the number the user navigated to
'maximum-page-list-length': //populate according to the maximum number of pages that can be navigated
'last-page-enabled': //populate if last page enabled prop is used</pre>
   </td>
  </tr>
  <tr>
   <td>Progress Bars
   </td>
   <td>
   </td>
   <td>On state change
   </td>
   <td><pre lang="js">'event': 'nav-progress-bar-change', //consistent event name for progress bar change
'progress-bar-type': 'segmented', //dynamic with type of progress bar, in this case 'segmented'
'progress-bar-current': //dynamically populate with an integer with each new change the current
'progress-bar-total': //consistently populate as an integer with the total number of segments
'progress-bar-title': //dynamically populate according to the label on the component
'progress-bar-percentage': 10 //use for standard progress bar, only in increments of 10%`</pre>
   </td>
  </tr>
  <tr>
   <td>Promo Banner
   </td>
   <td>PromoBanner.js
   </td>
   <td>Click on a link within the promo banner
   </td>
   <td><pre lang="js">'event': 'nav-promo-banner-link-click'
'promo-banner-click-label': //populate according to link click text
'promo-banner-click-target': //populate according to target in component
'promo-banner-click-href': //populate according to click href
'promo-banner-closeable': //populate with true or false based on if promo banner is capable of being closed
'promo-banner-type': //populate according to banner type (icon) in component`</pre>
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
User chose to start over the wizard | `'event': 'howToWizard-start-over'` | Pushed along with the user function to start the form over [(manually clears the session data)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/use_cases/business_logic.md)
Form field changes (clicks on radio button answers) | `'event': 'howToWizard-formChange'`,<br>`'form-field-type': '<form_component_type>',`<br>`'form-field-label': <question_text>',`<br>`'form-field-value': '<question_answer_or_form_value>',` | • `'form-field-type'` should populate with the class name, in this case `'form-radio-buttons'` ![image](https://user-images.githubusercontent.com/48527022/93485736-61bf4600-f8d1-11ea-9650-8c2f6f381b95.png) •`'form-field-label'` should populate with the full question label<br>•`'form-field-value'` should populate with the value selected, in most cases here `'Yes'` or `'No'`
Received alert notice following a question answer <br> ![image](https://user-images.githubusercontent.com/48527022/93490255-40ad2400-f8d6-11ea-85bf-f2d7b88e2d3c.png) <br> ![image](https://user-images.githubusercontent.com/48527022/93491401-a3eb8600-f8d7-11ea-9086-00218c7eb200.png) <br> ![image](https://user-images.githubusercontent.com/48527022/96585154-2d162400-12ad-11eb-9856-dc04ba7b5bca.png) | `'event': 'howToWizard-alert-displayed',` <br>`'reason-for-alert': '<description>'` | <br>`'reason-for-notice'` can populate with whatever free text level of specificity you all feel is necessary to understand why the user received the notice, for reasons that are ineligibility related, we can prefix with `ineligibility - `...(**e.g** `'ineligibility - not a service member or veteran'`, `'ineligibility - eligible for chapter 31'`, `'ineligibility - outside time period from active duty discharge`', `'chose not to apply now'`)
Click on link within blue box notice <br> ![image](https://user-images.githubusercontent.com/48527022/93496079-cb911d00-f8dc-11ea-92ec-14109038beda.png) ![image](https://user-images.githubusercontent.com/48527022/96589333-aebc8080-12b2-11eb-9b2a-bb7315e08a29.png) | `'event': 'howToWizard-alert-link-click'`, <br> `'howToWizard-alert-link-click-label'`| Populate with the full link click label
How to wizard primary CTA is surfaced / visible | `'event': 'howToWizard-cta-displayed'` | When the user has reached the end of the series of questions to reach the apply now button 
User clicks button to apply now <br> ![image](https://user-images.githubusercontent.com/48527022/93489961-e44a0480-f8d5-11ea-83ba-d94edee335f9.png) | `'event': 'cta-button-click',`<br>`'button-type: 'primary' //populate with the button type`<br>`'button-click-label': //populate with the button label` | Populate with the full primary button click label
User clicks link to skip how to wizard <br> ![image](https://user-images.githubusercontent.com/48527022/93489251-49512a80-f8d5-11ea-83e5-e2ab93892d28.png) | `'event': 'howToWizard-skip'` | From reading [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/use_cases/business_logic.md#for-all-wizards), sounds like there will be customization around the display properties (link vs h2) <br><br> Keeping this event name generic to account for the customizations of some teams having links vs buttons
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

| Custom Dimension Name | Index | Scope | Definition |
| --- | --- | --- | --- |
| Internal User | 1 | User |  |
| Product Area Used - Health Care | 2 | User |  |
| Product Area Used - Benefits | 3 | User | Distinguish users who have ever completed at least one transaction in the Benefits product area |
| Product Area Used - Education | 4 | User | Distinguish users who have ever completed at least one transaction in the Education product area |
| Product Area Used - Other | 5 | User | Distinguish users who have ever completed at least one transaction in the Other product area |
| Product Used - Education Forms | 6 | User | - |
| Product Used - Health Care Application | 7 | User | - |
| Product Used - Claims/Appeals Tracker | 8 | User | - |
| Product Used - Secure Messaging | 9 | User | - |
| Product Used - Rx Refills | 10 | User | - |
| Product Used - VA Letters | 11 | User | - |
| Product Used - Post 9/11 GI Bill Status | 12 | User | - |
| Product Used - Facility Locator | 13 | User | - |
| Product Used - GIBCT | 14 | User | - |
| Product Used - Health Records | 15 | User | - |
| Product Used - Burial Forms | 16 | User | - |
| Product Used - Pension Forms | 17 | User | - |
| Product Used - VIC | 18 | User | - |
| Product Used - Pre-need Burial Application | 19 | User | - |
| Product Used - Discharge Upgrade | 20 | User | - |
| Logged In | 21 | Session | Distinguish users who have logged in |
| LOA Level | 22 | Session | Level of authorization - collected right after a user logs in  |
| Telephone Contact | 23 | User | User's phone contact information collected after a user logs in |
| Product Used - Dashboard | 24 | User | - |
| Product Used - Profile | 25 | User | - |
| Product Used - Account | 26 | User | - |
| LOA Level - User | 27 | User | Level of authorization - collected right after a user logs in  |
| LOA Level - Hit | 28 | Hit | Level of authorization - collected right after a user logs in  |
| completingForm | 29 | Session | User completes a form, such as at www.va.gov/education/submit-school-feedback/school-information |
| Modernized Content | 30 | Hit | Distinguish web pages that have been updated to the modernized design |
| Product Used - Recommendations | 31 | User | - |
| Product Area Used - Recommendations Health Care | 32 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Health Care product area |
| Product Area Used - Recommendations Disability | 33 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Disability product area |
| Product Area Used - Recommendations Appeals | 34 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Appeals product area |
| Product Area Used - Recommendations Education | 35 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Education product area |
| Product Area Used - Recommendations Careers | 36 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Careers product area |
| Product Area Used - Recommendations Pension | 37 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Pension product area |
| Product Area Used - Recommendations Housing | 38 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Housing product area |
| Product Area Used - Recommendations Life Insurance | 39 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Life Insurance product area |
| Product Area Used - Recommendations Burials | 40 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Burials product area |
| Product Area Used - Recommendations Family Benefit | 41 | User | Distinguish users who have ever completed at least one transaction in the Recommendations Family Benefit product area |
| Global - Currently Active Duty | 42 | Hit | User responds yes or no on the edu-0994-submission-successful event label on either the www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/review-and-submit/ page or the www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/review-and-submit/ page |
| Global - Will Be Called to Active Duty | 43 | Hit | User responds no on the edu-0994-sip-form on either the www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/review-and-submit/ page or www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/confirmation/ page |
| Education - Education Completed | 44 | Hit | How a user responds to the level of education completed on the edu-0994 form. Option include: (1) some college (2) bachelors degree (3) masters degree (4) associates degree (5) high school diploma or GED (6) other (7) doctoral degree (8) some high school  |
| Global - Salary | 45 | Hit | How a user responds to the salary range question on the edu-0994 form. Option include: (1) more than 75k (2) 50k to 75k (3) 35k to 50k (4) 20k to 35k (5) less than 20k |
| Education 22-0994 Applied Past Benefits | 46 | Hit | User response to the applied past benefits question (yes or no) collected on the edu-0994-submission-successful event label on the www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/review-and-submit/ page |
| Education 22-0994 Currently Working Industry | 47 | Hit | User response to the currently working industry question (yes or no) collected on the edu-0994-submission-successful event label on the www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/review-and-submit/ page |
| Education 22-0994 Made Program Selection | 48 | Hit | User response to the made program question (yes or no) collected on the edu-0994-submission-successful event label on the www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/review-and-submit/ page |
| Education - STEM Scholarship Applicant | 49 | Hit | User response to STEM scholarship question (yes or unanswered) collected with the edu-howToApply-applyNow event label |
| Profile Section Saved - Direct Deposit | 50 | User | User who is logged in saved their direct deposit information |
| Health Facility Location | 51 | Hit | Name of hte health facility location that the event/pageview/action is taking place (for example, Pittsburgh on this page: www.va.gov/pittsburgh-health-care/) |
| Health Facility Type | 52 | Hit | This CD is set as `Campus` when a user visits or completes actions on this page:         <br>www.va.gov/careers-employment/vetsuccess-on-campus/  |
| Global - Preferred Contact Method | 53 | Hit | User response to the preferred contact method on either the edu-1995 form or the edu-10203 form. Options include: (1) email (2) mobile (3) phone (4) mail (5) mobilePhone (6) homePhone |
| Global - Benefits Used Recently | 54 | Hit | User response to benefits used recently question found on the edu-1995 form, edu-howToApply-formChange event, edu-10203 form, and edu-form-change event. Options include: (1) new (2) update (3) chapter33 (4) stem-scholarship (5) chapter 1606 (6) transferOfEntitlement (7) chapter30 (8) fryScholarship (9) chapter32 |
| Education - Enrolled in Undergrad STEM | 55 | Hit | User response (either Yes or No) to the enrolled in undergrad STEM question on the edu-10203 form |
| Education - Pursue Teaching Certification | 56 | Hit | User response (either Yes or No) to the persue teaching certification question on the edu-10203 form |
| Error Key | 57 | Hit | An error occured (for example, 503 internal error if the disability-ratings-list-load-failed event happens on this page: www.va.gov/disability/view-disability-rating/rating/) |
| Profile Section Saved - SMS Optin and Optout | 58 | User | User who is logged in saved their SMS opt-in and opt-out information |
| Education - Type of Education | 59 | Hit | **No data is being collected** |
| Product - Disability Ratings Viewed | 60 | User | Value is set to true when a user views disability ratings |
| Video Title | 61 | Hit | Title of a video (for example, there is a video titled `How to Help Homeless Veterans on this page: www.va.gov/homeless/) |
| Product - Health Care VAOS User | 62 | User | A value set to true if a user is logged in as a health care VAOS user |
| Product Area Used - Disability | 63 | User | Distinguish users who have ever completed at least one transaction in the Disability product area |
| Education - Benefit Update | 64 | Hit | User updates their benefits within the education benefit hub (values for this CD include (1) new (2) update (3) stem-scholarship) |
| Education - Benefit Claim for Self | 65 | Hit | User's response to the question of if they are filling out the benefit claim for themselves. Options include: (1) yes (2) no (3) unanswered  |
| Education - National Call to Service | 66 | Hit | User's response to the question of national call to service. Options include: (1) yes (2) no (3) unanswered. Found on this page: www.va.gov/education/eligibility/ as well as this page: www.va.gov/education/how-to-apply/ |
| Education - Applicant is Vet Tec | 67 | Hit | User's response to the question of vet tec. Options include: (1) yes (2) no (3) unanswered. Found on this page: www.va.gov/education/eligibility/ as well as this page: www.va.gov/education/how-to-apply/ |
| Education - Sponsor Transferred Benefits | 68 | Hit | User's response to the question of sponsor transfer benefits. Options include: (1) yes (2) no (3) unanswered. Found on this page: www.va.gov/education/eligibility/ as well as this page: www.va.gov/education/how-to-apply/ |
| Education - Receiving Sponsor Benefits | 69 | Hit | User's response to the question of receiving sponsor benefits. Options include: (1) yes (2) no (3) unanswered. Found on this page: www.va.gov/education/eligibility/ as well as this page: www.va.gov/education/how-to-apply/ |
| Education - Sponsor Available | 70 | Hit | User's response to the question of sponsor available. Options include: (1) yes (2) no (3) unanswered. Found on this page: www.va.gov/education/eligibility/ as well as this page: www.va.gov/education/how-to-apply/ |
| Health Care VAOS - Appointment Type | 71 | Hit | Appointment type (either `confirmed` or `pending`) for a VAOS apointment |
| Health Care VAOS - Type of Care | 72 | Hit | Answer to the question asking users to `choose the type of care you need`. Options include: `primary care`, `mental health`, `optometry`, `COVID-19 vaccine`, etc. Pages this CD is set: www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment |
| Health Care VAOS - Flow | 73 | Hit | Type of flow for a VAOS request. Options include: `va-request`, `direct`, and `cc-request` |
| Education - 22-1995 - Exhausted All Benefits | 74 | Hit | **No data is being collected** |
| Health Care VAOS - Facility Type | 75 | Hit | Facility type a user selects in the VAOS flow. Options incude: `va` or `cc` |
| Health Care VAOS - Reason for Appointment | 76 | Hit | **No data is being collected**. Answer to the question asking users to `choose a reason for your appointment`. Options include: `routine or follow-up visit`, `I have a new medical issue`, `I have a concern or question about my medication`, or `My reason isn't listed here`. |
| Frequently Asked Question | 77 | Hit | CD is set to the FAQ question that houses the hyperlink a user clicks on on this page: www.va.gov/coronavirus-veteran-frequently-asked-questions/ (for example: `Should I get a flu shot this year?`) |
| FAQ Section | 78 | Hit | CD is set to the FAQ section that the user selected a specific question in. For example, this CD would be set to `Coronavirus-specific concerns` if a user were to select a hyperlink under the question, "Should I get a flu shot this year?". |
| Education - YR - Filter - Contribution Amount | 79 | Hit | Contribution amount CD is set to either `(not set)` or `unlimited` |
| Education - YR - Filter - Number Of Students | 80 | Hit | Contribution amount CD is set to either `(not set)` or `unlimited` |
| Education - School Name | 81 | Hit | CD is set to the school name entered into the text box "Enter full school name" found on this page: https://www.va.gov/education/yellow-ribbon-participating-schools/. Many of the `Education - School Name` CD entries are set to `(not set)` |
| Education - School State | 82 | Hit | CD is set to the state entered into the box "State or territory" found on this page: https://www.va.gov/education/yellow-ribbon-participating-schools/. Many of the `Education - School Name` CD entries are set to `(not set)` |
| Education - School City | 83 | Hit | CD is set to the city entered into the box "City" found on this page: https://www.va.gov/education/yellow-ribbon-participating-schools/. Many of the `Education - School Name` CD entries are set to `(not set)` |
| [old] Education - YR - # of Search Results | 84 | Hit | CD is set to an integer matching the number of search results of a search on this page: www.va.gov/education/yellow-ribbon-participating-schools/ |
| VAOS Facility ID | 85 | Hit | Facility ID of the facility selected during the VAOS flow |
| Product Name | 86 | Hit | Product name set in the `bam-form-change` event label on this page: www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346 |
| Product IDs | 87 | Hit | Product ID set in the `bam-form-change` event label on this page: www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/order-form-2346 |
| Product IDs - Failed | 88 | Hit | Product ID failed on the order form 2346 |
| Partial Form Submission Failed | 89 | Hit | CD set to `1` if order form 2346 fails for being only partially complete |
| Component Relative Size | 90 | Hit | CD set to `Small` on this page: www.va.gov/gi-bill-comparison-tool/profile/ |
| Context Date | 91 | Hit | Set to the context date at this page: www.va.gov/manage-va-debt/your-debt/debt-letters/ |
| User has connected apps | 92 | User | CD either set to `true` or `false` depending on if a user has connected apps |
| Unused | 93 | Hit | **No data is being collected** |
| Education - Historical School Details | 94 | Hit | String of data including school name, city, and state collected from the edu-1995 form |
| Global - Dependent Children | 95 | Hit | User indicated `yes` or `no` to having dependent children on the edu-1995 form  |
| Global - Dependent Parent | 96 | Hit | User indicated `yes` or `no` to having dependent parent on the edu-1995 form  |
| Global - Married | 97 | Hit | User indicated `yes` or `no` to being married on the edu-1995 form  |
| Global - Direct Deposit Change Method | 98 | Hit | User indicated `noChange`, `startUpdate`, or `stop` to direct deposit change method on the edu-1995 form  |
| Global - Direct Deposit Account Type | 99 | Hit | User indicated `checking`, `savings`, or `none` to direct deposit account type on either the edu-1995 form or the edu-10203 form |
| Global - Service Before 1978 | 100 | Hit | User indicated `yes` or `no` to serving before 1978 on the edu-1995 form  |
| Global - Service Branches | 101 | Hit | User indicated branch served in such as `army` or `navy`on the edu-1995 form  |
| Global - Service Start Dates | 102 | Hit | CD set to the date entered as the user's/vet's service start date on the edu-1995 form |
| Global - Service End Dates | 103 | Hit | CD set to the date entered as the user's/vet's service end date on the edu-1995 form |
| Education - Field of Study / Degree | 104 | Hit | User indicated field of study and length of time on the form 22-10203 form (for example, `sixMonthsOrLess` or `Computer Science`) |
| Education - Benefits Remaining | 105 | Hit | User indicated length of time for benefits remaining on the form 22-10203 form. Options include: `sixMonthsOrLess`, `none`, or `moreThanSixMonths` |
| Health Care VAOS - Express Care Reason | 106 | Hit | CD set to the express care reason a user selects while scheduling an appointment. Options include: `back pain`, joint or muscle pain or minor injury`, etc. Page to schedule an appointment: www.va.gov/health-care/schedule-view-va-appointments/appointments/new-express-care-request/additional-details/ |
| Health Care VAOS - Express Number of Cards | 107 | Hit | **No data is being collected** |
| Health Care VAOS - Upcoming Number of Cards | 108 | Hit | **No data is being collected** |
| Facility Locator Search - Service Type | 109 | Hit | Service type (for example, `UrgentCare` or `Optometrist`) collected from a facility locator search on this page: www.va.gov/facilities/ |
| Facility Locator Search - Facility Type | 110 | Hit | Facility type (for example, `health` or `pharmacy`) collected from a facility locator search on this page: www.va.gov/facilities/ |
| Health Care VAOS - Returned Item Type | 111 | Hit | Returned item type (for example, `upcoming` or `video_home`) from the VAOS flow and collected on this page: www.va.gov/health-care/schedule-view-va-appointments/appointments/  |
| Health Care VAOS - Returned Number of Items | 112 | Hit | CD is set to an integer matching the number of items of a search on this page:         <br>www.va.gov/health-care/schedule-view-va-appointments/appointments/ |
| Global - Dependent Debt | 113 | User | CD is set to either `Without Dependent Debt` or `With Dependent Debt` depending on the user's selection on this page: www.va.gov/manage-va-debt |
| Type Ahead Options Keyword Selected | 114 | Hit | User selects a type ahead option. The values for this CD are endless. |
| Type Ahead Options List | 115 | Hit | User views type ahead options list |
| Phased Out Product | 116 | Session | CD value is set to either `type ahead` or `chapter 36` |
| Type Ahead Option Chosen Position | 117 | Hit | CD value is set to the position of the type ahead option that the user selected (either `1`, `2`, `3`, `4`, `5`, or `(not set)`) |
| HLR - Same Office Requested | 118 | Hit | CD value is set to either `yes` or `no` based on the user's selection on the 20-0996 form |
| HLR - Informal Conference Requested | 119 | Hit | CD value is set to either `yes`, `yes-with-rep`, or `no` based on the user's selection on informal conference requested the 20-0996 form |
| Search Results Type | 120 | Hit | CD value is set to the search result type (`title`, `pdf`, `cta`, etc.) a user selects when completing a search on any search page ( /search/, /find forms/, /yellow-ribbon-participating-schools/, etc.) |
| Medallia Feedback UUID | 121 | Session | The UUID for Medallia feedback typically found on this page: www.va.gov/facilities/index.html?XXX |
| Medallia Survey ID | 122 | Hit | Survey ID for the Medallia survey that is being leveraged |
| Medallia Survey Status | 123 | Hit | The Medallia survey status is set to either `AlwaysOn`, `Intercept`, or `Invite` and is collected when a user begins a survey |
| Placeholder - CLP Event Name | 124 | Hit | **No data is being collected** |
| Medallia - Survey Contents | 125 | Hit | String of information collected when a survey is submitted or closed |
| Education - Facility Code | 126 | Hit | This CD is most commonly set as `(not set)`, however a facility code is captured if a user enters a facility on the page: www.va.gov/education/yellow-ribbon-participating-schools/ |
| Education - Institution ID | 127 | Hit | This CD is most commonly set as `(not set)`, however an institution ID is captured if a user enters the relevant information on the page: www.va.gov/education/yellow-ribbon-participating-schools/ |
| Education - YR - School Search Result Details | 128 | Hit | Set as a long string of information containing a school's details from a school search result (such as city, country, state, etc.) from a search on the page: www.va.gov/education/yellow-ribbon-participating-schools/ |
| Click URL | 129 | Hit | **No data is being collected** |
| Health Care VAOS - Preferred Language | 130 | Hit | When a user changes their preferred language option on this page: www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review/. Most commonly this CD is set to `(not set)` |
| Health Care VAOS - Number of Preferred Providers | 131 | Hit | Set to either `1` or `0` depending on the user's selection of number of preferred providers when a user submits the VAOS form to schedule an appointment here: www.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review/ |
| GTM Version Number | 132 | Hit | **No data is being collected**. CD value is set to the current GTM verison that is running on VA.gov. This is useful for checking historical data and knowing what the GTM configuration was for the period of time being analyzed.  |
| Component Library Version | 133 | Hit | **No data is being collected**. |

[Back to Table of Contents](#Data-Dictionaries)

## Custom Metrics

| Custom Metric Name | Index | Scope | Formatting Typpe | Definition |
| --- | --- | --- | --- | --- |
| Event Start | 1 | Hit | Time |  |
| Event Complete | 2 | Hit | Time |  |
| IDme Login Attempt | 3 | Hit | Integer | When a user attempts to login via IDme |
| IDme Login Success | 4 | Hit | Integer | When a user successfully logs in via IDme |
| MHV Login Attempt | 5 | Hit | Integer | When a user attempts to login via MHV |
| MHV Login Success | 6 | Hit | Integer | When a user successfully logs in via MHV |
| DSLogon Attempt | 7 | Hit | Integer | When a user attempts to login via DSLogon |
| DSLogon Success | 8 | Hit | Integer | When a user successfully logs in via DSLogon |
| Education - Count of Programs Saved | 9 | Hit | Integer | Occurs with a Vet Tec Completion with the edu-0994 form |
| File Uploads | 10 | Hit | Integer | When a user uploads a file |
| Disability Calculator Rows | 11 | Hit | Integer | Number of rows being used in the disability rating calculator found on /disability/about-disability-ratings/ |
| Unused | 12 | Hit | Integer | - |
| Unused | 13 | Hit | Integer | - |
| Unused | 14 | Hit | Integer | - |
| Unused | 15 | Hit | Integer | - |
| Unused | 16 | Hit | Integer | - |
| GIBCT - Profile Benefit Estimate | 17 | Hit | Currency (Decimal) |  |
| Unused | 18 | Hit | Integer | - |
| Address Validation Needed | 19 | Hit | Integer | This is triggered with a profile navigation action |
| Address Suggestion Provided | 20 | Hit | Integer | This is triggered with a profile navigation action |
| Address Suggestion Used | 21 | Hit | Integer | User leverages an address suggestion when submitting information on their profile |
| Home Address Suggestion Failures | 22 | Hit | Integer | Can occur when there is a profile save failure |
| Mailing Address Suggestion Failures | 23 | Hit | Integer | Can occur when there is a profile save failure |
| Address Override | 24 | Hit | Integer | User does not leverage the address suggestion and instead opts to override and use their own input when submitting information on their profile |
| Screening Tool Total Results Returned | 25 | Hit | Integer | Number of results displayed on the COVID screening tool |
| Screening Tool Total Time | 26 | Hit | Time | Time to complete the COVID screening tool |
| BAM - Quantity Ordered | 27 | Hit | Integer | Used on a form event |
| STEM Scholarship Criteria Met - Post 911 | 28 | Hit | Integer | Used for if the post-911 eligibility criteria on the STEM Scholarship was met. If met then convert true to `{{JS - Generic - Custom Metric Increment}}` and convert false to `{{Generic Undefined}}`.  |
| STEM Scholarship Criteria Met - STEM or Teaching | 29 | Hit | Integer | Used for if the STEM or Teaching eligibility criteria on the STEM Scholarship was met. If met then convert true to `{{JS - Generic - Custom Metric Increment}}` and convert false to `{{Generic Undefined}}`.  |
| STEM Scholarship Criteria Met - Benefits Remaining | 30 | Hit | Integer | Months remaining for edu elegibility criteria use - used in the `Product Ineligibility Alerts` tag.  |
| Disability - Claim for Spouse | 31 | Hit | Integer | Used in a disability form event to indicate if they are filing a claim for their spouse |
| Disability - Child Under 18 and Unmarried | 32 | Hit | Integer | Used in a disability form event for if user has a child under 18 and or are unmarried |
| Disability - Child Attending School | 33 | Hit | Integer | Used in a disability form event for if user has a child attending school |
| Disability - Divorce Reported | 34 | Hit | Integer | Used in a disability form event for if user reports a divorce |
| Disability - Step Child Left Household | 35 | Hit | Integer | Used in a disability form event for if user had a step child leave the household |
| Disability - Death of Dependent or Spouse | 36 | Hit | Integer | Used in a disability form event for if user had a death of a dependent or spouse |
| Disability - Child Married | 37 | Hit | Integer | Used in a disability form event for if user had a child get married |
| Disability - Child Stopped Attending School | 38 | Hit | Integer | Used in a disability form event for if user had a child stop attending school |
| Type Ahead Option Chosen Position | 39 | Hit | Integer | What position (integer) the type ahead option that the user selected was in relative to the list of type ahead options |
| Search Results Position | 40 | Hit | Integer | What position (integer) the search results option that the user selected was in relative to the list of search results |
| Search Total Results Returned | 41 | Hit | Integer | Number (integer) of the total results returned from a user's search |
| Search Results Total Pages Returned | 42 | Hit | Integer | Number (integer) of the total pages of search results returned from a user's search |
| Search Results Click Page Number | 43 | Hit | Integer | If a user clicks a page number located at the bottom of the results on a search result page |
| Search Results Top Recommendations Clicks | 44 | Hit | Integer | If a user clicks a search result located in the "Top Recommendations" section of a search results page |
| Search Performed | 45 | Hit | Integer | If a user performs a search on VA.gov |
| Medallia Feedback Submission Value | 46 | Hit | Integer |  |
| Sitewide Search From Header Input | 47 | Hit | Integer | If a user performs a sitewide search on VA.gov via the search bar located in the header |
| Type Ahead Suggestions Count | 48 | Hit | Integer |  |
| Unused | 49 | Hit | Integer | - |

[Back to Table of Contents](#Data-Dictionaries)

## Campaign Tracking UTM Parameters

Link to the SharePoint updated Campaign Tracker: [https://dvagov.sharepoint.com/sites/VAgovCampaignTracker](https://dvagov.sharepoint.com/sites/VAgovCampaignTracker)

### Campaign UTM Sources

| **GA Source** | **Description** |
| --- | --- |
| govdelivery | Emails that are sent out via govdelivery |
| facebook | Links that are housed on Facebook |
| twitter | Links that are housed on Twitter |
| instagram | Links that are housed on Instagram |
| google | Ads that are surfaced on Google |
| bing | Ads that are surfaced on Bing |
| Newsletter | Links within a specific newsletter |
| VEText | Links that are sent via VETtext |

### Campaign UTM Mediums

| **GA Medium** | **Description** |
| --- | --- |
| cpc | PPC or CPC paid ad placements (note: AdWords and Bing automatically add UTM tags to ads) |
| display | Banners and other paid, visual advertising served on sites outside of Adwords such as social &amp; video sites; usually purchased as CPM (note: Google Display Network auto tags links) |
| email | Email marketing campaigns and staff email signature lines (note: many platforms allow or enforce auto tagging, consult with vendor and configure in tool settings) |
| offline | Offline marketing in print and broadcast mediums via unique vanity URLs or QR codes |
| other | All other links placed via alternative methods not listed (examples may include Partners, Mobile Apps, Syndications, Widgets, or RSS) |
| pr | Press releases distributed via PR syndication, like PRNewswire that point back to vets.gov |
| referral | Generic for referral mediums |
| social | Owned &amp; earned traffic from social media &amp; YouTube profiles, posts, and discussions, for paid social advertising use &quot;cpc&quot; or &quot;display&quot; |
| va-network | Links originating from va.gov and other associated Veteran&#39;s Affairs websites |

[Back to Table of Contents](#Data-Dictionaries)
