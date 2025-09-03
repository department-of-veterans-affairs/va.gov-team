# VA.gov Payment History Architecture

This document outlines the architecture flow for a user accessing their payment history on VA.gov

## High-Level Architecture

```mermaid
sequenceDiagram
    participant Veteran
    participant VAGov as VA.gov Frontend
    participant VetsAPI as vets-api
    participant BGS as BGS (Benefits Gateway Service)

    Veteran->>VAGov: Login to VA.gov (LOA3 required)
    VAGov->>VAGov: Navigate to `/va-payment-history/payments/`
    VAGov->>VetsAPI: GET `/v0/profile/payment_history`
    VetsAPI->>BGS: SOAP request for payment data
    BGS-->>VetsAPI: Return payment information
    VetsAPI-->>VAGov: JSON response with payments
    VAGov->>Veteran: Display payment history tables
```

## Detailed Implementation Flow

```mermaid
sequenceDiagram
    participant Veteran
    participant VAGov as VA.gov Frontend
    participant VetsAPI as vets-api
    participant Controller as PaymentHistoryController
    participant BGS as BGS (Benefits Gateway Service)

    Veteran->>VAGov: Login to VA.gov (LOA3 required)

    Note over Veteran,VAGov: Multiple Navigation Paths Available

    VAGov->>Veteran: Path 1: Land on `/my-va` dashboard page
    Veteran->>VAGov: Click "Review your payment history"

    Note over Veteran,VAGov: OR

    VAGov->>Veteran: Path 2: Land on VA.gov homepage
    Veteran->>VAGov: Click "View your payment history"<br/>under Disability section

    Note over Veteran,VAGov: OR

    Veteran->>VAGov: Path 3: Navigate directly to<br/>`/va-payment-history/payments/`

    Note over Veteran,VAGov: All paths lead to payment history page <br/>`/va-payment-history/payments/`
    VAGov->>VetsAPI: GET `/v0/profile/payment_history`
    Note over VetsAPI: Check feature flag `payment_history`

    Note over VetsAPI,Veteran: Feature flag enabled scenario
    Note over VetsAPI: Authorization check (BGS access)<br/>LOA3 verification required
    VetsAPI->>Controller: index action

    Note over VetsAPI,Veteran: Feature flag disabled scenario
    Note over VetsAPI,Veteran: → See "No payment data found scenario" below

    Controller->>BGS: SOAP request with SSN, ICN,<br/>Participant ID, File Number
    BGS-->>Controller: Return payment data with fields:<br/>pay_check_dt, pay_check_amount,<br/>pay_check_type, payment_method,<br/>bank_name, account_number,<br/>returned_check_* fields

    Note over Controller,Veteran: Payment data available scenario
    Controller->>Controller: PaymentHistoryAdapter.process_payments()
    Note over Controller: Mask account numbers<br/>(show only last 4 digits)<br/>Filter first-party disbursements only<br/>Recategorize Hardship → CH33-Hardship
    Controller->>Controller: Separate payments vs return_payments
    Controller->>VAGov: JSON response with `payments` and<br/>`return_payments` arrays
    VAGov->>Veteran: Display payment tables with:<br/>Date, Amount, Type, Method, Bank, Account<br/>Pagination and masked accounts

    Note over Controller,Veteran: No payment data found scenario
    Controller->>VAGov: Empty response or no data flag
    VAGov->>Veteran: "We don't have a record of VA payments for you"<br/>Contact: 800-827-1000

    Note over Controller,Veteran: System error occurred scenario
    Controller->>VAGov: Error response
    VAGov->>Veteran: "We're sorry. Something went wrong on our end"<br/>Contact: 844-698-2311 (TTY: 711)
```
