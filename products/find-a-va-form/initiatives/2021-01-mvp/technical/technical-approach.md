# Serving Forms to VA Applications   
_A forward thinking approach_

## Context   
As part of an effort by the public facing websites team to build new forms detail page va.gov, they have been exploring how to editorially control a few additional fields not currently included in the forms database. The team explored four options, [viewable here](https://whimsical.com/Bn5zRk2PDzuSjpu1d5q4Pu).

## Consideration Factors 
- Desired source of truth for content
- Skills required to edit content (technical or non-technical user)
- Multi-platform publishing roadmap
- Desired future-state enterprise architecture

## Proposed Option - #4   
This option is being recommended as it satisfies immediate web editorial needs and at the same time lays the foundation for a future content publishing architecture. In this option, Drupal ingests metadata from the forms database, while the URLs for form files remain as-is. Drupal enables editors to then add additional metadata. The entirety of forms metadata is then exposed to the Lighthouse API to consume. The lighthouse API then exposes this via a highly available, gated JSON API which may be consumed by va.gov web and other VA applications. 

## Benefits
- Enables editorial entry of additional metadata for forms
- Enables review of all Forms content in one location before publishing
- Simplifies public facing web team development 
- Works as a Proof of Concept for future-state content publishing architecture, utilizing an already ATO-approved secure API Gateway to publish content from Drupal
- Provides an architecture that could potentially replace Forms database at VA

[Diagram](https://whimsical.com/UpSBvigLWBK72p8ajG8v3a)

## Work Breakdown
### CMS Team
- Development of ingest process of forms data for CMS team (migration)

### Lighthouse API Team
- Build ingest process to consume Content API data
- Create API endpoint to expose Content API metadata to client applications

### Web Team
- Creation of a new content type
- Modify forms react component to consume all metadata from the Lighthouse JSON API

## Long Term Enterprise Architectural Vision   
In 2018, the VA established Lighthouse Lab with the intention to power VA applications via the Lighthouse API. Approach #4 allows us to perform a small proof of concept towards this goal. We can build out a roadmap for the Lighthouse API team to consume all metadata from Drupal, which will allow the VA to create and govern content one time, and publish to a multitude of end client applications. Once data is available in Lighthouse, the va.gov public facing web team can also build out their roadmap to transition components of the site to react pages that retrieve data from the Lighthouse API and, at some point in the future, sunset the static site generation process.    

The other future-thinking component of this approach is around the ingest of all forms data into Drupal. This lays the groundwork for Drupal to become the source of truth for all forms information, possibly with the form files being uploaded directly into Drupal. 

