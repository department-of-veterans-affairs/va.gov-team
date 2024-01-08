# DS Logon

This folder contains screenshot of the registration process for DS Logon.  The notes from ID.me on these are below.

---

In advance of our meeting tomorrow, I'm going to share our findings regarding DS Logon. We went through DS Logon in March and audited the flow to make sure our assessment of their LOA 2 and 3 compliance is up to date and codified. We can discuss NIST standards and MyHealtheVet more in-depth tomorrow.

One important point upfront: 

a) Federation: ID.me's Identity Gateway is built to unify the login experience but not to necessarily be the only login option per se. We are happy (and eager) to make more login options available for access to to Vets.gov as long as that login meets the appropriate LOA per NIST guidance and per a GSA FICAM TFS audit to keep everyone honest. 

We are more than happy to directly federate any login that meets LOA 3 whether that be DS Logon, Login.gov, USAA, Verizon, Symantec, etc. In fact, that capability is a core component of our identity gateway. Just like the VA can accept drivers licenses form multiple state DMVs for in-person transactions in VA hospitals, we envision a similar ecosystem for digital logins. LOA 3 is equivalent to federal REAL ID regulations that govern state DMVs - we're just replacing state DMVs as identity issuers with accredited public and private sector entities so citizens may choose the login that is best for them. This approach has been the strategy for the past two administrations - George W. Bush and Barack Obama. It's a bipartisan, technocrat consensus thing. 

b) DS Logon: Steve Smith from our team put together a series of screenshots of the DS Logon registration process (see attached). 

Here are the steps where DS Logon is out of compliance and fails to achieve Level of Assurance 2 or 3 for individuals who don't have a CAC or PIV:

* No e-mail confirmation: NiST 800-63-2 requires that the subject demonstrate ownership of the e-mail address. This means clicking a link sent to the registered e-mail to prove ownership prior to the end of the identity proofing session. While DS Logon has the subject type in the e-mail address twice, they do not take a step to verify that the subject has access/ownership over that e-mail address. This shortcoming alone means that all credentials issued under this process are not even LOA 2. 
* No phone number confirmation: Same as above except DS Logon doesn't even collect the subject's phone number much less verify ownership. This is a basic step, and it's absence means that credentials issued via this process are not even LOA 2. 
* No Multifactor Authentication: DS Logon uses two things that the subject knows: a password and a security image rather than two of three of something the subject knows, something the subject has, or something the subject is. The absence of MFA means that the flow does not conform to LOA 3. 
* Security Questions for Password Recovery: I'm not sure if this is out of line with NIST guidance but it definitely isn't best practice. See Research from Google: [https://research.google.com/pubs/pub43783.html](https://research.google.com/pubs/pub43783.html)
* Identity Verification & Authentication: For the authentication step, the flow relies upon Knowledge Based Authentication (KBA). Without compensating controls, this is an insecure approach. I know that KBA alone will be deprecated in NIST 800-63-3 (to be released later this year) but, even before the guidance comes, responsible govt application owners should not allow this method alone due to the known market risk and vulnerabilities with this approach. Net-net, the recent spate of data breaches and widespread availability of public records means that many of the "secrets" upon which this method depends are no longer secret, therefore the process is no longer secure. 
  * From DHS [view link here](https://www.sbir.gov/sbirsearch/detail/867815):  "As shown by the recent Internal Revenue Service (IRS) data breach, KBV is broken and rapidly becoming less effective as a verification tool as a by-product of the availability of personal information on social media as well as the variety of data breaches of credit bureaus and data brokers. This availability of personal information has led to situations where answers to these “secret” questions can easily be discovered with a minimal level of effort by a determined fraudster who can then use that information to impersonate an individual."
* Availability: Are we going to mention that the service is only up 73% of the time on the call?
* In-Person Proofing: Our audit of the in-person proofing process at three VA facilities found inconsistent process and application of controls. We are happy to provide more information. 
* Telephonic Proofing: this step is more just coaching a user through the steps. There are no other methods available to the end user to verify their identity via phone that are not present in the digital flow.  

Net-net, unless we're talking about CAC & PIV holders, DS Logon does not achieve LOA 2 and is using legacy methods without compensating controls that make the system vulnerable. 
