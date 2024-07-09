# Charles Proxy and The VA Mobile App
First Launch and setup.

## What:
Charles Proxy allows us to see and manipulate traffic to and from the mobile app.

## Gotchas:
We aren’t able to use Charles with Production builds. 
We are able to use Charles with iOS builds from Test flight.
We are able to use Charles with local builds and builds not obtained through the Google Play Store.
You will be unable to download the app from the playstore while proxied.
If you visit a site and get a connection error you may need to disable the devices manual proxy settings.

## Steps:
 1.) Download from: https://www.charlesproxy.com/download/

* Once you have installed and launched Charles, you will see a lot of traffic being recorded. This is traffic coming from your computer.


2.) Go to “Proxy” and unselect “macOS Proxy” and this traffic will cease to be recorded.

<img width="101" alt="CP 1 " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/1382c227-fa32-4181-875a-034d4e7e7e1d">

* The top of the Charles window has a “broom” icon. This will clear out the calls that have been captured. The red “Record” button is on by default, and is used to start and stop the recording process.
* The two views are “Structure” and “Sequence”. Sequence will show the calls as they are coming in (newest calls at the bottom of the list). Structure will show calls in a hierarchical view according to endpoint.

<img width="313" alt="CP 2" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/07860f73-9bfd-4623-b7cb-eb5bfe610397">


You may want to stop recording and clear the data that was captured from your computer, to have a clean slate for the rest of the setup process. But hey, your call, I’m not going to tell you how to live.

3.) Go To “Proxy” > “SSL Proxying Settings”
When the “SSL Proxying Settings” window has opened, tap “Add” under the “Include” list.
You will see an “Edit Location” window appear.
You can add “staging-api.va.gov” as Host and “443” for the Port.
Or if you want to see EVERYTHING add “*” for both.

<img width="293" alt="CP 3 " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/c7d59188-d42f-4054-adb1-3f0a6bb35434">



4.) Go to “Help” > “Local IP Address”
Leave this window open.
If you are Hardwired or on a VPN you will see multiple entries on this page, en0 is the one we will be utilizing.

<img width="229" alt="CP 4" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/b7619f17-f488-43da-bb29-da30cd53f166">

Now we need to set your device to connect to Charles and install an SSL Certificate (easier than it sounds).


5.)  Make sure your device is on the same WiFi Network as the computer running Charles.
Go to your network settings:
	Android:
If you have a Settings “Gear” icon next to your wifi network, select that
Then select “Advanced”
	Or:
If you do not have a settings “Gear” icon, long press on your network and select” Modify Network, then select “show advanced settings”
Then: 
- Select “Proxy Settings” and set it to “Manual”
- Under “Proxy Hostname” enter the IP listed in the charles “Local IP Addresses” window listed for “en0” 
- For “Proxy Port” enter “8888”
- Tap Save.

	<img width="146" alt="CP 5" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/c4231e5e-17e6-45ec-889d-68020d483af1">


iOS:
- Go to “Settings” > “Wi-Fi”.
- Tap the “Info” icon next to your network.
- Scroll to the bottom of the screen and under “Http Proxy” tap “Configure Proxy.
- Tap “Manual”
- For “Server” enter the IP listed in the charles “Local IP Addresses” window listed for “en0” 
- For “Port” enter “8888”
- Tap Save.
- Tap the “Wi-Fi” back arrow

<img width="151" alt="CP 6" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/5251ca28-bd15-4eef-98fa-9cf951bcd004">


6.) Download the Cert!
On your device open a browser and go to Https//chls.pro/ssl
This should start downloading an SSL cert. Allow the download if prompted. 


7.) Install the Cert!
Android:
Open the cert that was downloaded, You may be prompted to enter a PIN or passcode depending on your device’s security setup.
You will see an option to name the Cert. Name it as you see fit and save it
Go to “Settings” > “Lock screen & security” > “Encryption & Credentials”
Tap “user credentials”
Verify the app you named is listed, if not proceed with the following steps
Go to “Settings” > “Lock screen & security” > “Encryption & Credentials”
Tap “install from storage”
Select the Credential “Charles-proxy-ssl-proxying-cert…”
Enter your pin or passcode if prompted
Name the certificate if prompted.
Go to “Settings” > “Lock screen & security” > “Encryption & Credentials”
Tap “user credentials”
Verify the app you named is listed

	iOS:
Go to “Settings” > “General” > “VPN & Device Management”
Select the “Charles Proxy CA” downloaded profile
Tap “install”
Tap “Install” again
Go to “Settings” > “General” > “About”
Scroll to “Certificate Trust Settings”
Enable full trust for Root Certificates for Charles Proxy CA

8.) See if it works!
Make sure the red “Recording button” is enabled in Charles
Open and attempt to log in using the VA App on your device.
Observe the traffic in Charles
Verify you are able to see the content going to and from the VA endpoints.
If you are seeing failed calls or can’t view JSON or HTML responses there is likely an issue with SSL settings.

<img width="308" alt="CP 7" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/275b3300-b725-40cd-9697-842d3aae5891">


