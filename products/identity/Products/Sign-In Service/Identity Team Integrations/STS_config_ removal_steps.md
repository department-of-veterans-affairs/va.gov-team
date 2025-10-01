# STS config removal steps

- [ ] Email sent from product owner and lead engineer of the product over VA email confirming that we are approved to remove the connection  
- [ ] Retire all certificates from Venafi related to the config  
- [ ] Update documentation  
      - [ ] [Cert rotation doc](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Security/Rotate_certs.md)  
      - [ ] [Datadog config tracker](https://vagov.ddog-gov.com/dashboard/i72-yy8-i97/identity-sts-performance?fromUser=false&refresh_mode=sliding&from_ts=1756742148715&to_ts=1759334148715&live=true) (remove the listing from the text box of configs on the right side)  
      - [ ] [STS config documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Identity%20Team%20Integrations)  
- [ ] Remove the configs from the vets-api backend (what other information can we list here to help guide someone)  
- [ ] Signoff from the Identity product manager assigned to STS that the above items were completed

Note: all of the above items and details about their completion should be recorded within an issue and linked when making the code changes on vets-api.
