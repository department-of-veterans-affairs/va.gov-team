# Debugging the Travel Pay API

Debugging can be tedious since the Travel Pay API is currently only accessible via the VA network and sees VA.gov as an external entity. This means that all traffic must cross the TIC from VA.gov to get a Veterans travel pay resources. It also means debugging the application locally is not an option.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/Travel%20Pay%20Deployment%20Diagram.png)

These steps hopefully make debugging the API more straightforward given current limitations.

## Accessing the vets-api staging terminal
0. Before anything, you must have set up the SOCKS proxy. You should have done this as part of your onboarding. [More information is here](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy)
1. You must have terminal-level access to ArgoCD.
   1. [You can file a request here if you don't currently have it](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D). Reach out to your Program Manager for current COR/VOR rep information if necessary.
   2. Request access for `dev` and `staging` only
3. Navigate to the [staging Argo app](https://argocd.vfs.va.gov/applications/vets-api-staging?view=tree&resource=)<br/><img width="2456" alt="image" src="https://github.com/user-attachments/assets/049566e3-f501-4e30-a359-74e5247783f5">
4. Click on one of the `vets-api-web` pods<br/><img width="311" alt="image" src="https://github.com/user-attachments/assets/e0243215-4398-4e8e-a5e6-7125cdddfccc">
5. Click on the "Terminal" tab at the top. You should see a shell prompt. If you don't see a prompt, make sure you have the right level of access by checking with the [Platform Support Team](https://dsva.slack.com/archives/CBU0KDSB1).

## Making an API call from the rails console (HIGH-LEVEL debugging)
You may simply want to test connectivity from vets-api if there's an issue, or do a sanity check to make sure the service is performing correctly. You may have confidence that the requests to the travel pay API are returning correctly, and want to debug the service-level code. Here's the easy way to make a request to the travel pay API on staging.

First, fire up the rails console and create a new instance of the service (where all the API calls are made):
```sh
bundle exec rails c
# ... wait for init ...
service = TravelPay::Service.new
```

The internal logic of the service method requires a user class, but really, it only requires a user's email and ICN in a class instance that matches the methods of the vets-api `User` class. 

First create a fake user class:

```ruby
class FakeUser
  attr_reader :email,:icn

  def initialize(email, icn)
    @email = email
    @icn = icn
  end
end
```

Then create an instance of the fake user and populate it with your test user values:

```ruby
test_user = FakeUser.new('prof.jimmy.dean@sausage.edu', '123ICNHERE123')
```

Finally, test the service with:
```ruby
service.get_claims(test_user)
```

You should get a list of claims returned with translation and business logic applied to the result. If you need to inspect the response from the API without business logic or translation applied, or if you want to make temporary changes to the underlying requests, read on.

## Making an API call from the rails console (LOW-LEVEL debugging)
In order to call the travel pay API at a lower level, you need to provide all the tokens it requires. We have methods set up in our client that take care of the heavy lifting, if you're debugging a call to the travel pay API, you'll likely need fine-grained control over which tokens to create, allowing for temporary modifications, etc.

First, fire up the rails console and create a new instance of the client (where all the API calls are made):
```sh
bundle exec rails c
# ... wait for init ...
client = TravelPay::Client.new
```

### Requesting an EIS token
The first token the API needs is the EIS token. You can likely call the client method without any trouble:
_(Note: currently the method references VEIS, an outdated platform. This is a naming issue only and will be refactored in department-of-veterans-affairs/va.gov-team#91328)_

```ruby
eis_token = client.request_veis_token
```

You should have an EIS token now.  You will use the value of the EIS token to retrieve a travel pay API token, but first you must also get an STS token for user verification on the API.

### Requesting an STS token
The internal logic of the service method requires a user class, but really, it only requires a user's email and ICN in a class instance that matches the methods of the vets-api `User` class. 

First create a fake user class:

```ruby
class FakeUser
  attr_reader :email,:icn

  def initialize(email, icn)
    @email = email
    @icn = icn
  end
end
```

Then create an instance of the fake user and populate it with your test user values:

```ruby
test_user = FakeUser.new('prof.jimmy.dean@sausage.edu', '123ICNHERE123')
```

Use this instance of a fake user to request an STS token:

```ruby
sts_token = client.request_sts_token(test_user)
```

Now that you have an STS token and an EIS token, you can call the travel pay API to request a travel pay API token.

### Requesting a travel pay API token
Simply call:

```ruby
tp_token = request_btsss_token(eis_token, sts_token)
```

### Calling the resource endpoints on the travel pay API
At this point you should have a travel pay API token you can use to call resource endpoints on the travel pay API. Currently only the `/claims` endpoint is supported. Note that all calls to the travel pay API must include both the EIS token and the travel pay API token. The EIS token gains vets-api access to the platform, and the travel pay API token gains vets-api access to the Veteran's resources on behalf of the Veteran. 

```ruby
claims = client.request_claims(eis_token, tp_token)
```

## Tips
1. If you need to temporarily modify code, or verify a theory, you can paste code directly in the console. Typically I copy the guts of the method and paste it into a new method not attached to the client instance.
2. This is only for testing staging. If you need to test prod, do everything you can to discover what the issue is before requesting access and mucking with the terminal in production.

As the migration from the BTSSS Portal to VA.gov progresses, more endpoints will be supported. The process should remain similar.
