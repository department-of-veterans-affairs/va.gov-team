# Delivery Leads Meeting Agendas/Notes/Questions

## 04/23/2024
- [ ] We love the new swagger doc!!
  - [ ]  Some of the endpoint names in list from Blaise don't seem to match up to the swagger doc. What do these endpoints map to in the swagger doc?
    - [ ] `/AddAttachment`
    - [ ] `/GetExpenseTypes`
    - [ ] `/GetExpenseItems`
    - [ ] `/AddMileageExpense` - this seems to map to the broader `/api/v1/claims` endpoint, is that right?
    - [ ] `/GetAnnouncement` - pulls portal maint announcments
  - [ ] Endpoint clarifications:
    - [ ] `/api/v1/auth/system-access-token` - what is this one used for?
      - [ ] Mobile check in - supporting low auth
    - [ ] `/api/v1/claims/by-contact/{contactId}` - this doesn't appear to have one of the fields we were hoping: `clinicName`. API team workign on adding clinic name, working on refactoring to pull contact ID from tokn
- [ ] Endpoint priorities
- [ ] Deployed status
  - [ ]  Is everything in the list Blaise provided deployed to dev and preprod except the claims summary endpoint (``)?
    - [ ]  yes, in dev, not yet preprod
  - [ ]  Is everything in the swagger doc deployed to dev and preprod?
    - [ ] Sample endpoints and probably tokens - Tim H will check

Notes:
- List from Blaise is the more recently worked on stuff
- Swagger doc includes some of endpoint VA.gov team might need goign forward
- https://va-veis-nprod-apim.nprod.veis.va.gov/api/btsss/travelclaim is preprod
