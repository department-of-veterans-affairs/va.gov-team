# Staging Review QA Artifacts for Mobile Maps Collab Cycle

## Test plans (by feature)

- [x] [add TTY to search results](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18480)
  - Presence of accessibility feature (not present previously)
  - [x] [Run on 1/30/2025]()
- [x] [Change tabs to segmented button group](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20153)
  - Removes react-tabs (not a USWDS compliant / VA DST component) and now uses DST segmented control component
  - [x] [accessibility and functional testing run on 2/3/2025](https://github.com/department-of-veterans-affairs/vets-website/pull/34468#issuecomment-2634214377)
- [x] [Make mobile map markers interactive](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18444)
  - Adds ability to click on markers on map
  - Makes clicked marker change visibly
  - Adds section/result below map for clicked icon
  - [x] [accessibility and functional testing 2/13/2025](https://github.com/department-of-veterans-affairs/vets-website/pull/34362#issuecomment-2658335577)

## Traceability reports
(when a regression appears know why and where and what change caused it)


## E2E tests (per feature)

### Add TTY

<details><summary>In List View (verifies TTY exists and is correct value)</summary>
<img width="1369" alt="Screenshot 2025-03-05 at 1 12 17 PM" src="https://github.com/user-attachments/assets/dfa81dd5-616a-414d-96ec-314d85952829" />
</details>

<details><summary>In Map View (verifies TTY exists and is correct value on result item below map)</summary>
<img width="1659" alt="Screenshot 2025-03-05 at 1 10 37 PM" src="https://github.com/user-attachments/assets/40cc29fa-7c96-4a29-b841-a4794129058c" />
</details>


### Change to using segmented control component

<details><summary>Test verifies that controls exist with flipper on and off and checks that behavior is maintained (and tests for all interactions with other flippers)</summary>
<img width="1654" alt="Screenshot 2025-03-05 at 1 48 00 PM" src="https://github.com/user-attachments/assets/5327c820-7e6d-43f5-bf6c-094b361e5600" />
</details>

