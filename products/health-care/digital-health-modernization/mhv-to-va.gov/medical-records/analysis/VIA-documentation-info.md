# VIA (VistA Integration Adapter) Interface for MHV (My HealtheVet)

## What is VIA?

VIA is designed to abstract consuming applications, such as MHV, from the technical complexities of the VistA environment. It acts as an adapter, using a modularized design to separate generic infrastructure from business logic. This enables easier, scalable integration for services accessing VistA clinical data.

## MHV - My HealtheVet Overview

My HealtheVet provides online access to prescription refills, secure messaging, viewing lab results, and health records. MHV uses a set of APIs to communicate with VA VistA, typically via secure NSOC tunnels and API gateways for reliability and network segmentation.

## VIA and MHV Integration Points

- **Interface Type:** VIA typically exposes remote procedure calls or APIs which MHV would consume.
- **Data Flow:** MHV requests data (like prescriptions, lab results, etc.), VIA translates these to calls understandable by underlying VistA infrastructure.
- **Protocols/Standards:** HL7 interfaces are frequently used for health data exchange; REST endpoints are used for newer API-based integration for prescriptions, secure messaging, labs, etc.
- **Key Features:** VIA shields front-end or third-party apps from changes in underlying VistA instances at different VA facilities, ensuring consistent data access.

## Key Documentation Resources

### VIA Documentation

- **VIA User Guide:** Details the design, modularization, purpose, and system architecture of VIA (including required patches, configuration, and organizational contacts)
  - [VistA Integration Adapter (VIA) 1.0 User Guide](https://www.va.gov/vdl/documents/Clinical/VistA_Integration_Adapter_(VIA)/via_vip_user_guide.pdf)

- **VIA Installation, Back-out, and Rollback Plan:** Defines how to properly install, revert, and roll back VIA versions in VA environments
  - [VIA Installation Guide](https://www.va.gov/vdl/documents/Clinical/VistA_Integration_Adapter_(VIA)/viab_1_15_installation_backout_rollback_plan_release_notes.pdf)

### MHV Documentation

- **MHV Technical Manuals:** Explain the user benefits, API functionality, prescription refills, security, and specific integration with VistA. These manuals often contain detailed sections about how MHV interacts with VistA via HL7 integration and other modules.
  - [My HealtheVet (MHV) Technical Manual & Security Guide v1.10 (March 2023)](https://www.va.gov/VDL/documents/VistA_GUI_Hybrids/MyHealtheVet/mhv_1_10_tm.pdf)
  - [MHV Installation Guide](https://www.va.gov/vdl/documents/VistA_GUI_Hybrids/MyHealtheVet/mhv_1_0_ig.pdf)
  - [MHV Technical Manual & Security Guide v1.6 (2015)](https://ia601406.us.archive.org/10/items/www.va.gov/www.va.gov/vdl/documents/HealtheVet/MyHealtheVet/2015_mhv_vista_1_6_technicalmanual.pdf)

### Developer Documentation

- [My HealtheVet (MHV) Developer Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/my-healthe-vet)

## Technical Highlights

- VIA supports both client-server and multi-tier environments.
- MHV uses VIA as a shield for backend change-management and to enable new features without deep VistA customizations.
- VIA is configured and maintained by VA OIT, with national helpdesk support and enterprise policy alignment.

## Getting Started

If you need to implement or maintain an integration between VistA (via VIA) and MHV:

1. Start with the **VIA User Guide** for understanding the architecture and configuration
2. Review the latest **MHV Technical Manual** for interface specifications and security details
3. Consult the **MHV Developer Documentation** for up-to-date API endpoints and error handling
4. Reference the **Installation Guides** for deployment procedures specific to the VA environment

## References

1. [VistA Integration Adapter (VIA) - Veterans Affairs](https://www.va.gov/vdl/documents/Clinical/VistA_Integration_Adapter_(VIA)/via_vip_user_guide.pdf)
2. [My HealtheVet (MHV)](https://depo-platform-documentation.scrollhelp.site/developer-docs/my-healthe-vet)
3. [My HealtheVet (MHV) Technical Manual & Security Guide Version 1.6 June 2015](https://ia601406.us.archive.org/10/items/www.va.gov/www.va.gov/vdl/documents/HealtheVet/MyHealtheVet/2015_mhv_vista_1_6_technicalmanual.pdf)
4. [My HealtheVet (MHV) - Veterans Affairs](https://www.va.gov/vdl/documents/VistA_GUI_Hybrids/MyHealtheVet/mhv_1_0_ig.pdf)
5. [VistA Integration Adapter (VIA) - Veterans Affairs](https://www.va.gov/vdl/documents/Clinical/VistA_Integration_Adapter_(VIA)/viab_1_15_installation_backout_rollback_plan_release_notes.pdf)
6. [My HealtheVet (MHV) Technical Manual & Security Guide Version 1.10](https://www.va.gov/VDL/documents/VistA_GUI_Hybrids/MyHealtheVet/mhv_1_10_tm.pdf)

---

*Last Updated: January 28, 2026*
