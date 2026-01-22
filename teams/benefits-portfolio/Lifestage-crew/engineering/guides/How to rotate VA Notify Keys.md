## How to rotate VA Notify Keys

### Context

Every 180 days, our team has been tasked with rotating the AWS keys for VA Notify emails.  Currently this only applies to the pension/burials team because of the separate service group our templates fall-in.

The "va.gov" service in VA Notify is a generic bucket for many groups and is yet to be addressed.

The VA Notify team supplied new keys via va.gov email.  

### How should I change the key?

The [official documentation](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/va_notify#api-key-structure) for the key structure was a bit confusing for me, but essentially what they will give you is the last part.  

When you go on AWS param store, you will see a long name like this and you might not know what to swap out.

`vagovapikey-0bb13870-11c0-4df8-8b16-48dbad32f3a6-7fb9418c-6ac8-4180-9eb7-26d7ebaa9a08`

- The first part is just a string that really could be anything.  
- The next part is a guid which is the service ID.  The service ID can be found on VA Notify's dasboard, but generally you don't need to change this.  
- The last part is the API key itself, and the piece you need to change.

### How To change the key

1.  Login to https://dsvagovcloud.signin.amazonaws-us-gov.com/console
2.  Go to Systems Manager
3.  Click on Parameter Store (on left nav)

The three keys we care about are: (sandbox and staging use the same key).
For example:

- /dsva-vagov/vets-api/sandbox/env_vars/vanotify/services/21p_527ez/api_key
- /dsva-vagov/vets-api/dev/env_vars/vanotify/services/21p_527ez/api_key
- /dsva-vagov/vets-api/prod/env_vars/vanotify/services/21p_527ez/api_key


Find the key you'd like to change, click on it, then edit and change it.



## Testing

Monitor the dashboards for the emails:

https://vagov.ddog-gov.com/dashboard/ms2-cif-h3q/benefits-pension-527-emails?fromUser=false&refresh_mode=sliding&from_ts=1758896854848&to_ts=1758898654848&live=true
