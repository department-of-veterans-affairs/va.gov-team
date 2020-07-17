
Product teams can use demo environments for the following four user stories (and potentially others that we haven't yet thought of!). These user stories are covered in a training that we can provide to product teams. 

* [Training PDF](VACMS-product-demo-environments-training.pdf)
* [Training video](https://us02web.zoom.us/rec/share/tc5baJfBrl5LRc_V1Rz_eJAuP6LHeaa8hCMc-qAJmRy2r1mXHx9eKqyl6aOr-J8z) (Password: 8x?Hf980) 

## User story 1

As a member of a product team, I want a version of www.va.gov where your product’s draft content can be published, so that you can then send it to stakeholders (peers, platform team, or others) for review. 

### User story 1b (NOT covered in slidedeck or video)

As a member of a product team, i want to create my own demo site, and not rely on CMS team. 

1) Go to http://devshop.cms.va.gov/node/add/site/demo and login using the Github logo
2) Provide the name for your environment. A name like "philadelphiahealthcare" will yield two environments: 

 - CMS http://philadelphiahealthcare.demo.ci.cms.va.gov/
 - Web http://philadelphiahealthcare.web.demo.ci.cms.va.gov/

## User story 2

As a member of a product team, I want a content sandbox so that you can experiment, and make and preview content changes without worrying about impact on production environments. 

## User story 3

As a user of a demo or sandbox environment, I want to refresh it with the latest content from production, for additional review or experimentation.

## User story 4

As a member of a product team wanting to test content changes along with unmerged VACMS or vets-website code changes, I want an environment where i can work with CMS and vets-website branches other than master.
 * Scenario 1: VACMS master and vets-website feature branch
 * Scenario 2: VACMS feature branch and vets-website feature branch


