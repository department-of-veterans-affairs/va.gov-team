# Accessing the Reference Data Service
### Swagger
EVSS team has swagger docs up for their RefData service. Following are instructions for how to access them in your browser - basically you're going to do a setup similar to the socks proxy, but using the staging jumpbox since that's the environment that's connected to EVSS
- `ssh -D 2002 -N ip-172-30-20-155.us-gov-west-1.compute.internal` - establishes a tunnel on local port 2002 to the staging jumpbox.
- Configure browser proxy switcher with a new profile for SOCKS5 on localhost:2002, and set it up to use that proxy profile for host `internal-staging-services-1341723990.us-gov-west-1.elb.amazonaws.com`
- Visit `https://internal-staging-services-1341723990.us-gov-west-1.elb.amazonaws.com/api/refdata/swagger-ui.html` in your browser. You'll need to click past the invalid cert warning (due to hostname mismatch). 
- Profit!

### Accessing the API
You can also use this trick to his the refdata API itself via CURL: 

`curl -H "Authorization: Bearer <YOUR JWT TOKEN>" -k --proxy socks5h://localhost:2002 https://internal-staging-services-1341723990.us-gov-west-1.elb.amazonaws.com/api/refdata/`


### Enable `vets-api` to use Proxy
To enable local development with the aws govcloud reference data service you must configure `vets-api` to use the proxy by the modifying the `settings.local.yml`:
```
govcloud_socks_proxy:
  enabled: true
```
This can also be useful to regenerating the [RDS VCR cassette specs](/spec/request/reference_data_request_spec.rb).
