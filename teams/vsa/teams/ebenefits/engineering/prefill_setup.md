## Background
When you need a form to be prefilled with data from one of our back end services it can be hard to know where to start or what files need to be set up. This document provides a basic overview of how prefill works as well as how to get a very basic prefill setup for a specific form.

### How prefill works
In order to make Veteran's lives easier we have a feature that can prefill a form on VA.gov with data so that the Veteran does not have to fill that section of the form out manually. Prefill has a back end requirements as well as front end requirements to get it set up. Let's start with the back end -

#### Back end for prefill
Prefill uses a set of files on the back end to call services that have veteran data, such as VET360 or EVSS, and pass that data to the front end. Since we reuse prefill there is already a decent amount of data you can prefill with very minimal setup, these things are declared in `vets-api/app/models/form_profile.rb` and include -

- Full Name (first, middle, last)
- Date of birth
- Gender
- SSN
- Address (street, street2, city, state, country, postal code)
- Home phone
- Mobile phone
- Email

When you create your set of prefill files you will inherit from this model so you get these things for free. If you need more data than is listed here you still need to set up the same files but you will add more to the files to get that extra data. Let's look at the basic setup to get access to these items listed above as it will give you an idea of what files are always needed for prefill on the back end.

**A basic prefill setup on the back end**
<p>If you only need to prefill the data listed above you will need</p>

1. A prefill class
2. A form profile mapping
3. A unit test
4. To edit the form_profile.rb file
5. Set prefill to true for your form

These files are detailed below

##### 1. A prefill class

>Every form needs a prefill class that inherits from the FormProfile model. This file is to tell the back end what data you will need. Your prefill class goes in `vets-api/app/models/form_profiles/` and is named based on your form's ID. If all you need is the data listed above then the most basic implimentation of a prefill class looks like this
```ruby
# frozen_string_literal: true

class FormProfiles::VA288832 < FormProfile
  def metadata
    {
      version: 0,
      prefill: true,
      returnUrl: '/claimant-information'
    }
  end
end
```
>This is the prefill class for the form with an ID of 28-8832. You can see it inherits from the FormProfile model so it automatically gets access to all of the basic data we listed above. You can also see a few other things that need to be included inside a `metadata` object, those are -

| item | value | notes |
|------|--------|-------|
| version | int | this is the version of prefill for your form this is. This number will generally start with 0 and then icrement as you pull in more data not included in the FormProfile model |
| prefill | boolean | this is if you want to enable prefill for this form. This will generally always be set to true unless you want to turn prefill off |
| returnUrl | string | this is the first real page of your form. Since prefill loads at the beginning of the form this URL is the place that the user will be sent to after prefill is loaded |

>This basic prefill class will give you access to all of the basic data we listed above. If you need to load more data than this we will provide a more indepth >version of this file later in this document.

##### 2. A Form profile mapping

>Every form needs a YAML file that maps the data that is being loaded by your prefill class to what the data is called in the schema on the front end. This file will go in `vets-api/config/form_profile_mappings/` and should be named for the ID of your form. Here is the basic format of this file -
```yaml
claimantAddress: [contact_information, address]
```
>This very basic form profile mapping will map the `address` that is taken from the `contact_information` inside the FormProfile model and map it to the `claimantAddress` on the front end. You may wonder what the `contact_information` is and why we need it. If you take a look at `vets-api/app/models/form_profile.rb` you can see there is a an attribute ` attribute :contact_information, FormContactInformation`. That attribute is instantiating the class in this file called `FormContactInformation`. In that class you can see listed out what we get from there -
```ruby
class FormContactInformation
  include Virtus.model

  attribute :address, FormAddress
  attribute :home_phone, String
  attribute :us_phone, String
  attribute :mobile_phone, String
  attribute :email, String
end
```
>Since in our form profile mapping we are making use of the `address` we need to access it through the `contact_information` class. For any contact information it is reccomended that you use this `contact_information` class as it already loads this data for you. Let's say you wanted to also prefill the user's email and map it to a field on the front end called `claimantEmail` you would add this line to your form profile mapping -
```yaml
...
claimantEmail: [contact_information, email]
```
>That would tell the front end to map the email to the `claimantEmail` field when the prefill data is loaded.

