# Tracked Items Investigation: Missing Items in Lighthouse Response

**Date:** January 15, 2026
**Environment:** Staging (UAT)
**Claim ID:** 600881604
**Veteran ICN:** 1012829948V217207 (ALLAN)
**Participant ID:** 600033542

## Problem Statement

When querying tracked items for a claim, the Lighthouse Benefits Claims API returns **2 tracked items**, but the BGS TrackedItemService returns **7 tracked items**. This investigation documents that 5 items are missing from the Lighthouse response.

---

## Steps to Reproduce

### Step 1: Query Lighthouse Benefits Claims API

```ruby
icn = "1012829948V217207" # ALLAN
claim = 600881604

lh = BenefitsClaims::Service.new(icn)
c = lh.get_claim(claim)
trackedItems = c['data']['attributes']['trackedItems']
```

### Step 2: Query BGS TrackedItemService

```ruby
participant_id = 600033542
claim = 600881604

tis = ClaimsApi::TrackedItemService.new(external_uid: participant_id, external_key: participant_id)
resp = tis.find_tracked_items(claim)
tracked = resp.is_a?(Hash) ? Array.wrap(resp[:dvlpmt_items]) : []
```

### Step 3: Query BGS EBenefitsBnftClaimStatusWebService

```ruby
bgs_cs = ClaimsApi::EbenefitsBnftClaimStatusWebService.new(external_uid: participant_id, external_key: participant_id)
bgs_claim = bgs_cs.find_benefit_claim_details_by_benefit_claim_id(claim)
ebenefits_details = bgs_claim[:benefit_claim_details_dto]
```

---

## Results

### Lighthouse Response: 2 items

```ruby
trackedItems
=>
[{"closedDate"=>nil,
  "description"=>"1151 development to VAMC",
  "displayName"=>"1151 development to VAMC",
  "overdue"=>false,
  "receivedDate"=>nil,
  "requestedDate"=>"2026-01-15",
  "status"=>"NEEDED_FROM_OTHERS",
  "suspenseDate"=>"2026-02-14",
  "id"=>674215,
  "uploadsAllowed"=>true,
  "canUploadFile"=>true,
  "friendlyName"=>nil,
  "activityDescription"=>nil,
  "shortDescription"=>nil,
  "supportAliases"=>[]},
 {"closedDate"=>nil,
  "description"=>"      ",
  "displayName"=>"PMR Pending",
  "overdue"=>false,
  "receivedDate"=>nil,
  "requestedDate"=>"2026-01-15",
  "status"=>"NEEDED_FROM_OTHERS",
  "suspenseDate"=>"2026-01-30",
  "id"=>674234,
  "uploadsAllowed"=>true,
  "canUploadFile"=>true,
  "friendlyName"=>"Non-VA medical records",
  "activityDescription"=>nil,
  "shortDescription"=>"We've requested your non-VA medical records from your medical provider.",
  "supportAliases"=>["PMR Pending", "General Records Request (Medical)"]}]
```

### BGS TrackedItemService Response: 7 items

```ruby
tracked
=>
[{:jrn_dt=>"2026-01-15T13:07:16-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:07:16-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347426",
  :dvlpmt_item_id=>"674209",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"ADMINCOD",
  :std_devactn_id=>"43023",
  :suspns_dt=>"2026-01-25T00:00:00-06:00"},
 {:jrn_dt=>"2026-01-15T13:06:56-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:06:56-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347425",
  :dvlpmt_item_id=>"674208",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"Admin Decision",
  :std_devactn_id=>"65072",
  :suspns_dt=>"2026-01-25T00:00:00-06:00"},
 {:jrn_dt=>"2026-01-15T13:16:16-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:16:16-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347437",
  :dvlpmt_item_id=>"674219",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"PMR Pending",
  :std_devactn_id=>"43001",
  :suspns_dt=>"2026-01-30T00:00:00-06:00"},
 {:jrn_dt=>"2026-01-15T13:13:48-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:13:48-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347433",
  :dvlpmt_item_id=>"674215",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"1151 development to VAMC",
  :std_devactn_id=>"38974",
  :suspns_dt=>"2026-02-14T00:00:00-06:00"},
 {:jrn_dt=>"2026-01-15T13:22:24-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:22:24-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347443",
  :dvlpmt_item_id=>"674225",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"Delayed BDD Exam Requests",
  :std_devactn_id=>"42991",
  :suspns_dt=>"2026-01-30T00:00:00-06:00"},
 {:jrn_dt=>"2026-01-15T13:12:17-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:12:17-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347431",
  :dvlpmt_item_id=>"674213",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"Admin Decision",
  :std_devactn_id=>"65072",
  :suspns_dt=>"2026-01-25T00:00:00-06:00"},
 {:jrn_dt=>"2026-01-15T13:26:15-06:00",
  :name=>"DevelopmentItem",
  :claim_id=>"600881604",
  :create_dt=>"2026-01-15T13:26:15-06:00",
  :create_ptcpnt_id=>"601714904",
  :create_stn_num=>"341",
  :docid=>"1347452",
  :dvlpmt_item_id=>"674234",
  :dvlpmt_tc=>"CLMNTRQST",
  :req_dt=>"2026-01-15T00:00:00-06:00",
  :short_nm=>"PMR Pending",
  :std_devactn_id=>"43001",
  :suspns_dt=>"2026-01-30T00:00:00-06:00"}]
```

