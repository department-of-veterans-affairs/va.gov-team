# MedicationsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**??**](MedicationsApi.md#??) | **POST** /medications/{med-id} | Create a refill order
[**getMedications**](MedicationsApi.md#getMedications) | **GET** /medications | Retrieves patient medications


<a name="??"></a>
# **??**
> ??(med-id, UNKNOWN\_BASE\_TYPE)

Create a refill order

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **med-id** | **String**|  | [default to null]
 **UNKNOWN\_BASE\_TYPE** | [**UNKNOWN_BASE_TYPE**](../Models/UNKNOWN_BASE_TYPE.md)| The medication information | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getMedications"></a>
# **getMedications**
> getMedications()

Retrieves patient medications

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

