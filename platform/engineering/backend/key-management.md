----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Key-Management.1886879804.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Key Management

Vets.gov systems may process sensitive information that must be protected from unauthorized parties. We utilize cryptography to protect this information and associated secrets. This document outlines our guidelines and general practices with regards to managing cryptographic keys and access credentials for protected systems.

* Access to all systems must be made over encrypted channels.
* Sensitive information must be encrypted at rest.
* Sensitive information must not be communicated over public channels.

## Exchanging Information over a Public Channel

Sensitive information should never be exchanged in plain text over a public channel. Utilize the VA's email-based encryption when possible. Temporary keys and tokens may be transmitted via Keybase. Personal information must be encrypted with GPG before transmission and sent only to verified parties. Lync _File Transfer_ may be used to transmit sensitive information, but secrets should never be sent via Lync messages.  

## Password/Authentication Resets

Voice verification must accompany a written request for password/authentication reset.

## Portable Devices

Access to Vets.gov information systems must only occur through approved portable devices utilizing previously approved cryptographic technology. Report of lost or stolen devices should occur as soon as possible so keys may be revoked.

## System Level

### Amazon Web Services

Engineers may be provided access to the Amazon Web Services web dashboard. They may also receive an access key that permits access to the Amazon Web Services API. Multi-factor authentication is required for all user accounts.

Credentials must be stored securely on an encrypted drive. Access keys must utilize restricted permissions that permit only single user access.

### KMS

Cryptographic keys should be managed by Amazon's KMS when possible. This provides auditing, oversight, and management capabilities to the Dev Ops team.

### PostgreSQL

Vets.gov's application database, which may contain sensitive information, is
encrypted at rest with Amazon's KMS-based RDS encryption (AES-256).

Unless there are explicitly defined reasons otherwise, future RDS databases should be encrypted with KMS by default.

### Redis/Memcached

Redis and Memcached instances, provided by AWS Elasticache, do not support automatic encryption. Sensitive information must be encrypted by the application before transmission into either of these systems.

### EBS

Sensitive information is not currently stored on EBS volumes. Future EBS volumes should be encrypted by default with Amazon KMS.

### S3

S3 buckets for internal use should encrypt content with Amazon S3-Managed Keys
or Amazon KMS-Managed Keys (AES-256).

### SSH Keys

Minimum 2048-bit RSA, recommended 4096-bit RSA. Private key must be password protected. Public keys should be provided to the Dev Ops team, and archived in configuration management.

Associated private keys must never be transmitted over a public channel. If there is reason to believe a key has been compromised, the Dev Ops team should be notified immediately so the key can be revoked. Private keys stored on portable devices must utilize restricted permissions that permit only single user access.

### SSL Certificates

SSL certificates are used for encrypting communication channels for users and traffic to several services on the VA network. Additionally, client-side certificate authentication is utilized for services on the VA network.

* Communication with external users occurs via a commercially provided certificate (SSLMate).
* Communication with VA services on the VA network occurs via certificates provided by the VA PKI team (https://github.com/department-of-veterans-affairs/devops/blob/master/docs/StandardOperatingProcedures/CreatingVASignedSSLCertificate.md).
* Internal communication with the Vets.gov forward proxy utilizes a self-signed
  SSL certificate.

Client-side authentication should be negotiated by the Vets.gov forward proxy system. These keys should not made directly available to the application.

## Application Level

Secrets must not be included in application source. The application may receive protected keys and secrets as part of the deployment process. These keys will be encrypted and secured in Credstash (KMS-backed).

The application should keep protected information and keys in memory and not on disk. Sensitive information should be protected by user accounts and permissions on the underlying system when disk storage is required. The underlying disk should be encrypted.

Where possible, the application should delegate authentication and secret management to an isolated internal system (such as the forward proxy).

Documentation should be provided for each key to permit regeneration in the event of compromise.
