

## Connecting to PGD sandbox

We where able to connect to the PGD sandbox as follows

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

