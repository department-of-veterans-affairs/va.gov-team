## Technical Discovery Session 1 - Pre-Need
June 8, 2017

### Attendees

#### EOAS

1. Abigail Wolf, Pre-Need Contract/Project Manager
2. Michael Martin - pre-need tech support, senior developer, enterprise architect on EOAS
3. Hootan - EOAS developer for pre-need application, working on vets.gov web service

Small team, just the three of them
History - EOAS in production, code base including web service inherited not deployed to production, took over last fall, haven't done deep dive on API

#### Vets.gov

1. Kam Karshenas - Tech Lead for Pre-Need
2. Leanna Miller Sharkey - Product Lead for Pre-Need


### First pass for planning technical discovery for pre-need

1. What is uptime of EOAS for last six months? 
- Always up, some maintenance at server level
- No specific downtime 

- Do you put up 503 when it's down? EOAS team will confirm, if it's totally down it'll just give a connection timeout
  - If service is down and server is up, they will figure out response 

- Load/daily users? Applications coming in 200 via email, Leanna will get Kam analytics 

2. Format of fields in BOSS vs format of fields in EOAS - can do offline
- ACTION: EOAS will provide us with the file 

3. Validations field by field - can do offline

4. How often do they do bulk pulls for this form?
- Per user

5. Tentatively we have the following protocol+host for production (not yet live): https://eoas.cem.va.gov (will the API be some variety of the same? At least please ensure it is SSL, even if it is behind NSOC vpn)
- Bringing in QITC, in progress, the above URL is to the application 

6. Request / Response examples you provided are tremendously helpful, but I wonder if you have more formal API specs we could look at as well. Something like a PDF document with examples? If not, the combination of WSDL and request response examples should suffice for the most part, but we are still in the dark in terms of exceptions you might return. Perhaps we will encounter these during testing, but if someone could elaborate on how the error object might look it would be helpful. Ideally there is a Code (distinct from HTTP status) associated with each error class.
- ACTION: EOAS investigate exception handling and returns, may require additional effort to get it into a format we can use. When? Early next week?
- No documentation from previous contractors
- ACTION: send WSDL and request response examples 

7. If you could additionally provide some examples of possible Exceptions / Errors returned that would be helpful.
- See above

8. There is ambiguity in terms of what you would require for the “signature and certification” portion of the form. We understand this is a business decision, but would like for someone to elaborate on this further.

9. What are some examples of “additional documents” that the claimant may wish to provide. How are these applicable in making a determination on eligibility.

10. We plan on building our integration in a synchronous manner, not as part of a batched request. This will require having a response ideally in less than 30 seconds. Can we establish an SLA?
- Testing is showing 1-2 seconds, we don't know how it will react in production 
- Any SLA needs to include QITC
- We do not expect to need an SLA at this time

12. When do you expect to go live? 
- Build 1 is going through defect analysis, then can schedule next builds 
- Any upgrades would need to be in 3.5, that would be August 
- Pre-need functionality is in production currently, this team is doing major upgrade
- Web service could be in production but it might not be suitable for our needs 
- ACTION for LEANNA: Talk to biz office about sending form encrypted 

13. How many active daily users currently? How does this fluctuate day to day, hour to hour?
- LEANNA

14. How do we test this? Do you have test users?
- SQA testers and UAT testers, they are the users of the application in production 
- UAT testers also test in pre-prod 

15. Are there examples of non 200 responses we might expect due to 500 error or 503 errors? Will these have a SOAP payload or should we expect no response body?
- Look at header or timeout, how many seconds before timing out? Server configurable, different in each environment, we don't  QITC would know (LEANNA to check)
- If we do get a connection and it's moving slowly, the response timeout would be configured on the client
- helper methods as part of web service, GET requests, helpful for building the form in dynamic manner and map to attributes, pass the data via POST request as a code? Useful when you want to avoid sending over wrong IDs, like invalid cemetery ID, lists for the user to select from
- Rather than making changes the GET requests - can we hard code them based on values that you have? yes. States we can hard code, but cemeteries for example would change over time. 
- Add attachment method, used for testing, post request 
- Receive eligibility, post request
- EOAS team sending over xsd and WSDL. 
- XSD can be used as validation, they can provide sample request and response
- Kam wants to cache on a daily level as opposed to per user session - frequency they might change? find out from Business (NCA office question), Vicki can tell us frequence of cacheing 

16. Do we need credentials to EOAS to do testing? 
- depends on who is doing testing
- their team would be doing validation
- get access via product support in dev

17. Attachements - what is the mechanism?
- MTOM annotation to attach PDF files, only PDF is accepted
- No descriptive return if different file extension

18. Any other users on the API? 
- Just a testing platform 

19. We can hit the endpoint and pull WDSL on VA network, we have concern about attachments
- Attachments, PDF 15 MB, maybe TIF in the future 
- Depending on signature, we might need to provide attachments
- Abby teed off conversation with prod users
- ACTION LEANNA: Loop in legal now


For US
1. Do you plan to store them in Vets.gov for 30 days? Where? 
2. What kind of security will you have in place to protect the user's data? 
3. How will you encrypt data at rest (as that is what will evedently be happening) or do you plan to use SFTP to store it on prem VA network where EOAS can then bulk pull from there?
