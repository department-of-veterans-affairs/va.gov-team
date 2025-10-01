## Creating Your Team README

- To create a copy of this template, click "Edit" then copy all of the content within the file. Within your team folder, which is located in a folder for your team's portfolio, create a new file called "README.md" and paste this content.
- Update and complete as applicable to your team. Replace all bracketed placeholders with your actual team information.
- This template is designed to be parsed by an automated system, named Manifest, to display team rosters, product owner classifications, and organizational affiliations. Thus please don't make changes to the format in the Team Information section. Do your best to fill out all parts of that section (rather than putting n/a ask for help as every team should have this information)
- Copy the [Product details template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/product-details-template.yml) from the public va.gov-team repository into each product directory of the products your team works on. Name the file "[product-name]-details.yml". Then complete that file to the best of your ability for your product. Not all fields are required.
    - Then link to each of your products in your team README.md file in the "Products we own" section using the full GitHub URL to the public repository.
- Delete the reference to these instructions when you are done.

## Template Overview

The team README template is structured to provide consistent information across all teams:

### Team Information Section

This section is parsed by automated systems and should maintain its exact format:

- **Basic Details:** Team identification and contact information
- **Organizational Affiliation:** VA business alignment and reporting structure  
- **Team Roster:** Key team member contact information

### Additional Sections

- **About This Team:** Brief mission and focus description
- **Products We Own:** Links to product details with descriptions
- **Aligned to 2025 OCTO OKRs:** Strategic alignment documentation
- **Key Documents:** Links to team charter and other important documents

## Important Notes

### Dual-Repository Architecture

The team manifest system uses a dual-repository approach for data separation:

- **Team Information (Private):** Team READMEs, roster details, and organizational information are stored in this private repository to protect team PII
- **Product Information (Public):** Product details, descriptions, and documentation remain in the public va.gov-team repository for broader access

### Guidelines

- The directory system relies on the specific format of the "Team Information" section
- All bracketed placeholders `[like this]` should be replaced with actual information  
- Team names and portfolio assignments are used to organize the main teams manifest
- Product links should point to completed product-details.yml files in the /products directory of the public va.gov-team repository
- When linking to products, use full GitHub URLs (e.g., `https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/[product-name]/[product-name]-details.yml`)
