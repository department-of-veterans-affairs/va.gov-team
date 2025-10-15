# Setting up GitHub Codespaces for Appointments

## Why use codespaces? 

Codespaces lets you make changes to a branch and run it from a remote device (or have someone validate your changes). This is useful if you are working to test on iPad or a mobile web view and want a real device rather than chrome devtools to simulate a device. For example, if you're testing VoiceOver on mobile (doesn't work the same as in safari on mac). Or for example if you're using JAWS or NVDA on a virtual machine and can't get it to use your host network.

## Setup
### Add variables to codespaces config for your own user (only first time or when you make changes)
1. Go to https://github.com/settings/codespaces/
2. Add the following secrets (make them available to just vets-website - you can change this later if you want and also update the values and restart codespaces):

```
ENTRY_APPS=static-pages,auth,vaos
```
^ **NOTE:** You can remove this if you want to run all apps

```
MAKE_APP_PUBLIC=YES
```
^ **Note:** this will make ./.devcontainer/codespaces-start.sh not work initially - you'll add a step (changing the friendly/display name) then run the script

```
MOCK_RESPONSES=src/applications/vaos/services/mocks/index.js
```

```
VETS_WEBSITE_BUILD_CONTENT=NO
```
^ **Note:** This makes it so that it doesn't download content build and run vets-website/content-build on 3002


### Change the friendly name (display name) of the instance -- not the hostname
1. Go to the hamburger menu when in the web vscode on codespaces and select My Codespaces or go to https://github.com/codespaces/
2. Find the codespace and click on the menu button on it and click rename
3. Make sure the name starts with va-public-...

### Now run codespaces-start.sh
1. Run ./.devcontainer/codespaces-start.sh

Now it should run and make everything public for you without asking for individual services and allow the mocks to be loaded
Next time you run codespaces for vets-website you'll have already done the first section so just the second and third need to be complete.
