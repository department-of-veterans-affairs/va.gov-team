# Medications | Blue Sky Engineering Planning (November 2025)

[Figma | Proposed UX changes to Medications](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=5399-29467&t=WephGrZ1xIMPdtH0-4)

Anneka has iterated on UX designs, presenting them to stakeholders, gathering feedback, and refining ideas for new features for `va.gov/my-health/medications`. The documentation here lays out the necessary engineering work to execute on the three main feature proposals that have come out of Anneka's efforts.

Analysis of designs indicates that [#mhv-medications-rx](https://dsva.slack.com/archives/C04PRFEJQTY) would need to collaborate with [#mhv-meds-and-medical-records-api](https://dsva.slack.com/archives/C09QUDF8F96) in order to plan and execute the necessary API and datastore changes.

What follows are descriptions of the features being considered for Medications on VA.gov, as well as technical details necessary for implementation.

## Archive a Medication

### Designs

[Figma link](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=5399-29836&t=WephGrZ1xIMPdtH0-4)

### User Story

```text
As a Veteran
I want to archive a medication,
so that it no longer appears in my medications list.
```

### Java Backend

The `PRESCRIPTIONS` table, `ARCHIVED_DATE` column, accessible from the `mhv-rx-refill-portal-data/src/main/java/gov/va/med/mhv/rxrefill/data/model/Prescription.java` model, might be able to accomodate this.

The following API paths include this object property:

- `/activerxstoggle/{userProfileId}` (PharmacyRefillWebService)
- `/historyrxs/{userProfileId}` (PharmacyRefillWebService)
- `/historyrxstoggle/{userProfileId}` (PharmacyRefillWebService)
- `/myCompleteMedications/{userProfileId}` (MyCompleteMedicationsService)

On further analysis, the `ARCHIVED_DATE` column appears to be populated by external systems (like VistA), a legacy/planned feature that was never fully implemented, or managed through direct database updates outside the API

If we need to set `ARCHIVED_DATE`, we would need to add a new API endpoint (e.g., `PUT /prescription/{id}/archive`), implement the service layer logic to update the field, and add appropriate authorization/validation.

### Rails Backend

Similar changes would be necessary to `vets-api`, such as a `PUT/PATCH /my_health/v1/prescriptions/{id}/archive` endpoint.

## List Refill Requests (View Past Orders)

### Designs

[Figma link](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=5399-32824&t=WephGrZ1xIMPdtH0-4)

### User Story

```text
As a Veteran
I want to view my refill requests, along with their shipping statuses,
so that I can know the order status of medications being shipped to me.
```

### Java Backend

**Refill / Reorder Endpoints** for requesting a refill

- **POST /rxrefill/{rxid}:** Single VA prescription refill by its string identifier; returns a generic `Response` indicating success/failure (ESS API, module mhv-rx-refill-portal-main).
- **POST /rxrefill:** Batch refill; body is a JSON array of prescription ID strings (`List<String>`). Returns `PrescriptionsTO` with the updated/refill result set (ESS API, mhv-rx-refill-portal-main).
- **POST /refillrxs/{userProfileId}:** Batch refill tied to a user; body is a JSON array of `PrescriptionDTO` objects containing richer context (Portal API, module mhv-rx-refill-portal-api).
- **POST /refillrxstoggle/{userProfileId}?toggle=false:** Same as above but supports a `toggle` query param (default `false`) to alter selection/filter logic server‑side (Portal API, mhv-rx-refill-portal-api).

**Key Differences**

- **ESS API vs Portal API:** ESS layer (`RxAPIService`) accepts simple ID lists and can return collection transfer objects (`PrescriptionsTO`). Portal layer (`PharmacyRefillWebService`) operates per user profile and accepts full `PrescriptionDTO` objects (includes status, tracking, institution metadata).
- **Single vs Batch:** Use `/rxrefill/{rxid}` for one prescription; `/rxrefill` or `/refillrxs/{userProfileId}` for multiple.
- **Toggle Variant:** `refillrxstoggle` adds a query-time feature flag influencing server logic (e.g., inclusion rules).
- **Response Types:** ESS returns `Response` or `PrescriptionsTO`; Portal returns `List<RequestDTO>` (each `RequestDTO` capturing result of an individual refill attempt).

**Typical Request Bodies**

- `/rxrefill`:
  ```json
  ["1234567","2345678","3456789"]
  ```
- `/refillrxs/{userProfileId}`:
  ```json
  [
    {"id":"1234567","stationNumber":"123","refillable":true},
    {"id":"2345678","stationNumber":"456","refillable":true}
  ]
  ```

Currently, there are not endpoints for requesting an index of requested refills.

Approaches to solving this problem could be:
- store and query recent Rx fill/refill requests at vets-api
- store and query recent Rx fill/refill requests through mhv-api, passing through vets-api

## Select and Refill Medications

[Figma link](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=5399-29642&t=WephGrZ1xIMPdtH0-4)

```text
As a Veteran
I want to add the medications I'd like to refill to a virtual shopping cart,
so that I can choose which medications to reorder.
```

It would be possible to implement this functionality in vets-website, only. However, this would limit Rx selection to the user's current browser session.

To create a persistent shopping cart experience across browser sessions, it would be necessary to add an endpoint (`/my_health/v1/prescriptions_cart`) backed by persistent storage (redis, sql, or otherwise).
