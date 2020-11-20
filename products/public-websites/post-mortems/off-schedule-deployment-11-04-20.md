# Off schedule deployment required to support launch of Resources and Support

The VSA team Public Websites was set to launch a new section of the website called Resources and Support, living at `www.va.gov/resources/`. They required an off-schedule deployment to complete their launch.

## Background
On November 4th, 2020, the VSA team Public Websites was set to launch a new section of the website called Resources and Support, living at `www.va.gov/resources/`. This new section contained Drupal-hosted content, a front-end search application, and some front-end code to generate certain static pages. This required quite a bit of planning and coordination between engineering and content to ensure everything that needed to be launched _was_ launched.

In his original [pull request for launching](https://github.com/department-of-veterans-affairs/vets-website/pull/14832) the product, Nick Sullivan of Public Websites made an oversight by forgetting to remove a feature flag for building the R&S (Resources and Support) search application. This led to a follow-up [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/14845) and a request for an off-schedule deployment around 4 PM. Soon after requesting and while waiting for approval, an unrelated pull request was merged into vets-website master, causing master to fail, preventing off-schedule deployments. Nick then opened another [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/14850) to revert the changes in that other. Meanwhile, a content deployment published the new R&S articles into production while the R&S search application was still not published. This would mean R&S did not have a functional search for a short timeframe.

Finally, after merging both pull requests and receiving approval, Nick executed an off-schedule deployment at roughly 7 PM ET.

### What went wrong
The search application required all R&S to be published before it could be published. The reason being that the search app contains a link to the R&S homepage from its breadcrumbs; the R&S homepage contains links to many other R&S pages; which created a dependency chain. This means the entire section had to be launched at once in order to pass the vets-website link validation (aka the broken link checker) - a less-than-ideal scenario. So, Public Websites published all of their R&S articles in preparation of the R&S search app being promoted to production. However, an unrelated content deployment was executed between the time of the R&S being marked for publish and the search app being merged. This caused the R&S articles to be published before the search app. This was unexpected and created a sense of urgency.

## Solution
Some follow-up pull requests to remove the missed feature flag and an off-schedule deployment.

### What went right
The path forward always remained clear. R&S was "soft launched" - not visible in the sitemap and not connected to any user flow - so it is unlikely to have received any traffic beyond team members looking at it.

### Lessons
Public Websites engineer, Nick Sullivan, should have prepared a GitHub issue for launching R&S, which would contain all of the steps required, so that any unknowns could have been identified and all steps listed so as not to be forgotten. The team typically does this but did not in this case because the team was comfortable with R&S in their demo environment, leading them to believe the launch would not be as complicated as it wound up being. For future products, the team will prepare a launch ticket early on.
