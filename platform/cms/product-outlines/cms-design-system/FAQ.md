# The VA.gov Drupal CMS Design System FAQs

## Why should there be a new design system for the CMS?

An ongoing goal for the VA.gov Drupal CMS is to improve editorial experience that is largely based on what we call "Admin UI" in Drupal. Admin UI is focused on content entry and management. Existing Design Systems, like USWDS and VA DS, do not address content entry holistically. Even though both USWDS and VA DS describe some of the content entry / form experience, they do not cover the CMS UI proposition comprehensively.
Examples: layout of edit forms; visual hierarchy; compounded content entry widgets.

An admin-specific Design System in a decoupled context offers great value that will directly translate into the CMS editorial experience.

## Why can't we just use Claro and contribute back the CMS customizations?

The Drupal Design System "Claro" offers a stable base for subtheming.

The CMS team identified many weaknesses of Claro in a Heuristic Audit.

While we can contribute certain improvements back to Claro, the majority of the planned effort will be clashing with Claro's vision and design / engineering standards. Additionally, since Claro is now in core, any significant contributions can take months (at times years) to be approved and included in Drupal Core code, which will put more maintenance strain on the CMS team. We intend to follow a thoughtful and deliberate process while making Claro contribution decisions. The majority of the effort will be put towards developing the uswds_admin theme that will also be Open Sourced on Drupal.org.

## Why are we not simply extending the VA.gov Design System and contributing the CMS-specific components back to VA DS?

There are three main components to the VA.gov Drupal CMS Design System: standards and guidelines, UI components and patterns, Content Model patterns.

The VA.gov Design System (VA DS) is focused on the Front End displays of VA.gov pages. The Va.gov Drupal CMS Design System is focused on the back-end editorial interface that is never presented to Veterans.

Adding any CMS-specific UI components to VA DS will dilute its value to VFS teams and likely cause compatibility issues since technology behind VFS apps and CMS is different.

The CMS Content Model patterns documentation is a good candidate for integration with VA DS and this integration will be explored.

## Why should the CMS use tools that are different from what the VA Design System Council is currently using - e.g. Sketch or Adobe XD?

The CMS team wants to develop an efficient workflow between multiple team members in an effort to ramp up on the VA.gov Drupal CMS Design System quickly. Since the CMS Admin UI and VA.gov Front End UI have very little in common, we should not tie ourselves to each other's stacks.

Additionally, both Sketch and Adobe XD have collaborative frictions that we'd rather avoid. The CMS DS Design libraries will have a much smaller audience than the VA.gov DS libraries. The only potential community that may need access to the CMS Design libraries is Drupal users that opt into using the open-sourced uswds_admin theme.

In any event, we will offer Sketch and XD design library files for download since it adds value to the open-sourced product.

## Why are we leaning towards using Figma for the CMS DS work?

* efficiency of collaboration compared to other tools
* artifacts from the CMS DS Design Tool will be translated into the CMS DS Documentation (markup/code) that will remain as a source of truth
* artifacts from the CMS DS developed in Figma can be exported to other popular formats and made available for the broader community to use

(not a factor, but) the CMS DS design libraries will rarely need to be shared with other teams unlike FE VA DS libraries.

Comparison of Figma and Adobe XD features available here https://docs.google.com/spreadsheets/d/11q4jZ-fsv453xKiFkyXMMHJiFz6-7YPH_xv898En-x0 
