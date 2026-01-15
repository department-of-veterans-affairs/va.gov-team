# The Blue Button

## Blue Button Data Flow

[Full diagram of the data flow for Blue Button on va.gov, showing the various data categories, API endpoints, and data sources involved](./diagrams.md)

## Outstanding Questions

**What is the long term vision for BB?**

As we move all users to SCDF as the source of truth for medical records data, what is the role of BB? As more users move to OH (and by extension SCDF) drifting of data will happen. How can we work to reimagine BB in a way that continues to provide value to Veterans?

Answer-ish: We are operating under the mindset that BB should continue and show the Veteran the same data they see in the Medical Records section on va.gov. This means that for OH users, BB would pull from SCDF. For VistA users, BB would continue to pull from the existing datasources (PHR APIs).

**What data are we legally required to provide that we are using BB to deliver?**
Are there any data categories that we must provide to Veterans that we are currently delivering via BB? If so, what are they and how can we ensure they continue to be delivered as we evolve our architecture?

**Is there a reason we initally decided to keep BB scoped to VistA?**

When BB was first created, it was designed around VistA data. As we move to OH and SCDF, is there a reason we are not expanding BB to include OH data as well?

**Is there a way to better support the `download all my health data` requirement?**

We have several ways for Veterans to access their health data (Medical Records on va.gov, Blue Button, CCD). Is there a way to better integrate these experiences to provide a more seamless way for Veterans to download all their health data in one place?

## Summary

Blue Button (BB) for VHA (Veterans Health Administration) is a feature that allows veterans to download and share their personal health information securely. It enables veterans to access their health records through the My HealtheVet portal, where they can download a single electronic file containing their available health data, such as medications, lab results, and appointments. This feature helps veterans manage their health information more effectively and provides a way to communicate with healthcare providers and caregivers.

The main case for BB is to provide users with a customizable summary of their health record. They can pick a date range and choose what to include. It also includes some data that is not in OH, like military service info.

## vs CCD

Continuity of Care Documents (CCD) perform a similar but more limited function in that CCD follows a standard XML structure (CCDA) and cannot be customized. It also doesn't include military information. To further complicate things, the CCD that is produced by VHIE has been tweaked and does not completely follow the CCDA standard. The CCD from OH does not have the same tweaks.

## And now with Oracle Health

BB is a VA-specific construct that was created specifically around VistA data. Since BB did not exist on OH, and we have been focused on achieving parity with OH, we have not done the work to map OH data to those fields. Some of the fields likely don't exist in OH, or they may exist and not be returned in the FHIR API. But all the data that existed in VistA should be available in OH via SCDF.

When sites converted to OH in the past, the ability to get a BB report for the converted site simply disappeared since OH doesn't have BB reports. However, the data for a facility does get archived in eVault during OH migration. In classic MHV, users used to get the old archived data in Bluebutton report if requested thru API from eVault.

An operating assumption is that SCDF can be used as the ultimate data source for OH and ALL VistA data.

See [SCDF Migration Roadmap](../engineering/decisions/va-gov-to-scdf.md) for the phased plan to consolidate all users on SCDF.
