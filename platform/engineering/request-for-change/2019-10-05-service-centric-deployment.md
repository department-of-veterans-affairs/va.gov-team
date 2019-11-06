# RFC: Service-centric Deployment

* Date: _2019-10-5_
* Related Issue: _git/zenhub issue if applicable_

## Background
The BRD deployment system is good, but we can make it better.  Given recent challenges and new strategic goals it is clear now is the time for action.

## Motiviation
The current deployment system is good but faces some scaling and complexity challenges.  As we add more teams to VSP many of the original design designs that were made through the lens of “one or two teams supporting one site” begin to strain under 13 teams.   A strategic goal of 30 teams on VSP in the near future, is a clear call to action to remedy these issues soon.

Also important is that the technology landscape has evolved rapidly since VSP was originally built.  Early adopter tools such as Docker are now mainstream and widely deployed and the VAEC  didn’t even exist.  It’s clear that any new VSP design today would closely resemble the processes BRD has honed, while using newer technology to implement those process faster and more independently.

Specifically, issues such the following are things this proposal is looking to address:
* Very long build times (CMS)
* Learning curve (onboarding is slow)
* Lack of direct feedback form the system about deploy and service health state (is my change live and did it break the site? )
* Increasing network and downstream dependency complexity (VAEC, TGW, DNS, VPN, TIC, etc…)
* Arduous process to onboard things that don’t fit BRD process exactly (CMS)
* Environmental specifics (DVP Sandbox)

By separating services from the underlying infrastructure and adding service centric tooling we can enhance  developer’s experience of the deployment lifecycle and provide a path to grow for the next three years.

In _manifesto_ form we say:
### Deployments should
* Be Fast
* Be Obvious
* Degrade Gracefully
* Empower Teams

## Design
Generally, we propose to use Nomad to power a services cluster of hosts to run va.gov and related services. 

### Service Based Orchestration with the HashiCorp Runtime Stack
Using the current build system deploy Consul, Vault, and Nomad services. Together these offer an integrated and well supported foundation of service discovery and deployment orchestration, much like a cluster-aware version of supervisord .  Services looking to utilize these new primitives would be changed to deploy themselves though nomad, have consul health checks, use consul service discovery, and store env specific config values in Consul and Vault. 

### Containerization with Docker and AWS ECR
Services should migrate to deploying in containers, possibly with supplemental config bundle stored in S3 to be fetched as an artifact by a nomad job. ECR provides for storage and audit of the docker image as releasable artifacts and provides in-VPC performance for faster deploys.  Nomad does offer java, exec, and QEMU task drivers, so not all jobs may be built this way but it should be the default.

### Access though Nomad
Developers would access their tasks though the `nomad alloc exec`  feature that allows them to access their jobs without ssh into the system running the process.  This would be proxied from a laptop or supplied though a jumphost accessed via AWS SSM or SSH proxy such as Gravitational Teleport.

### Monitoring and Inspection with Datadog
The new service cluster will use DataDog for logging, monitoring, APM, etc.  This centralizes observation to a single cloud platform and provides a separate vantage point that is beyond or current capability.  This may be able to consolidate Sentry as well.

### Control Plane / CI with Ansible and Jenkins
While the deployment and running of services is something that nomad handles well, system  based configuration, system orchestration scheduling, and eventing still need to handled which is mostly code we already have in the devops repo.  While this proposal would reduce some of the complexity in the current devops repo, more work is required and should be handled in a separate RFC.

### Cloud Control with Terraform
Almost all of our terraform can continue to operate as-is.  While this proposal would reduce some of the complexity in the current devops repo, more work is required and should be handled in a separate RFC.


## Risks
* Its a lot of change and a big retool
	* Yes, though we are going to have to do a lot of work regardless to handle the current issues.  The longer we wait, the more difficult it will be.
* This is a lot of services
	* Yup, large distributed systems aren’t easy.  This design, hopefully, should be decoupled enough that we can swap parts out without a total redesign.
* TRM Compliance
	* We’ll need to get Nomad and Vault added (Consul, Packer, Terraform, and Vagrant are there, so hopefully not difficult)
* Nomad’s story for persistent storage is not great.
	* Host Volumes in Nomad 0.10. allow us to use EBS volumes now and we can make them pretty easily with BRD.  Portworx also provides a commercial container based option for clustered container based persistent storage.

## Alternatives
### Kubernetes
It’s harder to run on your own than Nomad which is a negative for a small ops team, Notably since the AWS Elastic Kubernetes Service is not available in AWS GovCloud at this time.  Out of the box experience is not significantly better than Nomad, and adding in-development CRD plugins requires high levels of customization.  Nomad’s HCL is arguably nicer to work with than K8S YAML.

### Rancher, OpenShift, etc..
These present the same problems as Kubernetes with TRM issues, but with a nicer looking UI.

### Mesos DC/OS
It’s even heavier than K8S, great if you want to do hybrid cloud or cloud bursting, but overkill for our needs.

