This document describes the recommended setup for doing fullstack development of VA.gov, with a secure tunnel connection an upstream API environment such as MHV. As such, it is suitable for developing on a non-GFE.

## What we're doing
* Establishing a secure tunnel from a developer laptop to the lower environment of an upstream API provider (primarily MHV). 
* The tunnel is established using AWS Secure Systems Manager (SSM), and connects from the developer's machine to the VA.gov forward proxy. The forward proxy is an HAProxy instance that proxies connections on a local port to a configured upstream service. 
* Once the tunnel is established, then vets-api can be configured to use the local end of the tunnel (e.g. something like `https://localhost:2003` as the upstream API endpoint, allowing for full stack local development with easy access to MHV APIs. 

## Prerequisites
1. Developers will need AWS access, which can be requested by filing an [AWS Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=AWS+access+for+%5Bindividual%5D) ticket in va.gov-team. 
  * Developers should request "SSM Access to lower environment instances". The specific IAM policy needed is "SSMApplicationLowerEnvironmentAccess", which can be granted via membership in the "dsva-vfs-developers" group.
  * To access the AWS console or use the SSM command line you'll need AWS credentials including mandatory 2FA.
2. Developers need access to the [devops repository](https://github.com/department-of-veterans-affairs/devops/) to access some utility scripts for establishing the SSM tunnel. 

## Setup steps
### SSM Tunnel
#### One Time Setup
1.  Ensure AWS credentials are configured for AWS CLI usage with appropriate entries in `~/.aws/config` and `~/.aws/credentials`. Note the region for VA.gov is GovCloud west aka `us-gov-west-1`.

#### Per-Session Setup
The following steps need to be performed each development session, since the MFA session expires and the forward proxy instances periodically get redeployed with new instance IDs.  

1. Establish an MFA token in your shell. From the root of the devops repository, run `. ./utilities/issue_mfa.sh <Aws.Username> <2FA code>`. _Note the `. ` in front of this command, this is needed to source the output of this command into your existing shell._ It should print output like "AWS Session credentials saved. Will expire in 12 hours"
2. From the same terminal, discover a forward proxy instance to tunnel to in whichever environment is desired, using this command `./utilities/ssm.sh fwdproxy <dev|staging>`. The command will print the available instances and prompt you to connect a shell session to one. You can Ctrl-C out of this command at this point as you don't need to connect, you just want to print the available instances.
3. Run the following command to establish the SSM tunnel:
```
aws ssm start-session --target <instance_id> --document-name AWS-StartPortForwardingSession --parameters '{"portNumber":["<fwdproxy_port>"], "localPortNumber":["<local_port>"]}'
```
  * `instance_id` is the AWS instance id (like `i-0a751576c718bf730`) from step 3.
  * `fwdproxy_port` is the configured HAProxy port for the upstream service. For MHV, the values are as follows:
    * ~dev -> intb - fwdproxy_port = **4432**~ (TBD validating this configuration)
    * staging -> sysb - fwdproxy_port = **4432**
  * `local_port` can be any unused port number on your machine. You'll need this value when configuring vets-api below. 

If successful, this command should print output like:
```
Starting session with SessionId: <User.Name>-011656eeb2a332a9a
Port 2003 opened for sessionId <User.Name>-011656eeb2a332a9a.
```
_Possible enhancement - a PR would be welcome for an `ssm-tunnel.sh` command that does the instance discovery and establishes the tunnel in one step, combining steps 3 and 4. Something like `ssm-tunnel.sh <env> <local port> <remote port>`_

### vets-api 
Once the tunnel is established, configure vets-api to use the local end of the tunnel as the configured upstream for the relevant service. 
* MHV configuration is per-service, with separate configurations for SM/Rx/Blue button.
* vets-api also defaults to mocking MHV, so you'll need to set `mock: false` for each service.
* You will need a valid app token for the relevant MHV environment you are tunneling to. Note that Rx and SM each use their own host and app token values, while Blue button inherits the ones configured for Rx.

Update your local vets-api configuration by overriding the relevant values in `config/settings.local.yml` and restarting the Rails server. This example assumes I used `2003` as the local_port when setting up the tunnel above.
  
```
mhv:
  rx:
    host: https://localhost:2003
    app_token: <token value>
    mock: false
  sm:
    host: https://localhost:2003
    app_token: <sm token value>
    mock: false
  bb:           ## host/app_token re-used from Rx configuration.
    mock: false
```
  
## Limitations
* Since the remote end of the tunnel is configured to point to the VA.gov forward proxy, this approach only works to reach upstream services that the forward proxy is configured for. In the MHV example, the dev forward proxy points to MHV INTB, and the staging forward proxy points to MVH SYSB. At present this approach will not work to point to other MHV environments such as cloud instances. If we need to add forward proxy routes to one or more cloud instances to enable end-end development, we can do so with concurrence by the platform infrastructure team.  
