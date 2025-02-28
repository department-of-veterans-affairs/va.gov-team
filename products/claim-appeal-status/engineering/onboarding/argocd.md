# ArgoCd 

- Helps developers manage applications and infrastructure in one place
- Can pull updated code from Git repos and deploy it to Kuberbetes
- Uses declarative approach to ensure the desired state of an app matches its live state
- Monitors appa nd reports when their live state differs from the desired state. It can also then automatically or manually sync the app back to the desired state
- Provides visualizations of differences between the desired and live state of an application.
- Provides an interface for debugging applications.
- Allows developers to group applications into projects to isolate workloads and teams

## How to get ArgoCd Access
1. Create a github ticket by going to [this](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&projects=&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D) link
2. Fill out the details (Example: https://github.com/department-of-veterans-affairs/va.gov-team/issues/101857)
    1. Your Name - add your full name
    2. Your github handle - add the github handle that you are using
    3. Your dsvagovcloud AWS user name - If you have one its usually in this format - FirstName.LastName
    4. Team, Role, and Company of the target individual - add your team, role and company
    5. Product Manager name and email - Jacob Worrell - jacob.worrell@adhocteam.us
    6. Product Owner name and email - Amy Lai - amy.lai2@va.gov
    7. COR Name (leave "None" if you listed an AWS user name above)
    8. Vendor Onboarding Representative (VOR) Name (leave "None" if you listed an AWS user name above)
    9. Please confirm if you are listed as a team member in Atlas or are listed in Platform Team Roster - verify in these links and select the one/s that you are on
        1. [Team Member in Atlas](https://www.va.gov/atlas/product_directory/team_members)
        2. [Platform Team Roster](https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Aconfluence%253A%253Asite%252F10f8a514-fd86-4b32-8ba3-c0bfc6969f88%26continue%3Dhttps%253A%252F%252Fvfs.atlassian.net%252Fwiki%252Fspaces%252FAP%252Fpages%252F1908834623%252FPlatform%252BRoster&application=confluence) - if you dont have confluence access you dont have this
    10. Please confirm E-QIP Transmittal/Adjudication. This could be a screenshot of your Transmittal/Adjudication email, a link to another request where you've submitted this proof (i.e. AWS/SOCKS), etc.
        1. This is also referred to as the eApp email
    11. Select the access that you are requesting for a given environment
    12. Submit
3. Once this goes through and is approved you will have ArgoCd access to the env that you requested

## How to login into ArgoCD
1. Make sure your PIV card is plugged into your computer
2. There are two ways to log into Argo depending on if you have SOCKS access or not...
  1. If you dont have SOCKS access you will need to log into Citrix or Azure and then you can do the following...
  2. If you have SOCKS access you can do the following…
      1. Log into [SOCKS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/onboarding/socks-and-sentry-access.md#how-to-get-socks-access)
      2. Go to [ArgoCd](https://argocd.vfs.va.gov)
      3. Click the button “Log in via github”
      4. Enter your github credentials that you use for the VA
      5. You should now be logged into ArgoCD

## How to use ArgoCD with rails console
1. Follow the instructions [here](https://vagov.ddog-gov.com/account/login?next=%2Fdashboard%2Fu27-88d-58v%3Frefresh_mode%3Dsliding%26from_ts%3D1707240076862%26to_ts%3D1707243676862%26live%3Dtrue) to log into ArgoCD
2. Search for the project that you want to view (EX: vets-api-staging)
3. Selected a pod (the green checkmark square) with `vets-api-web` and select `Exec`
4. A terminal will popup in a new window, Type `bundle exec rails c --sandbox` in the terminal
   - Note: The command `bundle exec rails c --sandbox` will rollback the changes that you make to the database where as the command `bundle exec rails c` will change the data permanently
6. Now you can use the rails console in argo and look at staging and production data
