function FindProxyForURL(url, host) {
  PROXY = "SOCKS5 127.0.0.1:2001;SOCKS 127.0.0.1:2001"

  if (shExpMatch(host,"*.vfs.va.gov")) {
    return PROXY;
  }

  if (shExpMatch(host,"*.vetsgov-internal")) {
    return PROXY;
  }
  
  if (shExpMatch(host,"*.cms.va.gov")) {
    return PROXY;
  }

  if (shExpMatch(host,"*.ppms.va.gov")) {
    return PROXY;
  }

  // Everything else directly!
  return "DIRECT";
}
