# Product Brief: MVP for Production Test Accounts Using Verified Modern Credentials

**Author:** Lainey Trahan
**Date:** July 22, 2025  
**Initiative:** Replace Production Test Accounts (PTAs) that rely on MHV credentials with a secure alternative using verified modern credentials (Login.gov or ID.me).

---

## Problem Statement

With the scheduled deprecation of MHV credentials in **October 2025**, VA.gov and mobile teams face a critical gap in their ability to safely test Veteran-facing features in the production environment. Current PTAs tied to MHV are insecure, lack traceability, and cannot be easily revoked. We must deliver an MVP that enables **VA employees and contractors to access PTAs using modern, verified credentials**—ensuring secure, accountable, and reliable test access in production.

---

## MVP Objective

Deliver a production-ready mechanism for secure PTA access using **Login.gov or ID.me**, focused on high-priority use cases such as:

- Validate that new or updated features on VA.gov or the mobile app work as expected upon release.
- Reproduce and validate bug fixes to ensure prior issues are resolved without breaking other functionality.
- Validate that external integrations work correctly in production.

---

## MVP Goals

- **Secure Authentication:** Enable verified login using Login.gov or ID.me.  
- **User Mapping:** Associate each verified user with a pre-provisioned PTA (ICN).  
- **Access Management:** Provide a manual revocation mechanism for MVP.  
- **Identity Logging:** Log verified user identity and PTA access to Audit DB.  
- **Auditing & Reporting:** Generate searchable logs for session tracking and reporting.

---

## MVP Scope by Requirement

| **Requirement**       | **MVP Solution**                                  | **Backend Actions**                                                                 |
|-----------------------|---------------------------------------------------|--------------------------------------------------------------------------------------|
| **Authentication**    | Verified login via Login.gov or ID.me             | Spike: Investigate OAuth "On-Behalf-Of" token flow                                  |
| **Mapping**           | DB mapping of `employee_uuid` → `pta_icn`         | Build Redis-backed or DB mapping service with metadata (`start_date`, `end_date`)   |
| **Access Management** | Manual revocation via Rails console               | Document revocation steps in Rails                                                  |
| **Identity Logging**  | Enforce verified email; expand Audit DB           | Add logging of `verified_user_id`, `pta_icn`, accessed routes, and session timestamps |
| **Auditing/Reporting**| Generate usage reports from Datadog               | Prototype audit log exporter for PTA usage tracking                                 |

---

## Key Open Questions

- Should verified login accounts be tied to **VA emails** or allow any personal email?
- What metadata is the **minimum required** for identity enforcement and logging?
- What’s the best pattern for securely mapping a verified user to a test identity without exposing or reusing PII?

---

## Initial Technical Spikes

- Investigate **OAuth On-Behalf-Of flow** for token chaining and delegation.
- Explore **Redis-based mapping** between verified users and PTA ICNs.
- Evaluate **PII logging considerations** for storing identity info safely.
- Determine **routes/actions to monitor** via Audit DB.

---

## Post-MVP Enhancements (Roadmap Candidates)

- Self-service **whitelist management** for PTA access.
- Admin dashboard for **real-time access control** and revocation.
- MPI check for **employment status validation** to automatically revoke access.
- Improved **integration test support** for downstream systems (e.g., MHV).

---

## Milestones (Engineering Collaboration)

- 🔲 Mapping and whitelist service buildout  
- 🔲 MPI employment validation  
- 🔲 Rails script for access revocation  
- 🔲 Audit DB logging expansion  
- 🔲 Prototype Datadog report/export tool  
- 🔲 Frontend requirements and routing for initiating PTA session

---

## Stakeholders & Dependencies

- **IAM Team**: Credential verification and Login.gov/ID.me integration  
- **Audit & Security**: Logging standards, privacy, and compliance  
- **VA Lead**: Manual data updates and PTA assignment  
- **Product Teams**: Consuming services (MHV, OCC, Oracle)  

---

## Success Criteria (MVP)

- A verified VA employee can authenticate with Login.gov or ID.me  
- Their verified identity is mapped to a PTA in production  
- Their activity is logged and visible in audit records  
- Their access can be manually revoked in real-time  
- MVP is ready before MHV credential sunset in October 2025
```

Let me know if you want a version of this turned into a downloadable `.md` file or posted in a specific VA documentation format.

