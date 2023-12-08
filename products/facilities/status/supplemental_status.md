# Facility Supplemental Status and Description
The supplemental status and accompanying supplemental status more info is designed to be extensible to account for rapidly changing&nbsp; requirements for Facility level statuses.

## History

This was originally built [Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8946) during the era of COVID 19 (May 2022) as VHA tried to have consistent messaging across their facilities to indicate the Covid threat levels and the Veteran facing mitigation strategies in place at each facility.&nbsp; Covid low, medium, or high would each have their own list of&nbsp; mitigation strategies that were controlled at the national level. This particular use failed because even though the mitigation stategies were mean't to be nationally controlled, facilities needed ways to override the national content. National content soon became nationally recommended content. The field for this was hidden in May 2023 as the national emergency was declared over.&nbsp; The structure is still in place in case we need to roll it or something similar out again.

This was specifically implemented for COVID-19, but it was intentionally built to be agnostic of the statuses. It could support a broad array of statuses like:

- open / normal
- inclimate weather
- power outage
- covid levels
- zombie pox
- high heat index
- active shooter


## Features of Supplemental Status model

- Status options are controlled by content (taxonomy: <a href="/admin/structure/taxonomy/manage/facility_supplemental_status/overview">Facility Supplemental Status</a>) - Adding a new option is as easy as creating a new term.
- Editorial guidance (field_guidance)&nbsp;for when to use each status is content on the taxonomy term, so we can adjust the guidance to meet the emerging situation.
- The status description on&nbsp;the term&nbsp;&nbsp;can be nationally controlled and is not stored at the facility level.&nbsp; There is a model where if we wanted to allow local override,&nbsp;we copy this text into a similar style field on the facility.
- The status term has a unique identifier (field_status_id) that we can pass to other consumers like the Facilty API so they do not need all the other supporting data.
- The option label (field_cms_option_label) that editors see in the CMS is also part of the content on the term.
- Specific supplemental status options use Sections to control who owns and can edit them.


These combined, give us an amazing amount of control over status options that start with leadership and flow to editors, then directly to veterans.&nbsp; This kind of power would allow rolling out a new status very rapidly.&nbsp; (Pick a scary pox, we are ready for it.)



## Facility API and Facility Locator

The facility status push that is performed when a facility has a status change in the CMS&nbsp; includes an array of field_status_id(s) that have been selected for the facility. The description or the friendly name of the status are not included.

In the Facility Locator, the friendly name is looked up by status_id using the [KISS endpoint](https://www.va.gov/data/cms/vamc-facility-supplemental-status.json).

On the FE this is usually rendered as the [alert component](https://design.va.gov/components/alert-expandable) 

Links:
- [Content Model Document](https://prod.cms.va.gov/admin/structure/cm_document/note/118/Supplemental-Status)


## State of Removal
As of 6/1/2023 the editorial interface still ezxists in VAMC Facilities, however, it is not being rendered on the facility locator search results or the FE system status pages on va.gov.
Here are the PRs that disabled it on the FE.
- https://github.com/department-of-veterans-affairs/content-build/pull/1578

It may be hidden from the editorial interface until it is re-introduced on the VBA product.
