# Similarities and differences between categories

Last updated by @tygindraux: October 24, 2023

This document summarizes patterns in the design of the Ask VA form by calling out similarities (and differences) between categories. It's intended to be helpful for our engineers as they start building.

## Key categories to reference

There are a certain categories which we think are a good example of a "type" of category. These can be used as a reference when building categories the same or similar to it.

When we say that a category is the "same" as another, an exception is always the names of the category, topic and subtopic labels (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md).

### `Life insurance` aka The Vanilla Flow 🍦

The `Life insurance` category is a good example of what we've referred to as "a vanilla flow." It's a good base because it's straightforward, with few conditionals, and many other categories mimic it exactly.

You can review the [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545) in Mural.

#### Which categories are the same as `Life insurance`?
- `Center for Minority Veterans`
- `Burials and memorials`, but it includes the `Branch of Service` field (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))
- `Disability compensation`, but it includes the `Branch of Service` field (review [field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md))

### `Health care` aka Spaghetti and Meatballs 🍝

### `Education benefits and work study` aka "I'm Different" 👽

The `Education benefits and work study` category is unique because:
- For most topics (besides `Veteran Readiness and Employment`) in this category, there is no

## List of similar categories

This list is alphabetized by category name. 

|Category|Rule|
|:--|:--|
|`Benefits issues outside the U.S.`|This category forks and is then identical to `Disability compensation` and `Education benefits and work study`.|
|`Burials and memorials`|This category is identical to `Disability compensation`.|
|`Center for Minority Veterans`|This category is identical to `Disability compensation`, but excludes the `Branch of Service field.|
|`Center for Women Veterans`||
|`Debt for benefit overpayments and copay bills`||
|`Decision reviews and appeals`||
|`DEERS (Defense Enrollment Eligibility Reporting System)`||
|`Disability compensation`||
|`Education benefits and work study`||
|`Guardianship, custodianship, or fiduciary issues`||
|`Health care`||
|`Housing assistance and home loans`||
|`Life insurance`||
|`Pension`||
|`Sign in and technical issues`||
|`Survivor benefits`||
|`Veteran ID Card (VIC)`||
|`Veteran Readiness and Employment`||
