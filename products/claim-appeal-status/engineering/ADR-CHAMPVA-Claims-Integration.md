# Architecture Decision Record: Multi-Provider Claims Integration for CHAMPVA

## Status
Proposed

## Context
CHAMPVA needs to integrate their claims into the Claim Status Tool (CST) on VA.gov. Currently, the Benefits Claims system is tightly coupled to a single data source (`BenefitsClaims::Service`) in `app/controllers/v0/benefits_claims_controller.rb:124`. This architecture makes it difficult to:

- Aggregate claims from multiple data sources (e.g., CHAMPVA, VA Benefits)
- Display a unified claim list to Veterans on VA.gov
- Handle partial failures from individual data sources gracefully
- Extend the system to support additional claim providers in the future

### Related Tickets
- Parent: [#122176](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122176)
- Child: [#122182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122182)

### Current Architecture Constraints
The `BenefitsClaimsController#index` method directly calls a single service:
```ruby
def index
  claims = service.get_claims  # Always returns BenefitsClaims::Service
  # ... processing logic
end

def service
  @service ||= BenefitsClaims::Service.new(@current_user.icn)
end
```

This hardcoded dependency prevents integration of additional claim sources like CHAMPVA.

## Decision
We will implement an **Adapter Pattern** with a **Provider-based architecture** to support multiple claim data sources. This pattern is already successfully used in the Claim Letters feature and will be adapted for Benefits Claims.

### Architecture Components

#### 1. Claim Response DTO (Data Transfer Object)
Create a standardized claim response structure that represents what VA.gov expects:
- **Location**: `lib/benefits_claims/responses/claim_response.rb`
- **Purpose**: Define the canonical claim structure that VA.gov can render
- **Model**: Based on the current `BenefitsClaims::Service#get_claim` return structure
- **Reference**: Similar to `lib/claim_letters/responses/claim_letters_response.rb`

```ruby
# Pseudo-structure
module BenefitsClaims
  module Responses
    class ClaimResponse
      attribute :id, String
      attribute :type, String
      attribute :attributes, Hash
      # ... other standardized attributes
    end
  end
end
```

### Current Benefits Claims structure from Lighthouse
This is the structure that both vets-website and va.gov mobile currently consumes:
```
{
  "data": [
    {
      "id": "555555555",
      "type": "claim",
      "attributes": {
        "baseEndProductCode": "400",
        "claimDate": "2017-05-02",
        "claimPhaseDates": {
          "phaseChangeDate": "2017-10-18",
          "phaseType": "COMPLETE"
        },
        "claimType": "Compensation",
        "claimTypeCode": "400PREDSCHRG",
        "closeDate": "2017-10-18",
        "decisionLetterSent": false,
        "developmentLetterSent": false,
        "documentsNeeded": false,
        "endProductCode": "404",
        "evidenceWaiverSubmitted5103": false,
        "lighthouseId": null,
        "status": "COMPLETE"
      }
    }
  ]
}
```
The goal is to create a ClaimResponseDTO that vets website understands.

The question is: Can Claim Providers, such as CHAMPVA, transform/map their Claim types close to this for minimal work on the frontend clients?

#### 2. Abstract Provider Interface
Create a base provider module/class that defines the contract for all claim providers:
- **Location**: `lib/benefits_claims/providers/benefits_claims/benefits_claims_provider.rb`
- **Purpose**: Define the interface that all providers must implement
- **Methods**:
  - `get_claims` - Returns array of ClaimResponse DTOs
  - `get_claim(id)` - Returns single ClaimResponse DTO
- **Reference**: `lib/claim_letters/providers/claim_letters/claim_letters_provider.rb`

```ruby
# Pseudo-structure
module BenefitsClaimsProvider
  def get_claims = raise(NotImplementedError)
  def get_claim(_id) = raise(NotImplementedError)
end
```

#### 3. Concrete Provider Implementations
Implement specific providers for each data source:

**A. Lighthouse/VA Benefits Provider**
- **Location**: `lib/benefits_claims/providers/benefits_claims/lighthouse_benefits_claims_provider.rb`
- **Purpose**: Wraps existing `BenefitsClaims::Service`, transforms responses to ClaimResponse DTOs
- **Responsibilities**:
  - Connect to Lighthouse API
  - Transform Lighthouse claim data into ClaimResponse format
  - Handle Lighthouse-specific errors

**B. CHAMPVA Provider**
- **Location**: `lib/benefits_claims/providers/benefits_claims/champva_benefits_claims_provider.rb`
- **Purpose**: Connects to CHAMPVA data source, transforms responses to ClaimResponse DTOs
- **Responsibilities**:
  - Connect to CHAMPVA API/service
  - Transform CHAMPVA claim data into ClaimResponse format
  - Handle CHAMPVA-specific errors

**Transformation Example** (based on `lighthouse_claim_letters_provider.rb:96-109`):
```ruby
def get_claims
  raw_claims = fetch_from_champva_api
  transformed_claims = raw_claims.map { |claim| transform_to_dto(claim) }
  transformed_claims.map(&:attributes)
end

def transform_to_dto(raw_claim)
  BenefitsClaims::Responses::ClaimResponse.new(
    id: raw_claim['champva_id'],
    type: map_champva_type_to_va_type(raw_claim['type']),
    attributes: {
      # ... map CHAMPVA fields to VA.gov expected structure
    }
  )
end
```

#### 4. Provider Registry/Configuration
Create a mechanism to register and configure providers:
- **Location**: `lib/benefits_claims/providers/provider_registry.rb` or configuration in `config/settings.yml`
- **Purpose**: Make the provider list extensible and configurable
- **Options**:
  - Static registry with explicit provider list
  - Feature-flag based configuration
  - Settings-based configuration

Example configuration approach:
```ruby
# config/settings.yml
benefits_claims:
  providers:
    - lighthouse
    - champva  # Can be feature-flagged initially

# Or in code
CLAIM_PROVIDERS = [
  BenefitsClaimsProviders::LighthouseBenefitsClaimsProvider,
  BenefitsClaimsProviders::ChampvaBenefitsClaimsProvider
].freeze
```

#### 5. Controller Updates
Modify `BenefitsClaimsController` to aggregate claims from multiple providers:

```ruby
def index
  # Get claims from all configured providers
  all_claims = aggregate_claims_from_providers

  # Apply existing business logic
  all_claims['data'].each do |claim|
    update_claim_type_language(claim)
    # ... other processing
  end

  tap_claims(all_claims['data'])
  render json: all_claims
end

private

def aggregate_claims_from_providers
  claims_data = []
  provider_errors = []

  configured_providers.each do |provider_class|
    begin
      provider = provider_class.new(@current_user)
      provider_claims = provider.get_claims
      claims_data.concat(provider_claims)
    rescue => e
      # Log error but continue with other providers
      provider_errors << { provider: provider_class.name, error: e.message }
      Rails.logger.error("Provider #{provider_class.name} failed: #{e.message}")
      StatsD.increment('benefits_claims.provider_error', tags: ["provider:#{provider_class.name}"])
    end
  end

  # Return aggregated claims with optional error metadata
  {
    'data' => claims_data,
    'meta' => {
      'provider_errors' => provider_errors.presence
    }
  }
end

def configured_providers
  providers = [BenefitsClaimsProviders::LighthouseBenefitsClaimsProvider]
  providers << BenefitsClaimsProviders::ChampvaBenefitsClaimsProvider if champva_enabled?
  providers
end

def champva_enabled?
  Flipper.enabled?(:cst_champva_claims_integration, @current_user)
end
```

### Error Handling Strategy
1. **Provider Isolation**: Errors in one provider should not prevent other providers from returning data
2. **Logging**: Log provider-specific errors with sufficient context for debugging
3. **Metrics**: Track provider health via StatsD metrics
4. **User Communication**:
   - Include metadata in response indicating partial failures
   - Consider adding a banner/notification on frontend when some claims may be missing
   - Response structure: `{ data: [...], meta: { provider_errors: [...] } }`

### Frontend Considerations
The frontend should be updated to:
- Handle optional `meta.provider_errors` in the response
- Display appropriate messaging if some claims are unavailable
- Gracefully degrade when providers fail (show available claims, warn about missing ones)

## Consequences

### Positive
- **Extensibility**: Easy to add new claim providers without modifying existing code
- **Separation of Concerns**: Each provider encapsulates its own data source logic
- **Fault Tolerance**: Failures in one provider don't break the entire claims list
- **Consistent Interface**: All providers transform data to a common DTO format
- **Feature Flagging**: Can roll out CHAMPVA integration gradually via feature flags
- **Proven Pattern**: Follows existing successful implementation in Claim Letters feature
- **Testability**: Each provider can be tested in isolation

### Negative
- **Added Complexity**: More classes and abstractions to maintain
- **Response Time**: Multiple API calls may increase latency (can be mitigated with parallel requests)
- **Data Consistency**: Different providers may have different data freshness/accuracy
- **Error Handling Complexity**: Need to communicate partial failures to users appropriately

### Neutral
- **Migration Path**: Existing `BenefitsClaims::Service` can be wrapped in a provider without changing its implementation
- **Backward Compatibility**: Initial implementation can maintain exact same response structure for existing claims

## Implementation Plan

### Phase 1: Foundation
1. Create `ClaimResponse` DTO
2. Create `BenefitsClaimsProvider` interface
3. Create `LighthouseBenefitsClaimsProvider` wrapping existing `BenefitsClaims::Service`
4. Add provider registry/configuration mechanism
5. Add comprehensive tests

### Phase 2: Controller Integration
1. Update `BenefitsClaimsController#index` to use provider aggregation
2. Update `BenefitsClaimsController#show` to query multiple providers
3. Implement error handling and logging
4. Add StatsD metrics for provider health

### Phase 3: CHAMPVA Integration
1. Implement `ChampvaBenefitsClaimsProvider`
2. Add CHAMPVA-specific transformation logic
3. Add feature flag `cst_champva_claims_integration`
4. Test with CHAMPVA data in staging

### Phase 4: Frontend Updates
1. Update frontend to handle `meta.provider_errors`
2. Add UI for partial failure scenarios
3. Update documentation

### Testing Strategy
- Unit tests for each provider in isolation
- Integration tests for provider aggregation logic
- Contract tests to ensure DTO compatibility
- Error scenario tests (provider failures, timeouts, etc.)
- End-to-end tests with multiple providers

## Alternatives Considered

### Alternative 1: Service Composition in BenefitsClaims::Service
Modify the existing `BenefitsClaims::Service` to call multiple backends internally.

**Rejected because**:
- Violates Single Responsibility Principle
- Makes the service class extremely complex
- Harder to test individual data sources
- Doesn't provide clean extension points

### Alternative 2: GraphQL-style Data Federation
Use a GraphQL or data federation layer to aggregate claims.

**Rejected because**:
- Over-engineered for current needs
- Introduces unnecessary dependencies
- Team lacks GraphQL expertise
- Doesn't align with current architecture patterns

### Alternative 3: Database-backed Aggregation
Store all claims from various sources in a central database, query from there.

**Rejected because**:
- Requires complex ETL processes
- Data synchronization challenges
- Increases infrastructure complexity
- Real-time data freshness concerns

### Alternative 4: Frontend-Orchestrated Provider Requests
Modify the controller to accept a provider identifier (via parameter or header), allowing frontend clients to make concurrent requests directly to individual providers. The backend would return results from a single specified provider per request, with the frontend responsible for orchestrating parallel calls and aggregating results.

**Implementation approach**:
```ruby
# Controller modification
def index
  provider = provider_from_params # e.g., 'lighthouse', 'champva'
  claims = get_claims_from_provider(provider)
  render json: claims
end

private

def provider_from_params
  params[:provider] || request.headers['X-Provider-ID']
end

def get_claims_from_provider(provider_id)
  provider_class = PROVIDER_REGISTRY[provider_id]
  provider = provider_class.new(@current_user)
  provider.get_claims
end
```

Frontend would:
1. Access provider registry configuration (exposed via settings endpoint or embedded in app)
2. Make concurrent requests to the endpoint for each configured provider
3. Display results progressively as each provider responds
4. Show loading states for pending providers

**Benefits**:
- **Progressive Data Display**: Claims can be displayed immediately as each provider responds, improving perceived performance
- **True Parallelization**: Frontend makes concurrent requests, eliminating backend sequential processing delays
- **Better User Experience**: Users see loading indicators per data source and data "pouring in" rather than waiting for all providers
- **Client Control**: Frontend can implement custom retry logic, timeouts, or priority ordering per provider
- **Simpler Backend**: Controller logic remains simple - single provider per request

**Trade-offs and Considerations**:
- **Frontend Complexity**: Orchestration logic moves to frontend (React/mobile apps), increasing client-side complexity
- **Configuration Management**: Provider registry must be accessible to frontend clients (via API or config embedding)
- **Multiple HTTP Requests**: N providers = N requests, increasing network overhead and server load
- **Authentication/Authorization**: Each request must be authenticated, potentially N auth checks per page load
- **Error Handling Distribution**: Each client must implement robust error handling for partial failures
- **Network Conditions**: Users on poor connections may see degraded experience with multiple concurrent requests
- **Mobile Considerations**: Mobile apps need to handle concurrent requests efficiently without draining battery
- **Caching Complexity**: Need to cache N responses client-side or implement per-provider cache keys
- **API Rate Limiting**: Multiple concurrent requests may trigger rate limiting protections
- **Analytics/Logging**: Harder to track complete "claims list load" operations across multiple requests
- **Inconsistent State**: Time gap between provider responses could show inconsistent data states

**Comparison to Backend Aggregation (Current Decision)**:
- Backend aggregation (current): Simpler frontend, single request, but slower response time and no progressive loading
- Frontend orchestration (this alternative): Faster perceived performance and progressive display, but significantly higher complexity in frontend, mobile apps, and configuration management

**Possible hybrid approach**:
- Provide both endpoints: aggregated (`/claims`) and per-provider (`/claims?provider=champva`)
- Let frontend choose based on context (fast initial load with per-provider, full refresh with aggregated)

## References
- Existing Implementation: `lib/claim_letters/providers/claim_letters/`
- Current Controller: `app/controllers/v0/benefits_claims_controller.rb`
- Related ADRs: (link to any existing architecture decisions)
- Adapter Pattern: https://refactoring.guru/design-patterns/adapter

## Notes
- Consider adding request timeout configurations per provider
- Monitor performance impact with multiple providers
- Consider caching strategies if latency becomes an issue
- May need to add source attribution in claim responses (which provider returned each claim)

## Task Responsibilities

### BMT 1's responsibilities:

#### Initial Setup
Note: Most of these tasks will be setting up the infrastructure
1. Infra Create/Implement Abstract ClaimsProvider class
- write unit tests for it
2. Infra Create ClaimResponseDto (Data Transfer Object)
- defines interface between vets-api and frontend clients
- this will be based on what is consumed today from Lighthouse, which both website and mobile app clients already consume
3. Imple Create/Implement the concrete Provider for Lighthouse
- create example transformation layer (#transform_to_dto method, even though it is a straight mapping)
- write unit tests for it
4. Infra Create/Implement Provider Registry Configuration
- this is where we can gate providers by feature flag or settings file
5. Infra Update claims Controllers to use ClaimsProviderRegistry
- web: BenefitsClaimsController
- mobile: ClaimsAndAppealsController

#### Ongoing
6. Infra & Ongoing Write documentation that demonstrates how another ClaimProvider workflow can be added
- for other teams to be able to use
7. Infra & Ongoing Main Dashboard for CST ClaimProvider
- Set up monitoring for aggregated controller(s) responses
8. Infra & Ongoing Review new ClaimProvider and Services that want to be added to the claim provider list


### Claims Provider Teams' responsibilities (per team, i.e. CHAMPVA):
#### Initial Setup
1. Imple Create/Implement service that connects to datasource, i.e., an api
- write unit tests for it
- this is where an architecture intent review may be necessary if the data source is something new to vets-api (i.e., a connection does not exist yet)
    - BMT1 would be more than happy to help with this
2. Imple Create/Implement concrete Provider that inherits from abstract ClaimsProvider class
- this will include the transformation layer (#transform_to_dto method) that will turn the data returned from the ClaimsProviderService to a ClaimResponseDto
- write unit tests for it
3. Infra Register the ClaimsProvider class in ClaimProviderRegistry to be used in mobile and web responses

#### Ongoing
4. Infra & Ongoing Set up monitoring for service class.
- Add to main ClaimProvider dashboard
- Set up alerting for anomalies in provider class and datasource service


