# IAM SSOe CAR
This document lists out the items that IAM reports to their leadership in regards to SSOe. The intent is to ensure the new SiS has at least the same reporting coverage as IAM does.

-----
The following metrics are found on the [IAM CAR Site](https://iamportal.iam.va.gov/iamv2/reports/CAR_embed_SSOe.php) for SSOe:

- SAML requests vs. responses (percentage)
- SAML responses to [VA.gov](http://VA.gov) by CSP
- Authentications by CSP in graph form broken down by hour
    - This appears to be number of successful authentications
    - They also have an additional graph for this broken down by deployed ISAM server. We will not provide this type of information as our instances do not run independently in a way that is distinguishable to rails
        - We should consider if this could help detect a bad node
- Authentications by CSP method Totals
    - They also have an additional graph for this broken down by deployed ISAM server. We will not provide this type of information as our instances do not run independently in a way that is distinguishable to rails
        - We should consider if this could help detect a bad node
- Authentications by Assurance level in graph form broken down by hour
- Authentications by Assurance level Totals
- IDme LOA3 authentications per app
- IDme LOA1 authentications per app
- IDme brokered MHV LOA3 authentications per app
- IDme brokered MHV LOA1 authentications per app
- IDme brokered DSLogon LOA3 authentications per app
- IDme brokered DSLogon LOA1 authentications per app
