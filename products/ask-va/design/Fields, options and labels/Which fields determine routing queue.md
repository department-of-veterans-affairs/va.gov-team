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

|Fields that determine routing|Example| 
|:--|:--| 
|Category and topic|**Category**: Disability compensation<br>**Topic**: Any topic within this category<br>**Queue**: VBA ART| 
|Category, topic, and subtopic|**Category**: Health care<br>**Topic**: Family member health benefits<br>**Subtopic**: CHAMPVA benefits<br>**Queue**: VHA HAC CHAMPVA (Civilian Hlth&Med Prog)| 

### 2. Based on category, topic and subtopic and another field

Some routing is based on category, topic (and when available) a subtopic, **plus** an additional field:

- school facility
- state of school facility
- state of residence
- state of property
- health facility
- location of residence
- postal code

> [!NOTE]
> This table provides examples but is not comprehensive of all categories that route based on an additional field.

|Fields that determine routing|Example| 
|:--|:--| 
|And school facility code|**Category**: Education benefits and work study<br>**Topic**: Benefits for survivors and dependents<br>**School facility code**:...<br>**Queue**: Buffalo CSR|
|And state of school|**Category**: Education benefits and work study<br>**Topic**: Educational and career counseling<br>**State of school**: ...<br>**Queue**: Muskogee CSR|
|And state of residence|**Category**: Education benefits and work study<br>**Topic**: School Certifying Officials (SCOs)<br>**State of residence**:...<br>**Queue**: Muskogee Schools| 
|And state of property|**Category**: Housing assistance and home loans<br>**Topic**: Specially Adapted Housing (SAH) and Special Home Adaptation (SHA) grants<br>**State of property**:...<br>**Queue**: VBA-LGY-Specially Adapted Housing|
|And medical facility|**Category**: Health care<br>**Topic**: Getting care at a local VA medical center<br>**Medical facility**:...<br>**Queue**: PATSR*|
|And postal code|**Category**: Veteran Readiness and Employment<br>**Topic**: Financial issues<br>**Postal code**:...<br>**Queue**: VBA Anchorage RO-VR&E|
|And location of residence|**Category**: Guardianship, custodianship, or fiduciary issues<br>**Topic**: Accounting issues<br>**Location of residence:**...<br>**Queue**: VBA Louisville Fid Hub|

> [!NOTE]
> *PATSR uses Medical facility to create the case for the proper facility queues in the PATSR application.
