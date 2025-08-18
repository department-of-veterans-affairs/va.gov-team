# Ask VA overview for VA.gov Platform.md
This doc provided requested info for the VA.gov Platform team as they're defining their security boundary. VFS teams are included in VA.gov's Authority to Operate (ATO). This is also just a helpful overview for Ask VA!

The Veteran-Facing Services Platform ATO boundary includes all environments: Dev, Staging, Utility, Sandbox, and Production, as well as all VFS teams/Products, Platform teams, CMS, VA Notify, and VA Mobile. If the environments your team uses have different configurations, we will need this information for each environment.

In this doc:
- [POC](#POC)
- AWS Resources
- [Repos](#repos)
- Tools
- Connections
- Data flow diagram

## POC
- **Name of your product**: Ask VA 
- **Purpose**: Ask VA (AVA) is a digital support channel for Veterans, family members and other submitters. You can use Ask VA to ask a question about education benefits, disability compensation, health care and many other topics. Ask VA should only be used for non-urgent needs. You can reach Ask VA at [va.gov/contact-us/ask-va](https://www.va.gov/contact-us/ask-va/).
- **Expected duration**: Indefinite. Current base Period of performance (PoP) for the Ask VA VA.gov team is 8/12/25 to 8/11/26.
  
## AWS Resources

---
- List AWS services used
   - Note: Anything in VA.gov AWS platform account that's currently used 
- Describe named instances of each service used
- Which of your resources handle PII/PHI/SPI/etc...? List the types of PII
- Do you utilize any other cloud resources beyond VA.gov?

## Repos
- **Repos**: [ask-va](https://github.com/department-of-veterans-affairs/ask-va) | POC: @beckyphung
---
- List repos maintained by your team, provide links
- List repos used by your team, provide links
   - Note: if using open source software too. If pointing to other githubs. esp if it's critical for software to work 
- Do you have a POC for each repo? Please list – Individuals are preferred, but groups are acceptable
   - Note: Not for open source, but any VA repos that we're dependent on 
- List other groups you know use your repos
 
## Tools
[Ask VA info]
---
- List CI/CD or Infrastructure as Code tools
- Describe where each tool is hosted and if they handle PII
- List software included in deployment or generate SBOM
- List all packages/plugins/modules/gems/etc. Include version numbers
 
## Connections
**Most important question

|System|Description|Internal/External to VA|POC|Encryption|Types of PII shared|MOU/ISA/IAA/other formal agreement?|
|---|---|---|---|---|---|---|
|Ask VA CRM|Backend CRM system containing Ask VA data and where VA agents respond to user questions|Internal to VA|Natalie Morales|[View example payloads](https://github.com/department-of-veterans-affairs/vets-api/blob/cbd946340354b964d205befc301698d325ee265d/modules/ask_va_api/spec/support/shared_contexts.rb#)<br>- Name, Date of Birth, SSN or Service number, Address, Phone number, Email address, Question from user (which sometimes contains PII because it's free text)<br>- In some cases, we get Business email from CRM and display it to the user|x|MOU in-progress|
|VA Facilities API (Health facilities)|Get list of health facilities when form asks for health facility ([view field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Field%20rules.md#health-facility))|Internal to VA|x|x|x|x|
|Education facilities|Get list of education facilities when form asks for education facility ([view field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Field%20rules.md#school-fields))|Internal to VA|x|x|x|x|
|Address Validation API|Validate address when form asks for address ([view field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Location%20and%20postal%20code.md#1-general-rules))|Internal to VA|x|x|x|x|
|Mapbox|x|External to VA|x|x|x|x|
|Datadog|x|x|x|x|x|x|
|Google Analytics 4 (GA4)|x|x|x|x|x|x|
|[Other systems]|x|x|x|x|x|

---
- List the connections your team makes/maintains with systems outside the Platform AWS Environment
   - Note: Ex: Datadog, GA4, VBA, Search.gov, ID.me, etc....  
- Are these connections Internal or External to the VA?
- Do you have a POC? Please list
   - Note: Person preferred, but office fine 
- Describe the encryption used for the connection in transit (e.g., Not Encrypted, TLS 1.2, TLS 1.3, mTLS). Specify the certificate source if applicable (e.g., AWS ACM, Let's Encrypt, self-signed)
   - Note: Don't need to know expiration 
- List the types of PII shared (in each direction) with this connection
- Do you have an MOU, ISA, IAA, or other formal agreement that documents this connection? If so, please provide it

## Data flow diagram
- [**Data flow diagram**](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/ask-va/data-flow-20250106.md)
