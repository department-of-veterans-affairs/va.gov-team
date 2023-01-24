# Mock Data

For APIs or services that invoke a backend VA data source, where possible we attempt to record and use mock data for local development and our development environment. We do this for several reasons:

* It avoids developers needing to be connected to the VA network during everyday development.
* It avoids us having to coordinate across multiple VA teams to ensure test data is staged the way we want and maintained over time.
* It gives us the flexibility to configure interesting data permutations and corner cases that can be used for training, frontend bug verification, etc.

## Approach

We use the [Betamocks](https://github.com/department-of-veterans-affairs/betamocks) library to support our mock data approach. It is a Faraday middleware that intercepts each external requests and if the request matches a configured pattern (in terms of the host/port/path and request body and headers), substitutes a recorded response instead of making the external network request. Betamocks also supports a recording mode, where it will make the initial external request and record the data file to be played back for future requests. It is patterned after the VCR Gem used in Ruby specs, but we use it at runtime for development purposes, not for automated testing.

The mock data set that we use with betamocks is contained in [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata). 

## Configuration
To use an existing betamocks data set for a given backend service, betamocks needs to be enabled system-wide (in settings.local.yml):
```
betamocks:
  enabled: true
```
Also mocking needs to be enabled for the backend service. Configuration entries vary but generally something like:
```
<mvi/evss/vet360/etc>:
  mock: true
```
This latter setting typically enables the betamocks middleware in the given backend service integration's `configuration.rb`:
```
  conn.response :betamocks if Settings.mvi.mock
```

## Recording Data
To record new responses from a backend system, you need to be able to connect to the backend system - either connecting your GFE laptop to the VA network, or using a vets-api-server instance in our dev or staging environment.

Assuming betamocks already has a service configuration for your service and you are just adding additional responses, you just need to configure:
```
betamocks:
  recording: true
```

If you are recording data for a new service, see the documentation in the Betamocks repository for how to define a new service.

### Example: Recording MVI Responses
This section describes the steps performed to record new MVI responses. It shows an example of triggering MVI requests from the Rails console. This is easier than the typical way in which MVI requests are triggered, which is going through the sign in process. This approach would lend itself to scripting to record a set of bulk responses.

The MVI service takes a User object as input, so we needed to initialize a User object with the attributes expected by the MVI service. The User object in turn delegates some attributes to a UserIdentity object, so we needed to initialize and save that, and then tear it down after the MVI lookup. In this case, we were recording responses for MHV and DSLogon credentials, which use different attributes in the User object, so we had a couple variations to work through. 

In this case we wanted to record data from MVI's stage1a environment, which is connected to our staging environment. So we looked up a staging vets-api-server instance, detached it from the load balancer so it would not serve any traffic, and used that instance as our recording environment.

Setup:
```
# (All paths relative to /srv/vets-api/src)
# Added appropriate configuration to config/betamocks/services_config. These enable matching on the ICN and EDIPI 
# parameters used during MVI queries for MHV and DSLogon credentials (respectively)
  - :method: :post
    :path: <%= URI(Settings.mvi.url).path %>
    :file_path: "mvi/profile"
    :cache_multiple_responses:
      :uid_location: body
      :uid_locator: '(?:root="2.16.840.1.113883.4.349" )?extension="(\d{10}V\d{6})"(?: root="2.16.840.1.113883.4.349")?'
  - :method: :post
    :path: <%= URI(Settings.mvi.url).path %>
    :file_path: "mvi/profile"
    :cache_multiple_responses:
      :uid_location: body
      :uid_locator: '(?:root="2.16.840.1.113883.3.42.10001.100001.12" )?extension="(\d{10})"(?: root="2.16.840.1.113883.3.42.10001.100001.12")?'

# Updated config/settings.local.yml:
mvi.mock = true
betamocks.recording = true

# Restarted vets-api-server (not sure if this is strictly necessary)
initctl restart vets-api-server
```

Rails Console Steps:
```
$ bundle exec rails c

def mock_dslogon(edipi)
  mvi = MVI::Service.new
  ui=UserIdentity.new(uuid: 'abcd1234', dslogon_edipi: edipi, email: 'dslogon@example.com', loa: {:current => 3, :highest => 3}, authn_context: 'dslogon')
  ui.save
  un = User.new(uuid: 'abcd1234')

  p=mvi.find_profile(un)
  ui.destroy
end

def mock_mhv(icn)
  mvi = MVI::Service.new
  ui=UserIdentity.new(uuid: 'abcd1234', mhv_icn: icn, email: 'dslogon@example.com', loa: {:current => 3, :highest => 3}, authn_context: 'myhealthevet')
  ui.save
  un = User.new(uuid: 'abcd1234')

  p=mvi.find_profile(un)
  ui.destroy
end

# For each ICN:
mock_mhv(icn)

# For each EDIPI:
mock_dslogon(edipi)
```

Finally, the recorded cassettes were extracted from `/srv/vets-api/src/config/vets-api-mockdata/mvi/profile_icn` and `/srv/vets-api/src/config/vets-api-mockdata/mvi/profile_edipi` using `scp`, and added to the vets-api-mockdata repository.

To record additional MVI lookups for ID.me credentials, the approach would be the same, except that it's necessary to populate the correct first/last/dob/ssn/gender attributes in the `UserIdentity` object, because those are the traits by which MVI performs a lookup, rather than the ICN/EDIPI values. 
