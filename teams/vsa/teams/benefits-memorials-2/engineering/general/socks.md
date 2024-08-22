# Runnings SOCKS

SOCKS (Secure Socket) is the tool that the VA uses to route internet traffic through a proxy server for needed traffic. SOCKS must be running to do work on different VA codebases, like `vets-website` and `vets-api`.

## Setting up and Configuring SOCKS

Before setting up SOCKS, you will need to make sure you've been granted access with the appropriate team roster. You will then need to instal the `vtk` gem and follow the commands afterwards. [See here for more detailed installation documentation.](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy#AccessingInternalTools(viaSOCKSProxy)-PrerequisitesPrerequisitesforSOCKSProxyconfiguration). You can also [review the YouTube video for setting up your VA SOCKS access.](https://www.youtube.com/watch?v=OnBhO3FVTTg&themeRefresh=1)

## Turning on SOCKS

* `vtk socks on` will turn on SOCKS access once you have it installed.
* `vtk socks off` will explicitely turned SOCKS access off.

There is no command to check your SOCKS status. You will need to run `vtk socks on` or `vtk socks off` and check the output to see if SOCKS is already on or off.

SOCKS may go off unexpectedly or flicker. You may need to run `vtk socks off && vtk socks on` to fix the issue.

If you continue to have a difficult time using SOCKS, you can also use the CoreTunnel app to manage your proxy connection and see if it's connected. [See this documentation for installation guidance.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools-old.md#connecting-your-network-to-the-proxy)

### If SOCKS can't connect or request local forwarding

This is usually due to background SOCKS processes that need to be stopped. The error will prevent you from reconnecting by saying the proxy is already active, but you still cannot get access.

- Run `ps aux | grep socks` to see any other SOCKS processes still in the background.
- For each result where the descriptive command doesn’t begin with `grep`, copy the string of numbers that appears after your username in each line of results.
- Run `kill -9 <NUMBERS_SEPARATED_BY_SPACES>`
- Attempt to reconnect

## Updating SOCKS

If you need to update SOCKS, running `vtk socks setup` should install any needed updates.
