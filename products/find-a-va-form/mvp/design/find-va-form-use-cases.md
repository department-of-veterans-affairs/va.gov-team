# Find VA Forms - Product Use Cases

## Find VA Forms - Search Landing Page Use Cases


### Use Case S-A
UI updated 2021-06-14
#### Search for form with Form Detail page link

* **Description:** 
  - When a user searches for a valid VA form (one that is in the VA forms database) that has a detail page, the form-specific search-result's form-title is a clickable link to the correponding detail-page.  

* **Link to designs:** 
  - Desktop prototype: https://user-images.githubusercontent.com/68560244/121958273-7f6eee00-cd31-11eb-94dc-9d434c521b37.png
  - Mobile prototype: https://user-images.githubusercontent.com/68560244/121957653-b395df00-cd30-11eb-9609-0860b2b39c89.png


* **Instructions to access in Staging**
  - https://staging.va.gov/find-forms/
  - Unauth; no login credentials needed.

* **Link to TestRail Test Case**
  - https://dsvavsp.testrail.io/index.php?/cases/view/3953
----

### Use Case S-B
UI updated 2021-06-14

#### Search for VA Form with Online Tool link 

* **Description:** 
  - When a user searches for a valid VA form that also has an Online Tool equivalent, the form-specific search-result has a clickable link to the online-form.

* **Link to designs:** 
  - Desktop prototype: https://user-images.githubusercontent.com/68560244/121958273-7f6eee00-cd31-11eb-94dc-9d434c521b37.png
  - Mobile prototype: https://user-images.githubusercontent.com/68560244/121957653-b395df00-cd30-11eb-9609-0860b2b39c89.png


* **Instructions to access in Staging:**
  - https://staging.va.gov/find-forms/

* **Link to TestRail Test Case**
  - https://dsvavsp.testrail.io/index.php?/cases/view/3977
  
    
### Use Case S-C
UI updated 2021-06-14

#### Search for Deleted VA Form

* **Description:** 
  - When a user searches for a form that was once valid, but has since been deleted/deprecated, a message is displayed to indicate deleted form.

* **Link to designs:** 
  - Prototype (PNG FILE): https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/improve-search/design/deleted_form.png

* **Instructions to access in Staging
  - https://staging.va.gov/find-forms/

* **Link to TestRail Test Case**
  - https://dsvavsp.testrail.io/index.php?/cases/view/3951
  
    
### Use Case S-D
UI updated 2021-06-14

#### Search for Invalid VA Form

* **Description:** 
  - When a user searches for a VA form that is not valid, and was not valid in the past, a message is displayed to indicate invalid search.

* **Link to designs:** 
  - Prototype (PNG FILE): https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/improve-search/design/invalid_form.png

* **Instructions to access in Staging
  - https://staging.va.gov/find-forms/

* **Link to TestRail Test Case**
  - https://dsvavsp.testrail.io/index.php?/cases/view/3978
  
### Use Case S-E
Closest match option added 2021-06-14

#### Sorting List of Search Results 
**Note** the relevance option was added to the existing sorting use case on 5/7/2021.

* **Description:** 
  - When a user is presented with a list of search results, they can use the **Sort By feature** to change the order of results. Options presented include:
       - Closest match (Note: this should be the default sort order)
       - Ascending (A-Z)
       - Descending (Z-A)
       - Last updated (newest)
       - Last updated (oldest)

* **Link to designs:** 
  - Prototype: (PNG FILE) https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/improve-search/design/sort_by_relevance.png

* **Instructions to access in Staging
  - https://staging.va.gov/find-forms/

