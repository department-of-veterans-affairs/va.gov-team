# Customer Support Tracking

## Overview

Currently, we don't have a good way to categorize or gather data about support requests. We've started using a [google sheet](https://docs.google.com/spreadsheets/d/1bKUfJ6GSRm7_Zal88IkYEiw5md-9L9WRxK51ZNMtt8k/edit?pli=1#gid=1793382735) to capture this data to help inform future decisions around team's capacity and roadmaps.

## Problem Statement

Without better understanding how VSP teams' time is spent on customer support work, we don't know what areas we could focus on to make improvements - such as writing documentation - that allow VFS teams to figure out their own answers or get unblocked without needing assistance from VSP.

If we had a standardized way to log customer support requests and all customer-facing VSP teams logged every support request using that process, we could use that data to identify roadmap initiatives that would give VFS teams the documentation and tools they need to successfully do their work without engaging with VSP.

## Personas

VSP team members and Leadership.

## Measuring Success

### Key Performance Indicators (KPIs)

- % of customer support requests that are automatically logged and tagged.
- time it takes to compile customer support reports.
- % of tracked links that go to platform documentation.

------

## Assumptions

- By creating a standardized process for tracking customer support requests across VSP teams, we expect to identify “problem areas” with high burdens of manual support to be prioritized in future VSP initiatives.

## Solution Approach

- Doing a [spike](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12787https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/12787) VSP Engineering on a very simple Slack app for tracking support requests in collaboration. 
- Goal is to reduce friction for VSP team members in logging support requests in the spreadsheet.
- After the spike, we will test the Slack app prototype to determine what gaps remain.

[Draft Engineering Design Doc](https://docs.google.com/document/d/1WD0sRAak8-r4kI85uYl0K6KaVGkAGKWVsH4fbuCsKCc/edit?usp=sharing)

### V1 Support Bot
-[Support Tracker User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/customer-support-tracking/v1-support-bot/support-tracker-user-guide.md)<br>
-[Bot Commands](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/customer-support-tracking/v1-support-bot/bot-commands.md)<br>
-[Design Doc](https://docs.google.com/document/d/1WD0sRAak8-r4kI85uYl0K6KaVGkAGKWVsH4fbuCsKCc/edit#heading=h.sxwcrifdl3fs)

### V2 Slack Workflow
-[Customer Support Service Blueprint v2](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1615245024272/928f05240d372b666b2c5bd394ade834986ab5ca)<br>
-[Sprint 48 Demo](https://docs.google.com/presentation/d/10Orr5IUF_9hHcx4jXP7HK5YSyxiO2wIgEqmnh-18uu8/edit#slide=id.p2)<br>
-[Prototype usability test Mural](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1616715691915/158174631e0e0d2affdaa27a9ed066c79732ceb6)<br>

------

## Launch Dates

- TBD

------

## Reference Material

- Release Plan
- Any product health or success dashboards

### Communications

- Team Name: Service Design Team
- GitHub Label: service-design
- Slack channel: #vsp-service-design
- Product POCs: James Chasia, Andrea Chappelear

### Stakeholders

DEPO

