function FindProxyForURL(url, host) {
  PROXY = "SOCKS5 127.0.0.1:2001"

  if (shExpMatch(host,"*.vfs.va.gov|*.vetsgov-internal")) {
    return PROXY;
  }
  // Everything else directly!
  return "DIRECT";
}
