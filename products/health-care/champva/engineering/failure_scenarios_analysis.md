# IVC CHAMPVA Service Integration Failure Analysis

## Architecture Overview

**VES Integration**: Direct API calls during form submission (synchronous)
**Pega Integration**: Asynchronous S3-based delivery system (files uploaded to S3 bucket for Pega to pick up)

## Form Submission Failure Scenarios

### VES (Veterans Experience Services) Integration Failures

VES is called directly during form submission with graceful degradation.

| Failure Type | User Experience | System Behavior |
|--------------|-----------------|------------------|
| **Complete Service Outage** | ✅ Form submits successfully | Connection errors logged, submission proceeds |
| **HTTP 4xx/5xx Errors** | ✅ Form submits successfully | API errors logged, submission proceeds |
| **Network Timeouts** | ✅ Form submits successfully | Timeout errors logged, submission proceeds |
| **Feature Flag Disabled** | ✅ Form submits successfully | No VES submission attempted |

**VES Behavior**: Non-blocking graceful degradation - all failures are logged but form submission continues normally.

### Infrastructure Failures During Form Submission

These failures directly impact what the client sees when POSTing to `/ivc_champva/v1/forms`:

| Failure Type | User Experience | System Response |
|--------------|-----------------|------------------|
| **Database Insertion Failure** | ❌ **500 Error Response** | `ActiveRecord::RecordInvalid` - no form records created |
| **S3 Upload Failure** | ❌ **500 Error Response** | Files/metadata cannot be uploaded to S3 bucket |

**S3 Upload Failure Impact**: 
- Users receive 500 error: "An unknown error occurred while uploading document(s)"
- No form, supporting documents, or metadata JSON uploaded to S3 bucket
- Pega cannot process the form (nothing to pick up)

**Database Failure Impact**:
- Users receive 500 error with database validation message
- No `IvcChampvaForm` records created
- No tracking of form submission in system

## Pega Asynchronous Processing

### Normal Pega Flow
1. Form submission creates `IvcChampvaForm` records with `pega_status: nil`
2. Metadata JSON uploaded to S3 bucket triggers Pega lambda
3. Pega processes files and calls back via `/forms/status_updates` endpoint
4. Status updated to 'Processed' or 'Not Processed'

### Pega Processing Failures (Post-Submission)

These occur after successful form submission and are handled by background monitoring:

| Failure Scenario | Detection Method | System Response |
|------------------|------------------|------------------|
| **Pega doesn't pick up files from S3** | DataDog "Missing Pega Status" alerts | Background job monitoring via `MissingFormStatusJob` |
| **Pega processing errors** | DataDog alerts + email notifications | Failure emails sent to users after threshold days |
| **Pega API errors in background jobs** | `PegaApiError` caught and logged | Background jobs return `false`, errors logged |

### Background Job Pega API Failures

The `MissingFormStatusJob` makes actual Pega API calls to check processing status:

```ruby
# In MissingFormStatusJob#num_docs_match_reports?
rescue IvcChampva::PegaApi::PegaApiError => e
  Rails.logger.error "IVC Champva Forms - PegaApiError: #{e.message}"
  false  # Job continues, error logged
end
```

**Behavior**: Pega API failures in background jobs are caught, logged, and don't block processing.

## Key Architectural Insights

1. **Form Submission** (`/ivc_champva/v1/forms`):
   - VES: Direct API call with graceful degradation
   - Pega: No direct API calls - only S3 upload and database records

2. **Pega Integration**: Asynchronous pickup system
   - Success depends on S3 upload success during form submission
   - Actual Pega processing happens independently via S3 triggers
   - Monitoring via background jobs and DataDog alerts

3. **Failure Impact**:
   - S3 failures: Immediate 500 error to user
   - Database failures: Immediate 500 error to user  
   - Pega pickup failures: Detected by monitoring, handled by background processes
