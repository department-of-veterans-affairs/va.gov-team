# High Level Product Decisions: View payment history
**VSA eBenefits Team | May 2020**

---

This is to help guide and memorialize decisions made about different functionalities and behaviors for the feature we are working with.
## Soap Service is not returning 'returned payments'
`Date decided`  
**Description.**  
The team was tasked with finding ONE call that would return payment data given a participant_id including payments and returned payments.

*We were unable to get /any/ data related to returned payments*

### User
participant_id: `600036156`

### First call
```
paymentInformationWebService -->
retrievePaymentSummary
```

### Request Payload
```
<soapenv:Body>
  <ws:retrievePaymentSummary>
    <!--Optional:-->
    <ParticipantId>600036156</ParticipantId>
  </ws:retrievePaymentSummary>
</soapenv:Body>
```

We were able to get payment data from this call. We were encouraged to see the `<returnPayment>` object in a `<payment>` object but when we searched an entire payload for an example with that data populated, we couldn’t find a single payment with that info.

### Second call
```
paymentInformationWebService --> 
retrieveReturnedPaymentSummaryFilter
```

### Request payload
```
<soapenv:Body>
  <ws:retrieveReturnedPaymentSummaryFilter>
    <!--Optional:-->
    <ParticipantId>600036156</ParticipantId>
    <!--Optional:-->
    <FromPaymentDate>1980-02-03</FromPaymentDate>
    <!--Optional:-->
    <ToPaymentDate>2020-02-03</ToPaymentDate>
  </ws:retrieveReturnedPaymentSummaryFilter>
</soapenv:Body>
```

We were not able to get any information from this call with the provided participant_id. Even with a date range of 100 years and knowing that the user had returned payments since it was reflected in the UI.

### Third call
```
paymentInformationWebService --> 
retrievePaymentSummaryFilter
```

### Request Payload
```
   <soapenv:Body>
      <ws:retrievePaymentSummaryFilter>
         <!--Optional:-->
         <ParticipantId>600036156</ParticipantId>
         <!--Optional:-->
         <FromPaymentDate>1900-02-03</FromPaymentDate>
         <!--Optional:-->
         <ToPaymentDate>2020-02-03</ToPaymentDate>
      </ws:retrievePaymentSummaryFilter>
   </soapenv:Body>
```

We fired off this call with the same request payload as the returned payment filter payload as a sanity check. We were successful with getting back data.

## Summary
Is this a user error on our part or could there be system error?

_Note/ Guiding principle_
- Action item

**TL;DR - what does this mean?  what do we do next?**
We need to get confirmation from BGS that we are either doing the call wrong or there is an error in BGS
