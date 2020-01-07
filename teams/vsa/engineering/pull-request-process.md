# Pull Request Process

This VSA Process is currently a subset of the base-process defined by VSF and found here [Submit pull request](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/workflow/review/)
   
   ## Pre Pull Request Checklist
   - [ ] Add the VSA label to the PR
   - [ ] Make sure that you have assigned the PR the corresponding resource
   - [ ] Make sure there is an Issue for your Pull Request
   - [ ] If this is a new product make sure that the [VSA QA process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/vsa-qa-process.md) has been started \[with at least Step 3 completed]. 
    
   
    
   ## Pull Request Process
*   **Pull master** and **push feature branch** to `vets-website` repository

    git pull origin master
    git push origin 12345-issue-title

_Always **pull master** into your feature branch before creating a pull request._

*   **Create a pull request** indicating that your code is ready for review.
*   **Request peer review** on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.

_Depending on the type of work done, you may need a product person to review and / or a developer to review. See [Code Review Norms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/a33e322c34798b6bbd863eeceb888c0420114c2c/platform/engineering/code_review_guidelines.md) for more information on how we do code reviews._

*   Use Zenhub to **connect** pull request with a **linked issue**
>This is extremely important and all VSA PR's without exception need to have a corresponding **linked issue**


_If you use the Zenhub Chrome [extension](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd), there will be a "Connect this pull request with an existing issue" section at the bottom of Github's create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub._

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:765px">[<span class="gatsby-resp-image-background-image" style="padding-bottom:9.934640522875817%;position:relative;bottom:0px;left:0px;background-size:cover;display:block"></span>![PR deployment list](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png "PR deployment list")](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png)</span>

*   **Change status** of the **linked issue** to **validate**

### Run tests and compliance scans

*   **Jenkins** automatically **builds** and **runs all tests** your feature branch:
    *   when the pull request is created
    *   after a pull request is created when the feature branch is updated
*   Test results are displayed on the pull request page

<span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:699px">[<span class="gatsby-resp-image-background-image" style="padding-bottom:17.024320457796854%;position:relative;bottom:0px;left:0px;background-size:cover;display:block"></span>![PR deployment list](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png "PR deployment list")](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png)</span>

_See [Run Tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/test) to run these tests locally_

### Manually test change

Manual testing can involve some separate things:

*   Making sure the functionality works in the web browsers users are most likely to use
*   Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)
*   See if there are there any bugs or unexpected nuisances that users might encounter
*   Does it meet the requirements?

_**The person making the change is responsible** for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build._

#### Review instance automatic creation

**Jenkins** automatically **deploys** two remote **review instances** of a **feature branch** when a pull request is created:

*   an instance that just includes static pages content deployed by **va-bot**

*   an instance that includes static pages and the VA.gov client application deployed by **va-vfs-bot**

    _Example of deployment links:_

    <span class="gatsby-resp-image-wrapper" style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:709px">[<span class="gatsby-resp-image-background-image" style="padding-bottom:26.375176304654442%;position:relative;bottom:0px;left:0px;background-size:cover;display:block"></span>![PR deployment list](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png "PR deployment list")](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png)</span>

After a pull request is created, **Jenkins** will automatically **rebuild** these instances when feature branch **changes are pushed**

_You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the [2\. Access internal tools](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/internal-tools) for detailed instructions._

#### Review instance manual creation

**Jenkins** can be **manually triggered** to build a **review instance**.

1.  Visit [http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/](http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/) and log in.
2.  Select "Build with Parameters"
3.  Specify the branch names for `api_branch` and `web_branch`. These branches will be deployed together with the review instance.
4.  When the process is completed, the URL for the review instance will be provided at the end of the output logs.

_A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository._

### Peer review and merge

*   Get at least one **pull request approval** from a peer
*   It is recommended not to merge at the end of the day or right before the weekend unless necessary.
*   [Squash your commits](https://github.blog/2016-04-01-squash-your-commits/) and **merge** into **master**
*   **Delete** pull request branch

## Post Pull Request Checklist
   - [ ] Make sure that all the items in the Definition of Done section have been completed
