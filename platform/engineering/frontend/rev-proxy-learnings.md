# Reverse Proxies

## What's the difference between a forward proxy and a reverse proxy?

##### Diagrams

###### Forward proxy

![Forward proxie 1](https://www.jscape.com/hs-fs/hub/26878/file-13610973-png/images/forward_proxy-3.png)
![Forward proxie 2](https://www.cloudflare.com/img/learning/cdn/glossary/reverse-proxy/forward-proxy-flow.svg)

###### Reverse proxy

![Reverse proxie 1](https://www.jscape.com/hs-fs/hub/26878/file-13614809-png/images/reverse_proxy-resized-600.png)
![Reverse proxie 2](https://www.cloudflare.com/img/learning/cdn/glossary/reverse-proxy/reverse-proxy-flow.svg)

###### Resources

- https://serverfault.com/questions/1027169/client-side-caching-when-using-csp-with-nonces-in-nginx-how-do-you-use-weak-ca
- https://serverfault.com/questions/934801/is-it-a-good-idea-to-use-nginx-request-id-for-csp-nonce-value
- https://www.rfc-editor.org/rfc/rfc2616.html#section-13.3.3
- https://scotthelme.co.uk/csp-nonce-support-in-nginx/
- https://stackoverflow.com/questions/52573909/etags-for-server-side-rendered-pages-that-contain-csp-nonce
- https://html.developreference.com/article/11292331/ETags+for+server-side+rendered+pages+that+contain+CSP+nonce
- https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers#conditional-requests
- https://en.wikipedia.org/wiki/HTTP_ETag
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified
- https://tools.ietf.org/html/rfc7232#section-2.2
- https://www.geeksforgeeks.org/http-headers-last-modified/
- https://web.dev/http-cache/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
- https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy
- http://nginx.org/en/docs/dirindex.html
- A forward proxy is the intermediary that the client puts forward between itself and any server. The reverse proxy is at the other end – something the server puts forward between itself and any client… A forward proxy is what most people simply call proxies. Proxies are great for avoiding country restrictions, like the great firewall of China. The client simply connects to blocked resources via the forward proxy… Reverse proxies are excellent at balancing server loads and serving cached site versions. As an intermediary point between a web server’s back-end and the client, the reverse proxy is a vital point for directing and managing incoming requests. - https://smartproxy.com/blog/the-difference-between-a-reverse-proxy-and-a-forward-proxy
- A forward proxy is typically used in tandem with a firewall to enhance an internal network’s security by controlling traffic originating from clients in the internal network that are directed at hosts on the Internet. Thus, from a security standpoint, a forward proxy is primarily aimed at enforcing security on client computers in your internal network… In effect, whereas a forward proxy hides the identities of clients, a reverse proxy hides the identities of servers.
