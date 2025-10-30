## How to rotate VA Notify Keys

### Context
Every 180 days, our team has been tasked with rotating the AWS keys for VA Notify emails.  Currently this only applies to the pension/burials team because of the separate service group our templates fall-in.

The "va.gov" service in VA Notify is a generic bucket for many groups and is yet to be addressed.

The VA Notify team supplied new keys via va.gov email.  

### How To
1.  Login to https://dsvagovcloud.signin.amazonaws-us-gov.com/console
2.  Go to Systems Manager
3.  Click on Parameter Store (on left nav)

The three keys we care about are: (sandbox and staging use the same key)

- /dsva-vagov/vets-api/sandbox/env_vars/vanotify/services/21p_527ez/api_key
- /dsva-vagov/vets-api/dev/env_vars/vanotify/services/21p_527ez/api_key
- /dsva-vagov/vets-api/prod/env_vars/vanotify/services/21p_527ez/api_key


Find the key you'd like to change, click on it, then edit and change it.



## Testing

Monitor the dashboards for the emails:

https://vagov.ddog-gov.com/dashboard/ms2-cif-h3q/benefits-pension-527-emails?fromUser=false&refresh_mode=sliding&from_ts=1758896854848&to_ts=1758898654848&live=true
