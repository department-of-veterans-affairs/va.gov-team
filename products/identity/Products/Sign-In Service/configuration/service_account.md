# Service Account Configuration

## Description

## Attributes

 ServiceAccountConfigs have the following attributes:

| attribute | data type | description | sample value |
| --- | --- | --- | --- |
| `service_account_id` | uuid | unique identifier for account connection | 9caf51576cd6fe65b662588584ed97b1 |
| `description` | string | custom text description of account integration | Some Sign in Service Client |
| `scopes` | array | one or more string URL permissions granted to the client | ['http://localhost:3000/sign_in/client_configs'] |
| `access_token_audience` | string | URL of the requesting account | http://localhost:4000 |
| `access_token_duration` | DateTime | duration of access token; maximum of 5 minutes | 5.minutes |
| `certificates` | array | one or more public certs provided by the client | ["-----BEGIN CERTIFICATE-----\nMIIDAjCCAeoCC..."] |
| `access_token_user_attributes` | array | optional user attribute parameters, specified by the client, to be included in the generated token | ['icn', 'type', 'credential_id'] |

### Manual Service Account Config Creation

- To create a service account with custom attributes, open a Rails console on the SiS environment you wish to register it on, copy the `service_account_config` below, modified as you wish, then save it to the database with `service_account_config.save`.

  ```ruby
  service_account_config = SignIn::ServiceAccountConfig.new({
    service_account_id: SecureRandom.hex,
    description: 'Sample Client API',
    scopes: ['http://localhost:3000/sign_in/client_configs'],
    access_token_audience: 'http://localhost:4000',
    access_token_duration: 5.minutes,
    certificates: ["-----BEGIN CERTIFICATE-----\nMIIDAjCCAeoCCQCd5yxC1/1eSTANBgkqhkiG9w0BAQsFADBDMQswCQYDVQQGEwJV\nUzEPMA0GA1UECAwGT3JlZ29uMREwDwYDVQQHDAhQb3J0bGFuZDEQMA4GA1UECgwH\nT2RkYmFsbDAeFw0yMzA3MjAxMzM2MTFaFw0yNDA3MTkxMzM2MTFaMEMxCzAJBgNV\nBAYTAlVTMQ8wDQYDVQQIDAZPcmVnb24xETAPBgNVBAcMCFBvcnRsYW5kMRAwDgYD\nVQQKDAdPZGRiYWxsMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw15I\nxiDnedSaypN4J85mpqnW/lEhUVBOab8WH6yHP/TAybwuEA1g5FlvsK+JI8daB9ww\ntj5jEO7lVObrLXDj9n2nvA05UxaoeSihVJcZZyXeqszyceV5Jy19cQFeHQsNCH/f\n2rgWupyCe6UrqK8l9K/F5MILXLoDDKE1a/2mdoWl7dPy9eCBfkuoptKsWp/UYSzE\nUOeveppS+fqvcyoJIRO1vMqt7Lf07RhxmzOEOF71IzxTUDbI/RLgO+LgEHPHOg9J\nW7Tubh0RvKD2W7xqMDQF/81t+Y+LQ8+jnpE/7LUrHWUMmQHd5BXECFoBi/XiR01t\ndcBtKdQfwmRydoPMZQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC/2iLSxm+0Eehq\ntxZq7h8CMTMuOueLVeTu/UY9zT/juvobTmwgsKqYLmKx4JC7Ioycn7z1diX0LeEV\nECcMV0dIYgNDQ9J1pEVA1GJX72d3za45ZlY9R0tujDD8eynx/rxbimv5KaxmNmBA\na/2qmpxHyy2F4ZjHX4w60CYRVHvqNzSjCUpHkMw+40P89I3YStFhW64i3lpm7YRJ\nAsf3Uq21LI1T9xWECQ6YBDeRHeyn2EOqAYe/xLV23AXP1pID3Mso+KpXch7Nsemc\nKRXpqqNAsSZqbyXm3Wwf5zR7zKwTE2E5UfpQxlcQMFJi6HJKOua/6ujsm9JimNlr\n2FRiU/DM\n-----END CERTIFICATE-----\n"]
  })
  ```

### Seeded Service Account Config Creation

- the `vets-api` development seed file contains a configuration for multiple Service Account Configs similar to the one above; to populate them run `rails db:seed` from `vets-api` root and confirm through a rails console or Postgres that the entries created.

### `service_account_id` & Private Certificates

- Regardless of the source of your Service Account Config, copy the `service_account_id` that you randomly generated or passed in, it will be required in your service account assertion.
- You will need the private key paired with the certificate you registered; the certificate in the example above & the development seed config is paired with the [SiS test service account private key](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/fixtures/sign_in/sample_service_account.pem).