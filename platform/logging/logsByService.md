# Logs by Service (WIP)
# Overview 

This document is a guide to help anyone working on Va.gov understand where our logs are being sent by service. It is meant to be a source of truth for VSP and VFS teams. 

# Why this doc?
We are currently changing how logging works on the platform by introducing a new logging pipeline and tool, so in order for everyone to understand where logs are being sent the VSP Operations team will be using this doc for transparency. 

Like more information please see the following docs see our logging [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/logging) or reach out to the vsf-platform-support channel in slack.


# Logs by Service 

|Service        | Log location               |
|:-----------|:-------------------|
| RevProxy       | CloudWatch         | 
| FwdProxy       | CloudWatch         | 
| Loki       | N/A         | 
