----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Backend-Endpoint-Tutorial.1886978053.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Backend Endpoint Tutorial

Creating a service backend endpoint for va.gov is a common task for developers. Due to the complexity of integrating with legacy VA REST or SOAP applications we've developed a pattern for making these connections. As much of the process is automatable we've created a Rails generator that creates an example 'Hello, World!' endpoint for you.

## Generating an Endpoint

Generating an endpoint is similar to using the built in Rails generators that create models, controllers, or migrations for you. The first step is to ensure you're in the root directory of the `vets-api` project. Froom there you'll run `bundles exec rails va new [name]`. The `[name]` option is the name of the Rails Engine or module that the endpoint will live within. It's also used as a Ruby namespace for the classes that are generated. If your module's name is 'foo' you'd run the command below to generate an endpoint:

`bundles exec rails va new foo`

### What gets generated

An endpoint on va.gov consists of a controller, model, serializer, and service classes. In addition some configuration files are generated. Other existing configuration files, such the main `config/routes.rb` file, are modified. When the command runs the first section of the output lists the generated and modified files:

```bash
create  modules/foo/app/controllers/foo/v0/foo_controller.rb
create  modules/foo/app/controllers/foo/application_controller.rb
create  modules/foo/app/models/foo/resource.rb
create  modules/foo/app/serializers/foo/foo_serializer.rb
create  modules/foo/app/services/foo/configuration.rb
create  modules/foo/app/services/foo/service.rb
create  modules/foo/lib/foo/engine.rb
create  modules/foo/lib/foo/version.rb
create  modules/foo/lib/tasks/foo_tasks.rake
create  modules/foo/lib/foo.rb
create  modules/foo/bin/rails
 chmod  modules/foo/bin/rails
create  modules/foo/config/routes.rb
create  modules/foo/foo.gemspec
create  modules/foo/Rakefile
create  modules/foo/Gemfile
create  modules/foo/README.rdoc
insert  Gemfile
 route  mount Foo::Engine, at: '/foo'
append  config/settings.yml
   run  bundle install from "."
```

Note that you may need to scroll up within the terminal to see the list of files. The bundle command is run for you to ensure the module is installed in the host application, and its output is bookended by the generator's messages.


