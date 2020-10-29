# 3. Continuing to Leverage Python 2

Date: 2020-10-22

Whom:
- Demian Ginther
- Jeremy Britt
- Joe Niquette

## Status

Accepted

## Context

Attempts were made to upgrade all usage of Python from an older EOL'd version to Python 3. This presented a number of issues as we also use Ansible and Amazon Linux. The combination of these showed difficulty around how we use Ansible to install packages (`yum` module currently). The Ansible `yum` module is reserved specifically for Python 2. Python 3 requires usage of the `dnf` module. However, according to statements and current evidence, AWS has no intention to support a `dnf` extra for the life of Amazon Linux 2. It was also stated [in this forum post](https://forums.aws.amazon.com/thread.jspa?threadID=317863) "We are committed to keeping Python 2.7 secure for the life of Amazon Linux 2".

Another attempt was then made to replace our underlying OS with CentOS 8 perhaps to see how heavy of a lift this could be. With a bit of tweaks, we were able to at least run the automation that creates encrypted base AMIs. However, this is only the surface of everything that would have to be tested/changed for this move to happen. The referenced tweaks were as follows (for tracking purposes):
 - Change the default value for the `bake_ami` variable found [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/applications/config/default.yml#L3) to a CentOS AMI ID (ami-0f5f21f0f86d11d6e was used for testing which is a "hardened" CentOS 8 image maintained / distributed by Frontline).
 - Change all usage of the `yum` module to the `dnf` module in this [role / configuration file](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/common/base-os/tasks/amazon.yml).
 - Create a task to set symbolic links after installing Python 3 for `/usr/bin/python -> /usr/bin/python3` and `/usr/bin/pip -> /usr/bin/pip3` since Python 3 installations follow the `<package>3` naming convention by default.
 - Comment out / remove the task for [installing, starting, and enabling the NTP daemon](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/common/base-os/tasks/amazon.yml#L27-L37) as that package was not found with default repositories on the CentOS image and it also already comes with `chrony` installed and enabled.
 - Comment out / remove Amazon Linux distro based conditional for the install of the `epel-release` package as well as an additional task that currently exists specifically for usage of Amazon Linux 2 image ([both outlined here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/common/base-os/tasks/amazon.yml#L44-L48)).
 - Comment out / remove task that [removes yum lock](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/common/base-os/tasks/amazon.yml#L53-L56) since `dnf` was the package manager / module used in this scenario.
 - Addition of a task to install the ssm-agent as it would no longer come by default if we stopped leveraging Amazon Linux distributions.
 - Drop the usage of `unicode` type in some of our custom Ansible related Python files within the `filter_plugins` directory [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/filter_plugins/aws_finders.py#L25) and [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/filter_plugins/resource_tags.py#L404). More on the "why" of that change/dynamic can be found in [this article](https://medium.com/better-programming/strings-unicode-and-bytes-in-python-3-everything-you-always-wanted-to-know-27dc02ff2686).

## Decision

After multiple days of testing, analysis, troubleshooting, and presenting these numerous issues to the Operations team as well as a chat with Joe to gather thoughts from a security perspective, it has been decided at this time to "accept risk" on the continued usage of Python 2 at this time. At this time, our Python code is not end-user-facing (frontend is Ruby) and the bulk of it exists in internal scripts, lambdas, and our CI/CD pipeline.

Intentions to revisit this issue would largely hinge on one of the following scenarios:
 - Amazon Linux 3 is released with full Python 3 + dnf support
 - Amazon Linux 2 changes direction to fully support Python 3 + dnf
 - Through the work of our infrastructure recommit, if we can get to a fully containerized environment, we will ensure the images used do not leverage the end of life'd version of Python if at all possible.

## Consequences

- Using a end of life'd version of Python internally.
- Lack of development / support for currently used Python 2 packages.
- Potential compatibility issues.
- Potential dependency issues.
