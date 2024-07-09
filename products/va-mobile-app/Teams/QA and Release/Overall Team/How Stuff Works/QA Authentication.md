# Authentication

## We have two tokens - an access token and a refresh token.

* Access token is valid for 5 minutes and stored in volatile memory (aka, purged whenever the device needs the memory for other things which will take a variable amount of time).
* Forceclosing the app will also always purge our volatile memory.
* Refresh token is good for 45 days. If biometric login is turned OFF, the refresh token is also stored in volatile memory. If biometric login is turned ON, the refresh token is stored in [crap, I apparently didn’t write it down - but it’s not volatile memory and I know it’s encrypted].
* If your access token has been purged, but your refresh token is still valid (aka haven’t explicitly signed out), that’s when you’d get prompted for biometric authentication.

## Link to supporting diagrams for portions of these flows.

## MHV login:
* You cannot access MHV staging from outside of the VA network. The only way to access it is with a device that is connected via VPN or on the network, which requires an actual VA device. We do not have any of those at all

## Various CSPs & MFA

* Login.gov: Remote into CAG, then go to http://tud.vfs.va.gov/ and then ‘get one time security code’ for the relevant user
* DS Login: ask Therese. It’s…. basic.
