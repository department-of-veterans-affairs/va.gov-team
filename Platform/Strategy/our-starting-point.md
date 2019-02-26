# VSP: Where to next?
This document is a starting point of where, exactly, the platform pivot will take us.

## How we got here

**TL;DR**: We sought to scale the success of vets/va.gov by making it easy for non-DSVA teams to build like us and with us.

The founding vision for the Veteran-facing Services Platform (VSP) [took shape](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Platform-Support/background/old-dsva-platform-project-readme.md#background) in spring 2018:

> Empower VA to continue building and launching human-centered, modern tools at scale without significant external support and guidance.

A solution like the VSP was needed because DSVA’s limited product development capacity would not meet the high demand for quality tools and services available via Vets.gov. VSP would allow DSVA to scale the know-how and technology that created Vets.gov to other teams within the VA without a linear scaling of DSVA capacity.

Over the next ten months, several teams piloted the VSP to build tools and services:

 - Ad Hoc, a contractor serving DSVA, built a form following an [early iteration](https://github.com/department-of-veterans-affairs/va-digital-services-platform-docs) of the VA Digital Services Handbook (first half 2018)
 - AbleVets, a contractor serving another VA office, added [Community Care locations](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Facilities_Locator/community_care) to the existing Facility Locator tool (May 2018 - )
 - Booz Allen Hamilton, a contractor serving another VA office, built [multiple benefits forms](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Platform-Support/research/pilot-3.md) (July 2018 - )
 - Booz Allen Hamilton, a contractor serving another VA office, built a [form for the VET TECH pilot program](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Education%20Benefits/0994) (January 2019 - )

The teams, with exception of VET TECH, have provided useful feedback about their VSP experience. More on that in _What we learned_, below.

Concurrently with the pilots, DSVA produced a significant amount of guides and documentation geared towards “external teams” — those teams who were not directly managed by DSVA staff. Items produced included the [VA Digital Services Handbook](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/), an external team focused [Github repository](https://github.com/department-of-veterans-affairs/vets-external-teams), and [instructional material](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Work%20Practices/Platform-Support) for DSVA to manage the VSP.

## What we learned

**TL;DR**: It’s really hard to enforce the level of product quality DSVA demands if DSVA is not closely involved with day-to-day product management.

## Where we’re headed

**TL;DR**: Only teams with direct DSVA involvement will use the platform. The platform will be focused on enablement, not governance and quality control. Stable products will be moved out of DSVA.

### ...but first, why the platform exists

Because it's hard to deliver quality veteran-facing services at VA. There are two reasons for this.

First, VA has traditionally approached veteran-facing services in a top-down prescriptive way. Stiff technology and experience requirements are derived from legislative mandates, business needs, political considerations, and — only sometimes — the needs of actual veterans. In the end, the products delivered don't align well with the needs of their veteran users.

Second, even if lots of quality user research and discovery is conducted to inform the product, VA's collection of technology systems, infrastructure, and processes will prevent effective delivery. Designing for the needs of veteran users is an excellent start, but if it impossible to meet those needs because of bad technology, the product will also fail to meet veteran needs.

### OK, back to where we're headed

As discussed in *How we got here*, above, the original VSP vision was to address both of these challenges. The Handbook and checkpoint reviews would enforce good, user-centered product development, while the VSP's APIs, security and compliance work, and deep knowledge about VA systems would abstract away technology challenges.

Instead of trying to tackle both of these huge responsibilities, the next iteration of the VSP will focus squarely on the the second one: overcome difficult but common challenges with VA technology to enable the efficient delivery of high-quality veteran facing services. We will abstract away the painful technology, security, compliance, and bureaucratic barriers so product teams can better focus on the user.

Specifically, the VSP team will be responsible for:

- Exposing VA data resources via APIs
- Platform-level security, compliance, and ATO
- Infrastructure, networking, and routing
- Maintaining a development or orchestration environment
- Maintaining a shared set of design, content, and engineering assets
- Call center support
- Performance monitoring

### ...but what about quality?

If the VSP is focused on enablement, who will make sure the teams that are enabled are actually building quality, user-centered veteran-facing services? Two ways:

- **At the product or feature level**, a DSVA team member will be closely advising, supporting, managing, leading, influencing, nudging, etc... product delivery teams responsible for delivering veteran-facing services.
- **At the the va.gov level**, the forthcoming "va.gov global experience team" will be responsible for setting and enforcing standards for *any* veteran-facing service that is accessible via .va.gov.

## Success is... 

**TL;DR**: DSVA continuously delivering high quality veteran-facing tools and services in close collaboration with VA business owners, OIT, and contractors. Development teams are able to easily use existing VA.gov assets and resources. Stable projects graduate from DSVA to the relevant OIT product portfolio and line.

