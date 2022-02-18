# MHV-on-VA.gov API Design

This document describes the intended design for how frontend health features on VA.gov will interact with the backing APIs and services provided by MHV. 

## Overview

* Health features are currently implemented on MHV (myhealth.va.gov) via a JQuery frontend that interacts with J2EE-based APIs. 
* The intent is to migrate the frontend implementation of these features to VA.gov (hosted at www.va.gov, implemented in React and deployed alongside the rest of the VA.gov frontend). 
* **In order to best align with VA.gov implementation standards, we should build an API proxy/facade for the health feature APIs in the VA.gov backend (vets-api, implemented in Ruby on Rails).** 

## VA.gov API Façade
VA.gov integrates with a large number of upstream systems at VA (on the order of 20+). But all _frontend_ applications interact with vets-api, and vets-api acts as a façade in front of those upstream systems. This provides a number of benefits:
* It insulates frontend development from differences in data format (XML vs. JSON vs. whatever else) and error behavior (200 HTTP response with an error payload, etc). Vets-api exposes consistent RESTful JSON API resources and predictable error responses. 
* It insulates frontend development from latency/availability issues in upstreams via a circuit breaker mechanism. 
* It insulates frontend development from the widely varying authentication mechanisms that upstream systems use. 
* It makes the effective API surface area available at a single public domain - api.va.gov  - which simplifies enforcing policies for things like CORS/CSRF. 
* It provides an easy way to monitor all upstreams for availability/latency/error rate because all requests are proxied through a single system. 
* There are some developer conveniences like downtime notifications for upstream systems built into vets-api. 

![VA.gov facade architecture](assets/Health%20API%20Arch%20General.png)

## Why not call MHV APIs directly?
The downside of this API facade pattern, is that the API facade has to be implemented and maintained. Currently that means writing a set of Ruby on Rails API controllers, and an adapter to invoke the upstream system's API. 

If the upstream system already exposes a RESTful JSON API, is generally reliable and performant, and is available at a public URL, then the API facade pattern is somewhat less critical. It largely becomes a pass-through if no major reformatting of API requests/responses is required. 

However, we recommend sticking with this pattern for the migrated MHV features. 
* There is existing vets-api code from previous VA.gov-MHV integration work to draw upon. This code is known to work reliably for recently-touched features like secure messaging (thanks to the flagship mobile app integration). 
* Authentication for MHV APIs still presents some complexity that can be absorbed by this facade layer (and is already implemented, as above). The alterntive would be to wire MHV's session authentication mechanism into the VA.gov frontend and maintain two parallel API session cookies. Not impossible, but likely to run into some tricky corner cases around session liveness/expiry.
* A direct-to-MHV-API pattern would be exceptional, rather than predictable, for staff operating VA.gov who need to be aware of system-wide behavior. 
* Latency introduced by this extra API hop is trivial relative to latency introduced by the TIC and by processing the requests themselves.

## How much Rails implemention is involved?
You can see the vets-api implementation for secure messaging here:
* API controllers: https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/controllers/v0 (see `messages_controller.rb`, `folders_controller.rb`, `drafts_controller.rb`) 
* Upstream adapter: https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/sm


![VA.gov facade for MHV](assets/Health%20API%20Arch%20MHV.png)

There is some additional utility code, including the (existing, working) code for establishing and maintaining an MHV API session token. Some of this may warrant revisiting/refactoring as we adjust the behavior around MHV account identifiers. 

Appointment scheduling (via VAOS) and secure messaging proxy code in vets-api is up to date and operational in production. The amount of backend implementation work to update the mothballed prescription refill code, and to update the mothballed health record code (especially to include some of the "search my records" features), should be accounted for but does not present a meaningful implementation risk. 
