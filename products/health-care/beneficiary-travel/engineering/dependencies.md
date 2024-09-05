# Engineering tasks & dependencies

This document will be updated to reflect the current state of engineering dependencies each sprint. "Dependency" in this doc means "when can work start?"

Note: Position does not indicate priority or schedule. Outgoing arrows denote a tasks having a dependency on another. If a task has no outgoing arrows, it is independent.


## Sprint starting 09/09/2024
```mermaid
---
title: Engineering Task Priorities (When can work start?)
---
flowchart BT
  %%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%
  v[Finish vets-api versioning]
  clean[Get status client/service/error handling into a clean state]
  deetsfe[Create claim details view]
  deetsint[Integrate backend with details view]
  smocfe[SMOC FE]
  smocint[SMOC Integration]
  discappts[Discovery - accounting for multiple appts per day]
  tpapireq[Send tpapi team a list of additional fields needed for SMOC]
  findappt[Find appointment vets-api endpoint]
  getclaim[Get single claim endpoint]
  apptsclaims[Create shared appt-to-claim association service]
  multicred[Enable multi-credential client auth]
  makeclaim[Create claim vets-api client/service code]
  addexp[Add expense vets-api client/service code]
  subclaim[Submit claim vets-api endpoint]
  statusentry[Past appts status link]
  submitentry[Past appts submit link]
  smocmobilefe[SMOC Mobile FE]
  smocmobilesvc[SMOC Mobile Services]
  smocmobilectrl[SMOC Mobile Controllers]

  clean --> v
  getclaim --> v
  multicred --> v
  getclaim --> multicred
  deetsint --> deetsfe
  deetsint --> getclaim
  smocint --> smocfe
  findappt --> multicred
  makeclaim --> findappt
  addexp --> makeclaim
  subclaim --> addexp
  smocint --> subclaim
  statusentry --> apptsclaims
  submitentry --> apptsclaims
  statusentry --> getclaim
  statusentry --> deetsint
  submitentry --> smocint
  smocmobilesvc --> apptsclaims
  smocmobilesvc --> subclaim
  smocmobilectrl --> smocmobilesvc
```
