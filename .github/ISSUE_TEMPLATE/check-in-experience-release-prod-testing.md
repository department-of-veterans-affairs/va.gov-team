---
name: Check In Experience Test in Production
about: For Check In Experience to test in a production environment
title: "[FE] Test in Production"
labels: backend, frontend, HCE-Checkin
assignees: ''

---

## Why test in prod?
From time to time we encounter new features that work differently in prod than they do on stage. One example of this is when we need to talk to other systems and have not previously connected to the prod version of the system. It is also important for new big features to be tested in prod so we can see how things look with real data.

## How to test in prod
Right now we have two options.

### Option #1: 
Ask for help from Robert Tow. Robert is a veteran that works for the VA who can get test appointments secheduled in off hours at a St. Louis clinic. He also does have real appointments, so that needs to be considered based on what kinds of features we are testing. Robert can be contacted at Robert.Tow@va.gov or via MS teams. The appointments he has used in the past are at station 657, division 657GB, and clinic ien 19125.

### Option #2
Ask for help from Shawn Adams. Shawn has his cell phone number associated with multiple accounts across a few stations. These are test users at test clinics in the prod vista enviroment. Shawn can't create the appointments himself and needs to request them to be made. Shawn is easy to reach via slack.

## Future opptortunities
TBD

## Tasks
- [ ] Determine a date needed for prod testing based on the target release/pilot date
- [ ] Reach out to Robert Tow in MS Teams or Shawn Adams in slack to find out his day & time availability near the target prod testing date
- [ ] Schedule a meeting for 5:30 Eastern Time (or another time that has been cleared to be safe for the test) on the target prod testing date and invite
      - All frontend engineers
      - All backend engineers as optional
      - All appropriate VA stakeholders
      - Product Manager
      - Delivery Manager

## Meeting Time
- [ ] Turn on feature flag
- [ ] Run through test cases (documented or not)
- [ ] Turn off feature flag
- [ ] Write summary in slack
