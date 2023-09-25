# [WIP] Travel Pay Migration Effort

> Period of Performance (PoP): 9/1/23 thru 8/29/24 

This document is a high level snapshot of where we are today and where we want to be at the end of this PoP

- [\[WIP\] Travel Pay Migration Effort](#wip-travel-pay-migration-effort)
  - [Goals for this PoP](#goals-for-this-pop)
  - [Team Breakdowns and Key Personal](#team-breakdowns-and-key-personal)
    - [Key Stakeholders](#key-stakeholders)
    - [API Team](#api-team)
    - [va.gov team](#vagov-team)
  - [By the end of 2023](#by-the-end-of-2023)
  - [After 1 year](#after-1-year)
    - [For the va.gov team](#for-the-vagov-team)
    - [For the API team](#for-the-api-team)
  - [Architecture](#architecture)
    - [1: PCI Integration](#1-pci-integration)
    - [2: CLaims Ingest API](#2-claims-ingest-api)
    - [3: Existing BTSSS Portal (MS Dynamics)](#3-existing-btsss-portal-ms-dynamics)
    - [4: va.gov submission tool](#4-vagov-submission-tool)
    - [5: Va.gov integration](#5-vagov-integration)
    - [6: Future integrations](#6-future-integrations)
    - [7: VA Mobile Integration](#7-va-mobile-integration)
    - [8: VA Mobile Experience](#8-va-mobile-experience)


## Goals for this PoP

Full list of [OKRS](./OKRS.md) and full project description in the [README](../README.md)

- Create a mobile friendly, accessible BT claims submission tool on va.gov for a fully authenticated user
- Create an integration with the BTSSS system and the Vets-api that can be leveraged for various products on the va.gov ecosystem

## Team Breakdowns and Key Personal

### Key Stakeholders

- OCTO
  - Mark Dewey
  - Chris Johnston 
- OIT 
  - Chester Peyton
- VTP
  - Daryl Richardson

### API Team

This team will focus on iterating and expanding the Claims Ingest API 

### va.gov team

This team is focused on create the new experience on va.gov and integration vets-api with the Claims Ingest API


## By the end of 2023

- digested, aligned, and found an MVP of the items in the [road map](./roadmap.md)
- Claims Ingest API is integrated with vets-api is successful
- some simple claim submission is in staging. 

## After 1 year

We should have made significant progress on the [road map](./roadmap.md) for the API and va.gov team 

### For the va.gov team

- A submission tool that is linked to from appointments page (and maybe check in experience)
- a vets-api integration that exposes functionality from the Claims Ingest API to the va.gov apps 
- successful integration with the VA Mobile App

### For the API team 

- A performant API that can be used to create valid claims
- A performant API that can be used to query for claim details
  

## Architecture 

![Desired Architecture](./assets/scoped-architecture-diagram.png)

Key: 

### 1: PCI Integration

- PCI Integration to allow claims being submitted during the check in process 
- Already exist today in production, using the Claims Ingest API
- The API Team will be supporting any production/integrations issues

### 2: CLaims Ingest API

- A proof of concept that got elevated to production. 
- The main goal is to expand this according to our [road map](./roadmap.md#next-for-api-focused-team---fall-2023)
- This what the API Team will be working on

### 3: Existing BTSSS Portal (MS Dynamics)

This is the current BTSSS experience. Veterans use this to submit a claim, though we can start to think about this as fancy database

### 4: va.gov submission tool

- This new functionality and applications we are creating on the va.gov
- This is a main goal of the va.gov team
- Here is the current proposed [road map](./roadmap.md#next-for-vagov-submission-tool-focused-team---fall-2023) 
- This includes a module that can accessed and reused by other teams on va.gov


### 5: Va.gov integration

- This work is adding functionality to an existing va.gov feature
- Primarily the va.gov will be working with the Appointments team to provide integration and guidance on integration with the va.gov submission tool

### 6: Future integrations
> Outside of the scope of this current PoP

- Potential integrations points to consider when building the underlying APIs


### 7: VA Mobile Integration  

- Jointly, both teams will be supporting the integration with the VA Mobile App
- There should be plenty of reuse here since the VA Mobile App uses vets-api
- Ideally, the Va.gov Team builds the internals that are being used in [4] and the Mobile team build the controllers

### 8: VA Mobile Experience

- We are not building this experience directly, but supporting by answering question.
- OCTO will field most of these questions with support from both teams.



