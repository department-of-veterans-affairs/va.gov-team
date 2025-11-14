# COE API Calls

| API endpoint | Where in lgy is it called? | What does it do? | More info about how it gets called | Mocked payload |
|--------------|---------------------------|------------------|-------------------------------------|----------------|
| /v0/coe/status | vets-website/src/applications/lgy/coe/shared/actions/index.js | The alerts appearing at the top of the introduction page use this request to display the COE status, request date, and reference number. | generateCoe is a shared utility that makes the request. App.js imports it, saving the function as getCoe. It calls getCoe. That dispatches events, including GENERATE_AUTOMATIC_COE_SUCCEEDED which are handled the reducer (vets-website/src/applications/lgy/coe/shared/reducers/index.js). The success event causes the reducer to add the object certificateOfEligibility.coe to state which contains the payload from the server. IntroductionPage.jsx maps state to props to access it. It does so to pass the reference number, application start date, and status to COEIntroPageBox which handles the various alerts that can appear at the top of the Introduction page | vets-website/src/applications/lgy/coe/form/tests/fixtures/mocks/status.json |
| /v0/coe/download_coe | vets-website/src/applications/lgy/coe/shared/components/ReviewAndDownload.jsx | Shared component that allows the user to download their COE from the "available" and "eligible" alerts on the intro page. | Available.jsx, Eligible.jsx | |
| /v0/coe/documents | vets-website/src/applications/lgy/coe/status/components/DocumentList/api.js | Displays a list of documents in the status app for these states: "available", "denied", "pending" | getCoeDocuments is defined in vets-website/src/applications/lgy/coe/status/components/DocumentList/api.js. DocumentList.jsx calls it and produces the variable "documents" which is passed to the shared component "List" and then "ListItem". | vets-website/src/applications/lgy/coe/form/tests/fixtures/mocks/documents.json |
| /v0/coe/document_download/{id} | vets-website/src/applications/lgy/coe/status/components/DocumentList/List.jsx | Component that lists documents and provides links to them on the status app. The links use this endpoint for a URL. | | |
| /v0/coe/submit_coe_claim | vets-website/src/applications/lgy/coe/form/config/form.js | The config/form.js file uses this as the submit URL | config/form.js | |
| /v0/coe/document_upload | vets-website/src/applications/lgy/coe/status/components/DocumentUploader/submit.js | Endpoint is used by DocumentUploader.jsx to submit files on the status app. | | |

## Additional Resources

Figma where you can see what parts of the UI are affected: https://www.figma.com/design/oOiAvS2BxYgZJRVNhuY30v/COE-Old-app-introduction-page?node-id=0-1&p=f&t=iaE1xP7rUm6iAIfq-0
