# Find VA Forms - Detail Pages: Product Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Form Detail Landing Page product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/README.md)

## Use Case A 
### Minimum custom form data

* **Description:** 
  - When a form page has the minimum custom data added in Drupal. Mockup shows the basic version of a form detail landing page with:
    - data that's coming from the source VA forms database
    - the minimum custom data (Related to field)
    - the standard set of "helpful links."  

* **Link to designs:** 
  - https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form/initiatives/2021-01-mvp/form-detail-landing-pages/final-docs#visual-mockups

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: http://preview-prod.vfs.va.gov/preview?nodeId=5891

* **Link to TestRail Test Case**
  - C858 https://dsvavsp.testrail.io/index.php?/cases/view/858 \[Request TR login credentials from @mickinsahni]

## Use Case B 
### Maximum custom form data

* **Description:** When a form page has all custom data added in Drupal. Mockup shows the maximal version of a form detail landing page with data that's coming from the source VA forms database, plus all the custom Drupal added data.  

* **Maximum custom data include:**

  - Related to field
  - When to use this form content block
  - Online tool block
  - Related forms and instructions
  - Custom "Helpful links related to {dynamic:form nbr}" 

* **Link to designs:** https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form/initiatives/2021-01-mvp/form-detail-landing-pages/final-docs#visual-mockups

* **Instructions to access in ~Staging~ on prod.cms.va.gov** 
_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_
  - You must be on VA network to access the CMS preview page: http://preview-prod.vfs.va.gov/preview?nodeId=5776  <--This form page includes all the custom data fields. 

* **Link to TestRail Test Case**
  - C859 https://dsvavsp.testrail.io/index.php?/cases/view/859 \[Request TR login credentials from @mickinsahni]

## Use Case C
### No custom form data

* **Description:** 
  - When a form page has **NO** custom data added in Drupal. Mockup shows the basic version of a form detail landing page with:
    - data that's coming from the source VA forms database
   
* **Link to designs:** 
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-01-mvp/form-detail-landing-pages/WIP-design-files/form-detail-FE-minimum-content-072820.pdf
  
* **Possible QA-example**
  - http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-2649b?_format=static_html \[published with not custom-data edits; should still have Related to: & standard Helpful links (see minimal-content design PDF above)]
  
* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 
  
* **Link to TestRail Test Case** (in case we do find any examples for this edge case)
  - C909 https://dsvavsp.testrail.io/index.php?/cases/view/909 \[Request TR login credentials from @mickinsahni]


## Use Case D
### Invalid PDF Urls

* **Description:** 
  - When the url to download a particular form PDF is not available (e.g. 404), the form detail page should remain published. But, an error message on the form page indicates the form url is invalid.

* **Link to designs:** 
  - Min-custom-data: https://vsateams.invisionapp.com/share/D8YF92DRX3V#/screens
  - Max-custom-data: https://vsateams.invisionapp.com/share/G2YF5AJC845#/screens/428497810_detail_Page_With_All_Components_-_With_Error

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - QA example on Staging: https://staging.va.gov/form-detail-dummy/
    
* **Link to TestRail Test Case** (in case we do find any examples for this edge case)
  - C860 https://dsvavsp.testrail.io/index.php?/cases/view/860 \[Request TR login credentials from @mickinsahni]

## Use Case E
### Deleted Forms

* **Description:** 
- When a form is deleted from the Forms DB, the deleted flag in the Drupal DB is set to `true`. The Drupal page is unpublished, but remains archived in case it needs to be re-published. 

* **Link to designs:**
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/11625

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 
  
* \[No TestRail test-case]
  - This will be in the Search experience; out-of-scope for Details-Page QA.

