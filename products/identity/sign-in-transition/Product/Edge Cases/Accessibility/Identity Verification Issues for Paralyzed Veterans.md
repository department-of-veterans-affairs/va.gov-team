# Identity Verification Issues for Paralyzed Veterans

**Edge Case:** [Paralyzed Veterans](https://jira.devops.va.gov/browse/SITEC-20)  
**Created:** 16 May 2025  
**Last Updated:** 20 May 2025  
**Contributors:** Matthew Declercq

## Situation

Paralyzed Veterans with limited or no arm mobility face significant barriers when accessing VA.gov services due to multi-factor authentication (MFA) requirements on ID.me and Login.gov. While account creation is possible with voice technology or assistance, MFA methods like typing codes, using apps, or facial recognition require physical interaction, which these Veterans cannot perform. Account verification is nearly impossible without caregiver assistance, as photographing documents is quite challenging. Current platforms lack voice-based MFA options, such as verbal code recitation, limiting independent access to critical healthcare and benefits services.

## Key Findings

* **MFA Barriers**: ID.me and Login.gov MFA methods (e.g., text codes, apps, facial recognition) require manual input, inaccessible to those without arm mobility.  
* **Voice Gaps**: No support for verbal MFA code recitation, despite Veterans’ use of voice assistants for other tasks.  
* **Alternatives**: In-person or video call verification helps with setup but not ongoing login MFA. Backup codes and landline MFA are limited solutions.   
* **Caregivers**: There currently is not a way for caregivers to create their own accounts and access the Veterans health on their behalf. They are able to help a Veteran access their own account, but may not always be available to do so.

## Available MFA Options for Paralyzed Veterans

| Option | Platform | Description | Pros | Cons | Accessibility |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Backup Codes | Login.gov, ID.me | Pre-generated codes for MFA. | No real-time device interaction; can be read aloud. | Limited codes; needs secure storage. | Moderate |
| Phone Call MFA Code | Login.gov, ID.me | Code via phone call. | No mobile device needed; code audible. | Setup and code entry may need assistance. | Low-Moderate |
| SMS or Authenticator App code | Login.gov, ID.me  | Codes delivered via SMS or App. | Codes are easy to read. | Requires extensive knowledge of device specific assistive tech | Low |
| Security Key | Login.gov | Physical key for authentication. | Secure and reusable. | Requires physical insertion. | Very Low |
| Passkeys (Face/Touch Unlock) | Login.gov, ID.me | MFA using facial recognition, fingerprint, or PIN; FIDO2-based. | Streamlined; biometric option. | Requires device positioning or touching.  | Very Low |

## System Level Suggestions to Help Veterans

1. **Voice-Based MFA**: Advocate for voice biometric or verbal code MFA, leveraging commercial solutions.  
2. **Custom MFA Profiles**: Allow users to specify accessibility needs in the beginning of the process for tailored MFA recommendations.  
3. **Caregiver/Delegate Proxy**: Create secure caregiver-managed MFA processes.  
4. **Voice Assistant Integration**: Develop VA-specific Siri/Google Assistant skills for MFA.
