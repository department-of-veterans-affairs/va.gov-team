# RFC: Public URL for Platform Tools

- Date: 2022-03-21
- Related Issues: #38837, #21026

## Background
It’s hard to get public-facing subdomains from the VA. New public-facing URLs need ESECC requests, WASA scan(s), and updates to the Platform’s ATO.

It may be better to use a fixed subdomain with different paths for each tool. Rather than a subdomain for each tool. e.g.
- `<platform-tools-subdomain>.va.gov/<platform-tool-name>` <- **preferred**
- `<platform-tool-name>.va.gov` <- **hard to get**

## Motivation
There is motivation to do this for several reasons: 

### New services
There are new services coming online that users need to access. There should be a standard approach to URL naming conventions for new tools and services. 


### Existing services 
There are existing services that communicate through the dev reverse proxy, ie "dev.va.gov". _(See #21026 for details)_

This is a problem for multiple reasons:
- Mission-critical services rely on the dev environment
- "dev.va.gov" is an inappropriate URL for developer-facing tools and platform utilities

### Zero Trust Architecture (ZTA)
According to recent guidance, “Enterprise applications should be able to be used over the public internet”.

We need a way to expose services without remote access (ie SOCKS, CAG, etc). 

## Design
Set up a new proxy dedicated to platform tools. At a high level, here's what's needed: 

- Decide on a naming convention for a dedicated URL for platform tools 
- Configure infrastructure to use this URL to route to platform tools and services 
- Follow the VA's processes to request and authorize the new subdomain 

Note: _The process is outlined in greater detail in #21026_

## Risks
The risk of doing this is expanding the possible attack surface for developer tools environments. We would need to ensure that tools made available via this URL are secure and up-to-date. 

The way that developers access tools will fundamentally change. There will need to be a clear migration and transition plan. This can be eased with redirects from existing tools to the tools in their new location. 

The risk of _not_ doing this is a delay in providing new tools. It will be hard to make tools publicly accessible. We will also be unable to comply with the ZTA mandate that tools "should be able to be used over the public internet". 

## Alternatives
1. Continue using SOCKS for access to developer tools. 
2. As an alternative to SOCKS, AWS provides a VPN solution that could be leveraged for remote access.
3. If SOCKS is no longer viable, or AWS VPN is not viable, then remote access setup (CAG or GFE) will be required for users that need access to platform tools. 

Although the alternatives listed above may provide developers with access to platform tools, they are not ideal for a few reasons: 

- SOCKS is not a VA-preferred solution
- AWS VPN is not a VA-preferred solution _(and would require substantial work to offer as a platform solution)_
- CAG and GFE make development very difficult for developers 