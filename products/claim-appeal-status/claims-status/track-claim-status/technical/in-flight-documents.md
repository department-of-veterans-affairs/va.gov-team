# In flight document storage considerations

## Approaches

1. Directly transmit files uploaded by users to EVSS.
2. Store files in S3.

## Analysis

### Pros of direct transmission
- Potentially very simple
- No possible PII concerns

### Cons of direct transmission
- May require streaming to keep RAM requirements low
- May require changing Nginx upload limits to allow large POSTs to api
- No way to show users files after upload

### Pros of S3 storage
- Allows users to see the files they have uploaded
- We should be able to let users upload to S3 directly without going through our app servers cf https://devcenter.heroku.com/articles/direct-to-s3-image-uploads-in-rails
- Allows queueing of uploads if EVSS is down

### Cons of S3 storage
- Will require more work and configuration
- Possible PII implications (but those can be possibly worked around by setting ACLs on S3 files?)
- Size of files stored could be large

    - Back of evelope calcuation:

        S3 costs $0.03/GB at non-discount rate

        Assume 100 veterans upload 10 10MB documents per day = 10GB/per day

        Storage would be $110/mo after a year of uploading (before volume discounts, etc.)

## Decision
Direct transmission.

Design agreed that at this time we don't need to provide users the ability to see their previously uploaded documents, and we were worried that the PII might require us to reevaluate our ATO.
