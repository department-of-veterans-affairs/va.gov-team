# VTK - Command Line Interface (CLI) Toolkit

## Overview

VTK (VSP ToolKit) is a product built by the Backend Tools team through a CLI (Command Line Interface) written in Ruby and hosted on RubyGems.  The goal of VTK is to develop a tool that is easy to instal via the command line, and allow developers the ability to execute commands defined within the toolkit. The toolkit will streamline timely processes and decrease the amount of time it takes for developers to get started..  Our goal of this tool is to centralize and automate the core steps that developers are required to take in order to start their development work.  Furthermore, Improve and introduce new functionality developers are already utilizing in a simple one step process.

A CLI was selected as the best tool due to the ease of getting the MVP out to the customers, as well as time simple fact that developers are already familiar with working on the command line, so invoking the toolkit commands will be straightfoward.

VTK will initially be built by the Backend Tools team, however it is built in such a way that that teams (both platform and VFS) can contribute to its functionality to solve specific problems as they arise.

## Problem Statement

The platform team has limited automation that assist in the initial development configuration or troubleshooting.  We have provided developers with instructions on how to do specific tasks, but we are lacking a centralized tool that can automate tasks that would speed up the developement configuration process.

## MVP Functionality

The first iteration of VTK will be launched on February 16th, 2021.  It will include two of the most requested features from our research.  These are:

### New Rails Generator (Backend Development - vets-api)
Our previous rails generator was out dated and wasn't as configurable as we would have liked it to be.  It created too many files and would often need manual configuration after the fact to remove unnecessary files.
We have completely rebuilt the rails generator to be more configurable.  This means developers can create only what they need and not have to worry about cleaning up unnecessary code after the fact.

The module generator MVP of the toolkit has additional information that can be found [here](https://vfs.atlassian.net/wiki/spaces/VI/pages/807174195/Rails+Module+Generator)

### Socks Control
We have taken the standard socks script that a lot of developers already use and added it into the toolkit.  There are multiple ways to use socks currently and this is an effort to centralize and standardize how we can support socks.

## Future Features
As the toolkit matures, we want to focus to ensure that developers coming onto the platform have an automated way to start developing as fast as possible.  In the near future we will work to include the following features (these are not prioritized and have no expected date yet):

#### Automation to setup local environments
#### Frontend Start App integration
#### Socks Setup (not just on/off)
#### Adding templates to configure certain tools (Pact, Sentry, etc)
#### Permissions Checks (scope TBD)
#### Interactions with the CI/CD process


## Personas

VSP Developers - initial configuration setup and troubleshooting

VFS Developers - Automating configuration tasks and troubleshooting support requests.

Non developers - Automating different aspects of the on-boarding process (socks access).

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

### Test prototype with teams (Completed)

The toolkit with the new generator work is being reviewed by a VFS team that is currently in the process of creating a new backend module.  This team was selected because of the step in the process of their work that lined up with the capabilities of the CLI Toolkit.

### Iterate (Next)

Further improvements to the generator in the rails app will be prioritized, as well as other features that relate to the development and troubleshooting on vets-api.
Future iterations will allow for other teams on VSP to contribute to this toolkit to help solve and automate tasks that they identify, it will be up to those teams to contribute to the tool.


--- 

## Launch Dates
- MVP Launch: February 16th, 2021

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
  
</details>
