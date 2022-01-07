# Security Policy

## Reporting a Vulnerability

Responsible discosure is to be reported via the [VA Bugcrowd page](https://bugcrowd.com/va-vdp).
Submissions will be validated within 6 days.

## Introduction
The Department of Veterans Affairs (VA) is charged with providing health care and benefits to support Veterans and members of their families.
VA is committed to ensuring the integrity of its information by securing its information systems. A vulnerability is a “weakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source.” 
This Vulnerability Disclosure Policy (VDP) is meant to address some of the possible apprehensions and explain what research would be authorized under this VDP. Good faith research that conforms to these guidelines is considered authorized research. 
The Department will focus on quickly working to resolve the vulnerability you have identified and is not interested in pursuing legal action when there is authorized research under this policy.
This policy describes what systems and types of research are covered under this policy, how to report the vulnerability, how long VA asks security researchers to wait before publicly disclosing vulnerabilities and what communication or response to expect from the Department.
The Department encourages security researchers to contact us to report potential vulnerabilities in VA systems.

## These Guidelines Require that You/a Researcher:
* Access a VA information system in a way that follows this VDP.
* If you discovered a vulnerability, reported it by following the instructions in this VDP.
* Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction or manipulation of data.
* Limit the use of discovered exploits to the extent necessary to confirm a vulnerability’s presence.
* Do not use an exploit to compromise or exfiltrate data, establish command-line access and/or persistence, or use the exploit to pivot to other systems.
* Provide VA a reasonable amount of time to resolve the issue before you disclose it publicly.
* Do not submit a high volume of low-quality vulnerability reports.

If you established that a vulnerability or security weakness exists or encounter any sensitive data or data belonging to individuals with their financial information, medical information, contract information or proprietary information which might be a trade secret, you must stop your test, notify VA immediately, and not disclose this data to anyone else.

## Scope

| Domain | Scope |
| --- | --- |
| www.va.gov | Website Testing |
| www.vets.gov | Website Testing |
| www.ehrm.va.gov | Website Testing |
| www.veteranscrisisline.net | Website Testing |
| www.reach.gov | Website Testing |
| *.va.gov | Website Testing |


Any services not expressly listed above, such as any connected services, are excluded from scope and are not authorized for testing. 
Additionally, vulnerabilities found in systems from VA vendors fall outside of this policy’s scope and should be reported directly to the vendor according to their disclosure policy (if any).
Though VA develops and maintains other internet-accessible systems or services, we ask that active research and testing only be conducted on the systems and services covered by the scope of this document. 
If there is a system not in scope that you think merits testing, please contact the VA to discuss it first. VA will increase the scope of this policy over time.

## Reporting a Vulnerability
* Information submitted under this policy will be used for defensive purposes only – to mitigate or remediate vulnerabilities. If your findings include newly discovered vulnerabilities that affect all users of a product or service and not solely the Department of Veterans Affairs, we may share your report with the Cybersecurity and Infrastructure Security Agency (CISA), where it will be handled under their coordinated vulnerability disclosure process. VA will not share your name or contact information without express permission.
* Reports may be submitted anonymously. If you share contact information, we will acknowledge receipt of your report within 3 business days.
* VA will not offer payment or compensation for good faith research.

## What VA would like to see from you
In order to help us triage and prioritize submissions, we recommend that your reports:

* Describe the location the vulnerability was discovered and the potential impact of exploitation.
* Offer a detailed description of the steps needed to reproduce the vulnerability (proof of concept scripts or screenshots are helpful).
* Be in English, if possible.

## What you can expect from VA
When you choose to share your contact information with us, we commit to coordinating with you as openly and as quickly as possible.

* Within 3 business days, we will acknowledge that your report has been received.
* We will maintain an open dialogue to discuss issues.

## Questions
If at any time you have concerns or are uncertain whether your security research is consistent with this policy, please inquire via support@bugcrowd.com before going any further.

---

The Cybersecurity and Infrastructure Security Agency (CISA) Vulnerability Disclosure Policy Platform (VDP Platform) gives agencies the option to use a centrally managed system to intake vulnerability information from and collaborate with the public to improve the security of their internet-accessible systems. 
CISA has a contract with EnDyna and Bugcrowd, private companies, to manage the platform used by the public to report vulnerability information; CISA exercises general oversight of the program. 
CISA does not collect, maintain, use, or disseminate any Personally Identifiable Information (PII) provided to Bugcrowd for the purposes of creating a profile on the website or reporting a vulnerability to agencies other than CISA. 
Participating agencies provide their own program vulnerability disclosure policy, setting out the agency’s parameters for vulnerability disclosures, including provisions for collection and use of submitted information. 
Any submissions of vulnerabilities pertaining to CISA’s own information systems would be governed by the DHS VDP brief.
