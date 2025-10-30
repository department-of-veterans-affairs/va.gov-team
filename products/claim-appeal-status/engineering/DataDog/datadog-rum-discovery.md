---
  DataDog RUM Evaluation for Claims Status Tool (CST)
  Ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/122340
---
  
# Summary

DataDog Real User Monitoring (RUM) is currently implemented in the Claims Status Tool (CST) but operating at severely limited capacity. 

This evaluation reveals that CST's current implementation:
- Uses custom code instead of VA platform standards
- Employs multiple layers of client-side throttling
- Provides minimal visibility into user experience (0.25% effective sample rate)
- Requires code deployments to adjust sampling

### Recommendation: 
Migrate to platform-standard implementation with server-side retention filters. This aligns with DataDog best practices, VA platform standards, and enables real-time cost control without code changes.

Estimated Effort: 14-27 hours + monitoring

# What is DataDog RUM?

DataDog Real User Monitoring (RUM) is a client-side monitoring solution that captures actual user behavior and experience on VA.gov applications. Unlike synthetic monitoring or server-side logs, RUM provides visibility into:

- Page load times, JavaScript errors, user journey tracking
- Frustration signals (rage clicks, error clicks, dead clicks)
- Session replays with PII/PHI masking
- Client-side errors not visible in server logs
- Network performance from user perspective

## Relevance to Claims Status Tool (CST)

CST is a critical application serving veterans tracking disability claims. RUM enables:

1. Error Detection - Identify JavaScript errors affecting claim uploads, catch client-side failures invisible to server logs
2. Performance Optimization - Identify slow-loading pages, optimize critical user journeys (document uploads, status checks)
3. User Experience Insights - Track frustration signals, identify broken user flows
4. Proactive Monitoring - Alert on error spikes, monitor deployment impacts in real-time

Current Value: Limited (0.25% visibility)
Potential Value: High (with proper implementation)

# Implementation History
DataDog RUM was added to CST by the previous BMT team:
- Initial PR: https://github.com/department-of-veterans-affairs/vets-website/pull/29164 - "added DataDog RUM initializers to CST"
- PII Remediation: https://github.com/department-of-veterans-affairs/vets-website/pull/30018 - "Identified all the CST components that can show PII, and added DD RUM masking"
- Further PII Work: https://github.com/department-of-veterans-affairs/vets-website/pull/30205 - "DataDog RUM PII remediation, and improved staging logging"

# Current Architecture
Custom code (not using platform code)

File Locations:
- src/applications/claims-status/utils/datadog-rum/useBrowserMonitoring.js
- src/applications/claims-status/utils/datadog-rum/initializeRealUserMonitoring.js
- src/applications/claims-status/containers/ClaimsStatusApp.jsx

Throttling (Production)
```
sessionSampleRate: 5,           // Only 5% of sessions tracked
sessionReplaySampleRate: 20,    // Only 20% of tracked sessions get replay
telemetrySampleRate: 20,        // Only 20% SDK telemetry
```

Feature Flag: cstUseDataDogRUM - Currently at 5% of users

## Effective Sample Rates

RUM Session Tracking:
- Feature Flag: 5% of users
- Session Sample Rate: 5% of those users
- Effective Rate: 0.25%
- Result: Only ~250 sessions/week visible in DataDog

Session Replay:
- Feature Flag: 5% of users
- Session Sample Rate: 5% of those users
- Replay Sample Rate: 20% of tracked sessions
- Effective Rate: 0.05%
- Result: Only ~50 session replays/week

Telemetry (SDK Health):
- Set to 20% in production (DataDog default)

## Data Visibility

Currently Tracking (0.25% of sessions):
- User interactions, frustration signals, resources, long tasks
- Session replays (0.05% of sessions)

Limited Visibility:
- 99.75% of user sessions invisible to RUM
- Sample size too small for reliable metrics

