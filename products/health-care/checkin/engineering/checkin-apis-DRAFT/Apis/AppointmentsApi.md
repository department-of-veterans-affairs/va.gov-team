# AppointmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkinPatient**](AppointmentsApi.md#checkinPatient) | **POST** /appointments/{appt-id}/checkin | Check a patient in
[**getAppointments**](AppointmentsApi.md#getAppointments) | **GET** /appointments | Retrieves a list of appointments
[**getSingleAppt**](AppointmentsApi.md#getSingleAppt) | **GET** /appointments/{appt-id} | Retrieves a single appointment


<a name="checkinPatient"></a>
# **checkinPatient**
> checkinPatient(appt-id, UNKNOWN\_BASE\_TYPE)

Check a patient in

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appt-id** | **String**|  | [default to null]
 **UNKNOWN\_BASE\_TYPE** | [**UNKNOWN_BASE_TYPE**](../Models/UNKNOWN_BASE_TYPE.md)| The appt check in information | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getAppointments"></a>
# **getAppointments**
> getAppointments()

Retrieves a list of appointments

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getSingleAppt"></a>
# **getSingleAppt**
> getSingleAppt(appt-id)

Retrieves a single appointment

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appt-id** | **String**|  | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

