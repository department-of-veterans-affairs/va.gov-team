## va-input-telepone: Support international phone number 

## In Scope:
- Usage of a flag icon to represent country code
- Default country code to United states
- On screens smaller than 360px we will stack the country code and phone number.

## Out of scope
- Country code field and phone field interaction
- Geolocation

### Context:
As part of the migration of My HealtheVet (MHV) to VA.gov, it was identified that the current My VA Profile does not support international phone numbers. This limitation is a blocker for the migration effort, as users with international contact information must be accommodated.
Enabling international phone numbers has broader implications across the VA.gov ecosystem, particularly for:

- Prefill-enabled online forms that rely on user profile data
- PDF-based forms that currently reject international phone formats


### To support international phone numbers:
- An audit must be conducted of all forms using prefill to ensure they either accept international numbers or present a meaningful error instructing users to update their contact information in the form
- PDF forms that reject international numbers will require coordination with their respective owners for updates.


### Decision:
 A single, shared component will be created within the VA Design System to support international phone numbers across the following platforms:
- My VA Profile (web)
- VA.gov forms
- VA mobile applications

#### Additionally, the phone number input pattern will be updated to:
- Support customizable formatting for display
- Enable flexibility in accepting either domestic or international phone numbers, based on form-specific requirements


### Consequences:
- A unified component improves consistency, testability, and accessibility across platforms.
- The target deadline for full adoption is August 2025, but early development and delivery of the shared component are critical to allow other teams (My VA Profile, mobile team) to integrate it in advance.

