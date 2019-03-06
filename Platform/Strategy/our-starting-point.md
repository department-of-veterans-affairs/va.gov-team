# VSP: Where to next?
This document is a starting point of where, exactly, the platform pivot will take us.

## How we got here


| **TL;DR**|
|:---|
|We learned a lot building vets/va.gov. We want anyone who wants to build quality Veteran-facing services to be able to leverage what we learned.|

### The challenges and what we did about them

It's hard to deliver quality Veteran-facing services at VA.

First, VA has generally approached the delivery of Veteran-facing services in a top-down prescriptive way. Stiff requirements are derived from legislative mandates, business needs, political considerations, and — only sometimes — the needs of actual Veterans. In the end, the products delivered don't align well with the needs of their Veteran users. Moreover, when problems are discovered during development of a new service, launch dates are consistently prioritized above Veteran experience and data integrity.

 - **What we did about it**: Hired product-minded people and empowered them to prioritize user needs and experience first. Partnered with program offices and OIT to build support for user-centered methodologies. Went to the mat to make sure user needs were prioritized over business needs. 

Second, even if significant, high-quality user research and discovery is conducted to inform the product, VA's collection of technology systems, infrastructure, and processes will prevent effective delivery. Designing for the needs of Veteran users is an excellent start, but if meeting those needs because of bad technology is impossible, the product will also fail to meet Veteran needs.

 - **What we did about it**: Built a robust, stable API layer that stands between Veterans and existing VA resources to significantly reduce the chance of blocking a Veteran from a service because of a VA system failure. And we built processes and toolchains that allow for rapid, flexible development while remaining compliant with VA enterprise rules.

### Can we scale it?

Addressing these challenges created yet another: how do we scale? How do we leverage what we've learned and built so that the delivery of quality Veteran-facing services is not constrained by the number of teams DSVA can deploy? Our answer was to start thinking about our body of work as a "platform" that others could leverage to support their own Veteran-facing services.

