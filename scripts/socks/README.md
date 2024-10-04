# Socks Proxy Setup
Official instructions and recommended approach for setting up the socks proxy are [here](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy#AccessingInternalTools(viaSOCKSProxy)-PrerequisitesPrerequisitesforSOCKSProxyconfiguration). The approach below and the `socks.sh` script in this directory can also be used but requires more manual work.

First, copy the external SSH config into your `~/.ssh/config` file: (ask a devops colleague for the config setting or 
get it from [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config)).

If you only need access to Jenkins/Grafana/etc from outside the VA network, and not to specific AWS resources, 
you only need the part of the config that starts with:

```
### Access to SOCKS proxy from public internet, by way of dev jumpbox
Host socks
    { etc }
```

Make sure to comment out any `IdentitiesOnly yes` directives set at the top level or in a `Host *` directive in your config file - this seems to cause the proxy to fail on authentication.

Once this is saved, try the following commands:

```
$ ssh-add -K ~/.ssh/id_rsa_vagov
$ ssh socks -D 2001 -N
```

You may have to accept keys for servers from various IP addresses after running those commands. You can then use the `socks.sh` script, as follows: (you may also want to create an alias)

```
$ ./socks.sh on  # turn on socks proxy
$ ./socks.sh     # check status
$ ./socks.sh off # turn off socks proxy
```

The script assumes you have stored your key at (`~/.ssh/id_rsa_vagov`). If you put it elsewhere or name it otherwise, you can set the VA_SOCKS_KEYFILE variable before invoking it (like this: `VA_SOCKS_KEYFILE=~/.ssh/my_vagov_privatekey`).

The script also sets up a proxy for the "Wi-Fi" network by default; if you are using a different network, you can override the SOCKS_NETWORK environment variable - for example:

```
$ SOCKS_NETWORK="USB 10/100/1000 LAN" ./socks.sh on
$ SOCKS_NETWORK="USB 10/100/1000 LAN" ./socks.sh off
```

The socks script will start the socks proxy, configure the proxy settings on your computer to use a `proxy.pac` file, and start a small webserver to serve that file up. The proxy.pac file will send only a few URLs to the proxy, sending everything else directly to the internet.

Finally, if you want to use a browser other than Chrome or Safari, you'll need to configure your browser to use the system proxy. This has been tested on OSX 14.5, and works with Chrome, Firefox and Safari. Chrome and Safari use the system proxy by default; you can set it up for Firefox by following [these instructions](https://support.mozilla.org/en-US/kb/connection-settings-firefox).
