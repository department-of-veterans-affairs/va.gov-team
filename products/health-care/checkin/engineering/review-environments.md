## Check-in Review Environments

<aside>
👉🏽 socks needs to be enabled to access any review environments. Please follow the instructions: https://depo-platform-documentation.scrollhelp.site/getting-started/Internal-tools-access-via-SOCKS-proxy.1821081710.html to get access through and configure socks
</aside>

### Feature Toggles

To turn feature toggles off and on for a review environment, you can use the web UI. To access it, go to:

`http://<review-environment-id>-api.review.vetsgov-internal/flipper/features/`

For instance, if your review environment URL was `http://17b1d8247d73458f35bf186ed414731b.review.vetsgov-internal/`, you would go to `http://17b1d8247d73458f35bf186ed414731b-api.review.vetsgov-internal/flipper/features/`

### vets-website

Whenever a PR is created for vets-website repo, a [Jenkins](http://jenkins.vfs.va.gov/) workflow creates a review environments for the latest commit on the branch. It also pulls vets-api and content repos on the same host and starts all services as docker containers. vets-api settings are inherited from staging settings.

The deployment environment can be launched by clicking on “View deployment”. It will use the locally running vets-api which will have the latest commit from master branch of vets-api.

  ![deployment status](https://user-images.githubusercontent.com/1310524/162673493-836feed6-9b92-4e2e-99b8-c5005c599fe4.png)


### vets-api

Similarly, a PR for vets-api repo results in creation of a review environment with that particular branch of vets-api and master branch of vets-website. API requests can be made to the endpoint using curl:

```
curl -v --proxy socks5h://127.0.0.1:2001 http://<env_id>-api.review.vetsgov-internal/check_in/v2/sessions/asdf
```

or using insomnia (after adding socks proxy):

   ![Insomnia Settings](https://user-images.githubusercontent.com/1310524/162674005-bfe682b6-54e4-4685-8415-47b2c2120ddb.png)


Note: vets-api in review instances runs in Rails 'development' mode, which means that [caching is disabled by default](https://github.com/department-of-veterans-affairs/vets-api/blob/5852e0abd98848aa89aaf0644b4588b90dfb554d/config/environments/development.rb#L26). To enable it (for session management etc):
1. ssh into the host
2. `docker exec` into the vets-api container,
3. either run `rails dev:cache`, or `touch tmp/caching-dev.txt`


### vets-website PR branch to vets-api PR branch

This is a bit hacky but doable. The idea is to ssh into the EC2 instance which hosts the PR environment (either vets-website or vets-api), git checkout the desired branch, and restart the containers.

1. Find the EC2 host from jenkins console log (search for `ssh at` in the logs)
    <img width="698" alt="Deployment logs" src="https://user-images.githubusercontent.com/1310524/162674744-3f9830b3-babd-487e-84d6-19393b0ef172.png">
    
2. ssh into the host and cd into vets-api (or vets-website if that needs to point to a different branch):
    
    ```
    ssh <host ip>
    > cd vets-api
    ```
    
3. [Fetch the origin](https://stackoverflow.com/a/67886960/2340681) and checkout the desired branch (this is needed because during deployment, a shallow clone is done instead of fetching all changes):
    
    ```
    git  remote  set-branches  --add  origin  <newbranch>
    git  fetch  origin
    git  checkout  --track  origin/<newbranch>
    ```
    
4. Restart containers: `docker-compose -f docker-compose.review.yml restart`
5. Now, you can setup an appointment for check-in or pre check-in in staging and use the review environment to test the desired functionality.
    
    

## Pointing local vets-api to staging LoROTA and CHIP

1. Install nginx
    
    on macs: `brew install nginx`
    
2. Setup nginx config (located in `/usr/local/etc/nginx/nginx.conf`) to proxy requests on specific ports for CHIP and LoROTA to staging fwdproxy:
    
    ```
    server {
          listen 4489;
          server_name  localhost;
          ssl_certificate      <vets-api>/config/certs/vetsgov-localhost.crt;
          ssl_certificate_key  <vets-api>/config/certs/vetsgov-localhost.key;
          underscores_in_headers on;
    
          location / {
            proxy_pass https://localhost:4489;
            proxy_redirect https://localhost:4489/ $scheme://$host:443/;
          }
        }
    
        server {
          listen 4482;
          server_name  localhost;
          ssl_certificate      <vets-api>/config/certs/vetsgov-localhost.crt;
          ssl_certificate_key  <vets-api>/config/certs/vetsgov-localhost.key;
          underscores_in_headers on;
    
          location / {
            proxy_pass https://localhost:4482;
            proxy_redirect https://localhost:4482/ $scheme://$host:443/;
          }
        }
    ```
    
3. Start an SSH tunnel to staging fwdproxy. The IP address of fwdproxy can be found in AWS EC2 instances by [searching](https://console.amazonaws-us-gov.com/ec2/home?region=us-gov-west-1#Instances:v=3;instanceState=running;search=:staging-fwdproxy) for `staging-fwdproxy`. 
    1. `ssh -L 4489:localhost:4489 -L 4482:localhost:4482 <staging fwdproxy Private IP DNS>`
4. Update vets-api settings.local.yml to point to local proxy. Other values (for both LoROTA and CHIP configs should match the values for staging).
    1. Lookup the values by checking the [staging config](https://github.com/department-of-veterans-affairs/devops/blob/3048159fe852b5520f232b47e6331bf511d9ee36/ansible/deployment/config/vets-api/staging-settings.local.yml.j2#L777) file in devops repo.
    2. You can also lookup the key/values for review envs in [config](https://github.com/department-of-veterans-affairs/devops/blob/3048159fe852b5520f232b47e6331bf511d9ee36/ansible/roles/review-instance-configure/vars/settings.local.yml#L40) (which point to staging as well).
    3. Get the LoROTA key from AWS param store (as specified [here](https://github.com/department-of-veterans-affairs/devops/blob/3048159fe852b5520f232b47e6331bf511d9ee36/ansible/deployment/config/vets-api-server-vagov-staging.yml#L325)) and save it in your .ssh folder, and point to it in LoROTA config.
    
    ```
    chip_api_v2:
        url: https://localhost:4482
        base_path: preprod
        tmp_api_user: <api_user>
        tmp_api_id: <api_id>
        tmp_api_username: <api_username>
        service_name: CHIP-API
        mock: false
        key_path: ~
        redis_session_prefix: check_in_chip_v2
        timeout: 30
    lorota_v2:
        url: https://localhost:4489
        base_path: stage
        api_id: <api_id>
        api_key: <api_key>
        service_name: LoROTA-API
        mock: false
        key_path: <lorota_key>
        redis_session_prefix: check_in_lorota_v2
    ```
    
5. Change any clients in the vets-api code to not verify ssl:
    1. `Faraday.new(url: url, ssl: { verify: false }) do |*conn*|`
6. Start vets-api locally
    1. At this point, any requests made to your local vets-api endpoints that use CHIP and/or LoROTA services will be proxied to staging instances.
7. You can also makes calls to CHIP and LoROTA directly (you would need proper credentials - api key and token). For example:
    
    ```
    curl -v -k --location --request POST 'https://localhost:4482/preprod/token' \
    --header 'Content-Type: application/json' \
    --header 'x-apigw-api-id: <api_id>' \
    --header 'Authorization: Basic <chip token>'
    ```
