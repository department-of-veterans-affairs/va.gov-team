# How to create a certificate for getting a service running locally

## Creating a certificate for running `benefit-claims` locally
1. Open a terminal and do the following
  ```
  cd vets-api
  cd config 
  cd certs
  mkdir lighthouse
  cd lighthouse
  mkdir benefits-claims
  cd benefits-claims

  # Generate a private key
  openssl genrsa -out key.pem 2048

  # Generate the key pair
  openssl rsa -in key.pem -outform PEM -pubout -out public.pem

  brew install step

  # Generate the jwk pair
  step crypto jwk create jwk.pub.json jwk.json --from-pem key.pem --alg RS256
  ```
2. In `vets-api` go to `config/certs/lighthouse/benefits-claims/jwk.pub.json`
3. Open the file and copy the file contents
4. In Chrome go to this [link](https://developer.va.gov/explore/api/benefits-claims/sandbox-access)
5. Fill out the form. NOTE: you will take the contents from the file that you copied and paste them in the OAuth public key section
6. Submit the form and you will get a success message with a client id. Copy that client id.
7. Go to `vets-api`
8. Go to the `config` folder and create a file called `settings.local.yml`
9. In that new file add the following to the file…
  ```
  # lighthouse
  lighthouse:
   auth:
     ccg:
       client_id: 0oavoqbnl8Z31VPGu2p7
       rsa_key: config/certs/lighthouse/benefits-documents/key.pem
   benefits_claims:
     host: https://staging-api.va.gov
     access_token:
       client_id: <Your Client ID that you created>
       rsa_key: config/certs/lighthouse/benefits-claims/key.pem
     use_mocks: true
  ```
10. Update the lighthouse/benefits_claims/access_token/client_id with the VA API OAuth Client Id that you copied
11. Now you should be able to run vets-api locally with beta mocks

## Creating a certificate for running `benefit-documents` locally
1. Open a terminal and do the following (if you have done this once for benefit-claims you dont HAVE to do it again)
  ```
  cd vets-api
  cd config 
  cd certs
  mkdir lighthouse
  cd lighthouse
  mkdir benefits-documents
  cd benefits-documents

  # Generate a private key
  openssl genrsa -out key.pem 2048

  # Generate the key pair
  openssl rsa -in key.pem -outform PEM -pubout -out public.pem

  brew install step

  # Generate the jwk pair
  step crypto jwk create jwk.pub.json jwk.json --from-pem key.pem --alg RS256
  ```
2. In `vets-api` go to `config/certs/lighthouse/benefits-claims/jwk.pub.json` or if you made a new one go to `config/certs/lighthouse/benefits-documents/jwk.pub.json`
3. Open the file and copy the file contents
4. In Chrome go to this [link](https://developer.va.gov/explore/api/benefits-documents/sandbox-access)
5. Fill out the form. NOTE: you will take the contents from the file that you copied and paste them in the OAuth public key section
6. Submit the form and you will get a success message with a client id. Copy that client id.
7. Go to `vets-api`
8. Go to the `config` folder and create a file called `settings.local.yml`
9. In that new file add the following to the file…
  ```
  # lighthouse
  lighthouse:
   auth:
     ccg:
       client_id: 0oavoqbnl8Z31VPGu2p7
       rsa_key: config/certs/lighthouse/benefits-documents/key.pem
   benefits_documents:
     host: https://sandbox-api.va.gov
     access_token:
       client_id: <Your Client ID that you created>
       rsa_key: config/certs/lighthouse/benefits-documents/key.pem
     use_mocks: true
  ```
10. Update the lighthouse/benefits_documents/access_token/client_id with the VA API OAuth Client Id that you copied
11. Now you should be able to run vets-api locally with beta mocks
