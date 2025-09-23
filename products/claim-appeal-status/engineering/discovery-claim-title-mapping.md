# Discovery: Claim Title Mapping

## Links
- Issue: [#119472 [CST] Validate refactoring approach for web and mobile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119472)

## Table of Contents
- [Executive Summary](#executive-summary)
- [Data Flow Architecture](#data-flow-architecture)
- [Implementation by System](#implementation-by-system)
- [Cross-System Comparison](#cross-system-comparison)
- [Known Issues and Impact](#known-issues-and-impact)
- [Proposed Solution](#proposed-solution)

## Executive Summary

The VA's claim title mapping system transforms claim data from Lighthouse Benefits Claims API into human-readable titles that veterans see when tracking their benefits claims. This critical functionality operates across three distinct platforms: VA.gov website (vets-website repo), VA: Health and Benefits mobile app (va-mobile-app repo), and the VA.gov and mobile backend (vets-api repo).

The system primarily relies on the `claimType` field (e.g., "Compensation", "Dependency", "Pension") provided by the Lighthouse API to generate claim title content. However, VA.gov's website implementation adds a secondary layer of granularity by using `claimTypeCode` values to override titles for specific claim categories. The mobile app exclusively uses the `claimType` field and never references `claimTypeCode`.

### Key Findings
- Inconsistent user experience between web and mobile platforms
- No single source of truth for claim title generation logic
- Primary uses `claimType` for claim titles
- VA.gov uses 75 different `claimTypeCode` to generate more accurate titles while Mobile app does not use `claimTypeCode` at all
- Claims that have a null `claimType` display inaccurately as "Disability Compensation" on VA.gov while they result in a blank title on Mobile
- Pension claim titles lose specificity in breadcrumb and document placement - all types show as generic "pension claim"

## Data Flow Architecture

### Lighthouse to UI Journey

```
1. Lighthouse API
   └── Provides: claimType, claimTypeCode

2. VA.gov and mobile backend (vets-api)
   ├── Web: /v0/benefits_claims
   │   └── Transforms: "Death" → "expenses related to death or burial"
   │
   └── Mobile: /v0/claims-and-appeals-overview
       └── Sets: displayTitle = claimType

3. Frontend (Title Generation)
   ├── VA.gov Website (vets-website)
   │   ├── Uses claimType primarily for title
   │   ├── Applies claimTypeCode overrides (75 codes)
   │   └── Adds placement specific formatting
   │
   └── VA: Health and Benefits mobile app (va-mobile-app)
       └── Displays displayTitle as-is (no claimTypeCode logic)
```

## Implementation by System

### Lighthouse API

#### Overview
Lighthouse Benefits Claims API provides the source data for all claim information, including the critical fields used for title generation ([API Documentation](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)).

#### API Response
Example response from `/services/claims/v2/veterans/{veteranId}/claims`:

```json
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

#### Key Fields for Title Generation
- **`claimType`**: Primary field for title generation (e.g., "Compensation", "Dependency", "Pension")
  - Used by both VA.gov and Mobile platforms
  - Can be null, causing display issues
- **`claimTypeCode`**: Technical code for specific claim subcategories (e.g., "400PREDSCHRG", "130DPNDCY")
  - Used only by VA.gov for override logic
  - Ignored by Mobile app
- **`claimDate`**: Used for formatting document titles (e.g., "March 15, 2024")

### VA.gov and mobile backend (vets-api)

#### Constants and Mappings
**Location**: `lib/lighthouse/benefits_claims/constants.rb`

```ruby
module BenefitsClaims
  module Constants
    # Only one transformation exists - Death claims
    CLAIM_TYPE_LANGUAGE_MAP = {
      'Death' => 'expenses related to death or burial'
    }.freeze
  end
end
```

#### Web Endpoint (`/v0/benefits_claims`)

##### File References
- **Controller**: `app/controllers/v0/benefits_claims_controller.rb`

##### Implementation Details
The controller applies the Death transformation in both index and show actions:

```ruby
# app/controllers/v0/benefits_claims_controller.rb
def update_claim_type_language(claim)
  language_map = BenefitsClaims::Constants::CLAIM_TYPE_LANGUAGE_MAP
  if language_map.key?(claim.dig('attributes', 'claimType'))
    claim['attributes']['claimType'] = language_map[claim['attributes']['claimType']]
  end
  # Note: claimTypeCode passes through unchanged for frontend override logic
end
```

#### Mobile Endpoint (`/v0/claims-and-appeals-overview`)

##### File References
- **Controller**: `modules/mobile/app/controllers/mobile/v0/claims_and_appeals_controller.rb`
- **Adapter**: `modules/mobile/app/models/mobile/v0/adapters/claims_overview.rb`

##### Implementation Details
The mobile adapter sets `display_title` directly from `claimType` with no transformations:

```ruby
# modules/mobile/app/models/mobile/v0/adapters/claims_overview.rb
def parse_claim(entry)
  attributes = entry['attributes']
  # Key difference: display_title is just claimType with no transformation
  display_title: attributes['claimType'],  # Direct copy, no transformation
  claim_type_code: attributes['claimTypeCode'],  # Passed but never used
end

# Appeals combine program area + appeal type
def get_appeals_display_title(type, program_area)
  # Examples: "disability compensation appeal" or "supplemental claim for pension"
  if type == 'appeal' || type == 'legacyAppeal'
    "#{program_area_text} #{appeal_display_text}".lstrip
  else
    "#{appeal_display_text} for #{program_area_text}"
  end
end
```

### VA.gov Website (vets-website)

#### Architecture
Complex client-side title generation with placement-specific formatting

#### Title Generation Flow
**Location**: `src/applications/claims-status/utils/helpers.js`
**Function**: `generateClaimTitle(claim, placement, tab)`

1. **Extract and transform `claimType`** using `getClaimType()` helper:
   - If `claimType` is "Death" → transform to "expenses related to death or burial"
   - If `claimType` is null → default to "Disability Compensation"
   - Otherwise → return claimType as-is

```javascript
export function getClaimType(claim) {
  if (claim?.attributes?.claimType) {
    const { claimType } = claim.attributes;
    return claimType === 'Death'
      ? 'expenses related to death or burial'
      : claimType;
  }
  return 'Disability Compensation';
}
```

2. **Check `claimTypeCode` overrides** against 6 arrays (75 codes total)

3. **Generate base title** based on override results:
   - If dependency override → "Request to add or remove a dependent"
   - If pension override → specific pension claim title
   - Otherwise → "Claim for {claimType}"

4. **Apply placement specific formatting** (see table below)

#### Placement-Based Formatting
The same claim displays differently based on where it appears:

| Placement | Format Pattern | Example Output |
|-----------|---------------|----------------|
| `default` (card) | `{base title}` | "Claim for compensation" |
| `detail` (heading) | `{base title}` | "Claim for compensation" |
| `breadcrumb` | `{tab} of your {base title}` | "Status of your compensation claim" |
| `document` (browser tab) | `{tab} of {date} {base title}` | "Status Of March 15, 2024 Compensation Claim" |

#### ClaimTypeCode Override Categories (75 codes total)
| Category | Code Count | Title | Breadcrumb | Document |
|----------|------------|-------|-------------|----------|
| Add/Remove Dependent | 47 | "Request to add or remove a dependent" | "{tab} of your request to add or remove a dependent" | "{Tab} Of {Date} Request to Add or Remove a Dependent" |
| Veterans Pension | 3 | "Claim for Veterans Pension" | "{tab} of your pension claim" | "{Tab} Of {Date} Pension Claim" |
| Survivors Pension | 5 | "Claim for Survivors Pension" | "{tab} of your pension claim" | "{Tab} Of {Date} Pension Claim" |
| DIC | 3 | "Claim for Dependency and Indemnity Compensation" | "{tab} of your pension claim" | "{Tab} Of {Date} Pension Claim" |
| Other Pension | 17 | "Claim for pension" | "{tab} of your pension claim" | "{Tab} Of {Date} Pension Claim" |

**Note on Pension Title Inconsistency:** While the main title (detail/list view) correctly differentiates between Veterans Pension, Survivors Pension, DIC, and generic pension claims, the breadcrumb and document titles incorrectly collapse all pension types to just "pension claim". This happens because the code uses a generic `baseClaimTitle` of "pension claim" for all pension-related claims in these placements, losing the specificity that veterans need to distinguish between different types of pension benefits.

### VA: Health and Benefits mobile app (va-mobile-app)

#### Architecture
Passive display of `claimType`-based titles only

#### Title Generation Flow
**Location**: `src/screens/BenefitsScreen/ClaimsScreen/ClaimsAndAppealsListView/ClaimsAndAppealsListView.tsx`
**Function**: Uses `capitalizeWord()` on `displayTitle`

1. **Receive `displayTitle`** from backend (which equals `claimType`)
2. **Apply single transformation**: `capitalizeWord()` function
3. **Display in UI** - same title for all views

```typescript
// List View - uses displayTitle (which = claimType)
const textLines = [{
  text: capitalizeWord(attributes.displayTitle),
  variant: 'MobileBodyBold'
}]
```

#### Single Context Display
Mobile app uses consistent title display across all views, appropriate for mobile navigation patterns:
- **Unified format**: Same title in list and detail views
- **No breadcrumbs needed**: Mobile uses back navigation instead
- **No document titles**: Mobile apps don't have browser tabs

This simplified approach aligns with mobile UX best practices where consistency and simplicity are prioritized.

#### Functional Gap: No ClaimTypeCode Override Support
The mobile app receives `claimTypeCode` in the API response but does not use it for title generation. This results in less specific titles for certain claim types compared to VA.gov.

**Impact**: Dependency claims and pension subcategories show generic titles rather than the specialized ones seen on VA.gov.

**Example**: A claim with code "130DPNDCY" displays as "Dependency" on mobile rather than "Request to add or remove a dependent" as shown on VA.gov.

## Cross-System Comparison

### How Each System Handles ClaimType vs ClaimTypeCode

This table shows how claims display in the list/default view on each platform:

| Lighthouse Data | VA.gov Website | Mobile App |
|-----------------|----------------|------------|
| claimType = "Compensation"<br>claimTypeCode = "020SUPP" | "Claim for compensation" | "Compensation" |
| claimType = "Dependency"<br>claimTypeCode = "130DPNDCY" | "Request to add or remove a dependent"<br>(uses claimTypeCode override) | "Dependency"<br>(ignores claimTypeCode) |
| claimType = "Pension"<br>claimTypeCode = "020VETPEN" | "Claim for Veterans Pension"<br>(uses claimTypeCode override) | "Pension" |
| claimType = "Pension"<br>claimTypeCode = "020SURPEN" | "Claim for Survivors Pension"<br>(uses claimTypeCode override) | "Pension" |
| claimType = "Death"<br>claimTypeCode = any | "Claim for expenses related to death or burial"<br>(backend transforms) | "Death"<br>(no transformation) |
| claimType = null<br>claimTypeCode = "290DV" | "Claim for disability compensation"<br>(incorrect default) | Empty/null<br>(no fallback) |

**Note**: VA.gov has additional placement-based variations (breadcrumb, document title) not shown in this table.

## Known Issues and Impact

### Critical Issues

#### 1. The Null ClaimType Problem

#### Issue
When Lighthouse returns `claimType: null`, the primary data source is missing

#### System Behaviors
- **VA.gov**: Falls back to "Disability Compensation" default
- **Mobile**: Shows empty or null (no fallback)
- **Root cause**: These claims lack the primary `claimType` field

#### Affected Claims (all have `claimType: null`)
| Code | Actual Purpose | VA.gov Shows | Mobile Shows |
|------|---------------|--------------|--------------|
| 290DV | Debt Validation | "Claim for disability compensation" ❌ | Empty/null ❌ |
| 290DVPMC | PMC - Debt Validation | "Claim for disability compensation" ❌ | Empty/null ❌ |
| 130ISDDI | In Service Death Dependency | "Claim for disability compensation" ❌ | Empty/null ❌ |
| 330DVRPMC | Dependency Verification | "Claim for disability compensation" ❌ | Empty/null ❌ |

#### Impact
Veterans see incorrect or missing claim titles because the primary data field is null

#### 2. Death Claim Inconsistency

#### Issue
The `claimType: "Death"` value displays differently across platforms due to backend processing differences

| System | Processing | Display Text |
|--------|-----------|--------------|
| VA.gov | Backend transforms at `/v0/benefits_claims` | "Claim for expenses related to death or burial" |
| Mobile | No backend transformation at `/v0/claims-and-appeals-overview` | "Death" |

#### Impact
Confusing experience for beneficiaries filing death-related claims

#### 3. Platform Inconsistency for ClaimTypeCode Overrides

#### Issue
Claims with `claimTypeCode` overrides display different titles on web vs mobile since mobile ignores these codes

#### Examples
| Claim Data | VA.gov Display | Mobile Display |
|------------|---------------|----------------|
| claimType: "Dependency"<br>claimTypeCode: "130DPNDCY" | "Request to add or remove a dependent" | "Dependency" |
| claimType: "Pension"<br>claimTypeCode: "020VETPEN" | "Claim for Veterans Pension" | "Pension" |

#### Impact
Veterans switching between platforms see different descriptions for the same claim, reducing clarity about their claim type

#### 4. Pension Title Loss of Specificity

#### Issue
Pension claim titles lose their specific type information in breadcrumb and document placements

#### System Behavior
- **List/Detail views**: Correctly show "Claim for Veterans Pension", "Claim for Survivors Pension", or "Claim for Dependency and Indemnity Compensation"
- **Breadcrumb**: All collapse to "{tab} of your pension claim"
- **Document title**: All collapse to "{Tab} Of {Date} Pension Claim"

#### Example
- Veterans Pension claim with code "020VETPEN":
  - List view: "Claim for Veterans Pension" ✓
  - Breadcrumb: "Status of your pension claim" (loses "Veterans" specificity)
  - Document: "Status Of March 15, 2024 Pension Claim" (loses "Veterans" specificity)

#### Impact
Veterans cannot distinguish between different types of pension claims when viewing breadcrumbs or browser tabs, potentially causing confusion for those managing multiple pension-related claims

### Maintenance Challenges

#### Distributed Logic
- **No single source of truth**: Title generation logic spread across 3 repositories
- **75 `claimTypeCode` overrides** exist only in VA.gov frontend JavaScript
- **Backend transformations** inconsistent between web and mobile endpoints

#### Testing Gaps
- **Minimal test coverage**: Only ~16 tests for entire title generation system
- **Complex test matrix needed**: 75 override codes × 4 placement contexts × multiple platforms
- **Risk**: Title changes can break without detection

## Proposed Solution

### Overview
Centralize claim title generation logic in the backend (vets-api) by providing two new fields that both frontends can consume directly, eliminating the need for complex client-side transformations and ensuring consistency across all platforms.

### New Backend Fields

#### 1. `displayTitle`
- **Purpose**: Primary human-readable title for the claim
- **Usage**: List views, detail headers, and primary display contexts
- **Examples**:
  - "Claim for compensation"
  - "Request to add or remove a dependent"
  - "Claim for Veterans Pension"
  - "Claim for expenses related to death or burial"

#### 2. `claimTypeBase`
- **Purpose**: Base claim type for placement-specific formatting
- **Usage**: Breadcrumbs and document titles
- **Requirements**: Must be specific, not generic
- **Examples**:
  - "compensation claim"
  - "request to add or remove a dependent"
  - "veterans pension claim" (not just "pension claim")
  - "survivors pension claim" (not just "pension claim")
  - "dependency and indemnity compensation claim"

### Backend Implementation Changes

#### 1. Create Centralized Title Mapping Service
**New file**: `lib/lighthouse/benefits_claims/title_generator.rb`

```ruby
# frozen_string_literal: true

module BenefitsClaims
  class TitleGenerator
    # Title configuration for specific claim type codes
    Title = Struct.new(:display_title, :claim_type_base, keyword_init: true)

    # Dependency claims (47 codes from addOrRemoveDependentClaimTypeCodes)
    DEPENDENCY_TITLE = Title.new(
      display_title: 'Request to add or remove a dependent',
      claim_type_base: 'request to add or remove a dependent'
    ).freeze

    DEPENDENCY_CODES = %w[
      130DPNDCYAUT 130DPNAUTREJ 130SCHATTAUT 130SCHAUTREJ 130ADOD2D
      130ADSD2D 130DAD2D 130DARD2D 130PDARD2D 130PSARD2D 130SAD2D
      130SARD2D 130DPNDCY 130DCY674 130DCY686 130DPV0538 130DRASDP
      130DPNEBNADJ 130DPEBNAJRE 130SCHATTEBN 130PDA 130PDAE 130PSA
      130PSAE 130DPNPMCAUT 130DPMCAUREJ 130SCPMAUREJ 130DV0538PMC
      130DPNDCYPMC 130DCY674PMC 130DCY686PMC 130DRASDPMC 130PDAPMC
      130PDAEPMC 130PSAPMC 130PSAEPMC 130SD2DPMC 130AD2DPMC 130DD2DPMC
      130D2DPMC 130ARD2DPMC 130ADOD2DPMC 130ADSD2DPMC 130DAD2DPMC
      130DARD2DPMC 130PDARD2DPM 130PSARD2DPM 130SARD2DPMC
    ].freeze

    # Pension subcategory mappings
    VETERANS_PENSION_CODES = %w[180AILP 180ORGPENPMC 180ORGPEN].freeze
    SURVIVORS_PENSION_CODES = %w[190ORGDPN 190ORGDPNPMC 190AID 140ISD 687NRPMC].freeze
    DIC_CODES = %w[290DICEDPMC 020SMDICPMC 020IRDICPMC].freeze

    # Build comprehensive code mapping
    CLAIM_TYPE_CODE_MAPPING = {}.tap do |mapping|
      # Add dependency codes
      DEPENDENCY_CODES.each { |code| mapping[code] = DEPENDENCY_TITLE }

      # Add veterans pension codes
      VETERANS_PENSION_CODES.each do |code|
        mapping[code] = Title.new(
          display_title: 'Claim for Veterans Pension',
          claim_type_base: 'veterans pension claim'
        )
      end

      # Add survivors pension codes
      SURVIVORS_PENSION_CODES.each do |code|
        mapping[code] = Title.new(
          display_title: 'Claim for Survivors Pension',
          claim_type_base: 'survivors pension claim'
        )
      end

      # Add DIC codes
      DIC_CODES.each do |code|
        mapping[code] = Title.new(
          display_title: 'Claim for Dependency and Indemnity Compensation',
          claim_type_base: 'dependency and indemnity compensation claim'
        )
      end

      # Add generic pension codes (remaining from pensionClaimTypeCodes)
      %w[
        150ELECPMC 150INCNWPMC 150INCPMC 120INCPMC 150NWTHPMC
        120SUPHCDPMC 120ILCP7PMC 120SMPPMC 150MERPMC 120ASMP
        120ARP 150AIA 600APCDP 600PCDPPM 696MROCPMC
      ].each do |code|
        mapping[code] = Title.new(
          display_title: 'Claim for pension',
          claim_type_base: 'pension claim'
        )
      end

      # Add null claimType cases
      mapping['290DV'] = Title.new(
        display_title: 'Debt Validation',
        claim_type_base: 'debt validation'
      )
      mapping['290DVPMC'] = Title.new(
        display_title: 'PMC - Debt Validation',
        claim_type_base: 'debt validation'
      )
      mapping['130ISDDI'] = Title.new(
        display_title: 'In Service Death Dependency',
        claim_type_base: 'in service death dependency'
      )
      mapping['330DVRPMC'] = Title.new(
        display_title: 'Dependency Verification',
        claim_type_base: 'dependency verification'
      )
    end.freeze

    # Special case transformations
    CLAIM_TYPE_SPECIAL_CASES = {
      'Death' => Title.new(
        display_title: 'Claim for expenses related to death or burial',
        claim_type_base: 'expenses related to death or burial claim'
      )
    }.freeze

    class << self
      def generate_titles(claim_type, claim_type_code)
        # Priority 1: Check for specific claim type code override
        if claim_type_code && (title = CLAIM_TYPE_CODE_MAPPING[claim_type_code])
          return title.to_h
        end

        # Priority 2: Check for special case transformations
        if claim_type && (title = CLAIM_TYPE_SPECIAL_CASES[claim_type])
          return title.to_h
        end

        # Priority 3: Generate default title for any claimType
        if claim_type.present?
          claim_type_lower = claim_type.downcase
          return {
            display_title: "Claim for #{claim_type_lower}",
            claim_type_base: "#{claim_type_lower} claim"
          }
        end

        # Priority 4: Return nil for missing data (triggers frontend fallback)
        { display_title: nil, claim_type_base: nil }
      end
    end
  end
end
```

#### 2. Update Web Endpoint Controller
**File**: `app/controllers/v0/benefits_claims_controller.rb`

```ruby
def update_claim_titles(claim)
  claim_type = claim.dig('attributes', 'claimType')
  claim_type_code = claim.dig('attributes', 'claimTypeCode')

  titles = BenefitsClaims::TitleGenerator.generate_titles(claim_type, claim_type_code)

  claim['attributes']['displayTitle'] = titles[:display_title]
  claim['attributes']['claimTypeBase'] = titles[:claim_type_base]
end
```

#### 3. Update Mobile Endpoint Adapter
**File**: `modules/mobile/app/models/mobile/v0/adapters/claims_overview.rb`

```ruby
def parse_claim(entry)
  attributes = entry['attributes']
  claim_type = attributes['claimType']
  claim_type_code = attributes['claimTypeCode']

  titles = BenefitsClaims::TitleGenerator.generate_titles(claim_type, claim_type_code)

  {
    # ... existing fields
    display_title: titles[:display_title],
    claim_type_base: titles[:claim_type_base],
    claim_type_code: claim_type_code
  }
end
```

#### 4. Update Mobile Model and Serializer
**File**: `modules/mobile/app/models/mobile/v0/claim_overview.rb`

```ruby
attribute :display_title, Types::String
attribute :claim_type_base, Types::String  # Add new attribute
```

**File**: `modules/mobile/app/serializers/mobile/v0/claim_overview_serializer.rb`

```ruby
attributes :subtype, :completed, :date_filed, :updated_at, :display_title,
           :claim_type_base, :decision_letter_sent, :phase, :documents_needed,
           :development_letter_sent, :claim_type_code
```

### Frontend Implementation Changes

#### VA.gov Website (vets-website)

**File**: `src/applications/claims-status/utils/helpers.js`

```javascript
// New helper function to use backend-provided titles
const generateDisplayTitle = (claim, placement, tab) => {
  const { displayTitle, claimTypeBase } = claim?.attributes || {};

  // Return null if new fields aren't available (triggers fallback)
  if (!displayTitle || !claimTypeBase) {
    return null;
  }

  const tabPrefix = `${tab} ${tab === 'Files' ? 'for' : 'of'}`;

  switch (placement) {
    case 'detail':
    case undefined: // list view
      return displayTitle;
    case 'breadcrumb':
      if (claimAvailable(claim)) {
        return `${tabPrefix} your ${claimTypeBase}`;
      }
      return `${tabPrefix} your claim`;
    case 'document':
      if (claimAvailable(claim)) {
        const formattedDate = buildDateFormatter()(claim.attributes.claimDate);
        return titleCase(`${tabPrefix} ${formattedDate} ${claimTypeBase}`);
      }
      return `${tabPrefix} Your Claim`;
    default:
      return displayTitle;
  }
};

// Update main function to check for new fields first
export function generateClaimTitle(claim, placement, tab = 'Status') {
  // Try new backend-provided titles first
  const backendTitle = generateDisplayTitle(claim, placement, tab);
  if (backendTitle !== null) {
    return backendTitle;
  }

  // Fall back to legacy logic for backward compatibility
  // ... existing generateClaimTitle logic
}
```

#### Mobile App (va-mobile-app)

Mobile app already displays `displayTitle` directly, so minimal changes needed:
- Ensure `claimTypeBase` is available in the data model for future use
- No immediate changes to display logic required

### Migration Strategy

#### Phase 1: Backend Deployment + Automatic Mobile Update (Week 1-2)
1. Implement `TitleGenerator` service with all 75+ mappings
2. Add new fields to both web and mobile endpoints
3. Deploy backend changes
4. **Mobile app immediately receives improved titles** (no app update required)
   - Mobile already consumes `display_title` field directly
   - All mobile users get consistent, accurate titles automatically
   - Serves as early validation of new title logic

#### Phase 2: Web Frontend Rollout (Week 3-4)
1. Deploy web frontend changes behind feature flag
2. Monitor with 10% rollout initially on VA.gov
3. Gradually increase to 100% over 1 week
4. Keep legacy logic as fallback for web only
5. **Mobile continues displaying new titles throughout this phase**

#### Phase 3: Cleanup & Monitoring (Week 5-6)
1. Remove web feature flags
2. **Both platforms now displaying identical titles**
3. Monitor for any issues across both platforms
4. Plan deprecation of legacy logic (6-month timeline)

#### Platform Impact Timeline

| Week | Web (VA.gov) | Mobile App |
|------|--------------|------------|
| 1-2 | Uses legacy logic | **Automatically gets new titles** |
| 3 | 10% see new titles | All users see new titles |
| 4 | 100% see new titles | All users see new titles |
| 5-6 | Feature flag removed | No changes needed |

**Note**: Mobile benefits first without requiring app store deployment, providing early validation of the backend changes before web rollout.

### Benefits of This Solution

#### Immediate Benefits
1. ** Solves all 4 critical issues**:
   - Null claimType problem: Backend provides proper titles
   - Death claim inconsistency: Unified across platforms
   - Platform inconsistency: Same titles everywhere
   - Pension specificity: Preserved with specific `claimTypeBase` values

2. **Consistency**: Single source of truth for all platforms
3. **Maintainability**: Title changes require only backend updates
4. **Performance**: Reduces frontend bundle size by ~2KB

#### Long-term Benefits
1. **Scalability**: New claim types automatically work on all platforms
2. **Testing**: Centralized logic easier to test comprehensively
3. **Documentation**: Single location for title mapping documentation
4. **Future-proof**: Backend can evolve without frontend changes