Privacy & Security Measures:
- PII/PHI masking: `defaultPrivacyLevel: 'mask-user-input'`
- Custom masking on PII-displaying components ([PR #30018](https://github.com/department-of-veterans-affairs/vets-website/pull/30018))
- Production-only (disabled on localhost/CI)
- Requires logged-in users

# Risk Assessment

Current Implementation Risks
1. Low Visibility (HIGH RISK)
- 0.25% effective sample rate = 99.75% of sessions invisible
- Critical errors may go undetected
- Metrics unreliable due to sample rate

2. Technical Debt (MEDIUM RISK)
- 189 lines of custom code to maintain
- Missing platform features: bot detection, `silentMultipleInit`, `enablePrivacyForActionName`
- Diverges from VA standards

3. Inflexibility (MEDIUM RISK)
- Changing sampling requires code deployment
- Cannot quickly respond during incidents

4. Client-Side Throttling Anti-Pattern (MEDIUM RISK)
- DataDog recommendation: "For optimal monitoring, Datadog recommends sending 100% of your sessions to Datadog" ([source](https://docs.datadoghq.com/real_user_monitoring/guide/best-practices-for-rum-sampling/))
- Server-side filtering enables real-time adjustment without code changes

# Cost Considerations
Current: Low volume, less than 1k sessions/month (~0.25% of sessions)
Target: not to exceed 20-30k sessions/month (Steve Albers guidance)

Cost Control:
- Server-side retention filters (real-time, no code deployments)
- "RUM Without Limits" - filter by criteria (e.g., 100% errors, 5% success)

PII/PHI Exposure Risk: MITIGATED  
- `defaultPrivacyLevel: 'mask-user-input'` masks form inputs
- Custom masking on PII-displaying components ([PR #30018](https://github.com/department-of-veterans-affairs/vets-website/pull/30018), [PR #30205](https://github.com/department-of-veterans-affairs/vets-website/pull/30205))

Ongoing Requirements:
- Test new features with VA Page Checker
- Review session replays periodically
- Follow [platform testing guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/setup-real-user-monitoring.md#testing-for-exposed-content)

# Recommendations
Migrate to Platform Standard Implementation with server-side retention filters.

### Phase 1: Validate Server-Side Filtering (1 hour + 24h monitoring)
1. Set [feature flag](https://api.va.gov/flipper/features) to 100%
2. Set [retention filter](https://vagov.ddog-gov.com/rum/application/75bb17aa-34f0-4366-b196-eb11eda75425/retention-filters) to 5%
3. Validate session count matches historical data, no cost spike, no PII visible

### Phase 2: Code Migration (4-8 hours)
1. Replace custom code with `/src/platform/monitoring/Datadog/`
2. Set client-side `sessionSampleRate` and `sessionReplaySampleRate` to 100
3. Remove `cstUseDataDogRUM` feature flag
4. Update tests

### Phase 3: Production Rollout (2-4 hours + 24-48h monitoring)
1. Deploy to production
2. Set retention filter to target rate (not exceeding 20-30k sessions/month)
3. Validate no PII exposure, monitor session count and cost

### Phase 4: Advanced Features (7-13 hours | optional)
1. Smart Retention Filters (2-4 hours): 100% errors/upload failures, 5-10% success
2. Custom Dashboards (2-4 hours): CST health overview, document upload deep dive
3. Proactive Alerts (2-4 hours): Error spikes, upload failures, performance degradation
4. Monthly Review (1 hour/month): Monitor volume, costs, adjust filters  

# Estimated Effort

  | Phase                              | Effort                   | Duration    | Dependencies                                             |
  |------------------------------------|--------------------------|-------------|----------------------------------------------------------|
  | Phase 1: Validate Retention Config | 1 hour + monitoring      | 1 day       | Steve Albers (retention filter access)                   |
  | Phase 2: Code Migration            | 4-8 hours                | 1 day       | None                                                     |
  | Phase 3: Rollout                   | 2-4 hours + monitoring   | 2-3 days    | Steve Albers (retention filter access / budget approval) |
  | Phase 4: Advanced Features         | 7-13 hours               | Ongoing     | Optional / future work                                   |
  | TOTAL (Phases 1-4)                 | 14-27 hours + monitoring | 1-2 weeks   | -                                                        |
