## LLM and OCR Discovery

- **Objective**: when a CHAMPVA claim is submitted, we want to ensure the documents provided are sufficient to process the claim.  If a document is not present or is potentially missing some required information, inform the user that their documentation might be missing information so they can supplement or replace
	- future: specify what is missing

### Overview of the potential solutions

- LLM/OpenAI:
  - Idea: create a prompt that, when sent alongside a supporting document to the VA's internally-hosted OpenAI API, will have the document analyzed to determine if the document is what we think it is
  - do this for all documents so we can ensure claims submissions have all required documents present and contain the information needed to process the claim
    - In our code: we need an itemized billing statement and proof of payment; also need an EOB if applicant has other health insurance
    - each of these documents has a set of fields we're looking for
    - For a submission, determine if we have all of the required documents and if all of those documents contain the necessary information
      - if not, prompt the applicant that they might need to provide additional documentation - can be more specific here
  - Determine whether this is even possible, then compare performance of available models and methods for using AI to do this work
- OCR:
  - Prior to final submission, extract the text from all supporting documents and determine if all required documents are present and contain the information needed
  - Iterate over supporting documents and check off the requirements:
    - keyword and pattern matching help evaluate document types, but it's not entirely accurate
      - a "confidence" score based on percentage of matching keywords can help get us close
    - "Something that looks like a billing statement?  Got it.  Proof of payment?  Got it.  This submission has OHI, is there an EOB?  No - return a warning"
  - Compare accuracy, performance, and cost between available solutions Tesseract and AWS Textract 

### Initial testing

- LLM:
  - As a first pass, we experimented with the public OpenAI API and fake documents to determine feasibility
    - findings: yes this works, and it's smart; but response times are long
  - Next, we obtained access to a VA tool `pd2image_llm_processor` using the VA's OpenAI instance and tested again
    - both fake data and real-world data
      - 10 requests performed with each file
      - average execution time was calculated
      - fields to extract were compared with actual values and accuracy was scored
    - similar results to public OpenAI API but faster; not as smart; latest models and API versions are lagging behind public instance
      - real data was inconsistent (handwritten, different sized fonts, etc) but NPIs were always extracted - though not correctly some of the time
        - Since we're looking more at identifying document type over extracting fields, this seems fine
        - modifying the prompt used to pay closer attention to details helped in some cases - worth elaborating on in the future
  - the `pdf2image_llm_processor` tool:
    - The VA's OpenAI API instance is lagging behind the public version, and does not offer several API endpoints such as `/responses`, which accepts PDF files for analyzing
    - The only endpoint available with this internal version is `/completions`, which only accepts images
    - `pdf2image_llm_processor` performs the PDF to image conversion and forwards the file(s) and a prompt onto the AI agent, returning the response
    - This has been working great most of the time:
      - the app applies a 5x scale factor on the transformed image which increases the file size, so some files exceed OpenAI's 20MB limit
      - no model selection, though this is a feature the developers are looking into adding
    - the tool looks like it's in a prototype stage, but still plenty usable
  - Findings:
    - 10-20 second response times
      - correlated with file size
    - 100% accurate on extracting certain information such as NPI in some cases; 40% accurate in others
    - Correctly populated response field `document_type_matches` from the prompt, a `boolean` indicating whether a document is what we expect it to be
      - This is neat because the LLM is flexible - uploading a receipt and asking whether the document looks like a "proof of payment" returned `true`
    - `valid` response field also mostly correctly returned:
      - can continue to adjust the prompt to make this more accurate
      - need to experiment with adding confidence scores to LLM response
        - `valid` could be something like `confidence >= 0.8`
- OCR:
  - First pass is to write code to use OCR to make a PDF readable; parse the text and determine feasibility
    - Difficult to test with real data:
      - environment not setup on VA intranet for running Ruby code easily
      - may as well add the code to vets-api and test
    - Integration tests written to test against fake data
      - not part of any live flow, only executed as part of the test suite
  - Proposed next steps: roll out to staging (prod???):
    - situate in the background so users are completely unaffected (errors, latency)
    - log information and publish metrics for viewing in DataDog
      - `form_uuid` lets us reference the real document in Pega; log/count decisions made by OCR tool; manually verify accuracy

