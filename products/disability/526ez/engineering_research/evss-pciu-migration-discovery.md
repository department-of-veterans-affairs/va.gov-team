# EVSS - PCIU Migration Discovery

PCIU (Personal Contact Information Update) is an external API service within EVSS which is used by vets-api to manage a particular user's (you guessed it) personal contact information, such as addresses, emails and phone numbers. Since the goal is to eventually sunset EVSS, all calls in vets-api to PCIU must be removed and (possibly) replaced by another source- most likely [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-profile). 

Although the initial focus of the [investigation](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64189) was for migration within the 526ez application, it became apparent that PCIU was being called by most, if not ALL, applications within vets-api, via the [Pre-fill](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill#VAFormsLibrary-HowtoworkwithPre-Fill-Vets-APIWork) functionality. As it works right now, even if an application is not intentionally using pre-fill, they wind up calling the default pre-fill (and PCIU) anyway by calling the InProgressController. 

Additionally, some applications appear to call out to PCIU *directly* from vets-website, albeit *not* 526ez (as far as we can tell). 

Below is a breakdown of PCIU usage within vets-api, in this general order:
1. Global pre-fill usage
2. 526ez-specific pre-fill usage
3. PCIU_Address usage (and its front-end tie-ins)
4. Open questions/wrap-up

# Pre-fill
[Pre-fill](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill#VAFormsLibrary-HowtoworkwithPre-Fill-Vets-APIWork) is essentially a framework (or pattern) shared between vets-website and vets-api that establishes a standardized way of pre-filling any webform elements from an external source. By default, this includes a user's contact information (the focus of *this* doc), identity information, and military information- but can be used to pre-fill any other customized information a particular application might need. This is basically done by deriving a [custom class](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profile.rb#L191) for your particular application/form from the `FormProfile` base class, and then overriding the `def pre-fill` [method](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profile.rb#L191). From there, you can call into any custom or existing service you want, and then call into the base-class' default pre-fill with the `super` keyword, [if desired](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles/va_526ez.rb#L81). This is the pattern that many of [applications](https://github.com/department-of-veterans-affairs/vets-api/tree/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles) within vets-api follow- including 526ez.

## Global/default/base-class pre-fill

This [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1704228836578/aad7d6a83429dcc089f8d6e7d6a764f0aea4536f?sender=u0fedae1437598fcbe2f47409) describes how the default (or base-class) pre-fill gathers contact information [(code)](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profile.rb#L313). Starting with an empty JSON tree, it
1. Calls out to the VA Profile API via the ContactInformation service (via get_person) and populates the JSON tree from the "bio" section of the response
2. Calls out to the MVI SOAP service and adds in *address* info
3. Calls out to the **EVSS PCIU** API (via GET /emailAddress) and adds in *email address* info
4. Calls out to the **EVSS PCIU** API (via GET /primaryPhoneNumber) and adds in *phone number* info

The main takeaways here are
1. VA Profile is already being used to populate as much contact info as that system has for the user (given the way it's currently being used)
2. The user must have a "vet360 id" in order to fetch that contact info from VA Profile (formerly known as Vet360)
3. Calls are being made to EVSS by default for many of vets-website/vets-api applications using pre-fill (around 30)

## 526ez pre-fill

As mentioned above, the 526ez pre-fill does call the base-class pre-fill method via `super`- but not before doing its *own* custom [call](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles/va_526ez.rb#L79) of contact information via [`initialize_veteran_contact_information`](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles/va_526ez.rb#L130). Within *that* method, we are calling VA Profile once, then EVSS PCIU 3 times, before calling the base class's pre-fill. The base class's pre-fill always calls VA Profile + 2 EVSS PCIU calls- unless any of those calls were just made (except the PCIU email call, which will always run again). However, because of the way we're using this, we are making those 2 EVSS PCIU calls in the base class anyway. So all told, we're making 1 VA Profile and 5 EVSS PCIU calls per user pre-fill.

# PCIU_Address

[PCIU_Address](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/lib/evss/pciu_address/service.rb) is a service within vets-api that manages calls to EVSS PCIU API related to address information. The 526ez pre-fill [uses](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles/va_526ez.rb#L135) it to [fetch](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles/va_526ez.rb#L164) address information, before parsing it into a common address object based on the address type: domestic, international or military.

As with global/default pre-fill, the 526ez application appears *not* to be the only consumer of PCIU_Address. Within vets-api, there are references to it from
1. [Tests](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/spec/lib/mhv_ac/client_spec.rb#L48) related to MHV account creation, and
2. the [AddressesController](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/controllers/v0/addresses_controller.rb)

Though it is more difficult to track down all usage of the AddressesController's endpoints within vets-website, various tests within the project (like [this](https://github.com/department-of-veterans-affairs/vets-website/blob/4d48aae81e266379427a34e80f21ae31a22aefd9/src/applications/letters/tests/02-keyboard-only.cypress.spec.js#L17) one, presumably for the Letters application) employ/intercept calls to AddressController endpoints. Nothing in vets-website suggests direct usage by the 526ez application (aside from the aforementioned pre-fill tie-in). However, it is entirely possible that 526ez is using the results from these calls indirectly, from other areas within the site.

## 526ez mailing_address Pre-fill

As mentioned above, 526ez has its own custom pre-fill which is called before the base class's. There, [`initialize_veteran_contact_information`](https://github.com/department-of-veterans-affairs/vets-api/blob/81e325eebaa92b3fbb1a9a938a9c60c8572fd454/app/models/form_profiles/va_526ez.rb#L130) is called to grab contact information. Here is the flow of that method, focusing in on `mailing_address`:
1. Calls out to VA Profile and populates `mailing_address` with `addresses/address_pou` from the response (if it exists, and user is "loa3")
2. Then, it calls `get_common_address`, which calls the `get_address` method of PCIU_Address (which in turn calls the EVSS PCIU `/mailingAddress` endpoint)
3. Based on the `address` attribute of the PCIU response (which is apparently an address *type*- either DomesticAddress, InternationalAddress, or MilitaryAddress), it will populate the same standard address attributes (like 'city', 'state', etc) with different response values
4. If the `mailing_address` was found in VA Profile, then *that* address is used- otherwise, PCIU is used (which is good!)

Note, however, that **PCIU_Address is called regardless of whether or not VA Profile information came back** (even though it is the preferred address)

## Using Argo Production Terminal to call PCIU and VA Profile

The below walks through how to call out to PCIU_Address and VA Profile to obtain a particular user's contact information. Note that the below only works if the user has submitted their 526ez, as it uses the auth_headers stored in their submission record.

### calling PCIU_Address

Do a log search in DataDog, filtering on "@client_ip: x.x.x.x" and "user_uuid". Make sure that the user_uuid that results is associated with a submission action. 
1. Use the user_uuid to grab the Form526Submission record
2. Use the submission record's auth_headers to initialize the EVSS PCIUAddress service
3. Call get_address on the service

```ruby
uuid = '1485238c5FAKEGUID4bdfc5db827eb78'
s = Form526Submission.find_by(user_uuid: uuid)
service = EVSS::PCIUAddress::Service.new(nil, s.auth_headers)
service.get_address
```

### calling VA Profile

1. Use the user_uuid to grab the ICN from the Account record
2. Use the ICN to query VA Profile's Person service for the vet360_id
3. Use the vet360_id to initialize the VA Profile ContactInformation service
4. Call get_person on the service

```ruby
account = Account.find_by(idme_uuid: uuid)
icn = account.icn
aaid = CGI.escape("#{icn}#{Identity::Parsers::GCIdsConstants::ICN_ASSIGNING_AUTHORITY_ID}")
encoded_icn = "#{Identity::Parsers::GCIdsConstants::VA_ROOT_OID}/#{aaid}"
service = VAProfile::Person::Service.new({})
raw_response = service.perform(:get, encoded_icn)
vet360_id=raw_response.body['bio']['vet360_id'].to_s
user = OpenStruct.new({vet360_id: vet360_id})
service = VAProfile::ContactInformation::Service.new(user)
service.get_person
```

526ez prefill populates `mailing_address` from the VA Profile response from the `addresses` array where `@address_pou = "CORRESPONDENCE"`

# Open Questions/Thoughts
There are many open questions, and we can expect this list to grow. So feel free to add to the section below (and for that matter, the section above 😜)

## VA Profile related
VA Profile potentially delivers a wealth of information about a vet. So why are they calling EVSS PCIU to grab email and phone in the default pre-fill?

-   ~~Calls to VA Profile require a vet360_id associated with the user. Is VA Profile an opt-in service?~~
    -   ~~If so, perhaps the problem is that not enough vets have opted in to make it a comprehensive solution?~~ NOT opt-in. Should be enough.
-   Maybe when pre-fill was initially implemented, VA Profile was lacking in this information and PCIU was used to fill the gaps.
    - If so, the PCIU calls could be (carefully) removed. "Carefully" meaning every team in charge of all of the above forms look into it and sign off on removing it
    - Perhaps there are different/better API calls now in VA profile since this was implemented

