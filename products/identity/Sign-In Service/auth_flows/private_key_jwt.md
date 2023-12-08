# Private Key JWT Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/25/2023 | Initial creation |

## Summary

Private Key JWT Authentication allows a backend client unconnected to the original `/authorize` request to complete authentication and obtain tokens by passing a JWT signed by their pre-registered private key.
 
## Client Configuration

The usage of Private Key JWT auth vs PKCE auth is controlled in [your client's `Client Config`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/configuration/client_config.md) via the `pkce` and `certificates` settings.

## `/token` Request

In lieu of sending a `code_verifier` for your token request, instead use your `private.pem` key generated above to sign a JWT identifying your client.

```ruby
JWT.encode({ iss: '<client_id>',
             aud: 'http://127.0.0.1:3000/v0/sign_in/token',
             sub: '<client_id>',
             jti: SecureRandom.hex,
             exp: 1.month.since.to_i },
           OpenSSL::PKey::RSA.new(File.read(private_key)),
           'RS256')
```

Include the signed JWT as your `client_assertion` in your POST request to `/token`:

```bash
curl -X POST localhost:3000/v0/sign_in/token -H 'Content-Type: application/json' -d '{"grant_type": "authorization_code", "code": "<sis_auth_code>", "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer", "client_assertion": "<your_signed_jwt>"}'
```
