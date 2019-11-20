2:30-3:30PMET

# Access

* https://zoom.us/j/722853312
* +16465588656,,722853312# US (New York)
* +17207072699,,722853312# US (Denver)

# Agenda

* Quick housekeeping with JP: request for sharing and talks
* Charley Stran on how to locally tunnel into VAEC so you can consume services behind the VA firewall
* Alex Teal on using conditional JSON schema
* Jhonny Gonzales on with some results of a performance audit of the vets-website

# Notes

34 attendees! Started on time, ended ~ 3:00 PM

## Charley/local tunnel to VAEC

* You need to get the fwd proxy from AWS (which changes) located here: https://console.amazonaws-us-gov.com/ec2/home?region=us-gov-west-1#Instances:search=fwd;sort=desc:instanceId

* At the CLI you can create a tunnel and then use it in, for example, `settings.yml` to add a live staging endpoint to your local app.

```ssh -L 4447:localhost:4447 ip-10-247-96-83.us-gov-west-1.compute.internal```

* Lance Sanchez has an idea for using the socks proxy in a similar way.

## Alex/ conditional schema

* JSON Schema draft7 supported by the gem they're using
* The canonical example is address validation (US vs International, etc) which is exactly our example
* code can be found: 
https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/config/schemas/526.json#L76-L128

and 

https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/lib/claims_api/json_api_missing_attribute.rb 

## Jhonny/web performance analysis

* Analyzed `vets-website` for page rendering performance, has a presentation with lots of great graphs and stats
* Our homepage is >1200kb and should be about half that. Leads to slow render time, esp on mobile
* Also did some analysis of our node modules with relative size graphs for various libraries
* Part of the work front-end team is doing to measure the site and start improving it.

## Open floor

* Kelson asks Johnny what the lift is to get some of the size budget ideas implemented
* JP asked the group who knows about our Heroku environment


# Next meeting

Tuesday 12/3/2019 @ 2:30 Eastern.