# My VA frontend

Last updated: March 28, 2023 — still WIP 🚧

The React/Redux frontend for the VA.gov MyVA. Modeled after [Profile's README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/frontend-getting-started.md).

- [Purpose and overview](#purpose-and-overview)
- [Developing locally](#developing-locally)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)

# Purpose and overview

The authenticated experience team wants to work towards a concierge-like VA experience, one that puts veterans' and other customers at the center of the interaction. 

My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates.

Sources: 
- [Authenticated Experience team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)
- [Product outline: My VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)


# Developing locally

1. Make sure you have the `vets-website` repo cloned and installed. I prefer `yarn`, but you can also use `npm`.
```
git clone git@github.com:department-of-veterans-affairs/vets-website.git

cd vets-website/

yarn install
```

2. Start local server:
```
yarn watch --env entry=dashboard
```

3. Include mocked responses:
```
yarn mock-api --responses src/applications/personalization/dashboard/mocks/server.js
```

4. To simulate logged in status, copy and paste the following into your browser devtools:

```
localStorage.setItem('hasSession', true)
```

Visit [https://localhost:3001/my-va](https://localhost:3001/my-va).

# Testing

## Unit tests

## e2e tests

## Test coverage

# Troubleshooting

# Resources

- [Authenticated Experience team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)
- [Product outline: My VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)
