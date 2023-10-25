# Similarities and differences between categories

Last updated by @tygindraux: October 24, 2023

This document summarizes patterns in the design of the Ask VA form by calling out similarities (and differences) between categories. It's intended to be helpful for our engineers as they start building.

## Key categories to reference

There are a certain categories which we think are a good example of a "type" of category. These can be used as a reference when building categories the same or similar to it.

If we say that a category is the "same" as another, an exception to their sameness will always be the names of the category, topic and subtopics (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md).

### `Life insurance` aka The Vanilla Flow 🍦

The `Life insurance` category is a good example of what we've referred to as "a vanilla flow." It's a good base because it's straightforward, with few conditionals, and many other categories mimic it exactly. This category always has the same contact options available (email, phone and US Mail are all always `ENABLED`) which also makes the contact information section simple.

You can review the [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545) in Mural.

#### Which categories are similar to `Life insurance`?
- `Center for Minority Veterans`
- `Decision reviews and appeals`
- `Burials and memorials`, but it includes the `Branch of Service` field (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Disability compensation`, but it includes the `Branch of Service` field (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Sign in and technical issues`, but since email is the only contact option, the contact preference is removed, we never collect address and the submission text is different
- `Debt`, but it requires authentication and sometimes includes the VA Medical Center search facility component

### `Health care` aka Spaghetti and Meatballs 🍝

### `Education benefits and work study` aka "I'm Different" 👽

The `Education benefits and work study` category is unique because:
- For most topics (besides `Veteran Readiness and Employment`) in this category, there is no
