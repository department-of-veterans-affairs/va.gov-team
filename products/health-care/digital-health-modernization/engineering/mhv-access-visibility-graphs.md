# How MHV on VA.gov manages access to and visibility of tools

Created: 2024-05-09

This was an attempt to diagram whether various pages/tools/apps under `/my-health/` are viewable or not, or if some features/sections are viewable or now.

Update 2025-06-17: Removed tool page details, which never got updated. [mhv-authorization.md](./mhv-authorization.md) reflects another take on documenting access/visibility from 2024-06-14. The [landingpage-flowchart-2025-6-11.pdf](./landingpage-flowchart-2025-6-11.pdf) covers the MHV Landing Page, circa 2025-06-17.

## General Notes/Context

- "ID-verified" relates to the Level of Assurance (LOA) for that account. LOA3 indicates a user's account is verified/proved by identification
- The presence of one of more facilities in a person's account can indicate if that person has health benefits or has been seen at a VA facility
- In certain situations, non-veterans may be seen at VA health facilities, e.g. when that is the closest medical center in an emergency
- The MHV API currently requires an MHV account identifier to be able to look up a person's data in MHV systems. This identifier may exist regardlesss of how a person logs in.

## MHV Landing Page

Update 2025-06-17: See [landingpage-flowchart-2025-6-11.pdf](./landingpage-flowchart-2025-6-11.pdf) for MHV Landing Page
