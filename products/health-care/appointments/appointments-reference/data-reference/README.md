# Appointments Data

Appointments and requests should display all [data](data-definitions.md) needed to understand them, including:
- Date and time
- Type of care
- Provider info
- Modality, which may include a physical location
- Faciilty it is scheduled through
- Whether it's VA or in the community

However, there are cases where we can't supply the necessary data:

**VistA appointments**
- We often don't get back type of care, or specific location (like building/floor/room) information.
- We don't display provider name. The VistA `provider` field is generally not accurate, or contains multiple providers, so it can't be used to reliably surface the actual provider a user would see.
- We display Clinic name/patient-friendly clinic name often contains some of the data above, but it varies from facility to facility.

**Community care appointments**
- We don't get back modality data. In place of that we just display "community care"
- We check for service type or service id in the API response, but this hasn't historically been available
- We don't get back type of care. We do get the provider's treatment specialty, which we display on the details page. But this is does not stand in for type of care

**Oracle health appointments**
- Oracle health doesn't have a concept of clinics, so we don't display clinic name

## Notes

Use this section to capture notes about appointments data that don't have a home in other documents. 

06/05/2025 - From [this thread](https://dsva.slack.com/archives/C081Y4X4W1L/p1749063335637789?thread_ts=1747754721.460969&cid=C081Y4X4W1L)
- Appointment Email notifications pull appointment data from EAS
- This is based on the understanding that EAS is the ultimate future for all API interactions with Vista
- Appt email notifications do not currently have an integration with vaos-service
