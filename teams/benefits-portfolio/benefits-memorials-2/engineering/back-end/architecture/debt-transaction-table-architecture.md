# Digital Dispute Tracking Implementation Plan

## Summary

This document outlines the implementation plan for tracking digital dispute submissions to prevent duplicate submissions per debt. The plan includes a unified transactions table approach that will also support future Pay.gov payment integration.

## Current State:

### Existing Digital Dispute Implementation

**Location**: `modules/debts_api/app/controllers/debts_api/v0/digital_disputes_controller.rb`

**Current Flow**:
1. Frontend sends only PDF files to `/debts_api/v0/digital_disputes` endpoint
2. `DigitalDisputeSubmissionService` validates PDFs and submits to DMC
3. No local persistence or tracking of submissions
4. No association with specific debts being disputed

**Critical Gap**: No way to prevent duplicate submissions per debt because debt identification is missing.

### DMC Integration Details

**Current DMC Payload**:
```json
{
  "file_number": "veteran_file_number", 
  "dispute_pdfs": [
    {
      "file_name": "sanitized_filename.pdf",
      "file_contents": "base64_encoded_pdf_data"
    }
  ]
}
```

**Key Issue**: DMC debt IDs are unstable - the same debt can have different IDs on different days.


## Problem Statement

1. **No Duplicate Prevention**: Cannot prevent multiple dispute submissions for the same debt
2. **No Tracking**: No persistence of dispute submissions in local database
3. **No Status Updates**: No mechanism to track dispute progress after submission
4. **Missing Debt Association**: Disputes not linked to specific debts
5. **Unstable External IDs**: DMC debt IDs change over time

## Architectural Options

### Shared Characteristics Across Transaction Types
- Digital Disputes: Submit documents for specific debts
- Pay.gov Payments: Make payments on specific debts  
- Form 5655 Waivers: Request debt forgiveness for specific debts

## Option 1: Unified Transactions Table

### Approach
Single table to handle all debt-related transactions using a transaction_type discriminator.

### Pros
- **Simple Architecture**: One table, one model to maintain
- **Consistent Patterns**: Shared logic across all transaction types
- **Easy Cross-Transaction Queries**: Simple to find all transactions for a debt
- **Unified Duplicate Prevention**: Single implementation for all types
- **Reduced Code Duplication**: Shared services and concerns

### Cons
- **Schema Compromises**: Must accommodate all transaction types in one table
- **Complex Business Logic**: STI or polymorphic behavior needed for type-specific logic
- **Migration Risk**: Must migrate existing Form5655 functionality
- **Performance Impact**: Larger table with mixed use patterns
- **Team Boundaries**: Single table owned by multiple teams

### Proposed Schema

```ruby
create_table :debt_transactions do |t|
  # Core identification
  t.string :transaction_type, null: false  # 'dispute', 'payment', 'waiver'
  t.uuid :user_uuid, null: false
  t.references :user_account, foreign_key: true, type: :uuid
  
  # Debt correlation (handles unstable DMC IDs)
  t.jsonb :debt_identifiers, null: false  # composite IDs for tracking
  
  # Transaction details
  t.text :form_data_ciphertext            # encrypted submission data
  t.text :ipf_data_ciphertext             # in-progress form data (for Form5655 compat)
  t.jsonb :public_metadata, default: {}   # non-sensitive tracking data
  t.text :encrypted_kms_key
  
  # State tracking
  t.integer :state, default: 0            # pending, submitted, completed, failed
  t.string :error_message
  t.string :external_reference_id         # DMC confirmation, Pay.gov txn ID, etc.
  
  # Audit trail
  t.timestamps
  t.datetime :submitted_at
  t.datetime :completed_at
end
```

## Option 2: Separate Tables + Transaction Log

### Approach
Keep domain-specific tables for each transaction type, plus a unified log for reporting and duplicate prevention.

### Pros
- **Domain Optimization**: Each table optimized for its specific use case
- **Schema Flexibility**: Dispute, payment, and waiver fields can differ significantly
- **Migration Safety**: Keep existing Form5655 table untouched
- **Team Ownership**: Different teams can own their domain tables
- **Performance**: Smaller, focused indexes per domain
- **Clear Boundaries**: Distinct models with focused responsibilities

### Cons
- **Increased Complexity**: Multiple tables to maintain
- **Code Duplication**: Debt correlation logic repeated across domains
- **Cross-Domain Queries**: More complex to query across transaction types
- **Maintenance Overhead**: More models, controllers, services to maintain
- **Synchronization**: Need to keep log table in sync with domain tables

