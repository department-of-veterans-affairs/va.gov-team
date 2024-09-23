# Help users to... Know when their information is prefilled
`USE WITH CAUTION: CANDIDATE OR AVAILABLE?`

Follow this pattern to help users know when their information will be prefilled for them in an application. 

View [Help users to... Update their prefilled information](#link to other pattern) for guidance on helping users update this prefilled information.

### Resources
- [Research](Link to research repo filtered for issues containing pattern label [like this](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue+label%3A%22DSC%3A+Help%20users%20know%20how%20their%20info%20is%20updated%22))

### On this page
- [Usage](#usage)
- [How to design and build](#how-to-design-and-build)
- [Examples](#examples)
- [Content considerations](#content-considerations)
- [Research findings](#research-findings)

## Usage
### When to use this pattern
- **When you prefill the user's data into an application, like a form.** When using this pattern, clearly inform the user of where their data is being pulled from to prefill for them.
- **When users can update prefilled information.** View [Help users to... Update their prefilled information](#link to other pattern) for guidance on helping users update prefilled information.

#### Design Principals
- **Visibility of system status.** This pattern demonstrates the usability principle of communicating the current state to help users feel in control and take appropriate action. [Learn more about Visibility of system status](https://www.nngroup.com/articles/visibility-system-status/).
- **User control and freedom.** This pattern also gives users control over their own information. [Learn more about User Control and Freedom](https://www.nngroup.com/articles/user-control-and-freedom/).

### When not to use this pattern
- **For unauthenticated users**. Users who aren't signed in shouldn't see their information prefilled when they interact with an application. However, when forms don't require users to be signed in, they should see the [Sign-in to start your application - Pre-fill](https://design.va.gov/components/alert/#sign-in-to-start-your-application---pre-fill) instance of the information alert on the form's introduction page. The alert tells the user that information can be prefilled into some forms from Profile data if they sign in.

### When to use caution
- **When prefilling data from a source other than VA Profile.** It is crucial to explain to the user exactly where the data is coming from so that if there are any errors in the data, it is clear how to correct them. 

## How to design and build

### Anatomy or layout details 

The following...something something: 
- Alert on form introduction page
- Uneditable prefilled information on personal information pages
- Editable prefilled information on information pages pages

#### Alert on form introduction page
![Alert on form introduction page](https://github.com/user-attachments/assets/96117070-4a9e-4755-9fc5-2c305a1e76bd)
[Add image description]

#### Uneditable prefilled information on personal information pages
![Prefilled information on personal informaiton pages](https://github.com/user-attachments/assets/1c122b34-1cc3-48c8-b6b4-2950a7dc692c)
[Add image description]

#### Editable prefilled information on information pages pages
![Editable prefilled information on information pages pages](https://github.com/user-attachments/assets/ccd68305-e4a6-46f9-ab6c-5665c1eee3d7)
[Add image description]

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
- For data that cannot be edited on the site, describe why you don't allow it and provide clear and concise instructions on how to do so.

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

 ![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/Unauthenticated%20Alert.png)


#### Authenticated intro page alert
> [content] **Note:** Since you’re signed in to your account, we can prefill part of your form based on your account details. You can also save your form in progress and come back later to finish filling it out.

![image](https://github.com/user-attachments/assets/a279e845-aaa9-4373-bda0-932de3d3e2aa)


#### Authenticated review alert
> [content] **Note:** We've prefilled some of your information from your account. If you need to correct anything, you can select edit below. All updates will be made only to this form.
> 
![image](https://github.com/user-attachments/assets/36b4acb4-be99-49cd-8bd6-536d8ef7db8e)



## Research findings

The Authenticated Experience Design Patterns team conducted [user research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill) to gather validation about this pattern.
