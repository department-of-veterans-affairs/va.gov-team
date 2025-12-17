# Who are the people who have an interest in this form

The simplest version is that our user is someone who is entitled to VA benefits who needs a caregiver. 

* **User**: the person filling out the form on the webpage.
* **Veteran**: the person whose service qualified for VA benefits
* **Claimant**: The person who needs care
* **Caregiver**: a person giving care to the claimant (no info about the caregiver is necessary on the form)

Most often, the **Veteran** and **Claimiant** are the same person (To put it smiply, the Veteran needs a Cargiver for themself).

Sometimes the **Claimant** is the **Child**, **Spouse** or **Parent** of the **Veteran**. In these cases, it's possible/likely that the Veteran is deceased or has a disability that prevents them from being a caregiver to the claimant.

We know (by the nature of the form) that the **Claimant** is someone who needs assistance in personal care, due to a disability. Therefore, we should be especially cognicent of the challenges of this form. It's not unlikely that the Claimant is currently hospitalized.

See [identity](./identity.md) for a description of login/accounts.  TL;DR Anybody can create an accout and log in. If the account is idenitity verified, and the VA has data about the person (as a veteran, dependent or similar) it will be connected to their account. 

## Assumptions Made
In our initial iteration of the form, we assumed that the **User** was the **Veteran**. However, [we received feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127988) from our stakeholders that this should be changed.

## Prefill
How prefill works,technically.

When I:
* go to https://staging.va.gov/pension/aid-attendance-housebound/apply-form-21-2680/introduction and click start
* an API call is made to https://staging-api.va.gov/v0/in_progress_forms/21-2680
  * If a form was previously in progress for that user, the `InProgressForm` is returned from the database.
  * If there is no current `InProgressForm` a new form is pre-filled [source](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/in_progress_forms_controller.rb#L16) and returned as an `InProgressForm`
  * The structure & content of the prefill is defined [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/form_profile_mappings/21-2680.yml) . The documentation for additional attributes we could map isn't great but the code is [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form_profile.rb#L10)


<details>
<summary>Example /v0/in_progress_forms/21-2680 response with newly prefilled data</summary>
 
(some values altered for privacy, but you get the idea)

````JSON
{
    "formData": {
        "veteranInformation": {
            "veteranFullName": {
                "first": "Veronica",
                "last": "Smith"
            },
            "veteranDob": "1942-07-09",
            "phoneNumber": "3176666666",
            "email": "test@gmail.com",
            "veteranAddress": {
                "street": "123 test st line 1",
                "street2": "test line 2",
                "city": "city",
                "state": "AL",
                "country": "USA",
                "postalCode": "12345"
            },
            "veteranSsn": "1231231234"
        }
    },
    "metadata": {
        "version": 0,
        "prefill": true,
        "returnUrl": "/veteran-information"
    }
}
````
</details>


## New proposal

### New Assumptions/Context
(validate with stakeholders)
Both the **Veteran** and the **Claimant** (if the claimant is not the veteran) are likely (certain?) to have had previous contact with the VA. Because of this previous interaction, the Claimiant is likely in VA data sources like MPI (the master person index, where id's such as SSN and file number are stored) and VA Profile (the VA's central location for contact info such as addresses and phone numbers).

The info we prefill the form with is pulled from the logged in user us mapped to the form data here. It is little effort to map it to different attributes/form data. and https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/form_profile_mappings/21-2680.yml  

### Anna's proposal: 
(all parts 100% up for debate)
If the user is logged in an identity-verified we prefill the claimant info with the info of the logged in user. The Claimant is someone we are certain is alive, but the veteran may not be.

reorder the secitons:
* What's your role?
* Claimant info 
  * name, SSN, DOB, AND address, phone, email
* Veteran info (if veteran is not claimint, otherwise duplicate info from claimant section. 
  * name, SSN, File number?, Service number?, DOB

Login is optional for the veteran/claimant portion of the form. The level of effort is small (just update the start link and related messaging).  This allows caregivers to more easily assist the claimant. This is important when the claimant is unable to complete the task or is hospitalized. Requiring 2FA of a hospitalized person with a disability is a lot. There are times when a user would prefer to type all info rather than create/log in with an identity-verifeid account.

