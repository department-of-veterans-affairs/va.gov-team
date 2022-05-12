## SharePoint PDF Upload
Researching the viability of uploading PDF versions of FSR requests to SharePoint from VA.gov backend

### Technical Process
Option 1 (External PDF conversion)
1. Veteran submits VHA debt FSR request via VA.gov portal
2. Submit FSR JSON payload to some endpoint to convert into PDF version
    1. DMC is against picking up workload to support both VBA and VHA debt forms
    2. We would like to extract PDF conversion away from VA.gov portal
3. Take binary of converted PDF and upload to VHA SharePoint
4. VHA contacts are able to fulfill FSR requests using submitted PDF 5655 forms

Option 2 (Dump JSON to SharePoint)
In the case of no endpoint to use to convert FSR to PDF we can provide the JSON
1. Veteran submits VHA debt FSR request via VA.gov portal
2. API converts JSON payload and writes to local JSON file
3. Write JSON file binary to upload to SharePoint
4. Remove local copy of JSON file
5. VHA contacts are able to generate PDF from uploaded JSON on SharePoint

<img width="814" alt="image" src="https://user-images.githubusercontent.com/20892803/166570066-5500e540-812e-4e5b-93de-f9dede28db5c.png">


#### Implementation Details
**Authorization**

Will need to coordinate with VHA SharePoint owners to generate ability for API to generate access tokens via client id and secret. 

Required details:
- scope (VHA SharePoint location)
- refresh token (token used to generate temporary bearer access tokens)

MS Auth Docs: https://docs.microsoft.com/en-us/graph/auth-v2-user

Token Specific Flow: https://docs.microsoft.com/en-us/graph/auth-v2-user#token-response

MS Platform Access Tokens: https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens

**Upload Functionality**

Once we have a generated access token we are able to call the SharePoint REST service to POST our desired file to the source VHA SharePoint folder location. 

Example skeleton HTTP sample for file upload
```
POST https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files/add(url='a.txt',overwrite=true)
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-RequestDigest: "{form_digest_value}"

"Contents of file"
```

This would be achievable using Faraday within our API

**Security and DevOps Approval**

Since SharePoint REST Services are not an existing API used we will need to seek approval for using these services. 

Can document in readiness review [ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/new?assignees=td-usds%2C+troymosher&labels=security-review&template=privacy-and-security-review.md&title=Readiness+Review+%5BTeam-Name%2C+Feature-Name%5D)
