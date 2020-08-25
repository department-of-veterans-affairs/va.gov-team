
## Health Quest Service

This service mirrors a subset of what VAOS does. Eventually it will also connect to PGD FHIR data through VAMF (MAP)

It currently has these characteristics

- It has mocked tests that are only available to the testing framework
- For the service to connect to actual VAMF (MAP) endpoints, it has to use the VAMF staging environment
- The service needs to be in the main branch on vets-api and not in a seperate branch

#### Redis

VAOS uses Redis in the following manner in the user service with a 'va_mobile_session_refresh_lock' key. I don't know if we should use the same key or a different one.

```
    def redis_session_lock
      @redis ||= Redis::Namespace.new(REDIS_CONFIG[:va_mobile_session_refresh_lock][:namespace], redis: Redis.current)
    end

    def lock_session_creation(account_uuid)
      redis_session_lock.set(account_uuid, 1)
      redis_session_lock.expire(account_uuid, REDIS_CONFIG[:va_mobile_session_refresh_lock][:each_ttl])
    end
```

#### VAMF (MAP) keys

VAOS has a setting like so in settings.yml:

```
va_mobile:
  url: 'https://veteran.apps.va.gov'
  mock: false
  key_path: /fake/client/key/path
  timeout: 15
```

The plan is to use a different setting for the Health Quest service:

```
hqva_mobile:
  url: 'https://veteran.apps.va.gov'
  mock: false
  key_path: /fake/client/key/path
  timeout: 15
```

This means that the settings for staging and production will also need to be altered. They are not in the github code since they are environment specfic. 
The above settings are from the dev environment which is why they look fake. The dev environment has no access to VAMF (MAP) in actuality

#### StatsD

These keys for StatsD() have been added where in VAOS they where something else. We need to find out if that will all work transparently

api.health_quest
api.health_quest.fhir


#### Search code for VAOS related carry overs

```
find modules/health_quest -name "*.rb" -exec grep -i vaos {} \; -print
find modules/health_quest -name "*.rb" -exec grep -i va_mobile {} \; -print
find modules/health_quest -name "*.rb" -exec grep -i statsd {} \; -print
```

A few notes added using my initials
```
find modules/health_quest -name "*.rb" -exec grep -i ljg {} \; -print
```






