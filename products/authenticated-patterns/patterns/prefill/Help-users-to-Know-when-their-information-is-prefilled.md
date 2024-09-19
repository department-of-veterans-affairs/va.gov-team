
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
#### Form Intro Pages
![Form Intro Page](https://github.com/user-attachments/assets/96117070-4a9e-4755-9fc5-2c305a1e76bd)

#### Personal Information Review Pages
![Personal Info Review Page](https://github.com/user-attachments/assets/80251910-f9a6-4047-9fc9-30b10272e3eb)

#### Information Review Pages
![Address Review Page](https://github.com/user-attachments/assets/ccd68305-e4a6-46f9-ab6c-5665c1eee3d7)

### How this pattern works

#### Communicate information that is prefilled
Forms display an alert component informing the users their information will be prefilled from their profile on the form introduction pages as part of the sign in alert or a separate alert if the user is already authenticated. 

#### Communicate information that can be edited
Prefilled data that is uneditable (personal information such as Legal name, DOB and SSN) should appear in a card component, followed by a message that includes the bolded word 'note' and further instructions for how a user can update this information offline.

Prefilled data that is editable should be shown in a card component with a link to edit the information. Pages with editable prefilled information should also display an alert that notifies the user that information has been prefilled. 

For additional guidance on updating prefilled information, see the "Help users to... Update their prefilled information" pattern, which is currently found in the ["Know how their information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern. 


### Components used in this pattern

- [Alert](https://design.va.gov/components/alert/)
- [Card](https://design.va.gov/components/card)


### Page templates available for this pattern

List of links to page templates or layouts used to build any pages for this pattern.

## Examples
 
Examples of this pattern. May contain reference or links to:

### Examples in production

## Code usage

A link to the page.code-link, when available.

## Content considerations

### Alert Content
When using this pattern keep in mind that the alerts used have specific content requirements. You can find each content scenario below. 

## Research Findings

The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill) to gather validation about this pattern.
