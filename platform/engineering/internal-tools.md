# Internal tools access

This document describes tools available internally to developers working on the Veteran-facing Services Platform and configuration required to access them. You'll need access to these tools if you need:

* Build logs and details from Jenkins (linked to from GitHub PRs for each project)
* System metrics for diagnostic/troubleshooting purposes
* Exception reports and tracebacks

These internal tools are available on the `vfs.va.gov` domain. Your SOCKS proxy will tunnel traffic over a secure channel to internal tool servers, providing access to:

| Name                 | vfs.va.gov link                                             |
|----------------------|-------------------------------------------------------------|
| Jenkins              | http://jenkins.vfs.va.gov                                   |
| Grafana              | http://grafana.vfs.va.gov                                   |
| Sentry               | http://sentry.vfs.va.gov                                    |
| Prometheus (sandbox) | http://prometheus-sandbox.vfs.va.gov:9090/prometheus/graph  |
| Prometheus (dev)     | http://prometheus-dev.vfs.va.gov:9090/prometheus/graph      |
| Prometheus (staging) | http://prometheus-staging.vfs.va.gov:9090/prometheus/graph  |
| Prometheus (prod)    | http://prometheus-prod.vfs.va.gov:9090/prometheus/graph     |
| Prometheus (utility) | http://prometheus-utility.vfs.va.gov:9090/prometheus/graph  |

You do not need to run the SOCKS proxy while you're developing unless you need access to one of the above tools.

<hr>

## Table of Contents