##### 3. A unit test
>Just like any other code added to our codebase we need to add unit tests to make sure it functions as we want. The unit tests for prefill should be added to `vets-api/spec/models/form_profile_spec.rb`. Let's stick with our basic setup and see what a basic unit test for the `claimantAddress` would look like -
```ruby
let(:v28_8832_expected) do
    {
      'claimantAddress' => {
        'street' => street_check[:street],
        'street2' => street_check[:street2],
        'city' => user.va_profile[:address][:city],
        'state' => user.va_profile[:address][:state],
        'country' => 'USA',
        'postal_code' => user.va_profile[:address][:postal_code][0..4]
      }
    }
  end
```
>You can see this is simply testing the address fields that come for free with the FormProfile model we indicated earlier inside `contact_information`. In order to make sure that your unit tests run you also need to add your form ID to the `each do` loop somewhere near the end of this file that looks like this -
```ruby
%w[
          22-1990
          22-1990N
          22-1990E
          22-1995
          22-5490
          22-5495
          40-10007
          1010ez
          22-0993
          FEEDBACK-TOOL
          686C-674
          28-8832
        ].each do |form_id|
          it "returns prefilled #{form_id}" do
            expect_prefilled(form_id)
          end
        end
```
You can see in sticking with our simple example we have added our form id `28-8832` to the list, this will make sure our unit tests get run.



##### 4. Edit the form_profile.rb file
>Once you have these other files in place and are ready for your prefill to be run you need to tell the `form_profile.rb` file about it. Inside that file you will see this object, named `FORM_ID_TO_CLASS`, of all the form IDs that have prefill running and you need to add your form ID to it -
```ruby
FORM_ID_TO_CLASS = {
    '1010EZ' => ::FormProfiles::VA1010ez,
    '20-0996' => ::FormProfiles::VA0996,
    '21-526EZ' => ::FormProfiles::VA526ez,
    '22-1990' => ::FormProfiles::VA1990,
    '22-1990N' => ::FormProfiles::VA1990n,
    '22-1990E' => ::FormProfiles::VA1990e,
    '22-1995' => ::FormProfiles::VA1995,
    '22-5490' => ::FormProfiles::VA5490,
    '22-5495' => ::FormProfiles::VA5495,
    '21P-530' => ::FormProfiles::VA21p530,
    '21-686C' => ::FormProfiles::VA21686c,
    '686C-674' => ::FormProfiles::VA686c674,
    '40-10007' => ::FormProfiles::VA4010007,
    '21P-527EZ' => ::FormProfiles::VA21p527ez,
    '22-0993' => ::FormProfiles::VA0993,
    '22-0994' => ::FormProfiles::VA0994,
    'FEEDBACK-TOOL' => ::FormProfiles::FeedbackTool,
    'MDOT' => ::FormProfiles::MDOT,
    '22-10203' => ::FormProfiles::VA10203,
    '28-8832' => ::FormProfiles::VA288832
  }.freeze
```
>You can see we added our form ID for our 28-8832 example to the end along with the form profile class name we declared in our prefill class in step 1. You also need to make another edit to the `form_profile.rb` file in the object just above the one we just edited. This object is called `ALL_FORMS` and looks like this -
```ruby
ALL_FORMS = {
    edu: %w[22-1990 22-1990N 22-1990E 22-1995 22-5490
            22-5495 22-0993 22-0994 FEEDBACK-TOOL 22-10203],
    evss: ['21-526EZ'],
    hca: ['1010ez'],
    pension_burial: %w[21P-530 21P-527EZ],
    dependents: ['686C-674'],
    decision_review: ['20-0996'],
    mdot: ['MDOT'],
    vre_counseling: ['28-8832']
  }.freeze
```
>Again you can see that we added our form ID to the end of that object. You will also see that we named it `vre_counseling`, you will need to give your form ID a name that makes sense for your form. Our form is for counseling for Veterans so `vre_counseling` is what we went with but you can put whatever name you want in here, just make sure it makes sense with the form you are working on and that you remember it for the next step.

##### 5. Set prefill to `true` for your form
>The last thing you need to do is to set prefill to `true` for your form inside `vets-api/config/settings.yml`. Here you will need whatever you named your form in the previous step and you will add it to the `settings.yml` file like this -
```yaml
vre_counseling:
  prefill: true
```
>In sticking with our same example where we named our form `vre_counseling`, we have set `prefill` to `true` for that form. You should now be able to test your prefill. It should be noted that much of the prefill will NOT work on your localhost and generally needs to be tested on staging.
