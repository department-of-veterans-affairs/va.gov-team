# Platform Security request for information

---

- The team met with the Platform Security team on 8/5/2025.  They are looking for specific information, which we have outlined here.

**DO NOT INCLUDE PII HERE** - AWS Instances, CI/CD, etc cannot be linked here- must be shared on VA Network

- Reach out to #platform-security channel for questions

POC: 

- PM: Michael Mooney
- DM: Andrea Merril
- Engineering: Kyle Brost

**What is the name of your product(s)/system(s)?**

- IVC Forms/CHAMPVA

**Describe its purpose in a few sentences.**

- Our team is responsible for digitizing official VA forms, including 10-10D, 10-7959a, 10-7959c, 10-7959f-1, and 10-7959f-2; building everything from the initial UX mockups, backend and frontend engineering, and ongoing refinement based on UX further research.

**If you represent multiple products, please describe the relationship between them, if there is any.**

- The products we represent are the previously mentioned VA forms: 10-10D, 10-7959a, 10-7959c, 10-7959f-1, and 10-7959f-2.  Each form has its own frontend components build on vets-website, and share a common backend in vets-api.

**What is the expected duration of your project? This information helps us understand how our processes need to adapt**

- The initial contract for this work began September 2023 and is currently operating under a bridge contract until May 2026 at the latest, when it is expected to be put up for recompete.

**AWS Resources**

- List AWS services used
	- S3
- Describe named instances of each service used
- Which of your resources handle PII? List the types of PII
	- S3:
		- We upload forms and supporting documents to S3 for asynchronous retrieval from VA's Pega system
		- Forms contain normal PII such as names, SSNs, birth dates/dates of death, relationship information, etc.
		- Supporting documents can contain sensitive health information (described further [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/metadata-by-ivc-doc-type.md#file-designations-used-by-pega-to-perform-mappings) such as SuperBills and Explanation of Benefits; marriage licenses; birth certificates; proof of school enrollment; Medicare and other insurance cards; and other VA forms (CHAMPVA Application 10-10D can request OHI form 10-7959c)
- Do you utilize any other cloud resources beyond VA.gov?
	- Postgres and Redis databases hosted by VA.gov
	- [pdf2image_llm_processor](https://github.com/department-of-veterans-affairs/pdf2image_llm_processor/tree/dev) 

**Repos**

- List repos maintained by your team, provide links
	- [vets-api](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/ivc_champva)
	- [vets-website](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ivc-champva)
- List repos used by your team, provide links
	- Our team has made edits to the [fwdproxy](https://github.com/department-of-veterans-affairs/vsp-platform-fwdproxy) to add downstream connections within VA's intranet
	- A VA tool [pdf2image_llm_processor](https://github.com/department-of-veterans-affairs/pdf2image_llm_processor/tree/dev) to act as middleware to upload PDF files to VA-GPT for analysis

- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable
	- vets-api: Kyle Brost
	- vets-website: Matt Long
- List other groups you know use your repos
	- n/a

**Tools**

- List CI/CD or Infrastructure as Code tools
	- CI/CD is managed by Platform.
- Describe where each tool is hosted and if they handle PII
	- All tools are managed by Platform or other internal teams (Pega, VES, VA-GPT) and handle PII.
- List software included in deployment or generate SBOM
	- All software included and used by our team is part of Platform and managed by them.
- List all packages/plugins/modules/gems/etc. Include version numbers
	- All software included and used by our team is part of Platform and managed by them.

**Connections**

- List the connections your team makes/maintains with systems outside the Platform AWS Environment
	- Pega
	- VES
	- pdf2image_llm_processor/VA-GPT
- Do you have a POC? Please list
	- Pega: Cindy Carr
	- VES: Meenatchi Muthupalaniappan
	- pdf2image_llm_processor: Aaron Barth
- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
	- VA.gov -> vets-api: encrypted via HTTPS REST calls
	- vets-api -> Pega: S3 `put_object` call (encryption unknown - shared library)
	- vets-api -> VES: HTTPS plus API token
	- vets-api -> pdf2image_llm_processor: HTTPS plus API token
- List the types of PII shared (in each direction) with this connection
	- Pega: PII (form submissions) and PHI (via supporting documents)
	- VES: PII (metadata used to create forms - same information)
	- pdf2image_llm_processor: PII and PHI (supporting documents may contain PII and PHI, and are uploaded to this middleware which is approved for PII/PHI)
- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it
	- Pega: TODO
	- VES is pending
	- pdf2image_llm_processor/VA-GPT: n/a

**Provide a data flow diagram that shows your product’s relationship to Platform**

[Architecture Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/architecture_diagram_v2.md)
