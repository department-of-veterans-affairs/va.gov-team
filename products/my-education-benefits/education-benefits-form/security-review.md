# Security Review

- Link to product outline 
- Ensure Product Outline contains Incident Response info, including:
- Points of contact for your system and dependent VA backends 
- Links to dashboards that help identify and debug application issues 
- Links to technical diagrams (checked into GitHub alongside your product documentation), including:
- An architecture diagram, showing involved systems and how they connect. 
- For non-trivial flows (i.e. more than a single round-trip call from frontend → vets-api → VA Backend), a sequence diagram showing the ordered flow of data and operations between systems. 
- Describe any new publicly-exposed endpoints (vets-api or otherwise):
- Describe any new interactions with dependent VA backends 
- Describe any other security hotspots you're concerned about / want extra attention on 
- Link to Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Review the guidance on hosting a security review