### Proposed Schema

```ruby
# Keep existing Form5655 table
# Keep existing form5655_submissions table unchanged

# New dispute-specific table
create_table :digital_disputes do |t|
  t.uuid :user_uuid, null: false
  t.references :user_account, foreign_key: true, type: :uuid
  t.jsonb :debt_identifiers, null: false
  t.text :form_data_ciphertext
  t.text :encrypted_kms_key
  t.integer :state, default: 0
  t.string :error_message
  t.string :dmc_reference_id
  t.integer :pdf_count
  t.integer :total_file_size_bytes
  t.timestamps
  t.datetime :submitted_at
  t.datetime :completed_at
end

# Future payment-specific table
create_table :debt_payments do |t|
  t.uuid :user_uuid, null: false
  t.references :user_account, foreign_key: true, type: :uuid
  t.jsonb :debt_identifiers, null: false
  t.integer :amount_cents, null: false
  t.string :payment_method
  t.string :external_transaction_id
  t.string :gateway_response_id
  t.integer :gateway_fee_cents
  t.integer :state, default: 0
  t.string :error_message
  t.timestamps
  t.datetime :submitted_at
  t.datetime :completed_at
end

# Unified transaction log for reporting and duplicate prevention
create_table :debt_transaction_logs do |t|
  # Polymorphic reference to actual transaction record
  t.references :transactionable, polymorphic: true, null: false
  
  # Core identification
  t.string :transaction_type, null: false     # 'dispute', 'payment', 'waiver'
  t.uuid :user_uuid, null: false
  
  # Debt correlation (for duplicate prevention & reporting)
  t.jsonb :debt_identifiers, null: false     # composite debt IDs
  
  # Transaction summary (for reporting without joining)
  t.jsonb :summary_data, default: {}         # type-specific summary info
  
  # State tracking
  t.string :current_state                    # 'pending', 'submitted', 'completed', 'failed'
  t.string :external_reference_id            # DMC ID, Pay.gov txn ID, etc.
  
  # Timeline
  t.datetime :transaction_started_at, null: false
  t.datetime :transaction_completed_at
  t.timestamps
  
  # Indexes for common queries
  t.index [:user_uuid, :transaction_type]
  t.index [:file_number, :transaction_type]
  t.index "using gin (debt_identifiers)"      # JSONB index for debt queries
  t.index [:transaction_started_at]
end
```

## Option 3: Domain Tables Only

### Approach
Keep domain-specific tables for each transaction type without a unified transaction log.

### Pros
- **Maximum Simplicity**: Fewest tables to maintain
- **Domain Focus**: Each table completely optimized for its specific use case
- **Team Autonomy**: Teams can work completely independently
- **Performance**: No overhead of maintaining log entries
- **Clear Ownership**: Each domain owns its data completely
- **Minimal Complexity**: No synchronization between tables needed

### Cons
- **No Cross-Domain Duplicate Prevention**: Can't easily check if debt has any related transactions across types
- **Limited Unified Reporting**: Complex queries needed to get cross-domain analytics
- **No Centralized Audit Trail**: Must query multiple tables for complete activity history
- **Future Constraints**: Adding cross-domain business rules requires touching all domains
- **Complex Analytics**: Reporting across transaction types requires JOINs and complex logic

### Proposed Schema

```ruby
# Keep existing Form5655 table unchanged
# Keep existing form5655_submissions table

# New dispute-specific table
create_table :digital_disputes do |t|
  t.uuid :user_uuid, null: false
  t.references :user_account, foreign_key: true, type: :uuid
  t.jsonb :debt_identifiers, null: false
  t.text :form_data_ciphertext
  t.text :encrypted_kms_key
  t.integer :state, default: 0
  t.string :error_message
  t.string :dmc_reference_id
  t.integer :pdf_count
  t.integer :total_file_size_bytes
  t.timestamps
  t.datetime :submitted_at
  t.datetime :completed_at
end

# Future payment-specific table rough estimate:
create_table :debt_payments do |t|
  t.uuid :user_uuid, null: false
  t.references :user_account, foreign_key: true, type: :uuid
  t.jsonb :debt_identifiers, null: false
  t.integer :amount_cents, null: false
  t.string :payment_method
  t.string :external_transaction_id
  t.string :gateway_response_id
  t.integer :gateway_fee_cents
  t.integer :state, default: 0
  t.string :error_message
  t.timestamps
  t.datetime :submitted_at
  t.datetime :completed_at
end


Conclusion
As of 06/26/2026 the plan is to implement option 2, seperate domain tables with a seperate debt transactions log
