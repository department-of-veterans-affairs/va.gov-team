# VA Review/Preview Instances

A preview instance is a standalone deployment linked to an open Pull Request in the vets-api or vets-website repositories. 

To leverage a preview instance, you must have SOCKS enabled on your machine 

SOCKS Documentation: https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy


When a PR is created a preview instance is automatically created. If you open a PR against vets-website, the deployment will use your website code + staging vets-api. If your PR is against vets-api then staging vets-website will be used. I am unaware of any mechanism to use a preview instance for both at this time. 

Preview Instance Documentation: https://depo-platform-documentation.scrollhelp.site/developer-docs/review-instances

---

## Finding your Preview Instance URL

Once your PR is opened, a Preview Instance is automatically created. Each time you push code to your branch, it will take approximately 1 hour to deploy due to vets-website content.

Once the initial creation is complete, you can find a link to your URL in the PR.



The ‘View Deployment’ button will take you to your PR instance, the ‘Deployed’ link will take you to the Jenkins job.

<img width="846" alt="Screenshot from Github Pull Request showing the deployment links" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/7817263/133247c9-1586-49c8-aaa2-2b6e5206af59">



If your PR has not finished deploying, you will not have a link to it in Github. You can find it manually using Jenkins.

[http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/](http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/)

Under Build History, search for your branch name and select the most recent completed build


<img width="337" alt="Screenshot from Jenkins showing Build Hidtory search bar and results" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/7817263/7a94cb84-0f96-451f-85f9-89810123effc">



From the build screen, goto Console Output and search the string `Review instance available at`

There will be a line in the log that displays your http and ssh urls


<img width="1136" alt="Screenshot of Jenkins log showing example https and ssh urls" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/7817263/6d5b846a-a129-42e7-a9a3-d8b552084e3d">



Using the ssh in a terminal will allow you to view instance logs for both website and API, as well as run the rails terminal. See the documentation for examples. [https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes)  



### Some useful SSH commands 


Tail the website logs to determine if when your deployment is done \
`cd ~/vets-website; docker-compose -f docker-compose.review.yml logs -f`

Tail the vets-api logs \
`cd ~/vets-api; docker-compose -f docker-compose.review.yml logs -f vets-api`

Access the vets-api rails console \
` cd ~/vets-api; docker-compose -f docker-compose.review.yml exec vets-api bundle exec rails c`

### Working with vets-api 
vets-api is deployed using a similar URL as the website
* Feature Flipper URL
  * `http://<instance>-api.review.vetsgov-internal/flipper/features`
* Sidekiq URL
  * `http://<instance>-api.review.vetsgov-internal/sidekiq`

---

## How to authenticate

The Preview Instance does not support authentication by default. To successfully authenticate you need to take a couple of extra steps. 

* Append ‘?next=loginModal&oauth=false’ to your instance URL and load the page
* Authenticate as normal using accounts from the Test User Dashboard [https://tud.vfs.va.gov/](https://tud.vfs.va.gov/)
* You may get a security alert that requires you to bypass. On Chrome the alert occurs on the `http://<instance>-api.review.vetsgov-internal/v1/sessions/callback` URL, and provides you an option to ‘Send Anyway’
* If it is the first time authenticating an account on your instance, you will need to accept the VA Terms of Use.
* You can now use the instance as normal for your testing

Note: The Review instance logs do appear in DataDog. You will need to leverage the terminal to ssh to your instance and review logs manually as required.

