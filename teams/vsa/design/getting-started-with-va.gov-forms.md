# Getting Started with VA.gov Forms

Compiled by: Shawna Hein, VSA Design Lead

With contributions from: VSA Design: Jonathan Nelson, Liz Lantz, Christian Valla, Becca Walsh, VSP Engineering: Chris Valarida, VSP Content: Peggy Gannon

So you’re moving a paper form online.  Or moving a legacy online form to VA.gov. What are your next steps? 

* [The structure of a form](#the-structure-of-a-form)
   * [Content pages](#content-pages)
   * [Introduction pages](#the-introduction-page)
   * [Main form pages](#the-main-form-pages)
      * [Sectioning](#sectioning-of-the-form)
      * [List Loop Pattern](#the-list-loop-pattern)
      * [Labeling](#labeling-of-fields)
      * [Optional vs Required](#optional-vs-required-labeling)
      * [Hint text](#hint-text) 
   * [Review page](#the-review-page)
   * [Confirmation page](#the-confirmation-page)
   * [Cross page topics](#cross-page-topics)
      * [Legalese vs plain language](#legalese-vs-plain-language)   
* [The Form Design Process](#the-form-design-process)
   * [Product Managers](#product-managers)
   * [Designers](#designers)
   * [Developers](#developers)
* [FAQ](#faq)

## The Structure of a Form

First things first. Forms on VA.gov typically consist of:

1. **A Drupal content landing page** that outlines eligibility requirements and/ or how to apply  information about the benefit. 
1. **An Introduction page** that includes a CTA to login if relevant and a subway map / timeline of what the user can expect when filling out the form
1. **One or more sections with form fields**, laid out in chapters. Each chapter may have multiple pages.
1. **A review page** where the user can review information and make edits if necessary
1. **A confirmation page** once the user has submitted

For numbers 3-4 mentioned above, users are given guidance on where they are in the form using a segmented progress bar.  Each segment of the bar represents a “chapter” in the form.  Note that there can be multiple “pages” within each chapter, so the bar does not always increment when the user clicks between pages.

For a bit of context on the technical side, [read up on the form system](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/) and/or [watch the quick demo Chris V. gave to the VSA design team]("https://zoom.us/rec/share/x5FpP7XC1DJOYZ3d933GUagdMInqeaa82ilM-KcLzUxo_-q1CWuJcUJVwzaPXTp_") in Feb. 2020 (pw: vsadesign) 

### Content Pages
Drupal static Eligibility and How to Apply pages

Example here: [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406902817](https://www.va.gov/disability/how-to-file-claim/)

You can see some “in the wild” examples here:

* [https://www.va.gov/health-care/how-to-apply/](https://www.va.gov/health-care/how-to-apply/)
* [https://www.va.gov/health-care/eligibility/](https://www.va.gov/health-care/eligibility/)
* [https://www.va.gov/disability/how-to-file-claim/](https://www.va.gov/disability/how-to-file-claim/)

#### The Application Status Widget
This application status widget is a dynamic section within the content pages, and changes depending on whether the user is logged out/logged in and whether they have started a form or not.  

The states can be seen here [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406902821](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903673)

### The Introduction Page
[Guidelines on the content of the introduction page can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-introduction-page-template.md)

Example here: [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406500061](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406500061)

### The Main Form Pages
Examples start here (use the right/left arrow keys to navigate through): [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903387](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903387)

#### Sectioning of the Form
(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1578005824025300](https://dsva.slack.com/archives/C0NGDDXME/p1578005824025300))

* When deciding how fields should be laid out in the form in terms of “chunking,” forms should be sectioned into chapters, with the progress bar in a "how you would explain the steps to someone out loud" methodology. (e.g. first we'll get veteran info, then spouse info, then info about the claim)
* If the screens within the chapters end up having more than 3-5 questions, or more than one conceptual topic, as a general rule, break those screens into multiple "pages" within the section. For example, if you have a chapter on “Veteran info” you may have multiple pages within that chapter, one where you get contact information, another where you get medical information. 
   * **Note for the future:** There is general consensus that this design pattern could be improved. It’s not ideal for a user to click “continue” and not have the progress bar increment.  A small percentage of users are consistently confused by this behavior. Additionally, the number of pages may increase or decrease based on conditional questions, which adds complications to improving this pattern.
* With conditional questions, use the blue bar / expanding element as long as it's not too long / overwhelming and/or requires a call to another service.  Otherwise, use another page within the section instead.

#### The “List Loop” pattern
If your form has a section where user can add “multiple” of something, e.g. “add multiple children” or “add multiple past jobs” you should use the list loop pattern within the form system. This involves:

* Exposing fields to the user for the “first one”
* Creating a button below that allows the user to “add another x”
* Those items are then “stored” in the system and can be used later to reference if you need more information about each of the “x things” they added.  


#### Labeling of Fields
There is a [Form labels master list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-labels.md) - Please work with a content editor to ensure we use these labels as defaults when creating form fields and questions. This document will continually be updated as more forms are brought online and new fields and/or questions are documented. 

#### Optional vs Required labeling
(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1570051496075200](https://dsva.slack.com/archives/C0NGDDXME/p1570051496075200))

* For now we are marking fields as Required and assuming all fields not marked Required are optional
* This may be revisited as part of a design system council initiative

#### Hint Text
If you want to give users direction on how to fill in a field, current standard is to put it in parenthesis next to the form label or question, e.g. “Street address (20 characters maximum ) *Required”

#### Other Components
* [Error messages](https://design.va.gov/content-style-guide/error-messages)
* [Supplemental / Learn More pattern](https://design.va.gov/patterns/supplemental-content)
* [Step by step “Wizard” / Revealing more questions](https://design.va.gov/patterns/wizards)

### The Review Page
Example here: [https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903673](https://vsateams.invisionapp.com/share/A2W64P7YUG9#/screens/406903673)

This page consists primarily of accordions the user can expand to view and edit the data they have entered.

If you have designed custom components throughout the form, those components also need to work in the “review boxes” at the end of the flow.  Make sure to mock this up to show developers what they will look like if there are questions.

It also can include checkboxes or signature boxes. 

### The Confirmation Page
[Guidelines for confirmation page can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-confirmation-page.md)

Examples of [confirmation pages in the wild can be seen here](https://dsva.slack.com/archives/C0NGDDXME/p1579042705077800)

### Cross-Page Topics

#### Legalese Vs Plain Language
(Reference: [https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200](https://dsva.slack.com/archives/C0NGDDXME/p1579133450082200))

In general, our online forms should not be framed as a 1:1 mapping of the paper form - in other words, what we are building are data collection mechanisms for the forms themselves, and therefore do not need approval in the same way the forms themselves do.  Therefore, the language does not need to map 1:1 to the paper forms.  In general, voice and tone strategy on our online pages should use plain language.

An legal memo addresses this situation.: “As long as the underlying, approved form is not altered and the interactive materials essentially collect the same information, then OIRA considers these applications a nonsubstantive change to an already approved collection, and would encourage their development.” ([https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf)).

For legal or regulatory content, however, we need to use judgment and be careful. Sometimes this might mean providing a plain language summary and the legal language in parentheses for reference. We’ve sometimes used this approach on the public website unauthenticated pages. For tools and authenticated experiences, you can use things like the “learn more” dropdown or modals to have plain language versions alongside legal definitions.

## The Form Design Process
There are a few documents that have been written to help PMs and their teams structure how and when they do things when embarking on a form project for VA.gov: 

* [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-resources/form-design-process.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-resources/form-design-process.md)
* [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-process-modernizing-VA-forms.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-process-modernizing-VA-forms.md)

This document will not attempt to rewrite those documents, however, we will provide a few tips per practice area:

### Product Managers
* Make sure you understand the full picture before your team gets in too deep
   * What are the business needs?
   * What are the stakeholder needs?
   * What fields are actually required? What is optional? Based on user research, are there any fields we can drop?
   * Do we already know of any potentially triggering / invasive / confusing questions that are required? Do we really need to have those fields? If so, what kind of things can we say to explain why they are there? 
   * Start discussions on security & privacy with Andrew Gunsch
   * Document these answers in a Product Outline.

### Designers
* User research discovery
   * What other tools / sources are participants using to perform the task(s)? E.g. VSOs, phone calls, etc.
   * What VA and non-VA resources are participants using to learn about these things? E.g. social media groups, etc.
   * What does the user want to get out of this form?
* Competitive Analysis
   * What are others doing in a similar space that we should be looking to for inspiration?
* If there is an already existing form of some kind:
   * How are users currently using the form and process? What can we learn from that?
   * Take all the fields on the form and think about them as individual components. Then group them together logically to start determine how your chapters and pages are going to be laid out
   * Some folks have found it helpful to create a text-based outline of the form fields - to do some of the high level grouping and organization before getting into Sketch -- something like this: [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/pension-outline.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/pension-outline.md)
      * An excel spreadsheet could also be helpful for this
   * Build a wireflow or flow diagrams to show at a high level how things are going to work
   * Create your final wireframes
* Incorporate accessibility considerations
   * Focus management
   * Hierarchy/labelling

### Developers
* Make sure you read up on and understand form builder [https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms)/ and/or [watch the quick demo Chris V. gave to the design team](https://zoom.us/rec/share/x5FpP7XC1DJOYZ3d933GUagdMInqeaa82ilM-KcLzUxo_-q1CWuJcUJVwzaPXTp_) in Feb. 2020 (pw: vsadesign)
   * Fill out a few forms on staging.va.gov to get a feel for the capabilities of the forms system
* Make sure you start early when investigating data flows. Where will your data be coming from? Where will it be going?
   * Note: enlist your PM to help you find answers to this 
* Read up on and understand all APIs and associated data models. Think about and capture in your discovery tickets:
   * Performance considerations of the APIs
   * The data fields that are available and what “real data” we are actually getting
* Security considerations
   * Make sure you understand if any of your data needs special security measures
* When starting to build your form, the generally accepted practice on VA.gov is outlined below:
   * Use the form system to build the initial structure / scaffolding of your form (e.g. introduction page, middle pages, confirmation page) and merge that scaffolding to master
   * Insert all needed data fields on the front-end to have them there. The designer will later help guide the developer on how the fields will be “chunked”, styled, etc.
   * Make sure to merge often so you can get frequent reviews and code isn’t hoarded and the all reviewed at once
   * If possible, start with pages or flows that may be difficult
      * Some things aren’t possible using the forms system; it’s best to find out if your form has any of those as soon as possible so the design can be reconsidered if needed
   * While your form’s schema is in heavy development, keep it in vets-website to avoid updating the vets-json-schema dependency on every branch; once it’s settled down, move it to vets-json-schema
   * Make sure to be regularly communicating with your designer(s) to ensure you understand requirements, and collaborate with them on coming up with tweaks to the designs if necessary

## FAQ
**What if there is a bug in a design system component or a form component?**

The Design System Council will tell you what to do here soon….!

**What are the constraints of the Form Builder tool?  Can we extend it / change it?**

VSP is responsible for the forms system. extensive changes should involve the VSP FE Tools team (#vsp-tools-fe on slack) early, but it’s open to contribution by everyone.
Some thoughts on this are in this thread https://dsva.slack.com/archives/CBU0KDSB1/p1580237084228800
