# CMS & Teamsite research 

**updated 6/21/18**



## Outstanding tasks

After a conversation with someone who's recently moved a massive organization off a Teamsite build that's possibly older than ours, to a brand-new system, there are a few things we should take into account moving forward:

- **User research:** So far, it seems like we've done the CMS work in the blind. We should speak to content editors currently working on Teamsite, and discover their pain points and wish lists. Likewise, we should do the same with the IT teams managing the installation.
- **Content types & attributes:** For the utmost flexibility, independent of the actual technology chosen as CMS, we should compile a list of very clearly-defined content types and their various attributes. This will help us as we eventually transition off Teamsite by making it easier to lift-and-shift the data. It will also help us identify holes in our existing content types. (This may already be in-progress as part of the content audit, but it would be helpful to share with the CMS team.)

Other learnings from someone who's gone through this process:

- A presentation-agnostic system (headless/hybrid) is ultimately a better choice, especially with clearly-defined content types. You're not beholden to a given CMS' template system, which makes the entire thing more flexible should needs change.
- Abandoning the presentation layer (the front-end) of a CMS can be a hard thing to manage -- it's so ingrained to expect templates as part of a CMS that it can be tough for anyone not actively using the CMS to understand. 
- Assigning user roles and permissions should be _easy_. If you talk to a vendor who says it's not, find another vendor.

## Headless CMS 

A headless CMS decouples content from front-end display. It provides an administrative back end and database, like any traditional CMS, but it removes the need for us to use a given system's particular templating system. This makes our front-end presentation portable, and removes the requirement that our developers learn how to template for whichever system we pick. 

Meanwhile, we still gain the CMS benefits of workflow, auditing, and authoring control, and a friendly user interface for content owners to interact with. 

The following are various paths we could pursue moving forward, in rough order of preference -- from top choice, to last resort.

### Scenario 1 (top choice): 

* Teamsite as headless CMS through MVP
  * **Risk: **This is predicated on Bill's being able to extract data from Teamsite that we can then consume using our own templates, without being tethered to Teamsite's proprietary languages and structures.
  * **Reward: **Current content owners won't notice a difference in their workflows until we actually make a CMS switch. This buys us time to prepare them for the change through messaging and training.
* Wordpress as headless CMS post-MVP
  * **Risk: ** Content owners will need to learn a new content-entry system. 
  * **Risk:** We will need to do all the configuration of Wordpress on the administrative side to ensure the appropriate permissions are granted, content types exist, etc. 
  * **Reward:** Wordpress is traditionally very easy to configure and extend via plugins and its own interface.
  * **Reward: **We would need to do only minimal if any tweaking to the same templates we'd already be using from MVP.

### Scenario 2: 

- Teamsite as headless CMS through MVP
  - **Risk: **This is predicated on Bill's being able to extract data from Teamsite that we can then consume using our own templates, without being tethered to Teamsite's proprietary languages and structures.
  - **Reward: **Current content owners won't notice a difference in their workflows until we actually make a CMS switch. This buys us time to prepare them for the change through messaging and training.
- Drupal as headless CMS post-MVP
  - **Risk: ** Content owners will need to learn a new content-entry system. 
  - **Risk:** While Drupal is extremely powerful and flexible, it is to the extent that configuring it appropriately will require outside expertise and quite a bit of manual installation.
  - **Reward: **We would need to do only minimal if any tweaking to the same templates we'd already be using from MVP.

### Scenario 3: 

- Teamsite as headless CMS through MVP
  - **Risk: **This is predicated on Bill's being able to extract data from Teamsite that we can then consume using our own templates, without being tethered to Teamsite's proprietary languages and structures.
  - **Reward: **Current content owners won't notice a difference in their workflows.
- Continued use of Teamsite as headless CMS post-MVP
  - **Risk**: Teamsite is dead software -- while it's being supported, it's no longer in active development. This means no new features that take advantage of modern web technologies.
  - **Risk:** The most recent version of Teamsite was released in 2016, which is already old by Internet standards.
  - **Risk:** The currently installed version of Teamsite is positively prehistoric by Internet standards.
  - **Risk:** We need to develop content-editor-facing forms to support new content types.
  - **Reward:** Nobody needs to be retrained to use a new CMS.

### Scenario 4: 

