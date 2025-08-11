### Associations API
#### This approach uses the socks proxy info to create a tunnel setup
1. In the terminal (MAC OS) run:
```
brew install socat
vtk socks on
socat TCP-LISTEN:4430,fork SOCKS5:localhost:fwdproxy-staging.vfs.va.gov:4430,socksport=2001
```
2. Open a new terminal and run (*the line break is REQUIRED*):
```
curl -k -H 'Host: fwdproxy-staging.vfs.va.gov' https://localhost:4430/ves-associate-gateway-svc/associations/person/
{"type":"about:blank","title":"Not Found","status":404,"detail":"No static resource associations/person.","instance":"/ves-associate-gateway-svc/associations/person/"}%
```
3. Record the cassette.
