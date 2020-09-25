
These are steps to illustrate how to create a proxy endpoint for the MAP API.
This proxy code could be expanded for greater functionality as currently it just works with one endpoint.

## install and start the mounteblank server

```
npm install -g mountebank
mb
```

The server is now running in that window

---

<details>
  <summary> ruby script </summary>
  
```
require 'mountebank'
require 'yaml'

puts "#{Mountebank.imposters}"

VA_ROOT = '/Users/laurenceguild/src/pgd_pr1/vets-api'
SPEC = 'spec/support/vcr_cassettes/health_quest'
CAS = 'appointments/get_appointment_by_id.yml'

path = "#{VA_ROOT}/#{SPEC}/#{CAS}"

cas_obj = YAML.load_file(path)
body = JSON.parse(cas_obj['http_interactions'][0]['response']['body']['string'])

port = 4546
protocol = Mountebank::Imposter::PROTOCOL_HTTP
imposter = Mountebank::Imposter.build(port, protocol)

# Create a response
status_code = 200
headers = {"Content-Type" => "application/json"}
response = Mountebank::Stub::HttpResponse.create(status_code, headers, body)

imposter.add_stub(response)
imposter.save!

```
  
</details>  

## Ruby proxy setup

save the above ruby script to mb.rb

set VA_ROOT in the script to the path of your local vets-api
The script will mock the vcr_cassette file indicated by CAS

in another shell, install the gem and run the script.

```
gem install mountebank
ruby mb.rb
```

## vets-api setup

In the config/settings.yml file in hqva_mobile the url has the same port
that the ruby script is mocking and the key_path is any private key

```
hqva_mobile:
  url: 'http://localhost:4546'
  mock: false
  key_path: /Users/laurenceguild/my-play-certs/sandbox_rsa
  timeout: 15
```  
