# Full Site Preview

This product has not launched as of October 30, 2023. This will be a part of a larger effort to replace content-build with Next-Build.

_Last updated: 10/30/23

## Problem statement

The tools that CMS editors use to preview their content in the context of VA.gov are very limited in function.

The “preview” that is currently available includes only the node that was requested for preview and not the full VA.gov site. The Editors cannot browse other pages via the single node preview and cannot analyze how their change affects other aspects of the site where their content may also be displayed. 

While there are methods to preview a full VA.gov site, they are limited to CI environments. A task to generate a full site preview on CI environment involves multiple steps, has high cognitive load and is time consuming. Most Content Editors defer to the CMS team when they need to generate a full site preview in CI environment instead of completing the steps themselves.

Summary of issues with current preview system:

* Pages can be previewed one at a time and not in context of a full VA.gov site. The Content Editors cannot browse other pages via a single node preview and cannot see how the node they are previewing renders in context of other pages on the website.
* Current Preview approach renders one page per preview action. When the data is updated in the Drupal CMS and a preview page is requested by the user again, the preview itself is not updated and does not include latest data changes. This means that the user sees an outdated preview every time they update a node.
* Unpublished pages cannot be previewed. The Content Editors need to publish the page in order to preview it. Publishing content for the sole purpose of preview is not always an option when operating in a production environment.
* Full site preview is available on CI environments only and involves a time consuming process to stand up and update.

How might we offer a better editorial experience to the CMS users and teams building products in the CMS?

## Hypothesis or Bet

* The CMS Editors have a streamlined editorial workflow that supports a shorter release to production cycle when a full site preview with unpublished content is available to them.
* The VFS teams are able to build more consistent Veteran-facing content experiences on VA.gov faster when they have an ability to preview their content in the context of a full Va.gov site.
* The VFS teams are able to prototype and demo products in other technical environments without the CMS team involvement.

## We will know we're done when... ("Definition of Done")

* The CMS users can generate a full site preview with the latest version of their content in under a minute.
* The CMS Editors can generate a full site preview for content that has never been published.

## Known Blockers/Dependencies

* Technical discovery is needed to design a future-thinking solution for native, fast, full-site preview.
* The Front-end and content build process is not fast enough as-is to build a full site preview with up-to-date data every time the preview is requested by the Content Editor on production or other technical environments.
* Front end build will need to allow for incremental builds.
* Front-end templates and transformers will need to be refactored to allow unpublished content rendering in preview under certain conditions.

## Related Backlog

[Full Site Preview](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3947)
