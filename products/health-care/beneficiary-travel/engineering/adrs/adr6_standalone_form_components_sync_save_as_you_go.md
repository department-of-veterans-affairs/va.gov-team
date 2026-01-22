# Decision: Use standalone VA.gov form components with synchronous save-as-you-go

Status: Proposed
Date: Sept 23, 2025

## Context
Travel Pay's Simple, Mileage-Only Claims (SMOC) and Complex Claims (upcoming) forms require different effort in terms of user input. SMOC forms take less than a minute and can easily be restarted as the only inputs are radio buttons. Complex claims require creating new expenses,
describing the expenses, and uploading receipts. It is possible that while a user is looking for a receipt, their session times out and they lose progress on the complex form. We need a way to prevent users from losing all their progress, but the limitations on the save-in-progress
feature of the forms library prevent us from easily integrating with that feature.

### Concepts
* SMOC forms are sub-1-minute to complete
* Complex claims forms can be more complicated
  * They may take longer because a user may have more than 1 expense
  * A user may be waiting for a receipt to arrive by email or snail mail
* Save-in-progress: a feature of the forms library that save progress of a form as the user is filling it out
* Save-as-you-go: a generic feature of modern forms that prevents users from losing their progress if they step away from the form

## Decision Drivers
* Work around single-form limitation of save-in-progress
* Balance implementation effort vs committed timelines
* Avoid premature optimization that locks us in to poor quality long-term
* More easily achieve parity with mobile
* Avoid multiple sources of truth

## Options
### 1: Use the Forms Library
This is the obvious option. It is common on VA.gov to use the forms library. However, we predict it will be a common use case to start more than one travel claim at a time. While a user is waiting on or collecting receipts, they may start a new claim for another appointment. 
The Forms Library has save-in-progress out of the box, but will not allow users to start multiple claims at a time. Staring a new claim with one in progress will delete the saved claim and replace it with the new one.

### 2: Use standalone VA.gov form components - synchronous save-as-you-go 
Leverage the standalone VA.gov form components described on design.va.gov. The forms for complex claims consist of simple components. The drawback of this approach is that save-as-you-go does not come out of the box. We either have to implement it ourselves, or find a workaround. 
In this case, the simplest workaround is to use the system of record (BTSSS Dynamics CRM) to save the claims at certain points. These require a separate network call, but the architecture and flow of complex claims mitigates these extra network calls.

### 3: Use standalone VA.gov form components - asynchronous save-as-you-go
Similar to option 2, but we'd be building our own save-in-progress to handle simultaneous claims. This would require further architecture and system design. Implementation of this would increase the overall delivery time of complex claims. This approach also increases the chance of data 
integrity errors due to adding a source of truth, no matter how ephemeral. However, this system would allow us to save multiple in-progress forms in a performance-conscious way.

## Decision
Option 2 allows us to move forward with a good approach (in terms of user experience, softare quality, and technical performance) that balances delivery speed with quality.

### Pros
* Users can start multiple forms at a time (desirable UX)
* Delivery speed remains on track (reduced arch + complexity)
* Optimization opportunities can be measured first (prevents unnecessary complexity)

### Cons
* Performance is slower up-front
* Deviating from save-in-progress: a known, accepted pattern
