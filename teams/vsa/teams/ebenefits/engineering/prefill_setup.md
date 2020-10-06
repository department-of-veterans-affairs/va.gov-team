## Background
When you need a form to be prefilled with data from one of our back end services it can be hard to know where to start or what files need to be set up. This document provides a basic overview of how prefill works as well as how to get a very basic prefill setup for a specific form.

### How prefill works
In order to make Veteran's lives easier we have a feature that can prefill a form on VA.gov with data so that the Veteran does not have to fill that section of the form out manually. Prefill has a back end requirements as well as front end requirements to get it set up. Let's start with the back end -

#### Back end for prefill
Prefill uses a set of files on the back end to call services that have veteran data, such as VET360 or EVSS, and pass that data to the front end. Since we reuse prefill there is already a decent amount of data you can prefill with very minimal setup, these things are declared in `vets-website/app/models/form_profile.rb` and include -

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

##### A prefill class
Every form needs a prefill class that inherits from the FormProfile model. This file is to tell the back end what data you will need. Your prefill class goes in `vets-website/app/models/form_profiles/` and is named based on your form's ID. If all you need is the data listed above then the most basic implimentation of a prefill class looks like this
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
This is the prefill class for the form with an ID of 28-8832. You can see it inherits from the FormProfile model so it automatically gets access to all of the basic data we listed above. You can also see a few other things that need to be included inside a `metadata` object, those are -

| item | value | notes |
|------|--------|-------|
| version | int | this is the version of prefill for your form this is. This number will generally start with 0 and then icrement as you pull in more data not included in the FormProfile model |
| prefill | boolean | this is if you want to enable prefill for this form. This will generally always be set to true unless you want to turn prefill off |
| returnUrl | string | this is the first real page of your form. Since prefill loads at the beginning of the form this URL is the place that the user will be sent to after prefill is loaded |

This basic prefill class will give you access to all of the basic data we listed above. If you need to load more data than this we will provide a more indepth version of this file later in this document.

#####