## Batch 1 - top 40 forms for QA
1.	https://prod.cms.va.gov/find-forms/about-form-21-4138 \[[preview-node 5966](http://preview-prod.vfs.va.gov/preview?nodeId=5966)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-4138?_format=static_html)] (Use Case A)
2.	https://prod.cms.va.gov/find-forms/about-form-22-1995 \[[5977](http://preview-prod.vfs.va.gov/preview?nodeId=5977)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-22-1995?_format=static_html)] (A)
3.	https://prod.cms.va.gov/find-forms/about-form-21-526ez \[[6119](http://preview-prod.vfs.va.gov/preview?nodeId=6119)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-526ez?_format=static_html)] (A)
4.	https://prod.cms.va.gov/find-forms/about-form-21-2680 \[[5846](http://preview-prod.vfs.va.gov/preview?nodeId=5846)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-2680?_format=static_html)] (Use Case B)
5.	https://prod.cms.va.gov/find-forms/about-form-10-7959c \[[5709](http://preview-prod.vfs.va.gov/preview?nodeId=5709)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-7959c?_format=static_html)] (B) Related forms for Spanish version missing in Drupal. Workaround per Slack comment (https://dsva.slack.com/archives/CUB5X5MGF/p1594238881403100?thread_ts=1594226787.398600&cid=CUB5X5MGF)
6.	https://prod.cms.va.gov/find-forms/about-form-10-10d \[[6046](http://preview-prod.vfs.va.gov/preview?nodeId=6046)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-10d?_format=static_html)] (B): Cannot link Spanish version of 10-7959c bc it doesn’t exist in Drupal. Implemented workaround per Slack comment linked above.
7.	https://prod.cms.va.gov/find-forms/about-form-21-22 \[[5958](http://preview-prod.vfs.va.gov/preview?nodeId=5958)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-22?_format=static_html)] (B)
8.	https://prod.cms.va.gov/find-forms/about-form-10-5345 \[[5763](http://preview-prod.vfs.va.gov/preview?nodeId=5763)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-5345?_format=static_html)] (A)
9.	https://prod.cms.va.gov/find-forms/about-form-20-0995 \[[5703](http://preview-prod.vfs.va.gov/preview?nodeId=5703)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-20-0995?_format=static_html)] (A)
10.	https://prod.cms.va.gov/find-forms/about-form-21-686c \[[6131](http://preview-prod.vfs.va.gov/preview?nodeId=6131)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-686c?_format=static_html)] (A): __Online tool not live yet__
11.	https://prod.cms.va.gov/find-forms/about-form-10-0137 \[[5722](http://preview-prod.vfs.va.gov/preview?nodeId=5722)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-0137?_format=static_html)] (B): __This form is still 404ing. Form owner has been notified. If form is still erroring during QA, we will pull it out and not publish node.__
12.	https://prod.cms.va.gov/find-forms/about-form-21-0781 \[[6022](http://preview-prod.vfs.va.gov/preview?nodeId=6022)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-0781?_format=static_html)] (B)
13.	https://prod.cms.va.gov/find-forms/about-form-21-0966 \[[6088](http://preview-prod.vfs.va.gov/preview?nodeId=6088)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-0966?_format=static_html)] (A)
14.	https://prod.cms.va.gov/find-forms/about-form-21-0845 \[[5872](http://preview-prod.vfs.va.gov/preview?nodeId=5872)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-0845?_format=static_html)] (A)
15.	https://prod.cms.va.gov/find-forms/about-form-22-5490 \[[5978](http://preview-prod.vfs.va.gov/preview?nodeId=5978)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-22-5490?_format=static_html)] (A)
16.	https://prod.cms.va.gov/find-forms/about-form-26-1880 \[[6016](http://preview-prod.vfs.va.gov/preview?nodeId=6016)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-26-1880?_format=static_html)] (A)
17.	https://prod.cms.va.gov/find-forms/about-form-10-2850c \[[6110](http://preview-prod.vfs.va.gov/preview?nodeId=6110)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-2850c?_format=static_html)] (A)
18.	https://prod.cms.va.gov/find-forms/about-form-21-4142 \[[5967](http://preview-prod.vfs.va.gov/preview?nodeId=5967)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-4142?_format=static_html)] (A)
19.	https://prod.cms.va.gov/find-forms/about-form-21p-0969 \[[5779](http://preview-prod.vfs.va.gov/preview?nodeId=5779)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-0969?_format=static_html)] (B)
20.	https://prod.cms.va.gov/find-forms/about-form-21p-534ez \[[5820](http://preview-prod.vfs.va.gov/preview?nodeId=5820)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-534ez?_format=static_html)] (B)
21.	https://prod.cms.va.gov/find-forms/about-form-10-10ez-pdf \[[5776](http://preview-prod.vfs.va.gov/preview?nodeId=5776)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-10ez-pdf?_format=static_html)] (B)
22.	https://prod.cms.va.gov/find-forms/about-form-10-3542 \[[5949](http://preview-prod.vfs.va.gov/preview?nodeId=5949)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-3542?_format=static_html)] (A)
23.	https://prod.cms.va.gov/find-forms/about-form-22-1990e \[[5863](http://preview-prod.vfs.va.gov/preview?nodeId=5863)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-22-1990e?_format=static_html)] (A)
24.	https://prod.cms.va.gov/find-forms/about-form-22-1990n \[[6122](http://preview-prod.vfs.va.gov/preview?nodeId=6122)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-22-1990n?_format=static_html)] (A)
25.	https://prod.cms.va.gov/find-forms/about-form-22-1990 \[[6118](http://preview-prod.vfs.va.gov/preview?nodeId=6118)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-22-1990?_format=static_html)] (B)
26.	https://prod.cms.va.gov/find-forms/about-form-22-5495 \[[5979](http://preview-prod.vfs.va.gov/preview?nodeId=5979)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-22-5495?_format=static_html)] (A)
27.	https://prod.cms.va.gov/find-forms/about-form-va40-10007 \[[6053](http://preview-prod.vfs.va.gov/preview?nodeId=6053)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-va40-10007?_format=static_html)] (A)
28.	https://prod.cms.va.gov/find-forms/about-form-21p-530 \[[5961](http://preview-prod.vfs.va.gov/preview?nodeId=5961)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-530?_format=static_html)] (A)
29.	https://prod.cms.va.gov/find-forms/about-form-21p-527ez \[[5961](http://preview-prod.vfs.va.gov/preview?nodeId=5961)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-527ez?_format=static_html)] (B)
30.	https://prod.cms.va.gov/find-forms/about-form-10-10cg  \[[5804](http://preview-prod.vfs.va.gov/preview?nodeId=5804)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-10cg?_format=static_html)] (B): __Online tool still hasn’t launched__
31.	https://prod.cms.va.gov/find-forms/about-form-21-22a \[[5736](http://preview-prod.vfs.va.gov/preview?nodeId=5736)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-22a?_format=static_html)] (A)
32.	https://prod.cms.va.gov/find-forms/about-form-21-674 \[[5964](http://preview-prod.vfs.va.gov/preview?nodeId=5964)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-674?_format=static_html)] (A)
33.	https://prod.cms.va.gov/find-forms/about-form-21p-509 \[[6141](http://preview-prod.vfs.va.gov/preview?nodeId=6141)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-509?_format=static_html)] (A)
34.	https://prod.cms.va.gov/find-forms/about-form-10-0137-espanol \[[6113](http://preview-prod.vfs.va.gov/preview?nodeId=6113)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-0137-espanol?_format=static_html)] (A)
35.	https://prod.cms.va.gov/find-forms/about-form-10-0137a \[[5983](http://preview-prod.vfs.va.gov/preview?nodeId=5983)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-0137a?_format=static_html)] (B)
36.	https://prod.cms.va.gov/find-forms/about-form-21-0781a \[[5740](http://preview-prod.vfs.va.gov/preview?nodeId=5740)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-0781a?_format=static_html)] (B)
37.	https://prod.cms.va.gov/find-forms/about-form-21p-527 \[[6031](http://preview-prod.vfs.va.gov/preview?nodeId=6031)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-527?_format=static_html)] (B)
38.	https://prod.cms.va.gov/find-forms/about-form-21p-534 \[[6145](http://preview-prod.vfs.va.gov/preview?nodeId=6145)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21p-534?_format=static_html)] (B)
39.	https://prod.cms.va.gov/find-forms/about-form-10-10ez (esp) \[[5745](http://preview-prod.vfs.va.gov/preview?nodeId=5745)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-10ez?_format=static_html)] (B)
40.	https://prod.cms.va.gov/find-forms/about-form-10-10ezr \[[6107](http://preview-prod.vfs.va.gov/preview?nodeId=6107)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-10ezr?_format=static_html)] (A)
41.	https://prod.cms.va.gov/find-forms/about-form-21-0779 \[[6065](http://preview-prod.vfs.va.gov/preview?nodeId=6065)] \[[QA-env link](http://forms.demo.ci.cms.va.gov/find-forms/about-form-21-0779?_format=static_html)] (B)

