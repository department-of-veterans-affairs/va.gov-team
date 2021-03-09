---
author: Mark Dewey
date: March 09, 2021
title: Form System Risk 
---


## What is the risk

We are using the VA.gov Form systems. This system was designed for more static forms that mimic an existing form, like an application for benefits. This system was not designed for a dynamic form building system like we need it to be. Its also very tightly coupled with the vets-api, vets-website and the current Save in progress system. Both of which may not fit our needs

A risk to note is that our system's requirements may drift away from the other teams use cases

## What do we gain by taking this risk?

By using the forms system, we do not have to implement features such as error handling, Save in Progress and many other features that are "out of the box"

## Consequences, How can this go wrong?

Since this is an actively  shared system, enhancements and features that would be good for our team, may not be accepted into the forms system. We have as much control as the other teams do on which direction the goes.

There is also the consequence that our uses cases drift away or if Platform doesn't want to support a key feature, we would have to rebuild our form. in that case a migration away from the VA forms system to another system would be a rewrite of our questionnaire.

## Probability

On a scale of `low`, `medium` or `high` => `medium`

## Impact

Could determine the velocity of new features and maintenance

## Priority

low-medium

## Response Plan

Every so often , re-valuate the cost benefit of using the system

## Who would handle this?

Mark Dewey (Front End Engineer)

## How are we going to be proactive about this

Keeping and active relationship with the development team and be a voice at the table when new feature needs to be added
