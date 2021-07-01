# Redirects

Created: July 1, 2021 8:39 AM
Tags: Documentation

# I have a redirect request, now what?

## Do I have what I need?

So you have a redirect request. It should contain at least the "from" URL and the "destination" URL. An example would be:

`From`: www.cem.va.gov/cem/burial_benefits/eligible.asp

`To`: www.va.gov/burials-memorials/eligibility/

**Note:** The `To` should always have a trailing `/` in order to avoid an unnecessary + extra redirect.

You will also need to know if the redirect is case sensitive or case insensitive (e.g. [www.cem.va.gov/cem/BURIAL_BENEFITS/ELIGIBLE.asp](http://www.cem.va.gov/cem/BURIAL_BENEFITS/ELIGIBLE.asp) should or should not redirect to [www.va.gov/burials-memorials/eligibility/](http://www.va.gov/burials-memorials/eligibility/) in the above example.)

In addition, you need to know if the redirect is a catch-all redirect (e.g. [www.cem.va.gov/cem/burial_benefits/*](http://www.cem.va.gov/cem/burial_benefits/*)*)

## How do I implement it?

Now that you have confirmed that you have all the details you need for the redirect request, follow the below process:

1. Does the redirect's `From` URL include [www.va.gov](http://www.va.gov) at the beginning? This is known as a **same-domain redirect**.
    1. Is the redirect case sensitive?
        1. Navigate to [https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml) and create a redirect at the bottom of the file **WITHOUT** using the `matcher` field and **without** regex in the `src` field. An example of this is [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml#L148).
    2. The redirect is case insensitive:
        1. Navigate to [https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml) and create a redirect at the bottom of the file **WITH** the `matcher: "~*"` and **with** regex in the `src` field, such that the value looks like `^/path/?$`. An example of this is [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/redirects.yml#L961).
2. Does the redirect's `From` URL include [www.vets.gov](http://www.vets.gov) at the beginning? This is known as a **vets.gov cross-domain redirect**.
    1. Navigate to [https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/vetsgov-redirects.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/vetsgov-redirects.yml) and create a redirect at the bottom of the file. There are options for `rewrite` and `retain_path`. If you have questions on what values to use for those options, you can reach out to VSP Devops, Mikki Northuis, and the redirect request's stakeholder(s) for clarity.
3. Does the redirect's `From` URL include www.[subdomain].va.gov at the beginning (where `subdomain` could be a subdomain of va.gov, such as benefits.va.gov)? This is known as a **cross-domain redirect**.
    1. The `From` URL is a TeamSite website.
        1. Contact Joseph Kemer and Bradley Smelley on the WebOps team who can help facilitate this redirect for you from TeamSite.
    2. Does the `From` URL use the `vets-website` header and footer? (This is tricky since some subdomains have copied our header and footer instead of implementing our reusable header and footer.)
        1. Is the redirect a catch-all redirect?
            1. Navigate to [https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json) and create a redirect at the bottom of the file. Add the key-value pair `"catchAll": true`. You can see an example of this [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json#L1174).
        2. The redirect is not a catch-all redirect:
            1. Navigate to [https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/proxy-rewrite/redirects/crossDomainRedirects.json) and create a redirect at the bottom of the file.
    3. The `From` URL does **NOT** use the common `vets-website` header and footer.
        1. You need to contact the Gateway Ops team. File an ESECC (Enterprise Security External Control Council) request for the redirect via [https://www.esecc.va.gov](https://www.esecc.va.gov). Your main point of contact for this request will be Boris Ning. This request typically takes between 2 - 8 weeks to fulfill.
            1. Have you read your ESECC checklist?
                1. Yes
            2. Change Type
                1. Domain Name Server
            3. Type of Submission
                1. New
            4. Name the Connection
                1. new domain redirection for va.gov
            5. **WARNING:** We have never done this process before. Contact Public Websites and Boris Ning to ensure this is done correctly so as to prevent any delays with the redirect implementation.
        2. Some extra contact information: VA TIC Gateway Operations
            1. Phone: 304 262 5282
            2. Email: [VANSOCOperationsGateWay@va.gov](mailto:VANSOCOperationsGateWay@va.gov)
            3. ServiceNow Assignment Group: `IO.NETWORK.NOC.TICGATEWAY`
        3. A diagram to better understand how this works:

            ![image](https://user-images.githubusercontent.com/12773166/124171506-e7c60b00-da65-11eb-9ed3-b537c6ec5a5e.png)

4. Any other `From` URL that does not match the above cases need to be brought to the attention of Public Websites as soon as possible. You can find us in Slack [here](https://dsva.slack.com/archives/C52CL1PKQ).
