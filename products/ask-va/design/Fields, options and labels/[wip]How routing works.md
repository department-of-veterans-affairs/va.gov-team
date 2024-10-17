# How Ask VA routing works 
Last updated by @beckyphung: October 17, 2024  

This doc explains how the Ask VA CRM routes inquiries to the correct queue. 


**Jump to:** 
- [Types of routing rules](#types-of-routing-rules) 


## Types of routing rules 
Specific questions in the Ask VA form determine routing. There are different types of routing rules that depend on answers to different questions. We describe each combination in the table below.  

|Questions that determine routing|Examples| 
|:--|:--| 
|Category and topic|- **Category**: Disability compensation<br>- **Topic**: Any topic within this category<br>- **Queue**: VBA ART| 
|Category, topic, and subtopic|- **Category**: Health care<br>- **Topic**: Family member health benefits<br>- **Subtopic**: CHAMPVA benefits<br>- **Queue**: VHA HAC CHAMPVA (Civilian Hlth&Med Prog)| 
|Category, topic, and School facility code|- **Category**: Education benefits and work study<br>- **Topic**: Benefits for survivors and dependents<br>- **School facility code**:...<br>- **Queue**: Buffalo CSR|
|Category, topic, and State of school|- **Category**: Education benefits and work study<br>- **Topic**: Family member health benefits<br>- **Subtopic**: CHAMPVA benefits<br>- **Queue**: VHA HAC CHAMPVA (Civilian Hlth&Med Prog)| 
|Category, topic, and State of residence|- **Category**: Health care<br>- **Topic**: Family member health benefits<br>- **Subtopic**: CHAMPVA benefits<br>- **Queue**: VHA HAC CHAMPVA (Civilian Hlth&Med Prog)| 
