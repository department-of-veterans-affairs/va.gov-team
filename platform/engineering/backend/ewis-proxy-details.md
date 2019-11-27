# EWIS proxy details

The reverse proxy infrastructure that we operate supports at least 2 generations of website management since moving the entire site into a new system is a really large change all at once. As a result, the setup is complicated and deserves a doc on its own.

EWIS (Enterprise Web Infrastructure Support) is a group that manages a cluster of IIS machines that serve content managed by TeamSite, the legacy CMS. In reality, this team is only responsible for those servers and not the content, network, and storage. However to simplify terminology, we'll name those systems after EWIS in this doc. More details about the organizational structure there below.

Also of note, we are using S3's website hosting feature. This document simplifies references to just "S3".

From a network architecture standpoint, the hosting of www.va.gov looks something like this:

![](images/VA.gov-infrastructure-diagram.png)

## Request workflow

### Overview
In its simplest form, a request's workflow looks straightforward. We check S3 first to see if content exists first, and if not, serve it from EWIS infrastructure.

![](images/ewis-proxy-simple.png)

### Reality

In reality, the workflow is a bit more complicated. We make liberal use of the `error_page` feature in nginx to achieve a more complex workflow so that we can control the error pages (like 404 or 5xx). There's also some performance optimizations for paths we _know_ come from EWIS like `/va_files` which is a directory that the old CMS uses to stored shared CSS, Javscript, images, and more for the site. For those requests, we do not want to incur the overhead of making a request to see if the file exists on S3. We already know it does not.

Because of these optimizations, we end up with something more like this:

![](images/revproxy-request-workflow.png)

## Technical details

Because the EWIS clusters are a long (physical and network topology) distance from our revproxy nodes, we made a few optimizations to make performance tolerable. These optimization make the EWIS proxy different from other services that we proxy (like S3). The two major things we did were configure caching and enable TCP connection re-use.

### Caching

For requests back to EWIS, we cache the responses (see ewis vs ewis-apps below for when this is not the case) in order to speed up responses back to clients. This is particularly useful on the `/va_files` path as nearly every page on the legacy site utilizes the assets from this directory, and it lowers the amount of bandwidth and latency to load these.

This is done utilizing nginx/OpenResty's built-in `proxy_cache`. You can know whether or not a request came from cache by checking the `X-Proxy-Cache` header. Nginx also report metrics into Prometheus using buckets for cache status (hit, miss, bypass).

It's important to note that anytime an upstream response sets a cookie (or any of the other built-in nginx conditions to not cache a request are true), it will not cache the response. This plays off TCP connection re-use a little bit and is important to know about this inter-play while making changes at this layer.

### TCP connection re-use

For requests that do end up hitting the EWIS upstream, we tweaked nginx to use HTTP/1.1 (1.0 is the default) in order for it to maintain TCP connections back to the F5 in front of EWIS. This optimization eliminated the normal overhead of doing negotiation for an SSL TCP for every single request (which added a great deal of latency), but also helped responses be more cache-able. 

By default, the upstream F5 uses cookie-based load balancing. The F5 will send a `Set-Cookie` header with the first response on a given TCP connection, then all others will not have that cookie set. Because of this, the first request cannot be cached (we do not want to leak cookies between clients!), but subsequent requests will not set that load balancer cookie.

This also only works because we use a static IP address for the F5. Using the upstream module (which is how you get to use HTTP/1.1 with nginx) is incompatible with the open source version of nginx's workaround for using a DNS name for a proxy upstream server. Many hours were spent trying to make this same optimization work for S3, but that appears to not be possible with the current version of nginx/OpenResty.

### ewis vs ewis-apps

If you read our configuration or check out monitoring, we have two different "applications" configured in nginx -- `ewis` and `ewis-apps`. The information in this document is mostly about the `ewis` application, which is optimized for static content. For `ewis-apps`, a good deal of this technical details section does not apply (we do not cache, do not re-use TCP connections, etc).

`ewis-apps` is defined in a single `location` directive that overrides all of the above optimizations and simply uses `proxy_pass` directive in order to fall back to HTTP/1.0 and disable caching. We ended up with this override because some legacy applications within the EWIS space store sessions locally on individual servers, with no database backing the service. When a situation like that occurs, allowing the request to pass over a re-used TCP connection results in the request being serviced on an IIS node that may or may not have a session. The result is a rarely-usable app when state needs to be preserved on the server-side for multiple pages. Disabling this connection re-use causes the request to be routed correctly because it establishes a new connection for each request (using the Cookie to decide which node to send the request to for execution), but is far too slow for general use.
