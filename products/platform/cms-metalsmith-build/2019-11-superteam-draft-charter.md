# CMS Superteam Charter [Draft]

Pasted from Slack post: https://dsva.slack.com/files/T03FECE8V/FP4URFL8G

## SuperTeam

An impromptu assemblage of colleagues from the platform, CMS, and unauthenticated experience teams.

## Background

In 2018, we decided to consolidate the existing Vets.gov and VA.gov sites into the new "web brand consolidated" VA.gov. This new site launched on Veterans Day 2018 as the new digital front door of the Department of Veterans Affairs and serves roughly 800K unique users per month.

As part of consolidation, we acknowledged that the content editing experience, which consisted of editing structured markdown files in GitHub, would need to be upgraded to allow content editors from beyond our team (and without any technical knowledge) to maintain their new brand consolidated content. The approach was to implement a widely-used, GUI-based content management system that would integrate with our existing website build process; the specific solution was decoupled Drupal.

Our teams worked on implementing this solution in late 2018 to mid 2019. As of writing, Drupal is being used by about 30 content editors from various offices within the Department of Veterans Affairs, with Drupal-published content being consumed at website build time via API calls and rendered into static pages that are served to users.

This interaction between Drupal and the website build process has at times been the source of frustration between the platform team, which is responsible for the website build process, the CMS team, which is responsible for Drupal and the content API, the unauthenticated experience team, which is responsible for high traffic Veteran-facing VA.gov content, and various applications teams working on content-less (or content-light) parts of the website. These frustrations have all been worked through in the moment, but point to the possibility of larger, more structural issues with the current design and implementation.

The SuperTeam has been established to ferret out and address these issues.

## North star

Increase the speed and quality of content and tools delivered via VA.gov by improving the experience of content and code contributors.

## Goals

* Minimize interdependencies between content and website builds. A content issues should never block a website build and a website issue should never block a content build. These should be truly decoupled.
* Optimize the website and content build processes for the needs of contributors. An editor or developer should be able to preview a content or code change in a reasonable amount of time and should not be impacted by other contributors changes.
* Make content and website builds more incremental by focusing just on changes and reducing time spent on building code or content that is still fresh.
* Propose a high-level architecture strategy (or strategies) that allows the number of developers and editors contributing to VA.gov to scale significantly.
* Recommend a longer-term division of responsibility for continuing CMS and website build work between VSA and VSP programs.

## Scope

All aspects of the website and content build processes, including editing/composition of supporting documentation. The SuperTeam is empowered to work across any relevant teams or systems that support these processes.

This team is authorized for two sprints, beginning October 16 and ending November 12.

## Constraints

The SuperTeam should be aware of and plan for the following constraints:

1. Content editors are used to publishing content updates to legacy VA.gov pages in <1 minute using the TeamSite CMS. They have similar expectations of being able to make updates to new VA.gov pages via Drupal.
1. To launch the new Pittsburgh VAMC facility pages, a content editor needs to be able to publish an alert banner and changes to operating status pages and trigger email alerts in <=10 minutes.
1. We expect to onboard several hundred content editors from across VA business offices in the next twelve months.
1. We would like to reduce the use of and/or deprecate the va.gov-content repository as method of managing VA.gov content in the next twelve months.
