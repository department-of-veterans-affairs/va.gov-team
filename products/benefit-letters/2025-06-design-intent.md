# Design Intent: Simplify downloading benefit letters to a single step

## Links
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97937)
- [Figma](https://www.figma.com/design/61I2UcRPJDXdw0xCl9BlEe/Your-VA-benefit-letters-and-documents?node-id=3696-6535&t=qEEEXmFH86iEvuY4-1)

## Background
Veterans often need a letter confirming their status to access other benefits. The “Your VA benefit letters and documents” page lets Veterans view and download their benefit-related letters and documents online.

## Problem statement
Veterans come to the “Your VA benefit letters and documents” page to access essential letters necessary for verifying their eligibility and status for other benefits. However, the page prioritizes editing the Veteran’s mailing address, and Veterans cannot view, download, or print their letters until they click the "View Letters" button at the bottom. This extra step creates unnecessary friction, making it harder for Veterans to quickly and efficiently obtain their benefit-related letters.

In addition, by making letter access appear dependent on a required mailing address, the current flow risks excluding Veterans who do not have a valid mailing address in their VA.gov profile.
![CleanShot 2025-06-30 at 15 20 28@2x](https://github.com/user-attachments/assets/04621ffa-ab9a-40b6-aecd-14df614f1e5b)


## Why this is important
The "VA Letters and Documents" page lets Veterans view and download essential letters provided by the VA that are needed to obtain additional benefits and services. In Q2 FY25, the letters app averaged 327,000 users/month.

If Veterans cannot access their VA Letters and Documents, they need to request that VA print and mail a copy, which delays Veterans’ ability to obtain their letter and contributes to VA's high printing/mailing costs.

## Evidence
### Key Metrics
- **Total Monthly Volume:** 250,000 users/month
- **Abandonment Rate:** 39%
![image](https://github.com/user-attachments/assets/44195d1a-f1ed-4e97-b824-6e9063b4bf3e)


## Design & accessibility goals

### Focus Veterans on the primary task of downloading VA letters and documents.
- Consolidate the Mailing address and benefit letters content onto a single screen.
- Remove the extra click to view and download documents.
- Provide guidance for people who don't have a stable mailing address (Edit address).
- Improve plain language descriptions of letters.
- Add clarifying language about editing the mailing address. 
- Ensure proper use of links and buttons and make sure all have unique descriptive text.

### Ensure all content elements are accessible and structured logically to reflect their meaning.
- Make button labels contextual depending on whether the Veteran uses the address they entered or the suggested address (Edit Address).
- Make sure all headers are nested properly for semantic and visual hierarchy.
- Improve breadcrumbs.
- Make sure the focus order for screen readers is managed correctly.
- Make sure PDF browser behavior is in line with the latest 508 and WCAG standards.

### Improve consistency and alignment with the VA platform.
- Getting alignment on mailing address patterns and how and why validation is used.
- Consistency on how we present and fetch downloadable PDFs.
- Catch Veterans who do not have a valid address and prompt them to add one immediately.
- Formalize the business logic for the Benefit Summary letter checkboxes.
- Test mailing address validation alerts (owned by Profile/MyVA).

## User stories

1. **User experience:** As a Veteran, when I visit the VA Letters and Documents page, I want to immediately see and download the specific letter I need with minimal friction.

3. **Accessibility:** As a Veteran using assistive technology, I want all buttons, links, headers, and breadcrumbs to have clear, descriptive labels and a logical reading order to navigate and understand the content confidently.

4. **Technical:** As a team that supports Veterans, we want to increase performance, improve system stability, and reduce server costs by making fewer unnecessary API calls.

## User flow
![CleanShot 2025-06-30 at 15 17 24@2x](https://github.com/user-attachments/assets/7235d348-7a67-4c69-adb4-52f59a3f5be6)

## Relevant background Information
- [Read me](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/README.md)
- [API documentation](https://developer.va.gov/explore/api/va-letter-generator/docs?version=current)
