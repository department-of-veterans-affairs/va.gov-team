# Personal information: VA.gov can’t display any personal information
**Last updated:**  February 15, 2024

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the personal information section, we will show an error if we are having issues connecting to the backends that provide us with legal name and disability rating information. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the personal information section section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an warning message in that section that explains we can’t access that information at the moment, and to check back later.
* Uses the  [background color only alert component](https://design.va.gov/components/alert#examples---background-color-only)  from the VA design system.
*  [Can't display disability rating mockup](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-55&mode=design&t=3BjAesVLktQXS6X2-11) 
*  [Can't display legal name mockup](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-66&mode=design&t=3BjAesVLktQXS6X2-11) 
*  **Note**: it is possible that both of these errors could display at the same time.

## Codes
N/A

## How to reproduce
1. Use Chrome to log into staging.va.gov with vets.gov.user+80, and navigate to the profile personal information page.
2. Open the developer tools by right clicking in the window, and selecting "Inspect".
3. Navigate to the Network tab in the developer tools.
4. Type "full name" into the Filter field on the left side of the Network tab for the legal name error. Type for the disability rating error.
5. Right click on the "full name" result, and select "Block request URL"
6. Reload the page.
