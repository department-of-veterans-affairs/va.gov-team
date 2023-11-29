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
- [Design requirements: Life insurance](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700063756788/72670fdab3f8f6bf7a9b4b59d0bc96885608918c?sender=u65f0a75fc7c68f2a5a2a9545)

#### How do other categories compare to Life insurance?
|Category|Designs|How it compares to `Life insurance`|
|:--|:--|:--|
|`Center for Minority Veterans`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700681068377/d45b87a65eb0a2308949c4c86695b543324252d8?sender=u65f0a75fc7c68f2a5a2a9545)|Same|
|`Decision reviews and appeals`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700687965180/a3875cf264c0f9293c67654dd109971abecc3a0c?sender=u65f0a75fc7c68f2a5a2a9545)|Same|
|`Pension`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700681087433/f12a2ef2299eeebaed6f3da02d3585e0c2e4ba11?sender=uaa6c41f47fccd86fc83a1520)|Same|
|`Burials and memorials`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700681918661/292f9317bbc88fa58456a2b2aaea565464f69609?sender=uaa6c41f47fccd86fc83a1520)|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 3|
|`Center for Women Veterans`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700682377361/693f9f66f848f53ba70a60952e5d650c8342500e?sender=uaa6c41f47fccd86fc83a1520)|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 3|
|`Survivor benefits`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700682596827/35419d796d08aae4be477c757c2339dd650b5b9d?sender=uaa6c41f47fccd86fc83a1520)|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 3|
|`Disability compensation`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700665321262/ecbd998a4c3280d1c9d76a25260ad90734d30c21?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 3|
|`Sign in and technical issues`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700687522533/f5bdaf9b228f2c19fbda6af4baa89034eaeaae33?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`DEERS`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700851002177/dbadaa09e06d5f8cad1a0067006888f61b831d28?sender=uaa6c41f47fccd86fc83a1520)|Similar but email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`Veteran ID Card (VIC)`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700850927706/d23f897f8f9e2b631b253a5f17f067a529252df4?sender=uaa6c41f47fccd86fc83a1520)|Similar but it requires Veteran's [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service) in Chapter 3; and email is the only [contact option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)|
|`Housing assistance and home loans`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701117311051/8b99e5576fe6cb0a286fa42833f4b50248989771?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but for certain topics it requires [Select: Location of residence] and sometimes [Zip code] in Chapter 3|
|`Guardianship, custodianship or fiduciary issues`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700859946081/060b903e1864d1055010c494f356eed2640d3a81?sender=uaa6c41f47fccd86fc83a1520)|Similar but it requires [Select: Location of residence] and sometimes [Zip code] in Chapter 3|
|`Veteran Readiness and Employment`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701121444304/b06b56febcd8874fd0099b2feae21d58fc7a9e05?sender=u65f0a75fc7c68f2a5a2a9545), [Sketch](https://sketch.com/s/d5ab371b-3b77-4fef-a616-aa1345675f7c)|Similar but it requires [VR&E questions] in Chapter 3|
|`Debt`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700670888392/bce8c37fc9392cf1417d6c98d2cd03ccb8bf646b?sender=u65f0a75fc7c68f2a5a2a9545)|Similar but it requires authentication and one topic requires [Medical facility] in Chapter 3|
|`Benefits issues outside the U.S.`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1701193604766/a97a76fdcc5a1934a27a8654687e6d5092a1e87c?sender=u65f0a75fc7c68f2a5a2a9545)|If `Topic` = `Disability compensation` then refer to `Category` = `Disability compensation`; if `Topic` = `Education` then refer to `Category` = [Education](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|
|`Health care`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699913320432/e9ee21db6c75f92c3d29ad007979f91aa5d695d4?sender=uaa6c41f47fccd86fc83a1520), [Sketch](https://sketch.com/s/8cf9349c-9860-4f4e-9ae2-ac819b1ab030)|Similar but more complex; jump ahead to [Health care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#health-care-aka-spaghetti-and-meatballs-)|
|`Education benefits and work study`|[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1700082547481/b8b93399a46930674772074a326f21d5d1840609?sender=uaa6c41f47fccd86fc83a1520), [Sketch](https://sketch.com/s/7e494761-be10-4aef-a268-a45a02fbc5c3)|It requires authentication; if `Topic` = `VR&E` then it's the same as `Category` = `VR&E` but for all other topics it follow a unique structure; jump ahead to [Education benefits and work study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Similarities%20and%20differences%20between%20categories.md#education-benefits-and-work-study-aka-im-different-)|

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
