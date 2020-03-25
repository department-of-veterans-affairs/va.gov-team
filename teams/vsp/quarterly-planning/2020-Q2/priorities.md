# VSP in Q2 2020

> **Vision:** *become a model for normalizing user-centered culture in bureaucracies: enabling a diverse set of teams to deliver reliable digital services that are continuously improving and work for people.*

> **Mission:** *provide a framework of systems, tools, processes, documentation, and customer support that together help VFS Teams create successful VA.gov products.*

> **North Star:** *prove that this is possible at VA by creating a self-service ecosystem of customers building VFSs, that can grow sustainably to support the needs of DEPO.*

---

**Everything we do is in service of supporting VFS teams to build successful apps.** We’ve made great headway from where we were in May 2019, but today VFS teams are struggling to use our tools and services without our help, and we’re spending an unscalable amount of time on manual support.

In order to best support VFS teams, especially as they grow in number, we need to allow them to succeed with less manual support/intervention from us. And in order to get to a place where that’s possible, we need to focus on the following themes for Q2 2020:

- **Communication**
- **Documentation**
- **Testing & Isolation**

## More on the Q2 2020 themes

*Note: these are not intended to be prescriptive. Teams can plan work outside of the themes! But teams should look for opportunities to help VSP improve across these themes, and should  keep them front-of-mind when planning/prioritizing work.*

### Communication
*Improve VSP outgoing communications*

The ways in which we communicate with our customers has not kept pace with the scale of our operation. Teams building on the platform often miss announcements and key information in Slack about improvements to platform features, services, and processes. Support threads around similar issues are repeated across teams, and sometimes even within the same team. This leaves VFS teams confused and frustrated, which negatively affects the perception of the platform by those teams as well as VA stakeholders.

We feel good about our inbound communications from VFS teams, particularly in soliciting our users’ pain points, but we haven’t done an equally good job communicating our work back to those teams and their stakeholders.

### Documentation
*Improve documentation quality & processes*

Documentation about platform standards, processes, services, and tools, and about VA.gov products is difficult to parse, search, and maintain. This makes it relatively slow and frustrating for product managers, engineers, and designers to find the info they need to build and deploy apps. Additionally, today we create and edit documents reactively (when we are made aware there’s a problem) rather than proactively (based on a cross-team documentation culture and editorial schedule). The result is an ever-increasing backlog of documentation updates, out of date or non-existent documents, and the aforementioned delays and frustrations.

### Testing & Isolation
*Let VFS teams “own their own destiny” through isolation and robust testing*

Testing: For the size of ecosystem we operate, we don't have much automated testing, quality QA testing, healthy unit testing practices, or "compliance" testing. As a result, overall quality is at risk because VFS teams rely on manual/QA testing, have barriers to creating comprehensive automated tests, and do not sufficiently test their assumptions, and because we're unable to evaluate overall application quality across VA.gov at scale. In order to maintain a platform with many Veteran-facing applications, we need need confidence that apps meet our standards, and that they won't regress or break inadvertently after their “build” teams have moved on due to contract changes or otherwise.

Isolation: Today, the code that VFS teams develop is often entangled with platform code and/or other VFS teams’ code. This makes development more challenging for those teams, and adds risk to the entire platform: one application’s mistake can considerably damage other applications on the platform, or even bring down the entire website. We need to continue increasing isolation of applications from one another, and of applications from the platform. We should be enabling application teams to “own their own destiny” by creating more separation in code and configuration from one application to the next, and making it harder for any one application team’s mistake to cause damage to other applications.

## Example Pain Points by Theme (in the context of 2020 Objectives)

*Note: the pain points below are examples that illustrate how these themes apply within our Objectives. The examples are not comprehensive! They are for illustrative purposes only. Use the research and ideation you’ve done on your teams to decide what pain points are valuable for your team to focus on.*

### Objective 1: Any volume of simultaneous customers have a delightful, self-service, end-to-end experience using the Platform to build on VA.gov.

- Communications example: VFS teams don’t know when new things are added to Design System.

- Documentation example: VFS teams don’t know the easiest avenue for making a proposal for adding to the design system, and whether that’s typically done at the design stage or by an engineer.

-  Testing & Isolation example: Accessibility testing VFSs requires a large amount of VSP’s time.

### Objective 2: Customers use qualitative and quantitative user data to build and iterate on VFSs.

- Communications example: VFS and VSP teams often don’t justify decision-making with metrics/data

- Documentation example: Many VFS and VSP teams don’t have easy to access dashboards of their metrics

### Objective 3: Stability and resiliency of the Platform's systems and teams continue to improve.	

- Documentation example: VFS teams find our stack to be overly complex when it does not need to be, and are frustrated that we don't document those complexities or disseminate the information around those complexities.

- Testing & Isolation example: If VFS teams get an error, it’s super hard to know if it's because of a bug, a trait about that user that has changed, or a system being down.

### Objective 4: All of the Platform's KPIs are easily measured and shared openly.	

- Communications example: VSP doesn’t regularly share updates on overall VSP metrics or initiative metics.

- Documentation example: info about how success is measured for VSP overall and for VSP initiatives is hard to find and/or non-existent.

### Objective 5: All customers comply with the Platform's standards.

- Documentation example: VFS teams would find helpful a GitHub document with rules of engagement with things like "how do I interact with your team", "how do I write tickets in the right way"

- Testing & Isolation example: helping teams with Back End reviews takes a lot of VSP team. 