### EBenefits Claim Details Response

```ruby
ebenefits_details
=>
{:attention_needed=>"Yes",
 :base_end_prdct_type_cd=>"130",
 :benefit_claim_id=>"600881604",
 :bnft_claim_lc_status=>
  [{:phase_chngd_dt=>"2026-01-15T13:06:56", :phase_type=>"Gathering of Evidence", :phase_type_change_ind=>"13"},
   {:phase_chngd_dt=>"2026-01-14T08:39:38", :phase_type=>"Claim Received", :phase_type_change_ind=>"N"}],
 :bnft_claim_type_cd=>"130SSRDE",
 :claim_dt=>"2026-01-14",
 :claim_status=>"PEND",
 :claim_status_type=>"Dependency",
 :decision_notification_sent=>"No",
 :development_letter_sent=>"Yes",
 :end_prdct_type_cd=>"134",
 :poa=>"CONNECTICUT DEPARTMENT OF VETERANS AFFAIRS",
 :program_type=>"CPL",
 :ptcpnt_clmant_id=>"600033542",
 :ptcpnt_vet_id=>"600033542",
 :regional_office_jrsdctn=>"New York",
 :temp_regional_office_jrsdctn=>nil,
 :wsyswwn=>
  {:address_line1=>"Regional Office",
   :address_line2=>"245 West Houston Street",
   :address_line3=>nil,
   :city=>"New York",
   :state=>"NY",
   :zip=>"10014"},
 :wwd=>{:date_open=>"2026-01-15", :dvlpmt_item_id=>"674215", :items=>"1151 development to VAMC", :suspense_dt=>"2026-02-14"},
 :wwsnfy=>{:date_open=>"2026-01-15", :dvlpmt_item_id=>"674234", :items=>"      ", :suspense_dt=>"2026-01-30"}}
```

---

## Summary

| dvlpmt_item_id | short_nm                  | std_devactn_id | In Lighthouse? | In ebenefits_details? |
| -------------- | ------------------------- | -------------- | -------------- | --------------------- |
| 674215         | 1151 development to VAMC  | 38974          | ✅             | ✅ `wwd`              |
| 674234         | PMR Pending               | 43001          | ✅             | ✅ `wwsnfy`           |
| 674209         | ADMINCOD                  | 43023          | ❌             | ❌                    |
| 674208         | Admin Decision            | 65072          | ❌             | ❌                    |
| 674219         | PMR Pending               | 43001          | ❌             | ❌                    |
| 674225         | Delayed BDD Exam Requests | 42991          | ❌             | ❌                    |
| 674213         | Admin Decision            | 65072          | ❌             | ❌                    |

---

## Related Files

- `vets-api/modules/claims_api/app/controllers/concerns/claims_api/v2/claims_requests/tracked_items.rb`
- `vets-api/modules/claims_api/lib/bgs_service/tracked_item_service.rb`
- `vets-api/modules/claims_api/lib/bgs_service/e_benefits_bnft_claim_status_web_service.rb`
- `vets-api/lib/lighthouse/benefits_claims/service.rb`
