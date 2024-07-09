This is based off (this MHV document)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/mhv-api-tunnel-setup.md]

This describes setting up AWS credentials and local aws-cli setup to allow your local machine to open a port that connects to PPMS via the dev forward proxy

## What we're doing
* Establishing a secure tunnel from a developer laptop to the lower environment of an upstream API provider (PPMS -- cannot connect except on VA network). 
* The tunnel is established using AWS Secure Systems Manager (SSM), and connects from the developer's machine to the VA.gov forward proxy. The forward proxy is an HAProxy instance that proxies connections on a local port to a configured upstream service. 
* Once the tunnel is established, then vets-api can be configured to use the local end of the tunnel (e.g. something like `https://localhost:5303` (note the port is below 6000) as the upstream API endpoint, allowing for full stack local development with easy access to MHV APIs.

## Prerequisites
1. Developers will need AWS access, which can be requested by filing an [AWS Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=AWS+access+for+%5Bindividual%5D) ticket in va.gov-team. 
    * Developers should request "SSM Access to lower environment instances". The specific IAM policy needed is "SSMApplicationLowerEnvironmentAccess", which can be granted via membership in the "dsva-vfs-developers" group.
    * To access the AWS console or use the SSM command line you'll need AWS credentials including mandatory 2FA.
    * The person making the IAM assignment really only cares about `dsva-vfs-developers` being the group you need to get added to.
2. Developers need access to the [devops repository](https://github.com/department-of-veterans-affairs/devops/) to access some utility scripts for establishing the SSM tunnel.
3. vets-api must be using a native or hybrid setup (i.e. start ruby with foreman), since docker-compose won't be able to connect to local port forwarding.

## Setup steps
### SSM Tunnel
#### One Time Setup
1. The login URL for VA's AWS govcloud: https://dsvagovcloud.signin.amazonaws-us-gov.com/console
2. You will need to set up your password (when you first login) and [2FA](https://depo-platform-documentation.scrollhelp.site/developer-docs/Setup-your-AWS-Account.1886781475.html) after the first login.
3. [Install the `aws-cli`](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
4. [Install the Session Manager plugin](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html) for `aws-cli`. 
5. [Configure AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) for AWS CLI usage with appropriate entries in `~/.aws/config` and `~/.aws/credentials`.
    1. Go to: https://console.amazonaws-us-gov.com/iam/home?region=us-gov-west-1#/security_credentials?section=IAM_credentials
    2. Go to the section marked "Access keys" and click "Create access keys"
    3. Copy the access key and secure access key somewhere safe or download the json somewhere safe (do not share this with anyone)
    4. In a shell, type `aws configure`
    5. OPTIONAL: If you have an existing profile and don't want to overwrite it you can set the profile you'd like to use with `aws configure --profile <some profile name>`
    6. For `AWS Access Key ID` enter your access key
    7. For `AWS Secret Access Key` enter your secret access key
    8. For `Default region name` enter `us-gov-west-1`
    9. For `Default output format` enter `None` or `json` (this is up to you)
6.  Clone the [`devops` repository](https://github.com/department-of-veterans-affairs/devops/).

#### Per-Session Setup (needs to happen in the same terminal)
The following steps need to be performed each development session, since the MFA session expires and the forward proxy instances periodically get redeployed with new instance IDs. Do this all in your `devops` directory and all in one terminal (since you need the mfa credential in the terminal memory for creating the connection).

1. Establish an MFA token in your shell. From the root of the devops repository, run `. ./utilities/issue_mfa.sh <Aws.Username> <2FA code>`. Username is your login credential not the access key Id. It should print output like "AWS Session credentials saved. Will expire in 12 hours".
   * Note the `. ` in front of this command, this is needed to source the output of this command into your existing shell.
   * `/utilities/issue_mfa.sh` runs `aws sts get-session-token` with `--serial-number` and `--token-code` parameters, then sets multiple environment variables such as `AWS_SESSION_TOKEN`.
2. From the same terminal, discover a forward proxy instance to tunnel to in whichever environment is desired, using this command `./utilities/ssm.sh fwdproxy <dev|staging>`. The command will print the available instances and prompt you to connect a shell session to one. You can Ctrl-C out of this command at this point as you don't need to connect, you just want to print the available instances.
    - Connecting can be useful for debugging connection issues or testing updated hosts or interfaces in the forward proxy.
    - `utilities/ssm.sh` runs `aws ec2 describe-instances` (using a docker image) with `--filters` and a `--query` to retrieve ec2 hostnames
4. In the same terminal run the following command to establish the SSM tunnel:
```
aws ssm start-session --target <instance_id> --document-name AWS-StartPortForwardingSession --parameters '{"portNumber":["<fwdproxy_port>"], "localPortNumber":["<local_port>"]}'
```
  * `instance_id` is the AWS instance id (like `i-0a751576c718bf730`) from step 3.
  * `fwdproxy_port` is the configured HAProxy port for the upstream service. For MHV Secure Messaging, the values are as follows:
    * dev - fwdproxy_port = **4443**
    * staging - fwdproxy_port = **not known yet**
  * `local_port` can be any unused port number on your machine below 6000. You'll need this value when configuring vets-api below. 

If successful, this command should print output like:
```
Starting session with SessionId: <User.Name>-011656eeb2a332a9a
Port 5303 opened for sessionId <User.Name>-011656eeb2a332a9a.
```
_Possible enhancement - a PR would be welcome for an `ssm-tunnel.sh` command that does the instance discovery and establishes the tunnel in one step, combining steps 3 and 4. Something like `ssm-tunnel.sh <env> <local port> <remote port>`_

### vets-api 
Once the tunnel is established, configure vets-api to use the local end of the tunnel as the configured upstream for the relevant service. 
* Configuration for ppms is in `config/settings.local.yml` (make sure it's `yml` not `yaml`).
* Add or edit (change port to what you used above):
```
ppms:
  url: https://localhost:5303
  apim_url: https://localhost:5303
  open_timeout: 45
  read_timeout: 55
  api_keys:
    Ocp-Apim-Subscription-Key: <SUBSCRIPTION KEY>
```
* Get nprod subscription key from @eselkin or @jilladams
* Restart your Rails server (must use native or hybrid setup - i.e. must start ruby with foreman not docker)
  
### Bypassing SSL hostname verification
At this point, attempting to use the tunnel connection would fail because vets-api thinks it is making a connection to `localhost` but the forward proxy (via the tunnel) is presenting an SSL certificate with its hostname. 

So, we want to configure vets-api to ignore hostname verification for outbound connections. But, we want to do that in a way that won't accidentally sneak into a pull request and make its way to our deployed environments. So we're going to add a config intializer and then set git up to ignore it.

1. Create a file `config/initializers/faraday_ssl_noverify.rb` with these contents:
```
# frozen_string_literal: true

Faraday.default_connection_options = { ssl: { verify: false } }
```

2. Append the following to `.git/info/exclude`
```
# Ignore faraday disabling of ssl verification, used for local development
config/initializers/faraday_ssl_noverify.rb
```
  
Restart vets-api to make that initializer take effect, and at that point the tunnel connection should work. 
  
## Limitations
* Since the remote end of the tunnel is configured to point to the VA.gov forward proxy, this approach only works to reach upstream services that the forward proxy is configured for. In the MHV example, the dev forward proxy points to MHV INTB, and the staging forward proxy points to MVH SYSB. At present this approach will not work to point to other MHV environments such as cloud instances. If we need to add forward proxy routes to one or more cloud instances to enable end-end development, we can do so with concurrence by the platform infrastructure team.  
