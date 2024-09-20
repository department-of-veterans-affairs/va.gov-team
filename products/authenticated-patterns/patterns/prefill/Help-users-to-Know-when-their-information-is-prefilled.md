
Follow this pattern to help users know how and when their information will be prefilled for them in an application. 

## Usage

### When to use this pattern

- When data is pulled from the user's record and prefilled into a form or application. This helps to save time and ensure data integrity. When using this pattern, it is important to clearly inform the user of where their data is being pulled from to prefill for them.

#### Design Principals
- Visibility of system status. This pattern demonstrates the [usability principle of communicating the current state](https://www.nngroup.com/articles/visibility-system-status/) in order to allow users to feel in control and to be able to take appropriate action.
- User control and freedom. This pattern also gives users control over their own information thereby providing control and freedom.

### When not to use this pattern

- For unauthenticated users. Users who are unauthenticated should not see any of their information prefilled, but on forms that can be completed in either an authenticated or unauthenticated state, users should see an alert on the introduction of the form letting them know how prefill benefits them to entice them to sign in to complete the form.

### When to use caution

- When prefilling data from a source other than VA Profile. It is crucial to explain to the user exactly where the data is coming from so that if there are any errors in the data, it is clear how to correct them. 

## How to design and build

### Anatomy or layout details
#### Form Intro Pages
![Form Intro Page](https://github.com/user-attachments/assets/96117070-4a9e-4755-9fc5-2c305a1e76bd)

#### Personal Information Review Pages
![Personal Info Review Page](https://github.com/user-attachments/assets/1c122b34-1cc3-48c8-b6b4-2950a7dc692c)

#### Information Review Pages
![Address Review Page](https://github.com/user-attachments/assets/ccd68305-e4a6-46f9-ab6c-5665c1eee3d7)

### How this pattern works

#### Communicate information that is prefilled
Forms display an alert component on the introduction page informing users that their information will be prefilled & from where their information is sourced. 

#### Communicate what information can be edited and what cannot
Prefilled data that is uneditable (personal information such as Legal name, DOB and SSN) should appear in a card component, followed by a message that includes the bolded word 'note' and further instructions for how a user can update this information offline.

Prefilled data that is editable should be shown in a card component with a link to edit the information. For guidance on editing prefilled information, see the "Help users to... Update their prefilled information" pattern, which is currently found in the ["Know how their information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern. 


### Components used in this pattern

- [Alert](https://design.va.gov/components/alert/)
- [Card](https://design.va.gov/components/card)


### Page templates available for this pattern

List of links to page templates or layouts used to build any pages for this pattern.

## Examples
 
Examples of this pattern. May contain reference or links to:

### Examples in production
Coming soon!

## Code usage
Coming soon!


## Content considerations

### Alert Content
When using this pattern keep in mind that the alerts used have specific content requirements. You can find each content scenario below. 

#### Unauthenticated intro page alert ([CAIA guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/content-patterns-and-standards/sign-in-alerts.md))
> [heading] Sign in with a verified account
> 
> [content] Here’s how signing in with an identity-verified account helps you:
> - We can fill in some of your information for you to save you time.
> - You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.
> 
> After you sign in, we’ll tell you if you need to verify your identity for your account.
> 
> **Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.
> 
> [button] Sign in or create an account
> 
> [text link] Start your form without signing in

 ![image](https://github.com/user-attachments/assets/5f7e716a-edb0-4bea-b95b-6e419eef8c22)


#### Authenticated intro page alert
> [content] **Note:** Since you’re signed in to your account, we can prefill part of your form based on your account details. You can also save your form in progress and come back later to finish filling it out.

![image](https://github.com/user-attachments/assets/a279e845-aaa9-4373-bda0-932de3d3e2aa)


#### Authenticated review alert
> [content] **Note:** We've prefilled some of your information from your account. If you need to correct anything, you can select edit below. All updates will be made only to this form.
> 
![image](https://github.com/user-attachments/assets/36b4acb4-be99-49cd-8bd6-536d8ef7db8e)



## Research Findings

The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill) to gather validation about this pattern.
