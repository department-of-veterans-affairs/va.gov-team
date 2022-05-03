# RFC: Host Storybook on design.va.gov

- Date: 2020-11-4
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/15068

## Background
We have component library documentation in two places:
- https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design
- https://design.va.gov/components

We're going to use Storybook to consolidate the documentation into one place:
design.va.gov.

design.va.gov is a Jekyll site. The documentation in it is manually updated. The
repo can be found at
[`vets-design-system-documentation`](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/).
It's deployed daily by [this Jenkins
job](http://jenkins.vfs.va.gov/job/deploys/job/vets-gov-autodeploy-vets-design-system-documentation/)
to the S3 bucket from which the static site is served.

## Motivation
We want to serve the component library documentation from Storybook on
design.va.gov to ensure the documentation is in a single place that's
automatically updated when updates are made to the library. We chose Storybook
as the tool to keep the documentation closely tied to the code itself.

## Scope
Outside the scope of this document is the code location of the component library
and Storybook. While the location of the code will impact where the CI
configuration is kept, the solution outlined here must be possible whether the
code lives in
[`veteran-facing-services-tools`](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools),
[`vets-website`](https://github.com/department-of-veterans-affairs/vets-website),
or its own repo, as we may move it later.

## Design
- Storybook will be deployed to the S3 bucket from which design.va.gov is served
  - It will have its own directory in the bucket: `storybook/`
  - This directory will be `--exclude`d from the Jekyll site deploy's `aws s3`
    command to copy the files over to avoid deleting Storybook
  - This will be the only directory which the Storybook deploy will copy files
    to
- Deployment will happen at the end of a successful `main` branch build if
  there have been changes to the library
  - This means continual deployment, which is a deviation of the pattern we use
    for all other deploys
  - If the component library is not in its own repo, the check will be performed
    by a script which:
    - Checks for the commit hash of the last time Storybook was deployed
      - We'll have to save it to the deployed site like we do with `BUILD.txt`
    - Runs `git diff --name-only HEAD <last-hash>`
    - Iterating through the output in search of the component library directory

## Risks
- ??

## Alternatives

### GitHub Pages
We could use GitHub Pages to host the documentation but chose not to since the
consensus between the design system team, the content & IA team, and Kevin
Hoffman was to host the component library documentation on design.va.gov.

### A separate S3 bucket
It's not possible to [host a static website on
S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) for all
of design.va.gov _except_ a single path—design.va.gov/components. Using a
separate S3 bucket would require more sophisticated routing with the use of
nginx (or similar), complicating the infrastructure.