### Pros for each solution

- LLM:
  - LLMs are "smart" and can make assumptions or infer information without it being present in a document verbatim
    - e.g., if we ask "does this document provide proof of payment" and upload a receipt, the AI can infer a payment was made; if we upload an EOB instead, it can infer "no, this is an explanation of benefits document and does not provide proof of any payments made"
- OCR:
  - An OCR solution should be much faster and cheaper, and could run in-line with a given submission
    - Ideally this means not adjusting the front-end UX flow to account for long (10-20s) query times to an LLM
  - Tesseract:
    - Library is already being used in vets-api for basic OCR validation; easy to implement
      - simple-forms team is using it to verify if an uploaded form is correct by searching the document text for the form ID
    - Relatively fast and cheap
      - The library works by converting a PDF file to an image and parsing its text out so we can search for keywords - very straightforward
  - Textract: TBD

### Cons for each solution

- LLM:
  - Calls are expensive:
    - 10-20 seconds per API call, with a dollar amount corresponding to the size of the document, prompt, and response
      - Testing with OpenAI's public API with fake data, this was around half a cent per request; ~$10/day to validate all documents submitted for all forms
      - Need to work around the latency from a UX perspective - transparency in response times; opt-in/out
  - Occasional hallucinations:
    - one real document contained several names; in testing, the name returned when querying for "patient name" was different between most calls
    - swapped characters returned in NPIs for small font examples
  - API lagging behind compared to "real world":
    - older versions of a much smaller subset of models were available
    - API endpoints `/completions` is the only one available, and doesn't support processing PDF files
      - `/responses` has yet to be rolled out in Azure
      - solution is to use internal `pdf2image_llm_processor` tool
  - `pdf2image_llm_processor` tool adds complexity:
    - currently hides some configuration options with the backend AI model
    - converts the provided PDF files to images and zooms to 5x, adding latency (but also providing clarity)
- OCR:
  - The type of validation we want to do here is hard to implement:
    - EOBs, pharmacy claims, superbills, etc. all differ in format and substance from one company to another
      - need to code in all the possible ways a document might present some field - "amount you owe" versus "patient payment amount" versus "member responsibility", etc.
    - Likely not as accurate:
      - Testing with real-world data is needed to be sure
      - OCR is not "smart" - we're just looking for words and phrases that might be common on a certain document to determine if we think it's the right one
        - no great way to implement a completely accurate "all fields we think should be present are in fact present" - though confidence ratings get close
  - Tesseract:
    - Same as above - general OCR cons
  - Textract: 
    - AWS usage has a per transaction cost and a cost for the amount of work performed
    - Tesseract performs similar operations (no access - accuracy between the solutions has not been made yet) without the added integration
    - Otherwise TBD

### Best approach - a combined solution

- currently, when a supporting document is uploaded we don't know what the type of document is
  - with other forms, we pass an `attachment_id` indicating `Social Security card` or `Birth Certificate`, etc., but not for CHAMPVA Claims submissions
- Ideally - we should implement the above.  Until then, we could:
  - Use OCR to determine what the document is; then,
  - send it to the LLM to mine fields
  - if we recognize the supporting documents collectively don't have sufficient information, we can kick back a soft warning to the user
- This approach lets us quickly categorize supporting documents then have the "smarter" solution do the final evaluation
  - Flexibility provided by the LLM will be critical given the variance between documents of the same type from different providers; different wording
  - Currently, our best prompts are effectively "this document should be a 'blank', do you agree?", and not "is this document one of the following: 'a','b','c'"
    - fewer high-latency calls when we ask to verify field presence for a specific document versus "what is this" and then "verify these fields are present"
  - Current OCR implementation also comes with a "confidence" score based on how many keyword hits there are - could use this approach only for low confidence OCR checks
    - "I can't tell what this is but I'm most confident it is a blank, LLM go verify"
