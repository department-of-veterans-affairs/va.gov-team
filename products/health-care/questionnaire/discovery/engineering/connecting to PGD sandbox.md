

## Connecting to PGD sandbox

We where able to connect to the PGD sandbox as shown below. Next we will want to be able to use other endpoints in the sandbox as those become available for use

A set of local keys where created using this command. I sent Stephen Barrs the public key file:
```
openssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt | tee /dev/tty | openssl rsa -pubout
```

The Private key I put into: /Users/laurenceguild/my-play-certs/sandbox_rsa

Then in settings.yml:

```
hqva_mobile:
  url: 'https://veteran.apps.va.gov'
  mock: false
  key_path: /Users/laurenceguild/my-play-certs/sandbox_rsa
  timeout: 15
```

---

in modules/health_quest/app/services/health_quest/jwt_wrapper.rb set ISS 
ISS = 'gov.va.clipboard'

---



---

In modules/health_quest/app/services/health_quest/user_service.rb applied these temporary changes:

I commented out these lines because from the rails console the cache fails

```
#cached = cached_by_account_uuid(user.account_uuid)
#return cached.token if cached
```

in new_session_token() set URL to the sandbox
```
url = 'https://vagovtest.mapsandbox.net/users/v2/session?processRules=true'
```


Then set a breakpoint after perform() in the
new_session_token() method using binding.pry

---

using the rails console after running these commands, the breakpoint previously set
will be reached. At which point response.body will have the token returned from the sandbox and response.status will be 200

```
usr = FactoryBot.create :user
svc = HealthQuest::SessionService.new(usr)
svc.headers
```

---

Stephen Barrs, verified from the sandbox side that the session was successful:

```
{
  "authenticated": true,
  "authenticationAuthority": "gov.va.clipboard",
  "idType": "ICN",
  "iss": "gov.va.vamf.userservice.v1",
  "version": 2.1,
  "staffDisclaimerAccepted": true,
  "nbf": 1600108753,
  "sst": 1600108933,
  "patient": {},
  "vamf.auth.roles": [
    "veteran"
  ],
  "rightOfAccessAccepted": true,
  "exp": 1600109833,
  "jti": "ac03e97d-172d-424f-aa94-7c0b1df0867e",
  "loa": 0
}
```
