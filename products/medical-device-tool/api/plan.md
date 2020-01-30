# Medical Device Ordering Tool API Plan

## Overview

This document contains the proposed endpoints, requests & response information for the MDOT API Service. This project and any all documentation related to the project including this document is owned and maintained by the Benefits & Memorials II team. Any questions or concerns should be directed to the B&M II team, which can be reached on the #vsa-bam-2 Slack channel.

## Endpoints

| HTTP Method | Endpoint                    | Description                                                                                                |
|-------------|-----------------------------|------------------------------------------------------------------------------------------------------------|
| GET         | /v0/medical_devices         | Returns a list of medical devices available for reorder and veteran information for the logged in veteran. |
| POST        | /v0/medical_devices         | Creates a new medical device and/or accessory order.                                                       |
| GET         | /v0/medical_devices/profile | Returns just the veteran information: address, gender, date of birth, email, etc.                          |
| PUT         | /v0/medical_devices/profile | Makes a change to veteran profile, can modify address, email.                                              |

### GET /v0/medical_devices

### POST /v0/medical_devices

### GET /v0/medical_devices/profile

### PUT /v0/medical_devices/profile