* **Link to TestRail Test Case**
  -   [C4179](https://dsvavsp.testrail.io/index.php?/cases/view/4179)

----


## Find VA Forms - Detail Page Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Form Detail Landing Page product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/form-detail-landing-pages/form-detail-product-outline.md)

### Use Case D-A 
#### Search for form that has minimum custom form data

* **Description:** 
  - When a form page has the minimum custom data added in Drupal. Mockup shows the basic version of a form detail landing page with:
    - data that's coming from the source VA forms database
    - the minimum custom data (Related to field)
    - the standard set of "helpful links.

* **Link to designs:** 
    - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/improve-search/design/min_detail_page_UI_change.png

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: http://preview-prod.vfs.va.gov/preview?nodeId=5891

* **Link to TestRail Test Case**
  - C858 https://dsvavsp.testrail.io/index.php?/cases/view/858 \[Request TR login credentials from @mickinsahni]

### Use Case D-B
Updated 2021-06-21 -- links added to Related Forms
#### Maximum custom form data

* **Description:** When a form page has all custom data added in Drupal. Mockup shows the maximal version of a form detail landing page with data that's coming from the source VA forms database, plus all the custom Drupal added data.  

* **Maximum custom data include:**

  - Related to field
  - When to use this form content block
  - Online tool block
  - Related forms and instructions - Update 2021-06-21 - Any related forms listed here should link to its own detail page (if one exists)
  - Custom "Helpful links related to {dynamic:form nbr}" 

* **Link to designs:** https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/improve-search/design/max_detail_page_UI_change.png

* **Instructions to access in ~Staging~ on prod.cms.va.gov** 
_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_
  - You must be on VA network to access the CMS preview page: http://preview-prod.vfs.va.gov/preview?nodeId=5776  <--This form page includes all the custom data fields. 

* **Link to TestRail Test Case**
  - C859 https://dsvavsp.testrail.io/index.php?/cases/view/859 \[Request TR login credentials from @mickinsahni]

### Use Case D-C
#### No custom form data

* **Description:** 
  - When a form page has **NO** custom data added in Drupal. Mockup shows the basic version of a form detail landing page with:
    - data that's coming from the source VA forms database
   
* **Link to designs:** 
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/improve-search/design/min_detail_page_UI_change.png
  
* **Possible QA-example**
  - http://forms.demo.ci.cms.va.gov/find-forms/about-form-10-2649b?_format=static_html \[published with not custom-data edits; should still have Related to: & standard Helpful links (see minimal-content design PDF above)]
  
* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 
  
* **Link to TestRail Test Case** (in case we do find any examples for this edge case)
  - C909 https://dsvavsp.testrail.io/index.php?/cases/view/909 \[Request TR login credentials from @mickinsahni]


### Use Case D-D
#### Invalid PDF Urls

* **Description:** 
  - When the url to download a particular form PDF is not available (e.g. 404), the form detail page should remain published. But, an error message on the form page indicates the form url is invalid.

* **Link to designs:** 
  - Min-custom-data: https://vsateams.invisionapp.com/share/D8YF92DRX3V#/screens
  - Max-custom-data: https://vsateams.invisionapp.com/share/G2YF5AJC845#/screens/428497810_detail_Page_With_All_Components_-_With_Error

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - QA example on Staging: https://staging.va.gov/form-detail-dummy/
    
* **Link to TestRail Test Case** (in case we do find any examples for this edge case)
  - C860 https://dsvavsp.testrail.io/index.php?/cases/view/860 \[Request TR login credentials from @mickinsahni]

### Use Case D-E
#### Deleted Forms

* **Description:** 
- When a form is deleted from the Forms DB, the deleted flag in the Drupal DB is set to `true`. The Drupal page is unpublished, but remains archived in case it needs to be re-published. 

* **Link to designs:**
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/11625

* **Instructions to access in ~Staging~ on prod.cms.va.gov** (_Note: ~credentials should be stored in sensitive repos only~ All CMS content lives on prod and can be viewed as unpublished previews_)
  - You must be on VA network to access the CMS preview page: 
  
* \[No TestRail test-case]
  - This will be in the Search experience; out-of-scope for Details-Page QA.


## Batch 1 - top 40 forms for QA
1.	https://staging.va.gov/find-forms/about-form-21-4138 (Use Case D-A)
2.	https://staging.va.gov/find-forms/about-form-22-1995 (D-A)
3.	https://staging.va.gov/find-forms/about-form-21-526ez (D-A)
4.	https://staging.va.gov/find-forms/about-form-21-2680 (Use Case D-B)
5.	https://staging.va.gov/find-forms/about-form-10-7959c (D-B) Related forms for Spanish version missing in Drupal. Workaround per Slack comment (https://dsva.slack.com/archives/CUB5X5MGF/p1594238881403100?thread_ts=1594226787.398600&cid=CUB5X5MGF)
6.	https://staging.va.gov/find-forms/about-form-10-10d (D-B): Cannot link Spanish version of 10-7959c bc it doesn’t exist in Drupal. Implemented workaround per Slack comment linked above.
7.	https://staging.va.gov/find-forms/about-form-21-22 (D-B)
8.	https://staging.va.gov/find-forms/about-form-10-5345 (D-A)
9.	https://staging.va.gov/find-forms/about-form-20-0995 (D-A)
10.	https://staging.va.gov/find-forms/about-form-21-686c (D-A): __Online tool not live yet__
11.	https://staging.va.gov/find-forms/about-form-10-0137 (D-B): __Spanish form is still 404ing. Form owner has been notified. If form is still erroring during QA, we will pull it out and not publish node.__
12.	https://staging.va.gov/find-forms/about-form-21-0781 (D-B)
13.	https://staging.va.gov/find-forms/about-form-21-0966 (D-A)
14.	https://staging.va.gov/find-forms/about-form-21-0845 (D-A)
15.	https://staging.va.gov/find-forms/about-form-22-5490 staging(D-A)
16.	https://staging.va.gov/find-forms/about-form-26-1880 (D-A)
17.	https://staging.va.gov/find-forms/about-form-10-2850c (D-A)
18.	https://staging.va.gov/find-forms/about-form-21-4142 (D-A)
19.	https://staging.va.gov/find-forms/about-form-21p-0969 (D-B)
20.	https://staging.va.gov/find-forms/about-form-21p-534ez (D-B)
21.	https://staging.va.gov/find-forms/about-form-10-10ez (D-B)
22.	https://staging.va.gov/find-forms/about-form-10-3542 (D-A)
23.	https://staging.va.gov/find-forms/about-form-22-1990e (D-A)
24.	https://staging.va.gov/find-forms/about-form-22-1990n (D-A)
25.	https://staging.va.gov/find-forms/about-form-22-1990 (D-B)
26.	https://staging.va.gov/find-forms/about-form-22-5495 (D-A)
27.	https://staging.va.gov/find-forms/about-form-va40-10007 (D-A)
28.	https://staging.va.gov/find-forms/about-form-21p-530 (D-A)
29.	https://staging.va.gov/find-forms/about-form-21p-527ez (D-B)
30.	https://staging.va.gov/find-forms/about-form-10-10cg (D-B)
31.	https://staging.va.gov/find-forms/about-form-21-22a (D-A)
32.	https://staging.va.gov/find-forms/about-form-21-674 (D-A)
33.	https://staging.va.gov/find-forms/about-form-21p-509 (D-A)
34.	https://staging.va.gov/find-forms/about-form-10-0137-espanol (D-A)
35.	https://staging.va.gov/find-forms/about-form-10-0137a (D-B)
36.	https://staging.va.gov/find-forms/about-form-21-0781a (D-B)
37.	https://staging.va.gov/find-forms/about-form-21p-527 (D-B)
38.	https://staging.va.gov/find-forms/about-form-21p-534 (D-B)
39.	https://staging.va.gov/find-forms/about-form-10-10ez (D-B)
40.	https://staging.va.gov/find-forms/about-form-10-10ezr (D-A)
41.	https://staging.va.gov/find-forms/about-form-21-0779 (D-B)


# Historic Information
## Links to old mockups
  -  prototype: https://xd.adobe.com/view/d5e7301d-12f9-438f-b30e-3646e927ed70-80b4/screen/b0086df2-db66-42e9-b202-2f790435e7c3?hints=off
  -  mobile prototype: https://xd.adobe.com/view/d5e7301d-12f9-438f-b30e-3646e927ed70-80b4/screen/b5bcf931-4c82-42b3-9a11-cca84dfcedb8?hints=off
  - PDF prototype: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/design/VA-Form-search-landing-results.pdf 
