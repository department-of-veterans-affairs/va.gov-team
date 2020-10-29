
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

---

## Version 2 of the Proxy

 Version 2 of the Ruby proxy can work with multiple proxies. It will still need the
 changes to settings.yml from above. It will try to install the mb node component and start it automatically. You just need to
 istall the gem. It will check for environment variables that you may be missing and notify you
 

<details>
  <summary>Ruby proxy Version 2</summary>


```
require 'mountebank'
require 'yaml'

VA_ROOT = '/Users/laurenceguild/src/pgd_pr1/vets-api'
SPEC_PATH = 'spec/support/vcr_cassettes/health_quest'
PORT = 4546

class HealthQuestProxy
  Proxies = [
    {
      path: "/appointments/v1/patients/\\w+/appointments/\\d+",
      cas: 'appointments/get_appointment_by_id.yml'
    },
    {
      path: '/appointments/v1/patients/\\w+/appointments',
      cas: 'appointments/get_appointments.yml'
    }
  ]

  def launch
    Proxies.each do |prx|
      path = "#{VA_ROOT}/#{SPEC_PATH}/#{prx[:cas]}"
      cas_obj = YAML.load_file(path)
      body = JSON.parse(cas_obj['http_interactions'][0]['response']['body']['string'])

      status_code = 200
      headers = {"Content-Type" => "application/json"}
      data = {matches: {path: prx[:path]}}
      predicate = Mountebank::Stub::Predicate.new(data)
      response = Mountebank::Stub::HttpResponse.create(status_code, headers, body)

      puts "\n\nADD IMPOSTER for #{path}\n\n"
      @imposter.add_stub(response, predicate)
      @imposter.save!
    end
  end

  def start_mb
    @mb_pid = Process.fork { system 'mb' }
    if !@mb_pid
      # we need to guard against infinite recrusion
      abort "could not start mountebank" if @installed_mb
      system 'npm install -g mountebank'
      @installed_mb = true
      sleep 1
      start_mb
    end
  end

  def initialize
    @installed_mb = false
    ['MOUNTEBANK_SERVER', 'MOUNTEBANK_PORT'].each do |var|
      unless ENV[var]
        puts "You do not have the environment variable set for #{var}"
        puts 'add these to ~/.zshrc'
        puts 'export MOUNTEBANK_SERVER=127.0.0.1'
        puts 'export MOUNTEBANK_PORT=2525'
        exit
      end
    end

    terminate_imposter = "curl -X DELETE http://localhost:2525/imposters/#{PORT}"
    kill_mbserver = "ps -ef | grep 'usr/local/bin/mb' | grep -v grep | awk '{ print $2 }' | xargs kill"
    system terminate_imposter
    puts "**** KILL PREVIOUS SERVER ****"
    system kill_mbserver
    sleep 1
    start_mb
    puts "mb pid = #{@mb_pid}"
    sleep 1

    protocol = Mountebank::Imposter::PROTOCOL_HTTP
    @imposter = Mountebank::Imposter.build(PORT, protocol)   
    puts "-- LAUNCH --" 
    launch
    sleep 1
    puts "Imposters: #{Mountebank.imposters}"
  end
end

HealthQuestProxy.new

```

</details>
