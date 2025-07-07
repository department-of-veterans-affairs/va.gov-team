# Questions

- [ ] Can we leverage the existing save-in-progress?
  * There may be an issue with saving a form per-user-per-appointment
- [ ] What do the endpoints for adding different expense types look like?
- [x] For SMOC, the API takes care of calculating the mileage. We only send it a claim tied to an appointment with an expense that just has the attribute "mileage, round-trip" on it. Is there any reason we can't do this for complex mileage claims? - yes, expenses have user input added to them
- [ ] We may be able to optimize the Veteran experience through creating a complex claim by saving expenses to our DB. Is there any reason good or bad to create a claim w/in BTSSS? for example, will it eventually be purged? What kind of storage costs are associated to
