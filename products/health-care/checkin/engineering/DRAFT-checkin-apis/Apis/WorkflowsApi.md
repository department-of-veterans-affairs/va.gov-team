# WorkflowsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPatient**](WorkflowsApi.md#addPatient) | **POST** /workflows/{workflowId}/patients | Adds a patient to a workflow
[**getWorkflow**](WorkflowsApi.md#getWorkflow) | **GET** /workflows/{id} | Gets a workflow
[**getWorkflowPatient**](WorkflowsApi.md#getWorkflowPatient) | **GET** /workflows/{workflowId}/patients/{patientId} | find a patient in a workflow
[**getWorkflowPatients**](WorkflowsApi.md#getWorkflowPatients) | **GET** /workflows/{workflowId}/patients | Gets patients in a workflow
[**postWorkflow**](WorkflowsApi.md#postWorkflow) | **POST** /workflows/{id} | Creates a workflow
[**setStatusForPatient**](WorkflowsApi.md#setStatusForPatient) | **PUT** /workflows/{id}/actions/change-status | change status of patient in workflow
[**workflowClear**](WorkflowsApi.md#workflowClear) | **DELETE** /workflows/{id}/actions/clear | clear all patients from workflow


<a name="addPatient"></a>
# **addPatient**
> addPatient(workflowId, UNKNOWN\_BASE\_TYPE)

Adds a patient to a workflow

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]
 **UNKNOWN\_BASE\_TYPE** | [**UNKNOWN_BASE_TYPE**](../Models/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getWorkflow"></a>
# **getWorkflow**
> Object getWorkflow(id, status)

Gets a workflow

    Returns a workflow with states

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **status** | **String**|  | [optional] [default to null]

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkflowPatient"></a>
# **getWorkflowPatient**
> getWorkflowPatient(workflowId, patientId)

find a patient in a workflow

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]
 **patientId** | **String**| patient ICN | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getWorkflowPatients"></a>
# **getWorkflowPatients**
> Object getWorkflowPatients(workflowId)

Gets patients in a workflow

    Returns a list of patients in a workflow

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="postWorkflow"></a>
# **postWorkflow**
> postWorkflow(id, UNKNOWN\_BASE\_TYPE)

Creates a workflow

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **UNKNOWN\_BASE\_TYPE** | [**UNKNOWN_BASE_TYPE**](../Models/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="setStatusForPatient"></a>
# **setStatusForPatient**
> setStatusForPatient(id, UNKNOWN\_BASE\_TYPE)

change status of patient in workflow

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **UNKNOWN\_BASE\_TYPE** | [**UNKNOWN_BASE_TYPE**](../Models/UNKNOWN_BASE_TYPE.md)| The status to move to and patient information | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="workflowClear"></a>
# **workflowClear**
> workflowClear(id)

clear all patients from workflow

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

