# Datadog Access Request Instructions - Identity
Note: Original source and credit: https://vfs.atlassian.net/wiki/spaces/OT/pages/2233598117/Get+access+to+Datadog

# **Overview**

The [VA.](http://va.gov/)gov Platform monitoring solution uses a Datadog instance provided by VA OIT DevOps Transformation Services (DOTS). Platform users can get access to Datadog by sending a request directly to DOTS.

# **Process**

- Users request access to Datadog from DOTS through Max.Gov Jira
- Users receive an invite to Okta *(unless they already have an Okta account)*
- Users log in to DOTS-VA Okta to launch the Datadog application *(see below)*
- Platform support assigns roles and permissions to users in Datadog. After getting access, all users are given a default role of Read-Only (RO).
- Platform support ensures that users can access metrics collected by agents running on platform infrastructure and applications.

# **Steps**

*Note: These instructions require a VA-issued PIV card. Alternatively, a Platform Crew team lead can fill out a request on a team member’s behalf. If you have a PIV card, but these instructions are not working for you, please see “[Troubleshooting](https://vfs.atlassian.net/wiki/spaces/OT/pages/2233598117/Get+access+to+Datadog#troubleshooting)” and/or “[Support](https://vfs.atlassian.net/wiki/spaces/OT/pages/2233598117/Get+access+to+Datadog#Support)” below*

**1 - Go to VA Jira** and use the request template found **[HERE](https://jira.devops.va.gov/servicedesk/customer/portal/1/group/3)

**Log in using your VA Okta credentials or PIV card**

**2 - Submit a request** for access to Datadog *(instance name: [vagov.ddog-gov.com](http://vagov.ddog-gov.com/))*

*Note: You need to request access to Okta and Datadog*

**Use this info to fill out the request:**

**Summary**

`Requesting access to Okta and vagov.ddog-gov.com`

**DOTS Tools List**

Select "Datadog" from the list

**Description**

`Hello, I am a user of the VA.Gov Platform and need access to Ablevets Okta and the Datadog GovCloud instance.`

`Thank you,`

`<Your name>`

![image](https://user-images.githubusercontent.com/71290526/215187813-cbc8a540-8f21-4013-a6b8-7df1e205f8e5.png)

Example request for access to Datadog and Okta

**3 - Check your email inbox for an invite to Okta**

**4 - Log in to DOTS-VA Okta** [HERE](https://dots-va.okta.com/)

**5 - Launch Datadog from DOTS-VA Okta** under My Apps. **App name: vagov-va-datadog**

![image](https://user-images.githubusercontent.com/71290526/215188009-40f5ed90-87de-42b9-a399-0b522c19fecf.png)


---

# **Troubleshooting**

*If you try to log in with your PIV card (step 1) and receive an error like the following…*
![image](https://user-images.githubusercontent.com/71290526/215188074-5c053223-a0b2-4852-80b8-d849ca80f3d0.png)

*Try the link in a different browser. That might work. If you still get the same message, try this:*

![image](https://user-images.githubusercontent.com/71290526/215188103-343035e9-077c-4f13-bcb2-f663ea6376e4.png)

**Click on “Department of Veterans Affairs”** under “MAX AGENCY FEDERATED PARTNER”

*On the screen below,* **Click on “Sign in using an X.509 certificate”**

![image](https://user-images.githubusercontent.com/71290526/215188145-3e316e4c-06d4-4da6-8cc2-adfedb79ba08.png)


**Choose your certificate**

![image](https://user-images.githubusercontent.com/71290526/215188181-0af072f1-23ff-4685-a80d-1854c8d105d8.png)


# **Support**

If you are unable to log in and request Datadog access through [Max.gov](http://max.gov/) Jira, you can email the following DOTS contact: [Jared.Piimauna@ablevets.com](mailto:Jared.Piimauna@ablevets.com)
