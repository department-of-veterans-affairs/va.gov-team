----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Settings.721616976.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Settings

Settings are used to provide any values that may differ between
environments.

To access these values, reference the `Settings` object, which is available
in the global application namespace. Add settings keys and values to the
`./config/settings.yml` file.

For instance, new integrations should have an `enabled`
boolean setting that will be set to `false` in the production environment until
the final review process for the integration is completed.

```
# config/settings.yml
my_external_service:
  enabled: false

# config/routes.rb
...
  # Check the settings to determine if the service is enabled
  if Settings.my_external_service.enabled
    resources :my_services
  end
...
```

# Settings in the development, staging, and production Vets.gov environments

**Settings in non-local environments are managed by the Platform team. Changes to settings (new settings, changed settings, or removed settings) must be coordinated with them.** To coordinate with the Platform team on Settings, post a request in the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) Slack channel.

## Overriding Settings

Often it may be useful to override settings in `./config/settings.yml` during development. Provide the new value to `./config/settings.local.yml`, and this value will be used instead of the default. The `./config/settings.local.yml`
file is maintained locally, and should not be committed to git.

```
# config/settings.yml
my_external_service:
  enabled: false

# config/settings.local.yml
my_external_service:
  enabled: true

# config/routes.rb
...
  if Settings.my_external_service.enabled
    # Disabled by default, but available locally
    resources :my_services
  end
...
```

## Secrets

Secret configuration settings, including internal IP addresses, access tokens, private keys, and passwords, are configured by the [name.gov] Platform team, and exposed to your integration as it's running on the deployed environment. These settings may be accessed via the `Settings` object available in the global application namespace.

You're most likely going to use this system to access credentials used to authenticate against VA services.

Provide sane defaults in `config/settings.yml` that other developers can use locally, and which are safe to provide to the public. Contact the [name.gov] Platform team to arrange secure delivery and configuration of the settings that will be used in the [name.gov] development, staging, and production environments.

```ruby
# config/settings.yml
my_exgternal_service:
  secret: my-default-secret-value
  key_path: ~/.certs/my_service_local.key

# config/settings.local.yml (installed through deployment process)
my_external_service:
  secret: my-very-secret-value
  key_path: /etc/ssl/private/keys/my_service_prod.key

# lib/my_integration/my_external_service/configuration.rb
module MyIntegration
  module MyExternalService
    class Configuration < Common::Client::Configuration::REST
      ...

      def client_key
        OpenSSL::PKey::RSA.new File.read(Settings.my_external_service.key_path)
      end
    end
  end
end

# lib/my_integration/my_external_service/service.rb
# TODO: apply Settings.my_external_service.secret to headers for the service.  Would be awesome to have a way to do this in the service configuration, or at least in an easier to understand way.
```

<hr>

Back: [Vets API Service Objects](service-objects.md)

Next: [Vets API Punch List](vets-api-endpoint-punch-list.md)
