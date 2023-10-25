# Similarities and differences between categories

Last updated by @tygindraux: October 24, 2023

This document summarizes patterns in the design of the Ask VA form by calling out similarities (and differences) between categories. It's intended to be helpful for our engineers as they start building.

## Key categories to reference

There are a certain categories which we think are a good example of a "type" of category. These can be used as a reference when building categories the same or similar to it.

If we say that a category is the "same" as another, an exception to their sameness will always be the names of the category, topic and subtopics (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md). It is always worth double checking the contact options, too, as these differ between categories and sometimes topics (review [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)).

---

### `Life insurance` aka The Vanilla Flow 🍦

The `Life insurance` category is a good example of what we've referred to as "a vanilla flow." It's straightforward, with few conditionals, and many other categories mimic (or build on) it. This category always has the same contact options available (email, phone and US Mail are all always `ENABLED`) which also makes the contact information section simple.

You can review the [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545) in Mural.

#### Which categories are similar to `Life insurance`?
- `Decision reviews and appeals`
- `Pension`
- `Center for Minority Veterans`
- `Survivor Benefits`, but it includes [Branch of Service] (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Burials and memorials`, but it includes [Branch of Service] (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Disability compensation`, but it includes [Branch of Service] (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Benefits issues outside the U.S.`, well, this category "forks" so if `Topic` = `Disability compensation` then it will mimic the `Disability compensation` category and include [Branch of Service] (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Housing assistance and home loans`, but for certain topics it includes [Select: State/Province/Region]
- `Veteran Readiness and Employment`, but it includes a [Veteran Readiness and Employment information] section
- `Sign in and technical issues`, but because email is the only contact option: the contact preference question is removed, we never collect address and the submission body copy changes
- `Veteran ID Card (VIC)`, but it includes [Branch of Service] (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md)) and because email is the only contact option: the contact preference question is removed, we never collect address and the submission body copy changes
- `Debt`, but it requires authentication and for a certain topic it includes [VA Medical Center search facility]

---

### `Health care` aka Spaghetti and Meatballs 🍝

---

### `Education benefits and work study` aka "I'm Different" 👽

The `Education benefits and work study` category is unique because:
- For most topics (besides `Veteran Readiness and Employment`) in this category, there is no
