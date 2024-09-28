# Comparative analysis: Logged-in account models

**Last updated: February 2, 2024**

### Goal of this document

As VA.gov has continued to integrate more logged-in tools from eBenefits and MHV, the logged-in experience on the site has become increasingly messy. Many tools are buried in content pages, there are multiple logged in homepages (the actual homepage, My VA, and the MHV landing page), and there is increased pressure on My VA and the Profile to manage all aspects of the logged-in experience because there aren't other viable paths.

It's clear we need to be thinking of the logged-in experience more holistically beyond My VA and the Profile. This document aims to cover different models for how we can treat the logged-in experience going forward.

## The retail model

### What is this?

On retail sites, the user is still able to access the same homepage and content as they were before they logged in. Most of the site is still the same with the exception of some navigational changes, like a user menu, and pages where people can manage personal and payment information.

**Why this is significant**: The retail model is closest to how we've currently structured VA.gov, and it's a viable option should we choose to continue in this direction. However, we need to make some serious improvements in how we're implementing this model in order for it to be usable.

#### Pros of this model

- Veterans can go through the learn --> apply --> track --> manage lifecycle multiple times throughout their lives, so "learn + apply" content needs to be accessible at the same time as people are managing their health and benefits.
- We wouldn't have to build a separate "portal", so there is less to maintain.
- Given that this closest to how we've structured VA.gov, it's easier to iterate and improve on this model, especially as we are still in the process of integrating eBenefits and MHV into VA.gov.

#### Negatives of this model

- We're currently utilizing this model, and we're not exactly doing it well.
- There is a lot of content on the website, and in this model, that volume remains as people are trying to manage their health and benefits.

### Example 1: Target.com

#### The homepage

Target's website functions a lot like VA.gov. Whether you're logged in or logged out, the homepage stays the same, and the navigation stays mostly the same with the exception of a user menu.

*Logged-out Target homepage*

![Logged-out Target homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Target_Logged%20out_Homepage.png)

*Logged-in Target homepage*

![Logged-in Target homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Target_Logged%20in_Homepage.png)

#### The user menu

One thing that Target does somewhat differently than VA.gov is that its sign-in CTA is also a menu. Once a user logs-in, the menu expands to include additional, personalized pages. This is more of a utility menu than an "about me" menu; some of the CTAs in the menu are personalized while others are not.

*Logged-out sign-in menu*

![Logged-out sign-in menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Target_Logged%20out_Sign%20in%20menu.png)

*Logged-in sign-in menu*

![Logged-in sign-in menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Target_Logged%20in_Sign%20in%20menu.png)

#### The Account page

The account page acts as both a dashboard and a menu to other personalized tools. It is not a duplicate of the user menu, but there is significant overlap.

*The Account page*

![The Account page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Target_Account%20page.png)

#### The Settings page

Target doesn't have a page called "Profile." Instead, the site refers to this information as "Settings." The Settings overview acts as both navigation and as a preview of the information within the profile. This might be something we want to consider for our own profile.

![The Account page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Target_Settings%20page.png)

### Example 2: Amazon.com

### The homepage

Unlike Target, Amazon's homepage does change when a user signs in. However, the overall layout of the page remains the same. Generic content blocks are replaced with personalized content around previous purchases and suggested items.

*Logged-out homepage*

![ogged-out homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Amazon%20homepage_logged%20out.png)

*Logged-in homepage*

![ogged-in homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Amazon%20homepage_logged%20in.png)

### User menu and navigation

Amazon's navigation largely remains the same with the exception of updates to the user menu. Like Target, it has options in both the logged-in and logged-out states, though there are more expansive options once a user logs in.

Of note, this menu is really long, which could feel noisy to users. Alternatively, users might find it comprehensive. We should be mindful of menu length and scannability on VA.gov.

*Logged-out user menu*

![*Logged-out user menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Amazon%20user%20menu_logged%20out.png)

*Logged-in user menu*

![*Logged-in user menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Amazon%20user%20menu_logged%20in.png)

### Account page

Amazon has an account page which lists every major tool on the site. It's much longer than the user menu, and could arguably be viewed as noisy and overwhelming. However, it really is a one-stop shop. Users most likely don't have to go anywhere else to manage personal details of their Amazon account..

Unlike Target, Amazon doesn't preview high-level personalized info on this page (eg. address, name, payment info).

*Account page*

![Amazon Account page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Amazon%20account%20page.png)

## The "portal" model 

### What is this?

This is the more traditional model we see with bank and health insurance websites or SaaS apps. The "logged out" website is more informational, while the user's account is managed on a separate website with a unique dashboard, IA, and navigation. Depending on the site, it may or may not be clear to get back to the main "marketing" site.

#### Pros of this model

- This allows for more focus for both the "marketing" site and the account site. Each site has unique content and navigations that are tailored to what users need in each space.
- This model has proven effective as far as MHV goes. Users find the site super usable. While we would want a single site for both health and benefits, we know people like the portal model and find it easier to navigate than VA.gov.

#### Negatives of this model

- We've literally spent -- and are spending -- years integrating eBenefits and MHV into VA.gov. Creating another site -- even if it was part of the `www.va.gov/` structure -- feels like it would only make things more confusing at this point. While something like this might make sense once eBenefits and legacy MHV are turned off, it's not a path that feels viable any time soon.

### We already have a bunch of comparative analyses

We don't need yet another comparative analysis of the portal model. Here are some of the ones we already have:

- [Personalization 2.0 Discovery: Comparative Analysis | Summer 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/comparative-analysis/README.md)
- [Logged-in Homepage Redesign: Comparative Analysis | Spring 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/comparative-analysis.md)
- [My VA action items: Comparative analysis | May 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2021-action-items-discovery/action-items-comparative%20analysis.md)

### The big concern: Going back-and-forth between the logged-in and logged-out experiences

The biggest concern stated internally when we talk about having a more unique portal experience is that people need to be able to readily get back and forth between "learn and apply" content and "track and manage" tasks, as veterans may apply for different benefits over the course of their lives. But it's common to see toggles in navigation to get between multiple sites. Here are some examples:

*BCBS portal -- Logged in nav*

The logged-in nav on the BCBS website has a prominent CTA to get people back to the marketing site.

![BCBS portal -- Logged in nav](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/BCBS_Logged%20in%20nav.png)

*Gap.com*

Gap has a section of their navigation that allows you to seamlessly navigate between their multiple brands.

![Gap multi-site nav](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/product-management/images/Gap_multi%20site%20nav.png)

## What we can learn from the mobile app IA

There is a lot we can learn from the mobile app IA and navigation. Since the mobile app has the benefit of being able to focus on track-and-manage tools only, it's much easier to test, iterate, and improve on the navigation. Fortunately, we can still learn lessons from this work for the web even though the web has to consider "logged out" content. 

[This is a summary of research completed in 2023 by the mobile team on the app's IA and navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/2023%20VA%20Mobile%20App%20-%20IA%20%26%20Navigation%20Project%20Summary.pdf). A lot of these learnings could be applied to the web and might be a good place for us to start.

Additionally, I think these learnings can be applied to the site regardles of whether we eventually pursue the portal model or whether we stick with something closer to the retail model. We should not be afraid to apply mobile app learnings to the web without having to start from scratch or reinvent the wheel.
