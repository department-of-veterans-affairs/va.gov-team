----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Supporting-Code.1887010852.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----


## vets-api/config/betamocks/services_config.yml
````yml
# EVSS
- :name: 'EVSS'
  :base_uri: <%= "#{URI(Settings.evss.url).host}:#{URI(Settings.evss.url).port}" %>
  :endpoints:
  # PCIU email
  - :method: :get
    :path: "/wss-pciu-services-web/rest/pciuServices/v1/emailAddress"
    :file_path: "evss/pciu/email"
    :cache_multiple_responses:
      :uid_location: header
      :uid_locator: 'va_eauth_pnid'
````
## vets-api/config/settings.yml
````yml
...

evss:
  mock_pciu: true

...
````
