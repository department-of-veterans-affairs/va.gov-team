# Overview

There are two issues with our prefill, one is a data nesting issue which is causing the prefill not to work on staging and the second is that the data returned does not include anything about military addresses.

## Issue 1

### The problem/ solution

Prefill is supposed to work out of the box but this is predicated on the idea that the data coming from the prefill URL and the data on the front end is named the same. Our prefill data for the veteran is coming in called `veteranInformation` and on the front end it is wrapped in an object called `veteranContactInformation`. We need to alter the back end prefill endpoint so that the data returned is nested correctly, then prefill works on the form 686c-674.


#### side note

On the front end the call to the prefill URL is failing on localhost with an error from EVSS

```
{ title: "Bad Gateway", detail: "Received an an invalid response from the upstream server", code: "EVSS502" }
```

We belive this is because the class that all prefill inherits from makes a call to EVSS, so when we create our own prefill it makes that call regardless.

## Issue 2

### The problem

The data returned by our prefill endpoint does not include any data about military address however our form includes a specific checkbox and extra fields pertaining to military address. This means that when an address is prefilled and it is a military address it will not trigger the checkbox nor the extra fields to show up. This may be an issue in that vet360, where we are getting the prefill data from, might not have this `military address/ non-military address` data and if that is the case we may need to add logic to the back end prefill to send this data in the prefill object returned.


