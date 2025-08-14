# How to Get SOCKS Access

1. Create a SOCKS request which can be created by selecting this [link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&projects=&template=socks-access-request.yml&title=SOCKS+access+for+%5Bindividual%5D)
    1. You'll need SOCKS access in order to create an SSH tunnel to the forward proxy and to have access to Sentry
2. Once you have SOCKS access, go to this link [here](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy) and follow the steps listed under 'Configuring SOCKS Proxy on Mac' steps 1-4.
3. How to open an SSH tunnel with SOCKS:
   ```
   // Go into devops/utilities
    cd devops/utilities
    
    // If you haven't added jq or awscli, then brew install them
    brew install jq
    brew install awscli
    
    // Generate temporary credentials for AWS 
    // Replace the User Name with your AWS user name (e.g., Jim.Frank)
    // Replace the MFA Code with the 6-digit code that you see on your MFA app for AWS
    source ./issue_mfa.sh <User Name> <MFA Code>
    
    // Get a list of the current forward proxy instances in staging
    // NOTE: The private IP addresses will be used below and q key with the enter key lets you exit
    // Example: 
    // Instance ID		Private IP	Name
    // i-00c543a63d6753411	10.247.35.112	dsva-vagov-staging-deployment-vagov-staging-fwdproxy-20240312-201722-asg
    
    ./ssm.sh fwdproxy staging

    // This command will create the SSH tunnel
    // Note: In the IP Address, replace the . with -
    // Example: 10.247.35.112 => 10-247-35-112
    ssh -L 4447:localhost:4433 ip-<IP Address>.us-gov-west-1.compute.internal
    // When it asks you "Are you sure you want to continue connecting?" type yes
    
    // If you have issues with the above command, then run one of the following SOCKS commands
    vtk socks on
    vtk socks setup
    ```

# How to Get Sentry Access

1. Go to this link [here](https://sentry.vfs.va.gov/auth/login/vsp/)
    1. Note: This link is not secure, so you may have to refresh a lot to get things to work. 
2. Once you're in Sentry, add yourself to the team called `#benefit-claim-appeal-status`