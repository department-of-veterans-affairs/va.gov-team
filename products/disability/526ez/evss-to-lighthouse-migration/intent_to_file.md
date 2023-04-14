
# Intent to File Tech Discovery

Lighthouse Team: Dash

### General structure of Intent to File related code in `vets-api`:
-   Configuration file: lib/evss/intent_to_file/configuration.rb
    -   A partially hardcoded string for the destination
-   Service definition: lib/evss/intent_to_file/service.rb
    -   operative methods are defined
	    - `get_intent_to_file`
	    - `get_active(itf_type)`
	    - `create_intent_to_file(itf_type)`
-  intent_to_files_controller.rb  
    - uses a standard Rails controller, calls on the service's methods
-  lib/evss/intent_to_file/intent_to_file_response.rb
    - helps shape it for the front end to consume? 	
-  lib/evss/intent_to_file/response_strategy.rb
    - for communicaiton with Redis?
-  All references to an Intent to File's `type` in 526ez seem to use "compensation". I presume other types are used by other forms.

### Basic structure of how `vets-api` is currently sending/recieving via EVSS:
- `V0/IntentToFilesController#index`
	- method: :get
	- body: ''
	- performs a get fetching from EVSS.
	- Sometimes the response triggers a redirect to the `submit` actiona
	- All the information that index is sending to EVSS is in the Headers
	- EVSS sends back an array of IntentToFiles in the `body` of the JSON response:
```
{
	"intent_to_file" => [
		{
			"creation_date"=>"2014-07-28719:53:45.810+0000"
			"expiration_date"=>"2015-08-28719:47:52.786+0000"
			"id"=>"1"
			"participant_id"=>"1",
			"source"=>"EBN"
			"status"=>"active"
			"type"=>"compensation"
		},
		{
			"creation_date"=>"2014-07-28719:53:45.810+0000"
			"expiration_date"=>"2015-08-28719:47:52.786+0000"
			"id"=>"1"
			"participant_id"=>"1",
			"source"=>"EBN"
			"status"=>"claim_received"
			"type"=>"compensation"
		},
		{
			"creation_date"=>"2014-07-28719:53:45.810+0000"
			"expiration_date"=>"2015-08-28719:47:52.786+0000"
			"id"=>"1"
			"participant_id"=>"1",
			"source"=>"EBN"
			"status"=>"expired"
			"type"=>"compensation"
		}
	]
}
```

- `V0/IntentToFilesController#active`
	- filtered on the frontend ([code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/reducers/itf.js))?
	- Looking at the route in `vets-api` (`'intent_to_file/:type/active'`), I don't see this route exercised on the frontend.
- `V0/IntentToFilesController#submit`
	- method: :post
	- body: **"**{**\"**source**\"**:**\"**VETS.GOV**\"**}**"**
	- EVSS sends back a single "intent_to_file" object in the `body` of the JSON response:
```
{
	"intent_to_file"=>{
		"creation_date"=>"2014-07-28T19:53:45.810+0000",
		"expiration_date"=>"2015-08-28T19:52:25.601+0000",
		"id"=>"1",
		"participant_id"=>1,
		"source"=>"EBN",
		"status"=>"active",
		"type"=>"compensation"
	}
}
```

### What I guess we'll send/receive via Lighthouse:
- Warning, I think [Lighthouse docs](https://developer.va.gov/explore/benefits/docs/claims?version=current) are source of truth
- for Index action
	- /veterans/{veteranId}/intent-to-file/{type}
	- veteranId = note how [SSN is used](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/auth_headers.rb#L29) in headers for EVSS. I imagine we don't want this in a URL string, but I would have said we don't want it in the headers either so, `¯\_(ツ)_/¯`
	- type = "compensation"
	- Also note "Generated curl" in Lighthouse docs: `{ "type": "compensation", "claimantSsn": "001122334" }'`
- for Active action
	- I'm unsure about this one. 
	- Looks like it's used to retreive Intent to File record from Redis.
		- Perhaps this also leverages EVSS/IntentToFile/ResponseStrategy which is configured to use Redis
	- I couldn't tell if/where the `active` route/controller action is used by `vets-website`.
	- Note, `/veterans/{veteranId}/intent-to-file/{type}` is documented as returning "last active", so is that the best match for this?
	- How many items does "active" return from EVSS? How many is `vets-api` expecting?
	- Can I assume there's a good reason this action isn't a :show method? Is some related filtering done on the frontend?
- for Submit action
	- submit 699 form?
	- Note examples in `/modules/claims_api...`
		- [post_examples dir](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/config/post_examples/0966.json)
		- [form dir, V0](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/app/swagger/claims_api/forms/form_0966_v0_example.json)
		- [form_dir, V1](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/app/swagger/claims_api/forms/form_0966_v1_example.json)

### Headers:
- Auth headers are doing some interesting/important work in here. Maybe this is how users are identified/scoped in EVSS or wherever the data is retreived from?
- I learned this by looking into the EVSS::Service#perform method
```
def perform(method, path, body = nil, headers = {}, options = {})
  merged_headers = @headers.to_h.merge(headers)
  super(method, path, body, merged_headers, options)
end
```
- A lot of PII is sent here. Note SSN used as a unique identifier for a user. Perhaps this is used to query in EVSS to find the right Intent to Files.
```
pry(#<EVSS::DisabilityCompensationForm::Service>)> @headers.to_h

=> {
	"va_eauth_csid" => "DSLogon",
	"va_eauth_authenticationmethod" => "DSLogon",
	"va_eauth_pnidtype" => "SSN",
	"va_eauth_assurancelevel" => "3",
	"va_eauth_firstName" => "Mark",
	"va_eauth_lastName" => "Webb",
	"va_eauth_issueinstant" => "2023-04-10T16:35:46Z",
	"va_eauth_dodedipnid" => "1013590059",
	"va_eauth_birlsfilenumber" => "796104437",
	"va_eauth_pid" => "13367440",
	"va_eauth_pnid" => "796104437",
	"va_eauth_birthdate" => "1950-10-04T00:00:00+00:00",
	 ...
}
```

## Engineer Meeting Questions
-   In the VA docs, there are three endpoints listed for ITF; Were we using three in the vets-api?
	- **One URL, "#{Settings.evss.url}/wss-intenttofile-services-web/rest/intenttofile/v1"**
		- [source](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/intent_to_file/configuration.rb)
	- **Different REST methods used with that URL (GET, POST)**
		- [source](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/intent_to_file/service.rb)
-   Should we use an abstraction layer vs full-blown lighthouse? **Yes**
-   Is `participant_id` important?
	-   Shows up in docs for `/intenttofile/{type}`, but not in code
	-   **I don't see it used in vets-api's implementation of intent to file.**
-   Is this eVSS service being used anywhere else in the application (`service.get_intent_to_file`)? **No**
