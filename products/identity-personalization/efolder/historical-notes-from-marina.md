# Historical Notes From Marina

10/14/16 historical notes from Marina:

- Providing Veterans direct access to download their own VBMS eFolder contents can significantly reduce FOIA requests, because the Veterans could access their own file at any time.
- This is a highly-requested feature by VSOs, who have threatened to flood VA with FOIA requests if we do not provide Veterans with this access.

- The appeals team already built eFolder Express, which downloads a Veteran's eFolder in one click. This same code base should be evaluated first, before vets.gov pursues building anything new. eFolder Express would need [at least] two modifications to work on vets.gov:

  1. Integration with vets.gov account instead of internal VA SSO
  2. Programmatic exclusion of certain doc types that cannot be shown to the Veteran.

    - The exact list of these documents and details on how vets.gov could filter them out should be discussed with Brad Houston.
    - Concerns include files related to domestic abuse protection orders that may have the address of the spouse who needs protection, and older military deployment orders that often have multiple Veterans and their full social security numbers . 
    - Further, there are business rules about delaying access to C&P exam results until a claim has been decided. We do not want a Veteran to instantly get their C&P exam results while walking out of their exam and potentially threaten the examiner if they don't agree with the results. (This is unfortuantely a real and regular occurrence.)
    - Tom Murphy mentioned there is automatic redaction software used by Canada he has heard good things about.
    
- In addition to Veterans accessing their own files, VBA is very interested in letting Veterans' private attorneys access their eFolders and claim statuses via vets.gov. This will require the eFolder functionality AND delegated vets.gov accounts. Currently, the private attorneys must get access to VBMS, which involves getting a PIV card, TMS training, etc. This is a significant burden VBA would like to remove. Point of contacts on this are Brad Houstin and Ray Tellez. They know this feature is coming eventually and would like to discuss when vets.gov is ready.
