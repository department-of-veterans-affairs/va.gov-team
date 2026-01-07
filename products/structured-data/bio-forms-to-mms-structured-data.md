# BIO-to-MMS Structured Data Connection
## Purpose
To send structured form data from vets-api (VA.gov) to the GovCIO external endpoint, the Platform requires that outbound traffic route through the fwdproxy, which manages secure egress and mTLS connections.
<br>
## Connectivity and Forward Proxy Role
The fwdproxy acts as the outbound gateway for vets-api when calling external services and responsible for:
* Performing mutual TLS (mTLS) authentication
* Managing outbound routing to approved external hosts
## Certificates in SSM Parameter Store
GovCIO requires mTLS for their API endpoint (dev-api.digitization.gcio.com). To support this, the VA Platform stores the client certificate and private key in AWS SSM Parameter Store.
For DEV, the parameters we created were:
* /dsva-vagov/vets-api/dev/tls/bio/dev-api.digitization.gcio.com.crt
* /dsva-vagov/vets-api/dev/tls/bio/dev-api.digitization.gcio.com.key
These should allow the fwdproxy deployment in DEV to retrieve and install the correct certificate bundle when connecting to GovCIO.
## fwdproxy Deployment Config
Once the certificates are in SSM:
* A combined PEM file is generated for mTLS
* A new forward-proxy “service entry” is added so fwdproxy knows how to route requests from vets-api to GovCIO (per this PR: https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/pull/816)
The PR includes:
* A new template for the GovCIO PEM (gcio-form-intake.pem.j2)
* A new fwdproxy task that installs the mTLS bundle
* A new service definition that vets-api will reference when calling the GovCIO endpoint
PR: https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy/pull/816
## Resulting Data Flow (High-Level)
1. vets-api sends form data to GovCIO (via fwdproxy)
2. fwdproxy receives the outbound request
3. fwdproxy attaches the correct mTLS certificate bundle
4. The request is forwarded to GovCIO’s API endpoint
5. GovCIO verifies the client certificate and processes the request
## Environment Mapping
1. dev
    1. corpDB - WebTest
    2. mpi - DEV/INT
    3. vbms - TST
2. staging
    1. corpDB - linktest
    2. mpi - STAGE1A/SQA
    3. vbms - uat
3. sandbox
    1. corpDB - linktest
    2. mpi - SQA
    3. vbms - uat


