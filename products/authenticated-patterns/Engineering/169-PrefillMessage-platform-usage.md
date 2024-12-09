# PrefillMessage Discovery

Most applications pull the content component from `platform/forms/save-in-progress/PrefillMessage` but some applications have created their own PrefillMessage component.

## Custom implementations

### Burials EZ
 ```
 src/applications/burials-ez/components/PrefillMessage.jsx
```

usage:
````
src/applications/burials-ez/config/chapters/01-claimant-information/personalInformation.js:8
````

### Edu Benefits - 10203
```
src/applications/edu-benefits/10203/content/PrefillMessage.jsx
```

usage:
```
src/applications/edu-benefits/10203/content/ApplicantDescription.jsx:2
```

```
src/applications/edu-benefits/10203/tests/content/PrefillMessage.jsx.unit.spec.jsx:5
```



## Platform level usage

Below is where the standard PrefillMessage component is used or referenced through application or platform level code

`babel.config.json` - configuration for babel code transpiling and path aliasing

`daily-product-scan folder` - these aren't production apps and can be basically ignored unless their tests fail during CI/CD. None of the component usage in this folder contains custom content or any usage issues. (9 occurrences)

`_mock-form-ae-design-patterns` - this is our mock app (4 occurrences)

| location                                                                   | notes                                                                         |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| src/applications/burials-ez/components/ApplicantDescription.jsx            |                                                                               |
| src/applications/edu-benefits/0993/config/form.js                          |                                                                               |
| src/applications/edu-benefits/feedback-tool/config/form.js                 |                                                                               |
| src/applications/ezr/config/chapters/householdInformation/maritalStatus.js |                                                                               |
| src/applications/ezr/config/chapters/insuranceInformation/medicaid.js      |                                                                               |
| src/applications/ezr/config/chapters/veteranInformation/mailingAddress.js  |                                                                               |
| src/applications/hca/config/chapters/veteranInformation/birthSex.js        |                                                                               |
| src/applications/simple-forms/26-4555/pages/contactInformation1.js         |                                                                               |
| src/applications/simple-forms/26-4555/pages/contactInformation2.js         |                                                                               |
| src/applications/simple-forms/26-4555/pages/personalInformation1.js        |                                                                               |
| src/applications/simple-forms/26-4555/pages/personalInformation2.js        |                                                                               |
| src/platform/forms/exportsFile.js                                          | platform level export for import usage in yarn workspaces                     |
| src/platform/forms/package.json                                            | platform level package.json                                                   |
| src/platform/forms/components/ApplicantDescription.jsx                     | this is used in various apps but is using the standard PrefillMessage content |
| src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx             | this is the main usage that has custom text content                           |
| src/platform/forms/tests/save-in-progress/PrefillMessage.unit.spec.jsx     | test for component                                                            |
| src/platform/forms/save-in-progress/PrefillMessage.jsx                     | component source                                                              |


## Conclusion
Our investigation of the PrefillMessage component usage across the platform revealed:

Most applications appropriately use the standard platform-level component from platform/forms/save-in-progress/PrefillMessage
Two applications maintain custom implementations that should be evaluated for standardization:

Burials EZ (src/applications/burials-ez/components/PrefillMessage.jsx)
Edu Benefits 10203 (src/applications/edu-benefits/10203/content/PrefillMessage.jsx)

All other instances of the component are either:

- Standard platform-level implementations
- Test files
- Configuration references
- Mock/non-production applications

### Recommendation: 
Consider migrating the two custom implementations to use the platform-level component for better maintainability and consistency.
However, any migration effort should be coordinated with planned content updates to the platform-level component to avoid duplicate work 
and ensure all applications' needs are met in the standardized version. If there are custom content needs, then there should be a maintained content component or variable that is used to
'switch' to that component instead of allowing any content to be passed into the PrefillMessage component.


