# Identity Datadog Dashboard Group Documentation

## Group Name
### [Identity verification for the past 30 days](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753190720387&to_ts=1753205120387&live=false&tile_focus=7962189687531911)

## Group description
Monitors success, failure, and return rates for users verifying their account across VA.gov using the verify Call-To-Action (CTA) or [verify page](https://www.va.gov/verify) (`/verify` endpoint)

### Maintaining Team
:closed_lock_with_key: **Identity** - Oddcore Digex

## Widgets
<details>
  <summary><strong><a href='https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753190784972&to_ts=1753205184972&live=false&tile_focus=1625220537264326'>Verify page (unauthenticated) – Total Attempts</a></strong></summary>

| Field            | Value                                                                                   |
|------------------|------------------------------------------------------------------------------------------|
| **Name**         | Verify page (unauthenticated) – Total Attempts                                           |
| **Description**  | Tracks total visits to `/verify` by users **without** an active session.                |
| **Widget Type** | `query_value`                                                                              |
| **Data Source**  | logs                                                                                     |
| **Metrics**      | n/a                                                                                      |
| **Query**        | `operation: verify_page_unauthenticated`                                                   |
| **Environment**  | production `(env: eks-prod)`                                                               |
| **Alert Threshold** | > 5,000 in 5 min                                                                      |
</details>

<details>
  <summary><strong><a href='https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753190894596&to_ts=1753205294596&live=false&tile_focus=1114619591761025'>Verify page (authenticated)</a></strong></summary>

| Field            | Value                                                                                   |
|------------------|------------------------------------------------------------------------------------------|
| **Name**         | Verify page (authenticated)                                                              |
| **Description**  | Tracks total visits to `/verify` by users **with** an active session. Drops may indicate auth or session issues.                  |
| **Widget Type** | `query_value`                                                                              |
| **Data Source**  | logs                                                                                     |
| **Metrics**      | n/a                                                                                      |
| **Query**        | `operation: verify_page_authenticated`                                                     |
| **Environment**  | production `(env: eks-prod)`                                                               |
| **Alert Threshold** | > 5,000 in 5 min                                                                      |
</details>

<details>
  <summary><strong><a href='https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753190929901&to_ts=1753205329901&live=false&tile_focus=302412709475605'>Verify CTA (total)</a></strong></summary>

| Field            | Value                                                                                   |
|------------------|------------------------------------------------------------------------------------------|
| **Name**         | Verify CTA (total)                                                                       |
| **Description**  | Tracks CTA click events from authenticated users. Detects frontend or routing issues.                   |
| **Widget Type** | `query_value`                                                                              |
| **Data Source**  | logs                                                                                     |
| **Metrics**      | n/a                                                                                      |
| **Query**        | `operation: verify_cta_authenticated`                                                      |
| **Environment**  | production `(env: eks-prod)`                                                               |
| **Alert Threshold** | > 2,000 in 5 min                                                                      |
</details>

<details>
  <summary><strong><a href='https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753190964502&to_ts=1753205364502&live=false&tile_focus=7431767268794631'>Verify page (authenticated) – endpoint metrics</a></strong></summary>

| Field            | Value                                                                                   |
|------------------|------------------------------------------------------------------------------------------|
| **Name**         | Verify page (authenticated) – endpoint metrics                                           |
| **Description**  | Aggregates auth/session metrics tied to authenticated users landing on `/verify`.       |
| **Widget Type** | `table`                                                                                    |
| **Data Source**  | metrics                                                                                  |
| **Metrics**      | `api_auth_new` `api_auth_login_success` `api_auth_login_failure` `api_sis_auth_succes` `api_sis_callback_success` `api_sis_callback_failure`    |
| **Query**        | `operation: verify_page_authenticated`                                                     |
| **Environment**  | production `(env: eks-prod)`                                                               |
| **Alert Threshold** | Any metric > 95th percentile over 5 min                                              |
</details>

<details>
  <summary><strong><a href='https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753191056007&to_ts=1753205456007&live=false&tile_focus=4328867917032934'>Verify page (unauthenticated) – endpoint metrics</a></strong></summary>

| Field            | Value                                                                                   |
|------------------|------------------------------------------------------------------------------------------|
| **Name**         | Verify page (unauthenticated) – endpoint metrics                                         |
| **Description**  | Tracks backend metrics to diagnose issues in unauthenticated flow or bad redirect behavior.     |
| **Widget Type** | `table`                                                                                    |
| **Data Source**  | metrics                                                                                  |
| **Metrics**      | `api_auth_new` `api_auth_login_success` `api_auth_login_failure` `api_sis_auth_succes` `api_sis_callback_success` `api_sis_callback_failure`    |
| **Query**        | `operation: verify_page_unauthenticated`                                                   |
| **Environment**  | production `(env: eks-prod)`                                                               |
| **Alert Threshold** | Any metric > 95th percentile over 5 min                                              |
</details>

<details>
  <summary><strong><a href='https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&refresh_mode=paused&from_ts=1753191002207&to_ts=1753205402207&live=false&tile_focus=8700138617805615'>Verify CTAs (authenticated) – endpoint metrics</a></strong></summary>

| Field            | Value                                                                                   |
|------------------|------------------------------------------------------------------------------------------|
| **Name**         | Verify CTAs (authenticated) – endpoint metrics                                           |
| **Description**  | Monitors backend metrics for authenticated CTA interactions.                            |
| **Widget Type** | `table`                                                                                    |
| **Data Source**  | metrics                                                                                  |
| **Metrics**      | `api_auth_new` `api_auth_login_success` `api_auth_login_failure` `api_sis_auth_succes` `api_sis_callback_success` `api_sis_callback_failure`    |
| **Query**        | `operation: verify_cta_authenticated`                                                      |
| **Environment**  | production `(env: eks-prod)`                                                               |
| **Alert Threshold** | Any metric > 95th percentile over 5 min                                              |
| **Technical Description** | Measures backend health for "Verify" CTA paths to catch degraded auth provider performance. |
</details>

## Definitions

### API Events: Identity verification / Verify

| **Name**                   | **Description**                                                                                                   |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| `api_auth_new`             | (SAML) Tracks new authentication attempts.                                                                        |
| `api_auth_login_success`   | (SAML) Successful SAML authentication with SSOe auth broker.                                                      |
| `api_auth_login_failure`   | (SAML) Failed SAML authentication with SSOe auth broker.                                                          |
|||
| `api_sis_auth_success`     | (OAuth) Tracks new authentication attempts for Sign in Service                                                    |
| `api_sis_callback_success` | (OAuth) Successful authentications for Sign in Service                                                            |
| `api_sis_callback_failure` | (OAuth) Failed authentications for Sign in Service (e.g., network errors, invalid payload, fraud flags). |

---

### Operations: Identity verification / Verify

> 💡 The `operation` query parameter is a string value that represents the context of the initial request.

| **Name**                      | **Description**                                                                                                                                   |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `verify_page_authenticated`   | String value representing context of authenticated starting point (eg. `operation=verify_page_authenticated` query parameter is added to API request) |
| `verify_page_unauthenticated` | String value representing context of unauthenticated starting point (eg. `operation=verify_page_unauthenticated` query parameter is added to API request) |
| `verify_cta_authenticated`    | String value representing context of authenticated "Verify" CTA widget starting point. (eg. `operation=verify_cta_authenticated` query parameter is added to API request)|

## Version history
| Version number | Author | Revision date | Description |
| --- | --- | --- | --- |
| 0.1 | Caitlin Neathawk | 7/22/2025 | Initial creation |