- Teamsite in its current incarnation through MVP

  - **Risk:** Only one member of the Vets.gov team has access to Teamsite. 
  - **Risk:** Teamsite was last updated in 2013; the technology is old and all the forms and templates that run it are written in a proprietary version of Perl, which nobody knows how to write.
  - **Risk:** We would need to learn how to develop forms for content editors to enter content, and then templates to support those forms and our new design. 
  - **Risk:** Teamsite is dead software; even the upgraded version (released 2016) is old by Internet standards. 
  - **Reward**: Current content owners do not notice a difference in their workflows, though they might need training on new forms.

- Wordpress as headless CMS post-MVP

  * **Risk: ** Content owners will need to learn a new content-entry system. 

  - **Risk:** We will need to do all the configuration of Wordpress on the administrative side to ensure the appropriate permissions are granted, content types exist, etc. 
  - **Reward:** Wordpress is traditionally very easy to configure and extend via plugins and its own interface.
  - **Reward: **We would need to do only minimal if any tweaking to the same templates we'd already be using from MVP.

###Scenario 5: 

- Teamsite in its current incarnation through MVP
  - **Risk:** Only one member of the Vets.gov team has access to Teamsite. 
  - **Risk:** Teamsite was last updated in 2013; the technology is old and all the forms and templates that run it are written in a proprietary version of Perl, which nobody knows how to write.
  - **Risk:** We would need to learn how to develop forms for content editors to enter content, and then templates to support those forms and our new design. 
  - **Risk:** Teamsite is dead software; even the upgraded version (released 2016) is old by Internet standards. 
  - **Reward**: Current content owners do not notice a difference in their workflows, though they might need training on new forms.
- Drupal as headless CMS post-MVP
  - **Risk: ** Content owners will need to learn a new content-entry system. 
  - **Risk:** While Drupal is extremely powerful and flexible, it is to the extent that configuring it appropriately will require outside expertise and quite a bit of manual installation.
  - **Reward: **We would need to do only minimal if any tweaking to the same templates we'd already be using from MVP.

Scenario 6: 

- Teamsite in its current incarnation through MVP
  - **Risk:** Only one member of the Vets.gov team has access to Teamsite. 
  - **Risk:** Teamsite was last updated in 2013; the technology is old and all the forms and templates that run it are written in a proprietary version of Perl, which nobody knows how to write.
  - **Risk:** We would need to learn how to develop forms for content editors to enter content, and then templates to support those forms and our new design. 
  - **Risk:** Teamsite is dead software; even the upgraded version (released 2016) is old by Internet standards. 
  - **Reward**: Current content owners do not notice a difference in their workflows, though they might need training on new forms.
- Upgraded Teamsite OR in its current incarnation post-MVP
  - **Risk**: Teamsite is dead software -- while it's being supported, it's no longer in active development. This means no new features that take advantage of modern web technologies.
  - **Risk:** The most recent version of Teamsite was released in 2016, which is already old by Internet standards.
  - **Risk:** The currently installed version of Teamsite is positively prehistoric by Internet standards.
  - **Risk:** We need to develop content-editor-facing forms to support new content types.
  - **Reward:** Nobody needs to be retrained to use a new CMS.



**updated 6/4/18**

The main point of contact for Teamsite needs and information is Sandeep Kumar, sandeep.kumar@va.gov. He's the sysadmin, and can grant us access to a sandbox set up for our use. 

Accessing the sandbox requires VA network access, though using CAG/Citrix is unstable and therefore not recommended.

There are two kinds of sites that VA's implementation of Teamsite can currently support: **forms-based sites**, and **file-based sites**. 

Forms-based sites are the closest Teamsite comes to functioning as a content management system: it provides a **graphical user interface (GUI)** that is adaptable to the circumstances and validated by Javascript. This GUI is what most content managers / subject matter experts are accustomed to seeing and using. 

Data produced by these **forms** are then consumed by **templates**, which are written in a proprietary version of Perl known as IW Perl. These templates consume (or can consume) **includes**, which is how all form-based sites on VA.gov have the same header, footer, and some of the same navigation.

These includes are owned by Josh at VACO, but we don't need direct access to them in order to replace them; we can simply replace the URL of the include in the template files.

File-based sites don't use a GUI at all, and don't respect the templates and includes that the form-based sites do. File-based sites are tech-agnostic (meaning they can be in any web language we like) and are uploaded wholesale to Teamsite. These sites are not using Teamsite's CMS functionality, but they do use the **workflows** that have been established by a variety of authorities in order to control publication of pages and content to the Internet and the VA Intranet. 

---

> How many VA.gov sites use Teamsite templates and how many sites are custom?

Live Sites (Users deploy content to production Web sites) 

