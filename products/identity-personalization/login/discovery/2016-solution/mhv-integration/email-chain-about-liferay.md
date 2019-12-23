## Context

Below is a copy/pasted email chain that went back and forth between Greg Gershman, Tanel Suurhans from ID.me, and Ken Graham from the MHV technical team in Sepbember 2016 about trying to set up Liferay to federate MHV logins.

Putting this in a code block at least kept the spacing, making it somewhat readable, but it also lost some formatting. Sorry about that!  If you want this email chain forwarded to you, just ping @ayaleloehr.

This document is almost certainly not accurate today and is provided solely for historical context. 

## Content
```
Greg,
For your consideration embedded in your email is a response to your question.
 
Attached are documents that identify the federated credential capabilities that already exist.
 
Next week both Lanny & Matt (CC’d above) will be in Washington DC / Sliver Springs, MD for some MHV-related meetings. Lanny is the lead developer for MHV’s identity management and Single Sign On (SSO) among other things. Matt is his boss (i.e., he’s very technical on the operations of MHV). Perhaps it may make sense to arrange a face-to-face meeting with them for a few hours.
 
Thanks!  John B.
 
P.S., I’ve CC’d Theresa and Carnetta to make certain they remain aware of the applicable requirements, etc.
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Wednesday, September 14, 2016 8:13 PM
To: Brekke, John L.
Cc: Tanel Suurhans; Steve Smith; Yale-Loehr, Alex; Seeger, Tony; Graham, Kenneth J. (BYLIGHT)
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Thanks John. I read through this document, and it is indeed the flip side of what we're trying to accomplish here.
 
In this document, MHV is the Relying Party, AccessVA is the Identity Broker, and Connect.gov or Norton Symantec are the Identity Provider (or Credential Service Providers - CSP). This document outlines a way for users to log in to MHV using credentials stored at Connect.gov or Norton Symantec.
Sorry, but it’s not clear to me how you’re defining “Relying Party”. Identity and Access Management (IAM) services is the authoritative source for Veteran identity management within the VA not MHV. Veteran traits (e.g., SSN) reside in IAM. As Ken mentioned during our meeting MHV may cache those traits, but MHV is not the source.
 
My assumption is CSPs (Id.me) stores Veteran identity traits too. But MHV is required to use IAM.
 
The above mentioned document identifies how MHV has been integrated with IAM to accept other federated credentials (e.g., Norton Symantec). Attached is a *.pdf document, which is a final version of the document I sent yesterday.
 
My assumption is the vets.gov team can utilized this document as well as the other MHV business requirement documents I’ve attached (i.e., open the *.zip file) to build a credential wrapper that resides in the vets.gov cloud. My opinion: Many of the build blocks already exist. For example the attached *.pdf articulates how new federated credential users (e.g., Norton Symantec) will be established / integrated with MHV.
 
What we're looking to accomplish is allow users to log in to Vets.gov using their MHV credentials. In our scenario, Vets.gov is the Relying Party, ID.me is the Identity Broker, and MHV is the Identity Provider (or CSP).
Yep! The attached *.pdf articulates how new federated credential users (e.g., Norton Symantec) are established / integrated with MHV. Understanding those data flows should help to engineer a solution for Veterans to log in to Vets.gov using their MHV credential.
 
One possible scenario is to set up MHV to allow users to login to the site using their ID.me credentials, but this won't solve the overall problem we're seeking to address, which is to allow users that already have their MHV credentials to use them to log in to Vets.gov so they dont have to create a new set of credentials with ID.me.
 
Greg
 
On Wed, Sep 14, 2016 at 3:48 PM, Brekke, John L. <John.Brekke@va.gov> wrote:
Attached is the federated credential capability already built into MHV.
 
From: Brekke, John L. 
Sent: Wednesday, September 14, 2016 1:38 PM
To: 'Greg Gershman'
Cc: Tanel Suurhans; Steve Smith; Yale-Loehr, Alex; Seeger, Tony; Graham, Kenneth J. (BYLIGHT)
Subject: RE: [EXTERNAL] Re: MHV / ID.me integration recap
 
Greg,
The attached summarize some of the things MHV does in regards to IAM for authentication.
 
I’m thinking there is a newer version.  Thanks!  John B.
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Tuesday, September 13, 2016 12:16 PM
To: Brekke, John L.
Cc: Tanel Suurhans; Steve Smith; Yale-Loehr, Alex; Seeger, Tony; Graham, Kenneth J. (BYLIGHT)

Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Thanks John. Sent for 3PM EDT tomorrow, let me know if that time does not work for you or anyone on your team.
 
I've included a few folks from the VA Digital Services team as well.
 
Thanks!
 
Greg
 
On Tue, Sep 13, 2016 at 1:51 PM, Brekke, John L. <John.Brekke@va.gov> wrote:
Greg,
Please feel free to set up a meeting late in the day either tomorrow or Thursday. Thanks!
 
John B.
From: Seeger, Tony 
Sent: Tuesday, September 13, 2016 11:02 AM
To: Greg Gershman; Graham, Kenneth J. (BYLIGHT); Brekke, John L.
Cc: Tanel Suurhans; Steve Smith; Yale-Loehr, Alex

Subject: RE: [EXTERNAL] Re: MHV / ID.me integration recap
 
Greg,
I am including John Brekke on this thread as the need for resources on this effort is increasing.
John, Greg would like to have a meeting to discuss other approaches to solving this problem.
Thanks
Tony
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Tuesday, September 13, 2016 9:49 AM
To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Also, to make sure I'm understanding the problem, it sounds like:
 
MHV had to implement a web proxy, aka the server that acts as the application server is not directly responding to the request from the end user's browser, but instead is proxied through an Apache server which transforms the URL requested.
 
AND
 
MHV had to implement a custom login page to use Liferay
 
So when the SAML authentication request comes in from ID.me, Liferay decodes the request and attempts to redirect the user to the sign in page, which is creating an infinite redirect loop?
 
I want to make sure I understand what is happening and which issues are contributing to that issue.
 
Greg
 
On Tue, Sep 13, 2016 at 11:39 AM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
Unfortunately, I don’t have much more information.  I’ve reached out to xtivia to understand why this redirection occurs.
The out-of-the-box SAML plugin and remaining flows and dependencies seem to conflict with using a web proxy configuration and custom login.
(Which was required during the implementation of MHV)
 
This is probably the correct approach but the level of effort is much higher than anyone anticipated given the customized site we have in MHV while applying the plugin.
 
We probably should continue to investigate the other option you suggested and/or have a session to see what else can be done.
Although, the outcome will not be as favorable as it would using SAML ...
 
All of these options need to be done with MHV business and PD guidance.
 
-Ken
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Tuesday, September 13, 2016 11:23 AM

To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Ken: I see the issue. Can you provide a bit more detail? I need to understand if this is a blocker for us moving forward, or if we have a path to resolve this issue.
 
Greg
 
On Mon, Sep 12, 2016 at 4:13 PM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
Yes.
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Monday, September 12, 2016 4:07 PM

To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Ken,
 
Can I see this behavior if I test SAML auth now?
 
Greg
 
 
On Mon, Sep 12, 2016 at 3:56 PM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
My patch worked and got us past the path match issue.  (Although it is a very temporary patch)
 
The problem now is that liferay’s flow for SAML/SSO is apparently not compatible with using a proxy path.
It sends the browser into an infinite redirection loop.
 
https://mhv-syst.myhealth.va.gov/c/portal/login?redirect=/mhv-portal-web/c/portal/saml/sso
 
My guess is that this is supposed to push a user to the “login” screen and then after a successful login redirects back to the SSO so it can display a nice message about what information is being shared and if you want to proceed.  Then it would have a continue/agree button that would redirect back to vets.gov.
 
-Ken
 
From: Graham, Kenneth J. (BYLIGHT) 
Sent: Monday, September 12, 2016 2:52 PM
To: 'Tanel Suurhans'; Greg Gershman
Cc: Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: RE: [EXTERNAL] Re: MHV / ID.me integration recap
 
Ok.
 
In the meantime we are opening a defect with liferay.  After reviewing the issue with the xtivia folks they determined it’s a defect.
The SAML plugin doesn’t recognize the proxy path that we are required to use and thus it can never match the message endpoint and the receiver endpoint.
 
I will see if I can deploy a patch to at least allow us to bypass that rule in the meantime.
 
-Ken
 
From: Tanel Suurhans [mailto:tanel@id.me] 
Sent: Monday, September 12, 2016 2:45 PM

To: Graham, Kenneth J. (BYLIGHT); Greg Gershman
Cc: Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: RE: [EXTERNAL] Re: MHV / ID.me integration recap
 
The problem with that is we configure endpoints with a specific URL, which is then used for both as the destination for the SAML payload as well as the param in the payload itself. There sadly is no way for me to change one without affecting the other.
 
Tanel Suurhans
Chief Technology Officer @ ID.me
571-386-6667
tanel@id.me
 
On 12. september 2016 at 14:38.25, Graham, Kenneth J. (BYLIGHT) (kenneth.graham2@va.gov) wrote:

Tanel can you set this in your saml request:  Destination=https://mhv-syst.myhealth.va.gov/c/portal/saml/sso
Remove the “mhv-portal-web".
 
But in the URL we need to use “https://mhv-syst.myhealth.va.gov/mhv-portal-web/c/portal/saml/sso”.  Still.
 
We may have to revert it back but ... worth a test.
 
From: Graham, Kenneth J. (BYLIGHT) 
Sent: Monday, September 12, 2016 1:00 PM
To: 'Greg Gershman'
Cc: Tanel Suurhans; Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: RE: [EXTERNAL] Re: MHV / ID.me integration recap
 
We got past the SSL issue but ran into a conflict with the proxy path in liferay and the saml requirement.
 
11:59:44,825 ERROR [ajp-bio-8009-exec-16][BaseSAMLMessageDecoder:113] SAML message intended destination endpoint 'https://mhv-syst.myhealth.va.gov/mhv-portal-web/c/portal/saml/sso' did not match the recipient endpoint 'https://mhvr-syst.myhealth.va.gov/c/portal/saml/sso'
 
I’m working with Xtivia to figure out what we can do... we might have to resort to patching their plugin.
In the end it should not require the proxy path in the request url.  (mhv-portal-web should not be in the rule)
 
-Ken
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Monday, September 12, 2016 11:49 AM
To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Hi Ken, following up to see how things are progressing. Thanks!
 
Greg
 
On Fri, Sep 9, 2016 at 12:09 PM, Greg Gershman <greg@adhocteam.us> wrote:
Awesome Ken, thanks. I know you're in a bit of unexplored territory but if you have an idea of when you might have something ready for us to test, please let me know. Thanks!
 
Greg

On Sep 9, 2016, at 10:58 AM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:

We’re working on it... we’ve seen this before... but we didn’t need it for our new liferay environment.
 
We’ve also engaged the xtivia folks on this... to make sure we’re setting it up correctly.
In the end, it looks like we’ll have a reverse proxy setup to hit our LR cluster using mod_proxy or similar establishing an SSL connection between Apache and Liferay.
 
I’ll keep you all posted ...
 
-Ken
 
From: Tanel Suurhans [mailto:tanel@id.me] 
Sent: Friday, September 09, 2016 10:50 AM
To: Graham, Kenneth J. (BYLIGHT); Greg Gershman
Cc: Seeger, Tony; Steve Smith; Yale-Loehr, Alex
Subject: RE: [EXTERNAL] Re: MHV / ID.me integration recap
 
Yeah the messages would most likely not work with “//“ as the protocol as the endpoints still do not match. You guys essentially nailed the issue, if SSL Required is turned on, the Liferay plugin seems to check if actual SSL transport was used. Because SSL is terminated up the stack, it fails that check. Disabling enforced SSL means we would have to start making requests over plain HTTP for the endpoints to match and that check to pass, which is obviously not desirable either.
 
Tanel Suurhans
Chief Technology Officer @ ID.me
571-386-6667
tanel@id.me
 
On 9. september 2016 at 9:45.55, Graham, Kenneth J. (BYLIGHT) (kenneth.graham2@va.gov) wrote:

I’m working with our master cloud support folks.  We think we can punch a hole through and terminate ssl for these calls:
 
/mhv-portal-web/c/portal/saml/*
 
But this is not something we’ve needed until now so not sure how hard it will be to setup or any side effects.
 
-Ken
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Friday, September 09, 2016 9:41 AM
To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Yale-Loehr, Alex; Steve Smith
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
I see. So if we want to leave SSL Required on, we need to push the SSL termination down the stack; we can't have it terminate at the Apache level. Can you clarify what level is Liferay (Apache, Varnish, or Tomcat)?
 
Tanel: any thoughts on how to handle this? I'm not sure if SAML would work with "//" as the protocol (I doubt it).
 
Greg
 
On Fri, Sep 9, 2016 at 9:33 AM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
It won’t work... we have strict re-write rules that requires SSL.
 
If you try to send the url http://mhv-syst.myhealth.va.gov/mhv-portal-web/c/portal/saml/sso?SAMLResponse=fZJfS8MwFMW%2FSsl7%2F9ltrGEtTIc4mFq26YMvkrZ3a6BJam5a3bc3bVGn4CAvuTcn5%2F5OskAm6oYuW1PJLby1gMb5ELVEOjQS0mpJFUOOVDIBSE1Bd8v7Db3yAtpoZVShanImuaxgiKANV5I461VCXmF2gDicR8GMzdxJfCjdeFqGbh5PwkkUTadBFBLnGTRaSULsDVaH2MJaomHS2FIQztwgtmsfRjSc0%2Bn8hTgri8ElM4OqMqZB6vui6lw8ofHEqQJWm8rrmHdU3dBolDasdt8h9wt%2F3Pg9jo%2BoiHOrdAFDRgk5sBqhHyOzMLyD70qmVcdL0A%2BWOiHrlSfAQmbEWX5B3yiJrQC9A93xAp62m5%2FpWMM9XgqoWY5eocTo%2Fp90cBuyv%2Bay5PJ4OfZ8PIT0br%2FP3OxxtyfpojegQ5o6%2Feu%2B8M%2B7i%2FGT9GAWSNW8OPWRCGYu2%2FYVXrqH4Sht%2BmdEA9IQPx0Nfn%2B89BM%3D&RelayState=9def1e474676455ca30d0c191583f77d&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=mbSd2%2BqwbUYWuRtN422Jm%2F5JivaKaGwBmyDuQ5zNMLPqMKF%2BNf4vps%2BG0zae8RCKi12BE%2FwmYRkGZcTM8PxoWYOvk155mTf32U%2FCraFgJzH6DnpOK9YvR4%2F5kOsjW%2Bf%2FllwrCj%2BUvzeLUvh4TxMc8UaK8asVXfBEnDdsqDirSEuSg7Rr1HeZcfBhEZJx8qSfqJpkJTAphe%2FF%2Bu8AxP3pVR4ajoo0uSCB8dWX7GtveCZydZ1PVjOjRdXORbRMVhVvcPVmBVOH1wnwn8MEufC3DUcrpA5dY57bS63Ky%2FJ0EOxUMsA78R1kq1fa9rwN9Y5a0EdRs0qA7AudEOa8aBn1mA%3D%3D
 
You will get a forced 302 to https.
 
-Ken
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Friday, September 09, 2016 9:31 AM

To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Yale-Loehr, Alex; Steve Smith
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Tanel can you update the metadata to use a non-ssl endpoint? I think long term we'd want to use the SSL endpoint, but for the sake of testing, can we give it a shot?
 
Greg
 
On Fri, Sep 9, 2016 at 9:29 AM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
Got it ...
 
I think we have a catch 22 situation.
 
Our stack is apache (SSL) -> varnish (non-SSL) -> tomcat (non-SSL).
 
So if we enable “SSL Required” then it fails indicating that the data is not secure.  But then if I disable the “SSL Required” then it states that the protocol doesn’t match (Is https but should be http).
 
In weblogic we could spoof the SSL connection via the WL_proxy apache extension.  But not sure what we can do for this.
Maybe we need a bypass from apache to tomcat with a SSL pass-thru if its possible.  I’ll have to consult xtivia and our mastercloud support.
Below is the error with the SSL Required disabled:
 
09:19:38,909 INFO  [http-nio-7361-exec-13][BaseSAMLSimpleSignatureSecurityPolicyRule:125] Validation of request simple signature succeeded
09:19:38,909 INFO  [http-nio-7361-exec-13][BaseSAMLSimpleSignatureSecurityPolicyRule:134] Authentication via request simple signature succeeded for context issuer entity ID api.idmelabs.com
09:19:38,910 ERROR [http-nio-7361-exec-13][BaseSAMLMessageDecoder:113] SAML message intended destination endpoint 'https://mhv-syst.myhealth.va.gov/mhv-portal-web/c/portal/saml/sso' did not match the recipient endpoint 'http://mhv-syst.myhealth.va.gov/c/portal/saml/sso'
09:19:38,910 ERROR [http-nio-7361-exec-13][BaseSamlStrutsAction:45] com.liferay.saml.SamlException: org.opensaml.xml.security.SecurityException: SAML message intended destination endpoint did not match recipient endpoint
com.liferay.saml.SamlException: org.opensaml.xml.security.SecurityException: SAML message intended destination endpoint did not match recipient endpoint
   
Below is the error with the SSL Required enabled:
 
09:25:34,905 INFO  [Timer-0][AbstractReloadingMetadataProvider:145] Next refresh cycle for metadata provider '/opt/portal/liferay1/data/saml/idme-metadata.xml' will occur on '2016-09-09T13:30:34.904Z' ('2016-09-09T13:30:34.904Z' local time)
09:28:33,111 INFO  [http-nio-7361-exec-8][BaseSAMLSimpleSignatureSecurityPolicyRule:125] Validation of request simple signature succeeded
09:28:33,112 INFO  [http-nio-7361-exec-8][BaseSAMLSimpleSignatureSecurityPolicyRule:134] Authentication via request simple signature succeeded for context issuer entity ID api.idmelabs.com
09:28:33,112 ERROR [http-nio-7361-exec-8][HTTPRule:82] Request was required to be secured but was not
09:28:33,112 ERROR [http-nio-7361-exec-8][BaseSamlStrutsAction:45] com.liferay.saml.SamlException: org.opensaml.ws.security.SecurityPolicyException: Request was required to be secured but was not
com.liferay.saml.SamlException: org.opensaml.ws.security.SecurityPolicyException: Request was required to be secured but was not
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Friday, September 09, 2016 9:20 AM

To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Yale-Loehr, Alex; Steve Smith
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
I just ran another test. Here's the URL that I was redirected to on MHV, I got the same error as last night (Unable to process SAML request):

https://mhv-syst.myhealth.va.gov/mhv-portal-web/c/portal/saml/sso?SAMLResponse=fZJJa8MwEIX%2FitHdW7OLOJA2lAa6mCTtoZciy%2BNYYEmuRnabf1%2FZpis0oItm9PTme9ISmaxqum5sqXbw2gBa711WCmnfSEhjFNUMBVLFJCC1nO7Xd7f0IohobbTVXFfkh%2BS8giGCsUIr4m03CXnJxosonxTFDKbcH8Ns7s8hm%2FjxAngU50UczznxnsCgkyTE3eB0iA1sFVqmrCtF8dSPFm4d4hGN53S0eCbexmEIxWyvKq2tkYahLFsfT2gDeSqBVbYMWhYcdds3am0sq%2Fw3yEIeDpuwwwkRNfGuteHQZ5SQglUI3RipgxEtfFVSo1uRg7l31AnZbgIJDjIl3voT%2BkorbCSYPZhWcHjc3X5Px2oRiFxCxTIMuJaD%2B3%2FS3q3P%2FlKoXKjj%2Bdiz4RDSm8Mh9dOH%2FYGslp0B7dM0q7%2Fuy%2FBndzl8kg7MAelK8FMXiWT2vG1XEblf9Edp3T0jWlCWhKvB4PfHW30A&RelayState=834659b649ed4d08b2fc422003bcb542&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=XkvlJzbNqTa96r1NU7aE%2FtySkFy6GHDk2BWWXjKiipWSZTmiFUIQ3%2BNhu7z%2F19jXUukmOsF4x%2F7S6PMxm1N2PzuMOXAHW2z8PupI7IWDcq8N7AWWz4X2uZsnYlezBbNk86aoAgZ7PX6ar2EosVIIdXd1kucFfXqy6BIEGHXjyrKzVJbnSkF9i4zKvdEDbGwM00WHzpZQKNJthHEtgAMg1c6SKDm%2BGOWXkLihkgWJMelLJe8urtNp5Di6YmU9SMsiFlEJkbVazyEP2Gwk3tOunZabSbFCFHu6Q7vMtNgyFOB5IT%2B%2BkFsDv0FXf3omHwX4a%2BYlY%2BIEA2GkbD%2BeQSztSA%3D%3D

Greg
 
On Fri, Sep 9, 2016 at 9:17 AM, Greg Gershman <greg@adhocteam.us> wrote:
When you visit https://dev.vets.gov/api/v0/sessions/new , the output will be JSON. There's one field, which is called "authenticate_via_get" that has a long URL that should start with "https://api.idmelabs.com/saml/SingleSignOnService?..."
 
if you copy/paste that url from the JSON into a new browser tab, you should be redirected to the ID.me landing page, which has a bunch of buttons on it (see image below). Clicking the MHV button should then redirect the user to MHV with the SAML request as part of the redirect. 
 
I'll run another test now, standby.
 
Greg
 
On Fri, Sep 9, 2016 at 9:13 AM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
Looks like we got much further.  Greg can you provide the entire set of URLs?  And steps?  I tried to hit those URL’s ... but not sure which url was provided by ID.me.
 
I disabled the “SSL Required” since that will be managed by apache outside of liferay.
 
Can you run another test?
 
-Ken
 
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Friday, September 09, 2016 1:51 AM

To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Yale-Loehr, Alex; Steve Smith
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Apologies for the delay. I was just able to run a test.
 
The process I went through was:
 
1. Go to https://mhv-syst.myhealth.va.gov/beta.html, click the green button to get the beta.
2. Go to https://dev.vets.gov/api/v0/sessions/new
3. Copy the ID.me url and paste into browser window
4. Click the MyHealtheVet button
 
I end up on MHV with the "Unable to process SAML request" message. So, it looks like it's all set up to use Liferay, which is good, but it doesn't look like we have the SAML configured correctly.
 
Ken, if you can look in the logs and let me know if you see anything related, or if you need me to run another test while you're monitoring the logs.
 
We'll pick this up more tomorrow. Thanks!
 
Greg
 
On Thu, Sep 8, 2016 at 2:03 PM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
Tanel
 
I am done adding the config and placing a copy of the IDme metadata in an xml file on the server.
Can you please run a test?  I’ll monitor the logs so let me know when you run test...
 
Thanks,
-Ken
 
From: Greg Gershman [mailto:greg@adhocteam.us] 
Sent: Thursday, September 08, 2016 1:24 PM
To: Graham, Kenneth J. (BYLIGHT)
Cc: Tanel Suurhans; Seeger, Tony; Yale-Loehr, Alex; Steve Smith
Subject: Re: [EXTERNAL] Re: MHV / ID.me integration recap
 
Awesome. I'll set up some time for tomorrow morning in case we need to troubleshoot anything. Ken, let us know when the config that Tanel sent over is in place on your end and we'll run a test.
 
Greg
 
On Thu, Sep 8, 2016 at 1:20 PM, Graham, Kenneth J. (BYLIGHT) <Kenneth.Graham2@va.gov> wrote:
I will give this a try.
 
I have been able to establish a meeting with the xtivia saml expert for Monday at 11AM.  Once I receive the meeting I will forward to you all.
(Hopefully we can all be there at 11AM EDT... if you can pencil in a block of time that would be great)
 
-Ken
 
From: Tanel Suurhans [mailto:tanel@id.me] 
Sent: Thursday, September 08, 2016 1:12 PM
To: Seeger, Tony; Graham, Kenneth J. (BYLIGHT); Greg Gershman; Yale-Loehr, Alex; Steve Smith
Subject: [EXTERNAL] Re: MHV / ID.me integration recap
 
Hey everyone
 
So finding information about the Liferay configuration seems to be quite challenging. What I did find was a very brief example of how to use Salesforce as an SP and Liferay as an IDP. I attached the modified configuration from that source that should be added to the portal-ext.xml file. I have no idea honestly of if and how it will work :)
 
Tanel Suurhans
Chief Technology Officer @ ID.me
571-386-6667
tanel@id.me
 
On 8. september 2016 at 0:10.49, Greg Gershman (greg@adhocteam.us) wrote:

All,
 
Thanks for the call today, we've set up a follow up call for tomorrow morning at 9AM to work through the integration issues and help MHV with the SAML configuration. Quick notes based on today's call:
 
1. MHV needs some assistance configuring SAML, ID.me and Ad Hoc to assist via screenshare 9/8 9AM.
2. Custom properties can be added to Liferay/SAML, it is believed. Need more resources/budget allocation from John Brekke to get this on the roadmap for implementation.
3. Login page and consent page are potentially issues for design.
 
Action items:
 
1. Work through MHV/ID.me SAML config/integration issues tomorrow.
2. Vets.gov to prepare "project plan" or statement of work to track tasks.
3. Based on outcome of #1, set up daily standup call to keep progress moving forward.
4. Vets.gov will work on discussing prioritization with MHV management to get more concrete estimate on implementation.
 
Let me know if I missed anything. Thanks!
 
Greg
```
