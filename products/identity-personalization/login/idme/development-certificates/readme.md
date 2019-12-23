The certificate and key files in this folder can be downloaded and used for local development with the ID.me sandbox. More info in the [vets-api README](https://github.com/department-of-veterans-affairs/vets-api/blob/master/README.md).

### Creating your own self-signed certificates
This shouldn't be necessary, as the certificate provided in this directory have already been configured by ID.me, but instructions included here for completeness.

You can create a private key and certificate with openssl (if you don't have openssl installed you can `brew install openssl` on Mac OSX).
```
$ openssl req -newkey rsa:2048 -nodes -keyout shauni-localhost.key -out shauni-localhost.csr
$ openssl x509 -req -sha256 -days 365 -in shauni-localhost.csr -signkey shauni-localhost.key -out shauni-localhost.crt
```

The `.crt` file needs to be sent to ID.me to be set up as a "Relying Party".
