# Existing Pre-fill code references

Some applications will have their own alert that was created, and some applications use a more generic platform wide alert component to reduce duplicated code. Maybe some applications could be convinced to use the platform wide alert version?
## The pre-fill alert component (or some derivative of it in language)

### 'core' components that are set up on the platform level around the pre-fill alert

https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/save-in-progress/PrefillMessage.jsx

We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

platform/save-in-progress

https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx
We’ve prefilled some of your military service details from your account. If you need to correct anything, you can edit the form fields below.

### application specific instances of the pre-fill alert component

Ask-VA
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ask-va/components/PrefillAlertAndTitle.jsx

We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below. Any updates you make here to your contact information will only apply to this form.

Burials-ez
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/burials-ez/components/PrefillMessage.jsx

We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

Burials-v2
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/burials-v2/components/PrefillMessage.jsx

We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

Edu-benefits
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/edu-benefits/10203/content/PrefillMessage.jsx

We've prefilled this application with information from your account. If you need to correct anything, you can edit the form fields.

Ivc-champva / 10-7959f-1
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ivc-champva/10-7959f-1/helpers/prefilledAddress.jsx

We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

pre-need-integration
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/pre-need-integration/utils/helpers.js

We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below. 
_They have a slightly different section of content for an applicant sponsor_ - We’ve prefilled your details since you indicated you’re the applicant’s sponsor. If you need to correct anything, you can edit the fields below.

representative-appoint
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/representative-appoint/components/PrefillAlert.jsx

This is the personal information we have on file for you.

### Usages of the 'PrefillMessage' or 'MilitaryPrefillMessage'

Below are the general file path / file name follow by line specific usages as of July 15, 2024

136 results - 41 files

babel.config.json: (non-application usage)
  227            "@department-of-veterans-affairs/platform-forms/save-in-progress/helpers": "./src/platform/forms/save-in-progress/helpers.js",
  228:           "@department-of-veterans-affairs/platform-forms/MilitaryPrefillMessage": "./src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx",
  229:           "@department-of-veterans-affairs/platform-forms/PrefillMessage": "./src/platform/forms/save-in-progress/PrefillMessage.jsx",
  230            "@department-of-veterans-affairs/platform-forms/reducers": "./src/platform/forms/save-in-progress/reducers.js",

You can effectively ignore any of the 'daily-product-scan' based references as these are platform level test code, so I put them all in an expanding accordion to hide them away.

