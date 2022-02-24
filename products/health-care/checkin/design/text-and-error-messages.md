# Text messages and Error Messages 
This document will serve as hub to all the source of truths documentation for all check-in and pre-check-in text message and error message wording.

Jump to...
- [Check-in](#checkin)
- [Pre-check-in](#precheckin)

## Check-in <a name="checkin"></a> 
This [Sketch file](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/a/3Op54Vm) shows the overall user flow and decision points. However, the Sketch document is not the source of truth. It will be updated periodically, but may be out-of-date.

### VeText 

VeText's [source of truth](https://github.com/department-of-veterans-affairs/vetext-docs/blob/master/README.md). (As of Feb. 3, 2022, VeText is still working through their documentation on the linked page, but the above Sketch file includes VeText messaging.)

### CHIP

CHIP's [source of truth](https://github.com/department-of-veterans-affairs/chip/blob/develop/docs/chip-messaging.md).

### VA.gov

| Scenario | Message | Visual (will update to Sketch link) |
| --- | --- | --- |
| Identity Verification: last name and last 4 SSN do not match record AND the Veteran has attempted verification 3 or less times | Sorry, we couldn’t find an account that matches that last name or SSN. Please try again. | ![less than 3 retries](https://user-images.githubusercontent.com/66287082/152365205-135fd98a-3ae2-419d-8f80-530a82dc9adb.png) |
| Identity Verification: last name and last 4 SSN do not match record AND the Veteran has attempted verification more than 3 times | (header) We couldn't check you in (body) We’re sorry. We couldn't match your information to our records. Please ask a staff member for help. | ![more than 3 retries](https://user-images.githubusercontent.com/66287082/152366348-aa16b649-c952-48ed-a3e8-30935d14b8ec.png) |
| Is the system operational? (Any bad request from the server) | (header) We couldn't check you in (body) We're sorry. Something went wrong on our end. Check in with a staff member. | ![generic error](https://user-images.githubusercontent.com/66287082/152366754-44736746-4e6e-4753-9a3a-7c17c5383844.png) |

## Pre-check-in <a name="precheckin"></a> 
The follwing Sketch files (linkes below) show the overall user flow and decision points for both Read-only and Editing versions. However, the Sketch document is not the source of truth. It will be updated periodically, but may be out-of-date.
  - [Read-only verion](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/a/qeOEgjk)
  - [Editing verion](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/a/Gm7yvkE)