* [Design rationale](#design-rationale)
* [Creating an SSH keypair in Windows](#creating-an-ssh-keypair-in-windows)
* [Creating an SSH keypair in Mac or Linux](#creating-an-ssh-keypair-in-mac-or-linux)
* [Configure the SOCKS proxy](#configure-the-socks-proxy)
* [Test and use the SOCKS proxy](#test-and-use-the-socks-proxy)
* [Tools](#tools)
* [FAQs](#faqs)

<hr>

## Design rationale

Some utilities, such as metrics dashboards, error reporting, and deployment tools, should not be made available to the public. While such a utility may lock functionality behind a user login system, these vary among implementations and may be vulnerable to exploits. 

The preferred solution is to host these systems on an internal network that prevents public access. While the VA maintains an internal network, the VSP team operates within the AWS environment. After extensive efforts to obtain a zone delegation, we are able to control the records for internal tools using the `*.vfs.va.gov` zone delegation and Route53.

The SOCKS proxy is a server on your local system that tunnels HTTP and DNS traffic to a jumpbox on the va.gov AWS network. Once connected, a developer will have access to the `*.vfs.va.gov` domain and can use their browser to connect to tools such as Prometheus, Jenkins, Grafana, and Sentry.

Internal systems will not require any modification to connectivity and should communicate with the utilities directly. They may use a `/etc/hosts` entry for the corresponding `*.vfs.va.gov` address(es) when necessary.

*Please note:* The following steps use the `~` symbol. In this context, the `~` symbol represents the current user's home directory. Therefore, `~/.ssh/` translates to `my user's home directory/.ssh`.

## Creating an SSH keypair in Windows

To create and use SSH keypairs on Windows, complete the following steps:

1. Make sure a tool like `Git Bash` or `WSL (Windows Subsystem for Linux)` is installed. For non-technical users, `Git Bash` is less involved and may already be installed if you are using a GFE (government-furnished equipment) laptop. Check to see if `Git Bash` is already installed by pressing the Windows key or clicking the Start button and typing the following in the search bar:
   
   `git bash`
   
   If the program is not installed, you can download it [here](https://gitforwindows.org/). Once the package is downloaded, run the installer. Accept the default options as you click through the setup wizard. [This guide from the web](https://www.techoism.com/how-to-install-git-bash-on-windows/) has great step-by-step illustrations. 

1. Locate and run the program by again clicking the Windows key or the Start button and typing the following:
   
   `git bash`
   
1. Type the following command in the terminal to create the file structure, set the correct permissions, and create a new key: 
   
   `ssh-keygen -f ~/.ssh/id_rsa_vagov` 
   
1. Enter a passphrase to encrypt your key and then confirm the passphrase when prompted. ****Warning**** the lines for entering a passphrase will not show your keystrokes or input, so make sure you write this down and repeat it exactly. This is highly recommended to be set and remembered. You will see a "randomart" picture in your terminal if all previous steps have been successful (example below).

   ```
   jbritt@BattleStation1 MINGW64 ~
   $ ssh-keygen -f ~/.ssh/id_rsa_vagov
   Generating public/private rsa key pair.
   Created directory '/c/Users/jbritt/.ssh'.
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   Your identification has been saved in /c/Users/jbritt/.ssh/id_rsa_vagov
   Your public key has been saved in /c/Users/jbritt/.ssh/id_rsa_vagov.pub
   The key fingerprint is:
   SHA256:ogRzhqYldgUky8tCCTx9aE76PT6JB3KQa+oZSZFjGLA jbritt@BattleStation1
   The key's randomart image is:
   +---[RSA 2048]----+
   |*.ooo.           |
   |+==*..           |
   |E@&.+            |
   |=O=*             |
   |o++ o . S        |
   |o+.= + .         |
   |ooo = o          |
   |. o. =           |
   |.o  . .          |
   +----[SHA256]-----+
   ```

1. Verify that your SSH keypair exists and is within the correct directory by running the following command:
   
   `ls ~/.ssh`
   
   You will see your public and private keys. Your public key will end in a `.pub` extension, such as `id_rsa_vagov.pub`, and your private key will have the same name minus the `.pub` extension. 
1. You can view the contents of your new public key by entering the following command: 
   
   `cat ~/.ssh/id_rsa_vagov.pub`
   
   You will need to copy the contents and provide them in a future step.
1. Add this key to your SSH agent any time this terminal is restarted. 
   - Ensure your SSH agent is running by typing: `eval $(ssh-agent -s)`.
   - Add your key to the agent by typing: `ssh-add ~/.ssh/id_rsa_vagov`.  
     **Note:** Use the private key here, not the `.pub` public key. 
   - Verify the key is added by typing: `ssh-add -l`. 
     This command should give output showing your key's signature added to the running SSH agent like the illustration below:
     ```
     $ssh-add -l                                                                                           
     2048 SHA256:ShkbdHKQqDwgONLv8/1qiYlX20kX9IPp3uV56ATp3c8 
     /home/user/.ssh/id_rsa_vagov (RSA)
     ```
   - \***PLEASE NOTE**\*: Any time your terminal is restarted, you will want to ensure your key is added by running `ssh-add -l`. If your key signature is not returned, or you receive output referring to your agent, run `eval $(ssh-agent -s)` and `ssh-add ~/.ssh/id_rsa_vagov`. There are also [instructions for Windows users using Git Bash](https://stackoverflow.com/questions/18404272/running-ssh-agent-when-starting-git-bash-on-windows#:~:text=In%20a%20git%20bash%20session,t%20exist%2C%20just%20create%20it.) to automate this process.

If all prior steps have been successful, return to [Additional orientation steps for developers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#authorizekeys) and request that your SSH keys be authorized.

## Creating an SSH keypair in Mac or Linux

If you don't already have an SSH public key, or you're not sure if you do, complete the following steps to create one:

1. Check to see if you already have an SSH public key by running the following command in your terminal: 
   
   `cd ~/.ssh`
   
   If this command returns the following error message, `cd: no such file or directory`, skip to step 3.

2. Once you have changed directory to `~/.ssh`, check to see if you already have your SSH keys:
   
   `ls`
   
    * If you see `id_rsa_vagov` and `id_rsa_vagov.pub` returned, you already have your keys and you can skip steps 3 and 4. 
    * If you don't see `id_rsa_vagov` and `id_rsa_vagov.pub`, continue onto the next steps.

3. To generate your public and private keys, run the following command:
   
   `ssh-keygen -f ~/.ssh/id_rsa_vagov`
   
Enter a passphrase to encrypt your key and then confirm the passphrase when prompted. ****Warning**** the lines for entering a passphrase will not show your keystrokes or input, so make sure you write this down and repeat it exactly. This is highly recommended to be set and remembered. You will see a "randomart" picture in your terminal if all previous steps have been successful (example below).

   ```
   jbritt@BattleStation1 ~
   $ ssh-keygen -f ~/.ssh/id_rsa_vagov
   Generating public/private rsa key pair.
   Created directory '~/jbritt/.ssh'.
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   Your identification has been saved in ~/jbritt/.ssh/id_rsa_vagov
   Your public key has been saved in ~/jbritt/.ssh/id_rsa_vagov.pub
   The key fingerprint is:
   SHA256:ogRzhqYldgUky8tCCTx9aE76PT6JB3KQa+oZSZFjGLA jbritt@BattleStation1
   The key's randomart image is:
   +---[RSA 2048]----+
   |*.ooo.           |
   |+==*..           |
   |E@&.+            |
   |=O=*             |
   |o++ o . S        |
   |o+.= + .         |
   |ooo = o          |
   |. o. =           |
   |.o  . .          |
   +----[SHA256]-----+
   ```

4. Run `ls ~/.ssh` and confirm that you see `id_rsa_vagov` and `id_rsa_vagov.pub`. It's normal to see several other files, as well. Seeing `id_rsa_vagov` and `id_rsa_vagov.pub` means you now have your private and public (the one with the `.pub` extension) keys! Your private key should never leave your computer, and it's unnecessary and inadvisable to share it with anybody.

5. Confirm everything went well:
    * You will have a subdirectory in your home directory `~/.ssh`
    * This subdirectory has restrictive permissions `0700`. Please see the example below, directory permissions of `0700` should reflect the `rwx` seen on the `.ssh` directory. The beginning `d` explains that `.ssh` is a directory and should also be present. 
    ```
    ❯ ls -al | grep .ssh
    -rw-------    1 jeremybritt  staff      28 Jun 12 14:13 .lesshst
    drwx------    8 jeremybritt  staff     256 Aug  6 11:27 .ssh
    ```
    * In this subdirectory you will have two files, `id_rsa_vagov` and `id_rsa_vagov.pub`
    * To get the contents of your new public key (which will need to be provided in a future step), you can run `cat ~/.ssh/id_rsa_vagov.pub`. This should give a long string of random characters (e.g. ssh-rsa AAAAAjfje983jJL3j2....).
    * \***PLEASE NOTE**\*: Any time your terminal is restarted, you will want to ensure your key is added by running `ssh-add -l`. If your key signature is not returned, or you receive output referring to your agent, run `eval $(ssh-agent -s)` and `ssh-add ~/.ssh/id_rsa_vagov`. There are also [instructions for Mac users](https://apple.stackexchange.com/questions/48502/how-can-i-permanently-add-my-ssh-private-key-to-keychain-so-it-is-automatically) to load their desired key(s) automatically.
    * Got it? Return to [Additional orientation steps for developers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#authorizekeys) and request that your SSH keys be authorized.

## Configure the SOCKS proxy

These steps assume your SSH keys have been authorized and that you're running on Linux, OSX, or have a Unix shell emulator like Git Bash (Windows). There are slightly different commands to connect to the proxy depending on whether you are connected to the VA network or not. You will need to run the SOCKS proxy on your local system whenever you need access to tools on the `*.vfs.va.gov` domain.

> The next steps are going to create a `~/.ssh/config` file. If you already have a `~/.ssh/config` file and would like to keep it intact, you can save the file to a different name `~/.ssh/config_va` and edit `~/.ssh/config` to add this line at the top: `Include ~/.ssh/config_va`. Alternatively, you can use the following command within the terminal to automate this process: `grep -qxF 'Include ~/.ssh/config_va' ~/.ssh/config || echo -e "Include ~/.ssh/config_va\n$(cat ~/.ssh/config)" > ~/.ssh/config`.

1. Save the SSH configuration that you'll need locally to access the remote SSH servers.
    * Click <a href="https://github.com/department-of-veterans-affairs/devops/raw/master/ssh/config" target="_blank">this link</a>
    * Right click and save the resulting file to ~/.ssh/config, or alternately,
    * copy the entire URL of the new tab and from within the terminal (Mac/Linux) or Git Bash (Windows), run the following command making sure to change `$URL` to the one you now have copied (i.e. `https://raw.githubusercontent.com/department-of-veterans-affairs/devops/master/ssh/config?token=xxxyyy`): `curl -o ~/.ssh/config $URL`. 

```
❯ curl -o ~/.ssh/config https://raw.githubusercontent.com/department-of-veterans-affairs/devops/master/ssh/config?token=xxxyyy
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  5804  100  5804    0     0  15602      0 --:--:-- --:--:-- --:--:-- 15602
❯ ls -al ~/.ssh
total 80
drwx------   8 jeremybritt  staff    256 Aug  6 11:27 .
drwxr-xr-x+ 48 jeremybritt  staff   1536 Aug  6 11:50 ..
-rw-r--r--   1 jeremybritt  staff   5804 Aug  6 11:50 config
-rw-------@  1 jeremybritt  staff   1766 Oct  9  2019 id_rsa_vetsgov
-rw-r--r--   1 jeremybritt  staff    381 Nov 12  2019 id_rsa_vetsgov.pub
```

2. Add your SSH key to your local agent with `ssh-add -K ~/.ssh/id_rsa_vagov` (for Windows, the command will not require the `-K` flag).

3. Proceed to the instructions below to access the SOCKS proxy.
    * If your key doesn't seem to be working, ask for help in the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) Slack channel


#### Accessing SOCKS proxy _from VA network_

The `~/.ssh/config` file on your local system contains configuration to access the SOCKS proxy from the VA network - see [Line 34 here](https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config#L34).

1. Run the following command:

   `ssh socks-va -D 2001 -N &`
   
> **Note:** The first time you connect to the jumpbox, SSH will prompt to ask if you are sure you want to connect to a new host. You will be unable to respond "yes" if SSH is in the background, so either bring it to the foreground with `fg` or omit the `&` character from the above command. You will have to enter "yes" at the prompt for the first / initial connection.

1. Follow the instructions below to test and use the SOCKS proxy.

#### Accessing SOCKS proxy _from the internet_

The `~/.ssh/config` file on your local system contains configuration to access the SOCKS proxy from outside the VA network - see [Line 28 here](https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config#L28).

1. Run the following command:
   
   `ssh socks -D 2001 -N &`
   
>**Note:** The first time you connect to the jumpbox, SSH will prompt to ask if you are sure you want to connect to a new host. You will be unable to respond "yes" if SSH is in the background, so either bring it to the foreground with `fg` or omit the `&` character from the above command. You will have to enter "yes" at the prompt for the first / initial connection.

1. Follow the instructions below to test and use the SOCKS proxy.


## Test and use the SOCKS proxy

Use the following steps to verify that the proxy connection is working, and to configure your browser to use the proxy connection. Note that the proxy only allows access to our internal tools, not to the internet at large. So you need to configure your browser to either use the proxy only for `vfs.va.gov` domain (as described below for Chrome), enable/disable the proxy connection as needed, or use a separate browser for accessing the internal tools vs. for general use.

### Curl

To test your proxy connectivity, the best option is to run the following command:

`$ curl -v --proxy socks5h://127.0.0.1:2001 sentry.vfs.va.gov`

You should get output that includes `HTTP/1.1 302 FOUND`. If not, check that the SOCKS proxy server is running. You can run `$ nc -z 127.0.0.1 2001` as a first step.

### Connecting your browser to the proxy
There are two alternatives to connecting your browser to the proxy.

1. Install SwitchyOmega: browser extension that will let you use the proxy just for certain domains
1. Use the `socks.sh` script: a script will set up OSX with a system-level proxy - this is useful for those who want to use Safari, or who don't want to use browser extensions

#### Set up SwitchyOmega for Chrome & Firefox

1. Install Proxy SwitchyOmega.

   - [Chrome](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/switchyomega/)

1. Configure the `proxy` profile like this:

   ![](images/switchy-omega-config-1.png)
   - Server: `127.0.0.1`
   - Port: `2001`

1. Configure the `auto switch` profile like this:

   ![](images/switchy-omega-config-2.PNG)
   - Condition details: `*.vfs.va.gov`

1. In Chrome's menu bar, click on the proxy app and change the setting to "auto switch":

   ![](images/switch-omega-auto-switch.png)

1. Be sure to click "Apply Changes" to save your changes.

   ![](images/switchy-omega-config-3.png)

1. **Note:** You may have to uncheck a settings flag in Chrome. See https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy.

1. Check your connection by navigating to Sentry at http://sentry.vfs.va.gov.

#### Use the Socks script
An alternative to SwitchyOmega is to use [the `socks` script](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/scripts/socks). The `socks` script loads your key into the SSH agent, starts the socks proxy, and sets up your system to proxy only URLs that require the proxy. It has the advantage of not requiring any third-party extensions, and it works with Chrome and Firefox browsers.

### Using the va.sh helper script

Within the DevOps [utilities repo](https://github.com/department-of-veterans-affairs/devops/tree/master/utilities) exists a nifty helper script called [va.sh](https://github.com/department-of-veterans-affairs/devops/blob/master/utilities/va.sh_README.md). One of the things it makes easier is a helper to quickly enable/disable the proxy via command-line.

To enable the proxy:
   `va.sh socks on`

To disable the proxy:
   `va.sh socks off`

More info/details in the [README](https://github.com/department-of-veterans-affairs/devops/blob/master/utilities/va.sh_README.md).
 

## Tools

### Jenkins

With the Socks proxy set up and running, go to http://jenkins.vfs.va.gov. You will be prompted to authenticate with GitHub before being able to view jobs. 

### Sentry

With the Socks proxy set up and running, go to http://sentry.vfs.va.gov. You will be prompted to authenticate with GitHub. Once logged in, you can add yourself to the appropriate teams.

We do not really use Sentry teams except to separate production, staging, and dev errors. To view the most recent production errors, which is the most common thing to do while on call, go to http://sentry.vfs.va.gov/vets-gov/platform-api-production/.

### Grafana
With the Socks proxy set up and running, go to http://grafana.vfs.va.gov/login. You can sign in using your GitHub account by clicking the "Sign in with GitHub" button on the login page.

There are many dashboards and you should click around to get familiar with the variety of metrics being collected and visualized (make sure Data Source is set to Production). A few highlights are:

- [Site](http://grafana.vfs.va.gov/dashboard/db/site) to see overall metrics about the health of the site
- [External Service Status](http://grafana.vfs.va.gov/dashboard/db/external-service-status) to see the availability of the services vets.gov depends on. 
- [RDS](http://grafana.vfs.va.gov/dashboard/db/rds) to see the database statistics. 
- [Rev Proxy](http://grafana.vfs.va.gov/dashboard/db/revproxy) to see metrics on the reverse proxies. 

## Troubleshooting
If you are confident you have been through this guide and completed all steps as instructed within this documentation and things are still not working, please continue to the FAQs below. If you go through those and you are still unable to establish a connection to the SOCKS proxy and/or view our internal tools, please reach out in the [#vfs-platform-support](https://app.slack.com/client/T03FECE8V/CBU0KDSB1) Slack channel.

## FAQs

#### "Permission denied - public key" error when pushing to Github

1. Has your public SSH key been added to the list of authorized SSH keys? 
    * **Platform team** - Check the list of authorized keys in the [devops repo](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/roles/dsva-config/files/authorized_keys). If it's not there, follow [these instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#2-request-that-your-ssh-keys-be-authorized-so-that-you-can-use-the-developer-tools-such-as-jenkins-grafana-and-sentry) to have it added.
    * **VFS teams** - a member of the Operations team will comment on your environment access request once your key has been added to the authorized list. If it's been more than 72 hours, reach out in the #vsp-platform-support Slack channel for assistance.
1. Does your .ssh/config contain the correct content?
    * Config for working [within the VA network](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-va-network)
    * Config for working [outside the VA network](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-the-internet)
1. Have you added your private key to your local SSH agent?
    * Run ```ssh-add -K ~/.ssh/id_rsa_vagov``` for Mac or ```ssh-add ~/.ssh/id_rsa_vagov``` for Windows, respectively
1. Are you running the correct command for ```socks``` vs ```socks-va``` depending on whether you are on or off the VA network?
    * [Within the VA network](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-va-network)
    * [Outside the VA network](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-the-internet)
    

#### ```ssh socks -D 2001 -N``` failing

1. **Platform team** - Does your ```.ssh/config``` contain the right content?
    * **Platform team** - [see here](https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config) 
    * **VFS teams** - see [Step #2 here](#configure-the-socks-proxy)
2.  Is your SSH private key added to your local SSH agent? To add it run ```ssh-add -K ~/.ssh/id_rsa_vagov```


#### Page not loading on the vfs.va.gov domain

We previously had an issue where va.gov HSTS settings were incorrectly forcing browsers to use HTTPS on all subdomains. While this is correct from an external perspective, some internal tools aren't available on HTTPS yet. Browsers may silently redirect you to HTTPS. See [here](https://cheapsslsecurity.com/blog/hsts-chrome-firefox-clear-hsts-settings/) for details on how to disable on your browser of choice.
