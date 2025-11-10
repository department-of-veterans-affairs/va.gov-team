# Front End Build Redirects from CMS

_Replace the previous line with the the title of your project or component and replace the following lines with your name(s), email and the date._
**Author(s):** Steve Wirt
**Last Updated:** Aug 21, 2020
**Status:** Draft | **In Review** | Approved
**Approvers:**
   - [ ] Rian Fowler
   - [ ] Andrew Gunsch
   - [ ] Mikki Northuis
   - [ ] Nick Sullivan
   - [ ] Taylor Skinner (originally worked on redirect import)
   - [ ] ??

## Overview


### Objective
The CMS allows editors to create pages and move pages to other locations within the VA.gov website.  The CMS keeps track of when a page's path is changed and builds a redirect from one to the other.  The problem is, there is nothing that moves the redirects known within the CMS to the public website. It is in the best interest of editors, developers and veterans to have the front-end website know about and act on the redirects known to the CMS.

### Background
If pages are moved within the CMS under the right conditions the end result is a combination of internal broken links that currently cause failure of CMS content to be released to the front-end, and 404 errors for veterans.

Within the CMS we have put in a lot of [safeguards to detect broken links](https://www.drupal.org/project/node_link_report) within content at the instant of saving a page of content and warning the edtitor in real time.  There are limits to this method however as it can not account for editors changing the location of a page being linked to or the published status of the link target at the time of content release (CR).

| Situation | Current Result | Result if Redirects as Content |
| --------- | -------------- | ------------------------------ |
| Link correctly created in CMS to page in CMS that has been moved | 200 | 200 |
| Link created by url copy paste in WYSIWG to page in CMS that has been moved | 404 & CR Fail | 200|
| Link from VA.gov page not in CMS to CMS page that has been moved | 404 & CR Fail | 200 |
| Link from external site to page in CMS that has been moved | 404 | 200 |
| Browser bookmark / email link to page in CMS that has been moved | 404 | 200 |

The current state of managing redirects for content, involves content editors and a developer coordinating and choreographing the release of the contnet with the addition of the redirect(s).  It is time intensive and risk prone.  VA needs a redirect system that is easier to manage and less reliant on developers timing releases perfectly to match.

### Guiding Principles
1. Veterans should not get 404 errors.
2. Content on VA.gov should not have broken links to content also on VA.gov.
3. As the CMS scales from ~20 editors and daily content releases, up to ~500 editors and continuous content releases, we can not allow a broken link to prevent content releases.
4. Developers currently waste far too much time chasing down broken links.


### High Level Design

Three parts of the system work together:

#### I. CMS
At the highest level, the CMS manages redirects already.  It tracks them, sorts out and prevents circular references (infinite redirects), creates new redirects for moved pages and can handle query parameters, if needed for legacy handling. The CMS even provides a nice user interface for adding, deleting, and editing source, destination and status codes.  The CMS currently makes redirects available to both GraphQL and the static file content exports.  Only one minor change is needed on the CMS side to translate node/# paths to the proper alias.  We simply need a way for the Front-End to act on the redirects in the CMS. The CMS treats redirects like content, and the Front-End should too.  When a title changes, in most cases, the URL changes, so a redirect is needed.  Any Front-End system that does not account for that is a 404 factory, which is our current condition.

#### II. Vets-website content creation.
Local environments that are not AWS based would need to function correctly with automated tests and human users.  So one part of this strategy is to create client side redirects by creating an html file with a meta refresh tag
`<meta http-equiv="refresh" content="0; URL='/new/path/destination'" />` for each redirect object found in the content export.  This will happen at the same time that content html pages are built.

#### III. Vets-website deploy to AWS
During the vets-website deploy to AWS S3, the system currently generates an object for each static page of the VA.gov website.  Via the same object creation process we can add an [S3 object with redirect metadata](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html) that describes both the destination and the return code for each HTML page that contains a meta-refresh tag. These S3 objects get discarded and rebuilt on each content release, so they would **always** be in sync with the content from the CMS.  By adding these, the website when running in an AWS environment would have the more desireable server side redirects instead of the browser-based `meta-refresh` redirects.

## Specifics

### Detailed Design

#### I. CMS
The redirects are output in the content export like this:
```
{
    "rid": [
        {
            "value": 494
        }
    ],
    "uuid": [
        {
            "value": "3d72f51f-fb7a-4cce-a16e-0771505e552a"
        }
    ],
    "hash": [
        {
            "value": "NSUuoJQb5WlkVtO2TgzqvnRzwOvwR-ZX9U7rztw5v8w"
        }
    ],
    "type": [
        {
            "value": "redirect"
        }
    ],
    "uid": [
        {
            "target_type": "user",
            "target_uuid": "fd71292f-3dc7-409d-b0e8-500204cb005a"
        }
    ],
    "redirect_source": [
        {
            "path": "pittsburgh-health-care\/volunteer-or-donate",
            "query": []
        }
    ],
    "redirect_redirect": [
        {
            "uri": "internal:\/node\/281",
            "title": "Server",
            "options": []
         }
    ],
    "language": [
        {
            "value": "en"
        }
    ],
    "status_code": [
        {
            "value": 301
        }
    ],
    "created": [
        {
            "value": "2019-11-26T18:44:28+00:00",
            "format": "Y-m-d\\TH:i:sP"
        }
    ],
    "metatag": {
        "value": {
            "title": "Edit URL redirect | Veterans Affairs",
            "twitter_cards_type": "summary_large_image",
            "og_site_name": "Veterans Affairs",
            "twitter_cards_title": "Edit URL redirect | Veterans Affairs",
            "twitter_cards_site": "@DeptVetAffairs",
            "og_title": "Edit URL redirect | Veterans Affairs"
        }
    }
}

```

The only modification needed at the CMS export is to add a destination element that would take drupal node paths
```
 "redirect_redirect": [
        {
            "uri": "internal:\/node\/281",
            "title": "Server",
            "options": []
         }
```

and translate `"uri": "internal:\/node\/281",` to an actual path like
```
"destination": [
        {
            "uri": "pittsburgh-health-care\/about\/volunteer-or-donate",
         }
```
This would be a trivial to add.

#### II. Vets-website content creation.
  _(Covered in High Level Design section.)_

#### III. Vets-website deploy to AWS
  _(Covered in High Level Design section.)_


### Code Location

Step I: Addition of relative path for destination would be added to the [CMS repo here](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/docroot/modules/custom/va_gov_content_export/src/TomeExporter.php#L97)

Step II: Build the HTML files with meta refresh during content file generation in the [vets-website repo here](https://github.com/kevwalsh/vets-website/blob/1d6a53cd9b53ec71b69ae2bce78bd5694eaf1d7f/src/site/stages/build/drupal/metalsmith-drupal.js#L51).

Step III:  Building the AWS S3 objects with redirect metadata would happen in the [Devops repo here](https://github.com/department-of-veterans-affairs/devops/blob/a58dfbc762466905d5727cb4cd626d5e6dad9c3f/ansible/deployment/roles/deploy-vets-website/files/vets-website-deploy.sh)
which is called from [here](https://github.com/department-of-veterans-affairs/devops/blob/6fd9fc8f5ebcb2b685e4e0a20450c472655fcef2/ansible/deployment/roles/deploy-vets-website/tasks/main.yml#L2-L7)


### Testing Plan
The current content release method already does link checking.  This method would be tested to a large degree by this existing test.  The CMS already does a significant amount of testing of a front end build in a non-AWS environment so we would add a Behat test to makes sure the that the client side redirect is working.

Additional testing could be added on the Vets-website deployment tests to verify that a set of redirects work properly on the server side redirects in AWS.

### Logging
Logging would not be required.  There may be some statistics that could be tracked within AWS, but that may not be necessary.  Google Analytics may also be used to track instances of displaying the 404 page that may in some cases include referral data.  Server logs track HTTP requests and are likely already used to track requests ending in 404 errors.

### Debugging
CURL would be the simplest and most useful debugging method of looking at and debugging redirects on any of the BRD environments as well as local environments.  On local environments simply inspecting a page's meta refresh tag would provide debug specific data.

### Caveats
Section level redirects that are outside of the CMS could still be handled as they are at the server or F5 level.

### Security Concerns
None at this time.

### Privacy Concerns
None at this time.

### Open Questions and Risks

1. **Do we still need `Type` and `Match Type` redirects in the CMS?** Back when the notion of redirects being imported into the CMS was first planned for, the CMS team was asked to add `Type` (Server | Template) and `Match Type` (prefix | regex-i | regex | non re ) data to redirect entries.  That was added by creating the [redirect options](https://www.drupal.org/project/redirect_options) module.  I am not certain at this time if this data would still be needed for this approach or not.  It seemed to be for managing redirects beyond the content scope of the CMS.  The CMS can support that but it is not required and also not blocked by this proposal. [Related to this dropped epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/503).

### Work Estimates
1. CMS: Add destination path to CMS content export. (~3 story points)
2. PWS: Add build of HTML pages that have meta-refresh along side the current HTML page builds for each content export redirect.*.json file.  These create the client side redirects for use in non-AWS environments. (~3 story points)
3. PWS Devops : Add processing to vets-website deploy to create an AWS Object with redirect metadata for any HTML page that contains a meta-refresh tag. This would create server side redirects for any AWS environments. (~10 story points)

### Alternatives

#### Import redirects from CMS into nginX or F5
This [epic was planned and then dropped](https://github.com/department-of-veterans-affairs/va.gov-team/issues/503).
This is another option that could be carried out, however in order to be effective it would have to:
a) occur on every Content Release from the CMS.
b) Nginx or F5 would have to be able to remove old or altered redirects to keep them from conflicting with new or updated redirects. In other words it would have to support full CRUD operations and not just import.

**Pros/Cons**
* +All redirects would be handled in one technical layer.
* -Would have to be implemented on dev and staging too.
* -Can not be used/tested on local sandboxes or in CI pipelines


### Future Work
_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._
At this time I forsee no future work needed.

### Revision History
_The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft._

Reference to redirect model by Robbie Holmes https://dsva.slack.com/files/U150KNADC/FFW0ZQLH4/Redirects_Technical_Proposal?origin_team=T03FECE8V

Date | Revisions Made | Author
-----|----------------|--------
Aug 21, 2020 | Initial submission. | Steve Wirt
