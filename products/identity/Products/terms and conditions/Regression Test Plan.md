Regression Test Plan for Terms of Use:

FE Regression:

Steps for content-build:

1) Navigate to content-build repository

2) Create a Pull Request that removes the Terms of Use block from the registry.json file

3) Merge that Pull Request

Steps for vets-website:

1) Navigate to vets-website repository

2) Create a Pull Request that does the following

      a) Delete the terms-of-use directory

      b) Delete the terms_of_use_enabled from the featureFlagNames.js file
  
3) Merge that pull request

Steps for vets-api:

1) Navigate to vets-api repository

2) Create a Pull Request that removes the terms_of_use_enabled block from the config/features.yml file

3) Merge that Pull Request


BE Regression:

Steps for vets-api:

1) SSOe disable: Create PR that removes apps from TERMS_OF_USE_ENABLED_CLIENTS in lib/saml/url_service.rb

2) SiS disable:  in the rails console, set enforced_terms on all ClientConfigs to nil
