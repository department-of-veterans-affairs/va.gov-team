# Delivery Leads Meeting Agendas/Notes/Questions

## 04/23/2024
- [ ] We love the new swagger doc!!
  - [ ]  Some of the endpoint names in list from Blaise don't seem to match up to the swagger doc. What do these endpoints map to in the swagger doc?
    - [ ] `/AddAttachment`
    - [ ] `/GetExpenseTypes`
    - [ ] `/GetExpenseItems`
    - [ ] `/AddMileageExpense` - this seems to map to the broader `/api/v1/claims` endpoint, is that right?
    - [ ] `/GetAnnouncement`
  - [ ] Endpoint clarifications:
    - [ ] `/api/v1/auth/system-access-token` - what is this one used for?
    - [ ] `/api/v1/claims/by-contact/{contactId}` - this doesn't appear to have one of the fields we were hoping: `clinicName`.
- [ ] Endpoint priorities
- [ ] Deployed status
  - [ ]  Is everything in the list Blaise provided deployed to dev and nonprod except the claims summary endpoint (``)?
  - [ ]  Is everything in the swagger doc deployed to dev and nonprod?
