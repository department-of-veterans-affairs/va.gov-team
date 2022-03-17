----

# We're moving our docs!

### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/getting-started/Internal-tools-access-via-SOCKS-proxy.1821081710.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) on Slack.

----

# Internal Tools Access (via SOCKS)

This document details what tools are available behind our SOCKS proxy and how to configure access to those tools.

## What Can I Access?

Here are some of the tools you may need access to that are behind the SOCKS proxy:

- **[Jenkins](http://jenkins.vfs.va.gov)** for build logs and details (linked to from GitHub PRs for each project).
- **[Sentry](http://sentry.vfs.va.gov)** for exception reports and tracebacks.
- **[Grafana/Loki](http://grafana.vfs.va.gov)** for system metrics and logs for diagnostic/troubleshooting purposes.
- **[Prometheus](http://prometheus-prod.vfs.va.gov:9090/prometheus/graph)** for querying metrics database behind Grafana (also available for [sandbox](http://prometheus-sandbox.vfs.va.gov:9090/prometheus/graph), [utility](http://prometheus-utility.vfs.va.gov:9090/prometheus/graph), [dev](http://prometheus-dev.vfs.va.gov:9090/prometheus/graph), and [staging](http://prometheus-staging.vfs.va.gov:9090/prometheus/graph)).

For more information on these tools, see [Tools Overview in our Getting access to tools](../working-with-vsp/orientation/request-access-to-tools.md#tools-overview) doc.

## How Can I Set Up Access?

1. Ensure you're [signed into GitHub](https://github.com/login) AND **you can access** [this page](https://github.com/department-of-veterans-affairs/devops).
   - If you get a 404 **even after you've signed in**, contact your team lead to get access. If you still need help, reach out to Operations in [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1). **You cannot proceed without this access**.
1. Follow the guide below for configuring your [Mac](#configuring-access-on-mac), [Linux](#configuring-access-on-linux), or [Windows](#configuring-access-on-windows) machine.

### Configuring Access on Mac

:cinema: Watching [this instructional video](https://youtu.be/OnBhO3FVTTg) (5m 47s) is recommended.

1. **Open Terminal** from your Application's Utilities folder.
   - If you're on Windows, this is the Ubuntu window you just opened.
1. Within the terminal, **run** `sudo gem install vtk`.
1. **Run** `vtk socks setup` and **follow the prompts**.
   - This command will guide you through downloading the correct configuration, setting up your key, creating an access request, and configuring your system to access our SOCKS-secured tools.

:warning: Please see [Additional Notes on Setup](#additional-notes-on-setup) if you have any questions.

### Configuring Access on Linux
<details>
  <summary>Click to view instructions for Linux</summary>

:cinema: Watching [this instructional video](https://youtu.be/OnBhO3FVTTg) (5m 47s) is recommended. There's a Ubuntu demo at the end of the video.

1. **Install ruby** by running `sudo apt update && sudo apt install ruby`.
   - If you already have a version of ruby installed, you can skip this step.
1. Follow the instructions on [Configuring Access on Mac](#configuring-access-on-mac).
</details>

### Configuring Access on Windows

<details>
  <summary>Click to view instructions for Windows</summary>

:cinema: Watching [this instructional video](https://youtu.be/K30i5hcNcRQ) (4m 45s) is recommended.

1. **Enable WSL** and reboot.
   1. In Windows Search, search "**features**" and open "**Turn Windows features on or off**".
   1. Enable "**Windows Subsystem for Linux**" and click "**OK**". It will ask you to **reboot**.
1. **Install** and **open Ubuntu**.
   1. In Windows Search, search "**store**" and open "**Microsoft Store**".
   1. In Microsoft Store, search "**Ubuntu**" and click "**Ubuntu 20.04 LTS**".
   1. Click the "**Install**" or "**Get**" button.
      - You do not need to login if prompted. It may take a moment for the download to begin.
   1. Once the download is finished, in Windows Search, **search and open "Ubuntu"**.
      - On first open, it will ask you to **create a user/password**.
1. Follow the instructions on [Configuring Access on Linux](#configuring-access-on-linux).
</details>

### Additional Notes on Setup

- If you don't have git configured, it will ask you for your GitHub username and password. You'll need to create and provide a [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). The "repo" scope should be sufficient for accessing the devops repo. **Your GitHub password won't work here**. You can [configure connecting to GitHub via SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) instead if you prefer.
- If you do not have a VA key, it will prompt you to create one. Adding a passphrase here is recommended (**your password will appear invisible as you type it**). Upon creation, it will ask you to submit the [access request form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2C+operations%2C+ops-access-request&template=socks-access-request.yml&title=Access+for+%5Bindividual%5D) where you'll **paste your key**. You'll need to re-run `vtk socks setup` when your key is approved.
- **If you need to re-copy your key**, you can run `vtk socks setup` again and it will prompt you to copy it when the SSH test fails.
- If you prefer a more manual approach, you can read the [old instructions here](internal-tools-old.md). You can also review the [source code to the setup command](https://github.com/department-of-veterans-affairs/vtk/blob/master/lib/vtk/commands/socks/setup.rb#L34-L43).
