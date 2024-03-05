# NOK/EC Load Estimates

The VA Profile team requested volume estimates for API traffic.

- Peak transactions per second (read)
- Peak transactions per second (write)
- Average transactions per second (read)
- Average transactions per second (write)

## Estimates

|      | Read   | Write  |
| ---- | ------ | ------ |
| Peak | 0.78/s | 0.08/s |
| Avg  | 0.21/s | 0.02/s |

## Data Sources

### `GET /v0/profile/personal_information`

This is one of the endpoints that is requested when a user visits `va.gov/profile`. It should give us a good estimate of read operations for NOK/EC data.

- Peak read: 2810/hr, 0.78/s [[1]]
- Avg read: 750/hr, 0.21/s [[2]]

for logs over the past 4 weeks (ending Dec 13, 2023).

### `{POST,PUT,PATCH} /v0/profile/telephones`

I picked this endpoint as an example of one field that can be written to within `va.gov/profile`. The NOK/EC feature will be located within the `va.gov/profile` section of the website, and I expect it to receive similar visibility and user interaction.

- Peak write: 284/hr, 0.079/s [[3]]
- Avg write: 70/hr, 0.02/s [[4]]

for logs over the past 4 weeks (ending Dec 13, 2023).

### `POST /v0/health_care_applications` (10-10EZ Form Submissions)

This information is being provided because it was requested. Reads for the 10-10EZ are difficult to quantify, since multiple endpoints are involved in bringing together the necessary data to complete the form.

- Peak write: 3412/day, 142/hr, 0.04/s [[5]]
- Avg write: 798/day, 33.3/hr, 0.01/s [[5]]

for metrics recorded over the past 3 months (ending Dec 13, 2023).

[1]: images/v0-profile-personal-information-peak-reads.png
[2]: images/v0-profile-personal-information-avg-reads.png
[3]: images/v0-profile-telephones-peak-writes.png
[4]: images/v0-profile-telephones-avg-writes.png
[5]: images/hca-writes.png
