# VA.gov accessibility specialist onboarding guide (WIP)
Jamie Klenetsky Fay `last updated May 24, 2024`


> [!IMPORTANT]
> This guide is for you if:
> - You work on VA.gov (as an employee of VA or a contracting agency/consultancy), AND
> - You are an accessibility specialist, OR
> - You spend at least 50% of your time on accessibility-related work
> 
> If you don't fit this description, visit [Accessibility on VA.gov](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov).


<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->
## Table of contents

   * [Welcome to VA.gov!](#welcome-to-vagov)
   * [Get on board!](#get-on-board)
   * [VA.gov's approach to accessibility](#vagovs-approach-to-accessibility)
   * [Your role](#your-role)
   * [Join the Accessibility Community of Practice (CoP)](#join-the-accessibility-community-of-practice-cop)
   * [Contacts](#contacts)
   * [Improve your skills](#improve-your-skills)

<!-- TOC end -->

## Welcome to VA.gov!
We're thrilled to welcome you to VA.gov. VA cares deeply about accessibility, and the work you do here will help Veterans nationwide.

### Just breathe.
As you start your journey at VA, you may feel overwhelmed. _This is normal._ Accessibility is vital, but often difficult, work.

Remember, it's ok to...

- say "I don't know"
- ask for more clarity
- stay at home when you feel ill
- say you don't understand
- ask what acronyms stand for
- ask why, and why not
- forget things
- introduce yourself
- depend on the team
- ask for help
- not know everything
- have quiet days
- have loud days, to talk, joke and laugh
- put your headphones on
- say "No" when you're too busy
- make mistakes
- sing
- sigh
- not check your email out of hours
- not check your email constantly during hours
- just Slack it
- walk over and ask someone face-to-face
- go somewhere else to concentrate
- offer feedback on other people's work
- challenge things you're not comfortable with
- say yes when anyone does a coffee run
- prefer tea
- snack
- have a messy desk
- have a tidy desk
- work how you like to work
- ask the management to fix it
- have off-days
- have days off

> Source: [GOV.UK Government Digital Service Blog](https://gds.blog.gov.uk/2016/05/25/its-ok-to-say-whats-ok/)

## Get on board!
Whether you're VA staff or a contractor, getting access to the VA systems and tools you need can take time. 

_anything to add about staff? i don't know from that POV_

As a **contractor**, you'll be in touch with a contracting officer (or "COR"), who'll help you get the process started. You'll need to create a GitHub account using your work email address too.

Eventually, you'll be assigned to a Platform Orientation Template ticket in GitHub (see a [ticket example](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61472)). This ticket will take you through all the steps you need to onboard!

At ths end of this process, you'll get:
- A VA.gov email address
- A way to connect to VA's VPN
- Access to the VA GitHub organization
- Access to the Office of CTO @ VA Slack workspace (also known as DSVA, or "Digital Services at VA")
- Access to practice-specific tools that you may need to do your job

This is going to take time. It can take a month, or even longer, to get fully onboarded. Your COR and product lead team will do everything they can to make the process go as smoothly and quickly as possible.

**Note:** Some accessibility specialists use government-furnished equipment, or "GFE", to access VA systems or use Windows-only applications like JAWS. If you need GFE, talk to your product owner. It may already be included in your company's contract. And many VA contractors use their company computers for all, or the vast majority, of their work.

## VA.gov's approach to accessibility
VA's [accessibility vision statement](https://depo-platform-documentation.scrollhelp.site/getting-started/modernized-va-gov-accessibility-strategy#ModernizedVA.govAccessibilityStrategy-Vision) is clear:
> "That every disabled Veteran and caregiver has guaranteed access to equitable, easy to use, self-service tools without needing to request accommodations."

To do this, VA aims to account for accessibility concerns at all stages of the development lifecycle - "accessibility beyond compliance." 

We do research with people with disabilities, annotate our designs, use and develop a robust design system, perform end-to-end testing, and provide means of accessiblility support for product teams. And we follow a set of robust [experience standards](https://design.va.gov/about/experience-standards/) that we apply to all products before launch.

By doing this, we hope to create products that do more than conform to WCAG 2.2 success criteria - instead, making products with a solid user experience for _all_ users.

### Read this first 
Before going any further, read about how we do [Accessibility on VA.gov](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-on-va-gov) and how to follow accessibility standards while using the [VA Design System](https://design.va.gov/about/accessibility/).

You should also watch our [Accessibility Orientation video](https://depo-platform-documentation.scrollhelp.site/getting-started/calendly-orientation-sessions#OrientationSessions-AccessibilityOrientation).

Finally, [opt out of VA.gov analytics](https://www.va.gov/analytics-opt-out.html) on your work computer.

## Your role
At VA.gov, accessibility responsibilities are split between product and support teams. Your role will differ depending on what team you're on.

### Embedded on a product team
If you're embedded on a **product team** (a "Veteran-facing service," or "VFS," team), your job is to ensure that your product(s) are as accessible as possible. You should aim to bake accessibility into the design and development process from the beginning ("shift left").

Some embedded team members accessibility specialists, focusing purely on accessibility work. Others are accessibility-minded researchers, designers, developers, or product managers. 

In all cases, you have a pivotal role to play in the accessibility of your team's work!

Learn more about what different product teams do:
- The [VFS Product Directory](https://depo-platform-documentation.scrollhelp.site/getting-started/vfs-product-directory) lists all products VFS teams work on and includes information about each product, its product owner, and what Crew it belongs to.
- There's a weekly "Team of Teams" meeting, where all product teams share brief updates. You can join the [#team-of-teams-slide-collection](https://dsva.slack.com/archives/C031S5G29LP) Slack channel to review teams' updates.
- This [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712621865931/3fea15c7e9e02e067a628b1384dac54f4006bbdb?sender=u1c2b512a71f68e7b5a5c0324) shows how VFS teams are organized. It's a bit out of date, but should give you a good place to start! 

### Support: the CAIA team
The **Content, Accessibility, and Information Architecture team** ("CAIA") is a sitewide support team. If you're on CAIA, your role is to support product teams as they build their products. To do this, you will:
- Review products in the design phase for accessibility concerns
- Conduct accessibility audits of products on staging and in production
- Run [assistive technology research pilots](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/assistive-tech-pilot-guide.md)
- Assist teams with assistive technology research sessions with participants with disabilities
Review CAIA's full [menu of services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/README.md#services-we-offer) to learn more.

### Support: the Governance team
The [Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/overview) is where teams building products/features on VA.gov get feedback and guidance on their product/feature to ensure it meets VA.gov experience standards. Any new tool, product, or page or substantial change to the user experience of an existing tool/product or page should go through the Collaboration Cycle. 

The **Governance Team** owns the overall Collaboration Cycle process.

If you're on the Governance team, you help ensure VFS teams build products that meet standards, are accessible, and align to create a consistent overall VA.gov experience. You'll review products at [touchpoints](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/touchpoints) across the development lifecycle and provide [feedback](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/must-should-and-consider-framework-for-feedback) to VFS teams using our [defect severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric).


## Join the Accessibility Community of Practice (CoP)

We may be decentralized, but we're not alone! Together, VA's accessibility specialists form the **Accessibility Community of Practice (CoP)**. 

The CoP is a group of accessibility specialists and accessibility-minded designers, researchers, and developers from across VA.gov. Members are from CAIA, Governance, and product teams alike. We support each other by answering questions, meeting on a regular basis, and sharing resources. We also help others by answering their accessibility questions on public Slack channels.

Join us!

### Meetings
- **VA A11y Specialist Weekly Sync** - all a11y specialists meet for community support and to discuss group topics (Thursdays at 12:30 ET).
   - You'll receive a calendar invite on Slack. If you don't receive it, use this link to join our [a11y weekly sync Zoom call](https://adhocteam-us.zoom.us/j/89015804002?pwd=WCtWaUt4eWtETThVQ3VSTzFmendtQT09).
- **VA A11y Specialist Office Hours** - optional a11y specialist only calls for us to support one another on Fridays at 11 a.m. ET.
   - You'll receive a calendar invite on Slack. If you don't receive it, use this link to join our [a11y office hours Zoom call](https://adhocteam-us.zoom.us/j/85623586331?pwd=SEFhUUFzckMyN2RXSXA0STFseVZIdz09). 
- **VA.gov 508 Monthly** - opportunity to chat with folks from VA 508 Office, Veterans from Blinded Veterans Association and National Association of Blinded Veterans (3rd Wednesday at 4:00 ET) 
   - [Request to join by reaching out to Martha, OCTO's accessibility lead](https://dsva.slack.com/archives/D04NHP2FGEP).
- **CAIA Office Hours** - the CAIA team holds office hours every Tuesday at 4:00 ET. If you're on a product team and want any content, information architecture, or accessibility feedback, chat with CAIA!
   - [Sign up for a time slot](https://dsva.slack.com/docs/T03FECE8V/F06JTSH7CHZ) on CAIA's Canvas. 

### Slack

#### Profile
Please keep your Slack profile up to date. It helps us know who you are, what you do, and what team you work on. Follow these [Slack profile guidelines](https://depo-platform-documentation.scrollhelp.site/getting-started/slack-profile).

#### Channels
These channels are a must-join for accessibility specialists at VA.gov:
- [#a11y-specialists](https://dsva.slack.com/archives/C0335Q88X0S) (private channel for a11y specialists) ⭐♿
- [#accessibility-ops](https://dsva.slack.com/archives/C023ZKDJJK1) (public channel for accessibility champs and other a11y fans)
- [#accessibility-help](https://dsva.slack.com/archives/C8E985R32) (general requests for a11y help, join post accessibility training)

These channels aren't required, but we recommend you join them. They'll give you visibility into different disciplines at VA.gov, along with the platform itself:
- [#platform-design-system](https://dsva.slack.com/archives/C01DBGX4P45) (VA.gov's design system is at [design.va.gov](https://design.va.gov/)) 
- [#slack_information](https://dsva.slack.com/archives/CU058Q9FH)
- [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK) (all the teams who create Veteran-facing products)
- [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)  (Click on the plus sign button + next to the text entry box in this channel > Choose: Support Requests-Backup > Support Request Bot. > Fill out form)
- [#victories](https://dsva.slack.com/archives/C04KXPXL4) (awesome milestones and great things to share with everyone)
- [#general](https://dsva.slack.com/archives/C03FECE9K) (everyone on all the OCTO teams)
- [#design](https://dsva.slack.com/archives/C0NGDDXME) (all the designers who work on all the OCTO teams)
- [#inclusive-research](https://dsva.slack.com/archives/C033ZS9E7EW) (informal group of folks interested in inclusive research)
- [#random](https://dsva.slack.com/archives/C03FECE9P) 
- [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) (design researchers and folks who support them)
- [#trauma-practice](https://dsva.slack.com/archives/C04F9JLSATE) (informal group of folks interested in trauma informed/responsive design, meetings are available)

And if you're embedded on a product team, you might want to follow channels from other teams in your Crew. For example, if you're on a Benefits team, you might want to follow other Benefits teams' channels! This will give you insight into what those teams are up to, and open up more possibilities for cross-team collaboration.

#### Notifications
If you want to keep abreast of accessibility happenings across VA.gov, you can setup keyword flags such as “accessibility,” “a11y,” etc.
- Navigate to: Preferences > Notifications
- Use commas to separate each keyword. 
- Keywords are not case sensitive. 
   - **Examples:** Accessibility, accessible, audit, user research, ux, CAIA, user experience, a11y

### Calling all CAIA a11ys!
Use `@sitewide-caia-accessibility` in Slack to ping all CAIA accessibility specialists.

## Contacts
If you want to learn more about how accessibility works at VA.gov, reach out to:
- [Martha Wilkes](https://dsva.slack.com/archives/D04NHP2FGEP)  OCTO - Accessibility Strategist/Designer [VA]
- [Sara Smith](https://dsva.slack.com/team/U04NBMUH5C4) - CAIA - 508 Accessibility Specialist [Oddball]
- [Brian DeConinck](mailto:brian.deconinck@adhocteam.us) - Platform/Governance - Accessibility Lead [Ad Hoc]
- [Jeana Clark](https://dsva.slack.com/team/U049MQKDTT3) - Veteran Facing Forms, Accessibility Specialist (UX) [Ad Hoc]

## Improve your skills

### A11y Champs
If you are new to the accessibility space, or know someone that is, check out the [Accessibility Champions Community ("A11y Champs")](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/a11y-champs)! We're a grassroots, volunteer-led educational program intent on scaling up VA.gov's focus on the disabled Veteran experience through:
- co-design, curiosity, and community
- centering the diverse voices of disabled Veterans, caretakers, and family members
- asking questions first and learning from others

Anyone working at the VA, with access to the DSVA slack channel, can become an accessibility champion through this curriculum.

### Tooling
Learn what [tools we use](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/tools-we-use.md) to audit products on VA.gov. The list includes various plugins, extensions, and applications.

We also recommend installing the new [VA page checker Chrome extension](https://github.com/Mottie/va-page-checker), which highlights design system components and accessibility issues on VA.gov pages.

(**Note:** If you have a GFE Windows PC, you can install JAWS with a VA 508 Office license. Open a [ServiceNow ticket](https://yourit.va.gov/sp?id=va_sc_subcat%E2%8A%82id=a7ff40ec1b352850a25d0d08ec4bcb6f) to create a JAWS installation request.)

### Figma
If you use Figma, make sure to use our [accessibility annotations library](https://design.va.gov/about/accessibility/accessibility-annotations).

You can also use Figma [plugins](https://www.figma.com/community/tag/a11y/plugins/free) to help check color contrast, readability, zoom, etc.

### PDFs
If you've been tasked with creating or remediating a PDF, check out CAIA's [guide to creating accessible PDFs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/create-accessible-PDF.md).

[Section508.gov's Content Creation page](https://www.section508.gov/create/) has detailed information about making accessible documents, presentations, spreadsheets, and PDFs.

### Forms
Use these resources to create accessible forms on VA.gov:
- [Mock form patterns](https://staging.va.gov/mock-form-patterns/introduction)
- [Design system form components](https://design.va.gov/components/form/)

### Tricky accessibility issues
Accessibility specialists have created guides on the following technical topics:
- [Focus tracking](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/focus-tracking.md)
- [Headings and accessibility best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/accessibility-cookbook.md#headings-and-accessibility-best-practices)
- [Buttons vs. links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/accessibility-cookbook.md#choose-the-right-element-buttons-vs-links)
- [When to use ARIA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/accessibility-cookbook.md#when-to-use-aria)

### Mobile testing
Learn how to [test websites on mobile devices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/mobile-accessibility-testing-guidance.md).
