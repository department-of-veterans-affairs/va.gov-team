# Which fields determine routing queue

Last updated by @tygindraux: April 28, 2025

This document explains which fields are used to route an Ask VA inquiry to the correct queue. 

**Jump to:** 
- [What is routing?](#what-is-routing)
- [Types of routing rules](#types-of-routing-rules)

## What is routing?

Questions submitted through Ask VA need to be assigned to a queue so that an agent can be assigned to respond. Routing refers to the process of automatically directing new inquiries to the most suitable routing queue. This is based on category, topic and subtopic and sometimes an additional field, like postal code. And happens in Microsoft Dynamics 365.

## Types of routing rules 

Routing is either:
- [based on category, topic and subtopic](#based-on-category-topic-and-subtopic)
- [based on category, topic and subtopic and another field](#based-on-category-topic-and-subtopic-and-another-field)

### 1. Based on category, topic and subtopic

Most routing is based on a category, topic (and when available) a subtopic.

|Questions that determine routing|Examples| 
|:--|:--| 
|Category and topic|**Category**: Disability compensation<br>**Topic**: Any topic within this category<br>**Queue**: VBA ART| 
|Category, topic, and subtopic|**Category**: Health care<br>**Topic**: Family member health benefits<br>**Subtopic**: CHAMPVA benefits<br>**Queue**: VHA HAC CHAMPVA (Civilian Hlth&Med Prog)| 

### 2. Based on category, topic and subtopic and another field

Some routing is based on category, topic (and when available) a subtopic, **plus** an additional field:

- school facility
- state of school facility
- state of residence
- health facility
- postal code
- state of property

|Questions that determine routing|Examples| 
|:--|:--| 
|Category, topic, and School facility code|**Category**: Education benefits and work study<br>**Topic**: Benefits for survivors and dependents<br>**School facility code**:...<br>**Queue**: Buffalo CSR|
|Category, topic, subtopic, and School facility code|**Category**: Education benefits and work study<br>**Topic**: Work study<br>**Subtopic**: Application<br>**School facility code**:...<br>**Queue**: Buffalo CSR|
|Category, topic, and State of school|**Category**: Education benefits and work study<br>**Topic**: Educational and career counseling<br>**State of school**: ...<br>**Queue**: Muskogee CSR|
|Category, topic, subtopic, and State of school|**Category**: Education benefits and work study<br>**Topic**: Transfer of benefits<br>**Subtopic**: Transferring benefits after death of Veteran or dependent (Section 110)<br>**State of school**: ...<br>**Queue**: Buffalo Colmery Section 110| 
|Category, topic, and State of residence|**Category**: Education benefits and work study<br>**Topic**: School Certifying Officials (SCOs)<br>**State of residence**:...<br>**Queue**: Muskogee Schools| 
|Category, topic, subtopic, and State of residence|**Category**: Education benefits and work study<br>**Topic**: Work study<br>**Subtopic**: Position description<br>**State of residence**:...<br>**Queue**: Buffalo Work Study| 
|Category, topic, and medical facility|**Category**: Health care<br>**Topic**: Getting care at a local VA medical center<br>**Medical facility**:...<br>**Queue**: PATSR|PATSR uses Medical facility to create the case for the proper facility queues in the PATSR application.|
|Category, topic, and postal code|**Category**: Veteran Readiness and Employment<br>**Topic**: Financial issues<br>**Postal code**:...<br>**Queue**: VBA Anchorage RO-VR&E|❓Does Postal code or State of residence determine routing for VR&E? Noticed there could be multiple regional offices within a single state.|
|Category, topic, and State of Property|**Category**: Housing assistance and home loans<br>**Topic**: Specially Adapted Housing (SAH) and Special Home Adaptation (SHA) grants<br>**State of property**:...<br>**Queue**: VBA-LGY-Specially Adapted Housing|❓How does State of property determine the queue?|
|Category, topic, and State of residence|**Category**: Guardianship, custodianship, or fiduciary issues<br>**Topic**: Accounting issues<br>**State of residence**:...<br>**Queue**: VBA Indy Fid Hub|Questions go to VBA ART or VBA Columbia Fid Hub? if conditional rules fail.|
