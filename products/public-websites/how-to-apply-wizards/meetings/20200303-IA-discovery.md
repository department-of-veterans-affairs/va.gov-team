# How to apply wizards: IA background

## Agenda:

- Where do we have wizards today?
- Background info from Mikki
- How to use the IA document to locate

#### Attendees:

Liz Lantz, Mikki Northius, Aruna Kucherlapati, Kelson Adams

#### Background:

Our team, Public Websites, is working on better incorporating the `How to apply` wizards into the user flow for completing applications on va.gov.  It was suggested we check with Mikki to help us identify all of these wizards currently on the site. 

#### Purpose:

Identify `How to apply` wizards on va.gov; better understand how to use [IA documentation](https://app.moqups.com/Rnc4BDEKrA/view/page/abd763ecc) to conduct this research on our own

#### Outcomes:

- No wizards were identified beyond [what is already listed in our epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6315)

## Notes:

- Mikki talked with Jen about this last week and got super excited!

  - Wizard was born to identify "who are you" and then send folks to the right form
  - The first wizard was launched in education because there are 6 different education forms and people were going to the wrong ones
  - Disability was next - that was a case where it wasn't different forms, but different criteria that would filter folks down the path
  - Excited because there could be a lot of streamlining to smooth out this process and figure out the right way to use wizards
  - How can we get users navigating into the right form?

- Add/remove dependent (form 686) is done differently because it has a ton of scenarios 

  - Essentially asking "Who are you adding/removing and why?"  
  - That team is using a different approach entirely with checkboxes
  - Embedded in the first page of the react application
  - Checkboxes is a little clunky because it's a list of 15 checkboxes, especially for sensitive questions
  - Seems like it's testing well, users are understanding what they need to do

- We never felt like we launched education that it was the end all be all; rather it was something that needed to be done to fix the problem

  - Initially done to fix the education problem because people weren't filling out the right form.
  - Changed all the links in navigation to point to how to apply page, which did reduce the number of incorrect forms coming in.
  - People can still navigate to the specific forms if they're looking for them.
  - Felt like it was getting clunky when disability, couldn't follow suit
  - Ultimate goal of the wizards 

- How to apply for a discharge is a weird use case, it's more of a questionnaire

  - Information on that first page can be redundant

- The IA documentation is just a site map, wouldn't be able to tell us about where the widgets are embedded

- Possible that the `How to apply` pages are repeating information from the first page of the forms. As we get more mature there might be more

  - If the how to apply pages are covering multiple scenarios don't really apply to

- Need to protect the original intent of the wizard considering the form detail landing pages

- From Mikki's standpoint, between the 3 pages, we need to decide what it is we want to rank in search engines. Right now we have 3 pages competing for SEO and they're cannabilizing each other

  - If the wizard and how to apply page are the entry points, remove the actual applications
  - Big struggle w/ form detail pages and where they sort of map in priority over the other 2

- Form detail pages - they also provide access to the PDFs.  

   

## Next Steps

- Evaluate the how to apply pages to see if the content needs to be updated with changes to the wizard implementation
- How many users still fill out paper forms when an online form is available?  Jen may know.
- Talk to Jim about decision process to go with different flow for 686
