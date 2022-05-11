# LoROTA SECURITY UPDATES

## PURPOSE
To offer a more secure environment in which to allow Veterans to use the low-risk one-time authorization (LoROTA) for completing the pre-check-in and check-in workflows.

## STATUS
In Progress

## DESCRIPTION

### Veterans will no longer sign in to LoROTA using the last 4 digits of their Social Security Number; they will instead sign in using their date of birth

![image](https://user-images.githubusercontent.com/86678742/167924895-d2de62ea-3d12-48b1-9cb8-a596d28fe8da.png)

### The SSN and date of birth will be hashed in the LoROTA data store

### Data in LoROTA will be populated only when the Veteran needs it to confirm their contact, emergency contact, and next-of-kin information; Data will be removed from the data store when no longer needed

### LoROTA authentication attempts will be limited to 3 tries and LoROTA data will be deleted when all attempts fail