**Internet (VHA, VACO, NCA)** 

FQDN: 263 

Non FQDN: 109 

**Intranet (VHA, VACO, NCA)** 

FQDN: 147
Non FQDN: 85

**VBA** 

Internet: 87 (Non FQDN under benefits.va.gov) 
Intranet: 84 (Non FQDN under vbaw.vba.va.gov) 

> Where is a list of all Teamsite templates?

**Total templates (Internet): 31**

| Template Name               | #   Workareas |
| --------------------------- | ------------- |
| pages                       | 461           |
| features                    | 273           |
| pages_vha3column            | 271           |
| homepage                    | 269           |
| pressrel                    | 209           |
| summary_archive             | 209           |
| includes                    | 176           |
| emergency                   | 164           |
| vamc_homepage               | 163           |
| careers                     | 161           |
| customer_svc                | 161           |
| facili.es                   | 161           |
| patient_info                | 161           |
| services                    | 161           |
| vamc_multi                  | 161           |
| navigation                  | 141           |
| vha_homepage                | 110           |
| rightnav                    | 108           |
| advpages                    | 107           |
| html_widget                 | 84            |
| link_box_widget             | 84            |
| faqs                        | 68            |
| ro_homepage                 | 61            |
| rss                         | 54            |
| quick_links_widget          | 25            |
| social_media_connect_widget | 25            |
| admin_homepage              | 3             |
| natcem_pages                | 1             |
| speeches                    | 1             |
| speeches_summary            | 1             |
| va_homepage                 | 1             |

**Total templates (Intranet): 10**

Please note that there is some overlap between these and the Internet templates

| Template Name   | #   Workareas |
| --------------- | ------------- |
| advpages        | 106           |
| homepage        | 340           |
| pages           | 340           |
| navigation      | 135           |
| rightnav        | 105           |
| includes        | 102           |
| pressrel        | 96            |
| summary_archive | 96            |
| faqs            | 93            |
| rss             | 54            |

> Can VA's current implementation of Teamsite support all Vets.gov content, including static (e.g., navigation, headings, and body content that doesn’t change and is always present) and dynamic content (e.g., contextual alerts, wizards, forms, status trackers, personalized content, etc.)?

If file-based: **YES** - Because Teamsite can support anything in the form of a file-based site. However, there is no real advantage to putting Vets.gov on Teamsite as a file-based site, since the only functionality that gets us is the workflow controls. We already have those in the form of our Github workflow. 

If form-based: 

**Yes, for static content**. We would need Teamsite developers to build the forms to match our templates, but putting anything currently in `.md` in Vets.gov's repository into Teamsite is possible.

**No, for React apps.** According to our Teamsite expert, the system can't currently support dynamic content. Since the plan is to keep anything currently that is currently React as it is, this shouldn't be an issue. That said, we may want to experiment and see how far we can push the boundaries of the existing version of Teamsite. 

To take the example of the education forms on Vets.gov — these (and all) application forms are React apps and as such could not be moved to the current version of Teamsite.

> If not, is there unbuilt or unutilized Teamsite functionality that can make this feasible?

The version of Teamsite that VA is currently using is several years old; there is an updated version that has additional capabilities but it'd need to be procured and then implemented. Assuming this is a timeline of months or years to completion.

The newest version of Teamsite was released in 2016. The software is no longer in active development, which poses a risk (the Internet moves fast, and two years old is pretty old). The 2016 version of Teamsite does have a handful of features that could be useful:

