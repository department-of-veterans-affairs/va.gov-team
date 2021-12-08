# Exclusions to Appointments Shown

The mobile appointment service (MAS) is our current source for VA appointment data, past and present. It collects both appointments from VistA as well as video appointments from TMP and VCM.

There is an exclusion list managed by VAMF in the MAS that causes select appointments not to display in VAOS.

The system of record for this exclusion list lives in [MACM documentation](https://coderepo.mobilehealth.va.gov/projects/MACM/repos/vaec-map-consul-prod/browse/mobile-appointment-service.yml?at=refs%2Fheads%2Fprod#1).

## Stop Code Exclusions

There are some clinics that are created for VA staff to organize a schedule of patients or have a clinic to schedule into, but the patients don't really know they are "scheduled." These are used to capture workload or arrange other appointments in an easier way for staff to know they are happening. Sites are supposed to set these clinics parameters to "No" for "Display Clin Appt to Patients."


| Stop Code | Type | Description |
| ---- | ---- | --- |
| 683 | Primary | HT NON-VIDEO MONITORING |
| 901 | Primary | TELE-ICU PATIENT SITE |
| 137 | Secondary | TELE POST DEPLOY PROV SITE |
| 189 | Secondary | STORE & FORWARD HOME PROV SITE |
| 440 | Secondary | TELE FIT & ADJUST PROV SITE |
| 445 | Secondary | C&P VIA CVT PROV SITE |
| 447 | Secondary | IDES VIA CVT PROV SITE |
| 491 | Secondary | TELETRANSPLANT PROV SITE |
| 465 | Secondary | LOCALLY DEFINED |
| 467 | Secondary | LOCALLY DEFINED |
| 648 | Secondary | RT CVT W NONVAMC PROVID LOC |
| 673 | Secondary |CLINICAL TEAM CONFERENCE |
| 679 | Secondary | NC CVT TO HOME PROVID LOC |
| 692 | Secondary | CVT PRV SITE SAME DIV/STA |
| 693 | Secondary | RT CLIN VD TH PRV SITE(DIFSTA) |
| 695 | Secondary | SF TH PRV SITE SAME DIV/STA |
| 696 | Secondary | SF TH PRV SITE(DIFSTA) |
| 697 | Secondary | CHART CONSULT |
| 698 | Secondary | SF TELECARE FROM NONVAMC PROV |
| 699 | Secondary | CVT EMERGENCY CONSULT |
| 708 | Secondary | TELE SMOKE CESS PROV SITE |
| 724 | Secondary | OEND ED CVT PRV SITE |
| 111 | Primary or Secondary | TELE-PATHOLOGY |
| 685 | Primary or Secondary | HT PROGRAM PATIENTS |


## VistA Site Exclusions

There are VistA sites that may come back for some MVI records in SQA, but which MAS cannot query for appointments. Without these sites excluded, appointment queries would fail because MAS would get unavoidable errors back from VIA.


| Stop Code | Description |
| ---- | ---- |
| 200  | AUSTIN TX  DPC |
| 500  | ZZ ALBANY NY  VAMC - inactive |
| 741  | HEALTH ADMINISTRATION CENTER  CO  OTHER |
| 510 |  |
