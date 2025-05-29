## Overview

tl;dr: An SFTP server we use is changing IP addresses and we need to open up network access to the new IP address.

The education form data collected through va.gov is automatically transmitted to an SFTP server on a daily basis. From there the forms are distributed to the necessary regional processing centers via TIMS. This system has worked well for years. Recently, the IP address used to connect to this SFTP server has been deprecated, and a new IP address needs to be used. This is a trivial change to make in the code configuration, but the larger issue is that this new IP address is not accessible from the vets-api application servers due to current network restrictions. The end goal of this 'feature' is to allow for access to this new IP address to allow education form data flow to continue as usual.

In more technical terms, we currently connect an external SFTP server at IP address `10.205.4.67`. See [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/education_form/create_daily_spool_files.rb#L54-L55) and [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/sftp_writer/remote.rb#L13-L18) for the code that does this. The IP address `10.205.4.67` is now deprecated, and we need to move to using `vaphcwebweb211.aac.dva.va.gov` which resolves to `10.206.40.63 `. Opening such a network connection requires Enterprise Security External Change Council (ESECC) approval (generally through submitting a connection request in [ChangeGear](https://esecc.va.gov/CGWeb/Main.aspx)). As one might expect, this takes a fair bit of documentation. So things like a MOU-SIA and POAM need to be prepared to be submitted along with the ChangeGear request.

Discussing this issue with Ken Mayo, it sounds like a Collaboration Cycle is needed to make sure the right platform stakeholders are involved in the process.

## Tasks

- [X] Create Initial ChangeGear request (gives us a RFC# to reference)
- [] Initiate Collaboration Cycle
- [] Fill out VFSP portion of the MOU-ISA template file
- [] Have Chris Marino and his team fill out remaining MOU-ISA fields
- [] Create a POAM
- [] Submit ChangeGear request with attached MOU and POAM

## Key Resources/Data

- [ChangeGear](https://esecc.va.gov/CGWeb/Main.aspx)
- [S2S Connection Request Instructions](https://yourit.va.gov/va?id=kb_article_view_yourit&sys_kb_id=0b98cf1e97749ad01978b256f053afc7)
- MOU-ISA template document (provided by Ken Mayo as a docx)
- Old SFTP IP Address: 10.205.4.67 
- New SFTP IP Address: 10.206.40.63 (vaphcwebweb211.aac.dva.va.gov)
- vets-api CDIR blocks
  - staging: 10.247.34.0/23
  - prod: 10.247.32.0/23

## Key Contacts

- Thomas Krenzke (original requestor)
- Chris Marino (administrator of SFTP server)
- Griselda Gallegos (ISSO)
- Christopher Johnston (ISO)
- Ken Mayo (Platform Security)
