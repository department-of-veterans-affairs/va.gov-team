# Entry Point and Crosslinks

An **entry point** is a CTA (can be a link, but is typically something more prominent) placed on a page or in navigation, where it is the primary intention of that page or component.  It is how a visitor would navigate to/discover a feature. Without an entry point, there is no way to navigate to a feature.

**Crosslinks** are links on a page or in navigation that are secondary to the page or area's purpose, but were placed there to promote contextual navigation for users.

There are three types that the IA specialist will document in the IA spec:

1. Primary navigation pathway and entry point
2. Additional entry points
3. Suggested crosslinks (optional)


## Types

### Primary navigation pathway and entry points

**Navigation pathway**: A series of clicks(or interactions) that allows a user to navigate to the tool/form from the top menu on VA.gov. We outline this so we don't end up with orphaned pages that are only available via search. **Teams must launch with at least one navigation pathway.**

For new tools or forms, we may typically launch with a navigation pathway that is a bit more buried in the menus as we monitor analytics and user feedback. This ensures that we don’t roll out a page with a high-level entry point that we have to later scale back if the product doesn’t perform as expected. We usually monitor analytics and user feedback for a minimum of 3 months after launch before adding high-risk entry points (such as from the home page, header/footer, or left nav).

Example pathways for the healthcare application form 10-10ez:
  Mega menu > Health care > Apply now for healthcare link
  Mega menu > Health care > Health care hub page > Apply online for 10-10ez link
  Mega menu > Health care > Health care hub page > How to apply page > [Action link on the ‘How to apply’ page]
  Home page > Health care hub page > Apply online for 1010ez
  Home page > Health care hub page > How to apply > [Action link on the ‘How to apply’ page]

In the example above, we may launch the tool with option 3 (the entry point more buried on the ‘how to apply’ page), but then expand to entry points on the hub page, left nav, or mega menu.

The pathway must include the **primary entry point**: The final click (or interaction) before you get to the form/tool. The actual component may vary (it could be a sign-in widget, an action link, a standard link, or a left nav link), but this is typically the furthest link you can access before you are on the tool/form.

For forms and tools, the primary entry point is usually on a static Drupal page about the form or benefit. Drupal pages are created and managed by the CAIA content team -- teams must work with them to prepare their entry point BEFORE staging review. **Teams will be required to come to Staging Review with a functioning URL (either for Drupal preview or staging) that displays their entry point in a ready-to-publish state.**

Exception:  if the feature is only supposed to be accessible a specific way, either indefinitely or for some period of time, we don’t necessarily need a functioning URL at staging review.  Examples:
- A primary entry point outside of VA.gov (i.e. health appointment check-in is only accessible via text message)
- A silent launch that has been approved by OCTO (i.e. MHV on VA.gov tools).

### Secondary entry points
Secondary entry points open up additional pathways that the page can be navigable from. They are not required for launch. They are most often set up post-launch, because there is no draft/preview state for some of these items in Drupal.

Ex: link on the mega menu, left nav, R+S page, best bet, find-a-form page, or benefit hub pages.

### Crosslinks
Crosslinks are not fully IA responsibility. If there are specific pages or places that we believe should also reference the feature, we can call those out. Ultimately, the content team knows the content very well and can add crosslinks across the site. There might not always be any crosslink recommendations; it's more of a place to document any other places that we stumble upon or that a team asks about.

Crosslinks are also iterative and can change depending on page performance and other factors.

