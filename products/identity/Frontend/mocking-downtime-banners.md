# Mocking banners

## Summary

Useful knowledge on how to mock downtime and maintenance banners for the sign-in modal and page.

## Goal

- To not mock downtime or maintenance banners
- To not have to mess with vets-api

## Setup

This setup is required for either maintenance banners or downtime banners.

1. In vets-website, navigate to the `DowntimeBanner.js` component in our authentication/components
2. Comment out the `isLocalhost` variable 
3. Create another `isLocalhost` variable just below and set it to **false**
    1. ^ This exists because the `v0/backend_statuses` api doesn’t work locally due to its PagerDuty dependency
4. Ensure your **vets-api** is NOT running as we are going to spin up a Node server to visually test.

## Node mock server setup

1. Copy the package.json below into a new folder (outside of vets-website)

```json
{
  "name": "mock-api__downtime-banner",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "date-fns": "^3.6.0",
    "express": "^4.18.2",
  }
}
```

2. Run `npm install` or `yarn` to install dependencies
3. Create your `index.js` file and paste the basic Express server setup

```jsx
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:3001", credentials: true }));

app.get("/v0/backend_statuses", async (req, res) => {
  // Comment out line below to return an error, or that vets-api is down
  // res.status(500).send("Something broken"); // No response from server
  
  // This will return the mocked JSON responses
  return res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

4. Install if you have not already `nodemon` this will ensure your Node server will auto-refresh when making updates
5. Run `npm run start` or `yarn start`

## Mocking responses

You can do 1 of 2 things to mock responses. Navigate to VA.gov, open up DevTools, and copy the network response from the `v0/backend_statuses` endpoint and paste it in OR use the following response as a guide.

> Note: I have intentionally left out services that are not a dependency for the sign-in modal / page.

    
<details>
  <summary>Mocked JSON response <code>v0/backend_statuses</code></summary>

  ```javascript
    const response = {
      data: {
        id: "",
        type: "backend_statuses",
        attributes: {
          reportedAt: "2025-02-06T16:30:00.000+00:00",
          statuses: [
            {
              service: "DS Logon",
              serviceId: "dslogon",
              status: "active",
              lastIncidentTimestamp: "2025-01-31T21:57:39.000+00:00",
            },
            {
              service: "ID.me",
              serviceId: "idme",
              status: "active",
              lastIncidentTimestamp: "2024-12-24T18:43:36.000+00:00",
            },
            {
              service: "Login.gov",
              serviceId: "logingov",
              status: "active",
              lastIncidentTimestamp: "2025-01-30T18:27:47.000+00:00",
            },
            {
              service: "Master Persons Index (MPI)",
              serviceId: "mvi",
              status: "active",
              lastIncidentTimestamp: "2025-02-02T03:10:51.000+00:00",
            },
            {
              service: "My Health eVet (MHV)",
              serviceId: "mhv",
              status: "active",
              lastIncidentTimestamp: "2025-01-24T04:57:53.000+00:00",
            },
            {
              service: "SSOe",
              serviceId: "ssoe",
              status: "active",
              lastIncidentTimestamp: null,
            },
            {
              service: "SSOe OAuth",
              serviceId: "ssoe_oauth",
              status: "active",
              lastIncidentTimestamp: "2023-05-04T20:27:57.000+00:00",
            },
          ],
          maintenanceWindows: [
            {
               id: 1107,
               externalService: "evss",
               startTime: "2025-02-09T00:00:00.000Z",
               endTime: "2025-02-10T00:00:00.000Z",
               description: "",
            },
            {
              id: 1106,
              externalService: "idme",
              startTime: "2025-02-05T20:00:00.000Z",
              endTime: "2025-02-07T00:00:00.000Z",
              description: "",
            },
          ],
        },
      },
    };
```
    
</details>
    

### Mocking a service being down

- In the `statuses` array, update the `status` key to something other than `active`

### Mocking multiple services being down

- In the `statuses` array, update multiple `status` keys to something other than `active`

### Mocking a maintenance window

- In the `maintenanceWindows` array, we’re going to be updating the `startTime` and `endTime`
- Import the `addHours` and `formatISO` functions from `date-fns`
    - `startTime: new Date().toISOString()`
    - `endTime: formatISO(addHours(new Date(), 2))`
