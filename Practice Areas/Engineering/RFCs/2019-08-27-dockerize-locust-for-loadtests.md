# RFC: Dockerize locust for loadtests

## Background
VSP (vets-api) has historically leveraged scripts in the devops/ repo and locustio to trigger load testing. 

This testing has been generally linked to the introduction or modification of a new endpoint/service.

The responsibility of these tests is gnot necessarily to stress test `vets-api` itself, but rather the integration of third party services.

## Motivation

VFS engineer experience with our load testing toolchain is varied and has historically been a pain point.

This occurred recently where a VFS engineer was not able to install and run locust because of dependencies failing to install.

## Design

Key design changes:

- Rolling together current scripts and dependencies into a `Dockerfile` that allows for a normalized load testing workflow
- Updating VFS/VSP documentation to further clarify load testing process


## Risks

If we don't simplify our load testing tool chain we run the risk of:

- confusing new developers
- not sufficiently testing new endpoints under load

## Alternatives

- simple bash/ruby script
- better clarification on how to manage python dependencies/versions
