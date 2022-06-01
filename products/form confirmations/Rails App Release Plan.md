# Release Plan For Rails App

---

## Phase I: Staging Release (User facing environment)

### Planning:
- Desired date range: [date - date] or [duration]
- How will existing users logins be cutover?
     - How will Github authorization work?
     - Is there a new authorized app in Github? 
- How will we roll it out? Will all staging users be immediately directed to the new app?
- Is there any outtage time necessary?
     - If so, how do we communicate this to the users?
     - Proactively include a message banner a few days ahead to alert them to the outtage?
- What is the rollback plan?
- What is the redirect URI that we need to provide the SSOi team?  

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum
- Go / No Go: for production launch

## Phase II: Production Release

### Planning:
- Desired date range: mm/dd/yy - mm/dd/yy
- Do we need to limit the users that have access to this in production? If so, how do we handle that?
- "Success" criteria
    - user can login
    - user can access/edit existing templates
    - user can create new template
    - user can preview email templates
    - user can see analytics on templates
    - user can access other services they have permissions to
    - user can only access the services they have permissions to
    - backend can still fire test sends
    - backend can still give different service access to users
    - backend can still create new services       

### Results:
- Number of unique users: x
- Actual results (per your "success criteria")
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum
