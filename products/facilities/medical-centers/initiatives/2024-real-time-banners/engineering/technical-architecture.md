
# Technical Architecture Document for the Banners Module

---

## Overview

The Banners module serves as a centralized system to manage and display informational banners across VA.gov. These banners provide critical updates, alerts, and other contextual messages to users based on the URL path and other filtering criteria. The system is designed for flexibility, allowing banners to target specific pages or groups of pages, with optional subpage inheritance. 

The module is built into the Vets-API codebase and exposes a `/v0/banners` endpoint that allows clients to query banners based on a given URL path and optional banner type.

---

## Backend

### Routes

#### Endpoints
The Banners module exposes a single endpoint at `/v0/banners`. This endpoint supports two query parameters:
- `path`: The URL path used to filter banners.
- `banner_type`: An optional parameter to further filter banners by their type.

#### Routing Configuration
The routing is defined as follows:
```ruby
namespace :v0, defaults: { format: 'json' } do
  resources :banners, only: [] do
    collection do
      get 'by_path', to: 'banners#by_path'
    end
  end
end
```

This configuration:
- Maps `GET /v0/banners/by_path` to the `BannersController#by_path` method.
- Supports filtering logic for both path and type.

### Models

#### Banner Model
The `Banner` model represents the data structure for banners. It includes the following attributes:
- `entity_id`: A primary key for uniquely identifying a banner.
- `entity_bundle`: The type of the banner (e.g., `full_width_banner_alert`).
- `headline`: The title or main message of the banner.
- `alert_type`: The category of the banner (e.g., `warning`, `info`).
- `context`: A JSONB field containing complex relationships and metadata.
- `limit_subpage_inheritance`: A flag to restrict banners from being applied to subpages.

**Validations**
- `entity_id` must be unique.
- `entity_bundle` and `headline` are required fields.

#### Scopes
The `Banner` model includes a complex scope, `by_path`, that filters banners based on:
1. An exact match for `path` in the `context` JSONB field.
2. A match against parent paths for subpages, considering the `limit_subpage_inheritance` flag.

Example of the scope:
```ruby
  scope :by_path, lambda { |path|
    normalized_path = path.sub(%r{^/?}, '')

    # Direct path matches.
    exact_path_conditions = where('banners.context @> ?',
                                  [
                                    { entity:
                                     { entityUrl:
                                      { path: path } } }
                                  ].to_json)
                            .or(where('banners.context @> ?',
                                      [
                                        { entity:
                                          { fieldOffice:
                                            { entity:
                                              { entityUrl:
                                                { path: path } } } } }
                                      ].to_json))

    # Subpage inheritance check: Matches on any `fieldOffice` entity path where `limit_subpage_inheritance` is false.
    subpage_pattern = "#{normalized_path.split('/').first}/%"
    subpage_condition = where('banners.context @> ?',
                              [
                                { entity:
                                  { fieldOffice:
                                    { entity:
                                      { entityUrl:
                                        { path: subpage_pattern } } } } }
                              ].to_json)
                        .where(limit_subpage_inheritance: false)

    # Look for both exact paths and subpage matches
    exact_path_conditions.or(subpage_condition)
  }
```

### Controllers

#### `BannersController`
The `BannersController` handles requests to the `/v0/banners` endpoint. The primary action is `by_path`, which accepts two parameters (`path` and `banner_type`) and returns filtered banners in the following JSON format:
```json
{
  "banners": [
    {
      "id": 1,
      "headline": "Important Update",
      "alert_type": "warning",
      "context": [...]
    }
  ],
  "path": "/example/path",
  "banner_type": "full_width_banner_alert"
}
```

Key implementation details:
- **Filtering**: The controller delegates filtering to the `by_path` scope in the `Banner` model.
- **Response Format**: Uses Rails’ `render json:` method for consistent API responses.
- **Error Handling**: Returns appropriate HTTP status codes for invalid or missing parameters.

### Database

#### Schema
The `banners` table is defined as follows:
```ruby
create_table "banners", force: :cascade do |t|
  t.integer "entity_id", null: false
  t.string "entity_bundle", null: false
  t.string "headline", null: false
  t.string "alert_type"
  t.boolean "show_close", default: false
  t.text "content"
  t.jsonb "context"
  t.boolean "operating_status_cta", default: false
  t.boolean "email_updates_button", default: false
  t.boolean "find_facilities_cta", default: false
  t.boolean "limit_subpage_inheritance", default: false
  t.timestamps
end
```

#### Seed Data
Example banners can be seeded using the `db/seeds.rb` file:
```ruby
Banner.create!(
  entity_id: 1,
  entity_bundle: 'full_width_banner_alert',
  headline: 'Important Update',
  alert_type: 'info',
  context: [{ entity: { entityUrl: { path: '/example/path' } } }]
)
```

### Testing

#### RSpec Tests
The following tests are included:
1. **Model Tests**:
   - Validation checks for required fields.
   - Scope tests for `by_path`.
2. **Controller Tests**:
   - Ensure the correct banners are returned for valid `path` and `banner_type`.
   - Test edge cases, such as missing parameters or subpage inheritance logic.

#### Code Coverage
Code coverage reports can be generated using SimpleCov.

---

## Frontend

### Integration Points

#### API Consumption
The frontend interacts with the `/v0/banners` endpoint to dynamically fetch banners based on the current page's path.

#### Data Presentation
Banners are rendered based on the response format:
- `headline` is displayed prominently.
- `alert_type` determines styling (e.g., `warning` banners have yellow backgrounds).
- `show_close` allows users to dismiss banners temporarily.

---

## Challenges and Considerations

- **Subpage Inheritance Logic**: Ensuring the scope respects both exact path matches and parent-child relationships.
- **JSONB Querying**: Complex queries against the `context` field required careful testing for edge cases.

---
