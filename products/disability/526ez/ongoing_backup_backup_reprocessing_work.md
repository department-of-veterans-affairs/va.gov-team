# Ongoing backup-backup 526 submission reprocessing work

## Purpose
Document remaining backup-backup resubmission work for context sharing and transparency

## Context
[This work follow this discovery and knowledge transfer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md).  The initial batch of ~40k submissions is down to about 500 at the time of writting this document.  These submissions are blocked by known EVSS validation errors.  As these failures are address, the resubmission and testing of these fixes will be documented here.

## Existing EVSS failures
- 377 occurrences of - java.lang.NullPointerException
- 44 occurrences of form526.veteran.currentMailingAddress.militaryPostOfficeTypeCode.IsNotValid (edited) 
- 2 occurrences of form526.serviceInformation.reservesNationalGuardService.obligationTermOfServiceFromDate.IsNotValid
- 118 occurrences of form526.submit.establishClaim.serviceError
- 3 occurrences of gov.va.wss.partner,veteranrecord.ws.client.VeteranRecordWsClientException
- 2 occurrences of form526.veteran.changeOfAddress,endingDate.IsNotValid

## Testing

### Look up a real failed submission by an error message

```ruby
err_msg = 'ratedDisability.isInvalid' # for example.  doesn't need to be the full message, just a substring
subs = Form526Submission.joins(:form526_job_statuses).where(submitted_claim_id: nil).where(backup_submitted_claim_id: nil).where("form526_job_statuses.error_message LIKE '%#{err_msg}%'"); nil
```

use your payload to test against the endpoint

```ruby
# create a testable payload
json = <one of your failed submissions>.form # returns the original form data
submission = Form526Submission.last
submission.form_json = json.to_json
submission.save!

# run the adhoc task that tests this endpoint
processor = Sidekiq::Form526BackupSubmissionProcess::Processor.new(submission.id, get_upload_location_on_instantiation: false, ignore_expiration: true)
processor.gather_docs!

# confirm the doc was upload to S3
processor.docs # get filepath
Reports::Uploader.get_s3_link(file_path) # get S3 link
```

If you need a specific peice of info to confirm a resubmission with EVSS or LH, you can get that from the submission headers, e.g.
```ruby
JSON.parse(submission.auth_headers["va_eauth_authorization"])['authorizationResponse']['edi'])
```

## WIP

The following is the remaining ~500 submission IDs that will require [bundling and uploading](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526-submission-failure-manual-submission.md):

```
115,141,223,254,280,305,352,358,360,361,375,381,388,410,860,861,868,890,915,942,985,1031,1032,1067,1070,1073,1100,1101,1146,1185,1195,1203,1205,1208,1238,1246,1256,1263,1282,1291,1299,1300,1302,1303,1304,1331,1359,1374,1380,1388,1390,1393,1394,1395,1396,1405,1409,1410,1415,1420,1421,1424,1432,1434,1439,1446,1448,1450,1455,1477,1490,1499,1504,1513,1522,1534,1536,1552,1553,1557,1558,1562,1564,1574,1578,1581,1584,1586,1589,1592,1601,1609,1611,1614,1615,1623,1636,1641,1644,1649,1656,1661,1667,1674,1676,1681,1692,1697,1704,1712,1722,1747,1753,1754,1755,1768,1785,1788,1791,1846,1849,1850,1855,1862,1863,1864,1915,1922,1923,1925,1971,1972,1992,2013,2016,2018,2036,2066,2082,2083,2138,2166,2192,2194,2203,2249,2250,2268,2312,2316,2320,2378,2403,2426,2429,2433,2448,2503,2506,2524,2538,2540,2548,2570,2614,2618,2637,2663,2692,2693,2738,2755,2762,2765,2811,2825,2827,2834,2840,2905,2964,3001,3052,3164,3170,3172,3173,3210,3304,3361,3380,3419,3437,3467,3492,3513,3541,3542,3543,3561,3562,3598,3621,3638,3643,3648,3649,3710,3865,3866,3878,3922,3949,3983,3985,3992,4023,4090,4091,4092,4112,4133,4135,4187,4220,4221,4223,4226,4228,4232,4233,4327,4332,4333,4334,4336,4423,4494,4499,4501,4502,4503,4524,4577,4578,4579,4608,4736,4741,4754,4826,4830,4866,4868,4939,4940,4942,4943,4944,4985,5029,5032,5034,5056,5094,5116,5160,5176,5185,5219,5240,5267,5270,5297,5306,5340,5377,5396,5398,5555,5625,5660,5664,5669,5774,5775,5864,5903,5927,5928,5929,5998,6026,6027,6036,6049,6050,6051,6053,6054,6055,6061,6063,6152,6172,6195,6284,6286,6291,6292,6293,6298,6680,6736,7154,7155,7579,9429,10119,10195,10369,10401,11054,11565,11784,11856,17883,20746,29508,43620,46587,47367,49312,49667,51819,52071,52108,53197,55656,55664,59817,62179,64631,66930,67380,67790,74089,85750,86898,87840,97878,97918,99117,104052,107762,108115,108930,110571,110644,112330,113964,114308,116155,117804,119929,129288,130002,130644,131364,134070,139410,142045,143295,146806,150360,180309,195586,214755,254224,279841,306036,317054,357143,358557,359814,381731,390698,474157,606940
```

These comprise the above known 6 failure types.
