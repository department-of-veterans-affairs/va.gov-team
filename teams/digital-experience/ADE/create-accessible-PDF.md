# How the ADE team audits PDFs for accessibility

If you’re a new accessibility specialist supporting VA.gov or working on a product team that needs to publish a PDF, you might wonder how the Accessibility Digital Experience (ADE) team approaches the evaluation and auditing process for PDF accessibility. Since PDFs are still a common format for forms, letters, and informational documents across the VA, ensuring that they meet Section 508 and WCAG requirements is critical for Veterans, caregivers, and family members who rely on assistive technologies like screen readers, magnifiers, or voice control. Understanding ADE’s process not only helps you anticipate the level of effort required to remediate or rebuild a PDF, but also gives you insight into when it’s more appropriate to recommend HTML alternatives, how compliance is measured, and what tools or testing methods are used to identify accessibility barriers.

## On this page:
- What is a PDF audit?
- When does a PDF audit happen?
- What are the outcomes of a PDF audit?
- How long does a PDF audit take?
- What is tested during a PDF audit?
- What tools do we use?
- How do we estimate the effort?

## What is a PDF audit?
A PDF audit is a review of an existing non-HTML document against Section 508 and WCAG 2.1 AA standards. The focus is to evaluate whether the PDF is usable with assistive technology such as screen readers, keyboard navigation, and magnification tools.

 Unlike creating an accessible PDF from scratch, our role in a PDF audit is to:
- Assess the current state of accessibility
- Identify structural or tagging issues
- Provide a recommended remediation path or estimate effort for remediation

## When does it happen?
A PDF audit can happen in several scenarios:
- When a team proposes publishing a PDF instead of HTML
- When an existing PDF is already in use on VA.gov and needs accessibility verification
- When remediated PDFs are submitted for validation prior to publication
- As a best practice, request a PDF audit from the ADE team before uploading to production.

## What are the outcomes?
After ADE completes a PDF audit, the requesting team receives the following:
- An accessibility findings report summarizing issues, severity, and recommendations
- Guidance on whether remediation should occur at the source document level (Word, PowerPoint, InDesign, etc.) or in the PDF itself
- An estimate of effort to remediate
- In some cases, a CommonLook Accessibility Report to document compliance with a specific standard (WCAG 2.1 AA, PDF/UA, HHS, or Section 508).  For example, teams preparing to publish their PDFs on VA.gov may be asked to provide a formal accessibility compliance report, a governing body or program office needs proof of conformance with Section 508 before approving publication, or a vendor or contractor is required to show third-party verification of accessibility remediation.


## How long does it take?
The length of time that a PDF audit takes depends on the complexity of the PDF. Factors include the following:
- Number of pages
- Type of content (simple text vs. complex tables/forms)
- Whether the document is already tagged or completely untagged
- The quality of the source file (accessible Word vs. scanned image)

### Examples:
- 5–10 pages of mostly text: 1-2 days
- 20–30 pages with tables, lists, and forms: up to a week
- Large reports with hundreds of pages and images: several weeks

## What is tested?
We focus on these areas during a PDF audit:
- Tag structure: headings, paragraphs, lists, tables, and images
- Reading and tab order: logical flow for assistive tech
- Alternative text: meaningful descriptions for images
- Forms and interactive elements: correct labels, roles, and focus order
- Color and contrast: ensuring sufficient contrast in charts and visuals
- Metadata and document properties: title, language, bookmarks, and compliance settings

## What tools do we use?
### Our primary tool:
- CommonLook PDF Validator (Allyant): integrates with Adobe Acrobat, tests PDFs against accessibility standards, and generates compliance reports


### We may also use:
- Adobe Acrobat Pro DC: good for initial tagging, touch-up reading order, artifacting, and metadata
- axesPDF: a supplemental checker with limited functionality
- CommonLook is our gold standard because it validates compliance thoroughly and provides both structural and accessibility reports.

## How do we estimate effort?
After running an initial test in CommonLook and reviewing the tag tree, we categorize effort as one of the following:
- Low effort:  properly tagged PDFs needing only small fixes (metadata, a few alt texts, etc.)
- Medium effort: improperly tagged PDFs, completely untagged PDFs with low levels of visual information, improperly tagged PDFs with broken interactive elements
- High effort: completely untagged PDFs with significant numbers of figures and other visual information, PDFs with missing interactive elements (e.g., links, form fields, etc.)

 Sarah Koomson, ADE
`last updated 09/04/25`


