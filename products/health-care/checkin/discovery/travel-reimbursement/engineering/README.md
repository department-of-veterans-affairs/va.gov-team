# Travel Pay Engineering details


## Architecture Diagram

![diagram](../assets/Travel%20re-embursement.0.png)


### POST for token 

curl --location --request POST 'https://login.microsoftonline.us/f7c49e36-971b-42c7-b244-a88eed6c0bf6/oauth2/v2.0/token' \
--form 'grant_type=" client_credentials"' \
--form 'client_id=" <your SPN client id provided by VAEC>"' \
--form 'client_secret=" <your SPN client secret provided by VAEC>' \
--form 'scope="4a77476c-ceed-45db-ad7e-ac2bbbc4f72a/.default"'

