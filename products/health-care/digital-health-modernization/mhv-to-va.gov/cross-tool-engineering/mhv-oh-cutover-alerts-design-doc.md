# DRAFT MHV OH Cutover Alerts Design Doc DRAFT

## Context
As facilities transition to OH we will need to begin messaging them information related to upcoming tool outages related to the transition date of their facilities. The solution we are looking to implement should take into account transition dates and facility_ids to ensure that users are seeing the appropriate messages to the facilities they are using.

To accomplish this we will implement a feature that allows us to use the pending transition date of the facility to populate the appropriated messages for users in MHV. The applications that will be impacted include Appointments, Medications, and Secure Messaging.

An overview of the **relative** timing for cutover messaging:
<img width="884" height="267" alt="image" src="https://github.com/user-attachments/assets/c5c9de55-8ea7-4c60-9f65-c0f329e2f46f" />


## Important Factors
- Each MHV tool will need its own "phase" schedule
  - For example, Appointments warns of disablement 60 days before cutover, while the rest warn of disablement 45 days before cutover.
- There are 2 types of messages:
  - Warning: "coming up, you won't be able to take actions in this tool"
  - Error: "you cannot currently take actions in this tool"
- It is unknown if the relative dates will change
  - E.g. T-45 at some point might become T-35, or T-47, etc
- The date range at which a user cannot take action in the tool must be on the alert
  - E.g. "you won't be able to take action between 01-01-2026 and 01-20-2026"

## Approach
Because of these important factors, the approach will be to handle anything that has the potential to change in the backend end (vets-api). This way, alerts can be set up on the frontends (mobile and vets-website) and if anything changes, the changes are handled in a common place.

This avoids Mobile release woes, such as lengthy deploy windows and users not seeing the changes due to out-of-cadence releases.

### Design
![alt text](images/image-2.png)

At a high level, the frontend (vets-website) requests information about the user. As part of the response, vets-api parses the migration+facility information in the AWS param store, and builds a JSON representation of the parsed, phased migration information per facility. When MHV has access to this information, each tool can use the values in redux to display the appropriate migration information per facility.

### Migration Response Object
```jsonc
[
  {
    "migrationDate": "2026-05-01",
    "facilities": [
      {
        "facilityId": 123,
        "facilityName": "Test VA Medical Center"
      }
      // ...
    ],
    "phases": {
      "current": "p1", // calculated via date parsing, not persisted
      "p0": "March 1, 2026",
      "p1": "March 15, 2026",
      "p2": "April 1, 2026",
      "p3": "April 25, 2026",
      "p4": "April 28, 2026",
      "p5": "May 1, 2026",
      "p6": "May 3, 2026",
      "p7": "May 8, 2026"
    }
  }
]
```

Relative phases are defined within vets-api as constants:
```ruby
PHASES = {
  p0: -60,
  p1: -45,
  p2: -30,
  p3: -5,
  # ...
  # pN: X
}
```

### Detailed service/parsing approach
```
facility_info = parse(aws_param_store_facility_information);

user_matched_facilities = find_all_matching(user.facilities, facility_info);

calculated_absolute_dates = phase_dates(PHASES, facility_info.migration_date);

current_phase = current_phase(Date.now, calculated_absolute_dates);

build_response(calculated_absolute_dates, current_phase);
```
