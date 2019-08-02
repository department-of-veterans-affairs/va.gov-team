# Welcome to the Veteran-facing Services Platform!

The Veteran-facing Services Platform (VSP) team is here to give you to the tools, systems, and guidance you need to build online experiences on VA.gov that will improve Veteran's lives. As you develop your product, we’ll be your support team helping you through the VA.gov ecosystem, best practices, and processes, including the iterative cycle of ideation and strategy, user testing, launching code, and measuring results.

## What is VA.gov?

The website serving as the single place Veterans can go to find, apply for, track, and manage the benefits they've earned.

## What is a Veteran-facing Services (VFS) team?

You are! Any sprint team building online Veteran-facing experiences is a VFS team.

## What is the VSP?

The VSP is the common infrastructure, technical and non-technical components, and processes that support static and interactive content consumed by Veterans via VA.gov. Major pieces of the VSP include a set of APIs that manage communication between a Veteran user and internal VA resources, an identity and authentication system, the VA.gov Design System, reusable frontend components, a Drupal-based content management system, and an extensive set of documentation and guides.

## How should VFS teams expect to get up and running?

Here's a sample timeline of what you should expect to do as you prepare to start designing / building / iterating in collaboration with VSP.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Administrative/Onboarding/VSP_Onboarding_Timeline.001.png)

## Working in the open

We work in the open and strive to keep as much of our code and other work product in publicly accessible open source repositories. You will have access to our open source (i.e. public) GitHub repository for tracking work and documentation. [Here are some ground rules to make sure you know what _not_ to do when working in a public repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/README.md).

## What should VFS Teams expect to do as they design, build, launch, iterate?

Here are materials you should start familiarizing yourself with to help you learn how to create online experiences the VA.gov way, and how to work with VSP as you go.

### Product

Document what you're building, what problem it's solving, what outcomes you hope it achieves, and how you'll measure success. And track the work necessary to actually deliver the solution.

- [Here's how to write a great Product Outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Product/ProductOutline.md).
- We are undergoing some repository renovations, so this may change in the future, but for now please store your VA.gov Product documentation in the [vets.gov-team repo product folders](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products).
- Teams regularly use ZenHub to better organize GitHub issues. [Here's how the VSP team uses ZenHub to manage its work](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/Onboarding/zenhub_product_management.pdf).

### Design

Create and test visual artifacts that define the features of the solution and that help engineers build out solution in code.

- [Here's how to create great user-centered designs for VA.gov solutions](https://design.va.gov/documentation/designers).
- You'll need reviews from VSP to help you make sure you're on track! [Here's what to expect, and how to request a design review](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/Request-Reviews/request-design-qa.md)

### Content

Create content as a part of every online experience - whether it's button labels or full pages of static introductory copy.

- [Here are the best practices on writing great, plain language content on VA.gov](https://design.va.gov/content-style-guide/)
- You'll need reviews from VSP to help you make sure you're on track! [Here's what to expect, and how to request a content review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Practice%20Areas/Content/content-review-process.md)

### Information architecture

Determine the most intuitive place for Veterans to access your application, the appropriate taxonomy for the URL, and the cross-linking strategy.

- [Here are the best practices on writing URLs](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Information%20Architecture/URL%20Creation%20Process%20and%20Guidelines.md).
- You'll need check ins with VSP to help you make sure you're on track! Reach out to #vfs-platform-support in Slack to schedule a 1:1 with us so we can decide on your cadence for IA check ins.

### Engineering

In tiny iterative chunks and with robust testing, bring the solution to life through code.

- [Here's how to write great front end code for VA.gov solutions](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/).
- [Here's how to write great back end code for VA.gov solutions](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Backend). <!--****This doc needs updating.****-->
- You'll need frequent (usually around weekly) code reviews from VSP to hep you make sure you're on track! [Here's what to expect, and how to request a code review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Practice%20Areas/Engineering/code_review_guidelines.md)

<!--### Research-->

### Accessibility

Test incrementally to make sure your solutions works for everyone.

- [Here's how to write and test FE code for 508 Accessibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Practice%20Areas/Accessibility/508-accessibility-best-practices.md).
- You'll need reviews from VSP to help ensure accessibility of your solutions! [Here's what to expect, and how to request a 508 review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Practice%20Areas/Accessibility/508-accessibility-prelaunch-review.md).

### Analytics and insights

Incorporate analytics into your code so that you can track the health of your solution over time and understand whether it's achieving the outcomes you hoped it would.

<!--- [Here's how to set KPIs to track the success of your VA.gov solutions](/).****This needs a URL****-->
<!--- [Here's how to incorporate analytics into your VA.gov solutions](/).****This needs a URL****-->

VSP is here to help you as you set up KPIs and integrate analytics in your code. Reach out to #vfs-platform-support in Slack to schedule a 1:1 with us so we can help, and to schedule an Analytics review.

<!--[Here's how to request Analytics support](/).****This needs a URL**** You'll need reviews from VSP to help you make sure you're on track! [Here's what to expect, and how to request an Analytics review](/).****This needs a URL****-->

<!--### Call Center-->

### QA

Both manually and through automated tests, ensure your solution is doing what you want it to do.

- [Here's how to QA your solutions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/QA/How%20To%20Coordinate%20QA%20Testing.md)
- VSP is here to help you as you test to ensure your solutions are top quality! Reach out to #vfs-platform-support in Slack to ask questions, or schedule a meeting with us so we can help when you need it.

<!--### Release Planning: Document release phases and the criteria for moving between them. This should include rollout schedule, success/rollback criteria, any pre- and post-launch user testing and monitoring, external documentation and comms. You'll need check ins with VSP to help you make sure you're on track! Reach out to #vfs-platform-support in Slack to schedule a 1:1 with us so we can review and/or help your write your release plan.-->

### ATO

You'll need to ensure the solution you're building has the authority to operate (ATO). [Here's what to expect, and how to request an ATO review](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/Request-Reviews/request-ato-reviews.md).

### Security

Get your solution tested for potential technical security issues / vulnerabilities, focusing particularly on frontend-backend interactions, anything involving certificates or cookies, and any new interactions with dependent backends.

You'll need check ins with VSP to help you make sure you're on track! Reach out to #vfs-platform-support in Slack to schedule a 1:1 with us so we can schedule a security review.

### Privacy

Get your solution tested to look for potential user data issues, including affirming best practices around handling personally identifiable information.

You'll need check ins with VSP to help you make sure you're on track! Reach out to #vfs-platform-support in Slack to schedule a 1:1 with us so we can schedule a privacy review.

### Production readiness / infrastructure

Get your technical architecture tested, to look for potential scaling concerns, dependency analysis, SLO assessment.

You'll need check ins with VSP to help you make sure you're on track! Reach out to #vfs-platform-support in Slack to schedule a 1:1 with us so we can schedule a production readiness / infrastructure review.

---

As always, if you have any questions, the VSP Team is available to help in the #vfs-platform-support channel in Slack.
