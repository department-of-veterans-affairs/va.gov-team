# Testing with Mock Data

## Purpose

Outline the basic flow for testing with a User that has been created with mock data in development or staging. 

## Context

NOTE: for the purpouses of this document, I'll be refering to instance of the User class used for local or staging testing as 'dev' or 'development' users.

In many Rails application, modifying attributes on a User is as simple as changing values in the Databse, using SQL or a rails console.  However, our User model is virtual, meaning there is no Database table that immediately underpins it in our local environment.  A dev user is an amalgamation of data that is pulled together when an human user logs in.  For that reason, it is more accurate to think of instances of our User model as sets of cached data.

## BetaMocks

In production, this 'dev user' data cache is populated from 3rd party sources such as <citation?>.  In development we do not want to rely on 3rd parties, so we instead stub the information in our ["Mock Data" repo.](https://github.com/department-of-veterans-affairs/vets-api-mockdata) For more information on how this works, check out the [Betamocks documentation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md)

### Working with Mocked Users

Modifying these users is unfortunatley non-trival.  The following is an
imperfect flow for modifying user data and having that data surface to your
application.

A coupld things you will need to install to follow this guide
    - in your browser, make sure you have the Redux dev tools chrome extension.  This will make it possible to pull user data our of your session (more on that later).  [The extension is available here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
    - `redis-cli` should be available if you have completed your [environment setup](https://github.com/department-of-veterans-affairs/vagov-claim-classification-data/wiki/Setting-up-VA.gov-locally-for-this-project#start-it-all-up).  If not do that first.

#### step 0. Prep
1. Start you development and web servers.  Although slightly counterintuitive, you do **not** need to restart your server see user changes reflected, however you may need to clear out old user session data in your browsers cache and you will need to clear your redis cache

2. Determine the user you want to use.  Remember that User objects aren't instantiated until there is a session, so for example if you want to login and test as user `vetsgovuser228`, you will be modify the associated data files for that user.

#### step 1. Edit the user in the mock-data repo
1. The first thing to do is find the users `.json` file under the appropriate login method path.  these files are in the `/credentials` directory of the vets-api-mockdata repository, so for instance if we login using IdMe, we would find the file `credentials/idme/vetsgovuser228.json`.

    This is **not** the file we will edit.  This file's value to us is in that it holds user data that we can use to find the API mock response data file that we want to change.  Remember our User object is populated from 3rd party source, so the file we will actually need to edit is a bit ugly XML blob.  These XML blobs are spaced / named `/mvi/profile/<users social>.yml`.  You should be able to get the value for `<users social>` from the json file we have just located.  

    If for some reason the user json does not have a value for `social`, or if the user response blob breakes the naming convention (not sure how / why this might happen) you can use the `uuid` value from this file to search for the correct blob using your text editors full text search.  

    In this case, we can take the `social` value from the json file.

   WIPN IMAGE

    And use that to load the appropriate yml file

   WIPN IMAGE

2. Now we can edit the users response stub.  This is a big XML blob within our YAML file.  This stubed response is used to populate the User object, so changes made here will be visible.  For example, if we wanted to change our users birth date, we would find the appropriate XML field

    WIPN IMAGE

    Notice that our value is called `birthTime` and the format is `YYYYMMDD`.  Much of the data is obfuscated in this way.

    Another such example would be if you wanted to edit a birls_id, you might reasonably search the code for the string `birls`.  However, as you can see here the correct string to look for would be `BRLS`

    WIPN IMAGE

    Typically user values like birthday, name, address, etc, will have their own `< xml type value>`, where as IDs and forign keys will be inside an `<id...` tag, with their values separated from their keys by `^` carrots, like so

```
<id extension="BIRL-value^200BRLS^USVBA^A" root=.../>
```

#### Clear the User cache
1. At this point we know how to modify data.  The next step is to get our changes to show up.  Since we build our User objects in real time (at login) they are cached, meaning we will need to break the user data cache in order to see the changes.

    First, we login using the `mocked-auth` endpoint: `http://localhost:3001/sign-in/mocked-auth`

    **NOTE: to work with mocked users we must login using mocked-auth.  The normal userfacing login flow will not work.**

    Once you see a spinner and your address bar reads `...?postLogin=true` you are logged in and can go to the next step to reload your user and see your changes:

2. Clear the User cache

    Open a redis command line by running `redis-cli`.  In the Redis command line, run `KEYS *mpi-profile-response*`.  This will a
    key for all cached users.  We will break this entire cache, since it will
    (probably) only have one user in it anyway, the one we are logged in as. The
    `KEYS` query should return something like this
    `mpi-profile-response:123123123`.  This full string is our user cache key.  Now we clear the cache by running `DEL mpi-profile-reponse:<whatever was returned above>`.  This whole process looks like this:

   WIPN-IMAGE

#### Load the user in a Rails Console to confirm changes and interact

There are a few steps to doing this.
- Find the `accountUuid` from the browser
- Find the Account associated with this value in the rails console
- Find the User associated with this account.

1. **Find the accountUuid from the browser**
    a. login as your user
    b. Navigate to a page that will load your user data, such as [the 526 form](http://localhost:3001/disability/file-disability-claim-form-21-526ez/start)
    c. open your developer tools (inspect page source or CMD+Shift+C)
    d. Open the Redux tab
        WIPN-IMAGE
    e. select the 'STATE' tab on the right pannel and an event on the left pannel
    f. dropdown the user -> profile carrots in the STATE object and get the
    value for accountUuid:
        WIPN-IMAGE

2. **Load the account in a rails console**
    a. start a rails console in your application directory
    b. run the following `acc = Account.find_by(uuid: <accountUuid from last step>)

3. **Load the user from the Account object**
    run `user = User.find(acc.idme_uuid)`.  The resulting object is your user!

    WIPN-IMAGE

Here you should be able to call methods on your user or view values that reflect
your previous changes.
