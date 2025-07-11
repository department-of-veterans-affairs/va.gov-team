# 21a Convo Guide – OGC Interview (Field-Specific Follow Up)

### Specific questions from Business Logic document review
1. Collect public facing information preferences. (Aligns with what desires we've seen in user interviews.)
    1. "Long term we want to have accredited individuals select what address to post publicly on VA’s website and what address VA should use for correspondence. We are unsure if we should do that here, later, or both and appreciate any guidance"
2. Ask about the need for day in Employment, Education, and Military sections. This will determine exact date implementation.
3. Could the professional affiliations section omit list loop [questions related to practicing law](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=1509-182146&t=c9eEe0Bjg405G3Fb-11) if the applicant is applying as a claims agent?
4. Questions that may not be relevant for claims agents that could be omitted if the applicant specifies they are applying as a claims agent:
    1. [Professional reprimands related to law practice](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=1026-24052&t=c9eEe0Bjg405G3Fb-11)
    2. [Charges or complaints about authorized practice](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=3791-403477&t=c9eEe0Bjg405G3Fb-11)
    3. [Conduct and practicing law](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation--CA---Attorneys-?node-id=3787-348432&t=c9eEe0Bjg405G3Fb-11)
5. Share confirmation page with OGC (Nate) and confirm: meets requirements, proper communication channel is shown, proper timeline is shown, generally works for content.
  
### Specific questions from development meetings with GCLAWS
The following fields are things that we could send to GCLAWS (their 21a API has a field to accept this information). We currently are not capturing this information in Staging as it is not on the PDF form, nor is it on the Business Logic documents.

**Chapter 1 (Personal Information)**

1. Birthplace — currently we’re only asking for city and state. Is there value in capturing address and zip code too?
2. Home and Other addresses — currently we only allow room for 2 address lines (excluding city/state/zip code). Is there value in capturing 3 address lines?

**Chapter 2 (Military Service History)**

1. Is there value in capturing an explanation for each military service, or is the branch, service start/end date, and character of discharge enough? 

**Chapter 3 (Employment Information)**

1. Supervisor — currently we’re only asking for the name. Is there value in capturing email too?
3. Employer addresses — currently we only allow room for 2 address lines (excluding city/state/zip code). Is there value in capturing 3 address lines?

**Chapter 4 (Education History)**

1. Education addresses — currently we only allow room for 2 address lines (excluding city/state/zip code). Is there value in capturing 3 address lines?

**Chapter 5 (Professional Affiliations)**

1. Is there value in capturing an explanation for any jurisdictions listed?
2. Is there value in allowing the user to upload documents for any jurisdictions listed?
3. Is there value in capturing an explanation for any agencies or courts listed?
4. Is there value in allowing the user to upload documents for any agencies or courts listed?

**Chapter 7 (Character References)**

1. Is there value in capturing the phone extension and type ?





