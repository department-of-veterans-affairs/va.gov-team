# Putting Chief Complaint field into VistA

- The Chief Complaint Field is a designated text blob or PDF that is desired to be entered into PGD
- Previous research into putting this field into VistA/CPRS concluded that PGD was the best place instead 

#### Using FHIR Questionnaire/VAMF into PGD

- Lighthouse is planning to implement an API to work with PGD, however the project is fairly far out in time so this probably won't be an option
- The best approach currently to investigate is to write to PGD using VAMF and a proxy. The proxy is needed to write data on behalf of a veteran
- PGD is FHIR based, which means that you can not just add fields but have to use the definitions in FHIR.
- FHIR has a Questionnaire and QuestionnaireResponse resources which would probably be what would be used.
- The Ruby fhir_client gem can parse and generate the appropriate fhir json


#### GetCare APP

- There is a GetCare app that also works with PGD through VAMF
- GetCare is mobile app used for all encompassing VHA appointments -
- GetCare is used for senior appointments showing pre visit agenda, entering family history, senior prescriptions
- GetCare is a resource for investigation to how it accesses PGD and to consider avoiding duplication if that applies


## Screen shots

- [RFV-Chief Complaint Whiteboard](https://drive.google.com/file/d/1wgXiIbyiUzT4vJmzobL6o3z7buRs2hwJ/view?usp=sharing)


