# Similarities and differences between categories

Last updated by @tygindraux: June 25, 2024

This document summarizes patterns in the design of the Ask VA form by calling out similarities and differences between categories.

## Key categories to reference

There are a certain categories which can be used as a reference when building categories the same or similar to it. There are also a few categories which standout from the others.

Note: If we say that a category is the "same" as another, an exception to their sameness will always be the names of the category, topic and subtopics (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md)).

**Jump to:**
- [Life insurance aka The Vanilla Flow](#life-insurance-aka-the-vanilla-flow-) 🍦
- [Health care aka All-Day Lasagna](#health-care-aka-all-day-lasagna-) 🍝
- [Education benefits and work study aka Salad for Breakfast?](#education-benefits-and-work-study-aka-salad-for-breakfast-) 🥗

---

### Life insurance aka The Vanilla Flow 🍦

The `Life insurance` category is a good base, just like [**Vanilla**](https://cooking.nytimes.com/recipes/1016605-the-only-ice-cream-recipe-youll-ever-need). It's straightforward, with few conditionals, and many other categories mimic (or build on) it. Also, all [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) are enabled consistently.

Almost all categories will follow the same pattern as `Life insurance`, which forks depending on whether a question is about:
- myself
- someone else
- or it's a general question

#### How do other categories compare to Life insurance?
|Category|How it compares to `Life insurance`|
|:--|:--|
|`Center for Minority Veterans`|Same|
|`Decision reviews and appeals`|Same|
|`Pension`|Same|
|`Burials and memorials`|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Center for Women Veterans`|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Survivor benefits`|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Disability compensation`|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)|
|`Sign in and technical issues`|Similar but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`DEERS`|Similar but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`Veteran ID Card (VIC)`|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service); and email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`Housing assistance and home loans`|Similar but for certain topics it requires [Select: Location of residence] and sometimes [Zip code]|
|`Guardianship, custodianship or fiduciary issues`|Similar but it requires [Select: Location of residence] and sometimes [Zip code]|
|`Veteran Readiness and Employment`|Similar but it requires [VR&E questions]|
|`Debt`|Similar but it requires authentication and one topic requires [Medical facility]|
|`Benefits issues outside the U.S.`|If `Topic` = `Disability compensation` then refer to `Category` = `Disability compensation`; if `Topic` = `Education` then refer to `Category` = [Education](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|
|`Health care`|Similar but more complex; jump ahead to [Health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#health-care-aka-spaghetti-and-meatballs-)|
|`Education benefits and work study`|It requires authentication; if `Topic` = `VR&E` then it's the same as `Category` = `VR&E` but for all other topics it follow a unique structure; jump ahead to [Education benefits and work study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|

---

### Health care aka All-Day Lasagna 🍝

The `Health care` category builds on the **The Vanilla Flow**. At first glance, it looks simple but it's actually pretty complex - like an **[All-Day Lasagna](https://www.seriouseats.com/no-holds-barred-lasagna-bolognese-pasta-italian-homemade-ricotta)** – because:
- sometimes it requires [Medical facility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#medical-facility)
- it's [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) vary greatly depending on the topic which changes the contact flow and submission page

We've chosen this flow to test with users first, because it's complex. While this category **does not** require authentication, for testing we will include this as a requirement so we can test the most risky path.

---

### Education benefits and work study aka Salad for Breakfast? 🥗

The `Education benefits and work study` category requires authentication. It also forks depending on:
- if `Topic` = `Veteran Readiness and Employment`
- if `Topic` ≠ `Veteran Readiness and Employment` 

#### If Topic = Veteran Readiness and Employment
It will follow the same pattern as `Category` = `Veteran Readiness and Employment`. But, because it sits within the `Education benefits and work study` category in this case, it does require authentication.

#### If Topic ≠ Veteran Readiness and Employment
All other `Topics` in `Education benefits and work study` will follow a different structure. This makes it unique, like having **[Salad for Breakfast](https://www.google.com/search?sca_esv=576631001&q=Is+it+OK+to+have+salad+for+breakfast%3F&sa=X&ved=2ahUKEwjhj9qjoZKCAxXfI0QIHUSdCsIQzmd6BAgZEAY&biw=1803&bih=851&dpr=1)**:
- it does not fork based on what the question is about, like **The Vanilla Flow** 
- it differs depending on whether it's a **business or personal inquiry**
- it includes [School fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#school-fields)
- it only asks for [Social security number or service number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#social-security-number-or-service-number) and [Date of birth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#date-of-birth) if it's a personal inquiry
- email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) which changes the contact flow and submission page
