NOTE: Many of these if not all of them, will require CAG access.

Now that the Mavenized version of var-resources 4.18.3 has been deployed to prod we can take advantage of more tools available in VAMF. I am still figuring out if we can use Zipkin for traceability at this point or if there is more configuration required.   The same VAMF AD credentials and group allow access to almost all of the resources, so if you have access to Sandbox Jenkins, for example, you should also have read only access to Production resources.  Many of these unfortunately require to be on VA network.  Hope this is helpful and please share, and if other folks need access we can assist with that.
Spring Boot Admin Staging: https://staff.apps-staging.va.gov/idp-web/v2/?redirect_uri=/sba/v1/
Spring Boot Admin Prod: https://staff.apps.va.gov/idp-web/v2/?redirect_uri=/sba/v1/
K8 Dashboard Staging (read only): https://staff.apps-staging.va.gov/k8/#!/overview?namespace=sqa
K8 Dashboard Prod (read only): https://staff.apps.va.gov/idp-web/v2/?redirect_uri=/k8/
Kibana Staging: https://staff.apps-staging.va.gov/idp-web/v1/?redirect_uri=/kibana/
Kibana Prod: https://staff.apps.va.gov/idp-web/v2/?redirect_uri=/kibana/
Sonarqube Sandbox: https://sonarqube.mapsandbox.net/dashboard?id=gov.va.vamf.service%3Avar-resources
Sonarqube Staging (var-resources not integrated here yet): https://utility.apps.va.gov/sonarqube/projects
consul repository Sandbox/Staging/Prod: https://coderepo.mobilehealth.va.gov/projects/MACM
var-resources Swagger: https://veteran.mobile.va.gov/var/VeteranAppointmentRequestService/v4/rest/