- Visual previews of content (as opposed to having to open a file to see what's in it)
- A/B testing and experimenting capability 
- Visual version history (for content only, as far as I can tell)
- Retains the ability to navigate Teamsite through its existing folder structure
- Hot-swappable templates, which could reduce the overall number of templates we ultimately have to build

Source: https://blogs.opentext.com/introducing-opentext-teamsite-8-2/

Contact for more information: teamsite.mediabin@opentext.com

> What is the anticipated technical feasibility and scope for preparing Vets.gov pages and content to be moved to Teamsite?

If file-based, this should be drag-and-drop. It'd be a matter of moving the files over onto Teamsite once we've all gotten the requisite access, and then testing to make sure our workflows are still doing what we need them to do. Sandeep would be our biggest help for this. **However,** it does not seem like there is much to be gained from doing this, since our Github workflow is stable and functional.

If form-based, it should still be technically feasible, but the scope increases dramatically. We would need a Teamsite resource (or an IW Perl resource) to build first the forms, with their attendant Javascript validation, and second, the templates that consume the form data for display. We would also need to set up workflows for staging, development, and production. The entire engineering team would probably need to get comfortable with IW Perl and developing for Teamsite, and the content team would need to learn how to use the GUI and the workflows.

> Is there content on Vets.gov that will be challenging to integrate into a CMS (e.g., form field labels, dynamic content, etc.)? If so, what is the best path forward?

Integrating Vets.gov content to any CMS would be time-consuming at best. Whether it'd be technically challenging is a question for our engineering team to answer conclusively, but based on what we've learned about Teamsite so far, the challenge will be in designing the forms and making sure that they validate appropriately for particular kinds of content. 

Vets.gov React apps (including our application forms) cannot be moved to the current version of Teamsite, according to Sandeep.

> What are some of the benefits of using another CMS for Vets.gov pages and content? What are the tradeoffs with using Teamsite?

Unless we're paying for the expertise, putting Vets.gov pages and content on _any_ CMS will require the engineering team to learn how to configure the CMS for our content. Any CMS will also require that we learn how to template for the particular system that we hypothetically choose. 

The benefits of _any_ CMS are ease of use for various subject-matter experts, including our own content team. However, Teamsite has a significant advantage in that it already exists — for those users who are already using it, there is minimal change management to worry about. They'd just have to get comfortable with any new forms and templates that we need to run Vets.gov/VA.gov. 

If we were to move off of Teamsite and onto a new (hopefully more modern) CMS, there'd be significant change management to worry about — and the costs associated with training a couple of hundred people who are not particularly tech-savvy and who are spread across the country (if not the globe). 

If the solution Bill is exploring — using Teamsite's API to access the data coming from forms, to feed it into our own templates — pans out, the tradeoffs to using Teamsite are mostly that we'd have to learn IW Perl and its API. The benefits to using it — no change mangagement, plus a GUI CMS for those users who are currently managing content with Github — outweigh the tradeoffs. 

The biggest risk to continuing to use Teamsite in its current iteration is a lack of technical support outside VA, but it's uncertain how big of a risk this actually is. (Put plainly, is the company going to go out of business / sell the product again, and if so, will VA lose vital technical support?



## Teamsite Capabilities (current)

>  Ability to assign CMS roles (e.g., editor, reviewer, publisher) and assign roles to organizations (i.e., Office of Web Communications)

Yes. Managed by Sandeep.

> Ability to allow for cross-administration/office management of content (e.g., shared content between VHA and VBA)

Yes, through permissions / workflows as created and managed by Sandeep.

> Ability to manage dynamic content that appears on a page based on user input or interaction

Yes, on form-based websites only.

> Ability to support robust, automated 508 compliance testing/checking

Theoretically, since Teamsite is tech-agnostic we could insert testing suites, but we would need to dive deeper into this for form-based sites especially. 

> Should have content versioning, audit trails, and scheduled publishing

For content, the system records the past ten versions by default. For templates and forms, this looked like a manual process.

> Should have WYSIWYG back-end editing (and potentially in-context editing)

Teamsite has a WYSIWYG but no in-context editing.

> Should support SEO, structured content, tagging, and metadata

SEO is a practice, so I'm unclear on what the ask is here.

Please define "structured content"

It didn't look like Teamsite forms currently support tagging, but since we can build the forms to suit what we need this is something we could build in to new forms. Alternately, we could investigate whether tagging is functionality that we can turn on or upgrade to.

### deliverables

* A readout with anticipated technical scope and steps for moving all Vets.gov content to Teamsite.
* A readout with any limitations of using Teamsite and the benefits of investing in a new CMS.



## Application of U.S. Web Design Standards to VA.gov



Goals: 

* To determine the anticipated technical scope and plan for applying the U.S. Web Design Standards (USWDS) to all existing content, templates, and pages on VA.gov
* To start development work by applying the USWDS to the header, footer, and other global elements on VA.gov.

> How well will VA.gov’s tech stack and current front-end accommodate applying the USWDS?

USWDS is built to accomodate a variety of tech stacks, so even if VA.gov isn't using Node/npm (they're not) they should be able to incorporate the files manually, and actually have done in places. 

> How shallow or deep can we apply the USWDS to parts or all of VA.gov? What’s the anticipated technical scope for each approach?

As is the case with any framework, USWDS operates by applying particular CSS classes to the HTML markup. Sites built in Teamsite will need to have their templating modified pretty heavily to take on the new framework and it looks like it'll be a very manual process. 30+ templates, plus includes -- and that's not even touching the file-based sites that are uploaded to Teamsite wholesale.

