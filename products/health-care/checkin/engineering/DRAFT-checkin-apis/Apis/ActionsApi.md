# ActionsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setStatusForPatient**](ActionsApi.md#setStatusForPatient) | **PUT** /workflows/{id}/actions/change-status | change status of patient in workflow
[**workflowClear**](ActionsApi.md#workflowClear) | **DELETE** /workflows/{id}/actions/clear | clear all patients from workflow


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

