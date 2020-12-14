# VSP Documentation Tool Solution Recommendation
## Confluence Cloud with Add-ons

Date: May 2020

Authors: VSP’s Content & Information Architecture Team — Gretchen Maciolek, Megan Kelley

### Table of Contents
- [Summary](#summary)
- [Problem statement and background](#problem-statement-and-background)
- [Benefits](#benefits)
- [Costs](#costs)
- [Analysis of alternatives](#analysis-of-alternatives)
- [Recommendation](#recommendation)
- [Additional information](#additional-information)

## Summary

VSP’s Content & Information Architecture team recently investigated a series of documentation tooling solutions to replace the current va.gov-team GitHub repository and associated documentation sources. Our recommendation is to implement [Confluence Cloud](https://www.atlassian.com/software/confluence) (with add-ons for improved search and publishing) as the source of truth for building on and in support of VA.gov. We hypothesize that Confluence Cloud will enable the following: 

- Significant manual support time savings
- Data-driven content strategy that meets the needs of our users
- Empowered, autonomous, and delighted product teams
- Better collaboration, and as a result, more complete documentation
- High quality, consistent products and experiences across VA.gov
- Improved scalability of the platform

We know that we can begin to address some of our documentation pain points independent of a new documentation tool. However, working in GitHub, we will always be compensating for an inadequate feature set, forcing us to aim for adequate documentation resources instead of exceptional. In order to achieve the levels of scale and efficiency that we’re looking for, we recommend moving forward with Confluence Cloud.

## Problem statement and background

VSP has recently taken on many initiatives to improve documentation, with the goal of providing robust resources for teams building on VA.gov. Despite this, we still see that our documentation resources are not enabling teams to build seamlessly and iteratively on their own. In Q1 2020, VSP’s Service Design team’s NPS research found that 20-30% of respondents highlighted problems with documentation as key points of frustration. As summed up by one VFS Engineer during NPS research in February, 2020, “I as an engineer should not have to track down one person in the entire organization to ask a question about something that can easily be documented in a simple, well organized fashion.”

We approached our recent research with the following frame: first, how might we improve the user experience for a core set of VSP-owned documentation in order to create a set of introductory user guides for building on VA.gov? Then, how might our recommended solution scale to support product-based and other VA.gov documentation?

Over the past year, we have: 

- Audited and migrated documentation in GitHub from [vets.gov-team](https://github.com/department-of-veterans-affairs/vets.gov-team) to [va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team) (and [va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive))
- Completed a documentation [discovery sprint](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/documentation-site/research/discovery-sprint-12-2019) in Q4 2019; launched a consolidated [documentation homepage MVP](https://department-of-veterans-affairs.github.io/va.gov-team/)
- Updated the contents of key VSP-owned documentation (such as improving user guides for [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) and [Sentry](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-configuration.md))

Limitations of our current documentation tool, GitHub, prevent us from addressing issues related to findability, navigation, collaboration, and analytics. The initiatives above have provided short-term relief to VFS teams, given us a clearer sense of the substance, structure and workflow of our current documents, and helped frame our research goals in tool selection.

## Benefits

We hypothesize that Confluence Cloud with add-ons for improved search and publishing will enable the following:

### Significant manual support time savings

VSP team members spend substantial amounts of time providing white-glove support to VFS and DEPO team members. Analysis of all support requests fielded by VSP’s Frontend Tools team in April 2020 showed that up to 25% of support interactions could have been answered or avoided with more robust documentation. 

### Data-driven content strategy that meet the needs of our users

Confluence’s built-in analytics will give us insight into the most popular content and allow us to prioritize our documentation efforts to make the biggest impact on the end-user experience and reduce support requests.

### Empowered, autonomous, and delighted product teams

Investing in a documentation tool that improves findability of documents will empower VFS teams to find self-service answers to their questions and confidently build on the platform more independently. As one VFS Engineer described during NPS research in January, 2020, “People are generally helpful in answering any questions they can, but the lack of up to date documentation tends to prevent developers from being as self sufficient as they could be.” 

### Better collaboration and as a result, more complete documentation

GitHub has a steep learning curve for non-technical contributors. Confluence has a non-technical publishing flow and a WYSIWYG editor that will enable more team members building on and in support of VA.gov to easily create and maintain documentation. 

GitHub also lacks an easy/integrated way to provide feedback on documentation. Confluence has inline commenting for internal collaboration on documents in progress as well as commenting on public-facing documents.

### High quality, consistent products and experiences across VA.gov

VFS teams need easy access to consistent information to build consistent products. Teams writing documentation need to be able to easily surface all content related to a topic to maintain accuracy and consistency. Our current documentation lacks search capabilities and options to help teams navigate to the information they need. Confluence’s search and navigation features make it easier to manage the findability and consistency of documents. 

### Improved scalability of the platform

Confluence is designed to enable knowledge sharing and collaboration across large organizations. While other tools we evaluated work well for small to mid-sized teams dedicated to publishing end-user documentation, Confluence stood out as the best solution for a large number of users and a variety of document types.

## Costs

### Software costs

|Users|[Confluence Cloud Premium](https://www.atlassian.com/software/confluence/pricing)|Search integration ([Algolia](https://www.algolia.com/pricing/))|Publishing add-on ([Scroll Viewport - k15t](https://marketplace.atlassian.com/apps/1211636/scroll-viewport-for-confluence?hosting=server&tab=overview))|Total annual cost estimate|
|---|---|---|---|---|
|**50 users**|$500/month|>$499/month|approx. $350/year|**$12,350+/year**|
|**300 users**|$2,325/month|>$499/month|approx. $1,500/year|**$35,400+/year**|

**Users** — users are defined as team members with a Confluence account, which will be required to a) contribute to documentation, and b) view non-public information. Non-users will still be able to view and comment on public information.

**Search integration (Algolia)** — one strong option for improved search capability is Algolia. The product’s Pro tier is $499/month, but we may require an Enterprise plan. More info on Algolia in our [Recommendation](#search-integration-algolia).

**Publishing add-on (Scroll Viewport - k15t)** — this product is soon to be released for Confluence Cloud; we don’t yet have pricing information. The estimates shown here are based on costs for Scroll Viewport on Confluence Server. More info on Scroll Viewport in our [Recommendation](#publishing-add-on-scroll-viewport---k15t). 

### Additional costs

Regardless of our recommended tool, we assume that VSP’s Content & Information Architecture team will need to continue dedicating significant time and resources to improving documentation. Confluence Cloud will not fix everything on its own, but it will enable us to address documentation pain points to an extent that is not possible with our current tools. 

## Analysis of alternatives

We considered a broad range of alternative documentation tool solutions before recommending Confluence Cloud. [View our Confluence recommendation presentation here.](https://docs.google.com/presentation/d/1FUMIikoxUuMAKd5NhHcOHd6OvP9bnukhALsW6xG5_vY/edit#slide=id.p1)

### GitHub

This is the current solution for most of our docs. However, it lacks even the most basic features we need to address documentation pain points (such as robust navigation options, analytics, support for redirects, and a WYSIWYG editor) and is not customizable or extendable without integrating with other tools.

### Gatsby

The VSP Frontend Tools team uses Gatsby, a static site generator, to publish a [set of documents](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/). We considered whether this could be scaled as a tool for all of our documentation, but decided against it because it:

- Requires technical knowledge to update content
- Keeps breaking
- Would require a lot of custom development to add features that we want
- Could not scale to support all document types or foster collaboration

### Other off-the-shelf documentation tools

In addition to Confluence, we considered other off-the-shelf documentation tools, such as GitBook, Document360, Guru, Slab, and Nuclino. There were a few tools that met many of our requirements, but our need for public-facing docs and the ability to support collaboration among a large number of users made Confluence the best choice.

### VA’s Confluence instance hosted by MAX.gov

VA has an existing instance of Confluence Server, managed by OIT, hosted by MAX.gov. Based on our evaluation of current MAX.gov Confluence examples, this option does not meet our requirements because:

- The majority of our docs need to be public-facing; we are not sure whether this would be allowed via the MAX.gov Confluence
- We would be dependent on OIT for user management, upgrades, security and scalability
- VA and MAX.gov appear to be using an older version of Confluence. The end-user experience is clunky, and the editing experience lacks Confluence’s recent editing and publishing workflow improvements
- Many other government organizations use this solution, so there may be dependencies that limit how we can extend and modify it based on our use cases 

## Recommendation

We recommend pursuing [Confluence Cloud](https://www.atlassian.com/software/confluence) (paired with improved search and publishing capability) as a documentation solution for building on and in support of VA.gov because: 

- It meets our feature needs, and there are many add-ons to customize Confluence beyond the basic feature set
- VSP test users gave it positive reviews in our prototype activity
- It is low-risk — Confluence is a well-known tool with a huge market presence; we are familiar with its minimum functionality and believe it will be a reliable solution

### Why Cloud?

Confluence Cloud will:

- Promote agility by minimizing dependencies on internal engineering resources for hosting, administration, upgrades, security, backups and maintenance
- Offer integrations with other productivity and collaboration tools such as Slack
- Enable seamless scalability and future-proof our documentation. Confluence Cloud updates seamlessly (without the need for upgrading server versions), handles the procurement of inventory and storage space, and responds to dynamic spikes in demand and team growth.

### Search integration ([Algolia](https://www.algolia.com/))

Poor search functionality is a known issue with Confluence (although even Confluence’s native search is better than GitHub’s). In the prototype-based VSP user research we conducted as part of this tooling effort, numerous team members brought this up, stating: “Confluence has some of the worst search algorithms I have ever come across,” and “The search doesn’t seem like it’ll be useful.” 

Because we know that findability is such a high severity pain point in our current documentation, we recommend improving Confluence’s search functionality off the bat. One strong contender for improved search software is Algolia, a leader in hosted search solutions. Algolia would allow our team to continuously iterate on search results, ensuring that the search tool was surfacing the most useful, relevant content. Paired with strong information architecture and navigation, users would finally be able to find the information they need when they need it. Algolia is not a Confluence add-on specifically; it would require some custom development work to integrate, but its pricing would not be tied to our Confluence user count. 

### Publishing add-on ([Scroll Viewport - k15t](https://www.k15t.com/software/scroll-viewport))

Confluence is typically used as an enterprise wiki, with the look and feel of internal docs (which can easily be made publicly accessible). In order to launch a set of published, trustworthy user guides for building on VA.gov (composed primarily of VSP-owned documentation), we recommend using an add-on that renders pages in a more polished format. Scroll Viewport is the leading choice for this functionality, although it is not yet available for Confluence Cloud. If it does not become available on our timeline, we will explore alternative add-ons or (minimal) custom development work to achieve the same effect.

## Additional information

### GitHub Integration

Currently, VSP uses GitHub and ZenHub for documentation, project management, and software development. By moving documentation to Confluence we will not lose any commonly used existing functionality; GitHub pull requests used in software development will still be easily linked to ZenHub issues, and vice versa.

If we choose to link to pull requests or issues in Confluence (which is not a common practice in our current documentation), there are multiple Confluence add-ons that we could explore, including [GitHub links for Confluence](https://marketplace.atlassian.com/apps/1216106/github-links-for-confluence?hosting=cloud&tab=overview) and [GitHub Macros for Confluence](https://marketplace.atlassian.com/apps/1216734/github-macros-for-confluence?hosting=cloud&tab=overview).

### High-Level Implementation Strategy

As described in our [Problem Statement](#problem-statement-and-background) above:

> We approached our recent research with the following frame: first, how might we improve the user experience for a core set of VSP-owned documentation in order to create a set of introductory user guides for building on VA.gov? Then, how might our recommended solution scale to support product-based and other VA.gov documentation?

Accordingly, our high-level implementation strategy is to migrate VSP-owned, VFS-facing documentation to Confluence as a set of user guides for teams using the platform to build on VA.gov. We would use this subset of documentation to determine best practices for migration process, Confluence configuration, and documentation style.

Our long-term implementation strategy, which we hope to begin by Q4 2020, also includes migration of product documentation to Confluence — which is typically owned by DEPO and/or VFS teams. We would tentatively pilot this initiative with the VSA Benefits and Memorials 1 Team, which has expressed interest in beginning to use Confluence as soon as possible. 

### Notes

This document is not a comprehensive resource about all things documentation — or even all documentation tooling considerations. Some areas that we have not addressed here are: 

- Level of effort and timeline to implement 
- Required maintenance including ongoing documentation updates and access management
- Alternatives to Algolia and Scroll Viewport
- Licensing and software acquisition

Please reach out to us in [#vsp-content-ia](https://dsva.slack.com/channels/vsp-content-ia) to dig into these or other questions. 
