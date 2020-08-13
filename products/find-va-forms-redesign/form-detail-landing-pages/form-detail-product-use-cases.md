# Product Use Cases Template

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Form Detail Landing Page product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/form-detail-landing-pages/form-detail-product-outline.md)

## Use Case A 
### Minimum custom form data

* **Description:** 
  - When a form page has the minimum custom data added in Drupal. Mockup shows the basic version of a form detail landing page with:
    - data that's coming from the source VA forms database
    - the minimum custom data (Related to field)
    - the standard set of "helpful links."  

* **Link to designs:** 
  - https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/form-detail-landing-pages/final-docs#visual-mockups

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: http://preview-prod.vfs.va.gov/preview?nodeId=5891



## Use Case B 
### Maximum custom form data

* **Description:** When a form page has all custom data added in Drupal. Mockup shows the maximal version of a form detail landing page with data that's coming from the source VA forms database, plus all the custom Drupal added data.  

* **Maximum custom data include:**

  - Related to field
  - When to use this form content block
  - Online tool block
  - Related forms and instructions
  - Custom "Helpful links related to {dynamic:form nbr}" 

* **Link to designs:** https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/form-detail-landing-pages/final-docs#visual-mockups

* **Instructions to access in ~Staging~ on prod.cms.va.gov** 
_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_
  - You must be on VA network to access the CMS preview page: http://preview-prod.vfs.va.gov/preview?nodeId=5776  <--This form page includes all the custom data fields. 
  
## Use Case C
### No custom form data

* **Description:** 
  - When a form page has **NO** custom data added in Drupal. Mockup shows the basic version of a form detail landing page with:
    - data that's coming from the source VA forms database
   
* **Link to designs:** 
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/form-detail-landing-pages/WIP-design-files/form-detail-FE-minimum-content-072820.pdf
  
* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 
  

## Use Case D
### Invalid PDF Urls

* **Description:** 
  - When the url to download a particular form PDF is not available (e.g. 404), the form detail page should remain published. But, an error message on the form page indicates the form url is invalid.

* **Link to designs:** 
  - 

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 
  
## Use Case E
### Deleted Forms

* **Description:** 
- When a form is deleted from the Forms DB, the deleted flag in the Drupal DB is set to `true`. The Drupal page is unpublished, but remains archived in case it needs to be re-published. 

* **Link to designs:**
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/11625

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 

