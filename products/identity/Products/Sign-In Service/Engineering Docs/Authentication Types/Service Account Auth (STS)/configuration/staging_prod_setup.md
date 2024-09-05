# Service Account Config Provisioning

## Introduction

This document serves as a guide for Identity engineers implementing a new Service Account Configuration to enable Service Account Auth (STS) for a new client. More details on Service Account Configs themselves can be found [here](./service_account.md).

### Argo Access & `vets-api` Rails console

This guide assumes the user has access to the [vets-api staging & production Argo applications](https://argocd.vfs.va.gov/applications?search=vets-api); all instructions are to be carried out within a Rails console of the `vets-api` instance.

In the "App Details" view of the selected environment there will be one or more `vets-api-web-xxx` "pods", click on any of them to access that pod, then select the "Terminal" tab below the pod name. From the terminal you can enter `bundle exec rails c` to access that environment's Rails instance and perform the necessary commands.

Leaving the terminal window open for an extended period will eventually cause it to lose its connection and force you to close and re-open a pod and terminal session - it is best to prepare the config sequence in a separate editor so that you can quickly input the commands in a fresh pod terminal.

## Creating a Public Certificate

The created Service Account Config will need to include a public certificate in order to validate the service account assertion sent by the STS client.

### Creating an RSA Key

First, locate the private key specified in the configuration instructions. If the new STS config is called by `vets-api`, you will use the SiS `sts_client` key, found at `Settings.sign_in.sts_Client.key_path`.

Places Keys are found
* `Settings.sign_in.sts_client.key_path` - self-STS calls
* other places?

In your Rails console, open the key file and use it to create a new `OpenSSL::PKey::RSA` private key object.

```ruby
key_file = File.read('/path/to/key.pem')
rsa_key = OpenSSL::PKey::RSA.new(key_file)
```

### Signing a Certificate

Next you will create a certificate and use `rsa_key.public_key` to set its `public_key` attribute. Copy and enter the following into your Rails console, making sure to change the `cert.subject` to reflect `staging.va.gov` if you are creating a staging configuration.

```ruby
cert = OpenSSL::X509::Certificate.new
cert.version = 2 # X509 v3
cert.serial = OpenSSL::BN.rand(160).to_i # Random serial number
cert.subject = OpenSSL::X509::Name.parse("/C=US/O=Department of Veterans Affairs/OU=VA.gov/CN=https://va.gov") # change CN to "https://staging.va.gov" for staging
cert.issuer = cert.subject # self-signed, so issuer is the same as the subject
cert.public_key = rsa_key.public_key
cert.not_before = Time.now
cert.not_after = cert.not_before + 730 * 24 * 60 * 60 # valid for two years

# sign the certificate with the private key
cert.sign(rsa_key, OpenSSL::Digest::SHA256.new)
```

## Configuration Attributes

With the certificate signed and created you can now create and save a new `ServiceAccountConfig` object. Copy the configuration creation below and replace the attributes with those from the configuration instructions.

```ruby
service_account_config = SignIn::ServiceAccountConfig.new({
  service_account_id: SecureRandom.hex, # if the STS config already has a specified service_account_id use it instead
  description: 'A Service Account Client',
  scopes: ['one or more URL scopes'],
  access_token_audience: 'STS client',
  access_token_duration: 5.minutes,
  certificates: [cert],
  access_token_user_attributes: ['one or more user attributes']
})
service_account_config.save!
# => true
```

## Testing an STS Config

Once your config is made, you need to test it.