As we update the templates to USWDS (or Formation, which extends USWDS with patterns unique to Vets.gov) we need to visually verify that each page is behaving as we would expect it to. Would we then need to get sign-off from all the owners of that content?

> Can we reuse the existing Vets.gov page layouts and templates on VA.gov? If so, what is the best path forward?

Not in a drag-and-drop kind of way, no, but VA.gov content can be adjusted to fit within our design patterns and templates. We should select the most commonly used templates and begin by rebuilding the top 3. These should then be pushed to staging, visually verified, and then pushed to productiong. This should not be a waterfall process; one template should not block another. 

From a user experience standpoint, it may be best to have the top templates modified and ready to go in staging before pushing anything to production, to reduce the sense of disorientation that a new, partially implemented design can have on users. 

> How will we handle outdated web patterns on VA.gov that are not part of the USWDS (e.g., carousels, right-rail desktop layouts, etc.)?

Ideally, we can stand on research and data to show that these patterns are detrimental to the overall user experience and remove them, but realistically, we'll have to hang on to them until those elements and their content can be redesigned, and until stakeholders buy in to the new patterns. 

Right-rail desktop layouts should be the first to go; it appears that what lives in those is mostly content that can live in the main body of the page. Everything else will need to be modified to fit within the Formation  grid. As an example, the carousel on the VA homepage can be placed within the main body of a Formation page with minor modifications to CSS. 

> How did the USWDS get applied/built for oit.va.gov and myhealth.va.gov?

These are file-based websites, so they exist independent of the global elements we see on form-based websites on VA.gov. They are also not affected by changes to the Teamsite templates driving other parts of VA.gov. USWDS's CSS and Javascript were likely implemented from the start, or overlaid on existing markup. 

### Requirements

> Ability to update all typefaces and colors

Relatively straightfoward in that we'd only have to replace a global stylesheet, but very high risk in that we'd need to verify that nothing breaks visually.

> Ability to update CSS for all HTML elements

Big, big lift. Requires a Teamsite developer at the very least to go through 30+ templates and their includes to make sure everything is classed appropriately. Would probably require rewriting at least some templates to accomodate USWDS' grid / layout.

>Ability to update CSS for all site navigation, menus, headers, and footers

Global elements like these, which a basic user cannot modify other than to replace the content, are includes in Teamsite templates. They're pretty centrally controlled so this should be relatively straightfroward. However, carries a decent risk in that we'd need to do visual regression testing to ensure that there aren't any stress cases that can't be replaced automatically.

> Ability to update CSS for all core page UI components (e.g., buttons, alerts, etc.)

Should be a matter of replacing global stylesheets, but represents a big lift in that all of those elements would need to be given new CSS at the least, and be rewritten entirely at the most.

> Should update and/or consolidate the number of page layouts and templates

There are at least 30 distinct templates, plus their header/footer/navigation includes, that would need to be examined, consolidated, and modified to accomodate USWDS. This requires a Teamsite developer to modify code that controls the templates, and probably also to modify the GUI (referred to as the "forms") that users see when they are creating content.

> Should update all of VA.gov to be mobile-responsive

If we can integrate USWDS completely, this will happen by default. But if we leave bits and pieces off the grid, for example, or if there are very many bespoke pages, this will be a much higher lift.



### Deliverables

* At minimum, the USWDS should be applied to the global header (including navigation) and global footer; the global typefaces and colors should be updated; and global HTML elements should be updated. (The team should spend 1-2 weeks researching and planning, and then start coding.) Updates to page templates, layouts, and other UI components that are in page bodies will need to be prioritized based on scope.
* A readout with the anticipated technical scope and plan/steps for applying the USWDS to the rest of VA.gov. This readout should include a timeline of the breadth and depth of work for the time periods June - October, 2018, and then November 2018 and forward (i.e., what can be done by October 2018). This readout should also include any limitations to applying the USWDS to the existing content, templates, and pages across VA.gov.



## Open Questions

> Where is a list of all the VA.gov sites that are custom?

> Where is a list of all the VA.gov pages organized by Teamsite template used?

> Where is an overview of all functionality available in the Teamsite version VA.gov is using?

> What processes or approvals are required in order to get the design system implemented on Teamsite templates?

> What permissions roles are currently used in Teamsite?

> How is a person's permission level in Teamsite determined?

> Where is a list of all includes to Teamsite templates?