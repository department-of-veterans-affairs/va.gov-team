---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Reverse Proxy

## What it is?

The vagov-revproxy service is a reverse proxy designed to accept traffic coming from the Trusted Internet Connection (TIC) and direct that traffic towards private S3 resources (static content, ie. css, images, etc.).

Static site content is housed within a bucket or multiple buckets (AWS S3) for the respective environment of the traffic (sandbox, dev, staging, or prod).

Our reverse proxy nodes use OpenResty®, an enhanced version of Nginx core.

![image](https://user-images.githubusercontent.com/55560129/109044121-08d5b400-76a0-11eb-83d9-910700ec12de.png)

## Configuration

The deployment of the reverse proxy configuration:

- [sandbox](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov-sandbox.yml#L77-L81)
- [dev](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov-dev.yml#L85-L89)
- [staging](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov-staging.yml#L77-L81)
- [prod](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov-prod.yml#L78-L82)

Each deployment calls the `Nginx` file [nginx_website_server](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_website_server.conf.j2#L17) which passes the corresponding properties depending on each environment. It also calls [nginx_revproxy_redirects](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_revproxy_redirects.conf.j2) to handle the port 80/443 requests

Nginx conf files containing the properties for each environment:

- [sandbox](url)
- [dev](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/nginx_config_vagov-dev.yml)
- [staging](url)
- [prod](url)

## Proxy headers

Our current nginx config only provides for proxying to s3 buckets that have the same name as the site for which they are being proxied. However, in order to use a specific S3 bucket a new proxy header was created to handle this by not overriding the host header for s3 requests.

These new headers can be found [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/files/proxy-headers-s3.conf).

## Next steps

- Write code to update reverse proxy to use separate S3 buckets
- Have DevOps review reverse proxy updates
- Merge and deploy reverse proxy updates to staging
- Monitor change in staging
- Update prod

## Testing & Rollout (Dev)

- We will need to add the new buckets to the dev [config](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/nginx_config_vagov-dev.yml#L5-L12) file so it can be used by `nginx`.
- We could use 2 new variables for `content` and `apps` like this:
```
  content_proxy_url: http://content.dev.va.gov.s3-website-us-gov-west-1.amazonaws.com
  apps_proxy_url: http://apps.dev.va.gov.s3-website-us-gov-west-1.amazonaws.com
```

- After that, we will add update all instances of `default_proxy_url` in the [nginx_website_server](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_website_server.conf.j2) config file with the 2 new variables (`content` and `apps` buckets) respectively. 
- we could also use something like this:
```
    {% if web_server.content_proxy_url %}
        proxy_pass {{ web_server.content_proxy_url }}{{ route.path }}/index.html$is_args$args;
    {% else %}
        proxy_pass {{ web_server.default_proxy_url }}{{ route.path }}/index.html$is_args$args;
    {% endif %}
```

## Rollback (dev)

Once content and apps have been deployed to dev using the `content_proxy_url` and `apps_proxy_url` variables in the [nginx_website_server](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_website_server.conf.j2) config file. It will be easier to rollback those changes by just commenting out those variables in the [nginx_config_vagov-dev.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/nginx_config_vagov-dev.yml#L8-L9) file.

```
  # content_proxy_url: http://content.dev.va.gov.s3-website-us-gov-west-1.amazonaws.com
  # apps_proxy_url: http://apps.dev.va.gov.s3-website-us-gov-west-1.amazonaws.com
```

## Important Note

We check S3 first to see if content exists first, and if not, serve it from EWIS infrastructure.

- [EWIS proxy details](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/VA-Systems/EWIS/ewis-proxy-details.md)

## Links

- [Reverse proxy initial clean up](https://github.com/department-of-veterans-affairs/devops/pull/7262)
- [Files, templates, and variables leveraged by all environments](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/deployment/config/revproxy-vagov)
