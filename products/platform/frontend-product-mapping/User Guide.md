## Version 0.1

## Description
The current version of this product offers visibility to identity what endpoints (vets-api only) frontend applications are utilizing in their applications.  The mapping is stored in Grafana and is derived using a header (Source app name) that is appended to to each request.

## Current Limitations
The current implementation does provide insights, however the strategy that is currently in place does results in unknown and undefined requests that will be addressed in later releases.
Identifying vets-api endpoints by front end application only in V0.1

## Requirements to Use
- [SOCKS proxy setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/scripts/socks/README.md)
- Access to Grafana

## Accessing the Mapping Board

You will need to access Grafana so connect to the SOCKS proxy

The mapping document is Located [here](http://grafana.vfs.va.gov/d/zGUbwGLWz/frontend-to-backend-app-mapping?orgId=1).

## Using the Grafana Board

### Step 1 (Yellow Boxes)
1) Select the Environment
2) Select the Time Frame

### Step 2 (Green Boxes)
1) Select the specific application and view endpoints

![Grafana Board](https://user-images.githubusercontent.com/52047369/78937754-dca04d00-7a65-11ea-86b5-4b977923bd85.png)

## Future Improvements (in coming releases)
- Improve the accuracy of the mapping to vets-api from front end applications
- Include mappings to downstream services
- Introduce improved visualization to see entire map
