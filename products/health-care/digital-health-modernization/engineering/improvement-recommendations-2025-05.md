# Improvements recommended by MHV Cartographers – 2025

## Background

The MHV Cartography engineers, at the direction of OCTO engineers, investigated the possibility of a [Unified My HealtheVet Single Page Application (SPA)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93854) that could improve the veteran experience of the MHV portal by reducing the amount of time spent waiting for an individual SPA to load.

While the Cartographers ultimately recommended against a Unified SPA due to overall performance concerns, they learned about multiple ways the individual applications might improve performance of individual applications. Some of these changes would have been prerequisites for "unifying" any number of applications, given the incompatibilities of certain technical implementations (e.g., routing).

Cartographers recommend the following improvements be evaluated and implemented by MHV application teams.

## Opportunities for Improvement

### Lazy loading

As of [v16.6.0](https://legacy.reactjs.org/blog/2018/10/23/react-v-16-6.html), React has supported dynamic imports and [lazy loading components](https://17.reactjs.org/docs/code-splitting.html#reactlazy). This means that applications can defer loading code or components in order to decrease bundle sizes and speed up initial load times. The frontend is currently using React v17.0.2.

Multiple MHV applications are currently using lazy loading in some capacity, which is great. Given multiple applications use client-side PDF rendering, and the code enabling that is large, lazy-loading PDF capabilities only when needed/used is a prime example. Teams should consider overall bundle size and consider what code/components might be loaded lazily, with the understanding that there is a balance between reducing bundle size and the number of times a veteran is waiting for code bundles to load.

### React Router upgrade, migrate to Data APIs

React Router has added performance-enhancing features in v6 and v7. Currently `vets-website` uses react-router v5 by default, but v6 is available through [react-router-dom-v5-compat](https://www.npmjs.com/package/react-router-dom-v5-compat), which has [an upgrade guide](https://github.com/remix-run/react-router/discussions/8753). Per the migration guide:

> React Router v6 has been rewritten with React Hooks, significantly improving bundle sizes and composition. You will need to upgrade to 16.8+ in order to migrate to React Router v6.

#### Data APIs and `loader` functions

React Router v6.4 added [new hooks-based Routers](https://reactrouter.com/6.30.1/routers/picking-a-router) that use Data APIs, and the new APIS add capabilities such as [loaders](https://reactrouter.com/6.30.1/route/loader). Loaders are functions that make it possible to fetch data used by a route's component before it renders, and that can improve application performance.

MHV Medications recently [adopted data loaders](https://github.com/department-of-veterans-affairs/vets-website/pull/36157) to improve application performance.

