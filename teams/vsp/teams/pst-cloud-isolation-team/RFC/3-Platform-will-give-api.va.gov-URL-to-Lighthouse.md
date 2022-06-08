### Discussed in https://github.com/department-of-veterans-affairs/va.gov-team/discussions/39068

<div type='discussions-op-text'>

<sup>Originally posted by **dginther** March 24, 2022</sup>
- Start Date: 2022-03-24
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/38971

# Summary

When we separate the Lighthouse APIs from the vets-api, we will be giving Lighthouse control over the api.va.gov subdomain. This will necessitate that we choose a new subdomain for vets-api.

We will use this name initially for an internal-only URL, in the .vfs.va.gov subdomain, which we have control over, and once we have an external URL granted from the VA, we will make the APIs available via the new .va.gov URL.

# Motivation

We would be requesting an externally available URL for this set of APIs to support the use-case of external clients needing to access the APIs from the public internet. We believe there are consumers who would need this functionality.

Since this will be a permanent new URL, we want to be sure that we take the time to choose an appropriate name. It will be difficult to change this URL in the future once it is in use.

The expected outcome of this would be that the Lighthouse APIs would be available on the public internet at api.va.gov and our set of APIs which is backed by the vets-api processes would be available on the public internet at a to-be-determined URL.

# Detailed design
The initial internal URL for building and testing this new arrangement will be `internal-api.vfs.va.gov` or a combination of the environment and this URL, e.g.:
- dev-internal-api.vfs.va.gov
- staging-internal-api.vfs.va.gov
- sandbox-internal-api.vfs.va.gov

The external URL will be `platform-api.va.gov` or a combination of the environment and this url, e.g.:
- dev-platform-api.va.gov
- staging-platform-api.va.gov
- sandbox-platform-api.va.gov

~Suggested possible subdomains/URLS~
~- platform-api.va.gov~
~- platformapi.va.gov~
~- vets-api.va.gov~

The initial design would include an AWS ALB (possibly re-using an existing ALB) for the initial API endpoint. 

It is possible, though not likely, that we could use only ALB routing rules to send the traffic where we intend. Many times traffic will need tweaks or mangling, or headers manipulated, ad this would require some sort of reverse proxy to be next in the path.

The next step in the path, if necessary, would be a reverse proxy or API gateway. This would allow any manipulation of the traffic that was necessary. It is possible that we could continue to use nginx as we do in the existing revproxy. Other possibilities include using Kong gateway, Traefik with middlewares (already in use on our Kubernetes clusters) or another API gateway such as Tyk, Fusio, or some other TBD software. (An RFC to discuss the options here will be created).

Once the traffic exited the reverse proxy/API gateway, it would be routed either to vets-api, or possibly to some other service running in our infrastructure.

# Alternatives

Alternatives to this architecture would be to continue having Lighthouse and vets-api share the same URL (api.va.gov) but this would create a difficult mess to untangle once Lighthouse moves their systems to GCP and Apigee. I do not believe this is a viable option, without introducing unacceptable latency and complexity to the system.

The only other alternative to creating a new external URL would be to use the internal-only URL, `internal-api.vfs.va.gov`, available only from within the VA network. I believe that there are reasons for having this URL available from the internet, but the scope of those use-cases is unknown at this time. If it is determined that there is _no_ use-case for an externally available API, then we would remain with the internal URL only.

# Adoption strategy

The initial strategy for adoption would be to create a parallel system under an internal-only url (.vfs.va.gov) which would allow us to develop the new way to access the vets-api API. We can do this without interrupting the existing revproxy or any existing infrastructure.

Once we have the new system in place and configured, we can request the new external URL from the VA ESECC, and start to migrate usage to the new public URL. If it turns out that external access is not needed, we can skip this step and just migrate users to the new internal URL.
</div>
