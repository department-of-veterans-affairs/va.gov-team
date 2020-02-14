# VSP Accessibility Design & Development Rules of Engagement 

**Please note:**  <br/>This review process will continue to evolve. Please contact Trevor in Slack with suggestions, questions, or improvements.

## Accessibility Design Checkpoints

Accessibility specialists are included in VSP design reviews, as outlined in the [VSP Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#whentorequest). Recommendations will be based on [best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) for inclusive design and development.

For small projects, use your judgment for what levels of support and feedback you need. Generally, a pre-usability testing design review or a design QA review will be appropriate for this type of project, but you are the expert!

For medium to large projects, there will be five accessibility touch points. Teams can also reach out to accessibility specialists for spot checks, small-group consults, or code reviews any time.

1. **Project Kickoff**<br/>

   <br/>

   Tips for a successful project:

   * Read through the [508 checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md). This checklist will give you a good overview of accessibility requirements and tools that will help you in early-stage testing.

   * Read through the [508, accessibility, and inclusive design best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-tests). This goes into greater detail on the areas your product will be evaluated for accessibility and inclusivity.

   * Reach out to your accessibility specialist(s) if you have questions after the product kickoff meeting. The sooner your team is comfortable with these accessibility guidelines, the more successful your project will be.

2. **Design Intent Collaboration** — *Integrated with [VSP design intent check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#design-intent-check-in)*<br/><br/>Tips for designing accessible solutions:

   * Involve the accessibility specialist in discussions about needs, priorities, concepts, research planning, and direction.

   * Include the accessibility specialist in formal and informal reviews to ensure inclusive design is woven through the efforts. Accessibility specialists can help identify challenges with user flows, color contrast, and color blindness at this stage of the software development lifecycle (SDLC).

   * Consider the following elements while designing user experiences:
     * [Performance budgets](https://addyosmani.com/blog/performance-budgets/)
     * Mobile-first design 
     * Mobile-only interactions
     * Touch interactions
     * Spacing of interactive items – for example, is the spacing sufficient to ensure people don't accidentally select something other than what they meant to?
     * Laptop/desktop design
     * Semantic heading order
     * Cognitive impact – in the words of [Steve Krug](http://sensible.com/), *don't make me think!* Design should be clear, not overwhelming.

3. **Usability Testing Prep** — *Integrated with [VSP pre-usability design review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#design-reviews-1)*<br/><br/>The accessibility specialist will provide more specific feedback, including:

   * Relevant design system components and patterns

   * Feedback on recruiting diverse research participants

   * Additional testing scenarios

4. **Staging Review** — *Integrated with [VSP design QA review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#design-reviews-1)*

   * The accessibility specialist will review the following items:
     * A completed test plan. This test plan could be stored in [TestRail](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc) **or** [Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md). **Incomplete test plans can delay the staging accessibility review.**
     * Automated end-to-end (e2e) tests for client-side applications.
       * The specialist will check that tests have been written, and include sufficient axe checks for the relevant user interactions.
       * Axe checks should be run for all views, and for hidden content like modal windows and accordions.
   * The accessibility specialist test the [happy path](https://en.wikipedia.org/wiki/Happy_path) using the following methodology:
     * Zooming layouts to 400% at 1280px width
     * Keyboard navigation
     * Three preferred screen reader and browser pairings. Pairings will be determined by Google Analytics data and WebAIM’s [most recent screen reader survey](https://webaim.org/projects/screenreadersurvey8/#primary). This will most likely include:
       * JAWS + IE11 or Chrome on Windows 7/10
       * NVDA + Firefox on Windows 7/10
       * VoiceOver on MacOS latest _(Mojave or Catalina as of February 2020)_
     * Any issues will be collected in a Zenhub epic
     * Issues will be triaged for severity, and pre-launch or post-launch fixes

5. **Full Accessibility Audit and 508 Office Review**

   * **508 Post-launch Audit**<br/>
     Applications still need a full accessibility audit. This audit was previously done during the pre-launch phase, but will now be done immediately post-launch to emphasize speed and agility. Any findings during the post-launch audit will be forwarded to the VA 508 office as known items. This should prevent duplicate logging when the VA 508 office conducts their own test.

     Post-launch audits will be beneficial for finding usability issues that would not otherwise appear on an automated report. These findings will drive future innovation and research sessions. Findings will also drive improvements to the design system and overall accessibility guidance.

     The VSP post-launch audit will focus on manual testing with mobile and assistive technology:

     - Windows 7/10 IE11 + JAWS
     - Windows 7/10 Chrome + JAWS
     - Windows 7/10 NVDA + Firefox
     - MacOS Safari + VoiceOver
     - iOS and Android mobile devices as available
     - Additional browsers such as AVG, Waterfox as warranted by analytics

   * **508 Office Review**<br/>
     The VSP and VSA accessibility specialists will forward teams' features, pages, and products to the VA 508 office after production launch. Accessibility specialists meet with the 508 office representative every month, and will notify them of new products to test during that meeting, or via email as needed.

## VSP Rules of Engagement by Team

* **Design** - [VSP Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md)

* **Content** - [VSP Content Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)

* **IA** - [VSP IA Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md)

* **Research** - [VSP Research Process](
