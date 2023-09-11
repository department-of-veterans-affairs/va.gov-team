## Common recommendations
Regardless of unified or separate repository structure, both Design System Team and Mobile team should prioritize:
- Ensure high automated test coverage of components to prevent bugs and regressions.
- Automate test, release, and publishing processes to ensure delivery speed and avoid manual errors.
- Keep dependencies updated using Dependabot to maintain secure software.

Specific challenges that have been raised with unified repository approach:

> ## Required Workflows set with Github (LOE: High)
> MoVADS will be unable to require dedicated workflows in pull requests since this is set at the
repository level. This will also affect VADS, as they also will not be able to run required workflows
(at least not how they are set up currently). Currently the component-library repository runs two
required workflows in PRs: “required-label” and “node.js”. These will either need to be unrequired
or rebuilt to be more generalized to encompass the work of other teams.

### Recommendation
Keep these workflows enabled.
- Mobile team: Use VADS label conventions in [require-label.yml](https://github.com/department-of-veterans-affairs/component-library/blob/main/.github/workflows/require-label.yml)
- Mobile team: Add mobile specific build step to [node.js.yml](https://github.com/department-of-veterans-affairs/component-library/blob/main/.github/workflows/node.js.yml)


> ## VADS Release Process (LOE: High)
> The current component-library release process starts in the pull request (PR) where there is a
required workflow running to make sure each PR is labeled with one of the following labels:
patch, minor, major, ignore-for-release. In the current iteration every PR from MoVADS would have
to be labeled, “ignore-for-release,” as this label system is directly tied into how the changelog for
each release is generated. This workflow would need to be unrequired or MoVADS (and any
other team) would have to be integrated into the same labeling process for their release. Using
the same label system for multiple packages could be problematic, but not insurmountable. Either
way, there would be a level of effort to update this process.
>Currently, all releases in the repository are tied to the component-library package; same with the
changelog (as far as I can tell). This means that MoVADS can’t use Github releases or a new
release mechanism would need to be created. It looks like there are other packages in the
repository that are not part of the official release listing, so that is a bit expected, but it means that
no else can use it.
>Releases are all batched together in a manual process with the component-library package.
Releases appear to happen bi-weekly and affect all packages in the repository. MoVADS would
have to adhere to this release schedule or be deliberately excluded from it (recommending
exclusion). There is a loop running over all workspaces right now, this is what causes the
batch-style release and what would need to be updated to exclude MoVADS and all other mobile
packages embedded in the repository. This does pose a scalability issue (excluding any new
package added in the future). It is recommended that a scalable process be planned and
implemented for releases.

### Recommendation
Reuse existing labels (patch, minor, major) for mobile design system releases. Automate build for continuous deployment and publish as single NPM package.
-  Mobile team: add appropriate labels to mobile component pull requests
-  Mobile team: add mobile specific build steps to [publish.yml](https://github.com/department-of-veterans-affairs/component-library/blob/main/.github/workflows/publish.yml)
-  Design system team: verify that triggering of [publish.yml](https://github.com/department-of-veterans-affairs/component-library/blob/main/.github/workflows/publish.yml#L5) is automation, including release creation.

> ## Required Workflows (LOE: Medium)
> As mentioned above, there are currently two required workflows that run on all PRs in the
component-library repository. These workflows are: “required-label” and “node.js”. There is also a
scalability concern of running workflows, “globally.” If we scope MoVADS work, but VADS work
isn’t 100% scoped (some workflows left global), workflows will run on shared code (the yarn.lock
file, which gets updated whenever a dependency is added or updated in the system). As other
teams add more workflows, attention needs to be given so nothing is ever added to globally run.
The repository setting needs to be updated for all workflows to be required rather than specific
ones, then each workflow needs to be scoped to applicable packages and subdirectories.Required Label
The purpose of this workflow is outlined in the VADS Release Process section above. This
workflow is very tied into the release process.
Node.Js
This workflow runs build commands on web-components and react-components to make sure
changes in the pull request didn’t break anything. As standalone items, these are great, but for
any package outside of the core VADS team, failures on unrelated code are blocking and
disruptive to workflows. As this workflow is required, we cannot scope it to related code.
The Node.js workflow also runs tests associated with VADS code; this workflow failed a few times
during our discovery, indicating that there are flakey tests in the system. The VADS tests should
not run on unrelated code, so this workflow needs to be unrequired and scoped to the proper
directories.

### Recommendation
See above, keep global workflows enabled, and match VADS label conventions.
- Design system team: resolve any unreliable "flaky" tests
- Mobile team: Add mobile specific test step to [node.js.yml](https://github.com/department-of-veterans-affairs/component-library/blob/main/.github/workflows/node.js.yml)

> ## Preview environments (LOE: High)
> The current component library is set up to use a service called Chromatic (which seems great) as
a way to preview changes to components while they are in pull request state through the main
storybook installation. It is hooked into the VADS Storybook version right now. If other teams are
also hooked into the VADS Storybook setup, this is fine, but if MoVADS needs a specific install for
React Native, this deployment needs to be updated to point to MoVADS work and build system
(or to another team’s work in the future). This process should be worked out as it can pose a
scalability issue as the system grows.
> There are also additional complexities around adding mobile components to the existing VADS
Storybook instance. While React Native is supported by Storybook, an add-on called
react-native-web needs to be used in order to render React Native components in a browser. Our
discovery suggests that it would be possible to get this added to the existing VADS instance, but
may require significant setup, requiring the modification of the Storybook, babel, and webpack
configs.
> Furthermore, due to the numbers of components in VADS already, restructuring of the existing
Storybook stories may also be required if we want to make a clear distinction between Web and
Mobile components for consumers of the documentation.
Our recommendation is to have separate Storybook instances for Web and Mobile, then stitch
them together later.

### Recommendation
If Mobile design components are not currently using Storybook, then this is out of scope. Future recommended state would be a single Storybook instance.

> ## Dependency updates and management (LOE: Medium)
> Having multiple teams share the same repository is great for overlapping tech stacks, but it also
raises the concern of dependency updates and management. Any global or shared dependency
update needs to be fully tested with all affected teams. This applies more importantly to major
updates that contain breaking changes and major system-level overhauls (like when VADS
upgraded from yarn v1 to yarn v3). Frequently discovered security vulnerabilities fall under this
same category.
This division of labor needs to be planned and outlined with scalability in mind (it needs a system
rather than one-off assignments).

### Recommendation
Dependabot is [currently enabled](https://github.com/department-of-veterans-affairs/component-library/settings/security_analysis) on `component-library` repository. Automated PR tests should validate all dependency updates, and any team can safely merge them.
- Mobile team: implement automated tests for mobile components to validate functionality when updating dependencies
- Design system team: monitor [dependabot alerts](https://github.com/department-of-veterans-affairs/component-library/security/dependabot) and merge high and critical severity dependency updates

> ## Ticketing and Labels (LOE: Medium)
> There is no routing for issues currently set up, so all issues go into a main bucket to later be
sorted and triaged. This works fine for a single team in a repository, but once multiple teams are
working side by side there will need to be issue templates created for each team as they are
onboarded to serve as a preemptive routing mechanism. This is a relatively quick
implementation, but issue templates and labeling will need to be worked out for clarity of users
(user submitted bugs) as well as team-level workflows.
Pull request templates are used to create a starting point for when a PR is opened. Currently
there is one template used that is prefilled with the VADS template skeleton, largely this is OK,
but the template should be generalized more and updatable by the team using it. We can assign
multiple templates, but the Github UI isn’t great for template picking, so it’s ripe for error. It would
be better (in my opinion) to implement a more generic template that can apply for all teams.

### Recommendation
Add additional Github issue templates.


> ## Governance Team (LOE: Medium)
> The repository as a whole needs an assigned group to outline and maintain globally applicable
changes (like setting up the emass system), dependabot configurations, access levels, among
other general admin-level processes that can crop up. Maybe this is the VADS team, but they
generally seem pretty constrained for time. A general purpose governance group would also
handle:
> - File ownership over anything not covered by explicit code ownership
> - Changes to globally shared files, such as the yarn.lock file, which calls for a full team
review when updated
> - System-level processes, like the “update branch” button. Currently this button appears on
PRs, but as the code grows to multiple teams, its presence is unlikely to scale gracefully.

### Recommendation
Leverage CODEOWNERS to define team-specific resources.
- Design system team: provide top level code ownership for anything not explicitly managed by another team


