
## Overview


### Objective

Provide a highly scalable & reliable URL shortening service under the [www.va.gov](www.va.gov) namespace, meeting these requirements:

* An API for creating shortened URLs is available to the CHIP & VEText teams
* Shortened URLs are available under the www.va.gov/c/ path immediately after creation

### Background

Check-in and appointment reminder SMS messages include links to applications under [www.va.gov](www.va.gov). These links are quite long, e.g.:

`https://www.va.gov/health-care/appointment-check-in/?id=95688232-40be-423d-9a57-687445bc1c08`

In order to improve message readability and reduce character counts and messaging charges, these links are shortened to allow sending messages such as this:

`Check in for your VA appointment at https://go.usa.gov/xtxMw`


The URL shortening solution implemented for the Check-in product previously relied on the  [go.usa.gov URL shortening service](https://go.usa.gov/about). Due to rate-limiting (and [no real SLA](https://go.usa.gov/about#policies)) it did not meet the product’s requirements. Additionally, Veterans [want more clarification on who the text message is coming from](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/research-findings.md#participants-want-more-clarification-on-who-the-text-message-is-coming-from) and [reassurance that any links they click on are from the VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/phase2-usability/research-findings.md#making-sure-the-wording-and-link-looked-like-it-came-from-va-helped-veterans-to-trust-it-and-be-more-prone-to-click-on-it).

#### URL Creation

Shortened URLs are created by [invoking a Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html) via [API gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) with the URL to be shortened as the main parameter. The Lambda function generates a short unique identifier and creates a DynamoDB table item with the id, provided URL and creation & expiration dates. Finally, the Lambda function returns the shortened URL (e.g. `https://www.va.gov/c/abcdef`) to the API consumer.

![Short URL Creation](https://user-images.githubusercontent.com/101649/151886705-73118e74-64a2-4b67-9132-085e50398b1b.png)
([UML Source](create_short_url.txt))

#### URL Serving

When a veteran visits a shortened URL such as `https://www.va.gov/c/abcdef,` the [VA.gov reverse proxy](https://vfs.atlassian.net/wiki/spaces/OT/pages/1474594232/Reverse+Proxy) forwards the request to the Lambda endpoint with the same object identifier as a URL parameter, e.g.:


```
https://vpce-{vpce-id}.execute-api.us-gov-west-1.vpce.amazonaws.com/{stage}/shorts-urls/abcdef
```


The Lambda endpoint then serves a 301 redirect to the full URL.

![Short URL Serving](https://user-images.githubusercontent.com/101649/151888006-4ac21b84-ce0a-4907-9a55-c211ca3f1240.png)
([UML Source](serve_short_url.txt))

##### DynamoDB Table items

* id: serves as the short URL ID and path
* longUrl: The long URL
* createdDt: The date of creation (ISO8601 format)
* expiresDt: Requested expiration date (Unix timestamp, set as [DynamoDB TTL attribute](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html))

([DynamoDB Item creation documentation](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html))


##### Object Expiration

In order to limit object hosting costs and avoid storing irrelevant short URLs, DynamoDB Table Items are removed once they are no longer necessary. This is done by using [DynamoDB's TTL functionality to automatically expire items](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html).

### Code Locations

Infrastructure configuration, including DynamoDB Table & API Gateway configurations:

[https://github.com/department-of-veterans-affairs/chip/tree/master/infra](https://github.com/department-of-veterans-affairs/chip/tree/master/infra)

Shortener Lambda functions:

[https://github.com/department-of-veterans-affairs/chip/tree/master/src/urlShortener](https://github.com/department-of-veterans-affairs/chip/tree/master/src/urlShortener)

RevProxy configuration:

[https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_website_server.conf.j2](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_website_server.conf.j2#L211)
[https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/nginx_config_vagov-prod.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/nginx_config_vagov-prod.yml#L13)
