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

### Option 3: Render parts of the 

## Decision Outcome

[PENDING DECISION]

## Pros and Cons of the Options

## Implementation Notes

## Validation
