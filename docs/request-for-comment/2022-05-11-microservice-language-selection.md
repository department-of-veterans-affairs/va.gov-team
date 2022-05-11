### Discussed in

<sup>Originally posted</sup>
- Start  2022-03-24
- Related Issue: https://vfs.atlassian.net/wiki/spaces/IET/pages/2114191369/RFC+File+Upload+will+be+developed+in+python

# Summary

`vets-api` is implemented as a monolithic ruby on rails application. IET is responsible for exploring how this monolith may be broken into independent services. This presents an opportunity for teams to leverage the test best suited for the microservice. The vanguard of microservice development, IET intends to develop file upload in python. 

# Motivation

A core objective of a shift from monolithic architecture to microservices is to shift pieces of functionality into independently deployable, loosely coupled services. Encapsulating functionality into discrete services reduces the overall complexity of the code that each team is responsible for, which makes the overall code base more testable and maintainable. Each microservice should be capable of operating independently, which introduces the possibility of developing services in languages other than ruby on rails. As teams split services from `vets-api` they are no longer required to develop these services using ruby on rails. 

IET proposes that teams developing microservices should select a language based on which technical stack they believe best suits the needs of their service. File upload is a low-risk opportunity to demonstrate the feasibility of removing the requirement that all platform services be built in Ruby on Rails. The service is self-contained and technically straightforward, which will allow the team to more easily assume the risks that are associated with introducing a new language to the platform. 

Regardless of which language the individual microservices are written in, in order for `vets-api` to successfully shift to a microservices architecture and sustain these services in production, frameworks for deploying, monitoring, discovering and testing the various services – independent of the language they are written in – will need to be identified and developed. Introducing the requirement that these frameworks function regardless of the language they are implemented in sets an important precedent for system design.

# Detailed design
File upload itself will be a simple API that endpoints within `vets-api` can interface with. The service will be designed with twelve-factor methodology, and with microservices best practices in mind. The service will run independently of `vets-api` on dedicated infrastructure (see https://vfs.atlassian.net/wiki/spaces/IET/pages/2109636630/ADR+Microservices+on+EKS).


# Alternatives

File upload could be developed in ruby, with or without rails. However, in doing so IET will be unable to explore the work that is required to support heterogenous language support on the platform during the development of a service with low technical risk. Postponing this shift until we are developing a service with a strong technical need for deviation from ruby is higher risk, as we will still need to address these procedural questions. Furthermore, if we do not introduce the shift to a polyglot environment early during the move to break `vets-api` into microservices, we risk establishing the precedent that microservices are to be developed in ruby on rails. 


# Adoption strategy
File upload will have an API that external services can call. These APIs will provide the file upload functionality. Endpoints within `vets api` will be transitioned to use these endpoints in a strangler fig pattern, with lower-traffic and lower-risk endpoints targeted first. 