<details>
  <summary>View all occurrences in 'daily-product-scan' folder</summary>

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/militaryService/additionalInformation.js:
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import MilitaryPrefillMessage from 'platform/forms/save-in-progress/MilitaryPrefillMessage';
   3  

  18      'ui:title': 'Service history',
  19:     'ui:description': MilitaryPrefillMessage,
  20      'view:textObject': {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/militaryService/serviceInformation.js:
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import MilitaryPrefillMessage from 'platform/forms/save-in-progress/MilitaryPrefillMessage';
   3  import dateUI from 'platform/forms-system/src/js/definitions/date';

  17    uiSchema: {
  18:     'ui:description': MilitaryPrefillMessage,
  19      lastServiceBranch: {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/vaBenefits/basicInformation.js:
   3  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import CustomReviewField from '../../../components/CustomReviewField';

  38      'ui:title': 'Current compensation from VA',
  39:     'ui:description': PrefillMessage,
  40      'view:compDesc': {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/vaBenefits/pensionInformation.js:
   4  // eslint-disable-next-line deprecate/import
   5: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   6  import CustomReviewField from '../../../components/CustomReviewField';

  36      'ui:title': 'Current compensation',
  37:     'ui:description': PrefillMessage,
  38      'view:compDesc': {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/birthSex.js:
   6  // eslint-disable-next-line deprecate/import
   7: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   8  import CustomReviewField from '../../../components/CustomReviewField';

  42    uiSchema: {
  43:     'ui:description': PrefillMessage,
  44      gender: {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/contactInformation.js:
   3  import phoneUI from 'platform/forms-system/src/js/definitions/phone';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import { validateMatch } from 'platform/forms-system/src/js/validation';

  11    uiSchema: {
  12:     'ui:description': PrefillMessage,
  13      'ui:validations': [validateMatch('email', 'view:emailConfirmation')],

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/demographicInformation.js:
   2  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  

  19      <>
  20:       <PrefillMessage {...props} />
  21  

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/maritalStatus.js:
   3  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import CustomReviewField from '../../../components/CustomReviewField';

  29    uiSchema: {
  30:     'ui:description': PrefillMessage,
  31      maritalStatus: {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/veteranAddress.js:
   5  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   6: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   7  import { AddressDescription } from '../../../components/ContentComponents';

  14    uiSchema: {
  15:     'ui:description': PrefillMessage,
  16      veteranAddress: merge({}, addressUI('Mailing address', true), {

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/veteranGender.js:
   4  
   5: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   6  import CustomReviewField from '../../../components/CustomReviewField';

  12      <div className="vads-u-margin-bottom--4">
  13:       <PrefillMessage {...props} />
  14  

script/github-actions/daily-product-scan/tests/mocks/applications/app-1/config/chapters/veteranInformation/veteranHomeAddress.js:
   5  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   6: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   7  import { AddressDescription } from '../../../components/ContentComponents';

  14    uiSchema: {
  15:     'ui:description': PrefillMessage,
  16      veteranHomeAddress: merge({}, addressUI('Home address', true), {

</details>





src/applications/burials/components/ApplicantDescription.jsx:
   3  
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  

  12      </p>
  13:     <PrefillMessage formContext={formContext} />
  14    </div>

src/applications/burials-ez/components/ApplicantDescription.jsx:
   3  
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  

  12      </p>
  13:     <PrefillMessage formContext={formContext} />
  14    </div>

src/applications/burials-ez/components/PrefillMessage.jsx:
  4  
  5: export default function PrefillMessage() {
  6    const loggedIn = useSelector(isLoggedIn);

src/applications/burials-ez/config/chapters/01-claimant-information/personalInformation.js:
   7  } from 'platform/forms-system/src/js/web-component-patterns';
   8: import PrefillMessage from '../../../components/PrefillMessage';
   9  import { generateTitle } from '../../../utils/helpers';

  20      'ui:title': generateTitle('Personal information'),
  21:     'ui:description': PrefillMessage,
  22      claimantFullName: fullNameUI(),

src/applications/burials-v2/components/ApplicantDescription.jsx:
   3  
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  

  12      </p>
  13:     <PrefillMessage formContext={formContext} />
  14    </div>

src/applications/burials-v2/components/PrefillMessage.jsx:
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

src/applications/edu-benefits/0993/config/form.js:
   5  import environment from 'platform/utilities/environment';
   6: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   7  import FormFooter from 'platform/forms/components/FormFooter';

  76            uiSchema: {
  77:             'ui:description': PrefillMessage,
  78              claimantFullName: fullNameUI,

src/applications/edu-benefits/10203/content/ApplicantDescription.jsx:
   1  import React from 'react';
   2: import PrefillMessage from './PrefillMessage';
   3  

  10        </p>
  11:       <PrefillMessage formContext={formContext} />
  12      </div>

src/applications/edu-benefits/10203/content/PrefillMessage.jsx:
  5  
  6: export default function PrefillMessage({ children, formContext }) {
  7    if (!formContext.prefilled) {

src/applications/edu-benefits/10203/tests/content/PrefillMessage.jsx.unit.spec.jsx:
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

src/applications/edu-benefits/feedback-tool/helpers.js:
   35  // These flags will be used for each form page's call to
   36: // conditionalPrefillMessage()
   37  export const PREFILL_FLAGS = {

  408   */
  409: export function conditionallyShowPrefillMessage(
  410    prefillFlag,

src/applications/edu-benefits/feedback-tool/config/form.js:
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

src/applications/edu-benefits/feedback-tool/tests/helpers.unit.spec.js:
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

src/applications/ezr/config/chapters/householdInformation/maritalStatus.js:
   1  import ezrSchema from 'vets-json-schema/dist/10-10EZR-schema.json';
   2: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   3  import {

  14    uiSchema: {
  15:     ...descriptionUI(PrefillMessage, { hideOnReview: true }),
  16      'view:maritalStatus': {

src/applications/ezr/config/chapters/insuranceInformation/medicaid.js:
   1: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   2  import {

  11    uiSchema: {
  12:     ...descriptionUI(PrefillMessage, { hideOnReview: true }),
  13      'view:isMedicaidEligible': {

src/applications/ezr/config/chapters/veteranInformation/mailingAddress.js:
   2  import ezrSchema from 'vets-json-schema/dist/10-10EZR-schema.json';
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import {

  20    uiSchema: {
  21:     ...descriptionUI(PrefillMessage, { hideOnReview: true }),
  22      'view:pageTitle': titleUI(

src/applications/hca/config/chapters/militaryService/serviceInformation.js:
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import MilitaryPrefillMessage from 'platform/forms/save-in-progress/MilitaryPrefillMessage';
   3  import dateUI from 'platform/forms-system/src/js/definitions/date';

  20    uiSchema: {
  21:     'ui:description': MilitaryPrefillMessage,
  22      lastServiceBranch: {

src/applications/hca/config/chapters/veteranInformation/birthSex.js:
   1  import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
   2: import PrefillMessage from '~/platform/forms/save-in-progress/PrefillMessage';
   3  import { genderLabels } from '~/platform/static-data/labels';

  12    uiSchema: {
  13:     'ui:description': PrefillMessage,
  14      'view:birthSexShortFormMessage': {

src/applications/simple-forms/26-4555/pages/contactInformation1.js:
   3  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';
   4: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   5  import {

  19    uiSchema: {
  20:     'ui:description': PrefillMessage,
  21      [veteranFields.parentObject]: {

src/applications/simple-forms/26-4555/pages/contactInformation2.js:
   2  
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';

  24    uiSchema: {
  25:     'ui:description': PrefillMessage,
  26      [veteranFields.parentObject]: {

src/applications/simple-forms/26-4555/pages/personalInformation1.js:
   2  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import {

  17    uiSchema: {
  18:     'ui:description': PrefillMessage,
  19      [veteranFields.parentObject]: {

src/applications/simple-forms/26-4555/pages/personalInformation2.js:
   2  
   3: import PrefillMessage from 'platform/forms/save-in-progress/PrefillMessage';
   4  import fullSchema from 'vets-json-schema/dist/26-4555-schema.json';

  18    uiSchema: {
  19:     'ui:description': PrefillMessage,
  20      [veteranFields.parentObject]: {

src/platform/forms/exportsFile.js:
   86  
   87: import MilitaryPrefillMessage from './save-in-progress/MilitaryPrefillMessage';
   88: import PrefillMessage from './save-in-progress/PrefillMessage';
   89  

  210    createRoutesWithSaveInProgress,
  211:   MilitaryPrefillMessage,
  212:   PrefillMessage,
  213    saveInProgressReducers,

src/platform/forms/package.json:
  35      "./save-in-progress/helpers": "./save-in-progress/helpers.js",
  36:     "./MilitaryPrefillMessage": "./MilitaryPrefillMessage.jsx",
  37:     "./PrefillMessage": "./save-in-progress/PrefillMessage.jsx",
  38      "./reducers": "./save-in-progress/reducers.js",

src/platform/forms/components/ApplicantDescription.jsx:
   1  import React from 'react';
   2: import PrefillMessage from '../save-in-progress/PrefillMessage';
   3  

  10        </p>
  11:       <PrefillMessage formContext={formContext} />
  12      </div>

src/platform/forms/save-in-progress/MilitaryPrefillMessage.jsx:
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

src/platform/forms/save-in-progress/PrefillMessage.jsx:
  5  
  6: export default function PrefillMessage({ children, formContext }) {
  7    if (!formContext.prefilled) {

src/platform/forms/tests/save-in-progress/PrefillMessage.unit.spec.jsx:
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
