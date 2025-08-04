# Unique User Metrics for the MHV Portal

The goal of the Unique User Metrics (UUM) for the My HealtheVet (MHV) Portal is to collect unique user metrics on how many users have accessed the MHV health tools. The MHV health tools are any application that is accessed via the `/my-health` root URL and includes the MHV landing page. Note that Google Analytics can collect these same metrics, but this effort aims to provide more accurate metrics since we do not want users to be able to opt out of these analytics.

## A Note on Account Activity Logs
Account Activity Logs (AAL) reside in MHV Classic and have been used to generate unique user metrics in the past. However, there are storage limitations in AAL that do not allow us to add more logs to perform all the desired metrics.

## Architecture
This effort will provide:
- A new `vets-api` authenticated endpoint to allow a frontend to log events (e.g. when viewing the MHV Landing Page, we can call this new logging API to log an "MHV Landing Page accessed" event in vets-api)
- A new `vets-api` library to allow logging events directly from other code (e.g. when viewing the secure messages app, the application always fetches messages from vets-api, hence we can log an "SM accessed" event in vets-api)
![UUM Architecture](architecture.png "UUM Architecture")

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend<br/>Mobile/web
    participant API as Backend<br/>vets-api
    participant Redis
    participant Database
    participant DataDog

    User->>Frontend: Interacts with MHV health tools
    Frontend->>API: POST /log-event<br/>(with unique user identifier)
    
    API->>Redis: Check if event already logged for user
    alt Event found in Redis
        Redis-->>API: Event exists
        API-->>Frontend: 200 OK (no action needed)
    else Event not in Redis
        Redis-->>API: Event not found
        API->>Database: Check if event already logged for user
        alt Event found in Database
            Database-->>API: Event exists
            API-->>Frontend: 200 OK (no action needed)
        else Event not in Database
            Database-->>API: Event not found
            API->>Database: Create new event record
            Database-->>API: Record created
            API->>Redis: Create new event record
            Redis-->>API: Record cached
            API->>DataDog: statsd increment event type counter
            DataDog-->>API: Counter incremented
            API-->>Frontend: 201 Created (event logged)
        end
    end
```

Notes:
- Logged events include a unique user ID
- We use Redis for performance reasons, to limit database reads when checking for duplicate events from the same user
- We use the database as a permanent record of each event for each user since Redis cache entries will expire or could be purged 
- One can recreate the metrics from the data stored in the database if needed
- We increment a statsd counter for the given event once per user. This will result in a counter with the number of unique users per event.
- DataDog takes care of persisting the cumulative metric for the event

## Database Diagram

```mermaid
erDiagram
    mhv_metrics_unique_user_events {
        uuid user_id PK "Unique user identifier"
        varchar(50) event_name PK "Event type name"
        timestamp created_at "Auto-populated creation timestamp"
    }
```

### Database Design Notes

**Table: `mhv_metrics_unique_user_events`**
- **Compound Primary Key**: `(user_id, event_name)`
  - Ensures one record per user per event type
  - Provides optimal performance for lookups: `WHERE user_id = ? AND event_name = ?`
  - No additional unique indexes needed
- **Fields**:
  - `user_id` (UUID): Unique identifier for the user
    - **UUID benefits in PostgreSQL**: Native support with optimized 16-byte storage, better index performance for compound keys, fixed-size storage (vs. variable varchar), and built-in comparison operators
  - `event_name` (VARCHAR(50)): Name/type of the event being tracked (e.g., "login", "view_appointments", "download_records")
    - **VARCHAR(50) optimization**: Limited length improves storage efficiency and index performance for the compound primary key, while maintaining flexibility to add new event types without schema changes
  - `created_at`: Auto-populated timestamp for when the event was first logged for this user

**Performance Considerations**:
- The compound primary key creates a clustered index that's perfect for the primary query pattern
- Minimal storage footprint - only essential data
- Fast INSERT operations with automatic duplicate prevention
- Efficient for generating metrics: `SELECT event_name, COUNT(*) FROM mhv_metrics_unique_user_events GROUP BY event_name`

**No Foreign Key Design Decision**:
- `user_id` intentionally has **no foreign key constraint** to any users table
- **Benefits**:
  - **Performance**: No foreign key constraint checking on high-volume inserts
  - **Historical preservation**: Metrics remain intact even if users are deleted from the system
  - **Operational simplicity**: No cascading deletes or referential integrity concerns
  - **Write optimization**: Critical for a logging/metrics table with potentially millions of records
- **Trade-offs**: Theoretical possibility of invalid user_ids, but this is acceptable for a metrics table
- **Pattern**: This follows standard practices for analytics/audit tables where historical data preservation and write performance are prioritized over strict referential integrity

## Other considerations
- Using a Sidekiq job - We could use a Sidekiq job in `vets-api` to asynchronously perform the logging operation, so not to incurr a performance hit on the backend, but it is expected that this operation will take a minimal amount of time to perform and hence can be done inline. Regardless, we could migrate in the future to using a Sidekiq job if we find the burden is too high.
