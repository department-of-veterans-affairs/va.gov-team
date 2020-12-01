# RFC: Only support development on unix-based operating systems 

- Date: 2020-10-06

## Background
Developing on vets-website or vets-api using Windows or Windows Subsystem for Linux 2 has been problematic for VSP engineers and platform users. Almost all VSP engineers use unix-based operating systems and do not have the expertise to troubleshoot issues specific to Windows. 

## Motivation
In this absence of some investment into officially supporting development on Windows, VSP engineering would like to explicitly document the lack of support for developing natively using Windows or any version of Windows Subsystem for Linux. 

Supporting a good developer experience for Windows users requires a cross-functional team to create, maintain, and test a development infrastructure project. Implicitly supporting Windows with hacks or workarounds bewilders users by shifting undocumented overhead into the onboarding process.   

## Risks
- Some contractors are only permitted to work on GFEs which are generally only issued as Windows machines 

## Alternatives
- Windows users can use Virtual Box to install and develop on a supported unix based system 
- [codespaces](https://github.com/features/codespaces) are a type of remote development environment that could provide a single click installation for all operation systems. Similar products are provided by other vendors for Visual Studio Code and GitHub's Codespaces product is in beta testing.
- Remote development on review instances is partially supported 

## Related docs
- [Onboarding MVP survey results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/ce34be953aeb613eaafdfc59f43af7ad4c4d6994/teams/vsp/teams/product-dev-support/research/onboarding-mvp/post-onboarding.md#what-was-the-biggest-challenge-you-faced-during-onboarding-please-be-honest-and-detailed----this-will-help-us-improve-the-onboarding-process-for-future-teams)
- [VSA Onboarding Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/39398d445b4210299c590f5fa8f5d8ddde11995c/teams/vsp/teams/product-dev-support/planning/VSA-Onboarding-Plan-v2.md#2-issues-installing-the-environment-on-gfewindows)
