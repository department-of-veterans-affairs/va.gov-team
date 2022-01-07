## CIE URL Shortener Design Doc

Author(s): **Adrian Rollett**

Last Updated: **January 3, 2022**

Status: **Draft** | In Review | Approved

Approvers:



* Stephen Barrs
* Shane Elliot


## Overview


### Objective

Provide a highly scalable & reliable URL shortening service under the [www.va.gov](www.va.gov) namespace, meeting these requirements:



* An API for creating shortened URLs is available to the CHIP & VEText teams
* Shortened URLs are available under the www.va.gov/c/ path immediately after creation

This document is intended to facilitate review & approval of the shortening solution by VA technical staff & stakeholders & provide clear implementation guidance to project engineers.


### Background

Check-in and appointment reminder SMS messages include links to applications under [www.va.gov](www.va.gov). These links are quite long, e.g.:

`https://www.va.gov/health-care/appointment-check-in/?id=95688232-40be-423d-9a57-687445bc1c08`

In order to improve message readability and reduce character counts and messaging charges, these links are shortened to allow sending messages such as this:

`Check in for your VA appointment at https://go.usa.gov/xtxMw`


The URL shortening solution implemented for the Check-in product relies on the  [go.usa.gov URL shortening service](https://go.usa.gov/about). Due to rate-limiting (and [no real SLA](https://go.usa.gov/about#policies)) it does not meet the product’s requirements. Additionally, Veterans [want more clarification on who the text message is coming from](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/research-findings.md#participants-want-more-clarification-on-who-the-text-message-is-coming-from) and [reassurance that any links they click on are from the VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/phase2-usability/research-findings.md#making-sure-the-wording-and-link-looked-like-it-came-from-va-helped-veterans-to-trust-it-and-be-more-prone-to-click-on-it).


### High Level Design

The system design centers around the ability to configure [redirect locations for individual S3 objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html#redirect-requests-object-metadata). 


#### URL Creation

Shortened URLs are created by [invoking a Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html) via [API gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) with the URL to be shortened as the main parameter. The Lambda function generates a short unique identifier and creates an S3 object with a redirect to the provided URL. Finally, the Lambda function returns the shortened URL (e.g. `https://www.va.gov/c/abcdef`) to the API consumer.

![Short URL Creation](https://user-images.githubusercontent.com/101649/148139300-06bcbab8-d74c-4e07-a04b-1136c923b577.png)
([UML Source](create_short_url.txt))

#### URL Serving

When a veteran visits a shortened URL such as `https://www.va.gov/c/abcdef,` the [VA.gov reverse proxy](https://vfs.atlassian.net/wiki/spaces/OT/pages/1474594232/Reverse+Proxy) forwards the request to the [web-hosting enabled S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html) with the same object identifier, e.g.:


```
https://va-url-shortener.s3-us-gov-west-1.amazonaws.com/abcdef
```


The S3 service will then serve a 301 redirect to the full URL.

![Short URL Serving](https://user-images.githubusercontent.com/101649/148139319-86cdb2ea-59c0-4d40-a567-5dddfed52cbd.png)
([UML Source](serve_short_url.txt))


## Specifics


### Detailed Design


#### Short URL Creation


##### API Gateway

The existing CHIP API Gateway configuration should be leveraged to simplify authentication and integration for the VEText team.


##### Lambda Function

The existing CHIP nodejs Lambda configuration should be used to leverage existing deployment infrastructure & team knowledge. Proposed API:

**Request:**
```
POST /short-urls
{
  url: "https://www.va.gov/health-care/appointment-check-in/?id=95688232-40be-423d-9a57-687445bc1c08",
  expires: "2022-03-01T00:00:00.000-05:00"
}
```

**Response:**
```
200 OK
{
  id: "abcdef",
  short-url: "https://www.va.gov/u/abcdef",
  url: "https://www.va.gov/health-care/appointment-check-in/?id=95688232-40be-423d-9a57-687445bc1c08"
}
```


The hostname from the incoming URL should be checked against a configurable allowlist initially containing only "www.va.gov". If the hostname is not on the allowlist, a 403 should be returned with a message informing the client that a shortened URL cannot be provided for the given hostname.


#### Short URL Serving

The VA.gov reverse proxy should be configured to pass through all requests for `https://www.va.gov/u/{id}` to `https://{S3 bucket URL}/{id}.` 


##### S3 Objects

* Path: will serve as the short URL ID and path
* File: file content, will be left empty
* `x-amz-website-redirect-location:` The long URL
* `x-amz-meta-expires-after: `Requested expiration date (ISO8601 format)
* `tagging:` Added by the Lambda function to implement expiration, see the Object Expiration section for more information.

([S3 Object creation documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html))


##### Object Expiration

In order to limit object hosting costs and avoid storing irrelevant short URLs, S3 objects should be removed once they are no longer necessary. AWS does not directly support setting an expiration date on individual objects, but [LifecycleConfiguration rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) can be configured to enforce differing object lifetimes based on object tags. There will necessarily be limited granularity, since the number of rules that may be created is limited. (The current limit is 1000 rules) The lambda function will assign a `Expires-After-Days `object tag (which do not incur additional cost when added during object creation) with a value from the following list based on the requested expiration date. (Ensuring that the object will be expired only after the requested expiration date)



* 30 (Object storage is billed for a minimum of 30 days)
* 60
* 180
* 366
* 1000

Objects without an assigned tag will be assumed to be permanent. Separately, an [S3 batch operation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html) may be created to be run periodically, check that objects redirect to valid URLs, and remove them if not.

##### Indexing / Analytics

* Shortened URLs should not be tagged or included in analytics
* Shortened URLs should not be indexed

### Code Location

Infrastructure configuration, including S3 bucket & API Gateway configurations:

[https://github.com/department-of-veterans-affairs/chip/tree/master/infra](https://github.com/department-of-veterans-affairs/chip/tree/master/infra)

Shortener Lambda function:

[https://github.com/department-of-veterans-affairs/chip/tree/master/src](https://github.com/department-of-veterans-affairs/chip/tree/master/src)


### Testing Plan



* Lambda function should have 90%+ unit test coverage
* Load testing should be performed at 2X the expected combined usage rate for pre-checkin + check-in in order to ensure that [AWS Service Quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) do not need to increased and that no other performance issues are encountered.
* A backlog issue should be created to confirm that objects are correctly expired after 30 days have passed.


### Logging

Logging should include at least the following:



* URL for which a short URL has been requested
* Expiration date requested
* Expiration tag created
* Short URL generated
* Stack traces for any errors encountered


### Debugging

The service has fairly low complexity and should be relatively simple to debug. Standard practices in place for existing CHIP functionality should transfer well. Assistance will be needed from the VSP operations team if issues specific to the reverse proxy are encountered.


### Caveats

TBD


### Security Concerns


<table>
  <tr>
   <td><strong>Concern</strong>
   </td>
   <td><strong>Resolution</strong>
   </td>
  </tr>
  <tr>
   <td>Redirecting users from trusted to untrusted URLs
   </td>
   <td>App will be architected to reject requests to shorten URLs not underneath www.va.gov
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>The S3 bucket where redirection objects are stored will be accessible only on the private network
   </td>
  </tr>
  <tr>
   <td>Un-trusted/malicious users creating URL redirects
   </td>
   <td>No UI will be provided to create URL redirects, only an access-controlled API on the private network
   </td>
  </tr>
  <tr>
   <td>DoS attacks against API endpoint
   </td>
   <td>API endpoint will only be accessible to trusted applications on the private network
   </td>
  </tr>
  <tr>
   <td>DoS attacks against public URLs under https://www.va.gov/u/
   </td>
   <td>Leverage existing DDOS protections for www.va.gov
   </td>
  </tr>
</table>



### Privacy Concerns

No PII will be stored by this application, only references to existing publicly accessible URLs.


### Open Questions and Risks

TBD


### Work Estimates


<table>
  <tr>
   <td><strong>Scope</strong>
   </td>
   <td><strong>Estimate (working time w/o overhead)</strong>
   </td>
  </tr>
  <tr>
   <td>Infrastructure creation
   </td>
   <td>2 days
   </td>
  </tr>
  <tr>
   <td>Lambda function creation
   </td>
   <td>1 week
   </td>
  </tr>
  <tr>
   <td>Testing (including load testing)
   </td>
   <td>1 week
   </td>
  </tr>
  <tr>
   <td>Overhead (collab cycle communication, working with Platform ops, etc.)
   </td>
   <td>2 weeks
   </td>
  </tr>
</table>



### Alternatives



* Using DynamoDB or another database (NoSQL or otherwise) for a backing store was considered. S3 was selected due to its low cost, high reliability, high scalability and built-in ability to provide URL redirection functionality.


### Future Work



* Avoid using dictionary words in generated short URL IDs to prevent misleading or offensive URLs being sent to Veterans
* Provide API to other VA.gov teams
* Provide UI to allow manual creation of short URLs for  communication campaigns, etc.


## Revision History

| Date  | Revisions made | Author |
|------ | -------------- | ------ |
| Jan 4, 2022 | Initial Draft | Adrian Rollett |
| Jan 5, 2022 | Added requirements from [IA Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33449) | Adrian Rollett |
| Jan 5, 2022 | Add links to diagram source files | Adrian Rollett |
