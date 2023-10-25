# Similarities and differences between categories

Last updated by @tygindraux: October 24, 2023

This document summarizes patterns in the design of the Ask VA form by calling out similarities (and differences) between categories. It's intended to be helpful for our engineers as they start building.

## Key categories to reference

There are a certain categories which we think are a good example of a "type" of category. These can be used as a reference when building categories the same or similar to it.

If we say that a category is the "same" as another, an exception to their sameness will always be the names of the category, topic and subtopics (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md)). It is also always worth double checking the contact options, as these differ between categories and sometimes topics (review [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)).

---

### `Life insurance` aka The Vanilla Flow 🍦

The `Life insurance` category is a good example of what we've referred to as "a vanilla flow." It's straightforward, with few conditionals, and many other categories mimic (or build on) it. This category always has the same contact options available (email, phone and US Mail are all always `ENABLED`) which also makes the contact information section simple.

You can review the [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545) in Mural.

#### Which categories are the SAME as `Life insurance`?
- `Center for Minority Veterans`
- `Decision reviews and appeals`
- `Pension`

#### How do other categories compare to `Life insurance`?
|Category|How it compares to `Life insurance`|
|:--|:--|
|`Burials and memorials`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Center for Women Veterans`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Survivor benefits`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Disability compensation`|Similar, but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Benefits issues outside the U.S.`|This category forks. If `Topic` = `Disability compensation` then it mimics `Category` = `Disability compensation`; if `Topic` = `Education benefits and work study` then it mimics `Category` = `Education benefits and work study`|
|`Housing assistance and home loans`|Similar, but for certain topics it includes [Select: State/Province/Region]|
|`Guardianship, custodianship or fiduciary issues`|Similar, but it includes [Select: Location of residence] and sometimes [Zip code]|
|`Veteran Readiness and Employment` is similar, but it includes a [Veteran Readiness and Employment information] section
- `Sign in and technical issues` is similar, but because email is the only contact option: the contact preference question is removed, we never collect address and the submission body copy changes
- `DEERS (Defense Enrollment Eligibility Reporting System)` is similar, but because email is the only contact option: the contact preference question is removed, we never collect address and the submission body copy changes (review [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md))
- `Veteran ID Card (VIC)` is similar, but it includes [Branch of Service] (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md)) and because email is the only contact option: the contact preference question is removed, we never collect address and the submission body copy changes (review [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md))
- `Debt` is similar, but it requires authentication and for one topic it includes [VA Medical Center search facility]
- `Health care` includes too many differences to call it similar, jump ahead to [`Health care`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#health-care-aka-spaghetti-and-meatballs-)
- `Education` includes too many differences to call it similar, jump ahead to [`Education benefits and work study`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)

---

### `Health care` aka Spaghetti and Meatballs 🍝

---

### `Education benefits and work study` aka "I'm Different" 👽

The `Education benefits and work study` category is unique because:
- For most topics (besides `Veteran Readiness and Employment`) in this category, there is no
