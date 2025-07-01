# Testing with Mock Data (Users)

## Purpose

Outline the basic flow for testing with a User that has been created with mock data in development or staging. 

## Context

NOTE: for the purposes of this document, I'll be refering to instance of the User class used for local or staging testing as 'dev' or 'development' users.

In many Rails application, modifying attributes on a User is as simple as changing values in the Databse, using SQL or a rails console.  However, our User model is virtual, meaning there is no Database table that immediately underpins it in our local environment.  A dev user is an amalgamation of data that is pulled together when an human user logs in.  For that reason, it is more accurate to think of instances of our User model as sets of cached data.

## BetaMocks

In production, this 'dev user' data cache is populated from 3rd party sources such as <citation?>.  In development we do not want to rely on 3rd parties, so we instead stub the information in our ["Mock Data" repo.](https://github.com/department-of-veterans-affairs/vets-api-mockdata) For more information on how this works, check out the [Betamocks documentation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md)

## Working with Mocked Users

Modifying these users is unfortunatley non-trival.  The following is an imperfect flow for modifying user data and having that data surface to your local application.

A coupld things you will need to install to follow this guide
    - in your browser, make sure you have the Redux dev tools chrome extension.  This will make it possible to pull user data our of your session (more on that later).  [The extension is available here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
    - `redis-cli` should be available if you have completed your [environment setup](https://github.com/department-of-veterans-affairs/vagov-claim-classification-data/wiki/Setting-up-VA.gov-locally-for-this-project#start-it-all-up).  If not do that first.


### Step 0. Prep
1. Start you development and web servers.  Although slightly counterintuitive, you do **not** need to restart your server see user changes reflected, however you may need to clear out old user session data in your browsers cache and you will need to clear your redis cache.

2. Determine the user you want to use.  Remember that User objects aren't instantiated until there is a session, so for example if you want to login and test as user `vetsgovuser228`, you will be modify the associated data files for that user.


### Step 1. Edit the user in the mock-data repo
1. The first thing to do is find the users `.json` file under the appropriate login method path.  these files are in the `/credentials` directory of the vets-api-mockdata repository, so for instance if we login using IdMe, we would find the file `credentials/idme/vetsgovuser228.json`.

<img width="768" alt="Screenshot 2023-08-25 at 1 30 50 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/95f50c08-b216-4dbc-9212-7d92c463cc11">

This is **not** the file we will edit.  This file's value to us is in that it holds user data that we can use to find the API mock response data file that we want to change.  Remember our User object is populated from 3rd party source, so the file we will actually need to edit is a YAML file that holds a big ugly XML blob.  These XML blobs are spaced / named `/mvi/profile/<users social>.yml`.  You should be able to get the value for `<users social>` from the json file we have just located.  
    
<img width="344" alt="Screenshot 2023-08-25 at 1 31 55 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/e4788893-e994-442c-8503-fa83b1e39d48">

If for some reason the user json does not have a value for `social`, or if the user response blob breakes the naming convention (not sure how / why this might happen) you can use the `uuid` value from this file to search for the correct blob using your text editors full text search.  

<img width="451" alt="Screenshot 2023-08-25 at 1 32 10 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/b8904b4c-515e-45bd-84eb-ba68ac243798">

For our example we can take the `social` value from the json file. and use that to find the appropriate YAML file, `mvi/profile/796104437.yml`
    
<img width="902" alt="Screenshot 2023-08-25 at 1 33 01 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/80a7920a-2842-4f10-8601-9c40e446b510">

2. Now we can edit the users response stub.  This is a big XML blob within our YAML file.  This stubed response is used to populate the User object, so changes made here will be visible.  For example, if we wanted to change our users birth date, we would find the appropriate XML field

<img width="486" alt="Screenshot 2023-08-25 at 1 33 48 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/6298aabb-2f2d-4a8a-bda3-d7ee0f0c6b5f">

Notice that our value is called `birthTime` and the format is `YYYYMMDD`.  Much of the data is obfuscated in this way, and unfortunatly there is no standard documentation for these data tag relationships.  You will have to use a bit of common sense and trial and error to find the values you want.

Another such example would be if you wanted to edit a birls_id, you might reasonably search the code for the string `birls`.  However, as you can see here the correct string to look for would be `BRLS`

<img width="414" alt="Screenshot 2023-08-25 at 1 35 01 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/baf07663-184d-43c1-a856-cc1a85ee743d">

Typically user values like birthday, name, address, etc, will have their own `<xml type value>`, where as IDs and forign keys will be inside an `<id...` tag, with their values separated from their keys by `^` carrots, like so

```
<id extension="BIRL-value^200BRLS^USVBA^A" root=.../>
```


### Step 2. Clear the User cache
1. At this point we know how to modify user data.  The next step is to get our changes to show up in the application.  If you made changes to the YAML file and went straight to your application, you would not see any changes.  This is because we build our User objects in real time (at login). They are cached object meaning we will need to break the user data cache in order to see the changes.

First, login using the `mocked-auth` endpoint: `http://localhost:3001/sign-in/mocked-auth`

<img width="1012" alt="Screenshot 2023-08-25 at 11 53 03 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/40918efb-7d08-4044-82cf-fb6ebfcb2091">

**NOTE: to work with mocked users we must login using mocked-auth.  The normal userfacing login flow will not work.**

Once you see a spinner and your address bar reads `...?postLogin=true` you are logged in and can go to the next step to reload your user and see your changes:

<img width="882" alt="Screenshot 2023-08-25 at 11 53 11 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/1df11ab5-5a01-4551-ba7d-7e3ab7e640d0">

Now open a redis command line by running `redis-cli`.  In the Redis command line, run `KEYS *mpi-profile-response*`.  This is the key for all cached users.  We will break this entire cache, since it will (probably) only have one user in it anyway, the one we are logged in as. The `KEYS` query should return something like this `mpi-profile-response:123123123`.  This full string is our user cache key.  Now we clear the cache by running `DEL mpi-profile-reponse:<whatever was returned above>`.  This whole process looks like this:

<img width="465" alt="Screenshot 2023-08-25 at 1 40 22 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/80a2ae17-5193-4b2d-83b7-7a1a7017c8a8">

### Step 3. Load the user in a Rails Console to confirm changes and interact

There are a few steps to doing this.
- Find the `accountUuid` from the browser
- Find the User associated with this account id.

#### Find the userAccount.id from the browser
1. Login as your user
2.  Navigate to a page that will load your user data, such as [the 526 form](http://localhost:3001/disability/file-disability-claim-form-21-526ez/start)
3. Open your developer tools (inspect page source or CMD+Shift+C). Open the Redux tab
<img width="1477" alt="Screenshot 2023-08-25 at 1 41 26 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/fa6177cc-e42c-4a44-b167-82fceb6dc576">

4. select the 'STATE' tab on the right pannel and an event on the left pannel
<img width="305" alt="Screenshot 2023-08-25 at 1 41 59 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/64c76172-119b-4f97-82ca-83cb64a3fc1b">

5. dropdown the user -> profile carrots in the STATE object and get the value for userAccount.id:
<img width="574" alt="Screenshot 2023-08-25 at 1 43 01 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/ab6bf382-0159-44a3-aadd-22d398f70a69">

#### Load the account in a rails console
1. start a rails console in your application directory
2. run the following un `user = User.find(userAccount.id)`.  The resulting object is your user!

Here you should be able to call methods on your user or view values that reflect your previous changes.
