# Decision: Travel Claim Decision Letter Word Doc Alternative

Status: Proposed

## Context

Currently, decision letters are downloadable only in Microsoft Word (docx) format. If there's a way to convert to a more portable format, or to somehow render salient parts of the letter on the page, it would help users who don't have Microsoft Word view their letters.
Decision letters are the source of truth for decided claims, and so it's important the information be available to all.

## Decision Drivers
* Ease of implementation
* Effectiveness of approach
* Security of approach

## Considered Options

### Option 1: Convert the `.docx` file to a `.pdf`.
* Considered using the ruby gem `libreconvert`, but it requires the LibreOffice suite be installed on the server, which is a pretty hard no-go.

### Option 2: Render part or all of the `.docx` on the page
* Considered using the ruby gem `docx`. On initial test, seems to work well to grab the information out of the file. Need to test with binary string, but the gem docs say it supports buffers.
* Considered using the ruby gem `nokogiri`. This is what the `docx` gem is based upon. Untested, but relying on this could gain us more confidence in security.


## Decision Outcome

Based on the proof of concept (see image below), it is far less effort to render the rejection reasons on the claim details page than it is to convert the entire document to a more portable format. 

![image](https://github.com/user-attachments/assets/0672c357-ece5-4665-82eb-d09df2fadac9)

### Pros
* A lot of value for a small(er) amount of work
* Easier to implement
* No infrastructure changes (some PDF conversion techniques involve installing something on the server)

### Cons
* Not the complete decision letter
* Download is still a `.docx` format
* Robust parsing of the rejection reasons may be an issue due to lack of sane formatting of the document

## Implementation Notes
See the PoC's [backend](https://github.com/department-of-veterans-affairs/vets-api/blob/eeb15b3b6e2a74c9a7877bd416ecd46286f0ed2e/modules/travel_pay/app/controllers/travel_pay/v0/claims_controller.rb#L27-L37) and [frontend](https://github.com/department-of-veterans-affairs/vets-website/blob/18aea357fa372f527c3b61c504ac05dacde8ef92/src/applications/travel-pay/components/ClaimDetailsContent.jsx#L107-L114) changes. In order to provide this functionality:

1. It is necessary to make a request to get the rejection letter binary on load of the page (performance implications)
2. The document is not formatted in a way that is conducive to parsing; the only option is looping through the whole document searching for specific text (robustness implications)
