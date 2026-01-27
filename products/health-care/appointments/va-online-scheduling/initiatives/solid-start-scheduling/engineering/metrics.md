# VASS Module - Metrics Tracking Documentation

## Overview

The VASS (Virtual Agent Scheduling System) module implements comprehensive metrics tracking using Datadog's StatsD client for performance monitoring, error analysis, and operational visibility.

**Total Metrics**: 22 (14 controller + 8 infrastructure)

---

## Table of Contents

1. [Naming Convention](#naming-convention)
2. [Complete Metric List](#complete-metric-list)
3. [Tagging Strategy](#tagging-strategy)
4. [Implementation](#implementation)
5. [Usage Example](#usage-example)
6. [Monitoring & Alerts](#monitoring--alerts)
7. [Testing](#testing)

---

## Naming Convention

All VASS metrics follow this pattern:

```
api.vass.{layer}.{component}.{action}.{outcome}
```

**Layers**:

- `controller` - User-facing API endpoints (success/failure)
- `infrastructure` - Rate limiting, OTC lifecycle, availability scenarios

**Examples**:

```ruby
api.vass.controller.appointments.create.success
api.vass.controller.appointments.create.failure
api.vass.infrastructure.availability.no_slots_available
```

---

## Complete Metric List

### Controller Metrics (14 metrics: 7 endpoints × 2 outcomes)

| Endpoint                        | Success Metric                      | Failure Metric                      | Purpose                       |
| ------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------- |
| `POST /request-otc`             | `sessions.request_otc.success`      | `sessions.request_otc.failure`      | OTC generation & delivery     |
| `POST /authenticate-otc`        | `sessions.authenticate_otc.success` | `sessions.authenticate_otc.failure` | OTC validation & JWT creation |
| `GET /appointment-availability` | `appointments.availability.success` | `appointments.availability.failure` | Availability checks           |
| `GET /topics`                   | `appointments.topics.success`       | `appointments.topics.failure`       | Agent skills retrieval        |
| `POST /appointment`             | `appointments.create.success`       | `appointments.create.failure`       | Appointment creation          |
| `GET /appointment/:id`          | `appointments.show.success`         | `appointments.show.failure`         | Appointment retrieval         |
| `POST /appointment/:id/cancel`  | `appointments.cancel.success`       | `appointments.cancel.failure`       | Appointment cancellation      |

**Common Tags**: `service:vass`, `endpoint:{action}`, `http_method:{GET|POST}`, `http_status:{code}`, `error_type:{ErrorClass}` (failures only)

### Infrastructure Metrics (8 metrics)

**Rate Limiting** (2 metrics):

- `api.vass.infrastructure.rate_limit.generation.exceeded` - OTC generation violations
- `api.vass.infrastructure.rate_limit.validation.exceeded` - OTC validation violations

**OTC Validation Issues** (2 metrics):

- `api.vass.infrastructure.session.otc.expired` - Expired OTC attempts (UX issues)
- `api.vass.infrastructure.session.otc.invalid` - Invalid OTC attempts (user errors)

**Availability Scenarios** (4 metrics):

- `api.vass.infrastructure.availability.no_slots_available` - **CRITICAL**: In valid window, zero slots (capacity problem)
- `api.vass.infrastructure.availability.already_booked` - Veteran checking after booking (UX issue)
- `api.vass.infrastructure.availability.next_cohort` - Booking window not open yet (early engagement)
- `api.vass.infrastructure.availability.no_cohorts` - Outside all cohort windows (education opportunity)

**Tags**: `service:vass` (all infrastructure metrics)

---

## Tagging Strategy

### Standard Tags (All Metrics)

```ruby
'service:vass'  # Always present
```

### Controller Tags (Auto-generated)

```ruby
tags: [
  'service:vass',
  'endpoint:create',      # Action name
  'http_method:POST',     # HTTP verb
  'http_status:200',      # Response status
  'error_type:VassApiError'  # Failures only
]
```

### Infrastructure Tags

```ruby
tags: ['service:vass']  # Minimal tagging for infrastructure events
```

---

## Implementation

### Architecture

```
Controllers (AppointmentsController, SessionsController)
    ↓ include
MetricsTracking Concern
    ↓ uses
MetricsConstants Module (22 base metrics)
    ↓ sends to
StatsD → Datadog
```

### Key Files

| File                                                 | Purpose                               |
| ---------------------------------------------------- | ------------------------------------- |
| `lib/vass/metrics_constants.rb`                      | 22 metric name constants              |
| `app/controllers/concerns/vass/metrics_tracking.rb`  | Tracking helper methods               |
| `app/controllers/vass/v0/sessions_controller.rb`     | Sessions instrumentation              |
| `app/controllers/vass/v0/appointments_controller.rb` | Appointments + availability scenarios |
| `spec/spec_helper.rb`                                | StatsD stubbing for tests             |

### Core Methods

**`track_success(metric_base, additional_tags: {})`**

- Records successful controller action
- Auto-includes endpoint, http_method, http_status tags

**`track_failure(metric_base, error_type:, http_status: nil, additional_tags: {})`**

- Records failed controller action
- Includes error_type tag for analysis

**`track_infrastructure_metric(metric_name, additional_tags: {})`**

- Records infrastructure events (rate limits, OTC issues, availability scenarios)
- Minimal tagging (service:vass + optional additional tags)

---

## Usage Example

### Availability Scenario Tracking

```ruby
def availability
  result = @appointments_service.get_current_cohort_availability(veteran_id: @current_veteran_id)

  if result[:status] == :available_slots
    redis_client.store_booking_session(
      veteran_id: @current_veteran_id,
      data: { appointment_id: result[:data][:appointment_id] }
    )
    track_success(APPOINTMENTS_AVAILABILITY)
  else
    track_availability_scenario(result[:status])
  end

  render_availability_result(result)
rescue Vass::Errors::VassApiError => e
  track_failure(APPOINTMENTS_AVAILABILITY, error_type: e.class.name)
  raise
end

private

def track_availability_scenario(status)
  metric = case status
           when :available_slots then nil  # Success tracked separately
           when :no_cohorts then AVAILABILITY_NO_COHORTS
           when :next_cohort then AVAILABILITY_NEXT_COHORT
           when :already_booked then AVAILABILITY_ALREADY_BOOKED
           when :no_slots_available then AVAILABILITY_NO_SLOTS
           end

  track_infrastructure_metric(metric) if metric
end
```

**Generated Metrics**:

```
# Success scenario:
api.vass.controller.appointments.availability.success
  tags: service:vass, endpoint:availability, http_method:GET, http_status:200

# No slots available (capacity issue):
api.vass.infrastructure.availability.no_slots_available
  tags: service:vass

# Already booked (UX issue):
api.vass.infrastructure.availability.already_booked
  tags: service:vass
```

---

## Monitoring & Alerts

### Critical Alerts

```yaml
# High failure rate
metric: api.vass.controller.*.failure
threshold: > 10% of requests in 5 minutes
action: Page on-call engineer

# Rate limit spike
metric: api.vass.infrastructure.rate_limit.*.exceeded
threshold: > 50 events in 5 minutes
action: Page security team

# No slots available (capacity crisis)
metric: api.vass.infrastructure.availability.no_slots_available
threshold: > 10 events in 15 minutes
action: Page on-call + capacity team
```

### Warning Alerts

```yaml
# Elevated error rate
metric: api.vass.controller.*.failure
threshold: > 5% of requests in 10 minutes
action: Notify team slack

# High already_booked rate (UX issue)
metric: api.vass.infrastructure.availability.already_booked
threshold: > 30% of availability checks in 1 hour
action: Notify UX team
```

### Key Dashboards

[**VASS Overview**](https://vagov.ddog-gov.com/dashboard/fw6-j3c-zns?fromUser=false&refresh_mode=sliding&from_ts=1769546567944&to_ts=1769550167944&live=true):

- Success rate (all endpoints)
- Error breakdown by error_type
- Availability scenarios breakdown (stacked area chart)

**Authentication Flow**:

- OTC generation → validation → JWT creation funnel
- Rate limit violations
- Invalid/expired OTC attempts

**Availability Insights**:

- `no_slots_available` ratio to total checks (capacity indicator)
- `already_booked` trend (UX/communication issue)
- `next_cohort` / `no_cohorts` (engagement patterns)

### SLOs

- **Availability**: 99.5% success rate across all endpoints
- **Authentication**: 98% OTC validation success rate

### Datadog Watchdog

Datadog's AI-powered Watchdog automatically monitors all `api.vass.*` metrics for anomalies without manual configuration. It detects:

- Unusual error rate spikes
- Traffic pattern changes
- Cross-service correlations
- Deployment regressions

**Use both**: Manual alerts for known critical thresholds + Watchdog for discovering unexpected issues.

**Access**: `https://app.datadoghq.com/watchdog?service=vass`

---

## Testing

### StatsD Stubbing

All VASS specs automatically stub StatsD calls (`modules/vass/spec/spec_helper.rb`):

```ruby
RSpec.configure do |config|
  config.before do
    allow(StatsD).to receive(:increment)
    allow(StatsD).to receive(:measure)
    allow(StatsD).to receive(:histogram)
    allow(StatsD).to receive(:gauge)
  end
end
```

### Testing Specific Metrics

```ruby
it 'tracks availability scenario' do
  allow(StatsD).to receive(:increment).and_call_original

  expect(StatsD).to receive(:increment).with(
    'api.vass.infrastructure.availability.no_slots_available',
    hash_including(tags: array_including('service:vass'))
  ).and_call_original

  get('/vass/v0/appointment-availability', headers:)
end
```