The platform concept took shape as the Veteran-facing Services Platform (VSP) [took shape](https://github.com/department-of-Veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Platform-Support/background/old-dsva-platform-project-readme.md#background) in spring 2018 with an ambitious mission:

> Empower VA to continue building and launching human-centered, modern tools at scale without significant external support and guidance.

Over the next ten months, several teams piloted the VSP to build tools and services:

 - Ad Hoc, a contractor serving DSVA, built a form following an [early iteration](https://github.com/department-of-veterans-affairs/va-digital-services-platform-docs) of the VA Digital Services Handbook (first half 2018)
 - AbleVets, a contractor serving another VA office, added [Community Care locations](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Facilities_Locator/community_care) to the existing Facility Locator tool (May 2018 - )
 - Booz Allen Hamilton, a contractor serving another VA office, built [multiple benefits forms](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Platform-Support/research/pilot-3.md) (July 2018 - )
 - Booz Allen Hamilton, a contractor serving another VA office, built a [form for the VET TECH pilot program](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Education%20Benefits/0994) (January 2019 - )

The teams, with exception of VET TEC, have provided useful feedback about their VSP experience. More on that in _What we learned_, below.

Concurrently with the pilots, DSVA produced a significant amount of guides and documentation geared towards “external teams” — those teams who were not directly managed by DSVA staff. Items produced included the [VA Digital Services Handbook](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/), an external team focused [Github repository](https://github.com/department-of-veterans-affairs/vets-external-teams), and [instructional material](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Work%20Practices/Platform-Support) for DSVA to manage the VSP.

## What we learned

| **TL;DR**|
|:---|
|It’s really hard to enforce the level of product quality DSVA demands if DSVA is not closely involved with day-to-day product leadership.|

### We're special
Yes, that sounds awful. But what we're really saying is that we, as a USDS team, are empowered to do things differently, ask tough questions, and be brave. We have a good deal of top cover and know that when we fight for something, our colleagues, community, and even some people in high places will back us up. Tactically, this means we can push back on deadline- or stakeholder-driven challenges without fear of reprisal or loss of future work.

This is not the case for the vast majority of teams who might build and deliver Veteran facing services. While they may _want_ to put the needs of their users before the interests of their stakeholders, they are not empowered and incentivized to do so. (And for that matter, neither are their leaders.) We cannot simply give a non-DSVA team a list of our values — values that often run contrary to much of the federal IT operation — and expect that non-DSVA teams can bravely defend them. They simply need more support than that.

### We're too late
By the time a project reaches the VSP and is asked to adhere to DSVA's standards, a good bit of inertia has been built up around requirements, direction, architecture, budget, and timing. Asking a team to adhere to our values and guidelines at this point is too late: the water has already started running over the fall (and, crucially, bad launch dates have likely been shared with leadership). And, again, even if there are well meaning participants in the project who believe in DSVA's values, unless they are empowered to do something about it, they will be run over by launch momentum and tradition.

### We're going to own it anyway
- If we ask people to build on the VSP, we're going to end up owning (or at least closely supporting) the product after it's delivered.
- WBC and DEPO make this even more true.

  
## Where we’re headed


| **TL;DR**|
|:---|
|Only teams with direct DSVA involvement will use the platform. The platform will be focused on enablement, not governance and quality control.|

As discussed above, the original VSP vision was to address both the product and technology challenges of delivering quality Veteran-facing services. The Handbook and checkpoint reviews would enforce good, user-centered product development, while the VSP's APIs, security and compliance work, and deep knowledge about VA systems would abstract away technology challenges.

We learned that shouldering the VSP with both of these responsibilities is not effective. Thus, the next iteration of the VSP will focus squarely on only one: overcome difficult but common challenges with VA technology to enable the efficient delivery of high-quality Veteran facing services. We will simplify the technology, security, compliance, and bureaucratic barriers so product teams can better focus on the user.

Specifically, the VSP team will be responsible for:

- Exposing VA data resources via reliable, well documented APIs
- Infrastructure, networking, and routing
- Performance monitoring and reporting (SLAs)
- Platform-level security, compliance (incl 508), and ATO
- Maintaining a development/orchestration environment
- Maintaining a shared set of engineering assets (e.g. pattern library or SDK)
- Call center updates/integration and analytics reporting

### ...but what about quality?

If the VSP is focused on enablement, who will make sure the teams that are enabled are actually building quality, user-centered Veteran-facing services? Two ways:

- **At the product or feature level**, a DSVA team member will be closely advising, supporting, managing, leading, influencing, nudging, etc... product delivery teams responsible for delivering Veteran-facing services.
- **At the the va.gov level**, the forthcoming "va.gov global experience team" will be responsible for setting and enforcing standards for *any* Veteran-facing service that is accessible via va.gov. This [nifty map](team-layout.png) shows how this global team, the VSP, and teams building Veteran-facing services all work fit together.

## Success is... 

DSVA continuously delivering high quality Veteran-facing tools and services in close collaboration with VA business owners, OIT, and contractors. Development teams are able to easily use existing VA.gov assets and resources. Prioritizing user needs and experience at the VA no longer requires such Herculean efforts that teams are rapidly burned out.

## What would awesome look like?

Product line teams (one for each Hub??) that include:
- DSVA product, design, eng, and strategy leads
- someone from VA OIT and someone from The Biz who know the Hub subject matter, VA politics/bureaucracy map, and best contacts/experts within them
- team of competent contractors
  
These teams build new required functionality and manage it FOREVERRRRR. They don't "maintain," they consistently improve and simplify tools. They report to leadership who measure success based on experience metrics (in concert with the global experience team). They follow the USDS Playbook and Operations Manual. They constantly seek out, support, and reward competent bureaucrats in their Hub subject area who want to prioritize the users and maintain those connections by hosting community events and communication channels (listserv, slack, updates, etc.). They build relationships with VSOs and other advocates of their users. They become trusted, vocal experts on the needs and experience of their users -- and push for progress for them -- in and out of the VA.
