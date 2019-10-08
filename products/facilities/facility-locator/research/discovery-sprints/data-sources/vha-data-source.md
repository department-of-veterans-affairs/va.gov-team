# VHA Data source

https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/VHA%20Access%20to%20Care.md

## Source code implementation
- Sidekiq worker: https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/facilities/access_data_download.rb
- Client implementation: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/bulk_json_client.rb
