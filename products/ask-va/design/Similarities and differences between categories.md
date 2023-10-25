# Similarities and differences between categories

Last updated by @tygindraux: October 24, 2023

This document summarizes patterns in the design of the Ask VA form by calling out similarities and differences between categories. It's intended to be helpful for our engineers as they start building.

## Key categories to reference

There are a certain categories which we think are a good example of a "type" of category. These can be used as a reference when building categories the same or similar to it.

If we say that a category is the "same" as another, an exception to their sameness will always be the names of the category, topic and subtopics (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md)).

---

### `Life insurance` aka The Vanilla Flow 🍦

The `Life insurance` category is a good example of what we've referred to as "a vanilla flow." It's straightforward, with few conditionals, and many other categories mimic (or build on) it. This category has consistent [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) (email, phone and US Mail are all always `ENABLED`) which makes the contact information section simple.

You can see how this category works here:
- [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545).

#### How do other categories compare to `Life insurance`?
|Category|How it compares to `Life insurance`|
|:--|:--|
|`Center for Minority Veterans`|Same|
|`Decision reviews and appeals`|Same|
|`Pension`|Same|
|`Burials and memorials`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Center for Women Veterans`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Survivor benefits`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Disability compensation`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Sign in and technical issues`|Similar, but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`DEERS (Defense Enrollment Eligibility Reporting System)`|Similar, but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`Veteran ID Card (VIC)`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service); and email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`Housing assistance and home loans`|Similar, but for certain topics it includes [Select: State/Province/Region]|
|`Guardianship, custodianship or fiduciary issues`|Similar, but it includes [Select: Location of residence] and sometimes [Zip code]|
|`Veteran Readiness and Employment`|Similar, but it includes a [VR&E information] section which you can review in [Sketch: VR&E](https://sketch.com/s/d5ab371b-3b77-4fef-a616-aa1345675f7c)|
|`Debt`|Similar, but it requires authentication and for one topic it includes [VAMC search facility] which you can review in [Sketch: Search Facility](https://sketch.com/s/9a9968fd-01c9-4f51-b7be-076b25a3b019)|
|`Benefits issues outside the U.S.`|If `Topic` = `Disability compensation` then it's the same as `Category` = `Disability compensation`; if `Topic` = `Education` then it's the same as `Category` = `Education`|
|`Health care`|Similar, but more complex, jump ahead to [`Health care`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#health-care-aka-spaghetti-and-meatballs-)|
|`Education benefits and work study`|Different, jump ahead to [`Education benefits and work study`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|

---

### `Health care` aka Spaghetti and Meatballs 🍝

The `Health care` category at it's core is similar to The Vanilla Flow, but it's much more complex. Some of the added complexity includes:
- it includes the [Search Facility: VA Medical Center]
- it's [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) differ greatly by topic
- sometimes it includes the Veteran's [Zip code], even if the submitter isn't being contacted by US Mail

You can see how this category works here:
- [Design requirements: Health care](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545)
- [Sketch: Health care](https://sketch.com/s/6a75d0a2-e484-4f1e-8675-ad5747a1a871)
- [Sketch: Search Facility](https://sketch.com/s/9a9968fd-01c9-4f51-b7be-076b25a3b019)

---

### `Education benefits and work study` aka "I'm Different" 👽

The `Education benefits and work study` category is unique because:
- For most topics (besides `Veteran Readiness and Employment`) in this category, there is no
