# Existing Pre-fill code references

Some applications will have their own alert that was created, and some applications use a more generic platform wide alert component to reduce duplicated code. Maybe some applications could be convinced to use the platform wide alert version?

## Platform level components that are set up for re-use on any application
_These two components are used platform wide when custom language isn't used, and all their instances of usage are documented in the [Usages of the 'PrefillMessage' or 'MilitaryPrefillMessage](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/authenticated-patterns/engineering/Prefill-existing-usage-notes.md#usages-of-the-prefillmessage-or-militaryprefillmessage) section_

Main prefill message
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/save-in-progress/PrefillMessage.jsx
> We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

Military prefill message
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx
> We’ve prefilled some of your military service details from your account. If you need to correct anything, you can edit the form fields below.

## Application specific instances of the pre-fill alert component

Ask-VA
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ask-va/components/PrefillAlertAndTitle.jsx

> We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below. Any updates you make here to your contact information will only apply to this form.

Burials-ez
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/burials-ez/components/PrefillMessage.jsx
> We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

Burials-v2
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/burials-v2/components/PrefillMessage.jsx
> We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

Edu-benefits
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/edu-benefits/10203/content/PrefillMessage.jsx
> We've prefilled this application with information from your account. If you need to correct anything, you can edit the form fields.

Ivc-champva / 10-7959f-1
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ivc-champva/10-7959f-1/helpers/prefilledAddress.jsx
> We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

pre-need-integration
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/pre-need-integration/utils/helpers.js
> We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below. 
_They have a slightly different section of content for an applicant sponsor_ - We’ve prefilled your details since you indicated you’re the applicant’s sponsor. If you need to correct anything, you can edit the fields below.

representative-appoint
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/representative-appoint/components/PrefillAlert.jsx
> This is the personal information we have on file for you.

### Usages of the 'PrefillMessage' or 'MilitaryPrefillMessage'

Below are the general file path / file name follow by line specific usages as of July 15, 2024

**136 results - 41 files**

You can effectively ignore any of the 'daily-product-scan' based references as these are platform level test code, so I put them all in an expanding accordion to hide them away.

<details>
  <summary>View all occurrences in 'daily-product-scan' folder</summary>

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/militaryService/additionalInformation.js:

```
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import MilitaryPrefillMessage from 'platform/forms/save-in-progress/MilitaryPrefillMessage';
   3  

  18      'ui:title': 'Service history',
  19:     'ui:description': MilitaryPrefillMessage,
  20      'view:textObject': {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/militaryService/serviceInformation.js:
```
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import MilitaryPrefillMessage from 'platform/forms/save-in-progress/MilitaryPrefillMessage';
   3  import dateUI from 'platform/forms-system/src/js/definitions/date';

  17    uiSchema: {
  18:     'ui:description': MilitaryPrefillMessage,
  19      lastServiceBranch: {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/vaBenefits/basicInformation.js:
```
   3  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import CustomReviewField from '../../../components/CustomReviewField';

  38      'ui:title': 'Current compensation from VA',
  39:     'ui:description': PrefillMessage,
  40      'view:compDesc': {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/vaBenefits/pensionInformation.js:
```
   4  // eslint-disable-next-line deprecate/import
   5: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   6  import CustomReviewField from '../../../components/CustomReviewField';

  36      'ui:title': 'Current compensation',
  37:     'ui:description': PrefillMessage,
  38      'view:compDesc': {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/birthSex.js:
```
   6  // eslint-disable-next-line deprecate/import
   7: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   8  import CustomReviewField from '../../../components/CustomReviewField';

  42    uiSchema: {
  43:     'ui:description': PrefillMessage,
  44      gender: {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/contactInformation.js:
```
   3  import phoneUI from 'platform/forms-system/src/js/definitions/phone';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import { validateMatch } from 'platform/forms-system/src/js/validation';

  11    uiSchema: {
  12:     'ui:description': PrefillMessage,
  13      'ui:validations': [validateMatch('email', 'view:emailConfirmation')],
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/demographicInformation.js:
```
   2  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  

  19      <>
  20:       <PrefillMessage {...props} />
  21  
```


script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/maritalStatus.js:
```
   3  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import CustomReviewField from '../../../components/CustomReviewField';

  29    uiSchema: {
  30:     'ui:description': PrefillMessage,
  31      maritalStatus: {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/veteranAddress.js:
```
   5  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   6: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   7  import { AddressDescription } from '../../../components/ContentComponents';

  14    uiSchema: {
  15:     'ui:description': PrefillMessage,
  16      veteranAddress: merge({}, addressUI('Mailing address', true), {
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/veteranGender.js:
```
   4  
   5: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   6  import CustomReviewField from '../../../components/CustomReviewField';

  12      <div className="vads-u-margin-bottom--4">
  13:       <PrefillMessage {...props} />
  14  
```

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/veteranHomeAddress.js:
```
   5  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   6: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   7  import { AddressDescription } from '../../../components/ContentComponents';

  14    uiSchema: {
  15:     'ui:description': PrefillMessage,
  16      veteranHomeAddress: merge({}, addressUI('Home address', true), {
```


</details>


babel.config.json: (also non-application usage)

```
  227            "@department-of-veterans-affairs/platform-forms/save-in-progress/helpers": "./src/platform/forms/save-in-progress/helpers.js",
  228:           "@department-of-veterans-affairs/platform-forms/MilitaryPrefillMessage": "./src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx",
  229:           "@department-of-veterans-affairs/platform-forms/PrefillMessage": "./src/platform/forms/save-in-progress/PrefillMessage.jsx",
  230            "@department-of-veterans-affairs/platform-forms/reducers": "./src/platform/forms/save-in-progress/reducers.js",
```


src/applications/burials/components/ApplicantDescription.jsx:
```
   3  
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  

  12      </p>
  13:     <PrefillMessage formContext={formContext} />
  14    </div>
```

src/applications/burials-ez/components/ApplicantDescription.jsx:

```
   3  
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  

  12      </p>
  13:     <PrefillMessage formContext={formContext} />
  14    </div>
```

src/applications/burials-ez/components/PrefillMessage.jsx:

```
  4  
  5: export default function PrefillMessage() {
  6    const loggedIn = useSelector(isLoggedIn);
```

src/applications/burials-ez/config/chapters/01-claimant-information/personalInformation.js:

```
   7  } from 'platform/forms-system/src/js/web-component-patterns';
   8: import PrefillMessage from '../../../components/PrefillMessage';
   9  import { generateTitle } from '../../../utils/helpers';

  20      'ui:title': generateTitle('Personal information'),
  21:     'ui:description': PrefillMessage,
  22      claimantFullName: fullNameUI(),
```

src/applications/burials-v2/components/ApplicantDescription.jsx:
```
   3  
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  

  12      </p>
  13:     <PrefillMessage formContext={formContext} />
  14    </div>
```

src/applications/burials-v2/components/PrefillMessage.jsx:
```
  4  
  5: export default function PrefillMessage() {
  6    const loggedIn = useSelector(isLoggedIn);

src/applications/burials-v2/config/chapters/01-claimant-information/personalInformation.js:
   7  } from 'platform/forms-system/src/js/web-component-patterns';
   8: import PrefillMessage from '../../../components/PrefillMessage';
   9  import { generateTitle } from '../../../utils/helpers';

  20      'ui:title': generateTitle('Personal information'),
  21:     'ui:description': PrefillMessage,
  22      claimantFullName: fullNameUI(),
```

src/applications/edu-benefits/0993/config/form.js:
```
   5  import environment from 'platform/utilities/environment';
   6: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   7  import FormFooter from 'platform/forms/components/FormFooter';

  76            uiSchema: {
  77:             'ui:description': PrefillMessage,
  78              claimantFullName: fullNameUI,
```

src/applications/edu-benefits/10203/content/ApplicantDescription.jsx:
```
   1  import React from 'react';
   2: import PrefillMessage from './PrefillMessage';
   3  

  10        </p>
  11:       <PrefillMessage formContext={formContext} />
  12      </div>
```

src/applications/edu-benefits/10203/content/PrefillMessage.jsx:
```
  5  
  6: export default function PrefillMessage({ children, formContext }) {
  7    if (!formContext.prefilled) {
```

src/applications/edu-benefits/10203/tests/content/PrefillMessage.jsx.unit.spec.jsx:
```
   4  
   5: import PrefillMessage from '../../content/PrefillMessage';
   6  
   7: describe('PrefillMessage', () => {
   8    it('renders null when form is not prefilled', () => {
   9      const wrapper = shallow(
  10:       <PrefillMessage formContext={{ prefilled: false }} />,
  11      );

  17      const wrapper = shallow(
  18:       <PrefillMessage formContext={{ prefilled: true }} />,
  19      );

  29      const wrapper = shallow(
  30:       <PrefillMessage formContext={{ prefilled: true }}>
  31          {customMessage}
  32:       </PrefillMessage>,
  33      );
```

src/applications/edu-benefits/feedback-tool/helpers.js:
```
   35  // These flags will be used for each form page's call to
   36: // conditionalPrefillMessage()
   37  export const PREFILL_FLAGS = {

  408   */
  409: export function conditionallyShowPrefillMessage(
  410    prefillFlag,
```

src/applications/edu-benefits/feedback-tool/config/form.js:
```
    9  import fullNameUI from 'platform/forms/definitions/fullName';
   10: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   11  import dataUtils from 'platform/utilities/data/index';

   23    changeInDegreeLabel,
   24:   conditionallyShowPrefillMessage,
   25    creditTransferLabel,

  197              'ui:description': data =>
  198:               conditionallyShowPrefillMessage(
  199                  PREFILL_FLAGS.APPLICANT_INFORMATION,
  200                  data,
  201:                 PrefillMessage,
  202                ),

  245              'ui:description': data =>
  246:               conditionallyShowPrefillMessage(
  247                  PREFILL_FLAGS.SERVICE_INFORMATION,
  248                  data,
  249:                 PrefillMessage,
  250                ),

  273              'ui:description': data =>
  274:               conditionallyShowPrefillMessage(
  275                  PREFILL_FLAGS.CONTACT_INFORMATION,
  276                  data,
  277:                 PrefillMessage,
  278                ),
```

src/applications/edu-benefits/feedback-tool/tests/helpers.unit.spec.js:
```
    9  import {
   10:   conditionallyShowPrefillMessage,
   11    PREFILL_FLAGS,

  435  
  436:   describe('conditionalPrefillMessage', () => {
  437      let messageComponent;

  446      it('calls the `messageComponent` param if the correct flag is set on data.formData', () => {
  447:       const result = conditionallyShowPrefillMessage(
  448          'goodFlag',

  455      it('does not call the `messageComponent` param if the correct flag is not set data.formData', () => {
  456:       const result = conditionallyShowPrefillMessage(
  457          'badFlag',
```

src/applications/ezr/config/chapters/householdInformation/maritalStatus.js:
```
   1  import ezrSchema from 'vets-json-schema/dist/10-10EZR-schema.json';
   2: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   3  import {

  14    uiSchema: {
  15:     ...descriptionUI(PrefillMessage, { hideOnReview: true }),
  16      'view:maritalStatus': {
```

src/applications/ezr/config/chapters/insuranceInformation/medicaid.js:
```
   1: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   2  import {

  11    uiSchema: {
  12:     ...descriptionUI(PrefillMessage, { hideOnReview: true }),
  13      'view:isMedicaidEligible': {
```

src/applications/ezr/config/chapters/veteranInformation/mailingAddress.js:
```
   2  import ezrSchema from 'vets-json-schema/dist/10-10EZR-schema.json';
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import {

  20    uiSchema: {
  21:     ...descriptionUI(PrefillMessage, { hideOnReview: true }),
  22      'view:pageTitle': titleUI(
```

src/applications/hca/config/chapters/militaryService/serviceInformation.js:
```
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import MilitaryPrefillMessage from 'platform/forms/save-in-progress/MilitaryPrefillMessage';
   3  import dateUI from 'platform/forms-system/src/js/definitions/date';

  20    uiSchema: {
  21:     'ui:description': MilitaryPrefillMessage,
  22      lastServiceBranch: {
```

src/applications/hca/config/chapters/veteranInformation/birthSex.js:
```
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import PrefillMessage from '~/platform/forms/save-in-progress/PrefillMessage';
   3  import { genderLabels } from '~/platform/static-data/labels';

  12    uiSchema: {
  13:     'ui:description': PrefillMessage,
  14      'view:birthSexShortFormMessage': {
```

src/applications/simple-forms/26-4555/pages/contactInformation1.js:
```
   3  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import {

  19    uiSchema: {
  20:     'ui:description': PrefillMessage,
  21      [veteranFields.parentObject]: {
```

src/applications/simple-forms/26-4555/pages/contactInformation2.js:
```
   2  
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';

  24    uiSchema: {
  25:     'ui:description': PrefillMessage,
  26      [veteranFields.parentObject]: {
```

src/applications/simple-forms/26-4555/pages/personalInformation1.js:
```
   2  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import {

  17    uiSchema: {
  18:     'ui:description': PrefillMessage,
  19      [veteranFields.parentObject]: {
```

src/applications/simple-forms/26-4555/pages/personalInformation2.js:
```
   2  
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';

  18    uiSchema: {
  19:     'ui:description': PrefillMessage,
  20      [veteranFields.parentObject]: {
```

src/platform/forms/exportsFile.js:
```
   86  
   87: import MilitaryPrefillMessage from './save-in-progress/MilitaryPrefillMessage';
   88: import PrefillMessage from './save-in-progress/PrefillMessage';
   89  

  210    createRoutesWithSaveInProgress,
  211:   MilitaryPrefillMessage,
  212:   PrefillMessage,
  213    saveInProgressReducers,
```

src/platform/forms/package.json:
```
  35      "./save-in-progress/helpers": "./save-in-progress/helpers.js",
  36:     "./MilitaryPrefillMessage": "./MilitaryPrefillMessage.jsx",
  37:     "./PrefillMessage": "./save-in-progress/PrefillMessage.jsx",
  38      "./reducers": "./save-in-progress/reducers.js",
```

src/platform/forms/components/ApplicantDescription.jsx:
```
   1  import React from 'react';
   2: import PrefillMessage from '../save-in-progress/PrefillMessage';
   3  

  10        </p>
  11:       <PrefillMessage formContext={formContext} />
  12      </div>
```

src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx:
```
  1  import React from 'react';
  2: import PrefillMessage from './PrefillMessage';
  3  
  4: export default function MilitaryPrefillMessage(props) {
  5    return (
  6:     <PrefillMessage {...props}>
  7        We’ve prefilled some of your military service details from your account.
  8        If you need to correct anything, you can edit the form fields below.
  9:     </PrefillMessage>
  10    );
```

src/platform/forms/save-in-progress/PrefillMessage.jsx:
```
  5  
  6: export default function PrefillMessage({ children, formContext }) {
  7    if (!formContext.prefilled) {
```

src/platform/forms/tests/save-in-progress/PrefillMessage.unit.spec.jsx:
```
   4  
   5: import PrefillMessage from '../../save-in-progress/PrefillMessage';
   6  
   7: describe('Schemaform <PrefillMessage>', () => {
   8    it('should render', () => {
   9:     const tree = shallow(<PrefillMessage formContext={{ prefilled: true }} />);
  10  

  14    it('should not render when not prefilled', () => {
  15:     const tree = shallow(<PrefillMessage formContext={{ prefilled: false }} />);
  16  

  21      const tree = shallow(
  22:       <PrefillMessage formContext={{ prefilled: true }}>
  23          Test message
  24:       </PrefillMessage>,
  25      );
```


## Form apps that prefillEnabled set to true

Within a form app's main config there is a property to allow prefill and this table tracks which forms have that set to true.

If the form has prefill enabled, then shouldn't there be the prefill component present somewhere within the form? We should continue to evaluate these forms one by one probably to see where the UX could be improved and what effect prefill has on their form flow.

The technical documentation for prefill is here: https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill

| File                                                                         | App Name                                                                                    | Root URL                                                                                                     |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| src/applications/mock-sip-form/config/form.js                                | Mock SIP Form                                                                               | /mock-sip-form                                                                                               |
| src/applications/toe/config/form.js                                          | Apply to use transferred education benefits                                                 | /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e                          |
| src/applications/ask-va/config/form.js                                       | Ask VA                                                                                      | /contact-us/ask-va-too                                                                                       |
| src/applications/hca/config/form.js                                          | 1010ez Health Care Application form                                                         | /health-care/apply-for-health-care-form-10-10ez                                                              |
| src/applications/vre/25-8832/config/form.js                                  | Apply for Personalized Career Planning and Guidance with VA Form 25-8832                    | /careers-employment/education-and-career-counseling/apply-career-guidance-form-25-8832                       |
| src/applications/vre/28-1900/config/form.js                                  | 28-1900 Veteran Readiness                                                                   | /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900                                         |
| src/applications/accreditation/21a/config/form.js                            | Apply to become a VA accredited attorney or claims agent                                    | /accreditation/attorney-claims-agent-form-21a                                                                |
| src/applications/pre-need/config/form.jsx                                    | 40-10007 pre need burial planning form                                                      | /burials-and-memorials/pre-need/form-10007-apply-for-eligibility                                             |
| src/applications/disability-benefits/686c-674/config/form.js                 | 686C-674                                                                                    | /view-change-dependents/add-remove-form-21-686c                                                              |
| src/applications/disability-benefits/2346/config/form.js                     | Order hearing aid or CPAP supplies                                                          | /health-care/order-hearing-aid-batteries-and-accessories/order-form-2346                                     |
| src/applications/disability-benefits/all-claims/config/form.js               | 21-526EZ disability compensation claim form                                                 | /disability/file-disability-claim-form-21-526ez                                                              |
| src/applications/disability-benefits/686c-674-v2/config/form.js              | 686C-674-v2                                                                                 | /view-change-dependents/add-remove-form-21-686c-v2                                                           |
| src/applications/edu-benefits/10203/config/form.js                           | 22-10203 Education benefits form                                                            | /education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203                  |
| src/applications/edu-benefits/5495/config/form.js                            | 22-5495 Education benefits form                                                             | /education/apply-for-education-benefits/application/5495                                                     |
| src/applications/edu-benefits/1995/config/form.js                            | 22-1995 Education benefits form                                                             | /education/apply-for-education-benefits/application/1995                                                     |
| src/applications/edu-benefits/1990e/config/form.js                           | 22-1990E Education benefits form                                                            | /education/apply-for-education-benefits/application/1990E                                                    |
| src/applications/edu-benefits/0993/config/form.js                            | Opt Out of Sharing VA Education Benefits Information                                        | /education/opt-out-information-sharing/opt-out-form-0993                                                     |
| src/applications/edu-benefits/0994/config/form.js                            | 22-0994 Education benefits form                                                             | /education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994 |
| src/applications/edu-benefits/5490/config/form.js                            | 22-5490 Education benefits form                                                             | /education/apply-for-education-benefits/application/5490                                                     |
| src/applications/edu-benefits/feedback-tool/config/form.js                   | GI Bill School Feedback Tool                                                                | /education/submit-school-feedback                                                                            |
| src/applications/edu-benefits/1990/config/form.js                            | 22-1990 Education benefits form                                                             | /education/apply-for-education-benefits/application/1990                                                     |
| src/applications/edu-benefits/1990n/config/form.js                           | 22-1990N Education benefits form                                                            | /education/apply-for-education-benefits/application/1990N                                                    |
| src/applications/edu-benefits/1990s/config/form.js                           | Veteran Rapid Retraining Assistance Program                                                 | /education/other-va-education-benefits/veteran-rapid-retraining-assistance/apply-for-vrrap-form-22-1990s     |
| src/applications/representative-appoint/config/form.js                       | Fill out your form to appoint a VA accredited representative or VSO                         | /get-help-from-accredited-representative/appoint-rep                                                         |
| src/applications/health-care-supply-reordering/config/form.js                | Order hearing aid or CPAP supplies                                                          | /health-care/order-hearing-aid-or-CPAP-supplies-form                                                         |
| src/applications/burials-ez/config/form.js                                   | 21P-530EZ Burials benefits form                                                             | /burials-memorials/veterans-burial-allowance/apply-for-burial-benefits                                       |
| src/applications/ivc-champva/10-7959f-2/config/form.js                       | Foreign Medical Program  Cover Sheet                                                        | /health-care/foreign-medical-program/file-claim-form-10-7959f-2                                              |
| src/applications/ivc-champva/10-7959C/config/form.js                         | 10-7959C CHAMPVA Other Health Insurance Certification form                                  | /health-care/champva/other-insurance-form-10-7959c                                                           |
| src/applications/ivc-champva/10-7959f-1/config/form.js                       | Foreign Medical Program (FMP) Registration Form                                             | /health-care/foreign-medical-program/register-form-10-7959f-1                                                |
| src/applications/ivc-champva/10-7959a/config/form.js                         | 10-7959a CHAMPVA Claim Form                                                                 | /family-and-caregiver-benefits/health-and-disability/file-champva-claim-10-7959a                             |
| src/applications/ivc-champva/10-10D/config/form.js                           | 10-10d Application for CHAMPVA benefits                                                     | /family-and-caregiver-benefits/health-and-disability/champva/apply-form-10-10d                               |
| src/applications/ezr/config/form.js                                          | 10-10EZR Update health benefits info form                                                   | /my-health/update-benefits-information-form-10-10ezr                                                         |
| src/applications/appeals/996/config/form.js                                  | Request for Higher-Level Review                                                             | /decision-reviews/higher-level-review/request-higher-level-review-form-20-0996                               |
| src/applications/appeals/995/config/form.js                                  | File a Supplemental Claim                                                                   | /decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995                                    |
| src/applications/appeals/testing/hlr/config/form.js                          | HLR testing                                                                                 | /decision-reviews/testing/hlr                                                                                |
| src/applications/appeals/testing/nod-new/config/form.js                      | Request a Board Appeal                                                                      | /decision-reviews/testing/nod-new                                                                            |
| src/applications/appeals/10182/config/form.js                                | Request a Board Appeal                                                                      | /decision-reviews/board-appeal/request-board-appeal-form-10182                                               |
| src/applications/sah/sahg/config/form.js                                     | Apply for Specially Adapted Housing Grant                                                   | /specially-adapted-housing-grant                                                                             |
| src/applications/benefit-eligibility-questionnaire/config/form.js            | Benefit Eligibility Questionnaire                                                           | /benefit-eligibility-questionnaire                                                                           |
| src/applications/pensions/config/form.js                                     | 21-527EZ pension benefits form                                                              | /pension/apply-for-veteran-pension-form-21p-527ez                                                            |
| src/applications/coronavirus-research/sign-up/config/form.js                 | Coronavirus Research - Volunteer                                                            | /coronavirus-research/volunteer                                                                              |
| src/applications/coronavirus-research/update/config/form.js                  | Coronavirus Research - Update                                                               | /coronavirus-research/volunteer/update                                                                       |
| src/applications/burials-v2/config/form.js                                   | 21P-530 Burials benefits form V2                                                            | /burials-and-memorials-v2/application/530                                                                    |
| src/applications/lgy/coe/form/config/form.js                                 | Apply for Certificate of Eligibility                                                        | /housing-assistance/home-loans/request-coe-form-26-1880                                                      |
| src/applications/lgy/coe/form/tests/content/LoggedInContent.unit.spec.jsx    | Apply for Certificate of Eligibility                                                        | /housing-assistance/home-loans/request-coe-form-26-1880                                                      |
| src/applications/lgy/coe/form/tests/content/NotLoggedInContent.unit.spec.jsx | Apply for Certificate of Eligibility                                                        | /housing-assistance/home-loans/request-coe-form-26-1880                                                      |
| src/applications/ask-a-question/form/form.js                                 | Contact Us                                                                                  | /ask-a-question                                                                                              |
| src/applications/simple-forms/21P-0847/config/form.js                        | Request to be a substitute claimant for a deceased claimant                                 | /supporting-forms-for-claims/substitute-claimant-form-21P-0847                                               |
| src/applications/simple-forms/21-10210/config/form.js                        | Submit a lay or witness statement to support a VA claim                                     | /supporting-forms-for-claims/lay-witness-statement-form-21-10210                                             |
| src/applications/simple-forms/21-4142/config/form.js                         | Authorize the release of non-VA medical information to VA                                   | /supporting-forms-for-claims/release-information-to-va-form-21-4142                                          |
| src/applications/simple-forms/mock-simple-forms-patterns/config/form.js      | Simple Forms Patterns                                                                       | /mock-simple-forms-patterns                                                                                  |
| src/applications/simple-forms/21-0845/config/form.js                         | Authorize VA to release your information to a third-party source                            | /supporting-forms-for-claims/third-party-authorization-form-21-0845                                          |
| src/applications/simple-forms/21-0972/config/form.js                         | Sign VA claim forms as an alternate signer                                                  | /supporting-forms-for-claims/alternate-signer-form-21-0972                                                   |
| src/applications/simple-forms/mock-simple-forms-patterns-v3/config/form.js   | Mock Form Patterns                                                                          | /mock-form-patterns                                                                                          |
| src/applications/simple-forms/20-10207/config/form.js                        | Request priority processing                                                                 | /supporting-forms-for-claims/request-priority-processing-form-20-10207                                       |
| src/applications/simple-forms/26-4555/config/form.js                         | 26-4555 Application in Acquiring Specially Adapted Housing or Special Home Adaptation Grant | /housing-assistance/disability-housing-grants/apply-for-grant-form-26-4555                                   |
| src/applications/simple-forms/20-10206/config/form.js                        | Request personal records                                                                    | /records/request-personal-records-form-20-10206                                                              |
| src/applications/simple-forms/21-4138/config/form.js                         | 21-4138 Statement in Support of a Claim                                                     | /supporting-forms-for-claims/statement-to-support-claim-form-21-4138                                         |
| src/applications/simple-forms/21-0966/config/form.js                         | Submit an intent to file                                                                    | /supporting-forms-for-claims/intent-to-file-form-21-0966                                                     |
| src/applications/my-education-benefits/config/form.js                        | My Education Benefits                                                                       | /education/apply-for-benefits-form-22-1990                                                                   |
| src/applications/travel-pay/config/form.js                                   | Check travel claim status                                                                   | /my-health/travel-claim-status                                                                               |
| src/applications/burials/config/form.js                                      | 21P-530 Burials benefits form                                                               | /burials-and-memorials/application/530                                                                       |
| src/applications/financial-status-report/config/form.js                      | Financial Status Report                                                                     | /manage-va-debt/request-debt-help-form-5655                                                                  |
| src/applications/pre-need-integration/config/form.jsx                        | 40-10007 pre need burial planning form                                                      | /burials-and-memorials/pre-need-integration                                                                  |
| src/applications/fry-dea/config/form.js                                      | Fry/DEA — VA Education Benefits For Survivors And Dependents                                | /fry-dea                                                                                                     |


## Notes on SaveInProgressIntro component

- component handles not only the save in progress messaging, but also the prefill within a singular alert
- this alert is only shown if the user is already signed in and their application hasn't expired (60 days old), otherwise they will see language around signing in and what benefits being signed in will provide in relation to saving the form and prefill

Main alert (authenticated):

```
<va-alert status="info" uswds visible>
              <div className="usa-alert-body">
                <strong>Note:</strong> Since you’re signed in to your account,
                we can prefill part of your {appType} based on your account
                details. You can also save your {appType} in progress and come
                back later to finish filling it out.
              </div>
            </va-alert>

appType is usually 'application' unless explicitly declared in the formConfig.customText.appType

```

Unauthenticated content
Some content is dependent on 'displayNonVeteranMessaging' although not sure how you could determine that without the user being signed in already.
```
{this.props.displayNonVeteranMessaging ? (
                <p>
                  By signing in, you can save your work in progress.{' '}
                  You&rsquo;ll have {retentionPeriod} from{' '}
                  {retentionPeriodStart} your {appType} to come back and finish
                  it.
                </p>
              ) : (
                <>
                  <p>Here&rsquo;s how signing in now helps you:</p>
                  {signInHelpList ? (
                    signInHelpList()
                  ) : (
                    <ul>
                      <li>
                        We can fill in some of your information for you to save
                        you time.
                      </li>
                      <li>
                        You can save your work in progress. You&rsquo;ll have{' '}
                        {retentionPeriod} from {retentionPeriodStart} your{' '}
                        {appType} to come back and finish it.
                      </li>
                    </ul>
                  )}
                </>
              )}
```


