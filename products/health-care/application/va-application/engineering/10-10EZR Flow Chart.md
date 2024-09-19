flowchart TD
    A(Authenticated Only) --> B(User identifier <br/>fetched during login)
    B --> C(Check for enrollment status <br/>submission through enrollment <br/>eligibility API by <br/>passing user identifiers)
    F --> G(Submit to enrollment system API <br/>asynchronously via a background job)
    G --> H(Background job fails with no retries left)
    H --> I(Send email to HEC administrators that includes <br/>the Veteran's contact info (name, phone number(s), email), <br/>so they can follow up with them)
