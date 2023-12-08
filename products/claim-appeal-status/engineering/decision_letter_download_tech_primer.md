# Decision Letter Download Tech Primer

## AKA
- DDL - Download Decision Letter
- DLD - Decision Letter Download
- Claim Letter 
- Claim Decision

*Note: Contacts at the VBA have asked that we not refer to these as "letters". However, much of the
existing documentation and research we used to implement this feature refers to these documents as
letters. VBA prefers we call them "claim decisions", though that term is overloaded as well.*

## Feature Purpose
This feature allows Veterans to download PDF versions of letters informing the user of a claims
decision.

## Feature Use Cases
1. A Veteran would like to see if they have any decision letters available.
2. A Veteran would like instant confirmation of a decision made on a claim.
*This can be accomplished by viewing a decided claim in the [Claim Status Tool]() and clicking on
the link - if available - which navigates to a list of decision letters.*

## Notes
- The claim letter service itself uses fake claim letter data from a hardcoded file. It has a
condition in the service where, [if the environment is not staging or prod, it serves the data in
this file](https://github.com/department-of-veterans-affairs/vets-api/blob/930160002ed0b05a8cc10e538a3abd7122ed4670/lib/claim_letters/claim_letter_downloader.rb#L17) 
instead of live data.
- Currently (8/22/2023), the only [two document types allowed](https://github.com/department-of-veterans-affairs/vets-api/blob/930160002ed0b05a8cc10e538a3abd7122ed4670/lib/claim_letters/claim_letter_downloader.rb#L50) 
are:
  - 27: Board of Appeals Decision Letter
  - 184: Notification Letter

## Upstream Services
The VA.gov Decision Letter Download feature receives its data from the 
[Veteran Benefits Management System (VBMS)]() 
via the 
[connect_vbms Ruby gem](https://github.com/department-of-veterans-affairs/connect_vbms/blob/master/README.md). 
It also uses 
[Benefits Gateway Service (BGS)]() for edge case handling if the logged-in user does not have a file
number.

## Endpoints
### VA.gov Feature Endpoints
#### Get all claim letters
[Endpoint Documentation](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/claim_letters/getClaimLetters)

#### Get individual claim letter
[Endpoint Documentation](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/claim_letters/downloadPDFClaimLetter)

### Upstream Endpoints
#### VBMS
We use the 
[connect_vbms Ruby gem](https://github.com/department-of-veterans-affairs/connect_vbms)
to make requests to VBMS.

#### BGS
We use the 
[bgs-ext Ruby gem](https://github.com/department-of-veterans-affairs/bgs-ext)
to make requests to BGS.

## Code Location
### Frontend
Repo: [vets-website](https://github.com/department-of-veterans-affairs/vets-website)

Important locations:
- [Claim Letters container](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/claims-status/containers/YourClaimLetters)
- [Claim Letters List component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/components/ClaimLetterList.jsx)
- [Claim Letters List Item component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/components/ClaimLetterListItem.jsx)
- [Claim Letters `index` action](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js#L65)

*Note: There is no `show` action for the claim letters in the actions file. The download of an
individual letter is handled by a simple `<va-link />` with a dynamic URL based on environment and
document id that is part of the repsonse from the "get all letters" endpoint.*

### Backend
Repo: [vets-api](https://github.com/department-of-veterans-affairs/vets-api)

Important locations:
- [Claim Letters controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/claim_letters_controller.rb)
- [Claim Letters controller tests](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/controllers/v0/claim_letters_controller_spec.rb)
- [Claim Letters service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/claim_letters/claim_letter_downloader.rb)
- [Claim Letters service tests](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/lib/claim_status_tool/claim_letter_downloader_spec.rb)
