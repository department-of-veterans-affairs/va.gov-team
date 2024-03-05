# TE Remediation

This document is to consolidate information around remediation of a recent issue concerning the TE frontend feature flag.

## Threads and docs

- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677075027359/3be1457e29c424eeada818562a30b363a778fff0?wid=0-1709564849771)
- [Slack](https://agilesix.slack.com/archives/C04MJV66ZPC/p1709237829863709)
- [Story](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/77508)

## Scripts

Below is a ruby script run in the Argo production terminal to determine counts of users affected

```ruby
# for people who have already submitted

found_saved_claims_count = 0
start_date = DateTime.parse('2024-02-27').beginning_of_day
end_date = DateTime.parse('2024-03-01').end_of_day
savedClaims = SavedClaim.where(created_at: start_date..end_date, form_id: '21-526EZ-ALLCLAIMS')

## 9397 total submitted claims

savedClaims.each do |sc|
      puts sc.id
      form_data = JSON.parse(sc.form)
      if form_data['toxicExposureConditions'].present? && form_data['toxicExposureConditions'].keys.any?
         found_saved_claims_count += 1
         puts found_saved_claims_count
      end
end
## ----> FINAL ANSWER: 5842 TE Submitted Claims

# still inprogress

start_date = DateTime.parse('2024-02-27').beginning_of_day
end_date = DateTime.parse('2024-03-01').end_of_day
found_ipfs_count = 0
ipfs = InProgressForm.where(form_id: '21-526EZ').where('updated_at > ?', start_date)
ipfs.each do |f|
      puts f.id
      form_data = f.data_and_metadata[:formData]
      if form_data['toxic_exposure_conditions'].present? && form_data['toxic_exposure_conditions'].keys.any?
         found_ipfs_count += 1
         puts found_ipfs_count
      end
end
nil
puts found_ipfs_count

## -----> 1483 TE in progress
```
