## CIE URL Shortener Design Doc

Author(s): **Adrian Rollett**

Last Updated: **January 3, 2022**

Status: Draft | In Review | **Approved**

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

Shortened URLs are created by [invoking a Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html) via [API gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) with the URL to be shortened as the main parameter. The Lambda function generates a short unique identifier and creates a DynamoDB table item with the id, provided URL and creation & expiration dates. Finally, the Lambda function returns the shortened URL (e.g. `https://www.va.gov/c/abcdef`) to the API consumer.

![Short URL Creation](https://user-images.githubusercontent.com/101649/151886705-73118e74-64a2-4b67-9132-085e50398b1b.png)
([UML Source](create_short_url.txt))

#### URL Serving

When a veteran visits a shortened URL such as `https://www.va.gov/c/abcdef,` the [VA.gov reverse proxy](https://vfs.atlassian.net/wiki/spaces/OT/pages/1474594232/Reverse+Proxy) forwards the request to the Lambda endpoint with the same object identifier as a URL parameter, e.g.:


```
https://vpce-{vpce-id}.execute-api.us-gov-west-1.vpce.amazonaws.com/{stage}/shorts-urls/abcdef
```


The Lambda endpoint will then serve a 301 redirect to the full URL.

![Short URL Serving](https://user-images.githubusercontent.com/101649/151888006-4ac21b84-ce0a-4907-9a55-c211ca3f1240.png)
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
  short-url: "https://www.va.gov/c/abcdef",
  url: "https://www.va.gov/health-care/appointment-check-in/?id=95688232-40be-423d-9a57-687445bc1c08"
}
```


The hostname from the incoming URL should be checked against a configurable allowlist initially containing only "www.va.gov". If the hostname is not on the allowlist, a 403 should be returned with a message informing the client that a shortened URL cannot be provided for the given hostname.


#### Short URL Serving

The VA.gov reverse proxy should be configured to pass through all requests for `https://www.va.gov/u/{id}` to `https://{vpce endpoint URL}/{stage}/short-urls/{id}.` 


##### DynamoDB Table items

* id: will serve as the short URL ID and path
* longUrl: The long URL
* createdDt: The date of creation (ISO8601 format)
* expiresDt: Requested expiration date (Unix timestamp, set as [DynamoDB TTL attribute](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html))

([DynamoDB Item creation documentation](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html))


##### Object Expiration

In order to limit object hosting costs and avoid storing irrelevant short URLs, DynamoDB Table Items should be removed once they are no longer necessary. This will be done by using [DynamoDB's TTL functionality to automatically expire items](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html).

##### Indexing / Analytics

* Shortened URLs should not be tagged or included in analytics
* Shortened URLs should not be indexed

### Code Location

Infrastructure configuration, including DynamoDB Table & API Gateway configurations:

[https://github.com/department-of-veterans-affairs/chip/tree/master/infra](https://github.com/department-of-veterans-affairs/chip/tree/master/infra)

Shortener Lambda function:

[https://github.com/department-of-veterans-affairs/chip/tree/master/src](https://github.com/department-of-veterans-affairs/chip/tree/master/src)


### Testing Plan



* Lambda function should have 90%+ unit test coverage
* Load testing should be performed at 2X the expected combined usage rate for pre-checkin + check-in in order to ensure that [AWS Service Quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) do not need to increased and that no other performance issues are encountered.
* A backlog issue should be created to confirm that objects are correctly expired after 48 hours have passed.


### Logging

Logging should include at least the following:

* URL for which a short URL has been requested
* Expiration date requested
* ID & full Short URL generated
* Stack traces for any errors encountered


### Debugging

The service has fairly low complexity and should be relatively simple to debug. Standard practices in place for existing CHIP functionality should transfer well. Assistance will be needed from the VSP operations team if issues specific to the reverse proxy are encountered.


### Caveats

TBD


### Security Concerns


| Concern | Resolution |
|-------- | ---------- |
| Redirecting users from trusted to untrusted URLs  | App will be architected to reject requests to shorten URLs not underneath www.va.gov |
| | The DynamoDB table where redirection objects are stored will be accessible only on the private network |
| Un-trusted/malicious users creating URL redirects | No UI will be provided to create URL redirects, only an access-controlled API on the private network |
| DoS attacks against API endpoint | API endpoint will only be accessible to trusted applications on the private network |
| DoS attacks against public URLs under https://www.va.gov/c/ | Leverage existing DDOS protections for www.va.gov |

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

* S3 was initially selected as a backing data store. DynamoDB was later selected due to its greater ease of item expiration, flexibility, and ability to easily avoid over-writing items.

### Future Work

* Avoid using dictionary words in generated short URL IDs to prevent misleading or offensive URLs being sent to Veterans
* Provide API to other VA.gov teams
* Provide UI to allow manual creation of short URLs for communication campaigns, etc.


## Revision History

| Date  | Revisions made | Author |
|------ | -------------- | ------ |
| Jan 4, 2022  | Initial Draft | Adrian Rollett |
| Jan 5, 2022  | Added requirements from [IA Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33449) | Adrian Rollett |
| Jan 5, 2022  | Add links to diagram source files | Adrian Rollett |
| Jan 7, 2022  | Update link prefix from `/u/` to `/c/` | Adrian Rollett |
| Jan 13, 2022 | Updated status to Approved (per Stephen Barrs & Shane Elliot) | Adrian Rollett |
| Jan 31, 2022 | Updated to reflect decision to use DynamoDB as a backing store | Adrian Rollett |
| Feb 15, 2022 | Updated logging section to reflect decision to use DynamoDB as a backing store | Adrian Rollett |
