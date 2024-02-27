## Table of Contents

- [Overview](#overview)
- [Common commands](#common-commands)
- [Deeper Look](#deeper-look)
- [Additional Resources](#additional-resources)

## Overview

The identity slack bot was created during the Sign In Service Onboarding project as a tool that can be used to contact the identity team for various issues. 

This support feature aims to help teams answer their own questions and be able to give a member of the identity team the details they need before looking into an issue

With a simple slash command a team can get in touch with a member of the identity team and give us an idea of what their needs are.

Some of these slash commands help other engineers get in touch with the identity team by creating GitHub issue templates with pprepopulated data

This template will contain information that will allow an identity engineer to look into the issue and reach out if more information is needed.

## Common commands

These are some common commands you might find useful:

| I want to...               | Then you should use...                                       |
| :------------------------- | :------------------------------------------------------- |
| Get help with an auth issue     | `/auth-help` |
| Onboard to Sign in Service with a client configuration        | `/client-config`                                             |
| Onboard to Sign in Service with a service Configuration | `/service-config`                                             |
| View the Identity team's documentation | `/docs` |

## Deeper look

### Authentication Help

`/auth-help` is a slash command built to provide support to an engineer who is experiencing an auth issue and is in need of assistance from the identity team. By collecting information about the issue that has been experienced, the identity team can further assist with a resolution.

Just type `/auth-help`, fill in the information on the modal that will pop up, and a new github issue template will be created with all of the information you provided when you click `Save`.
You will recieve a notification in slack informing you that the new Github issue was created and a link will be provided to the issue.

### Client Configuration

The `/client-config` command was built for new teams onboarding to sign in service. By collecting information about a new teams application and that team’s needs, an engineer can properly assist them with configuring their application for client configuration during the onboarding process. 

Just type `/client-config`, fill in the information on the modal that will pop up, and a new github issue template will be created with all of the information you provided when you click `Save`.
You will recieve a notification in slack informing you that the new Github issue was created and a link will be provided to the issue.

### Service Configuration
The `/service-config` command was built for new teams onboarding to sign in service. By collecting information about a new team’s application and that team’s needs, an engineer can properly assist them with configuring their application for service configuration during the onboarding process. 

Just type `/service-config`, fill in the information on the modal that will pop up, and a new github issue template will be created with all of the information you provided when you click `Save`.
You will recieve a notification in slack informing you that the new Github issue was created and a link will be provided to the issue.

### Documentation

The /docs command was added as quick-start to viewing our documentation on GitHub. When the /docs command is ran in slack, the bot will responds with the link to our documentation.



## Additional Resources

1. [Slack API Documentation](https://api.slack.com/docs)

