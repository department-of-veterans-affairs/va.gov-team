# Similarities and differences between categories

Last updated by @tygindraux: October 26, 2023

This document summarizes patterns in the design of the Ask VA form by calling out similarities and differences between categories. It's intended to be helpful for our engineers as they start building.

## Key categories to reference

There are a certain categories which can be used as a reference when building categories the same or similar to it. There are also a few categories which standout from the others.

Note: If we say that a category is the "same" as another, an exception to their sameness will always be the names of the category, topic and subtopics (review [label names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Category%2C%20topic%20and%20subtopic%20labels.md)).

**Jump to:**
- [Life insurance aka The Vanilla Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#life-insurance-aka-the-vanilla-flow-) 🍦
- [Health care aka All-Day Lasagna](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#health-care-aka-all-day-lasagna-) 🍝
- [Education benefits and work study aka Salad for Breakfast?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-salad-for-breakfast-) 🥗

---

### Life insurance aka The Vanilla Flow 🍦

The `Life insurance` category is a good base, just like [**Vanilla**](https://cooking.nytimes.com/recipes/1016605-the-only-ice-cream-recipe-youll-ever-need). It's straightforward, with few conditionals, and many other categories mimic (or build on) it. Also, all [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) are enabled consistently.

Almost all categories will follow the same pattern as `Life insurance`, which forks into four sections in Chapter 3, depending on whether a submitter is asking:
- a general question
- about me, the Veteran
- for the dependent of a Veteran
- on behalf of a Veteran

**Review this category here:**
- [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545)

#### How do other categories compare to Life insurance?
|Category|Designs|How it compares to `Life insurance`|
|:--|:--|:--|
|`Center for Minority Veterans`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423841903/b5f4ac174ecd2c6a7236c2970bc97476abc5acb6?sender=u65f0a75fc7c68f2a5a2a9545)|Same|
|`Decision reviews and appeals`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695421855881/eaff66893d6614b6f0aeed98d3f123fb45590d93?sender=u65f0a75fc7c68f2a5a2a9545)|Same|
|`Pension`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695422502368/f4c9cf4b788f8be2660499eb5c6ba8884a7d3100?sender=u65f0a75fc7c68f2a5a2a9545)|Same|
|`Burials and memorials`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695422416355/228d8450b3e2223983af7673b01c075a3431969e?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 4 under Veteran's information|
|`Center for Women Veterans`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423727972/89be825fd5829e2f41d93b954c3825874bb34bbf?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 4 under Veteran's information|
|`Survivor benefits`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695422283045/9d97acacc87d9e75422bed095ab4ec8696b080a2?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 4 under Veteran's information|
|`Disability compensation`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695421580785/3d4402af0e54171e6a0e1d960af8541a03a72a6a?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 4 under Veteran's information|
|`Sign in and technical issues`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695421958998/8d93b3f9965d545328d87d21c26ce07fdab09475?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) which changes the contact flow and submission page|
|`DEERS`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423457665/307c32dd808585f1a301cbd1e592779bcade1298?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) which changes the contact flow and submission page|
|`Veteran ID Card (VIC)`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423186242/9e017ae2dcf868895ee55de0001a2be63c4fe6ee?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it includes [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 4 under Veteran's information; and email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) which changes the contact flow and submission page|
|`Housing assistance and home loans`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695421473196/3b66f71634f1852f5b04ff1f3568a59c4e3b03c8?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but for certain topics it includes [Select: State/Province/Region] in Chapter 1|
|`Guardianship, custodianship or fiduciary issues`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423629959/3ae0c6dbf7987b3112ec342979bc435587a7d7d7?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it includes [Select: Location of residence] and sometimes [Zip code] in Chapter 3|
|`Veteran Readiness and Employment`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695422106245/fd54c37370c6791b0ce61a8b520c18d854822ad5?sender=u65f0a75fc7c68f2a5a2a9545), [Sketch](https://sketch.com/s/d5ab371b-3b77-4fef-a616-aa1345675f7c)|Similar but it includes a [VR&E information] section in Chapter 3|
|`Debt`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695421760239/250859298bf4b9df29cb4b83d795fdef9357d752?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it requires authentication and one topic includes [VAMC search facility] in Chapter 3|
|`Benefits issues outside the U.S.`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695420964179/a81eb6245b84bc4d9af46933d2f212055b9a061b?sender=u65f0a75fc7c68f2a5a2a9545)|If `Topic` = `Disability compensation` then see `Category` = `Disability compensation`; if `Topic` = `Education` then see `Category` = [Education](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|
|`Health care`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695420621139/974c12030d0214f2d550329fd820f7aebe9c08fb?sender=u65f0a75fc7c68f2a5a2a9545), [Sketch](https://sketch.com/s/6a75d0a2-e484-4f1e-8675-ad5747a1a871)|Similar but more complex; jump ahead to [Health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#health-care-aka-spaghetti-and-meatballs-)|
|`Education benefits and work study`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695420804280/52101311ba374dec5e60aa33de63a2fe7f16102b?sender=u65f0a75fc7c68f2a5a2a9545), [Sketch](https://sketch.com/s/7e494761-be10-4aef-a268-a45a02fbc5c3)|It requires authentication; if `Topic` = `VR&E` then it's the same as `Category` = `VR&E` but for all other topics it follow a unique structure; jump ahead to [Education benefits and work study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|

---

### Health care aka All-Day Lasagna 🍝

The `Health care` category builds on the **The Vanilla Flow**. At first glance, it looks simple but it's actually pretty complex - like an **[All-Day Lasagna](https://www.seriouseats.com/no-holds-barred-lasagna-bolognese-pasta-italian-homemade-ricotta)** – because:
- sometimes it includes [Search Facility: VA Medical Center] in Chapter 3
- it's [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) vary greatly depending on the topic which changes the contact flow and submission page
- sometimes it includes the Veteran's [Zip code] in Chapter 4, even if the submitter isn't being contacted by US Mail

We've chosen this flow to test with users first, because it's complex. While this category **does not** require authentication, for testing we will include this as a requirement so we can test the most risky path.

**Review this category here:**
- [Design requirements: Health care](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695423328470/f9c5091530a62f5966b628c21cb9b85ace70d62a?sender=u65f0a75fc7c68f2a5a2a9545)
- [Sketch: Health care](https://sketch.com/s/6a75d0a2-e484-4f1e-8675-ad5747a1a871)
- [Sketch: Search Facility](https://sketch.com/s/9a9968fd-01c9-4f51-b7be-076b25a3b019)

---

### Education benefits and work study aka Salad for Breakfast? 🥗

The `Education benefits and work study` category requires authentication. It also forks depending on:
- if `Topic` = `Veteran Readiness and Employment`
- if `Topic` ≠ `Veteran Readiness and Employment` 

#### If Topic = Veteran Readiness and Employment
It will follow the same pattern as `Category` = `Veteran Readiness and Employment`. But, because it sits within the `Education benefits and work study` category in this case, it does require authentication.

#### If Topic ≠ Veteran Readiness and Employment
All other `Topics` in `Education benefits and work study` will follow a different structure. This makes it unique, like having **[Salad for Breakfast](https://www.google.com/search?sca_esv=576631001&q=Is+it+OK+to+have+salad+for+breakfast%3F&sa=X&ved=2ahUKEwjhj9qjoZKCAxXfI0QIHUSdCsIQzmd6BAgZEAY&biw=1803&bih=851&dpr=1)**:
- in Chapter 3:
  - it does not fork into the same four sections as **The Vanilla Flow**
  - it asks the submitter's relationship to the Veteran in order to determine whether it's a **business or personal relationship**
  - it includes [Select: State of school]
  - if it's a personal relationship, it includes [Select: State of residency]
  - if it's a business relationship, it includes [Search Facility: School Facility]
- in Chapter 4:
  - there is always only one contact section (the submitter)
  - it only asks for [Social security number or service number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#social-security-number-or-service-number) and [Date of birth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#date-of-birth) if it's a personal inquiry
  - email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md) which changes the contact flow and submission page

**Review this category here:**
- [Design requirements: Education](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695420804280/52101311ba374dec5e60aa33de63a2fe7f16102b?sender=u65f0a75fc7c68f2a5a2a9545)
- [Sketch: Education](https://sketch.com/s/7e494761-be10-4aef-a268-a45a02fbc5c3)
- [Sketch: Veteran Readiness and Employment](https://sketch.com/s/d5ab371b-3b77-4fef-a616-aa1345675f7c)
- [Sketch: Search Facility](https://sketch.com/s/9a9968fd-01c9-4f51-b7be-076b25a3b019)
