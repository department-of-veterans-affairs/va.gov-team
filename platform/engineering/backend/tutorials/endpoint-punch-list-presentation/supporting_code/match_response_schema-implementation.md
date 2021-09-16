----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Match-Response-Schema-Implementation.1886781452.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

### Request Spec

```ruby
# vets-api/spec/request/email_request_spec.rb

describe 'GET /v0/profile/email' do
  it 'should match the email schema' do
    VCR.use_cassette('evss/pciu/email') do
      get '/v0/profile/email', nil, auth_header

      expect(response).to match_response_schema('email_address_response')
    end
  end
end
```


### Associated Support Response Schema

```js
// vets-api/spec/support/schemas/email_address_response.json

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "properties": {
    "data": {
      "properties": {
        "attributes": {
          "properties": {
            "email": {
              "type": "string"
            },
            "effective_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}
```

### Derived from Endpoint Response

```js
{
  "data": {
    "id": "",
    "type": "evss_pciu_email_address_responses",
    "attributes": {
      "email": "john@example.com",
      "effective_at": "2018-02-27T14:41:32.283Z"
    }
  }
}
```
