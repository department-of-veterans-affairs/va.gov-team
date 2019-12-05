From email by Jon Shrader:

- - - - -

I want to stress these are the bare minimum as we can tell right now - but to play it safe you should also continue to refer to the IAM ICD and try to honor that as close as possible.  I've updated our SoapUI tests and been debugging our code, as far as I can tell thus far things work fine with just this set of VAAFI headers.  The JSON data you'll notice is a major reduced version, those are the only pieces it seems we truly need in the JSON for these initial operations to work.
 
## va_eauth_authorization (aka JSON data)
We don't appear to need the entire JSON model populate, the bare minimum I believe we need for these services are:  SSN, First/Last name, EDIPI, Veteran flag
Example: {"authorizationResponse":{"id":"123456789","idType":"SSN","edi":"1105051936","firstName":"JANE","lastName":"DOE","status":"VETERAN"}}
## va_eauth_csid 
​pass us DSLogon as the value based on our discussions to date
## va_eauth_authenticationmethod
pass us DSLogon as the value based on our discussions to date
****Considering trying vets.gov as the method, we can finalize this detail later for now use DSLogon*****
## va_eauth_firstName
​The first name
## va_eauth_lastName
The la​st name
## va_eauth_issueinstant
The timestamp of the login/call
EXAMPLE: 2015-04-17T14:52:48Z
JAVA FORMAT:  yyyy-MM-dd'T'HH:mm:ss'Z'
## va_eauth_dodedipnid
The E​DIPI
## va_eauth_assurancelevel
The LOA, p​ass us 2 based on discussions to date but ensure the users are LOA2 users
## va_eauth_pid
The​ PID
## va_eauth_pnidtype
Pass SS​N (all caps) as the ID type
## va_eauth_pnid
The SSN, 9 digits w​ithout dashes or any other format
EXAMPLE: 123456789
