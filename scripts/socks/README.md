# Socks Proxy Setup

More detailed instructions for setting up the socks proxy (somewhat manually) are [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#configure-the-socks-proxy) but you can also set it up with the config below and the `socks.sh` script in this directory. 

Note: This config will only work for access from outside the VA network.

First, copy the external SSH config into your `~/.ssh/config` file: (ask a devops colleague for config setting).

Make sure to comment out any `IdentitiesOnly yes` directives set at the top level or in a `Host *` directive in your config file - this seems to cause the proxy to fail on authentication.

Once this is saved, try the following commands:
```
$ ssh-add -K ~/.ssh/vetsgov_id_rsa
$ ssh socks -D 2001 -N
```
You may have to accept keys for servers from various IP addresses after running those commands.

Once you've [confirmed the proxy works](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#test-and-use-the-socks-proxy), then you can use the socks scripts, as follows:
```
$ ./socks.sh on  # turn on socks proxy
$ ./socks.sh     # check status
$ ./socks.sh off # turn off socks proxy
```
The script assumes you have stored your key at `~/.ssh/vetsgov_id_rsa` - if you put it elsewhere you can set the VA_SOCKS_KEYFILE variable before invoking it.

The socks script will start the socks proxy, configure the proxy settings on your computer to use a `proxy.pac` file, and start a small webserver to serve that file up. The proxy.pac file will send only a few URLs to the proxy, sending everything else directly to the internet.

Finally, you'll need to configure your browser to use the system proxy if you use this script.

If you don't want to use the proxy.pac route, another option is to install a proxy switcher into your browser - [details here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#chrome--firefox).
