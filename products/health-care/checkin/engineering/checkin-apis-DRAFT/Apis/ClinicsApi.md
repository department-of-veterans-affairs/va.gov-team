# ClinicsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWorkflowsForStation**](ClinicsApi.md#getWorkflowsForStation) | **GET** /clinics/{sta3n}/workflows | Gets list of clinic workflows for station/division
[**patientQuery**](ClinicsApi.md#patientQuery) | **GET** /clinics/{sta3n}/patients | find patients


<a name="getWorkflowsForStation"></a>
# **getWorkflowsForStation**
> getWorkflowsForStation(sta3n)

Gets list of clinic workflows for station/division

    shows all patient in workflow and their status

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sta3n** | **String**|  | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="patientQuery"></a>
# **patientQuery**
> patientQuery(sta3n, patientId)

find patients

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sta3n** | **String**|  | [default to null]
 **patientId** | **String**| patient ICN | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

