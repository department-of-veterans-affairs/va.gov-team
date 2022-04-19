# RFC: Enable SSL in Dev

- Date: 2018-10-30

## Background

We don't use SSL in our local development, but it might be helpful for some troubleshooting. We recently upgraded our version of Puma, which makes it possible to configure SSL directly within Puma.  At the same time, `mkcert` makes it much easier for devs to create self-signed certificates.
[https://github.com/department-of-veterans-affairs/vets-api/pull/2387](https://github.com/department-of-veterans-affairs/vets-api/pull/2387)

## Motivation
We'd like to troubleshoot in development with an environment that is as close to production as possible. 

## Design
[mkcert](https://github.com/FiloSottile/mkcert) is a relatively new project that makes it much easier for the average dev to generate self-signed certificates signed by their own personal root Certificate Authority. It can be installed by homebrew or other package managers on Linux/Windows. We would install `mkcert` and generate certificates as part of the vets-api install process. 

Our most recent upgrade of Puma has made it possible to pass in environment-specific binds that allow us to configure development SSL. One notable change is that it would require us to start the server with `rails puma` rather than `rails server` in order for puma to read the config.  Quite possibly we could consider this beneficial as it could allow us to quickly change between http and https.

## Risks
* It's not been tested on a Windows machine.  
* Chrome “sticks” to `https` so you have to go to chrome://net-internals/#hsts and `Delete domain security policies` in order to stop using SSL, which is frustrating
* It's not yet tested with vets-website but it appears that it's possible to start [webpack with SSL](https://webpack.js.org/configuration/dev-server/#devserver-https) and use the same certificates generated for vets-api.

## Alternatives
An equally good idea would be to set up Nginx in front, as we do for production/staging.  However, it would require more changes and effort to set up. 

Another equally reasonable alternative is to change nothing. 
