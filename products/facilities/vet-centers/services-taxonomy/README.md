# VHA Vet Center Services Taxonomy

## What we need to do

- Research, design, and write new NCA cemetery services taxonomy
- Build NCA cemetery services taxonomy in Drupal, and integrate into the Facilities API

## Assumptions and early discussions

- Vet Centers are considered health care facilities, so its taxonomy may overlap with the VHA health services taxonomy
  - For overlapping or duplicative services, we will need to make it clear to users which VHA facility they will receive care at
  - Example: "Military sexual trauma counseling and referral" is offered at a Vet Center while "Military sexual trauma" is offered at a VAMC
- The Vet Center taxonomy should follow the same structure as the VHA health service taxonomy
  - Service name (required)
  - Patient-friendly name
  - Common conditions
  - Description (required)
- Vet Centers will need their own "Care we provide at VA Baltimore Vet Center" content block
- We should follow the same "Appointments" structured content design as our VAMC product
  - Referral needed? No
  - Walk-ins accepted? Yes
  - Phone: 412-822-3728

## Current list of services

This is the list that is in the Facility Locator 1.0 tool for Vet Center services.

- Individual and group counseling for Veterans, service members, and their families
- Family counseling for military related issues
- Bereavement (grief) counseling
- Military sexual trauma counseling and referral
- Community outreach and education
- Substance abuse assessment and referral
- Employment referral
- Referral of other VA services
