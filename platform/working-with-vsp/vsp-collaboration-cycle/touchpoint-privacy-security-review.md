# Privacy and Security Review
Privacy & Security Reviews are required for all products launching on VA.gov.

## When should I request this touchpoint?
When the product is in Staging and before you begin rollout, allowing enough time to implement feedback.

## What is the collaboration format?
Asynchronous review. A synchronous 30-minute meeting may be requested.

## What is the objective of this touchpoint?
Ensure your feature meets VSP's privacy and security standards.

## How do I request this touchpoint?
VFS Lead Engineer or Product Manager submits a [Privacy and Security Review ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/new?assignees=f1337%2C+joeniquette&labels=vsp-product-support%2C+collaboration-cycle%2C+collab-cycle-review&template=privacy-and-security-review.md&title=Readiness+Review+%5BTeam-Name%2C+Feature-Name%5D) in va.gov-team-sensitive repository.

## Who attends this touchpoint?
VFS brings:
- Lead engineer (required)
- Product manager (required)
- DEPO product lead (required)
- Anyone else on your team whose presence is needed to speak to the technical architecture and security concerns (required)
VSP brings:
- Engineering experts (Michael Fleet and/or Joe Niquette, others as needed)

## What artifacts do I provide?
VFS provides:
- Link to [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md)
- Ensure Product Outline contains Incident Response info, including:
  - Points of contact for your system and dependent VA backends
  - Links to dashboards that help identify and debug application issues
- Links to technical diagrams (checked into GitHub alongside your product documentation), including:
  - An architecture diagram, showing involved systems and how they connect.
  - For non-trivial flows (i.e. more than a single round-trip call from frontend → vets-api → VA Backend), a sequence diagram showing the ordered flow of data and operations between systems.
- Describe any new publicly-exposed endpoints (vets-api or otherwise):
- Describe any new interactions with dependent VA backends
- Describe any other security hotspots you're concerned about / want extra attention on
- Link to [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Review the guidance on [hosting a security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/hosting-a-security-review.md)

## What is the outcome of this touchpoint?
VSP provides a list in a Github ticket of concrete action items that need to be addressed before product rollout. 

When the VFS team has completed action items, they should assign the Security Review ticket back to @Michael Fleet, who will confirm completion and close out the issue, signalling approval of the Privacy and Security review.

If no issues are raised during the Privacy and Security review, then VSP will approve the product for launch. 

