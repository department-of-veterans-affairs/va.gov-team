# Identity Dashboard

1. **Why is this being done?**
    - A collection of applications to be used by VA employees and contractors.
        - **`Client config`** - a landing page where other VA application teams can register their applications to create an integration with Sign in Service or the Unified Signin Page (USiP). The page will look and act very similar to how the developer client page looks for login.gov. (See image below here)
        - **`BDPR Dashboard`** - A collection of information which will serve to assist the BDPR with investigations.
        - **`MPI Search`** - A tool which allows authorized users the ability to lookup user information of a user within MPI.
            - Outstanding question: do we have some kind of separation of environment lookups. Its probably ok to allow any engineer the ability to lookup staging and below, but only a select few should be able to do the same on prod.
        - **`Admin Portal/User management`** - An application used to create teams, manage users, and applications within the identity dashboard. This page will serve as the single admin app for all of the Identity dashboard components.
        - **`Performance Dashboard`** - A collection of information scoped to selected audiences to allow application teams and VA employees with the ability to monitor the authentication performance and stability of their integration with Sign in Service.
        - **`Documentation Portal`** - A collection of pages and links to all of the documentation for Sign in Service and its supporting components.
    - Expanding into the management of more products. We need a solution which allows us to track and make change requests available to external teams.
    - Formalize our service offerings to encourage application teams to adopt our services over commercial offerings.
    - One thing that this completes is the current lack of an integration and documentation portal.
    - **User stories:**
        - **Client config**
            - As an engineer
                - I want to be able to create a new test app that integrates the Sign in Service so that I can determine the level of work required in order adopt the sign in service
                - I want to be able to edit key settings for my application integration in a portal in order to decrease the time to test and iterate new features and fixes
                - I want to be able to add new team members to help with editing these settings so that there is not a single point of failure with my user credentials on the client config
                - I want to be able to initiate a production change without going to another solution to initiate the request in order to better track and streamline the changes I want to make in production.
                - I want to be able to add the same login modal as is on [VA.gov](http://VA.gov) to ensure Veterans have a familiar look and feel to logging into my application
2. **How is this going to benefit the users?**
    - more streamlined configuration of Sign in Service integration
    - Do not have to wait for a team to review lower environment changes, increasing the velocity of development
    - USiP integration will help app teams have a more consistent development experience
    - USiP allows application teams to create more intimate and fine grained user experiences as the USiP integration facilitates a more streamlined custom user attribute modification change process
    - USiP integration will help users of [VA.gov](http://VA.gov) have a familiar login experience across all applications that integrate with it because the login modal is the same
3. **Why is the tech chosen and why?**
    - rails for the main dashboard for backend
        - Current standard language for our APIs, has the most expertise available within OCTO (VA Office of the Chief Technology Officer)
    - frontend still hasn’t settled on which micro frontend they will use
4. **Who is responsible for what?**
    - The [VA.gov](http://VA.gov) Identity Team will be responsible for the creation and maintenance of the Identity dashboard and all of its components.
        - **Backend/DevOps** - will maintain all of the rails, infrastructure, and GitHub Actions used for CI/CD
        - **Frontend** - will maintain content of the components
        - **Engineering and Crew leads -** will be responsible for maintaining the users and access they have
        - **Program Manager/Delivery Manager** - responsible for ensuring we complete all requirements for each release and continuously obtaining feedback to ensure we are constantly improving the product.
5. **Do we need tech documentation before anything is done?**
    1. We should have a rough UI prototype and basic infrastructure diagram prior to picking up the work.
6. **What are these tools?**
    1. need more information before we settle on an answer
7. **Why do we need them?**
    1. need more information before we settle on an answer
8. **Who are the users?**
    1. VA application teams and employees
9. **What is the short/long term plan?**
    1. Complete each phase:
        1. Identity Dashboard Milestone 1 - Client Configuration Dashboard
        2. Identity Dashboard Milestone 2 - Admin Portal
        3. Identity Dashboard Milestone 3 - Find MHV by ICN tool
        4. Identity Dashboard Milestone 4 - BDPR Dashboard
        5. Identity Dashboard Milestone 5 - Performance Dashboard, Documentation Portal
10. **What is the authentication via SiS suppose to do?**
    1. For the identity dashboard, SiS will be used to broker [login.gov](http://login.gov) or [ID.me](http://ID.me) users to access the dashboard. We will use the email addresses and UUIDs we get from the credential providers to determine what access each user should have.
11. **Where can I find the user flows and UI prototypes?**
    1. https://www.figma.com/file/rw8kJXf4VKliimoMpsEy4Q/Identity-Dashboard-(initial)?type=design&node-id=0-1&mode=design&t=KTyZNaayiKtgDpma-0
12. **Where can I find the diagrams which shows the technical implementation and logic?**
    1. Client config planning: https://lucid.app/lucidchart/51c1d366-4d46-4242-b923-d3644144c478/edit?invitationId=inv_b2ae38eb-5fd7-4deb-8348-ca07dd849d1d&page=0_0#
    2. Logic of auth flow: https://lucid.app/lucidchart/c0d9a2d7-0f20-4e48-94e1-87133e7227fe/edit?page=0_0&invitationId=inv_87605cec-f11d-4ac0-b661-6f668ddd8e0a#
    3. User Schema: https://lucid.app/lucidchart/f8673476-58e9-4919-a81e-53cf739fa8fc/edit?page=0_0&invitationId=inv_feb1ca87-c8b7-4fe2-8720-ae3c34d92d41#
    4. Need to add:
        1. app architecture diagram
        2. Service account flow
    
- Do we have a repo for the new project?
    - https://github.com/department-of-veterans-affairs/va-identity-dashboard
- How is the SIS will communicate with vets-api?
    - api endpoints. This will be communication dashboard <-> vets-api. (Where sign-in-service lives now)
- Do we have a design document for the new infrastructure?
    - Coming soon but the main parts are EKS, RDS - Postgres, Elasticache - Redis,
- Is the Terraform code a separate repo?
    - https://github.com/department-of-veterans-affairs/devops
- Are we using the same database type? Postgres?
    - Postgres
- I see the schema but how is the data going to be used?
    - Restrict users to specific parts of the application and object restrictions. For client config, users will belong to an organization where they can manage their own SiS config.
- Overall on the database what is the data flow and where is this data coming from?
    - Eventual clients of `sign-in-service`
- What are we building and why?
    - Dashboard for sign-in-service clients to configure their applications
- What design patterns are we using?
    - Rails MVC but we use a lot of Service objects
- How are we organizing the code?
    - Just standard Rails app
- API Stack
- Ruby on Rails
	- Ruby 3.2
	- Rails 7
- RDS - Postgres
	- Postgres 15
- Elasticache - Redis
	- Redis 6.2

[Login.gov](http://Login.gov) client config example:
![Screenshot 2023-06-29 at 15 44 44](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/assets/71290526/960dd8df-cad7-4b86-b923-1a65f5c7acf2)
