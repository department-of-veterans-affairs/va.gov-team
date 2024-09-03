
Follow this pattern to help users know how and when their information will be prefilled for them in an application. 

## Usage

### When to use this pattern

- Prefilled Profile data is being displayed within a form or application. When pre-filling a form with data stored in the user’s Profile, it is appropriate to explain which data we have stored for a user and make it clear if that data will be changed if edited in this form.

#### Design Principals
- Visibility of system status. This pattern demonstrates the [usability principle of communicating the current state](https://www.nngroup.com/articles/visibility-system-status/) in order to allow users to feel in control and to be able to take appropriate action.
- User control and freedom. This pattern also gives users control over their own information thereby providing control and freedom.

### When not to use this pattern

- For unauthenticated users. Users who are unauthenticated should not see this pattern as we cannot use their profile data to prefill the form.

### When to use caution

- When prefilling from a source other than VA Profile.

## How to design and build

### Anatomy or layout details

Details any containers of components or layout concerns for how the pattern may be implemented on a page or pages.

### How this pattern works

#### Communicate information that is prefilled
Forms display an alert component informing the users their information will be prefilled from their profile. 

#### Communicate information that can be edited
Editable prefilled data should be shown in a 'locked' state with additional instructions for updating, for additional guidance on updating prefilled information, see the "Help users to... Update their prefilled information" pattern. 
For data that is uneditable (personal information such as Legal name, DOB and SSN), a message should appear under the information that can not be updated.


### Components used in this pattern

- Alert
- Card


### Page templates available for this pattern

List of links to page templates or layouts used to build any pages for this pattern.

## Examples
 
Examples of this pattern. May contain reference or links to:

### Examples in production

## Code usage

A link to the page.code-link, when available.

## Content considerations

Any content rules or recommendations for the pattern.

## Research Findings

The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill) to gather validation about this pattern.
