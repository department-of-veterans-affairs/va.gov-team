# RFC: Terraform and Ansible Repo Split

* Date: _2019-12-6_
* [Related Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3784)

## Background and Motivation
The devops repo contains all of the Ansible roles and Terraform modules that are used by several teams across the platform.  This often makes it difficult to test individual shared roles and modules, track changes, and keep versions separate.

This proposal is looking to address these issues:
* Allow tracking of individual Ansible role and Terraform module versions
* Increase test capabilities of individual roles and modules
* Limit context of changes that are proposed by engineers across the platform

## Split Repo Design
We propose to split each shared Terraform module to its own Git repository, and all shared Ansible roles to one shared Git repository.  This design is striking a balance between creating "too many" repos, and also allowing as much portability as possible.

### Ansible Roles
With more than 60 Ansible roles tracked in the devops repo, it would be increase the number of repositories that Ops engineers have to manage pretty significantly.  To strike a balance between versioning/testing and engineer sanity, we're proposing to keep all of the Ansible roles together in one repo.  Breaking them out of the devops repo still provides benefits for testing, versioning, and context limiting.

### Terraform Modules
With close to 25 Terraform modules, we propose creating a repo for each Terraform module.  Terraform makes it easy to source modules from various repositories.  Them being in separate repos will allow VSP services/engineers to source whatever version of whatever Terraform module they wish without being beholden to the "way of the devops repo".

## Alternative Choices
### Mono repo for all
It would be possible to have all the "shared libraries" from the devops repo in a single separate repo.  This would help with context limiting but still not increase testing or versioning ability.

### A repo for everything
If we created a separate repo for every Ansible role and every Terraform module, we would increase the number of repositories that an ops engineer needs to manage significantly.  This path would provide the ultimate versioning, testing ability, and context limiting.  We feel the tradeoff we listed above (split every Terraform module, one repo for all Ansible roles) strikes the correct balance.
