# New VA.gov and Vets.gov Build structure
This is documentation for the new build structure for being able to build both vets.gov and preview.va.gov independently. Both will live in the same repo and have some shared assets.

Here is the old build structure:

```
vets-website
  - assets
  - config
  - content
  - docs
  - hooks
  - src
  - vendor
```

The new structure we are adding a ***va-gov*** folder. This is an exact duplicate of the ***content*** folder but with va.gov (brand-consolidation) specific code. All other assets will be shared.

```
vets-website
  - assets
  - config
  - content
  - docs
  - hooks
  - src
  - va-gov <------ Here is the new folder
  - vendor
```

Here is where the code lives:

```
vets-website
  - assets
  - config
  - content <--- vets.gov contents belong here
  - docs
  - hooks
  - src
  - va-gov <---- va.gov content belongs here
  - vendor
```

### Things to consider

- Because we do share code, we need to make sure any modifications or additions we make don't have adverse side effects that would cause issues in either one of the websites.

- If there is something that needs to be added or changed on both websites, then we would have to update them in each folder (content and va-gov).

### Run Builds Locally
When we are developing we need a way to run the different versions to check them and also develop them.

- vets.gov
        
      $ yarn watch
- va.gov

      $ yarn watch:devpreview
