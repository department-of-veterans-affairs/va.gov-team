# DemographicsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPatientDemographics**](DemographicsApi.md#getPatientDemographics) | **GET** /demographics | Retrieve patient demographics
[**updatePatientDemographics**](DemographicsApi.md#updatePatientDemographics) | **PUT** /demographics | Update patient demographics


<a name="getPatientDemographics"></a>
# **getPatientDemographics**
> getPatientDemographics(patient-id)

Retrieve patient demographics

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patient-id** | **String**|  | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updatePatientDemographics"></a>
# **updatePatientDemographics**
> updatePatientDemographics(patient-id, UNKNOWN\_BASE\_TYPE)

Update patient demographics

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patient-id** | **String**|  | [default to null]
 **UNKNOWN\_BASE\_TYPE** | [**UNKNOWN_BASE_TYPE**](../Models/UNKNOWN_BASE_TYPE.md)| The demographic information to update | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

