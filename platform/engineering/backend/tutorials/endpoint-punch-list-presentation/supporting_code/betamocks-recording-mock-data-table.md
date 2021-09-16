----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Betamocks-Mockdata-Example.1885831242.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## vets-api-mockdata/evss/pciu/email/796376250.yml
````yml
---
:method: :get
:body:
  cnp_email_address:
    effective_date: '2012-04-03T04:00:00.000+0000'
    value: test2@test1.net
  control_information:
    can_update: true
    corp_avail_indicator: true
    corp_rec_found_indicator: true
    has_no_bdn_payments_indicator: true
    indentity_indicator: true
    index_indicator: true
    is_competent_indicator: true
    no_fiduciary_assigned_indicator: true
    not_deceased_indicator: true
:headers:
  date: Mon, 05 Mar 2018 21:17:05 GMT
  server: Apache/2.4.6 (CentOS) OpenSSL/1.0.2k-fips
  content-type: application/json
  set-cookie: wss-pciu-services_JSESSIONID=tH74BmmeWwO8gf6ybjSf_JlXOZ7ibcjKfgurVvw4FnVJVwuA_Dpo!1189485130;
    path=/; HttpOnly, WLS_12.1_App1_Cluster_ROUTEID=.01; path=/
  via: 1.1 csraciapp6.evss.srarad.com
  connection: close
  transfer-encoding: chunked
:status: 200
````

## vets-api-mockdata/make_table.rb
````ruby
...
  
SERVICES = [
  ...
  Service.new('pciu profile',
    [
      Endpoint.new('evss/pciu/email', 'Email')
    ]
  ),
  ...
].freeze

...
````

## vets-api-mockdata/users.csv
````csv
...

MARION H FOSTER,796376250,vets.gov.user+37@gmail.com,

...
````
