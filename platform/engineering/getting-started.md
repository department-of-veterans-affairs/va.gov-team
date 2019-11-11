__Please note: some links in this document point to the vets.gov-team repo.__

# Getting Started


To build a service on the Veteran-facing Services Platform, which can be anything from a digital form to a map-based facility locator, developers will create a Frontend experience in React on Vets-Website, and connect it to an Integration on Vets-API, which manages the data flow to and from VA systems.

<hr>

* [Get started](#get-started)
* [Development](#development)
* [Get help](#get-help)

<hr>

## Get started

1. Confirm that your team's Project Manager has added your name, email address, and Github username to the team spreadsheet and sent it to DSVA. You'll know when you can visit [this Github repo and see the content](https://github.com/department-of-veterans-affairs/va.gov-team/).

1. Follow the steps to [create new SSH keys, configure, and test the SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/request-access-to-tools.md#additional-onboarding-steps-for-developers).

1. Verify that you have

    * Have access to the [Veteran-facing Services Platform code repositories](#code-repositories)

    * Have credentials for the shared testing environments &mdash;  [dev.va.gov](https://dev.va.gov) and [staging.va.gov](https://staging.va.gov).

    * Have access to [Internal Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/request-access-to-tools.md)

    * **Tip**: If you have a problem or can't get access, post in the *#vfs-platform-support* Slack channel or reach out to your DSVA contact.

1. Review all the content this folder &mdash; ```DeveloperDocs```

1. Review the frontend documentation for [Vets-Website](vets-website/README.md).

1. Review the backend documentation for [Vets-API](backend/README.md).

<hr>

## Development

#### Code repositories

The Veteran-facing Services Platform is broken into three parts:

1. [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website), which contains frontend applications and components users interact with

1. [Vets-API](https://github.com/department-of-veterans-affairs/vets-api), a JSON-based API used by the frontend to provide data to and from VA systems

1. [Vets-JSON-Schema](https://github.com/department-of-veterans-affairs/vets-json-schema), which contains shared resources used to structure and validate form data between Vets-Website and Vets-API.

#### Local development environment setup

1. [How to setup your front end VA.gov local environment](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started)
1. [How to setup your back end VA.gov local environment](https://github.com/department-of-veterans-affairs/vets-api)
1. After you are setup and running both front-end and back-end servers, try logging in using a mock user. Information on how to login with a mock user can be found [here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/2d03fbabafe9c4840596e6687795a1906e4596ec/Administrative/Accessing-Staging.md).
1. [Mock test users](https://github.com/department-of-veterans-affairs/vets-api-mockdata/blob/master/mock_data_table.md)
1. Once you can seccessfully login you should be setup for developing on VA.gov.

#### Internal Tools

To get access to metrics, build logs, deployment information and exception details, see [Internal Tools Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/request-access-to-tools.md) documentation.

<hr>

## Get help

DSVA engineering resources are available to provide guidance and support through the development effort.

If you encounter issues or have any questions, raise them in the *#vfs-platform-support* Slack channel, or reach out to your DSVA contact.

<hr>

Next: [Environments](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/DeveloperDocs/environments.md)

<!-- This goes back to va.gov-vfs-teams repo.  Will keep initial page in va.gov-team repo, but will redirect users to vfs-teams repo for next pages until all pages are moved over. 
Back: [Developer Docs Introduction](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/DeveloperDocs/README.md)-->
