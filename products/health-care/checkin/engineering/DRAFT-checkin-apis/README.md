# Documentation for DRAFT Check In APIs

---

While this document is in a draft state, it is intended to facilitate communication between teams.

This collection of endpoints make up the VSIP APIs fronted by the VSIP API Gateway.

***PLEASE NOTE***: These APIs are currently in the `discovery` phase, meaning
it is highly likely that they will change significantly before the beta version
is released.

Please refer to the [roadmap (forthcoming)]() know when to expect a more stable
version of these endpoints.

---

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000*

| Class             | Method                                                                             | HTTP request                                         | Description                                         |
| ----------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
| *ActionsApi*      | [**setStatusForPatient**](Apis/ActionsApi.md#setstatusforpatient)                  | **PUT** /workflows/{id}/actions/change-status        | change status of patient in workflow                |
| *ActionsApi*      | [**workflowClear**](Apis/ActionsApi.md#workflowclear)                              | **DELETE** /workflows/{id}/actions/clear             | clear all patients from workflow                    |
| *AppointmentsApi* | [**checkinPatient**](Apis/AppointmentsApi.md#checkinpatient)                       | **POST** /appointments/{appt-id}/checkin             | Check a patient in                                  |
| *AppointmentsApi* | [**getAppointments**](Apis/AppointmentsApi.md#getappointments)                     | **GET** /appointments                                | Retrieves a list of appointments                    |
| *AppointmentsApi* | [**getSingleAppt**](Apis/AppointmentsApi.md#getsingleappt)                         | **GET** /appointments/{appt-id}                      | Retrieves a single appointment                      |
| *ClinicsApi*      | [**getWorkflowsForStation**](Apis/ClinicsApi.md#getworkflowsforstation)            | **GET** /clinics/{sta3n}/workflows                   | Gets list of clinic workflows for station/division  |
| *ClinicsApi*      | [**patientQuery**](Apis/ClinicsApi.md#patientquery)                                | **GET** /clinics/{sta3n}/patients                    | find patients                                       |
| *DemographicsApi* | [**getPatientDemographics**](Apis/DemographicsApi.md#getpatientdemographics)       | **GET** /demographics                                | Retrieve patient demographics                       |
| *DemographicsApi* | [**updatePatientDemographics**](Apis/DemographicsApi.md#updatepatientdemographics) | **PUT** /demographics                                | Update patient demographics                         |
| *InsuranceApi*    | [**addPatientInsurance**](Apis/InsuranceApi.md#addpatientinsurance)                | **POST** /insurance                                  | Add patient insurance information                   |
| *InsuranceApi*    | [**getPatientInsurance**](Apis/InsuranceApi.md#getpatientinsurance)                | **GET** /insurance                                   | Retrieve patient insurance information              |
| *InsuranceApi*    | [**updatePatientInsurance**](Apis/InsuranceApi.md#updatepatientinsurance)          | **PUT** /insurance                                   | Modify patient insurance information                |
| *MedicationsApi*  | [**??**](Apis/MedicationsApi.md#??)                                                | **POST** /medications/{med-id}                       | Create a refill order                               |
| *MedicationsApi*  | [**getMedications**](Apis/MedicationsApi.md#getmedications)                        | **GET** /medications                                 | Retrieves patient medications                       |
| *PrecheckinApi*   | [**precheckin**](Apis/PrecheckinApi.md#precheckin)                                 | **GET** /pre-checkins                                | Gets a list of pre-checkin items                    |
| *VetextApi*       | [**comeIn**](Apis/VetextApi.md#comein)                                             | **POST** /come-in                                    | Notify the patient that they can enter the building |
| *VetextApi*       | [**imh**](Apis/VetextApi.md#imh)                                                   | **GET** /i-am-here                                   | Gets a list of veterans who are ready to come in    |
| *WorkflowsApi*    | [**getWorkflow**](Apis/WorkflowsApi.md#getworkflow)                                | **GET** /workflows/{id}                              | Gets a workflow                                     |
| *WorkflowsApi*    | [**getWorkflowPatient**](Apis/WorkflowsApi.md#getworkflowpatient)                  | **GET** /workflows/{workflowId}/patients/{patientId} | find a patient in a workflow                        |
| *WorkflowsApi*    | [**postWorkflow**](Apis/WorkflowsApi.md#postworkflow)                              | **POST** /workflows/{id}                             | Creates a workflow                                  |
| *WorkflowsApi*    | [**setStatusForPatient**](Apis/WorkflowsApi.md#setstatusforpatient)                | **PUT** /workflows/{id}/actions/change-status        | change status of patient in workflow                |
| *WorkflowsApi*    | [**workflowClear**](Apis/WorkflowsApi.md#workflowclear)                            | **DELETE** /workflows/{id}/actions/clear             | clear all patients from workflow                    |


<a name="documentation-for-models"></a>
## Documentation for Models



<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
