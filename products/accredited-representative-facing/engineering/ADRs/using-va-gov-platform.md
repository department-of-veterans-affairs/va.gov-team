# Benefits Accredited Representative Facing (ARF) Tools ADR for Building ARF Tools on VA.gov Platform

## Status

Accepted

## Context

The ARF team evaluated platforms for building the accredited-representative-facing site. After analyzing product requirements and the technology landscape, the team chose the VA.gov platform, including vets-website and vets-api, for its robustness, user experience, and cost efficiency. [Initial Exploration](https://docs.google.com/document/d/1SECvAh6TZgCPEWLIF3h8oAusIoB7MmZiyeA5J1iS3dg/edit#heading=h.a1xc2ws1zujg) provides more context.

## Decision

The decision to build the accredited-representative-facing site on the VA.gov platform was influenced by several key factors, each contributing to fulfilling product requirements:

1. **Robust Authentication**: Integration with the [Sign-in Service](teams/vso/teams/representatives/engineering/ADRs/using-sign-in-service.md) ensures secure and robust authentication mechanisms. This meets the platform's needs for strong user authentication and security.

2. **Reuse of VA.gov Forms**: Utilizing existing VA.gov forms streamlines the development process, saves time, and maintains consistency across services. This approach exemplifies efficiency and a DRY (Don't Repeat Yourself) methodology.

3. **Distinct Site Presentation**: Creating a dedicated subdomain for accredited representatives within VA.gov ensures brand consistency and offers a seamless user experience, enhancing usability and familiarity for the representatives.

4. **Domain Modeling and Service Dependencies**: Leveraging VA.gov's existing domain modeling, service dependencies, and APIs, such as the [OGC API](https://github.com/department-of-veterans-affairs/vets-api/blob/867f456072ebecabe3eb884fa12517b942006905/modules/veteran/app/sidekiq/veteran/vso_reloader.rb), allows for efficient development and integration with other VA services, avoiding the costs of developing a separate service.

5. **Knowledge and Resource Utilization**: Building on the VA.gov platform provides access to an extensive knowledge base and developer support, facilitating collaboration and knowledge transfer.

6. **Compliance and Security Standards**: Adhering to the established security and compliance standards of the VA.gov platform ensures that the accredited-representative-facing site aligns with VA's broader security policies.

7. **Consideration of OCTO's Historical Position**: Recognizing OCTO's past stance on VA.gov's user scope and the need to adapt the platform for different user groups, including representatives.

8. **Evaluation of VA.gov Stack Downsides and Alternatives**: Awareness of the challenges associated with using the VA.gov stack, and the exploration of other architectural options to find the most suitable solution.

## Consequences

Building on the VA.gov platform simplifies aspects such as authentication and form reuse but introduces challenges like navigating the VA.gov codebase complexity, adhering to [collaboration cycles](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/), and adapting veterans-api for non-veteran users. This approach promotes efficient deployment and learning from potential shortcomings, yet it necessitates careful future planning and consideration of integration with other platforms or services.

It's important to note that this decision introduces new complexities to the VA.gov platform, particularly in extending its use beyond the original domain of Veterans. Special attention is needed to manage these complexities and ensure that the platform extension remains principled and clean. We must assess how much additional development burden this extension adds to those working on the original Veteran-centric domain. The ramifications of choosing this platform for representative-facing tools are significant and complex to reverse, affecting both engineering and product.

As we consider extensions to the Sign-In Service, content-build system, utilization of subdomains, extending forms, and modeling delegation, it's crucial to be mindful of the impact on the platform's overall complexity. The [early "where" document](https://docs.google.com/document/d/1SECvAh6TZgCPEWLIF3h8oAusIoB7MmZiyeA5J1iS3dg/edit#heading=h.a1xc2ws1zujg) highlights these considerations, emphasizing the importance of a strategic approach in expanding the platform's scope.

In [a recent discussion with OCTO's director of engineering](https://dsva.slack.com/archives/C06ABHUNBRS/p1704481584504909), two suggestions were offered for the ARF team:

1. **Consider an Abstraction Layer**: We should think through an abstraction layer for rep-facing tools that sits between the frontend and any `vets-api` code paths we want to use. This layer should handle:

   - Whitelisting actions that rep-facing tools can take.
   - Auditing and monitoring of actions that reps are taking in production.
   - Any identity “transformation” to ensure we can use `vets-api` functionality with the rep as the user rather than the Veteran.

2. **Risk of Regressions for Veteran Users**: While `vets-website` is well-compartmentalized and suitable for building the rep-facing tools frontend, repurposing existing forms and functions for rep users creates the risk of regressions for Veteran users. We’ll likely need to develop specific processes and conventions for rep-facing teams to coordinate with the benefits portfolio teams that own and maintain the original forms.

In proceeding with this direction, we should consider declaring our choice as somewhat experimental at this early stage, aiming to keep our work reversible to the extent possible. This approach allows us to address and assuage concerns regarding the increased complexity of the VA.gov platform while maintaining flexibility and adaptability in our development process.

## Resources

- [Zenhub Issue Related to this ADR](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/73248)
- [Slack conversation](https://dsva.slack.com/archives/C06ABHUNBRS/p1704479266926979) on adapting VA.gov for non-veteran users
- [Product vision document](https://docs.google.com/document/d/17yZF0USxhFP6aCuy4QL-sf-fpBxUx7KwCoCDnvKIDNE/edit)
- [Early architectural brainstorm document](https://docs.google.com/document/d/1SECvAh6TZgCPEWLIF3h8oAusIoB7MmZiyeA5J1iS3dg/edit#heading=h.a1xc2ws1zujg)
- [Sign-In Service documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service)
- [vets-api repository](https://github.com/department-of-veterans-affairs/vets-api/)
- [vets-website repository](https://github.com/department-of-veterans-affairs/vets-website) for VA.gov form applications like the 526
