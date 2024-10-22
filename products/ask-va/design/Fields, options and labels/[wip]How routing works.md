# How Ask VA routing works 
Last updated by @beckyphung: October 22, 2024  

This doc explains how the Ask VA CRM routes inquiries to the correct queue. 


**Jump to:** 
- [Types of routing rules](#types-of-routing-rules) 


## Types of routing rules 
Specific questions in the Ask VA form determine routing. There are different types of routing rules that depend on answers to different questions. We describe each combination in the table below.  

### Most categories
|Questions that determine routing|Examples| 
|:--|:--| 
|Category and topic|**Category**: Disability compensation<br>**Topic**: Any topic within this category<br>**Queue**: VBA ART| 
|Category, topic, and subtopic|**Category**: Health care<br>**Topic**: Family member health benefits<br>**Subtopic**: CHAMPVA benefits<br>**Queue**: VHA HAC CHAMPVA (Civilian Hlth&Med Prog)| 


### Education
|Questions that determine routing|Examples| 
|:--|:--| 
|Category, topic, and School facility code|**Category**: Education benefits and work study<br>**Topic**: Benefits for survivors and dependents<br>**School facility code**:...<br>**Queue**: Buffalo CSR|
|Category, topic, subtopic, and School facility code|**Category**: Education benefits and work study<br>**Topic**: Work study<br>**Subtopic**: Application<br>**School facility code**:...<br>**Queue**: Buffalo CSR|
|Category, topic, and State of school|**Category**: Education benefits and work study<br>**Topic**: Educational and career counseling<br>**State of school**: ...<br>**Queue**: Muskogee CSR|
|Category, topic, subtopic, and State of school|**Category**: Education benefits and work study<br>**Topic**: Transfer of benefits<br>**Subtopic**: Transferring benefits after death of Veteran or dependent (Section 110)<br>**State of school**: ...<br>**Queue**: Buffalo Colmery Section 110| 
|Category, topic, and State of residence|**Category**: Education benefits and work study<br>**Topic**: School Certifying Officials (SCOs)<br>**State of residence**:...<br>**Queue**: Muskogee Schools| 
|Category, topic, subtopic, and State of residence|**Category**: Education benefits and work study<br>**Topic**: Work study<br>**Subtopic**: Position description<br>**State of residence**:...<br>**Queue**: Buffalo Work Study| 

### Health care
|Questions that determine routing|Examples|Notes| 
|:--|:--|:--|
|Category, topic, and Medical facility|**Category**: Health care<br>**Topic**: Getting care at a local VA medical center<br>**Medical facility**:...<br>**Queue**: PATSR|PATSR uses Medical facility to create the case for the proper facility queues in the PATSR application.|

### Veteran Readiness and Employment
|Questions that determine routing|Examples|Notes|
|:--|:--|:--|
|Category, topic, and Postal code|**Category**: Veteran Readiness and Employment<br>**Topic**: Financial issues<br>**Postal code**:...<br>**Queue**: VBA Anchorage RO-VR&E|❓Does Postal code or State of residence determine routing for VR&E? Noticed there could be multiple regional offices within a single state.|

### Housing assistance and home loans
|Questions that determine routing|Examples|Notes|
|:--|:--|:--|
|Category, topic, and State of Property|**Category**: Housing assistance and home loans<br>**Topic**: Specially Adapted Housing (SAH) and Special Home Adaptation (SHA) grants<br>**State of property**:...<br>**Queue**: VBA-LGY-Specially Adapted Housing|❓How does State of property determine the queue?|

### Guardianship, custodianship, or fiduciary issues
|Questions that determine routing|Examples|Notes|
|:--|:--|:--|
|Category, topic, and State of residence|**Category**: Guardianship, custodianship, or fiduciary issues<br>**Topic**: Accounting issues<br>**State of residence**:...<br>**Queue**: VBA Indy Fid Hub|Questions go to VBA ART or VBA Columbia Fid Hub? if conditional rules fail.|
