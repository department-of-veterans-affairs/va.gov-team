This folder has various powershell scripts used to run Jobs

Important Note: 
1. Use the following snippet to create an "environment" file called "Microsoft.PowerShell_profile.ps1"
2. Update the values after obtaining the security keys
3. Copy the updated file to these locations:
     "C:\Powershell" - this executes when scripts execute in Domo Workbench
     "C:\Program Files\Powershell\7" - this executes when scripts execute in a powershell instance launched locally

```
# DO NOT CHECK IN THIS FILE - IT CONTAINS SECURITY KEYS FOR LOCAL USE ONLY
# this file is git ignored, it is expected to be used an a local environment files with keys and secrets
# define base path for all scripts to find their files (includes user home dir which varies)
$env:DOMO_WB_BASEPATH = "C:\Users\<user home dir>\identity"

# setup access keys used by various scripts in one place

$env:DATADOG_API_KEY = "UPDATE"
$env:DATADOG_APP_KEY = "UPDATE"

$env:SPLUNK_USERNAME = "UPDATE"
$env:SPLUNK_PW = "UPDATE"

$env:DOMO_API_KEY = "UPDATE"
$env:DOMO_CLIENT_SECRET = "UPDATE"
```
