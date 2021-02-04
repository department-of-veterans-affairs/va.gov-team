# VSP Command Line Interface (CLI) Toolkit

## Overview

The VSP CLI will make it easy and automated to create/manage/troubleshoot different aspects of your development environments and processes.

## Problem Statement

We (VSP) don't have an automated way to troubleshoot or identity issues or opportunities for standardization that individuals are encountering during development.  Our current process is manual, which often includes a specific set of initial troubleshooting tasks.

For example, a VFS team that requests support from VSP doesn't have a quick and automated way to ensure they have the correct SOCKS configuration present and that they are connected successfully to the correct development environment in which they believe the issue to present.

## Personas

VSP Developers - Initial troubleshooting and possibly initial configuration setup

VFS Developers - Assisting in troubleshooting support requests as well as configuration tasks.

Non developers - Automating different aspects of the on-boarding process to gain SOCKS access.

## Measuring Success

There are two methods that we will use to determine the success of the tool.

### Tracking the installs of the gem through ruby UI

Ruby gems are tracked automatically and this toolkit can be tracked using the following URL:
https://rubygems.org/gems/vtk
Actual success metrics are TBD, but a steady growth of the numbers of installs will imply that users are actively using the toolkit.

### Tracking Through DataDog or Google Analytics (GA)
There are two tools that are available for platform teams that provide tracking capabilities.  Each of them have their pros vs cons when tracking different types of products.

#### Google Analytics
After speaking with the Insights & Analytics team, GA is not the best option as it requires a URL to be tracked against.  There is some custom work and some manipulation that could be done to make this work, but it has been determined to not be the best tool for the tracking of a command line product.

#### DataDog
This tool is currently being stood up by the Ops team and has been identified as the best tool to use to track the user interactions because there is little manipulation that needs to be done to track "events".

Because this is a new tool to the platform and is not fully operational, there will need to be investigation to what type of events can be captured and how to present the data for analysis.

Update (2/4/2021):
Road block was met with sending API keys.  Re-working the approach to build out middleware through the proxy so that we are able to send events to DataDog.  Still under investigation and design.

### Key Performance Indicators (KPIs)


#### Baseline KPI Values

Because this is a brand new tool, there are no baseline KPIs.

---

## Assumptions
- Developers will use a command line tool to troubleshoot over documentation because it fits better into their natural work flow.
- Toolkit can be developed in a simple manner across different teams as needs are determined.
- The centralization of these tasks will reduce friction to finding solutions elsewhere.
- Other teams besides BE Tools will benefit and contribute to this project as it grows in scale.

## Solution Approach

### Design/Discovery sprint (Completed)
The first phase of this was to identify what features were desired by the BE Tools team, FE Tools team, Ops, Engineering Lead (Michael Fleet) and the DEPO lead for Engineering on the Platform (Dror).  The ideas were consolidated on the following Mural board and prioritized.

[Mural board of initial Ideas](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1604947756984/d77c41459435b8336a7b7b01b7d5a4ee015f022f

Outcome:  Deprecate the original generator in favor of a new more in-depth generator that can be invoked through the CLI Toolkit.  This was identified as the most valuable as it helps new VFS teams get started developing on vets-api rather quickly by providing them the scaffolding they need to start developing and encouraging them to develop in Modules witch promotes isolation in the application.

### Prototype the initial tool (Complete)

New generator has been developed and wrapped in the CLI Toolkit and is ready for testing.

More information on the generator can be found [here](https://vfs.atlassian.net/wiki/spaces/VI/pages/807174195/New+Module+Generator)
CLI Toolkit can be found [here](https://github.com/department-of-veterans-affairs/vtk/blob/master/README.md)

### Test prototype with teams (Current)

The toolkit with the new generator work is being reviewed by a VFS team that is currently in the process of creating a new backend module.  This team was selected because of the step in the process of their work that lined up with the capabilities of the CLI Toolkit.

### Iterate (Next)

Further improvements to the generator in the rails app will be prioritized, as well as other features that relate to the development and troubleshooting on vets-api.
Future iterations will allow for other teams on VSP to contribute to this toolkit to help solve and automate tasks that they identify, it will be up to those teams to contribute to the tool.

More Information can be found in the [Design Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/backend/Product/cli-toolkit-research/design-doc.md)

--- 

## Launch Dates
- MVP Launch: February 16th, 2021

---
   
## Screen-shots

_Include before/after screen-shots, if applicable. Delete this section otherwise._

### Before

### After

---

## Reference Material

- [Design Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/backend/Product/cli-toolkit-research/design-doc.md)
- [Generator Redesign](https://vfs.atlassian.net/wiki/spaces/VI/pages/807174195/New+Module+Generator)
- [VTK Repo](https://github.com/department-of-veterans-affairs/vtk)


### Communications

<details>

- Team Name: Backend Tools
- GitHub Label: tools-be
- Slack channel: #vsp-tools-be
- Product POCs: Alex Pappas
- Lead Developer: Lindsey Hattamer

</details>

### Stakeholders

- Engineering Lead: Michael Fleet
- DEPO Lead: Dror Matalon
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
