# Testing with Mock Data

## Purpose

Outline the basic flow for testing with a User that has been created with mock
data in development or staging. 

## Context

NOTE: for the purpouses of this document, I'll be refering to instance of the
User class used for local or staging testing as 'dev' or 'development' users.

In many Rails application, modifying attributes on a User is as simple as
changing values in the Databse, using SQL or a rails console.  However, our User
model is virtual, meaning there is no Database table that immediately underpins it in our local
environment.  A dev user is an amalgamation of data that is pulled together when
an human user logs in.  For that reason, it is more accurate to think of
instances of our User model as sets of cached data.

## BetaMocks

In production, this 'dev user' data cache is populated from 3rd party sources such as <citation?>.
In development we do not want to rely on 3rd parties, so we
instead stub the information in our ["Mock Data" repo.](https://github.com/department-of-veterans-affairs/vets-api-mockdata)
For more information on how this works, check out the [Betamocks documentation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md)

### Working with Mocked Users

Modifying these users is unfortunatley non-trival.  The following is an
imperfect flow for modifying user data and having that data surface to your
application.

A coupld things you will need to install to follow this guide
- in your browser, make sure you have the Redux dev tools chrome extension.
  This will make it possible to pull user data our of your session (more on that
  later).  [The extension is available here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- `redis-cli` should be available if you have completed your [environment
  setup](https://github.com/department-of-veterans-affairs/vagov-claim-classification-data/wiki/Setting-up-VA.gov-locally-for-this-project#start-it-all-up).  If not
  do that first.

1. Start you development and web servers.  Although slightly counterintuitive,
   you do **not** need to restart your server see user changes reflected,
   however you may need to clear out old user session data in your browsers
   cache.
   TODO: continue describing the structure of mock data and what to change

2. TODO: Describe how to bust the redis cache so your changes surface

3. TODO: Describe how to see your user in the rails consolo
e

### TODO: thing with redux dev tools


