---
name: 'Forms 12. phased-production-rollout'
about: Describe this issue template's purpose here.
title: '[form number] Phased Production Rollout'
labels: forms-audit-digitize
assignees: ''

---

[Slow-rollout the form to production](https://vfs.atlassian.net/wiki/spaces/VFT/pages/2492334104/Form+digitization+development+guide#Step-12-(collaborative)%3A-Slow-rollout-the-form-to-production)
Development
- [ ] Implement feature toggles using Flipper to slow-rollout the form to production
- [ ] Enable the route in content-build
- [ ] Add the URL to [devops react routes](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml) if you have not already
- [ ] Create vets-website, vets-api, content-build, and devops pull requests for internal and platform approval
- [ ] Merge pull requests

Monitoring
- [ ] Toggle all required flags to make the form available at the desired percentage in production
- [ ] Observe Datadog traces and identify and address issues if they come up in production

Post launch at 100%
- [ ] Remove feature toggles from vets-api and vets-website to make the form fully available in production
