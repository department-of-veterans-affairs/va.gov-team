# Firebase Events recommended for removal

[Reference document](firebase-events.md)

## MVP Event Removals, platform

| Name                  | Month Event Count Estimate | Justification  | Status |
| --------------------- | -------------------------- | -------------- | ------ |
| vama_accordion_click  | 1.6 mil  | Generic component event          | Removed in release 2.50.0 |
| vama_segcontrol_click | 2.7 mil  | Generic component event          | Removed in release 2.50.0 |
| vama_modalpick_open   | 1 mil    | Generic component event          | Removed in release 2.50.0 |
| vama_modalpick_sel    | 900k     | Generic component event          | Removed in release 2.50.0 |
| vama_login_token_get  | 14 mil   | Duplicative to a debugging event | Removed in release 2.50.0 |
| vama_hs_appts_count   | 11 mil   | Data not used, very high traffic | Removed in release 2.50.0 |
| vama_hs_claims_count  | 7.2 mil  | Data not used, very high traffic | Removed in release 2.50.0 |
| vama_hs_rx_count      | 8 mil    | Data not used, very high traffic | Removed in release 2.50.0 |
| vama_hs_sm_count      | 12.2 mil | Data not used, very high traffic | Removed in release 2.50.0 |

Total monthly reduction estimate: 58.6 mil

## Post-MVP 1, platform

| Name                  | Month Event Count Estimate | Justification  | Status |
| --------------------- | -------------------------- | -------------- | ------ |
| vama_auth_completed | 2.4 mil | Duplicative event to vama_login_success | active |
| vama_react_query_retry | 675k | Rarely used debugging event | active |
| vama_select_all | 74k | Tracked, but unused, no data gathered | active |
| vama_pagination | 800k | Generic component, not very useful | active |

Total monthly reduction estimate: 3.95 mil

## Post-MVP 2, experience teams

| Name                  | Month Event Count Estimate | Justification  | Status |
| --------------------- | -------------------------- | -------------- | ------ |
|  |  |  |  |

