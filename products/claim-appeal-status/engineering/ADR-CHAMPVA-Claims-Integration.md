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