## Batch 1 - top 40 forms for QA
1.	https://prod.cms.va.gov/find-forms/about-form-21-4138 \[[preview-node 5966](http://preview-prod.vfs.va.gov/preview?nodeId=5966)] (Use Cases A)
2.	https://prod.cms.va.gov/find-forms/about-form-22-1995 \[[5977](http://preview-prod.vfs.va.gov/preview?nodeId=5977)] (A)
3.	https://prod.cms.va.gov/find-forms/about-form-21-526ez \[[6119](http://preview-prod.vfs.va.gov/preview?nodeId=6119)] (A)
4.	https://prod.cms.va.gov/find-forms/about-form-21-2680 \[[5846](http://preview-prod.vfs.va.gov/preview?nodeId=5846)] (Use Case B)
5.	https://prod.cms.va.gov/find-forms/about-form-10-7959c \[[5709](http://preview-prod.vfs.va.gov/preview?nodeId=5709)] (B) Related forms for Spanish version missing in Drupal. Workaround per Slack comment (https://dsva.slack.com/archives/CUB5X5MGF/p1594238881403100?thread_ts=1594226787.398600&cid=CUB5X5MGF)
6.	https://prod.cms.va.gov/find-forms/about-form-10-10d \[[6046](http://preview-prod.vfs.va.gov/preview?nodeId=6046)] (B): Cannot link Spanish version of 10-7959c bc it doesn’t exist in Drupal. Implemented workaround per Slack comment linked above.
7.	https://prod.cms.va.gov/find-forms/about-form-21-22 \[[5958](http://preview-prod.vfs.va.gov/preview?nodeId=5958)] (B)
8.	https://prod.cms.va.gov/find-forms/about-form-10-5345 \[[5763](http://preview-prod.vfs.va.gov/preview?nodeId=5763)] (A)
9.	https://prod.cms.va.gov/find-forms/about-form-20-0995 \[[5703](http://preview-prod.vfs.va.gov/preview?nodeId=5703)] (A)
10.	https://prod.cms.va.gov/find-forms/about-form-21-686c \[[6131](http://preview-prod.vfs.va.gov/preview?nodeId=6131)] (A): __Online tool not live yet__
11.	https://prod.cms.va.gov/find-forms/about-form-10-0137 \[[5722](http://preview-prod.vfs.va.gov/preview?nodeId=5722)] (B): __This form is still 404ing. Form owner has been notified. If form is still erroring during QA, we will pull it out and not publish node.__
12.	https://prod.cms.va.gov/find-forms/about-form-21-0781 \[[6022](http://preview-prod.vfs.va.gov/preview?nodeId=6022)] (B)
13.	https://prod.cms.va.gov/find-forms/about-form-21-0966 \[[6088](http://preview-prod.vfs.va.gov/preview?nodeId=6088)] (A)
14.	https://prod.cms.va.gov/find-forms/about-form-21-0845 \[[5872](http://preview-prod.vfs.va.gov/preview?nodeId=5872)] (A)
15.	https://prod.cms.va.gov/find-forms/about-form-22-5490 \[[5978](http://preview-prod.vfs.va.gov/preview?nodeId=5978)] (A)
16.	https://prod.cms.va.gov/find-forms/about-form-26-1880 \[[6016](http://preview-prod.vfs.va.gov/preview?nodeId=6016)] (A)
17.	https://prod.cms.va.gov/find-forms/about-form-10-2850c \[[6110](http://preview-prod.vfs.va.gov/preview?nodeId=6110)] (A)
18.	https://prod.cms.va.gov/find-forms/about-form-21-4142 \[[5967](http://preview-prod.vfs.va.gov/preview?nodeId=5967)] (A)
19.	https://prod.cms.va.gov/find-forms/about-form-21p-0969 \[[5779](http://preview-prod.vfs.va.gov/preview?nodeId=5779)] (B)
20.	https://prod.cms.va.gov/find-forms/about-form-21p-534ez \[[5820](http://preview-prod.vfs.va.gov/preview?nodeId=5820)] (B)
21.	https://prod.cms.va.gov/find-forms/about-form-10-10ez-pdf \[[5776](http://preview-prod.vfs.va.gov/preview?nodeId=5776)] (B)
22.	https://prod.cms.va.gov/find-forms/about-form-10-3542 \[[5949](http://preview-prod.vfs.va.gov/preview?nodeId=5949)] (A)
23.	https://prod.cms.va.gov/find-forms/about-form-22-1990e \[[5863](http://preview-prod.vfs.va.gov/preview?nodeId=5863)] (A)
24.	https://prod.cms.va.gov/find-forms/about-form-22-1990n \[[6122](http://preview-prod.vfs.va.gov/preview?nodeId=6122)] (A)
25.	https://prod.cms.va.gov/find-forms/about-form-22-1990 \[[6118](http://preview-prod.vfs.va.gov/preview?nodeId=6118)] (B)
26.	https://prod.cms.va.gov/find-forms/about-form-22-5495 \[[5979](http://preview-prod.vfs.va.gov/preview?nodeId=5979)] (A)
27.	https://prod.cms.va.gov/find-forms/about-form-va40-10007 \[[6053](http://preview-prod.vfs.va.gov/preview?nodeId=6053)] (A)
28.	https://prod.cms.va.gov/find-forms/about-form-21p-530 \[[5961](http://preview-prod.vfs.va.gov/preview?nodeId=5961)] (A)
29.	https://prod.cms.va.gov/find-forms/about-form-21p-527ez \[[5961](http://preview-prod.vfs.va.gov/preview?nodeId=5961)] (B)
30.	https://prod.cms.va.gov/find-forms/about-form-10-10cg  \[[5804](http://preview-prod.vfs.va.gov/preview?nodeId=5804)] (B): __Online tool still hasn’t launched__
31.	https://prod.cms.va.gov/find-forms/about-form-21-22a \[[5736](http://preview-prod.vfs.va.gov/preview?nodeId=5736)] (A)
32.	https://prod.cms.va.gov/find-forms/about-form-21-674 \[[5964](http://preview-prod.vfs.va.gov/preview?nodeId=5964)] (A)
33.	https://prod.cms.va.gov/find-forms/about-form-21p-509 \[[6141](http://preview-prod.vfs.va.gov/preview?nodeId=6141)] (A)
34.	https://prod.cms.va.gov/find-forms/about-form-10-0137-espanol \[[6113](http://preview-prod.vfs.va.gov/preview?nodeId=6113)] (A)
35.	https://prod.cms.va.gov/find-forms/about-form-10-0137a \[[5983](http://preview-prod.vfs.va.gov/preview?nodeId=5983)] (B)
36.	https://prod.cms.va.gov/find-forms/about-form-21-0781a \[[5740](http://preview-prod.vfs.va.gov/preview?nodeId=5740)] (B)
37.	https://prod.cms.va.gov/find-forms/about-form-21p-527 \[[6031](http://preview-prod.vfs.va.gov/preview?nodeId=6031)] (B)
38.	https://prod.cms.va.gov/find-forms/about-form-21p-534 \[[6145](http://preview-prod.vfs.va.gov/preview?nodeId=6145)] (B)
39.	https://prod.cms.va.gov/find-forms/about-form-10-10ez (esp) \[[5745](http://preview-prod.vfs.va.gov/preview?nodeId=5745)] (B)
40.	https://prod.cms.va.gov/find-forms/about-form-10-10ezr \[[6107](http://preview-prod.vfs.va.gov/preview?nodeId=6107)] (A)
41.	https://prod.cms.va.gov/find-forms/about-form-21-0779 \[[6065](http://preview-prod.vfs.va.gov/preview?nodeId=6065)] (B)

